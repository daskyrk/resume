(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[635],{4002:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o=[],i=!0,u=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);i=!0);}catch(c){u=!0,a=c}finally{try{i||null==r.return||r.return()}finally{if(u)throw a}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,i=(o=r(2374))&&o.__esModule?o:{default:o},u=r(723),c=r(3719),l=r(7298);var f={};function s(e,t,r,n){if(e&&u.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;f[t+"%"+r+(a?"%"+a:"")]=!0}}var d=function(e){var t,r=!1!==e.prefetch,n=c.useRouter(),o=i.default.useMemo((function(){var t=a(u.resolveHref(n,e.href,!0),2),r=t[0],o=t[1];return{href:r,as:e.as?u.resolveHref(n,e.as):o||r}}),[n,e.href,e.as]),d=o.href,p=o.as,y=i.default.useRef(d),v=i.default.useRef(p),m=e.children,h=e.replace,g=e.shallow,w=e.scroll,b=e.locale;"string"===typeof m&&(m=i.default.createElement("a",null,m));var L=(t=i.default.Children.only(m))&&"object"===typeof t&&t.ref,_=a(l.useIntersection({rootMargin:"200px"}),3),M=_[0],j=_[1],S=_[2],E=i.default.useCallback((function(e){v.current===p&&y.current===d||(S(),v.current=p,y.current=d),M(e),L&&("function"===typeof L?L(e):"object"===typeof L&&(L.current=e))}),[p,L,d,S,M]);i.default.useEffect((function(){var e=j&&r&&u.isLocalURL(d),t="undefined"!==typeof b?b:n&&n.locale,a=f[d+"%"+p+(t?"%"+t:"")];e&&!a&&s(n,d,p,{locale:t})}),[p,d,j,b,r,n]);var I={ref:E,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,a,o,i,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(r))&&(e.preventDefault(),t[a?"replace":"push"](r,n,{shallow:o,locale:c,scroll:i}))}(e,n,d,p,h,g,w,b)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u.isLocalURL(d)&&s(n,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var C="undefined"!==typeof b?b:n&&n.locale,N=n&&n.isLocaleDomain&&u.getDomainLocale(p,C,n&&n.locales,n&&n.domainLocales);I.href=N||u.addBasePath(u.addLocale(p,C,n&&n.defaultLocale))}return i.default.cloneElement(t,I)};t.default=d,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},7298:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o=[],i=!0,u=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);i=!0);}catch(c){u=!0,a=c}finally{try{i||null==r.return||r.return()}finally{if(u)throw a}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!u,f=o.useRef(),s=a(o.useState(!1),2),d=s[0],p=s[1],y=a(o.useState(t?t.current:null),2),v=y[0],m=y[1],h=o.useCallback((function(e){f.current&&(f.current(),f.current=void 0),n||d||e&&e.tagName&&(f.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=l.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?t=c.get(n):(t=c.get(r),l.push(r));if(t)return t;var a=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=a.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return c.set(r,t={id:r,observer:o,elements:a}),t}(r),a=n.id,o=n.observer,i=n.elements;return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),c.delete(a);var t=l.findIndex((function(e){return e.root===a.root&&e.margin===a.margin}));t>-1&&l.splice(t,1)}}}(e,(function(e){return e&&p(e)}),{root:v,rootMargin:r}))}),[n,v,r,d]),g=o.useCallback((function(){p(!1)}),[]);return o.useEffect((function(){if(!u&&!d){var e=i.requestIdleCallback((function(){return p(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[d]),o.useEffect((function(){t&&m(t.current)}),[t]),[h,d,g]};var o=r(2374),i=r(5510),u="undefined"!==typeof IntersectionObserver;var c=new Map,l=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},5315:function(e,t,r){e.exports=r(8208)},8293:function(e,t,r){e.exports=r(4002)},1294:function(e,t,r){"use strict";var n,a=r(1030),o=(n=a)&&n.__esModule?n:{default:n};var i={tags:function(e){var t=e.id,r=e.events,n=e.dataLayer,a=e.dataLayerName,i=e.preview,u="&gtm_auth="+e.auth,c="&gtm_preview="+i;return t||(0,o.default)("GTM Id is required"),{iframe:'\n      <iframe src="https://www.googletagmanager.com/ns.html?id='+t+u+c+'&gtm_cookies_win=x"\n        height="0" width="0" style="display:none;visibility:hidden" id="tag-manager"></iframe>',script:"\n      (function(w,d,s,l,i){w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js', "+JSON.stringify(r).slice(1,-1)+"});\n        var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';\n        j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl+'"+u+c+"&gtm_cookies_win=x';\n        f.parentNode.insertBefore(j,f);\n      })(window,document,'script','"+a+"','"+t+"');",dataLayerVar:this.dataLayer(n,a)}},dataLayer:function(e,t){return"\n      window."+t+" = window."+t+" || [];\n      window."+t+".push("+JSON.stringify(e)+")"}};e.exports=i},3679:function(e,t,r){"use strict";var n,a=r(1294),o=(n=a)&&n.__esModule?n:{default:n};var i={dataScript:function(e){var t=document.createElement("script");return t.innerHTML=e,t},gtm:function(e){var t=o.default.tags(e);return{noScript:function(){var e=document.createElement("noscript");return e.innerHTML=t.iframe,e},script:function(){var e=document.createElement("script");return e.innerHTML=t.script,e},dataScript:this.dataScript(t.dataLayerVar)}},initialize:function(e){var t=e.gtmId,r=e.events,n=void 0===r?{}:r,a=e.dataLayer,o=e.dataLayerName,i=void 0===o?"dataLayer":o,u=e.auth,c=void 0===u?"":u,l=e.preview,f=void 0===l?"":l,s=this.gtm({id:t,events:n,dataLayer:a||void 0,dataLayerName:i,auth:c,preview:f});a&&document.head.appendChild(s.dataScript),document.head.insertBefore(s.script(),document.head.childNodes[0]),document.body.insertBefore(s.noScript(),document.body.childNodes[0])},dataLayer:function(e){var t=e.dataLayer,r=e.dataLayerName,n=void 0===r?"dataLayer":r;if(window[n])return window[n].push(t);var a=o.default.dataLayer(t,n),i=this.dataScript(a);document.head.insertBefore(i,document.head.childNodes[0])}};e.exports=i},6083:function(e,t,r){"use strict";var n,a=r(3679),o=(n=a)&&n.__esModule?n:{default:n};e.exports=o.default},1030:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){console.warn("[react-gtm]",e)}}}]);