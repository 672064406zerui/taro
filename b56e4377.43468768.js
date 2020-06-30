(window.webpackJsonp=window.webpackJsonp||[]).push([[1093],{1230:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return l}));var a=r(1),n=r(9),o=(r(0),r(1635)),c={title:"Taro.createMapContext(mapId, this.$scope)",sidebar_label:"createMapContext"},i={id:"version-1.3.42/apis/multimedia/map/createMapContext",title:"Taro.createMapContext(mapId, this.$scope)",description:"\u4f7f\u7528\u65b9\u5f0f\u540c [`wx.createMapContext`](https://developers.weixin.qq.com/miniprogram/dev/api/wx.createMapContext.html)\u3002",source:"@site/versioned_docs/version-1.3.42/apis/multimedia/map/createMapContext.md",permalink:"/taro/docs/1.3.42/apis/multimedia/map/createMapContext",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-1.3.42/apis/multimedia/map/createMapContext.md",version:"1.3.42",sidebar_label:"createMapContext",sidebar:"version-1.3.42/API",previous:{title:"Taro.saveImageToPhotosAlbum(OBJECT)",permalink:"/taro/docs/1.3.42/apis/multimedia/images/saveImageToPhotosAlbum"},next:{title:"Taro.startRecord(OBJECT)",permalink:"/taro/docs/1.3.42/apis/multimedia/recording/startRecord"}},p=[{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API\u652f\u6301\u5ea6",id:"api\u652f\u6301\u5ea6",children:[]}],b={rightToc:p};function l(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u4f7f\u7528\u65b9\u5f0f\u540c ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/wx.createMapContext.html"}),Object(o.b)("inlineCode",{parentName:"a"},"wx.createMapContext")),"\u3002"),Object(o.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import Taro from '@tarojs/taro'\n\nconst mapCtx = Taro.createMapContext('myMap')\n")),Object(o.b)("h2",{id:"api\u652f\u6301\u5ea6"},"API\u652f\u6301\u5ea6"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"API"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"H5"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Taro.createMapContext"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"center"})),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}))))))}l.isMDXComponent=!0},1635:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return d}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var b=n.a.createContext({}),l=function(e){var t=n.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},m=function(e){var t=l(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),m=l(r),u=a,d=m["".concat(c,".").concat(u)]||m[u]||s[u]||o;return r?n.a.createElement(d,i({ref:t},b,{components:r})):n.a.createElement(d,i({ref:t},b))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var b=2;b<o;b++)c[b]=r[b];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);