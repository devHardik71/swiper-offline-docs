(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[322],{6010:function(e,t,n){"use strict";t.Z=function(){for(var e,t,n=0,s="";n<arguments.length;)(e=arguments[n++])&&(t=function r(e){var t,n,s="";if("string"==typeof e||"number"==typeof e)s+=e;else if("object"==typeof e){if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(s&&(s+=" "),s+=n);else for(t in e)e[t]&&(s&&(s+=" "),s+=t)}return s}(e))&&(s&&(s+=" "),s+=t);return s}},9377:function(e,t,n){"use strict";n.d(t,{Z:function(){return Carbon}});var s=n(5893),l=n(7294);function Carbon(e){let{sidebar:t}=e,n=(0,l.useRef)(null);return(0,l.useEffect)(()=>{let e=document.createElement("script");e.async=!0,e.src="//cdn.carbonads.com/carbon.js?serve=CKYIE5QE&placement=swiperjscom",e.id="_carbonads_js",n.current.appendChild(e)},[]),(0,s.jsx)("div",{ref:n,className:"carbon ".concat(t?"carbon-sidebar":"")})}},6171:function(e,t,n){"use strict";n.d(t,{Z:function(){return Heading}});var s=n(5893),l=n(6010);function Heading(e){let{level:t,id:n,link:i=!0,children:o,number:a,className:c="",style:d={},...u}=e,h="h".concat(t);return(0,s.jsxs)(h,{className:(0,l.Z)("group flex whitespace-pre-wrap",c),id:n,style:{...d},...u,children:[i&&(0,s.jsx)("a",{href:"#".concat(n),className:"after:hash absolute opacity-0 group-hover:opacity-100",style:{marginLeft:"-1em",paddingRight:"0.5em",color:"#a1a1aa",textDecoration:"none"},"aria-label":"Anchor"}),(0,s.jsx)("span",{children:o})]})}Heading.h1=e=>(0,s.jsx)(Heading,{level:1,...e}),Heading.h2=e=>(0,s.jsx)(Heading,{level:2,...e}),Heading.h3=e=>(0,s.jsx)(Heading,{level:3,...e}),Heading.h4=e=>(0,s.jsx)(Heading,{level:4,...e})},5322:function(e,t,n){"use strict";n.d(t,{j:function(){return PostLayout}});var s=n(5893),l=n(1151),i=n(6171),o=n(3447),a=n(9008),c=n.n(a);function PostLayout(e){var t;let{meta:n,children:a}=e,d={h1:i.Z.h1,h2:i.Z.h2,h3:i.Z.h3,h4:i.Z.h4};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(c(),{children:[(0,s.jsx)("meta",{property:"og:image",content:"https://swiperjs.com".concat(n.image)}),(0,s.jsx)("meta",{name:"twitter:image",content:"https://swiperjs.com".concat(n.image)})]}),(0,s.jsx)(l.Zo,{components:d,children:(0,s.jsx)(o.R,{meta:{...n,title:"".concat(n.title," | Swiper Blog")},pageTitle:n.title,afterPageTitle:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"-mt-5 mb-[28px] text-sm text-secondary",children:(t=n.date,Intl.DateTimeFormat("en-us",{day:"numeric",month:"short",year:"numeric"}).format(new Date(t)))}),(0,s.jsx)("div",{className:"relative mb-12 overflow-hidden rounded-3xl pb-[50%]",children:(0,s.jsx)("img",{src:n.image,className:"absolute left-0 top-0 !m-0 !h-full !w-full object-cover object-center"})})]}),children:(0,s.jsx)("div",{className:"blog-post-content",children:a})})})]})}},3447:function(e,t,n){"use strict";n.d(t,{R:function(){return WithSidebarLayout}});var s=n(5893),l=n(7294),i=n(1163),o=n(1664),a=n.n(o),c=n(9008),d=n.n(c),u=n(6010);let useScrollSpy=e=>{let[t,n]=(0,l.useState)(e),s=(0,l.useRef)([]),i=(0,l.useRef)(0),getHeadings=()=>{let e=document.querySelectorAll(".prose h2[id], .prose h3[id]");for(let t=0;t<e.length;t+=1){let n=e[t];s.current.push({el:n,id:n.id})}},calcOffsets=()=>{let e=window.scrollY;i.current=window.innerHeight,s.current.forEach(t=>{let n=t.el.getBoundingClientRect();t.offset=e+n.top})},getCurrentSection=()=>{let e=s.current[0],t=window.scrollY,l=s.current.filter(e=>{let{offset:n}=e;return n>=t})[0];s.current.forEach(n=>{t+i.current/2>n.offset&&(e=n)}),s.current.indexOf(l)<s.current.indexOf(e)&&(e=l),e&&e.id&&n(e.id)},onScroll=()=>{getCurrentSection()},onResize=()=>{calcOffsets(),getCurrentSection()},attachEvents=()=>{window.addEventListener("scroll",onScroll),window.addEventListener("resize",onResize)},detachEvents=()=>{window.removeEventListener("scroll",onScroll),window.removeEventListener("resize",onResize)};return(0,l.useEffect)(()=>(getHeadings(),calcOffsets(),getCurrentSection(),attachEvents(),()=>detachEvents()),[]),t};function TableOfContents(e){let{tableOfContents:t,onClick:n}=e,i=useScrollSpy(t[0].slug);return(0,s.jsx)("ul",{className:"table-of-contents overflow-x-hidden text-on-surface-variant",onClick:n,children:t.map(e=>{let t=i===e.slug,n=e.children.findIndex(e=>{let{slug:t}=e;return t===i})>-1;return(0,s.jsxs)(l.Fragment,{children:[(0,s.jsx)("li",{className:"my-1",children:(0,s.jsx)("a",{href:"#".concat(e.slug),className:(0,u.Z)("block rounded-full px-3 py-1.5 font-medium text-on-surface-variant  hover:bg-secondary-container hover:text-primary hover:no-underline",{"!text-primary":n,"!text-on-primary":t,"!bg-primary":t}),children:e.title})}),e.children.map(e=>{let t=i===e.slug;return(0,s.jsx)("li",{className:"ml-2",children:(0,s.jsx)("a",{href:"#".concat(e.slug),className:(0,u.Z)("block rounded-full px-3 py-1 text-on-surface-variant  hover:bg-secondary-container hover:text-primary hover:no-underline",{"!text-on-primary":t,"!bg-primary":t}),children:e.title})},e.slug)})]},e.slug)})})}var h=n(9649);function SidebarSponsors(){return(0,s.jsxs)("div",{className:"mb-4",children:[(0,s.jsxs)("div",{className:"mb-2 flex items-center justify-between font-semibold",children:[(0,s.jsx)("span",{children:"Sponsors"}),(0,s.jsx)("a",{href:"https://opencollective.com/swiper",target:"_blank",className:"text-xs font-medium text-primary no-underline",children:"Become a sponsor"})]}),(0,s.jsx)("div",{className:"flex flex-wrap gap-1",children:h.filter(e=>{let{plan:t,active:n}=e;return"Sponsor"!==t&&n}).map(e=>{let{link:t,title:n,image:l}=e;return(0,s.jsx)("a",{className:"flex items-center justify-center rounded hover:opacity-80 dark:bg-white",href:t,title:n,rel:"noopener",target:"_blank",children:(0,s.jsx)("img",{className:"h-7 w-7 rounded object-contain lg:h-8 lg:w-8",alt:n,loading:"lazy",src:"/images/sponsors/".concat(l)})},n)})})]})}var m=n(9377),f=n(6127);function WithSidebarLayout(e){let{children:t,meta:n={},pageTitle:o="",beforePageTitle:c="",afterPageTitle:u=""}=e,h=(0,i.useRouter)(),x=(0,l.useRef)(null),[p,g]=(0,l.useState)([]),[v,b]=(0,l.useState)(!1);return(0,f.L)(()=>{let e;let t=[];return x.current.querySelectorAll("h2, h3").forEach(n=>{let s=n.getAttribute("id"),l=n.textContent.trim();e="h3"===n.nodeName.toLowerCase();let i={slug:s,title:l,children:[]};e?t[t.length-1].children.push(i):t.push(i)}),g(t),()=>{}},[]),(0,s.jsxs)("div",{id:n.containerId,className:"mx-auto flex w-full justify-between px-4 sm:px-6",children:[n&&(0,s.jsxs)(d(),{children:[(0,s.jsx)("title",{children:n.title},"title"),(0,s.jsx)("meta",{property:"og:title",content:n.title}),(0,s.jsx)("meta",{name:"twitter:title",content:n.title})]}),(0,s.jsx)("button",{type:"button",className:"fixed bottom-6 right-6 z-40 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-on-primary hover:opacity-75 lg:hidden",onClick:()=>b(!0),children:(0,s.jsx)("svg",{className:"h-6 w-6",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24",fill:"currentColor",children:(0,s.jsx)("path",{d:"M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"})})}),(0,s.jsx)("div",{className:"fixed right-0 top-0 z-50 h-full w-full bg-black bg-opacity-10 lg:z-40 lg:!hidden ".concat(v?"block":"hidden"),onClick:()=>b(!1)}),(0,s.jsx)("div",{className:"fixed left-0 top-0 z-50 mr-10 h-screen w-56 flex-none bg-surface-3 text-sm lg:relative lg:z-40 lg:!block lg:h-auto lg:rounded-none lg:bg-transparent ".concat(v?"block":"hidden"),children:(0,s.jsxs)("div",{className:"h-full overflow-y-auto overscroll-contain px-4 py-10 lg:sticky lg:top-16 lg:h-auto lg:max-h-[calc(100vh-64px)] lg:px-0",children:[(0,s.jsx)(SidebarSponsors,{}),p.length>0&&(0,s.jsx)(TableOfContents,{onClick:e=>{e.target&&e.target.closest("a")&&b(!1)},tableOfContents:p})]})}),(0,s.jsxs)("div",{className:"dark:prose-dark prose mx-auto min-w-0 max-w-none flex-auto pb-24 pt-10 lg:pb-16 2xl:max-w-[940px]",ref:x,children:[n.carbon&&(0,s.jsx)(m.Z,{sidebar:!0}),c,(o||n.title)&&(0,s.jsx)("h1",{children:o||n.title}),u,t,(0,s.jsx)("div",{className:"mt-4 text-right pt-4 border-t border-outline-variant",children:(0,s.jsx)(a(),{href:"https://github.com/nolimits4web/swiper-website/edit/master/src/pages".concat(h.pathname,".mdx"),children:"Edit this page on GitHub"})})]}),(0,s.jsx)("div",{className:"hidden h-px w-[calc(224px+40px)] shrink-0 2xl:block"})]})}},1163:function(e,t,n){e.exports=n(9974)},1151:function(e,t,n){"use strict";n.d(t,{Zo:function(){return MDXProvider},ah:function(){return useMDXComponents}});var s=n(7294);let l=s.createContext({});function useMDXComponents(e){let t=s.useContext(l);return s.useMemo(()=>"function"==typeof e?e(t):{...t,...e},[t,e])}let i={};function MDXProvider({components:e,children:t,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||i:useMDXComponents(e),s.createElement(l.Provider,{value:o},t)}}}]);