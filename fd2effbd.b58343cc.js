(window.webpackJsonp=window.webpackJsonp||[]).push([[1481],{1617:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return p}));var n=a(1),r=a(9),b=(a(0),a(1635)),c={title:"Taro.getSystemInfoSync()",sidebar_label:"getSystemInfoSync"},o={id:"version-3.0.0-beta.5/apis/device/systeminfo/getSystemInfoSync",title:"Taro.getSystemInfoSync()",description:"\u83b7\u53d6\u7cfb\u7edf\u4fe1\u606f\u540c\u6b65\u63a5\u53e3\u3002",source:"@site/versioned_docs/version-3.0.0-beta.5/apis/device/systeminfo/getSystemInfoSync.md",permalink:"/taro/docs/3.0.0-beta.5/apis/device/systeminfo/getSystemInfoSync",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.0.0-beta.5/apis/device/systeminfo/getSystemInfoSync.md",version:"3.0.0-beta.5",sidebar_label:"getSystemInfoSync",sidebar:"version-3.0.0-beta.5/API",previous:{title:"Taro.getSystemInfo(OBJECT)",permalink:"/taro/docs/3.0.0-beta.5/apis/device/systeminfo/getSystemInfo"},next:{title:"Taro.connectWifi(OBJECT)",permalink:"/taro/docs/3.0.0-beta.5/apis/device/wifi/connectWifi"}},i=[{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API\u652f\u6301\u5ea6",id:"api\u652f\u6301\u5ea6",children:[]}],l={rightToc:i};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"\u83b7\u53d6\u7cfb\u7edf\u4fe1\u606f\u540c\u6b65\u63a5\u53e3\u3002"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"\u540c\u6b65\u8fd4\u56de\u53c2\u6570\u8bf4\u660e\uff1a")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"\u53c2\u6570"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"brand"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u624b\u673a\u54c1\u724c")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"model"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u624b\u673a\u578b\u53f7")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"system"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u64cd\u4f5c\u7cfb\u7edf\u7248\u672c")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"pixelRatio"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u8bbe\u5907\u50cf\u7d20\u6bd4")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"screenWidth"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u5c4f\u5e55\u5bbd\u5ea6")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"screenHeight"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u5c4f\u5e55\u9ad8\u5ea6")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"windowWidth"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u53ef\u4f7f\u7528\u7a97\u53e3\u5bbd\u5ea6")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"windowHeight"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u53ef\u4f7f\u7528\u7a97\u53e3\u9ad8\u5ea6")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"version"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u5fae\u4fe1\u7248\u672c\u53f7")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"statusBarHeight"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u72b6\u6001\u680f\u7684\u9ad8\u5ea6")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"platform"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u5ba2\u6237\u7aef\u5e73\u53f0")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"language"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u5fae\u4fe1\u8bbe\u7f6e\u7684\u8bed\u8a00")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"fontSizeSetting"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u7528\u6237\u5b57\u4f53\u5927\u5c0f\u8bbe\u7f6e\u3002\u4ee5\u201c\u6211-\u8bbe\u7f6e-\u901a\u7528-\u5b57\u4f53\u5927\u5c0f\u201d\u4e2d\u7684\u8bbe\u7f6e\u4e3a\u51c6\uff0c\u5355\u4f4d\uff1apx")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"SDKVersion"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u5ba2\u6237\u7aef\u57fa\u7840\u5e93\u7248\u672c")))),Object(b.b)("p",null,"\u6ce8\u610f\uff1a",Object(b.b)("strong",{parentName:"p"},"H5")," \u7aef\u4e0d\u652f\u6301 version\u3001statusBarHeight\u3001fontSizeSetting\u3001SDKVersion"),Object(b.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import Taro from '@tarojs/taro'\n\nconst res = Taro.getSystemInfoSync()\nconsole.log(res.model)\nconsole.log(res.pixelRatio)\nconsole.log(res.windowWidth)\nconsole.log(res.windowHeight)\nconsole.log(res.language)\nconsole.log(res.version)\nconsole.log(res.platform)\n")),Object(b.b)("h2",{id:"api\u652f\u6301\u5ea6"},"API\u652f\u6301\u5ea6"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"API"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"H5"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Taro.getSystemInfoSync"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}p.isMDXComponent=!0},1635:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},O=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),O=p(a),m=n,d=O["".concat(c,".").concat(m)]||O[m]||j[m]||b;return a?r.a.createElement(d,o({ref:t},l,{components:a})):r.a.createElement(d,o({ref:t},l))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var l=2;l<b;l++)c[l]=a[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);