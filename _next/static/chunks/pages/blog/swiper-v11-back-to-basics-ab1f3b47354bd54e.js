(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[952],{8301:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/swiper-v11-back-to-basics",function(){return s(260)}])},260:function(e,n,s){"use strict";s.r(n),s.d(n,{meta:function(){return o}});var i=s(5893),t=s(1151),r=s(1139);let o={title:"Swiper v11 - Back To Basics",date:"2023-10-24T10:00:00.000Z",image:"/images/blog/swiper-v11-back-to-basics/cover.jpg",published:!0},a=e=>{let{children:n}=e;return(0,i.jsx)(r.j,{meta:o,children:n})};function c(e){let n=Object.assign({p:"p",h2:"h2",ul:"ul",li:"li",code:"code",pre:"pre",span:"span",a:"a"},(0,t.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"We're beyond excited to introduce our latest update: Swiper v11. But this isn't just any update. With v11, we're taking a significant stride — we're going \"Back To Basics\"."}),"\n",(0,i.jsx)(n.h2,{id:"touch-events",children:"Touch Events"}),"\n",(0,i.jsx)(n.p,{children:"In our continuous endeavor to make Swiper the go-to library for mobile touch sliders, we've traversed various pathways, experimented with technologies, and always aimed to provide the best experience for both developers and end-users. One such direction we took was pivoting to Pointer Events in Swiper v9, believing it was the best course of action for a unified handling of touch and mouse events."}),"\n",(0,i.jsx)(n.p,{children:"However, we noticed that while Pointer Events are undoubtedly revolutionary, they don't always provide the seamless touch experience we aim for in certain edge cases. Feedback from our community, coupled with our rigorous testing, highlighted some nuances and limitations with touch interactions."}),"\n",(0,i.jsx)(n.p,{children:'Given our commitment to the finest user experience, we decided to reintroduce support for touch events in v11 (where supported). By going "Back To Basics", we are ensuring that those edge cases, those tiny moments where touch needs to feel just right, are perfectly catered to.'}),"\n",(0,i.jsx)(n.p,{children:"At least it will fix and improve the following cases:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"edgeSwipeDetection"})," and ",(0,i.jsx)(n.code,{children:"touchReleaseOnEdges"})," parameters work correctly now on devices with touch events support (iOS/Android)"]}),"\n",(0,i.jsx)(n.li,{children:"improved page scrolling detection and prevention"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"loop-mode",children:"Loop Mode"}),"\n",(0,i.jsx)(n.p,{children:"Loop mode has been seriously improved in v11:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["added support for multirow layout with ",(0,i.jsx)(n.code,{children:"grid.rows"})]}),"\n",(0,i.jsxs)(n.li,{children:["removed the ",(0,i.jsx)(n.code,{children:"loopedSlides"})," parameter"]}),"\n",(0,i.jsxs)(n.li,{children:["added ",(0,i.jsx)(n.code,{children:"loopAdditionalSlides"}),' parameter instead of defining additional slides for "looping" (rearranging)']}),"\n",(0,i.jsxs)(n.li,{children:["new ",(0,i.jsx)(n.code,{children:"loopAddBlankSlides"})," parameter that will automatically add empty slides for ",(0,i.jsx)(n.code,{children:"slidesPerGroup"})," and ",(0,i.jsx)(n.code,{children:"grid.rows"})]}),"\n",(0,i.jsxs)(n.li,{children:["new relaxed requirements for the number of slides:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["minimum number of slides must be >= ",(0,i.jsx)(n.code,{children:"slidesPerView"})," + ",(0,i.jsx)(n.code,{children:"slidesPerGroup"})]}),"\n",(0,i.jsxs)(n.li,{children:["the number of slides should be even to ",(0,i.jsx)(n.code,{children:"slidesPerGroup"})," (or use ",(0,i.jsx)(n.code,{children:"loopAddBlankSlides"})," parameter)"]}),"\n",(0,i.jsxs)(n.li,{children:["the number of slides should be even to ",(0,i.jsx)(n.code,{children:"grid.rows"})," (or use ",(0,i.jsx)(n.code,{children:"loopAddBlankSlides"})," parameter)"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["For example, if we have ",(0,i.jsx)(n.code,{children:"slidesPerView: 3"}),", in v10 we needed at least 6 slides for loop mode. In v11, we now need only 4 slides for that."]}),"\n",(0,i.jsx)(n.h2,{id:"element-events-prefix",children:"Element Events Prefix"}),"\n",(0,i.jsxs)(n.p,{children:["Swiper Element emits native DOM events using the same event names as Swiper class events. This caused problems if a third-party library used similar native DOM events, such as ",(0,i.jsx)(n.code,{children:"touchstart"}),", ",(0,i.jsx)(n.code,{children:"touchmove"}),", etc. Therefore, in v11, all Swiper Element events now have a ",(0,i.jsx)(n.code,{children:"swiper"})," prefix (configurable in the ",(0,i.jsx)(n.code,{children:"eventsPrefix"})," parameter)."]}),"\n",(0,i.jsx)(n.p,{children:"This can now be used as follows:"}),"\n",(0,i.jsx)(n.pre,{className:"language-html",children:(0,i.jsxs)(n.code,{className:"language-html",children:[(0,i.jsxs)(n.span,{className:"token tag",children:[(0,i.jsxs)(n.span,{className:"token tag",children:[(0,i.jsx)(n.span,{className:"token punctuation",children:"<"}),"swiper-container"]}),(0,i.jsx)(n.span,{className:"token punctuation",children:">"})]})," ... ",(0,i.jsxs)(n.span,{className:"token tag",children:[(0,i.jsxs)(n.span,{className:"token tag",children:[(0,i.jsx)(n.span,{className:"token punctuation",children:"</"}),"swiper-container"]}),(0,i.jsx)(n.span,{className:"token punctuation",children:">"})]}),"\n",(0,i.jsxs)(n.span,{className:"token tag",children:[(0,i.jsxs)(n.span,{className:"token tag",children:[(0,i.jsx)(n.span,{className:"token punctuation",children:"<"}),"script"]}),(0,i.jsx)(n.span,{className:"token punctuation",children:">"})]}),(0,i.jsx)(n.span,{className:"token script",children:(0,i.jsxs)(n.span,{className:"token language-javascript",children:["\n  ",(0,i.jsx)(n.span,{className:"token keyword",children:"const"})," swiperEl ",(0,i.jsx)(n.span,{className:"token operator",children:"="})," ",(0,i.jsx)(n.span,{className:"token dom variable",children:"document"}),(0,i.jsx)(n.span,{className:"token punctuation",children:"."}),(0,i.jsx)(n.span,{className:"token method function property-access",children:"querySelector"}),(0,i.jsx)(n.span,{className:"token punctuation",children:"("}),(0,i.jsx)(n.span,{className:"token string",children:"'swiper-container'"}),(0,i.jsx)(n.span,{className:"token punctuation",children:")"}),(0,i.jsx)(n.span,{className:"token punctuation",children:";"}),"\n\n  ",(0,i.jsx)(n.span,{className:"token comment",children:"// listen for `slideChange` event"}),"\n  swiperEl",(0,i.jsx)(n.span,{className:"token punctuation",children:"."}),(0,i.jsx)(n.span,{className:"token method function property-access",children:"addEventListener"}),(0,i.jsx)(n.span,{className:"token punctuation",children:"("}),(0,i.jsx)(n.span,{className:"token string",children:"'swiperslidechange'"}),(0,i.jsx)(n.span,{className:"token punctuation",children:","})," onSlideChange",(0,i.jsx)(n.span,{className:"token punctuation",children:")"}),(0,i.jsx)(n.span,{className:"token punctuation",children:";"}),"\n"]})}),(0,i.jsxs)(n.span,{className:"token tag",children:[(0,i.jsxs)(n.span,{className:"token tag",children:[(0,i.jsx)(n.span,{className:"token punctuation",children:"</"}),"script"]}),(0,i.jsx)(n.span,{className:"token punctuation",children:">"})]}),"\n"]})}),"\n",(0,i.jsx)(n.h2,{id:"overflow-hidden",children:"Overflow Hidden"}),"\n",(0,i.jsxs)(n.p,{children:["In Swiper v10, the ",(0,i.jsx)(n.code,{children:"overflow"})," property of the container defaulted to ",(0,i.jsx)(n.code,{children:"clip"}),". As it turned out, not all browsers support this property correctly, so in v11 we reverted to ",(0,i.jsx)(n.code,{children:"overflow: hidden"})," for the default Swiper container styles."]}),"\n",(0,i.jsx)(n.h2,{id:"whats-next",children:"What's Next?"}),"\n",(0,i.jsx)(n.p,{children:"It was an overview of most significant changes and new features."}),"\n",(0,i.jsxs)(n.p,{children:["For all changes list please refer to ",(0,i.jsx)(n.a,{href:"/changelog",children:"full v11 changelog"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["And it is recommended to check the ",(0,i.jsx)(n.a,{href:"/migration-guide-v11",children:"Migration guide to v11"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"ps",children:"P.S."}),"\n",(0,i.jsx)(n.p,{children:"And as always, if you love Swiper, please, support project by donating or pledging:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["on Patreon: ",(0,i.jsx)(n.a,{href:"https://www.patreon.com/swiperjs",children:"https://www.patreon.com/swiperjs"})]}),"\n",(0,i.jsxs)(n.li,{children:["on Open Collective: ",(0,i.jsx)(n.a,{href:"https://opencollective.com/swiper",children:"https://opencollective.com/swiper"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"And checking our premium projects:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://uiinitiative.com",children:"UI Initiative"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://studio.swiperjs.com",children:"Swiper Studio"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Your support means a lot for us!"})]})}n.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,i.jsx)(a,Object.assign({},e,{children:(0,i.jsx)(c,e)}))}}},function(e){e.O(0,[649,139,774,888,179],function(){return e(e.s=8301)}),_N_E=e.O()}]);