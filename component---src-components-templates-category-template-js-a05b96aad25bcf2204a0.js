(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{JMOy:function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return E}));var a=n("MUpH"),o=n("q1tI"),r=n.n(o),i=n("vOnD"),l=n("0fKb"),c=n.n(l),u=(n("q4sD"),n("7oih")),s=n("bUY0"),d=n("nndF"),g=n("DWd4"),m=n("AP93"),p={en:{name:"en",categoryPropName:"category",slugPropName:"slug",relativePath:""},hant:{name:"hant",categoryPropName:"zhtwCategory",slugPropName:"zhtwSlug",relativePath:"zh-hant/"},hans:{name:"hans",categoryPropName:"zhchCategory",slugPropName:"zhchSlug",relativePath:"zh-hans/"},ko:{name:"ko",categoryPropName:"koCategory",slugPropName:"koSlug",relativePath:"ko/"}},h=n("L24t");function f(){var e=Object(a.a)(["\n    border-top: 3px solid ","; \n    width: 15vw;\n    margin-top: ",";"]);return f=function(){return e},e}function y(){var e=Object(a.a)([".img{height:100px;}"]);return y=function(){return e},e}function v(){var e=Object(a.a)(["\n   .img {\n    height: 488px;\n  "]);return v=function(){return e},e}function w(){var e=Object(a.a)(["\n  .img {\n    height: 344px;\n  }"]);return w=function(){return e},e}function b(){var e=Object(a.a)(["  display: grid;\n  grid-template-columns: 10vw 80vw 10vw;\n  column-gap: ",";"]);return b=function(){return e},e}var C=i.c.div.withConfig({displayName:"Category-Template__Grid",componentId:"sc-16r1uu5-0"})(["",";"],d.a.tablet(b(),Object(d.g)(5))),x=i.c.div.withConfig({displayName:"Category-Template__FeaturedRow",componentId:"sc-16r1uu5-1"})(["padding:0 2vw;display:flex;flex-direction:column;justify-content:center;align-items:center;h1{text-align:center;margin:20px 0;"," font-size:",";color:",";}.img{height:244px;}"," "," ",""],d.e,Object(d.g)(38),d.c.mainBlack,d.a.portraitTablet(w()),d.a.tablet(v()),d.a.laptop(y())),k=i.c.div.withConfig({displayName:"Category-Template__Title",componentId:"sc-16r1uu5-2"})(["border-top:3px solid ",";margin-top:",";",";"],d.c.mainBlack,Object(d.g)(40),d.a.laptop(f(),d.c.mainBlack,Object(d.g)(80))),E="3615202686";t.default=function(e){var t=e.data,n=e.pageContext,a=n.lang,i=void 0===a?"en":a,l=(n.category,n.today,p[i]),f=Object(o.useState)(0),y=f[0],v=f[1],w=Object(o.useState)(t[i].edges.slice(0,10)),b=w[0],E=w[1];return r.a.createElement(u.a,null,t.categories.nodes.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(m.a,{title:e[l.categoryPropName],pageUrl:"https://blog.mxc.org/"+e[l.slugPropName]}),r.a.createElement(C,null,r.a.createElement("div",null),r.a.createElement(x,null,r.a.createElement(k,null,r.a.createElement("h1",null,e[l.categoryPropName])),r.a.createElement(h.a,null),b.map((function(e){var n="";return t[i].edges.length>0&&(n="en"===i?e.node.post.slug:e.node.enPost.post.slug),r.a.createElement("div",{key:e.node.id},r.a.createElement(g.a,{heading:e.node.title,text:e.node.post.metaDescription?e.node.post.metaDescription:"",image:null!==e.node.featuredImage?e.node.featuredImage.childImageSharp.fluid:t.file.childImageSharp.fluid,slug:""+l.relativePath+n,date:e.node.post.date}),r.a.createElement(s.a,{color:d.c.lightGrey}))}))),r.a.createElement("div",null)))})),r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},r.a.createElement(c.a,{itemClass:"page-item",linkClass:"page-link",activePage:y,itemsCountPerPage:10,totalItemsCount:t[i].totalCount,pageRangeDisplayed:5,onChange:function(e){var n=10*(e-1),a=n+10;E(t[i].edges.slice(n,a)),v(e)}})))}},L24t:function(e,t,n){"use strict";var a=n("MUpH"),o=n("q1tI"),r=n.n(o),i=n("vOnD"),l=n("Wbzz"),c=n("ma3e"),u=n("mp+t"),s=n.n(u),d=n("nndF");function g(){var e=Object(a.a)(["\n\tflex-direction:row;\n\theight: auto;\n\tmargin: 0 0 0 0;\n\t"]);return g=function(){return e},e}function m(){var e=Object(a.a)(["display:none;"]);return m=function(){return e},e}var p=function(e){var t=e.data,n=e.url,a=t,i=Object(o.useState)(!1),u=i[0],d=i[1];return r.a.createElement("div",null,r.a.createElement(h,null,r.a.createElement(f,{type:"button",onClick:function(){d((function(e){return!e}))}},"Categories ",r.a.createElement(c.a,null))),r.a.createElement(y,{className:u?""+s.a.show:""+s.a.hide},a.categories.nodes.map((function(e){var t=n.includes("/ko")?e.koCategory:n.includes("/zh-hans")?e.zhchCategory:n.includes("/zh-hant")?e.zhtwCategory:e.category,a=n.includes("/ko")?"/ko/categories/"+e.slug:n.includes("/zh-hans")?"/zh-hans/categories/"+e.slug:n.includes("/zh-hant")?"/zh-hant/categories/"+e.slug:"/categories/"+e.slug;return r.a.createElement(v,{key:a},r.a.createElement(l.a,{to:""+a},t))}))))},h=i.c.div.withConfig({displayName:"Categories__FlexBox",componentId:"sc-1lyy9wq-0"})(["",""],d.d),f=i.c.button.withConfig({displayName:"Categories__MobileMenu",componentId:"sc-1lyy9wq-1"})(["color:",";background-color:transparent;margin-top:1rem;border:none;outline:none;font-size:",";order:99;cursor:pointer;",";"],d.c.mainBlack,Object(d.g)(14),d.a.tablet(m())),y=i.c.ul.withConfig({displayName:"Categories__StyledMenu",componentId:"sc-1lyy9wq-2"})(["display:flex;list-style:none;margin:3rem 0 0 0;align-items:center;padding:0;justify-content:flex-start;flex:4;font-weight:500;flex-direction:column;height:0;overflow:hidden;transition:all 0.3s linear;a{text-decoration:none;color:",";}a:hover{text-decoration:none;color:",";}",";"],d.c.mainBlack,d.c.secondaryColor,d.a.tablet(g())),v=i.c.li.withConfig({displayName:"Categories__MenuItem",componentId:"sc-1lyy9wq-3"})(["padding:1rem 2rem;"]);t.a=function(e){var t="undefined"!=typeof window?window.location.href:"/",n=Object(l.c)("4184689195");return r.a.createElement(p,Object.assign({},e,{data:n,url:t}))}},"mp+t":function(e,t,n){e.exports={show:"Categories-module--show--3O9Tu",hide:"Categories-module--hide--2KBxy"}}}]);
//# sourceMappingURL=component---src-components-templates-category-template-js-a05b96aad25bcf2204a0.js.map