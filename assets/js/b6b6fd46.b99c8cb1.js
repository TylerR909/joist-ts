"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[558],{5318:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(n),m=i,h=c["".concat(l,".").concat(m)]||c[m]||p[m]||a;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var d=2;d<a;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7649:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return p}});var r=n(2685),i=n(1244),a=(n(7378),n(5318)),o=["components"],s={title:"Derived Fields",sidebar_position:7},l=void 0,d={unversionedId:"modeling/derived-fields",id:"modeling/derived-fields",title:"Derived Fields",description:"Derived fields are field values (i.e. primitives) that can be calculated from other data within your domain model.",source:"@site/docs/modeling/derived-fields.md",sourceDirName:"modeling",slug:"/modeling/derived-fields",permalink:"/docs/modeling/derived-fields",draft:!1,editUrl:"https://github.com/stephen/joist-ts/edit/main/docs/docs/modeling/derived-fields.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Derived Fields",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Enum Tables",permalink:"/docs/modeling/enum-tables"},next:{title:"Protected Fields",permalink:"/docs/modeling/protected-fields"}},u={},p=[{value:"Synchronous, Unpersisted Fields",id:"synchronous-unpersisted-fields",level:2},{value:"Synchronous, Persisted Fields",id:"synchronous-persisted-fields",level:2},{value:"Asynchronous, Unpersisted Fields",id:"asynchronous-unpersisted-fields",level:2},{value:"Asynchronous, Persisted Fields",id:"asynchronous-persisted-fields",level:2}],c={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Derived fields are field values (i.e. primitives) that can be calculated from other data within your domain model."),(0,a.kt)("p",null,"There are two axis by which to categorize derived fields:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Synchronous vs. Asynchronous"),(0,a.kt)("p",{parentName:"li"},"Synchronous derived fields only rely on other fields/columns within the same entity (i.e. an ",(0,a.kt)("inlineCode",{parentName:"p"},"Author"),"s initials only require knowing the same ",(0,a.kt)("inlineCode",{parentName:"p"},"Author"),"'s ",(0,a.kt)("inlineCode",{parentName:"p"},"firstName")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"lastName"),"), so do not need to load any other entities to calculate their value."),(0,a.kt)("p",{parentName:"li"},"Async derived values do rely on fields from other entities (i.e. an ",(0,a.kt)("inlineCode",{parentName:"p"},"Author"),"'s number of books requires loading the ",(0,a.kt)("inlineCode",{parentName:"p"},"author.books")," one-to-many collection), and so need to load references/collections before calculating their value.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Persisted vs. Unpersisted"),(0,a.kt)("p",{parentName:"li"},"Persisted derived fields have their latest value stored in the database, typically for quick access on summary screens, filtering, or exposing the values to external systems like a data warehouse."),(0,a.kt)("p",{parentName:"li"},"Unpersisted derived fields are not stored in the database, and have their value recalculated every time they're accessed."))),(0,a.kt)("p",null,"And so there are 4 combinations (async vs. sync ",(0,a.kt)("inlineCode",{parentName:"p"},"x")," persisted vs. unpersisted), and Joist has an approach for modeling each combination."),(0,a.kt)("h2",{id:"synchronous-unpersisted-fields"},"Synchronous, Unpersisted Fields"),(0,a.kt)("p",null,"For synchronous, unpersisted fields, you can just implement these as getters in your domain objects:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'export class Author {\n  /** Implements the business logic for an unpersisted derived value. */\n  get fullName(): string {\n    return this.firstName + (this.lastName ? ` ${this.lastName}` : "");\n  }\n}\n')),(0,a.kt)("h2",{id:"synchronous-persisted-fields"},"Synchronous, Persisted Fields"),(0,a.kt)("p",null,"For synchronous, persisted fields, there will be a column in the database to hold the value, i.e. ",(0,a.kt)("inlineCode",{parentName:"p"},"authors.initials"),", which you can mark as ",(0,a.kt)("inlineCode",{parentName:"p"},"sync")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"joist-codegen.json"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "entities": {\n    "Author": {\n      "fields": {\n        "initials": { "derived": "sync" }\n      }\n    }\n  }\n}\n')),(0,a.kt)("p",null,"This will cause the ",(0,a.kt)("inlineCode",{parentName:"p"},"Author.initials")," field to not have a setter, only an ",(0,a.kt)("inlineCode",{parentName:"p"},"abstract")," getter than you must implement:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'export class Author {\n  /** Implements the business logic for a (synchronous) persisted derived value. */\n  get initials(): string {\n    return (this.firstName || "")[0] + (this.lastName !== undefined ? this.lastName[0] : "");\n  }\n}\n')),(0,a.kt)("p",null,"This getter will be automatically called by Joist during any ",(0,a.kt)("inlineCode",{parentName:"p"},"INSERT")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"UPDATE")," of ",(0,a.kt)("inlineCode",{parentName:"p"},"Author"),", to determine the latest value."),(0,a.kt)("p",null,"Because of this, synchronous persisted derived fields should be cheap to calculate. "),(0,a.kt)("h2",{id:"asynchronous-unpersisted-fields"},"Asynchronous, Unpersisted Fields"),(0,a.kt)("p",null,"For async, unpersisted fields, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"hasAsyncProperty"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'export class Author {\n  /** Example of an async property that can be loaded via a populate hint. */\n  readonly numberOfBooks: AsyncProperty<Author, number> = hasAsyncProperty("books", (a) => {\n    return a.books.get.length;\n  });\n}\n')),(0,a.kt)("p",null,"Because it's async, the property must be loaded with a populate hint:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'const a = await em.load(Author, "a:1", "numberOfBooks");\nconsole.log(a.numberOfBooks.get);\n')),(0,a.kt)("h2",{id:"asynchronous-persisted-fields"},"Asynchronous, Persisted Fields"),(0,a.kt)("p",null,"For async, persisted fields, there will be a column in the database to hold the value, i.e. ",(0,a.kt)("inlineCode",{parentName:"p"},"authors.number_of_books"),", which you can mark as ",(0,a.kt)("inlineCode",{parentName:"p"},"async")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"joist-codegen.json"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "entities": {\n    "Author": {\n      "fields": {\n        "numberOfBooks": { "derived": "async" }\n      }\n    }\n  }\n}\n')),(0,a.kt)("p",null,"And then configure it via a call to the ",(0,a.kt)("inlineCode",{parentName:"p"},"config")," API:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'authorConfig.setAsyncDerivedField("numberOfBooks", "books", (author) => {\n  return author.books.get.length;\n});\n')),(0,a.kt)("p",null,"Joist will call this lambda:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"When the ",(0,a.kt)("inlineCode",{parentName:"li"},"Author")," is initially created"),(0,a.kt)("li",{parentName:"ol"},"When the ",(0,a.kt)("inlineCode",{parentName:"li"},"Author")," is updated"),(0,a.kt)("li",{parentName:"ol"},"Whenever one of the ",(0,a.kt)("inlineCode",{parentName:"li"},"Author"),"'s books changes")),(0,a.kt)("p",null,"For example, in this scenario:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'const a1 = await em.load(Author, "a:1");\nconst a2 = await em.load(Author, "a:2");\n')))}m.isMDXComponent=!0}}]);