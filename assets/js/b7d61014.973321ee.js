(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{218:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(5),a=n(10),p=(n(2),n(341)),i={},o={unversionedId:"generated-config/import-types-preset",id:"generated-config/import-types-preset",isDocsHomePage:!1,title:"import-types-preset",description:"Installation",source:"@site/docs/generated-config/import-types-preset.md",slug:"/generated-config/import-types-preset",permalink:"/docs/generated-config/import-types-preset",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/generated-config/import-types-preset.md",version:"current"},c=[{value:"Installation",id:"installation",children:[]},{value:"API Reference",id:"api-reference",children:[{value:"<code>typesPath</code>",id:"typespath",children:[]},{value:"<code>importTypesNamespace</code>",id:"importtypesnamespace",children:[]}]}],s={toc:c};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(p.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(p.b)("h2",{id:"installation"},"Installation"),Object(p.b)("img",{alt:"import-types-preset plugin version",src:"https://img.shields.io/npm/v/@graphql-codegen/import-types-preset?color=%23e15799&label=plugin\xa0version&style=for-the-badge"}),Object(p.b)("div",{className:"admonition admonition-shell"},Object(p.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(p.b)("h5",{parentName:"div"},Object(p.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(p.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"}),Object(p.b)("path",Object(r.a)({parentName:"svg"},{d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"})),Object(p.b)("path",Object(r.a)({parentName:"svg"},{d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"})))),"Using ",Object(p.b)("inlineCode",{parentName:"h5"},"yarn"))),Object(p.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(p.b)("pre",{parentName:"div"},Object(p.b)("code",Object(r.a)({parentName:"pre"},{}),"yarn add -D @graphql-codegen/import-types-preset\n")))),Object(p.b)("h2",{id:"api-reference"},"API Reference"),Object(p.b)("h3",{id:"typespath"},Object(p.b)("inlineCode",{parentName:"h3"},"typesPath")),Object(p.b)("p",null,"type: ",Object(p.b)("inlineCode",{parentName:"p"},"string")),Object(p.b)("p",null,"Required, should point to the base schema types file.\nThe key of the output is used a the base path for this file."),Object(p.b)("h4",{id:"usage-examples"},"Usage Examples"),Object(p.b)("pre",null,Object(p.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n preset: import-types\n presetConfig:\n   typesPath: types.ts\n plugins:\n   - typescript-operations\n")),Object(p.b)("h3",{id:"importtypesnamespace"},Object(p.b)("inlineCode",{parentName:"h3"},"importTypesNamespace")),Object(p.b)("p",null,"type: ",Object(p.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(p.b)("inlineCode",{parentName:"p"},"Types")),Object(p.b)("p",null,"Optional, override the name of the import namespace used to import from the ",Object(p.b)("inlineCode",{parentName:"p"},"baseTypesPath")," file."),Object(p.b)("h4",{id:"usage-examples-1"},"Usage Examples"),Object(p.b)("pre",null,Object(p.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),"generates:\nsrc/:\n preset: import-types\n presetConfig:\n   typesPath: types.ts\n   importTypesNamespace: SchemaTypes\n plugins:\n   - typescript-operations\n")))}l.isMDXComponent=!0},341:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var r=n(2),a=n.n(r);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,u=m["".concat(i,".").concat(d)]||m[d]||b[d]||p;return n?a.a.createElement(u,o(o({ref:t},s),{},{components:n})):a.a.createElement(u,o({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,i=new Array(p);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<p;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);