"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[152],{5318:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,g=m["".concat(l,".").concat(d)]||m[d]||c[d]||i;return n?a.createElement(g,r(r({ref:t},u),{},{components:n})):a.createElement(g,r({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3846:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var a=n(2685),o=n(1244),i=(n(7378),n(5318)),r=["components"],s={title:"Installation",slug:"/getting-started",sidebar_position:0},l=void 0,p={unversionedId:"getting-started/installation",id:"getting-started/installation",title:"Installation",description:"Installing Joist in your project has four main steps:",source:"@site/docs/getting-started/installation.md",sourceDirName:"getting-started",slug:"/getting-started",permalink:"/docs/getting-started",draft:!1,editUrl:"https://github.com/stephen/joist-ts/edit/main/docs/docs/getting-started/installation.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Installation",slug:"/getting-started",sidebar_position:0},sidebar:"tutorialSidebar",next:{title:"Schema Assumptions",permalink:"/docs/getting-started/schema-assumptions"}},u={},c=[{value:"Setting up your database",id:"setting-up-your-database",level:2},{value:"Setting up migrations",id:"setting-up-migrations",level:3},{value:"Setting up <code>joist-codegen</code>",id:"setting-up-joist-codegen",level:2},{value:"Setting up your tests",id:"setting-up-your-tests",level:2},{value:"Setting up your production code",id:"setting-up-your-production-code",level:2}],m={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Installing Joist in your project has four main steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Setting up your database"),(0,i.kt)("li",{parentName:"ol"},"Setting up ",(0,i.kt)("inlineCode",{parentName:"li"},"joist-codegen")),(0,i.kt)("li",{parentName:"ol"},"Setting up your tests"),(0,i.kt)("li",{parentName:"ol"},"Setting up your production code")),(0,i.kt)("p",null,"A wrinkle is that each Node.js application can be pretty different, in terms of how you manage your local database (i.e. with Docker Compose), what your production application looks like (a REST API, a GraphQL API, etc.), etc."),(0,i.kt)("p",null,"So, to simplify this page, we'll include some assumptions based on the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/stephenh/joist-ts-sample"},"Joist sample app"),", but you should be able to adjust these steps to your specific project."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"If you want a faster intro than this page, you should be able to check out the sample app, run the commands in its readme, and just start poking around.")),(0,i.kt)("h2",{id:"setting-up-your-database"},"Setting up your database"),(0,i.kt)("p",null,"The sample app uses ",(0,i.kt)("inlineCode",{parentName:"p"},"docker compose")," and a ",(0,i.kt)("inlineCode",{parentName:"p"},"db.dockerfile")," file to manage the local Postgres database."),(0,i.kt)("p",null,"To start it, clone the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/stephenh/joist-ts-sample"},"sample app"),", and run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker compose build db\ndocker compose up -d db\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," exposes the ",(0,i.kt)("inlineCode",{parentName:"p"},"sample_app")," database on port ",(0,i.kt)("inlineCode",{parentName:"p"},"5342"),", so it is accessible with an environment variable of:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-env"},"DATABASE_URL=postgres://sample_user:local@localhost:5432/sample_app\n")),(0,i.kt)("p",null,"The following steps will assume your database is available at this location (it is already set in the sample app's ",(0,i.kt)("inlineCode",{parentName:"p"},"env/local.env")," file), but you can set ",(0,i.kt)("inlineCode",{parentName:"p"},"DATABASE_URL")," to whatever is appropriate for your application."),(0,i.kt)("h3",{id:"setting-up-migrations"},"Setting up migrations"),(0,i.kt)("p",null,"You should also set up a migrations library to manage your database schema; the Joist sample app uses ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/salsita/node-pg-migrate"},"node-pg-migrate"),"."),(0,i.kt)("p",null,"If you do use ",(0,i.kt)("inlineCode",{parentName:"p"},"node-pg-migrate")," as well, you can install Joist's ",(0,i.kt)("inlineCode",{parentName:"p"},"node-pg-migrate"),"-based helper methods (like ",(0,i.kt)("inlineCode",{parentName:"p"},"createEntityTable"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"createEnumTable"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"createManyToManyTable"),", etc.):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm add --save-dev joist-migration-utils\n")),(0,i.kt)("p",null,"And add ",(0,i.kt)("inlineCode",{parentName:"p"},"joist-migrate")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"joist-new-migration")," commands to your ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "joist-migrate": "./run.sh ./node_modules/joist-migration-utils",\n    "joist-new-migration": "npx node-pg-migrate create"\n  }\n}\n')),(0,i.kt)("p",null,"The sample app uses a ",(0,i.kt)("inlineCode",{parentName:"p"},"run.sh")," helper script to load the environment variables from ",(0,i.kt)("inlineCode",{parentName:"p"},"env/local.env")," before running ",(0,i.kt)("inlineCode",{parentName:"p"},"joist-migration-utils"),", but if you don't like that, you can manage your application's environment variables however you like."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Invoking Joist's ",(0,i.kt)("inlineCode",{parentName:"p"},"joist-migration-utils")," is really just a tiny wrapper around ",(0,i.kt)("inlineCode",{parentName:"p"},"node-pg-migrate")," that:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Reads the connection config from either a single ",(0,i.kt)("inlineCode",{parentName:"li"},"DATABASE_URL")," or multiple ",(0,i.kt)("inlineCode",{parentName:"li"},"DB_HOST"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"DB_PORT"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"DB_DATABASE"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"DB_USER"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"DB_PASSWORD")," environment variables (as loaded by the ",(0,i.kt)("inlineCode",{parentName:"li"},"run.sh")," script)"),(0,i.kt)("li",{parentName:"ul"},'Runs the "up" command against the ',(0,i.kt)("inlineCode",{parentName:"li"},"migrations/")," directory")),(0,i.kt)("p",{parentName:"admonition"},"If you want to invoke ",(0,i.kt)("inlineCode",{parentName:"p"},"node-pg-migrate"),"'s ",(0,i.kt)("a",{parentName:"p",href:"https://salsita.github.io/node-pg-migrate/#/cli"},"cli")," directly instead, that's just fine.")),(0,i.kt)("p",null,"Now we can apply migrations by running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm run joist-migrate\n")),(0,i.kt)("p",null,"The sample app also supports resetting the database schema (so you can re-run the migrations from scratch) by running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"docker compose exec db ./reset.sh\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"While we used ",(0,i.kt)("inlineCode",{parentName:"p"},"node-pg-migrate")," for this section, Joist is agnostic to your migration tool and will codegen based on your database schema, so you're welcome to use ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/salsita/node-pg-migrate"},"node-pg-migrate"),", Knex's ",(0,i.kt)("a",{parentName:"p",href:"http://knexjs.org/guide/migrations.html#migration-cli"},"migrations"),", or another tool for migrations/schema management.")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"As a quirk of ",(0,i.kt)("inlineCode",{parentName:"p"},"node-pg-migrate"),", the first migration that it creates via ",(0,i.kt)("inlineCode",{parentName:"p"},"joist-new-migration")," will always be a ",(0,i.kt)("inlineCode",{parentName:"p"},".js")," file."),(0,i.kt)("p",{parentName:"admonition"},"Once you rename that first migration to a ",(0,i.kt)("inlineCode",{parentName:"p"},".ts")," file, all subsequent migrations will be created as ",(0,i.kt)("inlineCode",{parentName:"p"},".ts")," files.")),(0,i.kt)("h2",{id:"setting-up-joist-codegen"},"Setting up ",(0,i.kt)("inlineCode",{parentName:"h2"},"joist-codegen")),(0,i.kt)("p",null,"Install the ",(0,i.kt)("inlineCode",{parentName:"p"},"joist-codegen")," package as a dev dependency and add a ",(0,i.kt)("inlineCode",{parentName:"p"},"joist-codegen")," script to your ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm add --save-dev joist-codegen\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "joist-codegen": "./run.sh ./node_modules/joist-codegen"\n  }\n}\n')),(0,i.kt)("p",null,"This again uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"run.sh")," script, as ",(0,i.kt)("inlineCode",{parentName:"p"},"joist-codegen")," will use the ",(0,i.kt)("inlineCode",{parentName:"p"},"DATABASE_URL")," environment variable to connect to your local database."),(0,i.kt)("p",null,"Now, anytime you make schema changes (i.e. by running ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run joist-migrate"),"), you can also run ",(0,i.kt)("inlineCode",{parentName:"p"},"joist-codegen")," to create/update your domain model:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm run joist-codegen\n")),(0,i.kt)("h2",{id:"setting-up-your-tests"},"Setting up your tests"),(0,i.kt)("p",null,"We want each test to get a clean/fresh database, so we should set up a ",(0,i.kt)("inlineCode",{parentName:"p"},"beforeEach")," to invoke our local-only ",(0,i.kt)("inlineCode",{parentName:"p"},"flush_database")," command:"),(0,i.kt)("p",null,"The sample app does this via a ",(0,i.kt)("inlineCode",{parentName:"p"},"setupTests.ts")," file that will be used for all tests:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'import { EntityManager } from "src/entities";\nimport { knex as createKnex, Knex } from "knex";\nimport { PostgresDriver } from "joist-orm";\nimport { newPgConnectionConfig } from "joist-utils";\n\nlet knex: Knex;\n\n// Knex is used as a single/global connection pool + query builder\nfunction getKnex(): Knex {\n  return (knex ??= createKnex({\n    client: "pg",\n    connection: newPgConnectionConfig() as any,\n    debug: false,\n    asyncStackTraces: true,\n  }));\n}\n\nexport function newEntityManager(): EntityManager {\n  return new EntityManager({}, new PostgresDriver(getKnex()));\n}\n\nbeforeEach(async () => {\n  const knex = await getKnex();\n  await knex.select(knex.raw("flush_database()"));\n});\n\nafterAll(async () => {\n  if (knex) {\n    await knex.destroy();\n  }\n});\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"newPgConnectionConfig")," helper method from ",(0,i.kt)("inlineCode",{parentName:"p"},"joist-utils")," also uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"DATABASE_URL")," environment variable, which we can have loaded into the Jest process by using ",(0,i.kt)("inlineCode",{parentName:"p"},"dotenv")," in a ",(0,i.kt)("inlineCode",{parentName:"p"},"setupTestEnv.js")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'import { config } from "dotenv";\n\nexport default () => {\n  if (process.env.STAGE === undefined) {\n    config({ path: "./env/local.env" });\n  }\n};\n')),(0,i.kt)("p",null,"And then configure ",(0,i.kt)("inlineCode",{parentName:"p"},"jest.config.js")," to use both files:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'module.exports = {\n  preset: "ts-jest",\n  globalSetup: "<rootDir>/src/setupTestEnv.ts",\n  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],\n  testMatch: ["<rootDir>/src/**/*.test.{ts,tsx,js,jsx}"],\n  moduleNameMapper: {\n    "^src(.*)": "<rootDir>/src$1",\n  },\n};\n')),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"While Joist's ",(0,i.kt)("inlineCode",{parentName:"p"},"newPgConnectionConfig")," uses the same environment variable convention as ",(0,i.kt)("inlineCode",{parentName:"p"},"joist-codegen"),", with the idea that your app's production environment variables will be set automatically by your deployment infra (i.e. in the style of ",(0,i.kt)("a",{parentName:"p",href:"https://12factor.net/"},"Twelve Factor Applications"),"), you're free to configure ",(0,i.kt)("inlineCode",{parentName:"p"},"Knex")," with whatever idiomatic configuration looks like for your app."),(0,i.kt)("p",{parentName:"admonition"},"See the ",(0,i.kt)("a",{parentName:"p",href:"http://knexjs.org/guide/#configuration-options"},"Knex config documentation"),".")),(0,i.kt)("p",null,"As usual, you can/should adjust all of this to your specific project."),(0,i.kt)("p",null,"Now your unit tests should be able to create an ",(0,i.kt)("inlineCode",{parentName:"p"},"EntityManager")," and work with the domain objects:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import { Author, EntityManager, newAuthor } from "src/entities";\nimport { newEntityManager } from "src/setupTests";\n\ndescribe("Author", () => {\n  it("can be created", async () => {\n    const em = newEntityManager();\n    const a = new Author(em, { firstName: "a1" });\n    await em.flush();\n  });\n});\n')),(0,i.kt)("h2",{id:"setting-up-your-production-code"},"Setting up your production code"),(0,i.kt)("p",null,"Finally, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"EntityManager")," and your domain objects in your production code."),(0,i.kt)("p",null,"First install the ",(0,i.kt)("inlineCode",{parentName:"p"},"joist-orm")," dependency:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm add --save-dev joist-orm\n")),(0,i.kt)("p",null,'This is where the guide really becomes "it depends on your application", but in theory it will look very similar to setting up the tests:'),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Configure a single/global ",(0,i.kt)("inlineCode",{parentName:"li"},"knex")," instance that will act as the connection pool,"),(0,i.kt)("li",{parentName:"ol"},"For each request, create a new ",(0,i.kt)("inlineCode",{parentName:"li"},"EntityManager")," to perform that request's work")),(0,i.kt)("p",null,"An extremely simple example might look like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import { EntityManager, Author } from "./entities";\nimport { newPgConnectionConfig, PostgresDriver } from "joist-orm";\nimport { knex as createKnex, Knex } from "knex";\n\n// Create our global knex connection\nlet knex: Knex = createKnex({\n  client: "pg",\n  connection: newPgConnectionConfig(),\n  debug: false,\n  asyncStackTraces: true,\n});\n\n// Create a helper method for our requests to create a new EntityManager\nfunction newEntityManager(): EntityManager {\n  // If you have a per-request context object, you can create that here\n  const ctx = {};\n  return new EntityManager(ctx, new PostgresDriver(getKnex()));\n}\n\n// Handle GET `/authors`\napp.get("/authors", async (req, res) => {\n  // Create a new em\n  const em = newEntityManager();\n  // Find all authors\n  const authors = await em.find(Author, {});\n  // Send them back as JSON\n  res.send(authors);\n});\n')),(0,i.kt)("p",null,"Note that you'll again need the ",(0,i.kt)("inlineCode",{parentName:"p"},"DATABASE_URL")," environment variable set, but that will depend on whatever hosting provider you're using to run the app (or, per the previous disclaimer, you're free to configure the ",(0,i.kt)("inlineCode",{parentName:"p"},"Knex")," connection pool with whatever configuration approach/library you like)."))}d.isMDXComponent=!0}}]);