_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[4],{"+VUm":function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"h",(function(){return c})),n.d(t,"i",(function(){return a})),n.d(t,"j",(function(){return i})),n.d(t,"a",(function(){return s})),n.d(t,"g",(function(){return u})),n.d(t,"e",(function(){return l})),n.d(t,"f",(function(){return f})),n.d(t,"d",(function(){return d}));var r="https://github.com/walletconnect",o="https://docs.walletconnect.org/",c="/",a="https://www.npmjs.com/package/web3modal",i="https://docs.walletconnect.org/quick-start/dapps/web3-provider",s="https://discord.gg/jhxMvxP",u="https://twitter.com/walletconnect",l="https://ethereum.stackexchange.com/",f="https://github.com/WalletConnect/walletconnect-registry/issues/new/choose",d="https://registry.walletconnect.org/logo/lg/"},"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=a,t.useAmp=function(){return a(o.default.useContext(c.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},c=n("lwAK");function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,c=e.hasQuery,a=void 0!==c&&c;return n||o&&a}},0:function(e,t,n){n("74v/"),e.exports=n("nOHt")},"48fX":function(e,t,n){var r=n("qhzo");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"5fIB":function(e,t,n){var r=n("7eYB");e.exports=function(e){if(Array.isArray(e))return r(e)}},"74v/":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("cha2")}])},"8Kt/":function(e,t,n){"use strict";n("oI91");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var c=r?Object.getOwnPropertyDescriptor(e,o):null;c&&(c.get||c.set)?Object.defineProperty(n,o,c):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),c=(r=n("Xuae"))&&r.__esModule?r:{default:r},a=n("lwAK"),i=n("FYa8"),s=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var c=!0,a=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){a=!0;var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?c=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?c=!1:t.add(o.type);break;case"meta":for(var s=0,u=d.length;s<u;s++){var l=d[s];if(o.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?c=!1:n.add(l);else{var f=o.props[l],p=r[l]||new Set;"name"===l&&a||!p.has(f)?(p.add(f),r[l]=p):c=!1}}}return c}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function m(e){var t=e.children,n=(0,o.useContext)(a.AmpStateContext),r=(0,o.useContext)(i.HeadManagerContext);return o.default.createElement(c.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,s.isInAmpMode)(n)},t)}m.rewind=function(){};var h=m;t.default=h},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},T0f4:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},Xuae:function(e,t,n){"use strict";var r=n("mPvQ"),o=n("/GRZ"),c=n("i2R6"),a=(n("qXWd"),n("48fX")),i=n("tCBg"),s=n("T0f4");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),f=function(e){a(n,e);var t=u(n);function n(e){var c;return o(this,n),(c=t.call(this,e))._hasHeadManager=void 0,c.emitChange=function(){c._hasHeadManager&&c.props.headManager.updateHead(c.props.reduceComponentsToState(r(c.props.headManager.mountedInstances),c.props))},c._hasHeadManager=c.props.headManager&&c.props.headManager.mountedInstances,c}return c(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=f},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("zoAU"),o=n("7KCV");t.__esModule=!0,t.default=void 0;var c=o(n("q1tI")),a=n("elyg"),i=n("nOHt"),s=n("vNVm"),u={};function l(e,t,n,r){if(e&&(0,a.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,i.useRouter)(),o=n&&n.pathname||"/",f=c.default.useMemo((function(){var t=(0,a.resolveHref)(o,e.href,!0),n=r(t,2),c=n[0],i=n[1];return{href:c,as:e.as?(0,a.resolveHref)(o,e.as):i||c}}),[o,e.href,e.as]),d=f.href,p=f.as,m=e.children,h=e.replace,b=e.shallow,j=e.scroll,v=e.locale;"string"===typeof m&&(m=c.default.createElement("a",null,m));var y=c.Children.only(m),x=y&&"object"===typeof y&&y.ref,g=(0,s.useIntersection)({rootMargin:"200px"}),O=r(g,2),w=O[0],_=O[1],M=c.default.useCallback((function(e){w(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,w]);(0,c.useEffect)((function(){var e=_&&t&&(0,a.isLocalURL)(d),r="undefined"!==typeof v?v:n&&n.locale,o=u[d+"%"+p+(r?"%"+r:"")];e&&!o&&l(n,d,p,{locale:r})}),[p,d,_,v,t,n]);var k={ref:M,onClick:function(e){y.props&&"function"===typeof y.props.onClick&&y.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,c,i,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:c,locale:s,scroll:i}))}(e,n,d,p,h,b,j,v)},onMouseEnter:function(e){(0,a.isLocalURL)(d)&&(y.props&&"function"===typeof y.props.onMouseEnter&&y.props.onMouseEnter(e),l(n,d,p,{priority:!0}))}};if(e.passHref||"a"===y.type&&!("href"in y.props)){var P="undefined"!==typeof v?v:n&&n.locale,C=n&&n.isLocaleDomain&&(0,a.getDomainLocale)(p,P,n&&n.locales,n&&n.domainLocales);k.href=C||(0,a.addBasePath)((0,a.addLocale)(p,P,n&&n.defaultLocale))}return c.default.cloneElement(y,k)};t.default=f},cha2:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),o=n("cpVT"),c=(n("zPlV"),n("g4pe")),a=n.n(c),i=n("YFqc"),s=n.n(i),u=n("+VUm"),l=n("w6WA"),f=function(){var e="WalletConnect",t="https://walletconnect.org",n="Open protocol for connecting Wallets to Dapps";return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(a.a,{children:[Object(r.jsx)("title",{children:e}),Object(r.jsx)("link",{rel:"shortcut icon",href:"/favicon.ico"}),Object(r.jsx)("meta",{name:"msapplication-TileColor",content:"#da532c"}),Object(r.jsx)("meta",{name:"theme-color",content:"#ffffff"}),Object(r.jsx)("meta",{name:"description",content:n}),Object(r.jsx)("meta",{name:"keywords",content:"ethereum, cryptocurrency, wallet, mobile, connect, bridge, relay, proxy, standard, protocol, crypto, tokens, dapp"}),Object(r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),Object(r.jsx)("meta",{name:"twitter:site",content:"@walletconnect"}),Object(r.jsx)("meta",{name:"twitter:title",content:e}),Object(r.jsx)("meta",{name:"twitter:description",content:n}),Object(r.jsx)("meta",{name:"twitter:img:src",content:"".concat(t,"/social-card.png")}),Object(r.jsx)("meta",{name:"og:title",content:e}),Object(r.jsx)("meta",{name:"og:type",content:"website"}),Object(r.jsx)("meta",{name:"og:url",content:t}),Object(r.jsx)("meta",{name:"og:image",content:"".concat(t,"/social-card.png")}),Object(r.jsx)("meta",{name:"og:description",content:n}),Object(r.jsx)("meta",{name:"og:site_name",content:"WalletConnect"}),Object(r.jsx)("meta",{name:"fb:admins",content:""})]}),Object(r.jsxs)("header",{className:"sticky top-0 z-10 flex items-center justify-between px-5 py-4 bg-white md:py-6 ",children:[Object(r.jsx)("div",{className:"absolute inset-0 shadow-lg opacity-50"}),Object(r.jsxs)("div",{className:"z-20 flex justify-around w-full sm:pr-10 md:pr-20",children:[Object(r.jsx)(l.d,{href:u.c,type:l.b.HeaderLink,external:!0,children:"GitHub"}),Object(r.jsx)(l.d,{href:u.b,type:l.b.HeaderLink,external:!0,children:"Docs"})]}),Object(r.jsx)("div",{className:"z-20 flex",children:Object(r.jsx)("div",{className:"w-16 mx-6 sm:w-20 md:w-28",children:Object(r.jsx)(s.a,{href:"/",children:Object(r.jsx)("img",{className:"cursor-pointer object-fit",src:"walletconnect-logo.svg",alt:"walletconnect logo"})})})}),Object(r.jsxs)("div",{className:"z-20 flex justify-around w-full sm:pl-10 md:pl-20",children:[Object(r.jsx)(l.d,{href:"/",type:l.b.HeaderLink,children:"Wallets"}),Object(r.jsx)(l.d,{href:"/apps",type:l.b.HeaderLink,children:"Apps"})]})]})]})},d=function(){return Object(r.jsx)("footer",{className:"flex justify-center mt-24 mb-16 sm:mt-32",children:Object(r.jsxs)("div",{className:"flex flex-col space-y-6 sm:space-y-0 sm:space-x-20 sm:flex-row",children:[Object(r.jsx)(p,{name:"Discord",iconPath:"/discord.svg",href:u.a}),Object(r.jsx)(p,{name:"Twitter",iconPath:"/twitter.svg",href:u.g}),Object(r.jsx)(p,{name:"GitHub",iconPath:"/github.svg",href:u.c}),Object(r.jsx)(p,{name:"Support",iconPath:"/mail.svg",href:"/support"})]})})},p=function(e){var t=e.name,n=e.iconPath,o=e.href;return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(l.d,{href:o,type:l.b.FooterLink,external:!0,children:Object(r.jsxs)("div",{className:"flex",children:[Object(r.jsx)("img",{className:"w-6 sm:w-8",src:n,alt:t}),Object(r.jsx)("p",{className:"ml-2",children:t})]})})})},m=function(e){var t=e.children;return Object(r.jsxs)("div",{className:"font-roboto",id:"content",children:[Object(r.jsx)(f,{}),t,Object(r.jsx)(d,{})]})};function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=function(e){var t=e.Component,n=e.pageProps;return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(m,{children:Object(r.jsx)(t,b({},n))})})}},cpVT:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},g4pe:function(e,t,n){e.exports=n("8Kt/")},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},mPvQ:function(e,t,n){var r=n("5fIB"),o=n("rlHP"),c=n("KckH"),a=n("kG2m");e.exports=function(e){return r(e)||o(e)||c(e)||a()}},oI91:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},qXWd:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},tCBg:function(e,t,n){var r=n("C+bE"),o=n("qXWd");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},vNVm:function(e,t,n){"use strict";var r=n("zoAU");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,s=(0,o.useRef)(),u=(0,o.useState)(!1),l=r(u,2),f=l[0],d=l[1],p=(0,o.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),n||f||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=i.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return i.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,c=r.observer,a=r.elements;return a.set(e,t),c.observe(e),function(){a.delete(e),c.unobserve(e),0===a.size&&(c.disconnect(),i.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return(0,o.useEffect)((function(){if(!a&&!f){var e=(0,c.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,c.cancelIdleCallback)(e)}}}),[f]),[p,f]};var o=n("q1tI"),c=n("0G5g"),a="undefined"!==typeof IntersectionObserver;var i=new Map},w6WA:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"d",(function(){return i})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return u}));var r,o=n("nKUr"),c=n("YFqc"),a=n.n(c);!function(e){e.HeaderLink="font-semibold text-cool-gray-500 hover:text-cool-gray-600 sm:text-xl",e.FooterLink="text-sm font-medium sm:text-lg text-cool-gray-600 group-hover:text-cool-gray-500",e.PageLink="font-semibold text-blue-500 hover:text-cool-blue-600"}(r||(r={}));var i=function(e){var t=e.type,n=e.href,r=e.children,c=e.external,a=void 0!==c&&c;return Object(o.jsxs)(u,{href:n,external:a,tailwindStyles:t,children:[" ",r," "]})},s=function(e){var t=e.iconPath,n=e.href,r=e.styles,c=e.altText;return Object(o.jsx)(u,{href:n,external:!0,children:Object(o.jsx)("img",{className:"filter-grayscale hover:filter-none ".concat(r),alt:c,src:t})})},u=function(e){var t=e.children,n=e.href,r=e.tailwindStyles,c=e.external;return void 0!==c&&c?Object(o.jsx)("a",{className:r,href:n,children:t}):Object(o.jsx)(a.a,{href:n,children:Object(o.jsx)("a",{className:r,children:t})})}},zPlV:function(e,t,n){}},[[0,0,2,1]]]);