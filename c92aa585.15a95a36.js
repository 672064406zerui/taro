(window.webpackJsonp=window.webpackJsonp||[]).push([[1197],{1334:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return b})),r.d(t,"default",(function(){return l}));var n=r(1),a=r(9),o=(r(0),r(1635)),i={title:"Taro.chooseVideo(OBJECT)",sidebar_label:"chooseVideo"},c={id:"version-3.0.0-beta.5/apis/multimedia/video/chooseVideo",title:"Taro.chooseVideo(OBJECT)",description:"\u4f7f\u7528\u65b9\u5f0f\u540c [`wx.chooseVideo`](https://developers.weixin.qq.com/miniprogram/dev/api/wx.chooseVideo.html)\uff0c\u652f\u6301 `Promise` \u5316\u4f7f\u7528\u3002",source:"@site/versioned_docs/version-3.0.0-beta.5/apis/multimedia/video/chooseVideo.md",permalink:"/taro/docs/3.0.0-beta.5/apis/multimedia/video/chooseVideo",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.0.0-beta.5/apis/multimedia/video/chooseVideo.md",version:"3.0.0-beta.5",sidebar_label:"chooseVideo",sidebar:"version-3.0.0-beta.5/API",previous:{title:"Taro.stopRecord()",permalink:"/taro/docs/3.0.0-beta.5/apis/multimedia/recording/stopRecord"},next:{title:"Taro.saveVideoToPhotosAlbum(OBJECT)",permalink:"/taro/docs/3.0.0-beta.5/apis/multimedia/video/saveVideoToPhotosAlbum"}},b=[{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API\u652f\u6301\u5ea6",id:"api\u652f\u6301\u5ea6",children:[]}],p={rightToc:b};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u4f7f\u7528\u65b9\u5f0f\u540c ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/wx.chooseVideo.html"}),Object(o.b)("inlineCode",{parentName:"a"},"wx.chooseVideo")),"\uff0c\u652f\u6301 ",Object(o.b)("inlineCode",{parentName:"p"},"Promise")," \u5316\u4f7f\u7528\u3002"),Object(o.b)("p",null,"\u6ce8\uff1aRN\u7aef\u8be5API\u4e0d\u652f\u6301 ",Object(o.b)("inlineCode",{parentName:"p"},"compressed")," \u3001",Object(o.b)("inlineCode",{parentName:"p"},"maxDuration"),"\u3001",Object(o.b)("inlineCode",{parentName:"p"},"camera")," \u5c5e\u6027\uff1b\u4e0d\u652f\u6301\u76f8\u518c\u4e0e\u76f8\u673a\u540c\u65f6\u9009\u62e9\uff0c\u53ea\u4f1a\u53d6 ",Object(o.b)("inlineCode",{parentName:"p"},"sourceType")," \u6570\u7ec4\u91cc\u7684\u7b2c\u4e00\u4e2a\u503c\u3002\u9ed8\u8ba4\u4ece\u76f8\u518c\u9009\u53d6\u89c6\u9891\u3002"),Object(o.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import Taro from '@tarojs/taro'\n\nTaro.chooseVideo(params).then(...)\n")),Object(o.b)("h2",{id:"api\u652f\u6301\u5ea6"},"API\u652f\u6301\u5ea6"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"API"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"H5"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Taro.chooseVideo"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}l.isMDXComponent=!0},1635:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return u}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},d=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),d=l(r),m=n,u=d["".concat(i,".").concat(m)]||d[m]||s[m]||o;return r?a.a.createElement(u,c({ref:t},p,{components:r})):a.a.createElement(u,c({ref:t},p))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);