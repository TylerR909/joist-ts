"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[364],{5318:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5197:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var r=n(2685),i=n(1244),a=(n(7378),n(5318)),o=["components"],s={title:"JSONB Fields",sidebar_position:9},l=void 0,p={unversionedId:"modeling/jsonb-fields",id:"modeling/jsonb-fields",title:"JSONB Fields",description:"Postgres has rich support for storing JSON, which Joist supports.",source:"@site/docs/modeling/jsonb-fields.md",sourceDirName:"modeling",slug:"/modeling/jsonb-fields",permalink:"/docs/modeling/jsonb-fields",draft:!1,editUrl:"https://github.com/stephen/joist-ts/edit/main/docs/docs/modeling/jsonb-fields.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"JSONB Fields",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Derived Fields",permalink:"/docs/modeling/derived-fields"},next:{title:"Finders",permalink:"/docs/querying/finders"}},u={},d=[{value:"Optional Strong Typing",id:"optional-strong-typing",level:3},{value:"Approach",id:"approach",level:3},{value:"Current Limitations",id:"current-limitations",level:3}],c={toc:d};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Postgres has rich support for ",(0,a.kt)("a",{parentName:"p",href:"https://www.postgresql.org/docs/current/datatype-json.html"},"storing JSON"),", which Joist supports."),(0,a.kt)("h3",{id:"optional-strong-typing"},"Optional Strong Typing"),(0,a.kt)("p",null,"While Postgres does not apply a schema to ",(0,a.kt)("inlineCode",{parentName:"p"},"jsonb")," columns, this can often be useful when you do actually have/know a schema for a ",(0,a.kt)("inlineCode",{parentName:"p"},"jsonb")," column, but are using the ",(0,a.kt)("inlineCode",{parentName:"p"},"jsonb")," column as a more succinct/pragmatic way to store nested/hierarchical data than as strictly relational tables and columns."),(0,a.kt)("p",null,"To support this, Joist uses the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.superstructjs.org/"},"superstruct")," library, which can describe both the TypeScript type for a value (i.e. ",(0,a.kt)("inlineCode",{parentName:"p"},"Address")," has both as a ",(0,a.kt)("inlineCode",{parentName:"p"},"street")," and a ",(0,a.kt)("inlineCode",{parentName:"p"},"city"),"), as well as do runtime validation and parsing of address values."),(0,a.kt)("p",null,"That said, if you do want to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"jsonb")," column effectively as an ",(0,a.kt)("inlineCode",{parentName:"p"},"any")," object, the superstruct typing is optional, and you'll just work with ",(0,a.kt)("inlineCode",{parentName:"p"},"Object"),"s instead."),(0,a.kt)("h3",{id:"approach"},"Approach"),(0,a.kt)("p",null,"We'll use an example of storing an ",(0,a.kt)("inlineCode",{parentName:"p"},"Address")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"street")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"city")," fields within a single ",(0,a.kt)("inlineCode",{parentName:"p"},"jsonb")," column."),(0,a.kt)("p",null,"First, define a ",(0,a.kt)("a",{parentName:"p",href:"https://docs.superstructjs.org/"},"superstruct")," type for the data you're going to store in ",(0,a.kt)("inlineCode",{parentName:"p"},"src/entities/types.ts"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'import { Infer, object, string } from "superstruct";\n\nexport type Address = Infer<typeof address>;\n\nexport const address = object({\n  street: string(),\n  city: string(),\n});\n')),(0,a.kt)("p",null,"Where:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"address")," is a structure that defines the schema/shape of the data to store"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Address")," is the TypeScript type system that Superstruct will derive for us")),(0,a.kt)("p",null,"Then tell Joist to use this ",(0,a.kt)("inlineCode",{parentName:"p"},"Address")," type for the ",(0,a.kt)("inlineCode",{parentName:"p"},"Author.address")," field in ",(0,a.kt)("inlineCode",{parentName:"p"},"joist-codegen.json"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "entities": {\n    "Author": {\n      "fields": {\n        "address": {\n          "superstruct": "address@src/entities/types"\n        }\n      },\n      "tag": "a"\n    }\n  }\n}\n')),(0,a.kt)("p",null,"Note that we're pointing Joist at the ",(0,a.kt)("inlineCode",{parentName:"p"},"address")," const."),(0,a.kt)("p",null,"Now just run ",(0,a.kt)("inlineCode",{parentName:"p"},"joist-codegen")," and the ",(0,a.kt)("inlineCode",{parentName:"p"},"AuthorCodegen"),"'s ",(0,a.kt)("inlineCode",{parentName:"p"},"address")," field use the ",(0,a.kt)("inlineCode",{parentName:"p"},"Address")," type."),(0,a.kt)("h3",{id:"current-limitations"},"Current Limitations"),(0,a.kt)("p",null,"There are few limitations to Joist's current ",(0,a.kt)("inlineCode",{parentName:"p"},"jsonb")," support:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Joist currently doesn't support querying / filtering against ",(0,a.kt)("inlineCode",{parentName:"p"},"jsonb")," columns, i.e. in ",(0,a.kt)("inlineCode",{parentName:"p"},"EntityManager.find")," clauses."),(0,a.kt)("p",{parentName:"li"},"In theory this is doable, but just hasn't been implemented yet; Postgres supports quite a few operations on ",(0,a.kt)("inlineCode",{parentName:"p"},"jsonb")," columns, so it might be somewhat involved. See ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/stephenh/joist-ts/issues/230"},"jsonb filtering support"),"."),(0,a.kt)("p",{parentName:"li"},"Instead, for now, can you use raw SQL/knex queries and use ",(0,a.kt)("inlineCode",{parentName:"p"},"EntityManager.loadFromQuery")," to turn the low-level ",(0,a.kt)("inlineCode",{parentName:"p"},"authors")," rows into ",(0,a.kt)("inlineCode",{parentName:"p"},"Author")," entities.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Joist currently loads all columns for a row (i.e. ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT * FROM authors WHERE id IN (...)"),"), so if you have particularly large ",(0,a.kt)("inlineCode",{parentName:"p"},"jsonb")," values in an entity's row, then any load of that entity will also return the ",(0,a.kt)("inlineCode",{parentName:"p"},"jsonb")," data."),(0,a.kt)("p",{parentName:"li"},"Eventually ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/stephenh/joist-ts/issues/178"},"lazy column support")," should resolve this, and allow marking ",(0,a.kt)("inlineCode",{parentName:"p"},"jsonb")," columns as lazy, such that they would not be automatically fetched with an entity unless explicitly requested as a load hint."))))}m.isMDXComponent=!0}}]);