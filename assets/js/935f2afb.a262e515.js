"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"category","label":"Getting Started","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Quick Tour","href":"/docs/getting-started/tour","docId":"getting-started/tour"},{"type":"link","label":"Installation","href":"/docs/getting-started","docId":"getting-started/installation"},{"type":"link","label":"Schema Assumptions","href":"/docs/getting-started/schema-assumptions","docId":"getting-started/schema-assumptions"},{"type":"link","label":"Configuration","href":"/docs/configuration","docId":"getting-started/configuration"}]},{"type":"category","label":"Goals","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Overview","href":"/docs/goals","docId":"goals/overview"},{"type":"link","label":"Code Generation","href":"/docs/goals/code-generation","docId":"goals/code-generation"},{"type":"link","label":"Avoiding N+1s","href":"/docs/goals/avoiding-n-plus-1s","docId":"goals/avoiding-n-plus-1s"},{"type":"link","label":"Type-Safe Relations","href":"/docs/goals/type-safe-relations","docId":"goals/type-safe-relations"},{"type":"link","label":"Great Tests","href":"/docs/goals/great-tests","docId":"goals/great-tests"}]},{"type":"category","label":"Domain Modeling","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Fields","href":"/docs/modeling/fields","docId":"modeling/fields"},{"type":"link","label":"Relations","href":"/docs/modeling/relations","docId":"modeling/relations"},{"type":"link","label":"Validation Rules","href":"/docs/modeling/validation-rules","docId":"modeling/validation-rules"},{"type":"link","label":"Lifecycle Hooks","href":"/docs/modeling/lifecycle-hooks","docId":"modeling/lifecycle-hooks"},{"type":"link","label":"Enums","href":"/docs/modeling/enum-tables","docId":"modeling/enum-tables"},{"type":"link","label":"Derived Fields","href":"/docs/modeling/derived-fields","docId":"modeling/derived-fields"},{"type":"link","label":"JSONB Fields","href":"/docs/modeling/jsonb-fields","docId":"modeling/jsonb-fields"}]},{"type":"category","label":"Features","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Entity Manager","href":"/docs/features/entity-manager","docId":"features/entity-manager"},{"type":"link","label":"Loading Entities","href":"/docs/features/loading-entities","docId":"features/loading-entities"},{"type":"link","label":"Find Queries","href":"/docs/features/queries-find","docId":"features/queries-find"},{"type":"link","label":"Changed Fields","href":"/docs/features/changed-fields","docId":"features/changed-fields"},{"type":"link","label":"Cascading Deletes","href":"/docs/features/cascade-deletes","docId":"features/cascade-deletes"},{"type":"link","label":"Partial Update APIs","href":"/docs/features/partial-update-apis","docId":"features/partial-update-apis"}]},{"type":"category","label":"Advanced Features","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Unit of Work","href":"/docs/advanced/unit-of-work","docId":"advanced/unit-of-work"},{"type":"link","label":"Tagged Ids","href":"/docs/advanced/tagged-ids","docId":"advanced/tagged-ids"},{"type":"link","label":"Soft Deletes","href":"/docs/advanced/soft-deletes","docId":"advanced/soft-deletes"},{"type":"link","label":"Entity Cloning","href":"/docs/advanced/cloning","docId":"advanced/cloning"},{"type":"link","label":"Large Collections","href":"/docs/advanced/large-collections","docId":"advanced/large-collections"},{"type":"link","label":"Optimistic Locking","href":"/docs/advanced/optimistic-locking","docId":"advanced/optimistic-locking"},{"type":"link","label":"Lens Traversal","href":"/docs/advanced/lenses","docId":"advanced/lenses"},{"type":"link","label":"Class Table Inheritance","href":"/docs/advanced/class-table-inheritance","docId":"advanced/class-table-inheritance"},{"type":"link","label":"graphql-filters","href":"/docs/advanced/graphql-filters","docId":"advanced/graphql-filters"}]},{"type":"link","label":"FAQ","href":"/docs/faq","docId":"faq"},{"type":"category","label":"Testing","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Test Factories","href":"/docs/testing/test-factories","docId":"testing/test-factories"},{"type":"link","label":"Fast Database Resets","href":"/docs/testing/fast-database-resets","docId":"testing/fast-database-resets"},{"type":"link","label":"Custom Jest Matcher","href":"/docs/testing/entity-matcher","docId":"testing/entity-matcher"},{"type":"link","label":"Test Utils","href":"/docs/testing/test-utils","docId":"testing/test-utils"}]}]},"docs":{"advanced/class-table-inheritance":{"id":"advanced/class-table-inheritance","title":"Class Table Inheritance","description":"Joist supports Class Table Inheritance, which allows inheritance/subtyping of entities (like class Dog extends Animal), by automatically mapping single/logical polymorphic entities across separate per-subtype/physical SQL tables.","sidebar":"tutorialSidebar"},"advanced/cloning":{"id":"advanced/cloning","title":"Entity Cloning","description":"Joist supports cloning entities, to easily implement feature requests like \\"duplicate this author\\", or \\"duplicate this author and all of their books\\".","sidebar":"tutorialSidebar"},"advanced/graphql-filters":{"id":"advanced/graphql-filters","title":"graphql-filters","description":"GraphQL-Compatible Filters","sidebar":"tutorialSidebar"},"advanced/large-collections":{"id":"advanced/large-collections","title":"Large Collections","description":"In Joist, large collections are one-to-many collections (like author.books) that would fundamentally load too much data (like a single author having 100k books), such that we want to prevent code from accidentally loading the collection by mistake.","sidebar":"tutorialSidebar"},"advanced/lenses":{"id":"advanced/lenses","title":"Lens Traversal","description":"Lenses provide quick navigation the object graph, for example to navigate from an Author a","sidebar":"tutorialSidebar"},"advanced/optimistic-locking":{"id":"advanced/optimistic-locking","title":"Optimistic Locking","description":"Joist implements optimistic locking to avoid conflicting/dropped UPDATEs.","sidebar":"tutorialSidebar"},"advanced/soft-deletes":{"id":"advanced/soft-deletes","title":"Soft Deletes","description":"Joist has built-in support for the soft-delete pattern, of marking rows with a deleted_at column and then \\"mostly ignoring them\\" within the application.","sidebar":"tutorialSidebar"},"advanced/tagged-ids":{"id":"advanced/tagged-ids","title":"Tagged Ids","description":"Joist automatically \\"tags\\" entity ids, by prefixing them with a per-entity identifier.","sidebar":"tutorialSidebar"},"advanced/unit-of-work":{"id":"advanced/unit-of-work","title":"Unit of Work","description":"Joist\'s EntityManager acts as a Unit of Work, which allows it to provide several features:","sidebar":"tutorialSidebar"},"faq":{"id":"faq","title":"FAQ","description":"Does Joist have any gotchas?","sidebar":"tutorialSidebar"},"features/cascade-deletes":{"id":"features/cascade-deletes","title":"Cascading Deletes","description":"You can have a parent cascade delete its children by doing:","sidebar":"tutorialSidebar"},"features/changed-fields":{"id":"features/changed-fields","title":"Changed Fields","description":"Each entity tracks which of its fields has changed within the current unit of work/EntityManager:","sidebar":"tutorialSidebar"},"features/entity-manager":{"id":"features/entity-manager","title":"Entity Manager","description":"Joist\'s EntityManager is how entities are loaded from & saved to the database.","sidebar":"tutorialSidebar"},"features/loading-entities":{"id":"features/loading-entities","title":"Loading Entities","description":"Joist has several ways to load entities, and which to use depends on how much control you need over the query.","sidebar":"tutorialSidebar"},"features/partial-update-apis":{"id":"features/partial-update-apis","title":"Partial Update APIs","description":"Joist has built-in support for building \\"partial update\\"-style APIs on top of your domain model.","sidebar":"tutorialSidebar"},"features/queries-find":{"id":"features/queries-find","title":"Find Queries","description":"Find queries are Joist\'s minimalist syntax for building SELECT queries that load entities.","sidebar":"tutorialSidebar"},"getting-started/configuration":{"id":"getting-started/configuration","title":"Configuration","description":"Joist prefers convention over configuration, but it still has some knobs to control its behavior.","sidebar":"tutorialSidebar"},"getting-started/installation":{"id":"getting-started/installation","title":"Installation","description":"Installing Joist in your project has four main steps:","sidebar":"tutorialSidebar"},"getting-started/schema-assumptions":{"id":"getting-started/schema-assumptions","title":"Schema Assumptions","description":"Joist makes a few assumptions about your database schema, described below, which basically assume you have a modern/pleasant database schema that you want directly mapped to your TypeScript domain model.","sidebar":"tutorialSidebar"},"getting-started/tour":{"id":"getting-started/tour","title":"Quick Tour","description":"This page gives a quick overview/scan of \\"what using Joist looks like\\". Joist\'s docs dive into these features in more detail, and see Installation for a true \\"getting started\\".","sidebar":"tutorialSidebar"},"goals/avoiding-n-plus-1s":{"id":"goals/avoiding-n-plus-1s","title":"Avoiding N+1s","description":"Joist is built on top of Facebook\'s dataloader library, which avoids N+1s in a fundamental, systematic way that almost always \\"just works\\".","sidebar":"tutorialSidebar"},"goals/code-generation":{"id":"goals/code-generation","title":"Code Generation","description":"One of the primary ways Joist achieves ActiveRecord-level productivity is by generating the boilerplate part of domain models from the database schema.","sidebar":"tutorialSidebar"},"goals/great-tests":{"id":"goals/great-tests","title":"Great Tests","description":"Joist focuses not just on great production code & business logic, but also on enabling great test coverage of your business logic, by facilitating tests that are:","sidebar":"tutorialSidebar"},"goals/overview":{"id":"goals/overview","title":"Goals","description":"Joist\'s mission is to bring ActiveRecord-level productivity to TypeScript/Node projects.","sidebar":"tutorialSidebar"},"goals/type-safe-relations":{"id":"goals/type-safe-relations","title":"Type-Safe Relations","description":"Joist models all relations as async-by-default (i.e. you must access them via an await-d .load() call).","sidebar":"tutorialSidebar"},"modeling/derived-fields":{"id":"modeling/derived-fields","title":"Derived Fields","description":"Derived fields are field values (i.e. primitives) that can be calculated from other data within your domain model.","sidebar":"tutorialSidebar"},"modeling/enum-tables":{"id":"modeling/enum-tables","title":"Enums","description":"Joist supports enum tables for modeling fields that can be set to a fixed number of values (i.e. a state field that can be OPEN or CLOSED, or a field status field that can be ACTIVE, DRAFT, PENDING, etc.)","sidebar":"tutorialSidebar"},"modeling/fields":{"id":"modeling/fields","title":"Fields","description":"Fields are the primitive columns in your domain model, so all of the (non-foreign key) int, varchar, datetime, etc. columns.","sidebar":"tutorialSidebar"},"modeling/jsonb-fields":{"id":"modeling/jsonb-fields","title":"JSONB Fields","description":"Postgres has rich support for storing JSON, which Joist supports.","sidebar":"tutorialSidebar"},"modeling/lifecycle-hooks":{"id":"modeling/lifecycle-hooks","title":"Lifecycle Hooks","description":"Joist supports hooks that can run business logic at varies stages in an entity\'s lifecycle, for example to implement business logic like \\"when an Author entity is updated, always do x/y/z\\".","sidebar":"tutorialSidebar"},"modeling/relations":{"id":"modeling/relations","title":"Relations","description":"Relations are relationships between entities in your domain model, for example an Author\'s list of Books or an Author\'s current Publisher.","sidebar":"tutorialSidebar"},"modeling/validation-rules":{"id":"modeling/validation-rules","title":"Validation Rules","description":"Entities can have validation rules that are run during EntityManager.flush():","sidebar":"tutorialSidebar"},"testing/entity-matcher":{"id":"testing/entity-matcher","title":"Custom Jest Matcher","description":"Joist provides a toMatchEntity matcher for more pleasant assertions in Jest.","sidebar":"tutorialSidebar"},"testing/fast-database-resets":{"id":"testing/fast-database-resets","title":"Fast Database Resets","description":"To reset the database between each unit test, Joist\'s joist-codegen command generates a flush_database stored procedure  that will delete all rows/reset the sequence ids:","sidebar":"tutorialSidebar"},"testing/test-factories":{"id":"testing/test-factories","title":"Test Factories","description":"Joist generates customizable factories for easily creating test data. The idea is very similar to generic tools like Fishery, but with deep/native integration with Joist.","sidebar":"tutorialSidebar"},"testing/test-utils":{"id":"testing/test-utils","title":"Test Utils","description":"run Helper Method","sidebar":"tutorialSidebar"}}}')}}]);