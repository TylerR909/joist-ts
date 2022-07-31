"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[436],{5318:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var i=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?i.createElement(g,r(r({ref:t},u),{},{components:n})):i.createElement(g,r({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6877:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var i=n(2685),a=n(1244),o=(n(7378),n(5318)),r=["components"],l={title:"Configuration",slug:"/configuration",sidebar_position:2},s=void 0,p={unversionedId:"getting-started/configuration",id:"getting-started/configuration",title:"Configuration",description:"Joist prefers convention over configuration, but it still has some knobs to control its behavior.",source:"@site/docs/getting-started/configuration.md",sourceDirName:"getting-started",slug:"/configuration",permalink:"/docs/configuration",draft:!1,editUrl:"https://github.com/stephen/joist-ts/edit/main/docs/docs/getting-started/configuration.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Configuration",slug:"/configuration",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Schema Assumptions",permalink:"/docs/getting-started/schema-assumptions"},next:{title:"Overview",permalink:"/docs/goals"}},u={},d=[{value:"Codegen Configuration",id:"codegen-configuration",level:2},{value:"<code>idType</code>",id:"idtype",level:3},{value:"<code>contextType</code>",id:"contexttype",level:3},{value:"<code>entitiesDirectory</code>",id:"entitiesdirectory",level:3},{value:"<code>createFlushFunction</code>",id:"createflushfunction",level:3},{value:"<code>ignoredTables</code>",id:"ignoredtables",level:3},{value:"<code>timestampColumns</code>",id:"timestampcolumns",level:3},{value:"<code>codegenPlugins</code>",id:"codegenplugins",level:3},{value:"<code>entities</code>",id:"entities",level:3},{value:"<code>tag</code>",id:"tag",level:4},{value:"<code>tableName</code>",id:"tablename",level:4},{value:"<code>entities.fields</code>",id:"entitiesfields",level:3},{value:"<code>entities.relations</code>",id:"entitiesrelations",level:3},{value:"Runtime Configuration",id:"runtime-configuration",level:2},{value:"Connection Pool",id:"connection-pool",level:3},{value:"Driver",id:"driver",level:3},{value:"IdAssigner",id:"idassigner",level:4},{value:"EntityManager",id:"entitymanager",level:3}],c={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Joist prefers convention over configuration, but it still has some knobs to control its behavior."),(0,o.kt)("p",null,"The configuration is split into two sections:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Codegen config, i.e. configuration used by ",(0,o.kt)("inlineCode",{parentName:"li"},"npm run joist-codegen")," during the code generation build step"),(0,o.kt)("li",{parentName:"ul"},"Runtime config, i.e. configuration by ",(0,o.kt)("inlineCode",{parentName:"li"},"EntityManager")," at runtime to configure the database & SQL that Joist uses")),(0,o.kt)("p",null,"You should be able to get started without any Codegen config, and only some minimal Runtime config."),(0,o.kt)("h2",{id:"codegen-configuration"},"Codegen Configuration"),(0,o.kt)("p",null,"The codegen configuration is controlled by a ",(0,o.kt)("inlineCode",{parentName:"p"},"./joist-codegen.json")," file, that ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run joist-codegen")," will look for and automatically run."),(0,o.kt)("p",null,"A short, minimalistic example is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "contextType": "Context@src/context",\n  "entities": {\n    "Author": { "tag": "a" }\n  },\n  "entitiesDirectory": "./src/entities"\n}\n')),(0,o.kt)("p",null,"Each of the supported keys are described below."),(0,o.kt)("h3",{id:"idtype"},(0,o.kt)("inlineCode",{parentName:"h3"},"idType")),(0,o.kt)("p",null,"Controls the type of the domain model's ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," properties, i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"Author.id")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"author1.id"),"."),(0,o.kt)("p",null,"Joist's default behavior is ",(0,o.kt)("inlineCode",{parentName:"p"},"tagged-string")," which means the type of ",(0,o.kt)("inlineCode",{parentName:"p"},"Author.id")," will be a ",(0,o.kt)("inlineCode",{parentName:"p"},"string"),", and the value will be ",(0,o.kt)("inlineCode",{parentName:"p"},"a:1")," where ",(0,o.kt)("inlineCode",{parentName:"p"},"a"),' is the "tag" established for all ',(0,o.kt)("inlineCode",{parentName:"p"},"Author")," entities, and ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," is the numeric primary key value of that row."),(0,o.kt)("p",null,"If you do not want the ",(0,o.kt)("inlineCode",{parentName:"p"},"a:")," tagged prefix, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"untagged-string"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "idType": "untagged-string"\n}\n')),(0,o.kt)("p",null,"This is a project-wide setting and cannot be changed on an entity-by-entity basis."),(0,o.kt)("p",null,"Also note that this ",(0,o.kt)("inlineCode",{parentName:"p"},"idType")," setting controls the ",(0,o.kt)("em",{parentName:"p"},"codegen output"),", but Joist will still look at the database type of the each individual entity's ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," column to determine if the SQL values are actually numbers (i.e. auto increment integers) or other types like UUIDs."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Joist currently does not support typing ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," properties as ",(0,o.kt)("inlineCode",{parentName:"p"},"number"),". This is doable, it's just not been something we've needed. See ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/stephenh/joist-ts/issues/368"},"this issue"),".")),(0,o.kt)("h3",{id:"contexttype"},(0,o.kt)("inlineCode",{parentName:"h3"},"contextType")),(0,o.kt)("p",null,"This optional key specifies your application specific ",(0,o.kt)("inlineCode",{parentName:"p"},"Context")," type, if you're using that pattern."),(0,o.kt)("p",null,"The expectation is that this will be a request-level ",(0,o.kt)("inlineCode",{parentName:"p"},"Context"),", i.e. it might hold user auth information or other application-specific information."),(0,o.kt)("p",null,"If you pass your request-level ",(0,o.kt)("inlineCode",{parentName:"p"},"Context")," to each ",(0,o.kt)("inlineCode",{parentName:"p"},"EntityManager"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { Context } from "src/context";\nimport { EntityManager } from "src/entities";\n\nconst em = new EntityManager(ctx, driver);\n')),(0,o.kt)("p",null,"Then in ",(0,o.kt)("inlineCode",{parentName:"p"},"EntityManager"),"-managed hooks, you'll be able to access the context:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'config.beforeDelete((book, ctx) => {\n  if (!ctx.user.isAdmin) {\n    return "Only admins can delete a book";\n  }\n});\n')),(0,o.kt)("p",null,"And the ",(0,o.kt)("inlineCode",{parentName:"p"},"ctx")," param will be correctly typed to your application's specific ",(0,o.kt)("inlineCode",{parentName:"p"},"Context")," type."),(0,o.kt)("h3",{id:"entitiesdirectory"},(0,o.kt)("inlineCode",{parentName:"h3"},"entitiesDirectory")),(0,o.kt)("p",null,"This controls whether Joist outputs the entity, codegen, and metadata files."),(0,o.kt)("p",null,"The default is ",(0,o.kt)("inlineCode",{parentName:"p"},"./src/entities"),"."),(0,o.kt)("h3",{id:"createflushfunction"},(0,o.kt)("inlineCode",{parentName:"h3"},"createFlushFunction")),(0,o.kt)("p",null,"Joist's preferred approach to testing is to let tests ",(0,o.kt)("inlineCode",{parentName:"p"},"COMMIT")," their code, and then use a ",(0,o.kt)("inlineCode",{parentName:"p"},"flush_database")," stored procedure to very quickly ",(0,o.kt)("inlineCode",{parentName:"p"},"TRUNCATE")," all tables."),(0,o.kt)("p",null,"This ",(0,o.kt)("inlineCode",{parentName:"p"},"flush_database")," stored procedure if created during ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run codegen"),"."),(0,o.kt)("p",null,"If you'd prefer to not use, you can set this to false:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'{\n  "createFlushFunction": false\n}\n')),(0,o.kt)("h3",{id:"ignoredtables"},(0,o.kt)("inlineCode",{parentName:"h3"},"ignoredTables")),(0,o.kt)("p",null,"Allows ignoring tables, i.e. not generating TypeScript entities for them."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'{\n  "ignoredTables": ["some_old_thing"]\n}\n')),(0,o.kt)("h3",{id:"timestampcolumns"},(0,o.kt)("inlineCode",{parentName:"h3"},"timestampColumns")),(0,o.kt)("p",null,"Joist will automatically manage columns like ",(0,o.kt)("inlineCode",{parentName:"p"},"Author.created_at")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Author.updated_at"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"timestampColumns")," key lets you configure your schema's conventions for column names."),(0,o.kt)("p",null,"For example the following config looks for ",(0,o.kt)("em",{parentName:"p"},"only")," ",(0,o.kt)("inlineCode",{parentName:"p"},"updated_at")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"created_at")," and requires both column to be present for Joist to consider a database table and entity table:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "timestampFields": {\n    "updatedAt": {\n      "names": ["updated_at"],\n      "optional": false\n    },\n    "createdAt": {\n      "names": ["created_at"],\n      "optional": false\n    }\n  }\n}\n')),(0,o.kt)("p",null,"The default configuration is basically:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "timestampFields": {\n    "updatedAt": {\n      "names": ["updated_at", "updatedAt"],\n      "optional": true\n    },\n    "createdAt": {\n      "names": ["created_at", "createdAt"],\n      "optional": true\n    }\n  }\n}\n')),(0,o.kt)("p",null,"I.e. Joist will look for either ",(0,o.kt)("inlineCode",{parentName:"p"},"updated_at")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"updatedAt")," naming conventions, and will not require the ",(0,o.kt)("inlineCode",{parentName:"p"},"updatedAt")," column be present to consider a table an entity table."),(0,o.kt)("h3",{id:"codegenplugins"},(0,o.kt)("inlineCode",{parentName:"h3"},"codegenPlugins")),(0,o.kt)("p",null,"Allows other functionality to be inserted into the ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run joist-codegen")," pipeline."),(0,o.kt)("p",null,"The current example is an extra GraphQL-specific plugin that creates GraphQL-specific scaffolding/output based on your domain model:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "codegenPlugins": ["joist-graphql-codegen"]\n}\n')),(0,o.kt)("h3",{id:"entities"},(0,o.kt)("inlineCode",{parentName:"h3"},"entities")),(0,o.kt)("p",null,"This is a big section that allows per-entity configuration."),(0,o.kt)("p",null,"There are several sub-keys:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface EntityConfig {\n  tag: string;\n  tableName?: string;\n  fields?: Record<string, FieldConfig>;\n  relations?: Record<string, RelationConfig>;\n}\n")),(0,o.kt)("h4",{id:"tag"},(0,o.kt)("inlineCode",{parentName:"h4"},"tag")),(0,o.kt)("p",null,"This controls the tag that Joist uses for each entity. By default, Joist will guess a tag by abbreviating a table name ",(0,o.kt)("inlineCode",{parentName:"p"},"books_reviews")," as the tag ",(0,o.kt)("inlineCode",{parentName:"p"},"br")," and automatically save it in ",(0,o.kt)("inlineCode",{parentName:"p"},"joist-codegen.json"),". If you'd like a different value, you're free to change it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "entities": {\n    "Author": { "tag": "a" }\n  }\n}\n')),(0,o.kt)("p",null,"Note that you should probably not change the tag name for an entity after it has been deployed to production, b/c the tagged id could exist in external systems, i.e. if you've sent ",(0,o.kt)("inlineCode",{parentName:"p"},'"a:1"')," to a 3rd party system, and then change your tag to ",(0,o.kt)("inlineCode",{parentName:"p"},'"author"'),", you might break an integration that tries to look up the entity by the old ",(0,o.kt)("inlineCode",{parentName:"p"},'"a:1"')," value."),(0,o.kt)("h4",{id:"tablename"},(0,o.kt)("inlineCode",{parentName:"h4"},"tableName")),(0,o.kt)("p",null,"Allows defining specific entity names for tables, for example if you had a ",(0,o.kt)("inlineCode",{parentName:"p"},"tbl_publishers")," table that you wanted to back the ",(0,o.kt)("inlineCode",{parentName:"p"},"Publisher")," entity, then you could setup:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "entities": {\n    "Publisher": { "tableName": "tbl_publishers" }\n  }\n}\n')),(0,o.kt)("p",null,"By default, Joist assumes table names are plural (i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"publishers"),") and will ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/pluralize"},(0,o.kt)("inlineCode",{parentName:"a"},"singular"))," the name for the entity name (i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"Publisher"),")."),(0,o.kt)("h3",{id:"entitiesfields"},(0,o.kt)("inlineCode",{parentName:"h3"},"entities.fields")),(0,o.kt)("p",null,"You can configure primitive fields by setting the camel-cased field name in the entity's ",(0,o.kt)("inlineCode",{parentName:"p"},"fields")," key:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "entities": {\n    "Author": { "fields": { "firstName": {} } }\n  }\n}\n')),(0,o.kt)("p",null,"Within the field hash (i.e. the value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"firstName")," key), these values are supported:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'export interface FieldConfig {\n  derived?: "sync" | "async";\n  protected?: boolean;\n  ignore?: true;\n  superstruct?: string;\n}\n')),(0,o.kt)("p",null,"Where:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"derived")," controls whether this field is derived from business logic (...link to docs...)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"protected")," controls whether this is field is ",(0,o.kt)("inlineCode",{parentName:"li"},"protected")," and so can only be accessed internally by the domain model code"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ignore")," controls whether to ignore the field"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"superstruct")," links to the superstruct type to use for ",(0,o.kt)("inlineCode",{parentName:"li"},"jsonb")," columns, i.e. ",(0,o.kt)("inlineCode",{parentName:"li"},"commentStreamReads@src/entities/superstruct")," (...link to docs...)")),(0,o.kt)("h3",{id:"entitiesrelations"},(0,o.kt)("inlineCode",{parentName:"h3"},"entities.relations")),(0,o.kt)("p",null,"You can configure relations (references and collections to other entities) by setting the camel-cased relation name in the entity's ",(0,o.kt)("inlineCode",{parentName:"p"},"relations")," key:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'export interface RelationConfig {\n  name?: string;\n  polymorphic?: "notNull" | true;\n  large?: true;\n}\n')),(0,o.kt)("p",null,"The support values are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"name")," customizing the name, i.e. if Joist guesses the name for a relation (typically the ",(0,o.kt)("inlineCode",{parentName:"li"},"o2o")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"o2m")," side of a ",(0,o.kt)("inlineCode",{parentName:"li"},"m2o"),"), you can set a more logical name."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"polymorphic")," creates this relation as a ",(0,o.kt)("a",{parentName:"li",href:"/docs/modeling/relations#polymorphic-references"},"polymorphic relation"),", which logical combines several physical foreign keys into a single field")),(0,o.kt)("h2",{id:"runtime-configuration"},"Runtime Configuration"),(0,o.kt)("p",null,"There are three main things to configure at runtime:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Connection pool"),(0,o.kt)("li",{parentName:"ul"},"Driver"),(0,o.kt)("li",{parentName:"ul"},"EntityManager")),(0,o.kt)("h3",{id:"connection-pool"},"Connection Pool"),(0,o.kt)("p",null,"Your application should have a single global connection pool; currently Joist recommends using ",(0,o.kt)("a",{parentName:"p",href:"http://knexjs.org/"},"knex"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import { newPgConnectionConfig } from "joist-utils";\n\nconst knex = createKnex({\n  client: "pg",\n  // This will read DATABASE_URL, but you can use whatever config you want, see the knex docs\n  connection: newPgConnectionConfig(),\n  // Setting this is true will `console.log` the SQL statements that Joist executes\n  debug: false,\n  asyncStackTraces: true,\n});\n')),(0,o.kt)("h3",{id:"driver"},"Driver"),(0,o.kt)("p",null,"Joist has a ",(0,o.kt)("inlineCode",{parentName:"p"},"Driver")," interface to support multiple different databases, like Postgres or MySQL or even an experimental in-memory driver. Currently only Postgres is supported."),(0,o.kt)("p",null,"Similar to the knex connection pool, you can create a single global instance of this driver:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const driver = new PostgresDriver(knex);\n")),(0,o.kt)("h4",{id:"idassigner"},"IdAssigner"),(0,o.kt)("p",null,"When creating the ",(0,o.kt)("inlineCode",{parentName:"p"},"PostgresDriver"),", you can pass an ",(0,o.kt)("inlineCode",{parentName:"p"},"IdAssigner")," instance, which currently has three implementations:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SequenceIdAssigner")," assigns numeric ids from each entity's ",(0,o.kt)("inlineCode",{parentName:"li"},"SEQUENCE")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"RandomUuidAssigner")," assigns random UUIDs if you're using UUID columns"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"TestUuidAssigner")," assigns deterministic UUIDs for unit testing")),(0,o.kt)("h3",{id:"entitymanager"},"EntityManager"),(0,o.kt)("p",null,"With the global connection pool and ",(0,o.kt)("inlineCode",{parentName:"p"},"Driver")," instance, you can create per-request ",(0,o.kt)("inlineCode",{parentName:"p"},"EntityManager")," instances:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// Your application's per-request Context, if applicable\nconst ctx = {};\nconst em = new EntityManager(ctx, driver);\n")))}m.isMDXComponent=!0}}]);