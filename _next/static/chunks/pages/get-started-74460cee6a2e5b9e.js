(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[395],{6010:function(s,e,n){"use strict";e.Z=function(){for(var s,e,n=0,a="";n<arguments.length;)(s=arguments[n++])&&(e=function s(e){var n,a,t="";if("string"==typeof e||"number"==typeof e)t+=e;else if("object"==typeof e){if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(a=s(e[n]))&&(t&&(t+=" "),t+=a);else for(n in e)e[n]&&(t&&(t+=" "),t+=n)}return t}(s))&&(a&&(a+=" "),a+=e);return a}},2025:function(s,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/get-started",function(){return n(8011)}])},2064:function(s,e,n){"use strict";n.d(e,{Z:function(){return l}});var a=n(5893),t=n(7294);function l(s){let{sidebar:e}=s,n=(0,t.useRef)(null);return(0,t.useEffect)(()=>{let s=document.createElement("script");s.async=!0,s.src="//cdn.carbonads.com/carbon.js?serve=CKYIE5QE&placement=swiperjscom",s.id="_carbonads_js",n.current.appendChild(s)},[]),(0,a.jsx)("div",{ref:n,className:"carbon ".concat(e?"carbon-sidebar":"")})}},224:function(s,e,n){"use strict";n.d(e,{Z:function(){return l}});var a=n(5893),t=n(6010);function l(s){let{level:e,id:n,link:l=!0,children:c,number:r,className:i="",style:o={},...p}=s,d="h".concat(e);return(0,a.jsxs)(d,{className:(0,t.Z)("group flex whitespace-pre-wrap",i),id:n,style:{...o},...p,children:[l&&(0,a.jsx)("a",{href:"#".concat(n),className:"after:hash absolute opacity-0 group-hover:opacity-100",style:{marginLeft:"-1em",paddingRight:"0.5em",color:"#a1a1aa",textDecoration:"none"},"aria-label":"Anchor"}),(0,a.jsx)("span",{children:c})]})}l.h1=s=>(0,a.jsx)(l,{level:1,...s}),l.h2=s=>(0,a.jsx)(l,{level:2,...s}),l.h3=s=>(0,a.jsx)(l,{level:3,...s}),l.h4=s=>(0,a.jsx)(l,{level:4,...s})},4359:function(s,e,n){"use strict";n.d(e,{R:function(){return k}});var a=n(5893),t=n(7294),l=n(1163),c=n(1664),r=n.n(c),i=n(9008),o=n.n(i),p=n(6010);let d=s=>{let[e,n]=(0,t.useState)(s),a=(0,t.useRef)([]),l=(0,t.useRef)(0),c=()=>{let s=document.querySelectorAll(".prose h2[id], .prose h3[id]");for(let e=0;e<s.length;e+=1){let n=s[e];a.current.push({el:n,id:n.id})}},r=()=>{let s=window.scrollY;l.current=window.innerHeight,a.current.forEach(e=>{let n=e.el.getBoundingClientRect();e.offset=s+n.top})},i=()=>{let s=a.current[0],e=window.scrollY,t=a.current.filter(s=>{let{offset:n}=s;return n>=e})[0];a.current.forEach(n=>{e+l.current/2>n.offset&&(s=n)}),a.current.indexOf(t)<a.current.indexOf(s)&&(s=t),s&&s.id&&n(s.id)},o=()=>{i()},p=()=>{r(),i()},d=()=>{window.addEventListener("scroll",o),window.addEventListener("resize",p)},m=()=>{window.removeEventListener("scroll",o),window.removeEventListener("resize",p)};return(0,t.useEffect)(()=>(c(),r(),i(),d(),()=>m()),[]),e};function m(s){let{tableOfContents:e,onClick:n}=s,l=d(e[0].slug);return(0,a.jsx)("ul",{className:"table-of-contents overflow-x-hidden text-on-surface-variant",onClick:n,children:e.map(s=>{let e=l===s.slug,n=s.children.findIndex(s=>{let{slug:e}=s;return e===l})>-1;return(0,a.jsxs)(t.Fragment,{children:[(0,a.jsx)("li",{className:"my-1",children:(0,a.jsx)("a",{href:"#".concat(s.slug),className:(0,p.Z)("block rounded-full px-3 py-1.5 font-medium text-on-surface-variant  hover:bg-secondary-container hover:text-primary hover:no-underline",{"!text-primary":n,"!text-on-primary":e,"!bg-primary":e}),children:s.title})}),s.children.map(s=>{let e=l===s.slug;return(0,a.jsx)("li",{className:"ml-2",children:(0,a.jsx)("a",{href:"#".concat(s.slug),className:(0,p.Z)("block rounded-full px-3 py-1 text-on-surface-variant  hover:bg-secondary-container hover:text-primary hover:no-underline",{"!text-on-primary":e,"!bg-primary":e}),children:s.title})},s.slug)})]},s.slug)})})}var h=n(9649);function u(){return(0,a.jsxs)("div",{className:"mb-4",children:[(0,a.jsxs)("div",{className:"mb-2 flex items-center justify-between font-semibold",children:[(0,a.jsx)("span",{children:"Sponsors"}),(0,a.jsx)("a",{href:"https://opencollective.com/swiper",target:"_blank",className:"text-xs font-medium text-primary no-underline",children:"Become a sponsor"})]}),(0,a.jsx)("div",{className:"flex flex-wrap gap-1",children:h.filter(s=>{let{plan:e,active:n}=s;return"Sponsor"!==e&&n}).map(s=>{let{link:e,title:n,image:t}=s;return(0,a.jsx)("a",{className:"flex items-center justify-center rounded hover:opacity-80 dark:bg-white",href:e,title:n,rel:"noopener",target:"_blank",children:(0,a.jsx)("img",{className:"h-7 w-7 rounded object-contain lg:h-8 lg:w-8",alt:n,loading:"lazy",src:"/images/sponsors/".concat(t)})},n)})})]})}var x=n(2064),j=n(9476);function k(s){let{children:e,meta:n={},pageTitle:c="",beforePageTitle:i="",afterPageTitle:p=""}=s,d=(0,l.useRouter)(),h=(0,t.useRef)(null),[k,N]=(0,t.useState)([]),[w,g]=(0,t.useState)(!1);return(0,j.L)(()=>{let s;let e=[];return h.current.querySelectorAll("h2, h3").forEach(n=>{let a=n.getAttribute("id"),t=n.textContent.trim();s="h3"===n.nodeName.toLowerCase();let l={slug:a,title:t,children:[]};s?e[e.length-1].children.push(l):e.push(l)}),N(e),()=>{}},[]),(0,a.jsxs)("div",{id:n.containerId,className:"mx-auto flex w-full justify-between px-4 sm:px-6",children:[n&&(0,a.jsxs)(o(),{children:[(0,a.jsx)("title",{children:n.title},"title"),(0,a.jsx)("meta",{property:"og:title",content:n.title}),(0,a.jsx)("meta",{name:"twitter:title",content:n.title})]}),(0,a.jsx)("button",{type:"button",className:"fixed bottom-6 right-6 z-40 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-on-primary hover:opacity-75 lg:hidden",onClick:()=>g(!0),children:(0,a.jsx)("svg",{className:"h-6 w-6",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24",fill:"currentColor",children:(0,a.jsx)("path",{d:"M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"})})}),(0,a.jsx)("div",{className:"fixed right-0 top-0 z-50 h-full w-full bg-black bg-opacity-10 lg:z-40 lg:!hidden ".concat(w?"block":"hidden"),onClick:()=>g(!1)}),(0,a.jsx)("div",{className:"fixed left-0 top-0 z-50 mr-10 h-screen w-56 flex-none bg-surface-3 text-sm lg:relative lg:z-40 lg:!block lg:h-auto lg:rounded-none lg:bg-transparent ".concat(w?"block":"hidden"),children:(0,a.jsxs)("div",{className:"h-full overflow-y-auto overscroll-contain px-4 py-10 lg:sticky lg:top-16 lg:h-auto lg:max-h-[calc(100vh-64px)] lg:px-0",children:[(0,a.jsx)(u,{}),k.length>0&&(0,a.jsx)(m,{onClick:s=>{s.target&&s.target.closest("a")&&g(!1)},tableOfContents:k})]})}),(0,a.jsxs)("div",{className:"dark:prose-dark prose mx-auto min-w-0 max-w-none flex-auto pb-24 pt-10 lg:pb-16 2xl:max-w-[940px]",ref:h,children:[n.carbon&&(0,a.jsx)(x.Z,{sidebar:!0}),i,(c||n.title)&&(0,a.jsx)("h1",{children:c||n.title}),p,e,(0,a.jsx)("div",{className:"mt-4 text-right pt-4 border-t border-outline-variant",children:(0,a.jsx)(r(),{href:"https://github.com/nolimits4web/swiper-website/edit/master/src/pages".concat(d.pathname,".mdx"),children:"Edit this page on GitHub"})})]}),(0,a.jsx)("div",{className:"hidden h-px w-[calc(224px+40px)] shrink-0 2xl:block"})]})}},8011:function(s,e,n){"use strict";n.r(e),n.d(e,{meta:function(){return r}});var a=n(5893),t=n(1151),l=n(224),c=n(4359);let r={title:"Getting Started With Swiper",carbon:!0},i=function(s){let{children:e}=s,n={h1:l.Z.h1,h2:l.Z.h2,h3:l.Z.h3,h4:l.Z.h4};return(0,a.jsx)(t.Zo,{components:n,children:(0,a.jsx)(c.R,{meta:r,children:e})})};function o(s){let e=Object.assign({h2:"h2",p:"p",h3:"h3",pre:"pre",code:"code",span:"span",a:"a",ul:"ul",li:"li"},(0,t.ah)(),s.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"installation",children:"Installation"}),"\n",(0,a.jsx)(e.p,{children:"There are few options on how to include/import Swiper into your project:"}),"\n",(0,a.jsx)(e.h3,{id:"install-from-npm",children:"Install from NPM"}),"\n",(0,a.jsx)(e.p,{children:"We can install Swiper from NPM"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:"$ npm install swiper\n"})}),"\n",(0,a.jsx)(e.pre,{className:"language-js",children:(0,a.jsxs)(e.code,{className:"language-js",children:[(0,a.jsx)(e.span,{className:"token comment",children:"// import Swiper JS"}),"\n",(0,a.jsx)(e.span,{className:"token keyword module",children:"import"})," ",(0,a.jsx)(e.span,{className:"token imports",children:(0,a.jsx)(e.span,{className:"token maybe-class-name",children:"Swiper"})})," ",(0,a.jsx)(e.span,{className:"token keyword module",children:"from"})," ",(0,a.jsx)(e.span,{className:"token string",children:"'swiper'"}),(0,a.jsx)(e.span,{className:"token punctuation",children:";"}),"\n",(0,a.jsx)(e.span,{className:"token comment",children:"// import Swiper styles"}),"\n",(0,a.jsx)(e.span,{className:"token keyword module",children:"import"})," ",(0,a.jsx)(e.span,{className:"token string",children:"'swiper/css'"}),(0,a.jsx)(e.span,{className:"token punctuation",children:";"}),"\n\n",(0,a.jsx)(e.span,{className:"token keyword",children:"const"})," swiper ",(0,a.jsx)(e.span,{className:"token operator",children:"="})," ",(0,a.jsx)(e.span,{className:"token keyword",children:"new"})," ",(0,a.jsx)(e.span,{className:"token class-name",children:"Swiper"}),(0,a.jsx)(e.span,{className:"token punctuation",children:"("}),(0,a.jsx)(e.span,{className:"token spread operator",children:"..."}),(0,a.jsx)(e.span,{className:"token punctuation",children:")"}),(0,a.jsx)(e.span,{className:"token punctuation",children:";"}),"\n"]})}),"\n",(0,a.jsx)(e.p,{children:"By default Swiper exports only core version without additional modules (like Navigation, Pagination, etc.). So you need to import and configure them too:"}),"\n",(0,a.jsx)(e.pre,{className:"language-js",children:(0,a.jsxs)(e.code,{className:"language-js",children:[(0,a.jsx)(e.span,{className:"token comment",children:"// core version + navigation, pagination modules:"}),"\n",(0,a.jsx)(e.span,{className:"token keyword module",children:"import"})," ",(0,a.jsx)(e.span,{className:"token imports",children:(0,a.jsx)(e.span,{className:"token maybe-class-name",children:"Swiper"})})," ",(0,a.jsx)(e.span,{className:"token keyword module",children:"from"})," ",(0,a.jsx)(e.span,{className:"token string",children:"'swiper'"}),(0,a.jsx)(e.span,{className:"token punctuation",children:";"}),"\n",(0,a.jsx)(e.span,{className:"token keyword module",children:"import"})," ",(0,a.jsxs)(e.span,{className:"token imports",children:[(0,a.jsx)(e.span,{className:"token punctuation",children:"{"})," ",(0,a.jsx)(e.span,{className:"token maybe-class-name",children:"Navigation"}),(0,a.jsx)(e.span,{className:"token punctuation",children:","})," ",(0,a.jsx)(e.span,{className:"token maybe-class-name",children:"Pagination"})," ",(0,a.jsx)(e.span,{className:"token punctuation",children:"}"})]})," ",(0,a.jsx)(e.span,{className:"token keyword module",children:"from"})," ",(0,a.jsx)(e.span,{className:"token string",children:"'swiper/modules'"}),(0,a.jsx)(e.span,{className:"token punctuation",children:";"}),"\n",(0,a.jsx)(e.span,{className:"token comment",children:"// import Swiper and modules styles"}),"\n",(0,a.jsx)(e.span,{className:"token keyword module",children:"import"})," ",(0,a.jsx)(e.span,{className:"token string",children:"'swiper/css'"}),(0,a.jsx)(e.span,{className:"token punctuation",children:";"}),"\n",(0,a.jsx)(e.span,{className:"token keyword module",children:"import"})," ",(0,a.jsx)(e.span,{className:"token string",children:"'swiper/css/navigation'"}),(0,a.jsx)(e.span,{className:"token punctuation",children:";"}),"\n",(0,a.jsx)(e.span,{className:"token keyword module",children:"import"})," ",(0,a.jsx)(e.span,{className:"token string",children:"'swiper/css/pagination'"}),(0,a.jsx)(e.span,{className:"token punctuation",children:";"}),"\n\n",(0,a.jsx)(e.span,{className:"token comment",children:"// init Swiper:"}),"\n",(0,a.jsx)(e.span,{className:"token keyword",children:"const"})," swiper ",(0,a.jsx)(e.span,{className:"token operator",children:"="})," ",(0,a.jsx)(e.span,{className:"token keyword",children:"new"})," ",(0,a.jsx)(e.span,{className:"token class-name",children:"Swiper"}),(0,a.jsx)(e.span,{className:"token punctuation",children:"("}),(0,a.jsx)(e.span,{className:"token string",children:"'.swiper'"}),(0,a.jsx)(e.span,{className:"token punctuation",children:","})," ",(0,a.jsx)(e.span,{className:"token punctuation",children:"{"}),"\n  ",(0,a.jsx)(e.span,{className:"token comment",children:"// configure Swiper to use modules"}),"\n  ",(0,a.jsx)(e.span,{className:"token literal-property property",children:"modules"}),(0,a.jsx)(e.span,{className:"token operator",children:":"})," ",(0,a.jsx)(e.span,{className:"token punctuation",children:"["}),(0,a.jsx)(e.span,{className:"token maybe-class-name",children:"Navigation"}),(0,a.jsx)(e.span,{className:"token punctuation",children:","})," ",(0,a.jsx)(e.span,{className:"token maybe-class-name",children:"Pagination"}),(0,a.jsx)(e.span,{className:"token punctuation",children:"]"}),(0,a.jsx)(e.span,{className:"token punctuation",children:","}),"\n  ",(0,a.jsx)(e.span,{className:"token spread operator",children:"..."}),"\n",(0,a.jsx)(e.span,{className:"token punctuation",children:"}"}),(0,a.jsx)(e.span,{className:"token punctuation",children:")"}),(0,a.jsx)(e.span,{className:"token punctuation",children:";"}),"\n"]})}),"\n",(0,a.jsxs)(e.p,{children:["If you want to import Swiper with all modules (bundle) then it should be imported from ",(0,a.jsx)(e.code,{children:"swiper/bundle"}),":"]}),"\n",(0,a.jsx)(e.pre,{className:"language-js",children:(0,a.jsxs)(e.code,{className:"language-js",children:[(0,a.jsx)(e.span,{className:"token comment",children:"// import Swiper bundle with all modules installed"}),"\n",(0,a.jsx)(e.span,{className:"token keyword module",children:"import"})," ",(0,a.jsx)(e.span,{className:"token imports",children:(0,a.jsx)(e.span,{className:"token maybe-class-name",children:"Swiper"})})," ",(0,a.jsx)(e.span,{className:"token keyword module",children:"from"})," ",(0,a.jsx)(e.span,{className:"token string",children:"'swiper/bundle'"}),(0,a.jsx)(e.span,{className:"token punctuation",children:";"}),"\n\n",(0,a.jsx)(e.span,{className:"token comment",children:"// import styles bundle"}),"\n",(0,a.jsx)(e.span,{className:"token keyword module",children:"import"})," ",(0,a.jsx)(e.span,{className:"token string",children:"'swiper/css/bundle'"}),(0,a.jsx)(e.span,{className:"token punctuation",children:";"}),"\n\n",(0,a.jsx)(e.span,{className:"token comment",children:"// init Swiper:"}),"\n",(0,a.jsx)(e.span,{className:"token keyword",children:"const"})," swiper ",(0,a.jsx)(e.span,{className:"token operator",children:"="})," ",(0,a.jsx)(e.span,{className:"token keyword",children:"new"})," ",(0,a.jsx)(e.span,{className:"token class-name",children:"Swiper"}),(0,a.jsx)(e.span,{className:"token punctuation",children:"("}),(0,a.jsx)(e.span,{className:"token spread operator",children:"..."}),(0,a.jsx)(e.span,{className:"token punctuation",children:")"}),(0,a.jsx)(e.span,{className:"token punctuation",children:";"}),"\n"]})}),"\n",(0,a.jsx)(e.h3,{id:"use-swiper-from-cdn",children:"Use Swiper from CDN"}),"\n",(0,a.jsx)(e.p,{children:"If you don't want to include Swiper files in your project, you may use it from CDN. The following files are available:"}),"\n",(0,a.jsx)(e.pre,{className:"language-html",children:(0,a.jsxs)(e.code,{className:"language-html",children:[(0,a.jsxs)(e.span,{className:"token tag",children:[(0,a.jsxs)(e.span,{className:"token tag",children:[(0,a.jsx)(e.span,{className:"token punctuation",children:"<"}),"link"]}),"\n  ",(0,a.jsx)(e.span,{className:"token attr-name",children:"rel"}),(0,a.jsxs)(e.span,{className:"token attr-value",children:[(0,a.jsx)(e.span,{className:"token punctuation attr-equals",children:"="}),(0,a.jsx)(e.span,{className:"token punctuation",children:'"'}),"stylesheet",(0,a.jsx)(e.span,{className:"token punctuation",children:'"'})]}),"\n  ",(0,a.jsx)(e.span,{className:"token attr-name",children:"href"}),(0,a.jsxs)(e.span,{className:"token attr-value",children:[(0,a.jsx)(e.span,{className:"token punctuation attr-equals",children:"="}),(0,a.jsx)(e.span,{className:"token punctuation",children:'"'}),"https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css",(0,a.jsx)(e.span,{className:"token punctuation",children:'"'})]}),"\n",(0,a.jsx)(e.span,{className:"token punctuation",children:"/>"})]}),"\n\n",(0,a.jsxs)(e.span,{className:"token tag",children:[(0,a.jsxs)(e.span,{className:"token tag",children:[(0,a.jsx)(e.span,{className:"token punctuation",children:"<"}),"script"]})," ",(0,a.jsx)(e.span,{className:"token attr-name",children:"src"}),(0,a.jsxs)(e.span,{className:"token attr-value",children:[(0,a.jsx)(e.span,{className:"token punctuation attr-equals",children:"="}),(0,a.jsx)(e.span,{className:"token punctuation",children:'"'}),"https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js",(0,a.jsx)(e.span,{className:"token punctuation",children:'"'})]}),(0,a.jsx)(e.span,{className:"token punctuation",children:">"})]}),(0,a.jsx)(e.span,{className:"token script"}),(0,a.jsxs)(e.span,{className:"token tag",children:[(0,a.jsxs)(e.span,{className:"token tag",children:[(0,a.jsx)(e.span,{className:"token punctuation",children:"</"}),"script"]}),(0,a.jsx)(e.span,{className:"token punctuation",children:">"})]}),"\n"]})}),"\n",(0,a.jsx)(e.p,{children:"If you use ES modules in browser, there is a CDN version for that too:"}),"\n",(0,a.jsx)(e.pre,{className:"language-html",children:(0,a.jsxs)(e.code,{className:"language-html",children:[(0,a.jsxs)(e.span,{className:"token tag",children:[(0,a.jsxs)(e.span,{className:"token tag",children:[(0,a.jsx)(e.span,{className:"token punctuation",children:"<"}),"script"]})," ",(0,a.jsx)(e.span,{className:"token attr-name",children:"type"}),(0,a.jsxs)(e.span,{className:"token attr-value",children:[(0,a.jsx)(e.span,{className:"token punctuation attr-equals",children:"="}),(0,a.jsx)(e.span,{className:"token punctuation",children:'"'}),"module",(0,a.jsx)(e.span,{className:"token punctuation",children:'"'})]}),(0,a.jsx)(e.span,{className:"token punctuation",children:">"})]}),(0,a.jsx)(e.span,{className:"token script",children:(0,a.jsxs)(e.span,{className:"token language-javascript",children:["\n  ",(0,a.jsx)(e.span,{className:"token keyword module",children:"import"})," ",(0,a.jsx)(e.span,{className:"token imports",children:(0,a.jsx)(e.span,{className:"token maybe-class-name",children:"Swiper"})})," ",(0,a.jsx)(e.span,{className:"token keyword module",children:"from"})," ",(0,a.jsx)(e.span,{className:"token string",children:"'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs'"}),"\n\n  ",(0,a.jsx)(e.span,{className:"token keyword",children:"const"})," swiper ",(0,a.jsx)(e.span,{className:"token operator",children:"="})," ",(0,a.jsx)(e.span,{className:"token keyword",children:"new"})," ",(0,a.jsx)(e.span,{className:"token class-name",children:"Swiper"}),(0,a.jsx)(e.span,{className:"token punctuation",children:"("}),(0,a.jsx)(e.span,{className:"token spread operator",children:"..."}),(0,a.jsx)(e.span,{className:"token punctuation",children:")"}),"\n"]})}),(0,a.jsxs)(e.span,{className:"token tag",children:[(0,a.jsxs)(e.span,{className:"token tag",children:[(0,a.jsx)(e.span,{className:"token punctuation",children:"</"}),"script"]}),(0,a.jsx)(e.span,{className:"token punctuation",children:">"})]}),"\n"]})}),"\n",(0,a.jsx)(e.h3,{id:"download-assets",children:"Download assets"}),"\n",(0,a.jsxs)(e.p,{children:["If you want to use Swiper assets locally, you can directly download them from ",(0,a.jsx)(e.a,{href:"https://www.jsdelivr.com/package/npm/swiper",children:"https://www.jsdelivr.com/package/npm/swiper"})]}),"\n",(0,a.jsx)(e.h2,{id:"add-swiper-html-layout",children:"Add Swiper HTML Layout"}),"\n",(0,a.jsx)(e.p,{children:"Now, we need to add basic Swiper layout to our app:"}),"\n",(0,a.jsx)(e.pre,{className:"language-html",children:(0,a.jsxs)(e.code,{className:"language-html",children:[(0,a.jsx)(e.span,{className:"token comment",children:"<!-- Slider main container -->"}),"\n",(0,a.jsxs)(e.span,{className:"token tag",children:[(0,a.jsxs)(e.span,{className:"token tag",children:[(0,a.jsx)(e.span,{className:"token punctuation",children:"<"}),"div"]})," ",(0,a.jsx)(e.span,{className:"token attr-name",children:"class"}),(0,a.jsxs)(e.span,{className:"token attr-value",children:[(0,a.jsx)(e.span,{className:"token punctuation attr-equals",children:"="}),(0,a.jsx)(e.span,{className:"token punctuation",children:'"'}),"swiper",(0,a.jsx)(e.span,{className:"token punctuation",children:'"'})]}),(0,a.jsx)(e.span,{className:"token punctuation",children:">"})]}),"\n  ",(0,a.jsx)(e.span,{className:"token comment",children:"<!-- Additional required wrapper -->"}),"\n  ",(0,a.jsxs)(e.span,{className:"token tag",children:[(0,a.jsxs)(e.span,{className:"token tag",children:[(0,a.jsx)(e.span,{className:"token punctuation",children:"<"}),"div"]})," ",(0,a.jsx)(e.span,{className:"token attr-name",children:"class"}),(0,a.jsxs)(e.span,{className:"token attr-value",children:[(0,a.jsx)(e.span,{className:"token punctuation attr-equals",children:"="}),(0,a.jsx)(e.span,{className:"token punctuation",children:'"'}),"swiper-wrapper",(0,a.jsx)(e.span,{className:"token punctuation",children:'"'})]}),(0,a.jsx)(e.span,{className:"token punctuation",children:">"})]}),"\n    ",(0,a.jsx)(e.span,{className:"token comment",children:"<!-- Slides -->"}),"\n    ",(0,a.jsxs)(e.span,{className:"token tag",children:[(0,a.jsxs)(e.span,{className:"token tag",children:[(0,a.jsx)(e.span,{className:"token punctuation",children:"<"}),"div"]})," ",(0,a.jsx)(e.span,{className:"token attr-name",children:"class"}),(0,a.jsxs)(e.span,{className:"token attr-value",children:[(0,a.jsx)(e.span,{className:"token punctuation attr-equals",children:"="}),(0,a.jsx)(e.span,{className:"token punctuation",children:'"'}),"swiper-slide",(0,a.jsx)(e.span,{className:"token punctuation",children:'"'})]}),(0,a.jsx)(e.span,{className:"token punctuation",children:">"})]}),"Slide 1",(0,a.jsxs)(e.span,{className:"token tag",children:[(0,a.jsxs)(e.span,{className:"token tag",children:[(0,a.jsx)(e.span,{className:"token punctuation",children:"</"}),"div"]}),(0,a.jsx)(e.span,{className:"token punctuation",children:">"})]}),"\n    ",(0,a.jsxs)(e.span,{className:"token tag",children:[(0,a.jsxs)(e.span,{className:"token tag",children:[(0,a.jsx)(e.span,{className:"token punctuation",children:"<"}),"div"]})," ",(0,a.jsx)(e.span,{className:"token attr-name",children:"class"}),(0,a.jsxs)(e.span,{className:"token attr-value",children:[(0,a.jsx)(e.span,{className:"token punctuation attr-equals",children:"="}),(0,a.jsx)(e.span,{className:"token punctuation",children:'"'}),"swiper-slide",(0,a.jsx)(e.span,{className:"token punctuation",children:'"'})]}),(0,a.jsx)(e.span,{className:"token punctuation",children:">"})]}),"Slide 2",(0,a.jsxs)(e.span,{className:"token tag",children:[(0,a.jsxs)(e.span,{className:"token tag",children:[(0,a.jsx)(e.span,{className:"token punctuation",children:"</"}),"div"]}),(0,a.jsx)(e.span,{className:"token punctuation",children:">"})]}),"\n    ",(0,a.jsxs)(e.span,{className:"token tag",children:[(0,a.jsxs)(e.span,{className:"token tag",children:[(0,a.jsx)(e.span,{className:"token punctuation",children:"<"}),"div"]})," ",(0,a.jsx)(e.span,{className:"token attr-name",children:"class"}),(0,a.jsxs)(e.span,{className:"token attr-value",children:[(0,a.jsx)(e.span,{className:"token punctuation attr-equals",children:"="}),(0,a.jsx)(e.span,{className:"token punctuation",children:'"'}),"swiper-slide",(0,a.jsx)(e.span,{className:"token punctuation",children:'"'})]}),(0,a.jsx)(e.span,{className:"token punctuation",children:">"})]}),"Slide 3",(0,a.jsxs)(e.span,{className:"token tag",children:[(0,a.jsxs)(e.span,{className:"token tag",children:[(0,a.jsx)(e.span,{className:"token punctuation",children:"</"}),"div"]}),(0,a.jsx)(e.span,{className:"token punctuation",children:">"})]}),"\n    ...\n  ",(0,a.jsxs)(e.span,{className:"token tag",children:[(0,a.jsxs)(e.span,{className:"token tag",children:[(0,a.jsx)(e.span,{className:"token punctuation",children:"</"}),"div"]}),(0,a.jsx)(e.span,{className:"token punctuation",children:">"})]}),"\n  ",(0,a.jsx)(e.span,{className:"token comment",children:"<!-- If we need pagination -->"}),"\n  ",(0,a.jsxs)(e.span,{className:"token tag",children:[(0,a.jsxs)(e.span,{className:"token tag",children:[(0,a.jsx)(e.span,{className:"token punctuation",children:"<"}),"div"]})," ",(0,a.jsx)(e.span,{className:"token attr-name",children:"class"}),(0,a.jsxs)(e.span,{className:"token attr-value",children:[(0,a.jsx)(e.span,{className:"token punctuation attr-equals",children:"="}),(0,a.jsx)(e.span,{className:"token punctuation",children:'"'}),"swiper-pagination",(0,a.jsx)(e.span,{className:"token punctuation",children:'"'})]}),(0,a.jsx)(e.span,{className:"token punctuation",children:">"})]}),(0,a.jsxs)(e.span,{className:"token tag",children:[(0,a.jsxs)(e.span,{className:"token tag",children:[(0,a.jsx)(e.span,{className:"token punctuation",children:"</"}),"div"]}),(0,a.jsx)(e.span,{className:"token punctuation",children:">"})]}),"\n\n  ",(0,a.jsx)(e.span,{className:"token comment",children:"<!-- If we need navigation buttons -->"}),"\n  ",(0,a.jsxs)(e.span,{className:"token tag",children:[(0,a.jsxs)(e.span,{className:"token tag",children:[(0,a.jsx)(e.span,{className:"token punctuation",children:"<"}),"div"]})," ",(0,a.jsx)(e.span,{className:"token attr-name",children:"class"}),(0,a.jsxs)(e.span,{className:"token attr-value",children:[(0,a.jsx)(e.span,{className:"token punctuation attr-equals",children:"="}),(0,a.jsx)(e.span,{className:"token punctuation",children:'"'}),"swiper-button-prev",(0,a.jsx)(e.span,{className:"token punctuation",children:'"'})]}),(0,a.jsx)(e.span,{className:"token punctuation",children:">"})]}),(0,a.jsxs)(e.span,{className:"token tag",children:[(0,a.jsxs)(e.span,{className:"token tag",children:[(0,a.jsx)(e.span,{className:"token punctuation",children:"</"}),"div"]}),(0,a.jsx)(e.span,{className:"token punctuation",children:">"})]}),"\n  ",(0,a.jsxs)(e.span,{className:"token tag",children:[(0,a.jsxs)(e.span,{className:"token tag",children:[(0,a.jsx)(e.span,{className:"token punctuation",children:"<"}),"div"]})," ",(0,a.jsx)(e.span,{className:"token attr-name",children:"class"}),(0,a.jsxs)(e.span,{className:"token attr-value",children:[(0,a.jsx)(e.span,{className:"token punctuation attr-equals",children:"="}),(0,a.jsx)(e.span,{className:"token punctuation",children:'"'}),"swiper-button-next",(0,a.jsx)(e.span,{className:"token punctuation",children:'"'})]}),(0,a.jsx)(e.span,{className:"token punctuation",children:">"})]}),(0,a.jsxs)(e.span,{className:"token tag",children:[(0,a.jsxs)(e.span,{className:"token tag",children:[(0,a.jsx)(e.span,{className:"token punctuation",children:"</"}),"div"]}),(0,a.jsx)(e.span,{className:"token punctuation",children:">"})]}),"\n\n  ",(0,a.jsx)(e.span,{className:"token comment",children:"<!-- If we need scrollbar -->"}),"\n  ",(0,a.jsxs)(e.span,{className:"token tag",children:[(0,a.jsxs)(e.span,{className:"token tag",children:[(0,a.jsx)(e.span,{className:"token punctuation",children:"<"}),"div"]})," ",(0,a.jsx)(e.span,{className:"token attr-name",children:"class"}),(0,a.jsxs)(e.span,{className:"token attr-value",children:[(0,a.jsx)(e.span,{className:"token punctuation attr-equals",children:"="}),(0,a.jsx)(e.span,{className:"token punctuation",children:'"'}),"swiper-scrollbar",(0,a.jsx)(e.span,{className:"token punctuation",children:'"'})]}),(0,a.jsx)(e.span,{className:"token punctuation",children:">"})]}),(0,a.jsxs)(e.span,{className:"token tag",children:[(0,a.jsxs)(e.span,{className:"token tag",children:[(0,a.jsx)(e.span,{className:"token punctuation",children:"</"}),"div"]}),(0,a.jsx)(e.span,{className:"token punctuation",children:">"})]}),"\n",(0,a.jsxs)(e.span,{className:"token tag",children:[(0,a.jsxs)(e.span,{className:"token tag",children:[(0,a.jsx)(e.span,{className:"token punctuation",children:"</"}),"div"]}),(0,a.jsx)(e.span,{className:"token punctuation",children:">"})]}),"\n"]})}),"\n",(0,a.jsx)(e.h2,{id:"swiper-css-stylessize",children:"Swiper CSS Styles/Size"}),"\n",(0,a.jsxs)(e.p,{children:["In addition to ",(0,a.jsx)("a",{href:"/swiper-api/#styles",target:"_blank",children:"Swiper's CSS styles"}),", we may need to add some custom styles to set Swiper size:"]}),"\n",(0,a.jsx)(e.pre,{className:"language-css",children:(0,a.jsxs)(e.code,{className:"language-css",children:[(0,a.jsx)(e.span,{className:"token selector",children:(0,a.jsx)(e.span,{className:"token class",children:".swiper"})})," ",(0,a.jsx)(e.span,{className:"token punctuation",children:"{"}),"\n  ",(0,a.jsx)(e.span,{className:"token property",children:"width"}),(0,a.jsx)(e.span,{className:"token punctuation",children:":"})," ",(0,a.jsx)(e.span,{className:"token number",children:"600"}),(0,a.jsx)(e.span,{className:"token unit",children:"px"}),(0,a.jsx)(e.span,{className:"token punctuation",children:";"}),"\n  ",(0,a.jsx)(e.span,{className:"token property",children:"height"}),(0,a.jsx)(e.span,{className:"token punctuation",children:":"})," ",(0,a.jsx)(e.span,{className:"token number",children:"300"}),(0,a.jsx)(e.span,{className:"token unit",children:"px"}),(0,a.jsx)(e.span,{className:"token punctuation",children:";"}),"\n",(0,a.jsx)(e.span,{className:"token punctuation",children:"}"}),"\n"]})}),"\n",(0,a.jsx)(e.h2,{id:"initialize-swiper",children:"Initialize Swiper"}),"\n",(0,a.jsx)(e.p,{children:"Finally, we need to initialize Swiper in JS:"}),"\n",(0,a.jsx)(e.pre,{className:"language-js",children:(0,a.jsxs)(e.code,{className:"language-js",children:[(0,a.jsx)(e.span,{className:"token keyword",children:"const"})," swiper ",(0,a.jsx)(e.span,{className:"token operator",children:"="})," ",(0,a.jsx)(e.span,{className:"token keyword",children:"new"})," ",(0,a.jsx)(e.span,{className:"token class-name",children:"Swiper"}),(0,a.jsx)(e.span,{className:"token punctuation",children:"("}),(0,a.jsx)(e.span,{className:"token string",children:"'.swiper'"}),(0,a.jsx)(e.span,{className:"token punctuation",children:","})," ",(0,a.jsx)(e.span,{className:"token punctuation",children:"{"}),"\n  ",(0,a.jsx)(e.span,{className:"token comment",children:"// Optional parameters"}),"\n  ",(0,a.jsx)(e.span,{className:"token literal-property property",children:"direction"}),(0,a.jsx)(e.span,{className:"token operator",children:":"})," ",(0,a.jsx)(e.span,{className:"token string",children:"'vertical'"}),(0,a.jsx)(e.span,{className:"token punctuation",children:","}),"\n  ",(0,a.jsx)(e.span,{className:"token literal-property property",children:"loop"}),(0,a.jsx)(e.span,{className:"token operator",children:":"})," ",(0,a.jsx)(e.span,{className:"token boolean",children:"true"}),(0,a.jsx)(e.span,{className:"token punctuation",children:","}),"\n\n  ",(0,a.jsx)(e.span,{className:"token comment",children:"// If we need pagination"}),"\n  ",(0,a.jsx)(e.span,{className:"token literal-property property",children:"pagination"}),(0,a.jsx)(e.span,{className:"token operator",children:":"})," ",(0,a.jsx)(e.span,{className:"token punctuation",children:"{"}),"\n    ",(0,a.jsx)(e.span,{className:"token literal-property property",children:"el"}),(0,a.jsx)(e.span,{className:"token operator",children:":"})," ",(0,a.jsx)(e.span,{className:"token string",children:"'.swiper-pagination'"}),(0,a.jsx)(e.span,{className:"token punctuation",children:","}),"\n  ",(0,a.jsx)(e.span,{className:"token punctuation",children:"}"}),(0,a.jsx)(e.span,{className:"token punctuation",children:","}),"\n\n  ",(0,a.jsx)(e.span,{className:"token comment",children:"// Navigation arrows"}),"\n  ",(0,a.jsx)(e.span,{className:"token literal-property property",children:"navigation"}),(0,a.jsx)(e.span,{className:"token operator",children:":"})," ",(0,a.jsx)(e.span,{className:"token punctuation",children:"{"}),"\n    ",(0,a.jsx)(e.span,{className:"token literal-property property",children:"nextEl"}),(0,a.jsx)(e.span,{className:"token operator",children:":"})," ",(0,a.jsx)(e.span,{className:"token string",children:"'.swiper-button-next'"}),(0,a.jsx)(e.span,{className:"token punctuation",children:","}),"\n    ",(0,a.jsx)(e.span,{className:"token literal-property property",children:"prevEl"}),(0,a.jsx)(e.span,{className:"token operator",children:":"})," ",(0,a.jsx)(e.span,{className:"token string",children:"'.swiper-button-prev'"}),(0,a.jsx)(e.span,{className:"token punctuation",children:","}),"\n  ",(0,a.jsx)(e.span,{className:"token punctuation",children:"}"}),(0,a.jsx)(e.span,{className:"token punctuation",children:","}),"\n\n  ",(0,a.jsx)(e.span,{className:"token comment",children:"// And if we need scrollbar"}),"\n  ",(0,a.jsx)(e.span,{className:"token literal-property property",children:"scrollbar"}),(0,a.jsx)(e.span,{className:"token operator",children:":"})," ",(0,a.jsx)(e.span,{className:"token punctuation",children:"{"}),"\n    ",(0,a.jsx)(e.span,{className:"token literal-property property",children:"el"}),(0,a.jsx)(e.span,{className:"token operator",children:":"})," ",(0,a.jsx)(e.span,{className:"token string",children:"'.swiper-scrollbar'"}),(0,a.jsx)(e.span,{className:"token punctuation",children:","}),"\n  ",(0,a.jsx)(e.span,{className:"token punctuation",children:"}"}),(0,a.jsx)(e.span,{className:"token punctuation",children:","}),"\n",(0,a.jsx)(e.span,{className:"token punctuation",children:"}"}),(0,a.jsx)(e.span,{className:"token punctuation",children:")"}),(0,a.jsx)(e.span,{className:"token punctuation",children:";"}),"\n"]})}),"\n",(0,a.jsx)(e.h2,{id:"what-next",children:"What next?"}),"\n",(0,a.jsx)(e.p,{children:"As you see it is really easy to integrate Swiper into your website or app. So here are your next steps:"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["Go to ",(0,a.jsx)("a",{href:"/swiper-api",children:"API Documentation"})," to learn more about all Swiper API and how to control it."]}),"\n",(0,a.jsxs)(e.li,{children:["Look at available ",(0,a.jsx)("a",{href:"../demos/",target:"_blank",children:"Demos"}),"."]}),"\n",(0,a.jsxs)(e.li,{children:["If you have questions about Swiper ask them in ",(0,a.jsx)("a",{href:"http://stackoverflow.com",target:"_blank",children:"StackOverflow"})," or ",(0,a.jsx)("a",{href:"https://github.com/nolimits4web/swiper/discussions",target:"_blank",children:"Swiper Discussions"}),"."]}),"\n",(0,a.jsxs)(e.li,{children:["Create issue on ",(0,a.jsx)("a",{href:"https://github.com/nolimits4web/swiper/",target:"_blank",children:"GitHub"})," if you found a bug."]}),"\n",(0,a.jsxs)(e.li,{children:["If you are looking for support, we have a private Discord support chat room for ",(0,a.jsx)("a",{href:"https://www.patreon.com/swiperjs",target:"_blank",children:"Swiper Patrons"}),"."]}),"\n"]})]})}e.default=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(i,Object.assign({},s,{children:(0,a.jsx)(o,s)}))}},1163:function(s,e,n){s.exports=n(6885)},1151:function(s,e,n){"use strict";n.d(e,{Zo:function(){return r},ah:function(){return l}});var a=n(7294);let t=a.createContext({});function l(s){let e=a.useContext(t);return a.useMemo(()=>"function"==typeof s?s(e):{...e,...s},[e,s])}let c={};function r({components:s,children:e,disableParentContext:n}){let r;return r=n?"function"==typeof s?s({}):s||c:l(s),a.createElement(t.Provider,{value:r},e)}}},function(s){s.O(0,[649,774,888,179],function(){return s(s.s=2025)}),_N_E=s.O()}]);