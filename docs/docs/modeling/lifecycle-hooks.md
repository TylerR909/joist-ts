---
title: Lifecycle Hooks
sidebar_position: 4
---

Joist supports hooks that can run business logic at varies stages in an entity's lifecycle, for example to implement business logic like "when an author is updated, always do x/y/z".

### Setup

All hooks are set up by the entity's `config` API:

```typescript
import { authorConfig as config } from "./entities";

export class Author extends AuthorCodegen {}

// Create a draft book for all authors
config.beforeCreate("books", (a, { em }) => {
  if (a.books.get.length === 0) {
    em.create(Book, { author: a, status: BookStatus.Draft });
  }
})
```

:::info

At first, it seems odd that Joist's hooks are not methods on the class itself, as this would be a more traditional place for ORM-driven business logic.

However, being added via the `config` API has a few benefits:

1. The hook methods all take load hints, i.e. `"books"` in the above `beforeCreate` example, which makes the `a` param typed as `Loaded<Author, "books">` instead of `Author`.

   This allows the hook's business logic to be written with as few `await`s as possible, such that ideally the lambda itself can be synchronous (although you can make it `async` if necessary).

   If `beforeCreate` was written as a method, then an additional local variable (similar to `a`) would need to be created, as `this` is not aware of the hook's load hint.

2. It's easier to keep business logic small & decoupled, because if you have multiple operations to perform on `beforeCreate`, you can have two entirely separate hooks, each with separate load hints and their own lambdas.

   If `beforeCreate` was a single `Author.beforeCreate` method, then its implementation would just get bigger and more complex as it handles additional business requirements.

3. It's trivial to reuse hook logic across entities without relying on multiple inheritance.

    For example, we could have a method like `addSoftDeleteHooks(config)` that, for any given entity's config, adds some shared business logic to the entity.

:::

### Available Hooks

Joist supports the following hooks, listed in the order that they are fired:

* `beforeCreate` fired when an entity is created / `INSERT`-d for the first time
* `beforeUpdate` fired when an entity is updated / `UPDATE`-d
* `beforeFlush` fired when an entity is either created or updated (but not deleted)
* `beforeDelete` fired when an entity is deleted / `DELETE`-d
* `afterValidation` fired after an entity is created or updated, and all validation rules have passed
* `afterCommit` fired when an entity is created, or updated, or deleted and the transaction has committed

### Allowed Behavior

Hooks are allowed to create/update/delete other entities.

For example, a new `Author` can `em.create` a new `Book` in an `Author.beforeCreate` hook.  Or a deleted `Author` could `em.delete` its `Book`s in an `Author.beforeDelete` hook.

Any entities that are created/updated/deleted by a hook will themselves have their appropriate hooks ran, although only if those entity's hooks have not already been run (to avoid cycles of a book-touches-author/author-touches-book infinitely recursing).

#### Wire Calls

Making RPC calls to 3rd party systems can be problematic, and so we recommend:

* Do not make RPC calls from any non-`afterCommit` hook.

  It is very likely that hooks will run but then your `em.flush` later fails due to unrelated validation rules, at which point your transaction/changes won't be committed and you've likely made an unnecessary/incorrect wire call.

  (Any non-`afterCommit` hook also will not have ids assigned yet for newly-created entities, and often these ids are necessary for communicating with the 3rd party system.)

* Only pragmatically make wire calls in the `afterCommit` hook.

  While `afterCommit` is the "safest" place to make a wire call, because it's only called after the transaction has been committed, there is still a chance that either a) `em.flush` commits but the machine crashes before running `afterCommit`, or b) your `afterCommit` fails but now will not retry.

Because of these wrinkles, our general recommendation is to use a [job drain](https://brandur.org/job-drain) pattern, where hooks only create "intentions" of work to be done (background jobs), this intention is atomically saved to the database in the same transaction as your business logic (for an example a `jobs` table), and then you have a separate background job runner that handles invoking (and retrying if necessary) the intended action of calling/syncing with the 3rd party system.

### Hooks vs. Validation Rules

Hooks run before validation rules, and are allowed to mutate entities that may currently be invalid.

Valiation rules run after hooks, and are not allowed to mutate entities: they must be side effect free.

For example, you could have a validation rule of "Author must have at least one book", and a hook that "creates a default book for new authors", and when you do `em.create(Author)` without any books, then first the hook would run and create a single book, such that when the validation rule runs, it passes.

Similarly, hooks can set required fields before the missing values trigger validation rules.

Validation rules are only ran once per `em.flush`, and only after all hooks, and all transitively-ran hooks, have finished.

