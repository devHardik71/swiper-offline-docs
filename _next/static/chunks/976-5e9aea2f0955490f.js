(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[976],{6010:function(i,e,t){"use strict";e.Z=function(){for(var i,e,t=0,s="";t<arguments.length;)(i=arguments[t++])&&(e=function i(e){var t,s,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e){if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(s=i(e[t]))&&(r&&(r+=" "),r+=s);else for(t in e)e[t]&&(r&&(r+=" "),r+=t)}return r}(i))&&(s&&(s+=" "),s+=e);return s}},2064:function(i,e,t){"use strict";t.d(e,{Z:function(){return n}});var s=t(5893),r=t(7294);function n(i){let{sidebar:e}=i,t=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let i=document.createElement("script");i.async=!0,i.src="//cdn.carbonads.com/carbon.js?serve=CKYIE5QE&placement=swiperjscom",i.id="_carbonads_js",t.current.appendChild(i)},[]),(0,s.jsx)("div",{ref:t,className:"carbon ".concat(e?"carbon-sidebar":"")})}},224:function(i,e,t){"use strict";t.d(e,{Z:function(){return n}});var s=t(5893),r=t(6010);function n(i){let{level:e,id:t,link:n=!0,children:o,number:l,className:a="",style:c={},...p}=i,u="h".concat(e);return(0,s.jsxs)(u,{className:(0,r.Z)("group flex whitespace-pre-wrap",a),id:t,style:{...c},...p,children:[n&&(0,s.jsx)("a",{href:"#".concat(t),className:"after:hash absolute opacity-0 group-hover:opacity-100",style:{marginLeft:"-1em",paddingRight:"0.5em",color:"#a1a1aa",textDecoration:"none"},"aria-label":"Anchor"}),(0,s.jsx)("span",{children:o})]})}n.h1=i=>(0,s.jsx)(n,{level:1,...i}),n.h2=i=>(0,s.jsx)(n,{level:2,...i}),n.h3=i=>(0,s.jsx)(n,{level:3,...i}),n.h4=i=>(0,s.jsx)(n,{level:4,...i})},4359:function(i,e,t){"use strict";t.d(e,{R:function(){return f}});var s=t(5893),r=t(7294),n=t(1163),o=t(1664),l=t.n(o),a=t(9008),c=t.n(a),p=t(6010);let u=i=>{let[e,t]=(0,r.useState)(i),s=(0,r.useRef)([]),n=(0,r.useRef)(0),o=()=>{let i=document.querySelectorAll(".prose h2[id], .prose h3[id]");for(let e=0;e<i.length;e+=1){let t=i[e];s.current.push({el:t,id:t.id})}},l=()=>{let i=window.scrollY;n.current=window.innerHeight,s.current.forEach(e=>{let t=e.el.getBoundingClientRect();e.offset=i+t.top})},a=()=>{let i=s.current[0],e=window.scrollY,r=s.current.filter(i=>{let{offset:t}=i;return t>=e})[0];s.current.forEach(t=>{e+n.current/2>t.offset&&(i=t)}),s.current.indexOf(r)<s.current.indexOf(i)&&(i=r),i&&i.id&&t(i.id)},c=()=>{a()},p=()=>{l(),a()},u=()=>{window.addEventListener("scroll",c),window.addEventListener("resize",p)},d=()=>{window.removeEventListener("scroll",c),window.removeEventListener("resize",p)};return(0,r.useEffect)(()=>(o(),l(),a(),u(),()=>d()),[]),e};function d(i){let{tableOfContents:e,onClick:t}=i,n=u(e[0].slug);return(0,s.jsx)("ul",{className:"table-of-contents overflow-x-hidden text-on-surface-variant",onClick:t,children:e.map(i=>{let e=n===i.slug,t=i.children.findIndex(i=>{let{slug:e}=i;return e===n})>-1;return(0,s.jsxs)(r.Fragment,{children:[(0,s.jsx)("li",{className:"my-1",children:(0,s.jsx)("a",{href:"#".concat(i.slug),className:(0,p.Z)("block rounded-full px-3 py-1.5 font-medium text-on-surface-variant  hover:bg-secondary-container hover:text-primary hover:no-underline",{"!text-primary":t,"!text-on-primary":e,"!bg-primary":e}),children:i.title})}),i.children.map(i=>{let e=n===i.slug;return(0,s.jsx)("li",{className:"ml-2",children:(0,s.jsx)("a",{href:"#".concat(i.slug),className:(0,p.Z)("block rounded-full px-3 py-1 text-on-surface-variant  hover:bg-secondary-container hover:text-primary hover:no-underline",{"!text-on-primary":e,"!bg-primary":e}),children:i.title})},i.slug)})]},i.slug)})})}var v=t(9649);function m(){return(0,s.jsxs)("div",{className:"mb-4",children:[(0,s.jsxs)("div",{className:"mb-2 flex items-center justify-between font-semibold",children:[(0,s.jsx)("span",{children:"Sponsors"}),(0,s.jsx)("a",{href:"https://opencollective.com/swiper",target:"_blank",className:"text-xs font-medium text-primary no-underline",children:"Become a sponsor"})]}),(0,s.jsx)("div",{className:"flex flex-wrap gap-1",children:v.filter(i=>{let{plan:e,active:t}=i;return"Sponsor"!==e&&t}).map(i=>{let{link:e,title:t,image:r}=i;return(0,s.jsx)("a",{className:"flex items-center justify-center rounded hover:opacity-80 dark:bg-white",href:e,title:t,rel:"noopener",target:"_blank",children:(0,s.jsx)("img",{className:"h-7 w-7 rounded object-contain lg:h-8 lg:w-8",alt:t,loading:"lazy",src:"/images/sponsors/".concat(r)})},t)})})]})}var h=t(2064),g=t(9476);function f(i){let{children:e,meta:t={},pageTitle:o="",beforePageTitle:a="",afterPageTitle:p=""}=i,u=(0,n.useRouter)(),v=(0,r.useRef)(null),[f,w]=(0,r.useState)([]),[x,j]=(0,r.useState)(!1);return(0,g.L)(()=>{let i;let e=[];return v.current.querySelectorAll("h2, h3").forEach(t=>{let s=t.getAttribute("id"),r=t.textContent.trim();i="h3"===t.nodeName.toLowerCase();let n={slug:s,title:r,children:[]};i?e[e.length-1].children.push(n):e.push(n)}),w(e),()=>{}},[]),(0,s.jsxs)("div",{id:t.containerId,className:"mx-auto flex w-full justify-between px-4 sm:px-6",children:[t&&(0,s.jsxs)(c(),{children:[(0,s.jsx)("title",{children:t.title},"title"),(0,s.jsx)("meta",{property:"og:title",content:t.title}),(0,s.jsx)("meta",{name:"twitter:title",content:t.title})]}),(0,s.jsx)("button",{type:"button",className:"fixed bottom-6 right-6 z-40 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-on-primary hover:opacity-75 lg:hidden",onClick:()=>j(!0),children:(0,s.jsx)("svg",{className:"h-6 w-6",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24",fill:"currentColor",children:(0,s.jsx)("path",{d:"M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"})})}),(0,s.jsx)("div",{className:"fixed right-0 top-0 z-50 h-full w-full bg-black bg-opacity-10 lg:z-40 lg:!hidden ".concat(x?"block":"hidden"),onClick:()=>j(!1)}),(0,s.jsx)("div",{className:"fixed left-0 top-0 z-50 mr-10 h-screen w-64 flex-none bg-surface-3 text-sm lg:relative lg:z-40 lg:!block lg:h-auto lg:rounded-none lg:bg-transparent ".concat(x?"block":"hidden"),children:(0,s.jsxs)("div",{className:"h-full overflow-y-auto overscroll-contain px-4 pt-10 lg:sticky lg:top-16 lg:h-auto lg:max-h-[calc(100vh-64px)] lg:px-0",children:[(0,s.jsx)(m,{}),f.length>0&&(0,s.jsx)(d,{onClick:i=>{i.target&&i.target.closest("a")&&j(!1)},tableOfContents:f}),(0,s.jsx)(h.Z,{sidebar:!0})]})}),(0,s.jsxs)("div",{className:"dark:prose-dark prose mx-auto min-w-0 max-w-none flex-auto pb-24 pt-10 lg:pb-16 2xl:max-w-[940px]",ref:v,children:[a,(o||t.title)&&(0,s.jsx)("h1",{children:o||t.title}),p,e,(0,s.jsx)("div",{className:"mt-4 border-t border-outline-variant pt-4 text-right",children:(0,s.jsx)(l(),{href:"https://github.com/nolimits4web/swiper-website/edit/master/src/pages".concat(u.pathname,".mdx"),children:"Edit this page on GitHub"})})]}),(0,s.jsx)("div",{className:"hidden h-px w-[calc(224px+40px)] shrink-0 2xl:block"})]})}},2718:function(i,e,t){"use strict";t.d(e,{D:function(){return r}});var s=t(7294);let r=()=>{let i=(0,s.useRef)(null),e=()=>{let i=document.querySelectorAll(".demo");for(let e=0;e<i.length;e+=1){let t=i[e];if(t.classList.contains("loaded"))continue;let s=t.getBoundingClientRect(),r=t.querySelector("iframe"),n=s.top;if(!(n+t.offsetHeight<0)&&n<window.innerHeight+50){let i=r.getAttribute("data-src");t.classList.add("loaded"),r.setAttribute("src",i)}}},t=()=>{clearTimeout(i.current),i.current=setTimeout(()=>{e()},500)},r=()=>{window.addEventListener("scroll",t),window.addEventListener("resize",t)},n=()=>{window.removeEventListener("scroll",t),window.removeEventListener("resize",t)};(0,s.useEffect)(()=>(r(),e(),()=>n()))}},1163:function(i,e,t){i.exports=t(6885)},8253:function(i){"use strict";i.exports=JSON.parse('[{"cover":"https://s.uiinitiative.com/items/material-you-slider/cover.jpg","cover_s":"https://s.uiinitiative.com/items/material-you-slider/cover_s.jpg","icon":"https://s.uiinitiative.com/items/material-you-slider/icon.svg","url":"https://uiinitiative.com/catalog/material-you-slider","title":"Material You Slider","subtitle":"Material You carousel made with Swiper","preview":"https://material-you-slider.uiinitiative.com","slug":"material-you-slider"},{"cover":"https://s.uiinitiative.com/items/tinder-slider/cover.jpg","cover_s":"https://s.uiinitiative.com/items/tinder-slider/cover_s.jpg","icon":"https://s.uiinitiative.com/items/tinder-slider/icon.svg","url":"https://uiinitiative.com/catalog/tinder-slider","title":"Tinder Slider","subtitle":"Tinder card-style interactions and effects","preview":"https://tinder-slider.uiinitiative.com","slug":"tinder-slider"},{"cover":"https://s.uiinitiative.com/items/shaders-slider/cover.jpg","cover_s":"https://s.uiinitiative.com/items/shaders-slider/cover_s.jpg","icon":"https://s.uiinitiative.com/items/shaders-slider/icon.svg","url":"https://uiinitiative.com/catalog/shaders-slider","title":"Shaders Slider","subtitle":"Stunning WebGL image transitions","preview":"https://shaders-slider.uiinitiative.com","slug":"shaders-slider"},{"cover":"https://s.uiinitiative.com/items/slicer-slider/cover.jpg","cover_s":"https://s.uiinitiative.com/items/slicer-slider/cover_s.jpg","icon":"https://s.uiinitiative.com/items/slicer-slider/icon.svg","url":"https://uiinitiative.com/catalog/slicer-slider","title":"Slicer Slider","subtitle":"Images slicer slider","preview":"https://slicer-slider.uiinitiative.com","slug":"slicer-slider"},{"cover":"https://s.uiinitiative.com/items/shutters-slider/cover.jpg","cover_s":"https://s.uiinitiative.com/items/shutters-slider/cover_s.jpg","icon":"https://s.uiinitiative.com/items/shutters-slider/icon.svg","url":"https://uiinitiative.com/catalog/shutters-slider","title":"Shutters Slider","subtitle":"Fancy parallax image transitions","preview":"https://shutters-slider.uiinitiative.com","slug":"shutters-slider"},{"cover":"https://s.uiinitiative.com/items/stories-slider/cover.jpg","cover_s":"https://s.uiinitiative.com/items/stories-slider/cover_s.jpg","icon":"https://s.uiinitiative.com/items/stories-slider/icon.svg","url":"https://uiinitiative.com/catalog/stories-slider","title":"Stories Slider","subtitle":"Instagram-like Stories slider made with Swiper","preview":"https://stories-slider.uiinitiative.com","slug":"stories-slider"},{"cover":"https://s.uiinitiative.com/items/spring-slider/cover.jpg","cover_s":"https://s.uiinitiative.com/items/spring-slider/cover_s.jpg","icon":"https://s.uiinitiative.com/items/spring-slider/icon.svg","url":"https://uiinitiative.com/catalog/spring-slider","title":"Spring Slider","subtitle":"Swiper \\"spring\\" transition effect","preview":"https://spring-slider.uiinitiative.com","slug":"spring-slider"},{"cover":"https://s.uiinitiative.com/items/panorama-slider/cover.jpg","cover_s":"https://s.uiinitiative.com/items/panorama-slider/cover_s.jpg","icon":"https://s.uiinitiative.com/items/panorama-slider/icon.svg","url":"https://uiinitiative.com/catalog/panorama-slider","title":"Panorama Slider","subtitle":"3D panorama Swiper effect","preview":"https://panorama-slider.uiinitiative.com","slug":"panorama-slider"},{"cover":"https://s.uiinitiative.com/items/fashion-slider/cover.jpg","cover_s":"https://s.uiinitiative.com/items/fashion-slider/cover_s.jpg","icon":"https://s.uiinitiative.com/items/fashion-slider/icon.svg","url":"https://uiinitiative.com/catalog/fashion-slider","title":"Fashion Slider","subtitle":"Showcase fashion products","preview":"https://fashion-slider.uiinitiative.com","slug":"fashion-slider"},{"cover":"https://s.uiinitiative.com/items/carousel-slider/cover.jpg","cover_s":"https://s.uiinitiative.com/items/carousel-slider/cover_s.jpg","icon":"https://s.uiinitiative.com/items/carousel-slider/icon.svg","url":"https://uiinitiative.com/catalog/carousel-slider","title":"Carousel Slider","subtitle":"Infinite 3D carousel slider","preview":"https://carousel-slider.uiinitiative.com","slug":"carousel-slider"},{"cover":"https://s.uiinitiative.com/items/triple-slider/cover.jpg","cover_s":"https://s.uiinitiative.com/items/triple-slider/cover_s.jpg","icon":"https://s.uiinitiative.com/items/triple-slider/icon.svg","url":"https://uiinitiative.com/catalog/triple-slider","title":"Triple Slider","subtitle":"Three Swipers work as one","preview":"https://triple-slider.uiinitiative.com","slug":"triple-slider"},{"cover":"https://s.uiinitiative.com/items/travel-slider/cover.jpg","cover_s":"https://s.uiinitiative.com/items/travel-slider/cover_s.jpg","icon":"https://s.uiinitiative.com/items/travel-slider/icon.svg","url":"https://uiinitiative.com/catalog/travel-slider","title":"Travel Slider","subtitle":"Pick your travel destination","preview":"https://travel-slider.uiinitiative.com","slug":"travel-slider"},{"cover":"https://s.uiinitiative.com/items/expanding-collection/cover.jpg","cover_s":"https://s.uiinitiative.com/items/expanding-collection/cover_s.jpg","icon":"https://s.uiinitiative.com/items/expanding-collection/icon.svg","url":"https://uiinitiative.com/catalog/expanding-collection","title":"Expanding Collection","subtitle":"Expandable content cards with Swiper","preview":"https://expanding-collection.uiinitiative.com","slug":"expanding-collection"},{"cover":"https://s.uiinitiative.com/items/posters-slider/cover.jpg","cover_s":"https://s.uiinitiative.com/items/posters-slider/cover_s.jpg","icon":"https://s.uiinitiative.com/items/posters-slider/icon.svg","url":"https://uiinitiative.com/catalog/posters-slider","title":"Posters Slider","subtitle":"Fancy cards slider","preview":"https://posters-slider.uiinitiative.com","slug":"posters-slider"},{"cover":"https://s.uiinitiative.com/items/paper-onboarding/cover.jpg","cover_s":"https://s.uiinitiative.com/items/paper-onboarding/cover_s.jpg","icon":"https://s.uiinitiative.com/items/paper-onboarding/icon.svg","url":"https://uiinitiative.com/catalog/paper-onboarding","title":"Paper Onboarding","subtitle":"Material design onboarding slider","preview":"https://paper-onboarding.uiinitiative.com","slug":"paper-onboarding"},{"cover":"https://s.uiinitiative.com/items/swiper-3d-slicer/cover.jpg","cover_s":"https://s.uiinitiative.com/items/swiper-3d-slicer/cover_s.jpg","icon":"https://s.uiinitiative.com/items/swiper-3d-slicer/icon.svg","url":"https://uiinitiative.com/catalog/swiper-3d-slicer","title":"Swiper 3D Slicer","subtitle":"Unique 3D \\"slicing\\" slider made with Swiper","preview":"https://swiper-3d-slicer.uiinitiative.com","slug":"swiper-3d-slicer"},{"cover":"https://s.uiinitiative.com/items/swiper-3d-pagination/cover.jpg","cover_s":"https://s.uiinitiative.com/items/swiper-3d-pagination/cover_s.jpg","icon":"https://s.uiinitiative.com/items/swiper-3d-pagination/icon.svg","url":"https://uiinitiative.com/catalog/swiper-3d-pagination","title":"Swiper 3D Pagination","subtitle":"Swiper templates with 3D pagination","preview":"https://swiper-3d-pagination.uiinitiative.com","slug":"swiper-3d-pagination"}]')}}]);