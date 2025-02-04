import { BigIntSerde, configureMetadata, CustomSerdeAdapter, DecimalToNumberSerde, Entity as Entity2, EntityManager as EntityManager1, EntityMetadata, EnumArrayFieldSerde, EnumFieldSerde, JsonSerde, KeySerde, PolymorphicKeySerde, PrimitiveSerde, SuperstructSerde, ZodSerde } from "joist-orm";
import { Context } from "src/context";
import { address, AddressSchema, PasswordValueSerde, quotes } from "src/entities/types";
import {
  AdvanceStatuses,
  Author,
  authorConfig,
  AuthorSchedule,
  authorScheduleConfig,
  AuthorStat,
  authorStatConfig,
  Book,
  BookAdvance,
  bookAdvanceConfig,
  bookConfig,
  BookReview,
  bookReviewConfig,
  Colors,
  Comment,
  commentConfig,
  Critic,
  CriticColumn,
  criticColumnConfig,
  criticConfig,
  Image,
  imageConfig,
  ImageTypes,
  LargePublisher,
  largePublisherConfig,
  newAuthor,
  newAuthorSchedule,
  newAuthorStat,
  newBook,
  newBookAdvance,
  newBookReview,
  newComment,
  newCritic,
  newCriticColumn,
  newImage,
  newLargePublisher,
  newPublisher,
  newPublisherGroup,
  newSmallPublisher,
  newTag,
  newUser,
  Publisher,
  publisherConfig,
  PublisherGroup,
  publisherGroupConfig,
  PublisherSizes,
  PublisherTypes,
  SmallPublisher,
  smallPublisherConfig,
  Tag,
  tagConfig,
  User,
  userConfig,
} from "./entities";

export class EntityManager extends EntityManager1<Context, Entity> {}

export interface Entity extends Entity2 {
  id: string;
  em: EntityManager;
}

export const authorMeta: EntityMetadata<Author> = {
  cstr: Author,
  type: "Author",
  baseType: undefined,
  idType: "tagged-string",
  idDbType: "int",
  tagName: "a",
  tableName: "authors",
  fields: {
    "id": { kind: "primaryKey", fieldName: "id", fieldIdName: undefined, required: true, serde: new KeySerde("a", "id", "id", "int"), immutable: true },
    "firstName": { kind: "primitive", fieldName: "firstName", fieldIdName: undefined, derived: false, required: true, protected: false, type: "string", serde: new PrimitiveSerde("firstName", "first_name", "character varying"), immutable: false },
    "lastName": { kind: "primitive", fieldName: "lastName", fieldIdName: undefined, derived: false, required: false, protected: false, type: "string", serde: new PrimitiveSerde("lastName", "last_name", "character varying"), immutable: false },
    "ssn": { kind: "primitive", fieldName: "ssn", fieldIdName: undefined, derived: false, required: false, protected: false, type: "string", serde: new PrimitiveSerde("ssn", "ssn", "character varying"), immutable: false },
    "initials": { kind: "primitive", fieldName: "initials", fieldIdName: undefined, derived: "sync", required: false, protected: false, type: "string", serde: new PrimitiveSerde("initials", "initials", "character varying"), immutable: false },
    "numberOfBooks": { kind: "primitive", fieldName: "numberOfBooks", fieldIdName: undefined, derived: "async", required: false, protected: false, type: "number", serde: new PrimitiveSerde("numberOfBooks", "number_of_books", "int"), immutable: false },
    "bookComments": { kind: "primitive", fieldName: "bookComments", fieldIdName: undefined, derived: "async", required: false, protected: false, type: "string", serde: new PrimitiveSerde("bookComments", "book_comments", "text"), immutable: false },
    "isPopular": { kind: "primitive", fieldName: "isPopular", fieldIdName: undefined, derived: false, required: false, protected: false, type: "boolean", serde: new PrimitiveSerde("isPopular", "is_popular", "boolean"), immutable: false },
    "age": { kind: "primitive", fieldName: "age", fieldIdName: undefined, derived: false, required: false, protected: false, type: "number", serde: new PrimitiveSerde("age", "age", "int"), immutable: false },
    "graduated": { kind: "primitive", fieldName: "graduated", fieldIdName: undefined, derived: false, required: false, protected: false, type: "Date", serde: new PrimitiveSerde("graduated", "graduated", "date"), immutable: false },
    "nickNames": { kind: "primitive", fieldName: "nickNames", fieldIdName: undefined, derived: false, required: false, protected: false, type: "string", serde: new PrimitiveSerde("nickNames", "nick_names", "character varying[]", true), immutable: false },
    "wasEverPopular": { kind: "primitive", fieldName: "wasEverPopular", fieldIdName: undefined, derived: false, required: false, protected: true, type: "boolean", serde: new PrimitiveSerde("wasEverPopular", "was_ever_popular", "boolean"), immutable: false },
    "address": { kind: "primitive", fieldName: "address", fieldIdName: undefined, derived: false, required: false, protected: false, type: "Object", serde: new SuperstructSerde("address", "address", address), immutable: false },
    "businessAddress": { kind: "primitive", fieldName: "businessAddress", fieldIdName: undefined, derived: false, required: false, protected: false, type: "Object", serde: new ZodSerde("businessAddress", "business_address", AddressSchema), immutable: false },
    "quotes": { kind: "primitive", fieldName: "quotes", fieldIdName: undefined, derived: false, required: false, protected: false, type: "Object", serde: new SuperstructSerde("quotes", "quotes", quotes), immutable: false },
    "numberOfAtoms": { kind: "primitive", fieldName: "numberOfAtoms", fieldIdName: undefined, derived: false, required: false, protected: false, type: "bigint", serde: new BigIntSerde("numberOfAtoms", "number_of_atoms"), immutable: false },
    "deletedAt": { kind: "primitive", fieldName: "deletedAt", fieldIdName: undefined, derived: false, required: false, protected: false, type: "Date", serde: new PrimitiveSerde("deletedAt", "deleted_at", "timestamp with time zone"), immutable: false },
    "numberOfPublicReviews": { kind: "primitive", fieldName: "numberOfPublicReviews", fieldIdName: undefined, derived: "async", required: false, protected: false, type: "number", serde: new PrimitiveSerde("numberOfPublicReviews", "number_of_public_reviews", "int"), immutable: false },
    "numberOfPublicReviews2": { kind: "primitive", fieldName: "numberOfPublicReviews2", fieldIdName: undefined, derived: "async", required: false, protected: false, type: "number", serde: new PrimitiveSerde("numberOfPublicReviews2", "numberOfPublicReviews2", "int"), immutable: false },
    "tagsOfAllBooks": { kind: "primitive", fieldName: "tagsOfAllBooks", fieldIdName: undefined, derived: "async", required: false, protected: false, type: "string", serde: new PrimitiveSerde("tagsOfAllBooks", "tags_of_all_books", "character varying"), immutable: false },
    "createdAt": { kind: "primitive", fieldName: "createdAt", fieldIdName: undefined, derived: "orm", required: false, protected: false, type: "Date", serde: new PrimitiveSerde("createdAt", "created_at", "timestamp with time zone"), immutable: false },
    "updatedAt": { kind: "primitive", fieldName: "updatedAt", fieldIdName: undefined, derived: "orm", required: false, protected: false, type: "Date", serde: new PrimitiveSerde("updatedAt", "updated_at", "timestamp with time zone"), immutable: false },
    "favoriteShape": { kind: "primitive", fieldName: "favoriteShape", fieldIdName: undefined, derived: false, required: false, protected: false, type: "string", serde: new PrimitiveSerde("favoriteShape", "favorite_shape", "favorite_shape"), immutable: false },
    "favoriteColors": { kind: "enum", fieldName: "favoriteColors", fieldIdName: undefined, required: false, enumDetailType: Colors, serde: new EnumArrayFieldSerde("favoriteColors", "favorite_colors", Colors), immutable: false },
    "mentor": { kind: "m2o", fieldName: "mentor", fieldIdName: "mentorId", derived: false, required: false, otherMetadata: () => authorMeta, otherFieldName: "authors", serde: new KeySerde("a", "mentor", "mentor_id", "int"), immutable: false },
    "currentDraftBook": { kind: "m2o", fieldName: "currentDraftBook", fieldIdName: "currentDraftBookId", derived: false, required: false, otherMetadata: () => bookMeta, otherFieldName: "currentDraftAuthor", serde: new KeySerde("b", "currentDraftBook", "current_draft_book_id", "int"), immutable: false },
    "favoriteBook": { kind: "m2o", fieldName: "favoriteBook", fieldIdName: "favoriteBookId", derived: "async", required: false, otherMetadata: () => bookMeta, otherFieldName: "favoriteBookAuthors", serde: new KeySerde("b", "favoriteBook", "favorite_book_id", "int"), immutable: false },
    "publisher": { kind: "m2o", fieldName: "publisher", fieldIdName: "publisherId", derived: false, required: false, otherMetadata: () => publisherMeta, otherFieldName: "authors", serde: new KeySerde("p", "publisher", "publisher_id", "int"), immutable: false },
    "authors": { kind: "o2m", fieldName: "authors", fieldIdName: "authorIds", required: false, otherMetadata: () => authorMeta, otherFieldName: "mentor", serde: undefined, immutable: false },
    "schedules": { kind: "o2m", fieldName: "schedules", fieldIdName: "scheduleIds", required: false, otherMetadata: () => authorScheduleMeta, otherFieldName: "author", serde: undefined, immutable: false },
    "books": { kind: "o2m", fieldName: "books", fieldIdName: "bookIds", required: false, otherMetadata: () => bookMeta, otherFieldName: "author", serde: undefined, immutable: false },
    "comments": { kind: "o2m", fieldName: "comments", fieldIdName: "commentIds", required: false, otherMetadata: () => commentMeta, otherFieldName: "parent", serde: undefined, immutable: false },
    "tags": { kind: "m2m", fieldName: "tags", fieldIdName: "tagIds", required: false, otherMetadata: () => tagMeta, otherFieldName: "authors", serde: undefined, immutable: false, joinTableName: "authors_to_tags", columnNames: ["author_id", "tag_id"] },
    "image": { kind: "o2o", fieldName: "image", fieldIdName: "imageId", required: false, otherMetadata: () => imageMeta, otherFieldName: "author", serde: undefined, immutable: false },
    "userOneToOne": { kind: "o2o", fieldName: "userOneToOne", fieldIdName: "userOneToOneId", required: false, otherMetadata: () => userMeta, otherFieldName: "authorManyToOne", serde: undefined, immutable: false },
  },
  allFields: {},
  orderBy: undefined,
  timestampFields: { createdAt: "createdAt", updatedAt: "updatedAt", deletedAt: "deletedAt" },
  config: authorConfig,
  factory: newAuthor,
  baseTypes: [],
  subTypes: [],
};

(Author as any).metadata = authorMeta;

export const authorScheduleMeta: EntityMetadata<AuthorSchedule> = {
  cstr: AuthorSchedule,
  type: "AuthorSchedule",
  baseType: undefined,
  idType: "tagged-string",
  idDbType: "int",
  tagName: "authorSchedule",
  tableName: "author_schedules",
  fields: {
    "id": { kind: "primaryKey", fieldName: "id", fieldIdName: undefined, required: true, serde: new KeySerde("authorSchedule", "id", "id", "int"), immutable: true },
    "overview": { kind: "primitive", fieldName: "overview", fieldIdName: undefined, derived: false, required: false, protected: false, type: "string", serde: new PrimitiveSerde("overview", "overview", "text"), immutable: false },
    "createdAt": { kind: "primitive", fieldName: "createdAt", fieldIdName: undefined, derived: "orm", required: false, protected: false, type: "Date", serde: new PrimitiveSerde("createdAt", "created_at", "timestamp with time zone"), immutable: false },
    "updatedAt": { kind: "primitive", fieldName: "updatedAt", fieldIdName: undefined, derived: "orm", required: false, protected: false, type: "Date", serde: new PrimitiveSerde("updatedAt", "updated_at", "timestamp with time zone"), immutable: false },
    "author": { kind: "m2o", fieldName: "author", fieldIdName: "authorId", derived: false, required: true, otherMetadata: () => authorMeta, otherFieldName: "schedules", serde: new KeySerde("a", "author", "author_id", "int"), immutable: false },
  },
  allFields: {},
  orderBy: undefined,
  timestampFields: { createdAt: "createdAt", updatedAt: "updatedAt", deletedAt: undefined },
  config: authorScheduleConfig,
  factory: newAuthorSchedule,
  baseTypes: [],
  subTypes: [],
};

(AuthorSchedule as any).metadata = authorScheduleMeta;

export const authorStatMeta: EntityMetadata<AuthorStat> = {
  cstr: AuthorStat,
  type: "AuthorStat",
  baseType: undefined,
  idType: "tagged-string",
  idDbType: "int",
  tagName: "as",
  tableName: "author_stats",
  fields: {
    "id": { kind: "primaryKey", fieldName: "id", fieldIdName: undefined, required: true, serde: new KeySerde("as", "id", "id", "int"), immutable: true },
    "smallint": { kind: "primitive", fieldName: "smallint", fieldIdName: undefined, derived: false, required: true, protected: false, type: "number", serde: new PrimitiveSerde("smallint", "smallint", "smallint"), immutable: false },
    "integer": { kind: "primitive", fieldName: "integer", fieldIdName: undefined, derived: false, required: true, protected: false, type: "number", serde: new PrimitiveSerde("integer", "integer", "int"), immutable: false },
    "nullableInteger": { kind: "primitive", fieldName: "nullableInteger", fieldIdName: undefined, derived: false, required: false, protected: false, type: "number", serde: new PrimitiveSerde("nullableInteger", "nullable_integer", "int"), immutable: false },
    "bigint": { kind: "primitive", fieldName: "bigint", fieldIdName: undefined, derived: false, required: true, protected: false, type: "bigint", serde: new BigIntSerde("bigint", "bigint"), immutable: false },
    "decimal": { kind: "primitive", fieldName: "decimal", fieldIdName: undefined, derived: false, required: true, protected: false, type: "number", serde: new DecimalToNumberSerde("decimal", "decimal"), immutable: false },
    "real": { kind: "primitive", fieldName: "real", fieldIdName: undefined, derived: false, required: true, protected: false, type: "number", serde: new PrimitiveSerde("real", "real", "real"), immutable: false },
    "smallserial": { kind: "primitive", fieldName: "smallserial", fieldIdName: undefined, derived: false, required: true, protected: false, type: "number", serde: new PrimitiveSerde("smallserial", "smallserial", "smallint"), immutable: false },
    "serial": { kind: "primitive", fieldName: "serial", fieldIdName: undefined, derived: false, required: true, protected: false, type: "number", serde: new PrimitiveSerde("serial", "serial", "int"), immutable: false },
    "bigserial": { kind: "primitive", fieldName: "bigserial", fieldIdName: undefined, derived: false, required: true, protected: false, type: "bigint", serde: new BigIntSerde("bigserial", "bigserial"), immutable: false },
    "doublePrecision": { kind: "primitive", fieldName: "doublePrecision", fieldIdName: undefined, derived: false, required: true, protected: false, type: "number", serde: new PrimitiveSerde("doublePrecision", "double_precision", "double precision"), immutable: false },
    "nullableText": { kind: "primitive", fieldName: "nullableText", fieldIdName: undefined, derived: false, required: false, protected: false, type: "string", serde: new PrimitiveSerde("nullableText", "nullable_text", "text"), immutable: false },
    "json": { kind: "primitive", fieldName: "json", fieldIdName: undefined, derived: false, required: false, protected: false, type: "Object", serde: new JsonSerde("json", "json"), immutable: false },
    "createdAt": { kind: "primitive", fieldName: "createdAt", fieldIdName: undefined, derived: "orm", required: false, protected: false, type: "Date", serde: new PrimitiveSerde("createdAt", "created_at", "timestamp with time zone"), immutable: false },
    "updatedAt": { kind: "primitive", fieldName: "updatedAt", fieldIdName: undefined, derived: "orm", required: false, protected: false, type: "Date", serde: new PrimitiveSerde("updatedAt", "updated_at", "timestamp with time zone"), immutable: false },
  },
  allFields: {},
  orderBy: undefined,
  timestampFields: { createdAt: "createdAt", updatedAt: "updatedAt", deletedAt: undefined },
  config: authorStatConfig,
  factory: newAuthorStat,
  baseTypes: [],
  subTypes: [],
};

(AuthorStat as any).metadata = authorStatMeta;

export const bookMeta: EntityMetadata<Book> = {
  cstr: Book,
  type: "Book",
  baseType: undefined,
  idType: "tagged-string",
  idDbType: "int",
  tagName: "b",
  tableName: "books",
  fields: {
    "id": { kind: "primaryKey", fieldName: "id", fieldIdName: undefined, required: true, serde: new KeySerde("b", "id", "id", "int"), immutable: true },
    "title": { kind: "primitive", fieldName: "title", fieldIdName: undefined, derived: false, required: true, protected: false, type: "string", serde: new PrimitiveSerde("title", "title", "character varying"), immutable: false },
    "order": { kind: "primitive", fieldName: "order", fieldIdName: undefined, derived: false, required: true, protected: false, type: "number", serde: new PrimitiveSerde("order", "order", "int"), immutable: false },
    "deletedAt": { kind: "primitive", fieldName: "deletedAt", fieldIdName: undefined, derived: false, required: false, protected: false, type: "Date", serde: new PrimitiveSerde("deletedAt", "deleted_at", "timestamp with time zone"), immutable: false },
    "createdAt": { kind: "primitive", fieldName: "createdAt", fieldIdName: undefined, derived: "orm", required: false, protected: false, type: "Date", serde: new PrimitiveSerde("createdAt", "created_at", "timestamp with time zone"), immutable: false },
    "updatedAt": { kind: "primitive", fieldName: "updatedAt", fieldIdName: undefined, derived: "orm", required: false, protected: false, type: "Date", serde: new PrimitiveSerde("updatedAt", "updated_at", "timestamp with time zone"), immutable: false },
    "author": { kind: "m2o", fieldName: "author", fieldIdName: "authorId", derived: false, required: true, otherMetadata: () => authorMeta, otherFieldName: "books", serde: new KeySerde("a", "author", "author_id", "int"), immutable: false },
    "advances": { kind: "o2m", fieldName: "advances", fieldIdName: "advanceIds", required: false, otherMetadata: () => bookAdvanceMeta, otherFieldName: "book", serde: undefined, immutable: false },
    "reviews": { kind: "o2m", fieldName: "reviews", fieldIdName: "reviewIds", required: false, otherMetadata: () => bookReviewMeta, otherFieldName: "book", serde: undefined, immutable: false },
    "comments": { kind: "o2m", fieldName: "comments", fieldIdName: "commentIds", required: false, otherMetadata: () => commentMeta, otherFieldName: "parent", serde: undefined, immutable: false },
    "tags": { kind: "m2m", fieldName: "tags", fieldIdName: "tagIds", required: false, otherMetadata: () => tagMeta, otherFieldName: "books", serde: undefined, immutable: false, joinTableName: "books_to_tags", columnNames: ["book_id", "tag_id"] },
    "currentDraftAuthor": { kind: "o2o", fieldName: "currentDraftAuthor", fieldIdName: "currentDraftAuthorId", required: false, otherMetadata: () => authorMeta, otherFieldName: "currentDraftBook", serde: undefined, immutable: false },
    "image": { kind: "o2o", fieldName: "image", fieldIdName: "imageId", required: false, otherMetadata: () => imageMeta, otherFieldName: "book", serde: undefined, immutable: false },
  },
  allFields: {},
  orderBy: "title",
  timestampFields: { createdAt: "createdAt", updatedAt: "updatedAt", deletedAt: "deletedAt" },
  config: bookConfig,
  factory: newBook,
  baseTypes: [],
  subTypes: [],
};

(Book as any).metadata = bookMeta;

export const bookAdvanceMeta: EntityMetadata<BookAdvance> = {
  cstr: BookAdvance,
  type: "BookAdvance",
  baseType: undefined,
  idType: "tagged-string",
  idDbType: "int",
  tagName: "ba",
  tableName: "book_advances",
  fields: {
    "id": { kind: "primaryKey", fieldName: "id", fieldIdName: undefined, required: true, serde: new KeySerde("ba", "id", "id", "int"), immutable: true },
    "createdAt": { kind: "primitive", fieldName: "createdAt", fieldIdName: undefined, derived: "orm", required: false, protected: false, type: "Date", serde: new PrimitiveSerde("createdAt", "created_at", "timestamp with time zone"), immutable: false },
    "updatedAt": { kind: "primitive", fieldName: "updatedAt", fieldIdName: undefined, derived: "orm", required: false, protected: false, type: "Date", serde: new PrimitiveSerde("updatedAt", "updated_at", "timestamp with time zone"), immutable: false },
    "status": { kind: "enum", fieldName: "status", fieldIdName: undefined, required: true, enumDetailType: AdvanceStatuses, serde: new EnumFieldSerde("status", "status_id", AdvanceStatuses), immutable: false },
    "book": { kind: "m2o", fieldName: "book", fieldIdName: "bookId", derived: false, required: true, otherMetadata: () => bookMeta, otherFieldName: "advances", serde: new KeySerde("b", "book", "book_id", "int"), immutable: false },
    "publisher": { kind: "m2o", fieldName: "publisher", fieldIdName: "publisherId", derived: false, required: true, otherMetadata: () => publisherMeta, otherFieldName: "bookAdvances", serde: new KeySerde("p", "publisher", "publisher_id", "int"), immutable: false },
  },
  allFields: {},
  orderBy: undefined,
  timestampFields: { createdAt: "createdAt", updatedAt: "updatedAt", deletedAt: undefined },
  config: bookAdvanceConfig,
  factory: newBookAdvance,
  baseTypes: [],
  subTypes: [],
};

(BookAdvance as any).metadata = bookAdvanceMeta;

export const bookReviewMeta: EntityMetadata<BookReview> = {
  cstr: BookReview,
  type: "BookReview",
  baseType: undefined,
  idType: "tagged-string",
  idDbType: "int",
  tagName: "br",
  tableName: "book_reviews",
  fields: {
    "id": { kind: "primaryKey", fieldName: "id", fieldIdName: undefined, required: true, serde: new KeySerde("br", "id", "id", "int"), immutable: true },
    "rating": { kind: "primitive", fieldName: "rating", fieldIdName: undefined, derived: false, required: true, protected: false, type: "number", serde: new PrimitiveSerde("rating", "rating", "int"), immutable: false },
    "isPublic": { kind: "primitive", fieldName: "isPublic", fieldIdName: undefined, derived: "async", required: false, protected: false, type: "boolean", serde: new PrimitiveSerde("isPublic", "is_public", "boolean"), immutable: false },
    "isTest": { kind: "primitive", fieldName: "isTest", fieldIdName: undefined, derived: "async", required: false, protected: false, type: "boolean", serde: new PrimitiveSerde("isTest", "is_test", "boolean"), immutable: false },
    "createdAt": { kind: "primitive", fieldName: "createdAt", fieldIdName: undefined, derived: "orm", required: false, protected: false, type: "Date", serde: new PrimitiveSerde("createdAt", "created_at", "timestamp with time zone"), immutable: false },
    "updatedAt": { kind: "primitive", fieldName: "updatedAt", fieldIdName: undefined, derived: "orm", required: false, protected: false, type: "Date", serde: new PrimitiveSerde("updatedAt", "updated_at", "timestamp with time zone"), immutable: false },
    "book": { kind: "m2o", fieldName: "book", fieldIdName: "bookId", derived: false, required: true, otherMetadata: () => bookMeta, otherFieldName: "reviews", serde: new KeySerde("b", "book", "book_id", "int"), immutable: false },
    "comment": { kind: "o2o", fieldName: "comment", fieldIdName: "commentId", required: false, otherMetadata: () => commentMeta, otherFieldName: "parent", serde: undefined, immutable: false },
  },
  allFields: {},
  orderBy: undefined,
  timestampFields: { createdAt: "createdAt", updatedAt: "updatedAt", deletedAt: undefined },
  config: bookReviewConfig,
  factory: newBookReview,
  baseTypes: [],
  subTypes: [],
};

(BookReview as any).metadata = bookReviewMeta;

export const commentMeta: EntityMetadata<Comment> = {
  cstr: Comment,
  type: "Comment",
  baseType: undefined,
  idType: "tagged-string",
  idDbType: "int",
  tagName: "comment",
  tableName: "comments",
  fields: {
    "id": { kind: "primaryKey", fieldName: "id", fieldIdName: undefined, required: true, serde: new KeySerde("comment", "id", "id", "int"), immutable: true },
    "text": { kind: "primitive", fieldName: "text", fieldIdName: undefined, derived: false, required: false, protected: false, type: "string", serde: new PrimitiveSerde("text", "text", "text"), immutable: false },
    "createdAt": { kind: "primitive", fieldName: "createdAt", fieldIdName: undefined, derived: "orm", required: false, protected: false, type: "Date", serde: new PrimitiveSerde("createdAt", "created_at", "timestamp with time zone"), immutable: false },
    "updatedAt": { kind: "primitive", fieldName: "updatedAt", fieldIdName: undefined, derived: "orm", required: false, protected: false, type: "Date", serde: new PrimitiveSerde("updatedAt", "updated_at", "timestamp with time zone"), immutable: false },
    "user": { kind: "m2o", fieldName: "user", fieldIdName: "userId", derived: false, required: false, otherMetadata: () => userMeta, otherFieldName: "createdComments", serde: new KeySerde("u", "user", "user_id", "int"), immutable: false },
    "likedByUsers": { kind: "m2m", fieldName: "likedByUsers", fieldIdName: "likedByUserIds", required: false, otherMetadata: () => userMeta, otherFieldName: "likedComments", serde: undefined, immutable: false, joinTableName: "users_to_comments", columnNames: ["comment_id", "liked_by_user_id"] },
    "parent": {
      kind: "poly",
      fieldName: "parent",
      fieldIdName: "parentId",
      required: true,
      components: [{ otherMetadata: () => authorMeta, otherFieldName: "comments", columnName: "parent_author_id" }, { otherMetadata: () => bookMeta, otherFieldName: "comments", columnName: "parent_book_id" }, {
        otherMetadata: () => bookReviewMeta,
        otherFieldName: "comment",
        columnName: "parent_book_review_id",
      }, { otherMetadata: () => publisherMeta, otherFieldName: "comments", columnName: "parent_publisher_id" }],
      serde: new PolymorphicKeySerde(() => commentMeta, "parent"),
      immutable: false,
    },
  },
  allFields: {},
  orderBy: undefined,
  timestampFields: { createdAt: "createdAt", updatedAt: "updatedAt", deletedAt: undefined },
  config: commentConfig,
  factory: newComment,
  baseTypes: [],
  subTypes: [],
};

(Comment as any).metadata = commentMeta;

export const criticMeta: EntityMetadata<Critic> = {
  cstr: Critic,
  type: "Critic",
  baseType: undefined,
  idType: "tagged-string",
  idDbType: "int",
  tagName: "c",
  tableName: "critics",
  fields: {
    "id": { kind: "primaryKey", fieldName: "id", fieldIdName: undefined, required: true, serde: new KeySerde("c", "id", "id", "int"), immutable: true },
    "name": { kind: "primitive", fieldName: "name", fieldIdName: undefined, derived: false, required: true, protected: false, type: "string", serde: new PrimitiveSerde("name", "name", "character varying"), immutable: false },
    "createdAt": { kind: "primitive", fieldName: "createdAt", fieldIdName: undefined, derived: "orm", required: false, protected: false, type: "Date", serde: new PrimitiveSerde("createdAt", "created_at", "timestamp with time zone"), immutable: false },
    "updatedAt": { kind: "primitive", fieldName: "updatedAt", fieldIdName: undefined, derived: "orm", required: false, protected: false, type: "Date", serde: new PrimitiveSerde("updatedAt", "updated_at", "timestamp with time zone"), immutable: false },
    "favoriteLargePublisher": { kind: "m2o", fieldName: "favoriteLargePublisher", fieldIdName: "favoriteLargePublisherId", derived: false, required: false, otherMetadata: () => largePublisherMeta, otherFieldName: "critics", serde: new KeySerde("p", "favoriteLargePublisher", "favorite_large_publisher_id", "int"), immutable: false },
    "group": { kind: "m2o", fieldName: "group", fieldIdName: "groupId", derived: false, required: false, otherMetadata: () => publisherGroupMeta, otherFieldName: "critics", serde: new KeySerde("pg", "group", "group_id", "int"), immutable: false },
    "criticColumn": { kind: "o2o", fieldName: "criticColumn", fieldIdName: "criticColumnId", required: false, otherMetadata: () => criticColumnMeta, otherFieldName: "critic", serde: undefined, immutable: false },
  },
  allFields: {},
  orderBy: undefined,
  timestampFields: { createdAt: "createdAt", updatedAt: "updatedAt", deletedAt: undefined },
  config: criticConfig,
  factory: newCritic,
  baseTypes: [],
  subTypes: [],
};

(Critic as any).metadata = criticMeta;

export const criticColumnMeta: EntityMetadata<CriticColumn> = {
  cstr: CriticColumn,
  type: "CriticColumn",
  baseType: undefined,
  idType: "tagged-string",
  idDbType: "int",
  tagName: "cc",
  tableName: "critic_columns",
  fields: {
    "id": { kind: "primaryKey", fieldName: "id", fieldIdName: undefined, required: true, serde: new KeySerde("cc", "id", "id", "int"), immutable: true },
    "name": { kind: "primitive", fieldName: "name", fieldIdName: undefined, derived: false, required: true, protected: false, type: "string", serde: new PrimitiveSerde("name", "name", "character varying"), immutable: false },
    "createdAt": { kind: "primitive", fieldName: "createdAt", fieldIdName: undefined, derived: "orm", required: false, protected: false, type: "Date", serde: new PrimitiveSerde("createdAt", "created_at", "timestamp with time zone"), immutable: false },
    "updatedAt": { kind: "primitive", fieldName: "updatedAt", fieldIdName: undefined, derived: "orm", required: false, protected: false, type: "Date", serde: new PrimitiveSerde("updatedAt", "updated_at", "timestamp with time zone"), immutable: false },
    "critic": { kind: "m2o", fieldName: "critic", fieldIdName: "criticId", derived: false, required: true, otherMetadata: () => criticMeta, otherFieldName: "criticColumn", serde: new KeySerde("c", "critic", "critic_id", "int"), immutable: false },
  },
  allFields: {},
  orderBy: undefined,
  timestampFields: { createdAt: "createdAt", updatedAt: "updatedAt", deletedAt: undefined },
  config: criticColumnConfig,
  factory: newCriticColumn,
  baseTypes: [],
  subTypes: [],
};

(CriticColumn as any).metadata = criticColumnMeta;

export const imageMeta: EntityMetadata<Image> = {
  cstr: Image,
  type: "Image",
  baseType: undefined,
  idType: "tagged-string",
  idDbType: "int",
  tagName: "i",
  tableName: "images",
  fields: {
    "id": { kind: "primaryKey", fieldName: "id", fieldIdName: undefined, required: true, serde: new KeySerde("i", "id", "id", "int"), immutable: true },
    "fileName": { kind: "primitive", fieldName: "fileName", fieldIdName: undefined, derived: false, required: true, protected: false, type: "string", serde: new PrimitiveSerde("fileName", "file_name", "character varying"), immutable: false },
    "createdAt": { kind: "primitive", fieldName: "createdAt", fieldIdName: undefined, derived: "orm", required: false, protected: false, type: "Date", serde: new PrimitiveSerde("createdAt", "created_at", "timestamp with time zone"), immutable: false },
    "updatedAt": { kind: "primitive", fieldName: "updatedAt", fieldIdName: undefined, derived: "orm", required: false, protected: false, type: "Date", serde: new PrimitiveSerde("updatedAt", "updated_at", "timestamp with time zone"), immutable: false },
    "type": { kind: "enum", fieldName: "type", fieldIdName: undefined, required: true, enumDetailType: ImageTypes, serde: new EnumFieldSerde("type", "type_id", ImageTypes), immutable: false },
    "author": { kind: "m2o", fieldName: "author", fieldIdName: "authorId", derived: false, required: false, otherMetadata: () => authorMeta, otherFieldName: "image", serde: new KeySerde("a", "author", "author_id", "int"), immutable: false },
    "book": { kind: "m2o", fieldName: "book", fieldIdName: "bookId", derived: false, required: false, otherMetadata: () => bookMeta, otherFieldName: "image", serde: new KeySerde("b", "book", "book_id", "int"), immutable: false },
    "publisher": { kind: "m2o", fieldName: "publisher", fieldIdName: "publisherId", derived: false, required: false, otherMetadata: () => publisherMeta, otherFieldName: "images", serde: new KeySerde("p", "publisher", "publisher_id", "int"), immutable: false },
  },
  allFields: {},
  orderBy: undefined,
  timestampFields: { createdAt: "createdAt", updatedAt: "updatedAt", deletedAt: undefined },
  config: imageConfig,
  factory: newImage,
  baseTypes: [],
  subTypes: [],
};

(Image as any).metadata = imageMeta;

export const largePublisherMeta: EntityMetadata<LargePublisher> = {
  cstr: LargePublisher,
  type: "LargePublisher",
  baseType: "Publisher",
  idType: "tagged-string",
  idDbType: "int",
  tagName: "p",
  tableName: "large_publishers",
  fields: {
    "id": { kind: "primaryKey", fieldName: "id", fieldIdName: undefined, required: true, serde: new KeySerde("p", "id", "id", "int"), immutable: true },
    "country": { kind: "primitive", fieldName: "country", fieldIdName: undefined, derived: false, required: false, protected: false, type: "string", serde: new PrimitiveSerde("country", "country", "text"), immutable: false },
    "critics": { kind: "o2m", fieldName: "critics", fieldIdName: "criticIds", required: false, otherMetadata: () => criticMeta, otherFieldName: "favoriteLargePublisher", serde: undefined, immutable: false },
  },
  allFields: {},
  orderBy: undefined,
  timestampFields: { createdAt: undefined, updatedAt: undefined, deletedAt: undefined },
  config: largePublisherConfig,
  factory: newLargePublisher,
  baseTypes: [],
  subTypes: [],
};

(LargePublisher as any).metadata = largePublisherMeta;

export const publisherMeta: EntityMetadata<Publisher> = {
  cstr: Publisher,
  type: "Publisher",
  baseType: undefined,
  idType: "tagged-string",
  idDbType: "int",
  tagName: "p",
  tableName: "publishers",
  fields: {
    "id": { kind: "primaryKey", fieldName: "id", fieldIdName: undefined, required: true, serde: new KeySerde("p", "id", "id", "int"), immutable: true },
    "name": { kind: "primitive", fieldName: "name", fieldIdName: undefined, derived: false, required: true, protected: false, type: "string", serde: new PrimitiveSerde("name", "name", "character varying"), immutable: false },
    "latitude": { kind: "primitive", fieldName: "latitude", fieldIdName: undefined, derived: false, required: false, protected: false, type: "number", serde: new DecimalToNumberSerde("latitude", "latitude"), immutable: false },
    "longitude": { kind: "primitive", fieldName: "longitude", fieldIdName: undefined, derived: false, required: false, protected: false, type: "number", serde: new DecimalToNumberSerde("longitude", "longitude"), immutable: false },
    "hugeNumber": { kind: "primitive", fieldName: "hugeNumber", fieldIdName: undefined, derived: false, required: false, protected: false, type: "number", serde: new DecimalToNumberSerde("hugeNumber", "huge_number"), immutable: false },
    "createdAt": { kind: "primitive", fieldName: "createdAt", fieldIdName: undefined, derived: "orm", required: false, protected: false, type: "Date", serde: new PrimitiveSerde("createdAt", "created_at", "timestamp with time zone"), immutable: false },
    "updatedAt": { kind: "primitive", fieldName: "updatedAt", fieldIdName: undefined, derived: "orm", required: false, protected: false, type: "Date", serde: new PrimitiveSerde("updatedAt", "updated_at", "timestamp with time zone"), immutable: false },
    "size": { kind: "enum", fieldName: "size", fieldIdName: undefined, required: false, enumDetailType: PublisherSizes, serde: new EnumFieldSerde("size", "size_id", PublisherSizes), immutable: false },
    "type": { kind: "enum", fieldName: "type", fieldIdName: undefined, required: true, enumDetailType: PublisherTypes, serde: new EnumFieldSerde("type", "type_id", PublisherTypes), immutable: false },
    "group": { kind: "m2o", fieldName: "group", fieldIdName: "groupId", derived: false, required: false, otherMetadata: () => publisherGroupMeta, otherFieldName: "publishers", serde: new KeySerde("pg", "group", "group_id", "int"), immutable: false },
    "authors": { kind: "o2m", fieldName: "authors", fieldIdName: "authorIds", required: false, otherMetadata: () => authorMeta, otherFieldName: "publisher", serde: undefined, immutable: false },
    "bookAdvances": { kind: "o2m", fieldName: "bookAdvances", fieldIdName: "bookAdvanceIds", required: false, otherMetadata: () => bookAdvanceMeta, otherFieldName: "publisher", serde: undefined, immutable: false },
    "comments": { kind: "o2m", fieldName: "comments", fieldIdName: "commentIds", required: false, otherMetadata: () => commentMeta, otherFieldName: "parent", serde: undefined, immutable: false },
    "images": { kind: "o2m", fieldName: "images", fieldIdName: "imageIds", required: false, otherMetadata: () => imageMeta, otherFieldName: "publisher", serde: undefined, immutable: false },
    "tags": { kind: "m2m", fieldName: "tags", fieldIdName: "tagIds", required: false, otherMetadata: () => tagMeta, otherFieldName: "publishers", serde: undefined, immutable: false, joinTableName: "publishers_to_tags", columnNames: ["publisher_id", "tag_id"] },
  },
  allFields: {},
  orderBy: undefined,
  timestampFields: { createdAt: "createdAt", updatedAt: "updatedAt", deletedAt: undefined },
  config: publisherConfig,
  factory: newPublisher,
  baseTypes: [],
  subTypes: [],
};

(Publisher as any).metadata = publisherMeta;

export const publisherGroupMeta: EntityMetadata<PublisherGroup> = {
  cstr: PublisherGroup,
  type: "PublisherGroup",
  baseType: undefined,
  idType: "tagged-string",
  idDbType: "int",
  tagName: "pg",
  tableName: "publisher_groups",
  fields: {
    "id": { kind: "primaryKey", fieldName: "id", fieldIdName: undefined, required: true, serde: new KeySerde("pg", "id", "id", "int"), immutable: true },
    "name": { kind: "primitive", fieldName: "name", fieldIdName: undefined, derived: false, required: false, protected: false, type: "string", serde: new PrimitiveSerde("name", "name", "text"), immutable: false },
    "createdAt": { kind: "primitive", fieldName: "createdAt", fieldIdName: undefined, derived: "orm", required: false, protected: false, type: "Date", serde: new PrimitiveSerde("createdAt", "created_at", "timestamp with time zone"), immutable: false },
    "updatedAt": { kind: "primitive", fieldName: "updatedAt", fieldIdName: undefined, derived: "orm", required: false, protected: false, type: "Date", serde: new PrimitiveSerde("updatedAt", "updated_at", "timestamp with time zone"), immutable: false },
    "publishers": { kind: "o2m", fieldName: "publishers", fieldIdName: "publisherIds", required: false, otherMetadata: () => publisherMeta, otherFieldName: "group", serde: undefined, immutable: false },
    "critics": { kind: "lo2m", fieldName: "critics", fieldIdName: "criticIds", required: false, otherMetadata: () => criticMeta, otherFieldName: "group", serde: undefined, immutable: false },
  },
  allFields: {},
  orderBy: undefined,
  timestampFields: { createdAt: "createdAt", updatedAt: "updatedAt", deletedAt: undefined },
  config: publisherGroupConfig,
  factory: newPublisherGroup,
  baseTypes: [],
  subTypes: [],
};

(PublisherGroup as any).metadata = publisherGroupMeta;

export const smallPublisherMeta: EntityMetadata<SmallPublisher> = {
  cstr: SmallPublisher,
  type: "SmallPublisher",
  baseType: "Publisher",
  idType: "tagged-string",
  idDbType: "int",
  tagName: "p",
  tableName: "small_publishers",
  fields: {
    "id": { kind: "primaryKey", fieldName: "id", fieldIdName: undefined, required: true, serde: new KeySerde("p", "id", "id", "int"), immutable: true },
    "city": { kind: "primitive", fieldName: "city", fieldIdName: undefined, derived: false, required: true, protected: false, type: "string", serde: new PrimitiveSerde("city", "city", "text"), immutable: false },
    "allAuthorNames": { kind: "primitive", fieldName: "allAuthorNames", fieldIdName: undefined, derived: "async", required: false, protected: false, type: "string", serde: new PrimitiveSerde("allAuthorNames", "all_author_names", "text"), immutable: false },
  },
  allFields: {},
  orderBy: undefined,
  timestampFields: { createdAt: undefined, updatedAt: undefined, deletedAt: undefined },
  config: smallPublisherConfig,
  factory: newSmallPublisher,
  baseTypes: [],
  subTypes: [],
};

(SmallPublisher as any).metadata = smallPublisherMeta;

export const tagMeta: EntityMetadata<Tag> = {
  cstr: Tag,
  type: "Tag",
  baseType: undefined,
  idType: "tagged-string",
  idDbType: "int",
  tagName: "t",
  tableName: "tags",
  fields: {
    "id": { kind: "primaryKey", fieldName: "id", fieldIdName: undefined, required: true, serde: new KeySerde("t", "id", "id", "int"), immutable: true },
    "name": { kind: "primitive", fieldName: "name", fieldIdName: undefined, derived: false, required: true, protected: false, type: "string", serde: new PrimitiveSerde("name", "name", "character varying"), immutable: false },
    "createdAt": { kind: "primitive", fieldName: "createdAt", fieldIdName: undefined, derived: "orm", required: false, protected: false, type: "Date", serde: new PrimitiveSerde("createdAt", "created_at", "timestamp with time zone"), immutable: false },
    "updatedAt": { kind: "primitive", fieldName: "updatedAt", fieldIdName: undefined, derived: "orm", required: false, protected: false, type: "Date", serde: new PrimitiveSerde("updatedAt", "updated_at", "timestamp with time zone"), immutable: false },
    "books": { kind: "m2m", fieldName: "books", fieldIdName: "bookIds", required: false, otherMetadata: () => bookMeta, otherFieldName: "tags", serde: undefined, immutable: false, joinTableName: "books_to_tags", columnNames: ["tag_id", "book_id"] },
    "publishers": { kind: "m2m", fieldName: "publishers", fieldIdName: "publisherIds", required: false, otherMetadata: () => publisherMeta, otherFieldName: "tags", serde: undefined, immutable: false, joinTableName: "publishers_to_tags", columnNames: ["tag_id", "publisher_id"] },
  },
  allFields: {},
  orderBy: undefined,
  timestampFields: { createdAt: "createdAt", updatedAt: "updatedAt", deletedAt: undefined },
  config: tagConfig,
  factory: newTag,
  baseTypes: [],
  subTypes: [],
};

(Tag as any).metadata = tagMeta;

export const userMeta: EntityMetadata<User> = {
  cstr: User,
  type: "User",
  baseType: undefined,
  idType: "tagged-string",
  idDbType: "int",
  tagName: "u",
  tableName: "users",
  fields: {
    "id": { kind: "primaryKey", fieldName: "id", fieldIdName: undefined, required: true, serde: new KeySerde("u", "id", "id", "int"), immutable: true },
    "name": { kind: "primitive", fieldName: "name", fieldIdName: undefined, derived: false, required: true, protected: false, type: "string", serde: new PrimitiveSerde("name", "name", "character varying"), immutable: false },
    "email": { kind: "primitive", fieldName: "email", fieldIdName: undefined, derived: false, required: true, protected: false, type: "string", serde: new PrimitiveSerde("email", "email", "character varying"), immutable: false },
    "ipAddress": { kind: "primitive", fieldName: "ipAddress", fieldIdName: undefined, derived: false, required: false, protected: false, type: "string", serde: new PrimitiveSerde("ipAddress", "ip_address", "character varying"), immutable: false },
    "password": { kind: "primitive", fieldName: "password", fieldIdName: undefined, derived: false, required: false, protected: false, type: "string", serde: new CustomSerdeAdapter("password", "password", "character varying", PasswordValueSerde), immutable: false },
    "bio": { kind: "primitive", fieldName: "bio", fieldIdName: undefined, derived: false, required: true, protected: false, type: "string", serde: new PrimitiveSerde("bio", "bio", "character varying"), immutable: false },
    "createdAt": { kind: "primitive", fieldName: "createdAt", fieldIdName: undefined, derived: "orm", required: false, protected: false, type: "Date", serde: new PrimitiveSerde("createdAt", "created_at", "timestamp with time zone"), immutable: false },
    "updatedAt": { kind: "primitive", fieldName: "updatedAt", fieldIdName: undefined, derived: "orm", required: false, protected: false, type: "Date", serde: new PrimitiveSerde("updatedAt", "updated_at", "timestamp with time zone"), immutable: false },
    "authorManyToOne": { kind: "m2o", fieldName: "authorManyToOne", fieldIdName: "authorManyToOneId", derived: false, required: false, otherMetadata: () => authorMeta, otherFieldName: "userOneToOne", serde: new KeySerde("a", "authorManyToOne", "author_id", "int"), immutable: false },
    "createdComments": { kind: "o2m", fieldName: "createdComments", fieldIdName: "createdCommentIds", required: false, otherMetadata: () => commentMeta, otherFieldName: "user", serde: undefined, immutable: false },
    "likedComments": { kind: "m2m", fieldName: "likedComments", fieldIdName: "likedCommentIds", required: false, otherMetadata: () => commentMeta, otherFieldName: "likedByUsers", serde: undefined, immutable: false, joinTableName: "users_to_comments", columnNames: ["liked_by_user_id", "comment_id"] },
  },
  allFields: {},
  orderBy: undefined,
  timestampFields: { createdAt: "createdAt", updatedAt: "updatedAt", deletedAt: undefined },
  config: userConfig,
  factory: newUser,
  baseTypes: [],
  subTypes: [],
};

(User as any).metadata = userMeta;

export const allMetadata = [authorMeta, authorScheduleMeta, authorStatMeta, bookMeta, bookAdvanceMeta, bookReviewMeta, commentMeta, criticMeta, criticColumnMeta, imageMeta, largePublisherMeta, publisherMeta, publisherGroupMeta, smallPublisherMeta, tagMeta, userMeta];
configureMetadata(allMetadata);
