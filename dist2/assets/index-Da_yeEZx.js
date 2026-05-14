var e=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var t=e((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var ee=Array.isArray;function S(){}var C={H:null,A:null,T:null,S:null},te=Object.prototype.hasOwnProperty;function ne(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function re(e,t){return ne(e.type,t,e.props)}function w(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ie(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ae=/\/+/g;function oe(e,t){return typeof e==`object`&&e&&e.key!=null?ie(``+e.key):t.toString(36)}function se(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(S,S):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function ce(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,ce(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+oe(e,0):a,ee(o)?(i=``,c!=null&&(i=c.replace(ae,`$&/`)+`/`),ce(o,r,i,``,function(e){return e})):o!=null&&(w(o)&&(o=re(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ae,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(ee(e))for(var u=0;u<e.length;u++)a=e[u],s=l+oe(a,u),c+=ce(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+oe(a,u++),c+=ce(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return ce(se(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function le(e,t,n){if(e==null)return e;var r=[],i=0;return ce(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ue(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var T=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},E={map:le,forEach:function(e,t,n){le(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return le(e,function(){t++}),t},toArray:function(e){return le(e,function(e){return e})||[]},only:function(e){if(!w(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=E,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return C.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!te.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return ne(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)te.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return ne(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=w,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ue}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=C.T,n={};C.T=n;try{var r=e(),i=C.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(S,T)}catch(e){T(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),C.T=t}},e.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},e.use=function(e){return C.H.use(e)},e.useActionState=function(e,t,n){return C.H.useActionState(e,t,n)},e.useCallback=function(e,t){return C.H.useCallback(e,t)},e.useContext=function(e){return C.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return C.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return C.H.useEffect(e,t)},e.useEffectEvent=function(e){return C.H.useEffectEvent(e)},e.useId=function(){return C.H.useId()},e.useImperativeHandle=function(e,t,n){return C.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return C.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return C.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return C.H.useMemo(e,t)},e.useOptimistic=function(e,t){return C.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return C.H.useReducer(e,t,n)},e.useRef=function(e){return C.H.useRef(e)},e.useState=function(e){return C.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return C.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return C.H.useTransition()},e.version=`19.2.6`})),n=e(((e,n)=>{n.exports=t()})),r=e((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,ee||(ee=!0,w());else{var t=n(l);t!==null&&oe(x,t.startTime-e)}}var ee=!1,S=-1,C=5,te=-1;function ne(){return g?!0:!(e.unstable_now()-te<C)}function re(){if(g=!1,ee){var t=e.unstable_now();te=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(S),S=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&ne());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&oe(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?w():ee=!1}}}var w;if(typeof y==`function`)w=function(){y(re)};else if(typeof MessageChannel<`u`){var ie=new MessageChannel,ae=ie.port2;ie.port1.onmessage=re,w=function(){ae.postMessage(null)}}else w=function(){_(re,0)};function oe(t,n){S=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):C=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(S),S=-1):h=!0,oe(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,ee||(ee=!0,w()))),r},e.unstable_shouldYield=ne,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),i=e(((e,t)=>{t.exports=r()})),a=e((e=>{var t=n();function r(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function i(){}var a={d:{f:i,r:function(){throw Error(r(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for(`react.portal`);function s(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var c=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function l(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(r(299));return s(e,t,null,n)},e.flushSync=function(e){var t=c.T,n=a.p;try{if(c.T=null,a.p=2,e)return e()}finally{c.T=t,a.p=n,a.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,a.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&a.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=l(n,t.crossOrigin),i=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?a.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:i,fetchPriority:o}):n===`script`&&a.d.X(e,{crossOrigin:r,integrity:i,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=l(t.as,t.crossOrigin);a.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??a.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=l(n,t.crossOrigin);a.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=l(t.as,t.crossOrigin);a.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else a.d.m(e)},e.requestFormReset=function(e){a.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return c.H.useFormState(e,t,n)},e.useFormStatus=function(){return c.H.useHostTransitionStatus()},e.version=`19.2.6`})),o=e(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=a()})),s=e((e=>{var t=i(),r=n(),a=o();function s(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function l(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function u(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function d(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function f(e){if(l(e)!==e)throw Error(s(188))}function p(e){var t=e.alternate;if(!t){if(t=l(e),t===null)throw Error(s(188));return t===e?e:null}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return f(i),e;if(a===r)return f(i),t;a=a.sibling}throw Error(s(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,c=i.child;c;){if(c===n){o=!0,n=i,r=a;break}if(c===r){o=!0,r=i,n=a;break}c=c.sibling}if(!o){for(c=a.child;c;){if(c===n){o=!0,n=a,r=i;break}if(c===r){o=!0,r=a,n=i;break}c=c.sibling}if(!o)throw Error(s(189))}}if(n.alternate!==r)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function m(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=m(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),ee=Symbol.for(`react.consumer`),S=Symbol.for(`react.context`),C=Symbol.for(`react.forward_ref`),te=Symbol.for(`react.suspense`),ne=Symbol.for(`react.suspense_list`),re=Symbol.for(`react.memo`),w=Symbol.for(`react.lazy`),ie=Symbol.for(`react.activity`),ae=Symbol.for(`react.memo_cache_sentinel`),oe=Symbol.iterator;function se(e){return typeof e!=`object`||!e?null:(e=oe&&e[oe]||e[`@@iterator`],typeof e==`function`?e:null)}var ce=Symbol.for(`react.client.reference`);function le(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===ce?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case te:return`Suspense`;case ne:return`SuspenseList`;case ie:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case S:return e.displayName||`Context`;case ee:return(e._context.displayName||`Context`)+`.Consumer`;case C:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case re:return t=e.displayName||null,t===null?le(e.type)||`Memo`:t;case w:t=e._payload,e=e._init;try{return le(e(t))}catch{}}return null}var ue=Array.isArray,T=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,E=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,de={pending:!1,data:null,method:null,action:null},fe=[],pe=-1;function me(e){return{current:e}}function D(e){0>pe||(e.current=fe[pe],fe[pe]=null,pe--)}function O(e,t){pe++,fe[pe]=e.current,e.current=t}var he=me(null),ge=me(null),_e=me(null),ve=me(null);function ye(e,t){switch(O(_e,t),O(ge,e),O(he,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}D(he),O(he,e)}function be(){D(he),D(ge),D(_e)}function xe(e){e.memoizedState!==null&&O(ve,e);var t=he.current,n=Hd(t,e.type);t!==n&&(O(ge,e),O(he,n))}function Se(e){ge.current===e&&(D(he),D(ge)),ve.current===e&&(D(ve),Qf._currentValue=de)}var Ce,we;function Te(e){if(Ce===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Ce=t&&t[1]||``,we=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Ce+e+we}var Ee=!1;function De(e,t){if(!e||Ee)return``;Ee=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,`props`,{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,`name`,{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Ee=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Te(n):``}function Oe(e,t){switch(e.tag){case 26:case 27:case 5:return Te(e.type);case 16:return Te(`Lazy`);case 13:return e.child!==t&&t!==null?Te(`Suspense Fallback`):Te(`Suspense`);case 19:return Te(`SuspenseList`);case 0:case 15:return De(e.type,!1);case 11:return De(e.type.render,!1);case 1:return De(e.type,!0);case 31:return Te(`Activity`);default:return``}}function ke(e){try{var t=``,n=null;do t+=Oe(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Ae=Object.prototype.hasOwnProperty,je=t.unstable_scheduleCallback,Me=t.unstable_cancelCallback,Ne=t.unstable_shouldYield,Pe=t.unstable_requestPaint,Fe=t.unstable_now,Ie=t.unstable_getCurrentPriorityLevel,Le=t.unstable_ImmediatePriority,Re=t.unstable_UserBlockingPriority,ze=t.unstable_NormalPriority,Be=t.unstable_LowPriority,Ve=t.unstable_IdlePriority,He=t.log,Ue=t.unstable_setDisableYieldValue,We=null,Ge=null;function Ke(e){if(typeof He==`function`&&Ue(e),Ge&&typeof Ge.setStrictMode==`function`)try{Ge.setStrictMode(We,e)}catch{}}var qe=Math.clz32?Math.clz32:Xe,Je=Math.log,Ye=Math.LN2;function Xe(e){return e>>>=0,e===0?32:31-(Je(e)/Ye|0)|0}var Ze=256,Qe=262144,$e=4194304;function et(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function tt(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=et(n))):i=et(o):i=et(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=et(n))):i=et(o)):i=et(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function nt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function rt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function it(){var e=$e;return $e<<=1,!($e&62914560)&&($e=4194304),e}function at(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ot(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function st(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-qe(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&ct(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function ct(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-qe(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function lt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-qe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function ut(e,t){var n=t&-t;return n=n&42?1:dt(n),(n&(e.suspendedLanes|t))===0?n:0}function dt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ft(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function pt(){var e=E.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function mt(e,t){var n=E.p;try{return E.p=e,t()}finally{E.p=n}}var ht=Math.random().toString(36).slice(2),gt=`__reactFiber$`+ht,_t=`__reactProps$`+ht,vt=`__reactContainer$`+ht,yt=`__reactEvents$`+ht,bt=`__reactListeners$`+ht,xt=`__reactHandles$`+ht,St=`__reactResources$`+ht,Ct=`__reactMarker$`+ht;function wt(e){delete e[gt],delete e[_t],delete e[yt],delete e[bt],delete e[xt]}function Tt(e){var t=e[gt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[vt]||n[gt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[gt])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function Et(e){if(e=e[gt]||e[vt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Dt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function Ot(e){var t=e[St];return t||=e[St]={hoistableStyles:new Map,hoistableScripts:new Map},t}function k(e){e[Ct]=!0}var kt=new Set,At={};function jt(e,t){Mt(e,t),Mt(e+`Capture`,t)}function Mt(e,t){for(At[e]=t,e=0;e<t.length;e++)kt.add(t[e])}var Nt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Pt={},Ft={};function It(e){return Ae.call(Ft,e)?!0:Ae.call(Pt,e)?!1:Nt.test(e)?Ft[e]=!0:(Pt[e]=!0,!1)}function Lt(e,t,n){if(It(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function Rt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function zt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Bt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Vt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Ht(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ut(e){if(!e._valueTracker){var t=Vt(e)?`checked`:`value`;e._valueTracker=Ht(e,t,``+e[t])}}function Wt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Vt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Gt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Kt=/[\n"\\]/g;function qt(e){return e.replace(Kt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Jt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Bt(t)):e.value!==``+Bt(t)&&(e.value=``+Bt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Xt(e,o,Bt(n)):Xt(e,o,Bt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Bt(s):e.removeAttribute(`name`)}function Yt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Ut(e);return}n=n==null?``:``+Bt(n),t=t==null?n:``+Bt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Ut(e)}function Xt(e,t,n){t===`number`&&Gt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Zt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Bt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Qt(e,t,n){if(t!=null&&(t=``+Bt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Bt(n)}function $t(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(s(92));if(ue(r)){if(1<r.length)throw Error(s(93));r=r[0]}n=r}n??=``,t=n}n=Bt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Ut(e)}function en(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var tn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function nn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||tn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function rn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(s(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var i in t)r=t[i],t.hasOwnProperty(i)&&n[i]!==r&&nn(e,i,r)}else for(var a in t)t.hasOwnProperty(a)&&nn(e,a,t[a])}function an(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var on=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),sn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function cn(e){return sn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function ln(){}var un=null;function dn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fn=null,pn=null;function mn(e){var t=Et(e);if(t&&(e=t.stateNode)){var n=e[_t]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Jt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+qt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=r[_t]||null;if(!i)throw Error(s(90));Jt(r,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Wt(r)}break a;case`textarea`:Qt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Zt(e,!!n.multiple,t,!1)}}}var hn=!1;function gn(e,t,n){if(hn)return e(t,n);hn=!0;try{return e(t)}finally{if(hn=!1,(fn!==null||pn!==null)&&(bu(),fn&&(t=fn,e=pn,pn=fn=null,mn(t),e)))for(t=0;t<e.length;t++)mn(e[t])}}function _n(e,t){var n=e.stateNode;if(n===null)return null;var r=n[_t]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(s(231,t,typeof n));return n}var vn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),yn=!1;if(vn)try{var bn={};Object.defineProperty(bn,`passive`,{get:function(){yn=!0}}),window.addEventListener(`test`,bn,bn),window.removeEventListener(`test`,bn,bn)}catch{yn=!1}var xn=null,Sn=null,Cn=null;function wn(){if(Cn)return Cn;var e,t=Sn,n=t.length,r,i=`value`in xn?xn.value:xn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Cn=i.slice(e,1<r?1-r:void 0)}function Tn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function En(){return!0}function Dn(){return!1}function On(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?En:Dn,this.isPropagationStopped=Dn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=En)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=En)},persist:function(){},isPersistent:En}),t}var kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},An=On(kn),jn=h({},kn,{view:0,detail:0}),Mn=On(jn),Nn,Pn,Fn,In=h({},jn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Fn&&(Fn&&e.type===`mousemove`?(Nn=e.screenX-Fn.screenX,Pn=e.screenY-Fn.screenY):Pn=Nn=0,Fn=e),Nn)},movementY:function(e){return`movementY`in e?e.movementY:Pn}}),Ln=On(In),Rn=On(h({},In,{dataTransfer:0})),zn=On(h({},jn,{relatedTarget:0})),Bn=On(h({},kn,{animationName:0,elapsedTime:0,pseudoElement:0})),Vn=On(h({},kn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Hn=On(h({},kn,{data:0})),Un={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Wn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Gn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Kn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Gn[e])?!!t[e]:!1}function qn(){return Kn}var Jn=On(h({},jn,{key:function(e){if(e.key){var t=Un[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Tn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Wn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qn,charCode:function(e){return e.type===`keypress`?Tn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Tn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Yn=On(h({},In,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Xn=On(h({},jn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qn})),Zn=On(h({},kn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Qn=On(h({},In,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),$n=On(h({},kn,{newState:0,oldState:0})),er=[9,13,27,32],tr=vn&&`CompositionEvent`in window,nr=null;vn&&`documentMode`in document&&(nr=document.documentMode);var rr=vn&&`TextEvent`in window&&!nr,ir=vn&&(!tr||nr&&8<nr&&11>=nr),ar=` `,or=!1;function sr(e,t){switch(e){case`keyup`:return er.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function cr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var lr=!1;function ur(e,t){switch(e){case`compositionend`:return cr(t);case`keypress`:return t.which===32?(or=!0,ar):null;case`textInput`:return e=t.data,e===ar&&or?null:e;default:return null}}function dr(e,t){if(lr)return e===`compositionend`||!tr&&sr(e,t)?(e=wn(),Cn=Sn=xn=null,lr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return ir&&t.locale!==`ko`?null:t.data;default:return null}}var fr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!fr[e.type]:t===`textarea`}function mr(e,t,n,r){fn?pn?pn.push(r):pn=[r]:fn=r,t=Ed(t,`onChange`),0<t.length&&(n=new An(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var hr=null,gr=null;function _r(e){yd(e,0)}function vr(e){if(Wt(Dt(e)))return e}function yr(e,t){if(e===`change`)return t}var br=!1;if(vn){var xr;if(vn){var Sr=`oninput`in document;if(!Sr){var Cr=document.createElement(`div`);Cr.setAttribute(`oninput`,`return;`),Sr=typeof Cr.oninput==`function`}xr=Sr}else xr=!1;br=xr&&(!document.documentMode||9<document.documentMode)}function wr(){hr&&(hr.detachEvent(`onpropertychange`,Tr),gr=hr=null)}function Tr(e){if(e.propertyName===`value`&&vr(gr)){var t=[];mr(t,gr,e,dn(e)),gn(_r,t)}}function Er(e,t,n){e===`focusin`?(wr(),hr=t,gr=n,hr.attachEvent(`onpropertychange`,Tr)):e===`focusout`&&wr()}function Dr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return vr(gr)}function Or(e,t){if(e===`click`)return vr(t)}function kr(e,t){if(e===`input`||e===`change`)return vr(t)}function Ar(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var jr=typeof Object.is==`function`?Object.is:Ar;function Mr(e,t){if(jr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ae.call(t,i)||!jr(e[i],t[i]))return!1}return!0}function Nr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Pr(e,t){var n=Nr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Nr(n)}}function Fr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Fr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ir(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Gt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Gt(e.document)}return t}function Lr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Rr=vn&&`documentMode`in document&&11>=document.documentMode,zr=null,Br=null,Vr=null,Hr=!1;function Ur(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hr||zr==null||zr!==Gt(r)||(r=zr,`selectionStart`in r&&Lr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Vr&&Mr(Vr,r)||(Vr=r,r=Ed(Br,`onSelect`),0<r.length&&(t=new An(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=zr)))}function Wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Gr={animationend:Wr(`Animation`,`AnimationEnd`),animationiteration:Wr(`Animation`,`AnimationIteration`),animationstart:Wr(`Animation`,`AnimationStart`),transitionrun:Wr(`Transition`,`TransitionRun`),transitionstart:Wr(`Transition`,`TransitionStart`),transitioncancel:Wr(`Transition`,`TransitionCancel`),transitionend:Wr(`Transition`,`TransitionEnd`)},Kr={},qr={};vn&&(qr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Gr.animationend.animation,delete Gr.animationiteration.animation,delete Gr.animationstart.animation),`TransitionEvent`in window||delete Gr.transitionend.transition);function Jr(e){if(Kr[e])return Kr[e];if(!Gr[e])return e;var t=Gr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in qr)return Kr[e]=t[n];return e}var Yr=Jr(`animationend`),Xr=Jr(`animationiteration`),Zr=Jr(`animationstart`),Qr=Jr(`transitionrun`),$r=Jr(`transitionstart`),ei=Jr(`transitioncancel`),ti=Jr(`transitionend`),ni=new Map,ri=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ri.push(`scrollEnd`);function ii(e,t){ni.set(e,t),jt(t,[e])}var ai=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},oi=[],si=0,ci=0;function li(){for(var e=si,t=ci=si=0;t<e;){var n=oi[t];oi[t++]=null;var r=oi[t];oi[t++]=null;var i=oi[t];oi[t++]=null;var a=oi[t];if(oi[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&pi(n,i,a)}}function ui(e,t,n,r){oi[si++]=e,oi[si++]=t,oi[si++]=n,oi[si++]=r,ci|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function di(e,t,n,r){return ui(e,t,n,r),mi(e)}function fi(e,t){return ui(e,null,null,t),mi(e)}function pi(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-qe(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function mi(e){if(50<du)throw du=0,fu=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var hi={};function gi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _i(e,t,n,r){return new gi(e,t,n,r)}function vi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function yi(e,t){var n=e.alternate;return n===null?(n=_i(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function bi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function xi(e,t,n,r,i,a){var o=0;if(r=e,typeof e==`function`)vi(e)&&(o=1);else if(typeof e==`string`)o=Uf(e,n,he.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ie:return e=_i(31,n,t,i),e.elementType=ie,e.lanes=a,e;case y:return Si(n.children,i,a,t);case b:o=8,i|=24;break;case x:return e=_i(12,n,t,i|2),e.elementType=x,e.lanes=a,e;case te:return e=_i(13,n,t,i),e.elementType=te,e.lanes=a,e;case ne:return e=_i(19,n,t,i),e.elementType=ne,e.lanes=a,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case S:o=10;break a;case ee:o=9;break a;case C:o=11;break a;case re:o=14;break a;case w:o=16,r=null;break a}o=29,n=Error(s(130,e===null?`null`:typeof e,``)),r=null}return t=_i(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function Si(e,t,n,r){return e=_i(7,e,r,t),e.lanes=n,e}function Ci(e,t,n){return e=_i(6,e,null,t),e.lanes=n,e}function wi(e){var t=_i(18,null,null,0);return t.stateNode=e,t}function Ti(e,t,n){return t=_i(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ei=new WeakMap;function Di(e,t){if(typeof e==`object`&&e){var n=Ei.get(e);return n===void 0?(t={value:e,source:t,stack:ke(t)},Ei.set(e,t),t):n}return{value:e,source:t,stack:ke(t)}}var Oi=[],ki=0,Ai=null,ji=0,Mi=[],Ni=0,Pi=null,Fi=1,Ii=``;function Li(e,t){Oi[ki++]=ji,Oi[ki++]=Ai,Ai=e,ji=t}function Ri(e,t,n){Mi[Ni++]=Fi,Mi[Ni++]=Ii,Mi[Ni++]=Pi,Pi=e;var r=Fi;e=Ii;var i=32-qe(r)-1;r&=~(1<<i),n+=1;var a=32-qe(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Fi=1<<32-qe(t)+i|n<<i|r,Ii=a+e}else Fi=1<<a|n<<i|r,Ii=e}function zi(e){e.return!==null&&(Li(e,1),Ri(e,1,0))}function Bi(e){for(;e===Ai;)Ai=Oi[--ki],Oi[ki]=null,ji=Oi[--ki],Oi[ki]=null;for(;e===Pi;)Pi=Mi[--Ni],Mi[Ni]=null,Ii=Mi[--Ni],Mi[Ni]=null,Fi=Mi[--Ni],Mi[Ni]=null}function Vi(e,t){Mi[Ni++]=Fi,Mi[Ni++]=Ii,Mi[Ni++]=Pi,Fi=t.id,Ii=t.overflow,Pi=e}var Hi=null,A=null,j=!1,Ui=null,Wi=!1,Gi=Error(s(519));function Ki(e){throw Qi(Di(Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Gi}function qi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[gt]=e,t[_t]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Yt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),$t(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=ln),t=!0):t=!1,t||Ki(e,!0)}function Ji(e){for(Hi=e.return;Hi;)switch(Hi.tag){case 5:case 31:case 13:Wi=!1;return;case 27:case 3:Wi=!0;return;default:Hi=Hi.return}}function Yi(e){if(e!==Hi)return!1;if(!j)return Ji(e),j=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&A&&Ki(e),Ji(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(317));A=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(317));A=uf(e)}else t===27?(t=A,Zd(e.type)?(e=lf,lf=null,A=e):A=t):A=Hi?cf(e.stateNode.nextSibling):null;return!0}function Xi(){A=Hi=null,j=!1}function Zi(){var e=Ui;return e!==null&&(Ql===null?Ql=e:Ql.push.apply(Ql,e),Ui=null),e}function Qi(e){Ui===null?Ui=[e]:Ui.push(e)}var $i=me(null),ea=null,ta=null;function na(e,t,n){O($i,t._currentValue),t._currentValue=n}function ra(e){e._currentValue=$i.current,D($i)}function ia(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function aa(e,t,n,r){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){var o=i.child;a=a.firstContext;a:for(;a!==null;){var c=a;a=i;for(var l=0;l<t.length;l++)if(c.context===t[l]){a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),ia(a.return,n,e),r||(o=null);break a}a=c.next}}else if(i.tag===18){if(o=i.return,o===null)throw Error(s(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ia(o,n,e),o=null}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}}function oa(e,t,n,r){e=null;for(var i=t,a=!1;i!==null;){if(!a){if(i.flags&524288)a=!0;else if(i.flags&262144)break}if(i.tag===10){var o=i.alternate;if(o===null)throw Error(s(387));if(o=o.memoizedProps,o!==null){var c=i.type;jr(i.pendingProps.value,o.value)||(e===null?e=[c]:e.push(c))}}else if(i===ve.current){if(o=i.alternate,o===null)throw Error(s(387));o.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}i=i.return}e!==null&&aa(t,e,n,r),t.flags|=262144}function sa(e){for(e=e.firstContext;e!==null;){if(!jr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ca(e){ea=e,ta=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function la(e){return da(ea,e)}function ua(e,t){return ea===null&&ca(e),da(e,t)}function da(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},ta===null){if(e===null)throw Error(s(308));ta=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ta=ta.next=t;return n}var fa=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},pa=t.unstable_scheduleCallback,ma=t.unstable_NormalPriority,M={$$typeof:S,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ha(){return{controller:new fa,data:new Map,refCount:0}}function ga(e){e.refCount--,e.refCount===0&&pa(ma,function(){e.controller.abort()})}var _a=null,va=0,ya=0,ba=null;function xa(e,t){if(_a===null){var n=_a=[];va=0,ya=dd(),ba={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return va++,t.then(Sa,Sa),t}function Sa(){if(--va===0&&_a!==null){ba!==null&&(ba.status=`fulfilled`);var e=_a;_a=null,ya=0,ba=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Ca(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var wa=T.S;T.S=function(e,t){tu=Fe(),typeof t==`object`&&t&&typeof t.then==`function`&&xa(e,t),wa!==null&&wa(e,t)};var Ta=me(null);function Ea(){var e=Ta.current;return e===null?G.pooledCache:e}function Da(e,t){t===null?O(Ta,Ta.current):O(Ta,t.pool)}function Oa(){var e=Ea();return e===null?null:{parent:M._currentValue,pool:e}}var ka=Error(s(460)),Aa=Error(s(474)),ja=Error(s(542)),Ma={then:function(){}};function Na(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Pa(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(ln,ln),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ra(e),e;default:if(typeof t.status==`string`)t.then(ln,ln);else{if(e=G,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ra(e),e}throw Ia=t,ka}}function Fa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Ia=e,ka):e}}var Ia=null;function La(){if(Ia===null)throw Error(s(459));var e=Ia;return Ia=null,e}function Ra(e){if(e===ka||e===ja)throw Error(s(483))}var za=null,Ba=0;function Va(e){var t=Ba;return Ba+=1,za===null&&(za=[]),Pa(za,e,t)}function Ha(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ua(e,t){throw t.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Wa(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function i(e,t){return e=yi(e,t),e.index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function o(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=Ci(n,e.mode,r),t.return=e,t):(t=i(t,n),t.return=e,t)}function l(e,t,n,r){var a=n.type;return a===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===a||typeof a==`object`&&a&&a.$$typeof===w&&Fa(a)===t.type)?(t=i(t,n.props),Ha(t,n),t.return=e,t):(t=xi(n.type,n.key,n.props,null,e.mode,r),Ha(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Ti(n,e.mode,r),t.return=e,t):(t=i(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,a){return t===null||t.tag!==7?(t=Si(n,e.mode,r,a),t.return=e,t):(t=i(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=Ci(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=xi(t.type,t.key,t.props,null,e.mode,n),Ha(n,t),n.return=e,n;case v:return t=Ti(t,e.mode,n),t.return=e,t;case w:return t=Fa(t),f(e,t,n)}if(ue(t)||se(t))return t=Si(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Va(t),n);if(t.$$typeof===S)return f(e,ua(e,t),n);Ua(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case w:return n=Fa(n),p(e,t,n,r)}if(ue(n)||se(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Va(n),r);if(n.$$typeof===S)return p(e,t,ua(e,n),r);Ua(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case w:return r=Fa(r),m(e,t,n,r,i)}if(ue(r)||se(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Va(r),i);if(r.$$typeof===S)return m(e,t,n,ua(t,r),i);Ua(t,r)}return null}function h(i,o,s,c){for(var l=null,u=null,d=o,h=o=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),o=a(_,o,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),j&&Li(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(o=a(d,o,h),u===null?l=d:u.sibling=d,u=d);return j&&Li(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),o=a(g,o,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),j&&Li(i,h),l}function g(i,o,c,l){if(c==null)throw Error(s(151));for(var u=null,d=null,h=o,g=o=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(i,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(i,h),o=a(y,o,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(i,h),j&&Li(i,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(i,v.value,l),v!==null&&(o=a(v,o,g),d===null?u=v:d.sibling=v,d=v);return j&&Li(i,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,i,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),o=a(v,o,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(i,e)}),j&&Li(i,g),u}function b(e,r,a,c){if(typeof a==`object`&&a&&a.type===y&&a.key===null&&(a=a.props.children),typeof a==`object`&&a){switch(a.$$typeof){case _:a:{for(var l=a.key;r!==null;){if(r.key===l){if(l=a.type,l===y){if(r.tag===7){n(e,r.sibling),c=i(r,a.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===w&&Fa(l)===r.type){n(e,r.sibling),c=i(r,a.props),Ha(c,a),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}a.type===y?(c=Si(a.props.children,e.mode,c,a.key),c.return=e,e=c):(c=xi(a.type,a.key,a.props,null,e.mode,c),Ha(c,a),c.return=e,e=c)}return o(e);case v:a:{for(l=a.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===a.containerInfo&&r.stateNode.implementation===a.implementation){n(e,r.sibling),c=i(r,a.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=Ti(a,e.mode,c),c.return=e,e=c}return o(e);case w:return a=Fa(a),b(e,r,a,c)}if(ue(a))return h(e,r,a,c);if(se(a)){if(l=se(a),typeof l!=`function`)throw Error(s(150));return a=l.call(a),g(e,r,a,c)}if(typeof a.then==`function`)return b(e,r,Va(a),c);if(a.$$typeof===S)return b(e,r,ua(e,a),c);Ua(e,a)}return typeof a==`string`&&a!==``||typeof a==`number`||typeof a==`bigint`?(a=``+a,r!==null&&r.tag===6?(n(e,r.sibling),c=i(r,a),c.return=e,e=c):(n(e,r),c=Ci(a,e.mode,c),c.return=e,e=c),o(e)):n(e,r)}return function(e,t,n,r){try{Ba=0;var i=b(e,t,n,r);return za=null,i}catch(t){if(t===ka||t===ja)throw t;var a=_i(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ga=Wa(!0),Ka=Wa(!1),qa=!1;function Ja(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ya(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Xa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Za(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=mi(e),pi(e,null,n),t}return ui(e,r,t,n),mi(e)}function Qa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lt(e,n)}}function $a(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var eo=!1;function to(){if(eo){var e=ba;if(e!==null)throw e}}function no(e,t,n,r){eo=!1;var i=e.updateQueue;qa=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(q&f)===f:(r&f)===f){f!==0&&f===ya&&(eo=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:qa=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Kl|=o,e.lanes=o,e.memoizedState=d}}function ro(e,t){if(typeof e!=`function`)throw Error(s(191,e));e.call(t)}function io(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)ro(n[e],t)}var ao=me(null),oo=me(0);function so(e,t){e=Gl,O(oo,e),O(ao,t),Gl=e|t.baseLanes}function co(){O(oo,Gl),O(ao,ao.current)}function lo(){Gl=oo.current,D(ao),D(oo)}var uo=me(null),fo=null;function po(e){var t=e.alternate;O(N,N.current&1),O(uo,e),fo===null&&(t===null||ao.current!==null||t.memoizedState!==null)&&(fo=e)}function mo(e){O(N,N.current),O(uo,e),fo===null&&(fo=e)}function ho(e){e.tag===22?(O(N,N.current),O(uo,e),fo===null&&(fo=e)):go(e)}function go(){O(N,N.current),O(uo,uo.current)}function _o(e){D(uo),fo===e&&(fo=null),D(N)}var N=me(0);function vo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var yo=0,P=null,F=null,I=null,bo=!1,xo=!1,So=!1,Co=0,wo=0,To=null,Eo=0;function L(){throw Error(s(321))}function Do(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!jr(e[n],t[n]))return!1;return!0}function Oo(e,t,n,r,i,a){return yo=a,P=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,T.H=e===null||e.memoizedState===null?Ws:Gs,So=!1,a=n(r,i),So=!1,xo&&(a=Ao(t,n,r,i)),ko(e),a}function ko(e){T.H=Us;var t=F!==null&&F.next!==null;if(yo=0,I=F=P=null,bo=!1,wo=0,To=null,t)throw Error(s(300));e===null||z||(e=e.dependencies,e!==null&&sa(e)&&(z=!0))}function Ao(e,t,n,r){P=e;var i=0;do{if(xo&&(To=null),wo=0,xo=!1,25<=i)throw Error(s(301));if(i+=1,I=F=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}T.H=Ks,a=t(n,r)}while(xo);return a}function jo(){var e=T.H,t=e.useState()[0];return t=typeof t.then==`function`?Lo(t):t,e=e.useState()[0],(F===null?null:F.memoizedState)!==e&&(P.flags|=1024),t}function Mo(){var e=Co!==0;return Co=0,e}function No(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Po(e){if(bo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}bo=!1}yo=0,I=F=P=null,xo=!1,wo=Co=0,To=null}function Fo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return I===null?P.memoizedState=I=e:I=I.next=e,I}function R(){if(F===null){var e=P.alternate;e=e===null?null:e.memoizedState}else e=F.next;var t=I===null?P.memoizedState:I.next;if(t!==null)I=t,F=e;else{if(e===null)throw P.alternate===null?Error(s(467)):Error(s(310));F=e,e={memoizedState:F.memoizedState,baseState:F.baseState,baseQueue:F.baseQueue,queue:F.queue,next:null},I===null?P.memoizedState=I=e:I=I.next=e}return I}function Io(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Lo(e){var t=wo;return wo+=1,To===null&&(To=[]),e=Pa(To,e,t),t=P,(I===null?t.memoizedState:I.next)===null&&(t=t.alternate,T.H=t===null||t.memoizedState===null?Ws:Gs),e}function Ro(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Lo(e);if(e.$$typeof===S)return la(e)}throw Error(s(438,String(e)))}function zo(e){var t=null,n=P.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=P.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Io(),P.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ae;return t.index++,n}function Bo(e,t){return typeof t==`function`?t(e):t}function Vo(e){return Ho(R(),F,e)}function Ho(e,t,n){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=n;var i=e.baseQueue,a=r.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}t.baseQueue=i=a,r.pending=null}if(a=e.baseState,i===null)e.memoizedState=a;else{t=i.next;var c=o=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(yo&f)===f:(q&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ya&&(d=!0);else if((yo&p)===p){u=u.next,p===ya&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,o=a):l=l.next=f,P.lanes|=p,Kl|=p;f=u.action,So&&n(a,f),a=u.hasEagerState?u.eagerState:n(a,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,o=a):l=l.next=p,P.lanes|=f,Kl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?o=a:l.next=c,!jr(a,e.memoizedState)&&(z=!0,d&&(n=ba,n!==null)))throw n;e.memoizedState=a,e.baseState=o,e.baseQueue=l,r.lastRenderedState=a}return i===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Uo(e){var t=R(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);jr(a,t.memoizedState)||(z=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Wo(e,t,n){var r=P,i=R(),a=j;if(a){if(n===void 0)throw Error(s(407));n=n()}else n=t();var o=!jr((F||i).memoizedState,n);if(o&&(i.memoizedState=n,z=!0),i=i.queue,hs(qo.bind(null,r,i,e),[e]),i.getSnapshot!==t||o||I!==null&&I.memoizedState.tag&1){if(r.flags|=2048,us(9,{destroy:void 0},Ko.bind(null,r,i,n,t),null),G===null)throw Error(s(349));a||yo&127||Go(r,t,n)}return n}function Go(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=P.updateQueue,t===null?(t=Io(),P.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ko(e,t,n,r){t.value=n,t.getSnapshot=r,Jo(t)&&Yo(e)}function qo(e,t,n){return n(function(){Jo(t)&&Yo(e)})}function Jo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!jr(e,n)}catch{return!0}}function Yo(e){var t=fi(e,2);t!==null&&hu(t,e,2)}function Xo(e){var t=Fo();if(typeof e==`function`){var n=e;if(e=n(),So){Ke(!0);try{n()}finally{Ke(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:e},t}function Zo(e,t,n,r){return e.baseState=n,Ho(e,F,typeof r==`function`?r:Bo)}function Qo(e,t,n,r,i){if(Bs(e))throw Error(s(485));if(e=t.action,e!==null){var a={payload:i,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){a.listeners.push(e)}};T.T===null?a.isTransition=!1:n(!0),r(a),n=t.pending,n===null?(a.next=t.pending=a,$o(t,a)):(a.next=n.next,t.pending=n.next=a)}}function $o(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=T.T,o={};T.T=o;try{var s=n(i,r),c=T.S;c!==null&&c(o,s),es(e,t,s)}catch(n){ns(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),T.T=a}}else try{a=n(i,r),es(e,t,a)}catch(n){ns(e,t,n)}}function es(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){ts(e,t,n)},function(n){return ns(e,t,n)}):ts(e,t,n)}function ts(e,t,n){t.status=`fulfilled`,t.value=n,rs(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,$o(e,n)))}function ns(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,rs(t),t=t.next;while(t!==r)}e.action=null}function rs(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function is(e,t){return t}function as(e,t){if(j){var n=G.formState;if(n!==null){a:{var r=P;if(j){if(A){b:{for(var i=A,a=Wi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){A=cf(i.nextSibling),r=i.data===`F!`;break a}}Ki(r)}r=!1}r&&(t=n[0])}}return n=Fo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:is,lastRenderedState:t},n.queue=r,n=Ls.bind(null,P,r),r.dispatch=n,r=Xo(!1),a=zs.bind(null,P,!1,r.queue),r=Fo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Qo.bind(null,P,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function os(e){return ss(R(),F,e)}function ss(e,t,n){if(t=Ho(e,t,is)[0],e=Vo(Bo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Lo(t)}catch(e){throw e===ka?ja:e}else r=t;t=R();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(P.flags|=2048,us(9,{destroy:void 0},cs.bind(null,i,n),null)),[r,a,e]}function cs(e,t){e.action=t}function ls(e){var t=R(),n=F;if(n!==null)return ss(t,n,e);R(),t=t.memoizedState,n=R();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function us(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=P.updateQueue,t===null&&(t=Io(),P.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ds(){return R().memoizedState}function fs(e,t,n,r){var i=Fo();P.flags|=e,i.memoizedState=us(1|t,{destroy:void 0},n,r===void 0?null:r)}function ps(e,t,n,r){var i=R();r=r===void 0?null:r;var a=i.memoizedState.inst;F!==null&&r!==null&&Do(r,F.memoizedState.deps)?i.memoizedState=us(t,a,n,r):(P.flags|=e,i.memoizedState=us(1|t,a,n,r))}function ms(e,t){fs(8390656,8,e,t)}function hs(e,t){ps(2048,8,e,t)}function gs(e){P.flags|=4;var t=P.updateQueue;if(t===null)t=Io(),P.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function _s(e){var t=R().memoizedState;return gs({ref:t,nextImpl:e}),function(){if(W&2)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function vs(e,t){return ps(4,2,e,t)}function ys(e,t){return ps(4,4,e,t)}function bs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function xs(e,t,n){n=n==null?null:n.concat([e]),ps(4,4,bs.bind(null,t,e),n)}function Ss(){}function Cs(e,t){var n=R();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Do(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ws(e,t){var n=R();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Do(t,r[1]))return r[0];if(r=e(),So){Ke(!0);try{e()}finally{Ke(!1)}}return n.memoizedState=[r,t],r}function Ts(e,t,n){return n===void 0||yo&1073741824&&!(q&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),P.lanes|=e,Kl|=e,n)}function Es(e,t,n,r){return jr(n,t)?n:ao.current===null?!(yo&42)||yo&1073741824&&!(q&261930)?(z=!0,e.memoizedState=n):(e=mu(),P.lanes|=e,Kl|=e,t):(e=Ts(e,n,r),jr(e,t)||(z=!0),e)}function Ds(e,t,n,r,i){var a=E.p;E.p=a!==0&&8>a?a:8;var o=T.T,s={};T.T=s,zs(e,!1,t,n);try{var c=i(),l=T.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Rs(e,t,Ca(c,r),pu(e)):Rs(e,t,r,pu(e))}catch(n){Rs(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{E.p=a,o!==null&&s.types!==null&&(o.types=s.types),T.T=o}}function Os(){}function ks(e,t,n,r){if(e.tag!==5)throw Error(s(476));var i=As(e).queue;Ds(e,i,t,de,n===null?Os:function(){return js(e),n(r)})}function As(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:de,baseState:de,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:de},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function js(e){var t=As(e);t.next===null&&(t=e.alternate.memoizedState),Rs(e,t.next.queue,{},pu())}function Ms(){return la(Qf)}function Ns(){return R().memoizedState}function Ps(){return R().memoizedState}function Fs(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Xa(n);var r=Za(t,e,n);r!==null&&(hu(r,t,n),Qa(r,t,n)),t={cache:ha()},e.payload=t;return}t=t.return}}function Is(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Bs(e)?Vs(t,n):(n=di(e,t,n,r),n!==null&&(hu(n,e,r),Hs(n,t,r)))}function Ls(e,t,n){Rs(e,t,n,pu())}function Rs(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Bs(e))Vs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,jr(s,o))return ui(e,t,i,0),G===null&&li(),!1}catch{}if(n=di(e,t,i,r),n!==null)return hu(n,e,r),Hs(n,t,r),!0}return!1}function zs(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Bs(e)){if(t)throw Error(s(479))}else t=di(e,n,r,2),t!==null&&hu(t,e,2)}function Bs(e){var t=e.alternate;return e===P||t!==null&&t===P}function Vs(e,t){xo=bo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Hs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lt(e,n)}}var Us={readContext:la,use:Ro,useCallback:L,useContext:L,useEffect:L,useImperativeHandle:L,useLayoutEffect:L,useInsertionEffect:L,useMemo:L,useReducer:L,useRef:L,useState:L,useDebugValue:L,useDeferredValue:L,useTransition:L,useSyncExternalStore:L,useId:L,useHostTransitionStatus:L,useFormState:L,useActionState:L,useOptimistic:L,useMemoCache:L,useCacheRefresh:L};Us.useEffectEvent=L;var Ws={readContext:la,use:Ro,useCallback:function(e,t){return Fo().memoizedState=[e,t===void 0?null:t],e},useContext:la,useEffect:ms,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),fs(4194308,4,bs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return fs(4194308,4,e,t)},useInsertionEffect:function(e,t){fs(4,2,e,t)},useMemo:function(e,t){var n=Fo();t=t===void 0?null:t;var r=e();if(So){Ke(!0);try{e()}finally{Ke(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Fo();if(n!==void 0){var i=n(t);if(So){Ke(!0);try{n(t)}finally{Ke(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Is.bind(null,P,e),[r.memoizedState,e]},useRef:function(e){var t=Fo();return e={current:e},t.memoizedState=e},useState:function(e){e=Xo(e);var t=e.queue,n=Ls.bind(null,P,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Ss,useDeferredValue:function(e,t){return Ts(Fo(),e,t)},useTransition:function(){var e=Xo(!1);return e=Ds.bind(null,P,e.queue,!0,!1),Fo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=P,i=Fo();if(j){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),G===null)throw Error(s(349));q&127||Go(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,ms(qo.bind(null,r,a,e),[e]),r.flags|=2048,us(9,{destroy:void 0},Ko.bind(null,r,a,n,t),null),n},useId:function(){var e=Fo(),t=G.identifierPrefix;if(j){var n=Ii,r=Fi;n=(r&~(1<<32-qe(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=Co++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=Eo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Ms,useFormState:as,useActionState:as,useOptimistic:function(e){var t=Fo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=zs.bind(null,P,!0,n),n.dispatch=t,[e,t]},useMemoCache:zo,useCacheRefresh:function(){return Fo().memoizedState=Fs.bind(null,P)},useEffectEvent:function(e){var t=Fo(),n={impl:e};return t.memoizedState=n,function(){if(W&2)throw Error(s(440));return n.impl.apply(void 0,arguments)}}},Gs={readContext:la,use:Ro,useCallback:Cs,useContext:la,useEffect:hs,useImperativeHandle:xs,useInsertionEffect:vs,useLayoutEffect:ys,useMemo:ws,useReducer:Vo,useRef:ds,useState:function(){return Vo(Bo)},useDebugValue:Ss,useDeferredValue:function(e,t){return Es(R(),F.memoizedState,e,t)},useTransition:function(){var e=Vo(Bo)[0],t=R().memoizedState;return[typeof e==`boolean`?e:Lo(e),t]},useSyncExternalStore:Wo,useId:Ns,useHostTransitionStatus:Ms,useFormState:os,useActionState:os,useOptimistic:function(e,t){return Zo(R(),F,e,t)},useMemoCache:zo,useCacheRefresh:Ps};Gs.useEffectEvent=_s;var Ks={readContext:la,use:Ro,useCallback:Cs,useContext:la,useEffect:hs,useImperativeHandle:xs,useInsertionEffect:vs,useLayoutEffect:ys,useMemo:ws,useReducer:Uo,useRef:ds,useState:function(){return Uo(Bo)},useDebugValue:Ss,useDeferredValue:function(e,t){var n=R();return F===null?Ts(n,e,t):Es(n,F.memoizedState,e,t)},useTransition:function(){var e=Uo(Bo)[0],t=R().memoizedState;return[typeof e==`boolean`?e:Lo(e),t]},useSyncExternalStore:Wo,useId:Ns,useHostTransitionStatus:Ms,useFormState:ls,useActionState:ls,useOptimistic:function(e,t){var n=R();return F===null?(n.baseState=e,[e,n.queue.dispatch]):Zo(n,F,e,t)},useMemoCache:zo,useCacheRefresh:Ps};Ks.useEffectEvent=_s;function qs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Js={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Xa(r);i.payload=t,n!=null&&(i.callback=n),t=Za(e,i,r),t!==null&&(hu(t,e,r),Qa(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Xa(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Za(e,i,r),t!==null&&(hu(t,e,r),Qa(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Xa(n);r.tag=2,t!=null&&(r.callback=t),t=Za(e,r,n),t!==null&&(hu(t,e,n),Qa(t,e,n))}};function Ys(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Mr(n,r)||!Mr(i,a):!0}function Xs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Js.enqueueReplaceState(t,t.state,null)}function Zs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Qs(e){ai(e)}function $s(e){console.error(e)}function ec(e){ai(e)}function tc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function nc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function rc(e,t,n){return n=Xa(n),n.tag=3,n.payload={element:null},n.callback=function(){tc(e,t)},n}function ic(e){return e=Xa(e),e.tag=3,e}function ac(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){nc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){nc(t,n,r),typeof i!=`function`&&(iu===null?iu=new Set([this]):iu.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function oc(e,t,n,r,i){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&oa(t,n,i,!0),n=uo.current,n!==null){switch(n.tag){case 31:case 13:return fo===null?Du():n.alternate===null&&Y===0&&(Y=3),n.flags&=-257,n.flags|=65536,n.lanes=i,r===Ma?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,i)),!1;case 22:return n.flags|=65536,r===Ma?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,i)),!1}throw Error(s(435,n.tag))}return Gu(e,r,i),Du(),!1}if(j)return t=uo.current,t===null?(r!==Gi&&(t=Error(s(423),{cause:r}),Qi(Di(t,n))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,r=Di(r,n),i=rc(e.stateNode,r,i),$a(e,i),Y!==4&&(Y=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=i,r!==Gi&&(e=Error(s(422),{cause:r}),Qi(Di(e,n)))),!1;var a=Error(s(520),{cause:r});if(a=Di(a,n),Zl===null?Zl=[a]:Zl.push(a),Y!==4&&(Y=2),t===null)return!0;r=Di(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=rc(n.stateNode,r,e),$a(n,e),!1;case 1:if(t=n.type,a=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||a!==null&&typeof a.componentDidCatch==`function`&&(iu===null||!iu.has(a))))return n.flags|=65536,i&=-i,n.lanes|=i,i=ic(i),ac(i,e,n,r),$a(n,i),!1}n=n.return}while(n!==null);return!1}var sc=Error(s(461)),z=!1;function cc(e,t,n,r){t.child=e===null?Ka(t,null,n,r):Ga(t,e.child,n,r)}function lc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return ca(t),r=Oo(e,t,n,o,a,i),s=Mo(),e!==null&&!z?(No(e,t,i),Nc(e,t,i)):(j&&s&&zi(t),t.flags|=1,cc(e,t,r,i),t.child)}function uc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!vi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,dc(e,t,a,r,i)):(e=xi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Pc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Mr:n,n(o,r)&&e.ref===t.ref)return Nc(e,t,i)}return t.flags|=1,e=yi(a,r),e.ref=t.ref,e.return=t,t.child=e}function dc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Mr(a,r)&&e.ref===t.ref)if(z=!1,t.pendingProps=r=a,Pc(e,i))e.flags&131072&&(z=!0);else return t.lanes=e.lanes,Nc(e,t,i)}return yc(e,t,n,r,i)}function fc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return mc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Da(t,a===null?null:a.cachePool),a===null?co():so(t,a),ho(t);else return r=t.lanes=536870912,mc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Da(t,null),co(),go(t)):(Da(t,a.cachePool),so(t,a),go(t),t.memoizedState=null);return cc(e,t,i,n),t.child}function pc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function mc(e,t,n,r,i){var a=Ea();return a=a===null?null:{parent:M._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Da(t,null),co(),ho(t),e!==null&&oa(e,t,r,!0),t.childLanes=i,null}function hc(e,t){return t=Oc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function gc(e,t,n){return Ga(t,e.child,null,n),e=hc(t,t.pendingProps),e.flags|=2,_o(t),t.memoizedState=null,e}function _c(e,t,n){var r=t.pendingProps,i=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(j){if(r.mode===`hidden`)return e=hc(t,r),t.lanes=536870912,pc(null,e);if(mo(t),(e=A)?(e=rf(e,Wi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Pi===null?null:{id:Fi,overflow:Ii},retryLane:536870912,hydrationErrors:null},n=wi(e),n.return=t,t.child=n,Hi=t,A=null)):e=null,e===null)throw Ki(t);return t.lanes=536870912,null}return hc(t,r)}var a=e.memoizedState;if(a!==null){var o=a.dehydrated;if(mo(t),i)if(t.flags&256)t.flags&=-257,t=gc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if(z||oa(e,t,n,!1),i=(n&e.childLanes)!==0,z||i){if(r=G,r!==null&&(o=ut(r,n),o!==0&&o!==a.retryLane))throw a.retryLane=o,fi(e,o),hu(r,e,o),sc;Du(),t=gc(e,t,n)}else e=a.treeContext,A=cf(o.nextSibling),Hi=t,j=!0,Ui=null,Wi=!1,e!==null&&Vi(t,e),t=hc(t,r),t.flags|=4096;return t}return e=yi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function vc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(s(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function yc(e,t,n,r,i){return ca(t),n=Oo(e,t,n,r,void 0,i),r=Mo(),e!==null&&!z?(No(e,t,i),Nc(e,t,i)):(j&&r&&zi(t),t.flags|=1,cc(e,t,n,i),t.child)}function bc(e,t,n,r,i,a){return ca(t),t.updateQueue=null,n=Ao(t,r,n,i),ko(e),r=Mo(),e!==null&&!z?(No(e,t,a),Nc(e,t,a)):(j&&r&&zi(t),t.flags|=1,cc(e,t,n,a),t.child)}function xc(e,t,n,r,i){if(ca(t),t.stateNode===null){var a=hi,o=n.contextType;typeof o==`object`&&o&&(a=la(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Js,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ja(t),o=n.contextType,a.context=typeof o==`object`&&o?la(o):hi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(qs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Js.enqueueReplaceState(a,a.state,null),no(t,r,a,i),to(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Zs(n,s);a.props=c;var l=a.context,u=n.contextType;o=hi,typeof u==`object`&&u&&(o=la(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Xs(t,a,r,o),qa=!1;var f=t.memoizedState;a.state=f,no(t,r,a,i),to(),l=t.memoizedState,s||f!==l||qa?(typeof d==`function`&&(qs(t,n,d,r),l=t.memoizedState),(c=qa||Ys(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ya(e,t),o=t.memoizedProps,u=Zs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=hi,typeof l==`object`&&l&&(c=la(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Xs(t,a,r,c),qa=!1,f=t.memoizedState,a.state=f,no(t,r,a,i),to();var p=t.memoizedState;o!==d||f!==p||qa||e!==null&&e.dependencies!==null&&sa(e.dependencies)?(typeof s==`function`&&(qs(t,n,s,r),p=t.memoizedState),(u=qa||Ys(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&sa(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,vc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ga(t,e.child,null,i),t.child=Ga(t,null,n,i)):cc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Nc(e,t,i),e}function Sc(e,t,n,r){return Xi(),t.flags|=256,cc(e,t,n,r),t.child}var Cc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function wc(e){return{baseLanes:e,cachePool:Oa()}}function Tc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Yl),e}function Ec(e,t,n){var r=t.pendingProps,i=!1,a=(t.flags&128)!=0,o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:(N.current&2)!=0),o&&(i=!0,t.flags&=-129),o=(t.flags&32)!=0,t.flags&=-33,e===null){if(j){if(i?po(t):go(t),(e=A)?(e=rf(e,Wi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Pi===null?null:{id:Fi,overflow:Ii},retryLane:536870912,hydrationErrors:null},n=wi(e),n.return=t,t.child=n,Hi=t,A=null)):e=null,e===null)throw Ki(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,i?(go(t),i=t.mode,c=Oc({mode:`hidden`,children:c},i),r=Si(r,i,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=wc(n),r.childLanes=Tc(e,o,n),t.memoizedState=Cc,pc(null,r)):(po(t),Dc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(a)t.flags&256?(po(t),t.flags&=-257,t=kc(e,t,n)):t.memoizedState===null?(go(t),c=r.fallback,i=t.mode,r=Oc({mode:`visible`,children:r.children},i),c=Si(c,i,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ga(t,e.child,null,n),r=t.child,r.memoizedState=wc(n),r.childLanes=Tc(e,o,n),t.memoizedState=Cc,t=pc(null,r)):(go(t),t.child=e.child,t.flags|=128,t=null);else if(po(t),of(c)){if(o=c.nextSibling&&c.nextSibling.dataset,o)var u=o.dgst;o=u,r=Error(s(419)),r.stack=``,r.digest=o,Qi({value:r,source:null,stack:null}),t=kc(e,t,n)}else if(z||oa(e,t,n,!1),o=(n&e.childLanes)!==0,z||o){if(o=G,o!==null&&(r=ut(o,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,fi(e,r),hu(o,e,r),sc;af(c)||Du(),t=kc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,A=cf(c.nextSibling),Hi=t,j=!0,Ui=null,Wi=!1,e!==null&&Vi(t,e),t=Dc(t,r.children),t.flags|=4096);return t}return i?(go(t),c=r.fallback,i=t.mode,l=e.child,u=l.sibling,r=yi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=Si(c,i,n,null),c.flags|=2):c=yi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,pc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=wc(n):(i=c.cachePool,i===null?i=Oa():(l=M._currentValue,i=i.parent===l?i:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:i}),r.memoizedState=c,r.childLanes=Tc(e,o,n),t.memoizedState=Cc,pc(e.child,r)):(po(t),n=e.child,e=n.sibling,n=yi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function Dc(e,t){return t=Oc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Oc(e,t){return e=_i(22,e,null,t),e.lanes=0,e}function kc(e,t,n){return Ga(t,e.child,null,n),e=Dc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ac(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ia(e.return,t,n)}function jc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Mc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=N.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,O(N,o),cc(e,t,r,n),r=j?ji:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ac(e,n,t);else if(e.tag===19)Ac(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&vo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),jc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&vo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}jc(t,!0,n,null,a,r);break;case`together`:jc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Nc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Kl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(oa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=yi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=yi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Pc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&sa(e))):!0}function Fc(e,t,n){switch(t.tag){case 3:ye(t,t.stateNode.containerInfo),na(t,M,e.memoizedState.cache),Xi();break;case 27:case 5:xe(t);break;case 4:ye(t,t.stateNode.containerInfo);break;case 10:na(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,mo(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(po(t),e=Nc(e,t,n),e===null?null:e.sibling):Ec(e,t,n):(po(t),t.flags|=128,null);po(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(oa(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Mc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),O(N,N.current),r)break;return null;case 22:return t.lanes=0,fc(e,t,n,t.pendingProps);case 24:na(t,M,e.memoizedState.cache)}return Nc(e,t,n)}function Ic(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)z=!0;else{if(!Pc(e,n)&&!(t.flags&128))return z=!1,Fc(e,t,n);z=!!(e.flags&131072)}else z=!1,j&&t.flags&1048576&&Ri(t,ji,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Fa(t.elementType),t.type=e,typeof e==`function`)vi(e)?(r=Zs(e,r),t.tag=1,t=xc(null,t,e,r,n)):(t.tag=0,t=yc(null,t,e,r,n));else{if(e!=null){var i=e.$$typeof;if(i===C){t.tag=11,t=lc(null,t,e,r,n);break a}else if(i===re){t.tag=14,t=uc(null,t,e,r,n);break a}}throw t=le(e)||e,Error(s(306,t,``))}}return t;case 0:return yc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,i=Zs(r,t.pendingProps),xc(e,t,r,i,n);case 3:a:{if(ye(t,t.stateNode.containerInfo),e===null)throw Error(s(387));r=t.pendingProps;var a=t.memoizedState;i=a.element,Ya(e,t),no(t,r,null,n);var o=t.memoizedState;if(r=o.cache,na(t,M,r),r!==a.cache&&aa(t,[M],n,!0),to(),r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=Sc(e,t,r,n);break a}else if(r!==i){i=Di(Error(s(424)),t),Qi(i),t=Sc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(A=cf(e.firstChild),Hi=t,j=!0,Ui=null,Wi=!0,n=Ka(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Xi(),r===i){t=Nc(e,t,n);break a}cc(e,t,r,n)}t=t.child}return t;case 26:return vc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:j||(n=t.type,e=t.pendingProps,r=Bd(_e.current).createElement(n),r[gt]=t,r[_t]=e,Pd(r,n,e),k(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return xe(t),e===null&&j&&(r=t.stateNode=ff(t.type,t.pendingProps,_e.current),Hi=t,Wi=!0,i=A,Zd(t.type)?(lf=i,A=cf(r.firstChild)):A=i),cc(e,t,t.pendingProps.children,n),vc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&j&&((i=r=A)&&(r=tf(r,t.type,t.pendingProps,Wi),r===null?i=!1:(t.stateNode=r,Hi=t,A=cf(r.firstChild),Wi=!1,i=!0)),i||Ki(t)),xe(t),i=t.type,a=t.pendingProps,o=e===null?null:e.memoizedProps,r=a.children,Ud(i,a)?r=null:o!==null&&Ud(i,o)&&(t.flags|=32),t.memoizedState!==null&&(i=Oo(e,t,jo,null,null,n),Qf._currentValue=i),vc(e,t),cc(e,t,r,n),t.child;case 6:return e===null&&j&&((e=n=A)&&(n=nf(n,t.pendingProps,Wi),n===null?e=!1:(t.stateNode=n,Hi=t,A=null,e=!0)),e||Ki(t)),null;case 13:return Ec(e,t,n);case 4:return ye(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ga(t,null,r,n):cc(e,t,r,n),t.child;case 11:return lc(e,t,t.type,t.pendingProps,n);case 7:return cc(e,t,t.pendingProps,n),t.child;case 8:return cc(e,t,t.pendingProps.children,n),t.child;case 12:return cc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,na(t,t.type,r.value),cc(e,t,r.children,n),t.child;case 9:return i=t.type._context,r=t.pendingProps.children,ca(t),i=la(i),r=r(i),t.flags|=1,cc(e,t,r,n),t.child;case 14:return uc(e,t,t.type,t.pendingProps,n);case 15:return dc(e,t,t.type,t.pendingProps,n);case 19:return Mc(e,t,n);case 31:return _c(e,t,n);case 22:return fc(e,t,n,t.pendingProps);case 24:return ca(t),r=la(M),e===null?(i=Ea(),i===null&&(i=G,a=ha(),i.pooledCache=a,a.refCount++,a!==null&&(i.pooledCacheLanes|=n),i=a),t.memoizedState={parent:r,cache:i},Ja(t),na(t,M,i)):((e.lanes&n)!==0&&(Ya(e,t),no(t,null,null,n),to()),i=e.memoizedState,a=t.memoizedState,i.parent===r?(r=a.cache,na(t,M,r),r!==i.cache&&aa(t,[M],n,!0)):(i={parent:r,cache:r},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),na(t,M,r))),cc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function Lc(e){e.flags|=4}function Rc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Ia=Ma,Aa}else e.flags&=-16777217}function zc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw Ia=Ma,Aa}function Bc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:it(),e.lanes|=t,Xl|=t)}function Vc(e,t){if(!j)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function B(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Hc(e,t,n){var r=t.pendingProps;switch(Bi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return B(t),null;case 1:return B(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),ra(M),be(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Yi(t)?Lc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Zi())),B(t),null;case 26:var i=t.type,a=t.memoizedState;return e===null?(Lc(t),a===null?(B(t),Rc(t,i,null,r,n)):(B(t),zc(t,a))):a?a===e.memoizedState?(B(t),t.flags&=-16777217):(Lc(t),B(t),zc(t,a)):(e=e.memoizedProps,e!==r&&Lc(t),B(t),Rc(t,i,e,r,n)),null;case 27:if(Se(t),n=_e.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Lc(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return B(t),null}e=he.current,Yi(t)?qi(t,e):(e=ff(i,r,n),t.stateNode=e,Lc(t))}return B(t),null;case 5:if(Se(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Lc(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return B(t),null}if(a=he.current,Yi(t))qi(t,a);else{var o=Bd(_e.current);switch(a){case 1:a=o.createElementNS(`http://www.w3.org/2000/svg`,i);break;case 2:a=o.createElementNS(`http://www.w3.org/1998/Math/MathML`,i);break;default:switch(i){case`svg`:a=o.createElementNS(`http://www.w3.org/2000/svg`,i);break;case`math`:a=o.createElementNS(`http://www.w3.org/1998/Math/MathML`,i);break;case`script`:a=o.createElement(`div`),a.innerHTML=`<script><\/script>`,a=a.removeChild(a.firstChild);break;case`select`:a=typeof r.is==`string`?o.createElement(`select`,{is:r.is}):o.createElement(`select`),r.multiple?a.multiple=!0:r.size&&(a.size=r.size);break;default:a=typeof r.is==`string`?o.createElement(i,{is:r.is}):o.createElement(i)}}a[gt]=t,a[_t]=r;a:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)a.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break a;for(;o.sibling===null;){if(o.return===null||o.return===t)break a;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=a;a:switch(Pd(a,i,r),i){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Lc(t)}}return B(t),Rc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Lc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(s(166));if(e=_e.current,Yi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,i=Hi,i!==null)switch(i.tag){case 27:case 5:r=i.memoizedProps}e[gt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Ki(t,!0)}else e=Bd(e).createTextNode(r),e[gt]=t,t.stateNode=e}return B(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Yi(t),n!==null){if(e===null){if(!r)throw Error(s(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(557));e[gt]=t}else Xi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;B(t),e=!1}else n=Zi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(_o(t),t):(_o(t),null);if(t.flags&128)throw Error(s(558))}return B(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=Yi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(s(318));if(i=t.memoizedState,i=i===null?null:i.dehydrated,!i)throw Error(s(317));i[gt]=t}else Xi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;B(t),i=!1}else i=Zi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(_o(t),t):(_o(t),null)}return _o(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,i=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(i=r.alternate.memoizedState.cachePool.pool),a=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(a=r.memoizedState.cachePool.pool),a!==i&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Bc(t,t.updateQueue),B(t),null);case 4:return be(),e===null&&Sd(t.stateNode.containerInfo),B(t),null;case 10:return ra(t.type),B(t),null;case 19:if(D(N),r=t.memoizedState,r===null)return B(t),null;if(i=(t.flags&128)!=0,a=r.rendering,a===null)if(i)Vc(r,!1);else{if(Y!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=vo(e),a!==null){for(t.flags|=128,Vc(r,!1),e=a.updateQueue,t.updateQueue=e,Bc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)bi(n,e),n=n.sibling;return O(N,N.current&1|2),j&&Li(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Fe()>nu&&(t.flags|=128,i=!0,Vc(r,!1),t.lanes=4194304)}else{if(!i)if(e=vo(a),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,Bc(t,e),Vc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!a.alternate&&!j)return B(t),null}else 2*Fe()-r.renderingStartTime>nu&&n!==536870912&&(t.flags|=128,i=!0,Vc(r,!1),t.lanes=4194304);r.isBackwards?(a.sibling=t.child,t.child=a):(e=r.last,e===null?t.child=a:e.sibling=a,r.last=a)}return r.tail===null?(B(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Fe(),e.sibling=null,n=N.current,O(N,i?n&1|2:n&1),j&&Li(t,r.treeForkCount),e);case 22:case 23:return _o(t),lo(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(B(t),t.subtreeFlags&6&&(t.flags|=8192)):B(t),n=t.updateQueue,n!==null&&Bc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&D(Ta),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ra(M),B(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function Uc(e,t){switch(Bi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ra(M),be(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Se(t),null;case 31:if(t.memoizedState!==null){if(_o(t),t.alternate===null)throw Error(s(340));Xi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(_o(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));Xi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return D(N),null;case 4:return be(),null;case 10:return ra(t.type),null;case 22:case 23:return _o(t),lo(),e!==null&&D(Ta),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ra(M),null;case 25:return null;default:return null}}function Wc(e,t){switch(Bi(t),t.tag){case 3:ra(M),be();break;case 26:case 27:case 5:Se(t);break;case 4:be();break;case 31:t.memoizedState!==null&&_o(t);break;case 13:_o(t);break;case 19:D(N);break;case 10:ra(t.type);break;case 22:case 23:_o(t),lo(),e!==null&&D(Ta);break;case 24:ra(M)}}function Gc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Kc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function qc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{io(t,n)}catch(t){Z(e,e.return,t)}}}function Jc(e,t,n){n.props=Zs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Yc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Xc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function Zc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Qc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[_t]=t}catch(t){Z(e,e.return,t)}}function $c(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function el(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||$c(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function tl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ln));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(tl(e,t,n),e=e.sibling;e!==null;)tl(e,t,n),e=e.sibling}function nl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(nl(e,t,n),e=e.sibling;e!==null;)nl(e,t,n),e=e.sibling}function rl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[gt]=e,t[_t]=n}catch(t){Z(e,e.return,t)}}var il=!1,V=!1,al=!1,ol=typeof WeakSet==`function`?WeakSet:Set,H=null;function sl(e,t){if(e=e.containerInfo,Rd=sp,e=Ir(e),Lr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break a}var o=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||i!==0&&f.nodeType!==3||(c=o+i),f!==a||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===i&&(c=o),p===a&&++d===r&&(l=o),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,H=t;H!==null;)if(t=H,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,H=e;else for(;H!==null;){switch(t=H,a=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)i=e[n],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&a!==null){e=void 0,n=t,i=a.memoizedProps,a=a.memoizedState,r=n.stateNode;try{var h=Zs(n.type,i);e=r.getSnapshotBeforeUpdate(h,a),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,H=e;break}H=t.return}}function cl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Sl(e,n),r&4&&Gc(5,n);break;case 1:if(Sl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Zs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&qc(n),r&512&&Yc(n,n.return);break;case 3:if(Sl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{io(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&rl(n);case 26:case 5:Sl(e,n),t===null&&r&4&&Zc(n),r&512&&Yc(n,n.return);break;case 12:Sl(e,n);break;case 31:Sl(e,n),r&4&&pl(e,n);break;case 13:Sl(e,n),r&4&&ml(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||il,!r){t=t!==null&&t.memoizedState!==null||V,i=il;var a=V;il=r,(V=t)&&!a?wl(e,n,(n.subtreeFlags&8772)!=0):Sl(e,n),il=i,V=a}break;case 30:break;default:Sl(e,n)}}function ll(e){var t=e.alternate;t!==null&&(e.alternate=null,ll(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&wt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var U=null,ul=!1;function dl(e,t,n){for(n=n.child;n!==null;)fl(e,t,n),n=n.sibling}function fl(e,t,n){if(Ge&&typeof Ge.onCommitFiberUnmount==`function`)try{Ge.onCommitFiberUnmount(We,n)}catch{}switch(n.tag){case 26:V||Xc(n,t),dl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:V||Xc(n,t);var r=U,i=ul;Zd(n.type)&&(U=n.stateNode,ul=!1),dl(e,t,n),pf(n.stateNode),U=r,ul=i;break;case 5:V||Xc(n,t);case 6:if(r=U,i=ul,U=null,dl(e,t,n),U=r,ul=i,U!==null)if(ul)try{(U.nodeType===9?U.body:U.nodeName===`HTML`?U.ownerDocument.body:U).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{U.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:U!==null&&(ul?(e=U,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(U,n.stateNode));break;case 4:r=U,i=ul,U=n.stateNode.containerInfo,ul=!0,dl(e,t,n),U=r,ul=i;break;case 0:case 11:case 14:case 15:Kc(2,n,t),V||Kc(4,n,t),dl(e,t,n);break;case 1:V||(Xc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Jc(n,t,r)),dl(e,t,n);break;case 21:dl(e,t,n);break;case 22:V=(r=V)||n.memoizedState!==null,dl(e,t,n),V=r;break;default:dl(e,t,n)}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function ml(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function hl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new ol),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new ol),t;default:throw Error(s(435,e.tag))}}function gl(e,t){var n=hl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function _l(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r],a=e,o=t,c=o;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){U=c.stateNode,ul=!1;break a}break;case 5:U=c.stateNode,ul=!1;break a;case 3:case 4:U=c.stateNode.containerInfo,ul=!0;break a}c=c.return}if(U===null)throw Error(s(160));fl(a,o,i),U=null,ul=!1,a=i.alternate,a!==null&&(a.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)yl(t,e),t=t.sibling}var vl=null;function yl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:_l(t,e),bl(e),r&4&&(Kc(3,e,e.return),Gc(3,e),Kc(5,e,e.return));break;case 1:_l(t,e),bl(e),r&512&&(V||n===null||Xc(n,n.return)),r&64&&il&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var i=vl;if(_l(t,e),bl(e),r&512&&(V||n===null||Xc(n,n.return)),r&4){var a=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,i=i.ownerDocument||i;b:switch(r){case`title`:a=i.getElementsByTagName(`title`)[0],(!a||a[Ct]||a[gt]||a.namespaceURI===`http://www.w3.org/2000/svg`||a.hasAttribute(`itemprop`))&&(a=i.createElement(r),i.head.insertBefore(a,i.querySelector(`head > title`))),Pd(a,r,n),a[gt]=e,k(a),r=a;break a;case`link`:var o=Vf(`link`,`href`,i).get(r+(n.href||``));if(o){for(var c=0;c<o.length;c++)if(a=o[c],a.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&a.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&a.getAttribute(`title`)===(n.title==null?null:n.title)&&a.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(c,1);break b}}a=i.createElement(r),Pd(a,r,n),i.head.appendChild(a);break;case`meta`:if(o=Vf(`meta`,`content`,i).get(r+(n.content||``))){for(c=0;c<o.length;c++)if(a=o[c],a.getAttribute(`content`)===(n.content==null?null:``+n.content)&&a.getAttribute(`name`)===(n.name==null?null:n.name)&&a.getAttribute(`property`)===(n.property==null?null:n.property)&&a.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&a.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){o.splice(c,1);break b}}a=i.createElement(r),Pd(a,r,n),i.head.appendChild(a);break;default:throw Error(s(468,r))}a[gt]=e,k(a),r=a}e.stateNode=r}else Hf(i,e.type,e.stateNode);else e.stateNode=If(i,r,e.memoizedProps);else a===r?r===null&&e.stateNode!==null&&Qc(e,e.memoizedProps,n.memoizedProps):(a===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):a.count--,r===null?Hf(i,e.type,e.stateNode):If(i,r,e.memoizedProps))}break;case 27:_l(t,e),bl(e),r&512&&(V||n===null||Xc(n,n.return)),n!==null&&r&4&&Qc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(_l(t,e),bl(e),r&512&&(V||n===null||Xc(n,n.return)),e.flags&32){i=e.stateNode;try{en(i,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(i=e.memoizedProps,Qc(e,i,n===null?i:n.memoizedProps)),r&1024&&(al=!0);break;case 6:if(_l(t,e),bl(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,i=vl,vl=gf(t.containerInfo),_l(t,e),vl=i,bl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}al&&(al=!1,xl(e));break;case 4:r=vl,vl=gf(e.stateNode.containerInfo),_l(t,e),bl(e),vl=r;break;case 12:_l(t,e),bl(e);break;case 31:_l(t,e),bl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 13:_l(t,e),bl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(eu=Fe()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 22:i=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=il,d=V;if(il=u||i,V=d||l,_l(t,e),V=d,il=u,bl(e),r&8192)a:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(n===null||l||il||V||Cl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(a=l.stateNode,i)o=a.style,typeof o.setProperty==`function`?o.setProperty(`display`,`none`,`important`):o.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=i?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;i?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,gl(e,n))));break;case 19:_l(t,e),bl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 30:break;case 21:break;default:_l(t,e),bl(e)}}function bl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if($c(r)){n=r;break}r=r.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var i=n.stateNode;nl(e,el(e),i);break;case 5:var a=n.stateNode;n.flags&32&&(en(a,``),n.flags&=-33),nl(e,el(e),a);break;case 3:case 4:var o=n.stateNode.containerInfo;tl(e,el(e),o);break;default:throw Error(s(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;xl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Sl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)cl(e,t.alternate,t),t=t.sibling}function Cl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Kc(4,t,t.return),Cl(t);break;case 1:Xc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Jc(t,t.return,n),Cl(t);break;case 27:pf(t.stateNode);case 26:case 5:Xc(t,t.return),Cl(t);break;case 22:t.memoizedState===null&&Cl(t);break;case 30:Cl(t);break;default:Cl(t)}e=e.sibling}}function wl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:wl(i,a,n),Gc(4,a);break;case 1:if(wl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)ro(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&qc(a),Yc(a,a.return);break;case 27:rl(a);case 26:case 5:wl(i,a,n),n&&r===null&&o&4&&Zc(a),Yc(a,a.return);break;case 12:wl(i,a,n);break;case 31:wl(i,a,n),n&&o&4&&pl(i,a);break;case 13:wl(i,a,n),n&&o&4&&ml(i,a);break;case 22:a.memoizedState===null&&wl(i,a,n),Yc(a,a.return);break;case 30:break;default:wl(i,a,n)}t=t.sibling}}function Tl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ga(n))}function El(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ga(e))}function Dl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ol(e,t,n,r),t=t.sibling}function Ol(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Dl(e,t,n,r),i&2048&&Gc(9,t);break;case 1:Dl(e,t,n,r);break;case 3:Dl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ga(e)));break;case 12:if(i&2048){Dl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Dl(e,t,n,r);break;case 31:Dl(e,t,n,r);break;case 13:Dl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Dl(e,t,n,r):(a._visibility|=2,kl(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?Dl(e,t,n,r):Al(e,t),i&2048&&Tl(o,t);break;case 24:Dl(e,t,n,r),i&2048&&El(t.alternate,t);break;default:Dl(e,t,n,r)}}function kl(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:kl(a,o,s,c,i),Gc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,kl(a,o,s,c,i)):u._visibility&2?kl(a,o,s,c,i):Al(a,o),i&&l&2048&&Tl(o.alternate,o);break;case 24:kl(a,o,s,c,i),i&&l&2048&&El(o.alternate,o);break;default:kl(a,o,s,c,i)}t=t.sibling}}function Al(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Al(n,r),i&2048&&Tl(r.alternate,r);break;case 24:Al(n,r),i&2048&&El(r.alternate,r);break;default:Al(n,r)}t=t.sibling}}var jl=8192;function Ml(e,t,n){if(e.subtreeFlags&jl)for(e=e.child;e!==null;)Nl(e,t,n),e=e.sibling}function Nl(e,t,n){switch(e.tag){case 26:Ml(e,t,n),e.flags&jl&&e.memoizedState!==null&&Gf(n,vl,e.memoizedState,e.memoizedProps);break;case 5:Ml(e,t,n);break;case 3:case 4:var r=vl;vl=gf(e.stateNode.containerInfo),Ml(e,t,n),vl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=jl,jl=16777216,Ml(e,t,n),jl=r):Ml(e,t,n));break;default:Ml(e,t,n)}}function Pl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Fl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];H=r,Rl(r,e)}Pl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Il(e),e=e.sibling}function Il(e){switch(e.tag){case 0:case 11:case 15:Fl(e),e.flags&2048&&Kc(9,e,e.return);break;case 3:Fl(e);break;case 12:Fl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ll(e)):Fl(e);break;default:Fl(e)}}function Ll(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];H=r,Rl(r,e)}Pl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Kc(8,t,t.return),Ll(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ll(t));break;default:Ll(t)}e=e.sibling}}function Rl(e,t){for(;H!==null;){var n=H;switch(n.tag){case 0:case 11:case 15:Kc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ga(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,H=r;else a:for(n=e;H!==null;){r=H;var i=r.sibling,a=r.return;if(ll(r),r===n){H=null;break a}if(i!==null){i.return=a,H=i;break a}H=a}}}var zl={getCacheForType:function(e){var t=la(M),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return la(M).controller.signal}},Bl=typeof WeakMap==`function`?WeakMap:Map,W=0,G=null,K=null,q=0,J=0,Vl=null,Hl=!1,Ul=!1,Wl=!1,Gl=0,Y=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=0,Zl=null,Ql=null,$l=!1,eu=0,tu=0,nu=1/0,ru=null,iu=null,X=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return W&2&&q!==0?q&-q:T.T===null?pt():dd()}function mu(){if(Yl===0)if(!(q&536870912)||j){var e=Qe;Qe<<=1,!(Qe&3932160)&&(Qe=262144),Yl=e}else Yl=536870912;return e=uo.current,e!==null&&(e.flags|=32),Yl}function hu(e,t,n){(e===G&&(J===2||J===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,q,Yl,!1)),ot(e,n),(!(W&2)||e!==G)&&(e===G&&(!(W&2)&&(ql|=n),Y===4&&yu(e,q,Yl,!1)),rd(e))}function gu(e,t,n){if(W&6)throw Error(s(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||nt(e,t),i=r?Au(e,t):Ou(e,t,!0),a=r;do{if(i===0){Ul&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,a&&!vu(n)){i=Ou(e,t,!1),a=!1;continue}if(i===2){if(a=t,e.errorRecoveryDisabledLanes&a)var o=0;else o=e.pendingLanes&-536870913,o=o===0?o&536870912?536870912:0:o;if(o!==0){t=o;a:{var c=e;i=Zl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,o).flags|=256),o=Ou(c,o,!1),o!==2){if(Wl&&!l){c.errorRecoveryDisabledLanes|=a,ql|=a,i=4;break a}a=Ql,Ql=i,a!==null&&(Ql===null?Ql=a:Ql.push.apply(Ql,a))}i=o}if(a=!1,i!==2)continue}}if(i===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,a=i,a){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Yl,!Hl);break a;case 2:Ql=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(i=eu+300-Fe(),10<i)){if(yu(r,t,Yl,!Hl),tt(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Ql,ru,$l,t,Yl,ql,Xl,Hl,a,`Throttled`,-0,0),i);break a}_u(r,n,Ql,ru,$l,t,Yl,ql,Xl,Hl,a,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ln},Nl(t,a,d);var m=(a&62914560)===a?eu-Fe():(a&4194048)===a?tu-Fe():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!jr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~Jl,t&=~ql,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-qe(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&ct(e,n,t)}function bu(){return W&6?!0:(id(0,!1),!1)}function xu(){if(K!==null){if(J===0)var e=K.return;else e=K,ta=ea=null,Po(e),za=null,Ba=0,e=K;for(;e!==null;)Wc(e.alternate,e),e=e.return;K=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),G=e,K=n=yi(e.current,null),q=t,J=0,Vl=null,Hl=!1,Ul=nt(e,t),Wl=!1,Xl=Yl=Jl=ql=Kl=Y=0,Ql=Zl=null,$l=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-qe(r),a=1<<i;t|=e[i],r&=~a}return Gl=t,li(),n}function Cu(e,t){P=null,T.H=Us,t===ka||t===ja?(t=La(),J=3):t===Aa?(t=La(),J=4):J=t===sc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Vl=t,K===null&&(Y=1,tc(e,Di(t,e.current)))}function wu(){var e=uo.current;return e===null?!0:(q&4194048)===q?fo===null:(q&62914560)===q||q&536870912?e===fo:!1}function Tu(){var e=T.H;return T.H=Us,e===null?Us:e}function Eu(){var e=T.A;return T.A=zl,e}function Du(){Y=4,Hl||(q&4194048)!==q&&uo.current!==null||(Ul=!0),!(Kl&134217727)&&!(ql&134217727)||G===null||yu(G,q,Yl,!1)}function Ou(e,t,n){var r=W;W|=2;var i=Tu(),a=Eu();(G!==e||q!==t)&&(ru=null,Su(e,t)),t=!1;var o=Y;a:do try{if(J!==0&&K!==null){var s=K,c=Vl;switch(J){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:uo.current===null&&(t=!0);var l=J;if(J=0,Vl=null,Pu(e,s,c,l),n&&Ul){o=0;break a}break;default:l=J,J=0,Vl=null,Pu(e,s,c,l)}}ku(),o=Y;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,ta=ea=null,W=r,T.H=i,T.A=a,K===null&&(G=null,q=0,li()),o}function ku(){for(;K!==null;)Mu(K)}function Au(e,t){var n=W;W|=2;var r=Tu(),i=Eu();G!==e||q!==t?(ru=null,nu=Fe()+500,Su(e,t)):Ul=nt(e,t);a:do try{if(J!==0&&K!==null){t=K;var a=Vl;b:switch(J){case 1:J=0,Vl=null,Pu(e,t,a,1);break;case 2:case 9:if(Na(a)){J=0,Vl=null,Nu(t);break}t=function(){J!==2&&J!==9||G!==e||(J=7),rd(e)},a.then(t,t);break a;case 3:J=7;break a;case 4:J=5;break a;case 7:Na(a)?(J=0,Vl=null,Nu(t)):(J=0,Vl=null,Pu(e,t,a,7));break;case 5:var o=null;switch(K.tag){case 26:o=K.memoizedState;case 5:case 27:var c=K;if(o?Wf(o):c.stateNode.complete){J=0,Vl=null;var l=c.sibling;if(l!==null)K=l;else{var u=c.return;u===null?K=null:(K=u,Fu(u))}break b}}J=0,Vl=null,Pu(e,t,a,5);break;case 6:J=0,Vl=null,Pu(e,t,a,6);break;case 8:xu(),Y=6;break a;default:throw Error(s(462))}}ju();break}catch(t){Cu(e,t)}while(1);return ta=ea=null,T.H=r,T.A=i,W=n,K===null?(G=null,q=0,li(),Y):0}function ju(){for(;K!==null&&!Ne();)Mu(K)}function Mu(e){var t=Ic(e.alternate,e,Gl);e.memoizedProps=e.pendingProps,t===null?Fu(e):K=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=bc(n,t,t.pendingProps,t.type,void 0,q);break;case 11:t=bc(n,t,t.pendingProps,t.type.render,t.ref,q);break;case 5:Po(t);default:Wc(n,t),t=K=bi(t,Gl),t=Ic(n,t,Gl)}e.memoizedProps=e.pendingProps,t===null?Fu(e):K=t}function Pu(e,t,n,r){ta=ea=null,Po(t),za=null,Ba=0;var i=t.return;try{if(oc(e,i,t,n,q)){Y=1,tc(e,Di(n,e.current)),K=null;return}}catch(t){if(i!==null)throw K=i,t;Y=1,tc(e,Di(n,e.current)),K=null;return}t.flags&32768?(j||r===1?e=!0:Ul||q&536870912?e=!1:(Hl=e=!0,(r===2||r===9||r===3||r===6)&&(r=uo.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Hl);return}e=t.return;var n=Hc(t.alternate,t,Gl);if(n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);Y===0&&(Y=5)}function Iu(e,t){do{var n=Uc(e.alternate,e);if(n!==null){n.flags&=32767,K=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){K=e;return}K=e=n}while(e!==null);Y=6,K=null}function Lu(e,t,n,r,i,a,o,c,l){e.cancelPendingCommit=null;do Hu();while(X!==0);if(W&6)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(a=t.lanes|t.childLanes,a|=ci,st(e,n,a,o,c,l),e===G&&(K=G=null,q=0),ou=t,au=e,su=n,cu=a,lu=i,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(ze,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=T.T,T.T=null,i=E.p,E.p=2,o=W,W|=4;try{sl(e,t,n)}finally{W=o,E.p=i,T.T=r}}X=1,Ru(),zu(),Bu()}}function Ru(){if(X===1){X=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=T.T,T.T=null;var r=E.p;E.p=2;var i=W;W|=4;try{yl(t,e);var a=zd,o=Ir(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Fr(s.ownerDocument.documentElement,s)){if(c!==null&&Lr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Pr(s,h),v=Pr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{W=i,E.p=r,T.T=n}}e.current=t,X=2}}function zu(){if(X===2){X=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=T.T,T.T=null;var r=E.p;E.p=2;var i=W;W|=4;try{cl(e,t.alternate,t)}finally{W=i,E.p=r,T.T=n}}X=3}}function Bu(){if(X===4||X===3){X=0,Pe();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?X=5:(X=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(iu=null),ft(n),t=t.stateNode,Ge&&typeof Ge.onCommitFiberRoot==`function`)try{Ge.onCommitFiberRoot(We,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=T.T,i=E.p,E.p=2,T.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{T.T=t,E.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ga(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(X!==5)return!1;var e=au,t=cu;cu=0;var n=ft(su),r=T.T,i=E.p;try{E.p=32>n?32:n,T.T=null,n=lu,lu=null;var a=au,o=su;if(X=0,ou=au=null,su=0,W&6)throw Error(s(331));var c=W;if(W|=4,Il(a.current),Ol(a,a.current,o,n),W=c,id(0,!1),Ge&&typeof Ge.onPostCommitFiberRoot==`function`)try{Ge.onPostCommitFiberRoot(We,a)}catch{}return!0}finally{E.p=i,T.T=r,Vu(e,t)}}function Wu(e,t,n){t=Di(n,t),t=rc(e.stateNode,t,2),e=Za(e,t,2),e!==null&&(ot(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(iu===null||!iu.has(r))){e=Di(n,e),n=ic(2),r=Za(t,n,2),r!==null&&(ac(n,r,t,e),ot(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Bl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Wl=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,G===e&&(q&n)===n&&(Y===4||Y===3&&(q&62914560)===q&&300>Fe()-eu?!(W&2)&&Su(e,0):Jl|=n,Xl===q&&(Xl=0)),rd(e)}function qu(e,t){t===0&&(t=it()),e=fi(e,t),e!==null&&(ot(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return je(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-qe(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=q,a=tt(r,r===G?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||nt(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Fe(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}X!==0&&X!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-qe(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=rt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=G,n=q,n=tt(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(J===2||J===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Me(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||nt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Me(r),ft(n)){case 2:case 8:n=Re;break;case 32:n=ze;break;case 268435456:n=Ve;break;default:n=ze}return r=cd.bind(null,e),n=je(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Me(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(X!==0&&X!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=q;return r=tt(e,e===G?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Fe()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){W&6?je(Le,ad):od()})}function dd(){if(nd===0){var e=ya;e===0&&(e=Ze,Ze<<=1,!(Ze&261888)&&(Ze=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:cn(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[_t]||null).action),o=r.submitter;o&&(t=(t=o[_t]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new An(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);ks(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),ks(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<ri.length;hd++){var gd=ri[hd];ii(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}ii(Yr,`onAnimationEnd`),ii(Xr,`onAnimationIteration`),ii(Zr,`onAnimationStart`),ii(`dblclick`,`onDoubleClick`),ii(`focusin`,`onFocus`),ii(`focusout`,`onBlur`),ii(Qr,`onTransitionRun`),ii($r,`onTransitionStart`),ii(ei,`onTransitionCancel`),ii(ti,`onTransitionEnd`),Mt(`onMouseEnter`,[`mouseout`,`mouseover`]),Mt(`onMouseLeave`,[`mouseout`,`mouseover`]),Mt(`onPointerEnter`,[`pointerout`,`pointerover`]),Mt(`onPointerLeave`,[`pointerout`,`pointerover`]),jt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),jt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),jt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),jt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),jt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),jt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ai(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ai(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[yt];n===void 0&&(n=t[yt]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,kt.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!yn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&o.stateNode.containerInfo===i)return;o=o.return}for(;s!==null;){if(o=Tt(s),o===null)return;if(c=o.tag,c===5||c===6||c===26||c===27){r=a=o;continue a}s=s.parentNode}}r=r.return}gn(function(){var r=a,i=dn(n),o=[];a:{var s=ni.get(e);if(s!==void 0){var c=An,u=e;switch(e){case`keypress`:if(Tn(n)===0)break a;case`keydown`:case`keyup`:c=Jn;break;case`focusin`:u=`focus`,c=zn;break;case`focusout`:u=`blur`,c=zn;break;case`beforeblur`:case`afterblur`:c=zn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:c=Ln;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:c=Rn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:c=Xn;break;case Yr:case Xr:case Zr:c=Bn;break;case ti:c=Zn;break;case`scroll`:case`scrollend`:c=Mn;break;case`wheel`:c=Qn;break;case`copy`:case`cut`:case`paste`:c=Vn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:c=Yn;break;case`toggle`:case`beforetoggle`:c=$n}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?s===null?null:s+`Capture`:s;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=_n(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(s=new c(s,u,null,n,i),o.push({event:s,listeners:d}))}}if(!(t&7)){a:{if(s=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,s&&n!==un&&(u=n.relatedTarget||n.fromElement)&&(Tt(u)||u[vt]))break a;if((c||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,c?(u=n.relatedTarget||n.toElement,c=r,u=u?Tt(u):null,u!==null&&(f=l(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(c=null,u=r),c!==u)){if(d=Ln,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Yn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=c==null?s:Dt(c),h=u==null?s:Dt(u),s=new d(g,m+`leave`,c,n,i),s.target=f,s.relatedTarget=h,g=null,Tt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,c&&u)b:{for(d=Dd,p=c,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;c!==null&&Od(o,s,c,d,!1),u!==null&&f!==null&&Od(o,f,u,d,!0)}}a:{if(s=r?Dt(r):window,c=s.nodeName&&s.nodeName.toLowerCase(),c===`select`||c===`input`&&s.type===`file`)var v=yr;else if(pr(s))if(br)v=kr;else{v=Dr;var y=Er}else c=s.nodeName,!c||c.toLowerCase()!==`input`||s.type!==`checkbox`&&s.type!==`radio`?r&&an(r.elementType)&&(v=yr):v=Or;if(v&&=v(e,r)){mr(o,v,n,i);break a}y&&y(e,s,r),e===`focusout`&&r&&s.type===`number`&&r.memoizedProps.value!=null&&Xt(s,`number`,s.value)}switch(y=r?Dt(r):window,e){case`focusin`:(pr(y)||y.contentEditable===`true`)&&(zr=y,Br=r,Vr=null);break;case`focusout`:Vr=Br=zr=null;break;case`mousedown`:Hr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Hr=!1,Ur(o,n,i);break;case`selectionchange`:if(Rr)break;case`keydown`:case`keyup`:Ur(o,n,i)}var b;if(tr)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else lr?sr(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(ir&&n.locale!==`ko`&&(lr||x!==`onCompositionStart`?x===`onCompositionEnd`&&lr&&(b=wn()):(xn=i,Sn=`value`in xn?xn.value:xn.textContent,lr=!0)),y=Ed(r,x),0<y.length&&(x=new Hn(x,e,null,n,i),o.push({event:x,listeners:y}),b?x.data=b:(b=cr(n),b!==null&&(x.data=b)))),(b=rr?ur(e,n):dr(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Hn(`onBeforeInput`,`beforeinput`,null,n,i),o.push({event:y,listeners:x}),y.data=b)),md(o,e,r,n,i)}yd(o,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=_n(e,n),i!=null&&r.unshift(Td(e,i,a)),i=_n(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=_n(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=_n(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,i,a){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||en(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&en(e,``+r);break;case`className`:Rt(e,`class`,r);break;case`tabIndex`:Rt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Rt(e,n,r);break;case`style`:rn(e,r,a);break;case`data`:if(t!==`object`){Rt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=cn(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof a==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,i.name,i,null),$(e,t,`formEncType`,i.formEncType,i,null),$(e,t,`formMethod`,i.formMethod,i,null),$(e,t,`formTarget`,i.formTarget,i,null)):($(e,t,`encType`,i.encType,i,null),$(e,t,`method`,i.method,i,null),$(e,t,`target`,i.target,i,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=cn(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=ln);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(s(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(s(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=cn(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Lt(e,`popover`,r);break;case`xlinkActuate`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Lt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=on.get(n)||n,Lt(e,n,r))}}function Nd(e,t,n,r,i,a){switch(n){case`style`:rn(e,r,a);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(s(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(s(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?en(e,r):(typeof r==`number`||typeof r==`bigint`)&&en(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=ln);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!At.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(i=n.endsWith(`Capture`),t=n.slice(2,i?n.length-7:void 0),a=e[_t]||null,a=a==null?null:a[n],typeof a==`function`&&e.removeEventListener(t,a,i),typeof r==`function`)){typeof a!=`function`&&a!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,i);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Lt(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,i=!1,a;for(a in n)if(n.hasOwnProperty(a)){var o=n[a];if(o!=null)switch(a){case`src`:r=!0;break;case`srcSet`:i=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(s(137,t));default:$(e,t,a,o,n,null)}}i&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=a=o=i=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:i=d;break;case`type`:o=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:a=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(s(137,t));break;default:$(e,t,r,d,n,null)}}Yt(e,a,c,l,u,o,i,!1);return;case`select`:for(i in Q(`invalid`,e),r=o=a=null,n)if(n.hasOwnProperty(i)&&(c=n[i],c!=null))switch(i){case`value`:a=c;break;case`defaultValue`:o=c;break;case`multiple`:r=c;default:$(e,t,i,c,n,null)}t=a,n=o,e.multiple=!!r,t==null?n!=null&&Zt(e,!!r,n,!0):Zt(e,!!r,t,!1);return;case`textarea`:for(o in Q(`invalid`,e),a=i=r=null,n)if(n.hasOwnProperty(o)&&(c=n[o],c!=null))switch(o){case`value`:r=c;break;case`defaultValue`:i=c;break;case`children`:a=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(s(91));break;default:$(e,t,o,c,n,null)}$t(e,r,i,a);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(s(137,t));default:$(e,t,u,r,n,null)}return;default:if(an(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var i=null,a=null,o=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:a=m;break;case`name`:i=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:o=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(s(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Jt(e,o,c,l,u,d,a,i);return;case`select`:for(a in m=o=c=p=null,n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(a)||$(e,t,a,null,r,l)}for(i in r)if(a=r[i],l=n[i],r.hasOwnProperty(i)&&(a!=null||l!=null))switch(i){case`value`:p=a;break;case`defaultValue`:c=a;break;case`multiple`:o=a;default:a!==l&&$(e,t,i,a,r,l)}t=c,n=o,r=m,p==null?!!r!=!!n&&(t==null?Zt(e,!!n,n?[]:``,!1):Zt(e,!!n,t,!0)):Zt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(i=n[c],n.hasOwnProperty(c)&&i!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,i)}for(o in r)if(i=r[o],a=n[o],r.hasOwnProperty(o)&&(i!=null||a!=null))switch(o){case`value`:p=i;break;case`defaultValue`:m=i;break;case`children`:break;case`dangerouslySetInnerHTML`:if(i!=null)throw Error(s(91));break;default:i!==a&&$(e,t,o,i,r,a)}Qt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(s(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(an(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[Ct]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),wt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[Ct])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(s(452));return e;case`head`:if(e=t.head,!e)throw Error(s(453));return e;case`body`:if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);wt(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=E.d;E.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=Et(e);t!==null&&t.tag===5&&t.type===`form`?js(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=qt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),k(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+qt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+qt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+qt(n.imageSizes)+`"]`)):i+=`[href="`+qt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),k(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+qt(r)+`"][href="`+qt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),k(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=Ot(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);k(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=Ot(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),k(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=Ot(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),k(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var i=(i=_e.current)?gf(i):null;if(!i)throw Error(s(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=Ot(i).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var a=Ot(i).hoistableStyles,o=a.get(e);if(o||(i=i.ownerDocument||i,o={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},a.set(e,o),(a=i.querySelector(jf(e)))&&!a._p&&(o.instance=a,o.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),a||Nf(i,e,n,o.state))),t&&r===null)throw Error(s(528,``));return o}if(t&&r!==null)throw Error(s(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=Ot(i).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Af(e){return`href="`+qt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),k(t),e.head.appendChild(t))}function Pf(e){return`[src="`+qt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+qt(n.href)+`"]`);if(r)return t.instance=r,k(r),r;var i=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),k(r),Pd(r,`style`,i),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:i=Af(n.href);var a=e.querySelector(jf(i));if(a)return t.state.loading|=4,t.instance=a,k(a),a;r=Mf(n),(i=mf.get(i))&&Rf(r,i),a=(e.ownerDocument||e).createElement(`link`),k(a);var o=a;return o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),t.state.loading|=4,Lf(a,n.precedence,e),t.instance=a;case`script`:return a=Pf(n.src),(i=e.querySelector(Ff(a)))?(t.instance=i,k(i),i):(r=n,(i=mf.get(a))&&(r=h({},n),zf(r,i)),e=e.ownerDocument||e,i=e.createElement(`script`),k(i),Pd(i,`link`,r),e.head.appendChild(i),t.instance=i);case`void`:return null;default:throw Error(s(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[Ct]||a[gt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,k(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),k(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:S,Provider:null,Consumer:null,_currentValue:de,_currentValue2:de,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=at(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=at(0),this.hiddenUpdates=at(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=_i(3,null,null,t),e.current=a,a.stateNode=e,t=ha(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ja(a),e}function tp(e){return e?(e=hi,e):hi}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Xa(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Za(e,r,t),n!==null&&(hu(n,e,t),Qa(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=fi(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=dt(t);var n=fi(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=T.T;T.T=null;var a=E.p;try{E.p=2,up(e,t,n,r)}finally{E.p=a,T.T=i}}function lp(e,t,n,r){var i=T.T;T.T=null;var a=E.p;try{E.p=8,up(e,t,n,r)}finally{E.p=a,T.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=Et(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=et(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-qe(o);s.entanglements[1]|=c,o&=~c}rd(a),!(W&6)&&(nu=Fe()+500,id(0,!1))}}break;case 31:case 13:s=fi(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=dn(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=Tt(e),e!==null){var t=l(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=u(t),e!==null)return e;e=null}else if(n===31){if(e=d(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Ie()){case Le:return 2;case Re:return 8;case ze:case Be:return 32;case Ve:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Et(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=Tt(e.target);if(t!==null){var n=l(t);if(n!==null){if(t=n.tag,t===13){if(t=u(n),t!==null){e.blockedOn=t,mt(e.priority,function(){op(n)});return}}else if(t===31){if(t=d(n),t!==null){e.blockedOn=t,mt(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);un=r,n.target.dispatchEvent(r),un=null}else return t=Et(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=Et(n);a!==null&&(e.splice(t,3),t-=3,ks(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[_t]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[_t]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[vt]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=pt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=r.version;if(Lp!==`19.2.6`)throw Error(s(527,Lp,`19.2.6`));E.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(s(188)):(e=Object.keys(e).join(`,`),Error(s(268,e)));return e=p(t),e=e===null?null:m(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.6`,rendererPackageName:`react-dom`,currentDispatcherRef:T,reconcilerVersion:`19.2.6`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{We=zp.inject(Rp),Ge=zp}catch{}}e.createRoot=function(e,t){if(!c(e))throw Error(s(299));var n=!1,r=``,i=Qs,a=$s,o=ec;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,i,a,o,Pp),e[vt]=t.current,Sd(e),new Fp(t)}})),c=e(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=s()})),l=n(),u=c(),d=e((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),f=e(((e,t)=>{t.exports=d()}))(),p=`
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=DM+Mono:wght@400;500&family=Lora:ital,wght@0,400;0,600;1,400&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg:         #efebe4;
    --bg-mid:     #e8e3db;
    --card:       #ffffff;
    --ink:        #111110;
    --ink-mid:    #3c3b38;
    --ink-muted:  #8a8a85;
    --ink-subtle: #c2c1bb;
    --border:     rgba(0,0,0,0.07);
    --border-md:  rgba(0,0,0,0.13);
    --green:      #22c55e;
    --shadow-sm:  0 1px 3px rgba(0,0,0,0.06);
    --shadow-md:  0 4px 16px rgba(0,0,0,0.08);
    --shadow-lg:  0 12px 40px rgba(0,0,0,0.12);
    --mono:       'DM Mono', monospace;
    --sans:       'DM Sans', sans-serif;
    --serif:      'Lora', serif;
  }

  html, body, #root { height: 100%; }
  body {
    font-family: var(--sans);
    background: var(--bg);
    color: var(--ink);
    font-size: 15px;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
  }

  ::-webkit-scrollbar { width: 4px; height: 4px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb { background: var(--ink-subtle); border-radius: 99px; }

  /* ── GRID SHELL ── */
  .app-shell {
    display: grid;
    grid-template-rows: 52px 1fr;
    grid-template-columns: 1fr;
    height: 100vh;
    overflow: hidden;
  }

  /* ── HEADER ── */
  .header {
    grid-column: 1 / -1;
    display: flex; align-items: center; gap: 14px;
    padding: 0 20px;
    background: var(--card);
    border-bottom: 1px solid var(--border-md);
    z-index: 10;
  }
  .header-logo {
    display: flex; align-items: center; gap: 7px;
    font-family: var(--mono); font-size: 12.5px; font-weight: 700;
    color: var(--ink); letter-spacing: 0.1em; text-transform: uppercase;
  }
  .header-logo-icon {
    width: 22px; height: 22px; border-radius: 6px;
    background: var(--ink);
    display: flex; align-items: center; justify-content: center;
    color: var(--card); font-size: 11px;
  }
  .header-sep { width: 1px; height: 18px; background: var(--border-md); }
  .header-specialty {
    display: flex; align-items: center; gap: 6px;
    font-size: 13px; font-weight: 500; color: var(--ink-mid);
    padding: 4px 10px; border-radius: 99px;
    border: 1px solid var(--border-md);
    background: var(--bg);
  }
  .specialty-dot { width: 7px; height: 7px; border-radius: 99px; background: var(--green); }
  .header-spacer { flex: 1; }
  .header-badge {
    font-family: var(--mono); font-size: 10.5px;
    padding: 3px 9px; border-radius: 99px;
    border: 1px solid var(--border-md);
    color: var(--ink-muted); background: var(--bg);
    letter-spacing: 0.06em;
  }

  /* ── TAB BAR ── */
  .tab-bar {
    display: flex; align-items: stretch;
    padding: 0 16px;
    background: var(--card);
    border-bottom: 1px solid var(--border-md);
    overflow-x: auto; flex-shrink: 0;
    gap: 0;
  }
  .tab-bar::-webkit-scrollbar { display: none; }
  .tab-item {
    display: flex; align-items: center; gap: 7px;
    padding: 0 14px; height: 40px;
    font-size: 13.5px; font-weight: 500; color: var(--ink-muted);
    cursor: pointer; transition: all 0.14s;
    border-bottom: 2px solid transparent;
    white-space: nowrap; flex-shrink: 0;
    border-top: none; border-left: none; border-right: none;
    background: none;
  }
  .tab-item:hover { color: var(--ink); }
  .tab-item.active {
    color: var(--ink);
    border-bottom-color: var(--ink);
    font-weight: 600;
  }
  .sys-dot { width: 6px; height: 6px; border-radius: 99px; flex-shrink: 0; }

  /* ── MAIN ── */
  .main { display: flex; flex-direction: column; overflow: hidden; position: relative; background: var(--bg); }

  /* ── SEARCH BAR ── */
  .search-bar {
    padding: 11px 16px;
    border-bottom: 1px solid var(--border-md);
    display: flex; align-items: center; gap: 10px;
    background: var(--card);
  }
  .search-input {
    flex: 1; background: var(--bg);
    border: 1px solid var(--border-md);
    border-radius: 8px; padding: 7px 13px;
    color: var(--ink); font-family: var(--sans);
    font-size: 14.5px; outline: none;
    transition: border-color 0.2s;
  }
  .search-input::placeholder { color: var(--ink-subtle); }
  .search-input:focus { border-color: var(--ink-subtle); }
  .search-meta {
    font-family: var(--mono); font-size: 11px; color: var(--ink-subtle);
    white-space: nowrap;
  }

  /* ── CONTENT PANE ── */
  .content-pane {
    display: grid;
    grid-template-columns: 290px 1fr;
    flex: 1; overflow: hidden;
  }

  /* ── RESULTS LIST ── */
  .results-list {
    border-right: 1px solid var(--border-md);
    overflow-y: auto; padding: 8px 6px;
    background: var(--bg);
  }
  .result-card {
    padding: 10px 12px; border-radius: 8px;
    cursor: pointer; margin-bottom: 3px;
    border: 1px solid transparent;
    transition: all 0.14s;
  }
  .result-card:hover { background: var(--card); border-color: var(--border-md); }
  .result-card.selected {
    background: var(--card);
    border-color: var(--border-md);
    box-shadow: var(--shadow-sm);
  }
  .rc-sys-row { display: flex; align-items: center; gap: 5px; margin-bottom: 4px; }
  .rc-sys-label { font-size: 10.5px; font-weight: 700; color: var(--ink-muted); letter-spacing: 0.04em; text-transform: uppercase; }
  .rc-title { font-size: 14.5px; font-weight: 600; color: var(--ink); margin-bottom: 5px; line-height: 1.3; }
  .rc-keywords { font-size: 12px; color: var(--ink-muted); overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }
  .no-results { padding: 32px 16px; text-align: center; font-size: 12px; color: var(--ink-muted); }

  /* ── DETAIL PANE ── */
  .detail-pane { overflow-y: auto; padding: 20px 24px; background: var(--bg); }
  .empty-state {
    height: 100%; display: flex; flex-direction: column;
    align-items: center; justify-content: center; gap: 10px;
    color: var(--ink-muted);
  }
  .empty-icon { font-size: 36px; opacity: 0.2; }
  .empty-text { font-size: 12.5px; color: var(--ink-muted); text-align: center; line-height: 1.6; }

  .detail-header {
    display: flex; align-items: flex-start;
    justify-content: space-between; gap: 16px;
    margin-bottom: 16px; padding-bottom: 16px;
    border-bottom: 1px solid var(--border-md);
  }
  .detail-title {
    font-size: 23px; font-weight: 700; color: var(--ink);
    line-height: 1.2; letter-spacing: -0.02em;
  }
  .detail-sys-badge {
    display: inline-flex; align-items: center; gap: 5px;
    font-size: 14px; font-weight: 500; color: var(--ink-muted);
    margin-top: 6px;
  }
  .copy-all-btn {
    flex-shrink: 0;
    display: flex; align-items: center; gap: 6px;
    padding: 7px 13px; border-radius: 8px;
    border: 1px solid var(--border-md);
    background: var(--card);
    color: var(--ink-mid); font-family: var(--mono);
    font-size: 11px; cursor: pointer;
    transition: all 0.15s; white-space: nowrap;
    box-shadow: var(--shadow-sm);
  }
  .copy-all-btn:hover { background: var(--ink); color: var(--card); border-color: var(--ink); }
  .copy-all-btn.copied { background: #16a34a; color: #fff; border-color: #16a34a; }

  .tag-row { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 16px; }
  .tag-pill {
    font-size: 11.5px; padding: 4px 10px; border-radius: 99px;
    background: var(--card); color: var(--ink-muted);
    border: 1px solid var(--border-md);
  }

  .ap-section { margin-bottom: 10px; border-radius: 9px; overflow: hidden; border: 1px solid var(--border-md); }
  .ap-section-header {
    display: flex; align-items: center; justify-content: space-between;
    padding: 7px 13px;
    background: var(--bg-mid);
    border-bottom: 1px solid var(--border-md);
  }
  .ap-section-label {
    font-family: var(--mono); font-size: 10px; font-weight: 700;
    color: var(--ink-muted); letter-spacing: 0.1em; text-transform: uppercase;
  }
  .copy-section-btn {
    display: flex; align-items: center; gap: 4px;
    padding: 3px 8px; border-radius: 4px;
    background: transparent; border: 1px solid var(--border-md);
    color: var(--ink-muted); font-family: var(--mono);
    font-size: 9px; cursor: pointer; transition: all 0.15s;
  }
  .copy-section-btn:hover { background: var(--ink); color: var(--card); border-color: var(--ink); }
  .copy-section-btn.copied { background: #16a34a; color: #fff; border-color: #16a34a; }
  .ap-content {
    padding: 13px; background: var(--card);
    font-family: var(--mono); font-size: 12.5px;
    color: var(--ink-mid); line-height: 1.85;
    white-space: pre-wrap; word-break: break-word;
  }

  /* ── WHITE BOOK SOURCE REFERENCE ── */
  .source-block {
    margin-bottom: 10px;
    border: 1px solid var(--border-md);
    border-radius: 9px; overflow: hidden;
    background: var(--card);
  }
  .source-header {
    display: flex; align-items: center; justify-content: space-between;
    padding: 8px 13px;
    background: var(--ink);
    cursor: pointer; user-select: none;
  }
  .source-header-left {
    display: flex; align-items: center; gap: 8px;
  }
  .source-header-icon { font-size: 12px; color: var(--card); }
  .source-header-title {
    font-family: var(--mono); font-size: 10.5px; font-weight: 700;
    color: var(--card); letter-spacing: 0.08em; text-transform: uppercase;
  }
  .source-page-badge {
    font-family: var(--mono); font-size: 9px; font-weight: 700;
    padding: 2px 8px; border-radius: 99px;
    background: rgba(255,255,255,0.12);
    color: rgba(255,255,255,0.85);
    letter-spacing: 0.05em;
  }
  .source-header-actions { display: flex; align-items: center; gap: 6px; }
  .source-open-pdf-btn {
    display: flex; align-items: center; gap: 5px;
    padding: 4px 10px; border-radius: 6px;
    background: rgba(255,255,255,0.12);
    border: 1px solid rgba(255,255,255,0.2);
    color: rgba(255,255,255,0.9);
    font-family: var(--mono); font-size: 9.5px; font-weight: 700;
    cursor: pointer; transition: all 0.15s; letter-spacing: 0.04em;
    text-transform: uppercase;
  }
  .source-open-pdf-btn:hover {
    background: rgba(255,255,255,0.22);
    border-color: rgba(255,255,255,0.4);
    color: #fff;
  }
  .source-expand-icon {
    font-size: 10px; color: rgba(255,255,255,0.5);
    transition: transform 0.2s; padding: 4px; cursor: pointer;
  }
  .source-expand-icon.open { transform: rotate(180deg); }

  .source-body { padding: 12px 13px; background: var(--card); }
  .source-meta-row {
    display: flex; flex-wrap: wrap; gap: 10px;
    margin-bottom: 12px; padding-bottom: 10px;
    border-bottom: 1px solid var(--border);
  }
  .source-meta-item { display: flex; flex-direction: column; gap: 2px; }
  .source-meta-label {
    font-family: var(--mono); font-size: 10px; font-weight: 700;
    color: var(--ink-muted); letter-spacing: 0.06em; text-transform: uppercase;
  }
  .source-meta-value { font-size: 13.5px; font-weight: 600; color: var(--ink); }
  .source-facts-label {
    font-family: var(--mono); font-size: 10px; font-weight: 700;
    color: var(--ink-muted); letter-spacing: 0.08em; text-transform: uppercase;
    margin-bottom: 8px;
  }
  .source-facts-list { display: flex; flex-direction: column; gap: 6px; }
  .source-fact {
    display: flex; align-items: flex-start; gap: 8px;
    padding: 8px 10px; border-radius: 6px;
    background: var(--bg); border: 1px solid var(--border);
  }
  .source-fact-bullet {
    font-family: var(--mono); font-size: 10px; font-weight: 700;
    color: var(--ink-muted); flex-shrink: 0; margin-top: 1px;
  }
  .source-fact-text { font-size: 13px; color: var(--ink-mid); line-height: 1.6; }
  .source-disclaimer {
    margin-top: 10px; padding: 7px 10px; border-radius: 6px;
    background: #fffbeb; border: 1px solid #fcd34d;
    font-size: 11.5px; color: #92400e; line-height: 1.55;
  }

  /* result card page badge */
  .rc-page-badge {
    display: inline-flex; align-items: center; gap: 4px;
    font-family: var(--mono); font-size: 9px;
    color: var(--ink-muted); margin-top: 4px;
  }

  /* ── SUMMARIZE ── */
  .summarize-btn {
    flex-shrink: 0;
    display: flex; align-items: center; gap: 6px;
    padding: 7px 13px; border-radius: 8px;
    border: 1px solid var(--border-md);
    background: var(--bg);
    color: var(--ink-mid); font-family: var(--mono);
    font-size: 11px; cursor: pointer;
    transition: all 0.15s; white-space: nowrap;
    box-shadow: var(--shadow-sm);
  }
  .summarize-btn:hover:not(:disabled) { background: var(--ink); color: var(--card); border-color: var(--ink); }
  .summarize-btn:disabled { opacity: 0.5; cursor: not-allowed; }
  .summarize-btn.active { background: var(--ink); color: var(--card); border-color: var(--ink); }

  .summary-block {
    margin-bottom: 12px;
    border: 1.5px solid var(--ink);
    border-radius: 10px; overflow: hidden;
    animation: summaryFadeIn 0.2s ease;
  }
  @keyframes summaryFadeIn { from { opacity: 0; transform: translateY(-4px); } to { opacity: 1; transform: translateY(0); } }

  .summary-block-header {
    display: flex; align-items: center; justify-content: space-between;
    padding: 8px 13px;
    background: var(--ink);
  }
  .summary-block-title {
    display: flex; align-items: center; gap: 7px;
    font-family: var(--mono); font-size: 10.5px; font-weight: 700;
    color: var(--card); letter-spacing: 0.08em; text-transform: uppercase;
  }
  .summary-block-actions { display: flex; align-items: center; gap: 6px; }
  .summary-copy-btn {
    display: flex; align-items: center; gap: 5px;
    padding: 4px 10px; border-radius: 6px;
    background: rgba(255,255,255,0.12);
    border: 1px solid rgba(255,255,255,0.2);
    color: rgba(255,255,255,0.9);
    font-family: var(--mono); font-size: 9.5px; font-weight: 700;
    cursor: pointer; transition: all 0.15s;
  }
  .summary-copy-btn:hover { background: rgba(255,255,255,0.22); color: #fff; }
  .summary-copy-btn.copied { background: #16a34a; border-color: #16a34a; color: #fff; }
  .summary-dismiss-btn {
    width: 24px; height: 24px; border-radius: 6px;
    background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15);
    color: rgba(255,255,255,0.6); font-size: 12px;
    cursor: pointer; display: flex; align-items: center;
    justify-content: center; transition: all 0.15s;
  }
  .summary-dismiss-btn:hover { background: rgba(255,255,255,0.18); color: #fff; }

  .summary-content {
    padding: 14px 16px;
    background: var(--card);
    font-family: var(--mono); font-size: 12.5px;
    color: var(--ink); line-height: 1.9;
    white-space: pre-wrap; word-break: break-word;
  }
  .summary-hint {
    padding: 6px 13px 8px;
    background: var(--bg);
    border-top: 1px solid var(--border);
    font-size: 11px; color: var(--ink-muted);
    font-style: italic;
  }

  .summary-loading {
    display: flex; align-items: center; gap: 10px;
    padding: 14px 16px;
    background: var(--card);
  }
  .summary-loading-dots { display: flex; gap: 4px; }
  .summary-loading-dots span {
    width: 5px; height: 5px; border-radius: 99px;
    background: var(--ink-muted); opacity: 0.35;
    animation: pulse 1.2s ease-in-out infinite;
  }
  .summary-loading-dots span:nth-child(2) { animation-delay: 0.2s; }
  .summary-loading-dots span:nth-child(3) { animation-delay: 0.4s; }
  .summary-loading-text { font-size: 12px; color: var(--ink-muted); font-style: italic; }

  /* ── FLOATING SYNAPSE BUTTON ── */
  .ddx-fab {
    position: absolute; bottom: 24px; right: 24px; z-index: 20;
    display: flex; align-items: center; gap: 8px;
    padding: 9px 16px; border-radius: 99px;
    background: var(--ink); border: none; cursor: pointer;
    box-shadow: 0 4px 20px rgba(0,0,0,0.18);
    transition: all 0.2s;
    font-family: var(--sans); font-size: 12.5px; font-weight: 600;
    color: var(--card);
  }
  .ddx-fab:hover { background: var(--ink-mid); box-shadow: 0 6px 28px rgba(0,0,0,0.22); transform: translateY(-1px); }
  .ddx-fab.open {
    background: var(--bg-mid); color: var(--ink-muted);
    border: 1px solid var(--border-md); box-shadow: none;
  }
  .ddx-fab.open:hover { background: var(--card); color: var(--ink); }
  .fab-icon { font-size: 14px; }

  /* ── SYNAPSE POP-OUT ── */
  .ddx-popout {
    position: absolute; bottom: 0; right: 0;
    width: 400px; height: 540px; z-index: 19;
    display: flex; flex-direction: column;
    background: var(--card);
    border: 1px solid var(--border-md); border-bottom: none;
    border-radius: 14px 14px 0 0;
    box-shadow: var(--shadow-lg);
    overflow: hidden;
    transform: translateY(100%);
    transition: transform 0.28s cubic-bezier(0.32,0.72,0,1);
    pointer-events: none;
  }
  .ddx-popout.visible { transform: translateY(0); pointer-events: all; }

  .ddx-panel-header {
    display: flex; align-items: center; gap: 10px;
    padding: 12px 14px; border-bottom: 1px solid var(--border-md);
    flex-shrink: 0; background: var(--card);
  }
  .ddx-panel-avatar {
    width: 26px; height: 26px; border-radius: 8px;
    background: var(--ink); display: flex; align-items: center;
    justify-content: center; font-size: 13px; color: var(--card); flex-shrink: 0;
  }
  .ddx-panel-title { flex: 1; font-size: 13px; font-weight: 700; color: var(--ink); letter-spacing: -0.01em; }
  .ddx-panel-subtitle { font-size: 9.5px; color: var(--ink-muted); margin-top: 1px; }
  .ddx-panel-actions { display: flex; align-items: center; gap: 5px; }
  .ddx-panel-btn {
    width: 26px; height: 26px; border-radius: 6px;
    background: transparent; border: 1px solid var(--border-md);
    color: var(--ink-muted); cursor: pointer; font-size: 12px;
    display: flex; align-items: center; justify-content: center; transition: all 0.15s;
  }
  .ddx-panel-btn:hover { background: var(--bg-mid); color: var(--ink); }

  .ddx-pane { display: flex; flex-direction: column; flex: 1; overflow: hidden; }

  .ddx-welcome {
    flex: 1; display: flex; flex-direction: column;
    align-items: flex-start; gap: 11px;
    padding: 16px 14px; overflow-y: auto;
  }
  .ddx-welcome-title { font-size: 13.5px; font-weight: 700; color: var(--ink); }
  .ddx-welcome-sub { font-size: 11.5px; color: var(--ink-muted); line-height: 1.55; }
  .ddx-chips-label {
    font-family: var(--mono); font-size: 9px; color: var(--ink-subtle);
    letter-spacing: 0.1em; text-transform: uppercase;
  }
  .ddx-chips-grid { display: flex; flex-direction: column; gap: 5px; width: 100%; }
  .ddx-chip {
    padding: 8px 12px; border-radius: 8px;
    background: var(--bg); border: 1px solid var(--border-md);
    color: var(--ink-muted); font-size: 11px; line-height: 1.4;
    cursor: pointer; transition: all 0.14s; text-align: left; font-family: var(--sans);
  }
  .ddx-chip:hover { background: var(--bg-mid); color: var(--ink); border-color: var(--ink-subtle); }

  .ddx-thread { flex: 1; overflow-y: auto; padding: 13px; display: flex; flex-direction: column; gap: 11px; }

  .msg-user {
    align-self: flex-end; max-width: 82%;
    background: var(--ink); color: var(--card);
    padding: 9px 13px; border-radius: 14px 14px 4px 14px;
    font-size: 12.5px; line-height: 1.5; font-weight: 500; word-break: break-word;
  }
  .msg-ai { align-self: flex-start; width: 100%; display: flex; flex-direction: column; gap: 7px; }
  .msg-ai-header {
    display: flex; align-items: center; gap: 6px;
    font-size: 10px; font-weight: 600; color: var(--ink-muted);
  }
  .ai-avatar {
    width: 20px; height: 20px; border-radius: 5px;
    background: var(--ink); display: flex; align-items: center;
    justify-content: center; font-size: 10px; color: var(--card); flex-shrink: 0;
  }
  .ddx-summary-box {
    padding: 9px 12px; background: var(--bg);
    border: 1px solid var(--border-md); border-radius: 8px;
    font-size: 11.5px; color: var(--ink-mid); line-height: 1.5;
  }
  .ddx-summary-box strong { color: var(--ink); }

  .msg-loading {
    align-self: flex-start; display: flex; align-items: center; gap: 8px;
    padding: 9px 13px; background: var(--bg);
    border: 1px solid var(--border-md); border-radius: 14px 14px 14px 4px;
  }
  .dot-pulse { display: flex; gap: 4px; align-items: center; }
  .dot-pulse span {
    width: 5px; height: 5px; border-radius: 99px;
    background: var(--ink-muted); opacity: 0.4;
    animation: pulse 1.2s ease-in-out infinite;
  }
  .dot-pulse span:nth-child(2) { animation-delay: 0.2s; }
  .dot-pulse span:nth-child(3) { animation-delay: 0.4s; }
  @keyframes pulse {
    0%, 80%, 100% { opacity: 0.2; transform: scale(0.85); }
    40% { opacity: 0.8; transform: scale(1); }
  }
  .loading-label { font-size: 10px; color: var(--ink-muted); }
  .msg-error {
    padding: 9px 12px; border-radius: 8px;
    background: #fef2f2; border: 1px solid #fecaca; color: #dc2626; font-size: 11.5px;
  }

  .ddx-item { border: 1px solid var(--border-md); border-radius: 8px; overflow: hidden; background: var(--card); }
  .ddx-item-header {
    display: flex; align-items: center; gap: 8px;
    padding: 8px 11px; background: var(--bg);
    border-bottom: 1px solid var(--border-md);
  }
  .ddx-rank {
    font-family: var(--mono); font-size: 10px; font-weight: 700;
    width: 20px; height: 20px; border-radius: 5px;
    display: flex; align-items: center; justify-content: center;
    background: var(--card); border: 1px solid var(--border-md);
    color: var(--ink-muted); flex-shrink: 0;
  }
  .ddx-item-title { flex: 1; font-size: 12px; font-weight: 600; color: var(--ink); }
  .ddx-urgency {
    font-family: var(--mono); font-size: 8.5px;
    padding: 2px 7px; border-radius: 99px; border: 1px solid;
    letter-spacing: 0.05em; font-weight: 700;
  }
  .urgency-critical { color: #dc2626; border-color: #fca5a5; background: #fef2f2; }
  .urgency-high     { color: #d97706; border-color: #fcd34d; background: #fffbeb; }
  .urgency-moderate { color: #2563eb; border-color: #93c5fd; background: #eff6ff; }
  .urgency-low      { color: #16a34a; border-color: #86efac; background: #f0fdf4; }
  .ddx-item-body { padding: 9px 11px; }
  .ddx-reasoning { font-size: 11.5px; color: var(--ink-mid); line-height: 1.55; margin-bottom: 7px; }
  .ddx-features { display: flex; flex-wrap: wrap; gap: 4px; margin-bottom: 7px; }
  .ddx-feature-tag {
    font-size: 10px; padding: 2px 7px; border-radius: 4px;
    background: var(--bg-mid); color: var(--ink-muted); border: 1px solid var(--border-md);
  }
  .ddx-template-btn {
    display: inline-flex; align-items: center; gap: 5px;
    padding: 5px 10px; border-radius: 6px;
    background: var(--ink); color: var(--card);
    border: none; font-size: 10px; font-family: var(--sans); font-weight: 600;
    cursor: pointer; transition: all 0.15s;
  }
  .ddx-template-btn:hover { background: var(--ink-mid); }
  .ddx-no-template { font-size: 10px; color: var(--ink-subtle); }

  .ddx-input-bar {
    flex-shrink: 0; padding: 10px 12px 12px;
    border-top: 1px solid var(--border-md); background: var(--card);
  }
  .ddx-input-wrap {
    display: flex; align-items: flex-end; gap: 7px;
    background: var(--bg); border: 1px solid var(--border-md);
    border-radius: 11px; padding: 7px 7px 7px 12px;
    transition: border-color 0.2s;
  }
  .ddx-input-wrap:focus-within { border-color: var(--ink-subtle); }
  .ddx-chat-input {
    flex: 1; background: transparent; border: none;
    color: var(--ink); font-family: var(--sans); font-size: 12.5px; line-height: 1.5;
    resize: none; outline: none; min-height: 20px; max-height: 90px;
    overflow-y: auto; padding: 2px 0;
  }
  .ddx-chat-input::placeholder { color: var(--ink-subtle); }
  .ddx-send-btn {
    flex-shrink: 0; width: 28px; height: 28px; border-radius: 8px;
    background: var(--ink); border: none; color: var(--card);
    cursor: pointer; display: flex; align-items: center;
    justify-content: center; font-size: 13px;
    transition: all 0.15s; align-self: flex-end;
  }
  .ddx-send-btn:hover:not(:disabled) { background: var(--ink-mid); }
  .ddx-send-btn:disabled { opacity: 0.3; cursor: not-allowed; }
  .ddx-input-hint {
    font-size: 9px; color: var(--ink-subtle); margin-top: 5px;
    padding: 0 2px; display: flex; justify-content: space-between;
  }
  .ddx-new-chat-btn {
    font-size: 9px; color: var(--ink-subtle); background: none;
    border: none; cursor: pointer; transition: color 0.15s;
  }
  .ddx-new-chat-btn:hover { color: var(--ink-muted); }

  /* ── PDF TOAST ─────────────────────────────────────── */
  .pdf-toast {
    position: fixed;
    bottom: 88px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--ink);
    color: var(--cream);
    padding: 10px 16px;
    border-radius: 10px;
    font-size: 12.5px;
    line-height: 1.5;
    max-width: 340px;
    width: max-content;
    box-shadow: 0 4px 20px rgba(0,0,0,0.25);
    z-index: 9999;
    display: flex;
    align-items: center;
    gap: 10px;
    animation: toastIn 0.2s ease;
  }
  .pdf-toast a {
    color: #a8d5ff;
    text-decoration: underline;
    font-weight: 600;
  }
  .pdf-toast-dismiss {
    background: none;
    border: none;
    color: rgba(255,255,255,0.5);
    cursor: pointer;
    font-size: 14px;
    padding: 0;
    line-height: 1;
    flex-shrink: 0;
  }
  .pdf-toast-dismiss:hover { color: #fff; }
  @keyframes toastIn {
    from { opacity: 0; transform: translateX(-50%) translateY(8px); }
    to   { opacity: 1; transform: translateX(-50%) translateY(0); }
  }
`,m=[{id:`all`,label:`All Topics`,color:`#94a3b8`},{id:`cv`,label:`Cardiology`,color:`#ef4444`},{id:`pulm`,label:`Pulm / Critical Care`,color:`#3b82f6`},{id:`gi`,label:`Gastroenterology`,color:`#f59e0b`},{id:`neph`,label:`Nephrology`,color:`#8b5cf6`},{id:`id`,label:`Infectious Disease`,color:`#10b981`},{id:`endo`,label:`Endocrinology`,color:`#f97316`},{id:`neuro`,label:`Neurology / Psych`,color:`#06b6d4`},{id:`heme`,label:`Hematology`,color:`#ec4899`},{id:`onc`,label:`Oncology`,color:`#a16207`},{id:`rheum`,label:`Rheumatology`,color:`#0891b2`}],h=[{id:`cap`,system:`id`,title:`Community Acquired Pneumonia (CAP)`,keywords:[`pna`,`pneumonia`,`cap`,`infiltrate`,`cough`,`fever`,`hypoxemia`,`leukocytosis`],source:{chapter:`Infectious Disease`,section:`Community-Acquired Pneumonia (CAP)`,pages:`106–107`,authors:`Alexandra Miller, Amanda Ward`,keyFacts:[`Severe CAP (ATS/IDSA): 1 major criterion (vasopressors or MV) OR ≥3 minor criteria (RR>30, PaO₂/FiO₂<250, multilobar infiltrates, confusion, BUN>19, WBC<4k, plt<100k, T<36°C, hypotension)`,`CURB-65: 1 point each for Confusion, Urea>19, RR≥30, BP<90/60, Age≥65 — Score 0-1: outpatient; 2: inpatient; ≥3: consider ICU`,`Empiric non-severe CAP: ceftriaxone 1g IV q24h + azithromycin 500mg q24h`,`MRSA nares swab: NPV ~98% — negative result supports de-escalating MRSA coverage at 48-72h`,`Blood cultures: obtain ONLY if severe CAP, empiric MRSA/PsA coverage, prior MRSA/PsA, or IV abx within 90d`]},assessment:`#Community Acquired Pneumonia (CAP)
[NEW ONSET / WORSENING] pneumonia consistent with CAP based on new infiltrate on chest imaging with associated [fever / leukocytosis / productive cough / hypoxemia].
CURB-65 score: ___  |  PSI Class: ___  |  Severity: [ ] Non-Severe  [ ] Severe CAP (ATS/IDSA)
Severe CAP if: 1 Major criterion (vasopressors or mechanical ventilation) OR ≥3 Minor criteria (RR>30, P:F<250, multilobar infiltrates, confusion, BUN>19, WBC<4, plt<100, T<36°C, hypotension requiring aggressive IVF)`,ddx:`• S. pneumoniae (most common bacterial)
• Respiratory viruses (influenza, SARS-CoV-2, RSV)
• S. aureus / MRSA (severe CAP)
• Legionella (consider: hyponatremia, fever, diarrhea, recent travel)
• H. influenzae, GNRs
• Aspiration pneumonitis vs. pneumonia
• Non-infectious: pulmonary edema, ARDS, PE, malignancy`,workup:`• CXR (PA/lateral) — confirm infiltrate; CT chest if CXR non-diagnostic or concern for empyema
• CBC with diff, BMP, LFTs
• Blood cultures x2 (obtain if: severe CAP, empiric MRSA/PsA coverage, prior MRSA/PsA, IV abx within 90d)
• Sputum Gram stain + culture (obtain if: severe CAP or resistance risk; adequate if >25 PMN and <10 squamous cells)
• Procalcitonin
• Legionella urine antigen (check if: severe CAP or recent travel/exposure)
• Streptococcal urine antigen (consider in severe CAP)
• MRSA nasal swab (NPV ~98%; negative → consider de-escalating MRSA coverage)
• Influenza testing (seasonally); treat with oseltamivir if positive
• SpO2 and ABG/VBG if hypoxemic or clinical deterioration`,management:`NON-SEVERE CAP (Inpatient — no MRSA/PsA risk factors):
• Ceftriaxone 1g IV q24h + Azithromycin 500mg PO/IV q24h
• If atypical organism suspected or monotherapy: Respiratory fluoroquinolone (levofloxacin 750mg IV/PO q24h)
• PCN allergy: respiratory FLQ

SEVERE CAP (No MRSA/PsA risk factors):
• Ceftriaxone 1-2g IV q24h + Azithromycin 500mg IV q24h OR respiratory FLQ
• Duration: typically 5 days; can extend based on clinical response

MRSA risk factors present (severe CAP, previous MRSA, IV abx within 90d):
• Add vancomycin OR linezolid

PsA risk factors present:
• Add anti-pseudomonal beta-lactam (pip-tazo, cefepime, ceftazidime, meropenem)

Supportive:
• Supplemental O2; target SpO2 ≥92-94%
• IVF if dehydrated; ambulation when clinically appropriate
• DVT prophylaxis
• Smoking cessation counseling`,monitoring:`• Fever curve, WBC trend, SpO2 daily
• Repeat CXR if clinical deterioration or lack of improvement at 48-72h
• Monitor procalcitonin trend to guide antibiotic duration
• MRSA nasal swab result → de-escalate if negative at 48-72h
• Blood/sputum culture results → narrow antibiotic therapy if pathogen identified`,disposition:`• Outpatient: CURB-65 0-1 or PSI Class I-II (no severe criteria)
• Inpatient/floor: CURB-65 2 or PSI Class III-IV
• ICU/stepdown: Severe CAP (≥3 minor criteria or ≥1 major criterion)
• Discharge criteria: afebrile, tolerating PO, SpO2 ≥92% on room air, clinically improving`},{id:`copd-exac`,system:`pulm`,title:`COPD Exacerbation (AECOPD)`,keywords:[`copd`,`exacerbation`,`wheezing`,`dyspnea`,`hypercapnia`,`obstructive`,`bronchitis`,`aecopd`],source:{chapter:`Pulmonary & Critical Care`,section:`COPD Exacerbation`,pages:`44–45`,authors:`Lauren Nguyen`,keyFacts:[`NIV/BiPAP indications: pH <7.35 + PaCO₂ >45, RR >25, or moderate-severe dyspnea — reduces intubation rate, mortality, and ICU LOS`,`Steroids: prednisone 40mg PO qday ×5d — no benefit to longer courses; equivalent to IV methylprednisolone`,`O₂ target: SpO₂ 88-92% — avoid excess O₂ (risk of hypercapnic worsening via Haldane effect)`,`Antibiotics: only if purulent sputum, infectious trigger, or pneumonia — 5-day course`,`Short-acting albuterol + ipratropium: first-line bronchodilator combination for AECOPD`]},assessment:`#COPD Exacerbation (AECOPD)
Acute exacerbation of COPD presenting with [increased dyspnea / increased sputum production / change in sputum color / worsening wheeze].
Known COPD: [ ] Yes (GOLD Grade ___, GOLD Group ___) [ ] No/Unknown
Home inhalers: ___   Home O2: [ ] Yes ___L  [ ] No
Baseline SpO2: ___  ABG if obtained: pH ___ / PaCO2 ___ / PaO2 ___`,ddx:`• Infectious trigger (most common: viral URI, bacterial bronchitis, PNA)
• Pneumothorax
• Pulmonary embolism
• Acute heart failure / ADHF
• Cardiac arrhythmia
• Medication nonadherence
• Pneumonia (CAP, HAP)
• De novo diagnosis of obstructive lung disease (asthma, first exacerbation)`,workup:`• CXR (PA/lateral): r/o pneumothorax, PNA, ADHF
• SpO2, ABG/VBG (especially if SpO2 <92% or suspected hypercapnic failure)
• CBC, BMP, BNP/NT-proBNP (if concern for ADHF)
• Sputum culture if purulent change or concern for pneumonia
• ECG (r/o arrhythmia, RV strain, cor pulmonale)
• CT chest/PE protocol if high clinical suspicion for PE
• Blood cultures if fever, systemic signs, or consolidation on imaging
• Influenza/viral respiratory panel (seasonally)`,management:`BRONCHODILATORS (first-line, start immediately):
• Short-acting albuterol (2.5mg nebulized q20min x3, then q2-4h PRN) AND
• Ipratropium (0.5mg nebulized q6h)
• Can space to MDI with spacer once stable

STEROIDS:
• Prednisone 40mg PO qday x5d (equivalent to IV methylprednisolone; no benefit to longer courses)
• IV methylprednisolone 40mg q24h if unable to take PO

ANTIBIOTICS (if purulent sputum, clear infectious trigger, or pneumonia):
• Mild/moderate: azithromycin 500mg PO x1 then 250mg q24h x4d, OR doxycycline 100mg BID, OR amoxicillin-clavulanate
• Severe/MDR risk: respiratory FLQ (levofloxacin 750mg IV/PO q24h) ± expanded gram-negative coverage
• Duration: typically 5 days

OXYGEN:
• Target SpO2 88-92% (avoid excessive O2 — risk of hypercapnic worsening)
• High-flow NC or simple facemask; titrate carefully

NONINVASIVE VENTILATION (NIV/BiPAP):
• Indications: moderate-severe respiratory acidosis (pH <7.35, PaCO2 >45), RR >25, moderate-severe dyspnea
• Start: IPAP 10-12 / EPAP 4-5 cmH2O; titrate to comfort and CO2 clearance
• Reduces intubation rate, mortality, and ICU LOS

INTUBATION (if NIV fails or contraindicated):
• Consider if: progressive hypercapnic acidosis (pH <7.25), AMS, hemodynamic instability, inability to protect airway`,monitoring:`• Serial SpO2 on O2 therapy; repeat ABG/VBG if hypercapnic failure
• Hourly bronchodilator response for first 4-6h
• Monitor for hyperkalemia with frequent albuterol dosing
• Peak flow or clinical response to bronchodilators
• Steroid glucose monitoring (fingerstick BG q6h)`,disposition:`• ICU: pH <7.25, intubation, hemodynamic instability, NIV failure
• SDU/stepdown: requires NIV, borderline hypercapnia, comorbidities
• Floor: moderate exacerbation, responsive to initial treatment
• Discharge: if SpO2 ≥88-92% on home O2 (or room air), tolerating PO meds, minimal bronchospasm at rest`},{id:`hf-exac`,system:`cv`,title:`Heart Failure Exacerbation (ADHF)`,keywords:[`chf`,`heart failure`,`adhf`,`fluid overload`,`dyspnea`,`edema`,`bnp`,`hfref`,`hfpef`,`orthopnea`],source:{chapter:`Cardiology`,section:`Heart Failure`,pages:`22–24`,authors:`Frederick Lang, Emily Manning`,keyFacts:[`NT-proBNP: ADHF unlikely if <300; likely if >450 (age <50), >900 (age 50-75), >1800 (age >75)`,`Diuresis: start 2-2.5× home oral furosemide dose IV; goal UOP 0.5-1 mL/kg/h, net negative 1-2L/day`,`GDMT for HFrEF (LVEF ≤40%): ACEi/ARB/ARNI + BB + MRA + SGLT-2 inhibitor — all 4 pillars`,`IV iron if ferritin <100 OR ferritin <300 with TSAT <20% — improves outcomes in HFrEF`,`Refractory diuresis: add metolazone 2.5-5mg PO 30 min before loop diuretic`]},assessment:`#Acute Decompensated Heart Failure (ADHF)
Presenting with acute decompensated heart failure — [warm/cold] and [wet/dry] profile.
Known HF: [ ] Yes (EF ___, last TTE ___, last NTproBNP ___)  [ ] New diagnosis
Decompensation trigger (FAILURE mnemonic):
[ ] Forgot meds   [ ] Arrhythmia/Anemia/Afterload   [ ] Infection/Ischemia
[ ] Lifestyle (dietary Na indiscretion)   [ ] Upregulation (pregnancy, hyperthyroid)
[ ] Renal failure  [ ] Embolism
NT-proBNP: ___  (ADHF unlikely if <300; likely if >450, or >900 if age >50)`,ddx:`• ADHF with preserved EF (HFpEF) vs. reduced EF (HFrEF)
• Cardiac: new arrhythmia (AF with RVR), ACS, pericardial disease
• Acute valvular pathology (new MR, AR)
• Non-cardiac: renal failure, ARDS, transfusion-related, hypoalbuminemia
• Pulmonary embolism (if predominantly right-sided)
• Hypertensive emergency with flash pulmonary edema`,workup:`• ECG: r/o ischemia, arrhythmia, LBBB
• CXR: pulmonary vascular congestion, pleural effusions, cardiomegaly
• BMP, CBC, magnesium, phosphorus
• Troponin (rule out ACS as trigger)
• NT-proBNP
• TTE: assess EF, wall motion, valves, pericardial effusion
  → Initiate if not obtained in prior 3 months or new decompensation
• Urinalysis and urine electrolytes (baseline before diuresis)
• TSH, iron studies with TSAT and ferritin
• Lipid panel, HbA1c if ischemic CM workup needed
• Non-ischemic CM workup if new dx: iron studies, SPEP/UPEP, TSH, HIV, ANA`,management:`DIURESIS (primary treatment for volume overload):
• If diuretic-naive: IV furosemide 20-40mg IV
• If on home diuretics: start 2-2.5x home dose IV (e.g., furosemide 40mg PO → give furosemide 80-100mg IV)
• Goal UOP 0.5-1 mL/kg/h; aim for 1-2L net negative/day
• Refractory diuresis: add metolazone 2.5-5mg PO 30 min before loop diuretic
• Monitor BMP q12-24h; replete K+ and Mg2+ as needed
• Admission orders: telemetry, 2g Na-restricted diet, daily standing weights, strict I&Os, electrolyte repletion scales

GDMT OPTIMIZATION (for HFrEF, LVEF ≤40%):
• Continue/initiate as hemodynamics allow:
  - ACEi/ARB/ARNI (sacubitril-valsartan preferred over ACEi if tolerated)
  - Beta-blocker (hold if decompensated; restart/uptitrate before discharge)
  - MRA (spironolactone or eplerenone)
  - SGLT-2 inhibitor (dapagliflozin or empagliflozin)
• Iron deficiency: IV iron if ferritin <100 or ferritin <300 + TSAT <20%

AVOID: CCB (especially non-dihydropyridines), NSAIDs, flecainide

CARDIOGENIC SHOCK (if present):
• Norepinephrine: first-line vasopressor (target MAP >60 mmHg)
• Dobutamine: inodilator if hypoperfusion without shock
• Early cardiology consult; consider right heart catheterization
• Activate cath lab if concern for ischemic etiology (r/o ACS)`,monitoring:`• Daily weights (standing); strict I&Os (target net negative 1-2L/day)
• BMP every 12-24h (K+, Cr, BUN — watch for diuretic-induced AKI and hypokalemia)
• Telemetry (arrhythmia monitoring)
• Repeat NT-proBNP at discharge for comparison
• Fingerstick glucose monitoring if on high-dose steroids or diabetic`,disposition:`• SDU admission: EF <25%, NT-proBNP ≥2500, arrhythmia-induced HF, hemodynamic compromise
• ICU/CCU: cardiogenic shock, mechanical ventilation, refractory ADHF
• Discharge planning: document discharge weight and NT-proBNP, arrange HF Transitions Clinic follow-up, cardiac rehab referral, explicit instructions for oral diuretic dosing and rescue doses`},{id:`afib-rvr`,system:`cv`,title:`Atrial Fibrillation with RVR`,keywords:[`afib`,`atrial fibrillation`,`rvr`,`rapid ventricular response`,`arrhythmia`,`palpitations`,`irregular`],source:{chapter:`Cardiology`,section:`Atrial Fibrillation & Flutter`,pages:`10–11`,authors:`Yichi Zhang`,keyFacts:[`IV metoprolol: 2.5-5mg over 2 min, repeat q5 min, max 15mg; IV diltiazem 0.25 mg/kg over 2 min (AVOID if LVEF unknown or HFrEF)`,`AF >48h or unknown: anticoagulate ≥3 weeks before cardioversion OR TEE to exclude LA thrombus; post-CV anticoagulate ≥4 weeks regardless of CHA₂DS₂-VASc score`,`Long-term AC: CHA₂DS₂-VASc ≥2 (males) or ≥3 (females) → DOAC preferred over warfarin`,`Pre-excited AF (WPW delta wave): AVOID adenosine, diltiazem, digoxin, IV amiodarone — use procainamide`,`Correct K+ >4.0 and Mg2+ >2.0 before cardioversion or antiarrhythmics`]},assessment:`#Atrial Fibrillation with Rapid Ventricular Response (AF with RVR)
New-onset [or known chronic/paroxysmal] AF with ventricular rate ___ bpm.
Duration: [ ] <48h  [ ] >48h  [ ] Unknown
Hemodynamically: [ ] Stable  [ ] Unstable (hypotension / AMS / ischemia / pulmonary edema)
CHA₂DS₂-VASc score: ___   HAS-BLED score: ___
Precipitants assessed: [ ] Infection  [ ] Ischemia  [ ] Surgery  [ ] PE  [ ] Thyrotoxicosis  [ ] EtOH  [ ] Acute pulmonary disease`,ddx:`• Primary AF (paroxysmal, persistent, long-standing persistent)
• AF with underlying precipitant: sepsis/infection, ACS, thyrotoxicosis, PE, acute pulmonary disease, post-operative state
• AFL (atrial flutter) with variable block
• MAT (multifocal atrial tachycardia) — especially in COPD
• Pre-excited AF (WPW) — AVOID AV nodal agents`,workup:`• ECG: confirm AF, assess for pre-excitation (delta waves), ischemic changes, QTc
• BMP (K+, Mg2+ — correct before cardioversion or antiarrhythmics)
• CBC, TFTs, LFTs, coagulation studies
• Troponin (if concern for ischemic trigger or hemodynamic compromise)
• NT-proBNP (if concern for HF trigger or decompensation)
• CXR (r/o pulmonary process, HF)
• TTE: LV function, LA size, valves, pericardial effusion (obtain if new CM workup needed or prior EF unknown)
• TEE or CT-PV (pulmonary vein CT): if cardioversion planned and AF duration >48h or unknown`,management:`HEMODYNAMICALLY UNSTABLE (hypotension, AMS, ischemia, pulmonary edema):
• Immediate synchronized electrical cardioversion
  - Sedate: dilaudid 1-2mg + lorazepam 2mg (or procedural sedation if available)
  - Start at 150J biphasic; increase energy if NSR not achieved
• Anticoagulation status: consider risk/benefit; cardioversion urgent in unstable patients

RATE CONTROL (hemodynamically stable):
• IV metoprolol: 2.5-5mg IV push over 2 min; repeat q5 min; max 15mg
• IV diltiazem: 0.25 mg/kg IV bolus over 2 min → gtt (AVOID if LVEF unknown or HFrEF)
• Oral BB preferred once IV rate controlled
• Amiodarone: if low EF (HFrEF) or HF; 150mg IV over 10 min → infusion

RHYTHM CONTROL (pharmacologic cardioversion — higher success if AF onset <7d):
• Elective DCCV: start 150J biphasic
• Chemical: amiodarone IV (for persistent/HFrEF); consult cardiology

ANTICOAGULATION:
• AF <48h onset: may cardiovert without anticoagulation (or after anticoagulation)
• AF >48h or unknown: anticoagulate ≥3 weeks prior to cardioversion OR TEE/CT-PV to exclude LA thrombus
• Post-cardioversion: anticoagulate ≥4 weeks regardless of CHA₂DS₂-VASc (risk of atrial stunning)
• Long-term AC: CHA₂DS₂-VASc ≥2 (males) or ≥3 (females) → DOAC preferred over warfarin

ELECTROLYTES: Correct K+ >4.0 and Mg2+ >2.0 before cardioversion or antiarrhythmics`,monitoring:`• Continuous telemetry with ventricular rate monitoring
• Serial vital signs and hemodynamic assessment
• Daily BMP (K+, Mg2+) — maintain electrolytes in therapeutic range
• QTc monitoring if initiating antiarrhythmic therapy
• If on digoxin: check levels; correct low K+ and Mg2+`,disposition:`• ICU/stepdown: hemodynamic instability, cardiogenic shock, refractory RVR, acute decompensated HF
• Cardiology consult for: new AF, cardioversion planning, initiation of rhythm control agents, complex anticoagulation decisions
• Outpatient follow-up: Holter monitor, repeat TTE if new CM, anticoagulation management`},{id:`acs`,system:`cv`,title:`Acute Coronary Syndrome (NSTEMI/STEMI)`,keywords:[`acs`,`nstemi`,`stemi`,`troponin`,`chest pain`,`myocardial infarction`,`mi`,`st elevation`],source:{chapter:`Cardiology`,section:`Acute Coronary Syndrome`,pages:`14–15`,authors:`Emily Manning`,keyFacts:[`STEMI: new ≥1mm STE in ≥2 contiguous leads (V2-V3: >2.5mm men <40, >2mm men >40, >1.5mm women) OR new LBBB`,`Door-to-balloon goal: <90 min for primary PCI; if PCI unavailable within 120 min → fibrinolysis`,`Type 2 MI: supply-demand mismatch (sepsis, arrhythmia, anemia, surgery) — must have clear precipitating factor; if not, treat as Type 1`,`Early invasive strategy (cath <24h): troponin elevation, new ischemic ECG changes, GRACE ≥140, hemodynamic instability`,`hsTnT rule-in (onset ≥3h): ≥52ng/L (F) or ≥34ng/L (M) at 0h AND ≥6ng/L rise at 1h`]},assessment:`#Acute Coronary Syndrome — [STEMI / NSTEMI / UA]
Troponin: ___  (peak ___). ECG: [STE / STD / TWI / LBBB / normal]
Onset: ___  |  TIMI Risk Score: ___  |  GRACE Score: ___
STEMI criteria: ≥1mm STE in ≥2 contiguous leads (V2-V3: >2.5mm M<40, >2mm M>40, >1.5mm F) OR new LBBB
Type 2 MI: consider if clear precipitating factor (sepsis, arrhythmia, anemia, severe HTN, HF, surgery)`,ddx:`• STEMI (ST elevation myocardial infarction) — activate cath lab
• NSTEMI (non-ST elevation MI)
• Unstable angina
• Type 2 MI (supply-demand mismatch: sepsis, severe anemia, arrhythmia, hypertensive emergency, HF)
• Myocarditis (especially young patients, viral prodrome, diffuse STE)
• Aortic dissection (tearing pain, BP differential, widened mediastinum — DO NOT anticoagulate)
• Pericarditis (pleuritic, positional, PR depression, diffuse ST elevation)
• PE (right heart strain pattern, S1Q3T3)
• GERD, esophageal spasm (non-cardiac chest pain)`,workup:`• Serial ECGs: q15-30 min initially; posterior leads (V7-V9) if inferior STE or large R in V2-V3
• Troponin I/T (high-sensitivity): 0h and 1-3h; repeat at 6h if initial negative with high suspicion
• BMP, CBC, coagulation studies, LFTs, lipid panel, HbA1c
• CXR (portable)
• Bedside TTE: LV function, WMA, pericardial effusion, r/o mechanical complication
• Type & screen
• Point-of-care ABG if hemodynamically compromised`,management:`STEMI (activate cath lab immediately — "door to balloon" <90 min for PCI center):
• Aspirin 324mg PO chewed (load) + P2Y12 inhibitor (ticagrelor 180mg load OR clopidogrel 600mg load)
• Heparin UFH bolus per ACS weight-based protocol
• Activate STEMI protocol — page interventional cardiology
• If PCI unavailable within 120 min from first medical contact: fibrinolysis (tenecteplase preferred)
• Supplemental O2 only if SpO2 <90%
• Nitrates: sublingual NTG × 3 PRN (AVOID if suspected RV infarction, recent PDEi use, or hypotension)

NSTEMI:
• Aspirin 324mg PO chewed + P2Y12 inhibitor (ticagrelor 90mg BID or clopidogrel 75mg daily)
• Anticoagulation: UFH, enoxaparin, or fondaparinux per weight/renal function
• High-intensity statin: atorvastatin 80mg PO
• Beta-blocker: metoprolol succinate (avoid if AV block, active HF, or hypotension)
• ACEi/ARB: initiate if EF ≤40%, HF, HTN, or DM; hold if hemodynamically unstable
• Early invasive strategy (cardiac cath within 24h): troponin elevation, new ischemic ECG changes, GRACE score ≥140, hemodynamic instability, high-risk features
• Urgent cath (<2h): refractory ischemia, cardiogenic shock, severe hemodynamic instability

UNIVERSAL:
• NPO for potential procedure
• Continuous telemetry, IV access, pulse oximetry
• Repeat ECG and troponin per protocol`,monitoring:`• Continuous telemetry (watch for reperfusion arrhythmias, new ischemic changes)
• Serial troponins q3-6h until peak identified
• Daily BMP (electrolytes, renal function — especially with ACEi/ARB initiation)
• Blood glucose (target <180 mg/dL inpatient)
• Mechanical complications post-MI: new holosystolic murmur (papillary muscle rupture / VSD), hypotension (free wall rupture)
• HR and BP monitoring with beta-blocker/ACEi titration`,disposition:`• ICU/CCU: cardiogenic shock, mechanical complications, malignant arrhythmias
• Stepdown/SDU: NSTEMI pending cath, complex medical management
• Pre-discharge: ensure GDMT (aspirin + P2Y12 + statin + BB + ACEi/ARB) and cardiology follow-up`},{id:`syncope`,system:`cv`,title:`Syncope`,keywords:[`syncope`,`loss of consciousness`,`LOC`,`faint`,`presyncope`,`near-syncope`,`vasovagal`,`cardiac syncope`],source:{chapter:`Cardiology`,section:`Syncope`,pages:`34`,authors:`Alexander Jacobs`,keyFacts:[`San Francisco Syncope Rule (SFSR): admit if ≥1 of: non-sinus rhythm or ECG changes, dyspnea, Hct <30%, SBP <90, known HF`,`Orthostatic hypotension: SBP drop ≥20mmHg OR DBP drop ≥10mmHg within 3 min of standing`,`Syncope etiology: Reflex ~60%, Orthostatic ~15%, Cardiac ~15%, Neurologic <10%`,`Head CT/MRI: NOT indicated for routine syncope — only if focal neurological findings`,`TTE yield: <1% if no underlying heart disease and normal ECG (use ROMEO criteria)`]},assessment:`#Syncope
Transient loss of consciousness with self-limited recovery consistent with syncope.
Suspected etiology: [ ] Reflex/vasovagal  [ ] Orthostatic  [ ] Cardiac  [ ] Unexplained
High-risk features: [ ] Preceding palpitations  [ ] Exertional syncope  [ ] Syncope while supine  [ ] No prodrome  [ ] Angina  [ ] Known structural heart disease  [ ] ECG changes
SFSR criteria: [ ] ECG changes  [ ] Dyspnea  [ ] Hct <30  [ ] SBP <90  [ ] Known HF (≥1 → high risk, consider admission)`,ddx:`• Reflex syncope (~60%): vasovagal (emotion, pain, prolonged standing), situational (cough, micturition, defecation), carotid sinus
• Orthostatic hypotension (~15%): volume depletion, autonomic failure, medication-induced
• Cardiac (~10%): arrhythmia (Brady: CHB, SSS, sinus arrest; Tachy: VT, SVT with hemodynamic compromise), structural (HOCM, AS, cardiac tamponade, PE, acute MI)
• Neurologic (NOT true syncope): vertebrobasilar TIA, seizure (post-ictal, tongue bite, urinary incontinence, prolonged LOC)
• Metabolic: hypoglycemia, hypoxia — exclude first
• Intoxication`,workup:`• ECG (obtain immediately): look for ischemia, arrhythmia, QT prolongation, LBBB, Brugada pattern, preexcitation
• Orthostatic vital signs: systolic SBP ≥20 mmHg or diastolic ≥10 mmHg drop within 3 min of standing
• BMP (glucose, electrolytes), CBC
• Cardiac biomarkers (troponin) if concern for ACS or cardiac syncope
• BNP/NT-proBNP if concern for HF
• Fingerstick glucose (immediately — r/o hypoglycemia)
• TTE: if structural heart disease suspected, murmur on exam, or abnormal ECG
• Ambulatory ECG monitoring (Holter, Zio patch): if arrhythmia suspected without captured event
• Tilt table test: if vasovagal suspected and clinical diagnosis unclear
• Head CT/MRI: only if focal neurological findings; NOT indicated for routine syncope workup
• EEG: if seizure suspected`,management:`VASOVAGAL / REFLEX SYNCOPE:
• Education: avoid triggers, hydration, increase dietary salt
• Isometric counterpressure maneuvers (leg crossing, hand grip, arm tensing)
• Select patients: midodrine, fludrocortisone, or beta-blockers

ORTHOSTATIC HYPOTENSION:
• Volume repletion (IVF if dehydrated, oral hydration if able)
• Discontinue or reduce offending medications (diuretics, vasodilators, antihypertensives)
• Compression stockings, head-of-bed elevation at night
• Midodrine or fludrocortisone for refractory cases

CARDIAC SYNCOPE:
• Arrhythmia: treat underlying rhythm disorder (pacing for bradycardia, antiarrhythmic or ablation for tachycardia)
• Structural: treat underlying condition (e.g., AVR for critical AS, decompression for tamponade)
• Urgent cardiology consult for high-risk features

ALL PATIENTS:
• Initiate cardiac monitoring (continuous telemetry) during inpatient evaluation
• NPO if going to electrophysiology study or procedure`,monitoring:`• Continuous telemetry throughout hospitalization
• Serial orthostatic vital signs
• Repeat ECG if clinical change or new symptoms
• Glucose, electrolytes if metabolic etiology suspected`,disposition:`• Discharge home (low risk): single vasovagal episode, clear benign etiology, age <60, no high-risk features, normal ECG and vitals
• Observation/admission: SFSR ≥1 criterion, unexplained syncope, suspected cardiac etiology, trauma from fall, elderly with functional impairment, high-risk occupation
• Cardiology consult: suspected arrhythmic etiology, structural heart disease, high-risk ECG findings`},{id:`sepsis`,system:`pulm`,title:`Sepsis / Septic Shock`,keywords:[`sepsis`,`septic shock`,`infection`,`fever`,`hypotension`,`lactate`,`SOFA`,`vasopressors`,`bacteremia`],source:{chapter:`Pulmonary & Critical Care`,section:`Sepsis & Septic Shock`,pages:`55–57`,authors:`Lauren Nguyen`,keyFacts:[`Sepsis-3: life-threatening organ dysfunction (SOFA ≥2) from dysregulated host response to infection`,`Septic shock: vasopressors required to maintain MAP >65 AND lactate >2 despite adequate IVF resuscitation`,`Antibiotics: within 1 hour of recognition — each hour of delay ~7.6%/h increase in mortality`,`Norepinephrine: first-line vasopressor; add vasopressin 0.04 U/min (fixed, not titrated) when NE ≥5-15 mcg/min`,`IVF: 30 mL/kg LR/NS (crystalloid preferred; balanced > NS for large volumes)`]},assessment:`#Sepsis / Septic Shock
Meets Sepsis-3 definition: life-threatening organ dysfunction (SOFA ≥2) from dysregulated host response to suspected/confirmed infection.
Suspected source: [ ] Pulmonary  [ ] Urinary  [ ] Skin/soft tissue  [ ] Intraabdominal  [ ] Bloodstream  [ ] Other/Unknown
[ ] SEPTIC SHOCK: vasopressors required to maintain MAP >65 AND lactate >2 mmol/L despite adequate volume resuscitation
Lactate: ___  |  BP: ___  |  MAP: ___  |  SOFA score: ___  |  qSOFA: ___`,ddx:`• Infectious sources: pneumonia, UTI, intraabdominal (cholangitis, perforation, abscess), SSTI, bloodstream (CLABSI, endocarditis), meningitis, necrotizing fasciitis
• Non-infectious SIRS mimics: PE, MI, pancreatitis, adrenal crisis, thyroid storm, drug toxicity
• Distributive shock: anaphylaxis, adrenal insufficiency, hepatic failure, neurogenic
• Other shock: hypovolemic, cardiogenic, obstructive (PE, tamponade, tension PTX)`,workup:`• Blood cultures x2 sets (at least 1 percutaneous) — BEFORE antibiotics unless will significantly delay
• CBC with differential, BMP, LFTs, coagulation studies (PT/INR, fibrinogen)
• Lactate (initial and 2-3h repeat to assess clearance)
• Urinalysis with micro + urine culture
• CXR (PA or portable)
• Procalcitonin (baseline and trend to guide antibiotic duration)
• Source-directed cultures: sputum (if PNA), wound/fluid cultures, LP if meningitis suspected
• ABG/VBG (if hypoxemia or severe acidemia)
• Troponin + ECG (r/o cardiac trigger; monitor for cardiac dysfunction in sepsis)
• CT chest/abdomen/pelvis (once stabilized, to identify source if occult)
• Consider: 1,3-beta-D-glucan, galactomannan, cryptococcal Ag if fungal infection suspected`,management:`1. ANTIBIOTICS (STAT — within 1 hour of recognition):
• Empiric broad-spectrum IV antibiotics — each hour of delay increases mortality ~7.6%/h
• Tailor to suspected source:
  - Pulmonary: ceftriaxone + azithromycin (CAP) OR pip-tazo/cefepime ± vancomycin (HAP/VAP/MRSA risk)
  - UTI: ceftriaxone (uncomplicated); pip-tazo or carbapenem (ESBL risk, urosepsis)
  - Intraabdominal: pip-tazo OR meropenem + metronidazole
  - Skin/soft tissue: vancomycin + pip-tazo (severe); add clindamycin if necrotizing fasciitis
  - Source unknown: vancomycin + pip-tazo (or carbapenem if MDR risk)
• Blood/culture-directed de-escalation at 48-72h

2. FLUIDS:
• Initiate IVF for MAP <65 or lactate ≥4: 30 mL/kg LR/NS over 3h (crystalloid preferred)
• Reassess fluid responsiveness (IVC collapsibility, pulse pressure variation, passive leg raise)
• Avoid over-resuscitation: balanced crystalloid (LR) preferred over NS for large volumes

3. VASOPRESSORS (if MAP <65 despite adequate fluid resuscitation):
• Norepinephrine: FIRST-LINE; start 0.1-0.3 mcg/kg/min; titrate to MAP ≥65
• Vasopressin: add when NE ≥5-15 mcg/min (fixed dose 0.04 U/min; not titrated)
• Epinephrine: second or third agent; consider when NE escalating >25 mcg/min
• Phenylephrine: use if serious NE-associated arrhythmias or high CO with persistent hypotension
• Avoid dopamine (increased arrhythmia risk)

4. CORTICOSTEROIDS (consider in septic shock refractory to vasopressors):
• Hydrocortisone 200-300mg/day IV (continuous infusion or divided q6-8h) if refractory to ≥2 vasopressors
• Ongoing debate; use clinical judgment

5. SOURCE CONTROL:
• Identify conditions requiring intervention: abscesses, cholangitis, GI perforation, empyema, septic arthritis, necrotizing fasciitis
• Remove/replace infected devices when possible
• Low threshold for cross-sectional imaging once stabilized`,monitoring:`• Continuous MAP monitoring (arterial line preferred in shock)
• UOP via Foley catheter (goal >0.5 mL/kg/h)
• Repeat lactate at 2-3h (target clearance ≥10-20%)
• Serial CBC, BMP, LFTs q12-24h
• Troponin trend (sepsis-induced cardiomyopathy)
• Glucose monitoring: target <180 mg/dL (start insulin protocol if >180 x2)
• Procalcitonin trend for antibiotic stewardship`,disposition:`• ICU: septic shock (pressors, severe organ dysfunction), lactate ≥4 mmol/L, respiratory failure, severe AMS
• Stepdown/SDU: sepsis without shock, high-risk features, close monitoring needed
• Floor: sepsis with contained source, hemodynamically stable, single organ dysfunction`},{id:`pe`,system:`pulm`,title:`Pulmonary Embolism (VTE)`,keywords:[`pe`,`pulmonary embolism`,`dvt`,`deep vein thrombosis`,`vte`,`anticoagulation`,`dyspnea`,`pleuritic chest pain`,`hemoptysis`],source:{chapter:`Pulmonary & Critical Care`,section:`VTE Diagnostics & Management`,pages:`47–49`,authors:`Lauren Nguyen`,keyFacts:[`Massive PE (SBP <90): systemic alteplase 100mg IV over 2h if no contraindications; catheter-directed therapy if contraindications to lysis`,`Age-adjusted D-dimer (age >50): threshold = age × 10 mcg/L instead of standard 500 mcg/L cutoff`,`Apixaban for PE: 10mg BID ×7 days → 5mg BID for ≥3 months (DOAC preferred; no LMWH bridge needed)`,`Provoked PE: 3 months anticoagulation; Unprovoked PE: minimum 3 months, individualize extension decision`,`Sub-massive PE: anticoagulation cornerstone; PERT activation if available; monitor for decompensation`]},assessment:`#Pulmonary Embolism
Clinical probability: [ ] Low  [ ] Intermediate  [ ] High  |  Wells Score: ___  |  PERC negative: [ ] Yes  [ ] No
Confirmed PE: [ ] Subsegmental  [ ] Segmental  [ ] Lobar  [ ] Saddle  |  PE Risk: [ ] Low  [ ] Sub-massive (intermediate)  [ ] Massive
RV strain on imaging: [ ] Yes  [ ] No  |  Troponin: ___  |  BNP/NT-proBNP: ___
DVT: [ ] Proximal  [ ] Distal  [ ] Upper extremity  [ ] None identified`,ddx:`• Pulmonary embolism (VTE spectrum)
• Pneumothorax (sudden onset, chest pain, dyspnea, decreased breath sounds)
• Pneumonia / pleuritis
• ACS / pericarditis
• ADHF / flash pulmonary edema
• ARDS
• Aortic dissection
• Musculoskeletal / costochondritis`,workup:`DIAGNOSTIC WORKUP:
• ECG: sinus tachycardia most common; S1Q3T3, RBBB, anterior TWI (RV strain pattern)
• CXR: often normal; Hampton's hump, Westermark sign (rare and insensitive)
• D-dimer: use only if low-to-intermediate pre-test probability (high NPV, low specificity)
  - Adjust threshold by age: D-dimer threshold = age × 10 mcg/L if >50 yo (or use YEARS algorithm)
• CT Pulmonary Angiography (CTPA): diagnostic gold standard; obtain IV contrast if indicated
• V/Q scan: if CTPA contraindicated (CrCl <30, contrast allergy, pregnancy)
• Bilateral lower extremity Doppler US: if clinical suspicion for DVT or if CTPA not immediately available
• BNP/NT-proBNP, troponin: risk stratification (high values → higher risk of decompensation)
• TTE or bedside echo: RV dilation, McConnell sign, RV dysfunction, assess for shunt
• Hypercoagulability workup: consider in unprovoked VTE (defer to outpatient if possible)`,management:`ANTICOAGULATION (start as soon as PE confirmed or high clinical suspicion without contraindication):
Low-risk PE (hemodynamically stable, no RV dysfunction):
• DOAC preferred (apixaban or rivaroxaban first-line over VKA/LMWH)
  - Apixaban 10mg BID x7d then 5mg BID for ≥3 months
  - Rivaroxaban 15mg BID with meals x21d then 20mg daily
• Enoxaparin 1mg/kg SQ BID or 1.5mg/kg SQ daily (if DOAC not available or malignancy)
• UFH: preferred if high bleeding risk or surgical intervention anticipated (reversible with protamine)

Sub-massive PE (intermediate-high risk — hemodynamically stable but RV dysfunction or elevated biomarkers):
• Anticoagulation (as above) — cornerstone of management
• Monitor closely for hemodynamic decompensation
• PE Response Team (PERT) activation if available
• Consider systemic thrombolysis or catheter-directed therapy if deteriorating

MASSIVE PE (hemodynamic instability: SBP <90, shock, cardiac arrest):
• Systemic thrombolysis (if no contraindications): alteplase 100mg IV over 2h
• Catheter-directed thrombolysis or embolectomy: consult IR/CT surgery
• Anticoagulation with UFH infusion
• Vasopressors: norepinephrine first-line for hemodynamic support
• Heparin during CPR (if PE code): tenecteplase preferred; continue CPR ≥15 min post-lysis

IVC FILTER: only if absolute contraindication to anticoagulation

DURATION OF ANTICOAGULATION:
• Provoked PE (major transient risk): 3 months
• Unprovoked PE: minimum 3 months; individualize decision to extend based on bleeding vs. recurrence risk
• Cancer-associated VTE: DOAC > LMWH; treat indefinitely or until cancer resolved`,monitoring:`• Hemodynamic monitoring — watch for decompensation (BP, HR, O2 saturation)
• Serial troponin and BNP q12-24h for risk stratification
• TTE in 48-72h if RV dysfunction on initial imaging
• aPTT q6h if on UFH gtt (target 60-100 sec)
• Renal function if on enoxaparin (adjust dose if CrCl <30)
• Monitor for bleeding complications`,disposition:`• ICU/stepdown: massive or sub-massive PE, hemodynamic instability, RV dysfunction, requiring close monitoring
• Outpatient-eligible (low-risk PE): PESI I-II, hemodynamically stable, no RV dysfunction, reliable follow-up, adequate home support — consider discharge with DOAC
• Cardiology/pulm + hematology follow-up for unprovoked PE or hypercoagulability workup`},{id:`shock`,system:`pulm`,title:`Undifferentiated Shock`,keywords:[`shock`,`hypotension`,`hypoperfusion`,`distributive`,`cardiogenic`,`hypovolemic`,`obstructive`,`vasopressors`,`lactate`,`MAP`],source:{chapter:`Pulmonary & Critical Care`,section:`Shock`,pages:`54–55`,authors:`Lauren Nguyen`,keyFacts:[`Distributive (66%): sepsis, anaphylaxis, adrenal; Hypovolemic (16%): hemorrhage, GI losses; Cardiogenic (16%): AMI/HF; Obstructive (2%): PE, tamponade, tension PTX`,`MAP target ≥65 mmHg for all shock subtypes; cardiogenic shock target ≥60 mmHg`,`Tension PTX: immediate needle decompression (2nd ICS, MCL) — do NOT wait for CXR`,`Massive transfusion: pRBC:FFP:platelets = 1:1:1 for hemorrhagic shock`,`Norepinephrine: first-line for distributive shock; avoid dopamine (increased arrhythmia risk vs. norepinephrine)`]},assessment:`#Undifferentiated Shock
State of tissue hypoperfusion with end-organ dysfunction. BP: ___  HR: ___  MAP: ___  Lactate: ___
Shock classification pending:
[ ] Distributive (warm extremities, low SVR) — sepsis, anaphylaxis, adrenal crisis, liver failure
[ ] Hypovolemic (cold extremities, low CO, low filling pressures) — hemorrhage, GI losses, third spacing
[ ] Cardiogenic (cold extremities, low CO, elevated filling pressures) — MI, HF, arrhythmia, valve disease
[ ] Obstructive (low CO) — PE, cardiac tamponade, tension PTX
End-organ involvement: AMS [ ] / Oliguria [ ] / Metabolic acidosis [ ] / Elevated lactate [ ]`,ddx:`Distributive (66%):
• Sepsis (most common), anaphylaxis, adrenal insufficiency, hepatic failure, neurogenic, drug/toxin
Hypovolemic (16%):
• Hemorrhagic (GIB, trauma, retroperitoneal), GI losses, third spacing (pancreatitis, burns)
Cardiogenic (16%):
• AMI, decompensated HF, myocarditis, severe valvular disease, arrhythmia
Obstructive (2%):
• Massive PE, cardiac tamponade, tension pneumothorax`,workup:`• ECG: r/o MI, arrhythmia, pericarditis, RV strain
• CXR: pneumothorax, widened mediastinum, cardiomegaly, pulmonary edema
• Bedside TTE/POCUS: assess LV/RV function, IVC, pericardial effusion, wall motion
• BMP, CBC, LFTs, coagulation, fibrinogen, lactate (repeat q2h)
• Troponin, BNP/NT-proBNP
• Blood cultures x2 (if infectious etiology suspected)
• ABG/VBG: acidosis, O2/CO2 status
• STAT type & screen (if hemorrhagic)
• CT imaging as directed by suspected etiology (CT chest, PE protocol, CT A/P)
• Arterial line + central venous access (A-line preferred for continuous MAP monitoring)
• Foley catheter (monitor UOP)
• PA catheter: consider in cardiogenic shock or undifferentiated shock refractory to initial management`,management:`GENERAL (ANY ETIOLOGY):
• Immediate IV access x2 (large bore); resuscitation fluids
• Supplemental O2; intubate if hemodynamically unstable, severe respiratory failure, or inability to compensate for metabolic acidosis
• Target MAP ≥65 mmHg (cardiogenic shock: MAP ≥60 mmHg)

DISTRIBUTIVE (septic/anaphylactic/adrenal):
• IVF: 30 mL/kg LR bolus, reassess
• Norepinephrine: first-line vasopressor; start 0.1-0.3 mcg/kg/min
• Empiric broad-spectrum antibiotics (sepsis within 1h)
• Epinephrine IM (anaphylaxis) → see anaphylaxis protocol
• Hydrocortisone 100mg IV x1 (adrenal crisis) or 200mg/day (septic shock refractory to 2 vasopressors)

HYPOVOLEMIC:
• Aggressive IVF resuscitation with isotonic crystalloid
• Hemorrhagic: activate massive transfusion protocol (pRBCs: FFP: platelets = 1:1:1); STAT surgical/IR consult
• Control source of bleeding

CARDIOGENIC:
• Norepinephrine: first-line vasopressor (avoid dopamine); target MAP ≥60 mmHg
• Inotropes (if low CO without severe hypotension): dobutamine 0.5-1 mcg/kg/min; milrinone 0.125 mcg/kg/min
• Early cardiology/SHOCK team consult; consider urgent cath if ischemic etiology
• Mechanical circulatory support (IABP, Impella, VA-ECMO) — per CCU/cardiology
• Avoid aggressive IVF (worsens congestion)

OBSTRUCTIVE:
• Tension PTX: immediate needle decompression then chest tube
• Cardiac tamponade: emergent pericardiocentesis
• Massive PE: systemic thrombolysis (alteplase 100mg IV over 2h); consider embolectomy`,monitoring:`• Continuous arterial line monitoring (MAP goal ≥65 mmHg)
• UOP via Foley catheter (goal >0.5 mL/kg/h)
• Serial lactate q2-4h (target clearance ≥10-20%)
• ScvO2 or MvO2 monitoring (target >70%)
• Vasopressor titration — minimize dose, reassess need q4-8h
• CBC, BMP, coags, LFTs q12-24h`,disposition:`• ICU: all patients in shock requiring vasopressors, mechanical ventilation, or multi-organ dysfunction
• Specific ICU: cardiogenic → CCU; septic → MICU; trauma/hemorrhagic → SICU`},{id:`ugib`,system:`gi`,title:`Upper GI Bleeding (UGIB)`,keywords:[`ugib`,`upper gi bleed`,`gi bleeding`,`hematemesis`,`melena`,`coffeegrounds`,`esophageal varices`,`peptic ulcer`,`bleed`],source:{chapter:`Gastroenterology`,section:`GI Bleeding`,pages:`60–62`,authors:`Hugh Shirley`,keyFacts:[`GBS 0-1: outpatient management appropriate; GBS ≥6: high risk, inpatient endoscopy needed`,`Transfusion threshold: Hgb <7 (target 7-9); Hgb <8 if known CAD — avoid over-transfusion (raises portal pressure in variceal bleeding)`,`Pre-EGD: pantoprazole 80mg bolus → 8mg/h infusion; erythromycin 250mg IV 30-90 min before EGD`,`Variceal bleed: octreotide 50mcg bolus → 50mcg/h infusion; ceftriaxone 1g IV q24h ×7d for SBP prophylaxis`,`EGD timing: within 24h — no mortality benefit of <6h vs. 6-24h for hemodynamically stable patients`]},assessment:`#Upper GI Bleeding (UGIB)
Bleeding proximal to the ligament of Treitz presenting with [hematemesis / melena / coffee-ground emesis / hematochezia with brisk bleed].
Glasgow-Blatchford Score (GBS): ___  (0-1 = low risk; may consider outpatient management)
Risk stratification: [ ] Low-risk  [ ] High-risk features (HoTN, tachy, INR >1.5, Hgb <10, AMS, syncope, age >65, liver disease, CHF)
ICU criteria: BP <90 + HR >100 for >30 min; Hct <20/Hgb <7 with active significant bleed; requiring >2L IVF or 2u pRBCs to maintain Hct >25`,ddx:`• Peptic ulcer disease (most common — gastric or duodenal ulcer)
• Esophageal varices (portal hypertension, cirrhosis)
• Mallory-Weiss tear (forceful vomiting)
• Gastritis / duodenitis
• Dieulafoy lesion
• Esophagitis
• Gastric cancer / malignancy
• Aortoenteric fistula (prior aortic surgery)
• Hemobilia, hemosuccus pancreaticus (rare)
• Brisk lower GI source presenting as UGIB`,workup:`• CBC q2-8h, BMP, coagulation studies (PT/INR, PTT), LFTs, type & screen/crossmatch
• Orthostatic vital signs; rectal exam (assess stool color — use white napkin for clarity)
• NG lavage: not generally recommended (no improved outcomes)
• BUN/Cr ratio: BUN >20 suggests UGIB (blood breakdown in GI tract)
• EGD (esophagogastroduodenoscopy): within 24h for inpatient non-variceal UGIB; no benefit of <6h vs. 6-24h for stable patients
• CT angiography (CTA) of abdomen/pelvis: if bleeding too brisk for EGD or for localization before IR
• Tagged red blood cell scan: if active bleeding, negative CTA, or colonoscopy not feasible`,management:`STABILIZATION (before endoscopy):
• NPO, 2 large-bore PIVs (18G or larger) or central access
• IV isotonic crystalloid for hypotension; do not delay blood transfusion if actively hemorrhaging
• Transfuse pRBCs for Hgb <7 (target Hgb 7-9); Hgb <8 if known CAD
  - Avoid over-transfusion: excess volume increases portal pressure and can worsen variceal bleeding
• Platelets if <50k; PCC preferred over FFP for INR >1.5 (lower volume, faster onset)
• If uremic bleeding: dDAVP 0.3 mcg/kg IV
• Intubation: consider if large volume hematemesis or AMS with aspiration risk

PRE-ENDOSCOPIC PHARMACOTHERAPY:
• PPI: IV pantoprazole 80mg bolus → 8mg/h continuous infusion (vasoactive effect on ulcers)
• Non-variceal UGIB: PPI 40mg IV BID acceptable if infusion not available
• Suspected variceal bleed: octreotide 50mcg bolus → 50mcg/h infusion (lower portal pressure)
• Ceftriaxone 1g IV q24h x7d (SBP prophylaxis in cirrhotic patients with UGIB)
• Erythromycin 250mg IV 30-90 min before EGD (prokinetic, improves gastric visualization)

ENDOSCOPY:
• EGD within 24h (non-variceal); urgent EGD if variceal or refractory hemodynamic instability
• Banding (EVL) for esophageal varices; sclerotherapy/coagulation for non-variceal

REFRACTORY BLEED:
• IR embolization or TIPS (transjugular intrahepatic portosystemic shunt) for variceal bleed
• Surgery consult if endoscopic and IR interventions fail`,monitoring:`• Vital signs q1-4h; continuous telemetry if ICU/HDU
• CBC q4-8h (Hct drop lags 24-72h from bleeding onset)
• Renal function, electrolytes daily
• UOP monitoring (Foley catheter if ICU or hemodynamically compromised)
• BUN/Cr ratio: rising BUN with stable Cr suggests ongoing or re-bleeding
• Reassess hemostasis: serial abdominal exam, stool output color and volume`,disposition:`• ICU: hemodynamic instability, active hemorrhage, variceal bleed, GBS >6, requires intubation
• Floor: stable vitals, low GBS, responds to initial resuscitation
• Consider outpatient management: GBS 0-1, no high-risk endoscopic stigmata, reliable follow-up`},{id:`aki`,system:`neph`,title:`Acute Kidney Injury (AKI)`,keywords:[`aki`,`acute kidney injury`,`creatinine`,`oliguria`,`uremia`,`renal failure`,`hypovolemia`,`ATN`,`prerenal`,`dialysis`],source:{chapter:`Nephrology`,section:`Acute Kidney Injury`,pages:`87–88`,authors:`Felicita Kuperwasser`,keyFacts:[`KDIGO Stage 1: Cr ×1.5-1.9 or ↑≥0.3mg/dL within 48h; Stage 2: Cr ×2-2.9; Stage 3: Cr ×3 or ≥4.0 or anuria ×12h`,`FENa <1% pre-renal (valid only in oliguria, NOT on diuretics); FEUrea <35% pre-renal (use if on diuretics)`,`RRT indications (AEIOU): Acidosis pH <7.0, Electrolytes K+ >6.5 with ECG changes, Intoxication, volume Overload, Uremia (encephalopathy, pericarditis, neuropathy)`,`Contrast-induced AKI: no role for N-acetylcysteine; use isotonic IVF pre/post if high risk (CrCl <45, DM, prior AKI)`,`Hold ACEi/ARBs and NSAIDs in pre-renal AKI; stop nephrotoxins (aminoglycosides, vancomycin)`]},assessment:`#Acute Kidney Injury (AKI)
KDIGO Stage: [ ] Stage 1 (Cr ×1.5-1.9 or ↑0.3 mg/dL within 48h or UOP <0.5 mL/kg/h x6-12h)
             [ ] Stage 2 (Cr ×2.0-2.9 or UOP <0.5 mL/kg/h x12h)
             [ ] Stage 3 (Cr ×3.0 or ≥4.0 mg/dL or ↑≥0.3 and absolute Cr ≥4.0 or UOP <0.3 mL/kg/h x24h or anuria x12h)
Baseline Cr: ___  Current Cr: ___  UOP: ___
AKI category: [ ] Pre-renal  [ ] Intrinsic (ATN / GN / AIN / vascular)  [ ] Post-renal (obstruction)`,ddx:`Pre-renal:
• Hypovolemia (dehydration, hemorrhage, GI losses, burns)
• Reduced renal perfusion: HF (cardiorenal syndrome), cirrhosis (hepatorenal syndrome)
• Medications: NSAIDs, ACEi/ARBs, CNIs

Intrinsic:
• ATN (most common inpatient): ischemia (sepsis, hypotension), nephrotoxins (contrast, aminoglycosides, vancomycin, myoglobin)
• AIN (drug-induced — NSAIDs, PCN, cephalosporins, PPIs, sulfonamides, allopurinol)
• Glomerulonephritis (GN): RPGNs — check UA for RBC casts, proteinuria
• Vascular: TTP/HUS, cholesterol emboli, renal artery stenosis

Post-renal:
• Obstruction: BPH, pelvic malignancy, nephrolithiasis, retroperitoneal fibrosis`,workup:`1. History/Exam: volume status, exposures (contrast, nephrotoxins, meds), recent infection, trauma/myalgias
2. Urinalysis + urine microscopy: RBC casts (GN), WBC casts (AIN/pyelonephritis), granular casts (ATN), hyaline casts (pre-renal)
3. Urine chemistries:
   • FENa: <1% pre-renal, >2% ATN (only valid in OLIGURIA, not on diuretics)
   • FEUrea: <35% pre-renal (use if on diuretics)
   • Urine osm: >500 pre-renal; <350 ATN
   • Urine protein: if proteinuria → albumin/creatinine ratio; APR >0.4 suggests glomerular process
4. Bladder ultrasound → renal ultrasound: r/o hydronephrosis, estimate renal size
5. If GN suspected: ANA, ANCA, anti-GBM, C3/C4, anti-dsDNA, SPEP/UPEP, cryoglobulins, ASLO
6. If rhabdomyolysis: CK, uric acid, LDH, urine myoglobin
7. Drug levels if applicable (vancomycin, tacrolimus, cyclosporine)`,management:`1. OPTIMIZE HEMODYNAMICS — treat the cause:
   • Pre-renal: IVF (isotonic; LR preferred for large volumes); hold diuretics, NSAIDs, ACEi/ARBs
   • Obstructive: Foley catheter for BPH; urology consult for ureteral obstruction; IR for nephrostomy
   • ATN: stop nephrotoxins, optimize perfusion; NO benefit from empiric diuretics in oliguric ATN
   • AIN: stop offending drug; consider steroids (prednisone 1mg/kg/d x2-4 weeks) if progressive

2. RENAL DOSING: adjust all medications for GFR; if creatinine rising, assume GFR lower than calculated

3. MANAGE COMPLICATIONS:
   • Hyperkalemia: calcium gluconate (stabilize), insulin/D50, sodium bicarbonate, albuterol (shift); sodium zirconium cyclosilicate/lokelma (eliminate)
   • Hyperphosphatemia: sevelamer or calcium acetate; low phosphorus diet
   • Metabolic acidosis: sodium bicarbonate PO/IV
   • Uremic bleeding: dDAVP 0.3 mcg/kg IV
   • Volume overload: loop diuretics if responsive

4. INDICATIONS FOR RENAL REPLACEMENT THERAPY (AEIOU mnemonic):
   • A — Refractory Acidosis (pH <7.0)
   • E — refractory Electrolyte abnormalities (hyperkalemia with ECG changes or K >6.5)
   • I — Intoxication (lithium, ethylene glycol, salicylates, metformin, theophylline)
   • O — refractory volume Overload
   • U — Uremia (encephalopathy, pericarditis, neuropathy)`,monitoring:`• Daily BMP (creatinine trajectory, K+, HCO3-)
• UOP via Foley catheter q1-4h
• Daily weight (volume status assessment)
• Telemetry if K+ >5.5 or ECG changes
• Medication reconciliation — renal-dose adjust daily`,disposition:`• Nephrology consult: severe AKI (Stage 3), suspected GN/AIN, rapidly progressive AKI without clear etiology, dialysis consideration
• ICU: dialysis-requiring AKI, hemodynamic instability, multi-organ failure, anuric AKI with hyperkalemia/acidosis
• Consider discharge when: creatinine trending down/stable, adequate UOP, reversible cause identified and treated`},{id:`hyponatremia`,system:`neph`,title:`Hyponatremia`,keywords:[`hyponatremia`,`hyponatremia`,`low sodium`,`siadh`,`sodium`,`hypovolemia`,`free water excess`,`osmolality`,`ams seizure sodium`],source:{chapter:`Nephrology`,section:`Sodium Disorders`,pages:`95–96`,authors:`Felicita Kuperwasser`,keyFacts:[`SIADH: uOsm >100, uNa >40, euvolemia, serum uric acid <4 mg/dL, BUN <5, FEUa ≥10-12%`,`Symptomatic hyponatremia: 3% NaCl 100mL IV bolus × up to 3 times until symptoms resolve or Na↑ by 5 mEq/L; max correction ≤8-10 mEq/L/24h`,`ODS high-risk: Na ≤110, hypokalemia, malnutrition, liver disease, alcoholism — limit correction to ≤4-6 mEq/L/24h`,`DDAVP clamp 2mcg IV/SQ q6-8h: use if ODS risk or Na correcting too rapidly`,`Overcorrection: if Na rises >8 mEq/L/24h → D5W 3 mL/kg/h + DDAVP to re-lower Na`]},assessment:`#Hyponatremia
Serum Na: ___  |  Rate of change: [ ] Acute (<48h)  [ ] Chronic (≥48h)  [ ] Unknown
Severity: [ ] Mild (130-135)  [ ] Moderate (125-129)  [ ] Severe (<125)
Symptoms: [ ] Asymptomatic  [ ] Mild (nausea, HA)  [ ] Moderate/severe (AMS, seizures, respiratory depression)
Volume status: [ ] Hypovolemic  [ ] Euvolemic  [ ] Hypervolemic
Urine osmolality: ___  |  Urine Na: ___  |  Serum osmolality: ___`,ddx:`Hypovolemic hyponatremia (Na losses > water retention):
• GI losses (diarrhea, vomiting), renal losses (diuretics, Addison's disease, salt-wasting nephropathy)

Euvolemic hyponatremia:
• SIADH (most common euvolemic): uOsm >100, uNa >40, serum uric acid typically <4, BUN <5, FEUa ≥10-12%
  - Causes: CNS disorders, pulmonary disease, medications (SSRIs, carbamazepine, cyclophosphamide, opioids), surgery
• Hypothyroidism (check TSH)
• Adrenal insufficiency (check AM cortisol)
• Psychogenic polydipsia (uOsm <100, uNa <20)
• SIADH due to pain/nausea

Hypervolemic hyponatremia (water excess > Na retention):
• CHF, cirrhosis, nephrotic syndrome, CKD/ESRD
• Note: uNa typically <20 in CHF/cirrhosis (EABV), >40 in ESRD`,workup:`• Serum: BMP, serum osmolality, uric acid, TSH, AM cortisol (if adrenal insufficiency suspected)
• Urine: UA, urine osmolality, urine Na, urine uric acid
• Determine if ADH is present: uOsm >100 → ADH present
• Key diagnostic clues:
  - SIADH: sUA <4, BUN <5, FEUa ≥10-12%, uNa >40, euvolemia
  - Hypovolemia: sUA >5, BUN elevated, FEUa <4%, uNa <20
• Distinguish SIADH subtypes (reset osmostat, SIAD) if chronic and refractory`,management:`SEVERE SYMPTOMATIC (seizures, AMS, respiratory depression):
• 3% NaCl 100mL IV bolus over 10 min; repeat up to 3x until symptoms resolve OR Na ↑by 5 mEq/L
• Target INITIAL increase: 4-6 mEq/L in first 6h
• Max correction: ≤8-10 mEq/L per 24h (high ODS risk: ≤4-6 mEq/L per 24h)

SEVERE ASYMPTOMATIC (Na <120):
• 3% NaCl at 15-30 mL/h (correction rate per calculation); titrate to Na ≥125
• Renal consult if needs 3% NaCl and/or DDAVP clamp

MODERATE/MILD HYPONATREMIA:
• SIADH: fluid restriction 1-1.5L/day ± PO salt tabs; identify and treat underlying cause
• Hypovolemic: NS 0.9% IV → correct volume deficit first; Na will correct as volume restored
• Hypervolemic (CHF): diuresis; optimize GDMT
• Hypervolemic (cirrhosis): fluid restriction + diuretics (spironolactone ± furosemide)
• Hypothyroidism: thyroid hormone replacement
• Adrenal insufficiency: hydrocortisone

OVERCORRECTION PREVENTION (Osmotic Demyelination Syndrome — ODS):
• ODS risk factors: Na ≤110, hypokalemia, malnutrition, liver disease, alcoholism
• DDAVP 2mcg IV/SQ q6-8h (DDAVP clamp) if risk of rapid overcorrection
• If Na overcorrects (>8 mEq/L in 24h): D5W 3mL/kg/h + DDAVP clamp to re-lower Na
• ODS: delayed (2-6 days) dysarthria, dysphagia, paresis, AMS; MRI confirms at 4 weeks`,monitoring:`• Serum Na q2-4h while on active correction (3% NaCl or IVF)
• Serum Na q4-8h once goal range achieved
• Strict I&O (fluid restriction monitoring)
• Urine output and urine Na (monitor for aquaresis with vaptans or correction pattern)
• Neurologic exam (assess for improvement of symptoms, watch for ODS signs)`,disposition:`• ICU/stepdown: symptomatic hyponatremia requiring 3% NaCl, seizing, AMS, Na <120
• Nephrology consult: severe hyponatremia (<120), symptomatic, requiring hypertonic saline or DDAVP clamp
• Discharge when: clinically stable, Na trending appropriately, underlying cause identified and treated`},{id:`hyperkalemia`,system:`neph`,title:`Hyperkalemia`,keywords:[`hyperkalemia`,`high potassium`,`k+`,`peaked t waves`,`cardiac`,`ekg changes`,`renal`,`ckd`,`aki`,`acidosis`],source:{chapter:`Nephrology`,section:`Potassium Disorders`,pages:`96–97`,authors:`Felicita Kuperwasser`,keyFacts:[`ECG changes: peaked T-waves → prolonged PR → widened QRS → sine wave → VF/asystole`,`Calcium gluconate 1-2g IV over 5-10 min: membrane stabilization only (does NOT lower K+); onset 1-3 min, duration 30-60 min; AVOID if on digoxin`,`Insulin 5-10U IV + D50 25-50mL: shifts K+ into cells; onset 15-30 min, duration 4-6h; check glucose q1h`,`Sodium zirconium cyclosilicate (Lokelma) 10g TID ×48h: fastest oral K+ elimination (onset ~1h)`,`Stop offending agents: ACEi/ARBs, NSAIDs, K+-sparing diuretics, TMP-SMX`]},assessment:`#Hyperkalemia
Serum K+: ___  (confirm with repeat if suspicion of hemolysis/lab artifact)
Severity: [ ] Mild (5.1-5.9)  [ ] Moderate (6.0-6.4)  [ ] Severe (≥6.5 or any with ECG changes)
ECG: [ ] Peaked T-waves  [ ] Prolonged PR  [ ] Widened QRS  [ ] Sine wave pattern  [ ] Normal
Clinical: [ ] Asymptomatic  [ ] Weakness  [ ] Palpitations  [ ] Cardiac arrest risk
Etiology workup: Acidosis / Aldosterone↓ / Beta-blockers / Blood lysis / Cell lysis / Drugs / DM / Decreased GFR`,ddx:`Redistribution (usually transient — may not require elimination):
• Cell lysis: hemolysis, rhabdomyolysis, tumor lysis syndrome
• Acidosis (metabolic/respiratory)
• Insulin deficiency / hyperglycemia
• Beta-blockers, digoxin toxicity
• Hyperkalemic periodic paralysis

Decreased Renal K+ Excretion (required for persistent hyperK):
• Decreased aldosterone: ACEi/ARBs, NSAIDs, K+-sparing diuretics, type IV RTA, heparin, calcineurin inhibitors
• AKI/CKD (GFR <15 mL/min usually required for hyperK)
• Impaired distal Na delivery: hypovolemia, CHF, cirrhosis`,workup:`• STAT ECG (do NOT wait for confirmed lab; ECG changes guide urgency)
• Repeat serum K+ (confirm; r/o pseudohyperkalemia: platelets >500k, WBC >120k, hemolysis)
• Consider blood gas K+ if pseudohyperkalemia suspected
• BMP (renal function, glucose, bicarbonate)
• Review medications for offending agents
• If new: workup for AKI vs. CKD progression
• 24h urine K+ and TTKG (if etiology unclear — decreased TTKG suggests impaired K+ excretion)`,management:`TREAT IF: ECG changes, K+ ≥6, rapid rise, or symptomatic

1. STABILIZE (cardiac membrane protection — FIRST if ECG changes):
• Calcium gluconate 1-2g IV over 5-10 min (or CaCl2 via central line for faster onset)
• Repeat q5 min PRN; onset 1-3 min, duration 30-60 min
• AVOID if on digoxin (hypercalcemia potentiates dig toxicity)

2. REDISTRIBUTE (shift K+ into cells — temporizing):
• Insulin 5-10 U IV regular + D50 25-50mL (to prevent hypoglycemia)
  - Onset 15-30 min; duration 4-6h; monitor glucose
• Sodium bicarbonate 1-2 amps IV (if metabolic acidosis or pH <7.2)
  - Onset 5-10 min; duration 1-2h
• Albuterol 10-20mg nebulized (onset 15-30 min)
• Dialysis: fastest elimination in unstable patients; preferred over CVVH if hemodynamically stable

3. ELIMINATE (actual K+ removal — key to resolution):
• Sodium zirconium cyclosilicate (Lokelma) 10g PO TID x48h → 10g daily maintenance (fastest onset: 1h)
• Patiromer 8.4g PO daily (onset slower, use for non-acute maintenance)
• Furosemide (if adequate renal function and not oliguric)
• Bowel regimen (stool K+ losses)

4. ADDRESS REVERSIBLE CAUSES:
• Hold ACEi/ARBs, NSAIDs, K+-sparing diuretics, TMP-SMX
• Low-potassium diet
• Optimize volume status
• Treat acidosis if present`,monitoring:`• Repeat serum K+ q2-4h while actively treating
• Serial ECGs if initial ECG changes — watch for normalization
• Glucose checks q1h after insulin (hypoglycemia risk)
• Continuous telemetry until K+ <5.5 and ECG normalized`,disposition:`• ICU: ECG changes, K+ ≥6.5, cardiac arrhythmia, requires dialysis
• Telemetry floor: K+ 6.0-6.4 without ECG changes, requires close monitoring
• Nephrology consult: suspected need for RRT, AKI Stage 3, ESRD with hyperK, refractory hyperK`},{id:`dka`,system:`endo`,title:`Diabetic Ketoacidosis (DKA)`,keywords:[`dka`,`diabetic ketoacidosis`,`hyperglycemia`,`anion gap`,`ketoacidosis`,`glucose`,`insulin`,`bicarbonate`,`acidosis`],source:{chapter:`Endocrinology`,section:`Diabetes & Hypoglycemia`,pages:`171–172`,authors:`Shraddha Damaraju`,keyFacts:[`CRITICAL — Do NOT start insulin if K+ <3.3 mEq/L: hold insulin, replace K+ 40 mEq/h until K+ ≥3.5, THEN start insulin (prevents fatal hypokalemia)`,`DKA severity: Mild pH 7.25-7.30 / HCO₃ 15-18; Moderate pH 7.00-7.24 / HCO₃ 10-15; Severe pH <7.00 / HCO₃ <10`,`Bicarbonate: consider ONLY if pH <7.0 — avoid routine use (worsens cerebral acidosis and hypokalemia)`,`Resolution: AG closed AND β-hydroxybutyrate <1 mmol/L — urine ketones unreliable (measures acetoacetate only, not β-OHB)`,`Euglycemic DKA: consider if on SGLT-2 inhibitor, pregnancy, or alcohol — glucose may be normal despite true DKA`]},assessment:`#Diabetic Ketoacidosis (DKA)
Glucose: ___  |  pH: ___  |  HCO3: ___  |  Anion Gap: ___ (corrected for albumin)
Severity: [ ] Mild (pH 7.25-7.30, AG >10, HCO3 15-18)  [ ] Moderate (pH 7.00-7.24, HCO3 10-15)  [ ] Severe (pH <7.00, HCO3 <10)
Precipitant (6 I's): [ ] Infection (PNA/UTI)  [ ] Initial DM presentation  [ ] Insulin non-adherence  [ ] Inflammation (pancreatitis)  [ ] Infarction (MI/CVA)  [ ] Iatrogenic (SGLT2i, steroids)
Consider euglycemic DKA if on SGLT-2 inhibitor, pregnancy, or alcohol-related liver disease`,ddx:`• DKA (Type 1 > Type 2 DM, SGLT-2i-associated euglycemic DKA)
• HHS (hyperosmolar hyperglycemic state): glucose often >600, osmolarity >320, minimal ketoacidosis
• Alcoholic ketoacidosis (AKA): low/normal glucose, no significant hyperglycemia, EtOH history
• Starvation ketosis: low anion gap, no acidemia
• Other high AG acidosis: lactic acidosis, ingestions (ASA, methanol, ethylene glycol)`,workup:`• BMP (q2h until AG closes → q4h until normal K+); correct Na for glucose
  - Corrected Na = Measured Na + 0.02 × (Glucose − 100)
• Serum β-hydroxybutyrate (q2-4h; UA ketone does NOT measure β-OHB)
• ABG or VBG (if HCO3 reduced or hypoxemic)
• CBC with differential
• Urinalysis + urine culture
• Serum osmolality
• Fingerstick glucose q1h while on insulin infusion
• Consider: hs-troponin, ECG, blood cultures (if infection suspected), CXR, lipase/amylase
• Phosphorus level (often profoundly depleted)`,management:`PRIORITIES: Volume → Electrolytes (K+) → Glucose (in that order)

STEP 1 — FLUIDS (typical deficit 5-8L):
• Bolus LR 15-20 mL/kg/h over first 1-2h
• Corrected Na LOW: start NS or LR ± K+ at 250-500 mL/h
• Corrected Na NORMAL or HIGH (or hyperchloremic acidosis): start ½NS or LR ± K+ at 250-500 mL/h
• Add D5W to IVF once BG <250 (DKA) to avoid hypoglycemia while continuing insulin

STEP 2 — POTASSIUM (replace before insulin if K+ <3.5):
• K+ <3.3: HOLD insulin → replace 40 mEq/h until K+ ≥3.5 → THEN start insulin
• K+ 3.3-5.0: add 20-40 mEq K+ to each liter of IVF
• K+ >5.0: hold K+ replacement; check q2h; watch for rapid K+ drop with insulin

STEP 3 — INSULIN:
• Do NOT start insulin if K+ <3.3 (fatal hypokalemia risk)
• Bolus: 0.1 U/kg regular insulin IV (optional; some protocols skip bolus)
• Infusion: 0.1 U/kg/h regular insulin IV
• Goal: AG closes, β-OHB <1 mmol/L
• Transition to SQ insulin: when AG closed AND patient eating; overlap insulin gtt with first SQ dose by 2h

BICARBONATE:
• Consider ONLY if pH <7.0 (rarely indicated; sodium bicarbonate 100 mEq in 400 mL D5W + 20 mEq KCl over 2h)
• AVOID routine bicarbonate — may worsen cerebral acidosis and hypokalemia

PHOSPHORUS: replace if <1.0 mg/dL or symptomatic

IDENTIFY AND TREAT PRECIPITANT`,monitoring:`• BMP q2h until AG closes, then q4h
• VBG q2-4h (trend pH and bicarb)
• Serum β-OHB q2-4h
• Fingerstick glucose q1h while on insulin infusion
• K+ trend — most critical during initial resuscitation
• Urine output monitoring (Foley catheter)`,disposition:`• ICU: severe DKA (pH <7.0), hemodynamic instability, AMS, inability to protect airway, concurrent STEMI or sepsis
• Stepdown/Floor: mild-moderate DKA, close nursing monitoring for insulin protocol
• Transition to subQ insulin and initiate diabetic education before discharge`},{id:`ssti`,system:`id`,title:`Cellulitis / SSTI`,keywords:[`cellulitis`,`ssti`,`skin infection`,`soft tissue`,`mrsa`,`wound`,`erythema`,`abscess`,`necrotizing fasciitis`,`furuncle`],source:{chapter:`Infectious Disease`,section:`Skin & Soft Tissue Infections`,pages:`110–111`,authors:`Alec Ohanian`,keyFacts:[`Non-purulent mild cellulitis: cephalexin 500mg QID ×5d — Strep >> Staph; add TMP-SMX DS only if trauma or MRSA risk`,`Purulent abscess: I&D is primary treatment — no antibiotics needed if well-drained, immunocompetent, and no systemic signs`,`Blood cultures: low yield <10% — obtain only if systemic toxicity, extensive involvement, immunosuppressed, or special exposures (bites, water)`,`ALT-70 score: location + age + WBC + HR — use to avoid antibiotics in bilateral lower extremity erythema mimics`,`Necrotizing fasciitis: IMMEDIATE surgical debridement + vancomycin + pip-tazo + clindamycin (antitoxin); do NOT delay surgery for imaging`]},assessment:`#Skin & Soft Tissue Infection (Cellulitis / SSTI)
Location: ___  |  Size/Extent: ___  |  Purulence: [ ] Yes (abscess)  [ ] No (non-purulent)
Severity: [ ] Mild (local infection, no systemic signs)  [ ] Moderate (systemic signs of infection)  [ ] Severe (systemic sepsis, rapid spread, immunocompromised, deeper involvement)
Risk factors: [ ] DM  [ ] Immunosuppression  [ ] PWID  [ ] Lymphedema/venous stasis  [ ] Prior MRSA  [ ] Trauma/biopsy site
Necrotizing fasciitis excluded: [ ] Yes  [ ] Concern — surgical consult needed
ALT-70 score: ___ (if score low, consider avoiding antibiotics for bilateral lower extremity erythema)`,ddx:`Non-infectious mimics (especially bilateral lower extremity — consider strongly):
• Venous stasis dermatitis
• Lipodermatosclerosis
• DVT
• Contact dermatitis, drug reaction
• Gout / crystal arthropathy
• Lymphedema
Infectious:
• Cellulitis (non-purulent — typically Streptococcal)
• Abscess (purulent — typically S. aureus including MRSA)
• Erysipelas (well-demarcated, superficial, upper dermis)
• Necrotizing fasciitis (surgical emergency — gas in soft tissue, out-of-proportion pain, rapid spread, systemic toxicity)
• Septic arthritis / bursitis / osteomyelitis (if near joint or bone)`,workup:`• Clinical diagnosis — no routine labs needed for mild non-purulent cellulitis
• WBC, BMP (assess systemic infection, baseline renal function for dosing)
• Blood cultures: LOW yield (<10%); obtain if systemic toxicity, extensive involvement, immunosuppressed, surgical wound, special exposures (bites, water), extremes of age
• Wound/drainage culture (if abscess): aspirate or swab after I&D
• US (soft tissue): assess for drainable abscess or gas
• Plain radiograph: r/o underlying osteomyelitis, gas in soft tissue
• MRI soft tissue: gold standard for necrotizing fasciitis vs. cellulitis; CT can also assess (gas tracking along fascia)
• Mark borders with skin marker + time/date; photograph daily`,management:`NON-PURULENT CELLULITIS:
Organisms: Group A Strep >> S. aureus > GNRs
• Mild: cephalexin 500mg PO QID OR dicloxacillin 500mg PO QID × 5d (up to 14d if slow response)
• Moderate (systemic signs): cefazolin 1-2g IV q8h OR oxacillin
• Severe/MRSA risk or failure to PO: vancomycin IV (goal trough 10-20 or AUC-guided)
• Duration: 5 days (up to 14d if delayed improvement); elevate limb; document margins daily

PURULENT CELLULITIS / ABSCESS:
Organisms: S. aureus (MRSA >> MSSA)
• I&D: primary treatment for abscess regardless of severity
• Mild: I&D alone (no antibiotics if well-drained and no systemic signs in immunocompetent)
• Moderate: TMP-SMX DS (1-2 tabs PO BID) OR clindamycin 300-450mg PO TID × 5-7d
• Severe/MRSA: vancomycin IV; linezolid if outpatient MRSA

NECROTIZING FASCIITIS (surgical emergency):
• IMMEDIATE surgical consult for operative debridement
• Broad-spectrum IV antibiotics: vancomycin + pip-tazo + clindamycin (antitoxin)
• ICU-level care; high mortality if delayed surgery
• IVIG: consider in streptococcal toxic shock syndrome`,monitoring:`• Daily wound inspection — photograph and measure erythema margins (use marker)
• Systemic signs q8-12h (temperature, WBC)
• Monitor for worsening despite antibiotics at 48-72h (consider deeper infection, resistant organism, non-infectious etiology)
• Renal function if on vancomycin (AUC-guided dosing preferred)`,disposition:`• Outpatient: mild cellulitis without systemic signs, non-purulent or I&D-treated abscess, adequate oral intake
• Inpatient: systemic infection signs, failure of outpatient therapy, immunocompromised, inability to take PO, necrotizing fasciitis concern, rapidly spreading infection
• Surgical consult: fluctuant abscess needing I&D, suspected necrotizing fasciitis, osteomyelitis`},{id:`ams`,system:`neuro`,title:`Altered Mental Status / Delirium`,keywords:[`ams`,`altered mental status`,`delirium`,`confusion`,`encephalopathy`,`agitation`,`acute confusion`,`disorientation`],source:{chapter:`Neurology`,section:`Altered Mental Status & Delirium`,pages:`183–184`,authors:`Thomas Ituarte`,keyFacts:[`CAM criteria: Acute onset + fluctuating course AND Inattention AND (Disorganized thinking OR Altered LOC) — all 3 required for delirium diagnosis`,`FIRST action: fingerstick glucose STAT — immediately reversible and must be excluded before any other workup`,`Wernicke's: thiamine 500mg IV TID ×7d BEFORE glucose/dextrose in alcoholic or malnourished patients`,`HSV encephalitis: acyclovir 10 mg/kg IV q8h empirically — do NOT wait for MRI or CSF PCR to initiate`,`Non-pharmacologic delirium Rx (first-line): reorientation, sleep-wake cycle optimization, early mobilization, minimize anticholinergic medications, remove unnecessary lines/catheters`]},assessment:`#Altered Mental Status (AMS) / Delirium
Baseline mental status: ___  |  Onset: [ ] Acute (<24h)  [ ] Subacute (days)  [ ] Chronic (weeks-months)
Delirium subtype: [ ] Hyperactive (agitation, psychosis)  [ ] Hypoactive (lethargy, withdrawal)  [ ] Mixed
Reversible causes screened: [ ] Infection  [ ] Metabolic  [ ] Medications/Toxins  [ ] Structural/Neurologic  [ ] Psychiatric
CAM criteria: Acute onset + fluctuating course AND [Inattention] AND [Disorganized thinking OR altered LOC]`,ddx:`Structural/Neurologic (must rule out urgently):
• Stroke / TIA, subdural hematoma, ICH, subarachnoid hemorrhage
• CNS infection (bacterial meningitis, viral encephalitis, HSV encephalitis — empiric treatment if suspected)
• Seizure (postictal state, non-convulsive status epilepticus — NCSE)
• Hypertensive encephalopathy

Metabolic / Toxic:
• Hypoglycemia (check immediately)
• Hyponatremia, hypercalcemia, hepatic encephalopathy, uremia
• Hypothyroidism, adrenal insufficiency
• Hypoxia, hypercarbia, sepsis
• Medications: anticholinergics, benzodiazepines, opioids, steroids, antiepileptics, polypharmacy
• Intoxication or withdrawal (alcohol, benzodiazepines)

Psychiatric:
• Psychosis (r/o organic etiology first)
• Mania, severe depression`,workup:`EMERGENT (before anything else):
• Fingerstick glucose (STAT — hypoglycemia is immediately reversible)
• SpO2 + ABG if hypoxemic
• ECG (r/o arrhythmia causing hypoperfusion)

INITIAL LABS:
• BMP (Na, K, Ca, BUN/Cr, glucose), LFTs (ammonia if liver disease), TSH
• CBC with differential
• Urinalysis + urine culture (r/o UTI — common precipitant in elderly)
• Blood cultures if febrile or sepsis suspected
• Thiamine level + B12 (malnutrition, alcoholism)
• Toxicology screen (urine + serum; ethanol level)
• ABG/VBG (r/o hypercapnia, severe acidemia)

NEUROIMAGING:
• STAT NCHCT: r/o hemorrhage, large territorial infarct, mass effect (do before LP if concern for elevated ICP)
• MRI brain with and without contrast (preferred): if focal neurologic findings, seizure, encephalitis concern, or CT non-diagnostic
• CT angiography: if concern for large vessel occlusion or vascular malformation

LP (lumbar puncture) — consider if:
• Fever + AMS + meningismus → suspect bacterial meningitis (treat empirically while awaiting CT and LP)
• Encephalitis concern (HSV, autoimmune, EBV, CMV)
• CSF VDRL (if neurosyphilis suspected)

EEG:
• Urgent if: suspected NCSE, unexplained AMS after seizure, or refractory altered MS after treatment

ADDITIONAL:
• Blood cultures (before antibiotics in meningitis/encephalitis)
• Medication reconciliation (Beers criteria medications, anticholinergic burden, sedating medications)`,management:`1. TREAT UNDERLYING CAUSE (primary intervention):
   • Hypoglycemia: D50W 50mL IV or glucagon 1mg IM/SQ
   • Bacterial meningitis: empiric vancomycin + ceftriaxone (± ampicillin if >50yo or immunocompromised) + dexamethasone; LP AFTER empiric antibiotics
   • HSV encephalitis: acyclovir 10mg/kg IV q8h (empiric, pending MRI and CSF PCR)
   • Wernicke's encephalopathy: thiamine 500mg IV TID × 7d (give BEFORE glucose in alcoholic)
   • Hepatic encephalopathy: lactulose, rifaximin, treat precipitant
   • Opioid toxicity: naloxone 0.4-2mg IV/IM/IN; titrate to effect
   • Benzodiazepine toxicity: supportive care; flumazenil rarely indicated

2. NON-PHARMACOLOGIC DELIRIUM MANAGEMENT (first-line):
   • Reorient frequently (clock, calendar, family at bedside)
   • Optimize sleep-wake cycle (avoid nighttime disruptions, dim lights at night)
   • Early mobilization and physical/occupational therapy
   • Correct sensory deficits (hearing aids, glasses)
   • Minimize anticholinergic, sedating, and Beers medications
   • Avoid urinary catheters and physical restraints when possible

3. PHARMACOLOGIC MANAGEMENT (agitation only, when non-pharmacologic measures fail):
   • Haloperidol 0.5-1mg PO/IV q6-8h PRN (lower doses in elderly); check QTc
   • Quetiapine 12.5-25mg PO BID PRN (may be preferred in Parkinson's, dementia with Lewy bodies)
   • Avoid benzodiazepines (except alcohol/BZD withdrawal delirium)
   • Dexmedetomidine: consider in ICU if mechanically ventilated`,monitoring:`• CAM (Confusion Assessment Method) q8-12h — track delirium course
• Daily medication review (minimize anticholinergic burden and sedating medications)
• Neurologic exam daily (track for signs of worsening or new focal deficit)
• Serial glucose, electrolytes, renal/hepatic function
• EEG if altered MS not improving despite treatment`,disposition:`• ICU: NCSE, bacterial meningitis/encephalitis, severe metabolic derangements, hemodynamic instability, intubation
• Neurology consult: new focal findings, seizure, encephalitis concern, NCSE suspected, rapidly progressive dementia
• Geriatrics/psychiatry: delirium superimposed on dementia, complex behavioral management`},{id:`etoh-withdrawal`,system:`neuro`,title:`Alcohol Use Disorder / Withdrawal`,keywords:[`alcohol withdrawal`,`etoh`,`ciwa`,`seizure`,`delirium tremens`,`DTs`,`benzodiazepine`,`phenobarbital`,`aws`,`alcoholism`],source:{chapter:`Neurology / Psychiatry`,section:`Alcohol Use Disorder`,pages:`199–200`,authors:`Thomas Ituarte`,keyFacts:[`AWS timeline: tremor/anxiety 6-24h; seizures 12-48h (can occur without prior CIWA elevation); DTs 24-72h`,`Thiamine FIRST: give before any glucose/dextrose — prevents precipitating Wernicke's encephalopathy`,`Phenobarbital preferred or add-on for: prior DTs/seizures/ICU withdrawal, CIWA not improving despite >6mg lorazepam/h`,`Symptom-triggered BZD dosing (CIWA-guided): preferred over standing doses — reduces total BZD use and treatment duration`,`Atropine NOT useful for CHB — similarly BZDs (not antipsychotics) are the definitive treatment for DTs and AWS seizures`]},assessment:`#Alcohol Withdrawal Syndrome (AWS)
Last drink: ___  |  CIWA-Ar score: ___  |  Daily alcohol consumption: ___
Prior complicated withdrawal: [ ] Yes (DTs / seizures / ICU admissions)  [ ] No
AWS Timeline:
• 6-24h: tremor, anxiety, diaphoresis, tachycardia, hypertension, N/V
• 12-48h: withdrawal seizures (generalized, brief, self-limited — can occur without prior CIWA elevations)
• 24-72h: delirium tremens (DTs) — autonomic instability, severe agitation, hallucinations
Risk factors for severe/complicated withdrawal: prior DTs, prior seizures, high daily alcohol use, concurrent medical illness`,ddx:`• Uncomplicated alcohol withdrawal (tremulousness, diaphoresis, anxiety)
• Alcohol withdrawal seizures (GCSE risk — treat aggressively)
• Delirium tremens (DTs) — medical emergency
• Wernicke's encephalopathy (dietary deficiency + oculomotor dysfxn + cerebellar ataxia + AMS)
• Korsakoff's syndrome (antero + retrograde memory loss, confabulation)
• Other withdrawal: benzodiazepine withdrawal (similar presentation)
• Concurrent CNS pathology: subdural hematoma (trauma, coagulopathy), meningitis, NCSE`,workup:`• CIWA-Ar scoring q4-8h (use mMINDS for patients who cannot self-report)
• BMP (electrolytes — hypomagnesemia, hypokalemia, hypophosphatemia common)
• Magnesium, phosphorus, thiamine level
• CBC (thrombocytopenia, macrocytosis in chronic EtOH)
• LFTs (baseline hepatic function — affects BZD metabolism)
• Blood alcohol level
• Urine drug screen
• Blood cultures if febrile (r/o concurrent infection)
• NCHCT: if first seizure, focal findings, or high suspicion for intracranial pathology
• EEG: if NCSE suspected or prolonged post-ictal state`,management:`THIAMINE (FIRST, before any glucose):
• Wernicke's prophylaxis: thiamine 200mg IV x1 day → 200mg PO BID x4 days
• Suspected Wernicke's encephalopathy: thiamine 500mg IV TID × 7 days (infuse over 30 min)

NUTRITIONAL SUPPLEMENTATION:
• MVI with folic acid daily; thiamine daily; replete Mg2+, K+, phosphorus

BENZODIAZEPINES (1st-line for most patients):
• Use CIWA-Ar guided dosing; avoid treating subjective symptoms alone
• Symptom-triggered (PRN based on CIWA-Ar score ≥8-10): preferred over standing doses
• Lorazepam 1-2mg IV/PO q4-6h PRN (preferred if liver disease, elderly — shorter half-life)
• Diazepam or chlordiazepoxide: longer half-life → smoother course; preferred if no liver disease
• CI: AMS/delirium, active DTs, acute angle-closure glaucoma

PHENOBARBITAL (preferred or add-on in high-risk patients):
• Indications: prior DTs/seizures/ICU withdrawal, patient preference, RESISTANT AWS (CIWA not improving despite >6mg lorazepam/h), or BZD toxicity developing
• Loading dose: 6-10mg/kg (as 3 divided doses) — see Ellucid guidelines for individualized dosing
• Auto-taper, long half-life (1-4 days), wide therapeutic window
• CI: SJS/TEN history, acute intermittent porphyria, unstable respiratory status

DELIRIUM TREMENS (DTs) — ICU-level care:
• Aggressive BZD loading → phenobarbital if BZD-refractory
• Dexmedetomidine or propofol infusion in ICU setting
• Correct electrolytes; maintain hydration
• Haloperidol for psychosis/agitation (adjunct, does NOT prevent seizures or DTs)`,monitoring:`• CIWA-Ar q4-8h; mMINDS if cannot communicate
• Total daily BZD requirements (watch for escalation → consider phenobarbital switch)
• Vital signs q2-4h (HR, BP, temperature — autonomic instability in DTs)
• Electrolytes daily (Mg2+, K+, phosphorus)
• Glucose monitoring (if on dextrose-containing fluids or at hypoglycemia risk)`,disposition:`• ICU: DTs, refractory seizures, requiring phenobarbital loading, hemodynamic instability, concurrent severe illness
• Stepdown/floor: high CIWA scores, requiring IV BZDs, prior complicated withdrawal
• Discharge: clinically stable, CIWA scores low, tolerating PO medications, safety assessment
• Disposition planning: offer naltrexone, acamprosate, or disulfiram for AUD treatment; addiction medicine/social work referral`},{id:`preseptal-orbital-cellulitis`,system:`id`,title:`Preseptal / Orbital Cellulitis`,keywords:[`orbital cellulitis`,`preseptal cellulitis`,`periorbital cellulitis`,`eyelid swelling`,`proptosis`,`ophthalmoplegia`,`sinusitis complication`,`eye infection`],source:{chapter:`Infectious Disease`,section:`Orbital & Preseptal Cellulitis`,pages:`108`,authors:`Alexandra Miller, Amanda Ward`,keyFacts:[`Key distinction: Preseptal = eyelid only, no proptosis/ophthalmoplegia; Orbital = posterior to septum, proptosis + painful/restricted EOM + diplopia`,`CT orbits AND sinuses with IV contrast: mandatory — cannot distinguish preseptal vs. orbital on clinical exam alone`,`Preseptal mild: augmentin 875mg q12h; add TMP-SMX DS if skin trauma or no improvement at 24h; clindamycin NOT recommended (poor GNR coverage)`,`Orbital: vancomycin + ceftriaxone 2g IV q12h; add metronidazole if odontogenic/sinogenic source or CNS concern`,`Cavernous sinus thrombophlebitis: bilateral involvement + high fever + AMS + CN III/IV/V/VI palsies → MRI brain required`]},assessment:`#Preseptal / Orbital Cellulitis
Eyelid erythema, edema, and pain consistent with [preseptal (periorbital) / orbital] cellulitis.
Classification:
[ ] PRESEPTAL: infection anterior to orbital septum; eyelid involvement only; NO proptosis, NO ophthalmoplegia, NO pain with EOM
[ ] ORBITAL: infection of orbit contents (fat, ocular muscles) posterior to septum; proptosis, painful or restricted EOM, diplopia
Source:
[ ] Rhinosinusitis (most common)  [ ] Local trauma / insect bite / scratch  [ ] Dacryocystitis  [ ] Odontogenic  [ ] Post-surgical
Complications assessed: vision changes [ ] / proptosis [ ] / ophthalmoplegia [ ] / fever [ ] / AMS [ ]`,ddx:`• Preseptal (periorbital) cellulitis — anterior to orbital septum; no globe involvement
• Orbital cellulitis — posterior to orbital septum; involves orbital fat and/or ocular muscles
• Subperiosteal abscess — collection between periorbita and orbital wall; requires surgical drainage
• Orbital abscess — intraconal or extraconal collection; surgical emergency
• Cavernous sinus thrombophlebitis — bilateral involvement, high fever, AMS, CN palsies (III, IV, V, VI), septic appearance
• Dacryocystitis — medial canthal swelling, lacrimal sac tenderness, tearing
• Contact dermatitis / allergic reaction — bilateral, non-tender, afebrile
• Chalazion / hordeolum — localized lid nodule, afebrile
• Leukemia cutis / orbital lymphoma — painless, subacute onset`,workup:`• CT orbits AND sinuses with IV contrast (STAT): mandatory to distinguish preseptal vs. orbital cellulitis; evaluate for subperiosteal/orbital abscess and sinus source
• MRI brain with gadolinium: if concern for cavernous sinus thrombophlebitis or CNS extension (AMS, bilateral findings, CN palsies)
• Blood cultures x2 (if orbital cellulitis, febrile, or systemic toxicity)
• CBC with differential, BMP, CRP, ESR
• LP: if concern for CNS extension (meningismus, AMS, high fever with orbital cellulitis)
• Ophthalmology consult: STAT for orbital cellulitis; urgent for preseptal with vision concern
• ENT consult: if sinogenic source, subperiosteal or orbital abscess, or failure to improve
• Visual acuity, pupillary response, and extraocular movements — document at baseline and reassess q4-8h`,management:`PRESEPTAL CELLULITIS:
• Mild (no systemic signs, no trauma history, tolerating PO):
  - Augmentin (amoxicillin-clavulanate) 875mg PO q12h x7-10 days
  - Add TMP-SMX 1-2 DS tabs PO q12h if: history of skin trauma, prior MRSA, OR no improvement at 24h
  - Clindamycin is NOT recommended (insufficient gram-negative coverage for sinogenic organisms)
• Moderate-severe or inability to take PO:
  - Ampicillin-sulbactam 3g IV q6h OR cefazolin 1-2g IV q8h
  - Add vancomycin if MRSA risk factors or failure of outpatient therapy

ORBITAL CELLULITIS:
• Admit — IV antibiotics required
• Vancomycin 15-20 mg/kg IV q8-12h (AUC-guided dosing) + Ceftriaxone 2g IV q12h
• Add metronidazole 500mg IV q8h if: concern for CNS involvement, odontogenic or sinogenic origin
• Ophthalmology consult STAT
• ENT consult: all orbital cellulitis cases; drain sinus disease if present
• Surgical drainage (ophthalmology ± ENT): subperiosteal or orbital abscess, no improvement at 24-48h, vision compromise, ophthalmoplegia not improving

CAVERNOUS SINUS THROMBOPHLEBITIS (if suspected):
• Vancomycin + ceftriaxone + metronidazole + antifungal coverage (voriconazole) if immunocompromised
• Anticoagulation: controversial; consider in consultation with neurology and ID
• Neurosurgery consult if intracranial extension

DURATION:
• Preseptal: 7-10 days total (IV → PO step-down once improving and afebrile x24h)
• Orbital: typically 14-21 days; individualize based on response and surgical debridement`,monitoring:`• Visual acuity and pupillary response q4-8h (declining vision = surgical emergency)
• Extraocular movements and proptosis assessment daily — worsening requires repeat CT and surgical consultation
• Fever curve and systemic signs
• Blood culture results → narrow antibiotics
• Repeat CT orbit/sinus at 24-48h if no clinical improvement or worsening
• Vancomycin AUC monitoring (goal AUC/MIC 400-600)`,disposition:`• OUTPATIENT: preseptal cellulitis only — mild, no fever, tolerating PO, reliable follow-up in 24h
• INPATIENT: all orbital cellulitis, preseptal with systemic toxicity or failure of outpatient therapy, concern for abscess, immunocompromised
• ICU: cavernous sinus thrombophlebitis, intracranial extension, septic shock, airway compromise
• Ophthalmology follow-up at 24h for outpatient preseptal cellulitis; STAT consult for all orbital cases`},{id:`deep-neck-infection`,system:`id`,title:`Deep Neck Space Infections (Ludwig's / Lemierre / Peritonsillar / Retropharyngeal)`,keywords:[`deep neck infection`,`ludwig angina`,`lemierre syndrome`,`peritonsillar abscess`,`retropharyngeal abscess`,`parapharyngeal abscess`,`neck abscess`,`odontogenic`,`airway compromise`,`trismus`,`dysphagia`],source:{chapter:`Infectious Disease`,section:`Head & Neck Infections`,pages:`108`,authors:`Alexandra Miller, Amanda Ward`,keyFacts:[`Organisms by source: odontogenic → streptococci + oral anaerobes; otogenic → PsA; sinogenic → MRSA`,`Empiric by source: odontogenic — amp-sulbactam or CTX+MNZ; otogenic — cefepime+MNZ; sinogenic — vancomycin+CTX+MNZ`,`Ludwig's angina: submandibular space, odontogenic source, polymicrobial (viridans strep) — rapid airway compromise; STAT ENT + anesthesia`,`Lemierre syndrome: Fusobacterium necrophorum; pharyngitis + IJ septic thrombophlebitis + septic pulmonary emboli; treat with pip-tazo OR CTX+MNZ → anticoagulation`,`Airway assessment FIRST in all deep neck infections — prepare surgical airway (cricothyrotomy) as backup`]},assessment:`#Deep Neck Space Infection
Suspected deep neck space infection based on [neck pain / dysphagia / odynophagia / trismus / drooling / fever / neck swelling / airway symptoms].
Source: [ ] Odontogenic  [ ] Peritonsillar / tonsillar  [ ] Otogenic  [ ] Sinogenic  [ ] Salivary gland  [ ] Unknown
Space involved (circle/confirm on CT):
[ ] Submandibular (Ludwig's angina)  [ ] Peritonsillar  [ ] Retropharyngeal  [ ] Parapharyngeal  [ ] Prevertebral  [ ] Carotid sheath
Airway status: [ ] Patent — monitor closely  [ ] Stridor/distress — activate airway team NOW
Septic emboli assessed (Lemierre): [ ] Pulmonary infiltrates  [ ] Pleural effusion  [ ] Septic shock`,ddx:`SPACE-SPECIFIC:
• Ludwig's angina (submandibular space) — bilateral submandibular/sublingual space infection; "double tongue," floor of mouth elevation, drooling; rapid airway compromise; most commonly odontogenic
• Peritonsillar abscess (PTA) — most common deep neck infection; uvular deviation, "hot potato" voice, trismus, fluctuance lateral to tonsil; Strep pyogenes, oral anaerobes
• Retropharyngeal abscess — posterior pharyngeal bulge, neck stiffness, muffled voice, fever; risk of mediastinal extension
• Parapharyngeal abscess — lateral neck swelling, trismus, medial displacement of tonsil; contiguous spread from PTA or dental
• Lemierre syndrome — internal jugular septic thrombophlebitis following pharyngitis; septic pulmonary emboli; most commonly Fusobacterium necrophorum; often in young adults after recent sore throat
• Epiglottitis — severe odynophagia, muffled voice, dysphagia, drooling; "thumbprint sign" on lateral neck XR; H. influenzae, GAS, S. aureus; AIRWAY EMERGENCY
• Masticator space / submasseter abscess — trismus, ipsilateral jaw pain, cheek swelling; odontogenic source (molar)
• Carotid sheath abscess — lateral neck mass, CN palsies, Horner syndrome; may erode internal carotid (rare)

NON-INFECTIOUS MIMICS:
• Angioedema (rapid onset, no fever)
• Malignant lymphadenopathy (subacute, constitutional symptoms)
• Thyroid mass or goiter
• Cervical osteomyelitis or discitis`,workup:`• CT neck with IV contrast (STAT): define space involved, assess for abscess, evaluate for mediastinal extension
• CT chest: if concern for mediastinitis (Lemierre, descending necrotizing mediastinitis) or septic pulmonary emboli
• CT neck angiography (CTA): if Lemierre suspected (to evaluate internal jugular vein thrombosis)
• MRI neck ± spine: if vertebral osteomyelitis or spinal cord compression suspected
• Blood cultures x2 (before antibiotics)
• CBC with differential, BMP, CRP, ESR, LFTs, coagulation studies
• Throat culture / rapid Strep antigen if pharyngeal source
• Surgical / IR culture of abscess contents: aerobic + anaerobic + fungal
• ENT consult STAT: all deep neck infections — drainage and airway management
• Lateral neck radiograph: if epiglottitis suspected (thumbprint sign, "steeple sign")
• Otolaryngology: bedside flexible laryngoscopy for airway evaluation if epiglottitis or Ludwig's angina`,management:`AIRWAY FIRST — all deep neck infections:
• If stridor, drooling, respiratory distress, or Ludwig's angina: call ENT and anesthesia STAT for bedside airway evaluation; prepare for surgical airway (cricothyrotomy) if intubation fails
• Elevate HOB 30-45°, supplemental O2, establish large-bore IV access
• Do NOT perform blind throat manipulation without airway secured

ANTIBIOTICS (empiric, before cultures):
• Odontogenic source (Ludwig's, submandibular, parapharyngeal):
  - Ampicillin-sulbactam 3g IV q6h (first-line; covers streptococci, oral anaerobes, H. flu)
  - Alternative: ceftriaxone 2g IV q24h + metronidazole 500mg IV q8h
  - MRSA risk or PWID: add vancomycin
• Otogenic source: cefepime 2g IV q8h + metronidazole 500mg IV q8h
• Sinogenic source / immunocompromised: vancomycin + ceftriaxone + metronidazole
• Lemierre syndrome: pip-tazo 4.5g IV q6h OR ceftriaxone + metronidazole; duration 3-6 weeks
• Epiglottitis: ceftriaxone 2g IV q24h ± vancomycin (MRSA risk); dexamethasone 0.15 mg/kg IV q6h (reduce edema)

SURGICAL / PROCEDURAL:
• Peritonsillar abscess: needle aspiration (preferred, diagnostic + therapeutic) OR incision and drainage by ENT
• Ludwig's angina: surgical drainage under general anesthesia with protected airway; submental/submandibular incisions
• Retropharyngeal / parapharyngeal abscess: ENT drainage (transoral or external) based on location and size
• Lemierre: anticoagulation controversial — consider if no improvement with antibiotics alone; consult ID and hematology

DURATION:
• Uncomplicated PTA: 10-14 days PO after drainage
• Deep neck space abscess: 2-4 weeks IV/PO depending on response; longer if mediastinal extension or vertebral involvement`,monitoring:`• Airway reassessment at minimum q4-8h — any worsening stridor, drooling, or dyspnea → ENT/airway team STAT
• Fever curve and clinical response at 24-48h; repeat CT neck if not improving
• Blood culture results → narrow antibiotics
• CBC, BMP, CRP every 1-2 days (monitor for treatment response and complications)
• Lemierre: serial CTA neck/chest to track IJ thrombosis and pulmonary emboli
• Watch for complications: mediastinitis (pleuritic chest pain, tachycardia, new pleural effusion), intracranial spread (AMS, meningismus), carotid artery erosion (rare, catastrophic)`,disposition:`• ICU: Ludwig's angina, airway compromise, epiglottitis requiring intubation, mediastinitis, septic shock, Lemierre with large burden of emboli
• Stepdown/floor: peritonsillar abscess with systemic infection, deep neck abscess requiring IV antibiotics, post-drainage monitoring
• ENT consult ALL cases: drainage decision, airway monitoring, follow-up
• Infectious Disease consult: Lemierre syndrome, immunocompromised host, treatment failure, prolonged IV therapy`},{id:`osteomyelitis`,system:`id`,title:`Osteomyelitis`,keywords:[`osteomyelitis`,`bone infection`,`vertebral osteomyelitis`,`diabetic foot`,`discitis`,`bacteremia bone`,`staph aureus bone`],source:{chapter:`Infectious Disease`,section:`Osteomyelitis`,pages:`111–112`,authors:`Julia Page`,keyFacts:[`Bone biopsy: gold standard — obtain BEFORE antibiotics (blood cultures often positive 50-70%); need aerobic + anaerobic + fungal + mycobacterial + histopathology`,`MRI with contrast: modality of choice (Sn 90%, Sp 82%); best for vertebral OM; obtain if <2 weeks symptoms or XR non-diagnostic`,`Diabetic foot: probing to bone diagnostic (Sn 87%, Sp 83%) — no further imaging needed in DM foot OM`,`OVIVA trial (NEJM 2019): oral antibiotics non-inferior to IV for complex bone and joint infections when clinically improving`,`Vertebral OM: minimum 6 weeks antibiotics; CT-guided biopsy preferred; TTE to rule out endocarditis as source`]},assessment:`#Osteomyelitis
Suspected osteomyelitis based on [localized bone pain / fever / erythema / non-healing wound / probe-to-bone positive / imaging findings].
Classification:
[ ] Hematogenous (monomicrobial; often from bacteremia or endocarditis)
[ ] Contiguous spread / direct inoculation (polymicrobial; post-surgery, trauma, diabetic foot ulcer, pressure wound)
Site: [ ] Long bone  [ ] Vertebral / Spondylodiscitis  [ ] Pelvic  [ ] Sternal/clavicular  [ ] Foot (diabetic)  [ ] Mandibular/maxillofacial
Acuity: [ ] Acute (<2 weeks)  [ ] Chronic (>3 weeks, necrotic bone, sinus tract, or prior failed treatment)`,ddx:`• Hematogenous osteomyelitis — S. aureus most common; Salmonella in sickle cell disease; GNRs in elderly/PWID; Brucella in endemic areas
• Contiguous/direct inoculation osteomyelitis — polymicrobial; foot osteomyelitis in DM (S. aureus, Strep, Enterobacteriaceae, anaerobes)
• Vertebral osteomyelitis / spondylodiscitis — S. aureus (most common), GNRs, Strep, Candida, TB (Pott disease); often hematogenous
• Septic arthritis (adjacent joint involvement — rule out)
• Cellulitis / soft tissue infection without bony involvement
• Malignancy (primary bone tumor or metastases) — exclude on MRI
• CRMO (chronic recurrent multifocal osteomyelitis) — young patients, non-bacterial
• Charcot neuropathic arthropathy — DM, peripheral neuropathy; can mimic foot osteomyelitis
• Avascular necrosis`,workup:`• Blood cultures x2 (before antibiotics; positive in 50-70% of hematogenous cases involving vertebra, clavicle, pelvis)
• CBC, BMP, ESR, CRP (useful for monitoring treatment response)
• Bone biopsy: GOLD STANDARD — obtain before empiric antibiotics unless hemodynamically unstable or neurologic compromise
  - Percutaneous CT-guided biopsy (preferred for vertebral osteomyelitis, consult IR or ortho)
  - Open biopsy if percutaneous non-diagnostic and suspicion high
  - Send: aerobic + anaerobic + fungal + mycobacterial cultures; histopathology
• Imaging:
  - Plain radiograph: first-line if >2 weeks symptoms; insensitive early
  - MRI with contrast: modality of choice; Sn 90%, Sp 82%; best for vertebral osteomyelitis and diabetic foot; order if symptoms <2 weeks or XR non-diagnostic
  - CT: if MRI unavailable; shows cortical destruction and periosteal reaction
  - Nuclear bone scan: sensitive but non-specific; use if hardware precludes MRI
• Diabetic foot: probing to bone is diagnostic (Sn 87%, Sp 83%); vascular surgery consult for PAD assessment
• Echocardiogram (TTE): if hematogenous osteomyelitis suspected (rule out endocarditis as source or concurrent disease)`,management:`EMPIRIC ANTIBIOTICS (after bone biopsy obtained):
• MSSA-predominant (community, no MRSA risk):
  - Cefazolin 2g IV q8h OR nafcillin 2g IV q4h (for MSSA — superior to vancomycin)
• MRSA risk (prior MRSA, healthcare-associated, IV drug use):
  - Vancomycin 15-20 mg/kg IV q8-12h (AUC-guided dosing; target AUC/MIC 400-600)
• Vertebral / hematogenous (gram-negative risk):
  - Vancomycin + ceftriaxone 2g IV q24h pending cultures
• Diabetic foot / contiguous / polymicrobial:
  - Pip-tazo 4.5g IV q6h OR ampicillin-sulbactam 3g IV q6h (broad spectrum)
• Culture-directed de-escalation at 48-72h

SURGICAL CONSIDERATIONS:
• Orthopedic or ID-guided surgical debridement: chronic osteomyelitis, necrotic bone (sequestrum), hardware-associated infection, sinus tract
• Vascular surgery: diabetic foot osteomyelitis with PAD (revascularization improves outcomes)
• Neurosurgery: vertebral osteomyelitis with epidural abscess or cord compression (emergent decompression)

DURATION:
• Acute hematogenous osteomyelitis (no necrotic bone, no hardware): 4-6 weeks total IV/PO
• Vertebral osteomyelitis: minimum 6 weeks IV antibiotics; individualize based on response
• Diabetic foot osteomyelitis: 6 weeks (shorter if complete resection of infected bone achieved)
• Can transition to oral (highly bioavailable agents: FQ, TMP-SMX, linezolid, clindamycin) once clinically improving and pathogen identified
• Oral step-down supported by OVIVA trial (NEJM 2019;380:425): oral non-inferior to IV for complex bone and joint infections`,monitoring:`• ESR and CRP weekly during treatment (expect decline; plateau or rise = treatment failure)
• Blood cultures: repeat if initially positive until sterile
• CBC, BMP, LFTs every 1-2 weeks during prolonged IV antibiotics
• Vancomycin AUC monitoring if on prolonged IV vancomycin
• MRI spine: repeat if vertebral osteomyelitis — neurologic deterioration or failure to improve at 4-6 weeks
• Diabetic foot: wound check at 48-72h, vascular assessment, off-loading`,disposition:`• Inpatient: initiation of IV antibiotics, acute vertebral osteomyelitis with instability or cord compression, surgical debridement, hemodynamic instability, poor access for outpatient IV therapy
• OPAT (outpatient parenteral antimicrobial therapy): once clinically stable, afebrile x48h, pathogen identified, and reliable access secured
• Orthopedic surgery consult: chronic osteomyelitis, necrotic bone, hardware-related
• ID consult: all cases (guide duration, de-escalation, oral step-down, OPAT coordination)`},{id:`meningitis-encephalitis`,system:`neuro`,title:`Bacterial Meningitis / Encephalitis`,keywords:[`meningitis`,`encephalitis`,`CSF`,`lumbar puncture`,`bacterial meningitis`,`HSV encephalitis`,`nuchal rigidity`,`fever headache stiff neck`,`kernig`,`brudzinski`,`autoimmune encephalitis`],source:{chapter:`Infectious Disease`,section:`Meningitis & Encephalitis`,pages:`113`,authors:`Thomas Ituarte`,keyFacts:[`95% of bacterial meningitis: ≥2 of fever, neck stiffness, AMS, headache (NEJM 2004;351:1849)`,`DO NOT delay antibiotics for LP or CT: blood cultures BEFORE antibiotics (positive in 70%); no delay >30 min`,`CT before LP only if: immunocompromised, known CNS disease, new seizure, papilledema, AMS, or focal neuro deficit`,`Dexamethasone 0.15 mg/kg q6h ×4d: START BEFORE or WITH first antibiotic dose; greatest benefit in S. pneumoniae meningitis`,`Duration: N. meningitidis/H. flu 7d; S. pneumoniae 14d; Listeria 21-28d (4-8 wk if immunocompromised)`]},assessment:`#Bacterial Meningitis / Encephalitis
Suspected meningitis / encephalitis based on fever + [headache / nuchal rigidity / AMS / photophobia / seizure / focal neurologic findings].
Type: [ ] Bacterial meningitis  [ ] Viral meningitis  [ ] HSV encephalitis  [ ] Autoimmune encephalitis  [ ] Fungal (Cryptococcal)
Clinical features (≥2 of following = 95% Sn for bacterial meningitis): [ ] Fever  [ ] Neck stiffness  [ ] AMS  [ ] Headache
Exam: Kernig's [ ] / Brudzinski's [ ] / Jolt sign [ ] / Papilledema [ ] / Focal neuro deficits [ ] / Petechiae/purpura [ ]
Head CT before LP: [ ] YES (required)  [ ] NO
CT indications: immunocompromised, known CNS disease, new seizure, papilledema, AMS, focal neuro deficit`,ddx:`INFECTIOUS (must distinguish rapidly):
• Bacterial meningitis — S. pneumoniae (most common adult), N. meningitidis (young adults, petechiae), Listeria (>50yo, immunocompromised, alcoholism — add ampicillin), GBS, H. influenzae
• Nosocomial bacterial meningitis — aerobic gram-negative bacilli, S. aureus, CoNS (post-procedure/hardware)
• Viral (aseptic) meningitis — enteroviruses (most common), HSV-2, EBV, CMV, VZV, HIV; CSF lymphocytic pleocytosis, normal glucose
• HSV encephalitis — fever, AMS, temporal lobe involvement (seizures, personality change); MRI temporal hyperintensity; CSF HSV PCR; EMPIRIC ACYCLOVIR until excluded
• Fungal meningitis (Cryptococcus) — subacute, immunocompromised (HIV/AIDS, transplant); India ink, CrAg
• TB meningitis — subacute, basilar enhancement, cranial nerve palsies; AFB smear/culture, ADA

NON-INFECTIOUS:
• Subarachnoid hemorrhage — thunderclap headache, CT/LP with xanthochromia
• Drug-induced aseptic meningitis — NSAIDs, TMP-SMX, IVIG, IV immunoglobulins
• Autoimmune encephalitis — anti-NMDAR, anti-LGI1, anti-CASPR2; subacute AMS, psychiatric symptoms, movement disorders, seizures
• Leptomeningeal carcinomatosis — cancer history, multiple CN palsies, cytology on LP
• Neurosarcoidosis / granulomatous meningitis`,workup:`STAT (do NOT delay antibiotics for LP or imaging if LP not immediately available):
• BLOOD CULTURES x2 BEFORE antibiotics (positive in 70% bacterial meningitis)
• STAT NCHCT: only if CT indicated (see above criteria); do NOT delay antibiotics >30 min for CT
• LUMBAR PUNCTURE (ASAP after CT or immediately if no CT indication):
  - Opening pressure (normal ≤200 mmH2O; bacterial meningitis average 350 mmH2O)
  - Tube 1: cell count + diff
  - Tube 2: glucose + protein (CSF:serum glucose ratio; normal >0.6; bacterial <0.4)
  - Tube 3: Gram stain + bacterial culture (aerobic + anaerobic)
  - Tube 4: cell count (confirm xanthochromia if SAH suspected)
  - Additional send: HSV 1+2 PCR, VZV PCR, enteroviral PCR, cryptococcal antigen, VDRL (if neurosyphilis suspected), cytology (if malignancy), oligoclonal bands, IgG index (if MS/autoimmune)
  - Autoimmune encephalitis panel: serum + CSF anti-NMDAR, anti-LGI1, anti-CASPR2, etc.
• CBC, BMP, coagulation, LFTs, blood glucose (for CSF:serum ratio)
• HIV test (all patients)
• MRI brain with gadolinium: preferred over CT; obtain once stabilized — temporal lobe involvement (HSV), basilar enhancement (TB/fungal), leptomeningeal enhancement, autoimmune`,management:`DO NOT DELAY ANTIBIOTICS WAITING FOR LP OR IMAGING

EMPIRIC ANTIBIOTICS (start within minutes of recognition):
• Adults <50yo: Vancomycin + Ceftriaxone 2g IV q12h
  - Vancomycin covers PCN-resistant S. pneumoniae (not MRSA)
• Adults >50yo or immunocompromised: add Ampicillin 2g IV q4h (covers Listeria)
• Post-neurosurgical / nosocomial: Vancomycin + Cefepime 2g IV q8h (or meropenem 2g IV q8h)
• Severe PCN allergy: Vancomycin + Meropenem 2g IV q8h ± TMP-SMX for Listeria coverage

DEXAMETHASONE:
• 0.15 mg/kg IV q6h x4 days — start BEFORE or WITH first antibiotic dose
• Greatest benefit: S. pneumoniae in adults (reduces hearing loss and neurologic sequelae)
• STOP if not S. pneumoniae meningitis (no benefit in other organisms, may worsen Listeria outcomes)

HSV ENCEPHALITIS (add empirically if encephalitis suspected):
• Acyclovir 10 mg/kg IV q8h (renally dosed) — start empirically; STOP only after HSV PCR negative and alternative diagnosis established

CRYPTOCOCCAL MENINGITIS (if HIV/immunocompromised):
• Amphotericin B liposomal + flucytosine x2 weeks (induction) → fluconazole x8 weeks (consolidation)
• Serial LPs for elevated opening pressure management (target OP <20 cmH2O)
• ID consult mandatory

DURATION (culture-directed):
• N. meningitidis: 7 days
• H. influenzae: 7 days
• S. pneumoniae: 14 days
• Listeria: 21-28 days (4-8 weeks if immunocompromised)
• GNRs (nosocomial): 21 days`,monitoring:`• Neurologic exam q4-8h (track GCS, focal deficits, seizures)
• Blood cultures: repeat until sterile x48h
• Repeat LP: if no clinical improvement at 48h; antimicrobial resistance; ongoing fevers >8 days on treatment
• Serial ECGs (meningitis-associated SIADH → hyponatremia → cardiac arrhythmias)
• BMP daily (SIADH common with meningitis; avoid free water excess, fluid restrict if Na dropping)
• ICP monitoring: if severely elevated OP on LP, obtain neurosurgery consult
• Hearing evaluation before discharge (audiometry)`,disposition:`• ICU: AMS, seizures, elevated ICP, herniation, hemodynamic instability, cryptococcal meningitis
• Neurology consult: seizures, focal findings, autoimmune encephalitis workup, NCSE concern
• ID consult: ALL cases of bacterial meningitis and HSV/cryptococcal encephalitis
• Contact precautions + droplet isolation until N. meningitidis excluded (or 24h of effective antibiotics)
• Prophylaxis for close contacts (meningococcal): ciprofloxacin 500mg PO x1 OR rifampin 600mg PO q12h x2d OR ceftriaxone 250mg IM x1`},{id:`cdiff`,system:`gi`,title:`Clostridioides difficile Infection (CDI)`,keywords:[`c diff`,`c. difficile`,`cdiff`,`clostridium difficile`,`diarrhea`,`colitis`,`pseudomembranous`,`antibiotic associated diarrhea`,`fidaxomicin`,`vancomycin colitis`,`toxic megacolon`],source:{chapter:`Infectious Disease`,section:`Clostridioides difficile Infection`,pages:`114`,authors:`Julia Page`,keyFacts:[`Severity: Non-severe = WBC <15k AND Cr <1.5; Severe = WBC ≥15k OR Cr ≥1.5; Fulminant = hypotension/shock, ileus, or toxic megacolon`,`Fidaxomicin 200mg BID ×10d preferred over vancomycin (lower recurrence rate) for non-severe and severe CDI`,`Fulminant: vancomycin 500mg PO/NG q6h + metronidazole 500mg IV q8h; add vancomycin retention enema if ileus; STAT surgical consult`,`DO NOT retest within 7 days; DO NOT test for cure (may remain positive ≥6 weeks after clinical resolution)`,`Stop non-essential antibiotics: most important single intervention for CDI treatment and prevention`]},assessment:`#Clostridioides difficile Infection (CDI)
Watery diarrhea (≥3 loose stools/24h) with [positive C. diff testing / prior antibiotic exposure / healthcare exposure].
Severity classification:
[ ] NON-SEVERE: WBC <15k AND creatinine <1.5 mg/dL
[ ] SEVERE: WBC ≥15k OR creatinine ≥1.5 mg/dL
[ ] FULMINANT: hypotension / shock / ileus / toxic megacolon
Episode type: [ ] First episode  [ ] First recurrence  [ ] Multiple recurrences (≥2 recurrences)
Risk factors: recent antibiotics (esp. FQ, clinda, cephalosporins, PCN) [ ] / hospitalization [ ] / age >65 [ ] / PPI use [ ] / IBD [ ] / immunosuppression [ ]`,ddx:`• CDI (toxin-mediated diarrhea from C. difficile colonization after gut dysbiosis)
• Non-CDI antibiotic-associated diarrhea (negative C. diff toxin; non-specific osmotic diarrhea from antibiotics — self-limited)
• Post-infectious IBS (prior GI infection → altered gut motility)
• Infectious diarrhea: Salmonella, Campylobacter, Shigella, norovirus, ETEC
• IBD flare (Crohn's or UC) — can co-exist with CDI; check fecal calprotectin, colonoscopy if indicated
• Microscopic colitis — chronic watery diarrhea, middle-aged women; NSAIDs, SSRIs, PPIs
• Ischemic colitis — left-sided abdominal pain, hematochezia, cardiovascular risk factors
• Celiac disease — malabsorptive diarrhea, positive serology`,workup:`• C. diff testing algorithm (do NOT test asymptomatic patients or retest within 7 days of negative result):
  - Step 1: GDH antigen (highly sensitive, constitutively produced — rules out if negative)
  - Step 2: Toxin A/B immunoassay (highly specific, confirms active toxin production)
  - Step 3: Toxin B gene PCR (high sensitivity; positive does not confirm active infection — may detect colonization)
  - Preferred: GDH + Toxin A/B; add PCR only if discordant results
• Stool culture: not routine; use for epidemiology or suspected resistance
• CBC (WBC for severity classification), BMP (creatinine for severity, K+ monitoring), albumin, lactate (if fulminant)
• CT abdomen/pelvis with contrast: if severe or fulminant — assess for colonic thickening, perforation, toxic megacolon, ileus
• Flexible sigmoidoscopy: rarely needed; may show pseudomembranes if suspicion high with negative testing
• Surgical consult: fulminant CDI, suspected perforation, or toxic megacolon`,management:`GENERAL MEASURES (ALL cases):
• Discontinue or de-escalate non-essential antibiotics (most important intervention — reduce gut dysbiosis)
• Discontinue antimotility agents (loperamide, diphenoxylate — may worsen course)
• Discontinue cholestyramine if used (binds oral vancomycin)
• Contact precautions (gloves + gown); soap and water hand hygiene (alcohol gels do NOT kill C. diff spores)
• Avoid PPIs if not clearly indicated (promotes gut dysbiosis)

NON-SEVERE CDI:
• First-line: Fidaxomicin 200mg PO BID x10 days (preferred over vancomycin — lower recurrence rate)
• Alternative: Vancomycin 125mg PO q6h x10 days
• Alternative (if fidax/vanc unavailable): Metronidazole 500mg PO q8h x10-14 days (inferior, use only if first-line agents unavailable)

SEVERE CDI:
• Fidaxomicin 200mg PO BID x10 days OR Vancomycin 125mg PO q6h x10 days
• (Same drugs as non-severe; do NOT use metronidazole)

FULMINANT CDI:
• Vancomycin 500mg PO/NG q6h + Metronidazole 500mg IV q8h
• If ileus or unable to take PO: add Vancomycin 500mg in 100mL NS retention enema q6h
• Surgery consult STAT: subtotal colectomy if refractory, perforation, or clinical deterioration
• Consider Fecal microbiota transplant (FMT) if refractory or multiple recurrences — discuss with GI

RECURRENT CDI:
• First recurrence: fidaxomicin or vancomycin tapered/pulsed regimen
• ≥2 recurrences: consider bezlotoxumab (Zinplava) 10mg/kg IV x1 (monoclonal antibody vs. toxin B; reduces recurrence) + FMT referral`,monitoring:`• Stool frequency daily (track clinical response)
• BMP every 1-2 days in severe/fulminant (renal function, electrolytes — diarrheal losses)
• CBC daily in severe (WBC trajectory — key severity marker)
• Serial abdominal exams in severe/fulminant (bowel sounds, peritoneal signs, abdominal girth)
• Repeat CT A/P if clinical deterioration in fulminant CDI (assess for megacolon, perforation)
• Do NOT perform test-of-cure (C. diff PCR may remain positive for up to 6 weeks despite clinical resolution)`,disposition:`• ICU: fulminant CDI, toxic megacolon, hemodynamic instability, perforation
• Inpatient surgical assessment: all fulminant CDI — early surgical consult
• Outpatient: non-severe CDI with reliable follow-up and ability to take PO
• GI consult: recurrent CDI (≥2 recurrences), consideration of FMT, concurrent IBD
• Infection control: contact precautions throughout hospitalization; private room preferred`},{id:`uti-pyelonephritis`,system:`id`,title:`Urinary Tract Infection / Pyelonephritis`,keywords:[`uti`,`urinary tract infection`,`pyelonephritis`,`cystitis`,`dysuria`,`pyuria`,`bacteriuria`,`cauti`,`urosepsis`,`kidney infection`],source:{chapter:`Infectious Disease`,section:`Urinary Tract Infections`,pages:`109`,authors:`Hugh Shirley`,keyFacts:[`Asymptomatic bacteriuria: do NOT treat (exceptions: pregnancy, <1-2 months post-renal transplant, pre-urologic procedure) — IDSA 2019`,`CAUTI: catheter in place >2d + UTI symptoms + ≥10³ CFU/mL from catheter specimen — remove/replace catheter ASAP`,`Nitrofurantoin: first-line uncomplicated cystitis ×5d; AVOID if GFR <30 or for pyelonephritis (inadequate tissue levels)`,`ESBL-risk: healthcare-associated, prior ESBL, or recurrent infections — use pip-tazo or meropenem empirically`,`Test-of-cure urine culture: NOT routine — only if pregnancy, treatment failure, or suspected resistant organism`]},assessment:`#Urinary Tract Infection / Pyelonephritis
Presenting with [dysuria / frequency / urgency / flank pain / CVA tenderness / fever / pyuria / bacteriuria].
Classification:
[ ] Uncomplicated cystitis (premenopausal ♀, community-acquired, no structural abnormality)
[ ] Complicated UTI (male, pregnancy, structural abnormality, indwelling catheter, immunosuppression, renal transplant, functional impairment)
[ ] Pyelonephritis (upper UTI: fever, flank pain, CVA tenderness ± systemic signs)
[ ] CAUTI (catheter in place ≥2 days with symptoms; or catheter removed within prior 48h)
[ ] Urosepsis (pyelonephritis + meets Sepsis-3 criteria — SOFA ≥2)
[ ] Asymptomatic bacteriuria (bacteriuria without symptoms — do NOT treat, with exceptions below)`,ddx:`• Uncomplicated cystitis (lower UTI: E. coli most common, Klebsiella, Staph saprophyticus in young ♀)
• Pyelonephritis / upper UTI (E. coli 80%, Klebsiella, Proteus, Enterococcus)
• CAUTI (same organisms + Candida, Pseudomonas, Enterococcus)
• Urolithiasis with obstruction ± secondary infection (renal colic, hematuria, CT confirms)
• Perinephric abscess (failed treatment, persistent fever, flank tenderness despite antibiotics — requires drainage)
• Prostatitis (men: perineal pain, urinary hesitancy, tender prostate on exam; do NOT massage)
• Epididymo-orchitis (males: unilateral scrotal pain, swelling, tenderness — consider STIs)
• Pelvic inflammatory disease (♀: lower abdominal pain, cervical motion tenderness, vaginal discharge)
• Vaginitis / STI (dysuria without pyuria; consider GC/CT, BV, yeast)
• Asymptomatic bacteriuria (treat ONLY: pregnancy, <1-2 months post-renal transplant, pre-urologic procedure)`,workup:`• Urinalysis (UA) with microscopy:
  - Pyuria (>5 WBC/hpf): present in most true UTIs; also seen in other conditions
  - Bacteriuria: ≥1 organism on Gram stain; ≥10^5 CFU/mL on culture (10^3 CFU/mL for CAUTI)
  - Nitrites: Sn 50-80% (only Enterobacteriaceae); Leukocyte esterase: Sn 75-85%
  - RBCs: common with cystitis; hematuria alone does not diagnose UTI
• Urine culture + sensitivities (obtain BEFORE antibiotics):
  - All pyelonephritis, complicated UTI, CAUTI, urosepsis cases
  - Uncomplicated cystitis: culture optional if typical presentation in healthy ♀
• Blood cultures x2: if pyelonephritis with systemic signs, urosepsis, immunocompromised, hospitalized
• CBC, BMP (creatinine — renally dose antibiotics, assess severity)
• Renal ultrasound or CT abdomen/pelvis without contrast: if pyelonephritis not improving at 48-72h (rule out obstruction, perinephric abscess)
• CAUTI: replace or remove catheter ASAP; send urine Cx from NEW catheter (not old bag)`,management:`UNCOMPLICATED CYSTITIS (premenopausal ♀, outpatient):
• Nitrofurantoin macrocrystals 100mg PO BID x5d (avoid if GFR <30)
• TMP-SMX DS (160/800mg) PO BID x3d (check local resistance patterns; avoid if >20% local resistance)
• Fosfomycin 3g PO x1 dose (convenient, no resistance issues)
• Ciprofloxacin 250mg PO BID x3d (reserve for culture-guided use due to resistance/side effects)

COMPLICATED UTI / PYELONEPHRITIS (mild, can take PO, outpatient):
• Ciprofloxacin 500mg PO BID x7d OR levofloxacin 750mg PO daily x5d
• TMP-SMX DS PO BID x14d (if susceptible)
• Avoid nitrofurantoin (inadequate tissue levels for upper tract)

PYELONEPHRITIS (inpatient — systemic signs, unable to take PO):
• Ceftriaxone 1-2g IV q24h (first-line; covers most community E. coli/GNRs)
• Pip-tazo 4.5g IV q6h (ESBL risk: prior ESBL, healthcare-associated, recent antibiotics, recurrent infections)
• Meropenem 1g IV q8h: confirmed ESBL or carbapenem-requiring organisms
• Transition to oral when afebrile x48h and tolerating PO (complete 10-14 day total course for pyelonephritis)

UROSEPSIS: follow Sepsis management protocol — early antibiotics, fluid resuscitation, vasopressors if needed (see Sepsis template)

CAUTI:
• Remove or replace catheter ASAP (most important intervention)
• Duration: 7 days if improving; 10-14 days if delayed response
• Add vancomycin if recent catheterization with MRSA risk or MRSA in prior urine Cx
• Candida CAUTI: fluconazole 200-400mg PO/IV daily x14d (if susceptible); treat ONLY if symptomatic`,monitoring:`• Symptom resolution: fever, dysuria, flank pain — expect improvement within 48-72h
• Blood culture results: de-escalate antibiotics when susceptibilities available
• Repeat urine culture (test-of-cure): NOT routine; obtain if: pregnancy, failed treatment, suspected resistant organism, recurrent infection
• BMP: monitor renal function with IV antibiotics (aminoglycosides, carbapenem in renally impaired)
• Clinical reassessment at 48-72h: if not improving — obtain renal imaging to rule out obstruction or abscess`,disposition:`• Outpatient: uncomplicated cystitis, mild pyelonephritis tolerating PO, reliable follow-up
• Inpatient: pyelonephritis with systemic signs or inability to tolerate PO, ESBL/MDR organism requiring IV therapy, urosepsis, structural abnormality, pregnancy, immunocompromised
• Urology consult: obstructive uropathy, perinephric abscess, recurrent pyelonephritis, structural abnormality`},{id:`endocarditis`,system:`cv`,title:`Infective Endocarditis`,keywords:[`endocarditis`,`IE`,`bacteremia`,`heart murmur`,`vegetation`,`S aureus bacteremia`,`PWID`,`mitral valve`,`aortic valve`,`duke criteria`,`splinter hemorrhages`,`janeway lesions`],source:{chapter:`Infectious Disease`,section:`Bloodstream Infections & Endocarditis`,pages:`112`,authors:`Ethiopia Getachew`,keyFacts:[`Duke Criteria: Definite = 2 major OR 1 major + 3 minor OR 5 minor`,`S. aureus/S. lugdunensis: NEVER contaminants — daily surveillance cultures until sterile ×48h; always evaluate for source and endocarditis`,`MSSA: cefazolin or nafcillin significantly superior to vancomycin — switch from empiric vancomycin when susceptibilities confirm MSSA`,`Surgical indications: HF from valve destruction (most common), perivalvular abscess/new AV block, persistent bacteremia >5-7d, fungal IE, vegetation ≥10mm + embolic event`,`S. bovis/gallolyticus bacteremia: order colonoscopy — strong association with colorectal malignancy`]},assessment:`#Infective Endocarditis (IE)
Suspected or confirmed IE based on [persistent bacteremia / new murmur / embolic phenomena / vegetation on echo / fever with valvular risk].
Duke Criteria: MAJOR: 1) positive blood cultures (typical organism x2 or persistent bacteremia); 2) evidence of endocardial involvement (vegetation/abscess on echo or new valvular regurgitation)
MINOR: fever >38°C, predisposing condition, vascular phenomena, immunologic phenomena, microbiologic evidence
Classification: [ ] Definite (2 major OR 1 major + 3 minor OR 5 minor) [ ] Possible (1 major + 1 minor OR 3 minor) [ ] Rejected
Valve involved: [ ] Native  [ ] Prosthetic (mechanical / bioprosthetic) [ ] Cardiac device (CIED)
Source: [ ] Cutaneous (40%)  [ ] Oral/dental (29%)  [ ] GI (23%)  [ ] Unknown
PWID: [ ] Yes  [ ] No`,ddx:`• S. aureus endocarditis (40-50% of IE; aggressive, rapid destruction; NEVER a contaminant in blood cultures)
• Viridans streptococci (oral/dental source; subacute; most common in native valve disease)
• Streptococcus bovis/gallolyticus (colon source — order colonoscopy if S. bovis bacteremia)
• Enterococcus (urologic source; older patients; faecalis >> faecium)
• HACEK organisms (Haemophilus, Aggregatibacter, Cardiobacterium, Eikenella, Kingella — slow growing; large vegetations; check extended cultures)
• Fungal endocarditis (Candida, Aspergillus — PWID, immunocompromised, prolonged IV access; large vegetations; very high mortality)
• Coagulase-negative Staphylococci (CoNS) — prosthetic valve endocarditis; rarely native valve
• Culture-negative IE (Bartonella, Coxiella, Tropheryma — obtain serology if culture-negative)
• Non-infective (Libman-Sacks in SLE, marantic in malignancy, rheumatic fever — no fever, no organisms)`,workup:`• Blood cultures x3 (minimum): at least 1 percutaneous; draw from different sites over 1 hour; send BEFORE antibiotics
  - S. aureus and S. lugdunensis are NEVER contaminants — treat as true IE
  - Daily surveillance cultures until sterile x48h (S. aureus — assess for persistent bacteremia)
• TTE (transthoracic echo): FIRST in ALL patients
• TEE (transesophageal echo): if TTE negative with high suspicion; prosthetic valve; CIED; suspected abscess/fistula; poor TTE windows
• CBC, BMP, LFTs, coagulation studies, UA (hematuria → GN from immune complex deposition)
• Rheumatoid factor, ANA (immunologic phenomena assessment)
• ECG: new AV block (extending PR interval) = perivalvular abscess or septal involvement → urgent surgical evaluation
• CT/CTA chest, abdomen, pelvis: embolic complications (CNS, pulmonary, splenic, renal)
• MRI brain: if any neurologic symptoms (embolic stroke, septic emboli, intracranial mycotic aneurysm)
• Dental X-rays: if odontogenic source suspected`,management:`EMPIRIC ANTIBIOTICS (start after ≥3 blood cultures drawn):
• Native valve, community-acquired: Vancomycin 15-20 mg/kg IV q8-12h + Ceftriaxone 2g IV q24h (covers Staph, Strep, HACEK, Enterococcus)
• MSSA confirmed: Nafcillin 2g IV q4h OR Cefazolin 2g IV q8h (superior to vancomycin for MSSA)
• MRSA confirmed: Vancomycin (AUC-guided) ± Rifampin (prosthetic valve MRSA)
• Enterococcus (susceptible): Ampicillin 2g IV q4h + Ceftriaxone 2g IV q12h (ACME trial; preferred over aminoglycosides)
• Culture-directed de-escalation at 48-72h based on susceptibilities

DURATION (from first sterile blood culture or start of effective antibiotics):
• Viridans Strep (native valve, susceptible): 4 weeks IV (or 2-week aminoglycoside-based regimen if uncomplicated)
• S. aureus (native valve): minimum 4-6 weeks IV
• S. aureus (prosthetic valve): 6+ weeks IV + rifampin + aminoglycoside
• Enterococcus: 4-6 weeks IV
• Fungal: antifungal + surgical resection; indefinite suppressive therapy after

SURGICAL INDICATIONS (consult cardiac surgery):
• Heart failure from valvular destruction (most common surgical indication)
• Perivalvular abscess, fistula, or new conduction block on ECG
• Uncontrolled infection (persistent bacteremia >5-7d or virulent organism: S. aureus, fungal, multi-drug resistant)
• Vegetation ≥10mm with embolic event (or ≥15mm regardless) — recurrent embolism risk
• Fungal endocarditis (almost all require surgery)

ID CONSULT: mandatory for ALL cases of confirmed or suspected IE`,monitoring:`• Daily blood cultures until sterile x48h (S. aureus — critical to confirm clearance)
• Serial ECGs (watch for new AV block — indicates perivalvular abscess)
• Repeat TTE/TEE at 1-3 weeks: assess vegetation size, valve function, new complications
• BMP daily during acute phase (renal function with nephrotoxic antibiotics)
• Vancomycin AUC monitoring (avoid toxicity with prolonged courses)
• CBC weekly (prolonged antibiotic-induced cytopenias)
• Watch for embolic complications: new neurologic findings, abdominal pain, pleuritic chest pain`,disposition:`• ICU/CCU: hemodynamic instability, HF from valvular destruction, large embolic burden, intracranial hemorrhage, septic shock
• Cardiac surgery consult: all cases with surgical indications (see above)
• ID consult: ALL cases — mandatory
• Ophthalmology consult: Roth spots, Candida endocarditis (fundoscopic exam for fungal emboli)
• Colonoscopy: if S. bovis/gallolyticus bacteremia (associated with colon malignancy)
• Neurology / neurosurgery: if intracranial mycotic aneurysm, hemorrhagic stroke, or embolic CVA`},{id:`bradycardia-av-block`,system:`cv`,title:`Bradycardia / AV Block`,keywords:[`bradycardia`,`av block`,`heart block`,`complete heart block`,`CHB`,`mobitz`,`sick sinus`,`syncope`,`pacing`,`atropine`,`sinus bradycardia`],source:{chapter:`Cardiology`,section:`ACLS: Bradycardia`,pages:`3`,authors:`Eli Patt`,keyFacts:[`Atropine: 1mg IV q3-5 min (max 3mg); DO NOT use for Mobitz II or CHB — may paradoxically worsen by increasing atrial rate without improving infranodal conduction`,`Unstable criteria: hypotension, AMS, ischemic CP, or acute HF — any one of these = initiate treatment immediately`,`BB antidote: glucagon 3-10mg IV; CCB antidote: calcium gluconate 3-6g + glucagon; digoxin: digoxin immune FAB (1 vial binds ~0.5mg)`,`Mobitz II and wide-complex CHB: often requires transvenous pacing wire even if currently stable — CALL CARDIOLOGY`,`Transcutaneous pacing: lorazepam 2mg + dilaudid 2mg IV for sedation; rate 100 BPM, output 100 mA → reduce to minimum capture`]},assessment:`#Bradycardia / AV Block
HR: ___  BP: ___  Rhythm: ___
Hemodynamic stability: [ ] Stable  [ ] UNSTABLE (hypotension / AMS / ischemic CP / acute HF / pulmonary edema)
AV block classification (from 12-lead ECG):
[ ] Sinus bradycardia  [ ] 1st degree AVB (PR >200ms)
[ ] 2nd degree Mobitz I (Wenckebach) — PR progressively lengthens → dropped QRS; usually narrow QRS; inferior MI, vagal
[ ] 2nd degree Mobitz II — fixed PR with sudden dropped QRS; usually wide QRS; anterior MI, infranodal; HIGH RISK → pacing
[ ] 2:1 block — cannot distinguish Mobitz I vs II without seeing other ratios; treat as Mobitz II
[ ] 3rd degree (Complete Heart Block) — P waves completely dissociated from QRS; AV-nodal escape (narrow, rate 40-60) vs. ventricular escape (wide, rate 20-40)
Reversible cause screened: [ ] Meds (BB, CCB, digoxin, amiodarone)  [ ] ACS (inferior MI → RCA)  [ ] Hyperkalemia  [ ] Hypothyroidism  [ ] Hypothermia  [ ] Elevated ICP  [ ] Lyme  [ ] Sleep apnea`,ddx:`PRIMARILY SINUS BRADYCARDIA:
• Sick sinus syndrome (SSS) — degenerative, elderly; sinus pauses, bradycardia-tachycardia syndrome
• Increased vagal tone — athletes, vasovagal, carotid sinus hypersensitivity
• Inferior/posterior MI — RCA occlusion → AV node ischemia; usually transient and vagally mediated
• Medications — BB, non-dihydropyridine CCB, digoxin, amiodarone, ivabradine
• Hypothyroidism, hypothermia, hypoxia, elevated ICP
• Sleep apnea (nocturnal bradycardia)

PRIMARILY AV BLOCK / COMPLETE HEART BLOCK:
• Degenerative calcific conduction disease (Lev/Lenègre disease) — most common chronic CHB cause
• Inferior MI (RCA → AV node) — usually transient, narrow escape, responds to atropine
• Anterior MI (LAD → infranodal) — wide escape, sudden, high mortality (~80%), does NOT respond to atropine
• Post-TAVR, post-septal ablation, post-cardiac surgery
• Lyme carditis (variable block; young, tick exposure, rash)
• Autoimmune myocarditis, infiltrative disease (sarcoidosis, amyloid, hemochromatosis)
• Endocarditis (aortic root abscess extending to AV node)`,workup:`• 12-lead ECG (STAT): define rhythm, QRS width, P wave morphology, AV relationship, PR interval
• Telemetry strip: assess for pauses, P:QRS ratio, grouped beating (Wenckebach), AV dissociation
• Fingerstick glucose, BMP (K+, Ca2+, Mg2+), CBC
• TSH (hypothyroidism)
• Digoxin level if applicable
• Troponin + serial ECGs: rule out ACS as precipitant (inferior STEMI → AV node ischemia)
• Lyme serology (IgG/IgM): if young, variable block, tick exposure or endemic area
• ANA, anti-Ro/La if young woman (autoimmune CHB)
• TTE: structural heart disease, assess for endocarditis, wall motion abnormalities
• For stable CHB: workup for infiltrative disease if no clear etiology (ACE level, iron studies, SPEP)`,management:`HEMODYNAMICALLY UNSTABLE (hypotension, AMS, ischemic CP, acute HF):
• Atropine 1mg IV q3-5 min (max 3mg) — FIRST LINE for sinus bradycardia, Wenckebach, 1st degree AVB
  - DO NOT USE for Mobitz II or CHB — may paradoxically worsen by increasing atrial rate without improving AV conduction
• If atropine fails or Mobitz II/CHB:
  - Dopamine 5-20 mcg/kg/min IV infusion, OR
  - Epinephrine 2-10 mcg/min IV infusion
• Transcutaneous pacing (TCP): emergent bridge
  - Sedate: lorazepam 2mg IV + dilaudid 2mg IV (or RICU for fentanyl/midazolam)
  - Set rate 100 BPM, output 100mA → reduce to minimum needed to capture
  - Capture confirmed by wide paced QRS with T wave in opposite direction + palpable pulse

HEMODYNAMICALLY STABLE:
• Hold/reverse offending medications (BB, CCB, digoxin — Digibind 1 vial per 0.5mg digoxin)
• Specific antidotes: BB → glucagon 3-10mg IV; CCB → calcium gluconate 3-6g + glucagon
• Monitor: continuous telemetry, frequent BP
• Cardiology consult: Mobitz II and CHB (wide QRS) often require transvenous pacing wire even if stable
• Transvenous pacing wire: placed by cardiology; indications: TCP despite meds, or unstable rhythm without quickly reversible cause
• Treat underlying cause: reperfusion for inferior MI, antibiotics for Lyme

PERMANENT PACEMAKER (PPM) INDICATIONS (Class I):
• Symptomatic sinus bradycardia or chronotropic incompetence
• Symptomatic 2nd or 3rd degree AVB not due to reversible cause
• Mobitz II or CHB regardless of symptoms (high risk of complete failure)`,monitoring:`• Continuous telemetry — watch for worsening AV block, pauses >3 seconds, ventricular escape
• Serial ECGs: trend PR interval, QRS width (new BBB suggests Mobitz II risk)
• K+, Mg2+ every 12-24h (electrolyte correction improves conduction)
• TCP capture verification: palpate pulse or assess arterial waveform — electrical capture ≠ mechanical capture
• Hemodynamics every 15-30 min in unstable patients
• Lyme serology results: Lyme CHB may respond to IV ceftriaxone alone (some cases)`,disposition:`• ICU/CCU: hemodynamic instability, Mobitz II, wide-complex CHB, requiring transcutaneous or transvenous pacing, post-STEMI CHB
• Cardiology consult: all CHB, all Mobitz II, pacemaker evaluation, endocarditis/myocarditis-associated block
• Floor: stable 1st degree, stable Wenckebach (Mobitz I) with reversible cause identified and corrected`},{id:`vt-wide-complex`,system:`cv`,title:`Ventricular Tachycardia (VT) / Wide Complex Tachycardia`,keywords:[`ventricular tachycardia`,`VT`,`wide complex tachycardia`,`polymorphic VT`,`torsades de pointes`,`TdP`,`VT storm`,`monomorphic VT`,`NSVT`,`cardiac arrest`,`cardioversion`,`amiodarone`,`lidocaine`],source:{chapter:`Cardiology`,section:`Wide Complex Tachycardia`,pages:`9`,authors:`Elaine Luterstein`,keyFacts:[`If any doubt VT vs. SVT with aberrancy: TREAT AS VT — safer and more effective default`,`Basel algorithm (93% Sn, 90% Sp): VT if ≥2 of 3 — high-risk substrate (prior MI/EF<35/ICD), lead II time to first peak >40ms, aVR time to first peak >40ms`,`AV dissociation: pathognomonic for VT — independent P waves marching through at a different rate from QRS`,`TdP: magnesium sulfate 2-4g IV over 10-15 min first-line (even if Mg normal); isoproterenol or overdrive pacing to increase HR; AVOID amiodarone (lengthens QTc)`,`VT storm (≥3 VT episodes/24h): propranolol 40mg q6h especially after multiple defibrillations — reduces adrenergic drive`]},assessment:`#Ventricular Tachycardia (VT) / Wide Complex Tachycardia
HR: ___  BP: ___  Rhythm: [ ] Regular  [ ] Irregular  |  QRS: ___ ms
Hemodynamic stability: [ ] Stable  [ ] UNSTABLE (hypotension / AMS / pulmonary edema / ischemia)
VT type:
[ ] Monomorphic VT — uniform QRS morphology; DDx: ischemia, structural heart disease, scar, idiopathic
[ ] Polymorphic VT — variable QRS morphology; DDx: ischemia (most common), prolonged QTc
[ ] Torsades de Pointes (TdP) — polymorphic VT on background of prolonged QTc; "twisting" of QRS around baseline
[ ] Non-sustained VT (NSVT) — >3 beats, <30 seconds
[ ] Sustained VT — >30 seconds OR causing hemodynamic compromise
[ ] VT Storm — ≥3 sustained VT episodes within 24 hours (call EP ± MCS Shock Team)
Features favoring VT (vs. SVT with aberrancy):
Prior structural heart disease/MI/ICD [ ] / AV dissociation on ECG [ ] / QRS >160ms [ ] / Concordance V1-V6 [ ] / Northwest axis [ ] / Brugada algorithm [ ]`,ddx:`Wide Complex Tachycardia DDx (VT 80%, SVT with aberrancy ~20%):
• Ventricular tachycardia (VT) — prior MI/scar, structural heart disease, ischemia, electrolyte abnormalities, drugs
• SVT with aberrancy (RBBB or LBBB pattern on background ECG) — compare QRS to known baseline
• Pre-excited AF (WPW) — irregular rhythm; AVOID AV nodal agents (adenosine, diltiazem, digoxin, amiodarone); use procainamide
• Pacemaker-mediated tachycardia — paced rhythm, endlessly loops via retrograde VA conduction
• Hyperkalemia — sinusoidal pattern, peaked T waves, AV dissociation
• Na+ channel toxicity — TCA, class IC agents, cocaine, Brugada-triggering drugs
POLYMORPHIC VT specifics:
• Ischemic (normal QTc): acute MI/STEMI — emergent revascularization is primary treatment
• Torsades de Pointes (prolonged QTc): drug-induced, electrolyte (hypoK, hypoMg, hypoCa), congenital LQTS, bradycardia-dependent
• Catecholaminergic polymorphic VT (CPVT): exercise/emotion-triggered, normal baseline ECG, young patients`,workup:`• 12-lead ECG (STAT): assess QRS width/morphology, AV relationship, QTc, axis, concordance, fusion/capture beats
• Compare with prior ECGs (baseline BBB = SVT with aberrancy)
• BMP (K+, Mg2+ — replete immediately), calcium, glucose
• Troponin (rule out ACS as trigger — ischemic polymorphic VT treated with revascularization)
• Digoxin level if applicable
• Medication review: QT-prolonging agents, antiarrhythmics, Na+ channel blockers, TCA
• TTE/POCUS (bedside): assess LV function, wall motion abnormalities, RV size (ARVC)
• Cardiac monitoring: continuous telemetry, defibrillator pads on patient at all times
• For recurrent/unexplained VT after acute management:
  - Cardiac MRI: scar assessment, arrhythmogenic CM
  - Electrophysiology study: for ablation planning`,management:`PULSELESS VT → ACLS (see Cardiac Arrest protocol):
• Defibrillation immediately (200J biphasic); CPR if no pulse; epinephrine 1mg IV q3-5 min; amiodarone 300mg IV after 3 shocks

UNSTABLE SUSTAINED VT (hypotension, AMS, pulmonary edema, ischemia):
• Synchronized cardioversion 100J biphasic (unsynchronized if polymorphic VT — treat as VF)
• Sedate first if patient is awake and time permits

STABLE MONOMORPHIC SUSTAINED VT:
• Check and replenish: K+ >4.0 mEq/L and Mg2+ >2.0 mg/dL (ALWAYS first)
• Amiodarone 150mg IV over 10 min → 1mg/min x 6h → 0.5mg/min x 18h (max 2.2g/24h)
• Lidocaine 1.0-1.5mg/kg IV bolus → 1-4mg/min maintenance (preferred if QTc prolonged or concomitant acute ischemia)
• Procainamide 20-50mg/min or 100mg q5min (max 17mg/kg) → 2-6mg/min maintenance (avoid if QTc, HF)
• Elective synchronized cardioversion if pharmacologic management fails

STABLE NSVT:
• Asymptomatic: monitor, treat underlying cause (CAD, HF, electrolytes)
• Symptomatic or high burden: cardiology consult; nodal blockade (BB > CCB), then antiarrhythmics

TORSADES DE POINTES (TdP):
• Magnesium sulfate 2-4g IV over 10-15 min (FIRST-LINE even if Mg2+ is normal)
• Increase HR to suppress TdP (eliminates pause-dependent triggering): isoproterenol infusion OR overdrive pacing (HR 90-110); avoid bradycardia
• Lidocaine IV (QT-shortening effect; avoid amiodarone, CCB, BB which lengthen QTc)
• STOP all QT-prolonging drugs (see QTc Prolongation template)
• Correct electrolytes: K+ to 4.5-5 mEq/L, Mg2+ to 2-2.5 mg/dL, Ca2+

VT STORM (≥3 sustained VT episodes / 24h):
• Call EP + MCS Shock Team immediately
• Lidocaine bolus (preferred if QTc), then amiodarone (if QTc normal)
• Propranolol 40mg PO q6h (especially after multiple defibrillations — reduces adrenergic drive)
• Treat ischemia: urgent revascularization, IABP for coronary perfusion
• Sedation/intubation to reduce sympathetic tone; consider stellate ganglion block
• Catheter ablation for refractory ischemic CM VT storm`,monitoring:`• Continuous telemetry with defibrillator pads in place at all times while hemodynamically compromised
• Serial ECGs: QTc trend (every 4-8h if on antiarrhythmics); new ischemic changes
• K+, Mg2+ levels q2-4h while actively treating
• Troponin trend (ongoing ischemia assessment)
• Amiodarone: LFTs, TFTs, CXR at baseline (pulmonary toxicity with long-term use)
• EP consultation for ICD programming if appropriate after acute stabilization`,disposition:`• ICU/CCU: VT storm, hemodynamic instability, requiring IV antiarrhythmics, post-arrest, refractory VT
• Electrophysiology (EP) consult: all sustained VT, VT storm, NSVT with structural heart disease, TdP, congenital LQTS, ICD evaluation/programming
• Cardiology consult: all cases of wide complex tachycardia
• ICD implantation workup: prior cardiac arrest, sustained VT with structural heart disease (discuss after acute stabilization)`},{id:`qtc-prolongation`,system:`cv`,title:`QTc Prolongation / Torsades de Pointes Risk`,keywords:[`QTc prolongation`,`long QT`,`torsades de pointes`,`TdP`,`drug induced QT`,`hypokalemia`,`hypomagnesemia`,`antipsychotic QT`,`amiodarone QT`,`sotalol`,`acquired long QT`,`congenital LQTS`],source:{chapter:`Cardiology`,section:`QTc Prolongation`,pages:`12`,authors:`Amanda Jowell`,keyFacts:[`Stop offending drug if QTc >500ms OR increase in QTc >60ms from baseline`,`Highest TdP risk drugs: sotalol, dofetilide, ibutilide; IV haloperidol; methadone; azithromycin/clarithromycin; IV ondansetron; thioridazine`,`Amiodarone: oral rarely causes TdP (uniform repolarization delay) — distinct from other Class III agents; IV amiodarone carries more risk`,`Electrolyte targets: K+ 4.5-5.0 mEq/L, Mg2+ 2.0-2.5 mg/dL — supratherapeutic repleting to prevent TdP`,`Sotalol and dofetilide: require inpatient initiation — QTc check 2h after each dose`]},assessment:`#QTc Prolongation / Torsades de Pointes Risk
QTc: ___  ms  (Corrected using Bazett formula: QT / √RR interval in seconds)
Normal: QTc ≤440ms (M), ≤460ms (F)  |  High TdP risk: QTc >500ms OR ΔQTc from baseline >60ms
QT-prolonging drug(s) identified: ___
Risk factors for TdP (check all that apply):
[ ] QTc >500ms  [ ] Bradycardia / AV block / pauses  [ ] Hypokalemia  [ ] Hypomagnesemia  [ ] Hypocalcemia
[ ] Female sex  [ ] Elderly  [ ] Renal/hepatic failure (reduced drug clearance)  [ ] CHF / LVH / MI
[ ] ≥2 QT-prolonging drugs concurrently  [ ] Congenital long QT syndrome  [ ] Hypothyroidism  [ ] Starvation/anorexia
Symptoms: [ ] Palpitations  [ ] Presyncope / syncope  [ ] Cardiac arrest (TdP → VF)`,ddx:`DRUG-INDUCED (most common inpatient cause):
• Antiarrhythmics: sotalol, dofetilide, ibutilide (highest risk); amiodarone (rare TdP due to uniform repolarization delay)
• Antibiotics: azithromycin, erythromycin, clarithromycin, levofloxacin, moxifloxacin, fluconazole, voriconazole
• Antipsychotics: IV haloperidol, thioridazine, quetiapine, ziprasidone, risperidone
• Antidepressants: citalopram and escitalopram (dose-dependent), clomipramine, imipramine
• Antiemetics: IV ondansetron (especially >32mg IV), droperidol
• Methadone (very common cause, especially at higher doses)

ELECTROLYTE DISTURBANCES:
• Hypokalemia, hypomagnesemia, hypocalcemia — directly prolong repolarization

CONGENITAL:
• LQTS 1-13: often discovered on ECG or QTc unexpectedly prolonged relative to drug effect; syncope with exercise (LQTS1), swimming (LQTS1), auditory stimuli (LQTS2), rest/sleep (LQTS3)

OTHER:
• Hypothyroidism, hypothermia, complete heart block, acute MI, intracranial events (CNS-mediated QT changes)`,workup:`• 12-lead ECG (STAT if QTc >500ms or new T wave morphology changes)
  - Assess for: QTc, T wave morphology (notched, bifid T in LQTS2), U waves (hypoK), R-on-T phenomenon, premature beats
• Repeat ECG: 2h after dose change of QT-prolonging drug, or 12h after starting new QT-prolonging drug
• BMP: K+ and Mg2+ (correct aggressively), Ca2+, BUN/Cr, glucose
• Thyroid function tests (TSH) if no clear drug-induced cause
• Comprehensive medication reconciliation: identify all QT-prolonging agents, check drug-drug interactions (CYP450 inhibitors can increase drug levels → longer QT)
• Cardiology / EP consult: QTc >500ms, suspected congenital LQTS, recurrent syncope, TdP
• Genetics referral: if suspected familial LQTS (family history of sudden cardiac death, young age, multiple episodes)`,management:`IMMEDIATE ACTIONS (QTc >500ms or ΔQTc >60ms from baseline):
1. STOP the offending QT-prolonging drug (most important intervention)
2. CORRECT electrolytes aggressively:
   • K+: replete to 4.5-5.0 mEq/L (IV replacement if <3.5 mEq/L)
   • Mg2+: magnesium sulfate 2g IV over 15-30 min; replete to 2.0-2.5 mg/dL
   • Ca2+: correct hypocalcemia
3. STOP drugs causing bradycardia (BB, CCB, amiodarone) — pauses facilitate TdP
4. Telemetry monitoring: continuous; watch for runs of TdP, R-on-T, pauses
5. AVOID adding any additional QT-prolonging medications

IF TORSADES DE POINTES DEVELOPS:
• Magnesium sulfate 2-4g IV over 10-15 min (FIRST-LINE even if Mg2+ is normal)
• Increase HR to suppress: isoproterenol infusion OR overdrive pacing (transcutaneous/transvenous, target HR 90-110 bpm)
• Lidocaine IV: QT-shortening effect; preferred over amiodarone in TdP
• Defibrillate if TdP degenerates to VF or pulseless TdP

ONGOING QT MONITORING:
• For sotalol and dofetilide: check QTc 2h after each dose (initiation requires inpatient monitoring per guidelines)
• For any QT-prolonging drug initiation: check QTc before initiation and q8-12h during uptitration
• Use CredibleMeds (QTdrugs.org) to check all medications for QT risk

CONGENITAL LQTS:
• Beta-blockers (nadolol preferred, metoprolol alternative) for all patients — reduces early afterdepolarizations
• ICD: history of cardiac arrest, recurrent syncope on BB, high-risk genotype (LQTS2/3)`,monitoring:`• QTc on ECG: before each dose change, then 8-12h after initiation of QT-prolonging drugs
• Continuous telemetry while QTc >500ms or active TdP risk
• K+ and Mg2+ every 6-12h while actively correcting (target K+ 4.5-5.0, Mg2+ 2.0-2.5)
• Review all new medication orders for QT-prolonging potential before prescribing`,disposition:`• ICU/CCU: active TdP, QTc >550ms, hemodynamic instability, requires overdrive pacing
• Telemetry floor: QTc >500ms or ΔQTc >60ms, starting sotalol or dofetilide (mandatory inpatient initiation), high-risk drug combination
• EP consult: suspected congenital LQTS, recurrent TdP, ICD consideration, initiation of class III antiarrhythmics`},{id:`pericarditis-tamponade`,system:`cv`,title:`Pericarditis / Cardiac Tamponade`,keywords:[`pericarditis`,`cardiac tamponade`,`pericardial effusion`,`pericardiocentesis`,`pleuritic chest pain`,`friction rub`,`becks triad`,`pulsus paradoxus`,`PR depression`,`ST elevation diffuse`,`colchicine`,`NSAIDs`,`constrictive`],source:{chapter:`Cardiology`,section:`Pericardial Disease`,pages:`31`,authors:`Ore Olakunle`,keyFacts:[`Diagnosis (≥2 of 4): pleuritic CP, friction rub, diffuse concave STE + PR depression on ECG, pericardial effusion on TTE`,`Colchicine 0.6mg BID ×3 months (no taper) + NSAID: reduces recurrence and treatment failure (COPE + ICAP trials)`,`Glucocorticoids first-line: AVOID for idiopathic pericarditis (higher recurrence during taper) — second-line only if NSAID-refractory, uremic, or autoimmune`,`Tamponade: effusion SIZE does NOT predict tamponade — RATE of accumulation is what determines hemodynamic impact`,`Hospitalize if: fever, large effusion >2cm, immunosuppressed, anticoagulated, trauma, elevated troponin, hemodynamic instability, or no NSAID response ×7d`]},assessment:`#Pericarditis / Cardiac Tamponade
Presentation: [ ] Pericarditis (chest pain ± friction rub ± ECG changes)  [ ] Pericardial Effusion  [ ] Cardiac Tamponade
Pericarditis Diagnostic Criteria (≥2 of 4):
[ ] Characteristic pleuritic retrosternal CP (worse supine, better leaning forward)
[ ] Pericardial friction rub
[ ] Diffuse concave (saddle-shaped) ST elevation with PR depression on ECG (except in aVR/V1: PR elevation, ST depression)
[ ] Pericardial effusion on imaging
Tamponade features: Beck's Triad (hypotension / JVP elevation / muffled heart sounds) [ ] / Pulsus paradoxus >10mmHg [ ] / Electrical alternans [ ]
Hospitalization criteria (≥1): fever >38°C / large effusion >2cm / immunosuppressed / anticoagulated / trauma / troponin elevated / hemodynamic instability / failure to respond to NSAIDs x7d`,ddx:`PERICARDITIS ETIOLOGY:
• Idiopathic/viral (80-90%): most common; often follows URI; enteroviruses, adenovirus, EBV
• Post-MI pericarditis: early (within 2-3 days, transmural MI — "pericarditis"); late Dressler syndrome (1-6 weeks, autoimmune — malaise, fever, leukocytosis)
• Post-cardiac injury syndromes: post-CABG, post-ablation, post-TAVR
• Uremic pericarditis: BUN-driven inflammation; absence of chest pain common; treat with dialysis
• Malignant: breast, lung, lymphoma, melanoma — hemorrhagic effusion, rapid reaccumulation
• Infectious (non-viral): TB (subacute, constitutional, high ADA), bacterial (purulent — Staph, Strep; from contiguous spread)
• Autoimmune/inflammatory: SLE, RA, scleroderma, sarcoidosis, IgG4-RD
• Drug-induced: procainamide, hydralazine, INH, certain immunotherapies
• Radiation-induced: late complication (10-20y after chest radiation for Hodgkin's)

CARDIAC TAMPONADE ETIOLOGY:
• Malignancy (13%): most common cause of large effusion with tamponade
• Post-procedural/iatrogenic (16%): post-cath, cardiac surgery, ablation, line placement
• Uremic (dialysis-requiring)
• Post-viral pericarditis with large effusion
• Proximal aortic dissection extending into pericardial space (hemorrhagic tamponade)
• Myocardial wall rupture post-MI (catastrophic, immediate surgical emergency)`,workup:`• ECG: 4 stages — Stage 1: diffuse concave STE + PR depression (PR elevation + STD in aVR/V1); Stage 2: ST/PR normalize; Stage 3: diffuse TWI; Stage 4: TW normalize
  - Electrical alternans (20%): QRS alternating height/axis — suggests large effusion + tamponade
  - Low QRS voltage (≤5mm limb, ≤10mm precordial): effusion
• TTE: pericardial effusion size/location, diastolic chamber collapse (RA → RV collapse), IVC plethora, inspiratory septal shift, respirophasic valve Doppler velocities
• CXR: cardiomegaly ("water-bottle" silhouette in large effusion); rule out pneumonia, pneumothorax
• BMP, CBC, CRP, ESR (baseline + monitor treatment response)
• Troponin: elevated in ~30% pericarditis (c/f myopericarditis → restrict activity, more aggressive follow-up)
• ANA, anti-dsDNA, RF (autoimmune), anti-Ro/La (SLE)
• IGRA / TB testing, BUN/Cr (uremic)
• HIV, HCV (in appropriate clinical context)
• Pericardial fluid analysis (if drainage): cell count, protein, LDH, Gram stain + culture, fungal/AFB (TB suspected), cytology/tumor markers, ADA (TB — elevated >40 U/L)`,management:`ACUTE PERICARDITIS (uncomplicated):
• NSAIDs: ibuprofen 600-800mg TID OR ASA 650-975mg TID OR indomethacin 25-50mg TID
  - ASA preferred if: post-MI, CKD (GFR <45), anticoagulated
  - Duration: until symptoms resolve (1-2 weeks), then taper (3-4 weeks total)
  - Add PPI if: age >65, prior PUD, on anticoagulants or steroids
• Colchicine 0.6mg BID (0.6mg qd if weight <70 kg) × 3 months (NO taper needed)
  - Reduces recurrence and treatment failure (COPE trial, ICAP trial)
• Activity restriction: avoid strenuous activity until symptom-free (return to sport delayed for competitive athletes)
• Glucocorticoids (prednisone 0.25-0.5 mg/kg/day): SECOND-LINE — use only if:
  - Refractory to 7 days of NSAIDs, recurrent episodes, uremic, autoimmune, or NSAID contraindication
  - Avoid as first-line (associated with higher recurrence during taper in idiopathic pericarditis)

RECURRENT PERICARDITIS:
• Same as initial treatment but longer colchicine (6+ months); taper NSAIDs guided by CRP
• Consider IL-1 inhibitors (rilonacept): for colchicine-refractory recurrent pericarditis
• MGH Pericardial Disease Program: for complex/refractory cases

CARDIAC TAMPONADE:
• IVF bolus 250-500mL NS/LR STAT to increase intracardiac filling pressures; inotropes if needed
• Avoid positive pressure ventilation if possible (PPV further impairs RV filling → hemodynamic collapse)
• Emergent pericardiocentesis (IR or bedside echo-guided): catheter drainage; leave drain until output <50mL/day
  - Surgical drainage if: suspected aortic/myocardial rupture, clotted/loculated effusion, pericardial window needed
• Uremic tamponade: hemodialysis + pericardiocentesis
• Send pericardial fluid for: cell count, protein, LDH, culture, cytology, ADA (TB), tumor markers (malignant)`,monitoring:`• CRP and ESR: monitor weekly during treatment — normalize over 1-3 weeks with effective therapy; use CRP to guide NSAID taper
• Troponin: repeat at 24-72h if initially elevated (myopericarditis — more frequent follow-up, higher recurrence risk)
• TTE: repeat at 1-3 months to assess effusion resolution; at 3-6 months for constrictive pericarditis signs
• Post-pericardiocentesis: drainage output daily; chest X-ray (r/o pneumothorax); TTE before drain removal
• Activity restriction duration: until CRP normal + symptom-free (typically 2-4 weeks for uncomplicated pericarditis)`,disposition:`• Outpatient: uncomplicated first-episode pericarditis, no high-risk features, reliable follow-up in 1 week
• Inpatient: any hospitalization criterion present (see Assessment above), troponin elevation, large effusion >2cm, hemodynamic instability
• ICU/CCU: cardiac tamponade, hemodynamic instability, urgent pericardiocentesis, constrictive physiology
• Cardiology consult: all cases of tamponade, myopericarditis, recurrent pericarditis, large effusion requiring drainage
• Cardiothoracic surgery consult: suspected myocardial rupture, loculated hemorrhagic effusion, pericardial window`},{id:`aortic-dissection`,system:`cv`,title:`Acute Aortic Syndromes (Dissection / IMH / PAU)`,keywords:[`aortic dissection`,`aortic syndrome`,`type A dissection`,`type B dissection`,`intramural hematoma`,`IMH`,`penetrating aortic ulcer`,`PAU`,`tearing chest pain`,`back pain`,`pulse deficit`,`aortic emergency`,`impulse control`],source:{chapter:`Cardiology`,section:`Aortic Disease`,pages:`32–33`,authors:`Daniel Weiner, Rachel Wittenberg`,keyFacts:[`Impulse control targets: HR 60-80 bpm + SBP <120 mmHg — esmolol FIRST (before vasodilators) to prevent reflex tachycardia`,`Type A: surgical emergency — mortality ~1-2%/hour without intervention; STAT cardiothoracic surgery`,`D-dimer <500 ng/mL: 96% NPV for AAS — useful to rule out in low clinical probability (ADD-RS score 0)`,`CXR normal in 50% of AAS — widened mediastinum present in only 1/3; cannot rule out dissection on CXR`,`CRITICAL: rule out Type A dissection before anticoagulating or giving thrombolytics if inferior STEMI (RCA involvement by dissection)`]},assessment:`#Acute Aortic Syndrome (Aortic Dissection / Intramural Hematoma / PAU)
Presentation: severe chest/back/abdominal pain — [ripping / tearing / migrating] quality
Classification:
[ ] Stanford Type A: involves ascending aorta (± descending) — SURGICAL EMERGENCY
[ ] Stanford Type B: involves descending aorta only — typically medical management
DeBakey: [ ] I (ascending + descending)  [ ] II (ascending only)  [ ] III (descending only)
AAS type: [ ] Classic dissection (intimal tear → false lumen)  [ ] Intramural hematoma (IMH)  [ ] Penetrating aortic ulcer (PAU)
High-risk features: BP differential >20mmHg between arms [ ] / New AI murmur [ ] / Pulse deficit [ ] / Facial/arm asymmetry [ ] / Neurologic deficit [ ]
ADD-RS risk score: ___  (High risk features: aortic conditions, BP differential/pulse deficit, chest/back/abdominal pain — highest risk = pain character typical for AAS)`,ddx:`AAS cannot be distinguished by clinical presentation alone (dissection, IMH, PAU all present similarly):
• Type A aortic dissection — ascending aorta; immediate cardiac surgery; complications: aortic regurgitation, coronary occlusion (MI), tamponade, hemopericardium, stroke, arch vessel occlusion
• Type B aortic dissection — descending only; medical management unless complicated (malperfusion, rupture, rapid expansion, uncontrolled pain)
• Intramural hematoma (IMH): rupture of vasa vasorum → wall hematoma without intimal tear; 28-47% progress to complete dissection
• Penetrating atherosclerotic ulcer (PAU): atherosclerotic plaque ulcerates through intima → progresses to rupture in ~42%
• ACS/STEMI: may coexist if dissection extends into coronary ostia (RCA most common) — DO NOT anticoagulate without ruling out dissection
• Aortic aneurysm rupture: acute hemodynamic collapse, pulsatile abdominal mass
• Other: PE, pneumothorax, GERD, musculoskeletal — rule out by clinical assessment and imaging`,workup:`• CXR (portable): widened mediastinum (>8cm) in 1/3 only; 50% of AAS have normal CXR — cannot rule out
• D-dimer: <500 ng/mL has 96% NPV for AAS (useful to rule out in low-risk patients)
• STAT CTA chest/abdomen/pelvis with IV contrast (I+ and I-): FIRST-LINE
  - Sn 95%, Sp 87-100%; defines type, extent, branch vessel involvement, false lumen, entry tear
  - Combined I+/I- assesses for IMH (wall thickening without false lumen) and hemopericardium
• TTE (bedside/emergent): if patient too unstable for CT; assess for AI murmur, aortic root, pericardial effusion, tamponade, wall motion
• TEE: Sn 99%, Sp 90-100% — gold standard; used intraoperatively; limited by invasive nature
• Troponin + 12-lead ECG: dissection extending to coronary ostia (usually RCA → inferior ST changes)
  - CRITICAL: if ECG shows STEMI, rule out dissection before anticoagulating or giving thrombolytics
• BMP, CBC, coagulation, T&S/crossmatch (surgical planning)
• Type & crossmatch 6+ units pRBC (Type A — operating room likely)`,management:`GENERAL ("IMPULSE CONTROL") — START IMMEDIATELY (both Type A and B):
• Goal: reduce LV dP/dT (rate of pressure rise) → minimize aortic wall stress
• Target HR 60-80 bpm + SBP <120 mmHg (some guidelines: mean BP 60-75 mmHg)
• IV access ×2 large-bore + arterial line (right radial preferred unless right arm dissected)
• NO anticoagulation (unless Type A requires CPB — cardiology/surgery decision)

HEART RATE CONTROL (first, before vasodilators — to prevent reflex tachycardia):
• Esmolol IV: 0.5-1 mg/kg bolus × 1 min → maintenance 2-21 mg/min (25-300 mcg/kg/min); preferred (titratable, short half-life)
• Labetalol IV: 20mg IV bolus → 40-80mg q10 min PRN; or 2mg/min infusion
• Metoprolol 5mg IV q5-15 min

BLOOD PRESSURE CONTROL (after HR controlled):
• Nitroprusside 0.25-0.5 mcg/kg/min (ONLY after BB initiated — avoid reflex tachycardia)
• Nicardipine 5-15mg/h IV infusion (alternative if BB contraindicated)
• Avoid: pure vasodilators without BB first (reflex tachycardia worsens aortic wall stress)

TYPE A (ASCENDING) — SURGICAL EMERGENCY:
• Immediate cardiothoracic surgery consult (STAT page)
• Goal: operating room within 60-90 minutes of diagnosis
• Emergent surgical repair: mortality ~1-2%/hour without surgery
• Control BP/HR while awaiting OR

TYPE B (DESCENDING):
• Medical management: impulse control (as above) — in-hospital mortality ~8%
• Endovascular repair (TEVAR) or surgery if COMPLICATED:
  - Malperfusion syndrome (renal failure, limb ischemia, mesenteric ischemia, paraplegia)
  - Rupture or impending rupture (>4.5cm diameter, rapid expansion >10mm/year)
  - Refractory hypertension or pain despite maximal medical therapy`,monitoring:`• Continuous arterial line monitoring (bilateral radial if possible — document any side-to-side discrepancy)
• HR and SBP every 5-15 minutes while titrating drips; target HR 60-80, SBP <120
• Urine output via Foley (malperfusion assessment — oliguria = renal malperfusion)
• Serial neurologic exams (limb weakness/numbness = spinal cord ischemia)
• Troponin trend (coronary involvement)
• Repeat CT imaging: 24-48h if any clinical deterioration; 6-12 months post-discharge for aortic surveillance`,disposition:`• Operating room STAT: Type A dissection — mortality risk ~1-2%/hour without surgery
• ICU (vascular/CVICU): all AAS — intensive hemodynamic monitoring, impulse control drips
• Cardiothoracic surgery consult: Type A (emergent), Type B (urgent if complicated)
• Vascular surgery: Type B with malperfusion or TEVAR candidate
• Long-term: lifelong imaging surveillance (CTA/MRI at 1, 3, 6, 12 months then annually); strict BP control; beta-blocker continuation`},{id:`htn-emergency`,system:`cv`,title:`Hypertensive Emergency`,keywords:[`hypertensive emergency`,`hypertensive urgency`,`HTN emergency`,`malignant hypertension`,`end organ damage`,`papilledema`,`PRES`,`nitroprusside`,`nicardipine`,`labetalol`,`flash pulmonary edema`,`encephalopathy`,`aortic dissection BP`],source:{chapter:`Cardiology`,section:`Hypertensive Emergency`,pages:`35`,authors:`Rachel Wittenberg`,keyFacts:[`BP correction: reduce MAP ≤25% in first hour; target 160/100 within 2-6h; normalize over 24-48h — avoid overcorrection (cerebral/coronary ischemia)`,`Pheo/cocaine: alpha blockade FIRST (phentolamine 5-15mg IV) — NEVER give BB first (paradoxical severe HTN from unopposed alpha stimulation)`,`Scleroderma renal crisis: ACEi IS the treatment (not contraindicated) — dramatically improves survival`,`Ischemic stroke: permissive HTN — do NOT treat unless >220/120; tPA candidates must be <185/110`,`Asymptomatic markedly elevated BP: oral meds + outpatient follow-up — avoid aggressive IV treatment (associated with worse outcomes, JAMA IM 2021)`]},assessment:`#Hypertensive Emergency
BP: ___/___  HR: ___
Definition: SBP ≥180 OR DBP ≥110-120 mmHg WITH evidence of end-organ damage
End-organ damage type (check all present):
[ ] Neurologic: HTN encephalopathy (severe HA, AMS, seizure) / PRES / ischemic or hemorrhagic CVA / SAH
[ ] Ophthalmologic: papilledema, retinal hemorrhage/exudates, visual changes
[ ] Cardiovascular: flash pulmonary edema / ACS / angina / aortic dissection
[ ] Renal: AKI, hematuria, proteinuria
[ ] Hematologic: MAHA (microangiopathic hemolytic anemia — thrombocytopenia + schistocytes on smear)
Asymptomatic markedly elevated BP: SBP ≥180 or DBP ≥110 WITHOUT end-organ damage — NOT a true emergency; avoid overly aggressive acute correction; manage as outpatient
Assess contributing factors: pain, anxiety, urinary retention, medications (steroids, sympathomimetics), OSA, non-adherence to antihypertensives`,ddx:`HYPERTENSIVE EMERGENCY SUBTYPES (by end-organ):
• HTN encephalopathy / PRES: severe headache, visual changes, AMS, seizures; MRI shows posterior leukoencephalopathy (parieto-occipital white matter edema); BP-responsive
• Hypertensive intracerebral hemorrhage: sudden severe headache, focal neuro deficits; NCHCT immediately
• Ischemic stroke with severe HTN: permissive hypertension in most cases (goal <185/110 for tPA candidates); avoid aggressive lowering
• Subarachnoid hemorrhage: thunderclap headache, meningismus, CT/LP for xanthochromia
• Flash pulmonary edema: acute dyspnea, hypoxia, crackles, bilateral infiltrates on CXR; often due to bilateral renal artery stenosis (Pickering syndrome) or severe diastolic dysfunction
• Acute MI: demand ischemia from hypertensive surge — treat BP cautiously with nitroglycerin + BB
• Aortic dissection: see Aortic Dissection template — CRITICAL; impulse control with BB before vasodilators
• Scleroderma renal crisis: proteinuria, AKI, thrombocytopenia; ACEi/ARB are TREATMENT (not contraindicated)
• Eclampsia/pre-eclampsia: pregnancy (>20 weeks) or postpartum, seizures, proteinuria — magnesium sulfate + delivery
• Catecholamine excess: pheochromocytoma, MAO inhibitor interaction, cocaine, amphetamines — use alpha blockade (phentolamine)`,workup:`• 12-lead ECG: LVH, ischemia, aortic dissection (STEMI)
• CXR: pulmonary edema, widened mediastinum (dissection), cardiomegaly
• BMP: Cr (renal end-organ damage, acute AKI), K+ (hyperaldo in secondary HTN)
• UA + microscopy: hematuria, RBC casts (malignant nephrosclerosis), proteinuria
• CBC + peripheral smear: thrombocytopenia + schistocytes → MAHA (TTP/HUS vs. HTN emergency)
• Troponin: ACS/myocardial injury
• Fundoscopic exam: papilledema (Grade 4 = HTN emergency), hemorrhages, exudates
• NCHCT (STAT): if any neurologic symptoms — hemorrhagic stroke, SAH, cerebral edema (PRES)
• MRI brain with FLAIR: PRES (posterior parieto-occipital white matter hyperintensity)
• CTA aorta: if suspected aortic dissection (sudden severe tearing chest/back pain, BP differential)
• Urine catecholamines/metanephrines, aldosterone:renin ratio: if secondary hypertension suspected`,management:`RATE AND TARGET OF BP CORRECTION:
• MAX 25% reduction in MAP in first 1 hour (avoid cerebral/coronary hypoperfusion)
• Then reduce to 160/100 mmHg within 2-6 hours
• Normalize over 24-48 hours
• EXCEPTION: aortic dissection → HR and BP control immediately (target SBP <120 with HR 60-80)
• EXCEPTION: ischemic stroke → permissive HTN (no treatment unless BP >220/120; tPA candidates must be <185/110)

PREFERRED IV AGENTS BY CLINICAL SCENARIO:
• Hypertensive encephalopathy / PRES / general: nicardipine 5-15 mg/h IV gtt (titratable, no reflex tachycardia) OR clevidipine 1-2 mg/h (IV, ultra-short acting)
• Flash pulmonary edema (with normal/high EF): furosemide + nitroglycerin 5-200 mcg/min; AVOID in hypovolemic states
• Aortic dissection: esmolol first → then nitroprusside or nicardipine (see Aortic Dissection template)
• Acute MI / angina: nitroglycerin IV ± IV BB; AVOID reflex tachycardia-inducing agents
• SAH / ICH: nicardipine or labetalol (short-acting agents); SBP target <140-160 per neurosurgery
• Catecholamine excess (pheochromocytoma, cocaine): phentolamine 5-15 mg IV bolus (alpha blockade FIRST — give BB only after)
  - CRITICAL: Never give BB before alpha blockade in pheochromocytoma (paradoxical severe hypertension from unopposed alpha stimulation)
• Scleroderma renal crisis: ACEi (captopril, enalapril) — ACEi dramatically improves outcomes; initiate promptly
• Eclampsia: IV labetalol 20-80mg boluses or IV hydralazine + magnesium sulfate 4-6g IV load → 2g/h maintenance; obstetrics consult for delivery

TRANSITION TO ORAL AGENTS:
• Start long-acting PO antihypertensives once BP responding and stable
• Avoid short-acting oral nifedipine (uncontrolled BP drops, stroke risk)

ASYMPTOMATIC MARKEDLY ELEVATED BP (no end-organ damage):
• Outpatient management preferred over inpatient
• Avoid IV medications — risk of AKI, stroke from overcorrection
• Oral antihypertensive adjustment; close follow-up in 1-7 days`,monitoring:`• Arterial line: mandatory for all hypertensive emergencies on IV drips (continuous beat-to-beat monitoring)
• MAP and SBP goals: MAP reduction ≤25% in first hour; check every 5-15 min while titrating
• Urine output (Foley catheter): renal perfusion monitoring
• Neurologic exam: every 2-4h (AMS, focal deficits — overly aggressive BP lowering can worsen ischemic stroke)
• BMP at 6-12h: renal function, K+ (with IV agents)
• Troponin trend: myocardial injury from hypertensive surge`,disposition:`• ICU: all hypertensive emergencies requiring IV drips, arterial line monitoring, neurologic end-organ damage, flash pulmonary edema, aortic dissection
• Floor (monitored bed): BP controlled on oral agents with resolving end-organ damage, close follow-up available
• Nephrology consult: scleroderma renal crisis, AKI with proteinuria/hematuria, MAHA
• Neurology consult: stroke, ICH, PRES
• Outpatient: asymptomatic markedly elevated BP — urgent outpatient follow-up within 1-7 days`},{id:`valvular-disease`,system:`cv`,title:`Valvular Heart Disease (AS / AR / MR / MS / TR)`,keywords:[`aortic stenosis`,`aortic regurgitation`,`mitral stenosis`,`mitral regurgitation`,`tricuspid regurgitation`,`TAVR`,`SAVR`,`valvular disease`,`murmur`,`MVR`,`AVR`,`structural heart disease`,`M-TEER`,`MitraClip`],source:{chapter:`Cardiology`,section:`Valvular Heart Disease`,pages:`29–30`,authors:`Joseph Replogle`,keyFacts:[`Severe AS: peak velocity ≥4 m/s OR mean gradient ≥40 mmHg OR AVA ≤1 cm² — classic triad: angina (3-5y), syncope (2-3y), HF (1-2y) without AVR`,`TAVR vs SAVR: age <65 → SAVR (durability); age >80 → TAVR; age 65-80 → shared decision (STS-PROM score + anatomy)`,`Acute AR: AVOID IABP (worsens regurgitation) and BB (lengthen diastolic regurgitant time) — use nitroprusside + inotropes`,`Severe primary MR surgical threshold: symptomatic at any EF OR asymptomatic with EF ≤60% or LVESD ≥40mm`,`IE prophylaxis (Class 2a): amoxicillin 2g PO 30-60 min before high-risk dental procedures — prosthetic valves, prior IE, unrepaired CHD, cardiac transplant with valvulopathy`]},assessment:`#Valvular Heart Disease
Valve(s) involved: [ ] Aortic  [ ] Mitral  [ ] Tricuspid  [ ] Pulmonic  [ ] Multiple
Lesion type: [ ] Stenosis  [ ] Regurgitation  [ ] Mixed
Severity (from TTE): [ ] Mild  [ ] Moderate  [ ] Severe  [ ] Very Severe
EF: ___  |  LV end-systolic dimension (if MR): ___
Symptoms attributable to valve disease: [ ] Dyspnea  [ ] Angina  [ ] Syncope  [ ] HF symptoms  [ ] Asymptomatic
Native vs. prosthetic: [ ] Native  [ ] Bioprosthetic  [ ] Mechanical (anticoagulation target: ___)
Structural cardiology referral: [ ] Not yet consulted  [ ] Evaluation in progress  [ ] Procedure planned`,ddx:`AORTIC STENOSIS (AS):
• Degenerative calcific AS (most common >70yo): age-related wear; precursor = aortic sclerosis
• Bicuspid aortic valve (most common <70yo): congenital; faster progression; associated with aortic dilation
• Rheumatic AS: leaflet fusion; almost always with concurrent mitral valve disease
• Classic triad of severe symptomatic AS: Angina (3-5y survival without AVR), Syncope (2-3y), Heart Failure (1-2y)

AORTIC REGURGITATION (AR):
• Acute AR: infective endocarditis, aortic dissection (Type A), trauma — presents with flash pulmonary edema and shock (no time for LV remodeling)
• Chronic AR: bicuspid valve, RHD, CTD (Marfan, Ehlers-Danlos), syphilis, endocarditis sequelae, aortic root dilation (HTN, aneurysm)

MITRAL REGURGITATION (MR):
• Acute MR: inferior MI → papillary muscle rupture (post-MI days 3-7), endocarditis chordal rupture, trauma
• Chronic Primary MR: MVP (most common in US), degenerative, RHD, endocarditis
• Chronic Secondary (functional) MR: dilated annulus from dilated CM or HF; systolic anterior motion (SAM) in HCM

MITRAL STENOSIS (MS):
• Rheumatic heart disease (~80%): only 50-70% recall rheumatic fever history; progressive commissural fusion; also causes AF, pulmonary HTN, RV failure
• Calcific non-rheumatic MS: annular calcification; different anatomy — no role for balloon commissurotomy

TRICUSPID REGURGITATION (TR):
• Secondary (most common): dilated annulus from pulmonary HTN, AF, dilated CM, or chronic RV overload
• Primary: infective endocarditis (PWID), RHD, carcinoid syndrome, device leads`,workup:`FOR ALL VALVULAR DISEASE:
• TTE (standard): EF, gradient, valve area, valve morphology, other valve involvement, PA pressures
• TEE: prosthetic valve assessment, MV morphology for repair feasibility, vegetations, thrombus, pre-cardioversion
• Exercise treadmill or exercise echo: asymptomatic severe AS (assess for exercise-induced symptoms, LV response)
• Cardiac CT/CTA: TAVR anatomic evaluation (valve sizing, vascular access); calcium scoring in AS
• Coronary angiography or CT coronary angiography: evaluate CAD before surgical valve replacement (>40yo)
• CBC, BMP, coagulation studies
• Blood cultures x2 (if fever or endocarditis concern before any procedure)

SPECIFIC TO LESION:
• AS: ECG (LVH, LAE, LBBB); STS-PROM score (surgical risk) if AVR being considered; dental clearance (Panorex)
• AR: ECG (volume overload pattern); aorta imaging (CTA) if bicuspid or aortic root dilation (Marfan concern)
• MR: exercise LHC/hemodynamics if symptomatic status unclear; Wilkins score (echocardiographic feasibility score for PMBC in MS)
• MS: INR if on warfarin; transesophageal echo before PMBC (exclude LA thrombus)`,management:`AORTIC STENOSIS (AS):
• Medical: no proven therapy to halt progression; treat HTN cautiously (start low, go slow — preload-sensitive)
• AVR indications:
  - Symptomatic severe AS (Stage D): prompt AVR (surgical SAVR or transcatheter TAVR)
  - Asymptomatic severe AS + LVEF <50% OR exercise-induced symptoms → AVR appropriate
  - TAVR if high/extreme surgical risk; SAVR if age <65 (durability); TAVR if age >80; shared decision-making age 65-80 based on STS-PROM
• Post-TAVR: aspirin monotherapy (non-inferior to DAPT with less bleeding)
• Anticoagulation: mechanical valve → warfarin (INR 2-3 aortic, 2.5-3.5 mitral); bioprosthetic → ASA after first 3 months

AORTIC REGURGITATION (AR):
• Acute AR: usually surgical emergency; nitroprusside (afterload reduction); inotropes and chronotropes to increase forward flow; AVOID IABP (worsens regurgitation) and BB (lengthens diastolic regurgitant time)
• Chronic AR: ACEi/ARB/ARNI (reduce afterload); CCB or hydralazine/nitrates if ACEi intolerant
• Surgical AVR if: severe AR + symptomatic OR LVEF <55% OR LVESD >50mm OR undergoing other cardiac surgery

MITRAL REGURGITATION (MR):
• Acute MR: urgent surgical repair; dobutamine + diuresis + afterload reduction (nitroprusside); IABP if hemodynamically unstable
• Chronic Primary MR: MVR if symptomatic at any EF OR asymptomatic with LVEF ≤60% or LVESD ≥40mm; prefer repair over replacement
  - High surgical risk → Transcatheter edge-to-edge repair (M-TEER / MitraClip)
• Functional Secondary MR: GDMT optimization first; M-TEER if persistent symptoms + favorable anatomy (COAPT criteria: LVEF 20-50%)

MITRAL STENOSIS (MS):
• Medical: warfarin if LA thrombus / AF / prior embolism; BB for rate control if tachycardic or dyspneic; diuretics for pulmonary edema
• Percutaneous mitral balloon commissurotomy (PMBC): symptomatic severe rheumatic MS + favorable anatomy (Wilkins score ≤8)
• Surgical MVR: symptomatic severe MS + failed or not candidate for PMBC; or undergoing other cardiac surgery

TRICUSPID REGURGITATION (TR):
• Diuresis for volume overload symptoms (right HF: ascites, edema, hepatomegaly)
• Treat underlying cause: pulmonary HTN, left-sided HF, AF
• Tricuspid valve repair/replacement: see disposition for surgical indications; transcatheter T-TEER emerging

ALL VALVULAR DISEASE: IE Prophylaxis (amoxicillin 2g PO 30-60 min before dental procedures) for: prosthetic valves, prior IE, unrepaired/incompletely repaired CHD, cardiac transplant with valvulopathy`,monitoring:`• Serial TTE surveillance (frequency based on severity and lesion type):
  - Severe asymptomatic AS: TTE every 1 year; exercise testing if uncertain symptom status
  - Moderate AS: TTE every 1-2 years; Mild AS: every 3-5 years
  - Severe AR: TTE every 6-12 months (monitor LV dimensions)
  - Severe MR: TTE every 6-12 months (monitor LVEF and LVESD — surgical thresholds)
• Anticoagulation monitoring: INR 2-3 weekly/monthly for mechanical valves; switch to DOAC only approved for specific indications
• Post-procedural: TTE at 30 days (TAVR/SAVR) then annually; echo before discharge after PMBC
• Symptom assessment every visit: new dyspnea, angina, or syncope → repeat TTE and reconsider intervention`,disposition:`• Structural cardiology referral: all severe valvular lesions, symptomatic moderate lesions, prosthetic valve dysfunction
• Cardiac surgery consult: surgical candidates for SAVR/MVR; acute MR or AR with hemodynamic instability
• Cardiogenic shock (acute AR or acute MR): ICU, emergent surgical consult, IABP/MCS consideration
• IE prophylaxis education: document in chart for all patients with prosthetic valves or prior IE
• TR surgical indications: (1) severe TR undergoing left-sided valve surgery; (2) symptomatic primary severe TR; (3) progressive RV dilation/dysfunction`},{id:`rv-failure`,system:`cv`,title:`Right Ventricular Failure`,keywords:[`RV failure`,`right ventricular failure`,`right heart failure`,`RV dysfunction`,`pulmonary hypertension`,`cor pulmonale`,`RV infarct`,`tricuspid regurgitation`,`RV strain`,`JVD`,`Kussmaul sign`,`elevated JVP`],source:{chapter:`Cardiology`,section:`Right Ventricular Failure`,pages:`25`,authors:`Frederick Lang`,keyFacts:[`RV is preload-dependent but intolerant of fluid overload — excess IVF → RV distension + D-sign (septal shift) → LV underfilling`,`Norepinephrine: first-line for RV cardiogenic shock — maintains SVR and RV coronary perfusion pressure`,`RV MI (V4R): ST elevation in V4R Sn 88%, Sp 78% — obtain right-sided leads in ALL inferior STEMIs; AVOID nitrates, diuretics, morphine in RV MI`,`PAPi (PA pulsatility index) = (PASP - PADP) / RAP — PAPi <0.9 indicates severe RV dysfunction (PA catheter measurement)`,`iNO (inhaled nitric oxide): selective pulmonary vasodilator — reduces PVR without systemic hypotension; 20-80 ppm; use in post-cardiac surgery RV failure or severe PAH`]},assessment:`#Right Ventricular (RV) Failure
RV failure: inability of the RV to maintain adequate preload for LV filling without developing elevated right-sided filling pressures.
Suspected etiology:
[ ] Pressure overload: pulmonary HTN (Group 1-5), massive PE, ARDS, LVOT obstruction
[ ] Volume overload: severe TR, large L→R shunt (ASD, VSD), severe PR
[ ] Loss of contractility: RV MI (inferior/posterior STEMI — RCA), myocarditis, RV CM
[ ] RV pacing-induced dysfunction
[ ] Post-cardiac surgery (RV stunning after CPB, post-LVAD)
Clinical findings: JVP elevated [ ] / Kussmaul sign (JVP rises with inspiration) [ ] / RV heave [ ] / Loud P2 [ ] / TR murmur [ ] / Peripheral edema / hepatomegaly / ascites [ ]
Hemodynamic profile: BP ___ HR ___ MAP ___  (cardiogenic shock criteria if MAP <65 despite adequate preload)`,ddx:`ACUTE RV FAILURE:
• Massive or submassive PE: acute RV pressure overload → RV dilation, D-sign on TTE, McConnell sign, RV:LV ratio >1
• RV MI: inferior MI extending to RV (RCA) — presents with hypotension, JVD, clear lungs, ST elevation in right-sided leads (V4R)
• Post-cardiac surgery (post-CPB): RV stunning, global RV dysfunction
• ARDS with severe hypoxia/hypercapnia: pulmonary vasoconstriction → RV afterload
• Tension pneumothorax, cardiac tamponade: obstructive cause of RV failure (mechanical compression)

CHRONIC RV FAILURE:
• Pulmonary arterial hypertension (PAH — WHO Group 1): idiopathic, connective tissue disease (scleroderma), congenital heart disease
• Left-sided HF (WHO Group 2): most common cause of pulmonary HTN; LV filling pressure elevation → passive pulmonary HTN → RV failure
• Chronic pulmonary disease (WHO Group 3): COPD, ILD — chronic hypoxic vasoconstriction
• CTEPH — Chronic thromboembolic PH (WHO Group 4): recurrent PE leading to organized thrombus
• Severe TR: functional RV volume overload`,workup:`• 12-lead ECG: right axis deviation, new RBBB, S1Q3T3 (PE), RV strain (TWI V1-V4), inferior ST elevation with right-sided involvement
• Right-sided ECG leads (V4R-V6R): ST elevation in V4R = RV MI (Sn 88%, Sp 78%) — ALWAYS perform in inferior STEMI
• TTE: RV size and function, IVC plethora, estimated PASP, TR severity, D-sign (interventricular septal flattening in diastole), McConnell sign (PE), pericardial effusion
• BNP/NT-proBNP: elevated in RV failure; serial measurements for prognosis
• Troponin: RV myocardial injury
• CT-PA: massive/submassive PE evaluation; assesses RV:LV ratio (>1 = RV strain)
• Pulmonary function tests: if chronic lung disease suspected
• Right heart catheterization (Swan-Ganz): definitive hemodynamic assessment; mPAP, PCWP, CO, PVR
  - PVR >3 Wood units + mPAP >20 mmHg = pulmonary hypertension
  - PCWP >15 mmHg suggests left-sided etiology (Group 2 PH)
  - Consider in undifferentiated shock, unclear RV vs. LV failure, MCS planning`,management:`GENERAL PRINCIPLES (all acute RV failure):
• RV is preload-dependent but NOT tolerant of fluid overload (excessive IVF worsens RV distension → interventricular septal shift → LV underfilling)
• Fluid challenge: cautious 250-500mL NS/LR if CVP <8; reassess after each bolus for JVP/hepatomegaly worsening
• Avoid RV afterload increases: correct hypoxia (O2 to SpO2 ≥92%), hypercapnia, acidosis, hypothermia (all increase PVR)
• Avoid positive pressure ventilation if possible: PPV increases RV afterload; if intubated, minimize PEEP and plateau pressures

VASOPRESSORS / INOTROPES (for RV cardiogenic shock, MAP <65):
• Norepinephrine: first-line vasopressor — maintains systemic vascular resistance (prevents RV ischemia from hypotension) → titrate to MAP ≥65 mmHg
• Vasopressin: add-on for refractory hypotension (0.03-0.04 U/min fixed dose); preferentially constricts systemic > pulmonary vasculature
• Dobutamine: add if RV contractility poor (low CO without severe hypotension); start 2.5-5 mcg/kg/min
• Milrinone: inodilator; reduces PVR and improves RV contractility; use cautiously with hypotension (can worsen)
• Inhaled nitric oxide (iNO): selective pulmonary vasodilator; reduces PVR without systemic hypotension; 20-80 ppm; use in post-cardiac surgery RV failure, severe PAH, RV MI shock
• Inhaled prostacyclins (epoprostenol, iloprost): alternative or add-on to iNO

RV MI (SPECIFIC):
• Volume loading: 1-2L NS cautiously (preload-dependent RV) if JVP not markedly elevated
• Avoid: nitrates, diuretics, morphine (preload-reducing agents worsen RV MI hypotension)
• Reperfusion: emergent PCI for culprit RCA lesion — most important intervention
• Temporary pacing: AV sequential pacing if high-degree AV block (atrial kick critical for RV MI)
• Norepinephrine: if hypotension persists after volume loading + PCI
• Mechanical support: IABP (improves coronary perfusion), right-sided Impella or ECMO in refractory cardiogenic shock

MASSIVE PE WITH RV FAILURE (see PE template):
• Systemic thrombolysis (alteplase 100mg over 2h) if hemodynamically unstable (SBP <90)
• Catheter-directed therapy or surgical embolectomy for salvageable patients with contraindications to lysis

CHRONIC PH / PAH:
• Pulmonary vasodilators (for WHO Group 1 only): phosphodiesterase-5 inhibitors (sildenafil), endothelin receptor antagonists (bosentan, ambrisentan), prostacyclin analogs (epoprostenol IV, treprostinil, iloprost inhaled)
• Diuresis for volume overload: furosemide + spironolactone
• Pulmonology/PH specialist consult for all confirmed PAH`,monitoring:`• Daily weights and strict I&Os (goal volume neutral to negative in chronic RV failure with congestion)
• CVP monitoring: if PA line in place; target 8-12 mmHg in acute RV failure; avoid >15 mmHg (worsens LV filling)
• Telemetry: arrhythmias worsen RV function (AF → loss of atrial kick; maintain SR)
• Echo: repeat TTE at 24-72h to assess RV response to therapy
• Troponin trend: ongoing myocardial injury
• Mixed venous O2 saturation (ScvO2 or MvO2): target >65% (low = poor RV output)
• For iNO use: methemoglobin level every 4-6h (keep <5%)`,disposition:`• ICU/CCU: RV cardiogenic shock (MAP <65 + vasopressors), massive PE with RV failure, RV MI with hemodynamic compromise, post-cardiac surgery RV dysfunction
• Cardiology consult: all acute RV failure, RV MI (PCI candidacy), PA catheter placement
• Pulmonary HTN specialist consult: suspected Group 1 PAH (IPAH, CTD-associated, drug-induced)
• Cardiothoracic surgery: refractory RV failure requiring mechanical support (Impella RP, VA-ECMO, BiVAD), post-CPB RV failure`},{id:`pad-acute-limb-ischemia`,system:`cv`,title:`Peripheral Artery Disease / Acute Limb Ischemia`,keywords:[`PAD`,`peripheral artery disease`,`claudication`,`acute limb ischemia`,`ALI`,`ABI`,`ankle brachial index`,`rest pain`,`vascular surgery`,`ischemic ulcer`,`limb ischemia`,`arterial occlusion`,`6 Ps`],source:{chapter:`Cardiology`,section:`Peripheral Artery Disease`,pages:`36`,authors:`Daniel Restifo`,keyFacts:[`ABI ≤0.9: diagnostic for PAD (95% Sn, 100% Sp for ≥50% stenosis); ABI ≥1.40 = noncompressible (calcified, DM/ESRD) — use toe-brachial index`,`ALI Category III (irreversible): inaudible arterial + venous Doppler, complete motor/sensory loss — amputation only, do NOT attempt reperfusion (fatal hyperK + myoglobinuria)`,`Cilostazol 100mg BID: only AHA/ACC-recommended med for claudication exercise capacity; CONTRAINDICATED in HF`,`Rivaroxaban 2.5mg BID + ASA: reduces major adverse cardiac AND limb events vs. ASA alone (COMPASS trial — symptomatic PAD or post-revascularization)`,`Supervised exercise therapy: as effective as stenting for claudication (CLEVER-RCT) — prescribe before revascularization for claudication`]},assessment:`#Peripheral Artery Disease (PAD) / Acute Limb Ischemia
Presentation: [ ] Asymptomatic (incidental ABI finding)  [ ] Claudication  [ ] Rest pain  [ ] Non-healing ulcer/gangrene  [ ] Acute limb ischemia
Onset: [ ] Chronic (PAD)  [ ] ACUTE (<2 weeks) — VASCULAR SURGERY CONSULT STAT if acute
ABI (ankle-brachial index): ___ [Normal 1.00-1.40 / Borderline 0.91-0.99 / Mild-moderate PAD 0.41-0.90 / Severe PAD 0-0.40 / Non-compressible ≥1.40 (DM/ESRD — use toe-brachial index)]
Rutherford Classification: [ ] 0 (asymptomatic)  [ ] 1-3 (claudication mild/mod/severe)  [ ] 4 (rest pain)  [ ] 5 (minor tissue loss)  [ ] 6 (major tissue loss)
Acute Limb Ischemia 6 P's: Pain [ ] / Pallor [ ] / Pulselessness [ ] / Paresthesia [ ] / Paralysis [ ] / Poikilothermia [ ]
Category: [ ] I Viable  [ ] IIa Marginally threatened  [ ] IIb Immediately threatened  [ ] III Irreversible`,ddx:`CHRONIC PAD:
• Atherosclerotic PAD: most common; risk factors: smoking (strongest), DM, HTN, hyperlipidemia, male sex, age, CKD
• Pseudo-claudication (neurogenic): lumbar spinal stenosis; worse with standing/walking downhill, relieved by sitting/leaning forward
• Popliteal artery entrapment: young athletes; exertional calf pain; abnormal ABI with plantar flexion
• Buerger's disease (thromboangiitis obliterans): young male heavy smokers, distal vessel disease, no proximal atherosclerosis

ACUTE LIMB ISCHEMIA (ALI):
• Arterial embolism (most common): AF > endocarditis > aortic aneurysm/plaque → sudden abrupt occlusion, no collaterals, more severe ischemia
• Arterial thrombosis in situ: atherosclerotic plaque rupture or progression; some collaterals present
• Paradoxical embolism: via PFO/ASD in setting of DVT/PE
• Aortic dissection: extending into iliac/femoral arteries → acute limb ischemia as initial presentation
• Peripheral arterial aneurysm thrombosis: popliteal > femoral
• Iatrogenic: post-cardiac catheterization arterial injury, arterial line thrombosis`,workup:`CHRONIC PAD:
• ABI with PVR (pulse volume recordings): ABI ≤0.9 = PAD (95% Sn, 100% Sp for ≥50% stenosis); ABI ≥1.40 = non-compressible → toe-brachial index
• Segmental pressures: localize disease (aortoiliac vs. femoropopliteal vs. tibial)
• Exercise ABI: if resting ABI normal but high clinical suspicion for PAD
• Duplex ultrasound: non-invasive; assess stenosis severity and hemodynamic significance
• CTA with runoff / MRA: anatomic mapping before revascularization planning
• Angiography: gold standard before endovascular or surgical intervention

ACUTE LIMB ISCHEMIA:
• Pulse exam with Doppler (Doppler signal present/absent)
• STAT CTA with runoff: if patient stable; shows level of occlusion and collateral flow
• ECG + cardiac monitoring: identify AF as embolic source
• Echocardiogram: cardiac source of embolism (LV thrombus, vegetation, LA thrombus)
• Labs: CBC, BMP, coagulation, T&S, lactate, CK (rhabdomyolysis post-reperfusion)
• Hypercoagulability workup: if thrombosis with no clear etiology (defer to outpatient if possible)`,management:`CHRONIC PAD:
• CV risk factor modification: smoking cessation (most important), DM control, statin therapy (high-intensity, regardless of LDL), HTN control
• Supervised exercise therapy: FIRST-LINE for claudication (CLEVER-RCT: as effective as stenting for walking distance)
• Antiplatelet therapy: ASA 75-162mg OR clopidogrel 75mg daily for secondary prevention (symptomatic PAD)
• Rivaroxaban 2.5mg BID + ASA: reduces major adverse cardiac and limb events vs. ASA alone if symptomatic or post-revascularization
• Cilostazol 100mg BID: PDE3 inhibitor; improves claudication symptoms; CONTRAINDICATED in HF; adjunct after exercise + smoking cessation
• Revascularization (endovascular or surgical): for chronic limb-threatening ischemia (CLTI), severe claudication refractory to medical/exercise therapy, or threatened limb
• Wound care: pressure offloading, debridement, vascular assessment for healing potential

ACUTE LIMB ISCHEMIA (SURGICAL EMERGENCY — category I or II):
• STAT vascular surgery and vascular medicine consult
• IV heparin UFH anticoagulation: 80 U/kg bolus → 18 U/kg/h infusion IMMEDIATELY to prevent clot propagation
• Category I (viable): CTA to map anatomy → elective endovascular or surgical revascularization
• Category II (threatened): emergent endovascular (catheter-directed thrombolysis or mechanical thrombectomy) OR surgical thromboembolectomy (Fogarty catheter)
• Category III (irreversible — no Doppler signal, complete motor/sensory loss): amputation; DO NOT attempt reperfusion (reperfusion of irreversible ischemia → hyperkalemia, acidosis, myoglobinuria, renal failure, fatal)
• Post-reperfusion monitoring: compartment syndrome (fasciotomy if needed), hyperkalemia, metabolic acidosis, rhabdomyolysis, AKI`,monitoring:`• Serial pulse exams and Doppler every 1-2h in acute limb ischemia (color, temperature, capillary refill, Doppler signal)
• Compartment pressure monitoring after revascularization: pain with passive stretch, tense compartment → fasciotomy
• CK, K+, BMP every 6-12h post-reperfusion (rhabdomyolysis, hyperkalemia risk)
• Urine output (Foley catheter): myoglobinuria → aggressive hydration target UOP >1 mL/kg/h
• Telemetry post-acute event: identify AF or cardiac arrhythmia as embolic source
• ABI post-procedure at 30 days (assess revascularization success)`,disposition:`• STAT vascular surgery consult: all acute limb ischemia — do not delay
• ICU/step-down: ALI post-revascularization (compartment syndrome risk, rhabdomyolysis monitoring, hemodynamic monitoring)
• Vascular medicine outpatient: chronic PAD management, supervised exercise program enrollment, medical optimization
• Cardiology consult: new-onset AF as embolic source, echocardiogram for cardiac source
• Wound care/podiatry: chronic limb-threatening ischemia with tissue loss`},{id:`cardiac-arrest-ttm`,system:`cv`,title:`Cardiac Arrest / Post-ROSC / TTM`,keywords:[`cardiac arrest`,`ACLS`,`ROSC`,`CPR`,`VF`,`VT`,`PEA`,`asystole`,`targeted temperature management`,`TTM`,`ECMO CPR`,`post-arrest`,`OHCA`,`code blue`],source:{chapter:`Cardiology`,section:`ACLS: Cardiac Arrest & TTM`,pages:`1–2`,authors:`Brian Huang, Christopher Schenck`,keyFacts:[`H&Ts: Hypovolemia, Hypoxia, Hydrogen ion (acidosis), Hypo/Hyperkalemia, Hypothermia — Tension PTX, Tamponade, Toxins, Thrombosis (PE/coronary)`,`VF/pulseless VT: defibrillate immediately (biphasic 120-200J); Epi 1mg q3-5min; amiodarone 300mg → 150mg or lidocaine 1-1.5mg/kg → 0.5-0.75mg/kg`,`Post-ROSC: MAP >65 (NEJM 2022;387:1456), target normoxia (SpO2 92-98%), normocapnia (PaCO2 35-45), TTM 36-37.5°C x24h, avoid fever x72h`,`TTM: Class I recommendation for all patients not following commands post-arrest (AHA 2023); goal is to avoid fever ≥37.5°C for 72h`,`ECPR (ECMO CPR): consider if no ROSC within 5 min, EtCO2 >10 mmHg, age <75, BMI ≤45 — page ECMO team <10 min from code initiation`]},assessment:`#Cardiac Arrest / Post-ROSC
Presenting rhythm: [ ] VF  [ ] Pulseless VT  [ ] PEA  [ ] Asystole
Witnessed: [ ] Yes  [ ] No  |  Bystander CPR: [ ] Yes  [ ] No
Time from arrest to CPR: *** min | Time to first shock (if shockable): *** min
ROSC achieved: [ ] Yes — time: ***  [ ] No — duration CPR so far: ***
Reversible causes identified (H&Ts): ***
Post-ROSC: MAP *** | SpO2 *** | EtCO2 *** | Following commands: [ ] Yes  [ ] No
TTM: [ ] Initiated  [ ] Target 36-37.5°C`,ddx:`REVERSIBLE CAUSES (H&Ts):
Hs: Hypovolemia (hemorrhage, dehydration), Hypoxia (airway/resp failure), Hydrogen ion (severe acidosis), Hypokalemia/Hyperkalemia, Hypothermia
Ts: Tension pneumothorax (needle decompression), Tamponade (emergent pericardiocentesis), Toxins (tox screen, antidotes), Thrombosis PE (TNK 50mg IV), Thrombosis coronary (STEMI → cath lab)

SHOCKABLE (VF/pVT): Cardiac: ischemia/STEMI, cardiomyopathy, channelopathy (Long QT, Brugada, CPVT), HOCM
NON-SHOCKABLE (PEA/Asystole): Massive PE, tension PTX, cardiac tamponade, profound acidosis, hyperkalemia, drug OD`,workup:`• 12-lead EKG immediately post-ROSC: STEMI or new LBBB → activate cath lab regardless of neurologic status
• ABG: PaCO2 target 35-45 (normocapnia), PaO2 target 80-100 mmHg (avoid hyperoxia)
• BMP: K+ (correct to 4-4.5 mEq/L), glucose (target 140-180 mg/dL — avoid hypo/hyperglycemia)
• Troponin, BNP, CBC, coagulation, lactate (trend for perfusion)
• CXR: ETT position, PTX, pulmonary edema, rib fractures from CPR
• CT head: if traumatic arrest, focal neuro findings post-ROSC, or prior to withdrawal discussion
• POCUS (bedside echo): RV dilation (PE), pericardial effusion, wall motion abnormality (ischemia), global hypokinesis
• EEG: if not following commands at 24-48h post-arrest — detect non-convulsive seizures`,management:`DURING ARREST (per ACLS):
• Continuous high-quality CPR: 2-2.4 inch depth, 100-120 BPM, minimize interruptions, full recoil
• VF/pVT → defibrillate immediately: biphasic 120-200J (MGH: Zoll R Series)
• Epinephrine 1mg IV q3-5min (immediately in PEA/asystole; after 2nd shock in VF/pVT)
• Amiodarone (2nd/3rd shock in VF): 300mg IV → 150mg IV; OR lidocaine 1-1.5mg/kg → 0.5-0.75mg/kg
• MgSO4 2g IV: for TdP / suspected hypomagnesemia
• Tenecteplase (TNK) if massive PE suspected: 50mg IV push x1 → CPR ≥15 more minutes

POST-ROSC STABILIZATION:
• Hemodynamics: MAP ≥65 mmHg (vasopressors: NE or epi; avoid dopamine as vasopressor of choice post-arrest)
• Oxygenation: titrate FiO2 to SpO2 92-98% (avoid hyperoxia); PEEP 5-8 cmH2O
• Ventilation: normocapnia (PaCO2 35-45 mmHg); VT 6 mL/kg IBW
• Glucose: target 140-180 mg/dL (avoid hypoglycemia <80)
• Electrolytes: K+ 4-4.5, Mg 2-2.5; correct aggressively
• Seizure management: EEG monitoring; levetiracetam if seizure activity

TARGETED TEMPERATURE MANAGEMENT (TTM):
• Initiate if not following commands post-arrest (AHA 2023 Class I)
• Target: 36-37.5°C x24h (avoid fever ≥37.5°C for ≥72h)
• Active fever prevention: cooling blankets, ice packs, intravascular devices
• Antipyretics: acetaminophen 1g q6h scheduled x72h

CORONARY ANGIOGRAPHY:
• STEMI post-arrest: emergent PCI regardless of neuro status
• No STEMI: individualize; consider coronary angiography if high suspicion for ischemic cause`,monitoring:`• Continuous telemetry, SpO2, EtCO2 (target 35-45 during CPR/post-ROSC)
• Core temperature monitoring (bladder or esophageal probe) during TTM
• Glucose every 1-2h; BMP every 6h
• ABG every 4-6h
• Neuro exam every 4-8h post-ROSC; SSEP, EEG, brain MRI at 72-96h for neuroprognostication`,disposition:`• ICU: all post-ROSC patients — hemodynamic and neurological monitoring
• Cardiology/Interventional cardiology: STEMI post-arrest
• Neurology: neuroprognostication at 72-96h (EEG, SSEP, clinical exam)
• ECMO team: if no ROSC within 5 min in eligible patients — page early (<10 min from code start)`},{id:`narrow-complex-svt`,system:`cv`,title:`Narrow Complex Tachycardia / SVT`,keywords:[`SVT`,`narrow complex tachycardia`,`AVNRT`,`AVRT`,`adenosine`,`atrial tachycardia`,`MAT`,`junctional tachycardia`,`supraventricular`,`paroxysmal SVT`,`Wolff-Parkinson-White`,`WPW`],source:{chapter:`Cardiology`,section:`Narrow Complex Tachycardia`,pages:`8`,authors:`Brian Huang, Christopher Schenck`,keyFacts:[`Narrow complex (<120ms) regular tachycardia: sinus tach, AVNRT (most common SVT), AVRT, atrial tachycardia, atrial flutter with regular block`,`Adenosine 6mg rapid IV push + NS flush + arm raise → repeat 12mg x1: diagnostic (slows rate to reveal flutter waves or AT) and therapeutic (terminates AVNRT/AVRT)`,`Modified Valsalva: semi-recumbent → forceful blow into 10cc syringe x10-15s → supine + passive leg raise 45° for 15s — 43% effective (vs 17% standard Valsalva)`,`WPW + AFib: NEVER give adenosine, digoxin, CCBs, or BBs (increase conduction through accessory pathway → VF) — use procainamide or electrical cardioversion`,`Irregular narrow complex: AFib (most common), MAT (≥3 distinct P waves, seen in COPD), AFib + WPW (irregular wide complex with delta waves)`]},assessment:`#Narrow Complex Tachycardia / SVT
HR: *** | QRS width: *** ms (narrow <120ms) | Regularity: [ ] Regular  [ ] Irregular
P waves: [ ] Visible before QRS  [ ] Hidden in QRS (AVNRT)  [ ] After QRS (RP <PR)  [ ] None
Onset: [ ] Abrupt  [ ] Gradual
Hemodynamic stability: [ ] Stable  [ ] UNSTABLE (HoTN/AMS/ischemia → synchronized cardioversion)
Rhythm interpretation:
[ ] AVNRT (most common SVT — retrograde P hidden in/just after QRS, "pseudo-R" in V1)
[ ] AVRT (delta wave if orthodromic WPW)  [ ] Atrial tachycardia  [ ] Atrial flutter (regular, F waves ~300 bpm, 2:1/3:1/4:1 block)
[ ] MAT (irregular, ≥3 distinct P morphologies)  [ ] Sinus tachycardia (gradual onset, P before QRS)`,ddx:`NARROW REGULAR:
• Sinus tachycardia: gradual onset/offset; identifiable cause (pain, fever, hypovolemia, anemia, PE, anxiety)
• AVNRT (most common SVT): retrograde P buried in or just after QRS; paroxysmal; pseudo-R' in V1, pseudo-S in II/III/aVF
• AVRT (orthodromic): retrograde P after QRS (RP interval short); WPW features may only appear after termination
• Atrial tachycardia: P before QRS but abnormal morphology; often persistent; consider structural heart disease
• Atrial flutter: "sawtooth" F waves in inferior leads at 300 bpm; regular 2:1 block = HR ~150 most common
NARROW IRREGULAR:
• AFib: no discrete P waves; irregularly irregular
• MAT: ≥3 distinct P wave morphologies; seen in COPD, pulmonary hypertension, elderly
• AFib/flutter with variable block
• Sinus tachycardia with frequent PACs`,workup:`• 12-lead EKG: look for P waves (before, hidden in, or after QRS), delta waves (WPW), flutter waves
• Rhythm strip: vagal maneuvers or adenosine will transiently slow rate — flutter waves or AT become visible
• BMP: K+, Mg2+ (electrolyte-triggered arrhythmias)
• TSH: hyperthyroidism as precipitant (especially AFib/SVT)
• Troponin: if ischemia suspected as precipitant
• TTE: structural heart disease, ventricular function, pre-excitation evaluation`,management:`UNSTABLE (HoTN <90 systolic / AMS / ischemic chest pain / acute HF):
• Synchronized cardioversion immediately: narrow regular 50-100J, narrow irregular 120-200J

STABLE:
Step 1 — VAGAL MANEUVERS (first-line, no risk):
• Modified Valsalva (most effective): semi-recumbent → blow into 10cc syringe x10-15s → flat + passive leg raise 45° x15s (43% conversion)
• Carotid sinus massage: unilateral, avoid if prior TIA/CVA/bruits
• Ice water face immersion (diving reflex)

Step 2 — ADENOSINE (if vagal fails; AVNRT/AVRT):
• 6mg rapid IV push (peripheral) with NS flush + arm raise → 12mg x1 if fails; reduce dose 50% if central line
• WARNING: avoid in WPW + wide irregular tachycardia (→ VF), severe asthma, heart transplant (relative CI)
• Effects: transient AV block → converts AVNRT/AVRT; reveals atrial flutter/AT if no conversion

Step 3 — AV NODAL BLOCKERS (rate control or cardioversion):
• Diltiazem 0.25mg/kg IV (≤25mg) over 2 min → infusion 5-15mg/h (avoid if LVEF unknown/low)
• Metoprolol 2.5-5mg IV over 2 min, repeat q5 min up to 15mg
• Avoid CCBs/BBs: WPW + pre-excited AFib (→ VF); pre-excited AFib → procainamide or cardioversion

SPECIFIC:
• MAT: treat underlying cause (COPD exacerbation, hypomagnesemia, hypokalemia); magnesium 2g IV; rate control with diltiazem or metoprolol
• WPW + AFib: procainamide 15-17mg/kg IV OR electrical cardioversion; electrophysiology consult for ablation
• Persistent SVT: consider electrophysiology consult for ablation (highly effective, low risk)`,monitoring:`• Continuous telemetry during treatment; document rhythm before and after each intervention
• BP every 5-10 min during IV antiarrhythmic administration
• 12-lead EKG after conversion: document baseline rhythm, look for delta waves (WPW), PR/QTc`,disposition:`• ICU/telemetry: hemodynamic instability, first episode requiring IV antiarrhythmics, WPW
• Cardiology/Electrophysiology: WPW, recurrent SVT (ablation candidate), unexplained SVT, structural heart disease
• Outpatient: recurrent AVNRT/AVRT after successful conversion — PO flecainide, propafenone, beta-blocker, or diltiazem for suppression; consider ablation referral`},{id:`defibrillation-cardioversion-pacing`,system:`cv`,title:`Defibrillation / Cardioversion / Pacing`,keywords:[`defibrillation`,`cardioversion`,`synchronized cardioversion`,`transcutaneous pacing`,`DCCV`,`external pacing`,`Zoll`,`cardiovert`,`shock`,`temporary pacing wire`,`transvenous pacing`],source:{chapter:`Cardiology`,section:`ACLS: Defibrillation/Cardioversion/Pacing`,pages:`5`,authors:`Brian Huang, Christopher Schenck`,keyFacts:[`Synchronized cardioversion: narrow regular 50-100J, narrow irregular 120-200J, wide regular 100J, wide irregular (VF/pVT) → DEFIBRILLATE 120-200J`,`Defibrillation (UNSYNCHRONIZED): VF, pulseless VT, wide irregular (polymorphic VT/TdP) — always deliver maximum energy for VF`,`Preprocedure sedation/analgesia: hydromorphone 1-2mg IV + lorazepam 2mg IV (or propofol if anesthesia available)`,`Transcutaneous pacing: demand mode, rate 60-80 BPM, increase mA until electrical capture then add 10mA; confirm mechanical capture (pulse, BP, pleth)`,`Transvenous pacing (TVP): gold standard for symptomatic high-degree AV block not responding to atropine — place via central venous access (IJ preferred)`]},assessment:`#Indication for Cardioversion / Defibrillation / Pacing
CARDIOVERSION/DEFIBRILLATION:
Rhythm: *** | HR: *** | Hemodynamic status: [ ] Stable  [ ] Unstable
Unstable features: [ ] Hypotension  [ ] AMS  [ ] Ischemic chest pain  [ ] Acute pulmonary edema
Type: [ ] Synchronized cardioversion (unstable tachyarrhythmia with pulse)
      [ ] Defibrillation (VF, pulseless VT, wide irregular polymorphic VT)
PACING:
[ ] Transcutaneous (temporary — symptomatic bradycardia/AV block unresponsive to atropine)
[ ] Transvenous (TVP — persistent symptomatic bradycardia, high-degree AV block)
Last meal: *** | INR: *** | Known LA thrombus: [ ] Yes (TEE recommended before cardioversion if AFib >48h without anticoagulation)`,ddx:`INDICATIONS FOR CARDIOVERSION (unstable):
• AFib/flutter with RVR + hemodynamic compromise
• SVT (AVNRT/AVRT) not converting with medications
• VT with pulse (monomorphic — synchronized; polymorphic — defibrillate)

INDICATIONS FOR DEFIBRILLATION (unsynchronized):
• VF (ventricular fibrillation) — most time-sensitive
• Pulseless VT
• Wide irregular (polymorphic VT/TdP) — do NOT synchronize; cannot reliably identify R wave

INDICATIONS FOR PACING:
• Symptomatic bradycardia (sinus or junctional bradycardia unresponsive to atropine)
• High-degree AV block (Mobitz II or CHB) with hemodynamic compromise
• Post-cardiac arrest: PEA with high-degree AV block
• After transcutaneous pacing: bridge to transvenous pacing`,workup:`• 12-lead EKG: confirm rhythm before cardioversion/defibrillation
• TEE or ≥3 weeks of anticoagulation before elective cardioversion of AFib (if duration unknown or >48h)
• BMP: K+, Mg (correct before elective cardioversion — electrolyte imbalance increases arrhythmia recurrence)
• Digoxin level: if on digoxin (cardioversion contraindicated if toxic — risk of VF)
• Thyroid function: if elective cardioversion of new AFib`,management:`SYNCHRONIZED CARDIOVERSION (unstable tachycardia with pulse):
• Sedate: hydromorphone 1-2mg IV + lorazepam 2mg IV (or propofol if anesthesia available); have airway backup
• Apply pads: anterior (right clavicle/sternum) + lateral (left lower chest/apex) OR anterior-posterior
• Select SYNC mode (confirm "SYNC" marker on screen before delivery)
• Dose: narrow & regular → 50-100J; narrow & irregular (AFib) → 120-200J; wide & regular → 100J
• Charge and deliver: announce "clear" and ensure no contact
• Re-evaluate rhythm; repeat with escalating energy if needed

DEFIBRILLATION (VF, pulseless VT, wide irregular):
• UNSYNCHRONIZED mode (do NOT use Sync for VF — may not detect R wave → no shock)
• Energy: biphasic 120-200J (MGH: Zoll default setting) or maximum if waveform unknown
• Minimize CPR interruption: pre-charge while doing compressions; deliver shock within 5 seconds of stopping CPR
• After shock: immediately resume CPR x2 min before rhythm check

TRANSCUTANEOUS PACING (emergent bradycardia/AV block):
• Apply pads (same positions as defibrillation); select PACER mode
• Rate: 60-80 BPM (demand mode); slowly increase mA from 40mA until electrical capture (pacer spike with QRS)
• Confirm mechanical capture: femoral pulse, arterial line waveform, plethysmography
• Analgesia: IV fentanyl + midazolam (pacing is painful — burning/skeletal muscle contraction)

TRANSVENOUS PACING (TVP):
• IJ approach preferred; fluoroscopy or POCUS guidance
• Balloon-tipped catheter advanced to RV apex; threshold testing: rate 60, mA down until loss of capture (threshold); set at 2x threshold
• Verify position on CXR; LBBB morphology confirms RV pacing`,monitoring:`• Continuous telemetry during and after procedure
• BP every 5 min post-cardioversion; confirm sinus rhythm on 12-lead EKG
• Transcutaneous pacing: arterial line or palpate pulse to confirm mechanical capture every 30-60 min
• TVP: CXR to confirm position; daily threshold testing; assess for complications (PTX, cardiac perforation)`,disposition:`• ICU: all emergent cardioversion/defibrillation, TVP placement
• Cardiology EP consult: TVP placement, recurrent arrhythmia requiring device therapy, permanent pacemaker evaluation
• Anesthesia: elective DCCV requiring deep sedation in high-risk patients`},{id:`ekg-interpretation`,system:`cv`,title:`EKG Interpretation`,keywords:[`EKG`,`ECG`,`electrocardiogram`,`ST elevation`,`ST depression`,`LBBB`,`RBBB`,`QRS axis`,`bundle branch block`,`STEMI`,`ischemia`,`LVH`,`Sgarbossa`,`PR interval`,`QTc`,`AV block`],source:{chapter:`Cardiology`,section:`EKG Interpretation`,pages:`6–7`,authors:`Brian Huang, Christopher Schenck`,keyFacts:[`Systematic approach: Rate → Rhythm → Axis → Intervals (PR, QRS, QTc) → Complexes (P/Q/R/S/T) → Chambers → Ischemia/Infarction — compare to prior`,`STEMI criteria: ST elevation ≥2mm in ≥2 contiguous leads (precordial) or ≥1mm in ≥2 limb leads; Sgarbossa criteria for STEMI in LBBB (concordant ST↑ ≥1mm, concordant ST↓ ≥1mm V1-V3, or discordant ST↑ >25% of preceding S wave)`,`LBBB: broad notched R in I/aVL/V5-V6 + QS or rS in V1; QRS ≥120ms — new LBBB in ACS treated as STEMI equivalent`,`RBBB: RSR' ('rabbit ears') in V1-V2 + broad S in I/V5-V6; QRS ≥120ms — can be normal variant`,`AV blocks: first degree (PR >200ms); Mobitz I/Wenckebach (PR progressively prolongs then dropped QRS — usually benign); Mobitz II (sudden dropped QRS — indicates infranodal block — more dangerous); CHB (P-QRS dissociation)`]},assessment:`#EKG Interpretation — Systematic Analysis
Rate: *** bpm (regular: 300/large boxes; irregular: count x6)
Rhythm: [ ] Sinus  [ ] Non-sinus: ***  |  Regular [ ]  Irregular [ ]
Axis: [ ] Normal (−30 to +90°)  [ ] LAD  [ ] RAD  [ ] Extreme
PR interval: *** ms (normal <200ms) | QRS: *** ms (normal <120ms) | QTc: *** ms (normal ♂ <440, ♀ <460)
P waves: [ ] Normal morphology  [ ] Absent  [ ] Abnormal: ***
QRS: [ ] Narrow  [ ] RBBB (RSR' V1, wide S in I/V6)  [ ] LBBB (broad R in I/V6, QS in V1)  [ ] LVH  [ ] Delta waves
ST-T: [ ] Normal  [ ] ST↑ ***  [ ] ST↓ ***  [ ] T inversions ***  [ ] STEMI pattern
Ischemia territory: [ ] Anterior (V1-V4 / LAD)  [ ] Inferior (II/III/aVF / RCA)  [ ] Lateral (I/aVL/V5-V6 / LCx)  [ ] Posterior (V7-V9; ST↓V1-V3)`,ddx:`ST ELEVATION DDx (not all ST↑ = STEMI):
• STEMI: acute coronary occlusion; ST↑ in contiguous leads; reciprocal ST↓ in opposite leads
• LBBB (new): Sgarbossa criteria — treat as STEMI equivalent if criteria met
• Benign early repolarization: young males; J-point elevation; concave ST elevation; no reciprocal changes
• Pericarditis: diffuse ST elevation (saddle-shaped), PR depression, no reciprocal ST changes (except aVR)
• LVH with strain: ST depression/T-wave inversion in lateral leads (V5-V6, I, aVL) — do NOT give tPA
• Brugada: coved ST elevation V1-V2; risk of sudden death
• STEMI mimic: hyperkalemia (peaked T, then sine wave), Wellens' syndrome (deep T inversions V2-V3 — LAD stenosis), de Winter T waves (V1-V4 — LAD occlusion without ST↑)

AV BLOCK DDx:
• First degree: PR >200ms; benign; many causes (vagal tone, medications, infiltrative)
• Mobitz I (Wenckebach): progressive PR lengthening → dropped QRS; intranodal; benign; inferior MI
• Mobitz II: fixed PR with sudden dropped QRS; infranodal; can progress to CHB; requires pacing
• CHB (third degree): P waves dissociated from QRS; junctional or ventricular escape rhythm; pace`,workup:`• Compare to prior EKG (most important): new changes vs. chronic
• Clinical correlation: symptoms (chest pain, syncope, palpitations, dyspnea)
• Troponin: if ischemia pattern on EKG
• BMP: electrolyte abnormalities affecting EKG (hyperK, hypoK, hypoCa, hypoMg)
• TSH: if new AFib or SVT
• Drug levels (digoxin toxicity → bidirectional VT, scooping ST, AV block)`,management:`STEMI: activate cath lab immediately — goal door-to-balloon <90 min
STEMI EQUIVALENT (new LBBB or posterior STEMI): treat same as STEMI
UNSTABLE BRADYARRHYTHMIA:
• Atropine 0.5mg IV q3-5min up to 3mg: AV nodal block or sinus arrest
• Transcutaneous pacing: if refractory to atropine
• Transvenous pacing: Mobitz II or CHB — bridge to PPM
LONG QTc (>500ms or increase >60ms from baseline):
• Stop all QTc-prolonging drugs; replete K+ to 4.5 mEq/L and Mg to 2-2.5 mEq/L
• TdP management: Mg 2g IV over 5 min; overdrive pacing for recurrent TdP
WELLENS' SYNDROME (deep T inversions V2-V3):
• High-grade LAD stenosis — do NOT stress test; admit for cardiac catheterization`,monitoring:`• Serial EKGs every 15-30 min if active ischemia; every 6-12h in ACS
• Continuous telemetry: new LBBB, Mobitz II, CHB, long QTc, recurrent arrhythmias
• QTc monitoring: q8-12h after starting QTc-prolonging drugs; q8h if QTc >500ms`,disposition:`• Cath lab activation: STEMI, new LBBB meeting Sgarbossa criteria
• ICU/CCU: unstable arrhythmias, CHB with hemodynamic compromise, Wellens' syndrome (prior to cath)
• Cardiology consult: new LBBB/RBBB, high-degree AV block, Brugada pattern, Wellens', LVH with new changes`},{id:`chest-pain-approach`,system:`cv`,title:`Chest Pain — Approach and Risk Stratification`,keywords:[`chest pain`,`angina`,`chest pain workup`,`ACS risk stratification`,`HEART score`,`TIMI score`,`GRACE score`,`troponin`,`CCTA`,`unstable angina`,`stable angina`,`non-cardiac chest pain`,`pleuritic chest pain`],source:{chapter:`Cardiology`,section:`Chest Pain`,pages:`13`,authors:`Brian Huang, Christopher Schenck`,keyFacts:[`Classic angina triad: (1) substernal pressure/discomfort, (2) worse with exertion, (3) relieved by rest or nitrate — 'atypical' language no longer recommended by ACC/AHA`,`High-risk features for ACS: radiation to bilateral arms (+LR 2.6), diaphoresis (+LR 1.4-2.0), prior ACS (+LR 2.2), 24h pattern change (+LR 2.0)`,`High-sensitivity troponin (hs-cTn): initial + 1h or 0/3h algorithm allows rapid rule-out; undetectable + low clinical probability = 99% NPV for NSTEMI`,`HEART score (History, EKG, Age, Risk Factors, Troponin): 0-3 = low risk; 4-6 = moderate; ≥7 = high risk — guides admission and early invasive strategy`,`Antianginals: avoid nitrates if preload-sensitive (RV ischemia/infarction, HoTN, severe AS, recent PDEi use); BB careful in ADHF, long PR, 2°/3° AV block`]},assessment:`#Chest Pain — Risk Stratification
Character: [ ] Pressure/squeezing  [ ] Sharp/pleuritic  [ ] Burning/positional  [ ] Tearing/ripping
Onset/Duration: *** | Radiation: [ ] Left arm  [ ] Both arms (+LR 2.6)  [ ] Jaw  [ ] Back
Worse with: [ ] Exertion  [ ] Deep breath  [ ] Palpation  [ ] Position  [ ] Swallowing
Relieved by: [ ] Nitrates/rest  [ ] Antacids  [ ] Position change
Associated: [ ] Diaphoresis  [ ] N/V  [ ] Dyspnea  [ ] Syncope
HEART Score: H ___/2 + E ___/2 + A ___/2 + R ___/2 + T ___/2 = ___ (0-3: low; 4-6: moderate; ≥7: high)
Troponin: hs-cTn T0: *** | T1h/T3h: *** | Pattern: [ ] Rising (NSTEMI)  [ ] Stable/falling (non-ischemic)  [ ] Undetectable (rule-out)`,ddx:`LIFE-THREATENING (must exclude promptly):
• ACS (STEMI/NSTEMI/UA): ischemic pattern, troponin rise, typical angina features, ST changes
• Aortic dissection: tearing/ripping, migratory, maximal at onset, pulse differential, wide mediastinum
• Pulmonary embolism: pleuritic, sudden onset, hypoxia, risk factors (immobility, malignancy, prior DVT)
• Tension pneumothorax: sudden, pleuritic, tracheal deviation, unilateral absent breath sounds
• Cardiac tamponade: positional, muffled heart sounds, Beck's triad, pulsus paradoxus >10mmHg

HIGH PRIORITY:
• ADHF (acute decompensated): dyspnea, orthopnea, S3, elevated BNP, bilateral crackles
• Pericarditis: sharp, pleuritic, positional (better leaning forward), friction rub, diffuse ST elevation
• Myocarditis: young, viral prodrome, chest pain + arrhythmias, elevated troponin, EF depression on TTE

OTHER:
• Esophageal spasm: responds to nitrates (mimics angina); relieved by antacids/PPI
• GERD: burning, postprandial, positional
• Musculoskeletal: reproducible on palpation, localized tenderness
• Pleuritis, pneumonia, pneumothorax: pleuritic pain with respiratory variation`,workup:`• EKG STAT (within 10 minutes of presentation): ST changes, LBBB, AV block, arrhythmia
• High-sensitivity troponin T (hs-cTnT): T0 and T1h (rapid 0/1h algorithm) or T0 and T3h
  - Rising ≥3 ng/L in 1h OR rising ≥5 ng/L in 3h = NSTEMI
  - Undetectable T0 + low probability = safe rule-out (NPV 99%)
• CXR: mediastinal widening (dissection), cardiomegaly, bilateral infiltrates (ADHF), PTX, rib fractures
• BMP, CBC, BNP/NT-proBNP, lipid panel (acute evaluation + secondary prevention planning)
• D-dimer (if Wells score low-intermediate for PE) or CTA PE (if Wells high)
• CTA chest/abdomen (if aortic dissection suspected): widened mediastinum, pulse differential, tearing pain
• Bedside echo (POCUS): wall motion abnormality (ischemia), pericardial effusion, RV strain (PE), LVEF`,management:`ACS (see ACS template for full management):
• ASA 325mg PO immediately; atorvastatin 80mg; anticoagulation (heparin gtt)
• STEMI → activate cath lab; NSTEMI → risk-stratify and plan early invasive vs. ischemia-guided
ANTIANGINAL (ongoing ischemia):
• Sublingual NTG 0.4mg q5min x3 → IV nitroglycerin gtt if refractory (avoid: RV MI, HoTN, AS, recent PDEi)
• Metoprolol tartrate 25-50mg PO (or 2.5-5mg IV): if HR elevated; avoid in ADHF/bradycardia/high-grade AV block
AORTIC DISSECTION: IV beta blockade (esmolol/labetalol) → CT surgery STAT — NO anticoagulation
PE: anticoagulation; thrombolytics if massive (see PE template)
NON-CARDIAC CHEST PAIN: reassurance, PPI if GERD; NSAIDs for pericarditis; musculoskeletal → rest/NSAIDs`,monitoring:`• Serial EKGs: every 15-30 min while chest pain ongoing; q6-8h if ischemia pattern
• Serial troponin per 0/1h or 0/3h algorithm — do not discharge until T2 troponin resulted and pattern clear
• Continuous telemetry for any ischemic workup
• BP both arms if aortic dissection concern (>20 mmHg differential is abnormal)`,disposition:`• Cath lab activation: STEMI or STEMI equivalent (new LBBB, posterior MI)
• CCU/ICU: unstable ACS (ongoing ischemia, hemodynamic compromise), STEMI post-PCI
• Cardiology telemetry: NSTEMI (high HEART score ≥7 → early invasive), intermediate-risk chest pain
• Discharge with stress testing or CCTA: low HEART score (0-3) + negative hs-cTn x2`},{id:`mi-complications`,system:`cv`,title:`MI Complications`,keywords:[`MI complications`,`post MI`,`cardiogenic shock`,`free wall rupture`,`papillary muscle rupture`,`VSD`,`ventricular septal defect`,`pericarditis Dressler`,`mechanical complications`,`ischemic MR`,`reinfarction`,`STEMI complications`],source:{chapter:`Cardiology`,section:`MI Complications`,pages:`16–17`,authors:`Brian Huang, Christopher Schenck`,keyFacts:[`Cardiogenic shock: 6% STEMI, 3% NSTEMI; most within 24-72h post-MI; diagnosis: CI <2.2 + PCWP >18; treat with emergent PCI + MCS (IABP or Impella)`,`Free wall rupture: 0.05-0.09% of STEMIs; days 3-7 post-MI; sudden hemodynamic collapse + pericardial tamponade; surgical emergency`,`Papillary muscle rupture (acute MR): sudden severe pulmonary edema + holosystolic murmur; day 3-7; more common with inferoposterior MI; emergent surgery`,`VSR (ventricular septal rupture): 0.3% post-MI; new harsh systolic murmur + step-up in saturation from RA to PA; emergent surgery or percutaneous closure`,`Post-MI pericarditis (early): pleuritic chest pain day 1-5 after STEMI; aspirin first-line; avoid NSAIDs/colchicine in first month post-MI if possible`]},assessment:`#MI Complications
MI type: [ ] STEMI  [ ] NSTEMI | Infarct territory: *** | Days since MI: ***
Mechanical complication evaluation:
[ ] Cardiogenic shock: CI <2.2 + PCWP >18 | SBP *** | Lactate *** | End-organ signs: ***
[ ] Acute MR / papillary muscle rupture: new holosystolic murmur at apex *** | Pulmonary edema: ***
[ ] VSR / VSD: new harsh systolic murmur *** | O2 step-up RA→PA: ***
[ ] Free wall rupture: sudden collapse + pericardial effusion on echo | Beck's triad: ***
[ ] Post-MI pericarditis: pleuritic pain, friction rub, diffuse ST elevation
[ ] Reinfarction: new ST changes or troponin re-elevation`,ddx:`CARDIOGENIC SHOCK: ischemic LV dysfunction (most common), mechanical complication, RV failure from RV MI
ACUTE MR: papillary muscle ischemia/infarction/rupture → acute mitral regurgitation; posterior papillary muscle (single blood supply from RCA PDA) > anterolateral
VSD/VSR: anterior MI (apical VSD) > inferior MI (basal VSD); left-to-right shunt → biventricular failure; hyperdynamic LV with severe RV failure
FREE WALL RUPTURE: anterior MI more common; risk: first MI, no prior angina, female, elderly, thrombolytics without PCI, late PCI
POST-MI PERICARDITIS (early): day 1-5, adjacent pericardial inflammation; vs Dressler syndrome (late — week 2-10, autoimmune, fever + pericarditis)
ISCHEMIC MR (chronic): annular dilation or LV remodeling — more indolent; systolic murmur, pulmonary hypertension over time`,workup:`• Serial EKGs every 6-8h: new ST elevation (reinfarction), new LBBB, arrhythmias (VT — scar-mediated)
• TTE (urgent): LVEF, wall motion, pericardial effusion, MR/TR severity, VSD, RV function
• TEE: if TTE non-diagnostic for mechanical complication; better assessment of MV, VSD anatomy
• PA catheter (if cardiogenic shock): CI <2.2, PCWP >18 = cardiogenic; O2 step-up from RA to PA confirms VSR
• Troponin trend: re-elevation suggests reinfarction (vs. plateau of initial MI)
• BMP (renal function in cardiogenic shock), CBC, lactate, LFTs
• CXR: pulmonary edema (cardiogenic shock, acute MR), cardiomegaly`,management:`CARDIOGENIC SHOCK:
• Emergent PCI: revascularization is the most important intervention — reduces mortality (NEJM 1999;341:625)
• Vasopressors: NE 0.1-0.5 mcg/kg/min (first-line); add epi if refractory
• Inotropes: dobutamine 2.5-10 mcg/kg/min if CI severely reduced and not in vasoplegia
• MCS: IABP (afterload reduction, diastolic augmentation) → Impella CP/5.5 if refractory shock; ECMO if bridge needed (DanGer Shock trial — Impella 5.5 reduces mortality)

PAPILLARY MUSCLE RUPTURE / ACUTE MR:
• Emergent surgical mitral valve repair/replacement
• Bridge: IABP + nitroprusside/nitroglycerin (afterload reduction); avoid positive inotropes if possible (increase regurgitant fraction)

VENTRICULAR SEPTAL RUPTURE (VSR):
• Emergent surgical repair (gold standard) or percutaneous VSD closure
• Bridge: IABP + vasodilators; avoid pressors alone (worsen left-to-right shunt)

FREE WALL RUPTURE:
• Pericardiocentesis for tamponade as temporizing measure
• Emergent surgery (very high mortality)

POST-MI PERICARDITIS:
• ASA 650mg q6h for 2-4 weeks (first-line); avoid NSAIDs and colchicine in first month if possible (impair scar healing — controversial)
• Avoid anticoagulation (risk of hemorrhagic conversion)`,monitoring:`• PA catheter waveforms (if placed): Cv waves of acute MR; oxygen saturations for VSD step-up
• Hemodynamics every 1-4h in cardiogenic shock: MAP, CI, PCWP, lactate, UOP
• Serial troponin for reinfarction; serial EKGs for new ischemia
• Daily TTE or POCUS: track effusion, MCS device position (Impella), ventricular function`,disposition:`• CCU mandatory: all mechanical complications, cardiogenic shock
• CT surgery STAT: free wall rupture, VSR, papillary muscle rupture
• Cardiology + CT surgery Heart Team: all mechanical complications
• IR/structural cardiology: percutaneous VSD closure, Impella placement`},{id:`cardiac-catheterization`,system:`cv`,title:`Cardiac Catheterization — Pre/Post Procedure Management`,keywords:[`cardiac catheterization`,`PCI`,`coronary angiogram`,`cath lab`,`radial access`,`femoral access`,`contrast nephropathy`,`FFR`,`iFR`,`CABG vs PCI`,`post cath complication`,`pseudoaneurysm`,`retroperitoneal bleed`],source:{chapter:`Cardiology`,section:`Cardiac Catheterization`,pages:`18`,authors:`Joseph Replogle, Brian Huang`,keyFacts:[`LHC (arterial access: radial or femoral): coronary anatomy, LV/Ao pressures, PCI; radial = fewer bleeding/vascular complications`,`Prep: NPO MN or clear liquids until 2h prior; hold metformin 1 day pre + 2 days post; hold DOACs >48h (>72h if CrCl <30); hold SGLT2i; continue ASA/statin/BB`,`CIN (contrast-induced nephropathy): Cr peaks 1-5 days post; no benefit to prophylactic NAC or bicarb hydration in CKD (NEJM 2018;378:603); consider volume expansion with NS`,`Retroperitoneal bleed: hemodynamic instability ± flank pain ± ecchymoses within hours post-cath; STAT CT A/P if stable; stop/reverse anticoagulation`,`Pseudoaneurysm: pulsatile mass with bruit at access site → US-guided thrombin injection if >2cm; surgery if failing compression`]},assessment:`#Pre-Cardiac Catheterization Assessment / Post-Cath Complication
Indication: [ ] Stable angina/ischemia evaluation  [ ] ACS/NSTEMI  [ ] STEMI  [ ] Pre-TAVR  [ ] Other: ***
ACCESS: [ ] Radial (preferred — fewer bleeding complications)  [ ] Femoral
Pre-procedure: Last meal *** | INR ___ (<2 radial, <1.8 femoral) | Cr ___ (risk for CIN) | Allergy to contrast: [ ] Yes → pre-medicate
Anticoagulation held: [ ] ASA (continue)  [ ] DOAC: *** (held ___ h)  [ ] UFH gtt (held on call)
POST-CATH COMPLICATION ASSESSMENT:
Access site: [ ] Hematoma  [ ] Pulsatile mass with bruit (pseudoaneurysm)  [ ] Continuous bruit without mass (AV fistula)
Limb: [ ] Pulses symmetric  [ ] Ischemic changes (↓ warmth/sensation/pulses — call fellow STAT)
Flank pain / hemodynamic instability (retroperitoneal bleed): [ ] Suspected — CT A/P STAT`,ddx:`POST-CATH ACCESS SITE COMPLICATIONS:
• Hematoma: mass without bruit; direct compression; call fellow if expanding
• Pseudoaneurysm: pulsatile mass + systolic bruit; <2cm → ultrasound-guided compression; ≥2cm → thrombin injection or surgery
• AV fistula: continuous (systolic + diastolic) bruit; vascular surgery referral
• Retroperitoneal bleed: hours post-cath, hemodynamic instability ± flank/back pain ± ecchymoses → STAT CT A/P; IVF + blood products + stop anticoagulation
• Limb ischemia: thrombus/dissection or malpositioned closure device → Doppler US + pulse checks → urgent vascular surgery

OTHER POST-PCI COMPLICATIONS:
• In-stent thrombosis (acute): return to cath lab urgently for repeat PCI
• Contrast-induced nephropathy (CIN): Cr rise 24-72h post (peak 1-5 days); volume expansion most protective
• Atheroembolism (cholesterol emboli): eosinophilia, livedo reticularis, blue toes, AKI, mesenteric ischemia
• Cardiac tamponade: narrow PP + HoTN 2° coronary/cardiac perforation → STAT TTE + alert cath fellow
• Stroke/TIA: focal neuro changes post-cath → STAT neurology + CT head/CTA neck`,workup:`PRE-PROCEDURE:
• BMP (Cr — CIN risk), CBC, INR/PT (if on warfarin), type and screen
• Bilateral radial/femoral/popliteal/DP pulse documentation + Allen's test
• EKG: baseline
• TTE (if not recent): LV function, valvular disease, effusion
POST-PROCEDURE:
• BMP at 24-48h: Cr for CIN; K+ (contrast can cause shifts)
• CXR if respiratory symptoms post-procedure (effusion, pulmonary edema from contrast load)
• ABI/limb Doppler US if limb ischemia suspected`,management:`PRE-PROCEDURE:
• Volume hydration: NS 0.9% 1-1.5 mL/kg/h x6-12h pre- and post-procedure for CIN prevention (especially GFR <30)
• Hold: metformin (hold 1d pre + 2d post); DOACs (>48h, >72h if CrCl <30); SGLT2i; ACEi (procedure-dependent)
• Contrast allergy premedication: prednisone 50mg PO at 13h, 7h, and 1h before + benadryl 50mg x1 hour before
• Continue: ASA, statin, beta-blocker
RADIAL TR BAND: apply after radial procedure per protocol; loosen per protocol over 4-6h; monitor for hand numbness/paresthesias
RETROPERITONEAL BLEED: STAT CT A/P → 2 large-bore IVs + IVF + crossmatch + stop/reverse anticoagulation (vitamin K + PCC if on warfarin; hold heparin) → vascular surgery consult`,monitoring:`• Radial access: TR band check every 30-60 min; finger pulse oximetry for perfusion; remove air per protocol
• Femoral access: neurovascular checks (pulses, sensation, motor) every 30-60 min x4h
• Urine output every 2-4h post-procedure in CKD patients (CIN monitoring)
• Cr at 24-48h (all patients); earlier if oliguria`,disposition:`• Discharge: same-day discharge after elective radial access PCI with stable vitals and no complications
• Observation: femoral access, CKD (CIN monitoring), contrast load in high-risk patients
• Cardiology/vascular surgery: access site complications
• CCU: post-STEMI PCI, cardiogenic shock, large infarct territory`},{id:`noninvasive-cardiac-testing`,system:`cv`,title:`Non-Invasive Cardiac Testing`,keywords:[`stress test`,`exercise stress test`,`nuclear stress test`,`dobutamine stress echo`,`cardiac CT`,`CCTA`,`coronary CTA`,`cardiac MRI`,`CMR`,`stress imaging`,`calcium score`,`CAC`,`non-invasive testing`,`chest pain workup`],source:{chapter:`Cardiology`,section:`Non-Invasive Cardiac Testing`,pages:`19–20`,authors:`Joseph Replogle, Brian Huang`,keyFacts:[`CCTA favored: age <65, no prior CAD, rule out obstructive CAD, detect non-obstructive CAD — higher sensitivity than functional testing; guides preventive care`,`Stress imaging favored: age >65, known >50% CAD (assess for ischemia), prior inconclusive CCTA, microvascular dysfunction evaluation (PET/CMR)`,`Exercise ECG (ETT alone): preferred if patient can exercise and has interpretable EKG (no LBBB, LVH, digoxin, >1mm ST depression at rest, WPW, paced rhythm)`,`Dobutamine stress echo (DSE): contraindicated if HR can be raised but used for: pre-op risk, LF/LG AS evaluation, non-exercising patients; assess for wall motion abnormalities`,`Contraindications to stress testing: untreated ACS, MI within 2 days, hemodynamically significant arrhythmia, severe AS, uncontrolled HF, BP >200/110`]},assessment:`#Non-Invasive Cardiac Testing — Indication and Selection
Clinical question: [ ] Diagnose CAD  [ ] Evaluate ischemia in known CAD  [ ] Pre-operative risk  [ ] New cardiomyopathy  [ ] Valvular disease
Symptom acuity: [ ] Acute (ED/inpatient)  [ ] Stable (outpatient)
Prior CAD: [ ] No  [ ] Yes — prior PCI/CABG: ***
Patient can exercise adequately: [ ] Yes  [ ] No (→ pharmacologic stress)
EKG interpretable (no LBBB, LVH, WPW, digoxin effect, >1mm ST baseline): [ ] Yes  [ ] No (→ imaging modality needed)
Test selected: [ ] Exercise ECG (ETT)  [ ] Exercise stress echo  [ ] Nuclear (SPECT/PET)  [ ] CCTA  [ ] CMR  [ ] Dobutamine stress echo`,ddx:`TEST SELECTION:
• Can exercise + interpretable EKG: EXERCISE TREADMILL TEST (ETT) ± IMAGING
• Cannot exercise: PHARMACOLOGIC STRESS (dobutamine echo or adenosine/regadenoson nuclear/MRI)
• Anatomy needed + age <65 + no prior obstructive CAD: CCTA
• Known CAD + specific ischemia localization needed: NUCLEAR (SPECT/PET) or STRESS ECHO
• Viability (hibernating myocardium), cardiomyopathy characterization, infiltrative disease: CARDIAC MRI
• Calcium scoring: asymptomatic patients for risk stratification — not for symptomatic workup

POSITIVE STRESS TEST FINDINGS:
• Exercise ECG: ≥1mm horizontal/downsloping ST depression in ≥2 contiguous leads
• Stress echo: new or worsening wall motion abnormality (RWMA) during stress
• Nuclear (SPECT/PET): fixed defect (scar) vs. reversible defect (ischemia)
• High-risk features: large territory ischemia, EF drop with stress, ischemia at low workload, ST elevation in non-Q territories`,workup:`PRE-TEST:
• EKG: interpretability assessment (LBBB, WPW, LVH, paced rhythm → imaging modality needed)
• BP: >200/110 = contraindication; hold exercise stress if uncontrolled
• Hold beta-blockers 24-48h before diagnostic stress testing (may blunt HR response)
POST-TEST INTERPRETATION:
• Adequate HR achieved: ≥85% age-predicted maximum HR [(220-age) × 0.85]
• Duke Treadmill Score: [exercise time (min)] – [5 × (max ST deviation)] – [4 × (angina index 0-2)] — score ≥+5 = low risk; ≤-11 = high risk
• Image interpretation: perfusion defect size/location (nuclear), regional wall motion abnormality (echo/CMR)`,management:`LOW-RISK STRESS TEST:
• Medical management: aspirin, statin, risk factor reduction
• No immediate catheterization needed; outpatient follow-up

HIGH-RISK STRESS TEST (large territory, EF drop, ischemia at low workload):
• Cardiac catheterization for coronary anatomy and revascularization consideration
• Heart Team discussion for complex anatomy (3VD, LM disease — PCI vs. CABG)

INCONCLUSIVE STRESS TEST:
• Consider alternative imaging modality (nuclear if echo suboptimal, CCTA for anatomy)

PHARMACOLOGIC STRESS PRECAUTIONS:
• Dobutamine: hold BBs; do not use if HR >100, severe HTN, recent MI, significant arrhythmias, severe AS
• Adenosine/regadenoson: hold methylxanthines (caffeine, theophylline) 24h prior; avoid in severe asthma/reactive airway disease, high-grade AV block, severe HoTN`,monitoring:`• Continuous 12-lead EKG and BP monitoring during stress test
• Recovery monitoring until HR returns to <100 and ST changes resolve
• Atropine 0.5-1mg IV on standby during pharmacologic stress; resuscitation equipment at bedside`,disposition:`• High-risk stress test: admission/urgent cardiology consult for catheterization planning
• Cardiology referral: intermediate/high probability of obstructive CAD on imaging
• Pre-op clearance: most patients with good functional capacity (≥4 METS) do not require additional testing`},{id:`echocardiography`,system:`cv`,title:`Echocardiography — Views, Indications, and Interpretation`,keywords:[`echocardiography`,`TTE`,`TEE`,`POCUS`,`echo views`,`LVEF`,`wall motion`,`pericardial effusion`,`tamponade echo`,`cardiac output`,`diastolic function`,`valvular disease echo`],source:{chapter:`Cardiology`,section:`Echocardiography`,pages:`21`,authors:`Joseph Replogle, Brian Huang`,keyFacts:[`Standard TTE views: parasternal long axis (LV size/function, MV/AoV, LVOT), parasternal short axis, apical 4-chamber (RV/LV function, TV/MV), apical 5-chamber (AoV, LVOT), subcostal (RV, IVC), suprasternal (aortic arch)`,`LVEF estimation: normal ≥55%; mildly reduced 41-54% (HFmrEF); moderately reduced 30-40%; severely reduced <30%`,`Tamponade echo: pericardial effusion + RV collapse in diastole + RA collapse + IVC plethora + respiratory variation in Doppler velocities (>25% mitral E-wave variation)`,`TEE limitations: invasive, requires sedation, cannot see below diaphragm — superior for: LAA thrombus, prosthetic valve endocarditis, PFO, intraoperative monitoring, complex valve anatomy`,`Point-of-care echo (POCUS): LV function, pericardial effusion, pleural effusion, IVC (volume assessment), B-lines (pulmonary edema) — rapid bedside assessment`]},assessment:`#Echocardiography — Clinical Indication
Indication:
[ ] LV function/cardiomyopathy evaluation  [ ] Tamponade / pericardial effusion
[ ] Valvular disease assessment  [ ] Source of embolism (LAA thrombus, vegetation)
[ ] RV function / pulmonary hypertension  [ ] Shock/hemodynamic instability
[ ] Endocarditis  [ ] Pre-/post-cardioversion AFib  [ ] Post-cardiac procedure
Type: [ ] TTE (standard first-line)  [ ] TEE (LAA, prosthetic valve, better views)  [ ] POCUS (bedside rapid)
Key question: ***`,ddx:`TTE LIMITATIONS → TEE INDICATIONS:
• LAA thrombus evaluation (pre-cardioversion of AFib >48h without anticoagulation)
• Prosthetic valve endocarditis (TTE limited by shadowing; TEE required)
• PFO assessment (better sensitivity with agitated saline + Valsalva)
• Intraoperative monitoring (cardiac surgery)
• Complex valvular anatomy (native or prosthetic)
• Better posterior structure visualization (posterior MI, posterior effusion)

POCUS USES:
• Rapid LV function: "eyeballing" EF, wall motion abnormalities
• Pericardial effusion: circumferential (echo-free space)
• IVC diameter and collapsibility: volume responsiveness (≥2cm and non-collapsing = elevated CVP)
• B-lines (comet tails): ≥3 per zone = interstitial edema (pulmonary edema)
• Pleural effusion: anechoic space above diaphragm posteriorly
• RV:LV ratio: RV/LV >0.9 suggests RV strain (PE, ARDS)`,workup:`STANDARD TTE ASSESSMENT:
• LV size and systolic function (LVEF, wall motion)
• LV diastolic function: E/A ratio, E/e' (tissue Doppler), LA size, TR velocity (diastolic grade)
• RV size and function: RV:LV ratio, TAPSE (≥17mm = normal), RV strain pattern (inferior-apical sparing)
• Pericardium: effusion (small <1cm, moderate 1-2cm, large >2cm), tamponade physiology
• Valvular assessment: all 4 valves — severity, morphology, gradients
• IVC: diameter (<2.1cm + >50% collapsibility = RAP ≤3mmHg)
• Estimated RVSP (TR velocity): 4×(TRV)² + RAP = RVSP (>35mmHg = elevated)`,management:`CARDIAC TAMPONADE (echo-confirmed):
• Pericardiocentesis: emergent if hemodynamically compromised (Beck's triad: hypotension/JVD/muffled heart sounds)
• Subxiphoid approach: US-guided; drain to dryness; leave catheter x24-48h for reaccumulation check
SEVERE VALVULAR DISEASE: see Valvular Heart Disease template
REDUCED LVEF (HFrEF): initiate GDMT (BB, ACEi/ARBi/ARNI, MRA, SGLT2i); see Heart Failure template
RV STRAIN PATTERN: evaluate for PE (CTA chest), ARDS, pulmonary hypertension — see RV Failure template`,monitoring:`• Repeat TTE in 2-4 weeks after ADHF hospitalization (reassess LVEF after optimal GDMT)
• Serial TTE every 6-12 months: moderate-severe valvular disease, known cardiomyopathy
• TTE immediately post-pericardiocentesis: confirm resolution of effusion, rule out reaccumulation`,disposition:`• Cardiology consult: new cardiomyopathy (LVEF <40%), moderate-severe valvular disease, endocarditis, RV failure
• CT surgery / structural cardiology: severe valvular disease meeting intervention criteria
• Cardiac imaging service: complex cases requiring TEE, PET, or CMR`},{id:`mechanical-circulatory-support`,system:`cv`,title:`Mechanical Circulatory Support (IABP / Impella / ECMO)`,keywords:[`mechanical circulatory support`,`MCS`,`IABP`,`intra-aortic balloon pump`,`Impella`,`cardiogenic shock`,`ECMO`,`VA ECMO`,`LV assist device`,`LVAD`,`temporary MCS`,`heart failure advanced`],source:{chapter:`Cardiology`,section:`Mechanical Circulatory Support`,pages:`26`,authors:`Frederick Lang, Emily Manning`,keyFacts:[`Cardiogenic shock ladder: vasopressors/inotropes → IABP (afterload reduction) → Impella CP (3.5 L/min) → Impella 5.5 (6.5 L/min) → VA-ECMO → bridge to permanent LVAD or transplant`,`Impella 5.5: reduces mortality in MI-related cardiogenic shock (DanGer Shock trial) — requires surgical placement via axillary artery; enables patient mobilization`,`IABP: inflates in diastole (↑coronary perfusion), deflates in systole (↓afterload); limited survival benefit in cardiogenic shock but useful as adjunct`,`VA-ECMO: drains venous blood, oxygenates, returns to arterial system; can support cardiac output up to 5-6 L/min; complications: LV distension, limb ischemia, bleeding`,`Impella vs IABP: Impella provides more cardiac output support and is preferred for higher-acuity cardiogenic shock; position monitored by waveform + CXR/echo`]},assessment:`#Mechanical Circulatory Support
Indication: [ ] Cardiogenic shock (CS)  [ ] High-risk PCI  [ ] Refractory VT ablation  [ ] Bridge to recovery/LVAD/transplant
Hemodynamics: CI ___ L/min/m² (goal >2.2) | PCWP ___ mmHg (goal <18) | MAP ___ | Lactate ___
Vasopressor/inotrope support: ***
Current MCS device: [ ] IABP  [ ] Impella 2.5  [ ] Impella CP  [ ] Impella 5.5  [ ] Impella RP  [ ] VA-ECMO  [ ] None
Device settings: *** | Waveform: *** | Position confirmed: [ ] CXR  [ ] Echo
Complications: [ ] Position alarm  [ ] Hemolysis (Hgb drop, pink urine, LDH ↑)  [ ] Limb ischemia  [ ] Bleeding`,ddx:`ESCALATION ALGORITHM (cardiogenic shock):
• Level 1: Vasopressors (NE) + inotropes (dobutamine) — MAP ≥65, UOP >0.5 mL/kg/h
• Level 2: IABP — reduces afterload, augments diastolic BP and coronary perfusion; useful peri-PCI
• Level 3: Impella CP (3.5 L/min, percutaneous) — unloads LV, increases forward flow
• Level 4: Impella 5.5 (6.5 L/min, surgical axillary) — highest percutaneous support; DanGer Shock benefit
• Level 5: VA-ECMO — full cardiopulmonary support; add Impella (ECPELLA) to unload LV
• Definitive: transplant or durable LVAD (destination therapy)

RV FAILURE SUPPORT:
• Impella RP: IVC→PA flow (>4 L/min) — acute RV failure post-LVAD implant or RV MI
• Centrimag/RVAD: surgical; prolonged RV support`,workup:`• TTE/POCUS: LV dilation/impaction from Impella? Adequate position? IABP in aorta?
• Daily CXR: IABP tip position (2cm above carina/1-2cm below left subclavian); Impella in LV (across AoV)
• Labs: CBC (hemolysis from Impella — Hgb drop, LDH ↑, pink urine); BMP (renal function); coagulation (anticoagulation for MCS)
• Limb vascular checks: especially for femoral access devices; ABI if concern for distal ischemia`,management:`IABP:
• Timing: inflate at dicrotic notch (beginning of diastole); deflate before systole
• Augmented diastolic pressure > systolic; end-diastolic pressure drops (↓afterload)
• Anticoagulation: UFH to anti-Xa 0.3-0.5 (or aPTT 60-80)
• Weaning: reduce augmentation ratio 1:1 → 1:2 → 1:3 while monitoring hemodynamics
IMPELLA:
• Power settings: P2-P9 (low to high); increase power to improve CI and reduce PCWP
• Monitor for suction events (Impella pulling blood but LV filling insufficient — reduce power, ↑preload)
• Anticoagulation: argatroban or bivalirudin (no UFH through device — sheath only)
• Hemolysis: if present — reposition device, reduce power; consider device exchange if severe
VA-ECMO:
• Flows 2-6 L/min; sweep gas controls CO2 clearance
• LV distension (↑PCWP): add IABP or Impella for LV venting (ECPELLA configuration)
• Distal perfusion catheter: femoral artery (distal to arterial cannula) prevents limb ischemia`,monitoring:`• Hemodynamic parameters every 1-4h: MAP, CI, PCWP, UOP, lactate (trending is key)
• Device waveforms continuously: IABP balloon inflation/deflation timing; Impella inlet/outlet pressure
• Daily CBC (hemolysis), CXR (device position), limb checks (vascular)
• Weaning assessment: daily — is native heart recovering? (PPCW, CI improving off support?)`,disposition:`• CCU mandatory: all MCS patients
• Heart failure/advanced heart disease team: all patients with MCS — bridge to recovery, LVAD, or transplant evaluation
• CT surgery + cardiac anesthesia: Impella 5.5 placement, VA-ECMO cannulation, durable LVAD implant`},{id:`pulmonary-artery-catheter`,system:`cv`,title:`Pulmonary Artery Catheterization (PA Catheter / Swan-Ganz)`,keywords:[`pulmonary artery catheter`,`PA catheter`,`Swan-Ganz`,`PCWP`,`wedge pressure`,`cardiac output`,`cardiogenic shock hemodynamics`,`PAC`,`pulmonary capillary wedge`,`cardiac index`,`right heart catheterization`],source:{chapter:`Cardiology`,section:`Pulmonary Artery Catheterization`,pages:`27`,authors:`Frederick Lang, Emily Manning`,keyFacts:[`PA catheter indications: undifferentiated shock, cardiogenic vs non-cardiogenic pulmonary edema, LV vs RV failure, pulmonary hypertension etiology, L-R shunting, valve disease hemodynamics`,`Line course: central vein (IJ/fem) → SVC/IVC → RA → RV → PA → distal pulmonary arteriole (wedge position)`,`Normal values: CVP 0-8 mmHg, RVP 15-25/0-8, PAP 15-25/8-15, PCWP 6-12 mmHg, CI 2.4-4.0 L/min/m², PVR <2 Wood units`,`PCWP >18 = cardiogenic; PCWP <12 with CI <2.2 = distributive/hypovolemic; Fick cardiac output = VO2/(CaO2-CvO2)×10`,`Waveform: a wave (atrial contraction), c wave (tricuspid closure), x descent (atrial relaxation), v wave (passive venous filling), y descent (tricuspid opening)`]},assessment:`#Pulmonary Artery Catheterization — Hemodynamic Profile
PA Pressures: PA sys/dia/mean *** mmHg (normal 15-25/8-15/12-16)
PCWP (wedge): *** mmHg (normal 6-12; >18 = cardiogenic pulmonary edema)
CVP/RAP: *** mmHg (normal 0-8)
Cardiac Output: *** L/min | Cardiac Index (CI): *** L/min/m² (normal 2.4-4.0; shock <2.2)
PVR = (mPAP – PCWP)/CO = *** Wood units (normal <2; >2 = pre-capillary PH)
SVR = [80 × (MAP – RAP)]/CO = *** dynes·sec·cm⁻⁵ (normal 700-1600)
Mixed venous O2 sat (SvO2): ***% (normal >65%; <60% = ↑O2 extraction/low CO)
Profile: [ ] Cardiogenic shock (CI <2.2 + PCWP >18)  [ ] Distributive/septic (CI ↑ + SVR ↓)  [ ] Hypovolemic (CI ↓ + PCWP ↓)`,ddx:`HEMODYNAMIC PROFILES:
• Cardiogenic shock: CI <2.2, PCWP >18, SVR ↑, SvO2 ↓ — cold/wet
• Distributive shock (sepsis): CI ↑ or normal, PCWP ↓ or normal, SVR ↓, SvO2 ↑ — warm/wet (early) or warm/dry
• Hypovolemic: CI ↓, PCWP ↓, CVP ↓, SVR ↑
• RV failure (e.g. massive PE): CVP ↑↑, PCWP normal/low, CI ↓, RVP ↑, PA diastolic–PCWP gradient ↑
• Constrictive pericarditis: equalization of diastolic pressures (RA = RVd = PCWP within 5mmHg)
• Tamponade: equalization of all 4 chamber diastolic pressures; no clear y descent on CVP

WAVEFORM ABNORMALITIES:
• Large V waves on PCWP trace: acute MR (papillary muscle rupture) or VSD (step-up in O2 saturation RA→PA)
• Absent Y descent: tamponade (restricted diastolic filling)
• Kussmaul's sign (CVP ↑ with inspiration): constrictive pericarditis, RV infarct`,workup:`• PCWP tracing: confirm balloon position (wedge waveform); measure at end-expiration
• Mixed venous saturation: blood from PA distal port (not PCWP port while inflated)
• Fick cardiac output: indirect measurement using O2 consumption; Thermodilution CO: 3 measurements averaged
• Step-up O2 saturations (RA vs PA): >5-8% step-up in O2 sat = L→R shunt (VSR, ASD)
• Daily CXR: line position; tip should be proximal to hilum (zone 3 position)`,management:`TAILORED THERAPY BASED ON HEMODYNAMIC PROFILE:
• Cold/wet (cardiogenic): diuresis (IV furosemide/CRRT) + vasodilators (nitroprusside/NTG if SBP tolerable) + inotropes (dobutamine) ± MCS
• Warm/wet (distributive): volume resuscitation + vasopressors (NE) + source control (sepsis)
• Cold/dry (cardiogenic without congestion): careful IVF challenge + inotropes; avoid diuresis
• RV failure: preload optimization (avoid over-diuresis) + pulmonary vasodilators + treat underlying cause
PCWP-GUIDED DIURESIS: target PCWP 12-18 with CI >2.0; titrate diuretics to UOP 1-2 mL/kg/h`,monitoring:`• PA pressures every 4h on AM rounds (patient supine, HOB 0-60°, transducer at mid-axillary line)
• Balloon inflation: <10 seconds; note minimum volume for wedge waveform
• Troubleshooting: dampened waveform = kinked tubing, thrombus, or catheter against vessel wall → flush; persistent wedge = too distal → withdraw 1-2 cm; arrhythmia = in RVOT → reposition`,disposition:`• CCU mandatory: all PA catheter patients
• Remove catheter: when therapeutic goals met or patient stabilized; PA lines are not indefinite — reassess daily
• Hemodynamic goals met? → wean vasopressors/inotropes → transition to oral medications`},{id:`cardiac-devices`,system:`cv`,title:`Cardiac Devices (PPM / ICD / CRT)`,keywords:[`pacemaker`,`PPM`,`ICD`,`CRT`,`defibrillator`,`implantable cardioverter`,`cardiac resynchronization`,`device malfunction`,`pacemaker syndrome`,`magnet response`,`MRI safety pacemaker`,`device interrogation`,`DDD pacing`,`CIED`],source:{chapter:`Cardiology`,section:`Cardiac Devices`,pages:`28`,authors:`Brian Huang, Christopher Schenck`,keyFacts:[`Pacemaker code: D=dual, V=ventricular, A=atrial — 1st letter=chamber paced, 2nd=chamber sensed, 3rd=response to sensing (I=inhibited, T=triggered, D=dual, O=none)`,`DDD: most common; paces/senses both chambers; tracks atrial activity to trigger ventricular pacing — most closely mimics normal conduction`,`Magnet response: PPM → asynchronous pacing (DOO/VOO); ICD → suspends detection and therapy (turns off tachyarrhythmia treatment, does NOT affect pacing)`,`PPM indications (Class I): symptomatic sinus bradycardia, Mobitz II or third-degree AV block, symptomatic chronotropic incompetence`,`ICD indications (Class I): survivors of VF/sustained VT, LVEF ≤35% on GDMT ≥3 months with NYHA II-III symptoms`]},assessment:`#Cardiac Device Assessment
Device type: [ ] PPM (pacemaker)  [ ] ICD (implantable cardioverter-defibrillator)  [ ] CRT-P  [ ] CRT-D  [ ] Loop recorder
Manufacturer: ***  |  Implant date: ***  |  Last interrogation: ***
Pacing mode: *** (e.g., DDD, VVI, AAI)  |  Rate: *** bpm
Current concern:
[ ] Pacemaker-dependent: underlying rhythm if device failed: ***
[ ] Failure to pace (pacer spikes without capture — threshold elevated? lead displacement?)
[ ] Failure to sense (inappropriate pacing — lead issue, electrolyte abnormality, Mg depletion)
[ ] ICD shock delivered: [ ] Appropriate (VT/VF)  [ ] Inappropriate (AFib/oversensing/T-wave)
[ ] Needs urgent re-programming: [ ] Surgery planned  [ ] Magnet needed (inappropriate shocks)`,ddx:`PPM MALFUNCTION:
• Failure to pace: battery depletion, lead displacement, threshold increase (electrolyte imbalance, antiarrhythmic drugs, infarction at lead tip)
• Failure to sense: lead displacement, oversensing (T-wave, myopotentials), electrolyte abnormalities
• Pacemaker-mediated tachycardia (PMT): retrograde P → re-sensed by atrial lead → triggers ventricular pacing loop — magnet terminates
• Pacemaker syndrome: AV dissociation (VVI pacing) → cannon A waves, HoTN, syncope — upgrade to DDD

ICD MALFUNCTION:
• Appropriate shock: VT/VF treated correctly
• Inappropriate shock: oversensing (T-wave, skeletal muscle, lead fracture), supraventricular tachycardia (AFib/flutter), electromagnetic interference
• Storm: ≥3 appropriate shocks in 24h — IV amiodarone + deep sedation + urgent electrophysiology

DEVICE-INFECTION:
• Pocket infection: erythema, warmth, fluctuance, erosion over device
• Lead infection/CIED endocarditis: bacteremia (especially S. aureus) with implanted device — require device extraction + prolonged antibiotics`,workup:`• EKG and rhythm strip: pacemaker spikes present/absent, capture, sensing abnormalities, pacing pattern
• CXR: lead position (right atrium → right ventricle apex → coronary sinus for CRT); lead fracture (break in lead continuity)
• Device interrogation (EP tech/cardiology): battery life, pacing threshold, sensing threshold, lead impedance, electrogram review, arrhythmia log
• Electrolytes: K+, Mg2+ (hypokalemia/hypomagnesemia → ↑pacing threshold)
• Blood cultures x2: if fever + CIED (S. aureus bacteremia with device = CIED infection until proven otherwise)
• TTE/TEE: if endocarditis concern (lead vegetations, valvular involvement)`,management:`MAGNET APPLICATION:
• PPM: triggers asynchronous pacing (DOO/VOO) at manufacturer-specific rate — use for inappropriate inhibition during surgery/interference
• ICD: SUSPENDS shock detection/delivery — use to prevent inappropriate shocks during surgery; do NOT apply if patient needs ICD therapy
• Apply magnet to device and confirm response with telemetry
PERI-OPERATIVE MANAGEMENT:
• Pacemaker-dependent patients: ensure continuous pacing (telemetry + magnet available); reprogram to asynchronous if needed
• ICD patients: reprogram to suspend tachytherapy before procedure OR apply magnet; restore after procedure
• MRI compatibility: many modern devices are MRI-conditional (check device ID); non-MRI-safe devices may be safe to scan after reprogramming (NEJM 2017;376:755)
APPROPRIATE ICD SHOCK: reassure patient; evaluate for correctable triggers (electrolytes, ischemia, medication); EP follow-up
INAPPROPRIATE ICD SHOCK: device interrogation urgently; apply magnet to prevent further shocks; reprogram detection criteria; treat underlying arrhythmia (rate control for AFib)
ICD STORM: IV amiodarone 150mg over 10 min then 1mg/min; deep sedation; urgent EP consultation; consider ECMO if hemodynamic compromise`,monitoring:`• Telemetry: continuous while investigating device malfunction
• Device interrogation: EP or device rep should access device within 24h for any significant concern
• CXR: after any device manipulation or if lead displacement suspected
• Wound check: device pocket daily if infection concern`,disposition:`• Electrophysiology consult: device malfunction, ICD storm, CIED infection, device upgrade consideration
• CT surgery + EP: CIED extraction (lead endocarditis, pocket infection, device recall)
• Outpatient remote monitoring: all CIED patients should have remote monitoring set up — transmit every 3 months or with any alert`},{id:`antiarrhythmic-medications`,system:`cv`,title:`Anti-Arrhythmic Medications`,keywords:[`antiarrhythmic`,`amiodarone`,`sotalol`,`flecainide`,`propafenone`,`lidocaine`,`procainamide`,`mexiletine`,`dofetilide`,`dronedarone`,`digoxin`,`Vaughan-Williams classification`,`rhythm control`],source:{chapter:`Cardiology`,section:`Anti-Arrhythmic Medications`,pages:`37`,authors:`Brian Huang, Christopher Schenck`,keyFacts:[`Vaughan-Williams Classification: Class I (Na channel blockers: IA/IB/IC), Class II (BBs), Class III (K channel blockers: amiodarone/sotalol/dofetilide/ibutilide), Class IV (CCBs)`,`Amiodarone: most effective AAD but extensive toxicities — thyroid, pulmonary, hepatic, ocular, cutaneous; monitor TFTs, PFTs, CXR, LFTs every 6 months; 5-year half-life`,`Class IC agents (flecainide, propafenone): CONTRAINDICATED in structural heart disease (CAD, reduced EF) due to proarrhythmia — use only in 'lone AFib' without structural disease`,`Sotalol: Class III + non-selective BB; requires inpatient initiation (QTc monitoring); QTc >500ms or increase >60ms from baseline = stop; dose-adjust for renal function`,`Procainamide: WPW + AFib (better than amiodarone for pre-excited AFib); IV only in acute setting; beware QRS prolongation + HoTN; long-term use → drug-induced lupus`]},assessment:`#Anti-Arrhythmic Medication Assessment
Arrhythmia type: [ ] AFib/flutter  [ ] VT  [ ] SVT  [ ] VF  [ ] Pre-excited (WPW)
Goal: [ ] Rate control  [ ] Rhythm control (maintenance)  [ ] Acute termination
Structural heart disease: [ ] Present (EF: ***)  [ ] Absent (normal LV function)
  → IC agents (flecainide, propafenone) CONTRAINDICATED if structural heart disease present
Current QTc: *** ms | K+: *** | Mg2+: *** | Cr/CrCl: *** (critical for dosing sotalol/dofetilide/quinidine)
Drug selected: ***
Monitoring plan: [ ] QTc at baseline + 2-4h after initiation  [ ] Inpatient initiation (sotalol, dofetilide)`,ddx:`CLASS I — Na CHANNEL BLOCKERS:
• IA (procainamide, quinidine, disopyramide): slows conduction + prolongs repolarization; ↑QTc; QRS widening
• IB (lidocaine, mexiletine): minimal effect on repolarization; used for ventricular arrhythmias (MI-associated VT)
• IC (flecainide, propafenone): potent conduction slowing; ONLY for structurally normal hearts (no CAD/reduced EF)

CLASS II — BETA BLOCKERS: carvedilol, metoprolol, atenolol — rate control, reduce adrenergic trigger for VT

CLASS III — K CHANNEL BLOCKERS:
• Amiodarone: broadest coverage; Class I/II/III/IV; most effective but highest toxicity profile; can use in structural heart disease
• Sotalol: Class III + BB; AF rhythm control or VT suppression; requires inpatient QTc monitoring
• Dofetilide/ibutilide: selective Class III; inpatient initiation (dofetilide); ibutilide IV for acute AF cardioversion
• Dronedarone: Class III; less toxic than amiodarone; CONTRAINDICATED in HFrEF/permanent AFib

CLASS IV — CCBs: diltiazem, verapamil — AV nodal rate control for AFib/SVT; avoid in WPW + AFib, HFrEF`,workup:`• Baseline QTc (and every 4-8h after initiation of QTc-prolonging agents)
• BMP: K+ (maintain ≥4.5 for sotalol/dofetilide), Mg2+ (maintain ≥2.0), Cr/CrCl (dose adjustment)
• TFTs (baseline before amiodarone; q6 months during): hypo- and hyperthyroidism
• PFTs + CXR (baseline with amiodarone; q6 months): pulmonary toxicity
• LFTs (baseline with amiodarone; q6 months): hepatotoxicity
• Drug-induced lupus (procainamide): ANA, anti-histone antibodies with prolonged use`,management:`ACUTE MANAGEMENT:
• Stable VT (monomorphic): amiodarone 150mg IV over 10 min → 1mg/min x6h → 0.5mg/min x18h; OR lidocaine 1-1.5mg/kg → 1-4mg/min infusion (preferred if QTc prolonged or TdP concern)
• Stable VT (pre-excited/WPW): procainamide 20-50mg/min IV up to 17mg/kg → 1-4mg/min; DO NOT use amiodarone (may accelerate conduction)
• AFib chemical cardioversion: IV ibutilide 1mg over 10 min (→ repeat x1) — effective for flutter especially; watch QTc
• Rate control (AFib): diltiazem 0.25mg/kg IV → infusion OR metoprolol 2.5-5mg IV q5min

CHRONIC MANAGEMENT:
• AFib rhythm control + structural heart disease: amiodarone (safest in low EF, HF); dofetilide (inpatient initiation required)
• AFib rhythm control + no structural disease: flecainide 100-200mg BID OR propafenone 150-300mg TID; dronedarone 400mg BID
• VT suppression (structurally normal heart): flecainide or mexiletine; EP ablation preferred if catheter-eligible
• VT suppression (cardiomyopathy): amiodarone; mexiletine (adjunct); consider EP catheter ablation`,monitoring:`• QTc: before and 4-8h after initiation/dose increase of Class IA, IC, or III agents; stop if QTc >500ms or increase >60ms
• Amiodarone: TFTs, LFTs, PFTs, CXR at 3-6 months (pulmonary toxicity); ophthalmology annually
• Sotalol/dofetilide: inpatient QTc monitoring (minimum 3 days); Cr/CrCl before each dose adjustment
• Drug levels: digoxin (check 6-12h after load; goal <1.2 ng/mL in AFib); lidocaine (toxicity: CNS symptoms — perioral numbness, tremor)`,disposition:`• Inpatient required: sotalol initiation (3+ days), dofetilide initiation, ibutilide administration
• Electrophysiology consult: antiarrhythmic selection in structural heart disease, amiodarone toxicity, catheter ablation evaluation
• Pharmacy: drug-drug interaction review (amiodarone inhibits multiple CYP enzymes — warfarin, digoxin, statins significantly increased levels)`},{id:`telemetry-physical-exam`,system:`cv`,title:`Telemetry Monitoring / Cardiovascular Physical Exam`,keywords:[`telemetry`,`cardiac monitoring`,`heart sounds`,`murmur`,`JVP`,`jugular venous pressure`,`S3`,`S4`,`pulsus paradoxus`,`Kussmaul sign`,`cardiovascular exam`,`murmur grading`,`telemetry indications`],source:{chapter:`Cardiology`,section:`Telemetry and Physical Exam`,pages:`38`,authors:`Brian Huang, Christopher Schenck`,keyFacts:[`JVP: for measured CVP >8cm — Sn 47-92%, Sp 83-96%, +LR 8.9; add 5cm to estimated height to approximate RA pressure; veins show respiratory variation; non-pulsatile = SVC obstruction`,`S3 ('sloshing in' of blood): heard at apex with bell in left lateral decubitus; for EF <30%: Sn 68-78%, Sp 80-88%; a/w HF, volume overload; can be physiologic in young`,`S4 (atrial kick into stiff ventricle): late diastolic; a/w LVH, acute MI, cardiomyopathy, hypertension — not physiologic`,`Pulsus paradoxus (>10mmHg BP drop with inspiration): cardiac tamponade, severe asthma, tension PTX — use sphygmomanometer`,`Murmur grade: I-VI (I barely heard, II easily heard, III without thrill, IV with thrill, V with stethoscope edge on chest, VI without stethoscope); radiation pattern helps localize valve`]},assessment:`#Cardiovascular Physical Exam Documentation
JVP: *** cm H2O (normal <4-5 cm above sternal angle at 45°)  |  Hepatojugular reflux: [ ] Present  [ ] Absent
Heart sounds: S1 [ ] Normal  [ ] Soft | S2 [ ] Normal  [ ] Loud P2  [ ] Fixed split  [ ] Paradoxical split
S3: [ ] Present (a/w HF — LV volume overload)  [ ] Absent
S4: [ ] Present (a/w LVH, hypertension, acute MI)  [ ] Absent
Murmur: Grade _/6 | Timing: [ ] Systolic  [ ] Diastolic  [ ] Continuous | Location: *** | Radiation: ***
[ ] Aortic area (2nd RICS): AS (↑ with squatting, ↓ with Valsalva) / AR (blowing diastolic)
[ ] Mitral area (apex): MR (holosystolic, radiation to axilla) / MVP (mid-systolic click → murmur)
[ ] Tricuspid area (LLSB): TR (↑ with inspiration — Carvallo's sign) / TS
[ ] Pulmonary area (2nd LICS): PS, Graham Steell murmur (pHTN)
Pulsus paradoxus: *** mmHg drop (>10 = abnormal) | Kussmaul's sign: [ ] Present  [ ] Absent (JVP ↑ with inspiration)
Edema: [ ] None  [ ] Peripheral *** | Ascites: [ ] Present  [ ] Absent`,ddx:`JVP ABNORMALITIES:
• Elevated JVP: HF, tamponade, SVC syndrome, constrictive pericarditis, cor pulmonale
• Large a waves: tricuspid stenosis, severe pHTN, non-conducted PAC (blocked P wave)
• Large cv waves (cannon a waves): CHB (P fires into closed tricuspid), VT (AV dissociation)
• Large v waves: TR, acute MR (v wave in PCWP trace), VSD
• Absent Y descent: tamponade (restricted filling; distinguish from constrictive where Y is prominent)

HEART SOUND ABNORMALITIES:
• Loud P2: pulmonary hypertension
• Fixed split S2: ASD (RV volume overload throughout breathing cycle)
• Paradoxical split S2: LBBB, severe AS, HCM (A2 delayed)
• Friction rub: pericarditis (3-component: atrial systole + ventricular systole + diastole); best heard leaning forward

DYNAMIC AUSCULTATION (murmur changes):
• Valsalva (↓preload): HOCM ↑ (obstruction worsens), MVP ↑ (click moves earlier); AS/MR/TR ↓
• Squatting (↑preload): HOCM ↓, MVP ↓ (click moves later); AS/MR/TR ↑
• Standing (↓preload): HOCM ↑; most murmurs ↓
• Inspiration: right-sided murmurs ↑ (Carvallo's sign for TR), Kussmaul's sign for RV failure/constrictive pericarditis`,workup:`• TTE: confirm clinical exam findings; quantify murmur severity; LVEF; RV function
• EKG: LAE/RAE, LVH/RVH, AV block, arrhythmia
• BNP/NT-proBNP: HF (↑with S3/elevated JVP)
• CXR: cardiomegaly, pulmonary vascular congestion, pleural effusions
• Echo Doppler: valve gradients and areas; severity grading of murmurs

TELEMETRY INDICATIONS:
• Mandatory: ACS, cardiac arrest, post-PCI, CHB or Mobitz II, new LBBB, post-cardiac surgery, severe electrolyte abnormality
• Recommended: ADHF, new antiarrhythmic initiation, syncope with ischemic risk factors, AF with RVR, overdose with cardiac risk
• Routine monitoring: ≥2 CHADS-VASc risk factors, stroke/TIA, post-electrophysiology procedure`,management:`ELEVATED JVP WITH PRESERVED EF: diuretics; evaluate for constrictive pericarditis (pericardiectomy) vs. cardiac tamponade (pericardiocentesis)
PULSUS PARADOXUS (>10mmHg): cardiac tamponade → STAT echo + pericardiocentesis if hemodynamically compromised
NEW SIGNIFICANT MURMUR:
• TTE urgently (same admission): confirm severity, anatomy, LVEF impact
• Severe AS with symptoms: TAVR/SAVR evaluation (do not delay)
• Acute MR/TR: evaluate for mechanical complication post-MI (papillary muscle)
• New aortic regurgitation: evaluate for aortic dissection (CTA chest)`,monitoring:`• Telemetry waveform quality: lead placement, artifact reduction (electrode placement, skin prep)
• Alarm fatigue: set appropriate rate alarms per patient baseline; disable unnecessary alarms to preserve clinical significance
• Strip documentation: print rhythm strips for any concerning arrhythmia + annotate clinical context`,disposition:`• CCU/ICU: hemodynamically significant new murmurs, pulsus paradoxus >20mmHg, tamponade
• Cardiology consult: new murmurs requiring echo, significant arrhythmias on telemetry
• Electrophysiology: complex arrhythmias requiring EP study or ablation`},{id:`respiratory-distress`,system:`pulm`,title:`Respiratory Distress — Approach and Triage`,keywords:[`respiratory distress`,`dyspnea`,`shortness of breath`,`tachypnea`,`hypoxemia`,`work of breathing`,`rapid response`,`stridor`,`wheezing`,`respiratory failure triage`],source:{chapter:`Pulmonary & Critical Care`,section:`Respiratory Distress`,pages:`39`,authors:`Rachel Ancar, Cassandra Fiorino, Daniel Fulop`,keyFacts:[`Respiratory distress ≠ dyspnea: distress is objective (RR ≥20, retractions, diaphoresis, cyanosis); dyspnea is subjective — look at the patient and count the rate yourself`,`Call Rapid Response x6-3333 early; red flags for RICU STAT: SpO2 <80%, pooling secretions, hemoptysis, severe hypercapnia despite BiPAP, RR >35, tiring out`,`DYSPNEA DDx: CV (MI/HF/PE/tamponade/PHT), AIRWAYS (asthma/COPD/anaphylaxis/VCD/angioedema), ALVEOLI (edema/PNA/hemorrhage), PLEURAL (effusion/PTX), CNS (CVA/toxin/metabolic acidosis)`,`NRB mask delivers FiO2 60-90% and is the best first step for acute hypoxia — always start high and titrate down`,`Target SpO2 91-96% generally; 88-92% for hypercapnic/COPD/OHS; ~100% for CO poisoning, sickle cell crisis, pneumothorax`]},assessment:`#Respiratory Distress — Triage Assessment
SpO2: ***%  RR: ***  HR: ***  BP: ***  T: ***
Work of breathing: [ ] Mild  [ ] Moderate  [ ] Severe — retractions [ ] / diaphoresis [ ] / tripod [ ] / cyanosis [ ] / AMS [ ]
Airway: [ ] Patent  [ ] At risk (secretions/AMS/pooling)
RED FLAGS for RICU STAT: SpO2 <80% [ ] / Hemoptysis [ ] / Pooling secretions [ ] / Severe hypercapnia despite BiPAP [ ] / RR >35 [ ]
Dyspnea DDx category: [ ] CV  [ ] Airways  [ ] Alveolar  [ ] Pleural  [ ] CNS/metabolic  [ ] Other
Current O2: *** L/min via *** (FiO2 approx. ***)
Intubation needed: [ ] Imminent  [ ] Likely  [ ] Not yet — monitoring`,ddx:`CV: MI, ADHF, VHD, arrhythmia, cardiac tamponade, PE, pulmonary HTN
AIRWAYS: Asthma exacerbation, AECOPD, mucus plug, anaphylaxis, angioedema, vocal cord dysfunction, foreign body, Ludwig's angina
ALVEOLI: Pulmonary edema, PNA (bacterial/viral), ARDS, DAH, aspiration
PLEURAL: Large effusion, pneumothorax (tension or spontaneous), hemothorax
CNS/METABOLIC: CVA (posterior circulation), CO/ASA/BZD/opioid toxicity, metabolic acidosis (sepsis/DKA/uremia), hypothyroidism
NEUROMUSCULAR: ALS, GBS, MG, high cervical SCI, phrenic nerve paralysis
OTHER: Severe anemia, massive ascites, obesity hypoventilation, anxiety/panic (diagnosis of exclusion)`,workup:`IMMEDIATE (first 5 minutes):
• SpO2, RR (count yourself), HR, BP — do not trust nursing documentation of RR
• Place supplemental O2: NRB mask first (FiO2 60-90%) → titrate down when stable
• Focused exam: breath sounds (wheeze/crackles/absent), JVP, skin (diaphoresis/cyanosis/livedo), airway (drooling/stridor/edema)
URGENT:
• ABG or VBG: PaO2, PaCO2, pH — assess type 1 vs type 2 failure; A-a gradient
• CXR (portable): infiltrate, PTX, effusion, cardiomegaly, mediastinal shift
• EKG: PE pattern, ACS, arrhythmia
• BMP: metabolic acidosis (anion gap), BUN/Cr (uremia), K+
• BNP/NT-proBNP: cardiogenic vs non-cardiogenic
• CBC, troponin, D-dimer (if PE concern)
• Bedside echo (POCUS): LV function, pericardial effusion, RV:LV ratio (PE), B-lines (pulmonary edema), pleural effusion`,management:`INITIAL STABILIZATION:
• Sit patient upright (improves FRC, reduces WOB)
• O2: NRB mask 10-15 L/min (FiO2 60-90%) → titrate SpO2 to 91-96%
  - Hypercapnic risk (COPD/OHS/NM disease): target 88-92%; high flow can worsen hypercapnia
• IV access x2; basic labs (see above)
• Call Rapid Response if: not improving, RR >25, SpO2 <92% on NRB, AMS
ESCALATION PATHWAY (if not improving on NRB):
• HFNC (High Flow Nasal Cannula): 30-60 L/min, FiO2 up to 100% — better tolerated than NIV; trial for hypoxemic failure if no hypercapnia
• NIPPV/BiPAP: hypercapnic failure (COPD, OHS, pulmonary edema) — reduces intubation need; not if AMS/unable to protect airway
• Intubation: call RICU x6-3333 (STAT RICU) for: SpO2 <80%, rising pCO2 + acidosis despite BiPAP, AMS, exhaustion, hemoptysis
CAUSE-SPECIFIC: see individual templates (Asthma, AECOPD, PE, ADHF, ARDS, etc.)`,monitoring:`• SpO2 and RR continuously until stable; titrate O2 to maintain target saturation
• VBG or ABG 30-60 min after any major O2/ventilation change
• Reassess work of breathing clinically every 15-30 min: improving or worsening trajectory determines escalation
• If HFNC/BiPAP: ROX index (SpO2/FiO2)/RR — if <4.88 after 2-12h on HFNC = high failure risk → intubate`,disposition:`• ICU/RICU: SpO2 <92% on NRB or HFNC, hypercapnia, AMS, RR >30, hemoptysis, bilateral lung disease, requires BiPAP
• Step-down/telemetry: stable on NC/FM <6L, improving trajectory
• Pulm/RICU consult: any patient requiring >40% FiO2 to maintain SpO2 ≥92%`},{id:`hypoxemia-hypercapnia`,system:`pulm`,title:`Hypoxemia & Hypercapnia — Pathophysiology and ABG Interpretation`,keywords:[`hypoxemia`,`hypercapnia`,`respiratory failure`,`ABG`,`A-a gradient`,`shunt`,`VQ mismatch`,`diffusion limitation`,`PaO2`,`PaCO2`,`P to F ratio`,`type 1 respiratory failure`,`type 2 respiratory failure`,`alveolar gas equation`],source:{chapter:`Pulmonary & Critical Care`,section:`Hypoxemia & Hypercapnia`,pages:`40`,authors:`Rachel Ancar, Cassandra Fiorino, Daniel Fulop`,keyFacts:[`Type 1 (hypoxemic): PaO2 <60 mmHg — V/Q mismatch (most common), shunt (cardiac or pulmonary), diffusion limitation, low FiO2`,`Type 2 (hypercapnic): PaCO2 >45 mmHg — hypoventilation (reduced drive, muscle weakness, obstruction); PaO2 often low secondary to CO2 displacing O2`,`A-a gradient = Alveolar PO2 − arterial PO2; Alveolar PO2 = FiO2×(760−47) − PaCO2/0.8; Normal = age/4 + 4`,`Elevated A-a gradient + corrects with 100% O2 = V/Q mismatch; does NOT correct = shunt (R→L cardiac, AVM, massive PNA/ARDS)`,`P:F ratio (PaO2/FiO2): normal ≥400; ARDS if <300; surrogate for A-a gradient at bedside without ABG calculation`]},assessment:`#Hypoxemia / Hypercapnia — ABG Interpretation
SpO2: ***%  (SpO2 90% ≈ PaO2 60 mmHg)
ABG: pH *** / PaCO2 *** / PaO2 *** / HCO3 *** / FiO2 ***
P:F Ratio: PaO2/FiO2 = *** (normal ≥400; ARDS <300)
Alveolar PO2 (PAO2): FiO2 × (760−47) − PaCO2/0.8 = ***
A-a gradient: PAO2 − PaO2 = *** (normal = age/4 + 4 = *** mmHg)
Normal A-a? [ ] Yes → hypoventilation or low FiO2  [ ] No (elevated) → intrinsic lung pathology
If elevated A-a: Corrects with 100% O2? [ ] Yes → V/Q mismatch  [ ] No → shunt
Failure type: [ ] Type 1 (hypoxemic — PaO2 <60)  [ ] Type 2 (hypercapnic — PaCO2 >45)  [ ] Mixed`,ddx:`HYPOXEMIA (elevated A-a, corrects with O2 → V/Q MISMATCH):
• PNA, pulmonary edema/ADHF, COPD, asthma, ILD, PE — O2 supplementation partially effective
HYPOXEMIA (elevated A-a, does NOT correct → SHUNT, R→L):
• Intracardiac shunt (ASD, VSD, PFO), pulmonary AVM, consolidated lung (PNA/ARDS) — requires PEEP; supplemental O2 limited benefit
HYPOXEMIA (normal A-a → HYPOVENTILATION or LOW FiO2):
• Opioid/sedative OD, central hypoventilation, NM weakness (GBS, MG, ALS), obesity hypoventilation, high altitude
HYPERCAPNIA (Type 2 respiratory failure):
• Reduced respiratory drive: opioid, BZD, CNS lesion (CVA/tumor), metabolic alkalosis (CO2 retention to compensate)
• Increased WOB/pump failure: COPD, severe asthma, NM disease, chest wall restriction, obesity hypoventilation
• Increased dead space: PE, ARDS, COPD — ventilation going to non-perfused areas`,workup:`• ABG (required for precise analysis): pH, PaCO2, PaO2, HCO3, FiO2 at time of draw
• VBG (acceptable for pH and pCO2 screening): add 0.05 to VBG pH, add 5-6 mmHg to VBG pCO2 for approximate ABG
• CXR: consolidation (shunt), hyperinflation (COPD/asthma), pulmonary edema
• Echo/POCUS: cardiac function, RV:LV ratio, B-lines, shunt (bubble study)
• Spirometry/PFTs: obstructive vs restrictive pattern
• CT chest/CTPA: if PE, ILD, or mass suspected`,management:`TYPE 1 (HYPOXEMIC):
• O2 supplementation: NC (FiO2 24-44%), simple mask (40-60%), NRB (60-90%), HFNC (up to 100%)
• HFNC (High Flow Nasal Cannula): 30-60 L/min — first-line escalation for hypoxemic failure; provides CPAP effect; reduces intubation need vs standard O2 in non-hypercapnic patients (NEJM 2015;372:2185)
• For shunt: PEEP (via BiPAP/mechanical ventilation) to recruit atelectatic alveoli; O2 supplementation less effective
TYPE 2 (HYPERCAPNIC):
• NIV/BiPAP: first-line for acute hypercapnic failure (COPD, OHS); reduces intubation and mortality
• IPAP/EPAP settings: start IPAP 10-14 cmH2O, EPAP 4-6 cmH2O; titrate by 2-4 cmH2O to reduce pCO2 and WOB
• Reverse precipitant: naloxone (opioid OD), neostigmine (MG), treat infection (COPD)
• If BiPAP failing (rising pCO2, AMS, exhaustion): intubate — permissive hypercapnia acceptable in COPD if pH >7.20`,monitoring:`• ABG or VBG 30-60 min after every significant O2/ventilation change
• ROX index (SpO2/FiO2)/RR for HFNC monitoring: <4.88 at 2-12h = high failure risk → consider BiPAP or intubation
• For BiPAP: tolerance, air leak, RR, mental status, repeat VBG at 1-2h
• SpO2 and RR continuously`,disposition:`• ICU: type 2 failure requiring BiPAP or intubation, worsening despite HFNC, shunt physiology
• Step-down: stable HFNC or improving with supplemental O2
• Pulmonology: new ILD, unexplained hypoxemia, chronic hypercapnia management`},{id:`noninvasive-oxygenation-ventilation`,system:`pulm`,title:`Noninvasive Oxygenation and Ventilation (HFNC / CPAP / BiPAP)`,keywords:[`HFNC`,`high flow nasal cannula`,`BiPAP`,`CPAP`,`noninvasive ventilation`,`NIV`,`NIPPV`,`oxygen delivery`,`nasal cannula`,`NRB`,`nonrebreather`,`supplemental oxygen`,`IPAP EPAP`,`optiflow`],source:{chapter:`Pulmonary & Critical Care`,section:`Noninvasive Oxygenation/Ventilation`,pages:`41`,authors:`Rachel Ancar, Cassandra Fiorino, Daniel Fulop`,keyFacts:[`Nasal cannula: FiO2 increases by 0.04 per L/min (1L=24%, 2L=28%, 6L=44%); simple face mask 40-60%; NRB 60-90% at 10-15L/min`,`HFNC (Optiflow/Vapotherm): 30-60 L/min; FiO2 up to 100%; provides ~1 cmH2O PEEP per 10L/min flow; heats and humidifies — reduces intubation vs standard O2 in hypoxemic non-hypercapnic patients (FLORALI: NEJM 2015;372:2185)`,`BiPAP/NIPPV: IPAP drives ventilation (reduces pCO2), EPAP = PEEP (improves oxygenation); reduces intubation in COPD exacerbation (NEJM 1995;333:817) and cardiogenic pulmonary edema`,`BiPAP contraindications: hemodynamic instability, AMS/inability to protect airway, facial trauma, active vomiting, copious secretions, inability to tolerate mask — intubate instead`,`ROX index = (SpO2/FiO2)/RR: value <4.88 at 2, 6, or 12h on HFNC = high risk of needing intubation`]},assessment:`#Noninvasive Oxygenation/Ventilation
Current O2 delivery: ***
HFNC eligibility: Hypoxemic failure [ ] / Tolerating mask [ ] / Protecting airway [ ] / No hypercapnia [ ]
BiPAP eligibility: Hypercapnic failure (COPD/OHS/CPE) [ ] / Awake/cooperative [ ] / No vomiting [ ] / Hemodynamically stable [ ]
BiPAP settings: IPAP *** cmH2O / EPAP *** cmH2O / FiO2 *** / RR backup ***
HFNC settings: Flow *** L/min / FiO2 ***%
ROX index (for HFNC): (SpO2/FiO2)/RR = *** (>4.88 = lower risk; <4.88 = consider escalation)
Response: SpO2 *** (before) → *** (after) / RR *** → *** / WOB *** → ***`,ddx:`INDICATION MATCHING:
• Hypoxemic non-hypercapnic (PNA, ARDS, ADHF): HFNC first → BiPAP/CPAP if failing
• Hypercapnic (AECOPD, OHS, NM disease, CPE): BiPAP first-line — IPAP drives tidal volumes
• Cardiogenic pulmonary edema: CPAP (5-10 cmH2O) or BiPAP — reduces afterload, improves oxygenation
• Immunocompromised (post-transplant, heme malignancy): HFNC reduces ICU admission (NEJM 2015;372:2185)
• Post-extubation: HFNC ↓ reintubation risk vs conventional O2 (NEJM 2016;375:1919)
FAILURE INDICATORS (escalate/intubate):
• SpO2 not improving to ≥92%, RR not decreasing, WOB worsening
• AMS/agitation, inability to clear secretions, hemodynamic instability
• ROX index <4.88 at 2-12h on HFNC`,workup:`• VBG or ABG 1h after initiating HFNC/BiPAP: confirm pH, pCO2 improving
• SpO2 and RR continuously; titrate FiO2 to target saturation
• CXR: confirm tube/mask position; assess underlying cause`,management:`O2 DELIVERY DEVICE SELECTION (escalation ladder):
1. Nasal cannula (NC): 1-6 L/min, FiO2 24-44% — mild hypoxemia, tolerates eating/speaking
2. Simple face mask: 6-10 L/min, FiO2 40-60% — moderate hypoxemia
3. Non-rebreather mask (NRB): 10-15 L/min, FiO2 60-90% — best first step for acute severe hypoxemia
4. HFNC (Optiflow): 30-60 L/min, FiO2 21-100% — hypoxemic failure not responding to NRB; provides warmth + humidification
   - Start: 30-40 L/min flow, FiO2 60-80%; titrate up for SpO2 <92%
   - ROX index every 2h: <4.88 = consider NIV or intubation
5. BiPAP/NIPPV: hypercapnic failure, AECOPD, OHS, cardiogenic pulmonary edema
   - Start: IPAP 10 cmH2O, EPAP 5 cmH2O, FiO2 30-40%; titrate IPAP ↑ by 2 q15-30 min for pCO2/WOB
   - Typical range: IPAP 12-20, EPAP 4-8; backup rate 10-12 BPM
   - Reassess with VBG at 1-2h; tolerance at 30-60 min
BiPAP FOR SPECIFIC INDICATIONS:
• AECOPD: IPAP 12-16, EPAP 4-5 — titrate to reduce pCO2 and pH toward 7.35
• Cardiogenic pulmonary edema: CPAP 5-10 cmH2O or BiPAP IPAP 10-14/EPAP 5-8 — reduces preload/afterload
• OHS/OSA: higher EPAP needed (6-10 cmH2O) to stent airway`,monitoring:`• SpO2 and RR continuously; target SpO2 91-96% (88-92% for hypercapnic patients)
• VBG at 1-2h after BiPAP initiation; repeat every 2-4h if adjusting settings
• ROX index every 2h on HFNC — trend over time
• Mask fit/tolerance: air leak (ear/nose pain, eye dryness), claustrophobia — optimize before abandoning NIV
• Pressure injury: nasal bridge protection if using full-face mask (duoderm)`,disposition:`• ICU: BiPAP with worsening or no improvement at 1-2h; ROX <4.88 on HFNC; hemodynamic instability
• Step-down: improving on HFNC or BiPAP with stable hemodynamics
• Consider intubation early if: AMS, hemodynamic instability, secretion burden, mask intolerance with worsening failure`},{id:`chest-imaging-interpretation`,system:`pulm`,title:`Chest Imaging Interpretation (CXR / CT)`,keywords:[`chest X-ray`,`CXR`,`chest imaging`,`CT chest`,`HRCT`,`consolidation`,`infiltrate`,`pneumothorax`,`pleural effusion`,`cardiomegaly`,`mediastinum`,`silhouette sign`,`ground glass`,`honeycombing`,`CXR approach`,`ABCDEF`],source:{chapter:`Pulmonary & Critical Care`,section:`Interpretation of Chest Imaging`,pages:`42`,authors:`Rachel Ancar, Cassandra Fiorino, Daniel Fulop`,keyFacts:[`ABCDEF CXR approach: Airway, Bones/soft tissue, Cardiac silhouette, Diaphragm, Effusions, Fields/Foreign bodies — always compare to prior`,`Silhouette sign: loss of normal cardiac or mediastinal border indicates adjacent density (RML PNA obscures right heart border; LLL PNA obscures left hemidiaphragm)`,`Pneumothorax: pleural line + absent lung markings peripherally; tension PTX = contralateral tracheal deviation + ipsilateral hemidiaphragm depression; mediastinal shift`,`HRCT patterns: UIP (honeycombing + traction bronchiectasis + basal/subpleural → IPF); NSIP (bilateral GGO + lower lobe → CTD-ILD); crazy paving (GGO + septal thickening → PCP, pulmonary edema, adenocarcinoma)`,`PA diameter of main pulmonary artery ≥29mm on CT: 97% PPV for pulmonary hypertension`]},assessment:`#Chest Imaging Interpretation
Film type: [ ] PA  [ ] AP (portable — larger cardiac silhouette, ↑false cardiomegaly)  [ ] Lateral
CXR systematic review (ABCDEF):
A — Airway: trachea midline [ ] / deviated [ ] / ETT position *** cm above carina [ ]
B — Bones/soft tissue: rib fractures [ ] / subcutaneous air [ ]
C — Cardiac: CTR *** (<0.5 = normal on PA); mediastinum width *** (<8cm normal); widened [ ]
D — Diaphragm: L lower than R [ ] / flat (emphysema) [ ] / free air under R hemidiaphragm [ ]
E — Effusions: CP angle blunting [ ] / large ( > *** cm) [ ] / layering [ ]
F — Fields: [ ] Clear  [ ] Consolidation (lobar/segmental) location: ***  [ ] Ground glass  [ ] Diffuse bilateral  [ ] Unilateral
    Silhouette sign: *** (R heart border → RML; L hemidiaphragm → LLL; L heart border → lingula)
    [ ] Pneumothorax: [ ] Right  [ ] Left  [ ] Tension (tracheal deviation + mediastinal shift)
Tubes/lines: ETT ___ cm / NGT *** / CVC tip ***`,ddx:`CONSOLIDATION / AIRSPACE OPACITY:
• Lobar/segmental: bacterial PNA (Strep pneumo), aspiration (gravity-dependent), lung contusion
• Bilateral/diffuse: ARDS (bilateral + non-cardiogenic), cardiogenic pulmonary edema (perihilar "bat wing"), DAH (bilateral GGO), PCP (bilateral GGO + low CD4)
• Atelectasis: linear (subsegmental) vs lobar (loss of volume + displaced fissure)

INTERSTITIAL / GROUND GLASS OPACITY (CT patterns):
• GGO bilateral: pulmonary edema, PCP (PJP), viral PNA, eosinophilic pneumonia, NSIP
• Honeycombing + traction bronchiectasis, basal/subpleural: UIP/IPF
• Crazy paving (GGO + septal thickening): PCP, edema, lipoid PNA, adenocarcinoma, COVID-19
• Nodules: metastases (cannon ball), miliary TB, fungal, sarcoid (upper lobe, perilymphatic), hypersensitivity (centrilobular GGO)

PLEURAL:
• Unilateral effusion: parapneumonic, malignancy, TB, hemothorax
• Bilateral effusion: CHF (right ≥ left), cirrhosis, nephrotic
• Loculated effusion: doesn't shift on decubitus — empyema or organizing hemothorax

MEDIASTINUM:
• Widened (>8cm): aortic dissection/hematoma, LAD (lymphoma/sarcoid), goiter
• Anterior mass: 4 Ts — Thymoma, Teratoma/germ cell, Terrible lymphoma, Thyroid`,workup:`• Compare to PRIOR films — most important step in interpretation
• CT chest with contrast: characterize mediastinal/hilar pathology, vascular structures, PE (CTPA), pleural processes
• HRCT (no contrast, <2mm): diffuse lung disease — ILD, bronchiectasis, emphysema; includes expiratory, prone, and supine sequences
• CT angiography (CTPA): PE (with rapid contrast injection); main PA diameter assessment for pHTN
• Ultrasound (pleural): confirm free-flowing effusion before thoracentesis; differentiate transudates/exudates is clinical`,management:`PTX: small/stable → observation; large (>3 cm apex to cupola on PA) or symptomatic → needle aspiration or chest tube; TENSION PTX → immediate needle decompression (2nd ICS MCL) + chest tube
PULMONARY EDEMA (bilateral/perihilar): diuresis, afterload reduction (see ADHF template)
LOBAR ATELECTASIS: incentive spirometry, chest PT, bronchoscopy if mucus plug; position change (unaffected side down)
LARGE EFFUSION: thoracentesis (diagnostic and/or therapeutic) if >1 cm on lateral decubitus
CONCERNING MASS/NODULE: follow up CT, PET scan, tissue biopsy if high suspicion`,monitoring:`• Daily portable CXR in ICU: ETT position (3-5 cm above carina), central line tip (SVC/cavoatrial junction), PTX after procedures
• Serial CXR to track progression: PNA (should improve by 6 weeks), ARDS (bilateral opacity progression), effusion size
• HRCT: not for serial monitoring (radiation); used once for diagnosis, then clinical/PFT tracking`,disposition:`• Pulmonology: new ILD (HRCT + multidisciplinary discussion), complex effusion, unexplained mediastinal mass
• CT surgery/interventional radiology: empyema, complex PTX, lung mass requiring biopsy
• RICU: large PTX with hemodynamic compromise (tension), ARDS with bilateral opacities`},{id:`bronchiectasis-hemoptysis`,system:`pulm`,title:`Bronchiectasis / Hemoptysis / DAH`,keywords:[`bronchiectasis`,`hemoptysis`,`massive hemoptysis`,`diffuse alveolar hemorrhage`,`DAH`,`CF`,`cystic fibrosis`,`MAC`,`bronchial artery embolization`,`BAE`,`signet ring sign`,`tram track`,`non-tuberculous mycobacteria`],source:{chapter:`Pulmonary & Critical Care`,section:`Bronchiectasis & Hemoptysis`,pages:`45`,authors:`Rachel Ancar, Cassandra Fiorino, Daniel Fulop`,keyFacts:[`Bronchiectasis CT criteria: bronchial diameter > adjacent pulmonary artery (signet-ring sign), lack of bronchial tapering (tram-track sign), or visible airways in lung periphery`,`Hemoptysis causes: bronchiectasis/CF most common, followed by lung cancer, TB, PNA, fungal/Aspergillus — massive (>200-600mL/24h) = life-threatening; protect airway`,`Massive hemoptysis management: position with bleeding side DOWN, rigid bronchoscopy + BAE (bronchial artery embolization) for definitive hemostasis; intubate large ETT (≥8mm) if needed`,`Diffuse alveolar hemorrhage (DAH): hemoptysis + bilateral opacities + progressive BAL (serial washes show increasing blood); capillaritis from vasculitis/AI disease → pulse-dose steroids`,`Bronchiectasis acute exacerbation: change in ≥3 of cough/sputum purulence/dyspnea/fatigue/hemoptysis — send sputum cx before antibiotics (Pseudomonas and NTM common)`]},assessment:`#Bronchiectasis / Hemoptysis
HEMOPTYSIS:
Volume: *** mL (mild <30mL/24h; moderate 30-200mL; massive >200-600mL/24h — life-threatening)
Active bleeding: [ ] Yes  [ ] No  |  Color: [ ] Bright red  [ ] Dark red  [ ] Pink frothy (pulm edema — not true hemoptysis)
Position: bleeding side down? [ ] Yes (protect non-bleeding lung)
Airway compromised: [ ] Yes → intubate (≥8mm ETT) and position  [ ] No → monitor
BRONCHIECTASIS EXACERBATION:
Symptoms changed: cough [ ] / sputum purulence/volume [ ] / dyspnea [ ] / fatigue [ ] / hemoptysis [ ]
Sputum culture last result: ***  | Recent hospitalization: ***
Baseline FEV1: *** | Current FEV1: ***
Prior organisms: [ ] Pseudomonas  [ ] NTM (MAC)  [ ] MRSA  [ ] Aspergillus (ABPA)`,ddx:`HEMOPTYSIS CAUSES (by frequency in adults):
• Bronchiectasis/CF — most common cause of massive hemoptysis; friable bronchial arteries
• Lung cancer — unilateral hemoptysis in smoker >40 years; CT mass
• Infection: TB (upper lobe cavitation), PNA (bacterial + viral), lung abscess, aspergilloma ("fungus ball")
• Tracheobronchitis — common cause of blood-tinged sputum
• PE with pulmonary infarction — pleuritic pain + hemoptysis + DVT risk factors
• Vasculitis/AI: GPA (saddle nose, sinusitis), microscopic polyangiitis, anti-GBM/Goodpasture, SLE

PSEUDO-HEMOPTYSIS: pink frothy = pulmonary edema; brown/dark = UGI bleed or epistaxis; confirm source

BRONCHIECTASIS ETIOLOGY:
• Post-infectious: prior severe PNA, TB, childhood whooping cough, measles
• CF (bilateral upper lobe + mucus plugging), ABPA (central bronchiectasis + eosinophilia + IgE)
• Immunodeficiency: CVID, IgA deficiency, HIV — recurrent infections → bronchiectasis
• CTD: RA, Sjogren's, IBD — consider in otherwise unexplained bronchiectasis
• NTM (MAC most common): bilateral nodular bronchiectasis, Lady Windermere syndrome (RML/lingula)`,workup:`HEMOPTYSIS:
• CXR: localize bleeding (consolidation, mass, cavitation, bilateral GGO for DAH)
• CT chest/CTA: localizes bleeding source; identifies endobronchial lesion, mass, pulmonary vasculature; CTA to plan BAE
• CBC, coagulation: anemia (severity/chronicity), coagulopathy
• Sputum cx + cytology; acid-fast bacilli smear and culture (TB/NTM)
• Bronchoscopy: rigid (therapeutic, massive hemoptysis) vs flexible (diagnostic, localizing source)
BRONCHIECTASIS:
• HRCT: signet-ring sign, tram-track sign, distribution (upper vs lower vs diffuse)
• PFTs: obstructive pattern (FEV1/FVC <0.7)
• Sputum culture (bacterial, fungal, AFB): before antibiotics; always include mycobacteria
• CBC/diff (eosinophilia → ABPA), total IgE + Aspergillus IgE (ABPA), ANA/RF/CCP, Ig levels, HIV, A1AT
• Consider CF testing (sweat chloride, genetics) if bilateral upper lobe disease or young patient`,management:`MASSIVE HEMOPTYSIS:
• Position: bleeding side DOWN (protects non-bleeding lung from aspiration)
• Large-bore ETT (≥8mm): if airway compromise; allows rigid bronchoscopy
• Correct coagulopathy: reverse anticoagulants, platelets if <50k, FFP if INR >1.5
• Bronchial Artery Embolization (BAE): IR procedure; definitive hemostasis in 80-90%; preferred over surgery
• Call interventional radiology (IR) and pulmonology simultaneously
• Vasopressin/terlipressin IV: temporizing measure for vasoconstruction
• Surgical resection: last resort; consider if BAE fails and single-lobe source confirmed
BRONCHIECTASIS ACUTE EXACERBATION:
• Send sputum culture first, then antibiotics
• Empiric: ciprofloxacin 750mg PO BID OR pip-tazo 4.5g IV q6h (if prior Pseudomonas or severe)
• Prior culture-directed if available
• Duration: 14 days
• Airway clearance: scheduled albuterol nebs + hypertonic saline 7% + HFCWO vest or oscillating PEP device
CHRONIC BRONCHIECTASIS MANAGEMENT:
• Long-term azithromycin 250mg 3x/week: reduces exacerbations but risks macrolide resistance
• Airway clearance devices (Acapella, Aerobika, Flutter, vest) — every patient
• NTM (MAC): multidrug regimen — azithromycin + rifampin + ethambutol ± aminoglycoside (ID consult)
DIFFUSE ALVEOLAR HEMORRHAGE (DAH):
• Pulse methylprednisolone 500-1000mg IV qday x3-5 doses if AI/vasculitis etiology
• Cyclophosphamide or rituximab for GPA/MPA/anti-GBM (rheumatology/nephrology consult)
• Reverse anticoagulation if coagulopathy-related`,monitoring:`• Hemoptysis: volume and frequency every shift; Hgb every 6-12h if significant bleeding
• Bronchiectasis: sputum culture results → de-escalate antibiotics; spirometry at follow-up
• DAH: serial CXR or CT; BAL serial washings (clearing = improvement); DLCO (sensitive for hemorrhage)`,disposition:`• ICU: massive hemoptysis, intubated, DAH with hemodynamic compromise
• IR: BAE for significant hemoptysis
• Pulmonology: ABPA (steroid protocol), NTM (multidrug therapy), severe bronchiectasis management
• CT surgery: surgical candidate with localized disease and failed BAE`},{id:`interstitial-lung-disease`,system:`pulm`,title:`Interstitial Lung Disease (ILD)`,keywords:[`interstitial lung disease`,`ILD`,`IPF`,`idiopathic pulmonary fibrosis`,`NSIP`,`UIP`,`COP`,`hypersensitivity pneumonitis`,`CTD-ILD`,`nintedanib`,`pirfenidone`,`sarcoidosis`,`HRCT`,`honeycombing`,`velcro crackles`],source:{chapter:`Pulmonary & Critical Care`,section:`Interstitial Lung Disease`,pages:`46`,authors:`Rachel Ancar, Cassandra Fiorino, Daniel Fulop`,keyFacts:[`IPF diagnosis: UIP pattern on HRCT (basal/subpleural honeycombing ± traction bronchiectasis) + exclusion of other causes; biopsy if HRCT indeterminate`,`Anti-fibrotic therapy (IPF): nintedanib (BIBF 1120) 150mg BID or pirfenidone 2403mg/day — both reduce FVC decline by ~50%; neither reverses fibrosis`,`CTD-ILD: scleroderma most common; nintedanib reduces progression; MMF, cyclophosphamide, rituximab for inflammatory subtypes (NSIP)`,`Acute exacerbation of IPF: rapid deterioration with new bilateral GGO on background UIP; high mortality (40-65%); high-dose steroids often used empirically`,`Transplant referral criteria: FVC <80% or DLCO <40% predicted; FVC decline ≥10% over 2 years; supplemental O2 at rest — refer early (IPF at time of diagnosis)`]},assessment:`#Interstitial Lung Disease
Presentation: progressive dyspnea ± non-productive cough ± exertional hypoxemia (SpO2 at rest *** / 6MWT nadir ***)
Exam: [ ] Velcro crackles (bibasilar)  [ ] Clubbing  [ ] CTD features (heliotrope rash/Gottron's/sclerodactyly/sicca)
HRCT pattern: [ ] UIP (honeycombing/traction bronchiectasis/basal-subpleural) → IPF likely
             [ ] NSIP (bilateral GGO/reticulation/lower lobe/peribronchovascular) → CTD-ILD
             [ ] COP/organizing pneumonia (consolidation/migratory/"reverse halo")
             [ ] HP (centrilobular GGO/nodules/mosaic attenuation/upper lobe) → exposure history
PFTs: FVC ***% / DLCO ***% / FEV1/FVC ratio *** (restrictive = ↓FVC, ↓TLC, nl or ↑FEV1/FVC)
Etiology: [ ] IPF (idiopathic, UIP, age >60, male, smoker)  [ ] CTD-ILD: ***  [ ] HP: exposure ***  [ ] Drug-related: ***
         [ ] Sarcoidosis  [ ] ABPA  [ ] Other: ***`,ddx:`IDIOPATHIC:
• IPF (UIP): most common; male, >60yo, smoking history; honeycombing + traction bronchiectasis basal/subpleural; rapidly progressive; no treatment reverses
• NSIP: younger, female, often CTD; bilateral GGO lower lobe; better prognosis than IPF; steroid-responsive
• COP (Cryptogenic Organizing PNA): consolidation migratory pattern; "reverse halo" sign; steroid-responsive; good prognosis
• AIP (Acute Interstitial PNA): rapidly progressive ARDS-like; diffuse bilateral opacities; idiopathic ARDS
CTD-ILD: Scleroderma (most common, NSIP pattern), RA, polymyositis/DM (anti-synthetase, NSIP/UIP/COP), Sjogren's, MCTD, SLE
EXPOSURE-RELATED:
• Hypersensitivity pneumonitis (HP): organic antigens (bird droppings, mold, hay); centrilobular GGO + mosaic attenuation; acute (hours) vs chronic (months-years)
• Drug-induced: nitrofurantoin, MTX, amiodarone, bleomycin, immune checkpoint inhibitors (check PneumoTox)
GRANULOMATOUS: Sarcoidosis (upper lobe predominant, perilymphatic nodules, bilateral hilar LAD); ACE level; BAL lymphocytosis`,workup:`• HRCT (thin-section, no contrast): essential for pattern recognition; includes prone images (UIP vs NSIP)
• PFTs with DLCO: restriction (↓FVC, ↓TLC), ↓DLCO (alveolar destruction) — severity and progression
• 6-minute walk test: exertional O2 saturation, functional capacity
• Bronchoscopy with BAL: cellular differential (lymphocytosis → HP/sarcoid/NSIP; eosinophilia → EP; neutrophilia → IPF/acute infection); serial BAL for DAH
• Surgical lung biopsy (VATS): if HRCT indeterminate and clinical diagnosis uncertain; risk/benefit discussion
• Serologies: ANA, RF, anti-CCP, anti-Ro/La, anti-Scl-70, anti-MDA5, anti-Jo-1, anti-synthetase panel (CTD screen)
• ANCA (GPA/MPA), anti-GBM (if DAH concern)
• Exposure history review: birds, hot tubs, humidifiers, mold, occupational exposures
• Echo: pulmonary hypertension (RVSP) — common in ILD, worsens prognosis`,management:`IPF:
• Anti-fibrotics: nintedanib 150mg PO BID (check LFTs) OR pirfenidone 801mg PO TID with food (titrate up over 2 weeks)
• Supplement O2: >15h/day if SpO2 <88% at rest; ambulatory O2 if SpO2 ≤88% on 6MWT
• Lung transplant referral: at time of diagnosis — most die within 3-5 years without transplant
• Avoid: pirfenidone + fluvoxamine (CYP1A2); nintedanib + anticoagulants (bleeding risk); high-dose steroids alone in IPF (not effective, may harm)
• Acute exacerbation IPF: pulse methylprednisolone 500-1000mg IV qday x3; consider broad spectrum antibiotics (infectious trigger); high mortality
CTD-ILD:
• Inflammatory (NSIP): prednisone 0.5-1mg/kg/day; add AZA, MMF, cyclophosphamide, or rituximab for steroid-sparing
• Scleroderma-ILD: nintedanib + MMF; cyclophosphamide if progressive
• Anti-synthetase/DM: prednisone + AZA or tacrolimus
COP: Prednisone 0.75-1mg/kg/day x3-6 months; pulse methylpred if fulminant
HP: Remove inciting exposure (most important); steroids if not improving after removal
SARCOIDOSIS: Prednisone 20-40mg/day if symptomatic pulmonary disease, cardiac, CNS, or ocular involvement; methotrexate/hydroxychloroquine for steroid-sparing
DRUG-INDUCED ILD: Stop offending medication; steroids if moderate-severe and not improving after discontinuation`,monitoring:`• PFTs every 3-6 months: FVC trend (decline >10%/year = significant progression; transplant referral)
• DLCO decline ≥15%/2 years = significant; adds to transplant referral criteria
• 6MWT: functional status and exertional O2 supplementation need
• Echo annually: pulmonary hypertension development (RVSP >40mmHg warrants RHC)
• LFTs every 1-3 months on nintedanib or pirfenidone`,disposition:`• Pulmonology/ILD center: all new ILD diagnosis (multidisciplinary discussion — pulm/rheum/radiology/pathology)
• Lung transplant center: FVC <80% or DLCO <40%, IPF at diagnosis — early referral, do not wait until end-stage
• Rheumatology: CTD-ILD (co-management)
• Pharmacy review: PneumoTox database for drug-induced ILD`},{id:`vte-diagnostics-management`,system:`pulm`,title:`VTE — Diagnostics and Management (DVT / PE)`,keywords:[`DVT`,`PE`,`pulmonary embolism`,`deep vein thrombosis`,`Wells score`,`PERC`,`D-dimer`,`CTPA`,`anticoagulation VTE`,`DOAC VTE`,`thrombolysis`,`massive PE`,`submassive PE`,`catheter directed thrombolysis`,`PERT`,`Wells criteria`],source:{chapter:`Pulmonary & Critical Care`,section:`VTE Diagnostics / VTE Management`,pages:`47–48`,authors:`Rachel Ancar, Cassandra Fiorino, Daniel Fulop`,keyFacts:[`Wells PE score: clinical DVT signs/sx (3), PE most likely (3), HR>100 (1.5), immobilization/surgery (1.5), prior DVT/PE (1.5), hemoptysis (1), malignancy (1) — low <2, moderate 2-6, high >6`,`PERC rule (low pre-test probability): age <50, HR <100, SpO2 ≥95%, no leg swelling, no hemoptysis, no recent surgery/trauma, no prior VTE, no exogenous estrogen — all 8 negative = no D-dimer needed`,`Massive PE (high-risk): hemodynamic instability (SBP <90 or drop ≥40) → systemic thrombolysis (tPA 100mg IV over 2h) or surgical embolectomy; ECMO if contraindicated`,`Submassive PE (intermediate-high risk): RV dysfunction on TTE/CT + elevated troponin/BNP — PERT consult; catheter-directed thrombolysis (CDT) considered`,`DOAC > VKA > LMWH for VTE treatment (DOAC first-line); cancer-associated VTE: DOAC > LMWH > VKA; duration ≥3 months; indefinite if unprovoked + low bleed risk`]},assessment:`#VTE — DVT / PE Assessment
DVT symptoms: unilateral leg swelling [ ] / warmth [ ] / erythema [ ] / palpable cord [ ]
PE symptoms: dyspnea [ ] / pleuritic chest pain [ ] / hemoptysis [ ] / syncope [ ] / tachycardia [ ]
Wells PE score: *** (low <2 / moderate 2-6 / high >6)
PERC criteria met (all 8 negative)? [ ] Yes (no D-dimer needed if low pre-test prob)  [ ] No
PE SEVERITY:
[ ] Massive (HIGH-RISK): SBP <90 mmHg or drop ≥40 → systemic tPA immediately
[ ] Submassive (INTERMEDIATE): RV dysfunction + biomarkers → PERT consult, CDT consideration
[ ] Low-risk: hemodynamically stable, no RV dysfunction
Diagnostic studies: D-dimer ___ / CTPA [ ] ordered / Lower extremity US [ ] ordered
Current anticoagulation: ***`,ddx:`DVT MIMICS: cellulitis (bilateral, no cord), Baker cyst rupture (posterior knee swelling), superficial thrombophlebitis (palpable, painful superficial cord), lymphedema (non-pitting, chronic), post-thrombotic syndrome (chronic edema)
PE MIMICS: acute MI (pleuritic component unusual), pericarditis (friction rub, ST elevation), pneumothorax (sudden onset, absent BS), PNA (fever, consolidation on CXR), musculoskeletal pain
PE RISK STRATIFICATION (WHO classification):
• High risk (massive): hemodynamic instability → systemic thrombolysis or surgical embolectomy
• Intermediate-high: RV dysfunction (TTE/CT) + elevated troponin/BNP → ICU, PERT, consider CDT
• Intermediate-low: RV dysfunction OR biomarkers (not both) → inpatient monitoring
• Low risk: no RV dysfunction, normal biomarkers → early discharge (Hestia criteria)`,workup:`DVT:
• Compression duplex US (lower extremity): proximal DVT (popliteal + femoral + iliac) has clear treatment; distal DVT = serial imaging vs AC
• Upper extremity US: if arm swelling or PICC/CVC in place
PE:
• D-dimer: highly sensitive (>99%), poor specificity; use PERC or Wells first to determine if D-dimer appropriate; age-adjusted cutoff = age × 10 if >50 years
• CTPA (chest CTA with contrast): gold standard for PE; sensitivity >95%; assess RV:LV ratio >0.9 (RV strain)
• TTE/POCUS: RV dilation, McConnell's sign (apical sparing), septal bowing, RV:LV >0.9; confirms RV strain; not sensitive for PE itself
• BNP/NT-proBNP, troponin: elevated = submassive/high-risk; risk stratification
• EKG: S1Q3T3, sinus tach, RBBB, T-wave inversions V1-V4, right axis deviation
• V/Q scan: alternative if CTPA contraindicated (CKD, contrast allergy); indeterminate if abnormal CXR`,management:`MASSIVE PE (SBP <90 or drop ≥40):
• Systemic thrombolysis: tPA (alteplase) 100mg IV over 2h — monitor BP, neuro closely; ensure no contraindications
• If pulseless: TNK 50mg IV + CPR x15 min (ACLS PE protocol)
• Surgical embolectomy: if thrombolysis contraindicated/failed; CT surgery consult
• VA-ECMO: bridge if contraindication to thrombolysis or hemodynamic collapse
• Anticoagulate immediately: UFH 80 U/kg bolus → 18 U/kg/h infusion
SUBMASSIVE PE (RV dysfunction + biomarkers):
• PERT consult (PE Response Team) for multidisciplinary management
• UFH infusion (preferred over LMWH to allow rapid reversal)
• Catheter-directed thrombolysis (CDT): tPA 1-2mg/h per catheter x12-24h — lower dose, lower bleeding risk vs systemic
• Anticoagulation + close monitoring → transition to DOAC if stabilizes
LOW-RISK PE:
• DOAC: apixaban 10mg PO BID x7 days → 5mg PO BID OR rivaroxaban 15mg PO BID x21 days → 20mg PO qday
• Enoxaparin (LMWH): 1mg/kg SQ BID (preferred in malignancy, pregnancy, renal failure CrCl <30)
• UFH gtt: active bleeding risk, hemodynamic instability (allow rapid reversal), thrombolysis planned
ANTICOAGULATION DURATION:
• Provoked (surgery/trauma): 3 months
• Provoked (hormonal/prolonged immobility): 3 months
• 1st unprovoked: 3+ months, reassess bleed risk before extending
• Recurrent or non-modifiable RF: indefinite (if low bleed risk)
• Active malignancy: DOAC preferred (rivaroxaban or edoxaban); 6-12 months minimum or until cancer resolved
DVT TREATMENT: proximal DVT → anticoagulate (same as PE); distal DVT → serial imaging OR AC (see above)`,monitoring:`• Massive/submassive PE: hemodynamics every 1-4h; serial TTE at 24-48h; troponin/BNP trends
• CTPA post-thrombolysis: not routine; repeat if symptoms worsen
• LMWH anti-Xa levels: obesity (>100kg), CKD, pregnancy — target 0.6-1.0 IU/mL (q12h dosing) or 1.0-2.0 (qday)
• For UFH: aPTT every 6h until therapeutic (60-100 sec) then q24h`,disposition:`• ICU: massive PE (thrombolysis/ECMO), submassive PE with hemodynamic instability or requiring CDT
• Step-down/floor: submassive PE with stable hemodynamics after UFH/monitoring
• PERT consult: intermediate-high risk PE at MGH (x47378)
• Early discharge (Hestia criteria): low-risk PE (negative Hestia criteria) on DOAC — pulmonary follow-up`},{id:`pulmonary-hypertension`,system:`pulm`,title:`Pulmonary Hypertension`,keywords:[`pulmonary hypertension`,`pHTN`,`PAH`,`WHO group`,`right heart catheterization`,`RHC`,`mPAP`,`PVR`,`phosphodiesterase inhibitor`,`ERA`,`prostacyclin`,`sildenafil`,`ambrisentan`,`bosentan`,`tadalafil`,`PCWP`,`VA/Q`],source:{chapter:`Pulmonary & Critical Care`,section:`Pulmonary Hypertension`,pages:`49`,authors:`Kristin Harrington, Alexander Jacobs`,keyFacts:[`Definition: mPAP ≥20 mmHg on right heart catheterization; pre-capillary: PVR >2 Wood units + PCWP ≤15 (PAH or WHO group 3/4/5); post-capillary: PCWP >15 (WHO group 2 = left heart disease)`,`WHO groups: 1 PAH (idiopathic/heritable/drug/CTD/HIV/PoPH/CHD), 2 Left heart disease (most common), 3 Lung disease/hypoxia, 4 CTEPH (chronic thromboembolic), 5 Multifactorial`,`Gold standard diagnosis: RHC ± iNO vasoreactivity testing (positive response = mPAP drops ≥10mmHg to <40mmHg without fall in CO → trial CCB)`,`PAH treatment: dual oral therapy first-line (ERA + PDE5i); IV/SQ prostacyclin for high-risk; goal NT-proBNP <300, NYHA I-II, 6MWT >440m`,`Acute decompensation: avoid hypoxia (maintain SpO2 >90%), optimize volume, avoid intubation if possible (PPV → ↑PVR → RV death spiral); inhaled iNO/epoprostenol as bridge`]},assessment:`#Pulmonary Hypertension
Diagnosis confirmed: [ ] TTE (RVSP *** mmHg; TR velocity *** m/s)  [ ] RHC (mPAP *** / PCWP *** / CO *** / PVR ***)
WHO Group: [ ] 1 PAH  [ ] 2 Left heart (↑PCWP)  [ ] 3 Lung disease/hypoxia  [ ] 4 CTEPH  [ ] 5 Multifactorial
Functional Class: [ ] WHO/NYHA I  [ ] II  [ ] III  [ ] IV
6MWT: *** m | NT-proBNP: *** | Troponin: ***
Symptoms: dyspnea on exertion [ ] / syncope [ ] / chest pain [ ] / exertional symptoms only [ ]
Current medications: ***
Decompensation: [ ] New hypoxia  [ ] Increasing edema  [ ] Syncope  [ ] Hemodynamic compromise`,ddx:`ETIOLOGY (WHO CLASSIFICATION):
Group 1 PAH: idiopathic (iPAH), heritable (BMPR2 mutation), drug/toxin (methamphetamine, cocaine, dasatinib), CTD (scleroderma >>SLE), HIV, portopulmonary HTN (liver disease), CHD (Eisenmenger)
Group 2 Left heart disease: most common overall cause of elevated RVSP on TTE; diastolic dysfunction, mitral/aortic disease, HFpEF/HFrEF — PCWP >15 distinguishes from Group 1
Group 3 Lung/hypoxia: COPD (most common in group 3), ILD, sleep apnea, obesity hypoventilation, living at altitude
Group 4 CTEPH: chronic thromboembolic — surgical endarterectomy potentially curative; CT angiography (mosaic perfusion, pruning, webs)
Group 5 Multifactorial: sarcoidosis, myeloproliferative, metabolic disorders
ACUTE DECOMPENSATION TRIGGERS: hypoxia, infection, arrhythmia (especially AFib), volume overload, missed medications, thyroid disease`,workup:`INITIAL WORKUP (suspected pHTN):
• TTE: RVSP (4×TRV² + RAP), RV size/function, IVC, PCWP estimate, LV function, valvular disease
  - RVSP >40mmHg = pHTN likely; agitated saline bubble study (shunt detection)
• CT pulmonary angiography: rule out CTEPH (mosaic perfusion, pruning, filling defects)
• V/Q scan: more sensitive than CTPA for CTEPH
• PFTs with DLCO: Group 3 (obstruction/restriction)
• Labs: ANA, anti-Scl-70, anti-centromere, anti-SSA/SSB (CTD); HIV; LFTs/hepatic panel (portopulmonary HTN); TSH; BNP/NT-proBNP; anti-phospholipid antibodies (Group 4)
• RHC (right heart catheterization): GOLD STANDARD — required before initiating PAH-specific therapy
  - mPAP ≥20 + PVR >2 + PCWP ≤15 = pre-capillary PH
  - iNO vasoreactivity test: if +response → CCB trial (calcium channel blockers)`,management:`GROUP 1 PAH — RISK-STRATIFIED APPROACH:
• Low/intermediate risk: dual oral therapy — ambrisentan (ERA) 5-10mg qday + tadalafil (PDE5i) 40mg qday (AMBITION trial)
• High risk (WHO IV, 6MWT <165m, NT-proBNP >1400): IV epoprostenol (prostacyclin) + ERA + PDE5i; IV/SQ treprostinil alternative
• Vasoreactive: CCB only if confirmed response on RHC vasoreactivity testing (nifedipine 120-240mg/day or diltiazem 360-720mg/day)
PAH MEDICATION CLASSES:
• ERA (endothelin receptor antagonists): ambrisentan, macitentan, bosentan — teratogenic; monthly LFTs (bosentan)
• PDE5 inhibitors: sildenafil 20-80mg TID, tadalafil 40mg qday — avoid nitrates (hypotension)
• Prostacyclins: epoprostenol (IV, continuous infusion), treprostinil (IV/SQ/inhaled), iloprost (inhaled), selexipag (PO)
• Soluble guanylate cyclase stimulator: riociguat (avoid with PDE5i — both vasodilate via cGMP)
• Activin receptor IIA inhibitor: sotatercept (newest agent — reduces PA remodeling)
GROUP 2 (left heart): optimize left heart failure treatment (diuresis, GDMT); pHTN-specific drugs NOT indicated (worsen outcomes)
GROUP 3 (lung/hypoxia): treat underlying lung disease; supplemental O2 (SpO2 >90%); riociguat approved for CTEPH
GROUP 4 (CTEPH): pulmonary endarterectomy (PEA) for surgical candidates (curative); riociguat if inoperable; balloon pulmonary angioplasty
ACUTE DECOMPENSATION (pHTN crisis):
• Avoid: intubation if possible (PPV → ↑PVR), excessive IVF (worsens RV failure), hypoxia
• Inhaled NO (iNO) 20ppm or inhaled epoprostenol: acute pulmonary vasodilation
• IV epoprostenol: if on chronic therapy — do not interrupt; crisis may be due to pump failure/line occlusion
• VA-ECMO: bridge to transplant or recovery in refractory RV failure`,monitoring:`• Every 3-6 months: NT-proBNP, 6MWT, functional class (WHO/NYHA), TTE
• RHC at follow-up: assess treatment response (target PVR reduction, CO improvement)
• LFTs monthly for bosentan; teratogenicity counseling (ERA teratogenic — contraception required)
• Continuous SpO2 monitoring during sleep (PAH + sleep-disordered breathing common)`,disposition:`• Pulmonary hypertension center: all new Group 1 PAH — requires RHC, complex medication management
• ICU: pHTN crisis (acute decompensation), hemodynamic instability, iNO/epoprostenol initiation
• Lung transplant evaluation: WHO IV on maximal therapy, escalating NT-proBNP, refractory RV failure`},{id:`mechanical-ventilation`,system:`pulm`,title:`Mechanical Ventilation — Initiation, Modes, Troubleshooting, and Liberation`,keywords:[`mechanical ventilation`,`intubation`,`PEEP`,`tidal volume`,`plateau pressure`,`driving pressure`,`ventilator modes`,`AC/VC`,`pressure control`,`PSV`,`SIMV`,`ventilator weaning`,`spontaneous breathing trial`,`SBT`,`SAT`,`extubation`,`rapid shallow breathing index`,`RSBI`,`auto PEEP`],source:{chapter:`Pulmonary & Critical Care`,section:`Mechanical Ventilation`,pages:`50–51`,authors:`Rachel Ancar, Cassandra Fiorino, Daniel Fulop`,keyFacts:[`Five main variables: RR, VT, FiO2, PEEP, mode; ventilation controls PaCO2 (MV = RR×VT); oxygenation controlled by FiO2 and PEEP`,`Initial settings: VT 6-8 mL/kg IBW, RR 12-20, FiO2 1.0 (wean rapidly), PEEP 5 cmH2O; lung-protective in ARDS (VT 6, Pplat ≤30, driving pressure ≤15)`,`Pplat >30 cmH2O = high risk for VILI (reduce VT); PIP-Pplat gradient = airway resistance (bronchospasm/secretions/kinking); if Pplat also high = compliance issue (ARDS/pulmonary edema/pneumothorax)`,`Auto-PEEP (intrinsic PEEP): air trapping in COPD/asthma; measure with expiratory hold; treat with ↓RR, ↑expiratory time (I:E 1:4-5), bronchodilators; hemodynamic collapse → briefly disconnect vent`,`Liberation criteria: P:F >200, FiO2 ≤0.40, PEEP ≤8, GCS improving, hemodynamically stable → SAT then SBT (PS 5/PEEP 5 or T-piece x30 min); RSBI <105 predicts success`]},assessment:`#Mechanical Ventilation
Mode: [ ] AC/VC  [ ] AC/PC  [ ] PSV  [ ] SIMV  |  Trigger: [ ] Patient  [ ] Time
Current settings: VT ___ mL (*** mL/kg IBW) | RR ___ set / *** measured | FiO2 ___ | PEEP ___ cmH2O
Peak inspiratory pressure (PIP): ___ cmH2O | Plateau pressure (Pplat): ___ cmH2O (hold: inspiratory pause)
Driving pressure (Pplat – PEEP): ___ cmH2O (goal ≤15)
Auto-PEEP measured (expiratory hold): ___ cmH2O
Minute ventilation (MV): *** L/min (RR × VT)
P:F ratio: *** | SpO2: ***% | ETCO2: *** mmHg
Liberation check: P:F >200 [ ] / FiO2 ≤0.40 [ ] / PEEP ≤8 [ ] / Hemodynamics stable [ ] / Awake/following commands [ ]`,ddx:`INTUBATION INDICATIONS: failure of NIPPV, PaCO2 >60 with pH <7.20, P:F <150 despite HFNC, airway protection (AMS/secretions/vomiting), hemodynamic instability
TROUBLESHOOTING HIGH PIP (DOPE):
• D — Displacement (ETT): right mainstem or esophageal placement; CXR + direct laryngoscopy/capnography
• O — Obstruction: secretion plug/mucus plug (suction + saline lavage); bite block + sedation; kinked ETT
• P — Pneumothorax: unilateral absent breath sounds; hemodynamic deterioration → needle decompression if emergent; CXR
• E — Equipment: circuit malfunction, leak; check all connections
HIGH PPLAT (elevated airway compliance issue): ARDS, pulmonary edema, pneumothorax, auto-PEEP, obesity, abdominal compartment syndrome, right mainstem intubation
DYSSYNCHRONY: patient-ventilator mismatch (flow starvation, reverse trigger, double triggering) → adjust flow/rate/mode or increase sedation`,workup:`• Daily CXR (ICU): ETT position (3-5 cm above carina), PTX, line/tube positions, pulmonary edema, progression of underlying disease
• Plateau pressure check: inspiratory hold ×0.5-1s (briefly stop ventilation on exam)
• Auto-PEEP: expiratory hold ×0.5-1s; automated on most modern ventilators
• ABG: PaO2, PaCO2, pH — guide FiO2/PEEP/RR titration
• VBG: acceptable for trend monitoring between ABGs`,management:`INITIAL SETTINGS (standard):
• Mode: AC/VC (Assist Control/Volume Control) — most common starting mode; ensures minimum MV regardless of effort
• VT: 6-8 mL/kg IBW; ARDS: 6 mL/kg strictly
• IBW: male = 50 + 2.3×(height in inches − 60); female = 45.5 + 2.3×(height in inches − 60)
• RR: 12-20 BPM (can increase to 30 in ARDS for permissive hypercapnia management)
• FiO2: start 1.0, wean rapidly to SpO2 ≥92% (target FiO2 ≤0.6 when possible to minimize O2 toxicity)
• PEEP: 5 cmH2O standard; higher (8-14) for ARDS (ARDSNet PEEP/FiO2 table)
LUNG-PROTECTIVE VENTILATION (ARDS):
• VT 6 mL/kg IBW strictly; Pplat ≤30; driving pressure ≤15; higher PEEP per ARDSNet table
AUTO-PEEP MANAGEMENT:
• Reduce RR (allow longer expiratory time), increase I:E ratio (1:3 to 1:5)
• Bronchodilators: albuterol MDI (4-8 puffs) or nebulized 2.5mg q4h for bronchospasm
• Emergency: if hemodynamic collapse — briefly disconnect ETT from vent (relieves air trapping)
LIBERATION FROM MECHANICAL VENTILATION:
1. Daily SAT (Spontaneous Awakening Trial): hold sedation/analgesia in the morning → assess neurologic status
2. SBT (Spontaneous Breathing Trial): PS 5 cmH2O / PEEP 5 cmH2O for 30-120 min (or T-piece)
   - Pass criteria: RR <35, SpO2 >90%, no diaphoresis/excessive accessory muscle use, no agitation
   - RSBI (RR/VT in liters): <105 = likely successful extubation
3. Extubation: if SBT passed and able to follow commands, cough effectively, secretions manageable
4. Post-extubation: HFNC 30-40 L/min x4h reduces reintubation vs standard O2 (NEJM 2016;375:1919)
WEANING SEDATION: minimize BZDs; target RASS 0 to −2; propofol/dexmedetomidine preferred to midazolam`,monitoring:`• Pplat every 4h (or after any VT/PEEP change); driving pressure every shift
• ABG daily (or more frequently during active titration)
• Daily liberation assessment: SAT + SBT readiness check every morning
• ETT cuff pressure: target 20-30 cmH2O (prevents aspiration and tracheal injury)
• Ventilator-associated events (VAE) bundle: HOB 30-45°, oral care with CHX, peptic ulcer prophylaxis, DVT prophylaxis`,disposition:`• ICU mandatory: all mechanically ventilated patients
• Daily SAT + SBT reassessment: optimize liberation timing — each additional day on vent = increased VAP/VAE risk
• Consider tracheostomy: if anticipated prolonged ventilation (>10-14 days); pulmonary/ENT/surgery`},{id:`ecmo`,system:`pulm`,title:`ECMO (Extracorporeal Membrane Oxygenation)`,keywords:[`ECMO`,`extracorporeal membrane oxygenation`,`VV ECMO`,`VA ECMO`,`ECPR`,`oxygenation failure`,`refractory ARDS`,`cardiogenic shock ECMO`,`ECMO cannula`,`sweep gas`,`circuit`,`ECMO complications`],source:{chapter:`Pulmonary & Critical Care`,section:`ECMO`,pages:`54`,authors:`Emma Kurz, Adam Gross`,keyFacts:[`VV-ECMO (replaces lungs): for refractory hypoxemic failure — PaO2/FiO2 <80 despite optimization, Pplat >30, pH <7.25 with pCO2 >60 despite MV; relies on native cardiac output`,`VA-ECMO (replaces heart + lungs): refractory cardiogenic shock, massive PE, cardiac arrest (ECPR) — venous cannula IVC/RA; arterial cannula R femoral artery`,`ECMO consult at MGH: MGH STAT App or Directory 'ECMO Consult' or p24252, # 857-310-0335 — consider early (cardiac arrest: ideally <10 min from code start)`,`VV-ECMO contraindications (absolute): non-recoverable multi-organ failure, unwitnessed arrest/CPR >30 min without ROSC, active severe bleeding, recent NSGY procedure/intracranial bleed (<10 days)`,`Sweep gas controls CO2 removal; blood flow controls O2 delivery; target venous saturation (SvO2) of circuit >70%`]},assessment:`#ECMO Assessment
Indication:
[ ] VV-ECMO (respiratory): P:F <80 despite optimization [ ] / Pplat >30 cmH2O [ ] / pH <7.25 + pCO2 >60 [ ]
[ ] VA-ECMO (cardiac): refractory cardiogenic shock [ ] / massive PE [ ] / cardiac arrest (ECPR) [ ]
Absolute contraindications checked:
[ ] Non-recoverable multi-organ failure  [ ] Unwitnessed arrest/CPR >30 min without ROSC
[ ] Active severe bleeding  [ ] Recent NSGY/intracranial bleed <10 days
VA specific: BMI >40 [ ] / aortic dissection [ ] / severe AI [ ] / ESLD/ESRD [ ]
VV specific: severe RV or LV failure [ ]
Current circuit parameters: Blood flow *** L/min | Sweep gas *** L/min | FiO2 circuit ***
SvO2 (pre-oxygenator): ***% | SvO2 (post-oxygenator): ***%`,ddx:`VV-ECMO INDICATIONS (pulmonary): severe ARDS (P:F <80), bridge to lung transplant, bilateral PNA with respiratory failure, severe status asthmaticus failing MV
VA-ECMO INDICATIONS (cardiac): refractory cardiogenic shock (post-MI, myocarditis, massive PE), bridge to transplant or LVAD, ECPR (cardiac arrest — especially in-hospital), post-cardiotomy shock
ECPR CONSIDERATIONS: In-hospital cardiac arrest preferred (evidence stronger); ECMO team should be activated within 5-10 min of arrest if refractory; out-of-hospital arrest — limited evidence, individualized
CANNULATION CONFIGURATIONS:
• VV standard: femoral vein drainage → R IJ return (or bicaval dual-lumen single cannula via R IJ)
• VA standard: femoral vein drainage → femoral artery return (with distal perfusion catheter to ipsilateral leg)
• Harlequin syndrome (VA): north-south problem — upper body (including heart/brain) receives unoxygenated blood; requires vent optimization or V-AV conversion`,workup:`• ABG every 4-6h on ECMO: titrate sweep gas (CO2) and FiO2/flow (O2)
• ACT (activated clotting time) 180-200s or anti-Xa: UFH anticoagulation monitoring (continuous UFH required to prevent circuit thrombosis)
• CBC daily: hemolysis (pink urine, LDH ↑, Hgb ↓ → circuit problem)
• CXR daily: cannula position, lung recruitment
• Echo (TTE/TEE): LV distension (VA-ECMO), cardiac recovery, cannula positions
• Creatinine, LFTs: end-organ function — determine reversibility
• Distal perfusion: lower extremity pulses, ABI, limb compartment pressure (VA-ECMO)`,management:`CIRCUIT MANAGEMENT:
• Blood flow (Q): target 60-80% of cardiac output; controls O2 delivery
• Sweep gas flow: controls CO2 removal (↑ sweep gas = ↓ pCO2); start at 4-6 L/min, titrate by ABG
• Circuit FiO2: usually 1.0 (pre-oxygenator)
• Anticoagulation: UFH to maintain ACT 180-200s or anti-Xa 0.3-0.5 IU/mL; no bolus on initiation
LUNG REST (VV-ECMO): permit low-frequency ventilation — VT 2-4 mL/kg, RR 4-12, FiO2 0.3, PEEP 8-10 (prevents VILI)
VA-ECMO — LV UNLOADING:
• Add IABP or Impella (ECPELLA): unloads LV if distending (avoid pulmonary edema)
• Monitor for Harlequin syndrome: northward migration of unoxygenated blood → may need VV or V-AV conversion
COMPLICATIONS:
• Thrombosis: circuit or cannula clot → ACT/anti-Xa subtherapeutic; visual circuit inspection; replace circuit if significant
• Hemolysis: ↑ circuit pressure, kinked cannula, air in circuit — check positioning; reduce RPM
• Limb ischemia (VA-ECMO): place distal perfusion catheter (3-5 French, ipsilateral femoral artery) prophylactically
• Bleeding: supratherapeutic anticoagulation, DIC → reduce UFH, blood products
WEANING (VV-ECMO): ↓ sweep gas (watch pCO2) and blood flow while monitoring P:F and work of breathing — trial clamp x2-4h if P:F >150 on ECMO
WEANING (VA-ECMO): ↓ blood flow to 2 L/min (minimum); cardiac output monitoring (watch for dependence); echo for LV recovery`,monitoring:`• Continuous ACT or anti-Xa q4-6h; circuit visual inspection every shift for clot
• Hemolysis markers: LDH, Hgb, haptoglobin, urine for myoglobin q12h
• Lower limb pulses and ABI q4h (VA-ECMO); distal perfusion catheter flow q shift
• Daily echo: cardiac recovery assessment (VA), LV distension (VA), RV function (VV)
• Daily 'ECMO rounds': blood flow, sweep gas, anticoagulation, complications, weaning readiness`,disposition:`• ICU mandatory: all ECMO patients — 24/7 intensivist, perfusionist/ECMO specialist
• ECMO consult at MGH: early — STAT App, Directory "ECMO Consult", p24252, 857-310-0335
• Bridge decision: daily reassessment — bridge to recovery, transplant, LVAD, or palliation`},{id:`icu-sedation-analgesia`,system:`pulm`,title:`ICU Sedation, Analgesia, and Delirium (ABCDEF Bundle)`,keywords:[`ICU sedation`,`RASS`,`Richmond agitation`,`propofol`,`dexmedetomidine`,`ketamine`,`fentanyl`,`hydromorphone`,`delirium ICU`,`CAM-ICU`,`A2F bundle`,`SAT`,`SBT`,`ABCDEF bundle`,`ICU pain`,`analgo-sedation`,`spontaneous awakening trial`],source:{chapter:`Pulmonary & Critical Care`,section:`Sedation`,pages:`55–56`,authors:`Cassandra Fiorino`,keyFacts:[`ICU triad: pain, agitation, delirium — treat in that order; analgesia first (analgo-sedation), then assess agitation need before adding sedative`,`Target RASS 0 to -2 (alert/calm to light sedation); avoid deeper sedation unless specific indication (NMB, severe ICP, refractory dyssynchrony)`,`Propofol: first-line ICU sedative; fast on/off; respiratory depressant (requires ETT); monitor TGs >48h; PRIS risk if >48h high dose`,`Dexmedetomidine (Precedex): α2-agonist; reduces delirium, earlier extubation; less respiratory depression (can use non-intubated); negative chronotropy (↓HR); idiosyncratic fever possible`,`A2F Bundle reduces ICU mortality and delirium: Assess/Prevent/Manage Pain, Both SAT+SBT, Choice of sedation, Delirium, Early Mobility, Family engagement`]},assessment:`#ICU Sedation / Analgesia / Delirium
RASS: *** (target 0 to −2 for most; −3 to −5 only if NMB or refractory dyssynchrony)
Pain (CPOT for non-verbal): *** / 8 | NRS (verbal): *** / 10 (goal ≤3)
Delirium (CAM-ICU): [ ] Positive (delirious)  [ ] Negative  [ ] Unable to assess
Delirium features: [ ] Acute onset/fluctuating  [ ] Inattention  [ ] Disorganized thinking  [ ] Altered consciousness
Current sedative: *** (dose/route) | Current analgesic: *** (dose/route)
A2F Bundle progress:
A — Pain assessed and managed: [ ] Yes  B — SAT/SBT daily: [ ] Yes
C — Sedation choice optimized: [ ] Yes  D — Delirium monitored: [ ] Yes
E — Early mobility: [ ] Yes  F — Family engaged: [ ] Yes`,ddx:`AGITATION/DELIRIUM IN ICU:
• Hyperactive delirium: agitation, pulling at lines, combative — often ICU psychosis or withdrawal; haloperidol
• Hypoactive delirium: quiet, somnolent, looks like drowsiness — easily missed; worse prognosis than hyperactive
• Delirium precipitants: pain, medications (BZDs, opioids, steroids, anticholinergics), metabolic (Na, glucose, uremia, hepatic), infection, hypoxia, sleep deprivation, immobility, ICU environment
• Withdrawal: alcohol/BZD withdrawal (CIWA-Ar), opioid withdrawal, clonidine/dexmedetomidine withdrawal
• ICU-acquired weakness: prolonged deep sedation + NMB + immobility → prevent with early mobility
PAIN ASSESSMENT:
• Verbal: NRS 0-10; target ≤3
• Non-verbal (intubated): CPOT (Critical-Care Pain Observation Tool) 0-8; target ≤2
• Behavioral Pain Scale (BPS): 3-12; used in sedated/paralyzed patients`,workup:`• CAM-ICU assessment every shift: fluctuating mental status + inattention + (disorganized thinking OR altered consciousness) = positive
• Review medication list: BZDs (benzodiazepines are most impactful modifiable risk factor for ICU delirium — avoid)
• BMP: Na, K, glucose, BUN/Cr (metabolic causes)
• ABG: hypoxia/hypercapnia contributing to AMS
• LFTs: ketamine DILI risk; propofol pancreatitis risk (monitor TGs)
• Review sleep/wake cycle, restraint use, sensory deprivation (lights/glasses/hearing aids)`,management:`ANALGESICS (analgesia-first approach):
• Fentanyl: IV 25-100 mcg/h infusion; short-acting; safe in renal failure (preferred to morphine in ICU); PCA available
• Hydromorphone: IV 0.2-0.4 mg q3-4h PRN or 0.2-0.4 mg/h infusion; more potent than morphine
• Ketamine: 5-20 mcg/kg/min IV; analgesic + sedative; bronchodilatory; minimal respiratory depression; avoid if seizure risk; monitor LFTs (DILI)
• NSAIDs/ketorolac (adjunct): reduces opioid requirements; caution in AKI, bleeding risk
SEDATIVES:
• Propofol 5-50 mcg/kg/min IV (first-line): fast on/off; vasodilatory/cardiac depressant; monitor TGs q48h
  - PRIS (Propofol Infusion Syndrome): rare but fatal — rhabdo + AGMA + ↓HR + hepatic/renal failure; risk if >48h and high dose
• Dexmedetomidine 0.2-0.7 mcg/kg/h IV (adjunct/preference in non-intubated): ↓delirium + earlier extubation; negative chronotropy (bradycardia); slow onset/offset
• Midazolam 1-5 mg/h IV: avoid in most ICU patients (↑delirium); short courses acceptable; tolerance develops quickly
• Ketamine (sedative dose 5-20 mcg/kg/min): adjunct; preserves airway reflexes; useful in bronchospasm, hemodynamic instability
• Benzodiazepines: AVOID as primary ICU sedation (↑delirium, ↑mortality); exception: alcohol/BZD withdrawal
DELIRIUM MANAGEMENT:
• Non-pharmacologic FIRST: reorientation, sleep hygiene (lights off at night, ear plugs), early mobility, remove unnecessary restraints, sensory aids (glasses/hearing aids), family visits
• Haloperidol: 1-5 mg IV q6-8h PRN (or 0.5-1 mg for elderly) — does NOT reduce delirium duration but manages agitation; monitor QTc
• Quetiapine: 25-50 mg PO BID (sedating, useful in hyperactive delirium); monitor QTc
• Dexmedetomidine: if RASS +1 to −1; reduces emergence delirium; can treat agitation without causing deep sedation
A2F BUNDLE: implement all 6 elements daily — significantly reduces ICU mortality, delirium, and ICU-acquired weakness`,monitoring:`• RASS every 4h; target 0 to −2; document deepest and most common RASS each shift
• CAM-ICU every shift
• Pain assessment before each procedure, q4h, and with any agitation
• TGs every 48h on propofol; LFTs with ketamine infusions (every 24-48h)
• Spontaneous Awakening Trial (SAT): daily — hold all sedation/analgesia; assess RASS, then SAT→SBT paired`,disposition:`• ICU: all intubated patients on continuous sedation
• SAT/SBT daily readiness: optimize timing of liberation from MV — sedation minimization is critical
• Psychiatry: hyperactive delirium not responding to standard measures, ICU psychosis, pre-existing psychiatric conditions`},{id:`vasopressors-inotropes`,system:`pulm`,title:`Vasopressors and Inotropes`,keywords:[`vasopressors`,`norepinephrine`,`vasopressin`,`phenylephrine`,`epinephrine`,`dopamine`,`dobutamine`,`milrinone`,`inotropes`,`septic shock`,`cardiogenic shock`,`MAP`,`angiotensin II`,`peripheral vasopressor`,`pressor dosing`],source:{chapter:`Pulmonary & Critical Care`,section:`Vasopressors`,pages:`60`,authors:`Kristin Harrington`,keyFacts:[`Norepinephrine (Levophed): first-line for septic, cardiogenic, and hypovolemic shock — α1 > β1; ↑SVR + ↑CO; start 0.1-0.15 mcg/kg/min; max 0.75 mcg/kg/min`,`Peripheral vasopressors: can temporize with NE <10 mcg/min or phenylephrine <150 mcg/min peripherally for <72h — requires 2 PIVs, ≤20G, with blood return, in upper extremity; check q2h for extravasation`,`Vasopressin (0.03-0.04 U/min): acts at V1 receptors; add to NE in refractory septic shock — allows NE dose reduction; do NOT use for cardiogenic shock (↑afterload)`,`Dobutamine: β1 > β2 agonist; inotrope/vasodilator; used in cardiogenic shock with low CO; dose 2.5-10 mcg/kg/min; causes tachycardia and arrhythmias`,`Angiotensin II (ATII, Giapreza): vasopressor via AT1 receptor; add-on in refractory vasodilatory shock; particularly useful with RAS inhibitor therapy or AKI`]},assessment:`#Vasopressors and Inotropes
Shock type: [ ] Distributive/Septic  [ ] Cardiogenic  [ ] Hypovolemic  [ ] Obstructive
Hemodynamics: MAP *** (goal ≥65) | HR *** | BP *** | CI *** | CVP *** | SvO2 ***
Volume status optimized: [ ] Yes  [ ] No — IVF challenge first
Current pressors/inotropes:
1. *** at *** mcg/kg/min  2. *** at ***  3. *** at ***
Access: [ ] Central venous catheter  [ ] IO  [ ] Peripheral (≤20G, blood return, upper extremity, <72h) — q2h checks
Extravasation precautions: *** | Last access check: ***`,ddx:`VASOPRESSOR SELECTION BY SHOCK TYPE:
• Distributive/Septic: NE first → add vasopressin 0.03 U/min → add phenylephrine or epinephrine → ATII (refractory)
• Cardiogenic: NE first → add dobutamine (if low CO) → avoid vasopressin (↑afterload); epinephrine as bridge; MCS (Impella) preferred for dose reduction
• Hypovolemic: volume first; NE as bridge until volume replaced
• Obstructive (PE/tamponade): treat underlying cause; NE to maintain MAP while preparing intervention
RECEPTOR PROFILE REVIEW:
• α1 only: phenylephrine — pure vasoconstriction; reflex bradycardia; ↑SVR with ↓CO
• α1 > β1: norepinephrine — ↑SVR + modest ↑CO; first-line for most shock
• β1 > β2: dobutamine — inotropy + mild vasodilation; ↓SVR; ↑CO; avoid in hypovolemia
• β1 + β2 + α1: epinephrine — potent inotrope + vasopressor; tachycardia + arrhythmias; ↑lactate (splanchnic vasoconstriction)
• V1: vasopressin — splanchnic vasoconstriction; no tachycardia; ideal add-on in septic shock
• PDE inhibitor: milrinone — ↑cAMP → ↑CO + ↓PVR; useful in RV failure/pHTN; long half-life (difficult to titrate)`,workup:`• MAP, UOP (≥0.5 mL/kg/h), lactate, ScvO2/SvO2 (goal >70%) — targets of resuscitation
• POCUS/TTE: LV/RV function, IVC (volume assessment), pericardial effusion
• Lactic acid every 2-4h: trending down = adequate perfusion; persistently elevated = inadequate resuscitation or distributive etiology
• ABG: assess oxygenation, ventilation, metabolic derangements
• BMP: vasopressin effect on water retention (hyponatremia); electrolytes`,management:`FIRST-LINE:
• Norepinephrine (NE): start 0.1-0.15 mcg/kg/min; titrate by 0.05-0.1 q5-15 min; max 0.75 mcg/kg/min
  - Peripheral route (<10 mcg/min): 2 PIVs ≤20G with blood return, upper extremity AC or more proximal; check q2h for extravasation
ADD-ON IN REFRACTORY SEPTIC SHOCK:
• Vasopressin 0.03 U/min (fixed dose): allows NE dose reduction; do NOT use as primary pressor; avoid in cardiogenic shock
• Phenylephrine 0.5-2 mcg/kg/min: pure vasopressor; reflex bradycardia; avoid in cardiogenic shock or low CO
• Angiotensin II 5-80 ng/kg/min: add in refractory vasodilatory shock; expensive but effective
INOTROPES (cardiogenic shock/low CO):
• Dobutamine 2.5-10 mcg/kg/min: β1 >> β2; ↑CO, ↓SVR, ↑HR; tachycardia limits use
• Milrinone 0.125-0.75 mcg/kg/min: PDE inhibitor; ↑CO + ↓PVR; useful in pHTN + RV failure; long half-life (difficult to titrate rapidly); adjust for CrCl
• Epinephrine 0.05-0.2 mcg/kg/min: β > α at low doses; potent inotropy + chronotropy; ↑lactate via splanchnic vasoconstriction
PERIPHERAL VASOPRESSOR PROTOCOL:
• Temporize only: NE <10 mcg/min or phenylephrine <150 mcg/min for <72h
• 2 PIVs ≤20G with blood return, upper extremity (AC or more proximal)
• Extravasation → phentolamine 5-10mg in 10mL NS subcutaneously into affected area; apply dry warm compress
WEANING: reduce dose by 20-25% every 15-30 min as hemodynamics allow; wean 1 pressor at a time; NE last`,monitoring:`• MAP every 5-15 min while adjusting; target ≥65 mmHg (higher if chronic hypertension: ≥75-80)
• UOP hourly with Foley catheter: goal 0.5 mL/kg/h
• Lactic acid every 2-4h; target trending to <2 mmol/L
• Distal extremity perfusion (peripheral route): q2h skin assessment; educate nursing to report
• Troponin and BNP: ongoing myocardial injury from shock`,disposition:`• ICU mandatory: all patients requiring vasopressors
• Central venous access (CVC or IO): obtain as soon as possible; do not maintain peripheral indefinitely
• Cardiology/Critical care: refractory cardiogenic shock → MCS (Impella, ECMO)`},{id:`toxicology-critical-care`,system:`pulm`,title:`Toxicology — Critical Care Approach`,keywords:[`toxicology`,`overdose`,`poisoning`,`antidote`,`acetaminophen overdose`,`opioid overdose`,`carbon monoxide`,`salicylate`,`TCA overdose`,`acetylcholinesterase`,`antidote NAC`,`toxidrome`,`poison control`,`ingestion`],source:{chapter:`Pulmonary & Critical Care`,section:`Toxicology & Lung Transplant`,pages:`61`,authors:`Rachel Ancar, Cassandra Fiorino, Daniel Fulop`,keyFacts:[`Toxidrome recognition: opioid (miosis/bradypnea/coma), cholinergic (SLUDGE/DUMBELS), anticholinergic (hot/dry/flushed/tachycardia/mydriasis/delirium), sympathomimetic (↑HR/BP/temp/mydriasis/diaphoresis), serotonin syndrome (clonus/hyperreflexia/agitation)`,`Poison Control: 1-800-222-1222 — call for all significant ingestions; toxicology consult available 24/7`,`Acetaminophen: NAC (N-acetylcysteine) for ALL APAP toxicity — IV: 150mg/kg over 1h → 50mg/kg over 4h → 100mg/kg over 16h; even effective late (>24h) in hepatic failure`,`Salicylate toxicity: primary respiratory alkalosis + high AG metabolic acidosis; tinnitus; alkalinize urine (pH >7.5 with bicarb) — hemodialysis if severe (level >100 mg/dL, AKI, AMS, CNS)`,`TCA overdose: wide QRS (>120ms), QRS >160ms = high risk VT/VF; sodium bicarbonate 1-2 mEq/kg IV bolus (narrows QRS via Na channel competitive inhibition); avoid physostigmine`]},assessment:`#Toxicology Assessment
Substance(s): *** | Time of ingestion: *** | Amount: ***
Toxidrome pattern:
[ ] Opioid: miosis + bradypnea + coma (↓RR, pinpoint pupils)
[ ] Cholinergic (SLUDGE): Salivation/Lacrimation/Urination/Defecation/GI cramps/Emesis + bradycardia
[ ] Anticholinergic: hot/dry/flushed + tachycardia + mydriasis + urinary retention + delirium
[ ] Sympathomimetic: tachycardia/HTN/hyperthermia/mydriasis/diaphoresis + agitation
[ ] Serotonin: clonus + hyperreflexia + agitation + diaphoresis + tremor
[ ] Mixed/unknown: ***
Vital signs: T *** / HR *** / BP *** / RR *** / SpO2 ***
EKG: QRS *** ms / QTc *** ms / rhythm ***
Acetaminophen level (ALWAYS check): *** mcg/mL at ___ h post-ingestion
Salicylate level: *** | ASA use: ***
Poison Control called: [ ] Yes  [ ] No — call 1-800-222-1222`,ddx:`TOXIDROME SUMMARY:
• Opioid: miosis, bradypnea, ↓consciousness, hypotension, bradycardia — naloxone reversal
• Cholinergic (OP/carbamate pesticides, nerve agents): SLUDGE+DUMBELS (Diarrhea, Urination, Miosis, Bradycardia, Emesis, Lacrimation, Salivation) — atropine + pralidoxime
• Anticholinergic (TCA, diphenhydramine, scopolamine): "Blind as a bat, mad as a hatter, hot as a hare, red as a beet, dry as a bone" — benzodiazepines for agitation
• Sympathomimetic (cocaine, amphetamines, MDMA): tachycardia, HTN, hyperthermia, diaphoresis, mydriasis — benzodiazepines; avoid BBs (unopposed α)
• Serotonin syndrome (see NMS/Serotonin template): Hunter criteria; cyproheptadine
• Sedative/hypnotic: similar to opioid but no reversal; BZDs → flumazenil (use caution — seizures in chronic users)
COMMON SPECIFIC INGESTIONS:
• Acetaminophen: may be asymptomatic early; hepatotoxicity peaks 72-96h; Rumack-Matthew nomogram for risk
• Salicylates: tinnitus, N/V, mixed acid-base; do NOT induce emesis; alkalinize + HD if severe
• TCAs: QRS widening + QTc prolongation + anticholinergic features + hypotension; sodium bicarb
• Beta-blockers: bradycardia + hypotension; glucagon 3-10 mg IV; high-dose insulin (1 U/kg bolus + infusion); calcium
• Calcium channel blockers (CCB): bradycardia + hypotension; calcium gluconate 3-6 g IV; high-dose insulin (same as BB); consider lipid emulsion therapy`,workup:`• Acetaminophen level (check in ALL ingestions — often co-ingested), ASA level, EtOH level
• Urine toxicology screen (UDS): immunoassay (misses fentanyl, novel opioids, some stimulants) — confirm with mass spectrometry
• EKG: QRS (TCA/CCB/sodium channelopathy), QTc (antipsychotics, methadone), ventricular dysrhythmia
• BMP: AG (MUDPILES — salicylates, methanol, ethylene glycol, DKA, uremia), renal function (elimination), glucose
• ABG: acid-base status; salicylate (mixed respiratory alkalosis + AGMA)
• LFTs: baseline + q24-48h for APAP hepatotoxicity; peak at 72-96h
• Osmolal gap (measured Osm − calculated Osm): >20 = toxic alcohol (methanol, ethylene glycol, isopropanol)`,management:`GI DECONTAMINATION:
• Activated charcoal 1 g/kg (max 50g): within 1-2h of ingestion if airway protected + bowel sounds; APAP, salicylates, TCA, many pills; NOT for caustics, metals, hydrocarbons
• Gastric lavage: rarely used; consider within 60 min of life-threatening ingestion if intubated
• Whole bowel irrigation (GoLYTELY): sustained-release medications, body packers, iron, lithium
SPECIFIC ANTIDOTES:
• Opioid → Naloxone 0.4-2 mg IV/IM/IN q2-3 min; infusion 2/3 of reversal dose per hour for long-acting
• APAP → NAC: 150mg/kg IV over 1h → 50mg/kg over 4h → 100mg/kg over 16h; continue until INR <2 and LFTs improving
• Methanol/ethylene glycol → Fomepizole 15mg/kg IV; HD if severe
• Organophosphate → Atropine 2-4mg IV q5-10 min until secretions dry; pralidoxime 1-2g IV over 15-30 min (within 24-48h of exposure)
• TCA → Sodium bicarbonate 1-2 mEq/kg IV bolus; repeat if QRS >120ms or hypotension persists
• Beta-blocker/CCB → Glucagon 3-10mg IV; HIGH-DOSE INSULIN (1 U/kg bolus + 0.5-1 U/kg/h infusion) + dextrose; calcium gluconate; lipid emulsion 1.5 mL/kg IV
• Salicylate → NaHCO3 to urine pH >7.5; HD if level >100 mg/dL, AMS, AKI, pulmonary edema
• CO poisoning → 100% O2 (3 hours); HBO (hyperbaric oxygen) if loss of consciousness, CO >25%, end-organ damage, pregnancy
SUPPORTIVE CARE: airway (intubate if AMS or unable to protect), hemodynamic support (fluids + vasopressors), temperature management, seizure management (BZDs), cardiac monitoring`,monitoring:`• Serial EKGs: every 1-2h for QRS and QTc-prolonging ingestions; resolve to normal before discharge/de-monitoring
• Acetaminophen levels at 4h post-ingestion (plot on Rumack nomogram); LFTs every 12-24h
• Salicylate levels every 2-4h until declining; urine pH on alkalinization (target >7.5)
• Blood glucose every 1-2h during high-dose insulin therapy
• Lactate/creatinine: toxic alcohol ingestion, rhabdomyolysis`,disposition:`• ICU: hemodynamic instability, AMS, intubation, significant cardiac arrhythmia, ongoing organ toxicity (hepatic failure)
• Toxicology consult (all significant ingestions) + Poison Control 1-800-222-1222
• Psychiatry: all intentional overdoses — capacity assessment + psychiatric evaluation before discharge
• Transplant evaluation: APAP-induced fulminant hepatic failure (King's College Criteria met)`},{id:`abdominal-pain`,system:`gi`,title:`Abdominal Pain — Approach`,keywords:[`abdominal pain`,`acute abdomen`,`abdominal pain approach`,`epigastric pain`,`RUQ pain`,`LLQ pain`,`RLQ pain`,`cannot miss diagnosis`,`mesenteric ischemia`,`appendicitis`,`McBurney`,`red flags abdominal`],source:{chapter:`Gastroenterology`,section:`Abdominal Pain`,pages:`65`,authors:`Sophie Pan, Shawna Walsh`,keyFacts:[`Cannot miss: mesenteric infarct, bowel perforation, extra-intestinal hemorrhage, SBO, ectopic pregnancy, MI/aortic dissection`,`Red flags: HDUS, rigidity, guarding, rebound tenderness, pain out of proportion to exam, absent bowel sounds, gross distension, bilious emesis, hematemesis, hematochezia`,`Image-negative pain: metabolic (DKA/Ca/uremia), meds/toxins (EtOH/opioids/cocaine), functional (IBS/functional dyspepsia), episodic (sphincter of Oddi/passed stone)`,`Special populations: immunosuppressed (blunted signs), elderly (atypical presentations, lower threshold for imaging), SCD (VOE vs acute abdomen)`,`Initial labs: BMP, Ca, Mg, CBC w/ diff, LFTs, lipase, lactate, ESR/CRP, UA, β-hCG, troponin, coags, T&S`]},assessment:`#Abdominal Pain Assessment
Location: *** | Character: [ ] Sharp  [ ] Crampy  [ ] Colicky  [ ] Dull/aching
Onset: [ ] Sudden  [ ] Gradual  |  Duration: ***  |  Radiation: ***
Modifying factors: *** | Worse with: ***  |  Better with: ***
Associated: N/V [ ] / Fever [ ] / Diarrhea [ ] / Constipation [ ] / Jaundice [ ] / Wt loss [ ] / GI bleed [ ]
Red flags: HDUS [ ] / Rigidity/rebound [ ] / Pain out of proportion [ ] / Absent BS [ ] / Bilious emesis [ ]
Exam: Tenderness location *** / Guarding [ ] / Rebound [ ] / Distension [ ] / Peritoneal signs [ ]
McBurney's [ ] / Rovsing's [ ] / Murphy's [ ] / Obturator [ ] / Psoas [ ] / DRE: ***`,ddx:`RIGHT UPPER QUADRANT: Hepatitis, abscess, Budd-Chiari, portal vein thrombosis, Fitz-Hugh-Curtis (perihepatitis from GC/Chlamydia); biliary: cholelithiasis/colic, cholecystitis, cholangitis, Sphincter of Oddi; Extra-abd: PE, PNA, CHF
EPIGASTRIC: Pancreatitis, gastric pathology (GERD/PUD/gastritis/gastroparesis/functional dyspepsia); mesenteric ischemia; esophagitis; Extra-abd: MI, aortic dissection
LEFT UPPER QUADRANT: Splenic (splenomegaly/abscess/infarction/rupture/trauma); gastritis; PUD
PERIUMBILICAL: SBO (early), AAA, mesenteric ischemia, appendicitis (early), gastroenteritis, umbilical hernia
RIGHT LOWER QUADRANT: Appendicitis (McBurney's point), cecal/terminal ileal pathology (CD), pelvic (ovarian cyst/torsion/ectopic/PID — in females), psoas abscess, inguinal hernia
LEFT LOWER QUADRANT: Diverticulitis, colorectal CA, sigmoid pathology, pelvic (same as RLQ)
SUPRAPUBIC: UTI/cystitis, prostatitis, urinary retention, gynecologic, hernia
IMAGE-NEGATIVE: DKA, hypercalcemia, uremia, acute intermittent porphyria, heavy metals, EtOH/opioid/cocaine, IBS, functional dyspepsia, Familial Mediterranean Fever, hereditary angioedema`,workup:`• BMP, Ca, Mg, CBC w/ diff, LFTs, lipase, lactate, ESR/CRP, UA with micro, β-hCG (ALL reproductive-age females), troponin (epigastric + cardiac risk factors)
• CT abdomen/pelvis with IV ± PO contrast: first-line for most acute undifferentiated abdominal pain (HDUS or peritoneal signs → STAT)
  - CTA for vascular pathology (mesenteric ischemia, AAA, aortic dissection)
• RUQ ultrasound: biliary pathology (cholecystitis, cholelithiasis, CBD dilation)
• KUB: limited use; consider for obstruction or free air if CT unavailable
• EKG: exclude MI presenting as epigastric pain (especially inferior STEMI)
• Pelvic ultrasound (transvaginal preferred): reproductive-age females with pelvic/lower abd pain
• Specific tests: H. pylori stool Ag (epigastric + dyspepsia), amylase/lipase, blood cultures (fever + peritoneal signs)`,management:`EMERGENT: HDUS/peritoneal signs/acute abdomen → STAT surgery consult + IVF + NPO + pain control + broad-spectrum antibiotics
MESENTERIC ISCHEMIA (pain out of proportion + vascular RFs): CTA abdomen → surgery/IR consult; heparin anticoagulation; bowel rest
SBO: NGT decompression + IVF + bowel rest; gastrografin challenge for adhesive SBO (converts 74% avoiding surgery); surgery if high-grade, complete, ischemic signs
APPENDICITIS: urgent surgery consult; antibiotics (pip-tazo or CTX/metronidazole) — consider antibiotics-first for uncomplicated
BILIARY: see Cholecystitis/Cholangitis template
DIVERTICULITIS: uncomplicated (mild) → PO antibiotics outpatient (ciprofloxacin + metronidazole OR amoxicillin-clavulanate); complicated (abscess/perforation/fistula) → CT-guided drainage or surgery
PAIN MANAGEMENT: IV ketorolac 15-30mg or morphine/hydromorphone PRN; adequate analgesia does NOT mask surgical diagnosis — treat pain`,monitoring:`• Serial abdominal exams every 4-6h; immediate reassessment if pain worsens
• Temperature, WBC, lactate trend (ischemia/sepsis monitoring)
• Recheck β-hCG if ectopic pregnancy initially dismissed`,disposition:`• OR: free perforation, bowel ischemia, appendicitis, ruptured ectopic
• Surgery consult: peritoneal signs, suspected SBO, diverticulitis with complications
• GI consult: biliary, hepatic, IBD flare, GI bleed
• Discharge with close follow-up: uncomplicated diverticulitis, mild biliary colic with outpatient ultrasound planned`},{id:`gerd-pud`,system:`gi`,title:`GERD / Peptic Ulcer Disease`,keywords:[`GERD`,`gastroesophageal reflux`,`peptic ulcer disease`,`PUD`,`H pylori`,`Helicobacter pylori`,`heartburn`,`PPI`,`proton pump inhibitor`,`Barrett esophagus`,`dyspepsia`,`EGD`,`triple therapy`,`vonoprazan`],source:{chapter:`Gastroenterology`,section:`GERD & Peptic Ulcer Disease`,pages:`66`,authors:`Sophie Pan, Shawna Walsh`,keyFacts:[`GERD alarm symptoms (require EGD): dysphagia/odynophagia, weight loss, GIB, iron deficiency anemia, persistent vomiting, anorexia, new onset age ≥60`,`PPI first-line: start 20mg omeprazole 30 min before AM meal; if no response in 4-8 weeks → uptitrate to 40mg or BID; taper by 50%/week when discontinuing to prevent rebound hypersecretion`,`H. pylori testing: stool antigen or urea breath test preferred (not serology — cannot distinguish active vs past); PPI and antibiotics cause false negatives — hold 2 weeks before testing`,`H. pylori treatment (first-line): quadruple therapy — PPI BID + bismuth 300mg QID + tetracycline 500mg QID + metronidazole 500mg QID x14 days (Pylera combination pill available)`,`Barrett's esophagus surveillance: screen in GERD + ≥3 risk factors (>50yo, white, male, central obesity, tobacco, FH Barrett's/esophageal AdenoCA); EGD interval based on dysplasia grade`]},assessment:`#GERD / Peptic Ulcer Disease
GERD symptoms: heartburn [ ] / regurgitation [ ] / sour taste [ ] / chronic cough [ ] / hoarseness [ ] / chest pain [ ]
Alarm features: dysphagia [ ] / odynophagia [ ] / weight loss [ ] / GIB [ ] / IDA [ ] / persistent vomiting [ ] / age ≥60 (new onset) [ ]
→ Alarm features present = EGD indicated
PUD symptoms: epigastric burning pain ± relief with food/antacids [ ] | N/V [ ] | GIB (melena/hematemesis) [ ]
H. pylori tested: [ ] Yes (result: ***)  [ ] No  | NSAID use: [ ] Yes  [ ] No
Current PPI: *** (dose/timing)  |  Duration of symptoms: ***
Barrett's risk factors: >50yo [ ] / male [ ] / white [ ] / central obesity [ ] / tobacco [ ] / FH Barrett's or adenoCA [ ]`,ddx:`GERD DDx: Eosinophilic esophagitis (EoE — dysphagia + GERD sx + food impaction; >15 eos/HPF on biopsy), reflux hypersensitivity (normal acid exposure time + symptom association), functional dyspepsia, peptic ulcer, achalasia, cardiac (chest pain), laryngopharyngeal reflux
PUD DDx: GERD, biliary disease, gastric CA (alarm symptoms → EGD), celiac, chronic pancreatitis, functional dyspepsia, medication-related (NSAIDs, bisphosphonates, sirolimus), ZES (Zollinger-Ellison — multiple/refractory ulcers + diarrhea + hypercalcemia)
H. PYLORI COMPLICATIONS: PUD, gastric adenocarcinoma (3-4x risk), MALT lymphoma, IDA (iron malabsorption)`,workup:`NO ALARM FEATURES:
• Trial 8-week PPI at standard dose; H. pylori "test-and-treat" if symptoms not responsive
• H. pylori testing: stool antigen (preferred, Sn 94%, Sp 97%) or urea breath test; NOT serology
  - Hold PPI x2 weeks and antibiotics x4 weeks before testing for accuracy
ALARM FEATURES:
• EGD with biopsy: exclude malignancy; assess for H. pylori (rapid urease test on biopsy), Barrett's esophagus, complications
• If EGD negative + persistent symptoms → ambulatory pH monitoring (24h) or pH-impedance testing (reflux hypersensitivity vs. GERD vs. functional)
• Esophageal manometry: if dysphagia + negative EGD (achalasia, esophageal spasm)
REFRACTORY GERD (no response after 8 weeks high-dose PPI BID):
• Check PPI compliance and timing; consider ambulatory pH monitoring; re-evaluate diagnosis`,management:`GERD:
• Lifestyle: weight loss (BMI <25), elevate HOB 6-8 inches, avoid eating 2-3h before bed, left lateral decubitus, tobacco cessation, ↓ coffee/alcohol/fatty/spicy foods
• PPI (first-line): omeprazole 20mg PO qday 30 min before breakfast; uptitrate to 40mg → 40mg BID if inadequate response
• H2RA (famotidine 10-20mg BID): adjunct at night with PPI; tachyphylaxis common after weeks
• Taper PPI when discontinuing: reduce dose by 50%/week to prevent rebound hypersecretion
• Vonoprazan (PCAB — newer alternative): 10-20mg qday; FDA-approved alternative to PPI
• Severe/refractory: laparoscopic fundoplication (superior to medical therapy for some patients; NEJM 2019;381:1513)
• Barrett's esophagus: indefinite high-dose PPI; EGD surveillance q3-5 years (no dysplasia); q6-12 months (low-grade dysplasia); endoscopic treatment (eradication) if high-grade dysplasia
H. PYLORI ERADICATION (first-line):
• Quadruple therapy x14 days: PPI BID + bismuth subcitrate 300mg QID + tetracycline 500mg QID + metronidazole 500mg QID; OR Pylera (combination pill) BID with each meal + HS
• Clarithromycin-based triple: avoid as first-line (rising clarithromycin resistance >15-20% in US)
• Test for eradication: stool antigen or urea breath test ≥4 weeks after completion
PUD:
• PPI (omeprazole 20-40mg qday) x4-8 weeks; longer if large ulcer, continued NSAID use, or H. pylori
• NSAID-induced PUD: discontinue NSAIDs; add PPI if NSAIDs must be continued (NEJM 2005;352:238); misoprostol alternative
• Recheck EGD: all gastric ulcers at 8-12 weeks (exclude malignancy); duodenal ulcers — only if not healing or complex`,monitoring:`• H. pylori eradication: retest at ≥4 weeks post-treatment (stool antigen or UBT)
• PUD healing: EGD at 8-12 weeks for gastric ulcers — rule out malignancy
• Barrett's: EGD q3-5 years (no dysplasia); q6-12 months (low-grade); endoscopic eradication if high-grade`,disposition:`• GI consult: alarm features, refractory GERD, Barrett's with dysplasia, ZES, complicated PUD (perforation/hemorrhage)
• Surgery referral: surgical fundoplication for refractory GERD without Barrett's
• Outpatient: uncomplicated GERD/PUD — PPI trial, H. pylori test-and-treat, lifestyle modification`},{id:`nausea-vomiting-gastroparesis`,system:`gi`,title:`Nausea, Vomiting & Gastroparesis`,keywords:[`nausea`,`vomiting`,`gastroparesis`,`antiemetics`,`ondansetron`,`prochlorperazine`,`metoclopramide`,`delayed gastric emptying`,`gastric emptying study`,`PONV`,`cyclic vomiting syndrome`,`hyperemesis`],source:{chapter:`Gastroenterology`,section:`Nausea, Vomiting & Gastroparesis`,pages:`67–68`,authors:`Sophie Pan, Shawna Walsh`,keyFacts:[`First rule out life-threatening causes: bowel obstruction, perforation, mesenteric ischemia, pancreatitis, MI, DKA, elevated ICP`,`VVOOMMIIITING mnemonic: Vestibular/Vertigo, vOmiting centers, Obstruction, Medications, Metabolic/toxins, Inflammation/Infection/Ischemia, Intracranial, Nerves, Gut dysmotility`,`Gastroparesis diagnosis: gastric scintigraphy showing >10% retention at 4 hours (hold motility meds and opioids 48h prior); most common cause is idiopathic > diabetic > post-surgical`,`Antiemetic selection: normal QTc → ondansetron first; prolonged QTc → lorazepam (avoid 5-HT3 antagonists); chemo-induced → dex + lorazepam + ondansetron + aprepitant + olanzapine`,`SBO management: NGT suction + NPO + IVF; gastrografin per NGT converts 74% of adhesive SBOs to avoid surgery (BJS 2010;97:470)`]},assessment:`#Nausea / Vomiting / Gastroparesis
Duration: acute (<1 month) [ ] / chronic (>1 month) [ ]
Character: N/V only [ ] / associated abdominal pain [ ] / bilious [ ] / feculent [ ] / blood/hematemesis [ ]
Timing: morning [ ] / postprandial [ ] / continuous [ ] / episodic [ ]
Red flags: GI bleed [ ] / obstruction symptoms [ ] / severe abdominal pain [ ] / fever [ ] / neurologic symptoms [ ]
Life-threatening excluded: SBO [ ] / perforation [ ] / ischemia [ ] / pancreatitis [ ] / MI [ ] / DKA [ ] / ↑ICP [ ]
Precipitants: medications (opioids/antibiotics/chemo) *** / dietary / infection / pregnancy / metabolic ***
Gastroparesis: known DM [ ] / prior gastric surgery [ ] / symptoms (early satiety/postprandial fullness/bloating) [ ]
Current QTc: *** ms (important for antiemetic selection)`,ddx:`ACUTE NAUSEA/VOMITING (VVOOMMIIITING):
• Vestibular/Vertigo: labyrinthitis, BPPV, Meniere's — vertigo + N/V, positional component
• Obstruction: SBO, gastric outlet obstruction, volvulus — bilious/feculent emesis, distension, obstipation
• Medications: opioids, antibiotics (azithromycin, metronidazole), chemo, cannabis
• Metabolic/Toxins: uremia, hypercalcemia, ketoacidosis (DKA), alcohol, food poisoning
• Inflammation/Infection: gastroenteritis, PUD, pancreatitis, cholecystitis, hepatitis, PNA, pyelonephritis
• Intracranial: elevated ICP (migraine, tumor, meningitis, CVA) — projectile vomiting, HA, papilledema
• Nerves: anxiety, pain, anticipatory N/V
CHRONIC NAUSEA:
• Gastroparesis (idiopathic > diabetic > post-surgical)
• Functional dyspepsia — postprandial distress syndrome
• Cyclic vomiting syndrome (CVS) — stereotyped episodes, migraine history, cannabis use
• GERD (see GERD template)
• Rumination syndrome — regurgitation after meals, not preceded by retching, no acidic taste
• Pregnancy/hyperemesis gravidarum — onset 5-6 weeks, peaks 9 weeks, subsides 20 weeks`,workup:`ACUTE NAUSEA/VOMITING:
• BMP (electrolytes, glucose, Cr, BUN), LFTs, lipase (pancreatitis), β-hCG (all reproductive-age females)
• TSH (hypothyroidism — often overlooked)
• UA, troponin (inferior MI can present with N/V)
• KUB or CT abdomen/pelvis: if obstruction/ischemia/perforation concern
• Head CT: if new neurologic symptoms or HA with vomiting
GASTROPARESIS:
• Gastric emptying scintigraphy: gold standard; hold motility agents (metoclopramide) and opioids 48h prior; hold if glucose >275 mg/dL; positive if >10% gastric retention at 4h
• EGD: exclude mechanical obstruction before diagnosing gastroparesis
• HbA1c, TSH, ANA, total protein/albumin (assess for metabolic or systemic causes)`,management:`ANTIEMETICS (choose based on etiology and QTc):
• Normal QTc: ondansetron 4-8mg IV/PO q8h (first-line); add prochlorperazine 10mg IV/PO q6h if persistent
• Prolonged QTc (>480ms): lorazepam 0.5-1mg IV/PO q6h; dexamethasone 4-8mg IV; diphenhydramine 25-50mg IV
• Opioid-induced N/V: ondansetron; consider rotating opioid or reducing dose; metoclopramide 10mg q6h
• Chemo N/V (highly emetogenic): dexamethasone + lorazepam + ondansetron → aprepitant → olanzapine (stepwise)
• Vestibular/Vertigo: meclizine 25mg q8h; dimenhydrinate; scopolamine patch
• Migraine: prochlorperazine 10mg IV (also acts as abortive migraine treatment); metoclopramide 10mg IV
• Functional/IBS: tricyclic antidepressants (low dose nortriptyline), mirtazapine; SSRIs (5-HT3 antagonist effect)
ANTIEMETIC DOSING REFERENCE:
• Ondansetron 2-8mg PO/IV q8h | Prochlorperazine 10mg PO/IV q6h | Promethazine 12.5-25mg IV/PR q6h | Haloperidol 0.5-1mg IV q6h (IV best for refractory)
GASTROPARESIS:
• Lifestyle: small meals (5-6/day), low fat, low non-digestible fiber, soft/pureed foods
• Glycemic optimization: gastroparesis worsens with hyperglycemia → tight glucose control
• Prokinetics (before meals): metoclopramide 5-10mg PO TID (max 12 weeks due to tardive dyskinesia risk); domperidone (not in US); erythromycin 125-250mg PO TID (short courses — tachyphylaxis)
• Refractory: GES (gastric electrical stimulation device — implanted by surgery); jejunal feeds if severe
SBO: NGT suction + IVF + bowel rest; gastrografin challenge (water-soluble contrast per NGT) for adhesive SBO → 74% avoid surgery; urgent surgery if ischemia/peritonitis/failure to progress`,monitoring:`• Electrolyte repletion: hypokalemia + metabolic alkalosis common with prolonged vomiting (measure K+, Cl− every 12-24h)
• Fluid balance: daily weights, I&O; IV hydration until tolerating PO
• Gastroparesis: HbA1c at every visit; renal function (metoclopramide doses in CKD)
• AIMS (Abnormal Involuntary Movement Scale): screen for tardive dyskinesia with metoclopramide`,disposition:`• ICU: aspiration, hemodynamic instability from volume depletion, severe electrolyte derangements
• GI consult: refractory N/V, cyclic vomiting, suspected gastroparesis (needs gastric emptying study)
• Nutrition consult: inability to maintain oral intake >7 days; consider enteral (NJ) vs parenteral nutrition`},{id:`diarrhea`,system:`gi`,title:`Diarrhea — Acute and Chronic`,keywords:[`diarrhea`,`acute diarrhea`,`chronic diarrhea`,`infectious diarrhea`,`traveler diarrhea`,`secretory diarrhea`,`osmotic diarrhea`,`stool osmotic gap`,`IBS-D`,`malabsorption`,`SIBO`,`fecal lactoferrin`,`bloody diarrhea`,`dysentery`],source:{chapter:`Gastroenterology`,section:`Diarrhea`,pages:`69`,authors:`Sophie Pan, Shawna Walsh`,keyFacts:[`Acute diarrhea: small bowel = watery, large volume, cramping/bloating; large bowel = frequent, small volume, ± fever, blood, mucus`,`Workup if high-risk or severe: stool PCR (immunocompromised, severe sx, bloody diarrhea, sx >1 week), C. diff, shigatoxin, fecal leukocytes; stool O&P (3 samples q24h for travel, MSM, immunocompromised)`,`Do NOT give antidiarrheal agents (loperamide) in bloody diarrhea/suspected bacterial colitis — risk of toxic megacolon with Shiga toxin-producing E. coli`,`Stool osmotic gap = 290 − 2×(stool Na + stool K): >125 = osmotic (stops with fasting, lactose intolerance, laxative); <50 = secretory (persists with fasting)`,`SIBO treatment: rifaximin 550mg TID x14 days (non-absorbable antibiotic); first address underlying cause (hypomotility, blind loop)`]},assessment:`#Diarrhea
Type: Acute (<14 days) [ ] / Persistent (14-30 days) [ ] / Chronic (>30 days) [ ]
Character: watery (large bowel) [ ] / small volume-frequent (large bowel) [ ] / bloody [ ] / mucus [ ] / greasy/fatty (malabsorption) [ ]
SEVERE FEATURES: fever >101.3°F [ ] / >6 BMs/24h [ ] / hypovolemia [ ] / severe pain [ ] / bloody stools [ ]
HIGH-RISK: immunocompromised [ ] / HIV [ ] / IBD [ ] / age >70 [ ] / pregnant [ ]
Exposure: travel [ ] (destination: ***) / antibiotics [ ] / sick contacts [ ] / food (undercooked meat/seafood/eggs) [ ] / hospitalization [ ]
Chronic diarrhea pattern: worse with fasting (secretory) [ ] / improves with fasting (osmotic) [ ] / blood/mucus (inflammatory) [ ] / fatty/malabsorptive [ ]
Current medications: ***`,ddx:`ACUTE INFECTIOUS:
• Viral (norovirus/rotavirus/adenovirus): 48-72h illness, watery, vomiting prominent, winter outbreaks
• Bacterial toxin (S. aureus/B. cereus/C. perfringens): sudden onset (1-8h after eating), short-lived, N/V prominent, no fever
• Invasive bacteria: Salmonella (eggs/poultry, bacteremia common), Shigella (low inoculum, hematochezia), Campylobacter (undercooked/unpasteurized, reactive arthritis risk, GBS), E. coli O157:H7 (undercooked beef, HUS risk — NO antibiotics, NO loperamide), Yersinia (undercooked pork, pseudo-appendicitis)
• C. difficile: antibiotics (within 3 months), hospitalization (see CDI template)
• Parasites: Giardia (water, outdoor streams), Cryptosporidium (immunocompromised), Entamoeba (travel, MSM)
CHRONIC DIARRHEA:
• Secretory (osmotic gap <50): microscopic colitis, lymphocytic colitis, VIPoma, carcinoid, bile acid diarrhea (post-ileal resection), medications (metformin, SSRIs, proton pump inhibitors, magnesium-containing antacids)
• Osmotic (gap >125): lactose intolerance, sorbitol/fructose (sugar alcohols in "diet" foods), laxative use
• Inflammatory (gap variable): IBD (Crohn's/UC), ischemic colitis, radiation colitis, ICI colitis (immune checkpoint inhibitor)
• Malabsorptive: celiac disease, SIBO (small intestinal bacterial overgrowth), pancreatic exocrine insufficiency, short bowel syndrome`,workup:`ACUTE (high-risk/severe features):
• Stool culture + sensitivity, C. diff PCR/toxin, fecal leukocytes/lactoferrin, shigatoxin (if bloody diarrhea — O157:H7)
• Stool O&P (3 samples q24h): travel diarrhea, MSM, immunocompromised, symptoms >1 week
• CBC (WBC), BMP (hypovolemia, electrolytes), lactate (if severe/systemic illness)
• Blood cultures x2: if fever + diarrhea + toxic-appearing (Salmonella bacteremia common)
CHRONIC (outpatient workup):
• CBC (anemia, eosinophilia), CMP, TSH, celiac serologies (tTG-IgA + total IgA), ESR/CRP (IBD screen)
• Stool calprotectin: elevated = inflammatory; helps distinguish IBD from IBS (Sn 93%, Sp 96%)
• Colonoscopy + random biopsies: suspected IBD, microscopic colitis, or any new chronic diarrhea age >45
• Stool fat (72h collection) or fecal elastase: malabsorption vs. pancreatic exocrine insufficiency
• SIBO workup: glucose hydrogen breath test; or treat empirically if strong clinical suspicion`,management:`ACUTE INFECTIOUS:
• Rehydration: oral rehydration solution (ORS) for mild-moderate; IV fluids for severe dehydration
• Diet: BRAT diet helpful; early reintroduction of normal diet shortens illness
• Antibiotics: NOT routinely indicated for acute self-limited diarrhea; consider if:
  - Febrile + bloody diarrhea + sick-appearing: ciprofloxacin 500mg BID x3-5 days OR azithromycin 500mg qday x3 days
  - Traveler's diarrhea: azithromycin (drug of choice) or rifaximin; cipro/levo in non-inflammatory
  - Shigella: azithromycin or cipro x3-5 days (treat all cases)
  - Campylobacter: azithromycin (preferred) x3-5 days if severe
  - Giardia: metronidazole 500mg TID x7 days OR tinidazole 2g x1
  - Cryptosporidium: nitazoxanide (immunocompetent); supportive + optimize immune function (HIV: ART)
• Avoid antibiotics: E. coli O157:H7 (↑HUS risk); viral diarrhea; mild traveler's diarrhea
• Avoid antiperistaltics (loperamide): bloody diarrhea, fever, severe abdominal pain, suspected bacterial colitis
CHRONIC:
• Lactose intolerance: lactase supplement (Lactaid); dietary modification
• SIBO: rifaximin 550mg TID x14 days; address underlying cause (correct anatomic/motility issues)
• Microscopic colitis: stop causative drugs (PPIs, NSAIDs, SSRIs); budesonide 9mg/day x8 weeks (most effective)
• IBS-D: see IBS section of Constipation/IBS template
• Bile acid diarrhea: cholestyramine 4g BID-TID (bile acid sequestrant)`,monitoring:`• Rehydration adequacy: urine output, skin turgor, orthostatics, daily weights
• Electrolytes (K+, Na) in prolonged diarrhea — hypokalemia and hyponatremia common
• E. coli O157:H7: CBC, Cr every 1-2 days for first 7 days (HUS risk) — if Hgb falling + thrombocytopenia + rising Cr → nephrology consult (HUS)`,disposition:`• Admit: dehydration requiring IV fluids, severe systemic symptoms, bloody diarrhea with hemodynamic instability, immunocompromised
• GI consult: chronic diarrhea evaluation, suspected IBD, ICI colitis, suspected microscopic colitis
• Outpatient: most mild-moderate acute infectious diarrhea with good oral hydration`},{id:`constipation-ibs`,system:`gi`,title:`Constipation / IBS / Colonic Disorders`,keywords:[`constipation`,`IBS`,`irritable bowel syndrome`,`diverticulosis`,`diverticulitis`,`polyethylene glycol`,`Miralax`,`laxatives`,`IBS-C`,`IBS-D`,`Rome IV`,`lubiprostone`,`linaclotide`,`hemorrhoids`,`volvulus`],source:{chapter:`Gastroenterology`,section:`Constipation, IBS & Colonic Disorders`,pages:`70–71`,authors:`Sophie Pan, Shawna Walsh`,keyFacts:[`Constipation Rome IV: <3 spontaneous BMs/week + ≥2 of: hard stools, straining, incomplete evacuation, anorectal blockage, manual facilitation — for ≥3 months`,`Secondary constipation: medications (opioids most common inpatient cause — methylnaltrexone or naloxegol for opioid-induced), hypothyroidism, hypercalcemia, DM, Parkinson's, spinal cord injury`,`IBS Rome IV: recurrent abdominal pain ≥1 day/week for 3 months + ≥2 of: related to defecation, change in stool frequency, change in stool form; subtypes C/D/M/U`,`Diverticulitis: uncomplicated → PO antibiotics outpatient (ciprofloxacin + metronidazole OR amoxicillin-clavulanate x7-10d); complicated (abscess >4cm, fistula, perforation) → hospital + CT-guided drainage vs surgery`,`PEG (Miralax) 17g qday: most effective and best-tolerated first-line laxative for chronic constipation (more effective than lactulose, fewer side effects)`]},assessment:`#Constipation / IBS / Colonic Disorder
CONSTIPATION: <3 BMs/week [ ] / hard stools [ ] / straining [ ] / incomplete evacuation [ ] / manual facilitation [ ]
Secondary causes: opioids [ ] / anticholinergics [ ] / hypothyroid [ ] / hypercalcemia [ ] / DM [ ] / neurologic [ ]
Alarm features: age >50 with new symptom change [ ] / rectal bleeding [ ] / IDA [ ] / weight loss [ ] / FH CRC/IBD [ ]
IBS: abdominal pain relieved by defecation [ ] / change in stool frequency [ ] / change in stool consistency [ ]
Duration ≥3 months [ ] | Subtype: [ ] IBS-C (constipation)  [ ] IBS-D (diarrhea)  [ ] IBS-M (mixed)
DIVERTICULAR: location of pain (LLQ %) | fever [ ] | CT: *** | Perforation/abscess: [ ] Yes  [ ] No`,ddx:`CONSTIPATION (secondary causes):
Medications: opioids, anticholinergics (antihistamines, TCAs, antipsychotics), iron, Ca channel blockers, ondansetron, aluminum-containing antacids, clonidine, barium
Metabolic: hypothyroidism, hypercalcemia, hypokalemia, hypomagnesemia, uremia, heavy metal poisoning
Neurologic: Parkinson's, MS, spinal cord injury/compression, Hirschsprung disease, DM autonomic neuropathy
Structural: colon cancer (new onset, age >50 → colonoscopy), stricture, rectocele, external compression

IBS DDx: IBD, microscopic colitis, celiac disease, SIBO, lactose intolerance, functional constipation (no pain), endometriosis, ovarian pathology, chronic appendicitis (rare)

DIVERTICULAR DISEASE:
• Diverticulosis: incidental (CT/colonoscopy); no treatment needed; high-fiber diet
• Acute diverticulitis: LLQ pain + fever + leukocytosis; CT: pericolic fat stranding ± abscess
• Diverticular bleeding: painless hematochezia (see LGIB template)`,workup:`CONSTIPATION (alarm features or age >45):
• Colonoscopy: exclude malignancy, assess for melanosis coli (anthranoid laxative use), assess colonic anatomy
• TSH, calcium, BMP (metabolic secondary causes)
• Anorectal manometry + balloon expulsion test: if dyssynergic defecation suspected (straining, incomplete evacuation, sense of blockage)
• Colonic transit study (Sitz markers or wireless capsule): if STC suspected after failed laxative therapy
IBS:
• Rome IV criteria — diagnosis of exclusion; no routine labs/imaging needed if typical presentation, age <45, no alarm features
• CBC, CMP, TSH, celiac serologies (tTG-IgA), fecal calprotectin: if any doubt or alarm features
• Colonoscopy: alarm features, chronic diarrhea-predominant >45 years, positive calprotectin
DIVERTICULITIS:
• CT abdomen/pelvis with IV contrast (preferred): confirms diagnosis, grades severity, guides treatment
• CBC (leukocytosis), BMP, lactate (if severe)
• Blood cultures: if fever and toxic-appearing`,management:`CONSTIPATION:
• Step 1 — Lifestyle: ↑ fiber (25-35g/day gradually), ↑ fluids (8 glasses/day), physical activity, scheduled toilet time after meals (gastrocolic reflex)
• Step 2 — Osmotic laxatives (first-line for chronic constipation): PEG (Miralax) 17g PO qday (most evidence, best tolerated); lactulose 15-60mL qday (alternative, more bloating)
• Step 3 — Stimulant laxatives (acute or add-on): senna 2-4 tabs PO qHS or BID; bisacodyl 5-15mg PO qHS or 10mg PR AM
• Secretagogues (for CIC or IBS-C): lubiprostone 24mcg PO BID with food; linaclotide 290mcg PO QAC (30 min before meals)
• Opioid-induced constipation: methylnaltrexone 8-12mg SQ (preferred — peripherally restricted mu opioid antagonist); naloxegol 25mg PO qday; increase laxatives first
• Dyssynergic defecation: biofeedback therapy (most effective, not medications); pelvic floor physical therapy
IBS:
• IBS-D: low-FODMAP diet (fermentable oligosaccharides/disaccharides/monosaccharides/polyols) + psychotherapy (CBT); loperamide PRN; rifaximin 550mg TID x14 days; eluxadoline 100mg BID
• IBS-C: PEG/lactulose; lubiprostone 8mcg BID; linaclotide 290mcg QAC; low-FODMAP diet
• Central sensitization/visceral hyperalgesia: tricyclic antidepressants (amitriptyline/nortriptyline 10-25mg QHS); SSRIs (IBS-D); SNRIs
DIVERTICULITIS:
• Uncomplicated (no abscess, no systemic sepsis): ciprofloxacin 500mg BID + metronidazole 500mg TID x7-10 days PO; OR amoxicillin-clavulanate 875/125mg BID x7-10 days; outpatient management if tolerating PO
• Complicated (abscess <4cm): add hospital admission; NPO; IV antibiotics (pip-tazo 4.5g q6h OR CTX + metronidazole); most <4cm resolve with antibiotics
• Complicated (abscess ≥4cm): CT-guided percutaneous drainage + IV antibiotics; surgery if fails
• Perforation/fistula: urgent surgery consult; emergent OR if peritonitis`,monitoring:`• Laxative response: bowel frequency and consistency (Bristol Stool Scale) after 1-2 weeks
• Electrolytes: with prolonged laxative use (osmotic/stimulant)
• Diverticulitis: fever, WBC, CT at 72h if not improving on antibiotics; outpatient colonoscopy at 6-8 weeks after acute episode resolves (rule out malignancy)`,disposition:`• Admit: complicated diverticulitis, unable to tolerate PO, systemic sepsis
• Surgery: perforated diverticulitis, failed percutaneous drainage, recurrent diverticulitis (relative — elective sigmoidectomy after 2nd episode)
• GI consult: refractory constipation, IBS not responding to initial treatment, alarm features
• Outpatient: uncomplicated diverticulitis tolerating PO, chronic constipation management, IBS`},{id:`esophageal-disorders-celiac`,system:`gi`,title:`Esophageal Disorders / Celiac Disease`,keywords:[`dysphagia`,`esophageal`,`achalasia`,`EoE`,`eosinophilic esophagitis`,`celiac disease`,`gluten-free diet`,`tTG`,`Plummer Vinson`,`esophageal spasm`,`odynophagia`,`manometry`,`Barrett`,`esophageal motility`],source:{chapter:`Gastroenterology`,section:`Esophageal Disorders & Celiac`,pages:`72`,authors:`Sophie Pan, Shawna Walsh`,keyFacts:[`Dysphagia evaluation: solids only = structural (stricture/ring/web/cancer); solids + liquids = motility disorder (achalasia/spasm/scleroderma); transfer dysphagia (liquids more than solids) = oropharyngeal/neuromuscular`,`Achalasia: failure of LES relaxation + absent esophageal peristalsis; barium swallow shows 'bird-beak' narrowing; manometry diagnostic; treatment: pneumatic dilation, Heller myotomy, or POEM`,`EoE: dysphagia + food impaction + GERD symptoms unresponsive to PPI; EGD shows rings/strictures/furrows/white plaques; biopsy ≥15 eosinophils/HPF; treat with PPI + topical steroids + dietary elimination`,`Celiac disease: immune response to gluten → villous atrophy → malabsorption; diagnose with serum tTG-IgA + total IgA (screen for IgA deficiency); confirm with EGD + small bowel biopsies (Marsh score)`,`Celiac associations: type 1 DM, thyroid disease, IgA nephropathy, Sjogren's, osteoporosis — screen with unexplained IDA, elevated LFTs, dermatitis herpetiformis, first-degree relatives`]},assessment:`#Esophageal / Celiac Disorder
DYSPHAGIA:
Type: solids only (structural) [ ] / solids + liquids (motility) [ ] / liquids worse than solids (oropharyngeal) [ ]
Transfer dysphagia: coughing/choking during swallowing [ ] / nasopharyngeal regurgitation [ ] — neuromuscular evaluation needed
Progressive: [ ] Yes (cancer/stricture concern → EGD)  [ ] No  |  Regurgitation of undigested food: [ ] Yes (achalasia)
Odynophagia (pain with swallowing): infection (Candida/CMV/HSV) [ ] / pill esophagitis [ ] / radiation [ ]
EoE: food impaction hx [ ] / atopic hx (eczema/asthma/allergies) [ ] / PPI trial failed [ ]
CELIAC: chronic diarrhea [ ] / weight loss [ ] / IDA [ ] / elevated LFTs [ ] / DH rash [ ] / T1DM [ ] / first-degree relative [ ]
tTG-IgA: ___ | Total IgA: ___ | EGD biopsy: *** (Marsh score)`,ddx:`ESOPHAGEAL DYSPHAGIA:
Motility (solids + liquids): Achalasia (regurgitation of undigested food, weight loss, bird-beak on barium), diffuse esophageal spasm (intermittent, severe chest pain, corkscrew esophagus), scleroderma (Raynaud's, systemic sclerosis), functional dysphagia
Structural/Intrinsic (solids > liquids): Schatzki ring (B-ring at GEJ — lower esophageal ring, episodic, food impaction), esophageal stricture (progressive, acid-related or EoE), EoE, cancer (progressive, weight loss, age >50), pill esophagitis (NSAIDs/tetracycline/bisphosphonates — odynophagia)
Structural/Extrinsic: vascular ring, mediastinal mass/LAD, thyroid/substernal goiter, aortic aneurysm
OROPHARYNGEAL DYSPHAGIA: stroke, Parkinson's, ALS, MG, polymyositis, Zenker's diverticulum (regurgitation of undigested food + gurgling noise + bad breath)
CELIAC DDx: tropical sprue, refractory sprue, SIBO, lactose intolerance, IBD, hypogammaglobulinemia, lymphoma (EATL — enteropathy-associated T-cell lymphoma, complication of refractory celiac)`,workup:`DYSPHAGIA:
• EGD with biopsy: first-line for most esophageal dysphagia; assess for stricture, ring, EoE (biopsy proximal + distal esophagus), cancer, Barrett's, infection
• Barium esophagram: motility assessment (bird-beak in achalasia, corkscrew in DES), Zenker's diverticulum, structural lesions
• High-resolution esophageal manometry: gold standard for achalasia and motility disorders (Chicago Classification)
  - Achalasia types: I (aperistalsis), II (panesophageal pressurization), III (premature/spastic — most common)
• CT chest: extrinsic compression, mediastinal mass, lymphadenopathy
• Swallowing study (modified barium): oropharyngeal dysphagia evaluation; SLP referral for aspiration assessment
EoE:
• EGD with biopsies of proximal and distal esophagus (both): ≥15 eos/HPF diagnostic
CELIAC:
• Serum tTG-IgA + total IgA (rule out IgA deficiency — 2-3% population): if IgA deficient → IgG deamidated gliadin peptides (DGP)
• EGD with small bowel biopsies (duodenum): villous atrophy, crypt hyperplasia, intraepithelial lymphocytes; Marsh score
• HLA-DQ2/DQ8: negative = celiac excluded; positive = not diagnostic (high prevalence in population)
• DEXA scan: bone density at diagnosis (osteoporosis common)
• CBC (IDA), ferritin, folate, B12, 25-OH vitamin D (malabsorption panel)`,management:`ACHALASIA:
• Pneumatic dilation (PD): endoscopic balloon dilation at GEJ; 50-90% effective; repeat treatments often needed; risk of perforation ~3%
• Laparoscopic Heller myotomy (LHM): surgical + partial fundoplication; durable, 85-90% effective; lower perforation risk than PD
• POEM (Per-Oral Endoscopic Myotomy): endoscopic; equivalent to LHM; no external incision; GERD more common post-POEM
• Botulinum toxin injection (Botox): temporary (6-12 months); elderly or poor surgical candidates
• Calcium channel blockers/nitrates: minimal benefit; prior to procedure as bridge
EoE:
• PPI 40mg PO BID x8 weeks: first-line (resolves EoE in 30-50%)
• Topical swallowed steroids: budesonide viscous slurry or fluticasone MDI (puff then swallow) x8-12 weeks
• Six-food elimination diet (dairy, wheat, soy, eggs, nuts, seafood): eliminates one at a time; most effective with dairy + wheat
• Dupilumab (IL-4/IL-13 inhibitor): FDA-approved for moderate-severe EoE
• Endoscopic dilation: symptomatic stricture not responding to medications
CELIAC:
• Strict gluten-free diet (GFD): lifelong; eliminate wheat, barley, rye; oats controversial (cross-contamination risk)
• Dietitian referral: essential for GFD education
• Vitamin supplementation: Fe, folate, B12, Ca, Vit D (correct deficiencies)
• Refractory celiac (symptoms persist on strict GFD): check for inadvertent gluten exposure; rule out SIBO, lymphoma, RCD type II (treat with immunosuppressants; enteroscopy + CT)`,monitoring:`• EoE: repeat EGD + biopsy at 8-12 weeks after treatment initiation — assess for histologic remission (<15 eos/HPF)
• Celiac: tTG-IgA at 6-12 months on GFD (should normalize); bone density yearly (osteoporosis treatment if T-score <−2.5)
• Achalasia: symptom reassessment at 3-6 months after dilation/myotomy; timed barium esophagram at 1 year`,disposition:`• GI/motility specialist: achalasia, EoE requiring biologic therapy, refractory celiac
• Surgery (thoracic): Heller myotomy, esophageal cancer
• Dietitian: celiac disease, EoE elimination diet
• SLP: oropharyngeal dysphagia, aspiration`},{id:`ibd`,system:`gi`,title:`Inflammatory Bowel Disease (UC / Crohn's)`,keywords:[`IBD`,`inflammatory bowel disease`,`ulcerative colitis`,`Crohn disease`,`UC`,`infliximab`,`adalimumab`,`vedolizumab`,`ustekinumab`,`mesalamine`,`biologics IBD`,`steroid IBD`,`fecal calprotectin`,`colonoscopy IBD`,`toxic megacolon`],source:{chapter:`Gastroenterology`,section:`Inflammatory Bowel Disease`,pages:`73–74`,authors:`Sophie Pan, Shawna Walsh`,keyFacts:[`UC: continuous inflammation from rectum proximally, mucosal only; bloody diarrhea + tenesmus; extra-intestinal (EIM): arthritis, pyoderma gangrenosum, EN, uveitis, PSC (unique to UC-related IBD)`,`Crohn's: any GI tract, transmural, skip lesions, granulomas, fistulae/abscesses; RLQ pain + diarrhea +/- bloody; perianal disease common`,`Acute severe UC (ASUC): admit, IV methylprednisolone 60mg/day; ciclosporin or infliximab if steroid-refractory by day 3-5; colectomy if no response`,`Biologics first-line for moderate-severe IBD: infliximab + azathioprine (combination) > infliximab alone (SONIC trial); vedolizumab (gut-selective); ustekinumab (IL-12/23); ozanimod/etrasimod (S1P modulators)`,`CRC surveillance: colonoscopy after 8 years of active disease, then q1-3 years with 4-quadrant biopsies every 10cm`]},assessment:`#Inflammatory Bowel Disease (IBD) — Flare Assessment
Type: [ ] Ulcerative Colitis  [ ] Crohn's Disease  | Disease extent: ***
ACTIVITY SEVERITY:
UC: [ ] Mild (<4 BMs/day, no blood)  [ ] Moderate (4-6 bloody stools/day, mild systemic sx)  [ ] Severe (>6 bloody stools + systemic signs — ADMIT)
Crohn's: [ ] Mild (ambulatory, tolerating PO)  [ ] Moderate (failed mild treatment, systemic sx)  [ ] Severe (cachexia, obstruction, abscess, perianal)
Systemic signs: fever *** / HR *** / Hgb *** / ESR/CRP ***
Current medications: *** | Last biologic: *** | Last steroid course: ***
Complications: toxic megacolon [ ] / obstruction [ ] / abscess [ ] / fistula [ ] / perforation [ ]
Extra-intestinal: arthritis [ ] / EN/PG [ ] / uveitis [ ] / scleritis [ ] / PSC [ ]`,ddx:`UC vs CROHN'S vs OTHERS:
• UC: rectal involvement always present; continuous inflammation; bloody diarrhea + tenesmus; no skip lesions; no fistulae
• Crohn's: skip lesions, transmural, perianal disease, fistulae/abscesses, upper GI involvement; 50% have ileocolonic disease
• Indeterminate colitis: 5-10% cannot be classified → IBD-unclassified

ACUTE FLARE DDx:
• C. difficile superinfection: common in IBD; check toxin/PCR with any acute flare (especially recent antibiotics)
• CMV colitis: immunosuppressed IBD patients; steroid-refractory; colonoscopy + biopsies (intranuclear inclusions); ganciclovir
• Other infectious colitis: Salmonella, Campylobacter, E. coli O157:H7, Yersinia — can mimic IBD; stool cultures
• Ischemic colitis: older patients with vascular risk factors; distribution matches colonic watershed areas
• NSAID-induced colitis: medication history; circumferential ulcers; discontinue NSAIDs
• ICI (immune checkpoint inhibitor) colitis: recent immunotherapy; watery diarrhea; responds to steroids`,workup:`• CRP, ESR, CBC, BMP, albumin, LFTs (baseline and before biologics), procalcitonin
• Fecal calprotectin: marker of intestinal inflammation; guides scope timing; >250 mcg/g = active IBD likely
• C. diff toxin/PCR (ALL IBD flares — critical to exclude before escalating immunosuppression)
• CMV colitis testing: CMV quantitative PCR (blood) + endoscopic biopsies if steroid-refractory
• Stool cultures: if infectious etiology possible
• CT abdomen/pelvis with IV contrast: abscesses, fistulae, perforation, obstruction, toxic megacolon
• MRI pelvis (preferred for perianal Crohn's): soft tissue contrast, fistula anatomy
• Colonoscopy with biopsies: definitive diagnosis, assess extent, guide therapy; defer if toxic megacolon or fulminant
• TPMT/NUDT15 genotyping: before starting thiopurines (azathioprine/6-MP) — risk for myelosuppression
• TB testing (IGRA) + hepatitis B serology: before starting biologics (reactivation risk)
• Fecal calprotectin: >250 = active inflammation`,management:`MILD-MODERATE UC:
• Proctitis (E1): 5-ASA suppository (Canasa 1g PR QHS) + 5-ASA oral; rectal mesalamine > oral
• Left-sided (E2) or Extensive (E3): oral mesalamine (Lialda/Apriso 2.4-4.8g/day) ± topical; goal complete mucosal healing
• Steroid-sparing: azathioprine 2-2.5mg/kg/day or 6-MP 1-1.5mg/kg/day for maintenance; check TPMT first
MODERATE-SEVERE UC: BIOLOGICS (combination therapy preferred)
• Infliximab (anti-TNF): 5mg/kg IV at 0, 2, 6 weeks → q8 weeks maintenance; combination with azathioprine (superior to mono — SONIC trial; reduces immunogenicity)
• Vedolizumab (anti-α4β7 integrin — gut selective): 300mg IV at 0, 2, 6 weeks → q8 weeks; preferred if TB, heart failure, malignancy risk
• Ustekinumab (anti-IL-12/23): loading dose based on weight IV × 1, then 90mg SQ q8-12 weeks
• JAK inhibitors (tofacitinib/upadacitinib/filgotinib): oral; rapid onset; caution with cardiovascular risk
ACUTE SEVERE UC (>6 bloody stools + systemic signs):
• Admit; IV methylprednisolone 60mg/day (or 300mg hydrocortisone/day divided); stool cultures + C. diff; blood cultures if febrile
• Infliximab rescue (by day 3-5 if no response): 5mg/kg IV (accelerated dosing: 0, 1-3, 7 days); OR cyclosporine 4mg/kg/day IV (bridge to azathioprine)
• Colectomy: if no response after 4-7 days of rescue therapy; hemorrhage; toxic megacolon; perforation
CROHN'S DISEASE:
• Mild ileal/ileocolonic: budesonide 9mg/day PO x8-16 weeks (preferred to prednisone — less systemic SE)
• Moderate-severe: infliximab (IFX) + azathioprine combination (top-down approach); vedolizumab; ustekinumab
• Perianal Crohn's: metronidazole 500mg TID + ciprofloxacin 500mg BID; infliximab (closes fistulae); surgical drainage of abscesses
• Steroid induction: prednisolone 40-60mg/day (avoid long-term), taper once remission achieved
MAINTENANCE: azathioprine, 6-MP (thiopurines), biologic, or combination; aminosalicylates for UC maintenance
IBD SURGERY:
• UC: total proctocolectomy + ileal pouch-anal anastomosis (IPAA — J-pouch); curative
• Crohn's: limited resections, strictureplasty, drainage procedures (NOT curative)`,monitoring:`• CRP and fecal calprotectin every 3-6 months in remission; more frequent during flare
• Biologic drug levels (infliximab trough ≥5-10 mcg/mL; adalimumab ≥7.5 mcg/mL): check 4 weeks after last infusion if inadequate response
• CBC, LFTs, albumin every 3-6 months (thiopurine monitoring); CBC q6 months on biologics
• Colonoscopy: assess mucosal healing at 6-12 months after starting new therapy; CRC surveillance q1-3 years after 8 years of disease
• Anti-drug antibodies: if secondary loss of response to biologic; check with trough level`,disposition:`• Admit: acute severe UC, toxic megacolon, abscess, obstruction, perforation, inability to tolerate PO
• Surgery: perforated IBD, failed medical therapy for ASUC, dysplasia/cancer, severe perianal disease
• GI/IBD center: all moderate-severe IBD, biologic initiation, surgical planning`},{id:`intestinal-disorders`,system:`gi`,title:`Intestinal Disorders (SBO / Ileus / Mesenteric Ischemia)`,keywords:[`SBO`,`small bowel obstruction`,`ileus`,`mesenteric ischemia`,`bowel obstruction`,`volvulus`,`adhesions`,`gastrografin`,`mesenteric infarct`,`acute mesenteric ischemia`,`colonic pseudo-obstruction`,`Ogilvie syndrome`,`CT abdomen obstruction`],source:{chapter:`Gastroenterology`,section:`Intestinal Disorders`,pages:`75`,authors:`Sophie Pan, Shawna Walsh`,keyFacts:[`SBO vs ileus: ileus = no obstruction (dilated loops with air throughout colon, no transition point on CT); SBO = mechanical obstruction (transition point, decompressed colon distal to obstruction)`,`Adhesive SBO (most common cause — prior surgery): gastrografin (water-soluble contrast) challenge per NGT reduces surgery rate by 74% (BJS 2010;97:470); appears in colon within 4-8h = partial, proceed with medical management`,`Acute mesenteric ischemia: pain out of proportion to exam + vascular RFs; SMA occlusion most common; CTA abdomen/pelvis; immediate anticoagulation + surgery/IR; mortality 50-70% if delayed`,`Ischemic colitis: post-cardiovascular event/surgery, watershed areas (splenic flexure, sigmoid); CT shows thumbprinting/wall thickening; colonoscopy confirms; conservative management in most`,`Ogilvie syndrome (colonic pseudo-obstruction): massive colonic dilation without obstruction; ICU/post-operative; neostigmine 2mg IV if cecum >10cm (atropine at bedside for bradycardia); colonoscopic decompression if fails`]},assessment:`#Intestinal Disorder — SBO / Ileus / Mesenteric Ischemia
Symptoms: N/V [ ] / obstipation (no BM or flatus) [ ] / abdominal distention [ ] / crampy pain [ ]
Bowel sounds: [ ] High-pitched  [ ] Absent  [ ] Normal
Peritoneal signs: rigidity [ ] / rebound [ ] / guarding [ ] → SURGERY NOW
MESENTERIC ISCHEMIA concern: pain out of proportion to exam [ ] + vascular RFs [ ] → CTA STAT
CT findings: dilated loops *** / transition point *** / decompressed colon *** / pneumatosis *** / free air [ ]
SBO type: [ ] Partial (gas in colon)  [ ] Complete (no gas in colon)  [ ] Closed loop (C or U shape — EMERGENCY)
Prior abdominal surgery (adhesions risk): [ ] Yes ***  [ ] No
Hernia: [ ] Identified on exam (*** location)  [ ] No`,ddx:`SBO CAUSES (by frequency): adhesions (most common — prior surgery), hernias (inguinal/umbilical/femoral/incisional), IBD (Crohn's strictures), malignancy (colon cancer/lymphoma/carcinomatosis), radiation strictures, volvulus, gallstone ileus, foreign body
ILEUS CAUSES: post-operative (most common), peritonitis/sepsis, electrolyte imbalance (hypoK, hypoMg), opioids/anticholinergics, metabolic (hypothyroidism, DKA), intra-abdominal inflammation
MESENTERIC ISCHEMIA:
• Acute arterial occlusion (50%): cardiac embolic (AFib, LV thrombus) or thrombosis; SMA > IMA; "pain out of proportion"
• Non-occlusive (5-15%): hypoperfusion/vasospasm; post-cardiac surgery, cocaine, vasopressors
• Mesenteric vein thrombosis (5-15%): hypercoagulable state, portal hypertension, inflammatory intra-abdominal process
• Ischemic colitis (25-40%): watershed areas (splenic flexure, sigmoid); lower acuity; rarely requires surgery
VOLVULUS: sigmoid (most common — elderly with chronic constipation) or cecal; "coffee bean" sign on KUB; proctoscopic decompression (sigmoid) vs surgery (cecal)
OGILVIE SYNDROME (colonic pseudo-obstruction): massive cecal dilation (>10cm) in ICU/post-op patient; risk of perforation if cecum >12cm`,workup:`• CT abdomen/pelvis with IV + oral contrast (preferred): identifies transition point, determines partial vs complete, assesses for ischemia, closed-loop obstruction, volvulus, hernias
• KUB: less sensitive than CT; may show air-fluid levels, dilation, free air (perforation)
• CTA abdomen/pelvis (with IV only, no oral contrast): for mesenteric ischemia (arterial phase) — assesses mesenteric vessels
• Labs: CBC (leukocytosis), BMP (lactate — elevated = ischemia/necrosis), LFTs, amylase, lipase, blood cultures
• NG tube aspiration: if obstruction confirmed; decompress + bilious vs non-bilious assessment`,management:`ILEUS: bowel rest, NPO; NGT if moderate/severe symptoms; correct electrolytes (↑K+, Mg); HOLD opioids and anticholinergics; ambulate; methylnaltrexone if opioid-induced
ADHESIVE SBO:
• Initial: NGT suction (decompress), IVF, NPO, correct electrolytes; serial abdominal exams
• Gastrografin challenge: 100mL water-soluble contrast per NGT → KUB or CT at 4-8h; contrast reaching colon = partial obstruction → proceed conservatively (74% avoid surgery); absent from colon = complete → surgery
• Indications for emergency surgery: peritoneal signs, complete SBO failing conservative treatment, ischemia on CT, closed-loop obstruction
STRANGULATION / ISCHEMIA SIGNS (OR STAT): fever, leukocytosis, peritoneal signs, metabolic acidosis, pneumatosis intestinalis, portal venous gas on CT → immediate surgery
ACUTE MESENTERIC ISCHEMIA:
• Immediate anticoagulation: heparin bolus → infusion (even before definitive imaging)
• CT angiography → IR (catheter-directed thrombolysis/embolectomy) or emergency laparotomy + revascularization
• Bowel rest; broad-spectrum antibiotics (anaerobic + GNR coverage) if ischemia/necrosis suspected
• Mortality 50-70% with necrosis — early diagnosis is critical
ISCHEMIC COLITIS: bowel rest + IVF; antibiotics if signs of transmural ischemia (fever + peritoneal signs); colonoscopy at 48-72h (confirm diagnosis + assess extent); surgery for full-thickness necrosis, perforation, or failure to improve
OGILVIE SYNDROME: correct electrolytes, stop anticholinergics/opioids; neostigmine 2mg IV over 5 min if cecum >10cm (colonoscopic decompression if neostigmine fails); have atropine ready (bradycardia risk)
SIGMOID VOLVULUS: proctoscopic decompression (rigid proctoscope + rectal tube) then elective sigmoid resection; CECAL volvulus → surgical resection (right hemicolectomy)`,monitoring:`• Serial abdominal exams every 4-6h; immediate escalation if peritoneal signs develop
• Lactate every 4-6h in mesenteric ischemia (rising lactate = worsening ischemia)
• NGT output every shift in SBO; KUB or CT after gastrografin challenge (4-8h)
• Ogilvie: cecal diameter measurement on daily KUB or CT; perforation risk >12cm`,disposition:`• OR STAT: free perforation, peritoneal signs, closed-loop obstruction, mesenteric ischemia with necrosis
• Surgery consult: all complete SBO, suspected mesenteric ischemia, volvulus
• GI consult: Ogilvie syndrome (colonoscopic decompression), ischemic colitis evaluation`},{id:`nutrition-feeding`,system:`gi`,title:`Nutrition & Feeding (Enteral / Parenteral / Refeeding)`,keywords:[`nutrition`,`enteral nutrition`,`parenteral nutrition`,`TPN`,`PPN`,`NGT`,`NJ tube`,`PEG`,`nasogastric feeding`,`refeeding syndrome`,`malnutrition`,`tube feeds`,`albumin nutrition`,`nasojejunal`,`MUST score`],source:{chapter:`Gastroenterology`,section:`Nutrition & Feeding`,pages:`76`,authors:`Reena Goswami`,keyFacts:[`Nutrition route hierarchy: oral > enteral (EN) > parenteral (PN); always prefer enteral if GI tract functional — maintains gut integrity, reduces bacterial translocation, cheaper, safer`,`Early EN: initiate within 24-48h of ICU admission; advance to goal within 48-72 hours; do NOT routinely check gastric residuals (NEJM 2014;370:1227)`,`Refeeding syndrome: hypophosphatemia (hallmark) + hypokalemia + hypomagnesemia within 72h of refeeding after prolonged starvation; risk: 5+ days NPO, severe malnutrition, alcoholism, anorexia`,`Malnutrition: weight loss >2% in 1 week, >5% in 1 month, >7.5% in 3 months, >10% in 6 months; albumin confounded by inflammation — not reliable nutritional marker in acute illness`,`TPN caloric needs: 25-30 kcal/kg/day total; protein 1.2-1.5 g/kg/day (1.5-2 g/kg in critically ill); lipids 20-30% of total calories; ≤0.5 g/kg/h dextrose infusion`]},assessment:`#Nutrition & Feeding Assessment
Nutritional status: wt loss *** lbs over *** weeks | BMI: *** | MUST score: ***
Enteral route feasible: [ ] Yes (oral/NGT/NJ/PEG)  [ ] No (GI tract non-functional → consider TPN)
Current nutrition: [ ] PO (tolerating ***)  [ ] NGT feeds ***  [ ] NJ/PEG-J feeds ***  [ ] TPN: ***
Caloric needs: *** kcal/day (goal 25-30 kcal/kg/day) | Protein: *** g/day (goal 1.2-1.5 g/kg/day)
Refeeding risk: >5 days NPO [ ] / severe malnutrition [ ] / alcoholism [ ] / anorexia [ ] / BMI <16 [ ]
Tube type/position: *** | Confirmed by: [ ] CXR  [ ] KUB  [ ] Gastric aspirate pH`,ddx:`INDICATIONS FOR ENTERAL NUTRITION (EN):
• Unable to maintain adequate oral intake for ≥5-7 days (or sooner in critically ill)
• Swallowing dysfunction (stroke/ALS/head-neck cancer/prolonged intubation)
• Bowel surgery with anticipated prolonged NPO period
• Critically ill (ICU) patients — start within 24-48h even if hemodynamically stable
ENTERAL ROUTE SELECTION:
• NGT (nasogastric): temporary (<4 weeks), first-line; 14-16 French; confirm with CXR before use
• NJ/NJT (nasojejunal): gastroparesis, gastric outlet obstruction, severe vomiting, high aspiration risk
• PEG (percutaneous gastrostomy): expected >4 weeks of feeding; ALS, stroke, head-neck cancer
• PEG-J (PEG with jejunal extension): gastroparesis or high aspiration risk requiring long-term EN
INDICATIONS FOR TPN:
• Non-functional GI tract (short bowel, GI fistula with high output, severe ileus, bowel obstruction)
• EN not tolerated or meeting <60% of caloric needs after 7-10 days
• Prior to major surgery in severely malnourished patient (preoperative TPN ≥7 days)
REFEEDING RISK FACTORS: >5-10 days fasting/minimal intake, severe malnutrition (BMI <16), alcoholism, anorexia nervosa, chemotherapy/cancer malnutrition, prolonged IV dextrose only`,workup:`• Daily weight (objective nutritional status marker in acute illness)
• BMP: K+, Mg2+, phosphate (refeeding monitoring), glucose (TPN management)
• Prealbumin (transthyretin): better short-term marker than albumin (half-life 2 days vs 21 days); still influenced by inflammation
• 24-hour calorie count or dietary assessment if PO feasible
• Tylenol absorption test (acetaminophen 975mg PO → serum level at 90 min): >4 mcg/mL = adequate enteral absorption (useful before starting EN in critically ill)
• LFTs: TPN-associated liver disease (cholestasis, steatosis); biliary sludge with prolonged TPN
• Triglycerides: if on lipid-containing PN (target <400 mg/dL)`,management:`ENTERAL NUTRITION:
• Start: NGT insertion (confirm position with CXR — tip in stomach beyond GEJ); start at 20-40 mL/h; advance 10-20 mL/h every 4-8h to goal rate
• Goal rate calculation: total kcal/day ÷ kcal/mL of formula = mL/day ÷ 24h = hourly rate
• Do NOT routinely check gastric residuals (NEJM 2014;370:1227; does not reduce aspiration pneumonia)
• HOB 30-45° at all times during feeds (reduces aspiration)
• For NJ placement: bedside (with metoclopramide 10mg IV x1 to stimulate motility) or fluoroscopic
• For PEG placement: endoscopic by GI; contraindicated if uncorrected coagulopathy, ascites (malpositioned), obesity (limited access)
TUBE FEED FORMULAS:
• Standard (Jevity 1.0/1.5, Osmolite): 1-1.5 kcal/mL; for most patients
• High protein (Promote, Replete): >20% protein; burns, wounds, critically ill
• Renal (Nepro): low K+/Phos/volume; ESRD
• Pulmonary (Pulmocare, Oxepa): high fat, low carbs; ARDS (↓CO2 production — controversial)
• DM (Glucerna): low glycemic index; DM patients
PARENTERAL NUTRITION (TPN):
• Consult "Nutrition Support Team" in PPD (p22445) at MGH — they manage TPN orders
• Central access required (TPN osmolarity >900 mOsm/L); PICC or CVC
• Components: dextrose, amino acids, lipids, electrolytes, vitamins, trace elements
• TPN cycling: 12-16h cycles (not continuous) reduces hepatic steatosis for long-term TPN
• PPN (peripheral PN): <900 mOsm/L; maximum 2-3 weeks; limited calories
REFEEDING SYNDROME PREVENTION:
• Identify high-risk patients before initiating nutrition
• Start feeding at 10-15 kcal/kg/day for first 48h; advance slowly over 4-7 days
• Pre-load electrolytes before starting: replete K+, Mg2+, PO4 before initiating feeds
• Monitor PO4, K+, Mg2+ every 6-12h for first 72h; replace aggressively
• Thiamine 100mg IV TID x3 days (B1 depletion → Wernicke's risk)`,monitoring:`• Weight daily; electrolytes (PO4, K+, Mg2+) every 6-12h first 72h of refeeding then daily
• Glucose every 4-6h (TPN — target 140-180 mg/dL; insulin drip if needed)
• LFTs and TG weekly on TPN (steatosis/cholestasis; reduce lipids if TG >400 mg/dL)
• Tube position: verify with CXR after any repositioning or if aspiration concern
• I&O: track tube feed volume given vs goal; ensure advancing to goal rate`,disposition:`• Nutrition consult: all patients at nutritional risk (MUST ≥2), TPN patients, complex refeeding, ALS/dementia/cancer patients
• GI consult: PEG/PEG-J placement, NJ tube placement with fluoroscopy
• Outpatient: home enteral nutrition (HEN) planning if anticipated >4 weeks; PICC for outpatient TPN`},{id:`liver-chemistry-tests`,system:`gi`,title:`Liver Chemistry Tests — Approach and Interpretation`,keywords:[`liver chemistry`,`LFTs`,`liver function tests`,`ALT`,`AST`,`alkaline phosphatase`,`GGT`,`bilirubin`,`hepatocellular pattern`,`cholestatic pattern`,`R factor`,`transaminases`,`jaundice workup`,`liver disease workup`,`ischemic hepatitis`],source:{chapter:`Gastroenterology`,section:`Liver Chemistry Tests`,pages:`78`,authors:`Daniel Restifo`,keyFacts:[`R-factor = (ALT/ULN) ÷ (ALP/ULN): >5 = hepatocellular; 2-5 = mixed; <2 = cholestatic — guides differential diagnosis and workup`,`ALT upper limits of normal: 33 U/L (males), 25 U/L (females); ALP: 115 (males), 100 (females)`,`Ischemic hepatitis ('shock liver'): extreme ALT/AST elevation (>100x ULN, often 1000-10,000); rapid rise then fall within days; always has inciting hypotension/heart failure event`,`AST/ALT ratio >2 suggests alcohol-related liver disease or injury; ratio >2.5 suggests non-hepatic source of AST (cardiac, skeletal muscle)`,`Isolated ALP elevation + elevated GGT = hepatic origin (confirms biliary/cholestatic); isolated ALP elevation without elevated GGT = bone disease (Paget's, bone mets, healing fractures)`]},assessment:`#Liver Chemistry Tests — Interpretation
ALT: ___ (ULN *** — M: 33 / F: 25) | AST: ___ | ALP: ___ (ULN *** — M: 115 / F: 100) | GGT: ___ | T-bili: ___ | D-bili: ___
Albumin: ___ | INR: ___ | Platelets: ___
R-factor = (ALT/ULN) ÷ (ALP/ULN) = ___ → Pattern: [ ] Hepatocellular (>5)  [ ] Mixed (2-5)  [ ] Cholestatic (<2)
Chronicity: [ ] Acute (<6 months)  [ ] Chronic (>6 months)
Magnitude: [ ] Extreme (>15x ULN = >1000 U/L — ischemic, APAP, acute viral)  [ ] Moderate (5-15x ULN)  [ ] Mild (<5x ULN)
AST/ALT ratio: ___ (>2 = alcohol-related; >2.5 = non-hepatic AST source)
Isolated ALP elevation: GGT elevated? [ ] Yes (hepatic origin)  [ ] No (bone disease likely)`,ddx:`HEPATOCELLULAR PATTERN (ALT>ALP, R-factor >5):
• Extreme elevation (>15x ULN/1000 U/L): Ischemic hepatitis (shock liver — always check for preceding hypotension/HF event), APAP toxicity, acute HAV/HBV/HEV, acute Budd-Chiari, Wilson's disease
• Moderate (5-15x ULN): Acute hepatitis A/B/C/E, DILI (drug-induced — amoxicillin-clavulanate #1 cause), autoimmune hepatitis (AIH — positive ANA/ASMA/IgG), ischemic (more gradual)
• Mild (<5x ULN): Chronic HBV/HCV, MASLD/MASH (AST:ALT <1), alcohol-related (AST:ALT >2, GGT elevated), medications/supplements, celiac, thyroid disease, hemochromatosis (Fe sat + ferritin), Wilson's (low ceruloplasmin in young)

CHOLESTATIC PATTERN (ALP>ALT, R-factor <2):
• Intrahepatic: PBC (anti-mitochondrial antibody — AMA), PSC (p-ANCA, IBD association, MRCP shows beads-on-string), DILI (cholestatic pattern), pregnancy (intrahepatic cholestasis), sepsis/TPN
• Extrahepatic obstruction: CBD stone (choledocholithiasis), biliary stricture, cholangiocarcinoma, pancreatic cancer, ampullary mass

ISOLATED ALP ELEVATION:
• Hepatic (GGT elevated): biliary obstruction, infiltrative disease (metastases, sarcoidosis, amyloid, lymphoma), PBC early, medications
• Bone (GGT normal): Paget's, bone metastases, healing fractures, hyperparathyroidism, osteomalacia, growing children

JAUNDICE WORKUP:
• Predominantly conjugated/direct hyperbilirubinemia: liver disease, biliary obstruction (most common inpatient — CBD stone/stricture)
• Predominantly unconjugated/indirect hyperbilirubinemia: hemolysis (LDH↑, haptoglobin↓, reticulocytosis), Gilbert syndrome (benign — elevated with fasting/illness), ineffective erythropoiesis`,workup:`STEP 1 — PATTERN AND CHRONICITY:
• Identify R-factor pattern (hepatocellular vs cholestatic vs mixed)
• Determine acute (<6 months) vs chronic (>6 months)
STEP 2 — DIRECTED WORKUP BASED ON PATTERN:
Hepatocellular, acute:
• Viral hepatitis panel: HBsAg, anti-HBc IgM, anti-HAV IgM, HCV Ab + RNA, HEV IgM (if travel/immunosuppressed)
• APAP level (always check in acute liver injury — even without history)
• Medications and supplements review (DILI — LiverTox database)
• ANA, ASMA, IgG levels (autoimmune hepatitis)
• RUQ ultrasound with Doppler (Budd-Chiari, portal vein thrombosis)
• Ceruloplasmin (Wilson's — young patients)
Hepatocellular, chronic:
• HBV (HBsAg + anti-HBc), HCV (HCV Ab + RNA), Iron studies + HFE gene (hemochromatosis), ceruloplasmin + urine copper (Wilson), A1AT level (alpha-1-antitrypsin), ANA/ASMA/IgG (AIH), TSH (thyroid), celiac serologies
• Abdominal US + liver elastography (FIB-4 score for fibrosis estimation: FIB-4 = age×AST/(PLT×√ALT))
Cholestatic:
• RUQ US: CBD dilation, gallstones, intrahepatic biliary dilation
• GGT: if elevated = confirms hepatic origin
• AMA (anti-mitochondrial antibody): PBC — positive in 95% of cases
• MRCP: biliary anatomy (PSC beads-on-string, CBD stone, stricture)
• p-ANCA + colonoscopy consideration: PSC (IBD associated)`,management:`ISCHEMIC HEPATITIS: restore perfusion (treat cardiogenic shock, hypotension, HF); ALT/AST peak within 24-72h then fall rapidly; supportive care; expect normalization within 7-14 days
DILI: identify and stop the offending drug/supplement; DILI rash/fever = stop immediately; corticosteroids for hypersensitivity-type DILI or AIH overlap; most improve in weeks-months
AIH: prednisone 40-60mg/day + azathioprine 1-2mg/kg/day; taper steroids over 6-12 months; goal ALT normalization + IgG normalization; biopsy to confirm remission before stopping
CHOLESTATIC (biliary obstruction): ERCP for CBD stone/malignant obstruction; ursodeoxycholic acid (UDCA) for PBC; steroids + MMF for IgG4 cholangiopathy
HCV/HBV: see Viral Hepatitis template`,monitoring:`• LFTs weekly during workup of acute liver injury; trend and pattern evolution
• INR: synthetic function marker — NOT for anticoagulation in chronic liver disease; use for acute injury severity
• Serial FIB-4: at baseline and every 1-2 years to track fibrosis progression (non-invasive)
• Hepatology referral: ALT persistently >2x ULN after 6 months workup, FIB-4 >2.67, or any uncertain diagnosis`,disposition:`• ICU: acute liver failure (see ALF template)
• Hepatology consult: unexplained chronic LFT elevation, suspected AIH, PSC, hemochromatosis, Wilson's, elevated FIB-4
• Outpatient: mild-moderate LFT elevation without acute illness — initiate systematic workup, follow-up in 4-6 weeks`},{id:`viral-hepatitis`,system:`gi`,title:`Viral Hepatitis (A/B/C/D/E)`,keywords:[`viral hepatitis`,`hepatitis A`,`hepatitis B`,`hepatitis C`,`HBV`,`HCV`,`HAV`,`HBsAg`,`HCV RNA`,`anti-HCV`,`hepatitis serology`,`cirrhosis hepatitis`,`DAA`,`tenofovir`,`entecavir`,`sofosbuvir`,`hepatitis D`,`hepatitis E`],source:{chapter:`Gastroenterology`,section:`Viral Hepatitis`,pages:`81`,authors:`Daniel Restifo`,keyFacts:[`Hepatitis A: fecal-oral; self-limited; anti-HAV IgM diagnostic (positive 3-6 months); treatment supportive; vaccine = 2 doses; indications include MSM, PWID, travel, chronic liver disease, HIV, homeless`,`Hepatitis B: 40% cirrhosis risk if chronic; HBsAg + anti-HBc IgM = acute; HBsAg >6 months = chronic; first-line treatment: tenofovir (TAF/TDF) or entecavir; screen all adults once + high-risk groups`,`Hepatitis C: most common cause of liver transplantation in US; HCV Ab + HCV RNA confirmatory; cure rate >95% with 8-12 week DAA (direct-acting antiviral) regimens (sofosbuvir-based); screen all adults 18-79 years`,`HBsAg reactivation: all patients on immunosuppression (rituximab, anti-TNF, steroids, chemo) — check HBsAg + anti-HBc total before treatment; entecavir prophylaxis if HBsAg+ or anti-HBc+`,`HBV-HCC screening: all HBsAg+ with cirrhosis, HBsAg+ with high-risk demographics (Asian/Black males >40; Asian females >50) — liver US + AFP every 6 months`]},assessment:`#Viral Hepatitis
Acute vs chronic: acute (jaundice/fever/RUQ pain/malaise — onset <6 months) [ ] / chronic (incidental LFT elevation/cirrhosis signs) [ ]
Serology results:
HBsAg: ___  Anti-HBs: ___  Anti-HBc total: ___  Anti-HBc IgM: ___ (acute)
HCV Ab: ___  HCV RNA: ___ (confirmatory for active infection if Ab positive)
Anti-HAV IgM: ___  |  HEV IgM/RNA: ***
Viral load (if chronic): HBV DNA *** / HCV RNA ***  |  HCV genotype: ***
Fibrosis assessment: FIB-4 *** / liver stiffness ***  |  Signs of cirrhosis: [ ] Yes  [ ] No
Immunosuppression planned: [ ] Yes → check HBsAg + anti-HBc total BEFORE starting`,ddx:`HEPATITIS A (HAV): acute self-limited hepatitis; fecal-oral; outbreaks common (MSM, food contamination); rarely fulminant (<1%); immunocompromised → prolonged/relapsing course
HEPATITIS B (HBV): vertical/perinatal (high endemicity regions), sexual, blood exposure; acute → chronic in <5% adults (vs 90% neonates); complications: cirrhosis, HCC, polyarteritis nodosa (extra-hepatic)
HEPATITIS C (HCV): blood exposure (PWID most common), sexual (lower risk), vertical, tattoo; 80% chronic; complications: cirrhosis, HCC, cryoglobulinemia, membranoproliferative GN, porphyria cutanea tarda, B-cell lymphoma
HEPATITIS D (HDV): requires HBV co-infection; coinfection = more severe acute hepatitis; superinfection = most severe → cirrhosis in 80% in 5-10 years
HEPATITIS E (HEV): fecal-oral or blood transfusion; self-limited in immunocompetent; severe in pregnancy (mortality up to 25%); chronic infection in immunocompromised (transplant recipients); ribavirin if chronic`,workup:`HBV SEROLOGY INTERPRETATION:
• HBsAg+ / anti-HBc IgM+ / anti-HBs−: ACUTE HBV
• HBsAg+ / anti-HBc total+ / anti-HBs− for >6 months: CHRONIC HBV (check HBeAg, HBV DNA, ALT)
• HBsAg− / anti-HBs+ / anti-HBc−: VACCINATED (immune)
• HBsAg− / anti-HBs+ / anti-HBc+: RECOVERED from past HBV (immune)
• HBsAg− / anti-HBs− / anti-HBc+: ISOLATED anti-HBc (window, remote infection, occult HBV) → check HBV DNA
CHRONIC HBV MONITORING: HBV DNA, ALT, HBeAg/Ab (defines replication activity); HBsAg quantification (if HBsAg loss = functional cure)
HCV: HCV Ab (ELISA — may be negative in early infection); HCV RNA (confirms active infection); if RNA negative + Ab positive = cleared infection; genotype before treatment (guides DAA choice and duration)
FIBROSIS: FIB-4 (age×AST)/(PLT×√ALT) — <1.45 = low fibrosis; >3.25 = advanced fibrosis; liver elastography (FibroScan) for F3/F4 staging; liver biopsy if inconclusive`,management:`HEPATITIS A: supportive care; avoid hepatotoxic drugs (APAP in excess); alcohol cessation; vaccination of household contacts; post-exposure prophylaxis (vaccine + HAV immunoglobulin within 2 weeks)
CHRONIC HBV:
Treatment indications: HBV DNA >2000 IU/mL + ALT elevated; HBV DNA >20,000 IU/mL (regardless of ALT); compensated cirrhosis; decompensated cirrhosis; HCC; immunosuppression
• First-line: tenofovir alafenamide (TAF) 25mg PO qday OR tenofovir disoproxil fumarate (TDF) 300mg PO qday OR entecavir 0.5mg PO qday (1mg if prior lamivudine resistance)
• Monitor: HBV DNA and ALT every 3-6 months; HBeAg seroconversion; goal HBV DNA undetectable
• HCC screening: US + AFP every 6 months if cirrhotic or high-risk demographics
• HBsAg REACTIVATION PROPHYLAXIS: all patients starting rituximab, anti-TNF, high-dose steroids, chemotherapy — check HBsAg + anti-HBc total; if HBsAg+ → start entecavir before immunosuppression; if anti-HBc+ only → monitor HBV DNA OR prophylactic entecavir
HEPATITIS C (HCV):
• Cure rate >95% with 8-12 week pangenotypic DAA regimen
• First-line: sofosbuvir/velpatasvir (Epclusa) 400/100mg PO qday x12 weeks (genotypes 1-6); OR glecaprevir/pibrentasvir (Mavyret) x8-12 weeks
• Simplified HCV treatment (2020 AASLD guidance): most treatment-naive non-cirrhotic patients can initiate with minimal pre-treatment labs — renal function, CBC, HCV genotype NOT required before pangenotypic regimens
• SVR (Sustained Virologic Response = cure): HCV RNA undetectable at 12 weeks post-treatment; check HCV RNA at end of treatment + 12 weeks after
• Post-SVR: HCC surveillance continues if cirrhosis or advanced fibrosis (US + AFP q6 months)
HEPATITIS D: no approved antiviral in US; pegylated interferon (off-label) for chronic HDV; bulevirtide approved in Europe
HEPATITIS E: supportive for immunocompetent acute cases; ribavirin 600-1000mg/day x3-6 months for chronic HEV (immunocompromised)`,monitoring:`HBV: HBV DNA + ALT every 3-6 months on treatment; HBeAg seroconversion (important milestone); HBsAg annually (loss = functional cure — rare but goal); kidney function on TDF (switch to TAF if CrCl declining)
HCV: HCV RNA at end of treatment + 12 weeks post-treatment (SVR12 = cure); no routine monitoring needed if SVR achieved (and no cirrhosis); HCC surveillance if advanced fibrosis/cirrhosis`,disposition:`• Hepatology consult: chronic HBV/HCV initiation of treatment, HCC screening, cirrhosis management, decompensated hepatitis
• Acute HAV/HEV: most discharged with supportive care; admit for ALF or unable to maintain hydration
• ID consult: HBV reactivation, HIV coinfection, complex drug interactions`},{id:`alcohol-related-liver-disease`,system:`gi`,title:`Alcohol-Related Liver Disease (ALD / Alcoholic Hepatitis)`,keywords:[`alcoholic hepatitis`,`alcohol liver disease`,`ALD`,`AH`,`Maddrey discriminant function`,`MDF`,`Lille score`,`prednisolone AH`,`pentoxifylline`,`MELD AH`,`AUDIT C`,`alcoholic cirrhosis`,`steatohepatitis`,`EtOH liver`,`thiamine`],source:{chapter:`Gastroenterology`,section:`Alcohol-Related Liver Disease`,pages:`82`,authors:`Sophie Pan, Shawna Walsh`,keyFacts:[`Alcohol-related hepatitis (AH) diagnosis: jaundice within 8 weeks, heavy alcohol use, AST 50-400 (with AST/ALT >1.5), total bili >3, <60 days abstinence before onset`,`Maddrey Discriminant Function (MDF): 4.6×(PT−12) + total bilirubin — MDF ≥32 = severe AH → corticosteroids indicated (if no contraindications)`,`Prednisolone 40mg/day x28 days: reduces 28-day mortality in severe AH (MDF ≥32); assess response with Lille score at day 4-7 (>0.45 = non-responder → stop steroids)`,`Contraindications to steroids in AH: active/uncontrolled infection, uncontrolled GI bleeding, renal failure (Cr >2.5), severe acute pancreatitis, untreated HIV/HBV/HCV/TB`,`Alcohol use disorder treatment: motivational interviewing + pharmacotherapy (baclofen, acamprosate, naltrexone); disulfiram contraindicated in liver disease`]},assessment:`#Alcohol-Related Liver Disease
Drinking history: *** drinks/day for *** years; last drink ***; AUDIT-C score: ***
AH criteria: jaundice onset <8 weeks [ ] / AST 50-400 [ ] (AST/ALT ratio >1.5 [ ]) / T-bili >3 [ ] / <60d abstinence [ ]
Severity scoring:
Maddrey Discriminant Function (MDF): 4.6×(PT−12) + T-bili = *** (≥32 = severe → steroids)
MELD: *** (>21 = severe; >35 = very severe)
Lille score (if on steroids day 4-7): *** (>0.45 = non-responder → stop steroids)
Steroid contraindications: active infection [ ] / uncontrolled GIB [ ] / Cr >2.5 [ ] / severe pancreatitis [ ] / untreated HIV/HBV/TB [ ]
Signs of portal HTN: ascites [ ] / varices [ ] / HE [ ] | CTP class: *** | MELD-Na: ***`,ddx:`ALCOHOL-RELATED HEPATITIS DDx (must exclude other etiologies):
• HBV/HCV hepatitis: check serology (HBsAg, anti-HBc IgM, HCV Ab + RNA)
• APAP toxicity: AST often >10x ULN; APAP level even without clear history
• Autoimmune hepatitis: ANA, ASMA, IgG (may overlap with ALD)
• Ischemic hepatitis: preceding hypotension, rapid rise/fall pattern
• Budd-Chiari: RUQ pain + ascites + hepatomegaly → Doppler ultrasound
• DILI: medication/supplement review — LiverTox database
• Acute biliary obstruction: elevated ALP > AST/ALT; US/MRCP
ALD SPECTRUM:
• Steatosis: mild AST/ALT elevation, reversible with abstinence
• Alcohol-related hepatitis (AH): acute inflammatory syndrome; jaundice + systemic features
• Cirrhosis due to ALD: progressive fibrosis; CTP and MELD scoring for prognosis`,workup:`• LFTs: AST/ALT ratio >1.5 (often >2:1) + GGT markedly elevated — characteristic of ALD/AH
• CBC: leukocytosis (AH — not necessarily infection; steroids will worsen), thrombocytopenia (hypersplenism)
• BMP, Cr (Lille score, HRS risk), electrolytes
• Coagulation: INR/PT (MDF calculation), fibrinogen
• T-bili, direct bili (MDF calculation and prognosis)
• RUQ US with Doppler: liver echogenicity, ascites, Budd-Chiari exclusion, portal vein patency, HCC screen
• Blood cultures x2 (exclude bacteremia — fever in AH can be AH itself or infection)
• RUQUS + diagnostic paracentesis: if ascites present (SBP exclusion)
• Hepatitis A/B/C/E serology (exclude other hepatitis)
• APAP level (exclude acetaminophen toxicity even in ALD — common comorbid ingestion)
• Liver biopsy: rarely needed if clinical diagnosis clear; consider if uncertain diagnosis or to confirm MASH before experimental trial`,management:`ABSTINENCE: most important intervention for all stages of ALD; can result in rapid improvement
NUTRITIONAL SUPPORT:
• Goal 35 kcal/kg/day with 1.2-1.5 g/kg/day protein
• Thiamine 100mg IV TID before any glucose administration (Wernicke's prevention)
• Supplement: multivitamin, folate, B6, B12, zinc
• If <21 kcal/kg/day intake → consider NGT tube feeds
• Low caloric intake in severe AH associated with increased infection risk
SEVERE AH (MDF ≥32 or MELD >20 — no contraindications):
• Prednisolone 40mg PO qday x28 days (preferred over prednisone — better GI absorption in liver disease)
• Lille score at day 4-7: ≤0.45 = responder → complete 28 days then 2-4 week taper; >0.45 = non-responder → STOP steroids (no benefit, ↑infection risk)
• No mortality benefit at 90 days (STOPAH trial: NEJM 2015;372:1619)
SUPPORTIVE CARE:
• Hold non-selective beta-blockers if MDF ≥32 (↑AKI incidence)
• Pentoxifylline: no longer recommended as first-line (STOPAH trial)
• NAC (N-acetylcysteine): may add benefit; no clear harm; consider as adjunct (5g IV over first 30 min, then 4x 2.5g over next 6h, then 1g/h for 3 days — or adjusted protocol)
• Prophylactic norfloxacin or TMP-SMX: for AH with MELD >20 (infection prophylaxis)
ALCOHOL USE DISORDER TREATMENT:
• Baclofen: GABA-B agonist; 10-20mg TID; evidence in liver disease (unlike naltrexone); reduces craving
• Acamprosate 666mg TID: reduces craving; safe in liver disease; avoid if severe renal failure
• Naltrexone: avoid in liver disease (hepatotoxic potential)
• Gabapentin: emerging evidence for AUD; safe in liver disease
• Disulfiram: CONTRAINDICATED in liver disease
LIVER TRANSPLANTATION (AH):
• Severe AH (MELD >21) not responding to medical therapy
• Select centers in US and Europe offer early LT; requires multidisciplinary evaluation; no prior decompensation + strong psychosocial support + commitment to abstinence`,monitoring:`• LFTs, INR, bilirubin daily in severe AH (first week); then 2-3x/week
• Lille score on day 4-7: most important predictor of steroid response
• BMP and Cr daily (HRS risk): stop steroids if Cr >2.5 mg/dL (Lille score modified)
• Temperature and WBC twice daily: infection surveillance (steroids impair immunity)
• Nutrition tracking: daily caloric count; advance tube feeds if insufficient PO`,disposition:`• ICU: severe AH with MELD >35, hemodynamic instability, HRS, hepatic encephalopathy
• Hepatology consult: all severe AH, steroid management, liver transplant evaluation
• Addiction psychiatry/medicine: all ALD patients — AUD treatment initiation
• Social work: housing, rehabilitation, behavioral health support for sustained abstinence`},{id:`metabolic-liver-disease`,system:`gi`,title:`Metabolic Liver Disease (MASLD / MASH / Hemochromatosis / Wilson's / Alpha-1AT)`,keywords:[`MASLD`,`MASH`,`NAFLD`,`NASH`,`metabolic liver disease`,`hepatic steatosis`,`fatty liver`,`hemochromatosis`,`Wilson disease`,`alpha-1-antitrypsin`,`resmetirom`,`semaglutide liver`,`FIB-4`,`CAP score`,`liver biopsy fibrosis`,`autoimmune hepatitis`],source:{chapter:`Gastroenterology`,section:`Metabolic Liver Disease`,pages:`83`,authors:`Sophie Pan, Shawna Walsh`,keyFacts:[`MASLD (renamed from NAFLD): hepatic steatosis + ≥1 metabolic risk factor (obesity, T2DM, dyslipidemia, HTN) without significant alcohol use; 10-46% prevalence in US`,`FIB-4 score = age×AST/(platelets×√ALT): <1.45 = low fibrosis risk; 1.45-3.25 = indeterminate → elastography; >3.25 = advanced fibrosis; excellent non-invasive screening tool`,`Resmetirom (Rezdiffra): first FDA-approved medication for MASH with fibrosis (F2-F3); thyroid hormone receptor-β agonist; approved March 2024 — reduces steatohepatitis and fibrosis`,`Hemochromatosis (HFE C282Y): iron saturation >45% + elevated ferritin → HFE gene testing; treat with therapeutic phlebotomy (weekly until ferritin 50-100 ng/mL); avoid iron, Vitamin C supplements, raw shellfish`,`Wilson's disease: young patient with liver disease + neuropsychiatric + Kayser-Fleischer rings + Coombs-negative hemolytic anemia; low ceruloplasmin + elevated 24h urine copper; treat with D-penicillamine or trientine`]},assessment:`#Metabolic Liver Disease
MASLD risk factors: obesity (BMI *** ) [ ] / T2DM (HbA1c ***) [ ] / dyslipidemia [ ] / HTN [ ] / OSA [ ]
Alcohol use: *** (women: <14 drinks/week; men: <21 drinks/week = MASLD vs. ALD threshold)
LFTs: ALT *** / AST *** (AST:ALT ratio *** — <1 typical MASLD) | ALP *** | GGT ***
FIB-4 = age×AST/(PLT×√ALT) = *** (<1.45 = low; 1.45-3.25 = indeterminate → elastography; >3.25 = advanced fibrosis)
Imaging: US (echogenicity) [ ] / FibroScan (CAP score: *** steatosis; liver stiffness *** kPa) [ ]
Signs of cirrhosis/portal HTN: *** | MELD: ***
Other metabolic liver diseases:
Hemochromatosis: iron sat >45% [ ] / elevated ferritin [ ] / HFE gene: ***
Wilson's: ceruloplasmin <20 mg/dL [ ] / 24h urine copper *** / KF rings [ ]
Alpha-1AT: A1AT level *** / phenotype (Pi*ZZ) ***`,ddx:`MASLD/MASH DDx (exclude other causes of hepatic steatosis):
• Alcohol (ALD): >21 drinks/week men / >14 women; AST/ALT >2; GGT markedly elevated
• Drug-induced hepatic steatosis: methotrexate, amiodarone, tamoxifen, steroids, valproate, antiretrovirals
• Viral hepatitis (HCV — genotype 3 causes steatosis), HBV
• Total parenteral nutrition (TPN-associated steatohepatitis)
• Wilson's disease (young patient)
• Hypothyroidism, Cushing's, PCOS, lipodystrophy
GENETIC/METABOLIC LIVER DISEASES:
• Hemochromatosis (HFE C282Y/H63D): iron overload → cirrhosis + HCC + cardiomyopathy + diabetes + hypogonadism + bronze skin
• Wilson's disease: autosomal recessive copper accumulation; KF rings + hepatitis + neuropsychiatric + Coombs-negative hemolytic anemia; <40 years old; low ceruloplasmin
• Alpha-1 antitrypsin deficiency (Pi*ZZ phenotype): liver disease (cirrhosis/HCC) + emphysema; serum A1AT low; liver biopsy shows PAS+ globules
• Autoimmune hepatitis (AIH): female predominance, elevated IgG, ANA + ASMA positive; steroid-responsive; 2 subtypes (Type 1: ANA/ASMA; Type 2: LKM-1)`,workup:`MASLD/MASH:
• FIB-4 score: screening for fibrosis — if <1.45 = low risk (no further testing); 1.45-3.25 → liver elastography
• Vibration-controlled transient elastography (FibroScan): liver stiffness (kPa) for fibrosis; CAP score for steatosis; widely available, non-invasive
• Liver biopsy (MASLD Activity Score — NAS): if elastography indeterminate, clinical trial enrollment, or treatment decision-making
• Cardiometabolic workup: HbA1c, fasting lipids, blood pressure, weight
HEMOCHROMATOSIS:
• Iron saturation (transferrin sat) >45% + elevated ferritin → HFE C282Y mutation testing
• Liver biopsy: if HFE neg + iron overload; hepatic iron index; rule out other causes
• Ferritin >1000 ng/mL: advanced fibrosis likely; liver biopsy recommended before phlebotomy
• EKG + TTE (cardiomyopathy), glucose/HbA1c (diabetes), testosterone (hypogonadism)
WILSON'S DISEASE (age <40 with unexplained liver disease):
• Ceruloplasmin (low in 85%); 24h urine copper (>100 mcg/24h); slit-lamp ophthalmology (KF rings — in 50% of hepatic disease; 98% with neuropsychiatric)
• Serum copper (elevated in acute liver failure; otherwise low free copper)
• Liver biopsy + hepatic copper quantification (>250 mcg/g dry weight = diagnostic)
AUTOIMMUNE HEPATITIS (AIH):
• ANA, ASMA (anti-smooth muscle antibody), IgG levels; anti-LKM1 (Type 2 AIH)
• Liver biopsy: interface hepatitis, plasma cell infiltrate (classic histology); required for diagnosis`,management:`MASLD/MASH:
• Lifestyle modification (cornerstone): weight loss 7-10% body weight → significant histologic improvement (↓steatosis, ↓inflammation, ↓fibrosis); Mediterranean diet; exercise 150 min/week moderate activity
• Treat metabolic comorbidities: GLP-1 agonists (semaglutide reduces steatohepatitis; data for MASH); SGLT-2 inhibitors; statins safe in MASLD (reduce cardiovascular risk; no hepatotoxicity concern at normal transaminases)
• Resmetirom (Rezdiffra) 80-100mg PO qday: FDA-approved March 2024 for F2-F3 MASH (biopsy-confirmed); thyroid hormone receptor-β agonist; reduces steatohepatitis + fibrosis; check TSH before starting
• Vitamin E 800 IU/day: reduces steatohepatitis in non-diabetic adults (PIVENS trial — NEJM 2010;362:1675); controversy about long-term cardiovascular and cancer risk
• Avoid: hepatotoxic supplements; limit alcohol; avoid fructose-heavy foods
• Liver transplant referral: cirrhosis with MELD ≥15; HCC within Milan criteria
HEMOCHROMATOSIS:
• Therapeutic phlebotomy: 1 unit pRBC (450-500mL) weekly until ferritin 50-100 ng/mL + iron saturation <50%; then maintenance phlebotomy every 2-4 months
• Avoid: iron supplements, vitamin C (enhances iron absorption), raw shellfish (Vibrio vulnificus risk), excessive alcohol
• First-degree family screening: HFE gene testing
WILSON'S DISEASE:
• D-penicillamine 250-500mg PO QID (increasing dose): copper chelation; monitor urine copper and neurological status; start low and increase slowly to avoid neurological worsening
• Trientine (alternative): fewer side effects than D-penicillamine; preferred if neurological disease
• Zinc acetate 50mg TID: maintenance after decoppering; reduces intestinal copper absorption; mild side effects
• Liver transplant: acute liver failure from Wilson's (curative); cirrhosis
AUTOIMMUNE HEPATITIS:
• Prednisone 40-60mg/day → taper + azathioprine 1-2mg/kg/day: goal ALT normalization + IgG normalization; biopsy to confirm histologic remission before stopping (relapse common)
• Budesonide + azathioprine: alternative to prednisone for non-cirrhotic AIH (less systemic steroid SE)`,monitoring:`MASLD: LFTs every 3-6 months; FIB-4/elastography every 1-2 years to track fibrosis progression; HCC surveillance (US + AFP q6 months) if cirrhosis
HEMOCHROMATOSIS: ferritin + iron saturation every 3-6 months during phlebotomy; annually once stable; annual LFTs; DEXA scan (osteoporosis common)
WILSON'S: 24h urine copper + LFTs + CBC every 3-6 months on treatment; ceruloplasmin and slit-lamp exams annually
AIH: LFTs + IgG every 3-6 months; biopsy before stopping immunosuppression`,disposition:`• Hepatology consult: MASH with advanced fibrosis (FIB-4 >3.25), hemochromatosis with significant iron loading, Wilson's disease, AIH initiation and management
• Liver transplant center: any metabolic liver disease with MELD ≥15 or HCC
• Genetic counseling: hemochromatosis (family screening), Wilson's, A1AT deficiency`},{id:`liver-transplant`,system:`gi`,title:`Liver Transplant — Indications, Complications, and Inpatient Management`,keywords:[`liver transplant`,`OLT`,`MELD score`,`Milan criteria`,`HCC transplant`,`post-liver-transplant`,`transplant rejection`,`tacrolimus`,`CNI`,`calcineurin inhibitor`,`post-transplant complications`,`biliary complication post liver`,`hepatic artery thrombosis`,`UNOS`,`transplant listing`],source:{chapter:`Gastroenterology`,section:`Liver Transplant`,pages:`89`,authors:`Daniel Restifo`,keyFacts:[`OLT indications: MELD ≥15, cirrhosis complications (ascites/HE/variceal bleed/HRS/gastropathy bleed), HCC within Milan criteria, acute liver failure, metabolic disorders, severe alcoholic hepatitis (select cases)`,`Milan criteria for HCC: single lesion ≤5cm OR up to 3 lesions all ≤3cm + no extrahepatic involvement + no major vessel invasion — meets criteria = transplant listing eligible`,`MELD score = 3.78×ln(bilirubin) + 11.2×ln(INR) + 9.57×ln(creatinine) + 6.43; MELD-Na = MELD + 1.32×(137-Na) − [0.033×MELD×(137-Na)] — determines organ allocation priority`,`Post-transplant immunosuppression: tacrolimus (CNI) first-line + mycophenolate mofetil (MMF) ± prednisone taper; tacrolimus levels: 8-12 ng/mL first 3 months, 5-8 ng/mL long-term`,`Acute cellular rejection: liver biopsy showing portal inflammation + bile duct damage + endotheliitis; treat with pulse methylprednisolone 500-1000mg IV x3 days; usually steroid-responsive`]},assessment:`#Liver Transplant — Assessment
Pre-transplant listing evaluation:
MELD-Na: *** (listing priority; ≥15 = transplant benefit > risk)
Indication: [ ] ESLD/cirrhosis  [ ] ALF  [ ] HCC (Milan criteria: ***)  [ ] Metabolic disorder  [ ] Biliary disease  [ ] Severe AH
Absolute contraindications: severe cardiac/pulmonary disease [ ] / AIDS [ ] / HCC beyond Milan (metastatic) [ ] / active substance use within 6mo [ ] / uncontrolled sepsis [ ] / mPAP >35 or PVR >400 [ ]
Post-transplant (if admitted):
Days post-OLT: *** | Tacrolimus level: *** (goal: early 8-12 ng/mL; long-term 5-8 ng/mL)
Immunosuppression: Tacrolimus *** / MMF *** / Prednisone ***
Current concern: [ ] Rejection  [ ] Infection  [ ] Biliary complication  [ ] Vascular complication  [ ] Medication toxicity`,ddx:`PRE-TRANSPLANT — EXCLUSIONS AND TIMING:
• Absolute contraindications: extrahepatic malignancy (except non-melanoma skin), intrahepatic cholangiocarcinoma, uncontrolled systemic infection, severe cardiopulmonary disease (cardiac stress test required), active substance use, anatomic impossibility, mPAP >35 (portopulmonary HTN)
• Relative contraindications: age >70, BMI >40, prior malignancy, HIV (unless adequate immune function), severe psychiatric disease
POST-TRANSPLANT COMPLICATIONS (by timing):
EARLY (<1 month):
• Primary non-function (PNF): immediate graft failure; re-transplantation urgently required
• Hepatic artery thrombosis (HAT): most common vascular complication; Doppler US urgently; if early → IR thrombectomy or surgical revision; if late → biliary strictures ("cholangiopathy")
• Biliary leak: T-tube site or anastomotic; T-bili rising, bilious drain output; CT or ERCP for diagnosis + stenting
• Acute cellular rejection (ACR): day 7-21; elevated LFTs (↑ALT > ALP); liver biopsy; methylprednisolone pulse x3 days
INTERMEDIATE (1-12 months):
• Infections: CMV (most common viral — monitor CMV PCR; ganciclovir prophylaxis then valganciclovir), PCP (TMP-SMX prophylaxis), fungal, BK virus (if kidney comorbidity)
• Biliary anastomotic stricture: progressive cholestasis; ERCP with dilation + stenting
• Chronic rejection: progressive cholestasis, ductopenia on biopsy; difficult to treat
LATE (>1 year):
• Metabolic complications: hypertension, DM, hyperlipidemia, CKD (CNI nephrotoxicity), obesity, de novo malignancy
• Recurrent disease: recurrent HCV/HBV, recurrent MASLD, recurrent AIH, PSC de novo
• CNI (calcineurin inhibitor) nephrotoxicity: progressive CKD; minimize tacrolimus dose`,workup:`PRE-TRANSPLANT EVALUATION (standard workup):
• Cardiac: TTE with bubble study; dobutamine stress echo (if age >40 or CAD RFs); hepatopulmonary syndrome (SpO2 on room air; ABG if <96%)
• Pulmonary: PFTs; portopulmonary HTN workup (TTE → RHC if RVSP >50mmHg)
• Metabolic: HbA1c, lipids, BMI, renal function
• Cancer screening: colonoscopy, mammography, Pap smear, PSA (age-appropriate); skin exam
• ID: IGRA/PPD (latent TB); coccidioidomycosis/Strongyloides if endemic area; HIV, HBV/HCV (screen donor + recipient); dental clearance
POST-TRANSPLANT (abnormal LFTs or complication):
• RUQ Doppler US: hepatic artery patency (HAT), portal vein, hepatic vein, bile duct dilation
• Tacrolimus level (trough): subtherapeutic → rejection risk; supratherapeutic → nephrotoxicity/neurotoxicity
• Liver biopsy: rejection, recurrent disease, drug toxicity — required for diagnosis
• CMV PCR, EBV PCR, HCV RNA, HBV DNA (monitor for recurrence)
• BMP (tacrolimus → hyperkalemia, hypertension, CKD)`,management:`ACUTE CELLULAR REJECTION:
• Pulse methylprednisolone 500-1000mg IV qday x3 days — steroid-resistant: OKT3 or anti-thymocyte globulin (ATG)
• Do NOT reduce immunosuppression
• Hepatology/transplant surgery consult immediately
BILIARY COMPLICATIONS:
• Anastomotic stricture: ERCP with balloon dilation + stent placement (first-line); surgery if ERCP fails
• Biliary leak: ERCP with stent + sphincterotomy; biliary drainage; surgery if ERCP fails; percutaneous drainage if biloma
HEPATIC ARTERY THROMBOSIS:
• Early HAT: urgent surgical re-exploration + revascularization or re-transplantation
• Late HAT: manage ischemic biliary strictures (ERCP/PTC); re-transplant if needed
IMMUNOSUPPRESSION MANAGEMENT:
• Tacrolimus: target levels based on time post-transplant + rejection/toxicity balance; nephrotoxicity common (CKD — reduce dose and add MMF or switch to everolimus)
• MMF 1g BID: antiproliferative; myelosuppression common (↓dose if WBC <3000/mm³)
• Prednisone: wean over 3-12 months in low-rejection risk patients
• Infection prophylaxis (standard post-OLT): TMP-SMX (PCP), fluconazole (Candida — first 3 months), valganciclovir (CMV — 6-12 months, dose-adjusted for renal function)
HBV RECURRENCE PREVENTION: all HBsAg+ recipients → entecavir prophylaxis + HBV immunoglobulin (HBIG) post-OLT
HCV RECURRENCE: all recurrent HCV → DAA treatment (excellent SVR rates post-transplant); fibrosing cholestatic hepatitis (rapid recurrence) → urgent DAA therapy`,monitoring:`• Tacrolimus trough level: every 3-7 days first month; weekly for first 6 months; monthly once stable
• LFTs and CBC weekly first month; biweekly for 3 months; monthly then quarterly
• CMV PCR weekly for first 3 months (if high-risk donor+/recipient−); monthly if low-risk
• BMP (K+, Cr): tacrolimus nephrotoxicity and hyperkalemia monitoring
• Annual cancer screening: skin cancer (highest risk — annual dermatology), colorectal, cervical, breast
• Metabolic syndrome management: BP, lipids, glucose, BMI`,disposition:`• Inpatient transplant hepatology: all post-transplant complications; adjust immunosuppression
• Return to OR: hepatic artery thrombosis (early), PNF, refractory rejection
• Outpatient: stable post-transplant patients — tacrolimus monitoring, metabolic syndrome management, cancer screening
• Social work: medication costs, adherence support, substance use monitoring`}],g=`You are a senior Internal Medicine physician and clinical reasoning expert at an academic medical center. Your role is to help residents systematically work through a differential diagnosis based on a clinical presentation.

A resident will provide you with a clinical vignette — this may include chief complaint, HPI, vitals, exam findings, or preliminary labs. Your job is to generate a structured, ranked differential diagnosis.

IMPORTANT RULES:
1. Return ONLY valid JSON — no markdown, no explanation outside the JSON structure.
2. Rank diagnoses from most likely to least likely based on the clinical presentation provided.
3. For each diagnosis, indicate urgency: "critical" (cannot miss, life-threatening), "high" (time-sensitive, needs urgent workup), "moderate" (important but not immediately life-threatening), or "low" (less urgent, outpatient consideration).
4. Keep reasoning concise — 1-2 sentences per diagnosis explaining why it fits this specific presentation.
5. List 2-4 key clinical features from the presentation that support each diagnosis.
6. Map to a template ID from this list when applicable: cap, copd-exac, hf-exac, afib-rvr, acs, syncope, sepsis, pe, shock, ugib, aki, hyponatremia, hyperkalemia, dka, ssti, ams, etoh-withdrawal. If no matching template exists, use null.
7. Generate 4-7 diagnoses depending on complexity of the presentation.
8. Start with a brief 1-sentence clinical summary of the presentation.

Return this exact JSON structure:
{
  "summary": "Brief 1-sentence synthesis of the clinical presentation",
  "diagnoses": [
    {
      "rank": 1,
      "title": "Diagnosis Name",
      "urgency": "critical | high | moderate | low",
      "reasoning": "Why this fits the presentation in 1-2 sentences.",
      "supporting_features": ["feature 1", "feature 2", "feature 3"],
      "template_id": "template-id or null"
    }
  ]
}`,_=[`72F with HTN and DM presents with 3 days of worsening dyspnea, orthopnea, and bilateral leg swelling. O2 sat 88% on RA. HR 110, BP 165/90. Crackles bilateral bases. JVP elevated. BNP 2800.`,`58M with heavy alcohol use presents with tremors, diaphoresis, and agitation 18h after last drink. HR 122, BP 158/96, T 37.9. Oriented to person only. Last CIWA score 18.`,`34F with hx of oral contraceptive use presents with 2 days of left leg swelling and pleuritic chest pain. HR 108, O2 sat 94% on RA. D-dimer 3.2. S1Q3T3 on EKG.`,`66M with CKD3 presents with weakness and palpitations. K+ 6.8. EKG shows peaked T-waves and widened QRS. BP 138/82.`,`45F with Type 1 DM presents with 2 days of nausea, vomiting, and polyuria. BG 380, pH 7.18, bicarb 10, AG 24. Recent URI treated with steroids.`,`80M with dementia presents from nursing home with acute confusion, fever of 38.9, and foul-smelling urine. BP 88/52. HR 118. WBC 18k. Cr 2.4 (baseline 1.1).`,`52M with known cirrhosis presents with hematemesis and lightheadedness. BP 90/55, HR 128. Hgb 7.2. History of prior variceal bleed.`],v=`You are a senior Internal Medicine resident generating Epic EMR dot-phrase templates.

Your job: condense a clinical diagnosis into a clean, copy-pastable dot-phrase note template.

CRITICAL RULE — *** USAGE:
Use *** ONLY for patient-specific values the clinician must fill in at the bedside — things that are different for every patient encounter. These include:
- Specific vital signs or lab values (e.g., "SpO2 ***%", "HR *** bpm", "K+ *** mEq/L")
- Specific clinical findings on exam (e.g., "crackles at ***", "infiltrate in *** lobe")
- Specific dates, durations, or onset timing (e.g., "onset *** days ago")
- Specific medication doses that vary by weight or renal function (e.g., "vancomycin *** mg IV q***h")

Do NOT use *** for:
- Standard drug names, standard fixed doses, or fixed treatment protocols (write these out as-is)
- Diagnostic criteria or clinical decision rules (write these out)
- Generic phrases like "as tolerated" or "per protocol"
- Anything that is the same for every patient with this diagnosis

FORMAT RULES:
1. Return ONLY the dot-phrase text — no explanation, no preamble, no markdown, no backtick fences.
2. Start with #DiagnosisName on its own line.
3. Write ONE short assessment sentence. Use *** only for patient-specific findings/values.
4. Leave a blank line after the assessment.
5. Use bullet points (•) for all plan items. No sub-bullets.
6. Workup: 3-5 most critical tests only. Write them out — no *** unless dose/timing varies per patient.
7. Management: 4-7 highest-yield interventions. Write standard fixed doses out fully. Use *** only for weight-based or renally-adjusted doses.
8. Separate workup and management with a blank line.
9. No section headers — just the bullets.
10. Total: 12-18 lines max.

Example of CORRECT *** usage:
#Community Acquired Pneumonia
Suspected CAP due to *** infiltrate on CXR with fever ***, SpO2 ***% on room air.

• Blood cultures x2
• Sputum Gram stain and culture
• Procalcitonin, Legionella urine antigen
• MRSA nasal swab

• Ceftriaxone 1g IV q24h + azithromycin 500mg PO/IV q24h
• Supplemental O2, target SpO2 ≥92%
• DVT prophylaxis
• Advance diet as tolerated, mobilize early`;function y(){let[e,t]=(0,l.useState)(``),[n,r]=(0,l.useState)(`all`),[i,a]=(0,l.useState)(null),[o,s]=(0,l.useState)({}),[c,u]=(0,l.useState)(!1),[d,y]=(0,l.useState)(!0),[b,x]=(0,l.useState)(null),[ee,S]=(0,l.useState)(null),[C,te]=(0,l.useState)(!1),[ne,re]=(0,l.useState)(``),w=async e=>{if(!C){te(!0),x(null),S(e.id);try{let t=[`Diagnosis: ${e.title}`,``,`ASSESSMENT:`,e.assessment||``,``,`WORKUP:`,e.workup||``,``,`MANAGEMENT:`,e.management||``].join(`
`),n=await fetch(`/api/claude`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({model:`claude-sonnet-4-20250514`,max_tokens:600,system:v,messages:[{role:`user`,content:t}]})}),r=await n.json();if(!n.ok){let e=r?.error?.message||`API error ${n.status}`;throw Error(e)}let i=r.content?.find(e=>e.type===`text`)?.text?.trim()||``;if(!i)throw Error(`Empty response — please try again.`);x(i)}catch(t){x(`#${e.title} — Error\n${t?.message||`Could not generate summary. Please try again.`}`)}finally{te(!1)}}},[ie,ae]=(0,l.useState)(null),oe=e=>{let t=parseInt(String(e).split(/[–\-]/)[0].trim(),10),n=`/whitebook.pdf#page=${t+3}`,r=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent),i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),a=window.open(n,`_blank`,`noopener,noreferrer`);!a||a.closed||a.closed===void 0?ae({page:t,url:n,blocked:!0}):(i||r)&&ae({page:t,url:n,blocked:!1}),setTimeout(()=>ae(null),7e3)},[se,ce]=(0,l.useState)([]),[le,ue]=(0,l.useState)(!1),T=(0,l.useRef)(null),E=(0,l.useRef)(null),de=(0,l.useRef)(null),fe=(0,l.useMemo)(()=>{let t=e.toLowerCase().trim();return h.filter(e=>n===`all`||e.system===n?t?e.title.toLowerCase().includes(t)||e.keywords.some(e=>e.includes(t))||t.split(` `).some(t=>t&&e.title.toLowerCase().includes(t)):!0:!1)},[e,n]),pe=e=>m.find(t=>t.id===e)?.color||`#8a8a85`,me=e=>m.find(t=>t.id===e)?.label||e,D=e=>[e.assessment,``,`DIFFERENTIAL DIAGNOSIS:`,e.ddx,``,`WORKUP:`,e.workup,``,`MANAGEMENT:`,e.management,``,`MONITORING:`,e.monitoring,e.disposition?``:null,e.disposition?`DISPOSITION / CONSULTS:`:null,e.disposition||null].filter(e=>e!==null).join(`
`),O=async(e,t)=>{await navigator.clipboard.writeText(t),s(t=>({...t,[e]:!0})),setTimeout(()=>s(t=>({...t,[e]:!1})),2e3)},he=e=>{a(e),T.current&&(T.current.scrollTop=0)},ge=()=>setTimeout(()=>{E.current&&(E.current.scrollTop=E.current.scrollHeight)},60),_e=e=>{let t=h.find(t=>t.id===e);t&&(u(!1),a(t),r(`all`),setTimeout(()=>{T.current&&(T.current.scrollTop=0)},300))},ve=async e=>{let t=(e||ne).trim();if(!(!t||le)){re(``),ue(!0),ce(e=>[...e,{role:`user`,content:t},{role:`loading`}]),ge();try{let e=(await(await fetch(`/api/claude`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({model:`claude-sonnet-4-20250514`,max_tokens:1e3,system:g,messages:[{role:`user`,content:t}]})})).json()).content?.find(e=>e.type===`text`)?.text||``,n=JSON.parse(e.replace(/```json|```/g,``).trim());ce(e=>[...e.filter(e=>e.role!==`loading`),{role:`ai`,result:n}])}catch{ce(e=>[...e.filter(e=>e.role!==`loading`),{role:`error`,content:`Couldn't generate differential. Try adding more clinical detail.`}])}finally{ue(!1),ge(),de.current?.focus()}}},ye=e=>{e.key===`Enter`&&!e.shiftKey&&(e.preventDefault(),ve())},be=()=>{ce([]),re(``),de.current?.focus()},xe=e=>({critical:`urgency-critical`,high:`urgency-high`,moderate:`urgency-moderate`,low:`urgency-low`})[e]||`urgency-low`;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(`style`,{children:p}),(0,f.jsxs)(`div`,{className:`app-shell`,children:[(0,f.jsxs)(`header`,{className:`header`,children:[(0,f.jsxs)(`div`,{className:`header-logo`,children:[(0,f.jsx)(`div`,{className:`header-logo-icon`,children:`⚕`}),`MGH SYNAPSE`]}),(0,f.jsx)(`div`,{className:`header-sep`}),(0,f.jsxs)(`div`,{className:`header-specialty`,children:[(0,f.jsx)(`span`,{className:`specialty-dot`}),`Internal Medicine`]}),(0,f.jsx)(`div`,{className:`header-spacer`}),(0,f.jsx)(`span`,{className:`header-badge`,children:`MGH WHITE BOOK 2025–26`})]}),(0,f.jsxs)(`main`,{className:`main`,children:[(0,f.jsx)(`nav`,{className:`tab-bar`,children:m.map(e=>(0,f.jsxs)(`button`,{className:`tab-item ${n===e.id?`active`:``}`,onClick:()=>{r(e.id),a(null)},children:[e.id!==`all`&&(0,f.jsx)(`span`,{className:`sys-dot`,style:{background:e.color}}),e.label]},e.id))}),(0,f.jsxs)(`div`,{className:`search-bar`,children:[(0,f.jsx)(`input`,{className:`search-input`,placeholder:`Search by diagnosis, symptom, or keyword…`,value:e,onChange:e=>{t(e.target.value),a(null)}}),(0,f.jsxs)(`span`,{className:`search-meta`,children:[fe.length,` templates`]})]}),(0,f.jsxs)(`div`,{className:`content-pane`,children:[(0,f.jsxs)(`div`,{className:`results-list`,children:[fe.length===0&&(0,f.jsxs)(`div`,{className:`no-results`,children:[`No templates found.`,(0,f.jsx)(`br`,{}),`Try a different search term.`]}),fe.map(e=>(0,f.jsxs)(`div`,{className:`result-card ${i?.id===e.id?`selected`:``}`,onClick:()=>he(e),children:[(0,f.jsxs)(`div`,{className:`rc-sys-row`,children:[(0,f.jsx)(`span`,{className:`sys-dot`,style:{background:pe(e.system)}}),(0,f.jsx)(`span`,{className:`rc-sys-label`,children:me(e.system)})]}),(0,f.jsx)(`div`,{className:`rc-title`,children:e.title}),(0,f.jsx)(`div`,{className:`rc-keywords`,children:e.keywords.slice(0,5).join(` · `)}),e.source&&(0,f.jsxs)(`div`,{className:`rc-page-badge`,children:[`📖 MGH White Book p.`,e.source.pages]})]},e.id))]}),(0,f.jsx)(`div`,{className:`detail-pane`,ref:T,children:i?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(`div`,{className:`detail-header`,children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`div`,{className:`detail-title`,children:i.title}),(0,f.jsxs)(`div`,{className:`detail-sys-badge`,children:[(0,f.jsx)(`span`,{className:`sys-dot`,style:{background:pe(i.system),marginRight:4}}),me(i.system)]})]}),(0,f.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8,flexShrink:0},children:[(0,f.jsx)(`button`,{className:`copy-all-btn ${o[`all-`+i.id]?`copied`:``}`,onClick:()=>O(`all-`+i.id,D(i)),children:o[`all-`+i.id]?`✓ Copied`:`⎘ Copy All`}),(0,f.jsx)(`button`,{className:`summarize-btn ${ee===i.id&&(b||C)?`active`:``}`,onClick:()=>{ee===i.id&&b?(x(null),S(null)):w(i)},disabled:C&&ee===i.id,children:C&&ee===i.id?`Generating…`:ee===i.id&&b?`✕ Close Summary`:`⚡ Dot Phrase`})]})]}),(0,f.jsx)(`div`,{className:`tag-row`,children:i.keywords.map(e=>(0,f.jsx)(`span`,{className:`tag-pill`,children:e},e))}),ee===i.id&&(C||b)&&(0,f.jsxs)(`div`,{className:`summary-block`,children:[(0,f.jsxs)(`div`,{className:`summary-block-header`,children:[(0,f.jsx)(`div`,{className:`summary-block-title`,children:`⚡ Dot Phrase Summary`}),(0,f.jsxs)(`div`,{className:`summary-block-actions`,children:[b&&(0,f.jsx)(`button`,{className:`summary-copy-btn ${o[`summary-`+i.id]?`copied`:``}`,onClick:()=>O(`summary-`+i.id,b),children:o[`summary-`+i.id]?`✓ Copied`:`⎘ Copy`}),(0,f.jsx)(`button`,{className:`summary-dismiss-btn`,onClick:()=>{x(null),S(null)},children:`✕`})]})]}),C&&ee===i.id&&!b&&(0,f.jsxs)(`div`,{className:`summary-loading`,children:[(0,f.jsxs)(`div`,{className:`summary-loading-dots`,children:[(0,f.jsx)(`span`,{}),(0,f.jsx)(`span`,{}),(0,f.jsx)(`span`,{})]}),(0,f.jsx)(`span`,{className:`summary-loading-text`,children:`Condensing into dot phrase…`})]}),b&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(`pre`,{className:`summary-content`,children:b}),(0,f.jsx)(`div`,{className:`summary-hint`,children:`Replace *** with patient-specific values before pasting into Epic.`})]})]}),i.source&&(0,f.jsxs)(`div`,{className:`source-block`,children:[(0,f.jsxs)(`div`,{className:`source-header`,children:[(0,f.jsxs)(`div`,{className:`source-header-left`,onClick:()=>y(e=>!e),style:{flex:1,cursor:`pointer`},children:[(0,f.jsx)(`span`,{className:`source-header-icon`,children:`📖`}),(0,f.jsx)(`span`,{className:`source-header-title`,children:`MGH White Book Source`}),(0,f.jsxs)(`span`,{className:`source-page-badge`,children:[`p. `,i.source.pages]})]}),(0,f.jsxs)(`div`,{className:`source-header-actions`,children:[(0,f.jsx)(`button`,{className:`source-open-pdf-btn`,onClick:e=>{e.stopPropagation(),oe(i.source.pages)},title:`Open PDF to this page`,children:`↗ Open in White Book`}),(0,f.jsx)(`span`,{className:`source-expand-icon ${d?`open`:``}`,onClick:()=>y(e=>!e),children:`▼`})]})]}),d&&(0,f.jsxs)(`div`,{className:`source-body`,children:[(0,f.jsxs)(`div`,{className:`source-meta-row`,children:[(0,f.jsxs)(`div`,{className:`source-meta-item`,children:[(0,f.jsx)(`span`,{className:`source-meta-label`,children:`Chapter`}),(0,f.jsx)(`span`,{className:`source-meta-value`,children:i.source.chapter})]}),(0,f.jsxs)(`div`,{className:`source-meta-item`,children:[(0,f.jsx)(`span`,{className:`source-meta-label`,children:`Section`}),(0,f.jsx)(`span`,{className:`source-meta-value`,children:i.source.section})]}),(0,f.jsxs)(`div`,{className:`source-meta-item`,children:[(0,f.jsx)(`span`,{className:`source-meta-label`,children:`Pages`}),(0,f.jsx)(`span`,{className:`source-meta-value`,children:i.source.pages})]}),(0,f.jsxs)(`div`,{className:`source-meta-item`,children:[(0,f.jsx)(`span`,{className:`source-meta-label`,children:`Authors`}),(0,f.jsx)(`span`,{className:`source-meta-value`,children:i.source.authors})]})]}),(0,f.jsx)(`div`,{className:`source-facts-label`,children:`Key Reference Points to Verify`}),(0,f.jsx)(`div`,{className:`source-facts-list`,children:i.source.keyFacts.map((e,t)=>(0,f.jsxs)(`div`,{className:`source-fact`,children:[(0,f.jsx)(`span`,{className:`source-fact-bullet`,children:t+1}),(0,f.jsx)(`span`,{className:`source-fact-text`,children:e})]},t))}),(0,f.jsxs)(`div`,{className:`source-disclaimer`,children:[`⚠️ Cross-reference content against `,(0,f.jsxs)(`strong`,{children:[`MGH White Book 2025–26, p. `,i.source.pages]}),` before clinical use. This tool is an educational aid — always verify against the primary source and exercise independent clinical judgment.`]})]})]}),[{label:`Assessment`,key:`assessment`,content:i.assessment},{label:`Differential Diagnosis`,key:`ddx`,content:i.ddx},{label:`Workup`,key:`workup`,content:i.workup},{label:`Management`,key:`management`,content:i.management},{label:`Monitoring`,key:`monitoring`,content:i.monitoring},i.disposition&&{label:`Disposition / Consults`,key:`disposition`,content:i.disposition}].filter(Boolean).map(e=>(0,f.jsxs)(`div`,{className:`ap-section`,children:[(0,f.jsxs)(`div`,{className:`ap-section-header`,children:[(0,f.jsx)(`span`,{className:`ap-section-label`,children:e.label}),(0,f.jsx)(`button`,{className:`copy-section-btn ${o[i.id+e.key]?`copied`:``}`,onClick:()=>O(i.id+e.key,e.content),children:o[i.id+e.key]?`✓`:`⎘ Copy`})]}),(0,f.jsx)(`pre`,{className:`ap-content`,children:e.content})]},e.key))]}):(0,f.jsxs)(`div`,{className:`empty-state`,children:[(0,f.jsx)(`div`,{className:`empty-icon`,children:`⌕`}),(0,f.jsxs)(`div`,{className:`empty-text`,children:[`Select a template from the list`,(0,f.jsx)(`br`,{}),`or search by diagnosis / symptom / keyword`]})]})})]}),ie&&(0,f.jsxs)(`div`,{className:`pdf-toast`,children:[(0,f.jsx)(`span`,{children:ie.blocked?(0,f.jsxs)(f.Fragment,{children:[`Popup blocked — `,(0,f.jsxs)(`a`,{href:ie.url,target:`_blank`,rel:`noopener noreferrer`,children:[`open PDF (p.`,ie.page,`)`]})]}):(0,f.jsxs)(f.Fragment,{children:[`Navigate to `,(0,f.jsxs)(`strong`,{children:[`page `,ie.page]}),` in the PDF if it didn't jump there automatically.`]})}),(0,f.jsx)(`button`,{className:`pdf-toast-dismiss`,onClick:()=>ae(null),children:`✕`})]}),(0,f.jsxs)(`button`,{className:`ddx-fab ${c?`open`:``}`,onClick:()=>{u(e=>!e),c||setTimeout(()=>de.current?.focus(),300)},children:[(0,f.jsx)(`span`,{className:`fab-icon`,children:c?`✕`:`⚕`}),c?`Close`:`MGH Synapse`]}),(0,f.jsxs)(`div`,{className:`ddx-popout ${c?`visible`:``}`,children:[(0,f.jsxs)(`div`,{className:`ddx-panel-header`,children:[(0,f.jsx)(`div`,{className:`ddx-panel-avatar`,children:`⚕`}),(0,f.jsxs)(`div`,{style:{flex:1},children:[(0,f.jsx)(`div`,{className:`ddx-panel-title`,children:`MGH Synapse`}),(0,f.jsx)(`div`,{className:`ddx-panel-subtitle`,children:`Describe a presentation · Get ranked differential`})]}),(0,f.jsxs)(`div`,{className:`ddx-panel-actions`,children:[se.length>0&&(0,f.jsx)(`button`,{className:`ddx-panel-btn`,onClick:be,title:`New conversation`,children:`↺`}),(0,f.jsx)(`button`,{className:`ddx-panel-btn`,onClick:()=>u(!1),title:`Close`,children:`✕`})]})]}),(0,f.jsxs)(`div`,{className:`ddx-pane`,children:[se.length===0&&(0,f.jsxs)(`div`,{className:`ddx-welcome`,children:[(0,f.jsx)(`div`,{className:`ddx-welcome-title`,children:`What's the presentation?`}),(0,f.jsx)(`div`,{className:`ddx-welcome-sub`,children:`Type a chief complaint, vitals, exam, or labs. Get a ranked differential with links to A&P templates.`}),(0,f.jsx)(`div`,{className:`ddx-chips-label`,children:`Try an example`}),(0,f.jsx)(`div`,{className:`ddx-chips-grid`,children:_.map((e,t)=>(0,f.jsx)(`button`,{className:`ddx-chip`,onClick:()=>ve(e),children:e},t))})]}),se.length>0&&(0,f.jsx)(`div`,{className:`ddx-thread`,ref:E,children:se.map((e,t)=>{if(e.role===`user`)return(0,f.jsx)(`div`,{className:`msg-user`,children:e.content},t);if(e.role===`loading`)return(0,f.jsxs)(`div`,{className:`msg-loading`,children:[(0,f.jsxs)(`div`,{className:`dot-pulse`,children:[(0,f.jsx)(`span`,{}),(0,f.jsx)(`span`,{}),(0,f.jsx)(`span`,{})]}),(0,f.jsx)(`span`,{className:`loading-label`,children:`Analyzing…`})]},t);if(e.role===`error`)return(0,f.jsx)(`div`,{className:`msg-error`,children:e.content},t);if(e.role===`ai`&&e.result){let n=e.result;return(0,f.jsxs)(`div`,{className:`msg-ai`,children:[(0,f.jsxs)(`div`,{className:`msg-ai-header`,children:[(0,f.jsx)(`div`,{className:`ai-avatar`,children:`⚕`}),`MGH Synapse`]}),(0,f.jsxs)(`div`,{className:`ddx-summary-box`,children:[(0,f.jsx)(`strong`,{children:`Summary: `}),n.summary]}),n.diagnoses?.map(e=>(0,f.jsxs)(`div`,{className:`ddx-item`,children:[(0,f.jsxs)(`div`,{className:`ddx-item-header`,children:[(0,f.jsx)(`span`,{className:`ddx-rank`,children:e.rank}),(0,f.jsx)(`span`,{className:`ddx-item-title`,children:e.title}),(0,f.jsx)(`span`,{className:`ddx-urgency ${xe(e.urgency)}`,children:e.urgency?.toUpperCase()})]}),(0,f.jsxs)(`div`,{className:`ddx-item-body`,children:[(0,f.jsx)(`div`,{className:`ddx-reasoning`,children:e.reasoning}),e.supporting_features?.length>0&&(0,f.jsx)(`div`,{className:`ddx-features`,children:e.supporting_features.map((e,t)=>(0,f.jsx)(`span`,{className:`ddx-feature-tag`,children:e},t))}),e.template_id?(0,f.jsx)(`button`,{className:`ddx-template-btn`,onClick:()=>_e(e.template_id),children:`↗ Open A&P Template`}):(0,f.jsx)(`span`,{className:`ddx-no-template`,children:`No matching template in library`})]})]},e.rank))]},t)}return null})}),(0,f.jsxs)(`div`,{className:`ddx-input-bar`,children:[(0,f.jsxs)(`div`,{className:`ddx-input-wrap`,children:[(0,f.jsx)(`textarea`,{ref:de,className:`ddx-chat-input`,rows:1,placeholder:`e.g. 68F, dyspnea, bilateral leg edema, BNP 2800…`,value:ne,onChange:e=>re(e.target.value),onKeyDown:ye,onInput:e=>{e.target.style.height=`auto`,e.target.style.height=Math.min(e.target.scrollHeight,90)+`px`}}),(0,f.jsx)(`button`,{className:`ddx-send-btn`,onClick:()=>ve(),disabled:le||!ne.trim(),children:`→`})]}),(0,f.jsxs)(`div`,{className:`ddx-input-hint`,children:[(0,f.jsx)(`span`,{children:`Enter to send · Shift+Enter for new line`}),se.length>0&&(0,f.jsx)(`button`,{className:`ddx-new-chat-btn`,onClick:be,children:`New chat`})]})]})]})]})]})]})]})}(0,u.createRoot)(document.getElementById(`root`)).render((0,f.jsx)(l.StrictMode,{children:(0,f.jsx)(y,{})}));