(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[164],{6010:function(e,n,s){"use strict";n.Z=function(){for(var e,n,s=0,t="";s<arguments.length;)(e=arguments[s++])&&(n=function r(e){var n,s,t="";if("string"==typeof e||"number"==typeof e)t+=e;else if("object"==typeof e){if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(s=r(e[n]))&&(t&&(t+=" "),t+=s);else for(n in e)e[n]&&(t&&(t+=" "),t+=n)}return t}(e))&&(t&&(t+=" "),t+=n);return t}},2594:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/migration-guide-v10",function(){return s(7433)}])},7433:function(e,n,s){"use strict";s.r(n),s.d(n,{meta:function(){return c}});var t=s(5893),a=s(1151),l=s(6171),i=s(3447);let c={title:"Migration Guide to Swiper 10"},MDXLayout=function(e){let{children:n}=e,s={h1:l.Z.h1,h2:l.Z.h2,h3:l.Z.h3,h4:l.Z.h4};return(0,t.jsx)(a.Zo,{components:s,children:(0,t.jsx)(i.R,{meta:c,children:n})})};function _createMdxContent(e){let n=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre",span:"span",ul:"ul",li:"li"},(0,a.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"swiper-element-layout",children:"Swiper Element Layout"}),"\n",(0,t.jsxs)(n.p,{children:["Swiper Element now comes with additional ",(0,t.jsx)(n.code,{children:'<div class="swiper">'})," main element internal layout."]}),"\n",(0,t.jsx)(n.p,{children:"In v9:"}),"\n",(0,t.jsx)(n.pre,{className:"language-html",children:(0,t.jsxs)(n.code,{className:"language-html",children:[(0,t.jsxs)(n.span,{className:"token tag",children:[(0,t.jsxs)(n.span,{className:"token tag",children:[(0,t.jsx)(n.span,{className:"token punctuation",children:"<"}),"swiper-container"]}),(0,t.jsx)(n.span,{className:"token punctuation",children:">"})]}),"\n  ",(0,t.jsx)(n.span,{className:"token comment",children:"<!-- shadow -->"}),"\n  ",(0,t.jsxs)(n.span,{className:"token tag",children:[(0,t.jsxs)(n.span,{className:"token tag",children:[(0,t.jsx)(n.span,{className:"token punctuation",children:"<"}),"div"]})," ",(0,t.jsx)(n.span,{className:"token attr-name",children:"class"}),(0,t.jsxs)(n.span,{className:"token attr-value",children:[(0,t.jsx)(n.span,{className:"token punctuation attr-equals",children:"="}),(0,t.jsx)(n.span,{className:"token punctuation",children:'"'}),"swiper-wrapper",(0,t.jsx)(n.span,{className:"token punctuation",children:'"'})]}),(0,t.jsx)(n.span,{className:"token punctuation",children:">"})]}),"\n    ",(0,t.jsxs)(n.span,{className:"token tag",children:[(0,t.jsxs)(n.span,{className:"token tag",children:[(0,t.jsx)(n.span,{className:"token punctuation",children:"<"}),"slot"]})," ",(0,t.jsx)(n.span,{className:"token punctuation",children:"/>"})]}),"\n  ",(0,t.jsxs)(n.span,{className:"token tag",children:[(0,t.jsxs)(n.span,{className:"token tag",children:[(0,t.jsx)(n.span,{className:"token punctuation",children:"</"}),"div"]}),(0,t.jsx)(n.span,{className:"token punctuation",children:">"})]}),"\n",(0,t.jsxs)(n.span,{className:"token tag",children:[(0,t.jsxs)(n.span,{className:"token tag",children:[(0,t.jsx)(n.span,{className:"token punctuation",children:"</"}),"swiper-container"]}),(0,t.jsx)(n.span,{className:"token punctuation",children:">"})]}),"\n"]})}),"\n",(0,t.jsx)(n.p,{children:"In v10:"}),"\n",(0,t.jsx)(n.pre,{className:"language-html",children:(0,t.jsxs)(n.code,{className:"language-html",children:[(0,t.jsxs)(n.span,{className:"token tag",children:[(0,t.jsxs)(n.span,{className:"token tag",children:[(0,t.jsx)(n.span,{className:"token punctuation",children:"<"}),"swiper-container"]}),(0,t.jsx)(n.span,{className:"token punctuation",children:">"})]}),"\n  ",(0,t.jsx)(n.span,{className:"token comment",children:"<!-- shadow -->"}),"\n  ",(0,t.jsxs)(n.span,{className:"token tag",children:[(0,t.jsxs)(n.span,{className:"token tag",children:[(0,t.jsx)(n.span,{className:"token punctuation",children:"<"}),"div"]})," ",(0,t.jsx)(n.span,{className:"token attr-name",children:"class"}),(0,t.jsxs)(n.span,{className:"token attr-value",children:[(0,t.jsx)(n.span,{className:"token punctuation attr-equals",children:"="}),(0,t.jsx)(n.span,{className:"token punctuation",children:'"'}),"swiper",(0,t.jsx)(n.span,{className:"token punctuation",children:'"'})]}),(0,t.jsx)(n.span,{className:"token punctuation",children:">"})]}),"\n    ",(0,t.jsxs)(n.span,{className:"token tag",children:[(0,t.jsxs)(n.span,{className:"token tag",children:[(0,t.jsx)(n.span,{className:"token punctuation",children:"<"}),"div"]})," ",(0,t.jsx)(n.span,{className:"token attr-name",children:"class"}),(0,t.jsxs)(n.span,{className:"token attr-value",children:[(0,t.jsx)(n.span,{className:"token punctuation attr-equals",children:"="}),(0,t.jsx)(n.span,{className:"token punctuation",children:'"'}),"swiper-wrapper",(0,t.jsx)(n.span,{className:"token punctuation",children:'"'})]}),(0,t.jsx)(n.span,{className:"token punctuation",children:">"})]}),"\n      ",(0,t.jsxs)(n.span,{className:"token tag",children:[(0,t.jsxs)(n.span,{className:"token tag",children:[(0,t.jsx)(n.span,{className:"token punctuation",children:"<"}),"slot"]})," ",(0,t.jsx)(n.span,{className:"token punctuation",children:"/>"})]}),"\n    ",(0,t.jsxs)(n.span,{className:"token tag",children:[(0,t.jsxs)(n.span,{className:"token tag",children:[(0,t.jsx)(n.span,{className:"token punctuation",children:"</"}),"div"]}),(0,t.jsx)(n.span,{className:"token punctuation",children:">"})]}),"\n  ",(0,t.jsxs)(n.span,{className:"token tag",children:[(0,t.jsxs)(n.span,{className:"token tag",children:[(0,t.jsx)(n.span,{className:"token punctuation",children:"</"}),"div"]}),(0,t.jsx)(n.span,{className:"token punctuation",children:">"})]}),"\n",(0,t.jsxs)(n.span,{className:"token tag",children:[(0,t.jsxs)(n.span,{className:"token tag",children:[(0,t.jsx)(n.span,{className:"token punctuation",children:"</"}),"swiper-container"]}),(0,t.jsx)(n.span,{className:"token punctuation",children:">"})]}),"\n"]})}),"\n",(0,t.jsx)(n.p,{children:"So if you rely and do some tricks with shadow DOM internals, you need to consider new layout."}),"\n",(0,t.jsx)(n.h2,{id:"swiper-element-styles",children:"Swiper Element Styles"}),"\n",(0,t.jsx)(n.p,{children:"Swiper web component doesn't inject global styles to document anymore. In this case if you will use custom navigation, pagination, scrollbar elements they will be not styled."}),"\n",(0,t.jsx)(n.h2,{id:"modules-imports",children:"Modules Imports"}),"\n",(0,t.jsxs)(n.p,{children:["For better tree-shaking all modules must be imported now from ",(0,t.jsx)(n.code,{children:"/swiper/modules"})]}),"\n",(0,t.jsx)(n.p,{children:"In v9:"}),"\n",(0,t.jsx)(n.pre,{className:"language-js",children:(0,t.jsxs)(n.code,{className:"language-js",children:[(0,t.jsx)(n.span,{className:"token keyword module",children:"import"})," ",(0,t.jsxs)(n.span,{className:"token imports",children:[(0,t.jsx)(n.span,{className:"token maybe-class-name",children:"Swiper"}),(0,t.jsx)(n.span,{className:"token punctuation",children:","})," ",(0,t.jsx)(n.span,{className:"token punctuation",children:"{"})," ",(0,t.jsx)(n.span,{className:"token maybe-class-name",children:"Navigation"}),(0,t.jsx)(n.span,{className:"token punctuation",children:","})," ",(0,t.jsx)(n.span,{className:"token maybe-class-name",children:"Pagination"})," ",(0,t.jsx)(n.span,{className:"token punctuation",children:"}"})]})," ",(0,t.jsx)(n.span,{className:"token keyword module",children:"from"})," ",(0,t.jsx)(n.span,{className:"token string",children:"'swiper'"}),(0,t.jsx)(n.span,{className:"token punctuation",children:";"}),"\n"]})}),"\n",(0,t.jsx)(n.p,{children:"In v10:"}),"\n",(0,t.jsx)(n.pre,{className:"language-js",children:(0,t.jsxs)(n.code,{className:"language-js",children:[(0,t.jsx)(n.span,{className:"token keyword module",children:"import"})," ",(0,t.jsx)(n.span,{className:"token imports",children:(0,t.jsx)(n.span,{className:"token maybe-class-name",children:"Swiper"})})," ",(0,t.jsx)(n.span,{className:"token keyword module",children:"from"})," ",(0,t.jsx)(n.span,{className:"token string",children:"'swiper'"}),(0,t.jsx)(n.span,{className:"token punctuation",children:";"}),"\n",(0,t.jsx)(n.span,{className:"token keyword module",children:"import"})," ",(0,t.jsxs)(n.span,{className:"token imports",children:[(0,t.jsx)(n.span,{className:"token punctuation",children:"{"})," ",(0,t.jsx)(n.span,{className:"token maybe-class-name",children:"Navigation"}),(0,t.jsx)(n.span,{className:"token punctuation",children:","})," ",(0,t.jsx)(n.span,{className:"token maybe-class-name",children:"Pagination"})," ",(0,t.jsx)(n.span,{className:"token punctuation",children:"}"})]})," ",(0,t.jsx)(n.span,{className:"token keyword module",children:"from"})," ",(0,t.jsx)(n.span,{className:"token string",children:"'swiper/modules'"}),(0,t.jsx)(n.span,{className:"token punctuation",children:";"}),"\n"]})}),"\n",(0,t.jsx)(n.h2,{id:"package-structure",children:"Package Structure"}),"\n",(0,t.jsx)(n.p,{children:"Main breaking change in v10 is the simplified package structure:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"most of the files (except modules) are now in the package root"}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:".esm.js"})," scripts replaced with ",(0,t.jsx)(n.code,{children:".mjs"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:".browser.esm.js"})," scripts are now same ",(0,t.jsx)(n.code,{children:".mjs"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"You need to consider it if you import files directly. Here is the new package structure:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"/modules/\n/shared/\n/types/\n/package.json\n/swiper-bundle.css\n/swiper-bundle.js\n/swiper-bundle.min.css\n/swiper-bundle.min.js\n/swiper-bundle.min.js.map\n/swiper-bundle.min.mjs\n/swiper-bundle.min.mjs.map\n/swiper-bundle.mjs\n/swiper-element-bundle.js\n/swiper-element-bundle.min.js\n/swiper-element-bundle.min.js.map\n/swiper-element-bundle.min.mjs\n/swiper-element-bundle.min.mjs.map\n/swiper-element-bundle.mjs\n/swiper-element.d.ts\n/swiper-element.js\n/swiper-element.min.js\n/swiper-element.min.js.map\n/swiper-element.min.mjs\n/swiper-element.min.mjs.map\n/swiper-element.mjs\n/swiper-react.d.ts\n/swiper-react.mjs\n/swiper-vars.less\n/swiper-vars.scss\n/swiper-vue.d.ts\n/swiper-vue.mjs\n/swiper.css\n/swiper.d.ts\n/swiper.js\n/swiper.less\n/swiper.min.css\n/swiper.min.js\n/swiper.min.js.map\n/swiper.min.mjs\n/swiper.min.mjs.map\n/swiper.mjs\n/swiper.scss\n"})})]})}n.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(MDXLayout,Object.assign({},e,{children:(0,t.jsx)(_createMdxContent,e)}))}},9377:function(e,n,s){"use strict";s.d(n,{Z:function(){return Carbon}});var t=s(5893),a=s(7294);function Carbon(e){let{sidebar:n}=e,s=(0,a.useRef)(null);return(0,a.useEffect)(()=>{let e=document.createElement("script");e.async=!0,e.src="//cdn.carbonads.com/carbon.js?serve=CKYIE5QE&placement=swiperjscom",e.id="_carbonads_js",s.current.appendChild(e)},[]),(0,t.jsx)("div",{ref:s,className:"carbon ".concat(n?"carbon-sidebar":"")})}},6171:function(e,n,s){"use strict";s.d(n,{Z:function(){return Heading}});var t=s(5893),a=s(6010);function Heading(e){let{level:n,id:s,link:l=!0,children:i,number:c,className:o="",style:d={},...p}=e,m="h".concat(n);return(0,t.jsxs)(m,{className:(0,a.Z)("group flex whitespace-pre-wrap",o),id:s,style:{...d},...p,children:[l&&(0,t.jsx)("a",{href:"#".concat(s),className:"after:hash absolute opacity-0 group-hover:opacity-100",style:{marginLeft:"-1em",paddingRight:"0.5em",color:"#a1a1aa",textDecoration:"none"},"aria-label":"Anchor"}),(0,t.jsx)("span",{children:i})]})}Heading.h1=e=>(0,t.jsx)(Heading,{level:1,...e}),Heading.h2=e=>(0,t.jsx)(Heading,{level:2,...e}),Heading.h3=e=>(0,t.jsx)(Heading,{level:3,...e}),Heading.h4=e=>(0,t.jsx)(Heading,{level:4,...e})},3447:function(e,n,s){"use strict";s.d(n,{R:function(){return WithSidebarLayout}});var t=s(5893),a=s(7294),l=s(1163),i=s(1664),c=s.n(i),o=s(9008),d=s.n(o),p=s(6010);let useScrollSpy=e=>{let[n,s]=(0,a.useState)(e),t=(0,a.useRef)([]),l=(0,a.useRef)(0),getHeadings=()=>{let e=document.querySelectorAll(".prose h2[id], .prose h3[id]");for(let n=0;n<e.length;n+=1){let s=e[n];t.current.push({el:s,id:s.id})}},calcOffsets=()=>{let e=window.scrollY;l.current=window.innerHeight,t.current.forEach(n=>{let s=n.el.getBoundingClientRect();n.offset=e+s.top})},getCurrentSection=()=>{let e=t.current[0],n=window.scrollY,a=t.current.filter(e=>{let{offset:s}=e;return s>=n})[0];t.current.forEach(s=>{n+l.current/2>s.offset&&(e=s)}),t.current.indexOf(a)<t.current.indexOf(e)&&(e=a),e&&e.id&&s(e.id)},onScroll=()=>{getCurrentSection()},onResize=()=>{calcOffsets(),getCurrentSection()},attachEvents=()=>{window.addEventListener("scroll",onScroll),window.addEventListener("resize",onResize)},detachEvents=()=>{window.removeEventListener("scroll",onScroll),window.removeEventListener("resize",onResize)};return(0,a.useEffect)(()=>(getHeadings(),calcOffsets(),getCurrentSection(),attachEvents(),()=>detachEvents()),[]),n};function TableOfContents(e){let{tableOfContents:n,onClick:s}=e,l=useScrollSpy(n[0].slug);return(0,t.jsx)("ul",{className:"table-of-contents overflow-x-hidden text-on-surface-variant",onClick:s,children:n.map(e=>{let n=l===e.slug,s=e.children.findIndex(e=>{let{slug:n}=e;return n===l})>-1;return(0,t.jsxs)(a.Fragment,{children:[(0,t.jsx)("li",{className:"my-1",children:(0,t.jsx)("a",{href:"#".concat(e.slug),className:(0,p.Z)("block rounded-full px-3 py-1.5 font-medium text-on-surface-variant  hover:bg-secondary-container hover:text-primary hover:no-underline",{"!text-primary":s,"!text-on-primary":n,"!bg-primary":n}),children:e.title})}),e.children.map(e=>{let n=l===e.slug;return(0,t.jsx)("li",{className:"ml-2",children:(0,t.jsx)("a",{href:"#".concat(e.slug),className:(0,p.Z)("block rounded-full px-3 py-1 text-on-surface-variant  hover:bg-secondary-container hover:text-primary hover:no-underline",{"!text-on-primary":n,"!bg-primary":n}),children:e.title})},e.slug)})]},e.slug)})})}var m=s(9649);function SidebarSponsors(){return(0,t.jsxs)("div",{className:"mb-4",children:[(0,t.jsxs)("div",{className:"mb-2 flex items-center justify-between font-semibold",children:[(0,t.jsx)("span",{children:"Sponsors"}),(0,t.jsx)("a",{href:"https://opencollective.com/swiper",target:"_blank",className:"text-xs font-medium text-primary no-underline",children:"Become a sponsor"})]}),(0,t.jsx)("div",{className:"flex flex-wrap gap-1",children:m.filter(e=>{let{plan:n,active:s}=e;return"Sponsor"!==n&&s}).map(e=>{let{link:n,title:s,image:a}=e;return(0,t.jsx)("a",{className:"flex items-center justify-center rounded hover:opacity-80 dark:bg-white",href:n,title:s,rel:"noopener",target:"_blank",children:(0,t.jsx)("img",{className:"h-7 w-7 rounded object-contain lg:h-8 lg:w-8",alt:s,loading:"lazy",src:"/images/sponsors/".concat(a)})},s)})})]})}var u=s(9377),h=s(6127);function WithSidebarLayout(e){let{children:n,meta:s={},pageTitle:i="",beforePageTitle:o="",afterPageTitle:p=""}=e,m=(0,l.useRouter)(),x=(0,a.useRef)(null),[j,g]=(0,a.useState)([]),[w,N]=(0,a.useState)(!1);return(0,h.L)(()=>{let e;let n=[];return x.current.querySelectorAll("h2, h3").forEach(s=>{let t=s.getAttribute("id"),a=s.textContent.trim();e="h3"===s.nodeName.toLowerCase();let l={slug:t,title:a,children:[]};e?n[n.length-1].children.push(l):n.push(l)}),g(n),()=>{}},[]),(0,t.jsxs)("div",{id:s.containerId,className:"mx-auto flex w-full justify-between px-4 sm:px-6",children:[s&&(0,t.jsxs)(d(),{children:[(0,t.jsx)("title",{children:s.title},"title"),(0,t.jsx)("meta",{property:"og:title",content:s.title}),(0,t.jsx)("meta",{name:"twitter:title",content:s.title})]}),(0,t.jsx)("button",{type:"button",className:"fixed bottom-6 right-6 z-40 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-on-primary hover:opacity-75 lg:hidden",onClick:()=>N(!0),children:(0,t.jsx)("svg",{className:"h-6 w-6",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24",fill:"currentColor",children:(0,t.jsx)("path",{d:"M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"})})}),(0,t.jsx)("div",{className:"fixed right-0 top-0 z-50 h-full w-full bg-black bg-opacity-10 lg:z-40 lg:!hidden ".concat(w?"block":"hidden"),onClick:()=>N(!1)}),(0,t.jsx)("div",{className:"fixed left-0 top-0 z-50 mr-10 h-screen w-64 flex-none bg-surface-3 text-sm lg:relative lg:z-40 lg:!block lg:h-auto lg:rounded-none lg:bg-transparent ".concat(w?"block":"hidden"),children:(0,t.jsxs)("div",{className:"h-full overflow-y-auto overscroll-contain px-4 pt-10 lg:sticky lg:top-16 lg:h-auto lg:max-h-[calc(100vh-64px)] lg:px-0",children:[(0,t.jsx)(SidebarSponsors,{}),j.length>0&&(0,t.jsx)(TableOfContents,{onClick:e=>{e.target&&e.target.closest("a")&&N(!1)},tableOfContents:j}),(0,t.jsx)(u.Z,{sidebar:!0})]})}),(0,t.jsxs)("div",{className:"dark:prose-dark prose mx-auto min-w-0 max-w-none flex-auto pb-24 pt-10 lg:pb-16 2xl:max-w-[940px]",ref:x,children:[o,(i||s.title)&&(0,t.jsx)("h1",{children:i||s.title}),p,n,(0,t.jsx)("div",{className:"mt-4 border-t border-outline-variant pt-4 text-right",children:(0,t.jsx)(c(),{href:"https://github.com/nolimits4web/swiper-website/edit/master/src/pages".concat(m.pathname,".mdx"),children:"Edit this page on GitHub"})})]}),(0,t.jsx)("div",{className:"hidden h-px w-[calc(224px+40px)] shrink-0 2xl:block"})]})}},1163:function(e,n,s){e.exports=s(9974)},1151:function(e,n,s){"use strict";s.d(n,{Zo:function(){return MDXProvider},ah:function(){return useMDXComponents}});var t=s(7294);let a=t.createContext({});function useMDXComponents(e){let n=t.useContext(a);return t.useMemo(()=>"function"==typeof e?e(n):{...n,...e},[n,e])}let l={};function MDXProvider({components:e,children:n,disableParentContext:s}){let i;return i=s?"function"==typeof e?e({}):e||l:useMDXComponents(e),t.createElement(a.Provider,{value:i},n)}}},function(e){e.O(0,[649,774,888,179],function(){return e(e.s=2594)}),_N_E=e.O()}]);