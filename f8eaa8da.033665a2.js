(window.webpackJsonp=window.webpackJsonp||[]).push([[1457],{1593:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return s}));var r=t(1),a=t(9),o=(t(0),t(1635)),c={title:"\u4f7f\u7528 CSS-in-JS"},i={id:"version-1.3.42/css-in-js",title:"\u4f7f\u7528 CSS-in-JS",description:"\u5728 React \u793e\u533a\u6709\u4e00\u4e2a\u8457\u540d\u7684 CSS-in-JS \u89e3\u51b3\u65b9\u6848: [styled-components](https://github.com/styled-components/styled-components)\u3002\u4f46\u9057\u61be\u7684\u662f\uff0c`styled-components` \u4f7f\u7528 `<style>` \u6807\u7b7e\u6765\u52a8\u6001\u5730\u63a7\u5236\u6837\u5f0f\uff0c\u5728\u5c0f\u7a0b\u5e8f\u6ca1\u6709\u7c7b\u4f3c\u7684\u65b9\u6848\u3002\u4f46\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 [linaria](https://github.com/callstack/linaria) \u5b9e\u73b0\u540c\u6837\u7684\u529f\u80fd\uff0c`linaria` \u4e3b\u8981\u63d0\u4f9b\u4ee5\u4e0b\u7279\u6027\uff1a",source:"@site/versioned_docs/version-1.3.42/css-in-js.md",permalink:"/taro/docs/1.3.42/css-in-js",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-1.3.42/css-in-js.md",version:"1.3.42"},l=[],p={rightToc:l};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u5728 React \u793e\u533a\u6709\u4e00\u4e2a\u8457\u540d\u7684 CSS-in-JS \u89e3\u51b3\u65b9\u6848: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/styled-components/styled-components"}),"styled-components"),"\u3002\u4f46\u9057\u61be\u7684\u662f\uff0c",Object(o.b)("inlineCode",{parentName:"p"},"styled-components")," \u4f7f\u7528 ",Object(o.b)("inlineCode",{parentName:"p"},"<style>")," \u6807\u7b7e\u6765\u52a8\u6001\u5730\u63a7\u5236\u6837\u5f0f\uff0c\u5728\u5c0f\u7a0b\u5e8f\u6ca1\u6709\u7c7b\u4f3c\u7684\u65b9\u6848\u3002\u4f46\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/callstack/linaria"}),"linaria")," \u5b9e\u73b0\u540c\u6837\u7684\u529f\u80fd\uff0c",Object(o.b)("inlineCode",{parentName:"p"},"linaria")," \u4e3b\u8981\u63d0\u4f9b\u4ee5\u4e0b\u7279\u6027\uff1a"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u8fd1\u4f3c\u4e8e ",Object(o.b)("inlineCode",{parentName:"li"},"styled-components")," \u7684 API"),Object(o.b)("li",{parentName:"ul"},"\u5b8c\u6574\u7684 TypeScript \u652f\u6301"),Object(o.b)("li",{parentName:"ul"},"\u96f6\u8fd0\u884c\u65f6")),Object(o.b)("p",null,"\u4f7f\u7528 ",Object(o.b)("inlineCode",{parentName:"p"},"linaria")," \u4e5f\u975e\u5e38\u7b80\u5355\uff0c\u9996\u5148\u901a\u8fc7 NPM \u5b89\u88c5\u4f9d\u8d56\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ npm i linaria\n")),Object(o.b)("p",null,"\u5176\u6b21\u914d\u7f6e\u9879\u76ee\u6839\u76ee\u5f55\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"babel.config.js"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"module.exports = {\n  presets: [\n    ['taro', {\n      framework: 'react',\n      ts: true\n    }],\n    'linaria/babel' // \u6dfb\u52a0\u5230 babel-preset\n  ]\n}\n")),Object(o.b)("p",null,"\u4e4b\u540e\u914d\u7f6e ",Object(o.b)("inlineCode",{parentName:"p"},"config/index.js")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const config = {\n  mini: {\n    webpackChain(chain, webpack) {\n      // linaria/loader \u9009\u9879\u8be6\u89c1 https://github.com/callstack/linaria/blob/master/docs/BUNDLERS_INTEGRATION.md#webpack\n      chain.module\n        .rule('script')\n        .use('linariaLoader')\n        .loader('linaria/loader')\n        .options({\n          sourceMap: process.env.NODE_ENV !== 'production',\n        })\n    }\n  }\n}\n")),Object(o.b)("p",null,"\u6700\u540e\u5728\u9879\u76ee\u6839\u76ee\u5f55\u65b0\u5efa ",Object(o.b)("inlineCode",{parentName:"p"},"linaria.config.js")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// linaria \u914d\u7f6e\u8be6\u89c1 https://github.com/callstack/linaria/blob/2eaef3f15b/docs/CONFIGURATION.md#options\nmodule.exports = {\n    ignore: /node_modules[\\/\\\\](?!@tarojs[\\/\\\\]components)/,\n}\n")),Object(o.b)("p",null,"\u5728\u4e1a\u52a1\u4ee3\u7801\u4e2d\u6211\u4eec\u53ef\u4ee5\u8fd9\u6837\u4f7f\u7528\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import React from 'react'\nimport { View } from '@tarojs/components'\nimport { styled } from 'linaria/react'\n\nconst Title = styled(View)`\n  color: ${props => props.color}\n`;\n\nconst Index = () => {\n  return <Title color='red'>\n    Hello World!\n  </Title>\n}\n\nexport default Index\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"import React from 'react'\nimport { View } from '@tarojs/components'\nimport { styled } from 'linaria/react'\n\nconst Title = styled(View)<{ color: string }>`\n  color: ${props => props.color}\n`;\n\nconst Index: React.FC = () => {\n  return <Title color='red'>\n    Hello World!\n  </Title>\n}\n\nexport default Index\n")))}s.isMDXComponent=!0},1635:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),s=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i({},n,{},e)),t},b=function(e){var n=s(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(t),m=r,d=b["".concat(c,".").concat(m)]||b[m]||u[m]||o;return t?a.a.createElement(d,i({ref:n},p,{components:t})):a.a.createElement(d,i({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<o;p++)c[p]=t[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);