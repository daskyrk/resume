(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[163],{5925:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/content",function(){return r(5533)}])},4002:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,u=[],a=!0,l=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(u.push(n.value),!t||u.length!==t);a=!0);}catch(i){l=!0,o=i}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return u}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u,a=(u=r(2374))&&u.__esModule?u:{default:u},l=r(723),i=r(3719),f=r(7298);var c={};function s(e,t,r,n){if(e&&l.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;c[t+"%"+r+(o?"%"+o:"")]=!0}}var d=function(e){var t,r=!1!==e.prefetch,n=i.useRouter(),u=a.default.useMemo((function(){var t=o(l.resolveHref(n,e.href,!0),2),r=t[0],u=t[1];return{href:r,as:e.as?l.resolveHref(n,e.as):u||r}}),[n,e.href,e.as]),d=u.href,p=u.as,y=a.default.useRef(d),v=a.default.useRef(p),h=e.children,b=e.replace,m=e.shallow,g=e.scroll,w=e.locale;"string"===typeof h&&(h=a.default.createElement("a",null,h));var _=(t=a.default.Children.only(h))&&"object"===typeof t&&t.ref,E=o(f.useIntersection({rootMargin:"200px"}),3),M=E[0],j=E[1],C=E[2],I=a.default.useCallback((function(e){v.current===p&&y.current===d||(C(),v.current=p,y.current=d),M(e),_&&("function"===typeof _?_(e):"object"===typeof _&&(_.current=e))}),[p,_,d,C,M]);a.default.useEffect((function(){var e=j&&r&&l.isLocalURL(d),t="undefined"!==typeof w?w:n&&n.locale,o=c[d+"%"+p+(t?"%"+t:"")];e&&!o&&s(n,d,p,{locale:t})}),[p,d,j,w,r,n]);var A={ref:I,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,u,a,i){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(r))&&(e.preventDefault(),t[o?"replace":"push"](r,n,{shallow:u,locale:i,scroll:a}))}(e,n,d,p,b,m,g,w)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),l.isLocalURL(d)&&s(n,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var L="undefined"!==typeof w?w:n&&n.locale,k=n&&n.isLocaleDomain&&l.getDomainLocale(p,L,n&&n.locales,n&&n.domainLocales);A.href=k||l.addBasePath(l.addLocale(p,L,n&&n.defaultLocale))}return a.default.cloneElement(t,A)};t.default=d,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},7298:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,u=[],a=!0,l=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(u.push(n.value),!t||u.length!==t);a=!0);}catch(i){l=!0,o=i}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return u}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!l,c=u.useRef(),s=o(u.useState(!1),2),d=s[0],p=s[1],y=o(u.useState(t?t.current:null),2),v=y[0],h=y[1],b=u.useCallback((function(e){c.current&&(c.current(),c.current=void 0),n||d||e&&e.tagName&&(c.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=f.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?t=i.get(n):(t=i.get(r),f.push(r));if(t)return t;var o=new Map,u=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return i.set(r,t={id:r,observer:u,elements:o}),t}(r),o=n.id,u=n.observer,a=n.elements;return a.set(e,t),u.observe(e),function(){if(a.delete(e),u.unobserve(e),0===a.size){u.disconnect(),i.delete(o);var t=f.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&f.splice(t,1)}}}(e,(function(e){return e&&p(e)}),{root:v,rootMargin:r}))}),[n,v,r,d]),m=u.useCallback((function(){p(!1)}),[]);return u.useEffect((function(){if(!l&&!d){var e=a.requestIdleCallback((function(){return p(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[d]),u.useEffect((function(){t&&h(t.current)}),[t]),[b,d,m]};var u=r(2374),a=r(5510),l="undefined"!==typeof IntersectionObserver;var i=new Map,f=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},8293:function(e,t,r){e.exports=r(4002)}},function(e){e.O(0,[533,774,888,179],(function(){return t=5925,e(e.s=t);var t}));var t=e.O();_N_E=t}]);