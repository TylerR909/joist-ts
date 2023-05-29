"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[42],{5318:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(7378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(n),c=i,k=d["".concat(s,".").concat(c)]||d[c]||u[c]||r;return n?a.createElement(k,o(o({ref:t},m),{},{components:n})):a.createElement(k,o({ref:t},m))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1808:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(2685),i=(n(7378),n(5318));const r={title:"Schema Assumptions",sidebar_position:1},o=void 0,l={unversionedId:"getting-started/schema-assumptions",id:"getting-started/schema-assumptions",title:"Schema Assumptions",description:"Joist makes a few assumptions about your database schema, which basically assume you have a modern/pleasant database schema that you want directly mapped to your TypeScript domain model.",source:"@site/docs/getting-started/schema-assumptions.md",sourceDirName:"getting-started",slug:"/getting-started/schema-assumptions",permalink:"/docs/getting-started/schema-assumptions",draft:!1,editUrl:"https://github.com/stephen/joist-ts/edit/main/docs/docs/getting-started/schema-assumptions.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Schema Assumptions",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/docs/getting-started"},next:{title:"Configuration",permalink:"/docs/configuration"}},s={},p=[{value:"Entity Tables",id:"entity-tables",level:2},{value:"Deferred Constraints",id:"deferred-constraints",level:3},{value:"Timestamp Columns",id:"timestamp-columns",level:3},{value:"Enum Tables",id:"enum-tables",level:2},{value:"Many-to-Many Join Tables",id:"many-to-many-join-tables",level:2}],m={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Joist makes a few assumptions about your database schema, which basically assume you have a modern/pleasant database schema that you want directly mapped to your TypeScript domain model."),(0,i.kt)("h2",{id:"entity-tables"},"Entity Tables"),(0,i.kt)("p",null,"Joist expects entity tables (i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"authors"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"books"),") to have a single primary key column, ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),", that is either:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"A ",(0,i.kt)("inlineCode",{parentName:"li"},"id")," / ",(0,i.kt)("inlineCode",{parentName:"li"},"serial")," type, that uses a sequence called ",(0,i.kt)("inlineCode",{parentName:"li"},"${tableName}_id_seq"),", or"),(0,i.kt)("li",{parentName:"ol"},"A ",(0,i.kt)("inlineCode",{parentName:"li"},"uuid")," type")),(0,i.kt)("p",null,"And that is it; you can:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use either singular or plural table names (",(0,i.kt)("inlineCode",{parentName:"li"},"author")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"authors"),")"),(0,i.kt)("li",{parentName:"ul"},"Use either underscore or camel cased column names (",(0,i.kt)("inlineCode",{parentName:"li"},"first_name")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"firstName"),")")),(0,i.kt)("p",null,"If you use plural table names, Joist will de-pluralize them for the entity name, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"authors")," -> ",(0,i.kt)("inlineCode",{parentName:"p"},"Author"),"."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"We have added Postgres data types to Joist only as we've personally needed them; if you use a data type that Joist doesn't support yet, you'll get an error when running ",(0,i.kt)("inlineCode",{parentName:"p"},"joist-codegen"),", but please just open an issue or PR, and we'll be happy to look in to it.")),(0,i.kt)("h3",{id:"deferred-constraints"},"Deferred Constraints"),(0,i.kt)("p",null,"Joist batches all ",(0,i.kt)("inlineCode",{parentName:"p"},"INSERT"),"s and ",(0,i.kt)("inlineCode",{parentName:"p"},"UPDATE"),"s within an ",(0,i.kt)("inlineCode",{parentName:"p"},"EntityManager.flush"),", which results in the best performance, but means that foreign keys might be temporarily invalid (i.e. we've inserted a ",(0,i.kt)("inlineCode",{parentName:"p"},"Book")," with an ",(0,i.kt)("inlineCode",{parentName:"p"},"author_id")," before the ",(0,i.kt)("inlineCode",{parentName:"p"},"Author")," is inserted)."),(0,i.kt)("p",null,"Joist handles this by telling Postgres to ",(0,i.kt)("em",{parentName:"p"},"temporarily")," defer foreign key checks until the end of the transaction."),(0,i.kt)("p",null,"To enable this, foreign keys must be created with this syntax:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE "authors" (\n  ...\n  "publisher_id" integer REFERENCES "publishers" DEFERRABLE INITIALLY DEFERRED,\n  ...\n);\n')),(0,i.kt)("p",null,"If you're using node-pg-migrate for your migrations, Joist's ",(0,i.kt)("inlineCode",{parentName:"p"},"joist-migration-utils")," NPM package has utility methods, i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"createEntityTable")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"foreignKey"),", to apply these defaults for you, but you should be able to do the same in any migration library."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"As a longer example explaining the nuance of insertion order, given ",(0,i.kt)("inlineCode",{parentName:"p"},"Publisher"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"Author")," entities, if deferred FK constraints are not used then:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Sometimes ",(0,i.kt)("inlineCode",{parentName:"li"},"Publisher")," needs flushed first to satisfy an ",(0,i.kt)("inlineCode",{parentName:"li"},"authors.publisher_id")," foreign key constraint, but"),(0,i.kt)("li",{parentName:"ul"},"Other times ",(0,i.kt)("inlineCode",{parentName:"li"},"Author")," needs flushed first to satisfy a ",(0,i.kt)("inlineCode",{parentName:"li"},"publishers.top_author_id")," foreign key constraint."),(0,i.kt)("li",{parentName:"ul"},"Or, even trickier, if mixing ",(0,i.kt)("inlineCode",{parentName:"li"},"authors")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"publishers")," ",(0,i.kt)("inlineCode",{parentName:"li"},"INSERT"),"s and ",(0,i.kt)("inlineCode",{parentName:"li"},"DELETE"),"s in the same transaction: should we delete authors then insert publishers, or delete publishers then insert authors, etc.")),(0,i.kt)("p",{parentName:"admonition"},"Using deferred constraints makes this complexity & non-deterministic insertion order go away.")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If you have an existing schema, and need to convert your existing foreign keys to deferrable, you can use ",(0,i.kt)("a",{parentName:"p",href:"https://www.pg-structure.com/"},"pg-structure")," in a migration to loop over them like:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'import pgStructure from "pg-structure";\n\nconst client = getYourDbClient();\nconst db = await pgStructure(client, { includeSchemas: "public" });\nfor (const table of db.tables) {\n  for (const constraint of table.constraints) {\n    if (constraint instanceof ForeignKey) {\n      await b.db.query(`\n        ALTER TABLE ${table.name}\n        ALTER CONSTRAINT ${constraint.name}\n        DEFERRABLE INITIALLY DEFERRED\n      `);\n    }\n  }\n}\n'))),(0,i.kt)("h3",{id:"timestamp-columns"},"Timestamp Columns"),(0,i.kt)("p",null,"Entity tables can optionally have ",(0,i.kt)("inlineCode",{parentName:"p"},"created_at")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"updated_at")," columns, which Joist will automatically manage by setting ",(0,i.kt)("inlineCode",{parentName:"p"},"created_at")," when creating entities, and updating ",(0,i.kt)("inlineCode",{parentName:"p"},"updated_at")," when updating entities."),(0,i.kt)("p",null,"In ",(0,i.kt)("inlineCode",{parentName:"p"},"joist-config.json"),", you can configure the names of the ",(0,i.kt)("inlineCode",{parentName:"p"},"timestampColumns"),", which defaults to:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "timestampColumns": {\n    "createdAt": { "names": ["created_at", "createdAt"], "required": false },\n    "updatedAt": { "names": ["updated_at", "updatedAt"], "required": false }\n  }\n}\n')),(0,i.kt)("p",null,"For example, if you want to strictly require ",(0,i.kt)("inlineCode",{parentName:"p"},"created_at")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"updated_at")," on all entities in your application's schema, you can use:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "timestampColumns": {\n    "createdAt": { "names": ["created_at"], "required": true },\n    "updatedAt": { "names": ["updated_at"], "required": true }\n  }\n}\n')),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"}," If you have non-Joist clients that update entities tables, or use bulk/raw SQL updates, you can create triggers that mimic this functionality (but will not overwrite ",(0,i.kt)("inlineCode",{parentName:"p"},"INSERT"),"s / ",(0,i.kt)("inlineCode",{parentName:"p"},"UPDATE"),"s that do set the columns), see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/stephenh/joist-ts/blob/main/packages/migration-utils/src/utils.ts#L73"},"joist-migration-utils"),"."),(0,i.kt)("p",{parentName:"admonition"},"(These methods use ",(0,i.kt)("inlineCode",{parentName:"p"},"node-pg-migrate"),", but you can use whatever migration library you prefer to apply the DDL.)")),(0,i.kt)("h2",{id:"enum-tables"},"Enum Tables"),(0,i.kt)("p",null,"Joist models enums (i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"EmployeeStatus"),") as their own database tables with a row-per-enum value."),(0,i.kt)("p",null,"For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"employee_status")," might have two rows like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"id  | code          | name\n----+---------------+---------------\n1   | FULL_TIME     | Full Time\n2   | PART_TIME     | Part Time\n")),(0,i.kt)("p",null,"And Joist will generate code that looks like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"enum EmployeeStatus {\n  FullTime,\n  PartTime,\n}\n")),(0,i.kt)("p",null,'This "enums-as-tables" approach allows the entities reference to the enum, i.e. ',(0,i.kt)("inlineCode",{parentName:"p"},"Employee.status")," pointing to the ",(0,i.kt)("inlineCode",{parentName:"p"},"EmployeeStatus")," enum, to use foreign keys to the enum table, i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"employees.status_id")," is a foreign key to the ",(0,i.kt)("inlineCode",{parentName:"p"},"employee_status")," table. This enables:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Data integrity, ensuring that all ",(0,i.kt)("inlineCode",{parentName:"li"},"status_id")," values are valid statuses, and"),(0,i.kt)("li",{parentName:"ol"},"Allows Joist's code generator to tell both that ",(0,i.kt)("inlineCode",{parentName:"li"},"employees.status_id")," is a) of the type ",(0,i.kt)("inlineCode",{parentName:"li"},"EmployeeStatus")," and b) how many enum values ",(0,i.kt)("inlineCode",{parentName:"li"},"EmployeeStatus")," has.")),(0,i.kt)("p",null,"Joist expects enum tables to have three columns:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"id")," primary key/serial"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"code")," i.e. ",(0,i.kt)("inlineCode",{parentName:"li"},"FOO_BAR")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," i.e. ",(0,i.kt)("inlineCode",{parentName:"li"},"Foo Bar"))),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"joist-migration-utils")," package has ",(0,i.kt)("inlineCode",{parentName:"p"},"createEnumTable"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"addEnumValue"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"updateEnumValue")," helper methods to use in your migrations."),(0,i.kt)("p",null,"And, as mentioned, entities that want to use this enum should have a foreign key that references the appropriate enum table."),(0,i.kt)("p",null,"If you do not wish to use enums as tables, native enums can be used as well, and Joist will generate the Typescript enum."),(0,i.kt)("h2",{id:"many-to-many-join-tables"},"Many-to-Many Join Tables"),(0,i.kt)("p",null,"Joist expects join tables to have three or four columns:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"id")," primary key/serial"),(0,i.kt)("li",{parentName:"ul"},"One foreign key column for 1st side"),(0,i.kt)("li",{parentName:"ul"},"One foreign key column for 2nd side"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"created_at")," ",(0,i.kt)("inlineCode",{parentName:"li"},"timestamptz")," (optional)")),(0,i.kt)("p",null,"(",(0,i.kt)("inlineCode",{parentName:"p"},"updated_at")," is not applicable to join tables.)"))}u.isMDXComponent=!0}}]);