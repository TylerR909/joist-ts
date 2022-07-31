"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[387],{5318:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=i,h=c["".concat(s,".").concat(m)]||c[m]||p[m]||r;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8878:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var a=n(2685),i=n(1244),r=(n(7378),n(5318)),o=["components"],l={title:"Validation Rules",sidebar_position:3},s=void 0,u={unversionedId:"modeling/validation-rules",id:"modeling/validation-rules",title:"Validation Rules",description:"Entities can have validation rules that are run during EntityManager.flush():",source:"@site/docs/modeling/validation-rules.md",sourceDirName:"modeling",slug:"/modeling/validation-rules",permalink:"/docs/modeling/validation-rules",draft:!1,editUrl:"https://github.com/stephen/joist-ts/edit/main/docs/docs/modeling/validation-rules.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Validation Rules",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Relations",permalink:"/docs/modeling/relations"},next:{title:"Enum Tables",permalink:"/docs/modeling/enum-tables"}},d={},p=[{value:"Reactive Validation Rules",id:"reactive-validation-rules",level:2},{value:"Reactive Hints",id:"reactive-hints",level:3},{value:"Built-in Rules",id:"built-in-rules",level:2},{value:"Required Fields",id:"required-fields",level:3},{value:"Cannot Be Updated",id:"cannot-be-updated",level:3}],c={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Entities can have validation rules that are run during ",(0,r.kt)("inlineCode",{parentName:"p"},"EntityManager.flush()"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'import { authorConfig as config } from "./entities"\n\nclass Author extends AuthorCodegen {}\n\n// Rules are added by calls to config.addRule\nconfig.addRule((author) => {\n  if (author.firstName && author.firstName === author.lastName) {\n    return "firstName and lastName must be different";\n  }\n});\n\n// Rules can be also async\nconfig.addRule(async (author) => {\n  // Note: As-is this rule will not re-run whenever our has has a new book;\n  // see the next section on "Reactive Validation Rules" for how to fix this\n  const books = await author.books.load();\n  if (books.length === 0) {\n    return "Must have at least one book";\n  }\n});\n')),(0,r.kt)("p",null,"If any validation rule returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", i.e. an error message, then ",(0,r.kt)("inlineCode",{parentName:"p"},"flush()")," will throw a ",(0,r.kt)("inlineCode",{parentName:"p"},"ValidationErrors")," error and not issue any ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT"),"s or ",(0,r.kt)("inlineCode",{parentName:"p"},"UPDATE"),"s to the database for any entity changed in the current ",(0,r.kt)("inlineCode",{parentName:"p"},"EntityManager"),"."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you would like to skip validation rules, you can pass ",(0,r.kt)("inlineCode",{parentName:"p"},"skipValidation: true")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"flush()"),". Use this technique with caution, as it can create invalid entities.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Joist's API of calling ",(0,r.kt)("inlineCode",{parentName:"p"},"config.addRule"),' is non-traditional in that validation rules "live outside the entity", i.e. they are not inside a ',(0,r.kt)("inlineCode",{parentName:"p"},"validate()")," method on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Author")," class."),(0,r.kt)("p",{parentName:"admonition"},"This setup is intentional, because in the next section, it allows Joist to use reactive validation hints to discover when rules should run (i.e. when ",(0,r.kt)("inlineCode",{parentName:"p"},"Book.title")," changes, re-run this specific ",(0,r.kt)("inlineCode",{parentName:"p"},"Author")," validation rule), even if main entity (",(0,r.kt)("inlineCode",{parentName:"p"},"Author"),") hasn't been loaded from the database yet (or potentially the ",(0,r.kt)("inlineCode",{parentName:"p"},"Author")," class has not even been instantiated yet)."),(0,r.kt)("p",{parentName:"admonition"},"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/stephenh/joist-ts/issues/198"},"Issues 198")," for tracking ideas around this.")),(0,r.kt)("h2",{id:"reactive-validation-rules"},"Reactive Validation Rules"),(0,r.kt)("p",null,"Validation rules can also use a reactive hint (similar to Joist's load hints) to run cross-entity validation logic."),(0,r.kt)("p",null,"The reactive hints include which fields the rule needs to read, and then Joist will ",(0,r.kt)("strong",{parentName:"p"},"automatically invoke the rule")," whenever any field in the hint changes, even if it's on another entity (i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"Book.title"),"), and the rule's main entity (i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"Author"),") hasn't been loaded from the database yet. "),(0,r.kt)("p",null,"For example this rule:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'// Example of reactive rule being fired on Book change\nconfig.addRule({ books: ["title"], firstName: {} }, async (a) => {\n  if (a.books.get.length > 0 && a.books.get.find((b) => b.title === a.firstName)) {\n    return "A book title cannot be the author\'s firstName";\n  }\n});\n')),(0,r.kt)("p",null,"If your database has five entities:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Author:1 firstName=a1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Author:2 firstName=a2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Book:1 title=b1 author=Author:1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Book:2 title=b2 author=Author:1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Book:3 title=b3 author=Author:2"))),(0,r.kt)("p",null,"Anytime ",(0,r.kt)("inlineCode",{parentName:"p"},"Book:1")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Book:2")," have their ",(0,r.kt)("inlineCode",{parentName:"p"},"title")," changed, Joist will automatically load ",(0,r.kt)("inlineCode",{parentName:"p"},"Author:1")," and re-run the validation rule."),(0,r.kt)("p",null,"To ensure validation rules only access fields that their hint declares, the lambda is passed a special ",(0,r.kt)("inlineCode",{parentName:"p"},'Reacted<Author, { books: "title", firstName: {}}')," mapped type that only allows access to the ",(0,r.kt)("inlineCode",{parentName:"p"},"title")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"firstName")," fields."),(0,r.kt)("h3",{id:"reactive-hints"},"Reactive Hints"),(0,r.kt)("p",null,"Reactive hints can be either a single field name, an array of field names, or a nested hash."),(0,r.kt)("p",null,"For example, reactive hints on an ",(0,r.kt)("inlineCode",{parentName:"p"},"Author")," might be:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"firstName"')," - run whenever our ",(0,r.kt)("inlineCode",{parentName:"li"},"firstName")," field changes"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'["firstName", "lastName"]')," - run whenever our ",(0,r.kt)("inlineCode",{parentName:"li"},"firstName")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"lastName")," fields change"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'{ books: "title" }')," - run whenever any of our books' ",(0,r.kt)("inlineCode",{parentName:"li"},"title"),"s change"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'{ books: { title: {}, reviews: "rating" }')," - run whenever any of our books' ",(0,r.kt)("inlineCode",{parentName:"li"},"title"),"s change, or any of our books' reviews' ",(0,r.kt)("inlineCode",{parentName:"li"},"rating"),"s change",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This is an example of, when you want a nested hint for both a child/parent and as well as field, we use ",(0,r.kt)("inlineCode",{parentName:"li"},"title: {}"),' as a "nested hint" even though the ',(0,r.kt)("inlineCode",{parentName:"li"},"title")," is itself a terminal hint. ")))),(0,r.kt)("p",null,"And reactive hints on a ",(0,r.kt)("inlineCode",{parentName:"p"},"Book")," might be"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'{ author: "firstName" }')," - run whenever our author's ",(0,r.kt)("inlineCode",{parentName:"li"},"firstName")," changes"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'{ author: ["firstName", "lastName" }')," - run whenever our author's ",(0,r.kt)("inlineCode",{parentName:"li"},"firstName")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"lastName")," changes")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If your validation rules needs to access a field, without causing reactivity to it, you can use a ",(0,r.kt)("inlineCode",{parentName:"p"},":ro")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"_ro")," suffix in the field name. For example:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'// Example of using firstName for the error message, so not needing to react on it\nconfig.addRule(["books", "firstName:ro"], (a) => {\n  if (a.books.get.length === 13) {\n    return `Author ${a.firstName} cannot have 13 books`;\n  }\n});\n'))),(0,r.kt)("h2",{id:"built-in-rules"},"Built-in Rules"),(0,r.kt)("h3",{id:"required-fields"},"Required Fields"),(0,r.kt)("p",null,"Joist's ",(0,r.kt)("inlineCode",{parentName:"p"},"joist-codegen")," automatically adds required rules to any column with a not null constraint."),(0,r.kt)("p",null,"For example, in the ",(0,r.kt)("inlineCode",{parentName:"p"},"AuthorCodegen.ts")," base class, ",(0,r.kt)("inlineCode",{parentName:"p"},"joist-codegen")," automatically adds the lines:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'authorConfig.addRule(newRequiredRule("firstName"));\nauthorConfig.addRule(newRequiredRule("initials"));\nauthorConfig.addRule(newRequiredRule("numberOfBooks"));\nauthorConfig.addRule(newRequiredRule("createdAt"));\nauthorConfig.addRule(newRequiredRule("updatedAt"));\n')),(0,r.kt)("h3",{id:"cannot-be-updated"},"Cannot Be Updated"),(0,r.kt)("p",null,'If a field can only be set on create (i.e. a "parent"), you can use ',(0,r.kt)("inlineCode",{parentName:"p"},"cannotBeUpdated"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'// Don\'t let the parent change\nconfig.addRule(cannotBeUpdated("parent"));\n')),(0,r.kt)("p",null,"Also, you can make this conditional, i.e. on a status:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'// Only allow updating cost while draft\nconfig.addRule(cannotBeUpdated("cost", e => e.isDraft));\n')))}m.isMDXComponent=!0}}]);