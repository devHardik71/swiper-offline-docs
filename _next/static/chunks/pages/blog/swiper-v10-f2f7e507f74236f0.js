(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[431],{4510:function(s,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/swiper-v10",function(){return e(7367)}])},7367:function(s,n,e){"use strict";e.r(n),e.d(n,{meta:function(){return l}});var a=e(5893),t=e(1151),c=e(5322);let l={title:"Swiper v10",date:"2023-07-03T10:00:00.000Z",image:"/images/blog/swiper-v10/cover.png",published:!0},MDXLayout=s=>{let{children:n}=s;return(0,a.jsx)(c.j,{meta:l,children:n})};function _createMdxContent(s){let n=Object.assign({p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code",span:"span",a:"a",ul:"ul",li:"li"},(0,t.ah)(),s.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"We are glad to announce all new Swiper v10. Let's look at main new features arrived in this release."}),"\n",(0,a.jsx)(n.h2,{id:"swiper-element",children:"Swiper Element"}),"\n",(0,a.jsx)(n.p,{children:"There are a lot of improvements for Swiper web component."}),"\n",(0,a.jsx)(n.h3,{id:"container-in-shadow-dom",children:"Container in Shadow DOM"}),"\n",(0,a.jsx)(n.p,{children:"First of all, we moved main Swiper container element to the Shadow DOM, it allows to fix some issues (especially in Safari) with the 3D perspective of 3D effects (except Cube which is still not displayed correctly due to Safari bug)"}),"\n",(0,a.jsx)(n.p,{children:"In v9:"}),"\n",(0,a.jsx)(n.pre,{className:"language-html",children:(0,a.jsxs)(n.code,{className:"language-html",children:[(0,a.jsxs)(n.span,{className:"token tag",children:[(0,a.jsxs)(n.span,{className:"token tag",children:[(0,a.jsx)(n.span,{className:"token punctuation",children:"<"}),"swiper-container"]}),(0,a.jsx)(n.span,{className:"token punctuation",children:">"})]}),"\n  ",(0,a.jsx)(n.span,{className:"token comment",children:"<!-- shadow -->"}),"\n  ",(0,a.jsxs)(n.span,{className:"token tag",children:[(0,a.jsxs)(n.span,{className:"token tag",children:[(0,a.jsx)(n.span,{className:"token punctuation",children:"<"}),"div"]})," ",(0,a.jsx)(n.span,{className:"token attr-name",children:"class"}),(0,a.jsxs)(n.span,{className:"token attr-value",children:[(0,a.jsx)(n.span,{className:"token punctuation attr-equals",children:"="}),(0,a.jsx)(n.span,{className:"token punctuation",children:'"'}),"swiper-wrapper",(0,a.jsx)(n.span,{className:"token punctuation",children:'"'})]}),(0,a.jsx)(n.span,{className:"token punctuation",children:">"})]}),"\n    ",(0,a.jsxs)(n.span,{className:"token tag",children:[(0,a.jsxs)(n.span,{className:"token tag",children:[(0,a.jsx)(n.span,{className:"token punctuation",children:"<"}),"slot"]})," ",(0,a.jsx)(n.span,{className:"token punctuation",children:"/>"})]}),"\n  ",(0,a.jsxs)(n.span,{className:"token tag",children:[(0,a.jsxs)(n.span,{className:"token tag",children:[(0,a.jsx)(n.span,{className:"token punctuation",children:"</"}),"div"]}),(0,a.jsx)(n.span,{className:"token punctuation",children:">"})]}),"\n",(0,a.jsxs)(n.span,{className:"token tag",children:[(0,a.jsxs)(n.span,{className:"token tag",children:[(0,a.jsx)(n.span,{className:"token punctuation",children:"</"}),"swiper-container"]}),(0,a.jsx)(n.span,{className:"token punctuation",children:">"})]}),"\n"]})}),"\n",(0,a.jsx)(n.p,{children:"In v10:"}),"\n",(0,a.jsx)(n.pre,{className:"language-html",children:(0,a.jsxs)(n.code,{className:"language-html",children:[(0,a.jsxs)(n.span,{className:"token tag",children:[(0,a.jsxs)(n.span,{className:"token tag",children:[(0,a.jsx)(n.span,{className:"token punctuation",children:"<"}),"swiper-container"]}),(0,a.jsx)(n.span,{className:"token punctuation",children:">"})]}),"\n  ",(0,a.jsx)(n.span,{className:"token comment",children:"<!-- shadow -->"}),"\n  ",(0,a.jsxs)(n.span,{className:"token tag",children:[(0,a.jsxs)(n.span,{className:"token tag",children:[(0,a.jsx)(n.span,{className:"token punctuation",children:"<"}),"div"]})," ",(0,a.jsx)(n.span,{className:"token attr-name",children:"class"}),(0,a.jsxs)(n.span,{className:"token attr-value",children:[(0,a.jsx)(n.span,{className:"token punctuation attr-equals",children:"="}),(0,a.jsx)(n.span,{className:"token punctuation",children:'"'}),"swiper",(0,a.jsx)(n.span,{className:"token punctuation",children:'"'})]}),(0,a.jsx)(n.span,{className:"token punctuation",children:">"})]}),"\n    ",(0,a.jsxs)(n.span,{className:"token tag",children:[(0,a.jsxs)(n.span,{className:"token tag",children:[(0,a.jsx)(n.span,{className:"token punctuation",children:"<"}),"div"]})," ",(0,a.jsx)(n.span,{className:"token attr-name",children:"class"}),(0,a.jsxs)(n.span,{className:"token attr-value",children:[(0,a.jsx)(n.span,{className:"token punctuation attr-equals",children:"="}),(0,a.jsx)(n.span,{className:"token punctuation",children:'"'}),"swiper-wrapper",(0,a.jsx)(n.span,{className:"token punctuation",children:'"'})]}),(0,a.jsx)(n.span,{className:"token punctuation",children:">"})]}),"\n      ",(0,a.jsxs)(n.span,{className:"token tag",children:[(0,a.jsxs)(n.span,{className:"token tag",children:[(0,a.jsx)(n.span,{className:"token punctuation",children:"<"}),"slot"]})," ",(0,a.jsx)(n.span,{className:"token punctuation",children:"/>"})]}),"\n    ",(0,a.jsxs)(n.span,{className:"token tag",children:[(0,a.jsxs)(n.span,{className:"token tag",children:[(0,a.jsx)(n.span,{className:"token punctuation",children:"</"}),"div"]}),(0,a.jsx)(n.span,{className:"token punctuation",children:">"})]}),"\n  ",(0,a.jsxs)(n.span,{className:"token tag",children:[(0,a.jsxs)(n.span,{className:"token tag",children:[(0,a.jsx)(n.span,{className:"token punctuation",children:"</"}),"div"]}),(0,a.jsx)(n.span,{className:"token punctuation",children:">"})]}),"\n",(0,a.jsxs)(n.span,{className:"token tag",children:[(0,a.jsxs)(n.span,{className:"token tag",children:[(0,a.jsx)(n.span,{className:"token punctuation",children:"</"}),"swiper-container"]}),(0,a.jsx)(n.span,{className:"token punctuation",children:">"})]}),"\n"]})}),"\n",(0,a.jsx)(n.h3,{id:"navigation-buttons",children:"Navigation Buttons"}),"\n",(0,a.jsx)(n.p,{children:"Swiper Element now uses SVG element for Navigation buttons instead of icon font used before. It should help with the specific content security policies."}),"\n",(0,a.jsx)(n.h3,{id:"json-in-attributes",children:"JSON In Attributes"}),"\n",(0,a.jsxs)(n.p,{children:["With version 10 Swiper Element supports JSON in attributes that expected to receive ",(0,a.jsx)(n.code,{children:"Object"}),". For example:"]}),"\n",(0,a.jsx)(n.pre,{className:"language-html",children:(0,a.jsxs)(n.code,{className:"language-html",children:[(0,a.jsxs)(n.span,{className:"token tag",children:[(0,a.jsxs)(n.span,{className:"token tag",children:[(0,a.jsx)(n.span,{className:"token punctuation",children:"<"}),"swiper-container"]})," ",(0,a.jsx)(n.span,{className:"token attr-name",children:"breakpoints"}),(0,a.jsxs)(n.span,{className:"token attr-value",children:[(0,a.jsx)(n.span,{className:"token punctuation attr-equals",children:"="}),(0,a.jsx)(n.span,{className:"token punctuation",children:"'"}),"{",(0,a.jsx)(n.span,{className:"token punctuation",children:'"'}),"768",(0,a.jsx)(n.span,{className:"token punctuation",children:'"'}),": {",(0,a.jsx)(n.span,{className:"token punctuation",children:'"'}),"slidesPerView",(0,a.jsx)(n.span,{className:"token punctuation",children:'"'}),": 3}}",(0,a.jsx)(n.span,{className:"token punctuation",children:"'"})]}),(0,a.jsx)(n.span,{className:"token punctuation",children:">"})]}),"\n  ...\n",(0,a.jsxs)(n.span,{className:"token tag",children:[(0,a.jsxs)(n.span,{className:"token tag",children:[(0,a.jsx)(n.span,{className:"token punctuation",children:"</"}),"swiper-container"]}),(0,a.jsx)(n.span,{className:"token punctuation",children:">"})]}),"\n"]})}),"\n",(0,a.jsxs)(n.p,{children:["It is not recommended and it is better to pass ",(0,a.jsx)(n.a,{href:"/element#parameters-as-props",children:"parameters as props"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"swiper-element-styles",children:"Swiper Element Styles"}),"\n",(0,a.jsx)(n.p,{children:"Swiper web component doesn't inject global styles to document anymore. In this case if you will use custom navigation, pagination, scrollbar elements they will be not styled."}),"\n",(0,a.jsx)(n.h2,{id:"package-stucture",children:"Package Stucture"}),"\n",(0,a.jsx)(n.p,{children:"Main breaking change in v10 is the simplified package structure:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"most of the files (except modules) are now in the package root"}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:".esm.js"})," scripts replaced with ",(0,a.jsx)(n.code,{children:".mjs"})]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:".browser.esm.js"})," scripts are now same ",(0,a.jsx)(n.code,{children:".mjs"})]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["You can read more about it in ",(0,a.jsx)(n.a,{href:"/migration-guide-v10#package-structure",children:"v10 migration guide"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"modules-import",children:"Modules Import"}),"\n",(0,a.jsxs)(n.p,{children:["For better tree-shaking all modules must be imported from ",(0,a.jsx)(n.code,{children:"/swiper/modules"})]}),"\n",(0,a.jsx)(n.p,{children:"In v9:"}),"\n",(0,a.jsx)(n.pre,{className:"language-js",children:(0,a.jsxs)(n.code,{className:"language-js",children:[(0,a.jsx)(n.span,{className:"token keyword module",children:"import"})," ",(0,a.jsxs)(n.span,{className:"token imports",children:[(0,a.jsx)(n.span,{className:"token maybe-class-name",children:"Swiper"}),(0,a.jsx)(n.span,{className:"token punctuation",children:","})," ",(0,a.jsx)(n.span,{className:"token punctuation",children:"{"})," ",(0,a.jsx)(n.span,{className:"token maybe-class-name",children:"Navigation"}),(0,a.jsx)(n.span,{className:"token punctuation",children:","})," ",(0,a.jsx)(n.span,{className:"token maybe-class-name",children:"Pagination"})," ",(0,a.jsx)(n.span,{className:"token punctuation",children:"}"})]})," ",(0,a.jsx)(n.span,{className:"token keyword module",children:"from"})," ",(0,a.jsx)(n.span,{className:"token string",children:"'swiper'"}),(0,a.jsx)(n.span,{className:"token punctuation",children:";"}),"\n"]})}),"\n",(0,a.jsx)(n.p,{children:"In v10:"}),"\n",(0,a.jsx)(n.pre,{className:"language-js",children:(0,a.jsxs)(n.code,{className:"language-js",children:[(0,a.jsx)(n.span,{className:"token keyword module",children:"import"})," ",(0,a.jsx)(n.span,{className:"token imports",children:(0,a.jsx)(n.span,{className:"token maybe-class-name",children:"Swiper"})})," ",(0,a.jsx)(n.span,{className:"token keyword module",children:"from"})," ",(0,a.jsx)(n.span,{className:"token string",children:"'swiper'"}),(0,a.jsx)(n.span,{className:"token punctuation",children:";"}),"\n",(0,a.jsx)(n.span,{className:"token keyword module",children:"import"})," ",(0,a.jsxs)(n.span,{className:"token imports",children:[(0,a.jsx)(n.span,{className:"token punctuation",children:"{"})," ",(0,a.jsx)(n.span,{className:"token maybe-class-name",children:"Navigation"}),(0,a.jsx)(n.span,{className:"token punctuation",children:","})," ",(0,a.jsx)(n.span,{className:"token maybe-class-name",children:"Pagination"})," ",(0,a.jsx)(n.span,{className:"token punctuation",children:"}"})]})," ",(0,a.jsx)(n.span,{className:"token keyword module",children:"from"})," ",(0,a.jsx)(n.span,{className:"token string",children:"'swiper/modules'"}),(0,a.jsx)(n.span,{className:"token punctuation",children:";"}),"\n"]})}),"\n",(0,a.jsx)(n.h2,{id:"browser-modules",children:"Browser Modules"}),"\n",(0,a.jsx)(n.p,{children:"Now, we can use ES modules and use only those we need directly in browser:"}),"\n","\n",(0,a.jsx)(n.pre,{className:"language-html",children:(0,a.jsxs)(n.code,{className:"language-html",children:[(0,a.jsxs)(n.span,{className:"token tag",children:[(0,a.jsxs)(n.span,{className:"token tag",children:[(0,a.jsx)(n.span,{className:"token punctuation",children:"<"}),"link"]})," ",(0,a.jsx)(n.span,{className:"token attr-name",children:"rel"}),(0,a.jsxs)(n.span,{className:"token attr-value",children:[(0,a.jsx)(n.span,{className:"token punctuation attr-equals",children:"="}),(0,a.jsx)(n.span,{className:"token punctuation",children:'"'}),"stylesheet",(0,a.jsx)(n.span,{className:"token punctuation",children:'"'})]})," ",(0,a.jsx)(n.span,{className:"token attr-name",children:"href"}),(0,a.jsxs)(n.span,{className:"token attr-value",children:[(0,a.jsx)(n.span,{className:"token punctuation attr-equals",children:"="}),(0,a.jsx)(n.span,{className:"token punctuation",children:'"'}),"https://cdn.jsdelivr.net/npm/swiper@11/swiper.min.css",(0,a.jsx)(n.span,{className:"token punctuation",children:'"'})]})," ",(0,a.jsx)(n.span,{className:"token punctuation",children:"/>"})]}),"\n",(0,a.jsxs)(n.span,{className:"token tag",children:[(0,a.jsxs)(n.span,{className:"token tag",children:[(0,a.jsx)(n.span,{className:"token punctuation",children:"<"}),"link"]})," ",(0,a.jsx)(n.span,{className:"token attr-name",children:"rel"}),(0,a.jsxs)(n.span,{className:"token attr-value",children:[(0,a.jsx)(n.span,{className:"token punctuation attr-equals",children:"="}),(0,a.jsx)(n.span,{className:"token punctuation",children:'"'}),"stylesheet",(0,a.jsx)(n.span,{className:"token punctuation",children:'"'})]})," ",(0,a.jsx)(n.span,{className:"token attr-name",children:"href"}),(0,a.jsxs)(n.span,{className:"token attr-value",children:[(0,a.jsx)(n.span,{className:"token punctuation attr-equals",children:"="}),(0,a.jsx)(n.span,{className:"token punctuation",children:'"'}),"https://cdn.jsdelivr.net/npm/swiper@11/modules/navigation.min.css",(0,a.jsx)(n.span,{className:"token punctuation",children:'"'})]})," ",(0,a.jsx)(n.span,{className:"token punctuation",children:"/>"})]}),"\n",(0,a.jsxs)(n.span,{className:"token tag",children:[(0,a.jsxs)(n.span,{className:"token tag",children:[(0,a.jsx)(n.span,{className:"token punctuation",children:"<"}),"link"]})," ",(0,a.jsx)(n.span,{className:"token attr-name",children:"rel"}),(0,a.jsxs)(n.span,{className:"token attr-value",children:[(0,a.jsx)(n.span,{className:"token punctuation attr-equals",children:"="}),(0,a.jsx)(n.span,{className:"token punctuation",children:'"'}),"stylesheet",(0,a.jsx)(n.span,{className:"token punctuation",children:'"'})]})," ",(0,a.jsx)(n.span,{className:"token attr-name",children:"href"}),(0,a.jsxs)(n.span,{className:"token attr-value",children:[(0,a.jsx)(n.span,{className:"token punctuation attr-equals",children:"="}),(0,a.jsx)(n.span,{className:"token punctuation",children:'"'}),"https://cdn.jsdelivr.net/npm/swiper@11/modules/pagination.min.css",(0,a.jsx)(n.span,{className:"token punctuation",children:'"'})]})," ",(0,a.jsx)(n.span,{className:"token punctuation",children:"/>"})]}),"\n\n",(0,a.jsxs)(n.span,{className:"token tag",children:[(0,a.jsxs)(n.span,{className:"token tag",children:[(0,a.jsx)(n.span,{className:"token punctuation",children:"<"}),"div"]})," ",(0,a.jsx)(n.span,{className:"token attr-name",children:"class"}),(0,a.jsxs)(n.span,{className:"token attr-value",children:[(0,a.jsx)(n.span,{className:"token punctuation attr-equals",children:"="}),(0,a.jsx)(n.span,{className:"token punctuation",children:'"'}),"swiper",(0,a.jsx)(n.span,{className:"token punctuation",children:'"'})]}),(0,a.jsx)(n.span,{className:"token punctuation",children:">"})]}),"...",(0,a.jsxs)(n.span,{className:"token tag",children:[(0,a.jsxs)(n.span,{className:"token tag",children:[(0,a.jsx)(n.span,{className:"token punctuation",children:"</"}),"div"]}),(0,a.jsx)(n.span,{className:"token punctuation",children:">"})]}),"\n\n",(0,a.jsxs)(n.span,{className:"token tag",children:[(0,a.jsxs)(n.span,{className:"token tag",children:[(0,a.jsx)(n.span,{className:"token punctuation",children:"<"}),"script"]})," ",(0,a.jsx)(n.span,{className:"token attr-name",children:"type"}),(0,a.jsxs)(n.span,{className:"token attr-value",children:[(0,a.jsx)(n.span,{className:"token punctuation attr-equals",children:"="}),(0,a.jsx)(n.span,{className:"token punctuation",children:'"'}),"module",(0,a.jsx)(n.span,{className:"token punctuation",children:'"'})]}),(0,a.jsx)(n.span,{className:"token punctuation",children:">"})]}),(0,a.jsx)(n.span,{className:"token script",children:(0,a.jsxs)(n.span,{className:"token language-javascript",children:["\n  ",(0,a.jsx)(n.span,{className:"token keyword module",children:"import"})," ",(0,a.jsx)(n.span,{className:"token imports",children:(0,a.jsx)(n.span,{className:"token maybe-class-name",children:"Swiper"})})," ",(0,a.jsx)(n.span,{className:"token keyword module",children:"from"})," ",(0,a.jsx)(n.span,{className:"token string",children:"'https://cdn.jsdelivr.net/npm/swiper@11/swiper.min.mjs'"}),"\n  ",(0,a.jsx)(n.span,{className:"token keyword module",children:"import"})," ",(0,a.jsx)(n.span,{className:"token imports",children:(0,a.jsx)(n.span,{className:"token maybe-class-name",children:"Navigation"})})," ",(0,a.jsx)(n.span,{className:"token keyword module",children:"from"})," ",(0,a.jsx)(n.span,{className:"token string",children:"'https://cdn.jsdelivr.net/npm/swiper@11/modules/navigation.min.mjs'"}),"\n  ",(0,a.jsx)(n.span,{className:"token keyword module",children:"import"})," ",(0,a.jsx)(n.span,{className:"token imports",children:(0,a.jsx)(n.span,{className:"token maybe-class-name",children:"Pagination"})})," ",(0,a.jsx)(n.span,{className:"token keyword module",children:"from"})," ",(0,a.jsx)(n.span,{className:"token string",children:"'https://cdn.jsdelivr.net/npm/swiper@11/modules/pagination.min.mjs'"}),"\n\n  ",(0,a.jsx)(n.span,{className:"token keyword",children:"const"})," swiper ",(0,a.jsx)(n.span,{className:"token operator",children:"="})," ",(0,a.jsx)(n.span,{className:"token keyword",children:"new"})," ",(0,a.jsx)(n.span,{className:"token class-name",children:"Swiper"}),(0,a.jsx)(n.span,{className:"token punctuation",children:"("}),(0,a.jsx)(n.span,{className:"token string",children:"'.swiper'"}),(0,a.jsx)(n.span,{className:"token punctuation",children:","})," ",(0,a.jsx)(n.span,{className:"token punctuation",children:"{"}),"\n    ",(0,a.jsx)(n.span,{className:"token literal-property property",children:"modules"}),(0,a.jsx)(n.span,{className:"token operator",children:":"})," ",(0,a.jsx)(n.span,{className:"token punctuation",children:"["}),(0,a.jsx)(n.span,{className:"token maybe-class-name",children:"Navigation"}),(0,a.jsx)(n.span,{className:"token punctuation",children:","})," ",(0,a.jsx)(n.span,{className:"token maybe-class-name",children:"Pagination"}),(0,a.jsx)(n.span,{className:"token punctuation",children:"]"}),(0,a.jsx)(n.span,{className:"token punctuation",children:","}),"\n    ",(0,a.jsx)(n.span,{className:"token spread operator",children:"..."}),"\n  ",(0,a.jsx)(n.span,{className:"token punctuation",children:"}"}),(0,a.jsx)(n.span,{className:"token punctuation",children:")"}),"\n"]})}),(0,a.jsxs)(n.span,{className:"token tag",children:[(0,a.jsxs)(n.span,{className:"token tag",children:[(0,a.jsx)(n.span,{className:"token punctuation",children:"</"}),"script"]}),(0,a.jsx)(n.span,{className:"token punctuation",children:">"})]}),"\n"]})}),"\n",(0,a.jsx)(n.h2,{id:"whats-next",children:"What's Next?"}),"\n",(0,a.jsx)(n.p,{children:"It was an overview of most significant changes and new features."}),"\n",(0,a.jsxs)(n.p,{children:["For all changes list please refer to ",(0,a.jsx)(n.a,{href:"/changelog",children:"full v10 changelog"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["And it is recommended to check the ",(0,a.jsx)(n.a,{href:"/migration-guide-v10",children:"Migration guide to v10"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"ps",children:"P.S."}),"\n",(0,a.jsx)(n.p,{children:"And as always, if you love Swiper, please, support project by donating or pledging:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["on Patreon: ",(0,a.jsx)(n.a,{href:"https://www.patreon.com/swiperjs",children:"https://www.patreon.com/swiperjs"})]}),"\n",(0,a.jsxs)(n.li,{children:["on Open Collective: ",(0,a.jsx)(n.a,{href:"https://opencollective.com/swiper",children:"https://opencollective.com/swiper"})]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"And checking our premium projects:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://uiinitiative.com",children:"UI Initiative"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://studio.swiperjs.com",children:"Swiper Studio"})}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Your support means a lot for us!"})]})}n.default=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(MDXLayout,Object.assign({},s,{children:(0,a.jsx)(_createMdxContent,s)}))}}},function(s){s.O(0,[649,322,774,888,179],function(){return s(s.s=4510)}),_N_E=s.O()}]);