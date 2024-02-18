(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[672],{8244:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/swiper-slider-in-webflow",function(){return n(6896)}])},6896:function(e,s,n){"use strict";n.r(s),n.d(s,{meta:function(){return t}});var a=n(5893),l=n(1151),i=n(1139);let t={title:"Swiper Slider In Webflow",date:"2023-08-01T12:00:00.000Z",image:"/images/blog/swiper-slider-in-webflow/cover.png",featured:!0,published:!0},c=e=>{let{children:s}=e;return(0,a.jsx)(i.j,{meta:t,children:s})};function r(e){let s=Object.assign({p:"p",h2:"h2",code:"code",ul:"ul",li:"li",pre:"pre",span:"span",a:"a"},(0,l.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.p,{children:"Webflow comes with a built-in slider that is not even close to what Swiper offers. In this article, we'll look at how to integrate Swiper into your Webflow site to get a best-in-class slider and make your pages stand out!"}),"\n",(0,a.jsx)(s.h2,{id:"collection",children:"Collection"}),"\n",(0,a.jsxs)(s.p,{children:['First, as we want to use Webflow\'s CMS features, we need to create a collection with slides. I have created a simple collection called "Movies Sliders" with additional ',(0,a.jsx)(s.code,{children:"title"})," and ",(0,a.jsx)(s.code,{children:"image"})," fields."]}),"\n",(0,a.jsx)("img",{src:"/images/blog/swiper-slider-in-webflow/01-collection.jpg",loading:"lazy"}),"\n",(0,a.jsx)(s.p,{children:"Next, add collection to the place where we want to place our slider,"}),"\n",(0,a.jsx)("img",{src:"/images/blog/swiper-slider-in-webflow/02-add-collection.jpg",loading:"lazy"}),"\n",(0,a.jsx)(s.p,{children:'and choose "Movies Sliders" collection as a source:'}),"\n",(0,a.jsx)("img",{src:"/images/blog/swiper-slider-in-webflow/03-collection-source.jpg",loading:"lazy"}),"\n",(0,a.jsxs)(s.p,{children:["Now, we need to add classes to ",(0,a.jsx)(s.code,{children:"Collection List Wrapper"}),", ",(0,a.jsx)(s.code,{children:"Collection List"})," and ",(0,a.jsx)(s.code,{children:"Collection Item"})," to match Swiper's required layout:"]}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"Collection List Wrapper"})," -> ",(0,a.jsx)(s.code,{children:".swiper.swiper-movies"})," (use extra class ",(0,a.jsx)(s.code,{children:"swiper-movies"})," here for initialization)"]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"Collection List"})," -> ",(0,a.jsx)(s.code,{children:".swiper-wrapper"})]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"Collection Item"})," -> ",(0,a.jsx)(s.code,{children:".swiper-slide"})]}),"\n"]}),"\n",(0,a.jsx)("img",{src:"/images/blog/swiper-slider-in-webflow/04-swiper-class.jpg",loading:"lazy"}),"\n",(0,a.jsx)("img",{src:"/images/blog/swiper-slider-in-webflow/05-swiper-wrapper-class.jpg",loading:"lazy"}),"\n",(0,a.jsx)("img",{src:"/images/blog/swiper-slider-in-webflow/06-swiper-slide-class.jpg",loading:"lazy"}),"\n",(0,a.jsx)(s.h2,{id:"slide-image",children:"Slide Image"}),"\n",(0,a.jsxs)(s.p,{children:["Once we have set required layout for slides, let's add ",(0,a.jsx)(s.code,{children:"Image"})," element to the slide, check ",(0,a.jsx)(s.code,{children:"Get image from Movies Sliders"})," and select the ",(0,a.jsx)(s.code,{children:"image"})," field as image source:"]}),"\n",(0,a.jsx)("img",{src:"/images/blog/swiper-slider-in-webflow/08-image-source.jpg",loading:"lazy"}),"\n",(0,a.jsxs)(s.p,{children:["And add ",(0,a.jsx)(s.code,{children:"swiper-slide-image"})," class to the image:"]}),"\n",(0,a.jsx)("img",{src:"/images/blog/swiper-slider-in-webflow/09-image-class.jpg",loading:"lazy"}),"\n",(0,a.jsx)(s.h2,{id:"slide-title",children:"Slide Title"}),"\n",(0,a.jsxs)(s.p,{children:["Final thing to setup here is the slide title. Same as with the image, add ",(0,a.jsx)(s.code,{children:"Text"})," element to the slide, check ",(0,a.jsx)(s.code,{children:"Get text from Movies Sliders"})," checkbox and select the ",(0,a.jsx)(s.code,{children:"title"})," field:"]}),"\n",(0,a.jsx)("img",{src:"/images/blog/swiper-slider-in-webflow/11-text-source.jpg",loading:"lazy"}),"\n",(0,a.jsxs)(s.p,{children:["And add ",(0,a.jsx)(s.code,{children:"swiper-slide-title"})," class to the text:"]}),"\n",(0,a.jsx)("img",{src:"/images/blog/swiper-slider-in-webflow/12-text-class.jpg",loading:"lazy"}),"\n",(0,a.jsx)(s.h2,{id:"add-swiper-assets",children:"Add Swiper Assets"}),"\n",(0,a.jsx)(s.p,{children:"Now we need to add Swiper's stylesheet and script."}),"\n",(0,a.jsxs)(s.p,{children:["In page settings and in the ",(0,a.jsx)(s.code,{children:"Custom Code"})," section add the following code:"]}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["add Swiper stylesheet in the ",(0,a.jsx)(s.code,{children:"Inside <head> tag"})," section:","\n",(0,a.jsx)(s.pre,{className:"language-html",children:(0,a.jsxs)(s.code,{className:"language-html",children:[(0,a.jsxs)(s.span,{className:"token tag",children:[(0,a.jsxs)(s.span,{className:"token tag",children:[(0,a.jsx)(s.span,{className:"token punctuation",children:"<"}),"link"]}),"\n  ",(0,a.jsx)(s.span,{className:"token attr-name",children:"rel"}),(0,a.jsxs)(s.span,{className:"token attr-value",children:[(0,a.jsx)(s.span,{className:"token punctuation attr-equals",children:"="}),(0,a.jsx)(s.span,{className:"token punctuation",children:'"'}),"stylesheet",(0,a.jsx)(s.span,{className:"token punctuation",children:'"'})]}),"\n  ",(0,a.jsx)(s.span,{className:"token attr-name",children:"href"}),(0,a.jsxs)(s.span,{className:"token attr-value",children:[(0,a.jsx)(s.span,{className:"token punctuation attr-equals",children:"="}),(0,a.jsx)(s.span,{className:"token punctuation",children:'"'}),"https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css",(0,a.jsx)(s.span,{className:"token punctuation",children:'"'})]}),"\n",(0,a.jsx)(s.span,{className:"token punctuation",children:"/>"})]}),"\n"]})}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["add Swiper script in the ",(0,a.jsx)(s.code,{children:"Before </body> tag"})," section:","\n",(0,a.jsx)(s.pre,{className:"language-html",children:(0,a.jsxs)(s.code,{className:"language-html",children:[(0,a.jsxs)(s.span,{className:"token tag",children:[(0,a.jsxs)(s.span,{className:"token tag",children:[(0,a.jsx)(s.span,{className:"token punctuation",children:"<"}),"script"]})," ",(0,a.jsx)(s.span,{className:"token attr-name",children:"src"}),(0,a.jsxs)(s.span,{className:"token attr-value",children:[(0,a.jsx)(s.span,{className:"token punctuation attr-equals",children:"="}),(0,a.jsx)(s.span,{className:"token punctuation",children:'"'}),"https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js",(0,a.jsx)(s.span,{className:"token punctuation",children:'"'})]}),(0,a.jsx)(s.span,{className:"token punctuation",children:">"})]}),(0,a.jsx)(s.span,{className:"token script"}),(0,a.jsxs)(s.span,{className:"token tag",children:[(0,a.jsxs)(s.span,{className:"token tag",children:[(0,a.jsx)(s.span,{className:"token punctuation",children:"</"}),"script"]}),(0,a.jsx)(s.span,{className:"token punctuation",children:">"})]}),"\n"]})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)("img",{src:"/images/blog/swiper-slider-in-webflow/13-page-custom-code.jpg",loading:"lazy"}),"\n",(0,a.jsx)(s.h2,{id:"styles",children:"Styles"}),"\n",(0,a.jsx)(s.p,{children:"With all the basics set up, let's go back to our Swiper component in the designer and apply some styles."}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.code,{children:"Collection List Wrapper"})," / ",(0,a.jsx)(s.code,{children:"swiper"}),":"]}),"\n",(0,a.jsx)("img",{src:"/images/blog/swiper-slider-in-webflow/14-swiper-styles.jpg",loading:"lazy"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.code,{children:"Collection List"})," / ",(0,a.jsx)(s.code,{children:"swiper-wrapper"}),":"]}),"\n",(0,a.jsx)("img",{src:"/images/blog/swiper-slider-in-webflow/15-swiper-wrapper-styles.jpg",loading:"lazy"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.code,{children:"Collection Item"})," / ",(0,a.jsx)(s.code,{children:"swiper-slide"}),":"]}),"\n",(0,a.jsx)("img",{src:"/images/blog/swiper-slider-in-webflow/16-swiper-slide-styles.jpg",loading:"lazy"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.code,{children:"Image"})," / ",(0,a.jsx)(s.code,{children:"swiper-slide-image"}),":"]}),"\n",(0,a.jsx)("img",{src:"/images/blog/swiper-slider-in-webflow/17-image-styles.jpg",loading:"lazy"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.code,{children:"Text"})," / ",(0,a.jsx)(s.code,{children:"swiper-slide-title"}),":"]}),"\n",(0,a.jsx)("img",{src:"/images/blog/swiper-slider-in-webflow/18-text-styles.jpg",loading:"lazy"}),"\n",(0,a.jsx)(s.h2,{id:"init",children:"Init"}),"\n",(0,a.jsxs)(s.p,{children:["Finally, we need to initialize our Swiper. Go back to the Custom Code section in the page settings and change the ",(0,a.jsx)(s.code,{children:"Before </body> tag"})," section to the following:"]}),"\n",(0,a.jsx)(s.pre,{className:"language-html",children:(0,a.jsxs)(s.code,{className:"language-html",children:[(0,a.jsxs)(s.span,{className:"token tag",children:[(0,a.jsxs)(s.span,{className:"token tag",children:[(0,a.jsx)(s.span,{className:"token punctuation",children:"<"}),"script"]})," ",(0,a.jsx)(s.span,{className:"token attr-name",children:"src"}),(0,a.jsxs)(s.span,{className:"token attr-value",children:[(0,a.jsx)(s.span,{className:"token punctuation attr-equals",children:"="}),(0,a.jsx)(s.span,{className:"token punctuation",children:'"'}),"https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js",(0,a.jsx)(s.span,{className:"token punctuation",children:'"'})]}),(0,a.jsx)(s.span,{className:"token punctuation",children:">"})]}),(0,a.jsx)(s.span,{className:"token script"}),(0,a.jsxs)(s.span,{className:"token tag",children:[(0,a.jsxs)(s.span,{className:"token tag",children:[(0,a.jsx)(s.span,{className:"token punctuation",children:"</"}),"script"]}),(0,a.jsx)(s.span,{className:"token punctuation",children:">"})]}),"\n\n",(0,a.jsxs)(s.span,{className:"token tag",children:[(0,a.jsxs)(s.span,{className:"token tag",children:[(0,a.jsx)(s.span,{className:"token punctuation",children:"<"}),"script"]}),(0,a.jsx)(s.span,{className:"token punctuation",children:">"})]}),(0,a.jsx)(s.span,{className:"token script",children:(0,a.jsxs)(s.span,{className:"token language-javascript",children:["\n  ",(0,a.jsx)(s.span,{className:"token keyword",children:"const"})," swiper ",(0,a.jsx)(s.span,{className:"token operator",children:"="})," ",(0,a.jsx)(s.span,{className:"token keyword",children:"new"})," ",(0,a.jsx)(s.span,{className:"token class-name",children:"Swiper"}),(0,a.jsx)(s.span,{className:"token punctuation",children:"("}),(0,a.jsx)(s.span,{className:"token string",children:"'.swiper-movies'"}),(0,a.jsx)(s.span,{className:"token punctuation",children:","})," ",(0,a.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n    ",(0,a.jsx)(s.span,{className:"token literal-property property",children:"effect"}),(0,a.jsx)(s.span,{className:"token operator",children:":"})," ",(0,a.jsx)(s.span,{className:"token string",children:"'coverflow'"}),(0,a.jsx)(s.span,{className:"token punctuation",children:","}),"\n    ",(0,a.jsx)(s.span,{className:"token literal-property property",children:"centeredSlides"}),(0,a.jsx)(s.span,{className:"token operator",children:":"})," ",(0,a.jsx)(s.span,{className:"token boolean",children:"true"}),(0,a.jsx)(s.span,{className:"token punctuation",children:","}),"\n    ",(0,a.jsx)(s.span,{className:"token literal-property property",children:"slidesPerView"}),(0,a.jsx)(s.span,{className:"token operator",children:":"})," ",(0,a.jsx)(s.span,{className:"token number",children:"1"}),(0,a.jsx)(s.span,{className:"token punctuation",children:","}),"\n    ",(0,a.jsx)(s.span,{className:"token literal-property property",children:"loop"}),(0,a.jsx)(s.span,{className:"token operator",children:":"})," ",(0,a.jsx)(s.span,{className:"token boolean",children:"true"}),(0,a.jsx)(s.span,{className:"token punctuation",children:","}),"\n    ",(0,a.jsx)(s.span,{className:"token literal-property property",children:"createElements"}),(0,a.jsx)(s.span,{className:"token operator",children:":"})," ",(0,a.jsx)(s.span,{className:"token boolean",children:"true"}),(0,a.jsx)(s.span,{className:"token punctuation",children:","}),"\n    ",(0,a.jsx)(s.span,{className:"token literal-property property",children:"pagination"}),(0,a.jsx)(s.span,{className:"token operator",children:":"})," ",(0,a.jsx)(s.span,{className:"token boolean",children:"true"}),(0,a.jsx)(s.span,{className:"token punctuation",children:","}),"\n    ",(0,a.jsx)(s.span,{className:"token literal-property property",children:"autoplay"}),(0,a.jsx)(s.span,{className:"token operator",children:":"})," ",(0,a.jsx)(s.span,{className:"token boolean",children:"true"}),(0,a.jsx)(s.span,{className:"token punctuation",children:","}),"\n    ",(0,a.jsx)(s.span,{className:"token literal-property property",children:"breakpoints"}),(0,a.jsx)(s.span,{className:"token operator",children:":"})," ",(0,a.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n      ",(0,a.jsx)(s.span,{className:"token number",children:"640"}),(0,a.jsx)(s.span,{className:"token operator",children:":"})," ",(0,a.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n        ",(0,a.jsx)(s.span,{className:"token literal-property property",children:"slidesPerView"}),(0,a.jsx)(s.span,{className:"token operator",children:":"})," ",(0,a.jsx)(s.span,{className:"token number",children:"2"}),(0,a.jsx)(s.span,{className:"token punctuation",children:","}),"\n      ",(0,a.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,a.jsx)(s.span,{className:"token punctuation",children:","}),"\n    ",(0,a.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,a.jsx)(s.span,{className:"token punctuation",children:","}),"\n  ",(0,a.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,a.jsx)(s.span,{className:"token punctuation",children:")"}),(0,a.jsx)(s.span,{className:"token punctuation",children:";"}),"\n"]})}),(0,a.jsxs)(s.span,{className:"token tag",children:[(0,a.jsxs)(s.span,{className:"token tag",children:[(0,a.jsx)(s.span,{className:"token punctuation",children:"</"}),"script"]}),(0,a.jsx)(s.span,{className:"token punctuation",children:">"})]}),"\n"]})}),"\n",(0,a.jsxs)(s.p,{children:["We can also tweak Swiper's default pagination by edditing the ",(0,a.jsx)(s.code,{children:"Inside <head> tag"})," section:"]}),"\n",(0,a.jsx)(s.pre,{className:"language-html",children:(0,a.jsxs)(s.code,{className:"language-html",children:[(0,a.jsxs)(s.span,{className:"token tag",children:[(0,a.jsxs)(s.span,{className:"token tag",children:[(0,a.jsx)(s.span,{className:"token punctuation",children:"<"}),"link"]}),"\n  ",(0,a.jsx)(s.span,{className:"token attr-name",children:"rel"}),(0,a.jsxs)(s.span,{className:"token attr-value",children:[(0,a.jsx)(s.span,{className:"token punctuation attr-equals",children:"="}),(0,a.jsx)(s.span,{className:"token punctuation",children:'"'}),"stylesheet",(0,a.jsx)(s.span,{className:"token punctuation",children:'"'})]}),"\n  ",(0,a.jsx)(s.span,{className:"token attr-name",children:"href"}),(0,a.jsxs)(s.span,{className:"token attr-value",children:[(0,a.jsx)(s.span,{className:"token punctuation attr-equals",children:"="}),(0,a.jsx)(s.span,{className:"token punctuation",children:'"'}),"https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css",(0,a.jsx)(s.span,{className:"token punctuation",children:'"'})]}),"\n",(0,a.jsx)(s.span,{className:"token punctuation",children:"/>"})]}),"\n",(0,a.jsxs)(s.span,{className:"token tag",children:[(0,a.jsxs)(s.span,{className:"token tag",children:[(0,a.jsx)(s.span,{className:"token punctuation",children:"<"}),"style"]}),(0,a.jsx)(s.span,{className:"token punctuation",children:">"})]}),(0,a.jsx)(s.span,{className:"token style",children:(0,a.jsxs)(s.span,{className:"token language-css",children:["\n  ",(0,a.jsx)(s.span,{className:"token selector",children:(0,a.jsx)(s.span,{className:"token pseudo-class",children:":root"})})," ",(0,a.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n    ",(0,a.jsx)(s.span,{className:"token variable",children:"--swiper-pagination-color"}),(0,a.jsx)(s.span,{className:"token punctuation",children:":"})," ",(0,a.jsx)(s.span,{className:"token hexcode color",children:"#000"}),(0,a.jsx)(s.span,{className:"token punctuation",children:";"}),"\n  ",(0,a.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n"]})}),(0,a.jsxs)(s.span,{className:"token tag",children:[(0,a.jsxs)(s.span,{className:"token tag",children:[(0,a.jsx)(s.span,{className:"token punctuation",children:"</"}),"style"]}),(0,a.jsx)(s.span,{className:"token punctuation",children:">"})]}),"\n"]})}),"\n",(0,a.jsx)(s.h2,{id:"result",children:"Result"}),"\n",(0,a.jsx)(s.p,{children:"As a result, we have an amazing slider on our Webflow website"}),"\n",(0,a.jsx)("video",{src:"/images/blog/swiper-slider-in-webflow/21-final-video.mp4",muted:!0,autoPlay:!0,loop:!0}),"\n",(0,a.jsx)(s.h2,{id:"ps",children:"P.S."}),"\n",(0,a.jsx)(s.p,{children:"And as always, if you love Swiper, please, support project by donating or pledging:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["on Patreon: ",(0,a.jsx)(s.a,{href:"https://www.patreon.com/swiperjs",children:"https://www.patreon.com/swiperjs"})]}),"\n",(0,a.jsxs)(s.li,{children:["on Open Collective: ",(0,a.jsx)(s.a,{href:"https://opencollective.com/swiper",children:"https://opencollective.com/swiper"})]}),"\n"]}),"\n",(0,a.jsx)(s.p,{children:"And checking our premium projects:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"https://uiinitiative.com",children:"UI Initiative"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"https://studio.swiperjs.com",children:"Swiper Studio"})}),"\n"]}),"\n",(0,a.jsx)(s.p,{children:"Your support means a lot for us!"})]})}s.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(c,Object.assign({},e,{children:(0,a.jsx)(r,e)}))}}},function(e){e.O(0,[649,139,774,888,179],function(){return e(e.s=8244)}),_N_E=e.O()}]);