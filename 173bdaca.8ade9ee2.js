(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{1635:function(e,t,a){"use strict";a.d(t,"a",(function(){return j})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},j=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),j=p(a),d=n,m=j["".concat(c,".").concat(d)]||j[d]||O[d]||b;return a?r.a.createElement(m,l({ref:t},o,{components:a})):r.a.createElement(m,l({ref:t},o))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var o=2;o<b;o++)c[o]=a[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},290:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return p}));var n=a(1),r=a(9),b=(a(0),a(1635)),c={title:"Taro.uploadFile(param)",sidebar_label:"uploadFile"},l={id:"version-3.0.0-beta.5/apis/network/fileTransfer/uploadFile",title:"Taro.uploadFile(param)",description:"\u5c06\u672c\u5730\u8d44\u6e90\u4e0a\u4f20\u5230\u670d\u52a1\u5668\u3002\u5ba2\u6237\u7aef\u53d1\u8d77\u4e00\u4e2a HTTPS POST \u8bf7\u6c42\uff0c\u5176\u4e2d content-type \u4e3a multipart/form-data\u3002\u4f7f\u7528\u524d\u8bf7\u6ce8\u610f\u9605\u8bfb\u76f8\u5173\u8bf4\u660e\u3002",source:"@site/versioned_docs/version-3.0.0-beta.5/apis/network/fileTransfer/uploadFile.md",permalink:"/taro/docs/3.0.0-beta.5/apis/network/fileTransfer/uploadFile",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.0.0-beta.5/apis/network/fileTransfer/uploadFile.md",version:"3.0.0-beta.5",sidebar_label:"uploadFile",sidebar:"version-3.0.0-beta.5/API",previous:{title:"Taro.createVideoContext(videoId, componentInstance)",permalink:"/taro/docs/3.0.0-beta.5/apis/multimedia/video/createVideoContext"},next:{title:"Taro.downloadFile(param)",permalink:"/taro/docs/3.0.0-beta.5/apis/network/fileTransfer/downloadFile"}},i=[{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"object param",id:"object-param",children:[]}]},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c",children:[{value:"Promise&lt;object res&gt; promise",id:"promiseobject-res-promise",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API\u652f\u6301\u5ea6",id:"api\u652f\u6301\u5ea6",children:[]}],o={rightToc:i};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"\u5c06\u672c\u5730\u8d44\u6e90\u4e0a\u4f20\u5230\u670d\u52a1\u5668\u3002\u5ba2\u6237\u7aef\u53d1\u8d77\u4e00\u4e2a HTTPS POST \u8bf7\u6c42\uff0c\u5176\u4e2d content-type \u4e3a multipart/form-data\u3002\u4f7f\u7528\u524d\u8bf7\u6ce8\u610f\u9605\u8bfb\u76f8\u5173\u8bf4\u660e\u3002"),Object(b.b)("p",null,"\u4f7f\u7528\u65b9\u5f0f\u540c ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/wx.uploadFile.html"}),Object(b.b)("inlineCode",{parentName:"a"},"wx.uploadFile")),"\uff0c\u652f\u6301 ",Object(b.b)("inlineCode",{parentName:"p"},"Promise")," \u5316\u4f7f\u7528\u3002"),Object(b.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(b.b)("h3",{id:"object-param"},"object param"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Property"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"url"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("code",null,"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5f00\u53d1\u8005\u670d\u52a1\u5668\u5730\u5740")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"filePath"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("code",null,"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u8981\u4e0a\u4f20\u6587\u4ef6\u8d44\u6e90\u7684\u8def\u5f84")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"name"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("code",null,"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u6587\u4ef6\u5bf9\u5e94\u7684 key\uff0c\u5f00\u53d1\u8005\u5728\u670d\u52a1\u7aef\u53ef\u4ee5\u901a\u8fc7\u8fd9\u4e2a key \u83b7\u53d6\u6587\u4ef6\u7684\u4e8c\u8fdb\u5236\u5185\u5bb9")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[header]"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("code",null,"object")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"HTTP \u8bf7\u6c42 Header\uff0cHeader \u4e2d\u4e0d\u80fd\u8bbe\u7f6e Referer")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[formData]"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("code",null,"object")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"HTTP \u8bf7\u6c42\u4e2d\u5176\u4ed6\u989d\u5916\u7684 form data")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[success()]"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("code",null,"function")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[fail()]"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("code",null,"function")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[complete()]"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("code",null,"function")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")))),Object(b.b)("h2",{id:"\u8fd4\u56de\u503c"},"\u8fd4\u56de\u503c"),Object(b.b)("h3",{id:"promiseobject-res-promise"},"Promise","<","object res",">"," promise"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"promise.headersReceive(callback)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("code",null,"function")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u7ed1\u5b9a\u63a5\u6536\u5230http header\u7684\u56de\u8c03")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"promise.progress(callback)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("code",null,"function")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u7ed1\u5b9a\u8bf7\u6c42\u8fdb\u5ea6\u66f4\u65b0\u7684\u56de\u8c03")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"promise.abort()"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("code",null,"function")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u4e2d\u65ad\u8bf7\u6c42")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"res.statusCode"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("code",null,"number")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u8bf7\u6c42\u7684\u8fd4\u56de\u72b6\u6001\u7801")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"res.data"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("code",null,"any")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u670d\u52a1\u5668\u7684\u8fd4\u56de\u6570\u636e")))),Object(b.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import Taro from '@tarojs/taro'\n\nconst uploadTask = Taro.uploadFile(params).then(...)\n")),Object(b.b)("h2",{id:"api\u652f\u6301\u5ea6"},"API\u652f\u6301\u5ea6"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"API"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"H5"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"React Native"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Taro.uploadFile"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\ufe0f"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}p.isMDXComponent=!0}}]);