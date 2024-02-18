(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[790],{864:function(s,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/slide-slots-in-v10-1-0",function(){return a(4374)}])},4374:function(s,n,a){"use strict";a.r(n),a.d(n,{meta:function(){return l}});var e=a(5893),t=a(1151),c=a(1139);let l={title:"Slide Slots In v10.1.0",date:"2023-08-01T11:00:00.000Z",image:"/images/blog/slide-slots-in-v10-1-0/cover.png",featured:!1,published:!0},i=s=>{let{children:n}=s;return(0,e.jsx)(c.j,{meta:l,children:n})};function o(s){let n=Object.assign({h2:"h2",p:"p",a:"a",pre:"pre",code:"code",span:"span",ul:"ul",li:"li"},(0,t.ah)(),s.components);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(n.h2,{id:"problem",children:"Problem"}),"\n",(0,e.jsxs)(n.p,{children:["All latest versions of the Safari browser have a bug (",(0,e.jsx)(n.a,{href:"https://github.com/nolimits4web/swiper/issues/6650",children:"#6650"}),") that doesn't 3D-transform correctly elements passed to a custom element in slots."]}),"\n",(0,e.jsx)(n.p,{children:"This causes to a wrong appearance of Swiper effects that use 3D transformations such as Cube, Coverflow and (possibly) Creative Effect."}),"\n",(0,e.jsx)(n.pre,{className:"language-html",children:(0,e.jsxs)(n.code,{className:"language-html",children:[(0,e.jsxs)(n.span,{className:"token tag",children:[(0,e.jsxs)(n.span,{className:"token tag",children:[(0,e.jsx)(n.span,{className:"token punctuation",children:"<"}),"swiper-container"]})," ",(0,e.jsx)(n.span,{className:"token attr-name",children:"effect"}),(0,e.jsxs)(n.span,{className:"token attr-value",children:[(0,e.jsx)(n.span,{className:"token punctuation attr-equals",children:"="}),(0,e.jsx)(n.span,{className:"token punctuation",children:'"'}),"cube",(0,e.jsx)(n.span,{className:"token punctuation",children:'"'})]}),(0,e.jsx)(n.span,{className:"token punctuation",children:">"})]}),"\n  ",(0,e.jsx)(n.span,{className:"token comment",children:'<!-- "perspective" prop can\'t be applied to these slides -->'}),"\n  ",(0,e.jsxs)(n.span,{className:"token tag",children:[(0,e.jsxs)(n.span,{className:"token tag",children:[(0,e.jsx)(n.span,{className:"token punctuation",children:"<"}),"swiper-slide"]}),(0,e.jsx)(n.span,{className:"token punctuation",children:">"})]}),"Slide 1",(0,e.jsxs)(n.span,{className:"token tag",children:[(0,e.jsxs)(n.span,{className:"token tag",children:[(0,e.jsx)(n.span,{className:"token punctuation",children:"</"}),"swiper-slide"]}),(0,e.jsx)(n.span,{className:"token punctuation",children:">"})]}),"\n  ",(0,e.jsxs)(n.span,{className:"token tag",children:[(0,e.jsxs)(n.span,{className:"token tag",children:[(0,e.jsx)(n.span,{className:"token punctuation",children:"<"}),"swiper-slide"]}),(0,e.jsx)(n.span,{className:"token punctuation",children:">"})]}),"Slide 2",(0,e.jsxs)(n.span,{className:"token tag",children:[(0,e.jsxs)(n.span,{className:"token tag",children:[(0,e.jsx)(n.span,{className:"token punctuation",children:"</"}),"swiper-slide"]}),(0,e.jsx)(n.span,{className:"token punctuation",children:">"})]}),"\n  ",(0,e.jsxs)(n.span,{className:"token tag",children:[(0,e.jsxs)(n.span,{className:"token tag",children:[(0,e.jsx)(n.span,{className:"token punctuation",children:"<"}),"swiper-slide"]}),(0,e.jsx)(n.span,{className:"token punctuation",children:">"})]}),"Slide 3",(0,e.jsxs)(n.span,{className:"token tag",children:[(0,e.jsxs)(n.span,{className:"token tag",children:[(0,e.jsx)(n.span,{className:"token punctuation",children:"</"}),"swiper-slide"]}),(0,e.jsx)(n.span,{className:"token punctuation",children:">"})]}),"\n",(0,e.jsxs)(n.span,{className:"token tag",children:[(0,e.jsxs)(n.span,{className:"token tag",children:[(0,e.jsx)(n.span,{className:"token punctuation",children:"</"}),"swiper-container"]}),(0,e.jsx)(n.span,{className:"token punctuation",children:">"})]}),"\n"]})}),"\n",(0,e.jsx)("iframe",{width:"800",height:"640",style:{height:"640px"},src:"https://codesandbox.io/p/sandbox/swiper-effect-cube-forked-288dyk?file=%2Findex.html%3A65%2C27&embed=1",allowFullScreen:!0}),"\n",(0,e.jsx)(n.h2,{id:"solution",children:"Solution"}),"\n",(0,e.jsxs)(n.p,{children:["In Swiper v10.1.0 we introduced slide slots to workaround this issue. In this case we don't put slides into the ",(0,e.jsx)(n.code,{children:"swiper-container"}),", but only their contents:"]}),"\n",(0,e.jsx)(n.pre,{className:"language-html",children:(0,e.jsxs)(n.code,{className:"language-html",children:[(0,e.jsxs)(n.span,{className:"token tag",children:[(0,e.jsxs)(n.span,{className:"token tag",children:[(0,e.jsx)(n.span,{className:"token punctuation",children:"<"}),"swiper-container"]})," ",(0,e.jsx)(n.span,{className:"token attr-name",children:"effect"}),(0,e.jsxs)(n.span,{className:"token attr-value",children:[(0,e.jsx)(n.span,{className:"token punctuation attr-equals",children:"="}),(0,e.jsx)(n.span,{className:"token punctuation",children:'"'}),"cube",(0,e.jsx)(n.span,{className:"token punctuation",children:'"'})]}),(0,e.jsx)(n.span,{className:"token punctuation",children:">"})]}),"\n  ",(0,e.jsx)(n.span,{className:"token comment",children:"<!-- Content goes to the first slide (with index 0) -->"}),"\n  ",(0,e.jsxs)(n.span,{className:"token tag",children:[(0,e.jsxs)(n.span,{className:"token tag",children:[(0,e.jsx)(n.span,{className:"token punctuation",children:"<"}),"div"]})," ",(0,e.jsx)(n.span,{className:"token attr-name",children:"slot"}),(0,e.jsxs)(n.span,{className:"token attr-value",children:[(0,e.jsx)(n.span,{className:"token punctuation attr-equals",children:"="}),(0,e.jsx)(n.span,{className:"token punctuation",children:'"'}),"slide-0",(0,e.jsx)(n.span,{className:"token punctuation",children:'"'})]}),(0,e.jsx)(n.span,{className:"token punctuation",children:">"})]}),"Slide 1",(0,e.jsxs)(n.span,{className:"token tag",children:[(0,e.jsxs)(n.span,{className:"token tag",children:[(0,e.jsx)(n.span,{className:"token punctuation",children:"</"}),"div"]}),(0,e.jsx)(n.span,{className:"token punctuation",children:">"})]}),"\n  ",(0,e.jsx)(n.span,{className:"token comment",children:"<!-- Content goes to the second slide (with index 1) -->"}),"\n  ",(0,e.jsxs)(n.span,{className:"token tag",children:[(0,e.jsxs)(n.span,{className:"token tag",children:[(0,e.jsx)(n.span,{className:"token punctuation",children:"<"}),"div"]})," ",(0,e.jsx)(n.span,{className:"token attr-name",children:"slot"}),(0,e.jsxs)(n.span,{className:"token attr-value",children:[(0,e.jsx)(n.span,{className:"token punctuation attr-equals",children:"="}),(0,e.jsx)(n.span,{className:"token punctuation",children:'"'}),"slide-1",(0,e.jsx)(n.span,{className:"token punctuation",children:'"'})]}),(0,e.jsx)(n.span,{className:"token punctuation",children:">"})]}),"Slide 2",(0,e.jsxs)(n.span,{className:"token tag",children:[(0,e.jsxs)(n.span,{className:"token tag",children:[(0,e.jsx)(n.span,{className:"token punctuation",children:"</"}),"div"]}),(0,e.jsx)(n.span,{className:"token punctuation",children:">"})]}),"\n  ",(0,e.jsx)(n.span,{className:"token comment",children:"<!-- Content goes to the third slide (with index 2) -->"}),"\n  ",(0,e.jsxs)(n.span,{className:"token tag",children:[(0,e.jsxs)(n.span,{className:"token tag",children:[(0,e.jsx)(n.span,{className:"token punctuation",children:"<"}),"div"]})," ",(0,e.jsx)(n.span,{className:"token attr-name",children:"slot"}),(0,e.jsxs)(n.span,{className:"token attr-value",children:[(0,e.jsx)(n.span,{className:"token punctuation attr-equals",children:"="}),(0,e.jsx)(n.span,{className:"token punctuation",children:'"'}),"slide-2",(0,e.jsx)(n.span,{className:"token punctuation",children:'"'})]}),(0,e.jsx)(n.span,{className:"token punctuation",children:">"})]}),"Slide 3",(0,e.jsxs)(n.span,{className:"token tag",children:[(0,e.jsxs)(n.span,{className:"token tag",children:[(0,e.jsx)(n.span,{className:"token punctuation",children:"</"}),"div"]}),(0,e.jsx)(n.span,{className:"token punctuation",children:">"})]}),"\n",(0,e.jsxs)(n.span,{className:"token tag",children:[(0,e.jsxs)(n.span,{className:"token tag",children:[(0,e.jsx)(n.span,{className:"token punctuation",children:"</"}),"swiper-container"]}),(0,e.jsx)(n.span,{className:"token punctuation",children:">"})]}),"\n"]})}),"\n",(0,e.jsx)(n.p,{children:"The Swiper component will dynamically check the number of elements with slide slots passed and automatically create the required number of slides. There are no restrictions on the number of slide slots to be used."}),"\n",(0,e.jsx)(n.p,{children:"But in this case we need to reconsider the styling of the slides, as we don't have slide elements directly in the DOM, and the slides themselves are now in the shadow DOM."}),"\n",(0,e.jsx)(n.p,{children:"So it is recommended to use some custom wrapper for the slide content, e.g.:"}),"\n",(0,e.jsx)(n.pre,{className:"language-html",children:(0,e.jsxs)(n.code,{className:"language-html",children:[(0,e.jsxs)(n.span,{className:"token tag",children:[(0,e.jsxs)(n.span,{className:"token tag",children:[(0,e.jsx)(n.span,{className:"token punctuation",children:"<"}),"swiper-container"]})," ",(0,e.jsx)(n.span,{className:"token attr-name",children:"effect"}),(0,e.jsxs)(n.span,{className:"token attr-value",children:[(0,e.jsx)(n.span,{className:"token punctuation attr-equals",children:"="}),(0,e.jsx)(n.span,{className:"token punctuation",children:'"'}),"cube",(0,e.jsx)(n.span,{className:"token punctuation",children:'"'})]}),(0,e.jsx)(n.span,{className:"token punctuation",children:">"})]}),"\n  ",(0,e.jsx)(n.span,{className:"token comment",children:"<!-- Content goes to the first slide (with index 0) -->"}),"\n  ",(0,e.jsxs)(n.span,{className:"token tag",children:[(0,e.jsxs)(n.span,{className:"token tag",children:[(0,e.jsx)(n.span,{className:"token punctuation",children:"<"}),"div"]})," ",(0,e.jsx)(n.span,{className:"token attr-name",children:"slot"}),(0,e.jsxs)(n.span,{className:"token attr-value",children:[(0,e.jsx)(n.span,{className:"token punctuation attr-equals",children:"="}),(0,e.jsx)(n.span,{className:"token punctuation",children:'"'}),"slide-0",(0,e.jsx)(n.span,{className:"token punctuation",children:'"'})]})," ",(0,e.jsx)(n.span,{className:"token attr-name",children:"class"}),(0,e.jsxs)(n.span,{className:"token attr-value",children:[(0,e.jsx)(n.span,{className:"token punctuation attr-equals",children:"="}),(0,e.jsx)(n.span,{className:"token punctuation",children:'"'}),"slide-content",(0,e.jsx)(n.span,{className:"token punctuation",children:'"'})]}),(0,e.jsx)(n.span,{className:"token punctuation",children:">"})]}),"\n    ",(0,e.jsxs)(n.span,{className:"token tag",children:[(0,e.jsxs)(n.span,{className:"token tag",children:[(0,e.jsx)(n.span,{className:"token punctuation",children:"<"}),"img"]})," ",(0,e.jsx)(n.span,{className:"token attr-name",children:"class"}),(0,e.jsxs)(n.span,{className:"token attr-value",children:[(0,e.jsx)(n.span,{className:"token punctuation attr-equals",children:"="}),(0,e.jsx)(n.span,{className:"token punctuation",children:'"'}),"slide-image",(0,e.jsx)(n.span,{className:"token punctuation",children:'"'})]})," ",(0,e.jsx)(n.span,{className:"token attr-name",children:"src"}),(0,e.jsxs)(n.span,{className:"token attr-value",children:[(0,e.jsx)(n.span,{className:"token punctuation attr-equals",children:"="}),(0,e.jsx)(n.span,{className:"token punctuation",children:'"'}),"path/to/slide-image.jpg",(0,e.jsx)(n.span,{className:"token punctuation",children:'"'})]})," ",(0,e.jsx)(n.span,{className:"token punctuation",children:"/>"})]}),"\n    ",(0,e.jsxs)(n.span,{className:"token tag",children:[(0,e.jsxs)(n.span,{className:"token tag",children:[(0,e.jsx)(n.span,{className:"token punctuation",children:"<"}),"div"]})," ",(0,e.jsx)(n.span,{className:"token attr-name",children:"class"}),(0,e.jsxs)(n.span,{className:"token attr-value",children:[(0,e.jsx)(n.span,{className:"token punctuation attr-equals",children:"="}),(0,e.jsx)(n.span,{className:"token punctuation",children:'"'}),"slide-title",(0,e.jsx)(n.span,{className:"token punctuation",children:'"'})]}),(0,e.jsx)(n.span,{className:"token punctuation",children:">"})]}),"Slide 1",(0,e.jsxs)(n.span,{className:"token tag",children:[(0,e.jsxs)(n.span,{className:"token tag",children:[(0,e.jsx)(n.span,{className:"token punctuation",children:"</"}),"div"]}),(0,e.jsx)(n.span,{className:"token punctuation",children:">"})]}),"\n  ",(0,e.jsxs)(n.span,{className:"token tag",children:[(0,e.jsxs)(n.span,{className:"token tag",children:[(0,e.jsx)(n.span,{className:"token punctuation",children:"</"}),"div"]}),(0,e.jsx)(n.span,{className:"token punctuation",children:">"})]}),"\n  ",(0,e.jsx)(n.span,{className:"token comment",children:"<!-- Content goes to the second slide (with index 1) -->"}),"\n  ",(0,e.jsxs)(n.span,{className:"token tag",children:[(0,e.jsxs)(n.span,{className:"token tag",children:[(0,e.jsx)(n.span,{className:"token punctuation",children:"<"}),"div"]})," ",(0,e.jsx)(n.span,{className:"token attr-name",children:"slot"}),(0,e.jsxs)(n.span,{className:"token attr-value",children:[(0,e.jsx)(n.span,{className:"token punctuation attr-equals",children:"="}),(0,e.jsx)(n.span,{className:"token punctuation",children:'"'}),"slide-1",(0,e.jsx)(n.span,{className:"token punctuation",children:'"'})]})," ",(0,e.jsx)(n.span,{className:"token attr-name",children:"class"}),(0,e.jsxs)(n.span,{className:"token attr-value",children:[(0,e.jsx)(n.span,{className:"token punctuation attr-equals",children:"="}),(0,e.jsx)(n.span,{className:"token punctuation",children:'"'}),"slide-content",(0,e.jsx)(n.span,{className:"token punctuation",children:'"'})]}),(0,e.jsx)(n.span,{className:"token punctuation",children:">"})]}),"\n    ",(0,e.jsxs)(n.span,{className:"token tag",children:[(0,e.jsxs)(n.span,{className:"token tag",children:[(0,e.jsx)(n.span,{className:"token punctuation",children:"<"}),"img"]})," ",(0,e.jsx)(n.span,{className:"token attr-name",children:"class"}),(0,e.jsxs)(n.span,{className:"token attr-value",children:[(0,e.jsx)(n.span,{className:"token punctuation attr-equals",children:"="}),(0,e.jsx)(n.span,{className:"token punctuation",children:'"'}),"slide-image",(0,e.jsx)(n.span,{className:"token punctuation",children:'"'})]})," ",(0,e.jsx)(n.span,{className:"token attr-name",children:"src"}),(0,e.jsxs)(n.span,{className:"token attr-value",children:[(0,e.jsx)(n.span,{className:"token punctuation attr-equals",children:"="}),(0,e.jsx)(n.span,{className:"token punctuation",children:'"'}),"path/to/slide-image.jpg",(0,e.jsx)(n.span,{className:"token punctuation",children:'"'})]})," ",(0,e.jsx)(n.span,{className:"token punctuation",children:"/>"})]}),"\n    ",(0,e.jsxs)(n.span,{className:"token tag",children:[(0,e.jsxs)(n.span,{className:"token tag",children:[(0,e.jsx)(n.span,{className:"token punctuation",children:"<"}),"div"]})," ",(0,e.jsx)(n.span,{className:"token attr-name",children:"class"}),(0,e.jsxs)(n.span,{className:"token attr-value",children:[(0,e.jsx)(n.span,{className:"token punctuation attr-equals",children:"="}),(0,e.jsx)(n.span,{className:"token punctuation",children:'"'}),"slide-title",(0,e.jsx)(n.span,{className:"token punctuation",children:'"'})]}),(0,e.jsx)(n.span,{className:"token punctuation",children:">"})]}),"Slide 2",(0,e.jsxs)(n.span,{className:"token tag",children:[(0,e.jsxs)(n.span,{className:"token tag",children:[(0,e.jsx)(n.span,{className:"token punctuation",children:"</"}),"div"]}),(0,e.jsx)(n.span,{className:"token punctuation",children:">"})]}),"\n  ",(0,e.jsxs)(n.span,{className:"token tag",children:[(0,e.jsxs)(n.span,{className:"token tag",children:[(0,e.jsx)(n.span,{className:"token punctuation",children:"</"}),"div"]}),(0,e.jsx)(n.span,{className:"token punctuation",children:">"})]}),"\n  ",(0,e.jsx)(n.span,{className:"token comment",children:"<!-- Content goes to the third slide (with index 2) -->"}),"\n  ",(0,e.jsxs)(n.span,{className:"token tag",children:[(0,e.jsxs)(n.span,{className:"token tag",children:[(0,e.jsx)(n.span,{className:"token punctuation",children:"<"}),"div"]})," ",(0,e.jsx)(n.span,{className:"token attr-name",children:"slot"}),(0,e.jsxs)(n.span,{className:"token attr-value",children:[(0,e.jsx)(n.span,{className:"token punctuation attr-equals",children:"="}),(0,e.jsx)(n.span,{className:"token punctuation",children:'"'}),"slide-2",(0,e.jsx)(n.span,{className:"token punctuation",children:'"'})]})," ",(0,e.jsx)(n.span,{className:"token attr-name",children:"class"}),(0,e.jsxs)(n.span,{className:"token attr-value",children:[(0,e.jsx)(n.span,{className:"token punctuation attr-equals",children:"="}),(0,e.jsx)(n.span,{className:"token punctuation",children:'"'}),"slide-content",(0,e.jsx)(n.span,{className:"token punctuation",children:'"'})]}),(0,e.jsx)(n.span,{className:"token punctuation",children:">"})]}),"\n    ",(0,e.jsxs)(n.span,{className:"token tag",children:[(0,e.jsxs)(n.span,{className:"token tag",children:[(0,e.jsx)(n.span,{className:"token punctuation",children:"<"}),"img"]})," ",(0,e.jsx)(n.span,{className:"token attr-name",children:"class"}),(0,e.jsxs)(n.span,{className:"token attr-value",children:[(0,e.jsx)(n.span,{className:"token punctuation attr-equals",children:"="}),(0,e.jsx)(n.span,{className:"token punctuation",children:'"'}),"slide-image",(0,e.jsx)(n.span,{className:"token punctuation",children:'"'})]})," ",(0,e.jsx)(n.span,{className:"token attr-name",children:"src"}),(0,e.jsxs)(n.span,{className:"token attr-value",children:[(0,e.jsx)(n.span,{className:"token punctuation attr-equals",children:"="}),(0,e.jsx)(n.span,{className:"token punctuation",children:'"'}),"path/to/slide-image.jpg",(0,e.jsx)(n.span,{className:"token punctuation",children:'"'})]})," ",(0,e.jsx)(n.span,{className:"token punctuation",children:"/>"})]}),"\n    ",(0,e.jsxs)(n.span,{className:"token tag",children:[(0,e.jsxs)(n.span,{className:"token tag",children:[(0,e.jsx)(n.span,{className:"token punctuation",children:"<"}),"div"]})," ",(0,e.jsx)(n.span,{className:"token attr-name",children:"class"}),(0,e.jsxs)(n.span,{className:"token attr-value",children:[(0,e.jsx)(n.span,{className:"token punctuation attr-equals",children:"="}),(0,e.jsx)(n.span,{className:"token punctuation",children:'"'}),"slide-title",(0,e.jsx)(n.span,{className:"token punctuation",children:'"'})]}),(0,e.jsx)(n.span,{className:"token punctuation",children:">"})]}),"Slide 3",(0,e.jsxs)(n.span,{className:"token tag",children:[(0,e.jsxs)(n.span,{className:"token tag",children:[(0,e.jsx)(n.span,{className:"token punctuation",children:"</"}),"div"]}),(0,e.jsx)(n.span,{className:"token punctuation",children:">"})]}),"\n  ",(0,e.jsxs)(n.span,{className:"token tag",children:[(0,e.jsxs)(n.span,{className:"token tag",children:[(0,e.jsx)(n.span,{className:"token punctuation",children:"</"}),"div"]}),(0,e.jsx)(n.span,{className:"token punctuation",children:">"})]}),"\n  ...\n",(0,e.jsxs)(n.span,{className:"token tag",children:[(0,e.jsxs)(n.span,{className:"token tag",children:[(0,e.jsx)(n.span,{className:"token punctuation",children:"</"}),"swiper-container"]}),(0,e.jsx)(n.span,{className:"token punctuation",children:">"})]}),"\n",(0,e.jsxs)(n.span,{className:"token tag",children:[(0,e.jsxs)(n.span,{className:"token tag",children:[(0,e.jsx)(n.span,{className:"token punctuation",children:"<"}),"style"]}),(0,e.jsx)(n.span,{className:"token punctuation",children:">"})]}),(0,e.jsx)(n.span,{className:"token style",children:(0,e.jsxs)(n.span,{className:"token language-css",children:["\n  ",(0,e.jsx)(n.span,{className:"token comment",children:"/* make sure slide content takes all available slide size */"}),"\n  ",(0,e.jsx)(n.span,{className:"token selector",children:(0,e.jsx)(n.span,{className:"token class",children:".slide-content"})})," ",(0,e.jsx)(n.span,{className:"token punctuation",children:"{"}),"\n    ",(0,e.jsx)(n.span,{className:"token property",children:"width"}),(0,e.jsx)(n.span,{className:"token punctuation",children:":"})," ",(0,e.jsx)(n.span,{className:"token number",children:"100"}),(0,e.jsx)(n.span,{className:"token unit",children:"%"}),(0,e.jsx)(n.span,{className:"token punctuation",children:";"}),"\n    ",(0,e.jsx)(n.span,{className:"token property",children:"height"}),(0,e.jsx)(n.span,{className:"token punctuation",children:":"})," ",(0,e.jsx)(n.span,{className:"token number",children:"100"}),(0,e.jsx)(n.span,{className:"token unit",children:"%"}),(0,e.jsx)(n.span,{className:"token punctuation",children:";"}),"\n    ",(0,e.jsx)(n.span,{className:"token property",children:"position"}),(0,e.jsx)(n.span,{className:"token punctuation",children:":"})," relative",(0,e.jsx)(n.span,{className:"token punctuation",children:";"}),"\n  ",(0,e.jsx)(n.span,{className:"token punctuation",children:"}"}),"\n  ",(0,e.jsx)(n.span,{className:"token comment",children:"/* slide image */"}),"\n  ",(0,e.jsx)(n.span,{className:"token selector",children:(0,e.jsx)(n.span,{className:"token class",children:".slide-image"})})," ",(0,e.jsx)(n.span,{className:"token punctuation",children:"{"}),"\n    ",(0,e.jsx)(n.span,{className:"token property",children:"position"}),(0,e.jsx)(n.span,{className:"token punctuation",children:":"})," absolute",(0,e.jsx)(n.span,{className:"token punctuation",children:";"}),"\n    ",(0,e.jsx)(n.span,{className:"token property",children:"left"}),(0,e.jsx)(n.span,{className:"token punctuation",children:":"})," ",(0,e.jsx)(n.span,{className:"token number",children:"0"}),(0,e.jsx)(n.span,{className:"token punctuation",children:";"}),"\n    ",(0,e.jsx)(n.span,{className:"token property",children:"top"}),(0,e.jsx)(n.span,{className:"token punctuation",children:":"})," ",(0,e.jsx)(n.span,{className:"token number",children:"0"}),(0,e.jsx)(n.span,{className:"token punctuation",children:";"}),"\n    ",(0,e.jsx)(n.span,{className:"token property",children:"width"}),(0,e.jsx)(n.span,{className:"token punctuation",children:":"})," ",(0,e.jsx)(n.span,{className:"token number",children:"100"}),(0,e.jsx)(n.span,{className:"token unit",children:"%"}),(0,e.jsx)(n.span,{className:"token punctuation",children:";"}),"\n    ",(0,e.jsx)(n.span,{className:"token property",children:"height"}),(0,e.jsx)(n.span,{className:"token punctuation",children:":"})," ",(0,e.jsx)(n.span,{className:"token number",children:"100"}),(0,e.jsx)(n.span,{className:"token unit",children:"%"}),(0,e.jsx)(n.span,{className:"token punctuation",children:";"}),"\n    ",(0,e.jsx)(n.span,{className:"token property",children:"object-fit"}),(0,e.jsx)(n.span,{className:"token punctuation",children:":"})," cover",(0,e.jsx)(n.span,{className:"token punctuation",children:";"}),"\n  ",(0,e.jsx)(n.span,{className:"token punctuation",children:"}"}),"\n  ",(0,e.jsx)(n.span,{className:"token comment",children:"/* slide title */"}),"\n  ",(0,e.jsx)(n.span,{className:"token selector",children:(0,e.jsx)(n.span,{className:"token class",children:".slide-title"})})," ",(0,e.jsx)(n.span,{className:"token punctuation",children:"{"}),"\n    ",(0,e.jsx)(n.span,{className:"token property",children:"color"}),(0,e.jsx)(n.span,{className:"token punctuation",children:":"})," ",(0,e.jsx)(n.span,{className:"token hexcode color",children:"#fff"}),(0,e.jsx)(n.span,{className:"token punctuation",children:";"}),"\n    ",(0,e.jsx)(n.span,{className:"token property",children:"position"}),(0,e.jsx)(n.span,{className:"token punctuation",children:":"})," absolute",(0,e.jsx)(n.span,{className:"token punctuation",children:";"}),"\n    ",(0,e.jsx)(n.span,{className:"token property",children:"left"}),(0,e.jsx)(n.span,{className:"token punctuation",children:":"})," ",(0,e.jsx)(n.span,{className:"token number",children:"32"}),(0,e.jsx)(n.span,{className:"token unit",children:"px"}),(0,e.jsx)(n.span,{className:"token punctuation",children:";"}),"\n    ",(0,e.jsx)(n.span,{className:"token property",children:"bottom"}),(0,e.jsx)(n.span,{className:"token punctuation",children:":"})," ",(0,e.jsx)(n.span,{className:"token number",children:"32"}),(0,e.jsx)(n.span,{className:"token unit",children:"px"}),(0,e.jsx)(n.span,{className:"token punctuation",children:";"}),"\n    ",(0,e.jsx)(n.span,{className:"token property",children:"font-weight"}),(0,e.jsx)(n.span,{className:"token punctuation",children:":"})," bold",(0,e.jsx)(n.span,{className:"token punctuation",children:";"}),"\n    ",(0,e.jsx)(n.span,{className:"token property",children:"font-size"}),(0,e.jsx)(n.span,{className:"token punctuation",children:":"})," ",(0,e.jsx)(n.span,{className:"token number",children:"32"}),(0,e.jsx)(n.span,{className:"token unit",children:"px"}),(0,e.jsx)(n.span,{className:"token punctuation",children:";"}),"\n  ",(0,e.jsx)(n.span,{className:"token punctuation",children:"}"}),"\n"]})}),(0,e.jsxs)(n.span,{className:"token tag",children:[(0,e.jsxs)(n.span,{className:"token tag",children:[(0,e.jsx)(n.span,{className:"token punctuation",children:"</"}),"style"]}),(0,e.jsx)(n.span,{className:"token punctuation",children:">"})]}),"\n"]})}),"\n",(0,e.jsx)(n.p,{children:"And now everything works correctly (in Safari):"}),"\n",(0,e.jsx)("iframe",{width:"800",height:"640",style:{height:"640px"},src:"https://codesandbox.io/p/sandbox/swiper-effect-cube-forked-c9x494",allowFullScreen:!0}),"\n",(0,e.jsx)(n.h2,{id:"ps",children:"P.S."}),"\n",(0,e.jsx)(n.p,{children:"And as always, if you love Swiper, please, support project by donating or pledging:"}),"\n",(0,e.jsxs)(n.ul,{children:["\n",(0,e.jsxs)(n.li,{children:["on Patreon: ",(0,e.jsx)(n.a,{href:"https://www.patreon.com/swiperjs",children:"https://www.patreon.com/swiperjs"})]}),"\n",(0,e.jsxs)(n.li,{children:["on Open Collective: ",(0,e.jsx)(n.a,{href:"https://opencollective.com/swiper",children:"https://opencollective.com/swiper"})]}),"\n"]}),"\n",(0,e.jsx)(n.p,{children:"And checking our premium projects:"}),"\n",(0,e.jsxs)(n.ul,{children:["\n",(0,e.jsx)(n.li,{children:(0,e.jsx)(n.a,{href:"https://uiinitiative.com",children:"UI Initiative"})}),"\n",(0,e.jsx)(n.li,{children:(0,e.jsx)(n.a,{href:"https://studio.swiperjs.com",children:"Swiper Studio"})}),"\n"]}),"\n",(0,e.jsx)(n.p,{children:"Your support means a lot for us!"})]})}n.default=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,e.jsx)(i,Object.assign({},s,{children:(0,e.jsx)(o,s)}))}}},function(s){s.O(0,[649,139,774,888,179],function(){return s(s.s=864)}),_N_E=s.O()}]);