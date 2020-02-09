import { EntityManager } from "../EntityManager";
import { knex, numberOfQueries, resetQueryCount } from "../setupDbTests";
import { Book } from "../../integration/Book";
import { Author } from "../../integration/Author";

describe("ManyToOneReference", () => {
  it("can load a foreign key", async () => {
    await knex.insert({ first_name: "f" }).into("authors");
    await knex.insert({ title: "t", author_id: 1 }).into("books");

    const em = new EntityManager(knex);
    const book = await em.load(Book, "1");
    const author = await book.author.load();
    expect(author.firstName).toEqual("f");
  });

  it("can save a foreign key", async () => {
    const em = new EntityManager(knex);
    const author = new Author(em, { firstName: "a1" });
    const book = new Book(em, { title: "t1" });
    book.author.set(author);
    await em.flush();

    const rows = await knex.select("*").from("books");
    expect(rows[0].author_id).toEqual(1);
  });

  it("batch loads foreign keys", async () => {
    await knex.insert({ first_name: "a1" }).into("authors");
    await knex.insert({ first_name: "a2" }).into("authors");
    await knex.insert({ title: "t1", author_id: 1 }).into("books");
    await knex.insert({ title: "t2", author_id: 2 }).into("books");

    const em = new EntityManager(knex);
    const [b1, b2] = await Promise.all([em.load(Book, "1"), em.load(Book, "2")]);
    resetQueryCount();
    const [a1, a2] = await Promise.all([b1.author.load(), b2.author.load()]);
    expect(a1.firstName).toEqual("a1");
    expect(a2.firstName).toEqual("a2");
    expect(numberOfQueries).toEqual(1);
  });

  it("can save changes to a foreign key", async () => {
    await knex.insert({ first_name: "a1" }).into("authors");
    await knex.insert({ first_name: "a2" }).into("authors");
    await knex.insert({ title: "b1", author_id: 1 }).into("books");

    const em = new EntityManager(knex);
    const a2 = await em.load(Author, "2");
    const b1 = await em.load(Book, "1");
    b1.author.set(a2);
    await em.flush();

    const rows = await knex.select("*").from("books");
    expect(rows[0].author_id).toEqual(2);
  });
});