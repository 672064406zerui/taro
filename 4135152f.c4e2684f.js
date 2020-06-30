(window.webpackJsonp=window.webpackJsonp||[]).push([[414],{1635:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var O=n.a.createContext({}),j=function(e){var t=n.a.useContext(O),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},o=function(e){var t=j(e.components);return n.a.createElement(O.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,c=e.parentName,O=l(e,["components","mdxType","originalType","parentName"]),o=j(a),p=r,m=o["".concat(c,".").concat(p)]||o[p]||d[p]||b;return a?n.a.createElement(m,i({ref:t},O,{components:a})):n.a.createElement(m,i({ref:t},O))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,c=new Array(b);c[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var O=2;O<b;O++)c[O]=a[O];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},553:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return j}));var r=a(1),n=a(9),b=(a(0),a(1635)),c={title:"MediaContainer",sidebar_label:"MediaContainer"},i={id:"version-2.2.8/apis/media/video-processing/MediaContainer",title:"MediaContainer",description:"\u521b\u5efa\u97f3\u89c6\u9891\u5904\u7406\u5bb9\u5668\uff0c\u6700\u7ec8\u53ef\u5c06\u5bb9\u5668\u4e2d\u7684\u8f68\u9053\u5408\u6210\u4e00\u4e2a\u89c6\u9891",source:"@site/versioned_docs/version-2.2.8/apis/media/video-processing/MediaContainer.md",permalink:"/taro/docs/apis/media/video-processing/MediaContainer",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.2.8/apis/media/video-processing/MediaContainer.md",version:"2.2.8",sidebar_label:"MediaContainer",sidebar:"version-2.2.8/API",previous:{title:"Taro.createMediaContainer()",permalink:"/taro/docs/apis/media/video-processing/createMediaContainer"},next:{title:"MediaTrack",permalink:"/taro/docs/apis/media/video-processing/MediaTrack"}},l=[{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[{value:"addTrack",id:"addtrack",children:[]},{value:"destroy",id:"destroy",children:[]},{value:"export",id:"export",children:[]},{value:"extractDataSource",id:"extractdatasource",children:[]},{value:"removeTrack",id:"removetrack",children:[]}]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"ExtractDataSourceOption",id:"extractdatasourceoption",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-5",children:[]}],O={rightToc:l};function j(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},O,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"\u521b\u5efa\u97f3\u89c6\u9891\u5904\u7406\u5bb9\u5668\uff0c\u6700\u7ec8\u53ef\u5c06\u5bb9\u5668\u4e2d\u7684\u8f68\u9053\u5408\u6210\u4e00\u4e2a\u89c6\u9891"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/video-processing/MediaContainer.html"}),"\u53c2\u8003\u6587\u6863"))),Object(b.b)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),Object(b.b)("h3",{id:"addtrack"},"addTrack"),Object(b.b)("p",null,"\u5c06\u97f3\u9891\u6216\u89c6\u9891\u8f68\u9053\u6dfb\u52a0\u5230\u5bb9\u5668"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/video-processing/MediaContainer.addTrack.html"}),"\u53c2\u8003\u6587\u6863"))),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"(track: MediaTrack) => void\n")),Object(b.b)("table",null,Object(b.b)("thead",null,Object(b.b)("tr",null,Object(b.b)("th",null,"\u53c2\u6570"),Object(b.b)("th",null,"\u7c7b\u578b"),Object(b.b)("th",null,"\u8bf4\u660e"))),Object(b.b)("tbody",null,Object(b.b)("tr",null,Object(b.b)("td",null,"track"),Object(b.b)("td",null,Object(b.b)("code",null,"MediaTrack")),Object(b.b)("td",null,"\u8981\u6dfb\u52a0\u7684\u97f3\u9891\u6216\u89c6\u9891\u8f68\u9053")))),Object(b.b)("h4",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"API"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"H5"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"MediaContainer.addTrack"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))))),Object(b.b)("h3",{id:"destroy"},"destroy"),Object(b.b)("p",null,"\u5c06\u5bb9\u5668\u9500\u6bc1\uff0c\u91ca\u653e\u8d44\u6e90"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/video-processing/MediaContainer.destroy.html"}),"\u53c2\u8003\u6587\u6863"))),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"() => void\n")),Object(b.b)("h4",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"API"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"H5"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"MediaContainer.destroy"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))))),Object(b.b)("h3",{id:"export"},"export"),Object(b.b)("p",null,"\u5c06\u5bb9\u5668\u5185\u7684\u8f68\u9053\u5408\u5e76\u5e76\u5bfc\u51fa\u89c6\u9891\u6587\u4ef6"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/video-processing/MediaContainer.export.html"}),"\u53c2\u8003\u6587\u6863"))),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"() => void\n")),Object(b.b)("h4",{id:"api-\u652f\u6301\u5ea6-2"},"API \u652f\u6301\u5ea6"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"API"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"H5"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"MediaContainer.export"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))))),Object(b.b)("h3",{id:"extractdatasource"},"extractDataSource"),Object(b.b)("p",null,"\u5c06\u4f20\u5165\u7684\u89c6\u9891\u6e90\u5206\u79bb\u8f68\u9053\u3002\u4e0d\u4f1a\u81ea\u52a8\u5c06\u8f68\u9053\u6dfb\u52a0\u5230\u5f85\u5408\u6210\u7684\u5bb9\u5668\u91cc\u3002"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/video-processing/MediaContainer.extractDataSource.html"}),"\u53c2\u8003\u6587\u6863"))),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"(option: ExtractDataSourceOption) => void\n")),Object(b.b)("table",null,Object(b.b)("thead",null,Object(b.b)("tr",null,Object(b.b)("th",null,"\u53c2\u6570"),Object(b.b)("th",null,"\u7c7b\u578b"))),Object(b.b)("tbody",null,Object(b.b)("tr",null,Object(b.b)("td",null,"option"),Object(b.b)("td",null,Object(b.b)("code",null,"ExtractDataSourceOption"))))),Object(b.b)("h4",{id:"api-\u652f\u6301\u5ea6-3"},"API \u652f\u6301\u5ea6"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"API"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"H5"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"MediaContainer.extractDataSource"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))))),Object(b.b)("h3",{id:"removetrack"},"removeTrack"),Object(b.b)("p",null,"\u5c06\u97f3\u9891\u6216\u89c6\u9891\u8f68\u9053\u4ece\u5bb9\u5668\u4e2d\u79fb\u9664"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/video-processing/MediaContainer.removeTrack.html"}),"\u53c2\u8003\u6587\u6863"))),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"(track: MediaTrack) => void\n")),Object(b.b)("table",null,Object(b.b)("thead",null,Object(b.b)("tr",null,Object(b.b)("th",null,"\u53c2\u6570"),Object(b.b)("th",null,"\u7c7b\u578b"),Object(b.b)("th",null,"\u8bf4\u660e"))),Object(b.b)("tbody",null,Object(b.b)("tr",null,Object(b.b)("td",null,"track"),Object(b.b)("td",null,Object(b.b)("code",null,"MediaTrack")),Object(b.b)("td",null,"\u8981\u79fb\u9664\u7684\u97f3\u9891\u6216\u89c6\u9891\u8f68\u9053")))),Object(b.b)("h4",{id:"api-\u652f\u6301\u5ea6-4"},"API \u652f\u6301\u5ea6"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"API"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"H5"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"MediaContainer.removeTrack"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))))),Object(b.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(b.b)("h3",{id:"extractdatasourceoption"},"ExtractDataSourceOption"),Object(b.b)("table",null,Object(b.b)("thead",null,Object(b.b)("tr",null,Object(b.b)("th",null,"\u53c2\u6570"),Object(b.b)("th",null,"\u7c7b\u578b"),Object(b.b)("th",null,"\u8bf4\u660e"))),Object(b.b)("tbody",null,Object(b.b)("tr",null,Object(b.b)("td",null,"source"),Object(b.b)("td",null,Object(b.b)("code",null,"string")),Object(b.b)("td",null,"\u89c6\u9891\u6e90\u5730\u5740\uff0c\u53ea\u652f\u6301\u672c\u5730\u6587\u4ef6")))),Object(b.b)("h2",{id:"api-\u652f\u6301\u5ea6-5"},"API \u652f\u6301\u5ea6"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"API"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"H5"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"MediaContainer.addTrack"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"MediaContainer.destroy"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"MediaContainer.export"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"MediaContainer.extractDataSource"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"MediaContainer.removeTrack"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))))))}j.isMDXComponent=!0}}]);