(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{1635:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},b=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,m=b["".concat(c,".").concat(d)]||b[d]||s[d]||a;return n?o.a.createElement(m,i({ref:t},l,{components:n})):o.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},274:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(1),o=n(9),a=(n(0),n(1635)),c={title:"API \u8bf4\u660e"},i={id:"version-2.2.8/apis/about/desc",title:"API \u8bf4\u660e",description:"Taro \u7684 API \u5305\u62ec Taro \u5185\u7f6e\u63d0\u4f9b\u7684 API \u4ee5\u53ca\u5bf9\u5c0f\u7a0b\u5e8f\u7684\u7aef\u80fd\u529b API \u7684\u5c01\u88c5\u3002\r",source:"@site/versioned_docs/version-2.2.8/apis/about/desc.md",permalink:"/taro/docs/apis/about/desc",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.2.8/apis/about/desc.md",version:"2.2.8",sidebar:"version-2.2.8/API",next:{title:"Taro.Component",permalink:"/taro/docs/apis/about/tarocomponent"}},p=[],l={rightToc:p};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Taro \u7684 API \u5305\u62ec Taro \u5185\u7f6e\u63d0\u4f9b\u7684 API \u4ee5\u53ca\u5bf9\u5c0f\u7a0b\u5e8f\u7684\u7aef\u80fd\u529b API \u7684\u5c01\u88c5\u3002"),Object(a.b)("p",null,"\u5176\u4e2d\u5bf9\u5c0f\u7a0b\u5e8f\u7684\u7aef\u80fd\u529b API \u7684\u5c01\u88c5\uff0c\u4e3b\u8981\u4f1a\u57fa\u4e8e\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u7684 API \u89c4\u8303\uff0c\u5bf9\u4e8e\u5176\u4ed6\u5c0f\u7a0b\u5e8f\u7c7b\u4f3c\u7684 API\uff0c\u4f1a\u5728 Taro \u4e2d\u9002\u914d\u4e3a\u5c0f\u7a0b\u5e8f API \u7684\u89c4\u8303\u683c\u5f0f\uff0c\u5e76\u4e14\u90fd\u6302\u8f7d\u5728 ",Object(a.b)("inlineCode",{parentName:"p"},"Taro")," \u547d\u540d\u7a7a\u95f4\u4e0b\u3002"),Object(a.b)("p",null,"\u4f8b\u5982\uff0c\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u4e2d\uff0c",Object(a.b)("inlineCode",{parentName:"p"},"my.alert")," \u7528\u4e8e\u5f39\u51fa\u4e00\u4e2a\u8b66\u544a\u7684\u6a21\u6001\u6846\uff0c\u800c\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u4e2d\u6ca1\u6709\u8fd9\u4e00 API\uff0c\u4e0e\u4e4b\u7c7b\u4f3c\u7684\u6709 ",Object(a.b)("inlineCode",{parentName:"p"},"wx.showModal"),"\uff0c\u6240\u4ee5\u5728 Taro \u4e2d\u4f1a\u5c06\u652f\u4ed8\u5b9d\u7684 ",Object(a.b)("inlineCode",{parentName:"p"},"my.alert")," \u7edf\u4e00\u4e3a ",Object(a.b)("inlineCode",{parentName:"p"},"Taro.showModal"),"\uff0c\u4ece\u800c\u51cf\u5c11\u4e00\u4e9b\u8de8\u5e73\u53f0\u517c\u5bb9\u4ee3\u7801\u7684\u4e66\u5199\u3002"),Object(a.b)("p",null,"\u800c\u5bf9\u4e8e\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u4e2d\u6ca1\u6709\uff0c\u800c\u67d0\u4e9b\u5c0f\u7a0b\u5e8f\u5e73\u53f0\u7279\u6709\u7684 API\uff0c\u53ef\u4ee5\u5148\u5c1d\u8bd5\u7528 ",Object(a.b)("inlineCode",{parentName:"p"},"Taro.")," + API \u540d\u79f0\u6765\u8fdb\u884c\u8c03\u7528\uff0c\u5982\u679c\u51fa\u73b0\u672a\u5b9a\u4e49\uff0c\u5219\u4f7f\u7528\u5bf9\u5e94\u5c0f\u7a0b\u5e8f\u5e73\u53f0\u7684\u547d\u540d\u7a7a\u95f4\uff08\u5982 ",Object(a.b)("inlineCode",{parentName:"p"},"my"),"\u3001",Object(a.b)("inlineCode",{parentName:"p"},"swan"),"\u3001",Object(a.b)("inlineCode",{parentName:"p"},"tt")," \u7b49\uff09\u6765\u8fdb\u884c\u8c03\u7528\uff0c\u5e76\u53cd\u9988\u7ed9\u6211\u4eec\u3002"),Object(a.b)("p",null,"\u5f53\u7136\uff0c\u7531\u4e8e\u5404\u4e2a\u5c0f\u7a0b\u5e8f\u5e73\u53f0\u7684\u8fed\u4ee3\u975e\u5e38\u5feb\u901f\uff0cTaro \u8981\u4e0d\u65ad\u8ddf\u8fdb\u5c0f\u7a0b\u5e8f\u7684\u66f4\u65b0\uff0c\u6709\u65f6\u5019\u96be\u514d\u6709\u4e9b API \u6ca1\u6709\u52a0\u5165 Taro \u9002\u914d\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u63d0 PR \u6216\u8005 issue\uff0c\u6765\u83b7\u5f97\u5e2e\u52a9\u3002"),Object(a.b)("p",null,"\u540c\u65f6\uff0c\u4e3a\u4e86\u65b9\u4fbf\u4ee3\u7801\u4e66\u5199\uff0cTaro \u9ed8\u8ba4\u5bf9\u5c0f\u7a0b\u5e8f\u7684\u5f02\u6b65 API \u8fdb\u884c\u4e86 ",Object(a.b)("inlineCode",{parentName:"p"},"promisify")," \u5316\uff0c\u4f60\u53ef\u4ee5\u50cf\u4f7f\u7528 Promise \u90a3\u6837\u8fdb\u884c\u8c03\u7528\uff0c\u4f8b\u5982"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import Taro from '@tarojs/taro'\n\nTaro.request(url).then(function (res) {\n  console.log(res)\n})\n")))}u.isMDXComponent=!0}}]);