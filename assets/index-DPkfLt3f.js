var mx=Object.defineProperty;var gx=(e,t,r)=>t in e?mx(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var cf=(e,t,r)=>gx(e,typeof t!="symbol"?t+"":t,r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(a){if(a.ep)return;a.ep=!0;const i=r(a);fetch(a.href,i)}})();var J0={exports:{}},co={},ey={exports:{}},me={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ea=Symbol.for("react.element"),yx=Symbol.for("react.portal"),vx=Symbol.for("react.fragment"),_x=Symbol.for("react.strict_mode"),wx=Symbol.for("react.profiler"),$x=Symbol.for("react.provider"),xx=Symbol.for("react.context"),bx=Symbol.for("react.forward_ref"),kx=Symbol.for("react.suspense"),Sx=Symbol.for("react.memo"),Cx=Symbol.for("react.lazy"),pf=Symbol.iterator;function Ex(e){return e===null||typeof e!="object"?null:(e=pf&&e[pf]||e["@@iterator"],typeof e=="function"?e:null)}var ty={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ry=Object.assign,ny={};function gi(e,t,r){this.props=e,this.context=t,this.refs=ny,this.updater=r||ty}gi.prototype.isReactComponent={};gi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};gi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function iy(){}iy.prototype=gi.prototype;function Id(e,t,r){this.props=e,this.context=t,this.refs=ny,this.updater=r||ty}var zd=Id.prototype=new iy;zd.constructor=Id;ry(zd,gi.prototype);zd.isPureReactComponent=!0;var ff=Array.isArray,ay=Object.prototype.hasOwnProperty,Ad={current:null},sy={key:!0,ref:!0,__self:!0,__source:!0};function oy(e,t,r){var n,a={},i=null,s=null;if(t!=null)for(n in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)ay.call(t,n)&&!sy.hasOwnProperty(n)&&(a[n]=t[n]);var o=arguments.length-2;if(o===1)a.children=r;else if(1<o){for(var u=Array(o),d=0;d<o;d++)u[d]=arguments[d+2];a.children=u}if(e&&e.defaultProps)for(n in o=e.defaultProps,o)a[n]===void 0&&(a[n]=o[n]);return{$$typeof:Ea,type:e,key:i,ref:s,props:a,_owner:Ad.current}}function Tx(e,t){return{$$typeof:Ea,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Od(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ea}function Ix(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var hf=/\/+/g;function Zo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ix(""+e.key):t.toString(36)}function vs(e,t,r,n,a){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Ea:case yx:s=!0}}if(s)return s=e,a=a(s),e=n===""?"."+Zo(s,0):n,ff(a)?(r="",e!=null&&(r=e.replace(hf,"$&/")+"/"),vs(a,t,r,"",function(d){return d})):a!=null&&(Od(a)&&(a=Tx(a,r+(!a.key||s&&s.key===a.key?"":(""+a.key).replace(hf,"$&/")+"/")+e)),t.push(a)),1;if(s=0,n=n===""?".":n+":",ff(e))for(var o=0;o<e.length;o++){i=e[o];var u=n+Zo(i,o);s+=vs(i,t,r,u,a)}else if(u=Ex(e),typeof u=="function")for(e=u.call(e),o=0;!(i=e.next()).done;)i=i.value,u=n+Zo(i,o++),s+=vs(i,t,r,u,a);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Wa(e,t,r){if(e==null)return e;var n=[],a=0;return vs(e,n,"","",function(i){return t.call(r,i,a++)}),n}function zx(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var dt={current:null},_s={transition:null},Ax={ReactCurrentDispatcher:dt,ReactCurrentBatchConfig:_s,ReactCurrentOwner:Ad};function ly(){throw Error("act(...) is not supported in production builds of React.")}me.Children={map:Wa,forEach:function(e,t,r){Wa(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Wa(e,function(){t++}),t},toArray:function(e){return Wa(e,function(t){return t})||[]},only:function(e){if(!Od(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};me.Component=gi;me.Fragment=vx;me.Profiler=wx;me.PureComponent=Id;me.StrictMode=_x;me.Suspense=kx;me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ax;me.act=ly;me.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=ry({},e.props),a=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=Ad.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(u in t)ay.call(t,u)&&!sy.hasOwnProperty(u)&&(n[u]=t[u]===void 0&&o!==void 0?o[u]:t[u])}var u=arguments.length-2;if(u===1)n.children=r;else if(1<u){o=Array(u);for(var d=0;d<u;d++)o[d]=arguments[d+2];n.children=o}return{$$typeof:Ea,type:e.type,key:a,ref:i,props:n,_owner:s}};me.createContext=function(e){return e={$$typeof:xx,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:$x,_context:e},e.Consumer=e};me.createElement=oy;me.createFactory=function(e){var t=oy.bind(null,e);return t.type=e,t};me.createRef=function(){return{current:null}};me.forwardRef=function(e){return{$$typeof:bx,render:e}};me.isValidElement=Od;me.lazy=function(e){return{$$typeof:Cx,_payload:{_status:-1,_result:e},_init:zx}};me.memo=function(e,t){return{$$typeof:Sx,type:e,compare:t===void 0?null:t}};me.startTransition=function(e){var t=_s.transition;_s.transition={};try{e()}finally{_s.transition=t}};me.unstable_act=ly;me.useCallback=function(e,t){return dt.current.useCallback(e,t)};me.useContext=function(e){return dt.current.useContext(e)};me.useDebugValue=function(){};me.useDeferredValue=function(e){return dt.current.useDeferredValue(e)};me.useEffect=function(e,t){return dt.current.useEffect(e,t)};me.useId=function(){return dt.current.useId()};me.useImperativeHandle=function(e,t,r){return dt.current.useImperativeHandle(e,t,r)};me.useInsertionEffect=function(e,t){return dt.current.useInsertionEffect(e,t)};me.useLayoutEffect=function(e,t){return dt.current.useLayoutEffect(e,t)};me.useMemo=function(e,t){return dt.current.useMemo(e,t)};me.useReducer=function(e,t,r){return dt.current.useReducer(e,t,r)};me.useRef=function(e){return dt.current.useRef(e)};me.useState=function(e){return dt.current.useState(e)};me.useSyncExternalStore=function(e,t,r){return dt.current.useSyncExternalStore(e,t,r)};me.useTransition=function(){return dt.current.useTransition()};me.version="18.3.1";ey.exports=me;var ft=ey.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ox=ft,Nx=Symbol.for("react.element"),Rx=Symbol.for("react.fragment"),Dx=Object.prototype.hasOwnProperty,Mx=Ox.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Px={key:!0,ref:!0,__self:!0,__source:!0};function uy(e,t,r){var n,a={},i=null,s=null;r!==void 0&&(i=""+r),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(n in t)Dx.call(t,n)&&!Px.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)a[n]===void 0&&(a[n]=t[n]);return{$$typeof:Nx,type:e,key:i,ref:s,props:a,_owner:Mx.current}}co.Fragment=Rx;co.jsx=uy;co.jsxs=uy;J0.exports=co;var ue=J0.exports,dy={exports:{}},It={},cy={exports:{}},py={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(M,F){var Z=M.length;M.push(F);e:for(;0<Z;){var O=Z-1>>>1,W=M[O];if(0<a(W,F))M[O]=F,M[Z]=W,Z=O;else break e}}function r(M){return M.length===0?null:M[0]}function n(M){if(M.length===0)return null;var F=M[0],Z=M.pop();if(Z!==F){M[0]=Z;e:for(var O=0,W=M.length,K=W>>>1;O<K;){var te=2*(O+1)-1,ze=M[te],He=te+1,j=M[He];if(0>a(ze,Z))He<W&&0>a(j,ze)?(M[O]=j,M[He]=Z,O=He):(M[O]=ze,M[te]=Z,O=te);else if(He<W&&0>a(j,Z))M[O]=j,M[He]=Z,O=He;else break e}}return F}function a(M,F){var Z=M.sortIndex-F.sortIndex;return Z!==0?Z:M.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,o=s.now();e.unstable_now=function(){return s.now()-o}}var u=[],d=[],p=1,f=null,m=3,_=!1,w=!1,$=!1,S=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(M){for(var F=r(d);F!==null;){if(F.callback===null)n(d);else if(F.startTime<=M)n(d),F.sortIndex=F.expirationTime,t(u,F);else break;F=r(d)}}function k(M){if($=!1,x(M),!w)if(r(u)!==null)w=!0,Y(E);else{var F=r(d);F!==null&&le(k,F.startTime-M)}}function E(M,F){w=!1,$&&($=!1,y(z),z=-1),_=!0;var Z=m;try{for(x(F),f=r(u);f!==null&&(!(f.expirationTime>F)||M&&!X());){var O=f.callback;if(typeof O=="function"){f.callback=null,m=f.priorityLevel;var W=O(f.expirationTime<=F);F=e.unstable_now(),typeof W=="function"?f.callback=W:f===r(u)&&n(u),x(F)}else n(u);f=r(u)}if(f!==null)var K=!0;else{var te=r(d);te!==null&&le(k,te.startTime-F),K=!1}return K}finally{f=null,m=Z,_=!1}}var T=!1,I=null,z=-1,N=5,L=-1;function X(){return!(e.unstable_now()-L<N)}function Q(){if(I!==null){var M=e.unstable_now();L=M;var F=!0;try{F=I(!0,M)}finally{F?G():(T=!1,I=null)}}else T=!1}var G;if(typeof g=="function")G=function(){g(Q)};else if(typeof MessageChannel<"u"){var pe=new MessageChannel,oe=pe.port2;pe.port1.onmessage=Q,G=function(){oe.postMessage(null)}}else G=function(){S(Q,0)};function Y(M){I=M,T||(T=!0,G())}function le(M,F){z=S(function(){M(e.unstable_now())},F)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(M){M.callback=null},e.unstable_continueExecution=function(){w||_||(w=!0,Y(E))},e.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<M?Math.floor(1e3/M):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return r(u)},e.unstable_next=function(M){switch(m){case 1:case 2:case 3:var F=3;break;default:F=m}var Z=m;m=F;try{return M()}finally{m=Z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(M,F){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var Z=m;m=M;try{return F()}finally{m=Z}},e.unstable_scheduleCallback=function(M,F,Z){var O=e.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?O+Z:O):Z=O,M){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=Z+W,M={id:p++,callback:F,priorityLevel:M,startTime:Z,expirationTime:W,sortIndex:-1},Z>O?(M.sortIndex=Z,t(d,M),r(u)===null&&M===r(d)&&($?(y(z),z=-1):$=!0,le(k,Z-O))):(M.sortIndex=W,t(u,M),w||_||(w=!0,Y(E))),M},e.unstable_shouldYield=X,e.unstable_wrapCallback=function(M){var F=m;return function(){var Z=m;m=F;try{return M.apply(this,arguments)}finally{m=Z}}}})(py);cy.exports=py;var Bx=cy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lx=ft,Tt=Bx;function H(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var fy=new Set,la={};function Rn(e,t){oi(e,t),oi(e+"Capture",t)}function oi(e,t){for(la[e]=t,e=0;e<t.length;e++)fy.add(t[e])}var xr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$u=Object.prototype.hasOwnProperty,Ux=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,mf={},gf={};function jx(e){return $u.call(gf,e)?!0:$u.call(mf,e)?!1:Ux.test(e)?gf[e]=!0:(mf[e]=!0,!1)}function Wx(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Fx(e,t,r,n){if(t===null||typeof t>"u"||Wx(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ct(e,t,r,n,a,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=a,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var Je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Je[e]=new ct(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Je[t]=new ct(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Je[e]=new ct(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Je[e]=new ct(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Je[e]=new ct(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Je[e]=new ct(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Je[e]=new ct(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Je[e]=new ct(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Je[e]=new ct(e,5,!1,e.toLowerCase(),null,!1,!1)});var Nd=/[\-:]([a-z])/g;function Rd(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Nd,Rd);Je[t]=new ct(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Nd,Rd);Je[t]=new ct(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Nd,Rd);Je[t]=new ct(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Je[e]=new ct(e,1,!1,e.toLowerCase(),null,!1,!1)});Je.xlinkHref=new ct("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Je[e]=new ct(e,1,!1,e.toLowerCase(),null,!0,!0)});function Dd(e,t,r,n){var a=Je.hasOwnProperty(t)?Je[t]:null;(a!==null?a.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Fx(t,r,a,n)&&(r=null),n||a===null?jx(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):a.mustUseProperty?e[a.propertyName]=r===null?a.type===3?!1:"":r:(t=a.attributeName,n=a.attributeNamespace,r===null?e.removeAttribute(t):(a=a.type,r=a===3||a===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var Cr=Lx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Fa=Symbol.for("react.element"),jn=Symbol.for("react.portal"),Wn=Symbol.for("react.fragment"),Md=Symbol.for("react.strict_mode"),xu=Symbol.for("react.profiler"),hy=Symbol.for("react.provider"),my=Symbol.for("react.context"),Pd=Symbol.for("react.forward_ref"),bu=Symbol.for("react.suspense"),ku=Symbol.for("react.suspense_list"),Bd=Symbol.for("react.memo"),Pr=Symbol.for("react.lazy"),gy=Symbol.for("react.offscreen"),yf=Symbol.iterator;function Si(e){return e===null||typeof e!="object"?null:(e=yf&&e[yf]||e["@@iterator"],typeof e=="function"?e:null)}var Me=Object.assign,Jo;function Vi(e){if(Jo===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Jo=t&&t[1]||""}return`
`+Jo+e}var el=!1;function tl(e,t){if(!e||el)return"";el=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var n=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){n=d}e.call(t.prototype)}else{try{throw Error()}catch(d){n=d}e()}}catch(d){if(d&&n&&typeof d.stack=="string"){for(var a=d.stack.split(`
`),i=n.stack.split(`
`),s=a.length-1,o=i.length-1;1<=s&&0<=o&&a[s]!==i[o];)o--;for(;1<=s&&0<=o;s--,o--)if(a[s]!==i[o]){if(s!==1||o!==1)do if(s--,o--,0>o||a[s]!==i[o]){var u=`
`+a[s].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=s&&0<=o);break}}}finally{el=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?Vi(e):""}function Vx(e){switch(e.tag){case 5:return Vi(e.type);case 16:return Vi("Lazy");case 13:return Vi("Suspense");case 19:return Vi("SuspenseList");case 0:case 2:case 15:return e=tl(e.type,!1),e;case 11:return e=tl(e.type.render,!1),e;case 1:return e=tl(e.type,!0),e;default:return""}}function Su(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Wn:return"Fragment";case jn:return"Portal";case xu:return"Profiler";case Md:return"StrictMode";case bu:return"Suspense";case ku:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case my:return(e.displayName||"Context")+".Consumer";case hy:return(e._context.displayName||"Context")+".Provider";case Pd:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Bd:return t=e.displayName||null,t!==null?t:Su(e.type)||"Memo";case Pr:t=e._payload,e=e._init;try{return Su(e(t))}catch{}}return null}function qx(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Su(t);case 8:return t===Md?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Yr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function yy(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Hx(e){var t=yy(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var a=r.get,i=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(s){n=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Va(e){e._valueTracker||(e._valueTracker=Hx(e))}function vy(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=yy(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function Os(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Cu(e,t){var r=t.checked;return Me({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function vf(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=Yr(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function _y(e,t){t=t.checked,t!=null&&Dd(e,"checked",t,!1)}function Eu(e,t){_y(e,t);var r=Yr(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Tu(e,t.type,r):t.hasOwnProperty("defaultValue")&&Tu(e,t.type,Yr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function _f(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Tu(e,t,r){(t!=="number"||Os(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var qi=Array.isArray;function ti(e,t,r,n){if(e=e.options,t){t={};for(var a=0;a<r.length;a++)t["$"+r[a]]=!0;for(r=0;r<e.length;r++)a=t.hasOwnProperty("$"+e[r].value),e[r].selected!==a&&(e[r].selected=a),a&&n&&(e[r].defaultSelected=!0)}else{for(r=""+Yr(r),t=null,a=0;a<e.length;a++){if(e[a].value===r){e[a].selected=!0,n&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Iu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(H(91));return Me({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function wf(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(H(92));if(qi(r)){if(1<r.length)throw Error(H(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Yr(r)}}function wy(e,t){var r=Yr(t.value),n=Yr(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function $f(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function $y(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function zu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?$y(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var qa,xy=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,a){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(qa=qa||document.createElement("div"),qa.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=qa.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ua(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Zi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Gx=["Webkit","ms","Moz","O"];Object.keys(Zi).forEach(function(e){Gx.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Zi[t]=Zi[e]})});function by(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Zi.hasOwnProperty(e)&&Zi[e]?(""+t).trim():t+"px"}function ky(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,a=by(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,a):e[r]=a}}var Kx=Me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Au(e,t){if(t){if(Kx[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(H(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(H(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(H(61))}if(t.style!=null&&typeof t.style!="object")throw Error(H(62))}}function Ou(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nu=null;function Ld(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ru=null,ri=null,ni=null;function xf(e){if(e=za(e)){if(typeof Ru!="function")throw Error(H(280));var t=e.stateNode;t&&(t=go(t),Ru(e.stateNode,e.type,t))}}function Sy(e){ri?ni?ni.push(e):ni=[e]:ri=e}function Cy(){if(ri){var e=ri,t=ni;if(ni=ri=null,xf(e),t)for(e=0;e<t.length;e++)xf(t[e])}}function Ey(e,t){return e(t)}function Ty(){}var rl=!1;function Iy(e,t,r){if(rl)return e(t,r);rl=!0;try{return Ey(e,t,r)}finally{rl=!1,(ri!==null||ni!==null)&&(Ty(),Cy())}}function da(e,t){var r=e.stateNode;if(r===null)return null;var n=go(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(H(231,t,typeof r));return r}var Du=!1;if(xr)try{var Ci={};Object.defineProperty(Ci,"passive",{get:function(){Du=!0}}),window.addEventListener("test",Ci,Ci),window.removeEventListener("test",Ci,Ci)}catch{Du=!1}function Qx(e,t,r,n,a,i,s,o,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(r,d)}catch(p){this.onError(p)}}var Ji=!1,Ns=null,Rs=!1,Mu=null,Xx={onError:function(e){Ji=!0,Ns=e}};function Yx(e,t,r,n,a,i,s,o,u){Ji=!1,Ns=null,Qx.apply(Xx,arguments)}function Zx(e,t,r,n,a,i,s,o,u){if(Yx.apply(this,arguments),Ji){if(Ji){var d=Ns;Ji=!1,Ns=null}else throw Error(H(198));Rs||(Rs=!0,Mu=d)}}function Dn(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function zy(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function bf(e){if(Dn(e)!==e)throw Error(H(188))}function Jx(e){var t=e.alternate;if(!t){if(t=Dn(e),t===null)throw Error(H(188));return t!==e?null:e}for(var r=e,n=t;;){var a=r.return;if(a===null)break;var i=a.alternate;if(i===null){if(n=a.return,n!==null){r=n;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===r)return bf(a),e;if(i===n)return bf(a),t;i=i.sibling}throw Error(H(188))}if(r.return!==n.return)r=a,n=i;else{for(var s=!1,o=a.child;o;){if(o===r){s=!0,r=a,n=i;break}if(o===n){s=!0,n=a,r=i;break}o=o.sibling}if(!s){for(o=i.child;o;){if(o===r){s=!0,r=i,n=a;break}if(o===n){s=!0,n=i,r=a;break}o=o.sibling}if(!s)throw Error(H(189))}}if(r.alternate!==n)throw Error(H(190))}if(r.tag!==3)throw Error(H(188));return r.stateNode.current===r?e:t}function Ay(e){return e=Jx(e),e!==null?Oy(e):null}function Oy(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Oy(e);if(t!==null)return t;e=e.sibling}return null}var Ny=Tt.unstable_scheduleCallback,kf=Tt.unstable_cancelCallback,eb=Tt.unstable_shouldYield,tb=Tt.unstable_requestPaint,Ue=Tt.unstable_now,rb=Tt.unstable_getCurrentPriorityLevel,Ud=Tt.unstable_ImmediatePriority,Ry=Tt.unstable_UserBlockingPriority,Ds=Tt.unstable_NormalPriority,nb=Tt.unstable_LowPriority,Dy=Tt.unstable_IdlePriority,po=null,sr=null;function ib(e){if(sr&&typeof sr.onCommitFiberRoot=="function")try{sr.onCommitFiberRoot(po,e,void 0,(e.current.flags&128)===128)}catch{}}var Xt=Math.clz32?Math.clz32:ob,ab=Math.log,sb=Math.LN2;function ob(e){return e>>>=0,e===0?32:31-(ab(e)/sb|0)|0}var Ha=64,Ga=4194304;function Hi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ms(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,a=e.suspendedLanes,i=e.pingedLanes,s=r&268435455;if(s!==0){var o=s&~a;o!==0?n=Hi(o):(i&=s,i!==0&&(n=Hi(i)))}else s=r&~a,s!==0?n=Hi(s):i!==0&&(n=Hi(i));if(n===0)return 0;if(t!==0&&t!==n&&!(t&a)&&(a=n&-n,i=t&-t,a>=i||a===16&&(i&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-Xt(t),a=1<<r,n|=e[r],t&=~a;return n}function lb(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ub(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-Xt(i),o=1<<s,u=a[s];u===-1?(!(o&r)||o&n)&&(a[s]=lb(o,t)):u<=t&&(e.expiredLanes|=o),i&=~o}}function Pu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function My(){var e=Ha;return Ha<<=1,!(Ha&4194240)&&(Ha=64),e}function nl(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Ta(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Xt(t),e[t]=r}function db(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var a=31-Xt(r),i=1<<a;t[a]=0,n[a]=-1,e[a]=-1,r&=~i}}function jd(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-Xt(r),a=1<<n;a&t|e[n]&t&&(e[n]|=t),r&=~a}}var be=0;function Py(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var By,Wd,Ly,Uy,jy,Bu=!1,Ka=[],Fr=null,Vr=null,qr=null,ca=new Map,pa=new Map,Lr=[],cb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sf(e,t){switch(e){case"focusin":case"focusout":Fr=null;break;case"dragenter":case"dragleave":Vr=null;break;case"mouseover":case"mouseout":qr=null;break;case"pointerover":case"pointerout":ca.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":pa.delete(t.pointerId)}}function Ei(e,t,r,n,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:i,targetContainers:[a]},t!==null&&(t=za(t),t!==null&&Wd(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function pb(e,t,r,n,a){switch(t){case"focusin":return Fr=Ei(Fr,e,t,r,n,a),!0;case"dragenter":return Vr=Ei(Vr,e,t,r,n,a),!0;case"mouseover":return qr=Ei(qr,e,t,r,n,a),!0;case"pointerover":var i=a.pointerId;return ca.set(i,Ei(ca.get(i)||null,e,t,r,n,a)),!0;case"gotpointercapture":return i=a.pointerId,pa.set(i,Ei(pa.get(i)||null,e,t,r,n,a)),!0}return!1}function Wy(e){var t=_n(e.target);if(t!==null){var r=Dn(t);if(r!==null){if(t=r.tag,t===13){if(t=zy(r),t!==null){e.blockedOn=t,jy(e.priority,function(){Ly(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ws(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Lu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);Nu=n,r.target.dispatchEvent(n),Nu=null}else return t=za(r),t!==null&&Wd(t),e.blockedOn=r,!1;t.shift()}return!0}function Cf(e,t,r){ws(e)&&r.delete(t)}function fb(){Bu=!1,Fr!==null&&ws(Fr)&&(Fr=null),Vr!==null&&ws(Vr)&&(Vr=null),qr!==null&&ws(qr)&&(qr=null),ca.forEach(Cf),pa.forEach(Cf)}function Ti(e,t){e.blockedOn===t&&(e.blockedOn=null,Bu||(Bu=!0,Tt.unstable_scheduleCallback(Tt.unstable_NormalPriority,fb)))}function fa(e){function t(a){return Ti(a,e)}if(0<Ka.length){Ti(Ka[0],e);for(var r=1;r<Ka.length;r++){var n=Ka[r];n.blockedOn===e&&(n.blockedOn=null)}}for(Fr!==null&&Ti(Fr,e),Vr!==null&&Ti(Vr,e),qr!==null&&Ti(qr,e),ca.forEach(t),pa.forEach(t),r=0;r<Lr.length;r++)n=Lr[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<Lr.length&&(r=Lr[0],r.blockedOn===null);)Wy(r),r.blockedOn===null&&Lr.shift()}var ii=Cr.ReactCurrentBatchConfig,Ps=!0;function hb(e,t,r,n){var a=be,i=ii.transition;ii.transition=null;try{be=1,Fd(e,t,r,n)}finally{be=a,ii.transition=i}}function mb(e,t,r,n){var a=be,i=ii.transition;ii.transition=null;try{be=4,Fd(e,t,r,n)}finally{be=a,ii.transition=i}}function Fd(e,t,r,n){if(Ps){var a=Lu(e,t,r,n);if(a===null)fl(e,t,n,Bs,r),Sf(e,n);else if(pb(a,e,t,r,n))n.stopPropagation();else if(Sf(e,n),t&4&&-1<cb.indexOf(e)){for(;a!==null;){var i=za(a);if(i!==null&&By(i),i=Lu(e,t,r,n),i===null&&fl(e,t,n,Bs,r),i===a)break;a=i}a!==null&&n.stopPropagation()}else fl(e,t,n,null,r)}}var Bs=null;function Lu(e,t,r,n){if(Bs=null,e=Ld(n),e=_n(e),e!==null)if(t=Dn(e),t===null)e=null;else if(r=t.tag,r===13){if(e=zy(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Bs=e,null}function Fy(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(rb()){case Ud:return 1;case Ry:return 4;case Ds:case nb:return 16;case Dy:return 536870912;default:return 16}default:return 16}}var jr=null,Vd=null,$s=null;function Vy(){if($s)return $s;var e,t=Vd,r=t.length,n,a="value"in jr?jr.value:jr.textContent,i=a.length;for(e=0;e<r&&t[e]===a[e];e++);var s=r-e;for(n=1;n<=s&&t[r-n]===a[i-n];n++);return $s=a.slice(e,1<n?1-n:void 0)}function xs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Qa(){return!0}function Ef(){return!1}function zt(e){function t(r,n,a,i,s){this._reactName=r,this._targetInst=a,this.type=n,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(r=e[o],this[o]=r?r(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Qa:Ef,this.isPropagationStopped=Ef,this}return Me(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Qa)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Qa)},persist:function(){},isPersistent:Qa}),t}var yi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qd=zt(yi),Ia=Me({},yi,{view:0,detail:0}),gb=zt(Ia),il,al,Ii,fo=Me({},Ia,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hd,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ii&&(Ii&&e.type==="mousemove"?(il=e.screenX-Ii.screenX,al=e.screenY-Ii.screenY):al=il=0,Ii=e),il)},movementY:function(e){return"movementY"in e?e.movementY:al}}),Tf=zt(fo),yb=Me({},fo,{dataTransfer:0}),vb=zt(yb),_b=Me({},Ia,{relatedTarget:0}),sl=zt(_b),wb=Me({},yi,{animationName:0,elapsedTime:0,pseudoElement:0}),$b=zt(wb),xb=Me({},yi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),bb=zt(xb),kb=Me({},yi,{data:0}),If=zt(kb),Sb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Eb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Tb(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Eb[e])?!!t[e]:!1}function Hd(){return Tb}var Ib=Me({},Ia,{key:function(e){if(e.key){var t=Sb[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=xs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Cb[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hd,charCode:function(e){return e.type==="keypress"?xs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?xs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),zb=zt(Ib),Ab=Me({},fo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zf=zt(Ab),Ob=Me({},Ia,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hd}),Nb=zt(Ob),Rb=Me({},yi,{propertyName:0,elapsedTime:0,pseudoElement:0}),Db=zt(Rb),Mb=Me({},fo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Pb=zt(Mb),Bb=[9,13,27,32],Gd=xr&&"CompositionEvent"in window,ea=null;xr&&"documentMode"in document&&(ea=document.documentMode);var Lb=xr&&"TextEvent"in window&&!ea,qy=xr&&(!Gd||ea&&8<ea&&11>=ea),Af=" ",Of=!1;function Hy(e,t){switch(e){case"keyup":return Bb.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gy(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Fn=!1;function Ub(e,t){switch(e){case"compositionend":return Gy(t);case"keypress":return t.which!==32?null:(Of=!0,Af);case"textInput":return e=t.data,e===Af&&Of?null:e;default:return null}}function jb(e,t){if(Fn)return e==="compositionend"||!Gd&&Hy(e,t)?(e=Vy(),$s=Vd=jr=null,Fn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return qy&&t.locale!=="ko"?null:t.data;default:return null}}var Wb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Wb[e.type]:t==="textarea"}function Ky(e,t,r,n){Sy(n),t=Ls(t,"onChange"),0<t.length&&(r=new qd("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var ta=null,ha=null;function Fb(e){a1(e,0)}function ho(e){var t=Hn(e);if(vy(t))return e}function Vb(e,t){if(e==="change")return t}var Qy=!1;if(xr){var ol;if(xr){var ll="oninput"in document;if(!ll){var Rf=document.createElement("div");Rf.setAttribute("oninput","return;"),ll=typeof Rf.oninput=="function"}ol=ll}else ol=!1;Qy=ol&&(!document.documentMode||9<document.documentMode)}function Df(){ta&&(ta.detachEvent("onpropertychange",Xy),ha=ta=null)}function Xy(e){if(e.propertyName==="value"&&ho(ha)){var t=[];Ky(t,ha,e,Ld(e)),Iy(Fb,t)}}function qb(e,t,r){e==="focusin"?(Df(),ta=t,ha=r,ta.attachEvent("onpropertychange",Xy)):e==="focusout"&&Df()}function Hb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ho(ha)}function Gb(e,t){if(e==="click")return ho(t)}function Kb(e,t){if(e==="input"||e==="change")return ho(t)}function Qb(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Jt=typeof Object.is=="function"?Object.is:Qb;function ma(e,t){if(Jt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var a=r[n];if(!$u.call(t,a)||!Jt(e[a],t[a]))return!1}return!0}function Mf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Pf(e,t){var r=Mf(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Mf(r)}}function Yy(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Yy(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Zy(){for(var e=window,t=Os();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Os(e.document)}return t}function Kd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Xb(e){var t=Zy(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Yy(r.ownerDocument.documentElement,r)){if(n!==null&&Kd(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=r.textContent.length,i=Math.min(n.start,a);n=n.end===void 0?i:Math.min(n.end,a),!e.extend&&i>n&&(a=n,n=i,i=a),a=Pf(r,i);var s=Pf(r,n);a&&s&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),i>n?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Yb=xr&&"documentMode"in document&&11>=document.documentMode,Vn=null,Uu=null,ra=null,ju=!1;function Bf(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;ju||Vn==null||Vn!==Os(n)||(n=Vn,"selectionStart"in n&&Kd(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),ra&&ma(ra,n)||(ra=n,n=Ls(Uu,"onSelect"),0<n.length&&(t=new qd("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=Vn)))}function Xa(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var qn={animationend:Xa("Animation","AnimationEnd"),animationiteration:Xa("Animation","AnimationIteration"),animationstart:Xa("Animation","AnimationStart"),transitionend:Xa("Transition","TransitionEnd")},ul={},Jy={};xr&&(Jy=document.createElement("div").style,"AnimationEvent"in window||(delete qn.animationend.animation,delete qn.animationiteration.animation,delete qn.animationstart.animation),"TransitionEvent"in window||delete qn.transitionend.transition);function mo(e){if(ul[e])return ul[e];if(!qn[e])return e;var t=qn[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Jy)return ul[e]=t[r];return e}var e1=mo("animationend"),t1=mo("animationiteration"),r1=mo("animationstart"),n1=mo("transitionend"),i1=new Map,Lf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function en(e,t){i1.set(e,t),Rn(t,[e])}for(var dl=0;dl<Lf.length;dl++){var cl=Lf[dl],Zb=cl.toLowerCase(),Jb=cl[0].toUpperCase()+cl.slice(1);en(Zb,"on"+Jb)}en(e1,"onAnimationEnd");en(t1,"onAnimationIteration");en(r1,"onAnimationStart");en("dblclick","onDoubleClick");en("focusin","onFocus");en("focusout","onBlur");en(n1,"onTransitionEnd");oi("onMouseEnter",["mouseout","mouseover"]);oi("onMouseLeave",["mouseout","mouseover"]);oi("onPointerEnter",["pointerout","pointerover"]);oi("onPointerLeave",["pointerout","pointerover"]);Rn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),e3=new Set("cancel close invalid load scroll toggle".split(" ").concat(Gi));function Uf(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,Zx(n,t,void 0,e),e.currentTarget=null}function a1(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],a=n.event;n=n.listeners;e:{var i=void 0;if(t)for(var s=n.length-1;0<=s;s--){var o=n[s],u=o.instance,d=o.currentTarget;if(o=o.listener,u!==i&&a.isPropagationStopped())break e;Uf(a,o,d),i=u}else for(s=0;s<n.length;s++){if(o=n[s],u=o.instance,d=o.currentTarget,o=o.listener,u!==i&&a.isPropagationStopped())break e;Uf(a,o,d),i=u}}}if(Rs)throw e=Mu,Rs=!1,Mu=null,e}function Te(e,t){var r=t[Hu];r===void 0&&(r=t[Hu]=new Set);var n=e+"__bubble";r.has(n)||(s1(t,e,2,!1),r.add(n))}function pl(e,t,r){var n=0;t&&(n|=4),s1(r,e,n,t)}var Ya="_reactListening"+Math.random().toString(36).slice(2);function ga(e){if(!e[Ya]){e[Ya]=!0,fy.forEach(function(r){r!=="selectionchange"&&(e3.has(r)||pl(r,!1,e),pl(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ya]||(t[Ya]=!0,pl("selectionchange",!1,t))}}function s1(e,t,r,n){switch(Fy(t)){case 1:var a=hb;break;case 4:a=mb;break;default:a=Fd}r=a.bind(null,t,r,e),a=void 0,!Du||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),n?a!==void 0?e.addEventListener(t,r,{capture:!0,passive:a}):e.addEventListener(t,r,!0):a!==void 0?e.addEventListener(t,r,{passive:a}):e.addEventListener(t,r,!1)}function fl(e,t,r,n,a){var i=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var s=n.tag;if(s===3||s===4){var o=n.stateNode.containerInfo;if(o===a||o.nodeType===8&&o.parentNode===a)break;if(s===4)for(s=n.return;s!==null;){var u=s.tag;if((u===3||u===4)&&(u=s.stateNode.containerInfo,u===a||u.nodeType===8&&u.parentNode===a))return;s=s.return}for(;o!==null;){if(s=_n(o),s===null)return;if(u=s.tag,u===5||u===6){n=i=s;continue e}o=o.parentNode}}n=n.return}Iy(function(){var d=i,p=Ld(r),f=[];e:{var m=i1.get(e);if(m!==void 0){var _=qd,w=e;switch(e){case"keypress":if(xs(r)===0)break e;case"keydown":case"keyup":_=zb;break;case"focusin":w="focus",_=sl;break;case"focusout":w="blur",_=sl;break;case"beforeblur":case"afterblur":_=sl;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=Tf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=vb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=Nb;break;case e1:case t1:case r1:_=$b;break;case n1:_=Db;break;case"scroll":_=gb;break;case"wheel":_=Pb;break;case"copy":case"cut":case"paste":_=bb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=zf}var $=(t&4)!==0,S=!$&&e==="scroll",y=$?m!==null?m+"Capture":null:m;$=[];for(var g=d,x;g!==null;){x=g;var k=x.stateNode;if(x.tag===5&&k!==null&&(x=k,y!==null&&(k=da(g,y),k!=null&&$.push(ya(g,k,x)))),S)break;g=g.return}0<$.length&&(m=new _(m,w,null,r,p),f.push({event:m,listeners:$}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",_=e==="mouseout"||e==="pointerout",m&&r!==Nu&&(w=r.relatedTarget||r.fromElement)&&(_n(w)||w[br]))break e;if((_||m)&&(m=p.window===p?p:(m=p.ownerDocument)?m.defaultView||m.parentWindow:window,_?(w=r.relatedTarget||r.toElement,_=d,w=w?_n(w):null,w!==null&&(S=Dn(w),w!==S||w.tag!==5&&w.tag!==6)&&(w=null)):(_=null,w=d),_!==w)){if($=Tf,k="onMouseLeave",y="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&($=zf,k="onPointerLeave",y="onPointerEnter",g="pointer"),S=_==null?m:Hn(_),x=w==null?m:Hn(w),m=new $(k,g+"leave",_,r,p),m.target=S,m.relatedTarget=x,k=null,_n(p)===d&&($=new $(y,g+"enter",w,r,p),$.target=x,$.relatedTarget=S,k=$),S=k,_&&w)t:{for($=_,y=w,g=0,x=$;x;x=Ln(x))g++;for(x=0,k=y;k;k=Ln(k))x++;for(;0<g-x;)$=Ln($),g--;for(;0<x-g;)y=Ln(y),x--;for(;g--;){if($===y||y!==null&&$===y.alternate)break t;$=Ln($),y=Ln(y)}$=null}else $=null;_!==null&&jf(f,m,_,$,!1),w!==null&&S!==null&&jf(f,S,w,$,!0)}}e:{if(m=d?Hn(d):window,_=m.nodeName&&m.nodeName.toLowerCase(),_==="select"||_==="input"&&m.type==="file")var E=Vb;else if(Nf(m))if(Qy)E=Kb;else{E=Hb;var T=qb}else(_=m.nodeName)&&_.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(E=Gb);if(E&&(E=E(e,d))){Ky(f,E,r,p);break e}T&&T(e,m,d),e==="focusout"&&(T=m._wrapperState)&&T.controlled&&m.type==="number"&&Tu(m,"number",m.value)}switch(T=d?Hn(d):window,e){case"focusin":(Nf(T)||T.contentEditable==="true")&&(Vn=T,Uu=d,ra=null);break;case"focusout":ra=Uu=Vn=null;break;case"mousedown":ju=!0;break;case"contextmenu":case"mouseup":case"dragend":ju=!1,Bf(f,r,p);break;case"selectionchange":if(Yb)break;case"keydown":case"keyup":Bf(f,r,p)}var I;if(Gd)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else Fn?Hy(e,r)&&(z="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(z="onCompositionStart");z&&(qy&&r.locale!=="ko"&&(Fn||z!=="onCompositionStart"?z==="onCompositionEnd"&&Fn&&(I=Vy()):(jr=p,Vd="value"in jr?jr.value:jr.textContent,Fn=!0)),T=Ls(d,z),0<T.length&&(z=new If(z,e,null,r,p),f.push({event:z,listeners:T}),I?z.data=I:(I=Gy(r),I!==null&&(z.data=I)))),(I=Lb?Ub(e,r):jb(e,r))&&(d=Ls(d,"onBeforeInput"),0<d.length&&(p=new If("onBeforeInput","beforeinput",null,r,p),f.push({event:p,listeners:d}),p.data=I))}a1(f,t)})}function ya(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Ls(e,t){for(var r=t+"Capture",n=[];e!==null;){var a=e,i=a.stateNode;a.tag===5&&i!==null&&(a=i,i=da(e,r),i!=null&&n.unshift(ya(e,i,a)),i=da(e,t),i!=null&&n.push(ya(e,i,a))),e=e.return}return n}function Ln(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function jf(e,t,r,n,a){for(var i=t._reactName,s=[];r!==null&&r!==n;){var o=r,u=o.alternate,d=o.stateNode;if(u!==null&&u===n)break;o.tag===5&&d!==null&&(o=d,a?(u=da(r,i),u!=null&&s.unshift(ya(r,u,o))):a||(u=da(r,i),u!=null&&s.push(ya(r,u,o)))),r=r.return}s.length!==0&&e.push({event:t,listeners:s})}var t3=/\r\n?/g,r3=/\u0000|\uFFFD/g;function Wf(e){return(typeof e=="string"?e:""+e).replace(t3,`
`).replace(r3,"")}function Za(e,t,r){if(t=Wf(t),Wf(e)!==t&&r)throw Error(H(425))}function Us(){}var Wu=null,Fu=null;function Vu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var qu=typeof setTimeout=="function"?setTimeout:void 0,n3=typeof clearTimeout=="function"?clearTimeout:void 0,Ff=typeof Promise=="function"?Promise:void 0,i3=typeof queueMicrotask=="function"?queueMicrotask:typeof Ff<"u"?function(e){return Ff.resolve(null).then(e).catch(a3)}:qu;function a3(e){setTimeout(function(){throw e})}function hl(e,t){var r=t,n=0;do{var a=r.nextSibling;if(e.removeChild(r),a&&a.nodeType===8)if(r=a.data,r==="/$"){if(n===0){e.removeChild(a),fa(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=a}while(r);fa(t)}function Hr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Vf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var vi=Math.random().toString(36).slice(2),ar="__reactFiber$"+vi,va="__reactProps$"+vi,br="__reactContainer$"+vi,Hu="__reactEvents$"+vi,s3="__reactListeners$"+vi,o3="__reactHandles$"+vi;function _n(e){var t=e[ar];if(t)return t;for(var r=e.parentNode;r;){if(t=r[br]||r[ar]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Vf(e);e!==null;){if(r=e[ar])return r;e=Vf(e)}return t}e=r,r=e.parentNode}return null}function za(e){return e=e[ar]||e[br],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Hn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(H(33))}function go(e){return e[va]||null}var Gu=[],Gn=-1;function tn(e){return{current:e}}function Ie(e){0>Gn||(e.current=Gu[Gn],Gu[Gn]=null,Gn--)}function Ce(e,t){Gn++,Gu[Gn]=e.current,e.current=t}var Zr={},it=tn(Zr),gt=tn(!1),Cn=Zr;function li(e,t){var r=e.type.contextTypes;if(!r)return Zr;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var a={},i;for(i in r)a[i]=t[i];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function yt(e){return e=e.childContextTypes,e!=null}function js(){Ie(gt),Ie(it)}function qf(e,t,r){if(it.current!==Zr)throw Error(H(168));Ce(it,t),Ce(gt,r)}function o1(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var a in n)if(!(a in t))throw Error(H(108,qx(e)||"Unknown",a));return Me({},r,n)}function Ws(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Zr,Cn=it.current,Ce(it,e),Ce(gt,gt.current),!0}function Hf(e,t,r){var n=e.stateNode;if(!n)throw Error(H(169));r?(e=o1(e,t,Cn),n.__reactInternalMemoizedMergedChildContext=e,Ie(gt),Ie(it),Ce(it,e)):Ie(gt),Ce(gt,r)}var gr=null,yo=!1,ml=!1;function l1(e){gr===null?gr=[e]:gr.push(e)}function l3(e){yo=!0,l1(e)}function rn(){if(!ml&&gr!==null){ml=!0;var e=0,t=be;try{var r=gr;for(be=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}gr=null,yo=!1}catch(a){throw gr!==null&&(gr=gr.slice(e+1)),Ny(Ud,rn),a}finally{be=t,ml=!1}}return null}var Kn=[],Qn=0,Fs=null,Vs=0,Ot=[],Nt=0,En=null,_r=1,wr="";function hn(e,t){Kn[Qn++]=Vs,Kn[Qn++]=Fs,Fs=e,Vs=t}function u1(e,t,r){Ot[Nt++]=_r,Ot[Nt++]=wr,Ot[Nt++]=En,En=e;var n=_r;e=wr;var a=32-Xt(n)-1;n&=~(1<<a),r+=1;var i=32-Xt(t)+a;if(30<i){var s=a-a%5;i=(n&(1<<s)-1).toString(32),n>>=s,a-=s,_r=1<<32-Xt(t)+a|r<<a|n,wr=i+e}else _r=1<<i|r<<a|n,wr=e}function Qd(e){e.return!==null&&(hn(e,1),u1(e,1,0))}function Xd(e){for(;e===Fs;)Fs=Kn[--Qn],Kn[Qn]=null,Vs=Kn[--Qn],Kn[Qn]=null;for(;e===En;)En=Ot[--Nt],Ot[Nt]=null,wr=Ot[--Nt],Ot[Nt]=null,_r=Ot[--Nt],Ot[Nt]=null}var Ct=null,St=null,Oe=!1,Gt=null;function d1(e,t){var r=Rt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Gf(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ct=e,St=Hr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ct=e,St=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=En!==null?{id:_r,overflow:wr}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Rt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Ct=e,St=null,!0):!1;default:return!1}}function Ku(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Qu(e){if(Oe){var t=St;if(t){var r=t;if(!Gf(e,t)){if(Ku(e))throw Error(H(418));t=Hr(r.nextSibling);var n=Ct;t&&Gf(e,t)?d1(n,r):(e.flags=e.flags&-4097|2,Oe=!1,Ct=e)}}else{if(Ku(e))throw Error(H(418));e.flags=e.flags&-4097|2,Oe=!1,Ct=e}}}function Kf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ct=e}function Ja(e){if(e!==Ct)return!1;if(!Oe)return Kf(e),Oe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Vu(e.type,e.memoizedProps)),t&&(t=St)){if(Ku(e))throw c1(),Error(H(418));for(;t;)d1(e,t),t=Hr(t.nextSibling)}if(Kf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(H(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){St=Hr(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}St=null}}else St=Ct?Hr(e.stateNode.nextSibling):null;return!0}function c1(){for(var e=St;e;)e=Hr(e.nextSibling)}function ui(){St=Ct=null,Oe=!1}function Yd(e){Gt===null?Gt=[e]:Gt.push(e)}var u3=Cr.ReactCurrentBatchConfig;function zi(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(H(309));var n=r.stateNode}if(!n)throw Error(H(147,e));var a=n,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var o=a.refs;s===null?delete o[i]:o[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(H(284));if(!r._owner)throw Error(H(290,e))}return e}function es(e,t){throw e=Object.prototype.toString.call(t),Error(H(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Qf(e){var t=e._init;return t(e._payload)}function p1(e){function t(y,g){if(e){var x=y.deletions;x===null?(y.deletions=[g],y.flags|=16):x.push(g)}}function r(y,g){if(!e)return null;for(;g!==null;)t(y,g),g=g.sibling;return null}function n(y,g){for(y=new Map;g!==null;)g.key!==null?y.set(g.key,g):y.set(g.index,g),g=g.sibling;return y}function a(y,g){return y=Xr(y,g),y.index=0,y.sibling=null,y}function i(y,g,x){return y.index=x,e?(x=y.alternate,x!==null?(x=x.index,x<g?(y.flags|=2,g):x):(y.flags|=2,g)):(y.flags|=1048576,g)}function s(y){return e&&y.alternate===null&&(y.flags|=2),y}function o(y,g,x,k){return g===null||g.tag!==6?(g=xl(x,y.mode,k),g.return=y,g):(g=a(g,x),g.return=y,g)}function u(y,g,x,k){var E=x.type;return E===Wn?p(y,g,x.props.children,k,x.key):g!==null&&(g.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Pr&&Qf(E)===g.type)?(k=a(g,x.props),k.ref=zi(y,g,x),k.return=y,k):(k=Is(x.type,x.key,x.props,null,y.mode,k),k.ref=zi(y,g,x),k.return=y,k)}function d(y,g,x,k){return g===null||g.tag!==4||g.stateNode.containerInfo!==x.containerInfo||g.stateNode.implementation!==x.implementation?(g=bl(x,y.mode,k),g.return=y,g):(g=a(g,x.children||[]),g.return=y,g)}function p(y,g,x,k,E){return g===null||g.tag!==7?(g=bn(x,y.mode,k,E),g.return=y,g):(g=a(g,x),g.return=y,g)}function f(y,g,x){if(typeof g=="string"&&g!==""||typeof g=="number")return g=xl(""+g,y.mode,x),g.return=y,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Fa:return x=Is(g.type,g.key,g.props,null,y.mode,x),x.ref=zi(y,null,g),x.return=y,x;case jn:return g=bl(g,y.mode,x),g.return=y,g;case Pr:var k=g._init;return f(y,k(g._payload),x)}if(qi(g)||Si(g))return g=bn(g,y.mode,x,null),g.return=y,g;es(y,g)}return null}function m(y,g,x,k){var E=g!==null?g.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return E!==null?null:o(y,g,""+x,k);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Fa:return x.key===E?u(y,g,x,k):null;case jn:return x.key===E?d(y,g,x,k):null;case Pr:return E=x._init,m(y,g,E(x._payload),k)}if(qi(x)||Si(x))return E!==null?null:p(y,g,x,k,null);es(y,x)}return null}function _(y,g,x,k,E){if(typeof k=="string"&&k!==""||typeof k=="number")return y=y.get(x)||null,o(g,y,""+k,E);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Fa:return y=y.get(k.key===null?x:k.key)||null,u(g,y,k,E);case jn:return y=y.get(k.key===null?x:k.key)||null,d(g,y,k,E);case Pr:var T=k._init;return _(y,g,x,T(k._payload),E)}if(qi(k)||Si(k))return y=y.get(x)||null,p(g,y,k,E,null);es(g,k)}return null}function w(y,g,x,k){for(var E=null,T=null,I=g,z=g=0,N=null;I!==null&&z<x.length;z++){I.index>z?(N=I,I=null):N=I.sibling;var L=m(y,I,x[z],k);if(L===null){I===null&&(I=N);break}e&&I&&L.alternate===null&&t(y,I),g=i(L,g,z),T===null?E=L:T.sibling=L,T=L,I=N}if(z===x.length)return r(y,I),Oe&&hn(y,z),E;if(I===null){for(;z<x.length;z++)I=f(y,x[z],k),I!==null&&(g=i(I,g,z),T===null?E=I:T.sibling=I,T=I);return Oe&&hn(y,z),E}for(I=n(y,I);z<x.length;z++)N=_(I,y,z,x[z],k),N!==null&&(e&&N.alternate!==null&&I.delete(N.key===null?z:N.key),g=i(N,g,z),T===null?E=N:T.sibling=N,T=N);return e&&I.forEach(function(X){return t(y,X)}),Oe&&hn(y,z),E}function $(y,g,x,k){var E=Si(x);if(typeof E!="function")throw Error(H(150));if(x=E.call(x),x==null)throw Error(H(151));for(var T=E=null,I=g,z=g=0,N=null,L=x.next();I!==null&&!L.done;z++,L=x.next()){I.index>z?(N=I,I=null):N=I.sibling;var X=m(y,I,L.value,k);if(X===null){I===null&&(I=N);break}e&&I&&X.alternate===null&&t(y,I),g=i(X,g,z),T===null?E=X:T.sibling=X,T=X,I=N}if(L.done)return r(y,I),Oe&&hn(y,z),E;if(I===null){for(;!L.done;z++,L=x.next())L=f(y,L.value,k),L!==null&&(g=i(L,g,z),T===null?E=L:T.sibling=L,T=L);return Oe&&hn(y,z),E}for(I=n(y,I);!L.done;z++,L=x.next())L=_(I,y,z,L.value,k),L!==null&&(e&&L.alternate!==null&&I.delete(L.key===null?z:L.key),g=i(L,g,z),T===null?E=L:T.sibling=L,T=L);return e&&I.forEach(function(Q){return t(y,Q)}),Oe&&hn(y,z),E}function S(y,g,x,k){if(typeof x=="object"&&x!==null&&x.type===Wn&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Fa:e:{for(var E=x.key,T=g;T!==null;){if(T.key===E){if(E=x.type,E===Wn){if(T.tag===7){r(y,T.sibling),g=a(T,x.props.children),g.return=y,y=g;break e}}else if(T.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Pr&&Qf(E)===T.type){r(y,T.sibling),g=a(T,x.props),g.ref=zi(y,T,x),g.return=y,y=g;break e}r(y,T);break}else t(y,T);T=T.sibling}x.type===Wn?(g=bn(x.props.children,y.mode,k,x.key),g.return=y,y=g):(k=Is(x.type,x.key,x.props,null,y.mode,k),k.ref=zi(y,g,x),k.return=y,y=k)}return s(y);case jn:e:{for(T=x.key;g!==null;){if(g.key===T)if(g.tag===4&&g.stateNode.containerInfo===x.containerInfo&&g.stateNode.implementation===x.implementation){r(y,g.sibling),g=a(g,x.children||[]),g.return=y,y=g;break e}else{r(y,g);break}else t(y,g);g=g.sibling}g=bl(x,y.mode,k),g.return=y,y=g}return s(y);case Pr:return T=x._init,S(y,g,T(x._payload),k)}if(qi(x))return w(y,g,x,k);if(Si(x))return $(y,g,x,k);es(y,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,g!==null&&g.tag===6?(r(y,g.sibling),g=a(g,x),g.return=y,y=g):(r(y,g),g=xl(x,y.mode,k),g.return=y,y=g),s(y)):r(y,g)}return S}var di=p1(!0),f1=p1(!1),qs=tn(null),Hs=null,Xn=null,Zd=null;function Jd(){Zd=Xn=Hs=null}function ec(e){var t=qs.current;Ie(qs),e._currentValue=t}function Xu(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function ai(e,t){Hs=e,Zd=Xn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(mt=!0),e.firstContext=null)}function Mt(e){var t=e._currentValue;if(Zd!==e)if(e={context:e,memoizedValue:t,next:null},Xn===null){if(Hs===null)throw Error(H(308));Xn=e,Hs.dependencies={lanes:0,firstContext:e}}else Xn=Xn.next=e;return t}var wn=null;function tc(e){wn===null?wn=[e]:wn.push(e)}function h1(e,t,r,n){var a=t.interleaved;return a===null?(r.next=r,tc(t)):(r.next=a.next,a.next=r),t.interleaved=r,kr(e,n)}function kr(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Br=!1;function rc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function m1(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function $r(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Gr(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,ve&2){var a=n.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),n.pending=t,kr(e,r)}return a=n.interleaved,a===null?(t.next=t,tc(n)):(t.next=a.next,a.next=t),n.interleaved=t,kr(e,r)}function bs(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,jd(e,r)}}function Xf(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var a=null,i=null;if(r=r.firstBaseUpdate,r!==null){do{var s={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};i===null?a=i=s:i=i.next=s,r=r.next}while(r!==null);i===null?a=i=t:i=i.next=t}else a=i=t;r={baseState:n.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Gs(e,t,r,n){var a=e.updateQueue;Br=!1;var i=a.firstBaseUpdate,s=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var u=o,d=u.next;u.next=null,s===null?i=d:s.next=d,s=u;var p=e.alternate;p!==null&&(p=p.updateQueue,o=p.lastBaseUpdate,o!==s&&(o===null?p.firstBaseUpdate=d:o.next=d,p.lastBaseUpdate=u))}if(i!==null){var f=a.baseState;s=0,p=d=u=null,o=i;do{var m=o.lane,_=o.eventTime;if((n&m)===m){p!==null&&(p=p.next={eventTime:_,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var w=e,$=o;switch(m=t,_=r,$.tag){case 1:if(w=$.payload,typeof w=="function"){f=w.call(_,f,m);break e}f=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=$.payload,m=typeof w=="function"?w.call(_,f,m):w,m==null)break e;f=Me({},f,m);break e;case 2:Br=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,m=a.effects,m===null?a.effects=[o]:m.push(o))}else _={eventTime:_,lane:m,tag:o.tag,payload:o.payload,callback:o.callback,next:null},p===null?(d=p=_,u=f):p=p.next=_,s|=m;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;m=o,o=m.next,m.next=null,a.lastBaseUpdate=m,a.shared.pending=null}}while(!0);if(p===null&&(u=f),a.baseState=u,a.firstBaseUpdate=d,a.lastBaseUpdate=p,t=a.shared.interleaved,t!==null){a=t;do s|=a.lane,a=a.next;while(a!==t)}else i===null&&(a.shared.lanes=0);In|=s,e.lanes=s,e.memoizedState=f}}function Yf(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],a=n.callback;if(a!==null){if(n.callback=null,n=r,typeof a!="function")throw Error(H(191,a));a.call(n)}}}var Aa={},or=tn(Aa),_a=tn(Aa),wa=tn(Aa);function $n(e){if(e===Aa)throw Error(H(174));return e}function nc(e,t){switch(Ce(wa,t),Ce(_a,e),Ce(or,Aa),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:zu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=zu(t,e)}Ie(or),Ce(or,t)}function ci(){Ie(or),Ie(_a),Ie(wa)}function g1(e){$n(wa.current);var t=$n(or.current),r=zu(t,e.type);t!==r&&(Ce(_a,e),Ce(or,r))}function ic(e){_a.current===e&&(Ie(or),Ie(_a))}var Re=tn(0);function Ks(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var gl=[];function ac(){for(var e=0;e<gl.length;e++)gl[e]._workInProgressVersionPrimary=null;gl.length=0}var ks=Cr.ReactCurrentDispatcher,yl=Cr.ReactCurrentBatchConfig,Tn=0,De=null,Fe=null,Qe=null,Qs=!1,na=!1,$a=0,d3=0;function et(){throw Error(H(321))}function sc(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Jt(e[r],t[r]))return!1;return!0}function oc(e,t,r,n,a,i){if(Tn=i,De=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ks.current=e===null||e.memoizedState===null?h3:m3,e=r(n,a),na){i=0;do{if(na=!1,$a=0,25<=i)throw Error(H(301));i+=1,Qe=Fe=null,t.updateQueue=null,ks.current=g3,e=r(n,a)}while(na)}if(ks.current=Xs,t=Fe!==null&&Fe.next!==null,Tn=0,Qe=Fe=De=null,Qs=!1,t)throw Error(H(300));return e}function lc(){var e=$a!==0;return $a=0,e}function ir(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qe===null?De.memoizedState=Qe=e:Qe=Qe.next=e,Qe}function Pt(){if(Fe===null){var e=De.alternate;e=e!==null?e.memoizedState:null}else e=Fe.next;var t=Qe===null?De.memoizedState:Qe.next;if(t!==null)Qe=t,Fe=e;else{if(e===null)throw Error(H(310));Fe=e,e={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},Qe===null?De.memoizedState=Qe=e:Qe=Qe.next=e}return Qe}function xa(e,t){return typeof t=="function"?t(e):t}function vl(e){var t=Pt(),r=t.queue;if(r===null)throw Error(H(311));r.lastRenderedReducer=e;var n=Fe,a=n.baseQueue,i=r.pending;if(i!==null){if(a!==null){var s=a.next;a.next=i.next,i.next=s}n.baseQueue=a=i,r.pending=null}if(a!==null){i=a.next,n=n.baseState;var o=s=null,u=null,d=i;do{var p=d.lane;if((Tn&p)===p)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),n=d.hasEagerState?d.eagerState:e(n,d.action);else{var f={lane:p,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(o=u=f,s=n):u=u.next=f,De.lanes|=p,In|=p}d=d.next}while(d!==null&&d!==i);u===null?s=n:u.next=o,Jt(n,t.memoizedState)||(mt=!0),t.memoizedState=n,t.baseState=s,t.baseQueue=u,r.lastRenderedState=n}if(e=r.interleaved,e!==null){a=e;do i=a.lane,De.lanes|=i,In|=i,a=a.next;while(a!==e)}else a===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function _l(e){var t=Pt(),r=t.queue;if(r===null)throw Error(H(311));r.lastRenderedReducer=e;var n=r.dispatch,a=r.pending,i=t.memoizedState;if(a!==null){r.pending=null;var s=a=a.next;do i=e(i,s.action),s=s.next;while(s!==a);Jt(i,t.memoizedState)||(mt=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),r.lastRenderedState=i}return[i,n]}function y1(){}function v1(e,t){var r=De,n=Pt(),a=t(),i=!Jt(n.memoizedState,a);if(i&&(n.memoizedState=a,mt=!0),n=n.queue,uc($1.bind(null,r,n,e),[e]),n.getSnapshot!==t||i||Qe!==null&&Qe.memoizedState.tag&1){if(r.flags|=2048,ba(9,w1.bind(null,r,n,a,t),void 0,null),Xe===null)throw Error(H(349));Tn&30||_1(r,t,a)}return a}function _1(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=De.updateQueue,t===null?(t={lastEffect:null,stores:null},De.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function w1(e,t,r,n){t.value=r,t.getSnapshot=n,x1(t)&&b1(e)}function $1(e,t,r){return r(function(){x1(t)&&b1(e)})}function x1(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Jt(e,r)}catch{return!0}}function b1(e){var t=kr(e,1);t!==null&&Yt(t,e,1,-1)}function Zf(e){var t=ir();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:e},t.queue=e,e=e.dispatch=f3.bind(null,De,e),[t.memoizedState,e]}function ba(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=De.updateQueue,t===null?(t={lastEffect:null,stores:null},De.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function k1(){return Pt().memoizedState}function Ss(e,t,r,n){var a=ir();De.flags|=e,a.memoizedState=ba(1|t,r,void 0,n===void 0?null:n)}function vo(e,t,r,n){var a=Pt();n=n===void 0?null:n;var i=void 0;if(Fe!==null){var s=Fe.memoizedState;if(i=s.destroy,n!==null&&sc(n,s.deps)){a.memoizedState=ba(t,r,i,n);return}}De.flags|=e,a.memoizedState=ba(1|t,r,i,n)}function Jf(e,t){return Ss(8390656,8,e,t)}function uc(e,t){return vo(2048,8,e,t)}function S1(e,t){return vo(4,2,e,t)}function C1(e,t){return vo(4,4,e,t)}function E1(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function T1(e,t,r){return r=r!=null?r.concat([e]):null,vo(4,4,E1.bind(null,t,e),r)}function dc(){}function I1(e,t){var r=Pt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&sc(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function z1(e,t){var r=Pt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&sc(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function A1(e,t,r){return Tn&21?(Jt(r,t)||(r=My(),De.lanes|=r,In|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,mt=!0),e.memoizedState=r)}function c3(e,t){var r=be;be=r!==0&&4>r?r:4,e(!0);var n=yl.transition;yl.transition={};try{e(!1),t()}finally{be=r,yl.transition=n}}function O1(){return Pt().memoizedState}function p3(e,t,r){var n=Qr(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},N1(e))R1(t,r);else if(r=h1(e,t,r,n),r!==null){var a=ut();Yt(r,e,n,a),D1(r,t,n)}}function f3(e,t,r){var n=Qr(e),a={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(N1(e))R1(t,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,o=i(s,r);if(a.hasEagerState=!0,a.eagerState=o,Jt(o,s)){var u=t.interleaved;u===null?(a.next=a,tc(t)):(a.next=u.next,u.next=a),t.interleaved=a;return}}catch{}finally{}r=h1(e,t,a,n),r!==null&&(a=ut(),Yt(r,e,n,a),D1(r,t,n))}}function N1(e){var t=e.alternate;return e===De||t!==null&&t===De}function R1(e,t){na=Qs=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function D1(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,jd(e,r)}}var Xs={readContext:Mt,useCallback:et,useContext:et,useEffect:et,useImperativeHandle:et,useInsertionEffect:et,useLayoutEffect:et,useMemo:et,useReducer:et,useRef:et,useState:et,useDebugValue:et,useDeferredValue:et,useTransition:et,useMutableSource:et,useSyncExternalStore:et,useId:et,unstable_isNewReconciler:!1},h3={readContext:Mt,useCallback:function(e,t){return ir().memoizedState=[e,t===void 0?null:t],e},useContext:Mt,useEffect:Jf,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Ss(4194308,4,E1.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Ss(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ss(4,2,e,t)},useMemo:function(e,t){var r=ir();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=ir();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=p3.bind(null,De,e),[n.memoizedState,e]},useRef:function(e){var t=ir();return e={current:e},t.memoizedState=e},useState:Zf,useDebugValue:dc,useDeferredValue:function(e){return ir().memoizedState=e},useTransition:function(){var e=Zf(!1),t=e[0];return e=c3.bind(null,e[1]),ir().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=De,a=ir();if(Oe){if(r===void 0)throw Error(H(407));r=r()}else{if(r=t(),Xe===null)throw Error(H(349));Tn&30||_1(n,t,r)}a.memoizedState=r;var i={value:r,getSnapshot:t};return a.queue=i,Jf($1.bind(null,n,i,e),[e]),n.flags|=2048,ba(9,w1.bind(null,n,i,r,t),void 0,null),r},useId:function(){var e=ir(),t=Xe.identifierPrefix;if(Oe){var r=wr,n=_r;r=(n&~(1<<32-Xt(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=$a++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=d3++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},m3={readContext:Mt,useCallback:I1,useContext:Mt,useEffect:uc,useImperativeHandle:T1,useInsertionEffect:S1,useLayoutEffect:C1,useMemo:z1,useReducer:vl,useRef:k1,useState:function(){return vl(xa)},useDebugValue:dc,useDeferredValue:function(e){var t=Pt();return A1(t,Fe.memoizedState,e)},useTransition:function(){var e=vl(xa)[0],t=Pt().memoizedState;return[e,t]},useMutableSource:y1,useSyncExternalStore:v1,useId:O1,unstable_isNewReconciler:!1},g3={readContext:Mt,useCallback:I1,useContext:Mt,useEffect:uc,useImperativeHandle:T1,useInsertionEffect:S1,useLayoutEffect:C1,useMemo:z1,useReducer:_l,useRef:k1,useState:function(){return _l(xa)},useDebugValue:dc,useDeferredValue:function(e){var t=Pt();return Fe===null?t.memoizedState=e:A1(t,Fe.memoizedState,e)},useTransition:function(){var e=_l(xa)[0],t=Pt().memoizedState;return[e,t]},useMutableSource:y1,useSyncExternalStore:v1,useId:O1,unstable_isNewReconciler:!1};function qt(e,t){if(e&&e.defaultProps){t=Me({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Yu(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:Me({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var _o={isMounted:function(e){return(e=e._reactInternals)?Dn(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=ut(),a=Qr(e),i=$r(n,a);i.payload=t,r!=null&&(i.callback=r),t=Gr(e,i,a),t!==null&&(Yt(t,e,a,n),bs(t,e,a))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=ut(),a=Qr(e),i=$r(n,a);i.tag=1,i.payload=t,r!=null&&(i.callback=r),t=Gr(e,i,a),t!==null&&(Yt(t,e,a,n),bs(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=ut(),n=Qr(e),a=$r(r,n);a.tag=2,t!=null&&(a.callback=t),t=Gr(e,a,n),t!==null&&(Yt(t,e,n,r),bs(t,e,n))}};function eh(e,t,r,n,a,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,i,s):t.prototype&&t.prototype.isPureReactComponent?!ma(r,n)||!ma(a,i):!0}function M1(e,t,r){var n=!1,a=Zr,i=t.contextType;return typeof i=="object"&&i!==null?i=Mt(i):(a=yt(t)?Cn:it.current,n=t.contextTypes,i=(n=n!=null)?li(e,a):Zr),t=new t(r,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=_o,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),t}function th(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&_o.enqueueReplaceState(t,t.state,null)}function Zu(e,t,r,n){var a=e.stateNode;a.props=r,a.state=e.memoizedState,a.refs={},rc(e);var i=t.contextType;typeof i=="object"&&i!==null?a.context=Mt(i):(i=yt(t)?Cn:it.current,a.context=li(e,i)),a.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Yu(e,t,i,r),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&_o.enqueueReplaceState(a,a.state,null),Gs(e,r,a,n),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function pi(e,t){try{var r="",n=t;do r+=Vx(n),n=n.return;while(n);var a=r}catch(i){a=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:a,digest:null}}function wl(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Ju(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var y3=typeof WeakMap=="function"?WeakMap:Map;function P1(e,t,r){r=$r(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){Zs||(Zs=!0,ud=n),Ju(e,t)},r}function B1(e,t,r){r=$r(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var a=t.value;r.payload=function(){return n(a)},r.callback=function(){Ju(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(r.callback=function(){Ju(e,t),typeof n!="function"&&(Kr===null?Kr=new Set([this]):Kr.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),r}function rh(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new y3;var a=new Set;n.set(t,a)}else a=n.get(t),a===void 0&&(a=new Set,n.set(t,a));a.has(r)||(a.add(r),e=A3.bind(null,e,t,r),t.then(e,e))}function nh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ih(e,t,r,n,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=$r(-1,1),t.tag=2,Gr(r,t,1))),r.lanes|=1),e)}var v3=Cr.ReactCurrentOwner,mt=!1;function lt(e,t,r,n){t.child=e===null?f1(t,null,r,n):di(t,e.child,r,n)}function ah(e,t,r,n,a){r=r.render;var i=t.ref;return ai(t,a),n=oc(e,t,r,n,i,a),r=lc(),e!==null&&!mt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Sr(e,t,a)):(Oe&&r&&Qd(t),t.flags|=1,lt(e,t,n,a),t.child)}function sh(e,t,r,n,a){if(e===null){var i=r.type;return typeof i=="function"&&!vc(i)&&i.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=i,L1(e,t,i,n,a)):(e=Is(r.type,null,n,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&a)){var s=i.memoizedProps;if(r=r.compare,r=r!==null?r:ma,r(s,n)&&e.ref===t.ref)return Sr(e,t,a)}return t.flags|=1,e=Xr(i,n),e.ref=t.ref,e.return=t,t.child=e}function L1(e,t,r,n,a){if(e!==null){var i=e.memoizedProps;if(ma(i,n)&&e.ref===t.ref)if(mt=!1,t.pendingProps=n=i,(e.lanes&a)!==0)e.flags&131072&&(mt=!0);else return t.lanes=e.lanes,Sr(e,t,a)}return ed(e,t,r,n,a)}function U1(e,t,r){var n=t.pendingProps,a=n.children,i=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ce(Zn,bt),bt|=r;else{if(!(r&1073741824))return e=i!==null?i.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ce(Zn,bt),bt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=i!==null?i.baseLanes:r,Ce(Zn,bt),bt|=n}else i!==null?(n=i.baseLanes|r,t.memoizedState=null):n=r,Ce(Zn,bt),bt|=n;return lt(e,t,a,r),t.child}function j1(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function ed(e,t,r,n,a){var i=yt(r)?Cn:it.current;return i=li(t,i),ai(t,a),r=oc(e,t,r,n,i,a),n=lc(),e!==null&&!mt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Sr(e,t,a)):(Oe&&n&&Qd(t),t.flags|=1,lt(e,t,r,a),t.child)}function oh(e,t,r,n,a){if(yt(r)){var i=!0;Ws(t)}else i=!1;if(ai(t,a),t.stateNode===null)Cs(e,t),M1(t,r,n),Zu(t,r,n,a),n=!0;else if(e===null){var s=t.stateNode,o=t.memoizedProps;s.props=o;var u=s.context,d=r.contextType;typeof d=="object"&&d!==null?d=Mt(d):(d=yt(r)?Cn:it.current,d=li(t,d));var p=r.getDerivedStateFromProps,f=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==n||u!==d)&&th(t,s,n,d),Br=!1;var m=t.memoizedState;s.state=m,Gs(t,n,s,a),u=t.memoizedState,o!==n||m!==u||gt.current||Br?(typeof p=="function"&&(Yu(t,r,p,n),u=t.memoizedState),(o=Br||eh(t,r,o,n,m,u,d))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=u),s.props=n,s.state=u,s.context=d,n=o):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{s=t.stateNode,m1(e,t),o=t.memoizedProps,d=t.type===t.elementType?o:qt(t.type,o),s.props=d,f=t.pendingProps,m=s.context,u=r.contextType,typeof u=="object"&&u!==null?u=Mt(u):(u=yt(r)?Cn:it.current,u=li(t,u));var _=r.getDerivedStateFromProps;(p=typeof _=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==f||m!==u)&&th(t,s,n,u),Br=!1,m=t.memoizedState,s.state=m,Gs(t,n,s,a);var w=t.memoizedState;o!==f||m!==w||gt.current||Br?(typeof _=="function"&&(Yu(t,r,_,n),w=t.memoizedState),(d=Br||eh(t,r,d,n,m,w,u)||!1)?(p||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(n,w,u),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(n,w,u)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=w),s.props=n,s.state=w,s.context=u,n=d):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),n=!1)}return td(e,t,r,n,i,a)}function td(e,t,r,n,a,i){j1(e,t);var s=(t.flags&128)!==0;if(!n&&!s)return a&&Hf(t,r,!1),Sr(e,t,i);n=t.stateNode,v3.current=t;var o=s&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&s?(t.child=di(t,e.child,null,i),t.child=di(t,null,o,i)):lt(e,t,o,i),t.memoizedState=n.state,a&&Hf(t,r,!0),t.child}function W1(e){var t=e.stateNode;t.pendingContext?qf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&qf(e,t.context,!1),nc(e,t.containerInfo)}function lh(e,t,r,n,a){return ui(),Yd(a),t.flags|=256,lt(e,t,r,n),t.child}var rd={dehydrated:null,treeContext:null,retryLane:0};function nd(e){return{baseLanes:e,cachePool:null,transitions:null}}function F1(e,t,r){var n=t.pendingProps,a=Re.current,i=!1,s=(t.flags&128)!==0,o;if((o=s)||(o=e!==null&&e.memoizedState===null?!1:(a&2)!==0),o?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),Ce(Re,a&1),e===null)return Qu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=n.children,e=n.fallback,i?(n=t.mode,i=t.child,s={mode:"hidden",children:s},!(n&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=xo(s,n,0,null),e=bn(e,n,r,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=nd(r),t.memoizedState=rd,e):cc(t,s));if(a=e.memoizedState,a!==null&&(o=a.dehydrated,o!==null))return _3(e,t,s,n,o,a,r);if(i){i=n.fallback,s=t.mode,a=e.child,o=a.sibling;var u={mode:"hidden",children:n.children};return!(s&1)&&t.child!==a?(n=t.child,n.childLanes=0,n.pendingProps=u,t.deletions=null):(n=Xr(a,u),n.subtreeFlags=a.subtreeFlags&14680064),o!==null?i=Xr(o,i):(i=bn(i,s,r,null),i.flags|=2),i.return=t,n.return=t,n.sibling=i,t.child=n,n=i,i=t.child,s=e.child.memoizedState,s=s===null?nd(r):{baseLanes:s.baseLanes|r,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~r,t.memoizedState=rd,n}return i=e.child,e=i.sibling,n=Xr(i,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function cc(e,t){return t=xo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ts(e,t,r,n){return n!==null&&Yd(n),di(t,e.child,null,r),e=cc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function _3(e,t,r,n,a,i,s){if(r)return t.flags&256?(t.flags&=-257,n=wl(Error(H(422))),ts(e,t,s,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=n.fallback,a=t.mode,n=xo({mode:"visible",children:n.children},a,0,null),i=bn(i,a,s,null),i.flags|=2,n.return=t,i.return=t,n.sibling=i,t.child=n,t.mode&1&&di(t,e.child,null,s),t.child.memoizedState=nd(s),t.memoizedState=rd,i);if(!(t.mode&1))return ts(e,t,s,null);if(a.data==="$!"){if(n=a.nextSibling&&a.nextSibling.dataset,n)var o=n.dgst;return n=o,i=Error(H(419)),n=wl(i,n,void 0),ts(e,t,s,n)}if(o=(s&e.childLanes)!==0,mt||o){if(n=Xe,n!==null){switch(s&-s){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(n.suspendedLanes|s)?0:a,a!==0&&a!==i.retryLane&&(i.retryLane=a,kr(e,a),Yt(n,e,a,-1))}return yc(),n=wl(Error(H(421))),ts(e,t,s,n)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=O3.bind(null,e),a._reactRetry=t,null):(e=i.treeContext,St=Hr(a.nextSibling),Ct=t,Oe=!0,Gt=null,e!==null&&(Ot[Nt++]=_r,Ot[Nt++]=wr,Ot[Nt++]=En,_r=e.id,wr=e.overflow,En=t),t=cc(t,n.children),t.flags|=4096,t)}function uh(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Xu(e.return,t,r)}function $l(e,t,r,n,a){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=n,i.tail=r,i.tailMode=a)}function V1(e,t,r){var n=t.pendingProps,a=n.revealOrder,i=n.tail;if(lt(e,t,n.children,r),n=Re.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&uh(e,r,t);else if(e.tag===19)uh(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(Ce(Re,n),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(r=t.child,a=null;r!==null;)e=r.alternate,e!==null&&Ks(e)===null&&(a=r),r=r.sibling;r=a,r===null?(a=t.child,t.child=null):(a=r.sibling,r.sibling=null),$l(t,!1,a,r,i);break;case"backwards":for(r=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Ks(e)===null){t.child=a;break}e=a.sibling,a.sibling=r,r=a,a=e}$l(t,!0,r,null,i);break;case"together":$l(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Cs(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Sr(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),In|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(H(153));if(t.child!==null){for(e=t.child,r=Xr(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Xr(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function w3(e,t,r){switch(t.tag){case 3:W1(t),ui();break;case 5:g1(t);break;case 1:yt(t.type)&&Ws(t);break;case 4:nc(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,a=t.memoizedProps.value;Ce(qs,n._currentValue),n._currentValue=a;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(Ce(Re,Re.current&1),t.flags|=128,null):r&t.child.childLanes?F1(e,t,r):(Ce(Re,Re.current&1),e=Sr(e,t,r),e!==null?e.sibling:null);Ce(Re,Re.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return V1(e,t,r);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Ce(Re,Re.current),n)break;return null;case 22:case 23:return t.lanes=0,U1(e,t,r)}return Sr(e,t,r)}var q1,id,H1,G1;q1=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};id=function(){};H1=function(e,t,r,n){var a=e.memoizedProps;if(a!==n){e=t.stateNode,$n(or.current);var i=null;switch(r){case"input":a=Cu(e,a),n=Cu(e,n),i=[];break;case"select":a=Me({},a,{value:void 0}),n=Me({},n,{value:void 0}),i=[];break;case"textarea":a=Iu(e,a),n=Iu(e,n),i=[];break;default:typeof a.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=Us)}Au(r,n);var s;r=null;for(d in a)if(!n.hasOwnProperty(d)&&a.hasOwnProperty(d)&&a[d]!=null)if(d==="style"){var o=a[d];for(s in o)o.hasOwnProperty(s)&&(r||(r={}),r[s]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(la.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in n){var u=n[d];if(o=a!=null?a[d]:void 0,n.hasOwnProperty(d)&&u!==o&&(u!=null||o!=null))if(d==="style")if(o){for(s in o)!o.hasOwnProperty(s)||u&&u.hasOwnProperty(s)||(r||(r={}),r[s]="");for(s in u)u.hasOwnProperty(s)&&o[s]!==u[s]&&(r||(r={}),r[s]=u[s])}else r||(i||(i=[]),i.push(d,r)),r=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,o=o?o.__html:void 0,u!=null&&o!==u&&(i=i||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(la.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&Te("scroll",e),i||o===u||(i=[])):(i=i||[]).push(d,u))}r&&(i=i||[]).push("style",r);var d=i;(t.updateQueue=d)&&(t.flags|=4)}};G1=function(e,t,r,n){r!==n&&(t.flags|=4)};function Ai(e,t){if(!Oe)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function tt(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var a=e.child;a!==null;)r|=a.lanes|a.childLanes,n|=a.subtreeFlags&14680064,n|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)r|=a.lanes|a.childLanes,n|=a.subtreeFlags,n|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function $3(e,t,r){var n=t.pendingProps;switch(Xd(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tt(t),null;case 1:return yt(t.type)&&js(),tt(t),null;case 3:return n=t.stateNode,ci(),Ie(gt),Ie(it),ac(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ja(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Gt!==null&&(pd(Gt),Gt=null))),id(e,t),tt(t),null;case 5:ic(t);var a=$n(wa.current);if(r=t.type,e!==null&&t.stateNode!=null)H1(e,t,r,n,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(H(166));return tt(t),null}if(e=$n(or.current),Ja(t)){n=t.stateNode,r=t.type;var i=t.memoizedProps;switch(n[ar]=t,n[va]=i,e=(t.mode&1)!==0,r){case"dialog":Te("cancel",n),Te("close",n);break;case"iframe":case"object":case"embed":Te("load",n);break;case"video":case"audio":for(a=0;a<Gi.length;a++)Te(Gi[a],n);break;case"source":Te("error",n);break;case"img":case"image":case"link":Te("error",n),Te("load",n);break;case"details":Te("toggle",n);break;case"input":vf(n,i),Te("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!i.multiple},Te("invalid",n);break;case"textarea":wf(n,i),Te("invalid",n)}Au(r,i),a=null;for(var s in i)if(i.hasOwnProperty(s)){var o=i[s];s==="children"?typeof o=="string"?n.textContent!==o&&(i.suppressHydrationWarning!==!0&&Za(n.textContent,o,e),a=["children",o]):typeof o=="number"&&n.textContent!==""+o&&(i.suppressHydrationWarning!==!0&&Za(n.textContent,o,e),a=["children",""+o]):la.hasOwnProperty(s)&&o!=null&&s==="onScroll"&&Te("scroll",n)}switch(r){case"input":Va(n),_f(n,i,!0);break;case"textarea":Va(n),$f(n);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(n.onclick=Us)}n=a,t.updateQueue=n,n!==null&&(t.flags|=4)}else{s=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=$y(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=s.createElement(r,{is:n.is}):(e=s.createElement(r),r==="select"&&(s=e,n.multiple?s.multiple=!0:n.size&&(s.size=n.size))):e=s.createElementNS(e,r),e[ar]=t,e[va]=n,q1(e,t,!1,!1),t.stateNode=e;e:{switch(s=Ou(r,n),r){case"dialog":Te("cancel",e),Te("close",e),a=n;break;case"iframe":case"object":case"embed":Te("load",e),a=n;break;case"video":case"audio":for(a=0;a<Gi.length;a++)Te(Gi[a],e);a=n;break;case"source":Te("error",e),a=n;break;case"img":case"image":case"link":Te("error",e),Te("load",e),a=n;break;case"details":Te("toggle",e),a=n;break;case"input":vf(e,n),a=Cu(e,n),Te("invalid",e);break;case"option":a=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},a=Me({},n,{value:void 0}),Te("invalid",e);break;case"textarea":wf(e,n),a=Iu(e,n),Te("invalid",e);break;default:a=n}Au(r,a),o=a;for(i in o)if(o.hasOwnProperty(i)){var u=o[i];i==="style"?ky(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&xy(e,u)):i==="children"?typeof u=="string"?(r!=="textarea"||u!=="")&&ua(e,u):typeof u=="number"&&ua(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(la.hasOwnProperty(i)?u!=null&&i==="onScroll"&&Te("scroll",e):u!=null&&Dd(e,i,u,s))}switch(r){case"input":Va(e),_f(e,n,!1);break;case"textarea":Va(e),$f(e);break;case"option":n.value!=null&&e.setAttribute("value",""+Yr(n.value));break;case"select":e.multiple=!!n.multiple,i=n.value,i!=null?ti(e,!!n.multiple,i,!1):n.defaultValue!=null&&ti(e,!!n.multiple,n.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Us)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return tt(t),null;case 6:if(e&&t.stateNode!=null)G1(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(H(166));if(r=$n(wa.current),$n(or.current),Ja(t)){if(n=t.stateNode,r=t.memoizedProps,n[ar]=t,(i=n.nodeValue!==r)&&(e=Ct,e!==null))switch(e.tag){case 3:Za(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Za(n.nodeValue,r,(e.mode&1)!==0)}i&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[ar]=t,t.stateNode=n}return tt(t),null;case 13:if(Ie(Re),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Oe&&St!==null&&t.mode&1&&!(t.flags&128))c1(),ui(),t.flags|=98560,i=!1;else if(i=Ja(t),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(H(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(H(317));i[ar]=t}else ui(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;tt(t),i=!1}else Gt!==null&&(pd(Gt),Gt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||Re.current&1?Ve===0&&(Ve=3):yc())),t.updateQueue!==null&&(t.flags|=4),tt(t),null);case 4:return ci(),id(e,t),e===null&&ga(t.stateNode.containerInfo),tt(t),null;case 10:return ec(t.type._context),tt(t),null;case 17:return yt(t.type)&&js(),tt(t),null;case 19:if(Ie(Re),i=t.memoizedState,i===null)return tt(t),null;if(n=(t.flags&128)!==0,s=i.rendering,s===null)if(n)Ai(i,!1);else{if(Ve!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Ks(e),s!==null){for(t.flags|=128,Ai(i,!1),n=s.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)i=r,e=n,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return Ce(Re,Re.current&1|2),t.child}e=e.sibling}i.tail!==null&&Ue()>fi&&(t.flags|=128,n=!0,Ai(i,!1),t.lanes=4194304)}else{if(!n)if(e=Ks(s),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Ai(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!Oe)return tt(t),null}else 2*Ue()-i.renderingStartTime>fi&&r!==1073741824&&(t.flags|=128,n=!0,Ai(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(r=i.last,r!==null?r.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Ue(),t.sibling=null,r=Re.current,Ce(Re,n?r&1|2:r&1),t):(tt(t),null);case 22:case 23:return gc(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?bt&1073741824&&(tt(t),t.subtreeFlags&6&&(t.flags|=8192)):tt(t),null;case 24:return null;case 25:return null}throw Error(H(156,t.tag))}function x3(e,t){switch(Xd(t),t.tag){case 1:return yt(t.type)&&js(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ci(),Ie(gt),Ie(it),ac(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ic(t),null;case 13:if(Ie(Re),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(H(340));ui()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ie(Re),null;case 4:return ci(),null;case 10:return ec(t.type._context),null;case 22:case 23:return gc(),null;case 24:return null;default:return null}}var rs=!1,nt=!1,b3=typeof WeakSet=="function"?WeakSet:Set,re=null;function Yn(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){Be(e,t,n)}else r.current=null}function ad(e,t,r){try{r()}catch(n){Be(e,t,n)}}var dh=!1;function k3(e,t){if(Wu=Ps,e=Zy(),Kd(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var a=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{r.nodeType,i.nodeType}catch{r=null;break e}var s=0,o=-1,u=-1,d=0,p=0,f=e,m=null;t:for(;;){for(var _;f!==r||a!==0&&f.nodeType!==3||(o=s+a),f!==i||n!==0&&f.nodeType!==3||(u=s+n),f.nodeType===3&&(s+=f.nodeValue.length),(_=f.firstChild)!==null;)m=f,f=_;for(;;){if(f===e)break t;if(m===r&&++d===a&&(o=s),m===i&&++p===n&&(u=s),(_=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=_}r=o===-1||u===-1?null:{start:o,end:u}}else r=null}r=r||{start:0,end:0}}else r=null;for(Fu={focusedElem:e,selectionRange:r},Ps=!1,re=t;re!==null;)if(t=re,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,re=e;else for(;re!==null;){t=re;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var $=w.memoizedProps,S=w.memoizedState,y=t.stateNode,g=y.getSnapshotBeforeUpdate(t.elementType===t.type?$:qt(t.type,$),S);y.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(H(163))}}catch(k){Be(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,re=e;break}re=t.return}return w=dh,dh=!1,w}function ia(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var a=n=n.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,i!==void 0&&ad(t,r,i)}a=a.next}while(a!==n)}}function wo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function sd(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function K1(e){var t=e.alternate;t!==null&&(e.alternate=null,K1(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ar],delete t[va],delete t[Hu],delete t[s3],delete t[o3])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Q1(e){return e.tag===5||e.tag===3||e.tag===4}function ch(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Q1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function od(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Us));else if(n!==4&&(e=e.child,e!==null))for(od(e,t,r),e=e.sibling;e!==null;)od(e,t,r),e=e.sibling}function ld(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(ld(e,t,r),e=e.sibling;e!==null;)ld(e,t,r),e=e.sibling}var Ye=null,Ht=!1;function Nr(e,t,r){for(r=r.child;r!==null;)X1(e,t,r),r=r.sibling}function X1(e,t,r){if(sr&&typeof sr.onCommitFiberUnmount=="function")try{sr.onCommitFiberUnmount(po,r)}catch{}switch(r.tag){case 5:nt||Yn(r,t);case 6:var n=Ye,a=Ht;Ye=null,Nr(e,t,r),Ye=n,Ht=a,Ye!==null&&(Ht?(e=Ye,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Ye.removeChild(r.stateNode));break;case 18:Ye!==null&&(Ht?(e=Ye,r=r.stateNode,e.nodeType===8?hl(e.parentNode,r):e.nodeType===1&&hl(e,r),fa(e)):hl(Ye,r.stateNode));break;case 4:n=Ye,a=Ht,Ye=r.stateNode.containerInfo,Ht=!0,Nr(e,t,r),Ye=n,Ht=a;break;case 0:case 11:case 14:case 15:if(!nt&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){a=n=n.next;do{var i=a,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&ad(r,t,s),a=a.next}while(a!==n)}Nr(e,t,r);break;case 1:if(!nt&&(Yn(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(o){Be(r,t,o)}Nr(e,t,r);break;case 21:Nr(e,t,r);break;case 22:r.mode&1?(nt=(n=nt)||r.memoizedState!==null,Nr(e,t,r),nt=n):Nr(e,t,r);break;default:Nr(e,t,r)}}function ph(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new b3),t.forEach(function(n){var a=N3.bind(null,e,n);r.has(n)||(r.add(n),n.then(a,a))})}}function Lt(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var a=r[n];try{var i=e,s=t,o=s;e:for(;o!==null;){switch(o.tag){case 5:Ye=o.stateNode,Ht=!1;break e;case 3:Ye=o.stateNode.containerInfo,Ht=!0;break e;case 4:Ye=o.stateNode.containerInfo,Ht=!0;break e}o=o.return}if(Ye===null)throw Error(H(160));X1(i,s,a),Ye=null,Ht=!1;var u=a.alternate;u!==null&&(u.return=null),a.return=null}catch(d){Be(a,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Y1(t,e),t=t.sibling}function Y1(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Lt(t,e),rr(e),n&4){try{ia(3,e,e.return),wo(3,e)}catch($){Be(e,e.return,$)}try{ia(5,e,e.return)}catch($){Be(e,e.return,$)}}break;case 1:Lt(t,e),rr(e),n&512&&r!==null&&Yn(r,r.return);break;case 5:if(Lt(t,e),rr(e),n&512&&r!==null&&Yn(r,r.return),e.flags&32){var a=e.stateNode;try{ua(a,"")}catch($){Be(e,e.return,$)}}if(n&4&&(a=e.stateNode,a!=null)){var i=e.memoizedProps,s=r!==null?r.memoizedProps:i,o=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{o==="input"&&i.type==="radio"&&i.name!=null&&_y(a,i),Ou(o,s);var d=Ou(o,i);for(s=0;s<u.length;s+=2){var p=u[s],f=u[s+1];p==="style"?ky(a,f):p==="dangerouslySetInnerHTML"?xy(a,f):p==="children"?ua(a,f):Dd(a,p,f,d)}switch(o){case"input":Eu(a,i);break;case"textarea":wy(a,i);break;case"select":var m=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var _=i.value;_!=null?ti(a,!!i.multiple,_,!1):m!==!!i.multiple&&(i.defaultValue!=null?ti(a,!!i.multiple,i.defaultValue,!0):ti(a,!!i.multiple,i.multiple?[]:"",!1))}a[va]=i}catch($){Be(e,e.return,$)}}break;case 6:if(Lt(t,e),rr(e),n&4){if(e.stateNode===null)throw Error(H(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch($){Be(e,e.return,$)}}break;case 3:if(Lt(t,e),rr(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{fa(t.containerInfo)}catch($){Be(e,e.return,$)}break;case 4:Lt(t,e),rr(e);break;case 13:Lt(t,e),rr(e),a=e.child,a.flags&8192&&(i=a.memoizedState!==null,a.stateNode.isHidden=i,!i||a.alternate!==null&&a.alternate.memoizedState!==null||(hc=Ue())),n&4&&ph(e);break;case 22:if(p=r!==null&&r.memoizedState!==null,e.mode&1?(nt=(d=nt)||p,Lt(t,e),nt=d):Lt(t,e),rr(e),n&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!p&&e.mode&1)for(re=e,p=e.child;p!==null;){for(f=re=p;re!==null;){switch(m=re,_=m.child,m.tag){case 0:case 11:case 14:case 15:ia(4,m,m.return);break;case 1:Yn(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){n=m,r=m.return;try{t=n,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch($){Be(n,r,$)}}break;case 5:Yn(m,m.return);break;case 22:if(m.memoizedState!==null){hh(f);continue}}_!==null?(_.return=m,re=_):hh(f)}p=p.sibling}e:for(p=null,f=e;;){if(f.tag===5){if(p===null){p=f;try{a=f.stateNode,d?(i=a.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(o=f.stateNode,u=f.memoizedProps.style,s=u!=null&&u.hasOwnProperty("display")?u.display:null,o.style.display=by("display",s))}catch($){Be(e,e.return,$)}}}else if(f.tag===6){if(p===null)try{f.stateNode.nodeValue=d?"":f.memoizedProps}catch($){Be(e,e.return,$)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;p===f&&(p=null),f=f.return}p===f&&(p=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Lt(t,e),rr(e),n&4&&ph(e);break;case 21:break;default:Lt(t,e),rr(e)}}function rr(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Q1(r)){var n=r;break e}r=r.return}throw Error(H(160))}switch(n.tag){case 5:var a=n.stateNode;n.flags&32&&(ua(a,""),n.flags&=-33);var i=ch(e);ld(e,i,a);break;case 3:case 4:var s=n.stateNode.containerInfo,o=ch(e);od(e,o,s);break;default:throw Error(H(161))}}catch(u){Be(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function S3(e,t,r){re=e,Z1(e)}function Z1(e,t,r){for(var n=(e.mode&1)!==0;re!==null;){var a=re,i=a.child;if(a.tag===22&&n){var s=a.memoizedState!==null||rs;if(!s){var o=a.alternate,u=o!==null&&o.memoizedState!==null||nt;o=rs;var d=nt;if(rs=s,(nt=u)&&!d)for(re=a;re!==null;)s=re,u=s.child,s.tag===22&&s.memoizedState!==null?mh(a):u!==null?(u.return=s,re=u):mh(a);for(;i!==null;)re=i,Z1(i),i=i.sibling;re=a,rs=o,nt=d}fh(e)}else a.subtreeFlags&8772&&i!==null?(i.return=a,re=i):fh(e)}}function fh(e){for(;re!==null;){var t=re;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:nt||wo(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!nt)if(r===null)n.componentDidMount();else{var a=t.elementType===t.type?r.memoizedProps:qt(t.type,r.memoizedProps);n.componentDidUpdate(a,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Yf(t,i,n);break;case 3:var s=t.updateQueue;if(s!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Yf(t,s,r)}break;case 5:var o=t.stateNode;if(r===null&&t.flags&4){r=o;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&r.focus();break;case"img":u.src&&(r.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var p=d.memoizedState;if(p!==null){var f=p.dehydrated;f!==null&&fa(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(H(163))}nt||t.flags&512&&sd(t)}catch(m){Be(t,t.return,m)}}if(t===e){re=null;break}if(r=t.sibling,r!==null){r.return=t.return,re=r;break}re=t.return}}function hh(e){for(;re!==null;){var t=re;if(t===e){re=null;break}var r=t.sibling;if(r!==null){r.return=t.return,re=r;break}re=t.return}}function mh(e){for(;re!==null;){var t=re;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{wo(4,t)}catch(u){Be(t,r,u)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var a=t.return;try{n.componentDidMount()}catch(u){Be(t,a,u)}}var i=t.return;try{sd(t)}catch(u){Be(t,i,u)}break;case 5:var s=t.return;try{sd(t)}catch(u){Be(t,s,u)}}}catch(u){Be(t,t.return,u)}if(t===e){re=null;break}var o=t.sibling;if(o!==null){o.return=t.return,re=o;break}re=t.return}}var C3=Math.ceil,Ys=Cr.ReactCurrentDispatcher,pc=Cr.ReactCurrentOwner,Dt=Cr.ReactCurrentBatchConfig,ve=0,Xe=null,We=null,Ze=0,bt=0,Zn=tn(0),Ve=0,ka=null,In=0,$o=0,fc=0,aa=null,ht=null,hc=0,fi=1/0,mr=null,Zs=!1,ud=null,Kr=null,ns=!1,Wr=null,Js=0,sa=0,dd=null,Es=-1,Ts=0;function ut(){return ve&6?Ue():Es!==-1?Es:Es=Ue()}function Qr(e){return e.mode&1?ve&2&&Ze!==0?Ze&-Ze:u3.transition!==null?(Ts===0&&(Ts=My()),Ts):(e=be,e!==0||(e=window.event,e=e===void 0?16:Fy(e.type)),e):1}function Yt(e,t,r,n){if(50<sa)throw sa=0,dd=null,Error(H(185));Ta(e,r,n),(!(ve&2)||e!==Xe)&&(e===Xe&&(!(ve&2)&&($o|=r),Ve===4&&Ur(e,Ze)),vt(e,n),r===1&&ve===0&&!(t.mode&1)&&(fi=Ue()+500,yo&&rn()))}function vt(e,t){var r=e.callbackNode;ub(e,t);var n=Ms(e,e===Xe?Ze:0);if(n===0)r!==null&&kf(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&kf(r),t===1)e.tag===0?l3(gh.bind(null,e)):l1(gh.bind(null,e)),i3(function(){!(ve&6)&&rn()}),r=null;else{switch(Py(n)){case 1:r=Ud;break;case 4:r=Ry;break;case 16:r=Ds;break;case 536870912:r=Dy;break;default:r=Ds}r=sv(r,J1.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function J1(e,t){if(Es=-1,Ts=0,ve&6)throw Error(H(327));var r=e.callbackNode;if(si()&&e.callbackNode!==r)return null;var n=Ms(e,e===Xe?Ze:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=eo(e,n);else{t=n;var a=ve;ve|=2;var i=tv();(Xe!==e||Ze!==t)&&(mr=null,fi=Ue()+500,xn(e,t));do try{I3();break}catch(o){ev(e,o)}while(!0);Jd(),Ys.current=i,ve=a,We!==null?t=0:(Xe=null,Ze=0,t=Ve)}if(t!==0){if(t===2&&(a=Pu(e),a!==0&&(n=a,t=cd(e,a))),t===1)throw r=ka,xn(e,0),Ur(e,n),vt(e,Ue()),r;if(t===6)Ur(e,n);else{if(a=e.current.alternate,!(n&30)&&!E3(a)&&(t=eo(e,n),t===2&&(i=Pu(e),i!==0&&(n=i,t=cd(e,i))),t===1))throw r=ka,xn(e,0),Ur(e,n),vt(e,Ue()),r;switch(e.finishedWork=a,e.finishedLanes=n,t){case 0:case 1:throw Error(H(345));case 2:mn(e,ht,mr);break;case 3:if(Ur(e,n),(n&130023424)===n&&(t=hc+500-Ue(),10<t)){if(Ms(e,0)!==0)break;if(a=e.suspendedLanes,(a&n)!==n){ut(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=qu(mn.bind(null,e,ht,mr),t);break}mn(e,ht,mr);break;case 4:if(Ur(e,n),(n&4194240)===n)break;for(t=e.eventTimes,a=-1;0<n;){var s=31-Xt(n);i=1<<s,s=t[s],s>a&&(a=s),n&=~i}if(n=a,n=Ue()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*C3(n/1960))-n,10<n){e.timeoutHandle=qu(mn.bind(null,e,ht,mr),n);break}mn(e,ht,mr);break;case 5:mn(e,ht,mr);break;default:throw Error(H(329))}}}return vt(e,Ue()),e.callbackNode===r?J1.bind(null,e):null}function cd(e,t){var r=aa;return e.current.memoizedState.isDehydrated&&(xn(e,t).flags|=256),e=eo(e,t),e!==2&&(t=ht,ht=r,t!==null&&pd(t)),e}function pd(e){ht===null?ht=e:ht.push.apply(ht,e)}function E3(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var a=r[n],i=a.getSnapshot;a=a.value;try{if(!Jt(i(),a))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ur(e,t){for(t&=~fc,t&=~$o,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Xt(t),n=1<<r;e[r]=-1,t&=~n}}function gh(e){if(ve&6)throw Error(H(327));si();var t=Ms(e,0);if(!(t&1))return vt(e,Ue()),null;var r=eo(e,t);if(e.tag!==0&&r===2){var n=Pu(e);n!==0&&(t=n,r=cd(e,n))}if(r===1)throw r=ka,xn(e,0),Ur(e,t),vt(e,Ue()),r;if(r===6)throw Error(H(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,mn(e,ht,mr),vt(e,Ue()),null}function mc(e,t){var r=ve;ve|=1;try{return e(t)}finally{ve=r,ve===0&&(fi=Ue()+500,yo&&rn())}}function zn(e){Wr!==null&&Wr.tag===0&&!(ve&6)&&si();var t=ve;ve|=1;var r=Dt.transition,n=be;try{if(Dt.transition=null,be=1,e)return e()}finally{be=n,Dt.transition=r,ve=t,!(ve&6)&&rn()}}function gc(){bt=Zn.current,Ie(Zn)}function xn(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,n3(r)),We!==null)for(r=We.return;r!==null;){var n=r;switch(Xd(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&js();break;case 3:ci(),Ie(gt),Ie(it),ac();break;case 5:ic(n);break;case 4:ci();break;case 13:Ie(Re);break;case 19:Ie(Re);break;case 10:ec(n.type._context);break;case 22:case 23:gc()}r=r.return}if(Xe=e,We=e=Xr(e.current,null),Ze=bt=t,Ve=0,ka=null,fc=$o=In=0,ht=aa=null,wn!==null){for(t=0;t<wn.length;t++)if(r=wn[t],n=r.interleaved,n!==null){r.interleaved=null;var a=n.next,i=r.pending;if(i!==null){var s=i.next;i.next=a,n.next=s}r.pending=n}wn=null}return e}function ev(e,t){do{var r=We;try{if(Jd(),ks.current=Xs,Qs){for(var n=De.memoizedState;n!==null;){var a=n.queue;a!==null&&(a.pending=null),n=n.next}Qs=!1}if(Tn=0,Qe=Fe=De=null,na=!1,$a=0,pc.current=null,r===null||r.return===null){Ve=1,ka=t,We=null;break}e:{var i=e,s=r.return,o=r,u=t;if(t=Ze,o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,p=o,f=p.tag;if(!(p.mode&1)&&(f===0||f===11||f===15)){var m=p.alternate;m?(p.updateQueue=m.updateQueue,p.memoizedState=m.memoizedState,p.lanes=m.lanes):(p.updateQueue=null,p.memoizedState=null)}var _=nh(s);if(_!==null){_.flags&=-257,ih(_,s,o,i,t),_.mode&1&&rh(i,d,t),t=_,u=d;var w=t.updateQueue;if(w===null){var $=new Set;$.add(u),t.updateQueue=$}else w.add(u);break e}else{if(!(t&1)){rh(i,d,t),yc();break e}u=Error(H(426))}}else if(Oe&&o.mode&1){var S=nh(s);if(S!==null){!(S.flags&65536)&&(S.flags|=256),ih(S,s,o,i,t),Yd(pi(u,o));break e}}i=u=pi(u,o),Ve!==4&&(Ve=2),aa===null?aa=[i]:aa.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var y=P1(i,u,t);Xf(i,y);break e;case 1:o=u;var g=i.type,x=i.stateNode;if(!(i.flags&128)&&(typeof g.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Kr===null||!Kr.has(x)))){i.flags|=65536,t&=-t,i.lanes|=t;var k=B1(i,o,t);Xf(i,k);break e}}i=i.return}while(i!==null)}nv(r)}catch(E){t=E,We===r&&r!==null&&(We=r=r.return);continue}break}while(!0)}function tv(){var e=Ys.current;return Ys.current=Xs,e===null?Xs:e}function yc(){(Ve===0||Ve===3||Ve===2)&&(Ve=4),Xe===null||!(In&268435455)&&!($o&268435455)||Ur(Xe,Ze)}function eo(e,t){var r=ve;ve|=2;var n=tv();(Xe!==e||Ze!==t)&&(mr=null,xn(e,t));do try{T3();break}catch(a){ev(e,a)}while(!0);if(Jd(),ve=r,Ys.current=n,We!==null)throw Error(H(261));return Xe=null,Ze=0,Ve}function T3(){for(;We!==null;)rv(We)}function I3(){for(;We!==null&&!eb();)rv(We)}function rv(e){var t=av(e.alternate,e,bt);e.memoizedProps=e.pendingProps,t===null?nv(e):We=t,pc.current=null}function nv(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=x3(r,t),r!==null){r.flags&=32767,We=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ve=6,We=null;return}}else if(r=$3(r,t,bt),r!==null){We=r;return}if(t=t.sibling,t!==null){We=t;return}We=t=e}while(t!==null);Ve===0&&(Ve=5)}function mn(e,t,r){var n=be,a=Dt.transition;try{Dt.transition=null,be=1,z3(e,t,r,n)}finally{Dt.transition=a,be=n}return null}function z3(e,t,r,n){do si();while(Wr!==null);if(ve&6)throw Error(H(327));r=e.finishedWork;var a=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(H(177));e.callbackNode=null,e.callbackPriority=0;var i=r.lanes|r.childLanes;if(db(e,i),e===Xe&&(We=Xe=null,Ze=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||ns||(ns=!0,sv(Ds,function(){return si(),null})),i=(r.flags&15990)!==0,r.subtreeFlags&15990||i){i=Dt.transition,Dt.transition=null;var s=be;be=1;var o=ve;ve|=4,pc.current=null,k3(e,r),Y1(r,e),Xb(Fu),Ps=!!Wu,Fu=Wu=null,e.current=r,S3(r),tb(),ve=o,be=s,Dt.transition=i}else e.current=r;if(ns&&(ns=!1,Wr=e,Js=a),i=e.pendingLanes,i===0&&(Kr=null),ib(r.stateNode),vt(e,Ue()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)a=t[r],n(a.value,{componentStack:a.stack,digest:a.digest});if(Zs)throw Zs=!1,e=ud,ud=null,e;return Js&1&&e.tag!==0&&si(),i=e.pendingLanes,i&1?e===dd?sa++:(sa=0,dd=e):sa=0,rn(),null}function si(){if(Wr!==null){var e=Py(Js),t=Dt.transition,r=be;try{if(Dt.transition=null,be=16>e?16:e,Wr===null)var n=!1;else{if(e=Wr,Wr=null,Js=0,ve&6)throw Error(H(331));var a=ve;for(ve|=4,re=e.current;re!==null;){var i=re,s=i.child;if(re.flags&16){var o=i.deletions;if(o!==null){for(var u=0;u<o.length;u++){var d=o[u];for(re=d;re!==null;){var p=re;switch(p.tag){case 0:case 11:case 15:ia(8,p,i)}var f=p.child;if(f!==null)f.return=p,re=f;else for(;re!==null;){p=re;var m=p.sibling,_=p.return;if(K1(p),p===d){re=null;break}if(m!==null){m.return=_,re=m;break}re=_}}}var w=i.alternate;if(w!==null){var $=w.child;if($!==null){w.child=null;do{var S=$.sibling;$.sibling=null,$=S}while($!==null)}}re=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,re=s;else e:for(;re!==null;){if(i=re,i.flags&2048)switch(i.tag){case 0:case 11:case 15:ia(9,i,i.return)}var y=i.sibling;if(y!==null){y.return=i.return,re=y;break e}re=i.return}}var g=e.current;for(re=g;re!==null;){s=re;var x=s.child;if(s.subtreeFlags&2064&&x!==null)x.return=s,re=x;else e:for(s=g;re!==null;){if(o=re,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:wo(9,o)}}catch(E){Be(o,o.return,E)}if(o===s){re=null;break e}var k=o.sibling;if(k!==null){k.return=o.return,re=k;break e}re=o.return}}if(ve=a,rn(),sr&&typeof sr.onPostCommitFiberRoot=="function")try{sr.onPostCommitFiberRoot(po,e)}catch{}n=!0}return n}finally{be=r,Dt.transition=t}}return!1}function yh(e,t,r){t=pi(r,t),t=P1(e,t,1),e=Gr(e,t,1),t=ut(),e!==null&&(Ta(e,1,t),vt(e,t))}function Be(e,t,r){if(e.tag===3)yh(e,e,r);else for(;t!==null;){if(t.tag===3){yh(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Kr===null||!Kr.has(n))){e=pi(r,e),e=B1(t,e,1),t=Gr(t,e,1),e=ut(),t!==null&&(Ta(t,1,e),vt(t,e));break}}t=t.return}}function A3(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=ut(),e.pingedLanes|=e.suspendedLanes&r,Xe===e&&(Ze&r)===r&&(Ve===4||Ve===3&&(Ze&130023424)===Ze&&500>Ue()-hc?xn(e,0):fc|=r),vt(e,t)}function iv(e,t){t===0&&(e.mode&1?(t=Ga,Ga<<=1,!(Ga&130023424)&&(Ga=4194304)):t=1);var r=ut();e=kr(e,t),e!==null&&(Ta(e,t,r),vt(e,r))}function O3(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),iv(e,r)}function N3(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,a=e.memoizedState;a!==null&&(r=a.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(H(314))}n!==null&&n.delete(t),iv(e,r)}var av;av=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||gt.current)mt=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return mt=!1,w3(e,t,r);mt=!!(e.flags&131072)}else mt=!1,Oe&&t.flags&1048576&&u1(t,Vs,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;Cs(e,t),e=t.pendingProps;var a=li(t,it.current);ai(t,r),a=oc(null,t,n,e,a,r);var i=lc();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,yt(n)?(i=!0,Ws(t)):i=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,rc(t),a.updater=_o,t.stateNode=a,a._reactInternals=t,Zu(t,n,e,r),t=td(null,t,n,!0,i,r)):(t.tag=0,Oe&&i&&Qd(t),lt(null,t,a,r),t=t.child),t;case 16:n=t.elementType;e:{switch(Cs(e,t),e=t.pendingProps,a=n._init,n=a(n._payload),t.type=n,a=t.tag=D3(n),e=qt(n,e),a){case 0:t=ed(null,t,n,e,r);break e;case 1:t=oh(null,t,n,e,r);break e;case 11:t=ah(null,t,n,e,r);break e;case 14:t=sh(null,t,n,qt(n.type,e),r);break e}throw Error(H(306,n,""))}return t;case 0:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:qt(n,a),ed(e,t,n,a,r);case 1:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:qt(n,a),oh(e,t,n,a,r);case 3:e:{if(W1(t),e===null)throw Error(H(387));n=t.pendingProps,i=t.memoizedState,a=i.element,m1(e,t),Gs(t,n,null,r);var s=t.memoizedState;if(n=s.element,i.isDehydrated)if(i={element:n,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){a=pi(Error(H(423)),t),t=lh(e,t,n,r,a);break e}else if(n!==a){a=pi(Error(H(424)),t),t=lh(e,t,n,r,a);break e}else for(St=Hr(t.stateNode.containerInfo.firstChild),Ct=t,Oe=!0,Gt=null,r=f1(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(ui(),n===a){t=Sr(e,t,r);break e}lt(e,t,n,r)}t=t.child}return t;case 5:return g1(t),e===null&&Qu(t),n=t.type,a=t.pendingProps,i=e!==null?e.memoizedProps:null,s=a.children,Vu(n,a)?s=null:i!==null&&Vu(n,i)&&(t.flags|=32),j1(e,t),lt(e,t,s,r),t.child;case 6:return e===null&&Qu(t),null;case 13:return F1(e,t,r);case 4:return nc(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=di(t,null,n,r):lt(e,t,n,r),t.child;case 11:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:qt(n,a),ah(e,t,n,a,r);case 7:return lt(e,t,t.pendingProps,r),t.child;case 8:return lt(e,t,t.pendingProps.children,r),t.child;case 12:return lt(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,a=t.pendingProps,i=t.memoizedProps,s=a.value,Ce(qs,n._currentValue),n._currentValue=s,i!==null)if(Jt(i.value,s)){if(i.children===a.children&&!gt.current){t=Sr(e,t,r);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var o=i.dependencies;if(o!==null){s=i.child;for(var u=o.firstContext;u!==null;){if(u.context===n){if(i.tag===1){u=$r(-1,r&-r),u.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var p=d.pending;p===null?u.next=u:(u.next=p.next,p.next=u),d.pending=u}}i.lanes|=r,u=i.alternate,u!==null&&(u.lanes|=r),Xu(i.return,r,t),o.lanes|=r;break}u=u.next}}else if(i.tag===10)s=i.type===t.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(H(341));s.lanes|=r,o=s.alternate,o!==null&&(o.lanes|=r),Xu(s,r,t),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}lt(e,t,a.children,r),t=t.child}return t;case 9:return a=t.type,n=t.pendingProps.children,ai(t,r),a=Mt(a),n=n(a),t.flags|=1,lt(e,t,n,r),t.child;case 14:return n=t.type,a=qt(n,t.pendingProps),a=qt(n.type,a),sh(e,t,n,a,r);case 15:return L1(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:qt(n,a),Cs(e,t),t.tag=1,yt(n)?(e=!0,Ws(t)):e=!1,ai(t,r),M1(t,n,a),Zu(t,n,a,r),td(null,t,n,!0,e,r);case 19:return V1(e,t,r);case 22:return U1(e,t,r)}throw Error(H(156,t.tag))};function sv(e,t){return Ny(e,t)}function R3(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rt(e,t,r,n){return new R3(e,t,r,n)}function vc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function D3(e){if(typeof e=="function")return vc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Pd)return 11;if(e===Bd)return 14}return 2}function Xr(e,t){var r=e.alternate;return r===null?(r=Rt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Is(e,t,r,n,a,i){var s=2;if(n=e,typeof e=="function")vc(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Wn:return bn(r.children,a,i,t);case Md:s=8,a|=8;break;case xu:return e=Rt(12,r,t,a|2),e.elementType=xu,e.lanes=i,e;case bu:return e=Rt(13,r,t,a),e.elementType=bu,e.lanes=i,e;case ku:return e=Rt(19,r,t,a),e.elementType=ku,e.lanes=i,e;case gy:return xo(r,a,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case hy:s=10;break e;case my:s=9;break e;case Pd:s=11;break e;case Bd:s=14;break e;case Pr:s=16,n=null;break e}throw Error(H(130,e==null?e:typeof e,""))}return t=Rt(s,r,t,a),t.elementType=e,t.type=n,t.lanes=i,t}function bn(e,t,r,n){return e=Rt(7,e,n,t),e.lanes=r,e}function xo(e,t,r,n){return e=Rt(22,e,n,t),e.elementType=gy,e.lanes=r,e.stateNode={isHidden:!1},e}function xl(e,t,r){return e=Rt(6,e,null,t),e.lanes=r,e}function bl(e,t,r){return t=Rt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function M3(e,t,r,n,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=nl(0),this.expirationTimes=nl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nl(0),this.identifierPrefix=n,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function _c(e,t,r,n,a,i,s,o,u){return e=new M3(e,t,r,o,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Rt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},rc(i),e}function P3(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:jn,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function ov(e){if(!e)return Zr;e=e._reactInternals;e:{if(Dn(e)!==e||e.tag!==1)throw Error(H(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(yt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(H(171))}if(e.tag===1){var r=e.type;if(yt(r))return o1(e,r,t)}return t}function lv(e,t,r,n,a,i,s,o,u){return e=_c(r,n,!0,e,a,i,s,o,u),e.context=ov(null),r=e.current,n=ut(),a=Qr(r),i=$r(n,a),i.callback=t??null,Gr(r,i,a),e.current.lanes=a,Ta(e,a,n),vt(e,n),e}function bo(e,t,r,n){var a=t.current,i=ut(),s=Qr(a);return r=ov(r),t.context===null?t.context=r:t.pendingContext=r,t=$r(i,s),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=Gr(a,t,s),e!==null&&(Yt(e,a,s,i),bs(e,a,s)),s}function to(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function vh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function wc(e,t){vh(e,t),(e=e.alternate)&&vh(e,t)}function B3(){return null}var uv=typeof reportError=="function"?reportError:function(e){console.error(e)};function $c(e){this._internalRoot=e}ko.prototype.render=$c.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(H(409));bo(e,t,null,null)};ko.prototype.unmount=$c.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;zn(function(){bo(null,e,null,null)}),t[br]=null}};function ko(e){this._internalRoot=e}ko.prototype.unstable_scheduleHydration=function(e){if(e){var t=Uy();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Lr.length&&t!==0&&t<Lr[r].priority;r++);Lr.splice(r,0,e),r===0&&Wy(e)}};function xc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function So(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function _h(){}function L3(e,t,r,n,a){if(a){if(typeof n=="function"){var i=n;n=function(){var d=to(s);i.call(d)}}var s=lv(t,n,e,0,null,!1,!1,"",_h);return e._reactRootContainer=s,e[br]=s.current,ga(e.nodeType===8?e.parentNode:e),zn(),s}for(;a=e.lastChild;)e.removeChild(a);if(typeof n=="function"){var o=n;n=function(){var d=to(u);o.call(d)}}var u=_c(e,0,!1,null,null,!1,!1,"",_h);return e._reactRootContainer=u,e[br]=u.current,ga(e.nodeType===8?e.parentNode:e),zn(function(){bo(t,u,r,n)}),u}function Co(e,t,r,n,a){var i=r._reactRootContainer;if(i){var s=i;if(typeof a=="function"){var o=a;a=function(){var u=to(s);o.call(u)}}bo(t,s,e,a)}else s=L3(r,t,e,a,n);return to(s)}By=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Hi(t.pendingLanes);r!==0&&(jd(t,r|1),vt(t,Ue()),!(ve&6)&&(fi=Ue()+500,rn()))}break;case 13:zn(function(){var n=kr(e,1);if(n!==null){var a=ut();Yt(n,e,1,a)}}),wc(e,1)}};Wd=function(e){if(e.tag===13){var t=kr(e,134217728);if(t!==null){var r=ut();Yt(t,e,134217728,r)}wc(e,134217728)}};Ly=function(e){if(e.tag===13){var t=Qr(e),r=kr(e,t);if(r!==null){var n=ut();Yt(r,e,t,n)}wc(e,t)}};Uy=function(){return be};jy=function(e,t){var r=be;try{return be=e,t()}finally{be=r}};Ru=function(e,t,r){switch(t){case"input":if(Eu(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var a=go(n);if(!a)throw Error(H(90));vy(n),Eu(n,a)}}}break;case"textarea":wy(e,r);break;case"select":t=r.value,t!=null&&ti(e,!!r.multiple,t,!1)}};Ey=mc;Ty=zn;var U3={usingClientEntryPoint:!1,Events:[za,Hn,go,Sy,Cy,mc]},Oi={findFiberByHostInstance:_n,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},j3={bundleType:Oi.bundleType,version:Oi.version,rendererPackageName:Oi.rendererPackageName,rendererConfig:Oi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Cr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ay(e),e===null?null:e.stateNode},findFiberByHostInstance:Oi.findFiberByHostInstance||B3,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var is=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!is.isDisabled&&is.supportsFiber)try{po=is.inject(j3),sr=is}catch{}}It.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U3;It.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xc(t))throw Error(H(200));return P3(e,t,null,r)};It.createRoot=function(e,t){if(!xc(e))throw Error(H(299));var r=!1,n="",a=uv;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=_c(e,1,!1,null,null,r,!1,n,a),e[br]=t.current,ga(e.nodeType===8?e.parentNode:e),new $c(t)};It.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(H(188)):(e=Object.keys(e).join(","),Error(H(268,e)));return e=Ay(t),e=e===null?null:e.stateNode,e};It.flushSync=function(e){return zn(e)};It.hydrate=function(e,t,r){if(!So(t))throw Error(H(200));return Co(null,e,t,!0,r)};It.hydrateRoot=function(e,t,r){if(!xc(e))throw Error(H(405));var n=r!=null&&r.hydratedSources||null,a=!1,i="",s=uv;if(r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(i=r.identifierPrefix),r.onRecoverableError!==void 0&&(s=r.onRecoverableError)),t=lv(t,null,e,1,r??null,a,!1,i,s),e[br]=t.current,ga(e),n)for(e=0;e<n.length;e++)r=n[e],a=r._getVersion,a=a(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,a]:t.mutableSourceEagerHydrationData.push(r,a);return new ko(t)};It.render=function(e,t,r){if(!So(t))throw Error(H(200));return Co(null,e,t,!1,r)};It.unmountComponentAtNode=function(e){if(!So(e))throw Error(H(40));return e._reactRootContainer?(zn(function(){Co(null,null,e,!1,function(){e._reactRootContainer=null,e[br]=null})}),!0):!1};It.unstable_batchedUpdates=mc;It.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!So(r))throw Error(H(200));if(e==null||e._reactInternals===void 0)throw Error(H(38));return Co(e,t,r,!1,n)};It.version="18.3.1-next-f1338f8080-20240426";function dv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(dv)}catch(e){console.error(e)}}dv(),dy.exports=It;var W3=dy.exports,cv,wh=W3;cv=wh.createRoot,wh.hydrateRoot;/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var F3={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V3=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),_i=(e,t)=>{const r=ft.forwardRef(({color:n="currentColor",size:a=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:o="",children:u,...d},p)=>ft.createElement("svg",{ref:p,...F3,width:a,height:a,stroke:n,strokeWidth:s?Number(i)*24/Number(a):i,className:["lucide",`lucide-${V3(e)}`,o].join(" "),...d},[...t.map(([f,m])=>ft.createElement(f,m)),...Array.isArray(u)?u:[u]]));return r.displayName=`${e}`,r};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q3=_i("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H3=_i("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G3=_i("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K3=_i("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q3=_i("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X3=_i("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Y3=({onImageSelect:e,previewUrl:t,onClear:r})=>{const[n,a]=ft.useState(!1),i=ft.useRef(null),s=f=>{f.preventDefault(),a(!0)},o=()=>{a(!1)},u=f=>{f.preventDefault(),a(!1);const m=f.dataTransfer.files;m.length>0&&m[0].type.startsWith("image/")&&e(m[0])},d=f=>{const m=f.target.files;m&&m.length>0&&e(m[0])},p=()=>{var f;(f=i.current)==null||f.click()};return ue.jsx("div",{className:"w-full",children:t?ue.jsxs("div",{className:"relative",children:[ue.jsx("img",{src:t,alt:"Uploaded chest X-ray",className:"w-full max-h-96 object-contain rounded-lg border-2 border-gray-200"}),ue.jsx("button",{onClick:r,className:"absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors shadow-lg","aria-label":"Clear image",children:ue.jsx(X3,{size:20})})]}):ue.jsxs("div",{onDragOver:s,onDragLeave:o,onDrop:u,onClick:p,className:`border-3 border-dashed rounded-lg p-12 text-center cursor-pointer transition-all ${n?"border-blue-500 bg-blue-50":"border-gray-300 bg-gray-50 hover:border-blue-400 hover:bg-blue-50"}`,children:[ue.jsx(Q3,{size:48,className:`mx-auto mb-4 ${n?"text-blue-500":"text-gray-400"}`}),ue.jsx("p",{className:"text-lg font-medium text-gray-700 mb-2",children:"Drop your chest X-ray here"}),ue.jsx("p",{className:"text-sm text-gray-500",children:"or click to browse"}),ue.jsx("input",{ref:i,type:"file",accept:"image/*",onChange:d,className:"hidden"})]})})},Z3=({label:e,confidence:t})=>{const r=e==="Pneumonia";return ue.jsxs("div",{className:`p-6 rounded-lg border-2 ${r?"bg-red-50 border-red-200":"bg-green-50 border-green-200"}`,children:[ue.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[r?ue.jsx(H3,{size:32,className:"text-red-600"}):ue.jsx(G3,{size:32,className:"text-green-600"}),ue.jsx("h3",{className:`text-2xl font-bold ${r?"text-red-700":"text-green-700"}`,children:e})]}),ue.jsxs("div",{className:"space-y-2",children:[ue.jsxs("div",{className:"flex justify-between items-center",children:[ue.jsx("span",{className:"text-gray-700 font-medium",children:"Confidence:"}),ue.jsxs("span",{className:`text-xl font-bold ${r?"text-red-700":"text-green-700"}`,children:[t.toFixed(2),"%"]})]}),ue.jsx("div",{className:"w-full bg-gray-200 rounded-full h-3 overflow-hidden",children:ue.jsx("div",{className:`h-full rounded-full transition-all duration-500 ${r?"bg-red-600":"bg-green-600"}`,style:{width:`${t}%`}})})]}),ue.jsx("p",{className:"mt-4 text-sm text-gray-600",children:r?"This X-ray shows signs consistent with pneumonia. Please consult a healthcare professional for proper diagnosis.":"This X-ray appears normal. However, always consult with a healthcare professional for accurate diagnosis."})]})},J3=async e=>new Promise((t,r)=>{const n=new Image,a=document.createElement("canvas"),i=a.getContext("2d");if(!i){r(new Error("Could not get canvas context"));return}n.onload=()=>{a.width=224,a.height=224,i.drawImage(n,0,0,224,224);const s=i.getImageData(0,0,224,224),{data:o}=s,u=new Float32Array(3*224*224),d=[.485,.456,.406],p=[.229,.224,.225];for(let f=0;f<224*224;f++){const m=o[f*4]/255,_=o[f*4+1]/255,w=o[f*4+2]/255;u[f]=(m-d[0])/p[0],u[224*224+f]=(_-d[1])/p[1],u[2*224*224+f]=(w-d[2])/p[2]}t(u)},n.onerror=()=>{r(new Error("Failed to load image"))},n.src=URL.createObjectURL(e)});/*!
 * ONNX Runtime Web v1.23.2
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var bc=Object.defineProperty,ek=Object.getOwnPropertyDescriptor,tk=Object.getOwnPropertyNames,rk=Object.prototype.hasOwnProperty,nk=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),V=(e,t)=>()=>(e&&(t=e(e=0)),t),wi=(e,t)=>{for(var r in t)bc(e,r,{get:t[r],enumerable:!0})},ik=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of tk(t))!rk.call(e,a)&&a!==r&&bc(e,a,{get:()=>t[a],enumerable:!(n=ek(t,a))||n.enumerable});return e},Sa=e=>ik(bc({},"__esModule",{value:!0}),e),Ni,Rr,Jn,$h,pv,fv=V(()=>{Ni=new Map,Rr=[],Jn=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let n=Ni.get(e);if(n===void 0)Ni.set(e,{backend:t,priority:r});else{if(n.priority>r)return;if(n.priority===r&&n.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let a=Rr.indexOf(e);a!==-1&&Rr.splice(a,1);for(let i=0;i<Rr.length;i++)if(Ni.get(Rr[i]).priority<=r){Rr.splice(i,0,e);return}Rr.push(e)}return}throw new TypeError("not a valid backend")},$h=async e=>{let t=Ni.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{return r||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(n){return r||(t.error=`${n}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},pv=async e=>{let t=e.executionProviders||[],r=t.map(u=>typeof u=="string"?u:u.name),n=r.length===0?Rr:r,a,i=[],s=new Set;for(let u of n){let d=await $h(u);typeof d=="string"?i.push({name:u,err:d}):(a||(a=d),a===d&&s.add(u))}if(!a)throw new Error(`no available backend found. ERR: ${i.map(u=>`[${u.name}] ${u.err}`).join(", ")}`);for(let{name:u,err:d}of i)r.includes(u)&&console.warn(`removing requested execution provider "${u}" from session options because it is not available: ${d}`);let o=t.filter(u=>s.has(typeof u=="string"?u:u.name));return[a,new Proxy(e,{get:(u,d)=>d==="executionProviders"?o:Reflect.get(u,d)})]}}),ak=V(()=>{fv()}),hv,sk=V(()=>{hv="1.23.2"}),kl,Ge,mv=V(()=>{sk(),kl="warning",Ge={wasm:{},webgl:{},webgpu:{},versions:{common:hv},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);kl=e}},get logLevel(){return kl}},Object.defineProperty(Ge,"logLevel",{enumerable:!0})}),Se,ok=V(()=>{mv(),Se=Ge}),gv,yv,lk=V(()=>{gv=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let n=r.getContext("2d");if(n!=null){let a,i;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(a=e.dims[2],i=e.dims[3]):(a=e.dims[3],i=e.dims[2]);let s=(t==null?void 0:t.format)!==void 0?t.format:"RGB",o=t==null?void 0:t.norm,u,d;o===void 0||o.mean===void 0?u=[255,255,255,255]:typeof o.mean=="number"?u=[o.mean,o.mean,o.mean,o.mean]:(u=[o.mean[0],o.mean[1],o.mean[2],0],o.mean[3]!==void 0&&(u[3]=o.mean[3])),o===void 0||o.bias===void 0?d=[0,0,0,0]:typeof o.bias=="number"?d=[o.bias,o.bias,o.bias,o.bias]:(d=[o.bias[0],o.bias[1],o.bias[2],0],o.bias[3]!==void 0&&(d[3]=o.bias[3]));let p=i*a,f=0,m=p,_=p*2,w=-1;s==="RGBA"?(f=0,m=p,_=p*2,w=p*3):s==="RGB"?(f=0,m=p,_=p*2):s==="RBG"&&(f=0,_=p,m=p*2);for(let $=0;$<i;$++)for(let S=0;S<a;S++){let y=(e.data[f++]-d[0])*u[0],g=(e.data[m++]-d[1])*u[1],x=(e.data[_++]-d[2])*u[2],k=w===-1?255:(e.data[w++]-d[3])*u[3];n.fillStyle="rgba("+y+","+g+","+x+","+k+")",n.fillRect(S,$,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},yv=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),n;if(r!=null){let a,i,s;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(a=e.dims[2],i=e.dims[1],s=e.dims[3]):(a=e.dims[3],i=e.dims[2],s=e.dims[1]);let o=t!==void 0&&t.format!==void 0?t.format:"RGB",u=t==null?void 0:t.norm,d,p;u===void 0||u.mean===void 0?d=[255,255,255,255]:typeof u.mean=="number"?d=[u.mean,u.mean,u.mean,u.mean]:(d=[u.mean[0],u.mean[1],u.mean[2],255],u.mean[3]!==void 0&&(d[3]=u.mean[3])),u===void 0||u.bias===void 0?p=[0,0,0,0]:typeof u.bias=="number"?p=[u.bias,u.bias,u.bias,u.bias]:(p=[u.bias[0],u.bias[1],u.bias[2],0],u.bias[3]!==void 0&&(p[3]=u.bias[3]));let f=i*a;if(t!==void 0&&(t.format!==void 0&&s===4&&t.format!=="RGBA"||s===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let m=4,_=0,w=1,$=2,S=3,y=0,g=f,x=f*2,k=-1;o==="RGBA"?(y=0,g=f,x=f*2,k=f*3):o==="RGB"?(y=0,g=f,x=f*2):o==="RBG"&&(y=0,x=f,g=f*2),n=r.createImageData(a,i);for(let E=0;E<i*a;_+=m,w+=m,$+=m,S+=m,E++)n.data[_]=(e.data[y++]-p[0])*d[0],n.data[w]=(e.data[g++]-p[1])*d[1],n.data[$]=(e.data[x++]-p[2])*d[2],n.data[S]=k===-1?255:(e.data[k++]-p[3])*d[3]}else throw new Error("Can not access image data");return n}}),as,vv,_v,wv,$v,xv,uk=V(()=>{kc(),as=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:n}=t,a=t.norm??{mean:255,bias:0},i,s;typeof a.mean=="number"?i=[a.mean,a.mean,a.mean,a.mean]:i=[a.mean[0],a.mean[1],a.mean[2],a.mean[3]??255],typeof a.bias=="number"?s=[a.bias,a.bias,a.bias,a.bias]:s=[a.bias[0],a.bias[1],a.bias[2],a.bias[3]??0];let o=t.format!==void 0?t.format:"RGBA",u=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",d=r*n,p=u==="RGBA"?new Float32Array(d*4):new Float32Array(d*3),f=4,m=0,_=1,w=2,$=3,S=0,y=d,g=d*2,x=-1;o==="RGB"&&(f=3,m=0,_=1,w=2,$=-1),u==="RGBA"?x=d*3:u==="RBG"?(S=0,g=d,y=d*2):u==="BGR"&&(g=0,y=d,S=d*2);for(let k=0;k<d;k++,m+=f,w+=f,_+=f,$+=f)p[S++]=(e[m]+s[0])/i[0],p[y++]=(e[_]+s[1])/i[1],p[g++]=(e[w]+s[2])/i[2],x!==-1&&$!==-1&&(p[x++]=(e[$]+s[3])/i[3]);return u==="RGBA"?new kt("float32",p,[1,4,r,n]):new kt("float32",p,[1,3,r,n])},vv=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,n=typeof ImageData<"u"&&e instanceof ImageData,a=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,i=typeof e=="string",s,o=t??{},u=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},d=p=>typeof HTMLCanvasElement<"u"&&p instanceof HTMLCanvasElement||p instanceof OffscreenCanvas?p.getContext("2d"):null;if(r){let p=u();p.width=e.width,p.height=e.height;let f=d(p);if(f!=null){let m=e.height,_=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(m=t.resizedHeight,_=t.resizedWidth),t!==void 0){if(o=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");o.tensorFormat="RGBA",o.height=m,o.width=_}else o.tensorFormat="RGBA",o.height=m,o.width=_;f.drawImage(e,0,0),s=f.getImageData(0,0,_,m).data}else throw new Error("Can not access image data")}else if(n){let p,f;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(p=t.resizedHeight,f=t.resizedWidth):(p=e.height,f=e.width),t!==void 0&&(o=t),o.format="RGBA",o.height=p,o.width=f,t!==void 0){let m=u();m.width=f,m.height=p;let _=d(m);if(_!=null)_.putImageData(e,0,0),s=_.getImageData(0,0,f,p).data;else throw new Error("Can not access image data")}else s=e.data}else if(a){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let p=u();p.width=e.width,p.height=e.height;let f=d(p);if(f!=null){let m=e.height,_=e.width;return f.drawImage(e,0,0,_,m),s=f.getImageData(0,0,_,m).data,o.height=m,o.width=_,as(s,o)}else throw new Error("Can not access image data")}else{if(i)return new Promise((p,f)=>{let m=u(),_=d(m);if(!e||!_)return f();let w=new Image;w.crossOrigin="Anonymous",w.src=e,w.onload=()=>{m.width=w.width,m.height=w.height,_.drawImage(w,0,0,m.width,m.height);let $=_.getImageData(0,0,m.width,m.height);o.height=m.height,o.width=m.width,p(as($.data,o))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(s!==void 0)return as(s,o);throw new Error("Input data provided is not supported - aborted tensor creation")},_v=(e,t)=>{let{width:r,height:n,download:a,dispose:i}=t,s=[1,n,r,4];return new kt({location:"texture",type:"float32",texture:e,dims:s,download:a,dispose:i})},wv=(e,t)=>{let{dataType:r,dims:n,download:a,dispose:i}=t;return new kt({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:n,download:a,dispose:i})},$v=(e,t)=>{let{dataType:r,dims:n,download:a,dispose:i}=t;return new kt({location:"ml-tensor",type:r??"float32",mlTensor:e,dims:n,download:a,dispose:i})},xv=(e,t,r)=>new kt({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}),gn,Ki,Sl,bv,dk=V(()=>{gn=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),Ki=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),Sl=!1,bv=()=>{if(!Sl){Sl=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=globalThis.Float16Array,n=typeof r<"u"&&r.from;e&&(gn.set("int64",BigInt64Array),Ki.set(BigInt64Array,"int64")),t&&(gn.set("uint64",BigUint64Array),Ki.set(BigUint64Array,"uint64")),n?(gn.set("float16",r),Ki.set(r,"float16")):gn.set("float16",Uint16Array)}}}),kv,Sv,ck=V(()=>{kc(),kv=e=>{let t=1;for(let r=0;r<e.length;r++){let n=e[r];if(typeof n!="number"||!Number.isSafeInteger(n))throw new TypeError(`dims[${r}] must be an integer, got: ${n}`);if(n<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${n}`);t*=n}return t},Sv=(e,t)=>{switch(e.location){case"cpu":return new kt(e.type,e.data,t);case"cpu-pinned":return new kt({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new kt({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new kt({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new kt({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),kt,kc=V(()=>{lk(),uk(),dk(),ck(),kt=class{constructor(e,t,r){bv();let n,a;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,n=e.type,a=e.dims,e.location){case"cpu-pinned":{let s=gn.get(n);if(!s)throw new TypeError(`unsupported type "${n}" to create tensor from pinned buffer`);if(!(e.data instanceof s))throw new TypeError(`buffer should be of type ${s.name}`);this.cpuData=e.data;break}case"texture":{if(n!=="float32")throw new TypeError(`unsupported type "${n}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(n!=="float32"&&n!=="float16"&&n!=="int32"&&n!=="int64"&&n!=="uint32"&&n!=="uint8"&&n!=="bool"&&n!=="uint4"&&n!=="int4")throw new TypeError(`unsupported type "${n}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(n!=="float32"&&n!=="float16"&&n!=="int32"&&n!=="int64"&&n!=="uint32"&&n!=="uint64"&&n!=="int8"&&n!=="uint8"&&n!=="bool"&&n!=="uint4"&&n!=="int4")throw new TypeError(`unsupported type "${n}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let s,o;if(typeof e=="string")if(n=e,o=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");s=t}else{let u=gn.get(e);if(u===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&u===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${u.name} as data.`);e==="uint64"||e==="int64"?s=u.from(t,BigInt):s=u.from(t)}else if(t instanceof u)s=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")s=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&u!==Uint16Array)s=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${n} tensor's data must be type of ${u}`)}else if(o=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let u=typeof e[0];if(u==="string")n="string",s=e;else if(u==="boolean")n="bool",s=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${u}.`)}else if(e instanceof Uint8ClampedArray)n="uint8",s=Uint8Array.from(e);else{let u=Ki.get(e.constructor);if(u===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);n=u,s=e}if(o===void 0)o=[s.length];else if(!Array.isArray(o))throw new TypeError("A tensor's dims must be a number array");a=o,this.cpuData=s,this.dataLocation="cpu"}let i=kv(a);if(this.cpuData&&i!==this.cpuData.length&&!((n==="uint4"||n==="int4")&&Math.ceil(i/2)===this.cpuData.length))throw new Error(`Tensor's size(${i}) does not match data length(${this.cpuData.length}).`);this.type=n,this.dims=a,this.size=i}static async fromImage(e,t){return vv(e,t)}static fromTexture(e,t){return _v(e,t)}static fromGpuBuffer(e,t){return wv(e,t)}static fromMLTensor(e,t){return $v(e,t)}static fromPinnedBuffer(e,t,r){return xv(e,t,r)}toDataURL(e){return gv(this,e)}toImageData(e){return yv(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return Sv(this,e)}}}),Qt,Cv=V(()=>{kc(),Qt=kt}),ro,Cl,lr,Zt,kn,Sn,Ev=V(()=>{mv(),ro=(e,t)=>{(typeof Ge.trace>"u"?!Ge.wasm.trace:!Ge.trace)||console.timeStamp(`${e}::ORT::${t}`)},Cl=(e,t)=>{var a;let r=((a=new Error().stack)==null?void 0:a.split(/\r\n|\r|\n/g))||[],n=!1;for(let i=0;i<r.length;i++){if(n&&!r[i].includes("TRACE_FUNC")){let s=`FUNC_${e}::${r[i].trim().split(" ")[1]}`;t&&(s+=`::${t}`),ro("CPU",s);return}r[i].includes("TRACE_FUNC")&&(n=!0)}},lr=e=>{(typeof Ge.trace>"u"?!Ge.wasm.trace:!Ge.trace)||Cl("BEGIN",e)},Zt=e=>{(typeof Ge.trace>"u"?!Ge.wasm.trace:!Ge.trace)||Cl("END",e)},kn=e=>{(typeof Ge.trace>"u"?!Ge.wasm.trace:!Ge.trace)||console.time(`ORT::${e}`)},Sn=e=>{(typeof Ge.trace>"u"?!Ge.wasm.trace:!Ge.trace)||console.timeEnd(`ORT::${e}`)}}),Tv,pk=V(()=>{fv(),Cv(),Ev(),Tv=class Iv{constructor(t){this.handler=t}async run(t,r,n){lr(),kn("InferenceSession.run");let a={},i={};if(typeof t!="object"||t===null||t instanceof Qt||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let s=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof Qt)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");s=!1;for(let d of r){if(typeof d!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(d)===-1)throw new RangeError(`'fetches' contains invalid output name: ${d}.`);a[d]=null}if(typeof n=="object"&&n!==null)i=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else{let d=!1,p=Object.getOwnPropertyNames(r);for(let f of this.outputNames)if(p.indexOf(f)!==-1){let m=r[f];(m===null||m instanceof Qt)&&(d=!0,s=!1,a[f]=m)}if(d){if(typeof n=="object"&&n!==null)i=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else i=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let d of this.inputNames)if(typeof t[d]>"u")throw new Error(`input '${d}' is missing in 'feeds'.`);if(s)for(let d of this.outputNames)a[d]=null;let o=await this.handler.run(t,a,i),u={};for(let d in o)if(Object.hasOwnProperty.call(o,d)){let p=o[d];p instanceof Qt?u[d]=p:u[d]=new Qt(p.type,p.data,p.dims)}return Sn("InferenceSession.run"),Zt(),u}async release(){return this.handler.dispose()}static async create(t,r,n,a){lr(),kn("InferenceSession.create");let i,s={};if(typeof t=="string"){if(i=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(i=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let p=t,f=0,m=t.byteLength;if(typeof r=="object"&&r!==null)s=r;else if(typeof r=="number"){if(f=r,!Number.isSafeInteger(f))throw new RangeError("'byteOffset' must be an integer.");if(f<0||f>=p.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${p.byteLength}).`);if(m=t.byteLength-f,typeof n=="number"){if(m=n,!Number.isSafeInteger(m))throw new RangeError("'byteLength' must be an integer.");if(m<=0||f+m>p.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${p.byteLength-f}].`);if(typeof a=="object"&&a!==null)s=a;else if(typeof a<"u")throw new TypeError("'options' must be an object.")}else if(typeof n<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");i=new Uint8Array(p,f,m)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[o,u]=await pv(s),d=await o.createInferenceSessionHandler(i,u);return Sn("InferenceSession.create"),Zt(),new Iv(d)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),Sc,fk=V(()=>{pk(),Sc=Tv}),hk=V(()=>{}),mk=V(()=>{}),gk=V(()=>{}),yk=V(()=>{}),vk={};wi(vk,{InferenceSession:()=>Sc,TRACE:()=>ro,TRACE_EVENT_BEGIN:()=>kn,TRACE_EVENT_END:()=>Sn,TRACE_FUNC_BEGIN:()=>lr,TRACE_FUNC_END:()=>Zt,Tensor:()=>Qt,env:()=>Se,registerBackend:()=>Jn});var Bt=V(()=>{ak(),ok(),fk(),Cv(),hk(),mk(),Ev(),gk(),yk()}),Cc=V(()=>{}),zv={};wi(zv,{default:()=>Av});var El,Tl,Av,_k=V(()=>{var e;M$(),Mn(),Ec(),El="ort-wasm-proxy-worker",Tl=((e=globalThis.self)==null?void 0:e.name)===El,Tl&&(self.onmessage=t=>{let{type:r,in:n}=t.data;try{switch(r){case"init-wasm":Tc(n.wasm).then(()=>{qc(n).then(()=>{postMessage({type:r})},a=>{postMessage({type:r,err:a})})},a=>{postMessage({type:r,err:a})});break;case"init-ep":{let{epName:a,env:i}=n;Hc(i,a).then(()=>{postMessage({type:r})},s=>{postMessage({type:r,err:s})});break}case"copy-from":{let{buffer:a}=n,i=uo(a);postMessage({type:r,out:i});break}case"create":{let{model:a,options:i}=n;Gc(a,i).then(s=>{postMessage({type:r,out:s})},s=>{postMessage({type:r,err:s})});break}case"release":Kc(n),postMessage({type:r});break;case"run":{let{sessionId:a,inputIndices:i,inputs:s,outputIndices:o,options:u}=n;Qc(a,i,s,o,new Array(o.length).fill(null),u).then(d=>{d.some(p=>p[3]!=="cpu")?postMessage({type:r,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:r,out:d},Yc([...s,...d]))},d=>{postMessage({type:r,err:d})});break}case"end-profiling":Xc(n),postMessage({type:r});break;default:}}catch(a){postMessage({type:r,err:a})}}),Av=Tl?null:t=>new Worker(t??xt,{type:"module",name:El})}),Ov={};wi(Ov,{default:()=>Nv});var Il,Nv,xh,wk=V(()=>{var e,t;Il=async function(r={}){var df;var n,a,i=r,s=new Promise((l,c)=>{n=l,a=c}),o=typeof window=="object",u=typeof WorkerGlobalScope<"u",d=u&&((df=self.name)==null?void 0:df.startsWith("em-pthread"));i.mountExternalData=(l,c)=>{l.startsWith("./")&&(l=l.substring(2)),(i.Fb||(i.Fb=new Map)).set(l,c)},i.unmountExternalData=()=>{delete i.Fb};var p=globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,qc:!0}).buffer.constructor;let f=l=>async(...c)=>{var h;try{if(i.Gb)throw Error("Session already started");let v=i.Gb={ec:c[0],errors:[]},b=await l(...c);if(i.Gb!==v)throw Error("Session mismatch");(h=i.Kb)==null||h.flush();let C=v.errors;if(0<C.length){let A=await Promise.all(C);if(A=A.filter(R=>R),0<A.length)throw Error(A.join(`
`))}return b}finally{i.Gb=null}};i.jsepInit=(l,c)=>{if(l==="webgpu"){[i.Kb,i.Vb,i.Zb,i.Lb,i.Yb,i.Ab,i.$b,i.bc,i.Wb,i.Xb,i.ac]=c;let h=i.Kb;i.jsepRegisterBuffer=(v,b,C,A)=>h.registerBuffer(v,b,C,A),i.jsepGetBuffer=v=>h.getBuffer(v),i.jsepCreateDownloader=(v,b,C)=>h.createDownloader(v,b,C),i.jsepOnCreateSession=v=>{h.onCreateSession(v)},i.jsepOnReleaseSession=v=>{h.onReleaseSession(v)},i.jsepOnRunStart=v=>h.onRunStart(v),i.cc=(v,b)=>{h.upload(v,b)}}else if(l==="webnn"){let h=c[0];[i.oc,i.Ob,i.webnnEnsureTensor,i.Pb,i.webnnDownloadTensor,i.nc,i.webnnEnableTraceEvent]=c.slice(1),i.webnnReleaseTensorId=i.Ob,i.webnnUploadTensor=i.Pb,i.webnnRegisterMLContext=i.nc,i.webnnOnRunStart=v=>h.onRunStart(v),i.webnnOnRunEnd=h.onRunEnd.bind(h),i.webnnOnReleaseSession=v=>{h.onReleaseSession(v)},i.webnnCreateMLTensorDownloader=(v,b)=>h.createMLTensorDownloader(v,b),i.webnnRegisterMLTensor=(v,b,C,A)=>h.registerMLTensor(v,b,C,A),i.webnnCreateMLContext=v=>h.createMLContext(v),i.webnnRegisterMLConstant=(v,b,C,A,R,U)=>h.registerMLConstant(v,b,C,A,R,i.Fb,U),i.webnnRegisterGraphInput=h.registerGraphInput.bind(h),i.webnnIsGraphInput=h.isGraphInput.bind(h),i.webnnRegisterGraphOutput=h.registerGraphOutput.bind(h),i.webnnIsGraphOutput=h.isGraphOutput.bind(h),i.webnnCreateTemporaryTensor=h.createTemporaryTensor.bind(h),i.webnnIsGraphInputOutputTypeSupported=h.isGraphInputOutputTypeSupported.bind(h)}};let m=()=>{let l=(c,h,v)=>(...b)=>{let C=tr,A=h==null?void 0:h();b=c(...b);let R=h==null?void 0:h();return A!==R&&(c=R,v(A),h=v=null),tr!=C?new Promise((U,q)=>{jo={resolve:U,reject:q}}):b};(()=>{for(let c of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])i[c]=l(i[c],()=>i[c],h=>i[c]=h)})(),f!==void 0&&(i._OrtRun=f(i._OrtRun),i._OrtRunWithBinding=f(i._OrtRunWithBinding)),m=void 0};i.asyncInit=()=>{m==null||m()};var _,w,$=(l,c)=>{throw c},S=import.meta.url,y="";if(o||u){try{y=new URL(".",S).href}catch{}u&&(w=l=>{var c=new XMLHttpRequest;return c.open("GET",l,!1),c.responseType="arraybuffer",c.send(null),new Uint8Array(c.response)}),_=async l=>{if(W(l))return new Promise((h,v)=>{var b=new XMLHttpRequest;b.open("GET",l,!0),b.responseType="arraybuffer",b.onload=()=>{b.status==200||b.status==0&&b.response?h(b.response):v(b.status)},b.onerror=v,b.send(null)});var c=await fetch(l,{credentials:"same-origin"});if(c.ok)return c.arrayBuffer();throw Error(c.status+" : "+c.url)}}var g,x,k,E,T,I,z,N,L,X,Q,G,pe,oe,Y,le=console.log.bind(console),M=console.error.bind(console),F=le,Z=M,O=!1,W=l=>l.startsWith("file://");function K(){return x.buffer!=T.buffer&&we(),T}function te(){return x.buffer!=T.buffer&&we(),I}function ze(){return x.buffer!=T.buffer&&we(),z}function He(){return x.buffer!=T.buffer&&we(),N}function j(){return x.buffer!=T.buffer&&we(),L}function xe(){return x.buffer!=T.buffer&&we(),X}function _t(){return x.buffer!=T.buffer&&we(),Q}function at(){return x.buffer!=T.buffer&&we(),oe}if(d){let l=function(c){try{var h=c.data,v=h.Db;if(v==="load"){let b=[];self.onmessage=C=>b.push(C),self.startWorker=()=>{postMessage({Db:"loaded"});for(let C of b)l(C);self.onmessage=l};for(let C of h.Sb)i[C]&&!i[C].proxy||(i[C]=(...A)=>{postMessage({Db:"callHandler",Rb:C,args:A})},C=="print"&&(F=i[C]),C=="printErr"&&(Z=i[C]));x=h.kc,we(),Y(h.lc)}else if(v==="run"){Q$(h.Bb),Go(h.Bb,0,0,1,0,0),ap(),Lo(h.Bb),ur||(Yp(),ur=!0);try{X$(h.hc,h.Jb)}catch(b){if(b!="unwind")throw b}}else h.target!=="setimmediate"&&(v==="checkMailbox"?ur&&Oa():v&&(Z(`worker: received unknown command ${v}`),Z(h)))}catch(b){throw Zp(),b}};var ur=!1;self.onunhandledrejection=c=>{throw c.reason||c},self.onmessage=l}function we(){var l=x.buffer;i.HEAP8=T=new Int8Array(l),z=new Int16Array(l),i.HEAPU8=I=new Uint8Array(l),N=new Uint16Array(l),i.HEAP32=L=new Int32Array(l),i.HEAPU32=X=new Uint32Array(l),Q=new Float32Array(l),oe=new Float64Array(l),G=new BigInt64Array(l),pe=new BigUint64Array(l)}function Ae(){d?startWorker(i):P.Da()}var wt,an=0,sn=null;function Zc(){if(--an==0&&sn){var l=sn;sn=null,l()}}function Tr(l){throw Z(l="Aborted("+l+")"),O=!0,l=new WebAssembly.RuntimeError(l+". Build with -sASSERTIONS for more info."),a(l),l}function Jc(){return{a:{L:fx,Aa:px,b:Z$,$:up,A:pp,pa:fp,X:hp,Z:mp,qa:gp,na:yp,ga:vp,ma:_p,J:wp,Y:$p,V:xp,oa:bp,W:kp,va:J$,E:e2,Q:t2,O:n2,D:a2,v:s2,s:o2,P:l2,z:m2,R:g2,ja:y2,T:v2,aa:_2,M:w2,F:$2,ia:Lo,sa:x2,r:b2,Ca:k2,w:E2,o:T2,m:z2,c:Do,Ba:A2,n:O2,j:D2,u:M2,p:P2,f:B2,t:L2,l:U2,e:j2,k:W2,h:F2,g:V2,d:q2,da:H2,ea:G2,fa:K2,ba:Pp,ca:Bp,N:Lp,xa:X2,ua:Z2,i:J2,C:ex,G:tx,ta:Y2,x:rx,ra:nx,U:ix,q:Q2,y:ax,K:sx,S:ox,za:lx,ya:ux,ka:Fp,la:Vp,_:Ao,B:qp,I:Hp,ha:Gp,H:Kp,a:x,wa:zo}}}class To{constructor(c){cf(this,"name","ExitStatus");this.message=`Program terminated with exit(${c})`,this.status=c}}var ep=l=>{l.terminate(),l.onmessage=()=>{}},Io=[],tp=l=>{zr.length==0&&(op(),sp(zr[0]));var c=zr.pop();if(!c)return 6;$i.push(c),on[l.Bb]=c,c.Bb=l.Bb;var h={Db:"run",hc:l.fc,Jb:l.Jb,Bb:l.Bb};return c.postMessage(h,l.Nb),0},Ir=0,Ee=(l,c,...h)=>{for(var v=2*h.length,b=Xo(),C=Qo(8*v),A=C>>>3,R=0;R<h.length;R++){var U=h[R];typeof U=="bigint"?(G[A+2*R]=1n,G[A+2*R+1]=U):(G[A+2*R]=0n,at()[A+2*R+1>>>0]=U)}return l=Jp(l,0,v,C,c),ja(b),l};function zo(l){if(d)return Ee(0,1,l);if(E=l,!(0<Ir)){for(var c of $i)ep(c);for(c of zr)ep(c);zr=[],$i=[],on={},O=!0}$(0,new To(l))}function rp(l){if(d)return Ee(1,0,l);Ao(l)}var Ao=l=>{if(E=l,d)throw rp(l),"unwind";zo(l)},zr=[],$i=[],np=[],on={},ip=l=>{var c=l.Bb;delete on[c],zr.push(l),$i.splice($i.indexOf(l),1),l.Bb=0,ef(c)};function ap(){np.forEach(l=>l())}var sp=l=>new Promise(c=>{l.onmessage=b=>{var C=(b=b.data).Db;if(b.Hb&&b.Hb!=Ho()){var A=on[b.Hb];A?A.postMessage(b,b.Nb):Z(`Internal error! Worker sent a message "${C}" to target pthread ${b.Hb}, but that thread no longer exists!`)}else C==="checkMailbox"?Oa():C==="spawnThread"?tp(b):C==="cleanupThread"?ip(on[b.ic]):C==="loaded"?(l.loaded=!0,c(l)):b.target==="setimmediate"?l.postMessage(b):C==="callHandler"?i[b.Rb](...b.args):C&&Z(`worker sent an unknown command ${C}`)},l.onerror=b=>{throw Z(`worker sent an error! ${b.filename}:${b.lineno}: ${b.message}`),b};var h,v=[];for(h of[])i.propertyIsEnumerable(h)&&v.push(h);l.postMessage({Db:"load",Sb:v,kc:x,lc:k})});function op(){var l=new Worker((()=>{let c=URL;return import.meta.url>"file:"&&import.meta.url<"file;"?new c("ort.bundle.min.mjs",import.meta.url):new URL(import.meta.url)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});zr.push(l)}var Q$=l=>{we();var c=xe()[l+52>>>2>>>0];l=xe()[l+56>>>2>>>0],nf(c,c-l),ja(c)},X$=(l,c)=>{Ir=0,l=af(l,c),0<Ir?E=l:Ko(l)};class Y${constructor(c){this.Ib=c-24}}function Z$(l,c,h){var v=new Y$(l>>>=0);throw c>>>=0,h>>>=0,xe()[v.Ib+16>>>2>>>0]=0,xe()[v.Ib+4>>>2>>>0]=c,xe()[v.Ib+8>>>2>>>0]=h,l}function lp(l,c,h,v){return d?Ee(2,1,l,c,h,v):up(l,c,h,v)}function up(l,c,h,v){if(l>>>=0,h>>>=0,v>>>=0,p===void 0)return 6;var b=[];return d&&b.length===0?lp(l,c>>>=0,h,v):(l={fc:h,Bb:l,Jb:v,Nb:b},d?(l.Db="spawnThread",postMessage(l,b),0):tp(l))}var dp=typeof TextDecoder<"u"?new TextDecoder:void 0,cp=(l,c=0,h=NaN)=>{var v=(c>>>=0)+h;for(h=c;l[h]&&!(h>=v);)++h;if(16<h-c&&l.buffer&&dp)return dp.decode(l.buffer instanceof ArrayBuffer?l.subarray(c,h):l.slice(c,h));for(v="";c<h;){var b=l[c++];if(128&b){var C=63&l[c++];if((224&b)==192)v+=String.fromCharCode((31&b)<<6|C);else{var A=63&l[c++];65536>(b=(240&b)==224?(15&b)<<12|C<<6|A:(7&b)<<18|C<<12|A<<6|63&l[c++])?v+=String.fromCharCode(b):(b-=65536,v+=String.fromCharCode(55296|b>>10,56320|1023&b))}}else v+=String.fromCharCode(b)}return v},Le=(l,c)=>(l>>>=0)?cp(te(),l,c):"";function pp(l,c,h){return d?Ee(3,1,l,c,h):0}function fp(l,c){if(d)return Ee(4,1,l,c)}function hp(l,c){if(d)return Ee(5,1,l,c)}function mp(l,c,h){if(d)return Ee(6,1,l,c,h)}function gp(l,c,h){return d?Ee(7,1,l,c,h):0}function yp(l,c){if(d)return Ee(8,1,l,c)}function vp(l,c,h){if(d)return Ee(9,1,l,c,h)}function _p(l,c,h,v){if(d)return Ee(10,1,l,c,h,v)}function wp(l,c,h,v){if(d)return Ee(11,1,l,c,h,v)}function $p(l,c,h,v){if(d)return Ee(12,1,l,c,h,v)}function xp(l){if(d)return Ee(13,1,l)}function bp(l,c){if(d)return Ee(14,1,l,c)}function kp(l,c,h){if(d)return Ee(15,1,l,c,h)}var Sp,J$=()=>Tr(""),er=l=>{for(var c="";te()[l>>>0];)c+=Sp[te()[l++>>>0]];return c},Oo={},No={},Bn=i.BindingError=class extends Error{constructor(l){super(l),this.name="BindingError"}};function dr(l,c,h={}){return function(v,b,C={}){var A=b.name;if(!v)throw new Bn(`type "${A}" must have a positive integer typeid pointer`);if(No.hasOwnProperty(v)){if(C.Tb)return;throw new Bn(`Cannot register type '${A}' twice`)}No[v]=b,Oo.hasOwnProperty(v)&&(b=Oo[v],delete Oo[v],b.forEach(R=>R()))}(l,c,h)}var Cp=(l,c,h)=>{switch(c){case 1:return h?v=>K()[v>>>0]:v=>te()[v>>>0];case 2:return h?v=>ze()[v>>>1>>>0]:v=>He()[v>>>1>>>0];case 4:return h?v=>j()[v>>>2>>>0]:v=>xe()[v>>>2>>>0];case 8:return h?v=>G[v>>>3]:v=>pe[v>>>3];default:throw new TypeError(`invalid integer width (${c}): ${l}`)}};function e2(l,c,h){h>>>=0,dr(l>>>=0,{name:c=er(c>>>0),fromWireType:v=>v,toWireType:function(v,b){if(typeof b!="bigint"&&typeof b!="number")throw b=b===null?"null":(v=typeof b)=="object"||v==="array"||v==="function"?b.toString():""+b,new TypeError(`Cannot convert "${b}" to ${this.name}`);return typeof b=="number"&&(b=BigInt(b)),b},Cb:Ar,readValueFromPointer:Cp(c,h,c.indexOf("u")==-1),Eb:null})}var Ar=8;function t2(l,c,h,v){dr(l>>>=0,{name:c=er(c>>>0),fromWireType:function(b){return!!b},toWireType:function(b,C){return C?h:v},Cb:Ar,readValueFromPointer:function(b){return this.fromWireType(te()[b>>>0])},Eb:null})}var Ro=[],cr=[];function Do(l){9<(l>>>=0)&&--cr[l+1]==0&&(cr[l]=void 0,Ro.push(l))}var st=l=>{if(!l)throw new Bn(`Cannot use deleted val. handle = ${l}`);return cr[l]},At=l=>{switch(l){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let c=Ro.pop()||cr.length;return cr[c]=l,cr[c+1]=1,c}};function Mo(l){return this.fromWireType(xe()[l>>>2>>>0])}var r2={name:"emscripten::val",fromWireType:l=>{var c=st(l);return Do(l),c},toWireType:(l,c)=>At(c),Cb:Ar,readValueFromPointer:Mo,Eb:null};function n2(l){return dr(l>>>0,r2)}var i2=(l,c)=>{switch(c){case 4:return function(h){return this.fromWireType(_t()[h>>>2>>>0])};case 8:return function(h){return this.fromWireType(at()[h>>>3>>>0])};default:throw new TypeError(`invalid float width (${c}): ${l}`)}};function a2(l,c,h){h>>>=0,dr(l>>>=0,{name:c=er(c>>>0),fromWireType:v=>v,toWireType:(v,b)=>b,Cb:Ar,readValueFromPointer:i2(c,h),Eb:null})}function s2(l,c,h,v,b){if(l>>>=0,h>>>=0,c=er(c>>>0),b===-1&&(b=4294967295),b=R=>R,v===0){var C=32-8*h;b=R=>R<<C>>>C}var A=c.includes("unsigned")?function(R,U){return U>>>0}:function(R,U){return U};dr(l,{name:c,fromWireType:b,toWireType:A,Cb:Ar,readValueFromPointer:Cp(c,h,v!==0),Eb:null})}function o2(l,c,h){function v(C){var A=xe()[C>>>2>>>0];return C=xe()[C+4>>>2>>>0],new b(K().buffer,C,A)}var b=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][c];dr(l>>>=0,{name:h=er(h>>>0),fromWireType:v,Cb:Ar,readValueFromPointer:v},{Tb:!0})}var ln=(l,c,h)=>{var v=te();if(c>>>=0,0<h){var b=c;h=c+h-1;for(var C=0;C<l.length;++C){var A=l.charCodeAt(C);if(55296<=A&&57343>=A&&(A=65536+((1023&A)<<10)|1023&l.charCodeAt(++C)),127>=A){if(c>=h)break;v[c++>>>0]=A}else{if(2047>=A){if(c+1>=h)break;v[c++>>>0]=192|A>>6}else{if(65535>=A){if(c+2>=h)break;v[c++>>>0]=224|A>>12}else{if(c+3>=h)break;v[c++>>>0]=240|A>>18,v[c++>>>0]=128|A>>12&63}v[c++>>>0]=128|A>>6&63}v[c++>>>0]=128|63&A}}v[c>>>0]=0,l=c-b}else l=0;return l},Po=l=>{for(var c=0,h=0;h<l.length;++h){var v=l.charCodeAt(h);127>=v?c++:2047>=v?c+=2:55296<=v&&57343>=v?(c+=4,++h):c+=3}return c};function l2(l,c){dr(l>>>=0,{name:c=er(c>>>0),fromWireType:function(h){for(var v,b=xe()[h>>>2>>>0],C=h+4,A=C,R=0;R<=b;++R){var U=C+R;R!=b&&te()[U>>>0]!=0||(A=Le(A,U-A),v===void 0?v=A:(v+="\0",v+=A),A=U+1)}return pr(h),v},toWireType:function(h,v){v instanceof ArrayBuffer&&(v=new Uint8Array(v));var b=typeof v=="string";if(!(b||ArrayBuffer.isView(v)&&v.BYTES_PER_ELEMENT==1))throw new Bn("Cannot pass non-string to std::string");var C=b?Po(v):v.length,A=Ua(4+C+1),R=A+4;return xe()[A>>>2>>>0]=C,b?ln(v,R,C+1):te().set(v,R>>>0),h!==null&&h.push(pr,A),A},Cb:Ar,readValueFromPointer:Mo,Eb(h){pr(h)}})}var Ep=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,u2=(l,c)=>{for(var h=l>>1,v=h+c/2;!(h>=v)&&He()[h>>>0];)++h;if(32<(h<<=1)-l&&Ep)return Ep.decode(te().slice(l,h));for(h="",v=0;!(v>=c/2);++v){var b=ze()[l+2*v>>>1>>>0];if(b==0)break;h+=String.fromCharCode(b)}return h},d2=(l,c,h)=>{if(h??(h=2147483647),2>h)return 0;var v=c;h=(h-=2)<2*l.length?h/2:l.length;for(var b=0;b<h;++b){var C=l.charCodeAt(b);ze()[c>>>1>>>0]=C,c+=2}return ze()[c>>>1>>>0]=0,c-v},c2=l=>2*l.length,p2=(l,c)=>{for(var h=0,v="";!(h>=c/4);){var b=j()[l+4*h>>>2>>>0];if(b==0)break;++h,65536<=b?(b-=65536,v+=String.fromCharCode(55296|b>>10,56320|1023&b)):v+=String.fromCharCode(b)}return v},f2=(l,c,h)=>{if(c>>>=0,h??(h=2147483647),4>h)return 0;var v=c;h=v+h-4;for(var b=0;b<l.length;++b){var C=l.charCodeAt(b);if(55296<=C&&57343>=C&&(C=65536+((1023&C)<<10)|1023&l.charCodeAt(++b)),j()[c>>>2>>>0]=C,(c+=4)+4>h)break}return j()[c>>>2>>>0]=0,c-v},h2=l=>{for(var c=0,h=0;h<l.length;++h){var v=l.charCodeAt(h);55296<=v&&57343>=v&&++h,c+=4}return c};function m2(l,c,h){if(l>>>=0,c>>>=0,h=er(h>>>=0),c===2)var v=u2,b=d2,C=c2,A=R=>He()[R>>>1>>>0];else c===4&&(v=p2,b=f2,C=h2,A=R=>xe()[R>>>2>>>0]);dr(l,{name:h,fromWireType:R=>{for(var U,q=xe()[R>>>2>>>0],J=R+4,ae=0;ae<=q;++ae){var fe=R+4+ae*c;ae!=q&&A(fe)!=0||(J=v(J,fe-J),U===void 0?U=J:(U+="\0",U+=J),J=fe+c)}return pr(R),U},toWireType:(R,U)=>{if(typeof U!="string")throw new Bn(`Cannot pass non-string to C++ string type ${h}`);var q=C(U),J=Ua(4+q+c);return xe()[J>>>2>>>0]=q/c,b(U,J+4,q+c),R!==null&&R.push(pr,J),J},Cb:Ar,readValueFromPointer:Mo,Eb(R){pr(R)}})}function g2(l,c){dr(l>>>=0,{Ub:!0,name:c=er(c>>>0),Cb:0,fromWireType:()=>{},toWireType:()=>{}})}function y2(l){Go(l>>>0,!u,1,!o,131072,!1),ap()}var Bo=l=>{if(!O)try{if(l(),!(0<Ir))try{d?Ko(E):Ao(E)}catch(c){c instanceof To||c=="unwind"||$(0,c)}}catch(c){c instanceof To||c=="unwind"||$(0,c)}};function Lo(l){l>>>=0,typeof Atomics.jc=="function"&&(Atomics.jc(j(),l>>>2,l).value.then(Oa),l+=128,Atomics.store(j(),l>>>2,1))}var Oa=()=>{var l=Ho();l&&(Lo(l),Bo(rf))};function v2(l,c){(l>>>=0)==c>>>0?setTimeout(Oa):d?postMessage({Hb:l,Db:"checkMailbox"}):(l=on[l])&&l.postMessage({Db:"checkMailbox"})}var Uo=[];function _2(l,c,h,v,b){for(c>>>=0,v/=2,Uo.length=v,h=b>>>0>>>3,b=0;b<v;b++)Uo[b]=G[h+2*b]?G[h+2*b+1]:at()[h+2*b+1>>>0];return(c?qo[c]:cx[l])(...Uo)}var w2=()=>{Ir=0};function $2(l){l>>>=0,d?postMessage({Db:"cleanupThread",ic:l}):ip(on[l])}function x2(l){}var Na=(l,c)=>{var h=No[l];if(h===void 0)throw l=Xp(l),h=er(l),pr(l),new Bn(`${c} has unknown type ${h}`);return h},Tp=(l,c,h)=>{var v=[];return l=l.toWireType(v,h),v.length&&(xe()[c>>>2>>>0]=At(v)),l};function b2(l,c,h){return c>>>=0,h>>>=0,l=st(l>>>0),c=Na(c,"emval::as"),Tp(c,h,l)}function k2(l,c){return c>>>=0,l=st(l>>>0),(c=Na(c,"emval::as")).toWireType(null,l)}var Ra=l=>{try{l()}catch(c){Tr(c)}},Or=0,tr=null,Ip=0,Da=[],zp={},Ap={},S2=0,jo=null,C2=[];function Op(l){return function(c){if(!O){if(Or===0){var h=!1,v=!1;c((b=0)=>{if(!O&&(Ip=b,h=!0,v)){Or=2,Ra(()=>lf(tr)),typeof MainLoop<"u"&&MainLoop.Qb&&MainLoop.resume(),b=!1;try{var C=function(){var U=j()[tr+8>>>2>>>0];return U=P[Ap[U]],--Ir,U()}()}catch(U){C=U,b=!0}var A=!1;if(!tr){var R=jo;R&&(jo=null,(b?R.reject:R.resolve)(C),A=!0)}if(b&&!A)throw C}}),v=!0,h||(Or=1,tr=function(){var b=Ua(65548),C=b+12;xe()[b>>>2>>>0]=C,xe()[b+4>>>2>>>0]=C+65536,C=Da[0];var A=zp[C];return A===void 0&&(A=S2++,zp[C]=A,Ap[A]=C),C=A,j()[b+8>>>2>>>0]=C,b}(),typeof MainLoop<"u"&&MainLoop.Qb&&MainLoop.pause(),Ra(()=>sf(tr)))}else Or===2?(Or=0,Ra(uf),pr(tr),tr=null,C2.forEach(Bo)):Tr(`invalid state: ${Or}`);return Ip}}(c=>{l().then(c)})}function E2(l){return l>>>=0,Op(async()=>{var c=await st(l);return At(c)})}var Ma=[];function T2(l,c,h,v){return h>>>=0,v>>>=0,(l=Ma[l>>>0])(null,c=st(c>>>0),h,v)}var I2={},Pa=l=>{var c=I2[l];return c===void 0?er(l):c};function z2(l,c,h,v,b){return h>>>=0,v>>>=0,b>>>=0,(l=Ma[l>>>0])(c=st(c>>>0),c[h=Pa(h)],v,b)}function A2(l,c){return c>>>=0,(l=st(l>>>0))==st(c)}var Np=()=>typeof globalThis=="object"?globalThis:Function("return this")();function O2(l){return(l>>>=0)==0?At(Np()):(l=Pa(l),At(Np()[l]))}var N2=l=>{var c=Ma.length;return Ma.push(l),c},R2=(l,c)=>{for(var h=Array(l),v=0;v<l;++v)h[v]=Na(xe()[c+4*v>>>2>>>0],`parameter ${v}`);return h};function D2(l,c,h){var v=(c=R2(l,c>>>0)).shift();l--;var b=`return function (obj, func, destructorsRef, args) {
`,C=0,A=[];h===0&&A.push("obj");for(var R=["retType"],U=[v],q=0;q<l;++q)A.push(`arg${q}`),R.push(`argType${q}`),U.push(c[q]),b+=`  var arg${q} = argType${q}.readValueFromPointer(args${C?"+"+C:""});
`,C+=c[q].Cb;return b+=`  var rv = ${h===1?"new func":"func.call"}(${A.join(", ")});
`,v.Ub||(R.push("emval_returnValue"),U.push(Tp),b+=`  return emval_returnValue(retType, destructorsRef, rv);
`),l=new Function(...R,b+`};
`)(...U),h=`methodCaller<(${c.map(J=>J.name).join(", ")}) => ${v.name}>`,N2(Object.defineProperty(l,"name",{value:h}))}function M2(l){return l=Pa(l>>>0),At(i[l])}function P2(l,c){return c>>>=0,l=st(l>>>0),c=st(c),At(l[c])}function B2(l){9<(l>>>=0)&&(cr[l+1]+=1)}function L2(){return At([])}function U2(l){l=st(l>>>0);for(var c=Array(l.length),h=0;h<l.length;h++)c[h]=l[h];return At(c)}function j2(l){return At(Pa(l>>>0))}function W2(){return At({})}function F2(l){for(var c=st(l>>>=0);c.length;){var h=c.pop();c.pop()(h)}Do(l)}function V2(l,c,h){c>>>=0,h>>>=0,l=st(l>>>0),c=st(c),h=st(h),l[c]=h}function q2(l,c){return c>>>=0,l=(l=Na(l>>>0,"_emval_take_value")).readValueFromPointer(c),At(l)}function H2(l,c){l=-9007199254740992>l||9007199254740992<l?NaN:Number(l),c>>>=0,l=new Date(1e3*l),j()[c>>>2>>>0]=l.getUTCSeconds(),j()[c+4>>>2>>>0]=l.getUTCMinutes(),j()[c+8>>>2>>>0]=l.getUTCHours(),j()[c+12>>>2>>>0]=l.getUTCDate(),j()[c+16>>>2>>>0]=l.getUTCMonth(),j()[c+20>>>2>>>0]=l.getUTCFullYear()-1900,j()[c+24>>>2>>>0]=l.getUTCDay(),l=(l.getTime()-Date.UTC(l.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,j()[c+28>>>2>>>0]=l}var Rp=l=>l%4==0&&(l%100!=0||l%400==0),Dp=[0,31,60,91,121,152,182,213,244,274,305,335],Mp=[0,31,59,90,120,151,181,212,243,273,304,334];function G2(l,c){l=-9007199254740992>l||9007199254740992<l?NaN:Number(l),c>>>=0,l=new Date(1e3*l),j()[c>>>2>>>0]=l.getSeconds(),j()[c+4>>>2>>>0]=l.getMinutes(),j()[c+8>>>2>>>0]=l.getHours(),j()[c+12>>>2>>>0]=l.getDate(),j()[c+16>>>2>>>0]=l.getMonth(),j()[c+20>>>2>>>0]=l.getFullYear()-1900,j()[c+24>>>2>>>0]=l.getDay();var h=(Rp(l.getFullYear())?Dp:Mp)[l.getMonth()]+l.getDate()-1|0;j()[c+28>>>2>>>0]=h,j()[c+36>>>2>>>0]=-60*l.getTimezoneOffset(),h=new Date(l.getFullYear(),6,1).getTimezoneOffset();var v=new Date(l.getFullYear(),0,1).getTimezoneOffset();l=0|(h!=v&&l.getTimezoneOffset()==Math.min(v,h)),j()[c+32>>>2>>>0]=l}function K2(l){l>>>=0;var c=new Date(j()[l+20>>>2>>>0]+1900,j()[l+16>>>2>>>0],j()[l+12>>>2>>>0],j()[l+8>>>2>>>0],j()[l+4>>>2>>>0],j()[l>>>2>>>0],0),h=j()[l+32>>>2>>>0],v=c.getTimezoneOffset(),b=new Date(c.getFullYear(),6,1).getTimezoneOffset(),C=new Date(c.getFullYear(),0,1).getTimezoneOffset(),A=Math.min(C,b);return 0>h?j()[l+32>>>2>>>0]=+(b!=C&&A==v):0<h!=(A==v)&&(b=Math.max(C,b),c.setTime(c.getTime()+6e4*((0<h?A:b)-v))),j()[l+24>>>2>>>0]=c.getDay(),h=(Rp(c.getFullYear())?Dp:Mp)[c.getMonth()]+c.getDate()-1|0,j()[l+28>>>2>>>0]=h,j()[l>>>2>>>0]=c.getSeconds(),j()[l+4>>>2>>>0]=c.getMinutes(),j()[l+8>>>2>>>0]=c.getHours(),j()[l+12>>>2>>>0]=c.getDate(),j()[l+16>>>2>>>0]=c.getMonth(),j()[l+20>>>2>>>0]=c.getYear(),l=c.getTime(),BigInt(isNaN(l)?-1:l/1e3)}function Pp(l,c,h,v,b,C,A){return d?Ee(16,1,l,c,h,v,b,C,A):-52}function Bp(l,c,h,v,b,C){if(d)return Ee(17,1,l,c,h,v,b,C)}var xi={},Q2=()=>performance.timeOrigin+performance.now();function Lp(l,c){if(d)return Ee(18,1,l,c);if(xi[l]&&(clearTimeout(xi[l].id),delete xi[l]),!c)return 0;var h=setTimeout(()=>{delete xi[l],Bo(()=>tf(l,performance.timeOrigin+performance.now()))},c);return xi[l]={id:h,rc:c},0}function X2(l,c,h,v){l>>>=0,c>>>=0,h>>>=0,v>>>=0;var b=new Date().getFullYear(),C=new Date(b,0,1).getTimezoneOffset();b=new Date(b,6,1).getTimezoneOffset();var A=Math.max(C,b);xe()[l>>>2>>>0]=60*A,j()[c>>>2>>>0]=+(C!=b),l=(c=R=>{var U=Math.abs(R);return`UTC${0<=R?"-":"+"}${String(Math.floor(U/60)).padStart(2,"0")}${String(U%60).padStart(2,"0")}`})(C),c=c(b),b<C?(ln(l,h,17),ln(c,v,17)):(ln(l,v,17),ln(c,h,17))}var Y2=()=>Date.now();function Z2(l,c,h){return 0<=l&&3>=l?(l===0?l=Date.now():l=performance.timeOrigin+performance.now(),G[h>>>0>>>3]=BigInt(Math.round(1e6*l)),0):28}var Wo=[],Up=(l,c)=>{Wo.length=0;for(var h;h=te()[l++>>>0];){var v=h!=105;c+=(v&=h!=112)&&c%8?4:0,Wo.push(h==112?xe()[c>>>2>>>0]:h==106?G[c>>>3]:h==105?j()[c>>>2>>>0]:at()[c>>>3>>>0]),c+=v?8:4}return Wo};function J2(l,c,h){return l>>>=0,c=Up(c>>>0,h>>>0),qo[l](...c)}function ex(l,c,h){return l>>>=0,c=Up(c>>>0,h>>>0),qo[l](...c)}var tx=()=>{};function rx(l,c){return Z(Le(l>>>0,c>>>0))}var nx=()=>{throw Ir+=1,"unwind"};function ix(){return 4294901760}var ax=()=>navigator.hardwareConcurrency;function sx(){return Tr("Cannot use emscripten_pc_get_function without -sUSE_OFFSET_CONVERTER"),0}function ox(l){l>>>=0;var c=te().length;if(l<=c||4294901760<l)return!1;for(var h=1;4>=h;h*=2){var v=c*(1+.2/h);v=Math.min(v,l+100663296);e:{v=(Math.min(4294901760,65536*Math.ceil(Math.max(l,v)/65536))-x.buffer.byteLength+65535)/65536|0;try{x.grow(v),we();var b=1;break e}catch{}b=void 0}if(b)return!0}return!1}var Ba=()=>(Tr("Cannot use convertFrameToPC (needed by __builtin_return_address) without -sUSE_OFFSET_CONVERTER"),0),bi={},jp=l=>{l.forEach(c=>{Ba()})};function lx(){var l=Error().stack.toString().split(`
`);return l[0]=="Error"&&l.shift(),jp(l),bi.Mb=Ba(),bi.dc=l,bi.Mb}function ux(l,c,h){if(l>>>=0,c>>>=0,bi.Mb==l)var v=bi.dc;else(v=Error().stack.toString().split(`
`))[0]=="Error"&&v.shift(),jp(v);for(var b=3;v[b]&&Ba()!=l;)++b;for(l=0;l<h&&v[l+b];++l)j()[c+4*l>>>2>>>0]=Ba();return l}var Fo,Vo={},Wp=()=>{if(!Fo){var l,c={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:"./this.program"};for(l in Vo)Vo[l]===void 0?delete c[l]:c[l]=Vo[l];var h=[];for(l in c)h.push(`${l}=${c[l]}`);Fo=h}return Fo};function Fp(l,c){if(d)return Ee(19,1,l,c);l>>>=0,c>>>=0;var h,v=0,b=0;for(h of Wp()){var C=c+v;xe()[l+b>>>2>>>0]=C,v+=ln(h,C,1/0)+1,b+=4}return 0}function Vp(l,c){if(d)return Ee(20,1,l,c);l>>>=0,c>>>=0;var h=Wp();for(var v of(xe()[l>>>2>>>0]=h.length,l=0,h))l+=Po(v)+1;return xe()[c>>>2>>>0]=l,0}function qp(l){return d?Ee(21,1,l):52}function Hp(l,c,h,v){return d?Ee(22,1,l,c,h,v):52}function Gp(l,c,h,v){return d?Ee(23,1,l,c,h,v):70}var dx=[null,[],[]];function Kp(l,c,h,v){if(d)return Ee(24,1,l,c,h,v);c>>>=0,h>>>=0,v>>>=0;for(var b=0,C=0;C<h;C++){var A=xe()[c>>>2>>>0],R=xe()[c+4>>>2>>>0];c+=8;for(var U=0;U<R;U++){var q=l,J=te()[A+U>>>0],ae=dx[q];J===0||J===10?((q===1?F:Z)(cp(ae)),ae.length=0):ae.push(J)}b+=R}return xe()[v>>>2>>>0]=b,0}d||function(){for(var l=i.numThreads-1;l--;)op();Io.push(()=>{an++,function(c){d?c():Promise.all(zr.map(sp)).then(c)}(()=>Zc())})}();for(var Qp=Array(256),La=0;256>La;++La)Qp[La]=String.fromCharCode(La);Sp=Qp,cr.push(0,1,void 0,1,null,1,!0,1,!1,1),i.count_emval_handles=()=>cr.length/2-5-Ro.length,d||(x=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),we()),i.wasmBinary&&(g=i.wasmBinary),i.stackSave=()=>Xo(),i.stackRestore=l=>ja(l),i.stackAlloc=l=>Qo(l),i.setValue=function(l,c,h="i8"){switch(h.endsWith("*")&&(h="*"),h){case"i1":case"i8":K()[l>>>0]=c;break;case"i16":ze()[l>>>1>>>0]=c;break;case"i32":j()[l>>>2>>>0]=c;break;case"i64":G[l>>>3]=BigInt(c);break;case"float":_t()[l>>>2>>>0]=c;break;case"double":at()[l>>>3>>>0]=c;break;case"*":xe()[l>>>2>>>0]=c;break;default:Tr(`invalid type for setValue: ${h}`)}},i.getValue=function(l,c="i8"){switch(c.endsWith("*")&&(c="*"),c){case"i1":case"i8":return K()[l>>>0];case"i16":return ze()[l>>>1>>>0];case"i32":return j()[l>>>2>>>0];case"i64":return G[l>>>3];case"float":return _t()[l>>>2>>>0];case"double":return at()[l>>>3>>>0];case"*":return xe()[l>>>2>>>0];default:Tr(`invalid type for getValue: ${c}`)}},i.UTF8ToString=Le,i.stringToUTF8=ln,i.lengthBytesUTF8=Po;var cx=[zo,rp,lp,pp,fp,hp,mp,gp,yp,vp,_p,wp,$p,xp,bp,kp,Pp,Bp,Lp,Fp,Vp,qp,Hp,Gp,Kp],qo={893836:(l,c,h,v,b)=>{if(i===void 0||!i.Fb)return 1;if((l=Le(Number(l>>>0))).startsWith("./")&&(l=l.substring(2)),!(l=i.Fb.get(l)))return 2;if(c=Number(c>>>0),h=Number(h>>>0),v=Number(v>>>0),c+h>l.byteLength)return 3;try{let C=l.subarray(c,c+h);switch(b){case 0:te().set(C,v>>>0);break;case 1:i.mc?i.mc(v,C):i.cc(v,C);break;default:return 4}return 0}catch{return 4}},894660:(l,c,h)=>{i.Pb(l,te().subarray(c>>>0,c+h>>>0))},894724:()=>i.oc(),894766:l=>{i.Ob(l)},894803:()=>{i.Wb()},894834:()=>{i.Xb()},894863:()=>{i.ac()},894888:l=>i.Vb(l),894921:l=>i.Zb(l),894953:(l,c,h)=>{i.Lb(Number(l),Number(c),Number(h),!0)},895016:(l,c,h)=>{i.Lb(Number(l),Number(c),Number(h))},895073:()=>typeof wasmOffsetConverter<"u",895130:l=>{i.Ab("Abs",l,void 0)},895181:l=>{i.Ab("Neg",l,void 0)},895232:l=>{i.Ab("Floor",l,void 0)},895285:l=>{i.Ab("Ceil",l,void 0)},895337:l=>{i.Ab("Reciprocal",l,void 0)},895395:l=>{i.Ab("Sqrt",l,void 0)},895447:l=>{i.Ab("Exp",l,void 0)},895498:l=>{i.Ab("Erf",l,void 0)},895549:l=>{i.Ab("Sigmoid",l,void 0)},895604:(l,c,h)=>{i.Ab("HardSigmoid",l,{alpha:c,beta:h})},895683:l=>{i.Ab("Log",l,void 0)},895734:l=>{i.Ab("Sin",l,void 0)},895785:l=>{i.Ab("Cos",l,void 0)},895836:l=>{i.Ab("Tan",l,void 0)},895887:l=>{i.Ab("Asin",l,void 0)},895939:l=>{i.Ab("Acos",l,void 0)},895991:l=>{i.Ab("Atan",l,void 0)},896043:l=>{i.Ab("Sinh",l,void 0)},896095:l=>{i.Ab("Cosh",l,void 0)},896147:l=>{i.Ab("Asinh",l,void 0)},896200:l=>{i.Ab("Acosh",l,void 0)},896253:l=>{i.Ab("Atanh",l,void 0)},896306:l=>{i.Ab("Tanh",l,void 0)},896358:l=>{i.Ab("Not",l,void 0)},896409:(l,c,h)=>{i.Ab("Clip",l,{min:c,max:h})},896478:l=>{i.Ab("Clip",l,void 0)},896530:(l,c)=>{i.Ab("Elu",l,{alpha:c})},896588:l=>{i.Ab("Gelu",l,void 0)},896640:l=>{i.Ab("Relu",l,void 0)},896692:(l,c)=>{i.Ab("LeakyRelu",l,{alpha:c})},896756:(l,c)=>{i.Ab("ThresholdedRelu",l,{alpha:c})},896826:(l,c)=>{i.Ab("Cast",l,{to:c})},896884:l=>{i.Ab("Add",l,void 0)},896935:l=>{i.Ab("Sub",l,void 0)},896986:l=>{i.Ab("Mul",l,void 0)},897037:l=>{i.Ab("Div",l,void 0)},897088:l=>{i.Ab("Pow",l,void 0)},897139:l=>{i.Ab("Equal",l,void 0)},897192:l=>{i.Ab("Greater",l,void 0)},897247:l=>{i.Ab("GreaterOrEqual",l,void 0)},897309:l=>{i.Ab("Less",l,void 0)},897361:l=>{i.Ab("LessOrEqual",l,void 0)},897420:(l,c,h,v,b)=>{i.Ab("ReduceMean",l,{keepDims:!!c,noopWithEmptyAxes:!!h,axes:v?Array.from(j().subarray(Number(v)>>>0,Number(b)>>>0)):[]})},897595:(l,c,h,v,b)=>{i.Ab("ReduceMax",l,{keepDims:!!c,noopWithEmptyAxes:!!h,axes:v?Array.from(j().subarray(Number(v)>>>0,Number(b)>>>0)):[]})},897769:(l,c,h,v,b)=>{i.Ab("ReduceMin",l,{keepDims:!!c,noopWithEmptyAxes:!!h,axes:v?Array.from(j().subarray(Number(v)>>>0,Number(b)>>>0)):[]})},897943:(l,c,h,v,b)=>{i.Ab("ReduceProd",l,{keepDims:!!c,noopWithEmptyAxes:!!h,axes:v?Array.from(j().subarray(Number(v)>>>0,Number(b)>>>0)):[]})},898118:(l,c,h,v,b)=>{i.Ab("ReduceSum",l,{keepDims:!!c,noopWithEmptyAxes:!!h,axes:v?Array.from(j().subarray(Number(v)>>>0,Number(b)>>>0)):[]})},898292:(l,c,h,v,b)=>{i.Ab("ReduceL1",l,{keepDims:!!c,noopWithEmptyAxes:!!h,axes:v?Array.from(j().subarray(Number(v)>>>0,Number(b)>>>0)):[]})},898465:(l,c,h,v,b)=>{i.Ab("ReduceL2",l,{keepDims:!!c,noopWithEmptyAxes:!!h,axes:v?Array.from(j().subarray(Number(v)>>>0,Number(b)>>>0)):[]})},898638:(l,c,h,v,b)=>{i.Ab("ReduceLogSum",l,{keepDims:!!c,noopWithEmptyAxes:!!h,axes:v?Array.from(j().subarray(Number(v)>>>0,Number(b)>>>0)):[]})},898815:(l,c,h,v,b)=>{i.Ab("ReduceSumSquare",l,{keepDims:!!c,noopWithEmptyAxes:!!h,axes:v?Array.from(j().subarray(Number(v)>>>0,Number(b)>>>0)):[]})},898995:(l,c,h,v,b)=>{i.Ab("ReduceLogSumExp",l,{keepDims:!!c,noopWithEmptyAxes:!!h,axes:v?Array.from(j().subarray(Number(v)>>>0,Number(b)>>>0)):[]})},899175:l=>{i.Ab("Where",l,void 0)},899228:(l,c,h)=>{i.Ab("Transpose",l,{perm:c?Array.from(j().subarray(Number(c)>>>0,Number(h)>>>0)):[]})},899352:(l,c,h,v)=>{i.Ab("DepthToSpace",l,{blocksize:c,mode:Le(h),format:v?"NHWC":"NCHW"})},899485:(l,c,h,v)=>{i.Ab("DepthToSpace",l,{blocksize:c,mode:Le(h),format:v?"NHWC":"NCHW"})},899618:(l,c,h,v,b,C,A,R,U,q,J,ae,fe,ye,je)=>{i.Ab("ConvTranspose",l,{format:U?"NHWC":"NCHW",autoPad:c,dilations:[h],group:v,kernelShape:[b],pads:[C,A],strides:[R],wIsConst:()=>!!K()[q>>>0],outputPadding:J?Array.from(j().subarray(Number(J)>>>0,Number(ae)>>>0)):[],outputShape:fe?Array.from(j().subarray(Number(fe)>>>0,Number(ye)>>>0)):[],activation:Le(je)})},900051:(l,c,h,v,b,C,A,R,U,q,J,ae,fe,ye)=>{i.Ab("ConvTranspose",l,{format:R?"NHWC":"NCHW",autoPad:c,dilations:Array.from(j().subarray(Number(h)>>>0,2+(Number(h)>>>0)>>>0)),group:v,kernelShape:Array.from(j().subarray(Number(b)>>>0,2+(Number(b)>>>0)>>>0)),pads:Array.from(j().subarray(Number(C)>>>0,4+(Number(C)>>>0)>>>0)),strides:Array.from(j().subarray(Number(A)>>>0,2+(Number(A)>>>0)>>>0)),wIsConst:()=>!!K()[U>>>0],outputPadding:q?Array.from(j().subarray(Number(q)>>>0,Number(J)>>>0)):[],outputShape:ae?Array.from(j().subarray(Number(ae)>>>0,Number(fe)>>>0)):[],activation:Le(ye)})},900712:(l,c,h,v,b,C,A,R,U,q,J,ae,fe,ye,je)=>{i.Ab("ConvTranspose",l,{format:U?"NHWC":"NCHW",autoPad:c,dilations:[h],group:v,kernelShape:[b],pads:[C,A],strides:[R],wIsConst:()=>!!K()[q>>>0],outputPadding:J?Array.from(j().subarray(Number(J)>>>0,Number(ae)>>>0)):[],outputShape:fe?Array.from(j().subarray(Number(fe)>>>0,Number(ye)>>>0)):[],activation:Le(je)})},901145:(l,c,h,v,b,C,A,R,U,q,J,ae,fe,ye)=>{i.Ab("ConvTranspose",l,{format:R?"NHWC":"NCHW",autoPad:c,dilations:Array.from(j().subarray(Number(h)>>>0,2+(Number(h)>>>0)>>>0)),group:v,kernelShape:Array.from(j().subarray(Number(b)>>>0,2+(Number(b)>>>0)>>>0)),pads:Array.from(j().subarray(Number(C)>>>0,4+(Number(C)>>>0)>>>0)),strides:Array.from(j().subarray(Number(A)>>>0,2+(Number(A)>>>0)>>>0)),wIsConst:()=>!!K()[U>>>0],outputPadding:q?Array.from(j().subarray(Number(q)>>>0,Number(J)>>>0)):[],outputShape:ae?Array.from(j().subarray(Number(ae)>>>0,Number(fe)>>>0)):[],activation:Le(ye)})},901806:(l,c)=>{i.Ab("GlobalAveragePool",l,{format:c?"NHWC":"NCHW"})},901897:(l,c,h,v,b,C,A,R,U,q,J,ae,fe,ye)=>{i.Ab("AveragePool",l,{format:ye?"NHWC":"NCHW",auto_pad:c,ceil_mode:h,count_include_pad:v,storage_order:b,dilations:C?Array.from(j().subarray(Number(C)>>>0,Number(A)>>>0)):[],kernel_shape:R?Array.from(j().subarray(Number(R)>>>0,Number(U)>>>0)):[],pads:q?Array.from(j().subarray(Number(q)>>>0,Number(J)>>>0)):[],strides:ae?Array.from(j().subarray(Number(ae)>>>0,Number(fe)>>>0)):[]})},902376:(l,c)=>{i.Ab("GlobalAveragePool",l,{format:c?"NHWC":"NCHW"})},902467:(l,c,h,v,b,C,A,R,U,q,J,ae,fe,ye)=>{i.Ab("AveragePool",l,{format:ye?"NHWC":"NCHW",auto_pad:c,ceil_mode:h,count_include_pad:v,storage_order:b,dilations:C?Array.from(j().subarray(Number(C)>>>0,Number(A)>>>0)):[],kernel_shape:R?Array.from(j().subarray(Number(R)>>>0,Number(U)>>>0)):[],pads:q?Array.from(j().subarray(Number(q)>>>0,Number(J)>>>0)):[],strides:ae?Array.from(j().subarray(Number(ae)>>>0,Number(fe)>>>0)):[]})},902946:(l,c)=>{i.Ab("GlobalMaxPool",l,{format:c?"NHWC":"NCHW"})},903033:(l,c,h,v,b,C,A,R,U,q,J,ae,fe,ye)=>{i.Ab("MaxPool",l,{format:ye?"NHWC":"NCHW",auto_pad:c,ceil_mode:h,count_include_pad:v,storage_order:b,dilations:C?Array.from(j().subarray(Number(C)>>>0,Number(A)>>>0)):[],kernel_shape:R?Array.from(j().subarray(Number(R)>>>0,Number(U)>>>0)):[],pads:q?Array.from(j().subarray(Number(q)>>>0,Number(J)>>>0)):[],strides:ae?Array.from(j().subarray(Number(ae)>>>0,Number(fe)>>>0)):[]})},903508:(l,c)=>{i.Ab("GlobalMaxPool",l,{format:c?"NHWC":"NCHW"})},903595:(l,c,h,v,b,C,A,R,U,q,J,ae,fe,ye)=>{i.Ab("MaxPool",l,{format:ye?"NHWC":"NCHW",auto_pad:c,ceil_mode:h,count_include_pad:v,storage_order:b,dilations:C?Array.from(j().subarray(Number(C)>>>0,Number(A)>>>0)):[],kernel_shape:R?Array.from(j().subarray(Number(R)>>>0,Number(U)>>>0)):[],pads:q?Array.from(j().subarray(Number(q)>>>0,Number(J)>>>0)):[],strides:ae?Array.from(j().subarray(Number(ae)>>>0,Number(fe)>>>0)):[]})},904070:(l,c,h,v,b)=>{i.Ab("Gemm",l,{alpha:c,beta:h,transA:v,transB:b})},904174:l=>{i.Ab("MatMul",l,void 0)},904228:(l,c,h,v)=>{i.Ab("ArgMax",l,{keepDims:!!c,selectLastIndex:!!h,axis:v})},904336:(l,c,h,v)=>{i.Ab("ArgMin",l,{keepDims:!!c,selectLastIndex:!!h,axis:v})},904444:(l,c)=>{i.Ab("Softmax",l,{axis:c})},904507:(l,c)=>{i.Ab("Concat",l,{axis:c})},904567:(l,c,h,v,b)=>{i.Ab("Split",l,{axis:c,numOutputs:h,splitSizes:v?Array.from(j().subarray(Number(v)>>>0,Number(b)>>>0)):[]})},904723:l=>{i.Ab("Expand",l,void 0)},904777:(l,c)=>{i.Ab("Gather",l,{axis:Number(c)})},904848:(l,c)=>{i.Ab("GatherElements",l,{axis:Number(c)})},904927:(l,c)=>{i.Ab("GatherND",l,{batch_dims:Number(c)})},905006:(l,c,h,v,b,C,A,R,U,q,J)=>{i.Ab("Resize",l,{antialias:c,axes:h?Array.from(j().subarray(Number(h)>>>0,Number(v)>>>0)):[],coordinateTransformMode:Le(b),cubicCoeffA:C,excludeOutside:A,extrapolationValue:R,keepAspectRatioPolicy:Le(U),mode:Le(q),nearestMode:Le(J)})},905368:(l,c,h,v,b,C,A)=>{i.Ab("Slice",l,{starts:c?Array.from(j().subarray(Number(c)>>>0,Number(h)>>>0)):[],ends:v?Array.from(j().subarray(Number(v)>>>0,Number(b)>>>0)):[],axes:C?Array.from(j().subarray(Number(C)>>>0,Number(A)>>>0)):[]})},905632:l=>{i.Ab("Tile",l,void 0)},905684:(l,c,h)=>{i.Ab("InstanceNormalization",l,{epsilon:c,format:h?"NHWC":"NCHW"})},905798:(l,c,h)=>{i.Ab("InstanceNormalization",l,{epsilon:c,format:h?"NHWC":"NCHW"})},905912:l=>{i.Ab("Range",l,void 0)},905965:(l,c)=>{i.Ab("Einsum",l,{equation:Le(c)})},906046:(l,c,h,v,b)=>{i.Ab("Pad",l,{mode:c,value:h,pads:v?Array.from(j().subarray(Number(v)>>>0,Number(b)>>>0)):[]})},906189:(l,c,h,v,b,C)=>{i.Ab("BatchNormalization",l,{epsilon:c,momentum:h,spatial:!!b,trainingMode:!!v,format:C?"NHWC":"NCHW"})},906358:(l,c,h,v,b,C)=>{i.Ab("BatchNormalization",l,{epsilon:c,momentum:h,spatial:!!b,trainingMode:!!v,format:C?"NHWC":"NCHW"})},906527:(l,c,h)=>{i.Ab("CumSum",l,{exclusive:Number(c),reverse:Number(h)})},906624:(l,c,h)=>{i.Ab("DequantizeLinear",l,{axis:c,blockSize:h})},906714:(l,c,h,v,b)=>{i.Ab("GridSample",l,{align_corners:c,mode:Le(h),padding_mode:Le(v),format:b?"NHWC":"NCHW"})},906884:(l,c,h,v,b)=>{i.Ab("GridSample",l,{align_corners:c,mode:Le(h),padding_mode:Le(v),format:b?"NHWC":"NCHW"})},907054:(l,c)=>{i.Ab("ScatterND",l,{reduction:Le(c)})},907139:(l,c,h,v,b,C,A,R,U)=>{i.Ab("Attention",l,{numHeads:c,isUnidirectional:h,maskFilterValue:v,scale:b,doRotary:C,qkvHiddenSizes:A?Array.from(j().subarray(Number(R)>>>0,Number(R)+A>>>0)):[],pastPresentShareBuffer:!!U})},907411:l=>{i.Ab("BiasAdd",l,void 0)},907466:l=>{i.Ab("BiasSplitGelu",l,void 0)},907527:l=>{i.Ab("FastGelu",l,void 0)},907583:(l,c,h,v,b,C,A,R,U,q,J,ae,fe,ye,je,$t)=>{i.Ab("Conv",l,{format:ae?"NHWC":"NCHW",auto_pad:c,dilations:h?Array.from(j().subarray(Number(h)>>>0,Number(v)>>>0)):[],group:b,kernel_shape:C?Array.from(j().subarray(Number(C)>>>0,Number(A)>>>0)):[],pads:R?Array.from(j().subarray(Number(R)>>>0,Number(U)>>>0)):[],strides:q?Array.from(j().subarray(Number(q)>>>0,Number(J)>>>0)):[],w_is_const:()=>!!K()[Number(fe)>>>0],activation:Le(ye),activation_params:je?Array.from(_t().subarray(Number(je)>>>0,Number($t)>>>0)):[]})},908167:l=>{i.Ab("Gelu",l,void 0)},908219:(l,c,h,v,b,C,A,R,U)=>{i.Ab("GroupQueryAttention",l,{numHeads:c,kvNumHeads:h,scale:v,softcap:b,doRotary:C,rotaryInterleaved:A,smoothSoftmax:R,localWindowSize:U})},908436:(l,c,h,v)=>{i.Ab("LayerNormalization",l,{axis:c,epsilon:h,simplified:!!v})},908547:(l,c,h,v)=>{i.Ab("LayerNormalization",l,{axis:c,epsilon:h,simplified:!!v})},908658:(l,c,h,v,b,C)=>{i.Ab("MatMulNBits",l,{k:c,n:h,accuracyLevel:v,bits:b,blockSize:C})},908785:(l,c,h,v,b,C)=>{i.Ab("MultiHeadAttention",l,{numHeads:c,isUnidirectional:h,maskFilterValue:v,scale:b,doRotary:C})},908944:(l,c)=>{i.Ab("QuickGelu",l,{alpha:c})},909008:(l,c,h,v,b)=>{i.Ab("RotaryEmbedding",l,{interleaved:!!c,numHeads:h,rotaryEmbeddingDim:v,scale:b})},909147:(l,c,h)=>{i.Ab("SkipLayerNormalization",l,{epsilon:c,simplified:!!h})},909249:(l,c,h)=>{i.Ab("SkipLayerNormalization",l,{epsilon:c,simplified:!!h})},909351:(l,c,h,v)=>{i.Ab("GatherBlockQuantized",l,{gatherAxis:c,quantizeAxis:h,blockSize:v})},909472:l=>{i.$b(l)},909506:(l,c)=>i.bc(Number(l),Number(c),i.Gb.ec,i.Gb.errors)};function px(l,c,h){return Op(async()=>{await i.Yb(Number(l),Number(c),Number(h))})}function fx(){return typeof wasmOffsetConverter<"u"}var P=await async function(){function l(v,b){return P=v.exports,P=function(){var C=P,A={};for(let[R,U]of Object.entries(C))A[R]=typeof U=="function"?(...q)=>{Da.push(R);try{return U(...q)}finally{O||(Da.pop(),tr&&Or===1&&Da.length===0&&(Or=0,Ir+=1,Ra(of),typeof Fibers<"u"&&Fibers.sc()))}}:U;return A}(),P=function(){var C=P,A=U=>q=>U(q)>>>0,R=U=>()=>U()>>>0;return(C=Object.assign({},C)).Ea=A(C.Ea),C.gb=R(C.gb),C.ib=A(C.ib),C.tb=A(C.tb),C.ub=R(C.ub),C.__cxa_get_exception_ptr=A(C.__cxa_get_exception_ptr),C}(),np.push(P.jb),k=b,Zc(),P}an++;var c=Jc();if(i.instantiateWasm)return new Promise(v=>{i.instantiateWasm(c,(b,C)=>{v(l(b,C))})});if(d)return new Promise(v=>{Y=b=>{var C=new WebAssembly.Instance(b,Jc());v(l(C,b))}});wt??(wt=i.locateFile?i.locateFile?i.locateFile("ort-wasm-simd-threaded.jsep.wasm",y):y+"ort-wasm-simd-threaded.jsep.wasm":new URL(""+new URL("ort-wasm-simd-threaded.jsep-BGTZ4Y7F.wasm",import.meta.url).href,import.meta.url).href);try{var h=await async function(v){var b=wt;if(!g&&typeof WebAssembly.instantiateStreaming=="function"&&!W(b))try{var C=fetch(b,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(C,v)}catch(A){Z(`wasm streaming compile failed: ${A}`),Z("falling back to ArrayBuffer instantiation")}return async function(A,R){try{var U=await async function(q){if(!g)try{var J=await _(q);return new Uint8Array(J)}catch{}if(q==wt&&g)q=new Uint8Array(g);else{if(!w)throw"both async and sync fetching of the wasm failed";q=w(q)}return q}(A);return await WebAssembly.instantiate(U,R)}catch(q){Z(`failed to asynchronously prepare wasm: ${q}`),Tr(q)}}(b,v)}(c);return l(h.instance,h.module)}catch(v){return a(v),Promise.reject(v)}}(),Xp=l=>(Xp=P.Ea)(l),Yp=()=>(Yp=P.Fa)();i._OrtInit=(l,c)=>(i._OrtInit=P.Ga)(l,c),i._OrtGetLastError=(l,c)=>(i._OrtGetLastError=P.Ha)(l,c),i._OrtCreateSessionOptions=(l,c,h,v,b,C,A,R,U,q)=>(i._OrtCreateSessionOptions=P.Ia)(l,c,h,v,b,C,A,R,U,q),i._OrtAppendExecutionProvider=(l,c,h,v,b)=>(i._OrtAppendExecutionProvider=P.Ja)(l,c,h,v,b),i._OrtAddFreeDimensionOverride=(l,c,h)=>(i._OrtAddFreeDimensionOverride=P.Ka)(l,c,h),i._OrtAddSessionConfigEntry=(l,c,h)=>(i._OrtAddSessionConfigEntry=P.La)(l,c,h),i._OrtReleaseSessionOptions=l=>(i._OrtReleaseSessionOptions=P.Ma)(l),i._OrtCreateSession=(l,c,h)=>(i._OrtCreateSession=P.Na)(l,c,h),i._OrtReleaseSession=l=>(i._OrtReleaseSession=P.Oa)(l),i._OrtGetInputOutputCount=(l,c,h)=>(i._OrtGetInputOutputCount=P.Pa)(l,c,h),i._OrtGetInputOutputMetadata=(l,c,h,v)=>(i._OrtGetInputOutputMetadata=P.Qa)(l,c,h,v),i._OrtFree=l=>(i._OrtFree=P.Ra)(l),i._OrtCreateTensor=(l,c,h,v,b,C)=>(i._OrtCreateTensor=P.Sa)(l,c,h,v,b,C),i._OrtGetTensorData=(l,c,h,v,b)=>(i._OrtGetTensorData=P.Ta)(l,c,h,v,b),i._OrtReleaseTensor=l=>(i._OrtReleaseTensor=P.Ua)(l),i._OrtCreateRunOptions=(l,c,h,v)=>(i._OrtCreateRunOptions=P.Va)(l,c,h,v),i._OrtAddRunConfigEntry=(l,c,h)=>(i._OrtAddRunConfigEntry=P.Wa)(l,c,h),i._OrtReleaseRunOptions=l=>(i._OrtReleaseRunOptions=P.Xa)(l),i._OrtCreateBinding=l=>(i._OrtCreateBinding=P.Ya)(l),i._OrtBindInput=(l,c,h)=>(i._OrtBindInput=P.Za)(l,c,h),i._OrtBindOutput=(l,c,h,v)=>(i._OrtBindOutput=P._a)(l,c,h,v),i._OrtClearBoundOutputs=l=>(i._OrtClearBoundOutputs=P.$a)(l),i._OrtReleaseBinding=l=>(i._OrtReleaseBinding=P.ab)(l),i._OrtRunWithBinding=(l,c,h,v,b)=>(i._OrtRunWithBinding=P.bb)(l,c,h,v,b),i._OrtRun=(l,c,h,v,b,C,A,R)=>(i._OrtRun=P.cb)(l,c,h,v,b,C,A,R),i._OrtEndProfiling=l=>(i._OrtEndProfiling=P.db)(l),i._JsepOutput=(l,c,h)=>(i._JsepOutput=P.eb)(l,c,h),i._JsepGetNodeName=l=>(i._JsepGetNodeName=P.fb)(l);var Ho=()=>(Ho=P.gb)(),pr=i._free=l=>(pr=i._free=P.hb)(l),Ua=i._malloc=l=>(Ua=i._malloc=P.ib)(l),Go=(l,c,h,v,b,C)=>(Go=P.kb)(l,c,h,v,b,C),Zp=()=>(Zp=P.lb)(),Jp=(l,c,h,v,b)=>(Jp=P.mb)(l,c,h,v,b),ef=l=>(ef=P.nb)(l),Ko=l=>(Ko=P.ob)(l),tf=(l,c)=>(tf=P.pb)(l,c),rf=()=>(rf=P.qb)(),nf=(l,c)=>(nf=P.rb)(l,c),ja=l=>(ja=P.sb)(l),Qo=l=>(Qo=P.tb)(l),Xo=()=>(Xo=P.ub)(),af=i.dynCall_ii=(l,c)=>(af=i.dynCall_ii=P.vb)(l,c);i.dynCall_vii=(l,c,h)=>(i.dynCall_vii=P.dynCall_vii)(l,c,h),i.dynCall_iiiii=(l,c,h,v,b)=>(i.dynCall_iiiii=P.dynCall_iiiii)(l,c,h,v,b),i.dynCall_iii=(l,c,h)=>(i.dynCall_iii=P.dynCall_iii)(l,c,h),i.dynCall_iiiiii=(l,c,h,v,b,C)=>(i.dynCall_iiiiii=P.dynCall_iiiiii)(l,c,h,v,b,C),i.dynCall_iiiiiiii=(l,c,h,v,b,C,A,R)=>(i.dynCall_iiiiiiii=P.dynCall_iiiiiiii)(l,c,h,v,b,C,A,R),i.dynCall_iiiiiii=(l,c,h,v,b,C,A)=>(i.dynCall_iiiiiii=P.dynCall_iiiiiii)(l,c,h,v,b,C,A),i.dynCall_vi=(l,c)=>(i.dynCall_vi=P.dynCall_vi)(l,c),i.dynCall_iiii=(l,c,h,v)=>(i.dynCall_iiii=P.dynCall_iiii)(l,c,h,v),i.dynCall_i=l=>(i.dynCall_i=P.dynCall_i)(l),i.dynCall_viiiiiiii=(l,c,h,v,b,C,A,R,U)=>(i.dynCall_viiiiiiii=P.dynCall_viiiiiiii)(l,c,h,v,b,C,A,R,U),i.dynCall_viii=(l,c,h,v)=>(i.dynCall_viii=P.dynCall_viii)(l,c,h,v),i.dynCall_viijj=(l,c,h,v,b)=>(i.dynCall_viijj=P.dynCall_viijj)(l,c,h,v,b),i.dynCall_viiiiii=(l,c,h,v,b,C,A)=>(i.dynCall_viiiiii=P.dynCall_viiiiii)(l,c,h,v,b,C,A),i.dynCall_viiii=(l,c,h,v,b)=>(i.dynCall_viiii=P.dynCall_viiii)(l,c,h,v,b),i.dynCall_viiiii=(l,c,h,v,b,C)=>(i.dynCall_viiiii=P.dynCall_viiiii)(l,c,h,v,b,C),i.dynCall_vfiii=(l,c,h,v,b)=>(i.dynCall_vfiii=P.dynCall_vfiii)(l,c,h,v,b),i.dynCall_viiiiff=(l,c,h,v,b,C,A)=>(i.dynCall_viiiiff=P.dynCall_viiiiff)(l,c,h,v,b,C,A),i.dynCall_viiiiiff=(l,c,h,v,b,C,A,R)=>(i.dynCall_viiiiiff=P.dynCall_viiiiiff)(l,c,h,v,b,C,A,R),i.dynCall_ffff=(l,c,h,v)=>(i.dynCall_ffff=P.dynCall_ffff)(l,c,h,v),i.dynCall_viiff=(l,c,h,v,b)=>(i.dynCall_viiff=P.dynCall_viiff)(l,c,h,v,b),i.dynCall_fffffff=(l,c,h,v,b,C,A)=>(i.dynCall_fffffff=P.dynCall_fffffff)(l,c,h,v,b,C,A),i.dynCall_jjjjjjj=(l,c,h,v,b,C,A)=>(i.dynCall_jjjjjjj=P.dynCall_jjjjjjj)(l,c,h,v,b,C,A),i.dynCall_jjjjjj=(l,c,h,v,b,C)=>(i.dynCall_jjjjjj=P.dynCall_jjjjjj)(l,c,h,v,b,C),i.dynCall_iijjii=(l,c,h,v,b,C)=>(i.dynCall_iijjii=P.dynCall_iijjii)(l,c,h,v,b,C),i.dynCall_viiiiiiiiiiiii=(l,c,h,v,b,C,A,R,U,q,J,ae,fe,ye)=>(i.dynCall_viiiiiiiiiiiii=P.dynCall_viiiiiiiiiiiii)(l,c,h,v,b,C,A,R,U,q,J,ae,fe,ye),i.dynCall_viiiiiiiiii=(l,c,h,v,b,C,A,R,U,q,J)=>(i.dynCall_viiiiiiiiii=P.dynCall_viiiiiiiiii)(l,c,h,v,b,C,A,R,U,q,J),i.dynCall_viiiiiiiiiii=(l,c,h,v,b,C,A,R,U,q,J,ae)=>(i.dynCall_viiiiiiiiiii=P.dynCall_viiiiiiiiiii)(l,c,h,v,b,C,A,R,U,q,J,ae),i.dynCall_viiiiiiiiiiii=(l,c,h,v,b,C,A,R,U,q,J,ae,fe)=>(i.dynCall_viiiiiiiiiiii=P.dynCall_viiiiiiiiiiii)(l,c,h,v,b,C,A,R,U,q,J,ae,fe),i.dynCall_viiiiiiiiiiiiiiiiii=(l,c,h,v,b,C,A,R,U,q,J,ae,fe,ye,je,$t,fr,un,ki)=>(i.dynCall_viiiiiiiiiiiiiiiiii=P.dynCall_viiiiiiiiiiiiiiiiii)(l,c,h,v,b,C,A,R,U,q,J,ae,fe,ye,je,$t,fr,un,ki),i.dynCall_viiiiiiiii=(l,c,h,v,b,C,A,R,U,q)=>(i.dynCall_viiiiiiiii=P.dynCall_viiiiiiiii)(l,c,h,v,b,C,A,R,U,q),i.dynCall_viiiiiiiiiiiiiiiiiii=(l,c,h,v,b,C,A,R,U,q,J,ae,fe,ye,je,$t,fr,un,ki,Yo)=>(i.dynCall_viiiiiiiiiiiiiiiiiii=P.dynCall_viiiiiiiiiiiiiiiiiii)(l,c,h,v,b,C,A,R,U,q,J,ae,fe,ye,je,$t,fr,un,ki,Yo),i.dynCall_viiiiiii=(l,c,h,v,b,C,A,R)=>(i.dynCall_viiiiiii=P.dynCall_viiiiiii)(l,c,h,v,b,C,A,R),i.dynCall_viiiiiiiiiiiiiii=(l,c,h,v,b,C,A,R,U,q,J,ae,fe,ye,je,$t)=>(i.dynCall_viiiiiiiiiiiiiii=P.dynCall_viiiiiiiiiiiiiii)(l,c,h,v,b,C,A,R,U,q,J,ae,fe,ye,je,$t),i.dynCall_jiji=(l,c,h,v)=>(i.dynCall_jiji=P.dynCall_jiji)(l,c,h,v),i.dynCall_v=l=>(i.dynCall_v=P.dynCall_v)(l),i.dynCall_iidiiii=(l,c,h,v,b,C,A)=>(i.dynCall_iidiiii=P.dynCall_iidiiii)(l,c,h,v,b,C,A),i.dynCall_iiiiiiiii=(l,c,h,v,b,C,A,R,U)=>(i.dynCall_iiiiiiiii=P.dynCall_iiiiiiiii)(l,c,h,v,b,C,A,R,U),i.dynCall_iiij=(l,c,h,v)=>(i.dynCall_iiij=P.dynCall_iiij)(l,c,h,v),i.dynCall_iiiiiiiiii=(l,c,h,v,b,C,A,R,U,q)=>(i.dynCall_iiiiiiiiii=P.dynCall_iiiiiiiiii)(l,c,h,v,b,C,A,R,U,q),i.dynCall_iiiiiiiiiiiii=(l,c,h,v,b,C,A,R,U,q,J,ae,fe)=>(i.dynCall_iiiiiiiiiiiii=P.dynCall_iiiiiiiiiiiii)(l,c,h,v,b,C,A,R,U,q,J,ae,fe),i.dynCall_iiiiiiiiiii=(l,c,h,v,b,C,A,R,U,q,J)=>(i.dynCall_iiiiiiiiiii=P.dynCall_iiiiiiiiiii)(l,c,h,v,b,C,A,R,U,q,J),i.dynCall_ji=(l,c)=>(i.dynCall_ji=P.dynCall_ji)(l,c),i.dynCall_iijii=(l,c,h,v,b)=>(i.dynCall_iijii=P.dynCall_iijii)(l,c,h,v,b),i.dynCall_vij=(l,c,h)=>(i.dynCall_vij=P.dynCall_vij)(l,c,h),i.dynCall_viiijii=(l,c,h,v,b,C,A)=>(i.dynCall_viiijii=P.dynCall_viiijii)(l,c,h,v,b,C,A),i.dynCall_viijiiiiiiiiiiiiii=(l,c,h,v,b,C,A,R,U,q,J,ae,fe,ye,je,$t,fr,un)=>(i.dynCall_viijiiiiiiiiiiiiii=P.dynCall_viijiiiiiiiiiiiiii)(l,c,h,v,b,C,A,R,U,q,J,ae,fe,ye,je,$t,fr,un),i.dynCall_viiiji=(l,c,h,v,b,C)=>(i.dynCall_viiiji=P.dynCall_viiiji)(l,c,h,v,b,C),i.dynCall_fiii=(l,c,h,v)=>(i.dynCall_fiii=P.dynCall_fiii)(l,c,h,v),i.dynCall_viijii=(l,c,h,v,b,C)=>(i.dynCall_viijii=P.dynCall_viijii)(l,c,h,v,b,C),i.dynCall_viij=(l,c,h,v)=>(i.dynCall_viij=P.dynCall_viij)(l,c,h,v),i.dynCall_jiij=(l,c,h,v)=>(i.dynCall_jiij=P.dynCall_jiij)(l,c,h,v),i.dynCall_fi=(l,c)=>(i.dynCall_fi=P.dynCall_fi)(l,c),i.dynCall_fii=(l,c,h)=>(i.dynCall_fii=P.dynCall_fii)(l,c,h),i.dynCall_jii=(l,c,h)=>(i.dynCall_jii=P.dynCall_jii)(l,c,h),i.dynCall_dii=(l,c,h)=>(i.dynCall_dii=P.dynCall_dii)(l,c,h),i.dynCall_fiiii=(l,c,h,v,b)=>(i.dynCall_fiiii=P.dynCall_fiiii)(l,c,h,v,b),i.dynCall_fif=(l,c,h)=>(i.dynCall_fif=P.dynCall_fif)(l,c,h),i.dynCall_jfi=(l,c,h)=>(i.dynCall_jfi=P.dynCall_jfi)(l,c,h),i.dynCall_viiiiiiiiiiiiii=(l,c,h,v,b,C,A,R,U,q,J,ae,fe,ye,je)=>(i.dynCall_viiiiiiiiiiiiii=P.dynCall_viiiiiiiiiiiiii)(l,c,h,v,b,C,A,R,U,q,J,ae,fe,ye,je),i.dynCall_viiiiiiiiiiiiiiiiiiii=(l,c,h,v,b,C,A,R,U,q,J,ae,fe,ye,je,$t,fr,un,ki,Yo,hx)=>(i.dynCall_viiiiiiiiiiiiiiiiiiii=P.dynCall_viiiiiiiiiiiiiiiiiiii)(l,c,h,v,b,C,A,R,U,q,J,ae,fe,ye,je,$t,fr,un,ki,Yo,hx),i.dynCall_viiiiiiiiiiiiiiii=(l,c,h,v,b,C,A,R,U,q,J,ae,fe,ye,je,$t,fr)=>(i.dynCall_viiiiiiiiiiiiiiii=P.dynCall_viiiiiiiiiiiiiiii)(l,c,h,v,b,C,A,R,U,q,J,ae,fe,ye,je,$t,fr),i.dynCall_iif=(l,c,h)=>(i.dynCall_iif=P.dynCall_iif)(l,c,h),i.dynCall_jiiii=(l,c,h,v,b)=>(i.dynCall_jiiii=P.dynCall_jiiii)(l,c,h,v,b),i.dynCall_jiii=(l,c,h,v)=>(i.dynCall_jiii=P.dynCall_jiii)(l,c,h,v),i.dynCall_viif=(l,c,h,v)=>(i.dynCall_viif=P.dynCall_viif)(l,c,h,v),i.dynCall_viiij=(l,c,h,v,b)=>(i.dynCall_viiij=P.dynCall_viiij)(l,c,h,v,b),i.dynCall_viiiijii=(l,c,h,v,b,C,A,R)=>(i.dynCall_viiiijii=P.dynCall_viiiijii)(l,c,h,v,b,C,A,R),i.dynCall_iiiiij=(l,c,h,v,b,C)=>(i.dynCall_iiiiij=P.dynCall_iiiiij)(l,c,h,v,b,C),i.dynCall_iiiiid=(l,c,h,v,b,C)=>(i.dynCall_iiiiid=P.dynCall_iiiiid)(l,c,h,v,b,C),i.dynCall_iiiiijj=(l,c,h,v,b,C,A)=>(i.dynCall_iiiiijj=P.dynCall_iiiiijj)(l,c,h,v,b,C,A),i.dynCall_iiiiiijj=(l,c,h,v,b,C,A,R)=>(i.dynCall_iiiiiijj=P.dynCall_iiiiiijj)(l,c,h,v,b,C,A,R);var sf=l=>(sf=P.wb)(l),of=()=>(of=P.xb)(),lf=l=>(lf=P.yb)(l),uf=()=>(uf=P.zb)();return function l(){if(0<an)sn=l;else if(d)n(i),Ae();else{for(;0<Io.length;)Io.shift()(i);0<an?sn=l:(i.calledRun=!0,O||(Ae(),n(i)))}}(),i.PTR_SIZE=4,s},Nv=Il,xh=(t=(e=globalThis.self)==null?void 0:e.name)==null?void 0:t.startsWith("em-pthread"),xh&&Il()}),zl,fd,bh,xt,Rv,ss,kh,Sh,Al,Ch,Ol,Dv,Nl,Mv,Ec=V(()=>{Cc(),zl=typeof location>"u"?void 0:location.origin,fd=import.meta.url>"file:"&&import.meta.url<"file;",bh=()=>{{if(fd){let e=URL;return new URL(new e("ort.bundle.min.mjs",import.meta.url).href,zl).href}return import.meta.url}},xt=bh(),Rv=()=>{if(xt&&!xt.startsWith("blob:"))return xt.substring(0,xt.lastIndexOf("/")+1)},ss=(e,t)=>{try{let r=t??xt;return(r?new URL(e,r):new URL(e)).origin===zl}catch{return!1}},kh=(e,t)=>{let r=t??xt;try{return(r?new URL(e,r):new URL(e)).href}catch{return}},Sh=(e,t)=>`${t??"./"}${e}`,Al=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},Ch=async e=>(await import(e)).default,Ol=(_k(),Sa(zv)).default,Dv=async()=>{if(!xt)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(ss(xt))return[void 0,Ol()];let e=await Al(xt);return[e,Ol(e)]},Nl=(wk(),Sa(Ov)).default,Mv=async(e,t,r,n)=>{let a=Nl&&!(e||t);if(a)if(xt)a=ss(xt);else if(n&&!r)a=!0;else throw new Error("cannot determine the script source URL.");if(a)return[void 0,Nl];{let i="ort-wasm-simd-threaded.jsep.mjs",s=e??kh(i,t),o=r&&s&&!ss(s,t),u=o?await Al(s):s??Sh(i,t);return[o?u:void 0,await Ch(u)]}}}),Rl,os,Ri,Dl,Eh,Th,Ih,Tc,ke,Mn=V(()=>{Ec(),os=!1,Ri=!1,Dl=!1,Eh=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},Th=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},Ih=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},Tc=async e=>{if(os)return Promise.resolve();if(Ri)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Dl)throw new Error("previous call to 'initializeWebAssembly()' failed.");Ri=!0;let t=e.initTimeout,r=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!Ih())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!Th())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let n=Eh();r>1&&!n&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);let a=e.wasmPaths,i=typeof a=="string"?a:void 0,s=a==null?void 0:a.mjs,o=(s==null?void 0:s.href)??s,u=a==null?void 0:a.wasm,d=(u==null?void 0:u.href)??u,p=e.wasmBinary,[f,m]=await Mv(o,i,r>1,!!p||!!d),_=!1,w=[];if(t>0&&w.push(new Promise($=>{setTimeout(()=>{_=!0,$()},t)})),w.push(new Promise(($,S)=>{let y={numThreads:r};if(p)y.wasmBinary=p;else if(d||i)y.locateFile=g=>d??i+g;else if(o&&o.indexOf("blob:")!==0)y.locateFile=g=>new URL(g,o).href;else if(f){let g=Rv();g&&(y.locateFile=x=>g+x)}m(y).then(g=>{Ri=!1,os=!0,Rl=g,$(),f&&URL.revokeObjectURL(f)},g=>{Ri=!1,Dl=!0,S(g)})})),await Promise.race(w),_)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},ke=()=>{if(os&&Rl)return Rl;throw new Error("WebAssembly is not initialized yet.")}}),Kt,no,$e,Ic=V(()=>{Mn(),Kt=(e,t)=>{let r=ke(),n=r.lengthBytesUTF8(e)+1,a=r._malloc(n);return r.stringToUTF8(e,a,n),t.push(a),a},no=(e,t,r,n)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([a,i])=>{let s=t?t+a:a;if(typeof i=="object")no(i,s+".",r,n);else if(typeof i=="string"||typeof i=="number")n(s,i.toString());else if(typeof i=="boolean")n(s,i?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof i}`)})},$e=e=>{let t=ke(),r=t.stackSave();try{let n=t.PTR_SIZE,a=t.stackAlloc(2*n);t._OrtGetLastError(a,a+n);let i=Number(t.getValue(a,n===4?"i32":"i64")),s=t.getValue(a+n,"*"),o=s?t.UTF8ToString(s):"";throw new Error(`${e} ERROR_CODE: ${i}, ERROR_MESSAGE: ${o}`)}finally{t.stackRestore(r)}}}),Pv,$k=V(()=>{Mn(),Ic(),Pv=e=>{let t=ke(),r=0,n=[],a=e||{};try{if((e==null?void 0:e.logSeverityLevel)===void 0)a.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if((e==null?void 0:e.logVerbosityLevel)===void 0)a.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);(e==null?void 0:e.terminate)===void 0&&(a.terminate=!1);let i=0;return(e==null?void 0:e.tag)!==void 0&&(i=Kt(e.tag,n)),r=t._OrtCreateRunOptions(a.logSeverityLevel,a.logVerbosityLevel,!!a.terminate,i),r===0&&$e("Can't create run options."),(e==null?void 0:e.extra)!==void 0&&no(e.extra,"",new WeakSet,(s,o)=>{let u=Kt(s,n),d=Kt(o,n);t._OrtAddRunConfigEntry(r,u,d)!==0&&$e(`Can't set a run config entry: ${s} - ${o}.`)}),[r,n]}catch(i){throw r!==0&&t._OrtReleaseRunOptions(r),n.forEach(s=>t._free(s)),i}}}),zh,Ah,Oh,Di,Nh,Bv,xk=V(()=>{Mn(),Ic(),zh=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},Ah=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},Oh=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},Di=(e,t,r,n)=>{let a=Kt(t,n),i=Kt(r,n);ke()._OrtAddSessionConfigEntry(e,a,i)!==0&&$e(`Can't set a session config entry: ${t} - ${r}.`)},Nh=async(e,t,r)=>{for(let n of t){let a=typeof n=="string"?n:n.name,i=[];switch(a){case"webnn":if(a="WEBNN",typeof n!="string"){let p=n==null?void 0:n.deviceType;p&&Di(e,"deviceType",p,r)}break;case"webgpu":if(a="JS",typeof n!="string"){let p=n;if(p!=null&&p.preferredLayout){if(p.preferredLayout!=="NCHW"&&p.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${p.preferredLayout}`);Di(e,"preferredLayout",p.preferredLayout,r)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${a}`)}let s=Kt(a,r),o=i.length,u=0,d=0;if(o>0){u=ke()._malloc(o*ke().PTR_SIZE),r.push(u),d=ke()._malloc(o*ke().PTR_SIZE),r.push(d);for(let p=0;p<o;p++)ke().setValue(u+p*ke().PTR_SIZE,i[p][0],"*"),ke().setValue(d+p*ke().PTR_SIZE,i[p][1],"*")}await ke()._OrtAppendExecutionProvider(e,s,u,d,o)!==0&&$e(`Can't append execution provider: ${a}.`)}},Bv=async e=>{let t=ke(),r=0,n=[],a=e||{};Oh(a);try{let i=zh(a.graphOptimizationLevel??"all"),s=Ah(a.executionMode??"sequential"),o=typeof a.logId=="string"?Kt(a.logId,n):0,u=a.logSeverityLevel??2;if(!Number.isInteger(u)||u<0||u>4)throw new Error(`log severity level is not valid: ${u}`);let d=a.logVerbosityLevel??0;if(!Number.isInteger(d)||d<0||d>4)throw new Error(`log verbosity level is not valid: ${d}`);let p=typeof a.optimizedModelFilePath=="string"?Kt(a.optimizedModelFilePath,n):0;if(r=t._OrtCreateSessionOptions(i,!!a.enableCpuMemArena,!!a.enableMemPattern,s,!!a.enableProfiling,0,o,u,d,p),r===0&&$e("Can't create session options."),a.executionProviders&&await Nh(r,a.executionProviders,n),a.enableGraphCapture!==void 0){if(typeof a.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${a.enableGraphCapture}`);Di(r,"enableGraphCapture",a.enableGraphCapture.toString(),n)}if(a.freeDimensionOverrides)for(let[f,m]of Object.entries(a.freeDimensionOverrides)){if(typeof f!="string")throw new Error(`free dimension override name must be a string: ${f}`);if(typeof m!="number"||!Number.isInteger(m)||m<0)throw new Error(`free dimension override value must be a non-negative integer: ${m}`);let _=Kt(f,n);t._OrtAddFreeDimensionOverride(r,_,m)!==0&&$e(`Can't set a free dimension override: ${f} - ${m}.`)}return a.extra!==void 0&&no(a.extra,"",new WeakSet,(f,m)=>{Di(r,f,m,n)}),[r,n]}catch(i){throw r!==0&&t._OrtReleaseSessionOptions(r)!==0&&$e("Can't release session options."),n.forEach(s=>t._free(s)),i}}}),yn,yr,vn,Eo,io,zc,Ac,hd,se=V(()=>{yn=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},yr=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},vn=(e,t)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],n=typeof t=="number"?t:t.reduce((a,i)=>a*i,1);return r>0?Math.ceil(n*r):void 0},Eo=e=>{switch(e){case"float16":return typeof Float16Array<"u"&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},io=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},zc=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Ac=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",hd=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),Oc,Lv=V(()=>{Cc(),Oc=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let r=t.headers.get("Content-Length"),n=r?parseInt(r,10):0;if(n<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let a=t.body.getReader(),i;try{i=new ArrayBuffer(n)}catch(o){if(o instanceof RangeError){let u=Math.ceil(n/65536);i=new WebAssembly.Memory({initial:u,maximum:u}).buffer}else throw o}let s=0;for(;;){let{done:o,value:u}=await a.read();if(o)break;let d=u.byteLength;new Uint8Array(i,s,d).set(u),s+=d}return new Uint8Array(i,0,n)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),Rh,Dh,Mh,Ph,Nc,Bh,he,Er=V(()=>{se(),Rh=["V","I","W","E","F"],Dh=(e,t)=>{console.log(`[${Rh[e]},${new Date().toISOString()}]${t}`)},Nc=(e,t)=>{Mh=e,Ph=t},Bh=(e,t)=>{let r=io(e),n=io(Mh);r>=n&&Dh(r,typeof t=="function"?t():t)},he=(...e)=>{Ph&&Bh(...e)}}),Lh,hi,D,ao,Uv,jv,Wv,de=V(()=>{Lh=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},hi=class{static calcShape(e,t,r=!1){let n=e.length,a=t.length;if(n===0)return t;if(a===0)return e;let i=Math.max(e.length,t.length),s=new Array(i);if(r){if(n<2||a<2)return;let o=Lh.calcMatMulShape([e[n-2],e[n-1]],[t[a-2],t[a-1]]);if(o===void 0)return;[s[i-2],s[i-1]]=o}for(let o=r?3:1;o<=i;o++){let u=n-o<0?1:e[n-o],d=a-o<0?1:t[a-o];if(u!==d&&u>1&&d>1)return;let p=Math.max(u,d);if(u&&d)s[i-o]=Math.max(u,d);else{if(p>1)return;s[i-o]=0}}return s}static isValidBroadcast(e,t){let r=e.length,n=t.length;if(r>n)return!1;for(let a=1;a<=r;a++)if(e[r-a]!==1&&e[r-a]!==t[n-a])return!1;return!0}},D=class zs{static size(t){return zs.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,r=4){let n=t.length;if(n===0)return[];let a=new Array(n),i=n-1;for(;i>=0;){if(t[i]%r===0){a[i]=t[i]/r;break}if(r%t[i]!==0)throw new Error("cannot convert shape");a[i]=1,r/=t[i],i--}for(i--;i>=0;i--)a[i]=t[i];return a}static sizeFromDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return zs.getSizeFromDimensionRange(t,r,t.length)}static sizeToDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${t.length} dimensions.`);return zs.getSizeFromDimensionRange(t,0,r)}static getSizeFromDimensionRange(t,r,n){let a=1;for(let i=r;i<n;i++){if(t[i]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");a*=Number(t[i])}return a}static computeStrides(t){let r=t.length;if(r===0)return[];if(r===1)return[1];let n=new Array(r);n[r-1]=1,n[r-2]=t[r-1];for(let a=r-3;a>=0;--a)n[a]=n[a+1]*t[a+1];return n}static normalizeAxis(t,r){if(t<-r&&t>=r)throw new Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(n=>this.normalizeAxis(n,r??t.length))}static sortBasedOnPerm(t,r){return r?r.map(n=>t[n]):t.slice().reverse()}static padShape(t,r){let n=t.length;return t.map((a,i)=>a+r[i]+r[i+n])}static areEqual(t,r){return t.length!==r.length?!1:t.every((n,a)=>n===r[a])}},ao=class Qi{static adjustPoolAttributes(t,r,n,a,i,s){if(!t&&n.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let o=0;o<r.length-2;o++)o>=n.length?n.push(r[o+2]):n[o]=r[o+2];for(let o=0;o<n.length;o++)if(o<a.length){if(a[o]<0)throw new Error("strides should be greater than or equal to 1")}else a.push(1);for(let o=0;o<n.length;o++)if(o<i.length){if(i[o]<0)throw new Error("dilations should be greater than or equal to 1")}else i.push(1);for(let o=0;o<n.length*2;o++)if(o<s.length){if(s[o]<0)throw new Error("pad should be greater than or equal to 1")}else s.push(0);for(let o=0;o<n.length;o++){if(n[o]<=0)throw new Error("kernel shapes need to be greater than 0");if(s[o]>=n[o]||s[o+n.length]>=n[o])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,r,n,a,i,s,o){if(o){if(i.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(a.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let u=0;u<t.length-2;u++)Qi.adjustPadAndReturnShape(t[u+(s?1:2)],r[u],n[u],a[u],i,u,u+t.length-2,o)}}static computePoolOutputShape(t,r,n,a,i,s,o){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let u=[r[0],r[1]];return Qi.computeShapeHelper(t,r,u,n,a,i,s,o),u}static computeConvOutputShape(t,r,n,a,i,s,o){if(t.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let u=[t[0],r[0]];return Qi.computeShapeHelper(!1,t,u,n,a,i,s,o),u}static computeShapeHelper(t,r,n,a,i,s,o,u){if(t)for(let d=0;d<r.length-2;d++)n.push(1);else for(let d=0;d<r.length-2;d++)n.push(Qi.adjustPadAndReturnShape(r[d+2],a[d],i[d],s[d],o,d,d+r.length-2,u))}static adjustPadAndReturnShape(t,r,n,a,i,s,o,u){let d=n*(a-1)+1;if(u&&u!=="NOTSET")switch(u){case"VALID":return i[s]=0,i[o]=0,Math.floor((t-d)/r+1);case"SAME_LOWER":case"SAME_UPPER":if(n!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let p=((t+r-1)/r-1)*r+a-t;return i[s]=Math.floor(u==="SAME_LOWER"?(p+1)/2:p/2),i[o]=p-i[s],Math.floor((t+p-a)/r+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+i[s]+i[o]-d)/r+1)}},Uv=class{static getShapeOfGemmResult(e,t,r,n,a){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let i,s,o;t?(i=e[1],s=e[0]):(i=e[0],s=e[1]);let u=-1;if(n?(o=r[0],u=1):(o=r[1],u=0),r[u]!==s)throw new Error("dimension mismatch");if(i<=0||o<=0||s<=0)throw new Error("invalid shape specified");if(a&&!hi.isValidBroadcast(a,[i,o]))throw new Error("gemm: invalid bias shape for broadcast");return[i,o,s]}},jv=-34028234663852886e22,Wv=34028234663852886e22}),Rc,Fv=V(()=>{se(),Rc=(e,t)=>new(Eo(t))(e)}),Ml,md,Pl,Uh,Bl,jh,Ll,Ul,jl,Wh,Vv,bk=V(()=>{se(),Er(),Ml=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),md=(e,t)=>{if(t==="int32")return e;let r=Ml.get(t);if(!r)throw new Error(`WebNN backend does not support data type: ${t}`);let n=r/8;if(e.byteLength%n!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${n}.`);let a=e.byteLength/n,i=new(Eo(t))(e.buffer,e.byteOffset,a);switch(t){case"int64":case"uint64":{let s=new Int32Array(a);for(let o=0;o<a;o++){let u=i[o];if(u>2147483647n||u<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");s[o]=Number(u)}return new Uint8Array(s.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&i.some(o=>o>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let s=Int32Array.from(i,Number);return new Uint8Array(s.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},Pl=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let r=e.byteLength/4,n=new Int32Array(e.buffer,e.byteOffset,r);switch(t){case"int64":{let a=BigInt64Array.from(n,BigInt);return new Uint8Array(a.buffer)}case"uint64":{if(n.some(i=>i<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let a=BigUint64Array.from(n,BigInt);return new Uint8Array(a.buffer)}case"int8":{if(n.some(i=>i<-128||i>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let a=Int8Array.from(n,Number);return new Uint8Array(a.buffer)}case"uint8":{if(n.some(a=>a<0||a>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(n,Number)}case"uint32":{if(n.some(i=>i<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let a=Uint32Array.from(n,Number);return new Uint8Array(a.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},Uh=1,Bl=()=>Uh++,jh=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),Ll=(e,t)=>{let r=Ml.get(e);if(!r)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((n,a)=>n*a)*r/8):0},Ul=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:r,tensor:n,dataType:a,shape:i,fallbackDataType:s}=e;this.sessionId=t,this.mlContext=r,this.mlTensor=n,this.dataType=a,this.tensorShape=i,this.fallbackDataType=s}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return Ll(this.dataType,this.tensorShape)}destroy(){he("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),r=Pl(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(r);return}else return r.buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,r){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===r.length&&this.tensorShape.every((n,a)=>n===r[a])}setIsDataConverted(e){this.isDataConverted=e}},jl=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,r,n){let a=this.tensorManager.getMLContext(e),i;if(!a.opSupportLimits().input.dataTypes.includes(t)){if(i=jh.get(t),!i||!a.opSupportLimits().input.dataTypes.includes(i))throw new Error(`WebNN backend does not support data type: ${t}`);he("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${i}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(a,t,r))return this.wrapper.tensor;if(n){if(this.wrapper.byteLength!==Ll(t,r))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let s=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,r,s,!0,!0,i),n&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=md(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else he("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){var t,r;if(this.activeUpload){let n=(t=this.wrapper)!=null&&t.isDataConverted?Pl(this.activeUpload,(r=this.wrapper)==null?void 0:r.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(n):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(n);return}else return n.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},Wh=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}reserveTensorId(){let e=Bl();return this.tensorTrackersById.set(e,new jl(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,r,n,a){he("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${r}, shape: ${n}, copyOld: ${a}}`);let i=this.tensorTrackersById.get(t);if(!i)throw new Error("Tensor not found.");return i.ensureTensor(e,r,n,a)}upload(e,t){let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");r.upload(t)}async download(e,t){he("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t==null?void 0:t.byteLength}}`);let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");return r.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,r,n){let a=this.getMLContext(e),i=Bl(),s=new Ul({sessionId:e,context:a,tensor:t,dataType:r,shape:n});return this.tensorTrackersById.set(i,new jl(this,s)),this.externalTensors.add(s),i}async getCachedTensor(e,t,r,n,a,i,s){let o=this.getMLContext(e);for(let[d,p]of this.freeTensors.entries())if(p.canReuseTensor(o,t,r)){he("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${r}`);let f=this.freeTensors.splice(d,1)[0];return f.sessionId=e,f}he("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${r}}`);let u=await o.createTensor({dataType:s??t,shape:r,dimensions:r,usage:n,writable:a,readable:i});return new Ul({sessionId:e,context:o,tensor:u,dataType:t,shape:r,fallbackDataType:s})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},Vv=(...e)=>new Wh(...e)}),Mi,Fh,qv,kk=V(()=>{se(),Mn(),Fv(),bk(),Er(),Mi=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),Fh=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let r=Object.keys(e).sort(),n=Object.keys(t).sort();return r.length===n.length&&r.every((a,i)=>a===n[i]&&e[a]===t[a])},qv=class{constructor(e){this.tensorManager=Vv(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,Nc(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){he("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){he("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let r of t)he("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${r}}`),this.tensorManager.releaseTensorId(r);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let r=this.mlContextCache.findIndex(n=>n.gpuDevice===e);if(r!==-1)return this.mlContextCache[r].mlContext;{let n=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:n}),n}}else if(e===void 0){let r=this.mlContextCache.findIndex(n=>n.options===void 0&&n.gpuDevice===void 0);if(r!==-1)return this.mlContextCache[r].mlContext;{let n=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:n}),n}}let t=this.mlContextCache.findIndex(r=>Fh(r.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:r}),r}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let r=this.sessionIdsByMLContext.get(t);r||(r=new Set,this.sessionIdsByMLContext.set(t,r)),r.add(e),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e);let r=this.sessionIdsByMLContext.get(t);if(r.delete(e),r.size===0){this.sessionIdsByMLContext.delete(t);let n=this.mlContextCache.findIndex(a=>a.mlContext===t);n!==-1&&this.mlContextCache.splice(n,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){he("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,r,n,a){let i=Mi.get(r);if(!i)throw new Error(`Unsupported ONNX data type: ${r}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,i,n,a)}async createTemporaryTensor(e,t,r){he("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${r}}`);let n=Mi.get(t);if(!n)throw new Error(`Unsupported ONNX data type: ${t}`);let a=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,a,n,r,!1);let i=this.temporarySessionTensorIds.get(e);return i?i.push(a):this.temporarySessionTensorIds.set(e,[a]),a}uploadTensor(e,t){if(!ke().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");he("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let r=await this.tensorManager.download(e);return Rc(r,t)}}registerMLTensor(e,t,r,n){let a=Mi.get(r);if(!a)throw new Error(`Unsupported ONNX data type: ${r}`);let i=this.tensorManager.registerTensor(e,t,a,n);return he("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${a}, dimensions: ${n}} -> {tensorId: ${i}}`),i}registerMLConstant(e,t,r,n,a,i,s=!1){if(!i)throw new Error("External mounted files are not available.");let o=e;e.startsWith("./")&&(o=e.substring(2));let u=i.get(o);if(!u)throw new Error(`File with name ${o} not found in preloaded files.`);if(t+r>u.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let d=u.slice(t,t+r).buffer,p;switch(a.dataType){case"float32":p=new Float32Array(d);break;case"float16":p=typeof Float16Array<"u"&&Float16Array.from?new Float16Array(d):new Uint16Array(d);break;case"int32":p=new Int32Array(d);break;case"uint32":p=new Uint32Array(d);break;case"int64":if(s){let f=md(new Uint8Array(d),"int64");p=new Int32Array(f.buffer),a.dataType="int32"}else p=new BigInt64Array(d);break;case"uint64":p=new BigUint64Array(d);break;case"int8":p=new Int8Array(d);break;case"int4":case"uint4":case"uint8":p=new Uint8Array(d);break;default:throw new Error(`Unsupported data type: ${a.dataType} in creating WebNN Constant from external data.`)}return he("verbose",()=>`[WebNN] registerMLConstant {dataType: ${a.dataType}, shape: ${a.shape}}} ${s?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),n.constant(a,p)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let r=this.sessionGraphInputs.get(e);return r?r.includes(t):!1}isGraphOutput(e,t){let r=this.sessionGraphOutputs.get(e);return r?r.includes(t):!1}isGraphInputOutputTypeSupported(e,t,r=!0){let n=this.mlContextBySessionId.get(e),a=Mi.get(yn(t));return typeof a>"u"?!1:r?!!(n!=null&&n.opSupportLimits().input.dataTypes.includes(a)):!!(n!=null&&n.opSupportLimits().output.dataTypes.includes(a))}flush(){}}}),Dc=V(()=>{}),Wl,ls,us,Vh,qh,Fl,gd,Hh,Hv,Sk=V(()=>{Er(),Dc(),Wl=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),ls=[],us=e=>Math.ceil(Number(e)/16)*16,Vh=e=>{for(let t=0;t<ls.length;t++){let r=ls[t];if(e<=r)return r}return Math.ceil(e/16)*16},qh=1,Fl=()=>qh++,gd=async(e,t,r,n)=>{let a=us(r),i=e.device.createBuffer({size:a,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let s=e.getCommandEncoder();e.endComputePass(),s.copyBufferToBuffer(t,0,i,0,a),e.flush(),await i.mapAsync(GPUMapMode.READ);let o=i.getMappedRange();if(n){let u=n();return u.set(new Uint8Array(o,0,r)),u}else return new Uint8Array(o.slice(0,r))}finally{i.destroy()}},Hh=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of Wl)ls.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let r=t.buffer,n=t.byteOffset,a=t.byteLength,i=us(a),s=this.storageCache.get(e);if(!s)throw new Error("gpu data for uploading does not exist");if(Number(s.originalSize)!==a)throw new Error(`inconsistent data size. gpu data size=${s.originalSize}, data size=${a}`);let o=this.backend.device.createBuffer({mappedAtCreation:!0,size:i,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),u=o.getMappedRange();new Uint8Array(u).set(new Uint8Array(r,n,a)),o.unmap();let d=this.backend.device.createCommandEncoder();d.copyBufferToBuffer(o,0,s.gpuData.buffer,0,i),this.backend.device.queue.submit([d.finish()]),o.destroy(),he("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("source gpu data for memcpy does not exist");let n=this.storageCache.get(t);if(!n)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==n.originalSize)throw new Error("inconsistent source and destination gpu data size");let a=us(r.originalSize),i=this.backend.getCommandEncoder();this.backend.endComputePass(),i.copyBufferToBuffer(r.gpuData.buffer,0,n.gpuData.buffer,0,a)}registerExternalBuffer(e,t,r){let n;if(r){if(n=r[0],e===r[1])return he("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${n}, buffer is the same, skip.`),n;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else n=Fl();return this.storageCache.set(n,{gpuData:{id:n,type:0,buffer:e},originalSize:t}),he("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${n}, registered.`),n}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),he("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=Vh(e),n,a=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,i=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(a||i){let o=(a?this.freeBuffers:this.freeUniformBuffers).get(r);o?o.length>0?n=o.pop():n=this.backend.device.createBuffer({size:r,usage:t}):n=this.backend.device.createBuffer({size:r,usage:t})}else n=this.backend.device.createBuffer({size:r,usage:t});let s={id:Fl(),type:0,buffer:n};return this.storageCache.set(s.id,{gpuData:s,originalSize:Number(e)}),he("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${s.id}`),s}get(e){var t;return(t=this.storageCache.get(e))==null?void 0:t.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,r=this.storageCache.get(t);if(!r){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return he("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${r.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(r.gpuData.buffer),r.originalSize}async download(e,t){let r=this.storageCache.get(Number(e));if(!r)throw new Error("data does not exist");await gd(this.backend,r.gpuData.buffer,r.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=Wl.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(he("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(r=>{r.gpuData.buffer.destroy()}),this.storageCache=new Map)}},Hv=(...e)=>new Hh(...e)}),Gh,_e,Pe=V(()=>{Gh=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},_e=e=>new Gh(e)}),mi,ds,qe,rt,ie,Ne,yd,ei,Jr,ne,Pi,B,ee,Gv,Mc,Kh,Kv,ce=V(()=>{se(),de(),mi=64,ds=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},qe=(e,t=1)=>{let r=ds(e,t);return typeof r=="string"?r:r[0]},rt=(e,t=1)=>{let r=ds(e,t);return typeof r=="string"?r:r[1]},ie=(...e)=>{let t=[];return e.forEach(r=>{r.length!==0&&t.push({type:12,data:r},{type:12,data:D.computeStrides(r)})}),t},Ne=e=>e%4===0?4:e%2===0?2:1,yd=(e="f32",t,r="0")=>!t||t===1?`${e}(${r})`:`vec${t}<${e}>(${r})`,ei=(e,t,r)=>e==="f32"?r:t===1?`f32(${r})`:`vec${t}<f32>(${r})`,Jr=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,ne=(e,t,r,n)=>e.startsWith("uniforms.")&&r>4?typeof t=="string"?n==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:n==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:r>1?`${e}[${t}]`:e,Pi=(e,t,r,n,a)=>{let i=typeof r=="number",s=i?r:r.length,o=[...new Array(s).keys()],u=s<2?"u32":s<=4?`vec${s}<u32>`:`array<u32, ${s}>`,d=ds(t,a),p=typeof d=="string"?d:d[1],f=typeof d=="string"?d:d[0],m={indices:u,value:p,storage:f,tensor:t},_=O=>typeof O=="string"?O:`${O}u`,w={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},$=i?"uniforms.":"",S=`${$}${e}_shape`,y=`${$}${e}_strides`,g="";for(let O=0;O<s-1;O++)g+=`
    let dim${O} = current / ${ne(y,O,s)};
    let rest${O} = current % ${ne(y,O,s)};
    indices[${O}] = dim${O};
    current = rest${O};
    `;g+=`indices[${s-1}] = current;`;let x=s<2?"":`
  fn o2i_${e}(offset: u32) -> ${m.indices} {
    var indices: ${m.indices};
    var current = offset;
    ${g}
    return indices;
  }`,k=O=>(w.offsetToIndices=!0,s<2?O:`o2i_${e}(${O})`),E=[];if(s>=2)for(let O=s-1;O>=0;O--)E.push(`${ne(y,O,s)} * (indices[${O}])`);let T=s<2?"":`
  fn i2o_${e}(indices: ${m.indices}) -> u32 {
    return ${E.join("+")};
  }`,I=O=>(w.indicesToOffset=!0,s<2?O:`i2o_${e}(${O})`),z=(...O)=>s===0?"0u":`${m.indices}(${O.map(_).join(",")})`,N=(O,W)=>s<2?`${O}`:`${ne(O,W,s)}`,L=(O,W,K)=>s<2?`${O}=${K};`:`${ne(O,W,s)}=${K};`,X={},Q=(O,W)=>{w.broadcastedIndicesToOffset=!0;let K=`${W.name}broadcastedIndicesTo${e}Offset`;if(K in X)return`${K}(${O})`;let te=[];for(let ze=s-1;ze>=0;ze--){let He=W.indicesGet("outputIndices",ze+W.rank-s);te.push(`${N(y,ze)} * (${He} % ${N(S,ze)})`)}return X[K]=`fn ${K}(outputIndices: ${W.type.indices}) -> u32 {
             return ${te.length>0?te.join("+"):"0u"};
           }`,`${K}(${O})`},G=(O,W)=>(()=>{if(m.storage===m.value)return`${e}[${O}]=${W};`;if(m.storage==="vec2<u32>"&&m.value==="i32")return`${e}[${O}]=vec2<u32>(u32(${W}), select(0u, 0xFFFFFFFFu, ${W} < 0));`;if(m.storage==="vec2<u32>"&&m.value==="u32")return`${e}[${O}]=vec2<u32>(u32(${W}), 0u);`;if(m.storage==="u32"&&m.value==="vec4<bool>")return`${e}[${O}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${W}));`;throw new Error(`not supported combination of storage type ${m.storage} and value type ${m.value} yet`)})(),pe=O=>(()=>{if(m.storage===m.value)return`${e}[${O}]`;if(m.storage==="vec2<u32>"&&m.value==="i32")return`i32(${e}[${O}].x)`;if(m.storage==="vec2<u32>"&&m.value==="u32")return`u32(${e}[${O}].x)`;if(m.storage==="u32"&&m.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${O}] & 0xFFu), bool(${e}[${O}] & 0xFF00u), bool(${e}[${O}] & 0xFF0000u), bool(${e}[${O}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${m.storage} and value type ${m.value} yet`)})(),oe=s<2?"":`
  fn get_${e}ByIndices(indices: ${m.indices}) -> ${p} {
    return ${pe(`i2o_${e}(indices)`)};
  }`,Y=s<2?"":(()=>{let O=o.map(K=>`d${K}: u32`).join(", "),W=o.map(K=>`d${K}`).join(", ");return`
  fn get_${e}(${O}) -> ${p} {
    return get_${e}ByIndices(${z(W)});
  }`})(),le=(...O)=>{if(O.length!==s)throw new Error(`indices length must be ${s}`);let W=O.map(_).join(",");return s===0?pe("0u"):s===1?pe(W[0]):(w.get=!0,w.getByIndices=!0,w.indicesToOffset=!0,`get_${e}(${W})`)},M=O=>s<2?pe(O):(w.getByIndices=!0,w.indicesToOffset=!0,`get_${e}ByIndices(${O})`),F=s<2?"":`
  fn set_${e}ByIndices(indices: ${m.indices}, value: ${p}) {
    ${G(`i2o_${e}(indices)`,"value")}
  }`,Z=s<2?"":(()=>{let O=o.map(K=>`d${K}: u32`).join(", "),W=o.map(K=>`d${K}`).join(", ");return`
  fn set_${e}(${O}, value: ${p}) {
    set_${e}ByIndices(${z(W)}, value);
  }`})();return{impl:()=>{let O=[],W=!1;return w.offsetToIndices&&(O.push(x),W=!0),w.indicesToOffset&&(O.push(T),W=!0),w.broadcastedIndicesToOffset&&(Object.values(X).forEach(K=>O.push(K)),W=!0),w.set&&(O.push(Z),W=!0),w.setByIndices&&(O.push(F),W=!0),w.get&&(O.push(Y),W=!0),w.getByIndices&&(O.push(oe),W=!0),!i&&W&&O.unshift(`const ${S} = ${m.indices}(${r.join(",")});`,`const ${y} = ${m.indices}(${D.computeStrides(r).join(",")});`),O.join(`
`)},type:m,offsetToIndices:k,indicesToOffset:I,broadcastedIndicesToOffset:Q,indices:z,indicesGet:N,indicesSet:L,set:(...O)=>{if(O.length!==s+1)throw new Error(`indices length must be ${s}`);let W=O[s];if(typeof W!="string")throw new Error("value must be string");let K=O.slice(0,s).map(_).join(",");return s===0?G("0u",W):s===1?G(K[0],W):(w.set=!0,w.setByIndices=!0,w.indicesToOffset=!0,`set_${e}(${K}, ${W})`)},setByOffset:G,setByIndices:(O,W)=>s<2?G(O,W):(w.setByIndices=!0,w.indicesToOffset=!0,`set_${e}ByIndices(${O}, ${W});`),get:le,getByOffset:pe,getByIndices:M,usage:n,name:e,strides:y,shape:S,rank:s}},B=(e,t,r,n=1)=>Pi(e,t,r,"input",n),ee=(e,t,r,n=1)=>Pi(e,t,r,"output",n),Gv=(e,t,r)=>Pi(e,t,r,"atomicOutput",1),Mc=(e,t,r,n=1)=>Pi(e,t,r,"internal",n),Kh=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=mi){let t=typeof e=="number"?e:e[0],r=typeof e=="number"?1:e[1],n=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||n>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${r}, ${n}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*r*n>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${r}, ${n}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let a=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,i=a?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,s=a?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*r*n}u + local_idx;`;return`@compute @workgroup_size(${t}, ${r}, ${n})
  fn main(${i}) {
    ${s}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let r=e.usage==="input"?"read":"read_write",n=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${t}) var<storage, ${r}> ${e.name}: array<${n}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,r=1){return this.uniforms.push({name:e,type:t,length:r}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:r,length:n}of this.uniforms)if(n&&n>4)r==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${r}>, ${Math.ceil(n/8)}>`):e.push(`${t}:array<vec4<${r}>, ${Math.ceil(n/4)}>`);else{let a=n==null||n===1?r:`vec${n}<${r}>`;e.push(`${t}:${a}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},Kv=(e,t)=>new Kh(e,t)}),Qh,Vl,Xh,Yh,Zh,Jh,Et,Qv,Xv,nn=V(()=>{se(),de(),Pe(),ce(),Qh=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},Vl=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),Xh=(e,t)=>D.sortBasedOnPerm(e,Vl(e.length,t)),Yh=(e,t,r,n)=>{let a=`fn perm(i: ${n.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`;for(let i=0;i<t;++i)a+=`a[${e[i]}]=i[${i}];`;return a+="return a;}"},Zh=(e,t)=>{let r=[],n=[];for(let a=0;a<e.length;++a)e[a]!==1&&r.push(e[a]),e[t[a]]!==1&&n.push(t[a]);return{newShape:r,newPerm:n}},Jh=(e,t)=>{let r=0;for(let n=0;n<e.length;++n)if(t[e[n]]!==1){if(e[n]<r)return!1;r=e[n]}return!0},Et=(e,t)=>{let r=e.dataType,n=e.dims.length,a=Vl(n,t),i=Xh(e.dims,a),s=e.dims,o=i,u=n<2||Jh(a,e.dims),d;if(u)return d=w=>{let $=B("input",r,s,4),S=ee("output",r,o,4);return`
  ${w.registerUniform("output_size","u32").declareVariables($,S)}
  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let w=D.size(i);return{outputs:[{dims:i,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(w/64/4)},programUniforms:[{type:12,data:Math.ceil(w/4)}]}},getShaderSource:d};let{newShape:p,newPerm:f}=Zh(e.dims,a),m=D.areEqual(f,[2,3,1]),_=D.areEqual(f,[3,1,2]);if(p.length===2||m||_){s=m?[p[0],p[1]*p[2]]:_?[p[0]*p[1],p[2]]:p,o=[s[1],s[0]];let w=16;return d=$=>{let S=B("a",r,s.length),y=ee("output",r,o.length);return`
  ${$.registerUniform("output_size","u32").declareVariables(S,y)}
  var<workgroup> tile : array<array<${y.type.value}, ${w+1}>, ${w}>;
  ${$.mainStart([w,w,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${w} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${w}u + local_id.x;
    let input_row = workgroup_id_x * ${w}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${S.getByIndices(`${S.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${w}u + local_id.x;
    let output_row = workgroup_id_y * ${w}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${y.setByIndices(`${y.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let $=D.size(i);return{outputs:[{dims:i,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(o[1]/w),y:Math.ceil(o[0]/w)},programUniforms:[{type:12,data:$},...ie(s,o)]}},getShaderSource:d}}return d=w=>{let $=B("a",r,s.length),S=ee("output",r,o.length);return`
  ${w.registerUniform("output_size","u32").declareVariables($,S)}

  ${Yh(a,n,$,S)}

  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${S.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${S.setByOffset("global_idx",$.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let w=D.size(i);return{outputs:[{dims:i,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(w/64)},programUniforms:[{type:12,data:w},...ie(s,o)]}},getShaderSource:d}},Qv=(e,t)=>{Qh(e.inputs,t.perm),e.compute(Et(e.inputs[0],t.perm))},Xv=e=>_e({perm:e.perm})}),em,tm,rm,nm,im,am,sm,om,lm,um,Ut,Yv,Zv,Jv,e_,t_,r_,n_,i_,a_,s_,Ck=V(()=>{se(),de(),ce(),Pc(),nn(),em={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},tm={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},rm={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},nm={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},im=(e,t)=>{let r=[];for(let n=t-e;n<t;++n)r.push(n);return r},am=(e,t)=>{let r=[],n=e.length;for(let i=0;i<n;i++)t.indexOf(i)===-1&&r.push(e[i]);let a=t.map(i=>e[i]);return[r,a]},sm=(e,t)=>{let r=e.length+t.length,n=[],a=0;for(let i=0;i<r;i++)t.indexOf(i)===-1?n.push(e[a++]):n.push(1);return n},om=(e,t)=>{for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0},lm=(e,t)=>{let r=[];if(!om(e,t)){for(let n=0;n<t;++n)e.indexOf(n)===-1&&r.push(n);e.forEach(n=>r.push(n))}return r},um=(e,t,r,n,a,i,s)=>{let o=r[0].dims,u=D.size(i),d=D.size(s),p=B("_A",r[0].dataType,o),f=ee("output",a,i),m=64;u===1&&(m=256);let _=`
          var<workgroup> aBestValues : array<f32, ${m}>;
       `,w=$=>`
        ${$.registerUniform("reduceSize","u32").declareVariables(p,f)}
        ${_}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${$.mainStart(m)}

          let outputIndex = global_idx / ${m};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${rm[n]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${m}) {
           let candidate = f32(${p.getByOffset("offset + k")});
           bestValue = ${em[n]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${m}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${tm[n]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${f.setByOffset("outputIndex",`${n==="mean"?`${f.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${f.type.storage}(${nm[n]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${m}`,inputDependencies:["type"]},getShaderSource:w,getRunData:()=>({outputs:[{dims:i,dataType:a}],dispatchGroup:{x:u},programUniforms:[{type:12,data:d}]})}},Ut=(e,t,r,n)=>{let a=e.inputs.length===1?r:vd(e.inputs,r),i=a.axes;i.length===0&&!a.noopWithEmptyAxes&&(i=e.inputs[0].dims.map((_,w)=>w));let s=D.normalizeAxes(i,e.inputs[0].dims.length),o=s,u=e.inputs[0],d=lm(o,e.inputs[0].dims.length);d.length>0&&(u=e.compute(Et(e.inputs[0],d),{inputs:[0],outputs:[-1]})[0],o=im(o.length,u.dims.length));let[p,f]=am(u.dims,o),m=p;a.keepDims&&(m=sm(p,s)),e.compute(um(t,a.cacheKey,[u],n,e.inputs[0].dataType,m,f),{inputs:[u]})},Yv=(e,t)=>{Ut(e,"ReduceMeanShared",t,"mean")},Zv=(e,t)=>{Ut(e,"ReduceL1Shared",t,"l1")},Jv=(e,t)=>{Ut(e,"ReduceL2Shared",t,"l2")},e_=(e,t)=>{Ut(e,"ReduceLogSumExpShared",t,"logSumExp")},t_=(e,t)=>{Ut(e,"ReduceMaxShared",t,"max")},r_=(e,t)=>{Ut(e,"ReduceMinShared",t,"min")},n_=(e,t)=>{Ut(e,"ReduceProdShared",t,"prod")},i_=(e,t)=>{Ut(e,"ReduceSumShared",t,"sum")},a_=(e,t)=>{Ut(e,"ReduceSumSquareShared",t,"sumSquare")},s_=(e,t)=>{Ut(e,"ReduceLogSumShared",t,"logSum")}}),jt,dm,so,vd,Wt,cm,pm,fm,hm,mm,gm,ym,vm,_m,wm,Ft,o_,l_,u_,d_,c_,p_,f_,h_,m_,g_,Pc=V(()=>{se(),de(),Pe(),ce(),Ck(),jt=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},dm=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],so=(e,t,r,n,a,i,s=!1,o=!1)=>{let u=[],d=r[0].dims,p=d.length,f=D.normalizeAxes(a,p),m=!o&&f.length===0;d.forEach(($,S)=>{m||f.indexOf(S)>=0?s&&u.push(1):u.push($)});let _=u.length,w=D.size(u);return{name:e,shaderCache:t,getShaderSource:$=>{let S=[],y=B("_A",r[0].dataType,p),g=ee("output",i,_),x=n(y,g,f),k=x[2];for(let E=0,T=0;E<p;E++)m||f.indexOf(E)>=0?(s&&T++,k=`for(var j${E}: u32 = 0; j${E} < ${d[E]}; j${E}++) {
                  ${x[2].includes("last_index")?`let last_index = j${E};`:""}
                  ${y.indicesSet("input_indices",E,`j${E}`)}
                  ${k}
                }`):(S.push(`${y.indicesSet("input_indices",E,g.indicesGet("output_indices",T))};`),T++);return`

        ${$.registerUniform("output_size","u32").declareVariables(y,g)}

        ${$.mainStart()}
          ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${y.type.indices};
          let output_indices = ${g.offsetToIndices("global_idx")};

          ${S.join(`
`)}
          ${x[0]}       // init ops for reduce max/min
          ${x[1]}
          ${k}
          ${x[3]}
          ${x.length===4?g.setByOffset("global_idx","value"):x.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:u,dataType:i}],dispatchGroup:{x:Math.ceil(w/64)},programUniforms:[{type:12,data:w},...ie(d,u)]})}},vd=(e,t)=>{let r=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(n=>r.push(Number(n))),_e({axes:r,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},Wt=(e,t,r,n)=>{let a=e.inputs,i=a.length===1?r:vd(a,r);e.compute(so(t,{hint:i.cacheKey,inputDependencies:["rank"]},[a[0]],i.noopWithEmptyAxes&&i.axes.length===0?dm:n,i.axes,a[0].dataType,i.keepDims,i.noopWithEmptyAxes),{inputs:[0]})},cm=(e,t)=>{jt(e.inputs),Wt(e,"ReduceLogSum",t,(r,n)=>[`var value = ${n.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},pm=(e,t)=>{jt(e.inputs),Wt(e,"ReduceL1",t,(r,n)=>[`var value = ${n.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},fm=(e,t)=>{jt(e.inputs),Wt(e,"ReduceL2",t,(r,n)=>[`var t = ${n.type.value}(0); var value = ${n.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},hm=(e,t)=>{jt(e.inputs),Wt(e,"ReduceLogSumExp",t,(r,n)=>[`var value = ${n.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},mm=(e,t)=>{jt(e.inputs),Wt(e,"ReduceMax",t,(r,n,a)=>{let i=[];for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&i.push(r.indicesSet("input_indices",s,0));return[`${i.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},gm=(e,t)=>{jt(e.inputs),Wt(e,"ReduceMean",t,(r,n,a)=>{let i=1;for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&(i*=e.inputs[0].dims[s]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${n.type.value}(sum / ${i});`]})},ym=(e,t)=>{jt(e.inputs),Wt(e,"ReduceMin",t,(r,n,a)=>{let i=[];for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&i.push(`input_indices[${s}] = 0;`);return[`${i.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},vm=(e,t)=>{jt(e.inputs),Wt(e,"ReduceProd",t,(r,n)=>[`var value = ${n.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},_m=(e,t)=>{jt(e.inputs),Wt(e,"ReduceSum",t,(r,n)=>[`var value = ${n.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},wm=(e,t)=>{jt(e.inputs),Wt(e,"ReduceSumSquare",t,(r,n)=>[`var t = ${n.type.value}(0); var value = ${n.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},Ft=(e,t,r)=>{if(t.length===0)return r;let n=1,a=1;for(let i=0;i<t.length;i++)t.indexOf(i)===-1?n*=e[i]:a*=e[i];return a<32&&n>1024},o_=(e,t)=>{Ft(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?gm(e,t):Yv(e,t)},l_=(e,t)=>{Ft(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?pm(e,t):Zv(e,t)},u_=(e,t)=>{Ft(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?fm(e,t):Jv(e,t)},d_=(e,t)=>{Ft(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?hm(e,t):e_(e,t)},c_=(e,t)=>{Ft(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?mm(e,t):t_(e,t)},p_=(e,t)=>{Ft(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ym(e,t):r_(e,t)},f_=(e,t)=>{Ft(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?vm(e,t):n_(e,t)},h_=(e,t)=>{Ft(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?_m(e,t):i_(e,t)},m_=(e,t)=>{Ft(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?wm(e,t):a_(e,t)},g_=(e,t)=>{Ft(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?cm(e,t):s_(e,t)}}),ql,y_,v_,_d,Ek=V(()=>{se(),Pe(),Pc(),ql=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},y_=(e,t)=>{ql(e.inputs);let r=(n,a,i)=>{let s=[];for(let o=0;o<n.rank;o++)(i.indexOf(o)>=0||i.length===0)&&s.push(`input_indices[${o}] = 0;`);return[`${s.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${n.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${n.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",a.setByOffset("global_idx","best_index")]};e.compute(so("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},v_=(e,t)=>{ql(e.inputs);let r=(n,a,i)=>{let s=[];for(let o=0;o<n.rank;o++)(i.indexOf(o)>=0||i.length===0)&&s.push(`input_indices[${o}] = 0;`);return[`${s.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${n.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${n.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",a.setByOffset("global_idx","best_index")]};e.compute(so("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},_d=e=>_e(e)}),$m,cs,xm,bm,km,Ca,Sm,__,Bc=V(()=>{se(),de(),Dc(),ce(),$m=(e,t)=>{let r=e[0],n=e[1],a=e[2],i=e[3],s=e[4],o=e[5];if(s&&o)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let u=r.dims[0],d=r.dims[1],p=r.dims[2];if(a.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(n.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(n.dims[0]!==p)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(a.dims[0]!==n.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let f=a.dims[0]/3,m=f,_=m;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let x of t.qkvHiddenSizes)if(x%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");f=t.qkvHiddenSizes[0],m=t.qkvHiddenSizes[1],_=t.qkvHiddenSizes[2]}let w=d;if(f!==m)throw new Error("qkv_hidden_sizes first element should be same as the second");if(a.dims[0]!==f+m+_)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let $=0;if(s){if(m!==_)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(s.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(s.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(s.dims[1]!==u)throw new Error('Input "past" second dimension must be batch_size');if(s.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(s.dims[4]!==m/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||($=s.dims[3])}let S=w+$,y=-1,g=0;if(i)throw new Error("Mask not supported");if(s)throw new Error("past is not supported");if(o){if(o.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(o.dims[0]!==u||o.dims[1]!==t.numHeads||o.dims[2]!==d||o.dims[3]!==S)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:u,sequenceLength:d,pastSequenceLength:$,kvSequenceLength:w,totalSequenceLength:S,maxSequenceLength:y,inputHiddenSize:p,hiddenSize:f,vHiddenSize:_,headSize:Math.floor(f/t.numHeads),vHeadSize:Math.floor(_/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:g,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},cs=(e,t,r)=>t&&e?`
      let total_sequence_length_input = u32(${t.getByOffset("0")});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${e==null?void 0:e.getByOffset("batchIdx")}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${r?"let past_sequence_length = uniforms.past_sequence_length":""};
    let present_sequence_length = total_sequence_length;
    `,xm=(e,t,r,n,a,i,s,o)=>{let u=Ne(s?1:i),d=64,p=i/u;p<d&&(d=32);let f=Math.ceil(i/u/d),m=[{type:12,data:t},{type:12,data:r},{type:12,data:n},{type:12,data:a},{type:12,data:p},{type:12,data:f}],_=qe(e.dataType,u),w=rt(1,u),$=["type"];s&&$.push("type"),o&&$.push("type");let S=y=>{let g=ee("x",e.dataType,e.dims,u),x=[g],k=s?B("seq_lens",s.dataType,s.dims):void 0;k&&x.push(k);let E=o?B("total_sequence_length_input",o.dataType,o.dims):void 0;E&&x.push(E);let T=rt(e.dataType),I=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${d}>;
  var<workgroup> thread_sum: array<f32, ${d}>;
  ${y.registerUniforms(I).declareVariables(...x)}
  ${y.mainStart([d,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${cs(k,E,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${d}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${s?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${w}(-3.402823e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${w}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(u){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${u}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.402823e+38f);
    for (var i = 0u; i < ${d}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${w}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${w}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(u){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${u}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${d}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${g.type.value}(${T}(1.0) / ${T}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${w}(x[offset + i]);
        x[offset + i] = ${g.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${s?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${g.type.value}(${T}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${d};${_};${u}`,inputDependencies:$},getShaderSource:S,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:a,z:t*r},programUniforms:m})}},bm=(e,t,r,n,a,i,s,o,u)=>{let d=s+i.kvSequenceLength,p=[i.batchSize,i.numHeads,i.sequenceLength,d],f=e>1&&n,m=i.kvNumHeads?i.kvNumHeads:i.numHeads,_=f?[i.batchSize,m,d,i.headSize]:void 0,w=i.nReps?i.nReps:1,$=i.scale===0?1/Math.sqrt(i.headSize):i.scale,S=Ne(i.headSize),y=i.headSize/S,g=12,x={x:Math.ceil(d/g),y:Math.ceil(i.sequenceLength/g),z:i.batchSize*i.numHeads},k=[{type:12,data:i.sequenceLength},{type:12,data:y},{type:12,data:d},{type:12,data:i.numHeads},{type:12,data:i.headSize},{type:1,data:$},{type:12,data:s},{type:12,data:i.kvSequenceLength},{type:12,data:w}],E=f&&n&&D.size(n.dims)>0,T=["type","type"];E&&T.push("type"),a&&T.push("type"),o&&T.push("type"),u&&T.push("type");let I=[{dims:p,dataType:t.dataType,gpuDataType:0}];f&&I.push({dims:_,dataType:t.dataType,gpuDataType:0});let z=N=>{let L=B("q",t.dataType,t.dims,S),X=B("key",r.dataType,r.dims,S),Q=[L,X];if(E){let F=B("past_key",n.dataType,n.dims,S);Q.push(F)}a&&Q.push(B("attention_bias",a.dataType,a.dims));let G=o?B("seq_lens",o.dataType,o.dims):void 0;G&&Q.push(G);let pe=u?B("total_sequence_length_input",u.dataType,u.dims):void 0;pe&&Q.push(pe);let oe=ee("output",t.dataType,p),Y=[oe];f&&Y.push(ee("present_key",t.dataType,_,S));let le=rt(1,S),M=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${g}u;

  var<workgroup> tileQ: array<${L.type.storage}, ${g*g}>;
  var<workgroup> tileK: array<${L.type.storage}, ${g*g}>;
  ${N.registerUniforms(M).declareVariables(...Q,...Y)}
  ${N.mainStart([g,g,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${w===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${w===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${cs(G,pe,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${E&&f?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${f?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${le}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${E&&f?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${f?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${le}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(S){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${S}`)}})()};
        output[outputIdx] = ${oe.type.value} (sum * uniforms.alpha) + ${a?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${S};${a!==void 0};${n!==void 0};${e}`,inputDependencies:T},getRunData:()=>({outputs:I,dispatchGroup:x,programUniforms:k}),getShaderSource:z}},km=(e,t,r,n,a,i,s=void 0,o=void 0)=>{let u=i+a.kvSequenceLength,d=a.nReps?a.nReps:1,p=a.vHiddenSize*d,f=e>1&&n,m=a.kvNumHeads?a.kvNumHeads:a.numHeads,_=f?[a.batchSize,m,u,a.headSize]:void 0,w=[a.batchSize,a.sequenceLength,p],$=12,S={x:Math.ceil(a.vHeadSize/$),y:Math.ceil(a.sequenceLength/$),z:a.batchSize*a.numHeads},y=[{type:12,data:a.sequenceLength},{type:12,data:u},{type:12,data:a.vHeadSize},{type:12,data:a.numHeads},{type:12,data:a.headSize},{type:12,data:p},{type:12,data:i},{type:12,data:a.kvSequenceLength},{type:12,data:d}],g=f&&n&&D.size(n.dims)>0,x=["type","type"];g&&x.push("type"),s&&x.push("type"),o&&x.push("type");let k=[{dims:w,dataType:t.dataType,gpuDataType:0}];f&&k.push({dims:_,dataType:t.dataType,gpuDataType:0});let E=T=>{let I=B("probs",t.dataType,t.dims),z=B("v",r.dataType,r.dims),N=[I,z];g&&N.push(B("past_value",n.dataType,n.dims));let L=s?B("seq_lens",s.dataType,s.dims):void 0;s&&N.push(L);let X=o?B("total_sequence_length_input",o.dataType,o.dims):void 0;o&&N.push(X);let Q=[ee("output",t.dataType,w)];f&&Q.push(ee("present_value",t.dataType,_));let G=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${$}u;
  var<workgroup> tileQ: array<${I.type.value}, ${$*$}>;
  var<workgroup> tileV: array<${I.type.value}, ${$*$}>;
  ${T.registerUniforms(G).declareVariables(...N,...Q)}
  ${T.mainStart([$,$,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${d===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${d===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${cs(L,X,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${g&&f?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${f?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${I.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${g&&f?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${f?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`};return{name:"AttentionScore",shaderCache:{hint:`${n!==void 0};${e}`,inputDependencies:x},getRunData:()=>({outputs:k,dispatchGroup:S,programUniforms:y}),getShaderSource:E}},Ca=(e,t,r,n,a,i,s,o,u,d,p=void 0,f=void 0)=>{let m=Math.min(e.outputCount,1+(s?1:0)+(o?1:0)),_=m>1?d.pastSequenceLength:0,w=_+d.kvSequenceLength,$=u&&D.size(u.dims)>0?u:void 0,S=[t,r];m>1&&s&&D.size(s.dims)>0&&S.push(s),$&&S.push($),p&&S.push(p),f&&S.push(f);let y=e.compute(bm(m,t,r,s,$,d,_,p,f),{inputs:S,outputs:m>1?[-1,1]:[-1]})[0];e.compute(xm(y,d.batchSize,d.numHeads,_,d.sequenceLength,w,p,f),{inputs:p&&f?[y,p,f]:[y],outputs:[]});let g=[y,n];m>1&&o&&D.size(o.dims)>0&&g.push(o),p&&g.push(p),f&&g.push(f),e.compute(km(m,y,n,o,d,_,p,f),{inputs:g,outputs:m>1?[0,2]:[0]})},Sm=(e,t)=>{let r=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],n=t.sequenceLength,a=t.inputHiddenSize,i=t.headSize,s=12,o={x:Math.ceil(t.headSize/s),y:Math.ceil(t.sequenceLength/s),z:t.batchSize*t.numHeads},u=[e.inputs[0],e.inputs[1],e.inputs[2]],d=[{type:12,data:n},{type:12,data:a},{type:12,data:i},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],p=f=>{let m=ee("output_q",u[0].dataType,r),_=ee("output_k",u[0].dataType,r),w=ee("output_v",u[0].dataType,r),$=B("input",u[0].dataType,u[0].dims),S=B("weight",u[1].dataType,u[1].dims),y=B("bias",u[2].dataType,u[2].dims),g=$.type.storage,x=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${s}u;
  var<workgroup> tileInput: array<${g}, ${s*s}>;
  var<workgroup> tileWeightQ: array<${g}, ${s*s}>;
  var<workgroup> tileWeightK: array<${g}, ${s*s}>;
  var<workgroup> tileWeightV: array<${g}, ${s*s}>;
  ${f.registerUniforms(x).declareVariables($,S,y,m,_,w)}
  ${f.mainStart([s,s,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${g}(0);
    var valueK = ${g}(0);
    var valueV = ${g}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:o,programUniforms:d}),getShaderSource:p},{inputs:u,outputs:[-1,-1,-1]})},__=(e,t)=>{let r=$m(e.inputs,t),[n,a,i]=Sm(e,r);return Ca(e,n,a,i,e.inputs[4],void 0,void 0,void 0,e.inputs[5],r)}}),Cm,Em,Tm,w_,Tk=V(()=>{Bt(),se(),de(),Pe(),ce(),Cm=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(n,a,i)=>{let s=a.length;if(s!==n.length)throw new Error(`${i}: num dimensions != ${s}`);a.forEach((o,u)=>{if(o!==n[u])throw new Error(`${i}: dim[${u}] do not match`)})};if(e[0].dims.length>1){let n=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);r(e[1].dims,n,"Invalid input scale"),r(e[2].dims,n,"Invalid input B"),r(e[3].dims,n,"Invalid input mean"),r(e[4].dims,n,"Invalid input var")}else r(e[1].dims,[1],"Invalid input scale"),r(e[2].dims,[1],"Invalid input B"),r(e[3].dims,[1],"Invalid input mean"),r(e[4].dims,[1],"Invalid input var")},Em=(e,t)=>{let{epsilon:r,spatial:n,format:a}=t,i=e[0].dims,s=n?Ne(i[i.length-1]):1,o=a==="NHWC"&&i.length>1?s:1,u=D.size(i)/s,d=n,p=d?i.length:i,f=B("x",e[0].dataType,e[0].dims,s),m=B("scale",e[1].dataType,e[1].dims,o),_=B("bias",e[2].dataType,e[2].dims,o),w=B("inputMean",e[3].dataType,e[3].dims,o),$=B("inputVar",e[4].dataType,e[4].dims,o),S=ee("y",e[0].dataType,p,s),y=()=>{let x="";if(n)x=`let cOffset = ${i.length===1?"0u":a==="NHWC"?`outputIndices[${i.length-1}] / ${s}`:"outputIndices[1]"};`;else if(a==="NCHW")x=`
            ${S.indicesSet("outputIndices","0","0")}
            let cOffset = ${S.indicesToOffset("outputIndices")};`;else{x=`var cIndices = ${m.type.indices}(0);
                       cIndices[0] = outputIndices[${i.length-1}];`;for(let k=1;k<m.rank;k++)x+=`cIndices[${k}] = outputIndices[${k}];`;x+=`let cOffset = ${m.indicesToOffset("cIndices")};`}return x},g=x=>`
  const epsilon = ${r};
  ${x.registerUniform("outputSize","u32").declareVariables(f,m,_,w,$,S)}
  ${x.mainStart()}
  ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${S.offsetToIndices(`global_idx * ${s}`)};
    ${y()}
    let scale = ${m.getByOffset("cOffset")};
    let bias = ${_.getByOffset("cOffset")};
    let inputMean = ${w.getByOffset("cOffset")};
    let inputVar = ${$.getByOffset("cOffset")};
    let x = ${f.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${S.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${n}_${s}`,inputDependencies:d?["rank","type","type","type","type"]:void 0},getShaderSource:g,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:d?[{type:12,data:u},...ie(i)]:[{type:12,data:u}]})}},Tm=e=>_e(e),w_=(e,t)=>{let{inputs:r,outputCount:n}=e,a=Tm({...t,outputCount:n});if(Se.webgpu.validateInputContent&&Cm(r,a),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(Em(r,a))}}),Im,zm,$_,Ik=V(()=>{de(),ce(),Im=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},zm=e=>{let t=e[0].dims,r=e[0].dims[2],n=D.size(t)/4,a=e[0].dataType,i=B("input",a,t,4),s=B("bias",a,[r],4),o=B("residual",a,t,4),u=ee("output",a,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(n/64)}}),getShaderSource:d=>`
  const channels = ${r}u / 4;
  ${d.declareVariables(i,s,o,u)}

  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes(n)}
    let value = ${i.getByOffset("global_idx")}
      + ${s.getByOffset("global_idx % channels")} + ${o.getByOffset("global_idx")};
    ${u.setByOffset("global_idx","value")}
  }`}},$_=e=>{Im(e.inputs),e.compute(zm(e.inputs))}}),Am,ge,x_,b_,k_,S_,C_,E_,T_,I_,z_,Om,A_,O_,N_,R_,Xi,D_,As,M_,P_,B_,L_,U_,j_,W_,F_,V_,q_,H_,G_,K_,Q_,X_,Y_,Hl,Z_,wd,$d,J_,ew,tw,Nm,Rm,rw,Lc=V(()=>{se(),de(),Pe(),ce(),Am=(e,t,r,n,a,i,s)=>{let o=Math.ceil(t/4),u="";typeof a=="string"?u=`${a}(a)`:u=a("a");let d=B("inputData",r,[o],4),p=ee("outputData",n,[o],4),f=[{name:"vec_size",type:"u32"}];return s&&f.push(...s),`
      ${e.registerUniforms(f).declareVariables(d,p)}

  ${i??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${d.getByOffset("global_idx")};
    ${p.setByOffset("global_idx",u)}
  }`},ge=(e,t,r,n,a,i=e.dataType,s,o)=>{let u=[{type:12,data:Math.ceil(D.size(e.dims)/4)}];return s&&u.push(...s),{name:t,shaderCache:{hint:a,inputDependencies:["type"]},getShaderSource:d=>Am(d,D.size(e.dims),e.dataType,i,r,n,o),getRunData:d=>({outputs:[{dims:e.dims,dataType:i}],dispatchGroup:{x:Math.ceil(D.size(d[0].dims)/64/4)},programUniforms:u})}},x_=e=>{e.compute(ge(e.inputs[0],"Abs","abs"))},b_=e=>{e.compute(ge(e.inputs[0],"Acos","acos"))},k_=e=>{e.compute(ge(e.inputs[0],"Acosh","acosh"))},S_=e=>{e.compute(ge(e.inputs[0],"Asin","asin"))},C_=e=>{e.compute(ge(e.inputs[0],"Asinh","asinh"))},E_=e=>{e.compute(ge(e.inputs[0],"Atan","atan"))},T_=e=>{e.compute(ge(e.inputs[0],"Atanh","atanh"))},I_=e=>_e(e),z_=(e,t)=>{let r;switch(t.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(ge(e.inputs[0],"Cast",r,void 0,t.cacheKey,t.to))},Om=e=>{let t,r,n=e.length>=2&&e[1].data!==0,a=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=n?e[1].getFloat32Array()[0]:-34028234663852886e22,r=a?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=n?e[1].getUint16Array()[0]:64511,r=a?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return _e({min:t,max:r})},A_=(e,t)=>{let r=t||Om(e.inputs),n=rt(e.inputs[0].dataType);e.compute(ge(e.inputs[0],"Clip",a=>`clamp(${a}, vec4<${n}>(uniforms.min), vec4<${n}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:e.inputs[0].dataType,data:r.min},{type:e.inputs[0].dataType,data:r.max}],[{name:"min",type:n},{name:"max",type:n}]),{inputs:[0]})},O_=e=>{e.compute(ge(e.inputs[0],"Ceil","ceil"))},N_=e=>{e.compute(ge(e.inputs[0],"Cos","cos"))},R_=e=>{e.compute(ge(e.inputs[0],"Cosh","cosh"))},Xi=e=>_e(e),D_=(e,t)=>{let r=rt(e.inputs[0].dataType);e.compute(ge(e.inputs[0],"Elu",n=>`elu_vf32(${n})`,`
  const elu_alpha_ = ${r}(${t.alpha});

  fn elu_f32(a: ${r}) -> ${r} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${r}>) -> vec4<${r}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},As=(e="f32")=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,M_=e=>{let t=rt(e.inputs[0].dataType);e.compute(ge(e.inputs[0],"Erf",r=>`erf_vf32(${r})`,As(t)))},P_=e=>{e.compute(ge(e.inputs[0],"Exp","exp"))},B_=e=>{e.compute(ge(e.inputs[0],"Floor","floor"))},L_=e=>{let t=rt(e.inputs[0].dataType);e.compute(ge(e.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,As(t)))},U_=(e,t)=>{let r=rt(e.inputs[0].dataType);e.compute(ge(e.inputs[0],"LeakyRelu",n=>`select(leaky_relu_alpha_ * ${n}, ${n}, ${n} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${t.alpha});`,t.cacheKey))},j_=e=>{e.compute(ge(e.inputs[0],"Not",t=>`!${t}`))},W_=e=>{e.compute(ge(e.inputs[0],"Neg",t=>`-${t}`))},F_=e=>{e.compute(ge(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},V_=e=>{let t=rt(e.inputs[0].dataType);e.compute(ge(e.inputs[0],"Relu",r=>`select(vec4<${t}>(0.0), ${r}, ${r} > vec4<${t}>(0.0))`))},q_=e=>{e.compute(ge(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},H_=e=>_e(e),G_=(e,t)=>{let r=rt(e.inputs[0].dataType);e.compute(ge(e.inputs[0],"HardSigmoid",n=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${t.alpha} * ${n} + vec4<${r}>(${t.beta})))`,void 0,t.cacheKey))},K_=e=>{e.compute(ge(e.inputs[0],"Sin","sin"))},Q_=e=>{e.compute(ge(e.inputs[0],"Sinh","sinh"))},X_=e=>{e.compute(ge(e.inputs[0],"Sqrt","sqrt"))},Y_=e=>{e.compute(ge(e.inputs[0],"Tan","tan"))},Hl=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,Z_=e=>{e.compute(ge(e.inputs[0],"Tanh",Hl))},wd=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${Hl("v")};
}
`,$d=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,J_=e=>{let t=rt(e.inputs[0].dataType);e.compute(ge(e.inputs[0],"FastGelu",$d,wd(t),void 0,e.inputs[0].dataType))},ew=(e,t)=>{let r=rt(e.inputs[0].dataType);return e.compute(ge(e.inputs[0],"ThresholdedRelu",n=>`select(vec4<${r}>(0.0), ${n}, ${n} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${t.alpha});`,t.cacheKey)),0},tw=e=>{e.compute(ge(e.inputs[0],"Log","log"))},Nm=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,Rm=e=>`quick_gelu_impl(${e})`,rw=(e,t)=>{let r=rt(e.inputs[0].dataType);e.compute(ge(e.inputs[0],"QuickGelu",Rm,Nm(r,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),Dm,Mm,nw,zk=V(()=>{de(),ce(),Lc(),Dm=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Mm=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let r=B("input",e[0].dataType,e[0].dims,4),n=B("bias",e[0].dataType,[e[0].dims[2]],4),a=ee("output",e[0].dataType,t,4),i=D.size(t)/4,s=qe(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)}}),getShaderSource:o=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${o.declareVariables(r,n,a)}

  ${As(s)}

  ${o.mainStart()}
    ${o.guardAgainstOutOfBoundsWorkgroupSizes(i)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${a.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},nw=e=>{Dm(e.inputs),e.compute(Mm(e.inputs))}}),Pm,Bm,Vt,iw,aw,sw,ow,lw,uw,dw,cw,pw,fw,Ak=V(()=>{se(),de(),ce(),Pm=(e,t,r,n,a,i,s,o,u,d,p,f)=>{let m,_;typeof o=="string"?m=_=(g,x)=>`${o}((${g}),(${x}))`:typeof o=="function"?m=_=o:(m=o.scalar,_=o.vector);let w=ee("outputData",p,n.length,4),$=B("aData",u,t.length,4),S=B("bData",d,r.length,4),y;if(a)if(i){let g=D.size(t)===1,x=D.size(r)===1,k=t.length>0&&t[t.length-1]%4===0,E=r.length>0&&r[r.length-1]%4===0;g||x?y=w.setByOffset("global_idx",_(g?`${$.type.value}(${$.getByOffset("0")}.x)`:$.getByOffset("global_idx"),x?`${S.type.value}(${S.getByOffset("0")}.x)`:S.getByOffset("global_idx"))):y=`
            let outputIndices = ${w.offsetToIndices("global_idx * 4u")};
            let offsetA = ${$.broadcastedIndicesToOffset("outputIndices",w)};
            let offsetB = ${S.broadcastedIndicesToOffset("outputIndices",w)};
            ${w.setByOffset("global_idx",_(s||k?$.getByOffset("offsetA / 4u"):`${$.type.value}(${$.getByOffset("offsetA / 4u")}[offsetA % 4u])`,s||E?S.getByOffset("offsetB / 4u"):`${S.type.value}(${S.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else y=w.setByOffset("global_idx",_($.getByOffset("global_idx"),S.getByOffset("global_idx")));else{if(!i)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let g=(x,k,E="")=>{let T=`aData[indexA${k}][componentA${k}]`,I=`bData[indexB${k}][componentB${k}]`;return`
            let outputIndices${k} = ${w.offsetToIndices(`global_idx * 4u + ${k}u`)};
            let offsetA${k} = ${$.broadcastedIndicesToOffset(`outputIndices${k}`,w)};
            let offsetB${k} = ${S.broadcastedIndicesToOffset(`outputIndices${k}`,w)};
            let indexA${k} = offsetA${k} / 4u;
            let indexB${k} = offsetB${k} / 4u;
            let componentA${k} = offsetA${k} % 4u;
            let componentB${k} = offsetB${k} % 4u;
            ${x}[${k}] = ${E}(${m(T,I)});
          `};p===9?y=`
            var data = vec4<u32>(0);
            ${g("data",0,"u32")}
            ${g("data",1,"u32")}
            ${g("data",2,"u32")}
            ${g("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:y=`
            ${g("outputData[global_idx]",0)}
            ${g("outputData[global_idx]",1)}
            ${g("outputData[global_idx]",2)}
            ${g("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables($,S,w)}

        ${f??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${y}
      }`},Bm=(e,t,r,n,a,i,s=r.dataType)=>{let o=r.dims.map($=>Number($)??1),u=n.dims.map($=>Number($)??1),d=!D.areEqual(o,u),p=o,f=D.size(o),m=!1,_=!1,w=[d];if(d){let $=hi.calcShape(o,u,!1);if(!$)throw new Error("Can't perform binary op on the given tensors");p=$.slice(),f=D.size(p);let S=D.size(o)===1,y=D.size(u)===1,g=o.length>0&&o[o.length-1]%4===0,x=u.length>0&&u[u.length-1]%4===0;w.push(S),w.push(y),w.push(g),w.push(x);let k=1;for(let E=1;E<p.length;E++){let T=o[o.length-E],I=u[u.length-E];if(T===I)k*=T;else break}k%4===0?(_=!0,m=!0):(S||y||g||x)&&(m=!0)}else m=!0;return w.push(m),{name:e,shaderCache:{hint:t+w.map($=>$.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:$=>Pm($,o,u,p,m,d,_,a,r.dataType,n.dataType,s,i),getRunData:()=>({outputs:[{dims:p,dataType:s}],dispatchGroup:{x:Math.ceil(f/64/4)},programUniforms:[{type:12,data:Math.ceil(D.size(p)/4)},...ie(o,u,p)]})}},Vt=(e,t,r,n,a,i)=>{e.compute(Bm(t,a??"",e.inputs[0],e.inputs[1],r,n,i))},iw=e=>{Vt(e,"Add",(t,r)=>`${t}+${r}`)},aw=e=>{Vt(e,"Div",(t,r)=>`${t}/${r}`)},sw=e=>{Vt(e,"Equal",{scalar:(t,r)=>`u32(${t}==${r})`,vector:(t,r)=>`vec4<u32>(${t}==${r})`},void 0,void 0,9)},ow=e=>{Vt(e,"Mul",(t,r)=>`${t}*${r}`)},lw=e=>{let t=B("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;Vt(e,"Pow",{scalar:(r,n)=>`pow_custom(${r},${n})`,vector:(r,n)=>`pow_vector_custom(${r},${n})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t==="i32"?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},uw=e=>{Vt(e,"Sub",(t,r)=>`${t}-${r}`)},dw=e=>{Vt(e,"Greater",{scalar:(t,r)=>`u32(${t}>${r})`,vector:(t,r)=>`vec4<u32>(${t}>${r})`},void 0,void 0,9)},cw=e=>{Vt(e,"Less",{scalar:(t,r)=>`u32(${t}<${r})`,vector:(t,r)=>`vec4<u32>(${t}<${r})`},void 0,void 0,9)},pw=e=>{Vt(e,"GreaterOrEqual",{scalar:(t,r)=>`u32(${t}>=${r})`,vector:(t,r)=>`vec4<u32>(${t}>=${r})`},void 0,void 0,9)},fw=e=>{Vt(e,"LessOrEqual",{scalar:(t,r)=>`u32(${t}<=${r})`,vector:(t,r)=>`vec4<u32>(${t}<=${r})`},void 0,void 0,9)}}),Lm,Um,jm,Wm,hw,mw,Ok=V(()=>{se(),de(),Pe(),ce(),Lm=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let r=0,n=e[r],a=n.dataType,i=n.dims.length;e.forEach((s,o)=>{if(o!==r){if(s.dataType!==a)throw new Error("input tensors should be one type");if(s.dims.length!==i)throw new Error("input tensors should have the same shape");s.dims.forEach((u,d)=>{if(d!==t&&u!==n.dims[d])throw new Error("non concat dimensions must match")})}})},Um=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,jm=(e,t)=>{let r=e.length,n=[];for(let a=0;a<r;++a){let i=t.setByOffset("global_idx",e[a].getByIndices("indices"));r===1?n.push(i):a===0?n.push(`if (inputIndex == ${a}u) { ${i} }`):a===r-1?n.push(`else { ${i} }`):n.push(`else if (inputIndex == ${a}) { ${i} }`)}return n.join(`
`)},Wm=(e,t,r,n)=>{let a=D.size(r),i=new Array(e.length),s=new Array(e.length),o=0,u=[],d=[],p=[{type:12,data:a}];for(let $=0;$<e.length;++$)o+=e[$].dims[t],i[$]=o,d.push(e[$].dims.length),s[$]=B(`input${$}`,n,d[$]),u.push("rank"),p.push({type:12,data:i[$]});for(let $=0;$<e.length;++$)p.push(...ie(e[$].dims));p.push(...ie(r));let f=ee("output",n,r.length),m=f.indicesGet("indices",t),_=Array.from(Array(i.length).keys()).map($=>`uniforms.sizeInConcatAxis${$}`).join(","),w=$=>`

  ${(()=>{$.registerUniform("outputSize","u32");for(let S=0;S<e.length;S++)$.registerUniform(`sizeInConcatAxis${S}`,"u32");return $.declareVariables(...s,f)})()}

  ${Um(i.length,_)}

  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${f.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${m});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${i.length}u>(${_});
      ${m} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${jm(s,f)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:r,dataType:n}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:p}),getShaderSource:w}},hw=(e,t)=>{let r=e.inputs,n=r[0].dims,a=D.normalizeAxis(t.axis,n.length);Lm(r,a);let i=n.slice();i[a]=r.reduce((o,u)=>o+(u.dims.length>a?u.dims[a]:0),0);let s=r.filter(o=>D.size(o.dims)>0);e.compute(Wm(s,a,i,r[0].dataType),{inputs:s})},mw=e=>_e({axis:e.axis})}),An,On,Nn,Uc,Pn=V(()=>{se(),de(),An=(e,t,r="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${r}(uniforms.clip_min)), ${t}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},On=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},Nn=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},Uc=e=>{let t=(e==null?void 0:e.activation)||"";if(t==="HardSigmoid"){let[r,n]=(e==null?void 0:e.activation_params)||[.2,.5];return{activation:t,alpha:r,beta:n}}else if(t==="Clip"){let[r,n]=(e==null?void 0:e.activation_params)||[jv,Wv];return{activation:t,clipMax:n,clipMin:r}}else if(t==="LeakyRelu"){let[r]=(e==null?void 0:e.activation_params)||[.01];return{activation:t,alpha:r}}return{activation:t}}}),Ke,gw,jc=V(()=>{Ke=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},gw=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),yw,Nk=V(()=>{yw=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),oa,Wc,Fc=V(()=>{se(),de(),ce(),Pn(),oa=(e,t,r,n,a)=>{let i=n-r;return`
      ${Array.from({length:r}).map((s,o)=>`
      if (${ne(t.shape,o,t.rank)} != 1) {
        ${t.indicesSet(e,o,ne(a,o+i,n))}
      } else {
        ${t.indicesSet(e,o,0)}
      }`).join("")}
`},Wc=(e,t,r,n,a=!1,i)=>{let s=e[0].dims,o=e[1].dims,u=s[s.length-2],d=o[o.length-1],p=s[s.length-1],f=Ne(d),m=Ne(p),_=Ne(u),w=D.size(r)/f/_,$=e.length>2,S=n?n.slice(0,-2):r.slice(0,-2),y=[D.size(S),u,d],g=[{type:12,data:w},{type:12,data:u},{type:12,data:d},{type:12,data:p}];On(t,g),g.push(...ie(S,s,o)),$&&g.push(...ie(e[2].dims)),g.push(...ie(y));let x=k=>{let E=Mc("batch_dims",e[0].dataType,S.length),T=B("a",e[0].dataType,s.length,m),I=B("b",e[1].dataType,o.length,f),z=ee("output",e[0].dataType,y.length,f),N=qe(z.type.tensor),L=An(t,z.type.value,N),X=[T,I],Q="";if($){let oe=a?f:1;X.push(B("bias",e[2].dataType,e[2].dims.length,oe)),Q=`${a?`value += bias[col / ${oe}];`:`value += ${z.type.value}(bias[row + i]);`}`}let G=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];Nn(t,G);let pe=()=>{let oe=`var a_data: ${T.type.value};`;for(let Y=0;Y<m;Y++)oe+=`
              let b_data${Y} = b[(b_offset + (k + ${Y}) * uniforms.N + col) / ${f}];`;for(let Y=0;Y<_;Y++){oe+=`a_data = a[(a_offset + (row + ${Y}) * uniforms.K + k) / ${m}];`;for(let le=0;le<m;le++)oe+=`
            values[${Y}] = fma(${I.type.value}(a_data${m===1?"":`[${le}]`}), b_data${le}, values[${Y}]);
`}return oe};return`
  ${k.registerUniforms(G).registerInternalVariables(E).declareVariables(...X,z)}
  ${k.mainStart()}
    ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${f})) * ${f};
    var index1 = global_idx / (uniforms.N / ${f});
    let stride1 = uniforms.M / ${_};
    let row = (index1 % stride1) * ${_};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${E.offsetToIndices("batch")};`}

    var a_indices: ${T.type.indices};
    ${oa("a_indices",T,T.rank-2,E.rank,"batch_indices")}
    ${T.indicesSet("a_indices",T.rank-2,0)}
    ${T.indicesSet("a_indices",T.rank-1,0)}
    let a_offset = ${T.indicesToOffset("a_indices")};

    var b_indices: ${I.type.indices};
    ${oa("b_indices",I,I.rank-2,E.rank,"batch_indices")}
    ${I.indicesSet("b_indices",I.rank-2,0)}
    ${I.indicesSet("b_indices",I.rank-1,0)}
    let b_offset = ${I.indicesToOffset("b_indices")};
    var values: array<${z.type.value}, ${_}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${m}) {
      ${pe()}
    }
    for (var i = 0u; i < ${_}u; i++) {
      var value = values[i];
      ${Q}
      ${L}
      let cur_indices = ${z.type.indices}(batch, row + i, col);
      let offset = ${z.indicesToOffset("cur_indices")};
      ${z.setByOffset(`offset / ${f}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${f};${m};${_};${a}`,inputDependencies:$?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(w/64)},programUniforms:g}),getShaderSource:x}}}),Fm,Vm,xd,Gl,qm,bd,Hm,oo,Vc=V(()=>{se(),de(),ce(),Pn(),Fc(),jc(),Fm=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,Vm=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,xd=(e,t,r="f32",n,a=!1,i=32,s=!1,o=32)=>{let u=t[1]*e[1],d=t[0]*e[0],p=a?u:i,f=a?i:u,m=p/t[0],_=i/t[1];if(!((a&&m===4&&e[1]===4||!a&&(m===3||m===4))&&p%t[0]===0&&i%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${a} is true, innerElementSize ${m} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${m} must be 3 or 4.
  tileAWidth ${p} must be divisible by workgroupSize[0]${t[0]}. tileInner ${i} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${m}<${r}>, ${p/m}>, ${f}>;
var<workgroup> mm_Bsub: array<array<vec4<${r}>, ${d/e[0]}>, ${i}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${m};
const tileInner = ${i};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${s?"0":"i32(globalId.z)"};
  ${n?`let batchIndices = ${n.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${u};

  let num_tiles = ${s?`${Math.ceil(o/i)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${s?`i32(globalId.z) * ${o}`:"0"};

  var acc: array<vec4<${r}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${_};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${Fm(a,n)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${_}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${n?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${m===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${Vm(a,m)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},Gl=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,qm=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",bd=(e,t,r="f32",n,a=!1,i=32,s=!1,o=32,u=!1)=>{let d=e[1]*t[1],p=e[0]*t[0],f=a?d:i,m=a?i:d;if(!(m%t[1]===0&&f%t[0]===0&&i%t[1]===0))throw new Error(`tileAHight ${m} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${f} must be divisible by workgroupSize[0]${t[0]}, tileInner ${i} must be divisible by workgroupSize[1]${t[1]}`);let _=m/t[1],w=f/t[0],$=i/t[1],S=u?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${d};
    let globalColStart = i32(workgroupId.x) * ${p};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${m}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${f}; inputCol = inputCol + ${t[0]}) {
          ${Gl(a,n)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${i}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${p}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${n?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${r}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${a?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${d};

let tileRowA = i32(localId.y) * ${_};
let tileColA = i32(localId.x) * ${w};
let tileRowB = i32(localId.y) * ${$};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${_}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${w}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${Gl(a,n)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${$}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${n?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${r}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${qm(a)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${r}, ${f}>, ${m}>;
  var<workgroup> mm_Bsub : array<array<${r}, ${p}>, ${i}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${i};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${s?"0":"i32(globalId.z)"};
    ${n?`let batchIndices = ${n.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${s?`${Math.ceil(o/i)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${s?`i32(globalId.z) * ${o}`:"0"};

    var acc : array<array<${r}, colPerThread>, rowPerThread>;
    ${S}
  }
`},Hm=(e,t,r,n,a=!1)=>{let[i,s,o,u]=n,d=qe(n[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${i.type.indices}) -> ${Ke(e,d)} {
      var value = ${Ke(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${s.type.indices};
        ${oa("aIndices",s,s.rank-2,i.rank,"batchIndices")}
        ${s.indicesSet("aIndices",s.rank-2,"u32(row)")}
        ${s.indicesSet("aIndices",s.rank-1,"u32(colIn)")}
        value = ${s.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${i.type.indices}) -> ${Ke(e,d)} {
      var value = ${Ke(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${o.type.indices};
        ${oa("bIndices",o,o.rank-2,i.rank,"batchIndices")}
        ${o.indicesSet("bIndices",o.rank-2,"u32(row)")}
        ${o.indicesSet("bIndices",o.rank-1,"u32(colIn)")}
        value = ${o.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${Ke(e,d)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${a?"bias[colIn]":`${Ke(e,d)}(bias[row])`};`:""}
        ${r}
        ${u.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},oo=(e,t,r,n,a=!1,i)=>{let s=e[0].dims,o=e[1].dims,u=s.slice(0,-2),d=o.slice(0,-2),p=n?n.slice(0,-2):r.slice(0,-2),f=D.size(p),m=s[s.length-2],_=s[s.length-1],w=o[o.length-1],$=_%4===0&&w%4===0,S=m<=8?[4,1,1]:[4,4,1],y=[8,8,1],g=[Math.ceil(w/y[0]/S[0]),Math.ceil(m/y[1]/S[1]),Math.ceil(f/y[2]/S[2])],x=$?4:1,k=[...u,m,_/x],E=k.length,T=[...d,_,w/x],I=T.length,z=[f,m,w/x],N=[{type:6,data:m},{type:6,data:w},{type:6,data:_}];On(t,N),N.push(...ie(p,k,T));let L=["rank","rank"],X=e.length>2;X&&(N.push(...ie(e[2].dims)),L.push("rank")),N.push(...ie(z));let Q=G=>{let pe=p.length,oe=Mc("batchDims",e[0].dataType,pe,1),Y=qe(e[0].dataType),le=B("a",e[0].dataType,E,x),M=B("b",e[1].dataType,I,x),F=ee("result",e[0].dataType,z.length,x),Z=[le,M];if(X){let ze=a?x:1;Z.push(B("bias",e[2].dataType,e[2].dims.length,ze))}let O=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];Nn(t,O);let W=qe(F.type.tensor),K=An(t,F.type.value,W),te=Hm(x,X,K,[oe,le,M,F],a);return`
  ${G.registerUniforms(O).registerInternalVariables(oe).declareVariables(...Z,F)}
  ${te}
  ${$?xd(S,y,Y,oe):bd(S,y,Y,oe)}
                   `};return{name:"MatMul",shaderCache:{hint:`${S};${t.activation};${$};${a}`,inputDependencies:L},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:g[0],y:g[1],z:g[2]},programUniforms:N}),getShaderSource:Q}}}),Gm,vw,Rk=V(()=>{se(),Er(),ce(),Pn(),jc(),Nk(),Vc(),Gm=(e,t,r,n,a=!1,i,s=4,o=4,u=4,d="f32")=>{let p=N=>{switch(N){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${d}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${N} is not supported.`)}},f=N=>{switch(N){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${N} is not supported.`)}},m=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,_=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,w=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",$=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",S=e?"row":"col",y=e?"col":"row",g=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${S} / outWidth;
    let outCol = ${S} % outWidth;

    let WRow = ${y} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${y} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${y} % inChannels;
    var resData = ${Ke(s,d)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${w} && xCol >= 0 && xCol < ${$}) {
      ${m}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${p(s)}
    }
    return resData;`,x=e?t&&n?`
    let col = colIn * ${s};
    ${g}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${g}
    }
    return ${Ke(s,d)}(0.0);`:n&&r?`
    let col = colIn * ${s};
    ${g}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${g}
    }
    return ${Ke(s,d)}(0.0);`,k=e?n&&r?f(o):`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${f(o)}
    }
    return ${Ke(o,d)}(0.0);`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${f(o)}
    }
    return ${Ke(o,d)}(0.0);`,E=Ke(u,d),T=Ke(e?s:o,d),I=Ke(e?o:s,d),z=An(i,E,d);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${T} {
      ${e?x:k}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${I} {
      ${e?k:x}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${E}) {
      let col = colIn * ${u};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${_}
      ${gw(a)}
      ${z}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},vw=(e,t,r,n,a,i,s,o,u)=>{let d=t.format==="NHWC",p=d?e[0].dims[3]:e[0].dims[1],f=r[0],m=d?r[2]:r[3],_=d?r[1]:r[2],w=d?r[3]:r[1],$=d&&(p%4===0||p%3===0)&&w%4===0,S=d?w:m*_,y=d?m*_:w,g=[8,8,1],x=n<=8?[4,1,1]:[4,4,1],k=[Math.ceil(S/g[0]/x[0]),Math.ceil(y/g[1]/x[1]),Math.ceil(f/g[2]/x[2])];he("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${k}`);let E=$?d&&p%4!==0?3:4:1,T=g[1]*x[1],I=g[0]*x[0],z=Math.max(g[0]*E,g[1]),N=n%T===0,L=a%I===0,X=i%z===0,Q=$?[E,4,4]:[1,1,1],G=[{type:6,data:n},{type:6,data:a},{type:6,data:i},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];On(t,G),G.push(...ie(e[0].dims,e[1].dims));let pe=["rank","rank"];s&&(G.push(...ie(e[2].dims)),pe.push("rank")),G.push(...ie(r));let oe=Y=>{let le=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];Nn(t,le);let M=$?4:1,F=qe(e[0].dataType),Z=`
      fn setOutputAtIndex(flatIndex : i32, value : ${$?`vec4<${F}>`:F}) {
        result[flatIndex] = ${$?`vec4<${F}>`:F}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${$?`vec4<${F}>`:F}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${$?"/ 4":""}, value);
      }`,O=B("x",e[0].dataType,e[0].dims.length,E===3?1:E),W=B("w",e[1].dataType,e[1].dims.length,M),K=[O,W],te=ee("result",e[0].dataType,r.length,M);if(s){let ze=B("bias",e[2].dataType,e[2].dims.length,M);K.push(ze),Z+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${$?`vec4<${F}>`:F} {
          return bias[coords.${d?"w":"y"}${$?"/ 4":""}];
        }`}return`
        ${yw("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${Y.registerUniforms(le).declareVariables(...K,te)}
        ${Z}
        ${Gm(d,N,L,X,s,t,Q[0],Q[1],Q[2],F)}
        ${$?xd(x,g,F,void 0,!d,z):bd(x,g,F,void 0,!d,z,!1,void 0,o)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${E};${$};${N};${L};${X};${T};${I};${z}`,inputDependencies:pe},getRunData:()=>({outputs:[{dims:u?u(r):r,dataType:e[0].dataType}],dispatchGroup:{x:k[0],y:k[1],z:k[2]},programUniforms:G}),getShaderSource:oe}}}),Km,Kl,Bi,Qm,Ql,Xm,_w,ww,Dk=V(()=>{se(),Er(),de(),ce(),Pn(),jc(),Km=e=>{let t=1;for(let r=0;r<e.length;r++)t*=e[r];return t},Kl=e=>typeof e=="number"?[e,e,e]:e,Bi=(e,t)=>t<=1?e:e+(e-1)*(t-1),Qm=(e,t,r,n=1)=>{let a=Bi(t,n);return Math.floor((e[0]*(r-1)-r+a)/2)},Ql=(e,t,r,n,a)=>{a==null&&(a=Qm(e,t[0],n[0]));let i=[0,0,0,r];for(let s=0;s<3;s++)e[s]+2*a>=t[s]&&(i[s]=Math.trunc((e[s]-t[s]+2*a)/n[s]+1));return i},Xm=(e,t,r,n,a,i,s,o,u,d)=>{let p,f,m,_;if(e==="VALID"&&(e=0),typeof e=="number"){p={top:e,bottom:e,left:e,right:e,front:e,back:e};let w=Ql([t,r,n,1],[o,u,d],1,[a,i,s],e);f=w[0],m=w[1],_=w[2]}else if(Array.isArray(e)){if(!e.every(($,S,y)=>$===y[0]))throw Error(`Unsupported padding parameter: ${e}`);p={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let w=Ql([t,r,n,1],[o,u,d],1,[a,i,s],e[0]);f=w[0],m=w[1],_=w[2]}else if(e==="SAME_UPPER"){f=Math.ceil(t/a),m=Math.ceil(r/i),_=Math.ceil(n/s);let w=(f-1)*a+o-t,$=(m-1)*i+u-r,S=(_-1)*s+d-n,y=Math.floor(w/2),g=w-y,x=Math.floor($/2),k=$-x,E=Math.floor(S/2),T=S-E;p={top:x,bottom:k,left:E,right:T,front:y,back:g}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:p,outDepth:f,outHeight:m,outWidth:_}},_w=(e,t,r,n,a,i=!1,s="channelsLast")=>{let o,u,d,p,f;if(s==="channelsLast")[o,u,d,p,f]=e;else if(s==="channelsFirst")[o,f,u,d,p]=e;else throw new Error(`Unknown dataFormat ${s}`);let[m,,_,w,$]=t,[S,y,g]=Kl(r),[x,k,E]=Kl(n),T=Bi(_,x),I=Bi(w,k),z=Bi($,E),{padInfo:N,outDepth:L,outHeight:X,outWidth:Q}=Xm(a,u,d,p,S,y,g,T,I,z),G=i?m*f:m,pe=[0,0,0,0,0];return s==="channelsFirst"?pe=[o,G,L,X,Q]:s==="channelsLast"&&(pe=[o,L,X,Q,G]),{batchSize:o,dataFormat:s,inDepth:u,inHeight:d,inWidth:p,inChannels:f,outDepth:L,outHeight:X,outWidth:Q,outChannels:G,padInfo:N,strideDepth:S,strideHeight:y,strideWidth:g,filterDepth:_,filterHeight:w,filterWidth:$,effectiveFilterDepth:T,effectiveFilterHeight:I,effectiveFilterWidth:z,dilationDepth:x,dilationHeight:k,dilationWidth:E,inShape:e,outShape:pe,filterShape:t}},ww=(e,t,r,n,a,i)=>{let s=i==="channelsLast";s?e[0].dims[3]:e[0].dims[1];let o=[64,1,1],u={x:r.map((S,y)=>y)},d=[Math.ceil(Km(u.x.map(S=>r[S]))/o[0]),1,1];he("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${d}`);let p=1,f=D.size(r),m=[{type:12,data:f},{type:12,data:n},{type:12,data:a},{type:12,data:t.strides},{type:12,data:t.dilations}];On(t,m),m.push(...ie(e[0].dims,e[1].dims));let _=["rank","rank"],w=e.length===3;w&&(m.push(...ie(e[2].dims)),_.push("rank")),m.push(...ie(r));let $=S=>{let y=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:n.length},{name:"pads",type:"u32",length:a.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];Nn(t,y);let g=1,x=qe(e[0].dataType),k=B("x",e[0].dataType,e[0].dims.length,p),E=B("W",e[1].dataType,e[1].dims.length,g),T=[k,E],I=ee("result",e[0].dataType,r.length,g),z="";if(w){let X=B("bias",e[2].dataType,e[2].dims.length,g);T.push(X),z+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${x} {
          return bias[${s?ne("coords",4,5):ne("coords",1,5)}];
        }`}let N=Ke(p,x),L=An(t,N,x);return`
            ${z}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${k.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${E.getByIndices("aIndices")};
            }
          ${S.registerUniforms(y).declareVariables(...T,I)}
          ${S.mainStart()}
          ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${I.offsetToIndices("global_idx")};
              let batch = ${ne("coords",0,k.rank)};
              let d2 = ${s?ne("coords",k.rank-1,k.rank):ne("coords",1,k.rank)};
              let xFRCCorner = vec3<u32>(${s?ne("coords",1,k.rank):ne("coords",2,k.rank)},
              ${s?ne("coords",2,k.rank):ne("coords",3,k.rank)},
              ${s?ne("coords",3,k.rank):ne("coords",4,k.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${s?ne("uniforms.x_shape",1,k.rank):ne("uniforms.x_shape",2,k.rank)};
              let xShapeZ = ${s?ne("uniforms.x_shape",2,k.rank):ne("uniforms.x_shape",3,k.rank)};
              let xShapeW = ${s?ne("uniforms.x_shape",3,k.rank):ne("uniforms.x_shape",4,k.rank)};
              let xShapeU = ${s?ne("uniforms.x_shape",4,k.rank):ne("uniforms.x_shape",1,k.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${s?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${s?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${s?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${s?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${w?"value = value + getBiasByOutputCoords(coords)":""};
              ${L}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${s};${p};${w}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:d[0],y:d[1],z:d[2]},programUniforms:m}),getShaderSource:$}}}),$w,xw,Mk=V(()=>{se(),de(),ce(),Pn(),$w=(e,t,r,n)=>{let a=e.length>2,i=a?"value += b[output_channel];":"",s=e[0].dims,o=e[1].dims,u=t.format==="NHWC",d=u?r[3]:r[1],p=d/t.group,f=u&&p>=4?Ne(d):1,m=D.size(r)/f,_=[{type:12,data:m},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:p}];On(t,_),_.push(...ie(s,[o[0],o[1],o[2],o[3]/f]));let w=a?["rank","rank","rank"]:["rank","rank"];_.push(...ie([r[0],r[1],r[2],r[3]/f]));let $=S=>{let y=ee("output",e[0].dataType,r.length,f),g=qe(y.type.tensor),x=An(t,y.type.value,g),k=B("x",e[0].dataType,s.length),E=B("w",e[1].dataType,o.length,f),T=[k,E];a&&T.push(B("b",e[2].dataType,e[2].dims,f));let I=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];Nn(t,I);let z=u?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${k.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${E.get("wHeight","wWidth","wInChannel","output_channel")};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${k.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${E.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${S.registerUniforms(I).declareVariables(...T,y)}

  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${y.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${u?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${u?1:2}], outputIndices[${u?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${f} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${u?2:1}];

    var value: ${y.type.value} = ${y.type.value}(0);
    ${z}
    ${i}
    ${x}
    ${y.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${f}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:_}),getShaderSource:$}},xw=(e,t,r,n)=>{let a=e.length>2,i=Ne(r[3]),s=Ne(r[2]),o=D.size(r)/i/s,u=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/i],d=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/i],p=[r[0],r[1],r[2],r[3]/i],f=[{type:12,data:o},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];On(t,f),f.push(...ie(u,d,p));let m=(s-1)*t.strides[1]+d[1],_=w=>{let $=ee("output",e[0].dataType,p.length,i),S=qe($.type.tensor),y=An(t,$.type.value,S),g=B("x",e[0].dataType,u.length,i),x=B("w",e[1].dataType,d.length,i),k=[g,x];a&&k.push(B("b",e[2].dataType,e[2].dims,i));let E=a?"value += b[output_channel];":"",T=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return Nn(t,T),`
  ${w.registerUniforms(T).declareVariables(...k,$)}
  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${s}u;
    let col = (index1 % width1) * ${s}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${g.type.value}, ${m}>;
    var values: array<${$.type.value}, ${s}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${d[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${m}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${g.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${g.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${d[1]}; w_width++) {
          let w_val = ${x.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${s}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${s}u; i++) {
      var value = values[i];
      ${E}
      ${y}
      ${$.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${i};${s};${m};${d[0]};${d[1]}`,inputDependencies:a?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:f}),getShaderSource:_}}}),Ym,ps,Zm,fs,kd,Xl,Jm,eg,Sd,Pk=V(()=>{de(),Rk(),Dk(),Vc(),Mk(),Pn(),Fc(),nn(),Ym=(e,t,r,n,a,i)=>{let s=e[0],o=e.slice(i?1:2,i?3:4),u=o.length,d=t[0],p=t.slice(2).map((m,_)=>m+(m-1)*(r[_]-1)),f=o.map((m,_)=>m+n[_]+n[_+u]).map((m,_)=>Math.floor((m-p[_]+a[_])/a[_]));return f.splice(0,0,s),f.splice(i?3:1,0,d),f},ps=[2,3,1,0],Zm=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],n=e[1].dims[1]*t.group;if(r!==n)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let a=e[0].dims.length-2;if(t.dilations.length!==a)throw new Error(`dilations should be ${a}D`);if(t.strides.length!==a)throw new Error(`strides should be ${a}D`);if(t.pads.length!==a*2)throw new Error(`pads should be ${a*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},fs=(e,t)=>{let r=e.kernelShape.slice();r.length<t[1].dims.length-2&&r.push(...Array(t[1].dims.length-2-r.length).fill(0));for(let i=2;i<t[1].dims.length;++i)r[i-2]===0&&(r[i-2]=t[1].dims[i]);let n=e.pads.slice();ao.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,r,n,e.format==="NHWC",e.autoPad);let a=Object.assign({},e);return Object.assign(a,{kernelShape:r,pads:n}),a},kd=e=>{let t=Uc(e),r=e.format,n=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],a=e.dilations,i=e.group,s=e.kernel_shape,o=e.pads,u=e.strides,d=e.w_is_const();return{autoPad:n,format:r,dilations:a,group:i,kernelShape:s,pads:o,strides:u,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},Xl=(e,t,r,n)=>{let a=r.format==="NHWC",i=Ym(t[0].dims,t[1].dims,r.dilations,r.pads,r.strides,a);if(r.group!==1){let T=[t[0]];if(a){let I=e.kernelCustomData.wT??e.compute(Et(t[1],ps),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=I),T.push(I)}else T.push(t[1]);t.length===3&&T.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&a&&t[1].dims[0]===r.group&&t[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?e.compute(xw(T,r,i,n),{inputs:T}):e.compute($w(T,r,i,n),{inputs:T});return}let s=t.length===3,o=t[0].dims[a?1:2],u=t[0].dims[a?2:3],d=t[0].dims[a?3:1],p=t[1].dims[2],f=t[1].dims[3],m=i[a?1:2],_=i[a?2:3],w=i[a?3:1],$=a&&p===o&&f===u&&r.pads[0]===0&&r.pads[1]===0;if($||p===1&&f===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let T=i[0],I,z,N,L=[];if(a){let G=e.kernelCustomData.wT??e.compute(Et(t[1],ps),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=G),$){let pe=o*u*d;I=t[0].reshape([1,T,pe]),z=G.reshape([1,pe,w]),N=[1,T,w]}else I=t[0].reshape([T,o*u,d]),z=G.reshape([1,d,w]),N=[T,m*_,w];L.push(I),L.push(z)}else I=t[0].reshape([T,d,o*u]),z=t[1].reshape([1,w,d]),N=[T,w,m*_],L.push(z),L.push(I);s&&L.push(t[2]);let X=N[2],Q=L[0].dims[L[0].dims.length-1];X<8&&Q<8?e.compute(Wc(L,r,i,N,a,n),{inputs:L}):e.compute(oo(L,r,i,N,a,n),{inputs:L});return}let S=!0,y=e.kernelCustomData.wT??e.compute(Et(t[1],ps),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=y);let g=[t[0],y];s&&g.push(t[2]);let x=a?m*_:w,k=a?w:m*_,E=p*f*d;e.compute(vw(g,r,i,x,k,E,s,S,n),{inputs:g})},Jm=(e,t)=>{let r=t.format==="NHWC",n=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&n.push(e.inputs[2]);let a=[0,t.pads[0],0,t.pads[1]],i=[1].concat(t.strides),s=[1].concat(t.dilations),o=[1].concat(t.kernelShape),u=fs({...t,pads:a,strides:i,dilations:s,kernelShape:o},n);Xl(e,n,u,d=>r?[d[0],d[2],d[3]]:[d[0],d[1],d[3]])},eg=(e,t,r)=>{let n=r.format==="NHWC"?"channelsLast":"channelsFirst",a=fs(r,t),i=r.autoPad==="NOTSET"?r.pads:r.autoPad,s=_w(t[0].dims,t[1].dims,r.strides,r.dilations,i,!1,n);e.compute(ww(t,a,s.outShape,[s.filterDepth,s.filterHeight,s.filterWidth],[s.padInfo.front,s.padInfo.top,s.padInfo.left],n))},Sd=(e,t)=>{if(Zm(e.inputs,t),e.inputs[0].dims.length===3)Jm(e,t);else if(e.inputs[0].dims.length===5)eg(e,e.inputs,t);else{let r=fs(t,e.inputs);Xl(e,e.inputs,r)}}}),bw,Bk=V(()=>{se(),Er(),de(),ce(),bw=(e,t,r)=>{let n=e.length>2,a=t.outputShape,i=t.format==="NHWC",s=t.group,o=e[1].dims,u=o[2]/s,d=o[3],p=i?Ne(u):1,f=i&&d===1&&u>=4,m=f?Math.floor(u/4)*4:Math.floor(u/p)*p,_=u-m,w=i?Ne(d):1,$=i?d===1?p:w:1,S=D.size(a)/w,y=[Math.ceil(S/64),1,1];he("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${y}`);let g=["rank","rank"],x=[t.strides[0],t.strides[1]],k=[t.kernelShape[i?1:2],t.kernelShape[i?2:3]],E=[t.dilations[0],t.dilations[1]],T=[k[0]+(t.dilations[0]<=1?0:(t.kernelShape[i?1:2]-1)*(t.dilations[0]-1)),k[1]+(t.dilations[1]<=1?0:(t.kernelShape[i?2:3]-1)*(t.dilations[1]-1))],I=[T[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),T[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],z=[{type:12,data:S},{type:12,data:x},{type:12,data:k},{type:12,data:E},{type:12,data:T},{type:6,data:I},{type:12,data:m},{type:12,data:u},{type:12,data:d},...ie(e[0].dims,e[1].dims)];n&&(z.push(...ie(e[2].dims)),g.push("rank")),z.push(...ie(a));let N=L=>{let X=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:x.length},{name:"filter_dims",type:"u32",length:k.length},{name:"dilations",type:"u32",length:k.length},{name:"effective_filter_dims",type:"u32",length:T.length},{name:"pads",type:"i32",length:I.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],Q=qe(e[0].dataType),G=i?1:2,pe=i?2:3,oe=i?3:1,Y=B("W",e[1].dataType,e[1].dims.length,$),le=B("Dy",e[0].dataType,e[0].dims.length,p),M=[le,Y];n&&M.push(B("bias",e[2].dataType,[a[oe]].length,w));let F=ee("result",e[0].dataType,a.length,w),Z=()=>{let K="";if(f)p===4?K+=`
        let xValue = ${le.getByOffset("x_offset")};
        let wValue = ${Y.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:p===2?K+=`
          dotProd = dotProd + dot(vec4<${Q}>(${le.getByOffset("x_offset")}, ${le.getByOffset("x_offset + 1u")}), vec4<${Q}>(${Y.getByOffset("w_offset")}, ${Y.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:p===1&&(K+=`
          dotProd = dotProd + dot(vec4<${Q}>(${le.getByOffset("x_offset")}, ${le.getByOffset("x_offset + 1u")}, ${le.getByOffset("x_offset + 2u")}, ${le.getByOffset("x_offset + 3u")}), vec4<${Q}>(${Y.getByOffset("w_offset")}, ${Y.getByOffset("w_offset + 1u")}, ${Y.getByOffset("w_offset + 2u")}, ${Y.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(K+=`
                  let xValue = ${i?le.getByOffset(`${le.indicesToOffset(`${le.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${p}`):le.get("batch","inputChannel","idyR","idyC")};
        `,p===1)K+=`
          let w_offset = ${Y.indicesToOffset(`${Y.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${Y.getByOffset(`w_offset / ${$}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let te=0;te<p;te++)K+=`
            let wValue${te} = ${Y.getByOffset(`${Y.indicesToOffset(`${Y.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${te}, wOutChannel)`)} / ${$}`)};
            dotProd = dotProd + xValue[${te}] * wValue${te};`;return K},O=()=>{if(_===0)return"";if(!f)throw new Error(`packInputAs4 ${f} is not true.`);let K="";if(p===1){K+="dotProd = dotProd";for(let te=0;te<_;te++)K+=`
            + ${le.getByOffset(`x_offset + ${te}`)} * ${Y.getByOffset(`w_offset + ${te}`)}`;K+=";"}else if(p===2){if(_!==2)throw new Error(`Invalid inputChannelsRemainder ${_}.`);K+=`
          let xValue = ${le.getByOffset("x_offset")};
          let wValue = ${Y.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return K},W=`
            let outputIndices = ${F.offsetToIndices(`global_idx * ${w}`)};
            let batch = ${F.indicesGet("outputIndices",0)};
            let d1 = ${F.indicesGet("outputIndices",oe)};
            let r = ${F.indicesGet("outputIndices",G)};
            let c = ${F.indicesGet("outputIndices",pe)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${F.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${Q}(dyRCorner) + ${Q}(wR)) / ${Q}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${Q}(uniforms.Dy_shape[${G}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }
              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${Q}(dyCCorner) + ${Q}(wC)) / ${Q}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${Q}(uniforms.Dy_shape[${pe}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${f?`
                var x_offset = ${le.indicesToOffset(`${le.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${p};
                var w_offset = ${Y.indicesToOffset(`${Y.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${$};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${f?4:p}) {
                  ${Z()}
                  inputChannel = inputChannel + ${f?4:p};
                }
                ${O()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${n?` + bias[d1 / ${w}]`:""};
            ${F.setByOffset("global_idx","value")};
          `;return`
    ${L.registerUniforms(X).declareVariables(...M,F)}
      ${L.mainStart()}
      ${L.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${W}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${p}${$}${w}${f}${_}`,inputDependencies:g},getRunData:()=>({dispatchGroup:{x:y[0],y:y[1],z:y[2]},outputs:[{dims:r?r(a):a,dataType:e[0].dataType}],programUniforms:z}),getShaderSource:N}}}),tg,rg,ng,Yl,kw,ig,Zl,ag,Sw,Lk=V(()=>{Bk(),Pn(),nn(),tg=(e,t,r,n,a,i)=>(e-1)*t+r+(n-1)*a+1-i,rg=(e,t,r,n,a)=>{let i=Math.floor(e/2);t==="SAME_UPPER"?(r[n]=i,r[a]=e-i):t==="SAME_LOWER"&&(r[n]=e-i,r[a]=i)},ng=(e,t,r,n,a,i,s,o,u,d)=>{let p=e.length-2,f=d.length===0;u.length<p&&u.push(...Array(p-u.length).fill(0));let m=e[0],_=t[o?3:1]*a;for(let w=0,$=e.length-p-(o?1:0);w<p;++w,++$){let S=e[$],y=f?S*s[w]:d[w],g=tg(S,s[w],i[w],t[$],r[w],y);rg(g,n,i,w,w+p),f&&d.push(s[w]*(S-1)+u[w]+(t[$]-1)*r[w]+1-i[w]-i[w+p])}d.splice(0,0,m),d.splice(o?3:1,0,_)},Yl=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((f,m)=>f*m,1)===0){r.length=0;for(let f=2;f<t[1].dims.length;++f)r.push(t[1].dims[f])}let n=e.format==="NHWC";r.splice(0,0,t[1].dims[0]),r.splice(n?3:1,0,t[1].dims[1]);let a=e.pads.slice(),i=e.outputShape.slice(),s=e.outputPadding.slice(),o=t[0].dims,u=e.dilations.slice();if(u.reduce((f,m)=>f+m,0)===0){let f=t[0].dims.length-2;u=new Array(f).fill(1)}let d=e.strides.slice();if(d.reduce((f,m)=>f+m,0)===0){let f=t[0].dims.length-2;d=new Array(f).fill(1)}ng(o,r,u,e.autoPad,e.group,a,d,n,s,i);let p=Object.assign({},e);return Object.assign(p,{kernelShape:r,pads:a,outputPadding:s,outputShape:i,dilations:u,strides:d}),p},kw=e=>{let t=Uc(e),r=e.format,n=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],a=e.dilations,i=e.group,s=e.kernelShape,o=e.pads,u=e.strides,d=e.wIsConst(),p=e.outputPadding,f=e.outputShape;return{autoPad:n,format:r,dilations:a,group:i,kernelShape:s,outputPadding:p,outputShape:f,pads:o,strides:u,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},ig=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],n=e[1].dims[0];if(r!==n)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let a=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==a))throw new Error("invalid bias");let i=e[0].dims.length-2;if(t.dilations.reduce((s,o)=>s+o,0)>0&&t.dilations.length!==i)throw new Error(`dilations should be ${i}D`);if(t.strides.reduce((s,o)=>s+o,0)>0&&t.strides.length!==i)throw new Error(`strides should be ${i}D`);if(t.pads.reduce((s,o)=>s+o,0)>0&&t.pads.length!==i*2)throw new Error(`pads should be ${i*2}D`);if(t.outputPadding.length!==i&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${i}D`);if(t.kernelShape.reduce((s,o)=>s+o,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},Zl=(e,t,r,n)=>{let a=e.kernelCustomData.wT??e.compute(Et(t[1],[2,3,0,1]),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=a);let i=[t[0],a];t.length===3&&i.push(t[2]),e.compute(bw(i,r,n),{inputs:i})},ag=(e,t)=>{let r=t.format==="NHWC",n=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&n.push(e.inputs[2]);let a=t.kernelShape;(a.length===0||a[0]===0)&&(a=[e.inputs[1].dims[2]]);let i=t.dilations;(i.length===0||i[0]===0)&&(i=[1]);let s=t.strides;(s.length===0||s[0]===0)&&(s=[1]);let o=t.pads;o.length===0&&(o=[0,0]),o=[0,o[0],0,o[1]],s=[1].concat(s),i=[1].concat(i),a=[1].concat(a);let u=t.outputPadding;u=[0].concat(u);let d=Yl({...t,pads:o,strides:s,dilations:i,kernelShape:a,outputPadding:u},n);Zl(e,n,d,p=>r?[p[0],p[2],p[3]]:[p[0],p[1],p[3]])},Sw=(e,t)=>{if(ig(e.inputs,t),e.inputs[0].dims.length===3)ag(e,t);else{let r=Yl(t,e.inputs);Zl(e,e.inputs,r)}}}),sg,Cw,Ew,Uk=V(()=>{se(),de(),Pe(),ce(),sg=(e,t,r,n)=>{let a=D.size(t),i=t.length,s=B("input",e,i),o=ee("output",e,i),u=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),d=D.normalizeAxis(u,i),p=f=>{let m=` i32(${s.indicesGet("inputIndices","uniforms.axis")}) `,_=ne("uniforms.input_shape","uniforms.axis",i),w=n.reverse?m+(n.exclusive?" + 1":""):"0",$=n.reverse?_:m+(n.exclusive?"":" + 1");return`
                ${f.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(s,o)}
                ${f.mainStart()}
                  ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${o.offsetToIndices("global_idx")};
                  var sum = ${o.type.value}(0);
                  let first : i32 = ${w};
                  let last : i32 = ${$};
                  for (var i : i32 = first; i < last; i++) {
                    ${s.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${s.getByIndices("inputIndices")};
                  }
                  ${o.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:n.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},{type:12,data:d},...ie(t,t)]}),getShaderSource:p}},Cw=(e,t)=>{let r=e.inputs[0].dims,n=e.inputs[0].dataType,a=e.inputs[1];e.compute(sg(n,r,a,t),{inputs:[0]})},Ew=e=>{let t=e.exclusive===1,r=e.reverse===1;return _e({exclusive:t,reverse:r})}}),og,lg,ug,Tw,Iw,jk=V(()=>{se(),de(),Pe(),ce(),og=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},lg=(e,t,r,n)=>{let a=[];a.push(`fn perm(i: ${n.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let i=0;i<t;++i)a.push(r.indicesSet("a",e[i],`i[${i}]`));return a.push("return a;}"),a.join(`
`)},ug=(e,t)=>{let r,n,a,i,s,o,u=t.format==="NHWC",d=t.blocksize,p=t.mode==="DCR";u?([r,n,a,i]=e.dims,s=p?[r,n,a,d,d,i/d**2]:[r,n,a,i/d**2,d,d],o=p?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,n,a,i]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],s=p?[r,d,d,i/d**2,n,a]:[r,i/d**2,d,d,n,a],o=p?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let f=e.reshape(s),m=f.dims.length,_=e.dataType,w=B("a",_,m),$=ee("output",_,m),S=y=>`
  ${y.registerUniform("output_size","u32").declareVariables(w,$)}

  ${lg(o,m,w,$)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${$.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${$.setByOffset("global_idx",w.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:y=>{let g=u?[r,n*d,a*d,i/d**2]:[r,i/d**2,n*d,a*d],x=D.size(g),k=f.dims,E=D.sortBasedOnPerm(k,o);return{outputs:[{dims:g,dataType:y[0].dataType}],dispatchGroup:{x:Math.ceil(x/64)},programUniforms:[{type:12,data:x},...ie(k,E)]}},getShaderSource:S}},Tw=(e,t)=>{og(e.inputs),e.compute(ug(e.inputs[0],t))},Iw=e=>_e({blocksize:e.blocksize,mode:e.mode,format:e.format})}),hs,Li,Jl,dg,cg,pg,fg,eu,hg,zw,Aw,Wk=V(()=>{se(),de(),Pe(),ce(),hs="[a-zA-Z]|\\.\\.\\.",Li="("+hs+")+",Jl="^"+Li+"$",dg="("+Li+",)*"+Li,cg="^"+dg+"$",pg=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let r=this.symbolToIndices.get(e);r===void 0?r=[t]:r.push(t),this.symbolToIndices.set(e,r)}},fg=class{constructor(e,t){var a;this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,n]=t.includes("->")?t.split("->",2):[t,""];if(!r.match(RegExp(cg)))throw new Error("Invalid LHS term");if(r.split(",").forEach((i,s)=>{let o=e[s].dims.slice();if(!i.match(RegExp(Jl)))throw new Error("Invalid LHS term");let u=this.processTerm(i,!0,o,s);this.lhs.push(u)}),n==="")n+=[...this.symbolToInfo.entries()].filter(([i,s])=>s.count===1||i==="...").map(([i])=>i).join("");else if(!n.match(RegExp(Li)))throw new Error("Invalid RHS");(a=n.match(RegExp(hs,"g")))==null||a.forEach(i=>{if(i==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let s=this.symbolToInfo.get(i);if(s===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(s.dimValue)}}),this.rhs=this.processTerm(n,!1,this.outputDims)}addSymbol(e,t,r){let n=this.symbolToInfo.get(e);if(n!==void 0){if(n.dimValue!==t&&n.count!==1)throw new Error("Dimension mismatch");n.count++,n.inputIndices.push(r)}else n={count:1,dimValue:t,inputIndices:[r]};this.symbolToInfo.set(e,n)}processTerm(e,t,r,n=-1){let a=r.length,i=!1,s=[],o=0;if(!e.match(RegExp(Jl))&&!t&&e!=="")throw new Error("Invalid LHS term");let u=e.match(RegExp(hs,"g")),d=new pg(n);return u==null||u.forEach((p,f)=>{if(p==="..."){if(i)throw new Error("Only one ellipsis is allowed per input term");i=!0;let m=a-u.length+1;if(m<0)throw new Error("Ellipsis out of bounds");if(s=r.slice(o,o+m),this.hasEllipsis){if(this.ellipsisDims.length!==s.length||this.ellipsisDims.toString()!==s.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=s;else throw new Error("Ellipsis must be specified in the LHS");for(let _=0;_<s.length;_++){let w=String.fromCharCode(48+_);d.addSymbol(w,f+_),this.addSymbol(w,r[o++],n)}}else d.addSymbol(p,f+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(p,r[o++],n)}),d}},eu=e=>e+"_max",hg=(e,t,r,n)=>{let a=e.map(d=>d.length).map((d,p)=>B(`input${p}`,t,d)),i=D.size(n),s=ee("output",t,n.length),o=[...r.symbolToInfo.keys()].filter(d=>!r.rhs.symbolToIndices.has(d)),u=d=>{let p=[],f="var prod = 1.0;",m="var sum = 0.0;",_="sum += prod;",w=[],$=[],S=[],y=[],g=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach((k,E)=>{var T;if(r.rhs.symbolToIndices.has(E)){let I=(T=r.rhs.symbolToIndices.get(E))==null?void 0:T[0];I!==void 0&&r.lhs.forEach((z,N)=>{if(k.inputIndices.includes(N)){let L=z.symbolToIndices.get(E);if(L===void 0)throw new Error("Invalid symbol error");L.forEach(X=>{p.push(`${a[N].indicesSet(`input${N}Indices`,X,s.indicesGet("outputIndices",I))}`)})}})}else r.lhs.forEach((I,z)=>{if(k.inputIndices.includes(z)){let N=I.symbolToIndices.get(E);if(N===void 0)throw new Error("Invalid symbol error");N.forEach(L=>{w.push(`${a[z].indicesSet(`input${z}Indices`,L,`${E}`)}`)}),y.push(`prod *= ${a[z].getByIndices(`input${z}Indices`)};`)}}),$.push(`for(var ${E}: u32 = 0; ${E} < uniforms.${eu(E)}; ${E}++) {`),S.push("}")});let x=g?[...p,`let sum = ${a.map((k,E)=>k.getByIndices(`input${E}Indices`)).join(" * ")};`]:[...p,m,...$,...w,f,...y,_,...S];return`
            ${d.registerUniforms(o.map(k=>({name:`${eu(k)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...a,s)}

            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${s.offsetToIndices("global_idx")};
            ${a.map((k,E)=>`var input${E}Indices: ${a[E].type.indices};`).join(`
`)}
            ${x.join(`
`)};
            ${s.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let d=o.filter(f=>r.symbolToInfo.has(f)).map(f=>{var m;return{type:12,data:((m=r.symbolToInfo.get(f))==null?void 0:m.dimValue)||0}});d.push({type:12,data:i});let p=e.map((f,m)=>[...ie(f)]).reduce((f,m)=>f.concat(m),d);return p.push(...ie(n)),{outputs:[{dims:n,dataType:t}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:p}},getShaderSource:u}},zw=(e,t)=>{let r=new fg(e.inputs,t.equation),n=r.outputDims,a=e.inputs.map((i,s)=>i.dims);e.compute(hg(a,e.inputs[0].dataType,r,n))},Aw=e=>{let t=e.equation.replace(/\s+/g,"");return _e({equation:t})}}),mg,tu,gg,yg,Ow,Fk=V(()=>{se(),de(),ce(),mg=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),n=r.length<t.length?0:r.length-t.length,a=t.length<r.length?0:t.length-r.length;for(;n<r.length&&a<t.length;++n,++a)if(r[n]!==t[a]&&r[n]!==1&&t[a]!==1)throw new Error("Expand requires shape to be broadcastable to input")},tu=(e,t)=>{let r=e.length-t.length,n=[];for(let a=0;a<r;++a)n.push(e[a]);for(let a=0;a<t.length;++a)n.push(t[a]===1?e[a+r]:t[a]);return n},gg=(e,t)=>e.length>t.length?tu(e,t):tu(t,e),yg=e=>{let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),n=gg(t,r),a=e[0].dataType,i=a===9||D.size(t)===1,s=a===9||t.length>0&&t[t.length-1]%4===0?4:1,o=i||n.length>0&&n[n.length-1]%4===0?4:1,u=Math.ceil(D.size(n)/o),d=f=>{let m=B("input",a,t.length,s),_=ee("output",a,n.length,o),w;if(a===9){let $=(S,y,g="")=>`
          let outputIndices${y} = ${_.offsetToIndices(`outputOffset + ${y}u`)};
          let offset${y} = ${m.broadcastedIndicesToOffset(`outputIndices${y}`,_)};
          let index${y} = offset${y} / 4u;
          let component${y} = offset${y} % 4u;
          ${S}[${y}] = ${g}(${m.getByOffset(`index${y}`)}[component${y}]);
        `;w=`
        let outputOffset = global_idx * ${o};
        var data = vec4<u32>(0);
        ${$("data",0,"u32")}
        ${$("data",1,"u32")}
        ${$("data",2,"u32")}
        ${$("data",3,"u32")}
        ${_.setByOffset("global_idx","data")}
      }`}else w=`
        let outputIndices = ${_.offsetToIndices(`global_idx * ${o}`)};
        let inputOffset = ${m.broadcastedIndicesToOffset("outputIndices",_)};
        let data = ${_.type.value}(${m.getByOffset(`inputOffset / ${s}`)});
        ${_.setByOffset("global_idx","data")}
      }`;return`
    ${f.registerUniform("vec_size","u32").declareVariables(m,_)}
    ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${w}`},p=[{type:12,data:u},...ie(t,n)];return{name:"Expand",shaderCache:{hint:`${n.length};${s}${o}`,inputDependencies:["rank"]},getShaderSource:d,getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:p})}},Ow=e=>{mg(e.inputs),e.compute(yg(e.inputs),{inputs:[0]})}}),vg,Nw,Vk=V(()=>{se(),de(),ce(),Lc(),vg=e=>{let t=e[0].dataType,r=D.size(e[0].dims),n=D.size(e[1].dims),a=n%4===0,i=s=>{let o=B("x",t,[1],4),u=B("bias",t,[1],4),d=ee("y",t,[1],4),p=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],f=_=>`
      let bias${_}_offset: u32 = (global_idx * 4 + ${_}) % uniforms.bias_size;
      let bias${_} = ${u.getByOffset(`bias${_}_offset / 4`)}[bias${_}_offset % 4];`,m=a?`
      let bias = ${u.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${f(0)}${f(1)}${f(2)}${f(3)}
      let bias = ${o.type.value}(bias0, bias1, bias2, bias3);`;return`${s.registerUniforms(p).declareVariables(o,u,d)}

    ${wd(rt(t))}

    ${s.mainStart(mi)}
      ${s.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${o.getByOffset("global_idx")};
      ${m}
      let x_in = x + bias;
      ${d.setByOffset("global_idx",$d("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${a}`,inputDependencies:["type","type"]},getShaderSource:i,getRunData:s=>({outputs:[{dims:s[0].dims,dataType:s[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:n}],dispatchGroup:{x:Math.ceil(r/mi/4)}})}},Nw=e=>{e.inputs.length<2||D.size(e.inputs[1].dims)===0?J_(e):e.compute(vg(e.inputs))}}),_g,wg,Rw,Dw,qk=V(()=>{se(),de(),Pe(),ce(),_g=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},wg=(e,t)=>{let r=e[0].dims,n=e[1].dims,a=r.length,i=D.normalizeAxis(t.axis,a),s=r.slice(0);s.splice(i,1,...n);let o=r[i],u=e[0].dataType===9?4:1,d=Math.ceil(D.size(s)/u),p=[{type:12,data:d},{type:6,data:o},{type:12,data:i},...ie(e[0].dims,e[1].dims,s)],f=m=>{let _=B("data",e[0].dataType,e[0].dims.length,u),w=B("inputIndices",e[1].dataType,e[1].dims.length),$=ee("output",e[0].dataType,s.length,u),S=g=>{let x=n.length,k=`var indicesIndices${g}  = ${w.type.indices}(0);`;for(let E=0;E<x;E++)k+=`${x>1?`indicesIndices${g}[${E}]`:`indicesIndices${g}`} = ${s.length>1?`outputIndices${g}[uniforms.axis + ${E}]`:`outputIndices${g}`};`;k+=`
          var idx${g} = ${w.getByIndices(`indicesIndices${g}`)};
          if (idx${g} < 0) {
            idx${g} = idx${g} + uniforms.axisDimLimit;
          }
          var dataIndices${g} : ${_.type.indices};
        `;for(let E=0,T=0;E<a;E++)E===i?(k+=`${a>1?`dataIndices${g}[${E}]`:`dataIndices${g}`} = u32(idx${g});`,T+=x):(k+=`${a>1?`dataIndices${g}[${E}]`:`dataIndices${g}`} = ${s.length>1?`outputIndices${g}[${T}]`:`outputIndices${g}`};`,T++);return k},y;if(e[0].dataType===9){let g=(x,k,E="")=>`
          let outputIndices${k} = ${$.offsetToIndices(`outputOffset + ${k}u`)};
          ${S(k)};
          let offset${k} = ${_.indicesToOffset(`dataIndices${k}`)};
          let index${k} = offset${k} / 4u;
          let component${k} = offset${k} % 4u;
          ${x}[${k}] = ${E}(${_.getByOffset(`index${k}`)}[component${k}]);
        `;y=`
        let outputOffset = global_idx * ${u};
        var value = vec4<u32>(0);
        ${g("value",0,"u32")}
        ${g("value",1,"u32")}
        ${g("value",2,"u32")}
        ${g("value",3,"u32")}
        ${$.setByOffset("global_idx","value")}
      `}else y=`
      let outputIndices = ${$.offsetToIndices("global_idx")};
      ${S("")};
      let value = ${_.getByIndices("dataIndices")};
      ${$.setByOffset("global_idx","value")};
      `;return`
      ${m.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(_,w,$)}
      ${m.mainStart()}
        ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${y}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:p}),getShaderSource:f}},Rw=e=>_e({axis:e.axis}),Dw=(e,t)=>{let r=e.inputs;_g(r),e.compute(wg(e.inputs,t))}}),$g,Mw,Pw,Hk=V(()=>{se(),de(),ce(),$g=(e,t,r,n,a,i,s,o,u)=>{let d=[{type:12,data:i},{type:12,data:n},{type:12,data:a},{type:12,data:r},{type:12,data:s},{type:12,data:o},{type:12,data:u}],p=[i];d.push(...ie(t.dims,p));let f=m=>{let _=B("indices_data",t.dataType,t.dims.length),w=ee("input_slice_offsets_data",12,1,1),$=[_,w],S=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:a.length},{name:"sizes_from_slice_dims_data",type:"u32",length:r.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${m.registerUniforms(S).declareVariables(...$)}
  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${a.length===1?"index += i32(uniforms.input_dims);":"index += i32(uniforms.input_dims[input_dim_idx]);"}
      }
      ${r.length===1?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${a.length}_${r.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:p,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:d}),getShaderSource:f},{inputs:[t],outputs:[-1]})[0]},Mw=(e,t)=>{let r=e.inputs,n=r[0].dims,a=r[0].dataType,i=r[1].dims,s=i[i.length-1],o=D.sizeToDimension(i,i.length-1),u=D.sizeFromDimension(n,t.batchDims+s),d=D.sizeToDimension(n,t.batchDims),p=D.sizeFromDimension(n,t.batchDims),f=o/d,m=new Array(s),_=u;for(let k=0;k<s;++k)m[s-1-k]=_,_*=n[t.batchDims+s-1-k];let w=$g(e,r[1],m,t.batchDims,n,o,f,p,s),$=t.batchDims+s;if($>n.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let S=i.slice(0,-1).concat(n.slice($)),y=D.size(S),g=[{type:12,data:y},{type:12,data:u},...ie(r[0].dims,w.dims,S)],x=k=>{let E=B("data",r[0].dataType,r[0].dims.length),T=B("slice_offsets",12,w.dims.length),I=ee("output",r[0].dataType,S.length);return`
          ${k.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(E,T,I)}
            ${k.mainStart()}
            ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:S,dataType:a}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:g}),getShaderSource:x},{inputs:[r[0],w]})},Pw=e=>({batchDims:e.batch_dims,cacheKey:""})}),xg,bg,Bw,Lw,Gk=V(()=>{se(),de(),Pe(),ce(),xg=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=D.normalizeAxis(t.quantizeAxis,e[0].dims.length),n=t.blockSize,a=e[0],i=e[2],s=e.length===4?e[3]:void 0;if(i.dims.length!==a.dims.length||!a.dims.map((o,u)=>u===r?Math.ceil(o/n)===i.dims[u]:o===i.dims[u]).reduce((o,u)=>o&&u,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(s){if(s.dataType!==a.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(s.dims.length!==i.dims.length||!s.dims.map((o,u)=>o===i.dims[u]).reduce((o,u)=>o&&u,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},bg=(e,t)=>{let r=e[0].dims,n=e[1].dims,a=r.length,i=D.normalizeAxis(t.gatherAxis,a),s=D.normalizeAxis(t.quantizeAxis,a),o=r.slice(0);o.splice(i,1,...n);let u=D.size(o),d=e[2].dataType,p=e[0].dataType===22,f=[{type:12,data:u},{type:12,data:s},{type:12,data:i},{type:12,data:t.blockSize},...ie(...e.map((_,w)=>_.dims),o)],m=_=>{let w=B("data",e[0].dataType,e[0].dims.length),$=B("inputIndices",e[1].dataType,e[1].dims.length),S=B("scales",e[2].dataType,e[2].dims.length),y=e.length>3?B("zeroPoint",e[3].dataType,e[3].dims.length):void 0,g=ee("output",d,o.length),x=[w,$,S];y&&x.push(y);let k=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${_.registerUniforms(k).declareVariables(...x,g)}
        ${_.mainStart()}
        let output_indices = ${g.offsetToIndices("global_idx")};
        var indices_indices = ${$.type.indices}(0);
        ${n.length>1?`
          for (var i: u32 = 0; i < ${n.length}; i++) {
            let index = ${g.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${$.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${g.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${w.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${g.indicesGet("output_indices","i")};
          ${w.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${$.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${r[i]};
        }
        ${w.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${o.length}; i++) {
          let index = ${g.indicesGet("output_indices",`i + ${n.length} - 1`)};
          ${w.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${w.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${w.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${p?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${S.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${S.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${S.getByIndices("scale_indices")};
        ${y?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${y.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${y.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${p?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${rt(d)}(quantized_data - zero_point) * scale;
        ${g.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((_,w)=>w!==1).map(_=>_.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(_,w)=>"rank")},getRunData:()=>({outputs:[{dims:o,dataType:d}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:f}),getShaderSource:m}},Bw=(e,t)=>{let r=e.inputs;xg(r,t),e.compute(bg(e.inputs,t))},Lw=e=>_e({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),kg,Sg,Uw,jw,Kk=V(()=>{se(),de(),Pe(),ce(),kg=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},Sg=(e,t)=>{let r=e[0].dims,n=e[0].dataType,a=r.length,i=e[1].dims,s=e[1].dataType,o=D.normalizeAxis(t.axis,a),u=r[o],d=i.slice(0),p=D.size(d),f=B("input",n,a),m=B("indicesInput",s,i.length),_=ee("output",n,d.length),w=[{type:12,data:p},{type:6,data:u},{type:12,data:o}];return w.push(...ie(r,i,d)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:d,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:w}),getShaderSource:$=>`
      ${$.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(f,m,_)}
      ${$.mainStart()}
      ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${_.offsetToIndices("global_idx")};

      var idx = ${m.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${f.type.indices}(outputIndices);
      ${f.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${f.getByIndices("inputIndices")};

      ${_.setByOffset("global_idx","value")};
  }`}},Uw=e=>_e({axis:e.axis}),jw=(e,t)=>{let r=e.inputs;kg(r),e.compute(Sg(e.inputs,t))}}),Cg,Eg,Ww,Fw,Qk=V(()=>{se(),de(),ce(),Cg=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},Eg=(e,t)=>{let r=e[0].dims.slice(),n=e[1].dims.slice(),[a,i,s]=Uv.getShapeOfGemmResult(r,t.transA,n,t.transB,e.length===3?e[2].dims:void 0),o=[a,i];if(!o)throw new Error("Can't use gemm on the given tensors");let u=16,d=Math.ceil(i/u),p=Math.ceil(a/u),f=!0,m=D.size(o),_=[{type:12,data:f?d:m},{type:12,data:a},{type:12,data:i},{type:12,data:s},{type:1,data:t.alpha},{type:1,data:t.beta}],w=["type","type"];e.length===3&&(_.push(...ie(e[2].dims)),w.push("rank")),_.push(...ie(o));let $=y=>{let g="";t.transA&&t.transB?g="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?g="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?g="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(g="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let x=t.alpha===1?"":"value *= uniforms.alpha;",k=B("a",e[0].dataType,e[0].dims),E=B("b",e[1].dataType,e[1].dims),T=k.type.value,I=null,z=[k,E];e.length===3&&(I=B("c",e[2].dataType,e[2].dims.length),z.push(I));let N=ee("output",e[0].dataType,o.length);z.push(N);let L=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${y.registerUniforms(L).declareVariables(...z)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${T}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${g}
    }

    ${x}
    ${I!=null?`let cOffset = ${I.broadcastedIndicesToOffset("vec2(m, n)",N)}; value += ${T}(uniforms.beta) * ${I.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},S=y=>{let g=B("a",e[0].dataType,e[0].dims),x=B("b",e[1].dataType,e[1].dims),k=null,E=[g,x];e.length===3&&(k=B("c",e[2].dataType,e[2].dims.length),E.push(k));let T=ee("output",e[0].dataType,o.length);E.push(T);let I=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],z="",N="";t.transA&&t.transB?(N=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${g.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${x.type.value}(0);
      }
      `,z="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(N=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${g.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${x.type.value}(0);
      }
      `,z="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(N=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${g.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${x.type.value}(0);
      }
      `,z="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(N=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${g.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${x.type.value}(0);
      }
      `,z="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let L=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${y.registerUniforms(I).declareVariables(...E)}
  var<workgroup> tile_a: array<array<${g.type.storage}, ${u}>, ${u}>;
  var<workgroup> tile_b: array<array<${x.type.storage}, ${u}>, ${u}>;
  ${y.mainStart([u,u,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${u};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${u};
    let num_tiles = (uniforms.K - 1) / ${u} + 1;
    var k_start = 0u;
    var value = ${T.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${N}
      k_start = k_start + ${u};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${u}; k++) {
        ${z}
      }
      workgroupBarrier();
    }

    ${L}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${k!=null?`let cOffset = ${k.broadcastedIndicesToOffset("vec2(m, n)",T)}; value += ${T.type.value}(uniforms.beta) * ${k.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return f?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:d*p},programUniforms:_}),getShaderSource:S}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:_}),getShaderSource:$}},Ww=e=>{let t=e.transA,r=e.transB,n=e.alpha,a=e.beta;return{transA:t,transB:r,alpha:n,beta:a,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},Fw=(e,t)=>{Cg(e.inputs),e.compute(Eg(e.inputs,t))}}),nr,hr,dn,cn,Tg,Ig,zg,Ag,Og,Ng,Rg,Dg,Vw,qw,Xk=V(()=>{se(),de(),Pe(),ce(),[nr,hr,dn,cn]=[0,1,2,3],Tg=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},Ig=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,zg=e=>`
  fn gs_bicubic_interpolate(p: mat4x4<${e}>, x: f32, y: f32) -> ${e} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${e}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,Ag=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,Og=e=>`
  ${e.paddingMode==="reflection"?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:""}
`,Ng=(e,t,r)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${nr}] = batch;
     indices[${hr}] = channel;`+(()=>{switch(r.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${dn}] = u32(r);
            indices[${cn}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${dn}] = u32(clamp(r, 0, H - 1));
          indices[${cn}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${dn}] = gs_reflect(r, border[1], border[3]);
          indices[${cn}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${r.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,Rg=(e,t,r)=>(()=>{switch(r.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${nr}], indices[${hr}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${nr}], indices[${hr}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${nr}], indices[${hr}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${nr}], indices[${hr}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${nr}], indices[${hr}], border);

          let dx2 = ${t}(f32(x2) - x);
          let dx1 = ${t}(x - f32(x1));
          let dy2 = ${t}(f32(y2) - y);
          let dy1 = ${t}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case"bicubic":return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${t}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${nr}], indices[${hr}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${r.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,Dg=(e,t)=>{let r=B("x",e[0].dataType,e[0].dims.length),n=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],a=B("grid",e[1].dataType,n.length,2),i=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(i=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[nr,hr,dn,cn]=[0,3,1,2]);let s=ee("output",e[0].dataType,i.length),o=r.type.value,u=D.size(i),d=[{type:12,data:u},...ie(e[0].dims,n,i)],p=f=>`
  ${f.registerUniform("output_size","u32").declareVariables(r,a,s)}
  ${Ig}
  ${zg(o)}
  ${Ag(t)}
  ${Og(t)}
  ${Ng(r,o,t)}

  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${dn}]);
      let W_in = i32(uniforms.x_shape[${cn}]);

      ${t.alignCorners===0?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${s.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${nr}], indices[${dn}], indices[${cn}]);
      let nxy = ${a.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${Rg(s,o,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:f=>{let m=D.size(i);return{outputs:[{dims:i,dataType:f[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:d}},getShaderSource:p}},Vw=(e,t)=>{Tg(e.inputs),e.compute(Dg(e.inputs,t))},qw=e=>_e({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),ot,Mg,Hw,ru,Pg,Yi,Gw,Kw=V(()=>{se(),de(),Pe(),Dc(),Bc(),ce(),nn(),ot=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,Mg=(e,t)=>{let r=e[0],n=ot(e,1),a=ot(e,2),i=ot(e,3),s=ot(e,4),o=ot(e,5),u=ot(e,6),d=ot(e,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let p=r.dims[0],f=r.dims[1],m=r.dims.length===3?r.dims[2]:t.numHeads*r.dims[4],_=f,w=0,$=0,S=Math.floor(m/t.numHeads);if(u&&d&&D.size(u.dims)&&D.size(d.dims)){if(u.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(u.dims[0]!==p||u.dims[1]!==t.numHeads||u.dims[3]!==S)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(d.dims[0]!==p||d.dims[1]!==t.numHeads||d.dims[3]!==S)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(u.dims[2]!==d.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(d.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');w=u.dims[2],$=u.dims[2]}else if(u&&D.size(u.dims)||d&&D.size(d.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let y;if(n&&D.size(n.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(n.dims.length<3||n.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(n.dims.length===3){if(n.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');y=2,_=n.dims[1]}else if(n.dims.length===5){if(n.dims[2]!==t.numHeads||n.dims[3]!==2||n.dims[4]!==S)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(a)throw new Error('Expect "value" be none when "key" has packed kv format.');y=5,_=n.dims[1]}else{if(n.dims[1]!==t.numHeads||n.dims[3]!==S)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');y=0,_=n.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==t.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');y=3}if(i&&D.size(i.dims)>0){if(i.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(n&&n.dims.length===5&&n.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let g=w+_,x=0;if(s&&D.size(s.dims)>0){x=8;let I=s.dims;throw I.length===1?I[0]===p?x=1:I[0]===3*p+2&&(x=3):I.length===2&&I[0]===p&&I[1]===g&&(x=5),x===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let k=!1,E=m;if(a&&D.size(a.dims)>0){if(a.dims.length!==3&&a.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(a.dims.length===3){if(_!==a.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');E=a.dims[2]}else{if(_!==a.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');E=a.dims[1]*a.dims[3],k=!0}}let T=!1;if(s&&D.size(s.dims)>0)throw new Error("Key padding mask is not supported");if(o&&D.size(o.dims)>0){if(o.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(o.dims[0]!==p||o.dims[1]!==t.numHeads||o.dims[2]!==f||o.dims[3]!==g)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:p,sequenceLength:f,pastSequenceLength:w,kvSequenceLength:_,totalSequenceLength:g,maxSequenceLength:$,inputHiddenSize:0,hiddenSize:m,vHiddenSize:E,headSize:S,vHeadSize:Math.floor(E/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:x,scale:t.scale,broadcastResPosBias:T,passPastInKv:k,qkvFormat:y}},Hw=e=>_e({...e}),ru=_e({perm:[0,2,1,3]}),Pg=(e,t,r,n,a,i,s)=>{let o=[n,a,i],u=D.size(o),d=[{type:12,data:u},{type:12,data:s},{type:12,data:i}],p=f=>{let m=ee("qkv_with_bias",t.dataType,o),_=B("qkv",t.dataType,o),w=B("bias",r.dataType,o),$=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${f.registerUniforms($).declareVariables(_,w,m)}
  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:o,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:d}),getShaderSource:p},{inputs:[t,r],outputs:[-1]})[0]},Yi=(e,t,r,n,a,i,s,o)=>{let u=i;if(s&&D.size(s.dims)>0){if(n===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return u=Pg(e,i,s,t,n,r*a,o),u=u.reshape([t,n,r,a]),r===1||n===1?u:e.compute(Et(u,ru.perm),{inputs:[u],outputs:[-1]})[0]}else return i.dims.length===3&&(u=i.reshape([t,n,r,a])),r===1||n===1?u:e.compute(Et(u,ru.perm),{inputs:[u],outputs:[-1]})[0]},Gw=(e,t)=>{let r=Mg(e.inputs,t),n=e.inputs[0],a=ot(e.inputs,1),i=ot(e.inputs,2),s=ot(e.inputs,3),o=ot(e.inputs,4),u=ot(e.inputs,5),d=ot(e.inputs,6),p=ot(e.inputs,7);if(n.dims.length===5)throw new Error("Packed QKV is not implemented");if((a==null?void 0:a.dims.length)===5)throw new Error("Packed KV is not implemented");let f=a&&i&&a.dims.length===4&&i.dims.length===4,m=Yi(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,n,s,0);if(f)return Ca(e,m,a,i,o,void 0,d,p,u,r);if(!a||!i)throw new Error("key and value must be provided");let _=Yi(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,a,s,r.hiddenSize),w=Yi(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,i,s,2*r.hiddenSize);Ca(e,m,_,w,o,void 0,d,p,u,r)}}),Bg,Lg,Ug,jg,Cd,Qw,Xw,Yw=V(()=>{se(),de(),Pe(),ce(),Bg=e=>{if(!e||e.length<1)throw new Error("too few inputs")},Lg=(e,t)=>{let r=[],n=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(a=>r.push(Number(a))),n=r.length),_e({numOutputs:n,axis:t.axis,splitSizes:r})},Ug=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${ne("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,jg=e=>{let t=e.length,r=[];for(let n=0;n<t;++n){let a=e[n].setByIndices("indices","input[global_idx]");t===1?r.push(a):n===0?r.push(`if (output_number == ${n}u) { ${a} }`):n===t-1?r.push(`else { ${a} }`):r.push(`else if (output_number == ${n}) { ${a} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},Cd=(e,t)=>{let r=e[0].dims,n=D.size(r),a=e[0].dataType,i=D.normalizeAxis(t.axis,r.length),s=new Array(t.numOutputs),o=B("input",a,r.length),u=new Array(t.numOutputs),d=[],p=[],f=0,m=[{type:12,data:n}];for(let w=0;w<t.numOutputs;w++){f+=t.splitSizes[w],u[w]=f;let $=r.slice();$[i]=t.splitSizes[w],p.push($),s[w]=ee(`output${w}`,a,$.length),d.push({dims:p[w],dataType:e[0].dataType})}m.push({type:12,data:u},...ie(r,...p));let _=w=>`
  ${w.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",u.length).declareVariables(o,...s)}
  ${Ug(u.length)}
  ${jg(s)}

  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${o.offsetToIndices("global_idx")};
    var index = ${o.indicesGet("indices",i)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${ne("uniforms.size_in_split_axis","output_number - 1u",u.length)};
      ${o.indicesSet("indices",i,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:_,getRunData:()=>({outputs:d,dispatchGroup:{x:Math.ceil(n/64)},programUniforms:m})}},Qw=(e,t)=>{Bg(e.inputs);let r=e.inputs.length===1?t:Lg(e.inputs,t);e.compute(Cd(e.inputs,r),{inputs:[0]})},Xw=e=>{let t=e.axis,r=e.splitSizes,n=e.numOutputs<0?r.length:e.numOutputs;if(n!==r.length)throw new Error("numOutputs and splitSizes length must be equal");return _e({axis:t,numOutputs:n,splitSizes:r})}}),Wg,lo,Zw,Jw=V(()=>{se(),de(),Pe(),ce(),Wg=(e,t)=>{let[r,n,a,i]=e,{numHeads:s,rotaryEmbeddingDim:o}=t;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!D.areEqual(n.dims,[])&&!D.areEqual(n.dims,[1])&&n.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${n.dims.length}`);if(a.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(i.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(!D.areEqual(a.dims,i.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(o>0&&s===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let u=r.dims[0],d=r.dims[r.dims.length-2],p=a.dims[0],f=D.sizeFromDimension(r.dims,1)/d,m=o===0?a.dims[1]*2:f/s;if(o>m)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(n.dims.length===2){if(u!==n.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${n.dims[0]}`);if(d!==n.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${n.dims[1]}`)}if(m/2!==a.dims[1]&&o/2!==a.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${a.dims[1]}`);if(d>p)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported")},lo=(e,t)=>{let{interleaved:r,numHeads:n,rotaryEmbeddingDim:a,scale:i}=t,s=e[0].dims[0],o=D.sizeFromDimension(e[0].dims,1),u=e[0].dims[e[0].dims.length-2],d=o/u,p=e[2].dims[1],f=a===0?p*2:d/n,m=new Array(s,u,d/f,f-p),_=D.computeStrides(m),w=[{type:1,data:i},{type:12,data:m},{type:12,data:_},...e[0].dims.length===3?new Array({type:12,data:[o,d,f,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[o,f,u*f,1]}):[],...ie(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],$=S=>{let y=B("input",e[0].dataType,e[0].dims.length),g=B("position_ids",e[1].dataType,e[1].dims.length),x=B("cos_cache",e[2].dataType,e[2].dims.length),k=B("sin_cache",e[3].dataType,e[3].dims.length),E=ee("output",e[0].dataType,e[0].dims.length);return S.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:m.length},{name:"global_strides",type:"u32",length:_.length},{name:"input_output_strides",type:"u32",length:_.length}]),`
        ${S.declareVariables(y,g,x,k,E)}

        ${S.mainStart(mi)}
          let half_rotary_emb_dim = uniforms.${x.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${S.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${g.broadcastedIndicesToOffset("bsnh.xy",ee("",g.type.tensor,2))};
            let position_id =
                u32(${g.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${r});
            let j = i + select(half_rotary_emb_dim, 1, ${r});
            let re = ${y.getByOffset("i")} * ${x.get("position_id","bsnh[3]")} -
                ${y.getByOffset("j")} * ${k.get("position_id","bsnh[3]")};
            ${E.setByOffset("i","re")}
            let im = ${y.getByOffset("i")} * ${k.get("position_id","bsnh[3]")} +
                ${y.getByOffset("j")} * ${x.get("position_id","bsnh[3]")};
            ${E.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${E.setByOffset("k",y.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:_e({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:$,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(D.size(m)/mi)},programUniforms:w})}},Zw=(e,t)=>{Wg(e.inputs,t),e.compute(lo(e.inputs,t))}}),Fg,Vg,nu,qg,e$,Yk=V(()=>{Pe(),se(),Bc(),Kw(),Yw(),nn(),Jw(),ce(),Fg=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let r=e[0],n=e[1],a=e[2],i=e[3],s=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let o=!1,u=r.dims[0],d=r.dims[1],p=r.dims.length===3?o?r.dims[2]/3:r.dims[2]:t.numHeads*r.dims[4],f=d,m=0,_=!n||n.dims.length===0,w=Math.floor(_?p/(t.numHeads+2*t.kvNumHeads):p/t.numHeads);_&&(p=w*t.numHeads);let $=i&&i.dims.length!==0,S=s&&s.dims.length!==0;if($&&i.dims.length===4&&i.dims[0]===u&&i.dims[1]!==t.kvNumHeads&&i.dims[2]===t.kvNumHeads&&i.dims[3]===w)throw new Error("BSNH pastKey/pastValue is not supported");if($&&S){if(i.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(s.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');m=i.dims[2]}else if($||S)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let y=1;if(n&&n.dims.length>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(n.dims.length<3||n.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(n.dims.length===3){if(r.dims[2]%n.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');f=n.dims[1]}else if(n.dims.length===5){if(n.dims[2]!==t.numHeads||n.dims[3]!==2||n.dims[4]!==w)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(a)throw new Error('Expect "value" be none when "key" has packed kv format.');f=n.dims[1]}else{if(n.dims[1]!==t.numHeads||n.dims[3]!==w)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');f=n.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==t.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');y=3}let g=0,x=!1,k=t.kvNumHeads?w*t.kvNumHeads:p;if(a&&a.dims.length>0){if(a.dims.length!==3&&a.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(a.dims.length===3){if(f!==a.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');k=a.dims[2]}else{if(f!==a.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');k=a.dims[1]*a.dims[3],x=!0}}let E=e.length>4?e[5]:void 0;if(E&&E.dims.length!==1&&E.dims[0]!==u)throw new Error('Input "seqlens" is expected to have 1 dimension and the same dim 0 as batch_size');return{batchSize:u,sequenceLength:d,pastSequenceLength:m,kvSequenceLength:f,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:p,vHiddenSize:k,headSize:w,vHeadSize:Math.floor(k/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:g,scale:t.scale,broadcastResPosBias:!1,passPastInKv:x,qkvFormat:y}},Vg=_e({perm:[0,2,1,3]}),nu=(e,t,r)=>{let n=t,a=r.kvNumHeads;return t.dims.length===3&&r.kvSequenceLength!==0&&(n=t.reshape([r.batchSize,r.kvSequenceLength,a,r.headSize]),n=e.compute(Et(n,Vg.perm),{inputs:[n],outputs:[-1]})[0]),n},qg=(e,t,r,n)=>{let a=7,i=["type","type"],s=[e*t],o=e*t,u=[{type:12,data:o},{type:12,data:t},{type:12,data:e}],d=p=>{let f=B("seq_lens",r.dataType,r.dims),m=B("total_seq_lens",n.dataType,n.dims),_=ee("pos_ids",a,s),w=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${p.registerUniforms(w).declareVariables(f,m,_)}
  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let total_sequence_length = u32(${m.getByOffset("0")});
    let is_subsequent_prompt = uniforms.sequence_length > 1 && uniforms.sequence_length != total_sequence_length;
    let is_first_prompt = !is_subsequent_prompt && uniforms.sequence_length == total_sequence_length;
    let batch_idx = global_idx / uniforms.sequence_length;
    let sequence_idx = i32(global_idx % uniforms.sequence_length);
    var pos_id: i32 = 0;
    let seqlen = ${f.getByOffset("batch_idx")};
    let total_seqlen = seqlen + 1;
    if (is_first_prompt) {
      if (sequence_idx < total_seqlen) {
        pos_id = sequence_idx;
      } else {
        pos_id = 1;
      }
      ${_.setByOffset("global_idx","pos_id")}
    } else if (is_subsequent_prompt) {
      let past_seqlen = total_seqlen - i32(uniforms.sequence_length);
      if (past_seqlen + sequence_idx < total_seqlen) {
        pos_id = past_seqlen + sequence_idx;
      } else {
        pos_id = 1;
      }
      ${_.setByOffset("global_idx","pos_id")}
    } else if (global_idx < uniforms.batch_size) {
      ${_.setByOffset("global_idx","seqlen")}
    };
  }
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:i},getRunData:()=>({outputs:[{dims:s,dataType:a}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:u}),getShaderSource:d}},e$=(e,t)=>{var k;let r=Fg(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((k=e.inputs[1])==null?void 0:k.dims.length)===5)throw new Error("Packed KV is not implemented");let n=e.inputs[0],a=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,i=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,s=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,o=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,u=e.inputs.length>4?e.inputs[5]:void 0,d=e.inputs.length>5?e.inputs[6]:void 0,p=r.kvNumHeads?r.kvNumHeads:r.numHeads,f=_e({axis:2,numOutputs:3,splitSizes:[r.numHeads*r.headSize,p*r.headSize,p*r.headSize]}),[m,_,w]=!a&&!i?e.compute(Cd([n],f),{inputs:[n],outputs:[-1,-1,-1]}):[n,a,i],$,S;if(t.doRotary){let E=e.compute(qg(r.batchSize,r.sequenceLength,u,d),{inputs:[u,d],outputs:[-1]})[0],T=e.inputs[7],I=e.inputs[8],z=_e({interleaved:t.rotaryInterleaved!==0,numHeads:r.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),N=[m,E,T,I],L=[-1];$=e.compute(lo(N,z),{inputs:N,outputs:L})[0],N.splice(0,1,_);let X=_e({interleaved:t.rotaryInterleaved!==0,numHeads:r.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});S=e.compute(lo(N,X),{inputs:N,outputs:L})[0]}let y=Yi(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,t.doRotary?$:m,void 0,0),g=nu(e,t.doRotary?S:_,r),x=nu(e,w,r);Ca(e,y,g,x,void 0,void 0,s,o,void 0,r,u,d)}}),iu,Hg,Gg,t$,Zk=V(()=>{se(),de(),nn(),ce(),iu=(e,t,r,n,a,i,s,o)=>{let u=Ne(i),d=u===1?"f32":`vec${u}f`,p=u===1?"vec2f":`mat2x${u}f`,f=a*s,m=64;f===1&&(m=256);let _=[a,s,i/u],w=[a,s,2],$=["rank","type","type"],S=[];S.push(...ie(_,w));let y=g=>{let x=B("x",t.dataType,3,u),k=B("scale",r.dataType,r.dims),E=B("bias",n.dataType,n.dims),T=ee("output",1,3,2),I=[x,k,E,T];return`
  var<workgroup> workgroup_shared : array<${p}, ${m}>;
  const workgroup_size = ${m}u;
  ${g.declareVariables(...I)}
  ${g.mainStart(m)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${d}(0);
    var squared_sum = ${d}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${d}(${x.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${p}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${Jr("workgroup_shared[0][0]",u)} / f32(hight * ${u});
      let squared_sum_final = ${Jr("workgroup_shared[0][1]",u)} / f32(hight * ${u});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${o}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${u};${o};${m}`,inputDependencies:$},getRunData:()=>({outputs:[{dims:w,dataType:1}],dispatchGroup:{x:f},programUniforms:S}),getShaderSource:y},{inputs:[t,r,n],outputs:[-1]})[0]},Hg=(e,t,r)=>{let n=t[0].dims,a=n,i=2,s=n[0],o=n[1],u=D.sizeFromDimension(n,i),d=Ne(u),p=D.size(a)/d,f=iu(e,t[0],t[1],t[2],s,u,o,r.epsilon),m=[s,o,u/d],_=[s,o],w=["type","none"],$=S=>{let y=B("x",t[0].dataType,m.length,d),g=B("scale_shift",1,_.length,2),x=ee("output",t[0].dataType,m.length,d),k=[y,g,x];return`
  ${S.registerUniform("output_size","u32").declareVariables(...k)}
  ${S.mainStart()}
  ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${x.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${g.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${y.getByOffset("global_idx")} * ${x.type.value}(scale_shift.x) + ${x.type.value}(scale_shift.y);
      ${x.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${d}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:a,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:[{type:12,data:p},...ie(m,_,m)]}),getShaderSource:$},{inputs:[t[0],f]})},Gg=(e,t,r)=>{let n=t[0].dims,a=n,i=n[0],s=n[n.length-1],o=D.sizeFromDimension(n,1)/s,u=Ne(s),d=D.size(a)/u,p=[{type:12,data:o},{type:12,data:Math.floor(s/u)}],f=["type","type"],m=!1,_=[0,n.length-1];for(let y=0;y<n.length-2;y++)m=m||n[y+1]!==1,_.push(y+1);m=m&&n[n.length-1]!==1;let w=m?e.compute(Et(e.inputs[0],_),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:n.length},(y,g)=>n[_[g]])),$=iu(e,w,t[1],t[2],i,o,s,r.epsilon),S=y=>{let g=qe(t[0].dataType),x=u===1?"vec2f":`mat${u}x2f`,k=I=>{let z=I===0?"x":"y",N=u===1?"f32":`vec${u}f`;switch(u){case 1:return`${g}(${N}(scale.${z}))`;case 2:return`vec2<${g}>(${N}(scale[0].${z}, scale[1].${z}))`;case 4:return`vec4<${g}>(${N}(scale[0].${z}, scale[1].${z}, scale[2].${z}, scale[3].${z}))`;default:throw new Error(`Not supported compoents ${u}`)}},E=B("input",t[0].dataType,t[0].dims,u),T=ee("output",t[0].dataType,a,u);return`
  @group(0) @binding(0) var<storage, read> input : array<${E.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${x}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${T.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${y.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${k(0)}, ${k(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${u}`,inputDependencies:f},getRunData:()=>({outputs:[{dims:a,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:p}),getShaderSource:S},{inputs:[t[0],$]})},t$=(e,t)=>{t.format==="NHWC"?Gg(e,e.inputs,t):Hg(e,e.inputs,t)}}),Kg,Qg,r$,Jk=V(()=>{se(),de(),ce(),Kg=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},Qg=(e,t,r)=>{let n=t.simplified,a=e[0].dims,i=e[1],s=!n&&e[2],o=a,u=D.normalizeAxis(t.axis,a.length),d=D.sizeToDimension(a,u),p=D.sizeFromDimension(a,u),f=D.size(i.dims),m=s?D.size(s.dims):0;if(f!==p||s&&m!==p)throw new Error(`Size of X.shape()[axis:] == ${p}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${f} and bias size of ${m}`);let _=[];for(let E=0;E<a.length;++E)E<u?_.push(a[E]):_.push(1);let w=Ne(p),$=["type","type"],S=[{type:12,data:d},{type:1,data:p},{type:12,data:Math.floor(p/w)},{type:1,data:t.epsilon}];s&&$.push("type");let y=r>1,g=r>2,x=E=>{let T=qe(e[0].dataType),I=[B("x",e[0].dataType,e[0].dims,w),B("scale",i.dataType,i.dims,w)];s&&I.push(B("bias",s.dataType,s.dims,w)),I.push(ee("output",e[0].dataType,o,w)),y&&I.push(ee("mean_data_output",1,_)),g&&I.push(ee("inv_std_output",1,_));let z=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${E.registerUniforms(z).declareVariables(...I)}
  ${E.mainStart()}
    ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${yd("f32",w)};
    var mean_square_vector = ${yd("f32",w)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${ei(T,w,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${Jr("mean_vector",w)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${Jr("mean_square_vector",w)} / uniforms.norm_size ${n?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${ei(T,w,"x[j + offset]")};
      let f32scale = ${ei(T,w,"scale[j]")};
      output[j + offset] = ${I[0].type.value}((f32input ${n?"":"- mean"}) * inv_std_dev * f32scale
        ${s?`+ ${ei(T,w,"bias[j]")}`:""}
      );
    }

    ${y?"mean_data_output[global_idx] = mean":""};
    ${g?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},k=[{dims:o,dataType:e[0].dataType}];return y&&k.push({dims:_,dataType:1}),g&&k.push({dims:_,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${w};${r};${n}`,inputDependencies:$},getRunData:()=>({outputs:k,dispatchGroup:{x:Math.ceil(d/64)},programUniforms:S}),getShaderSource:x}},r$=(e,t)=>{Kg(e.inputs),e.compute(Qg(e.inputs,t,e.outputCount))}}),Xg,n$,eS=V(()=>{de(),Fc(),Vc(),Xg=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},n$=e=>{Xg(e.inputs);let t=hi.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let r=t[t.length-1],n=e.inputs[0].dims[e.inputs[0].dims.length-1];if(r<8&&n<8)e.compute(Wc(e.inputs,{activation:""},t));else{let a=t[t.length-2],i=D.size(e.inputs[0].dims.slice(0,-2)),s=D.size(e.inputs[1].dims.slice(0,-2));if(i!==1&&a===1&&s===1){let o=e.inputs[0].reshape([1,i,n]),u=e.inputs[1].reshape([1,n,r]),d=[1,i,r],p=[o,u];e.compute(oo(p,{activation:""},t,d),{inputs:p})}else e.compute(oo(e.inputs,{activation:""},t))}}}),Yg,Zg,Jg,i$,a$,tS=V(()=>{se(),de(),Pe(),ce(),Yg=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=e[0],n=r.dims.length;if(r.dims[n-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let a=Math.floor((t.k+t.blockSize-1)/t.blockSize),i=t.blockSize/8*t.bits,s=e[1];if(!D.areEqual(s.dims,[t.n,a,i]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let o=e[2].dims;if(D.size(o)!==t.n*a)throw new Error("scales input size error.");if(e.length===4){let u=e[3].dims,d=t.n*(t.bits===8?a:Math.floor((a*t.bits+7)/8));if(D.size(u)!==d)throw new Error("zeroPoints input size error.")}},Zg=(e,t)=>{let r=e[0].dims,n=r.length,a=r[n-2],i=t.k,s=t.n,o=r.slice(0,n-2),u=D.size(o),d=e[1].dims[2]/4,p=e[0].dataType,f=Ne(t.k),m=Ne(d),_=Ne(s),w=o.concat([a,s]),$=a>1&&s/_%2===0?2:1,S=D.size(w)/_/$,y=64,g=[],x=[u,a,i/f],k=D.convertShape(e[1].dims).slice();k.splice(-1,1,d/m),g.push(...ie(x)),g.push(...ie(k)),g.push(...ie(e[2].dims)),e.length===4&&g.push(...ie(D.convertShape(e[3].dims)));let E=[u,a,s/_];g.push(...ie(E));let T=I=>{let z=x.length,N=B("a",e[0].dataType,z,f),L=B("b",12,k.length,m),X=B("scales",e[2].dataType,e[2].dims.length),Q=[N,L,X],G=e.length===4?B("zero_points",12,e[3].dims.length):void 0;G&&Q.push(G);let pe=E.length,oe=ee("output",e[0].dataType,pe,_),Y=qe(e[0].dataType),le=(()=>{switch(f){case 1:return`array<${Y}, 8>`;case 2:return`mat4x2<${Y}>`;case 4:return`mat2x4<${Y}>`;default:throw new Error(`${f}-component is not supported.`)}})(),M=()=>{let O=`
          // reuse a data
            var input_offset = ${N.indicesToOffset(`${N.type.indices}(batch, row, word_offset)`)};
            var a_data: ${le};
            for (var j: u32 = 0; j < ${8/f}; j++) {
              a_data[j] = ${N.getByOffset("input_offset")};
              input_offset++;
            }
          `;for(let W=0;W<_*$;W++)O+=`
            b_value = ${m===1?`b${W}_data`:`b${W}_data[i]`};
            b_value_lower = unpack4xU8(b_value & b_mask);
            b_value_upper = unpack4xU8((b_value >> 4) & b_mask);
            b_quantized_values = ${le}(${Array.from({length:4},(K,te)=>`${Y}(b_value_lower[${te}]), ${Y}(b_value_upper[${te}])`).join(", ")});
            b_dequantized_values = ${f===1?`${le}(${Array.from({length:8},(K,te)=>`(b_quantized_values[${te}] - ${G?`zero_point${W}`:"zero_point"}) * scale${W}`).join(", ")});`:`(b_quantized_values - ${le}(${Array(8).fill(`${G?`zero_point${W}`:"zero_point"}`).join(",")})) * scale${W};`};
            workgroup_shared[local_id.x * ${$} + ${Math.floor(W/_)}]${_>1?`[${W%_}]`:""} += ${Array.from({length:8/f},(K,te)=>`${f===1?`a_data[${te}] * b_dequantized_values[${te}]`:`dot(a_data[${te}], b_dequantized_values[${te}])`}`).join(" + ")};
          `;return O},F=()=>{let O=`
            var col_index = col * ${_};
            ${G?`
            let zero_point_bytes_per_col = (nBlocksPerCol + 1) / 2;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${Y}(8);`}
            `;for(let W=0;W<_*$;W++)O+=`
            let scale${W} = ${X.getByOffset("col_index * nBlocksPerCol + block")};
            ${G?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block >> 0x1u);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            zero_point_word = ${G.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${W} = ${Y}((zero_point_word) & 0xFu);`:""}
            col_index += 1;`;return O},Z=()=>{let O=`col_index = col * ${_};`;for(let W=0;W<_*$;W++)O+=`
            let b${W}_data = ${L.getByIndices(`${L.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return O+=`
            var b_value: u32;
            let b_mask: u32 = 0x0F0F0F0Fu;
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${le};
            var b_dequantized_values: ${le};`,O};return`
        var<workgroup> workgroup_shared: array<${oe.type.value}, ${$*y}>;
        ${I.declareVariables(...Q,oe)}
        ${I.mainStart([y,1,1])}
          let output_indices = ${oe.offsetToIndices(`(global_idx / ${y}) * ${$}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${y}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/f};
            ${F()}
            for (var word: u32 = 0; word < ${d}; word += ${m}) {
              ${Z()}
              for (var i: u32 = 0; i < ${m}; i++) {
                ${M()}
                word_offset += ${8/f};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${$}) {
            var output_value: ${oe.type.value} = ${oe.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${y}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${$};
            }
            ${oe.setByIndices(`${oe.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${f};${m};${_};${$};${y}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:w,dataType:p}],dispatchGroup:{x:S},programUniforms:g}),getShaderSource:T}},Jg=(e,t)=>{let r=e[0].dims,n=r.length,a=r[n-2],i=t.k,s=t.n,o=r.slice(0,n-2),u=D.size(o),d=e[1].dims[2]/4,p=e[0].dataType,f=Ne(t.k),m=Ne(d),_=o.concat([a,s]),w=128,$=s%8===0?8:s%4===0?4:1,S=w/$,y=S*m*8,g=y/f,x=y/t.blockSize,k=D.size(_)/$,E=[],T=[u,a,i/f],I=D.convertShape(e[1].dims).slice();I.splice(-1,1,d/m),E.push(...ie(T)),E.push(...ie(I)),E.push(...ie(e[2].dims)),e.length===4&&E.push(...ie(D.convertShape(e[3].dims)));let z=[u,a,s];E.push(...ie(z));let N=L=>{let X=T.length,Q=B("a",e[0].dataType,X,f),G=B("b",12,I.length,m),pe=B("scales",e[2].dataType,e[2].dims.length),oe=[Q,G,pe],Y=e.length===4?B("zero_points",12,e[3].dims.length):void 0;Y&&oe.push(Y);let le=z.length,M=ee("output",e[0].dataType,le),F=qe(e[0].dataType),Z=()=>{switch(f){case 1:return`
          let a_data0 = vec4<${F}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${F}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${F}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${F}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${f}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${Q.type.value}, ${g}>;
        var<workgroup> inter_results: array<array<${M.type.value}, ${S}>, ${$}>;
        ${L.declareVariables(...oe,M)}
        ${L.mainStart([S,$,1])}
          let output_indices = ${M.offsetToIndices(`workgroup_index * ${$}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${x} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${g};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${g}; a_offset += ${w})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${Q.getByIndices(`${Q.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${Q.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${x} + local_id.x;
            ${Y?`
            let zero_point_bytes_per_col = (n_blocks_per_col + 1) / 2;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block >> 0x1u);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            let zero_point_word = ${Y.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${F}((zero_point_word) & 0xFu);`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${F}(8);`}
            let scale = ${pe.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${G.getByIndices(`${G.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/f};
            for (var i: u32 = 0; i < ${m}; i++) {
              ${Z()}
              let b_value = ${m===1?"b_data":"b_data[i]"};
              let b_value_lower = unpack4xU8(b_value & 0x0F0F0F0Fu);
              let b_value_upper = unpack4xU8((b_value >> 4) & 0x0F0F0F0Fu);
              let b_quantized_values = mat2x4<${F}>(${Array.from({length:4},(O,W)=>`${F}(b_value_lower[${W}]), ${F}(b_value_upper[${W}])`).join(", ")});
              let b_dequantized_values = (b_quantized_values - mat2x4<${F}>(${Array(8).fill("zero_point").join(",")})) * scale;
              inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(O,W)=>`${`dot(a_data${W}, b_dequantized_values[${W}])`}`).join(" + ")};
              word_offset += ${8/f};
            }
            workgroupBarrier();
          }

          if (local_idx < ${$}) {
            var output_value: ${M.type.value} = ${M.type.value}(0);
            for (var b = 0u; b < ${S}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${M.setByIndices(`${M.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${f};${m};${S};${$}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:_,dataType:p}],dispatchGroup:{x:k},programUniforms:E}),getShaderSource:N}},i$=(e,t)=>{Yg(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(Jg(e.inputs,t)):e.compute(Zg(e.inputs,t))},a$=e=>_e(e)}),e0,t0,r0,n0,i0,a0,s0,o0,s$,rS=V(()=>{se(),de(),ce(),e0=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},t0=(e,t,r)=>{let n="";for(let a=t-1;a>=0;--a)n+=`
            k = i32(${e.indicesGet("indices",a)}) - ${ne("uniforms.pads",a,r)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${ne("uniforms.x_shape",a,t)})) {
              break;
            }
            offset += k * i32(${ne("uniforms.x_strides",a,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${n}
            value = x[offset];
          }
      `},r0=(e,t,r)=>{let n="";for(let a=t-1;a>=0;--a)n+=`
                k = i32(${e.indicesGet("indices",a)}) - ${ne("uniforms.pads",a,r)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${ne("uniforms.x_shape",a,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${ne("uniforms.x_shape",a,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${ne("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${n}
              value = x[offset];
          `},n0=(e,t,r)=>{let n="";for(let a=t-1;a>=0;--a)n+=`
                k = i32(${e.indicesGet("indices",a)}) - ${ne("uniforms.pads",a,r)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${ne("uniforms.x_shape",a,t)})) {
                  k = i32(${ne("uniforms.x_shape",a,t)}) - 1;
                }
                offset += k * i32(${ne("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${n}
              value = x[offset];
          `},i0=(e,t,r)=>{let n="";for(let a=t-1;a>=0;--a)n+=`
                k = i32(${e.indicesGet("indices",a)}) - ${ne("uniforms.pads",a,r)};
                if (k < 0)  {
                  k += i32(${ne("uniforms.x_shape",a,t)}]);
                }
                if (k >= i32(${ne("uniforms.x_shape",a,t)})) {
                  k -= i32(${ne("uniforms.x_shape",a,t)});
                }
                offset += k * i32(${ne("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${n}
              value = x[offset];
          `},a0=(e,t,r)=>{switch(r.mode){case 0:return t0(e,t,r.pads.length);case 1:return r0(e,t,r.pads.length);case 2:return n0(e,t,r.pads.length);case 3:return i0(e,t,r.pads.length);default:throw new Error("Invalid mode")}},s0=(e,t)=>{let r=D.padShape(e[0].dims.slice(),t.pads),n=e[0].dims,a=D.size(r),i=[{type:12,data:a},{type:6,data:t.pads}],s=e.length>=3&&e[2].data;t.mode===0&&i.push({type:s?e[2].dataType:1,data:t.value}),i.push(...ie(e[0].dims,r));let o=["rank"],u=d=>{let p=ee("output",e[0].dataType,r.length),f=B("x",e[0].dataType,n.length),m=f.type.value,_=a0(p,n.length,t),w=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&w.push({name:"constant_value",type:s?m:"f32"}),`
            ${d.registerUniforms(w).declareVariables(f,p)}
            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${p.offsetToIndices("global_idx")};

            var value = ${m}(0);
            ${_}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${s}`,inputDependencies:o},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(D.size(r)/64)},programUniforms:i}),getShaderSource:u}},o0=(e,t)=>{if(e.length>1){let r=e[1].getBigInt64Array(),n=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,a=e[0].dims.length,i=new Int32Array(2*a).fill(0);if(e.length>=4){let o=e[3].getBigInt64Array();for(let u=0;u<o.length;u++)i[Number(o[u])]=Number(r[u]),i[Number(o[u])+a]=Number(r[u+o.length])}else r.forEach((o,u)=>i[Number(u)]=Number(o));let s=[];return i.forEach(o=>s.push(o)),{mode:t.mode,value:n,pads:s}}else return t},s$=(e,t)=>{e0(e.inputs);let r=o0(e.inputs,t);e.compute(s0(e.inputs,r),{inputs:[0]})}}),Ui,au,su,ou,lu,l0,u0,uu,du,o$,l$,cu,u$,d$,pu,c$,p$,f$,h$,nS=V(()=>{Bt(),se(),de(),ce(),Ui=e=>{if(Se.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},au=(e,t,r)=>{let n=t.format==="NHWC",a=e.dims.slice();n&&a.splice(1,0,a.pop());let i=Object.hasOwnProperty.call(t,"dilations"),s=t.kernelShape.slice(),o=t.strides.slice(),u=i?t.dilations.slice():[],d=t.pads.slice();ao.adjustPoolAttributes(r,a,s,o,u,d);let p=ao.computePoolOutputShape(r,a,o,u,s,d,t.autoPad),f=Object.assign({},t);i?Object.assign(f,{kernelShape:s,strides:o,pads:d,dilations:u,cacheKey:t.cacheKey}):Object.assign(f,{kernelShape:s,strides:o,pads:d,cacheKey:t.cacheKey});let m=p.slice();return m.push(m.splice(1,1)[0]),[f,n?m:p]},su=(e,t)=>{let r=t.format==="NHWC",n=D.size(e),a=D.size(t.kernelShape),i=[{type:12,data:n},{type:12,data:a}],s=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let o=t.kernelShape[t.kernelShape.length-1],u=t.strides[t.strides.length-1],d=t.pads[t.pads.length/2-1],p=t.pads[t.pads.length-1],f=!!(d+p);i.push({type:12,data:o},{type:12,data:u},{type:12,data:d},{type:12,data:p}),s.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let m=!1;if(t.kernelShape.length===2){let _=t.kernelShape[t.kernelShape.length-2],w=t.strides[t.strides.length-2],$=t.pads[t.pads.length/2-2],S=t.pads[t.pads.length-2];m=!!($+S),i.push({type:12,data:_},{type:12,data:w},{type:12,data:$},{type:12,data:S}),s.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[i,s,!0,f,m]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let o=D.computeStrides(t.kernelShape);i.push({type:12,data:o},{type:12,data:t.pads},{type:12,data:t.strides}),s.push({name:"kernelStrides",type:"u32",length:o.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let u=t.pads.reduce((d,p)=>d+p);return[i,s,!!u,!1,!1]}},ou=(e,t,r,n,a,i,s,o,u,d,p,f)=>{let m=a.format==="NHWC",_=t.type.value,w=ee("output",t.type.tensor,n);if(a.kernelShape.length<=2){let $="",S="",y="",g=r-(m?2:1);if(p?$=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${g}] = indices[${g}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${g}] < 0 || xIndices[${g}]
                      >= uniforms.x_shape[${g}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${i}
                }`:$=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${g}] = indices[${g}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${i}
                }`,a.kernelShape.length===2){let x=r-(m?3:2);f?S=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${x}] = indices[${x}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${x}] < 0 || xIndices[${x}] >= uniforms.x_shape[${x}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:S=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${x}] = indices[${x}] * uniforms.sh - uniforms.phStart + j;
                `,y=`
              }
            `}return`
            ${e.registerUniforms(u).declareVariables(t,w)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${w.offsetToIndices("global_idx")};
              var xIndices = ${w.offsetToIndices("global_idx")};

              var value = ${_}(${o});
              var pad = 0;
              ${S}
              ${$}
              ${y}
              ${s}

              output[global_idx] = value;
            }`}else{if(m)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let $=a.kernelShape.length,S=a.pads.length,y="";return d?y=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${i}
              }`:y=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${i}
            `,`
            ${e.registerUniforms(u).declareVariables(t,w)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${w.offsetToIndices("global_idx")};
              var xIndices = ${w.offsetToIndices("global_idx")};

              var offsets: array<u32, ${$}>;

              var value = ${_}(${o});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${$-1}u; j++) {
                  offsets[j] = offset / ${ne("uniforms.kernelStrides","j",$)};
                  offset -= offsets[j] * ${ne("uniforms.kernelStrides","j",$)};
                }
                offsets[${$-1}] = offset;

                isPad = false;
                for (var j = ${r-$}u; j < ${r}u; j++) {
                  xIndices[j] = indices[j] * ${ne("uniforms.strides",`j - ${r-$}u`,$)}
                    + offsets[j - ${r-$}u] - ${ne("uniforms.pads","j - 2u",S)};
                  ${y}
              }
              ${s}

              output[global_idx] = value;
            }`}},lu=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,l0=e=>`${lu(e)};${e.countIncludePad}`,u0=e=>`${lu(e)};${e.storageOrder};${e.dilations}`,uu=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),du=(e,t,r,n)=>{let[a,i]=au(t,n,r),s=B("x",t.dataType,t.dims.length),o=s.type.value,u="value += x_val;",d="";a.countIncludePad?d+=`value /= ${o}(uniforms.kernelSize);`:d+=`value /= ${o}(i32(uniforms.kernelSize) - pad);`;let[p,f,m,_,w]=su(i,a);p.push(...ie(t.dims,i));let $=["rank"];return{name:e,shaderCache:{hint:`${n.cacheKey};${m};${_};${w}`,inputDependencies:$},getRunData:()=>({outputs:[{dims:i,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(D.size(i)/64)},programUniforms:p}),getShaderSource:S=>ou(S,s,t.dims.length,i.length,a,u,d,0,f,m,_,w)}},o$=e=>{let t=e.count_include_pad!==0,r=uu(e);if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let n={countIncludePad:t,...r,cacheKey:""};return{...n,cacheKey:l0(n)}},l$=(e,t)=>{Ui(e.inputs),e.compute(du("AveragePool",e.inputs[0],!1,t))},cu={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},u$=e=>{let t=e.format;return{format:t,...cu,cacheKey:t}},d$=(e,t)=>{Ui(e.inputs),e.compute(du("GlobalAveragePool",e.inputs[0],!0,t))},pu=(e,t,r,n)=>{let[a,i]=au(t,n,r),s=`
      value = max(x_val, value);
    `,o="",u=B("x",t.dataType,t.dims.length),d=["rank"],[p,f,m,_,w]=su(i,a);return p.push(...ie(t.dims,i)),{name:e,shaderCache:{hint:`${n.cacheKey};${m};${_};${w}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:i,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(D.size(i)/64)},programUniforms:p}),getShaderSource:$=>ou($,u,t.dims.length,i.length,a,s,o,t.dataType===10?-65504:-1e5,f,m,_,w)}},c$=(e,t)=>{Ui(e.inputs),e.compute(pu("MaxPool",e.inputs[0],!1,t))},p$=e=>{let t=e.storage_order,r=e.dilations,n=uu(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(n.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let a={storageOrder:t,dilations:r,...n,cacheKey:""};return{...a,cacheKey:u0(a)}},f$=e=>{let t=e.format;return{format:t,...cu,cacheKey:t}},h$=(e,t)=>{Ui(e.inputs),e.compute(pu("GlobalMaxPool",e.inputs[0],!0,t))}}),d0,c0,m$,g$,iS=V(()=>{se(),de(),Pe(),ce(),d0=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[0].dataType===6&&e.length>2)throw new Error("In the case of dequantizing int32 there is no zero point.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((r,n)=>r===e[2].dims[n]).reduce((r,n)=>r&&n,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((a,i)=>i===t.axis||a===e[0].dims[i]).reduce((a,i)=>a&&i,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let r=e[0].dims[t.axis],n=e[1].dims[t.axis];if(t.blockSize<Math.ceil(r/n)||t.blockSize>Math.ceil(r/(n-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},c0=(e,t)=>{let r=D.normalizeAxis(t.axis,e[0].dims.length),n=e[0].dataType,a=n===3,i=e[0].dims,s=e[1].dataType,o=D.size(i),u=n===3||n===2,d=u?[Math.ceil(D.size(e[0].dims)/4)]:e[0].dims,p=e[1].dims,f=e.length>2?e[2]:void 0,m=f?u?[Math.ceil(D.size(f.dims)/4)]:f.dims:void 0,_=p.length===0||p.length===1&&p[0]===1,w=_===!1&&p.length===1,$=Ne(o),S=_&&(!u||$===4),y=S?$:1,g=S&&!u?$:1,x=B("input",u?12:n,d.length,g),k=B("scale",s,p.length),E=f?B("zero_point",u?12:n,m.length):void 0,T=ee("output",s,i.length,y),I=[x,k];E&&I.push(E);let z=[d,p];f&&z.push(m);let N=[{type:12,data:o/y},{type:12,data:r},{type:12,data:t.blockSize},...ie(...z,i)],L=X=>{let Q=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${X.registerUniforms(Q).declareVariables(...I,T)}
      ${X.mainStart()}
          ${X.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${T.offsetToIndices("global_idx")};

          // Set input x
          ${u?`
            let input = ${x.getByOffset("global_idx / 4")};
            let x_vec = ${a?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${y===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${x.getByOffset("global_idx")};`};

          // Set scale input
          ${_?`let scale_value= ${k.getByOffset("0")}`:w?`
            let scale_index = ${T.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${k.getByOffset("scale_index")};`:`
            var scale_indices: ${k.type.indices} = output_indices;
            let index = ${k.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${k.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${k.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${E?_?u?`
                let zero_point_input = ${E.getByOffset("0")};
                let zero_point_vec =  ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${E.getByOffset("0")}`:w?u?`
                let zero_point_index = ${T.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${E.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${T.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${E.getByOffset("zero_point_index")};`:u?`
                let zero_point_offset = ${k.indicesToOffset("scale_indices")};
                let zero_point_input = ${E.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${E.getByIndices("scale_indices")};`:`let zero_point_value = ${u?a?"i32":"u32":x.type.value}(0);`};
      // Compute and write output
      ${T.setByOffset("global_idx",`${T.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:E?["rank","rank","rank"]:["rank","rank"]},getShaderSource:L,getRunData:()=>({outputs:[{dims:i,dataType:s}],dispatchGroup:{x:Math.ceil(o/y/64),y:1,z:1},programUniforms:N})}},m$=(e,t)=>{d0(e.inputs,t),e.compute(c0(e.inputs,t))},g$=e=>_e({axis:e.axis,blockSize:e.blockSize})}),p0,f0,y$,aS=V(()=>{Bt(),se(),ce(),p0=(e,t,r)=>{let n=e===t,a=e<t&&r<0,i=e>t&&r>0;if(n||a||i)throw new Error("Range these inputs' contents are invalid.")},f0=(e,t,r,n)=>{let a=Math.abs(Math.ceil((t-e)/r)),i=[a],s=a,o=[{type:12,data:s},{type:n,data:e},{type:n,data:r},...ie(i)],u=d=>{let p=ee("output",n,i.length),f=p.type.value,m=[{name:"outputSize",type:"u32"},{name:"start",type:f},{name:"delta",type:f}];return`
        ${d.registerUniforms(m).declareVariables(p)}
        ${d.mainStart()}
        ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${f}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${n}`},getShaderSource:u,getRunData:()=>({outputs:[{dims:i,dataType:n}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:o})}},y$=e=>{let t=0,r=0,n=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],r=e.inputs[1].getInt32Array()[0],n=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],r=e.inputs[1].getFloat32Array()[0],n=e.inputs[2].getFloat32Array()[0]),Se.webgpu.validateInputContent&&p0(t,r,n),e.compute(f0(t,r,n,e.inputs[0].dataType),{inputs:[]})}}),h0,m0,v$,_$,sS=V(()=>{se(),de(),Pe(),ce(),h0=(e,t,r,n)=>{if(e!=="none"&&n!=="i32"&&n!=="u32"&&n!=="f32")throw new Error(`Input ${n} is not supported with reduction ${e}.`);let a=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,i=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case"none":return`${t}=${r};`;case"add":return n==="i32"||n==="u32"?`atomicAdd(&${t}, bitcast<${n}>(${r}));`:`
              ${a}bitcast<${n}>(oldValue) + (${r})${i}`;case"max":return n==="i32"||n==="u32"?`atomicMax(&${t}, bitcast<${n}>(${r}));`:`
                ${a}max(bitcast<f32>(oldValue), (${r}))${i}`;case"min":return n==="i32"||n==="u32"?`atomicMin(&${t}, bitcast<${n}>(${r}));`:`${a}min(bitcast<${n}>(oldValue), (${r}))${i}`;case"mul":return`${a}(bitcast<${n}>(oldValue) * (${r}))${i}`;default:throw new Error(`Reduction ${e} is not supported.`)}},m0=(e,t)=>{let r=e[0].dims,n=e[1].dims,a=r,i=1,s=Math.ceil(D.sizeToDimension(n,n.length-1)/i),o=n[n.length-1],u=D.sizeFromDimension(r,o),d=[{type:12,data:s},{type:12,data:o},{type:12,data:u},...ie(e[1].dims,e[2].dims,a)],p=f=>{let m=B("indices",e[1].dataType,e[1].dims.length),_=B("updates",e[2].dataType,e[2].dims.length,i),w=t.reduction!=="none"&&t.reduction!==""?Gv("output",e[0].dataType,a.length):ee("output",e[0].dataType,a.length,i);return`
      ${f.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(m,_,w)}
      ${f.mainStart()}
        ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
  var data_offset = 0u;
  let indices_start = uniforms.last_index_dimension * global_idx;
  let indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${e[0].dims.length===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[i - indices_start];
    let dim_value = uniforms.output_shape[i - indices_start];`}
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));
  }

  for (var i = 0u; i < uniforms.num_updates_elements; i++) {
    let value = updates[uniforms.num_updates_elements * global_idx + i];
    ${h0(t.reduction,"output[data_offset + i]","value",w.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:d}),getShaderSource:p}},v$=e=>_e({reduction:e.reduction}),_$=(e,t)=>{e.compute(m0(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),g0,y0,v0,fu,_0,w0,$0,x0,b0,k0,S0,C0,hu,E0,T0,I0,z0,A0,w$,$$,oS=V(()=>{se(),de(),Pe(),ce(),g0=(e,t)=>{if(e.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},y0=(e,t,r)=>{t.every(a=>a>=0&&a<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let n=new Array(r).fill(1);return t.forEach((a,i)=>n[a]=e[i]),n},v0=(e,t,r,n,a,i)=>{let[s,o,u]=r>10?[1,2,3]:[-1,e.length>1?1:-1,-1],d=e[0].dims.length;if(s>0&&e.length>s&&e[s].dims.length>0)e[s].getFloat32Array().forEach(p=>i.push(p));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(o>0&&e.length>o&&e[o].dims.length===1&&e[o].dims[0]>0){if(e[o].getFloat32Array().forEach(p=>n.push(p)),n.length!==0&&n.length!==d&&r>=18&&n.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");g0(n,t),t.axes.length>0&&y0(n,t.axes,d).forEach((p,f)=>n[f]=p)}if(u>0&&e.length>u&&e[u].dims.length===1&&e[u].dims[0]>0&&(e[u].getBigInt64Array().forEach(p=>a.push(Number(p))),a.length!==0&&a.length!==d&&r>=18&&a.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(n.length!==0&&n.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(a.length!==0&&a.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof n<"u"&&typeof a<"u"&&n.length>0&&a.length>d)throw new Error("Resize requires only of scales or sizes to be specified")},fu=(e,t,r,n)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${n}(big / (${r}));
  let fract = ${n}(big % (${r})) / ${n}(${r});
  return whole + fract;
`,_0=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${fu("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${fu("xResized","lengthOriginal - 1","lengthResized - 1",t)}
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",w0=(e,t,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",$0=(e,t,r)=>{let n=new Array(r).fill(0).concat(new Array(r).fill(1)),a=e.length===0?n:e.slice();return t.length>0?(t.forEach((i,s)=>{n[i]=a[s],n[s+r]=a[t.length+s]}),n):a},x0=(e,t,r,n)=>{let a=[];if(r.length>0)if(n.length>0){if(e.forEach(i=>a.push(i)),Math.max(...n)>e.length)throw new Error("axes is out of bound");n.forEach((i,s)=>a[i]=r[s])}else r.forEach(i=>a.push(i));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");a=e.map((i,s)=>Math.round(i*t[s]))}return a},b0=(e,t,r)=>{let n=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(i=>t[i]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(i=>t[i]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let a=e.slice();return r.axes.length>0?(r.axes.forEach(i=>t[i]=n),r.axes.forEach(i=>a[i]=Math.round(e[i]*t[i]))):(t.fill(n,0,t.length),a.forEach((i,s)=>a[s]=Math.round(i*t[s]))),a},k0=(e,t,r,n,a)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${r.length}> {
      var original_indices: array<${e.type.value}, ${r.length}>;
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${ne("uniforms.scales","i",n)};
        var roi_low = ${ne("uniforms.roi","i",a)};
        var roi_hi = ${ne("uniforms.roi",`i + ${t.length}`,a)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${ne("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${ne("uniforms.output_shape","i",r.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,S0=(e,t,r,n,a,i,s)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${n.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${ne("uniforms.scales","i",a)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${ne("uniforms.roi","i",i)};
          var roi_hi = ${ne("uniforms.roi",`i + ${r.length}`,i)};
          var input_shape_i = ${ne("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${ne("uniforms.output_shape","i",n.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${s} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet("input_indices","i","input_index")}
      }
      return input_indices;
    }`,C0=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${ne("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,hu=(e,t,r,n)=>e.rank>n?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",r,"batch")};
`:"",E0=(e,t,r,n,a)=>{let[i,s,o,u]=r.length===2?[-1,0,1,-1]:[0,2,3,1],d=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${d} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(row, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(col, ${r[o]} - 1))`)};
      ${hu(e,u,i,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${d} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${d} = originalIndices[${s}];
      var col:${d} = originalIndices[${o}];
      ${n?`if (row < 0 || row > (${r[s]} - 1) || col < 0 || col > (${r[o]} - 1)) {
        return ${a};
      }`:""};
      row = max(0, min(row, ${r[s]} - 1));
      col = max(0, min(col, ${r[o]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${r.length>2?`u32(originalIndices[${u}])`:"0"};
      var batch: u32 =  ${r.length>2?`u32(originalIndices[${i}])`:"0"};
      var x11: ${d} = getInputValue(batch, channel, row1, col1);
      var x12: ${d} = getInputValue(batch, channel, row1, col2);
      var x21: ${d} = getInputValue(batch, channel, row2, col1);
      var x22: ${d} = getInputValue(batch, channel, row2, col2);
      var dx1: ${d} = abs(row - ${d}(row1));
      var dx2: ${d} = abs(${d}(row2) - row);
      var dy1: ${d} = abs(col - ${d}(col1));
      var dy2: ${d} = abs(${d}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},T0=(e,t,r,n,a,i,s,o,u,d)=>{let p=r.length===2,[f,m]=p?[0,1]:[2,3],_=e.type.value,w=$=>{let S=$===f?"row":"col";return`
      fn ${S}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${_} {
        var output_index = ${t.indicesGet("output_indices",$)};
        var originalIdx: ${_} = getOriginalCoordinateFromResizedCoordinate(output_index, ${a[$]},
        ${n[$]}, ${r[$]}, ${i[$]}, ${i[$]} + ${r.length});
        var fractOriginalIdx: ${_} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${o} && (originalIdx < 0 || originalIdx > (${r[$]} - 1))) {
          return ${u};
        }
        var data: array<${_}, 4> = array<${_}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${S}: ${_} = originalIdx + ${_}(i);
          if (${S} < 0 || ${S} >= ${r[$]}) {
            ${d?`coefs[i + 1] = 0.0;
                        continue;`:o?`return ${u};`:`${S} = max(0, min(${S}, ${r[$]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",$,`u32(${S})`)};
          data[i + 1] = ${$===f?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${w(f)};
    ${w(m)};
  fn getCubicInterpolationCoefs(s: ${_}) -> array<${_}, 4> {
    var absS = abs(s);
    var coeffs: array<${_}, 4> = array<${_}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${_} = 1.0 - absS;
    var twoMinusAbsS: ${_} = 2.0 - absS;
    var onePlusAbsS: ${_} = 1.0 + absS;
    coeffs[0] = ((${s} * onePlusAbsS - 5 * ${s}) * onePlusAbsS + 8 * ${s}) * onePlusAbsS - 4 * ${s};
    coeffs[1] = ((${s} + 2) * absS - (${s} + 3)) * absS * absS + 1;
    coeffs[2] = ((${s} + 2) * oneMinusAbsS - (${s} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${s} * twoMinusAbsS - 5 * ${s}) * twoMinusAbsS + 8 * ${s}) * twoMinusAbsS - 4 * ${s};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${_}, 4>, coefs: array<${_}, 4>) -> ${_} {
    var coefsSum: ${_} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${_} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},I0=(e,t,r,n,a)=>{let[i,s,o,u,d]=r.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],p=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${p} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(depth, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(height, ${r[o]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(width, ${r[u]} - 1))`)};
      ${hu(e,d,i,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${p} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${p} = originalIndices[${s}];
      var height:${p} = originalIndices[${o}];
      var width:${p} = originalIndices[${u}];
      ${n?`if (depth < 0 || depth > (${r[s]} - 1) || height < 0 || height > (${r[o]} - 1) || width < 0 || (width > ${r[u]} - 1)) {
      return ${a};
        }`:""};

    depth = max(0, min(depth, ${r[s]} - 1));
      height = max(0, min(height, ${r[o]} - 1));
      width = max(0, min(width, ${r[u]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${r.length>3?`u32(originalIndices[${d}])`:"0"};
      var batch: u32 =  ${r.length>3?`u32(originalIndices[${i}])`:"0"};

      var x111: ${p} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${p} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${p} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${p} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${p} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${p} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${p} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${p} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${p} = abs(depth - ${p}(depth1));
      var dx2: ${p} = abs(${p}(depth2) - depth);
      var dy1: ${p} = abs(height - ${p}(height1));
      var dy2: ${p} = abs(${p}(height2) - height);
      var dz1: ${p} = abs(width - ${p}(width1));
      var dz2: ${p} = abs(${p}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},z0=(e,t,r,n,a,i)=>{let s=e.dims,o=$0(i,t.axes,s.length),u=x0(s,n,a,t.axes),d=n.slice();n.length===0&&(d=s.map((g,x)=>g===0?1:u[x]/g),t.keepAspectRatioPolicy!=="stretch"&&(u=b0(s,d,t)));let p=ee("output",e.dataType,u.length),f=B("input",e.dataType,s.length),m=D.size(u),_=s.length===u.length&&s.every((g,x)=>g===u[x]),w=t.coordinateTransformMode==="tf_crop_and_resize",$=t.extrapolationValue,S=f.type.value,y=g=>`
      ${_?"":`
      ${_0(t.coordinateTransformMode,S)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${C0(f,s)};
              ${w0(t.nearestMode,r,S)};
              ${S0(f,p,s,u,d.length,o.length,w)};
              `;case"linear":return`
              ${k0(p,s,u,d.length,o.length)};
              ${(()=>{if(s.length===2||s.length===4)return`${E0(f,p,s,w,$)}`;if(s.length===3||s.length===5)return`${I0(f,p,s,w,$)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(s.length===2||s.length===4)return`${T0(f,p,s,u,d,o,t.cubicCoeffA,w,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${g.registerUniform("output_size","u32").registerUniform("scales","f32",d.length).registerUniform("roi","f32",o.length).declareVariables(f,p)}
      ${g.mainStart()}
        ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${_?"output[global_idx] = input[global_idx];":`
        let output_indices = ${p.offsetToIndices("global_idx")};
        var input_indices: ${f.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${f.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${s.length===2||s.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${r}|${d.length>0?t.mode==="cubic"?d:d.length:""}|${a.length>0?a:""}|${o.length>0?o:""}|${_}|${t.mode==="nearest"?s.length:s}`,inputDependencies:["rank"]},getShaderSource:y,getRunData:()=>({outputs:[{dims:u,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:[{type:12,data:m},{type:1,data:d},{type:1,data:o},...ie(s,u)]})}},A0=e=>{let t=e.customDataBuffer;return new Uint32Array(t,t.byteOffset,1)[0]},w$=(e,t)=>{let r=[],n=[],a=[],i=A0(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");v0(e.inputs,t,i,r,n,a),e.compute(z0(e.inputs[0],t,i,r,n,a),{inputs:[0]})},$$=e=>{let t=e.antialias,r=e.axes,n=e.coordinateTransformMode,a=e.cubicCoeffA,i=e.excludeOutside!==0,s=e.extrapolationValue,o=e.keepAspectRatioPolicy,u=e.mode,d=e.nearestMode===""?"simple":e.nearestMode;return _e({antialias:t,axes:r,coordinateTransformMode:n,cubicCoeffA:a,excludeOutside:i,extrapolationValue:s,keepAspectRatioPolicy:o,mode:u,nearestMode:d})}}),O0,N0,x$,lS=V(()=>{se(),de(),ce(),O0=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],r=e[1],n=e[2];if(t.dataType!==r.dataType||t.dataType!==n.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let a=t.dims[t.dims.length-1],i=t.dims[t.dims.length-2];if(r.dims[r.dims.length-1]!==a)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==i)throw new Error("Skip must have the same sequence length as input");if(n.dims.length!==1)throw new Error("Gamma must be 1D");if(n.dims[n.dims.length-1]!==a)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let s=e[3];if(s.dims.length!==1)throw new Error("Beta must be 1D");if(s.dims[s.dims.length-1]!==a)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let s=e[4];if(s.dims.length!==1)throw new Error("Bias must be 1D");if(s.dims[s.dims.length-1]!==a)throw new Error("Bias must have the same hidden size as input")}},N0=(e,t,r,n)=>{let a=t.simplified,i=e[0].dims,s=D.size(i),o=i,u=s,d=i.slice(-1)[0],p=n?i.slice(0,-1).concat(1):[],f=!a&&e.length>3,m=e.length>4,_=n&&r>1,w=n&&r>2,$=r>3,S=64,y=Ne(d),g=[{type:12,data:u},{type:12,data:y},{type:12,data:d},{type:1,data:t.epsilon}],x=E=>{let T=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],I=[B("x",e[0].dataType,e[0].dims,y),B("skip",e[1].dataType,e[1].dims,y),B("gamma",e[2].dataType,e[2].dims,y)];f&&I.push(B("beta",e[3].dataType,e[3].dims,y)),m&&I.push(B("bias",e[4].dataType,e[4].dims,y)),I.push(ee("output",e[0].dataType,o,y)),_&&I.push(ee("mean_output",1,p)),w&&I.push(ee("inv_std_output",1,p)),$&&I.push(ee("input_skip_bias_sum",e[0].dataType,o,y));let z=qe(e[0].dataType),N=qe(1,y);return`

      ${E.registerUniforms(T).declareVariables(...I)}
      var<workgroup> sum_shared : array<${N}, ${S}>;
      var<workgroup> sum_squared_shared : array<${N}, ${S}>;

      ${E.mainStart([S,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${S};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${S};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${S-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${m?"bias[offset1d + i]":z+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${$?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${ei(z,y,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${S};
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${Jr("sum",y)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${Jr("square_sum",y)} / f32(uniforms.hidden_size) ${a?"":"- mean * mean"} + uniforms.epsilon);
        ${_?"mean_output[global_idx] = mean;":""}
        ${w?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${a?"":`- ${z}(mean)`}) *
            ${z}(inv_std_dev) * gamma[offset1d + i]
            ${f?"+ beta[offset1d + i]":""};
        }
      }`},k=[{dims:o,dataType:e[0].dataType}];return r>1&&k.push({dims:p,dataType:1}),r>2&&k.push({dims:p,dataType:1}),r>3&&k.push({dims:i,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${y};${_};${w};${$}`,inputDependencies:e.map((E,T)=>"type")},getShaderSource:x,getRunData:()=>({outputs:k,dispatchGroup:{x:Math.ceil(u/d)},programUniforms:g})}},x$=(e,t)=>{O0(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute(N0(e.inputs,t,e.outputCount,!1),{outputs:r})}}),R0,ji,D0,mu,M0,P0,b$,k$,uS=V(()=>{se(),de(),Pe(),ce(),R0=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((r,n)=>{if(e[n+1].dataType!==6&&e[n+1].dataType!==7)throw new Error(`Input ${n} must be an array of int32 or int64`)})},ji=(e,t)=>{let r=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(n=>r.push(Number(n)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(n=>r.push(Number(n)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return r},D0=(e,t)=>{if(e.length>1){let r=ji(e,1),n=ji(e,2),a=ji(e,3);return a.length===0&&(a=[...Array(e[0].dims.length).keys()]),_e({starts:r,ends:n,axes:a})}else return t},mu=(e,t,r,n,a)=>{let i=e;return e<0&&(i+=r[n[t]]),a[t]<0?Math.max(0,Math.min(i,r[n[t]]-1)):Math.max(0,Math.min(i,r[n[t]]))},M0=(e,t,r)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${r.length-1}; i >= 0; i--) {
            let input_shape_i = ${ne("uniforms.input_shape","i",r.length)};
            let steps_i = ${ne("uniforms.steps","i",r.length)};
            let signs_i = ${ne("uniforms.signs","i",r.length)};
            let starts_i = ${ne("uniforms.starts","i",r.length)};
            var output_index = ${t.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,P0=(e,t)=>{let r=e[0].dims,n=D.size(r),a=t.axes.length>0?D.normalizeAxes(t.axes,r.length):[...Array(r.length).keys()],i=ji(e,4);i.forEach(y=>y!==0||(()=>{throw new Error("step cannot be 0")})),i.length===0&&(i=Array(a.length).fill(1));let s=t.starts.map((y,g)=>mu(y,g,r,a,i)),o=t.ends.map((y,g)=>mu(y,g,r,a,i));if(a.length!==s.length||a.length!==o.length)throw new Error("start, ends and axes should have the same number of elements");if(a.length!==r.length)for(let y=0;y<r.length;++y)a.includes(y)||(s.splice(y,0,0),o.splice(y,0,r[y]),i.splice(y,0,1));let u=i.map(y=>Math.sign(y));i.forEach((y,g,x)=>{if(y<0){let k=(o[g]-s[g])/y,E=s[g],T=E+k*i[g];s[g]=T,o[g]=E,x[g]=-y}});let d=r.slice(0);a.forEach((y,g)=>{d[y]=Math.ceil((o[y]-s[y])/i[y])});let p={dims:d,dataType:e[0].dataType},f=ee("output",e[0].dataType,d.length),m=B("input",e[0].dataType,e[0].dims.length),_=D.size(d),w=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:s.length},{name:"signs",type:"i32",length:u.length},{name:"steps",type:"u32",length:i.length}],$=[{type:12,data:_},{type:12,data:s},{type:6,data:u},{type:12,data:i},...ie(e[0].dims,d)],S=y=>`
      ${y.registerUniforms(w).declareVariables(m,f)}
        ${M0(m,f,r)}
        ${y.mainStart()}
          ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${f.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${f.setByOffset("global_idx",m.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${u.length}_${s.length}_${i.length}`,inputDependencies:["rank"]},getShaderSource:S,getRunData:()=>({outputs:[p],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:$})}},b$=(e,t)=>{R0(e.inputs,t);let r=D0(e.inputs,t);e.compute(P0(e.inputs,r),{inputs:[0]})},k$=e=>{let t=e.starts,r=e.ends,n=e.axes;return _e({starts:t,ends:r,axes:n})}}),B0,L0,S$,C$,dS=V(()=>{se(),de(),Pe(),nn(),ce(),B0=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},L0=(e,t)=>{let r=e.inputs[0],n=r.dims,a=D.size(n),i=n.length,s=D.normalizeAxis(t.axis,i),o=s<n.length-1,u,d=[];o?(d=Array.from({length:i},(I,z)=>z),d[s]=i-1,d[i-1]=s,u=e.compute(Et(r,d),{inputs:[r],outputs:[-1]})[0]):u=r;let p=u.dims,f=p[i-1],m=a/f,_=Ne(f),w=f/_,$=64;m===1&&($=256);let S=(I,z)=>z===4?`max(max(${I}.x, ${I}.y), max(${I}.z, ${I}.w))`:z===2?`max(${I}.x, ${I}.y)`:z===3?`max(max(${I}.x, ${I}.y), ${I}.z)`:I,y=B("x",u.dataType,u.dims,_),g=ee("result",u.dataType,u.dims,_),x=y.type.value,k=qe(u.dataType)==="f32"?`var threadMax = ${x}(-3.402823e+38f);`:`var threadMax = ${x}(-65504.0h);`,E=I=>`
      var<workgroup> rowMaxShared : ${x};
      var<workgroup> rowSumShared : ${x};
      var<workgroup> threadShared : array<${x}, ${$}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${x} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${x}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${I.registerUniform("packedCols","i32").declareVariables(y,g)}
      ${I.mainStart($)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${$};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${k}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${x}(${S("threadShared[0]",_)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${x}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${x}(${Jr("threadShared[0]",_)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${x}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,T=e.compute({name:"Softmax",shaderCache:{hint:`${_};${$}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:p,dataType:u.dataType}],dispatchGroup:{x:m},programUniforms:[{type:6,data:w}]}),getShaderSource:E},{inputs:[u],outputs:[o?-1:0]})[0];o&&e.compute(Et(T,d),{inputs:[T]})},S$=(e,t)=>{B0(e.inputs),L0(e,t)},C$=e=>_e({axis:e.axis})}),gu,U0,j0,W0,E$,cS=V(()=>{se(),de(),ce(),gu=e=>Array.from(e.getBigInt64Array(),Number),U0=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(gu(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},j0=(e,t)=>{let r=[];for(let n=0;n<e.length;++n)r.push(e[n]*t[n]);return r},W0=(e,t)=>{let r=e[0].dims,n=t??gu(e[1]),a=j0(r,n),i=D.size(a),s=e[0].dataType,o=B("input",s,r.length),u=ee("output",s,a.length),d=p=>`
      const inputShape = ${o.indices(...r)};
      ${p.registerUniform("output_size","u32").declareVariables(o,u)}
      ${p.mainStart()}
      ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${u.offsetToIndices("global_idx")};
      var input_indices: ${o.type.indices};
      for (var i = 0; i < ${r.length}; i++) {
        let input_dim_i = ${o.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${u.indicesGet("output_indices","i")}  % input_dim_i;

        ${o.indicesSet("input_indices","i","input_dim_value")}
      }
      ${u.setByOffset("global_idx",o.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${n}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},...ie(e[0].dims,a)]}),getShaderSource:d}},E$=e=>{U0(e.inputs),e.compute(W0(e.inputs),{inputs:[0]})}}),F0,V0,T$,pS=V(()=>{se(),de(),ce(),F0=(e,t,r,n,a)=>{let i=ee("output_data",a,r.length,4),s=B("a_data",t[1].dataType,t[1].dims.length,4),o=B("b_data",t[2].dataType,t[2].dims.length,4),u=B("c_data",t[0].dataType,t[0].dims.length,4),d,p=(f,m,_)=>`select(${m}, ${f}, ${_})`;if(!n)d=i.setByOffset("global_idx",p(s.getByOffset("global_idx"),o.getByOffset("global_idx"),u.getByOffset("global_idx")));else{let f=(m,_,w="")=>{let $=`a_data[index_a${_}][component_a${_}]`,S=`b_data[index_b${_}][component_b${_}]`,y=`bool(c_data[index_c${_}] & (0xffu << (component_c${_} * 8)))`;return`
            let output_indices${_} = ${i.offsetToIndices(`global_idx * 4u + ${_}u`)};
            let offset_a${_} = ${s.broadcastedIndicesToOffset(`output_indices${_}`,i)};
            let offset_b${_} = ${o.broadcastedIndicesToOffset(`output_indices${_}`,i)};
            let offset_c${_} = ${u.broadcastedIndicesToOffset(`output_indices${_}`,i)};
            let index_a${_} = offset_a${_} / 4u;
            let index_b${_} = offset_b${_} / 4u;
            let index_c${_} = offset_c${_} / 4u;
            let component_a${_} = offset_a${_} % 4u;
            let component_b${_} = offset_b${_} % 4u;
            let component_c${_} = offset_c${_} % 4u;
            ${m}[${_}] = ${w}(${p($,S,y)});
          `};a===9?d=`
            var data = vec4<u32>(0);
            ${f("data",0,"u32")}
            ${f("data",1,"u32")}
            ${f("data",2,"u32")}
            ${f("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:d=`
            ${f("output_data[global_idx]",0)}
            ${f("output_data[global_idx]",1)}
            ${f("output_data[global_idx]",2)}
            ${f("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(u,s,o,i)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${d}
      }`},V0=e=>{let t=e[1].dims,r=e[2].dims,n=e[0].dims,a=e[1].dataType,i=!(D.areEqual(t,r)&&D.areEqual(r,n)),s=t,o=D.size(t);if(i){let d=hi.calcShape(hi.calcShape(t,r,!1),n,!1);if(!d)throw new Error("Can't perform where op on the given tensors");s=d,o=D.size(s)}let u=Math.ceil(o/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:d=>F0(d,e,s,i,a),getRunData:()=>({outputs:[{dims:s,dataType:a}],dispatchGroup:{x:Math.ceil(o/64/4)},programUniforms:[{type:12,data:u},...ie(n,t,r,s)]})}},T$=e=>{e.compute(V0(e.inputs))}}),I$,fS=V(()=>{Ek(),Bc(),Tk(),Ik(),zk(),Ak(),Ok(),Pk(),Lk(),Uk(),jk(),Wk(),Fk(),Vk(),qk(),Hk(),Gk(),Kk(),Qk(),Xk(),Yk(),Zk(),Jk(),eS(),tS(),Kw(),rS(),nS(),iS(),aS(),sS(),Pc(),oS(),Jw(),lS(),uS(),dS(),Yw(),cS(),nn(),Lc(),pS(),I$=new Map([["Abs",[x_]],["Acos",[b_]],["Acosh",[k_]],["Add",[iw]],["ArgMax",[v_,_d]],["ArgMin",[y_,_d]],["Asin",[S_]],["Asinh",[C_]],["Atan",[E_]],["Atanh",[T_]],["Attention",[__]],["AveragePool",[l$,o$]],["BatchNormalization",[w_]],["BiasAdd",[$_]],["BiasSplitGelu",[nw]],["Cast",[z_,I_]],["Ceil",[O_]],["Clip",[A_]],["Concat",[hw,mw]],["Conv",[Sd,kd]],["ConvTranspose",[Sw,kw]],["Cos",[N_]],["Cosh",[R_]],["CumSum",[Cw,Ew]],["DepthToSpace",[Tw,Iw]],["DequantizeLinear",[m$,g$]],["Div",[aw]],["Einsum",[zw,Aw]],["Elu",[D_,Xi]],["Equal",[sw]],["Erf",[M_]],["Exp",[P_]],["Expand",[Ow]],["FastGelu",[Nw]],["Floor",[B_]],["FusedConv",[Sd,kd]],["Gather",[Dw,Rw]],["GatherElements",[jw,Uw]],["GatherBlockQuantized",[Bw,Lw]],["GatherND",[Mw,Pw]],["Gelu",[L_]],["Gemm",[Fw,Ww]],["GlobalAveragePool",[d$,u$]],["GlobalMaxPool",[h$,f$]],["Greater",[dw]],["GreaterOrEqual",[pw]],["GridSample",[Vw,qw]],["GroupQueryAttention",[e$]],["HardSigmoid",[G_,H_]],["InstanceNormalization",[t$]],["LayerNormalization",[r$]],["LeakyRelu",[U_,Xi]],["Less",[cw]],["LessOrEqual",[fw]],["Log",[tw]],["MatMul",[n$]],["MatMulNBits",[i$,a$]],["MaxPool",[c$,p$]],["Mul",[ow]],["MultiHeadAttention",[Gw,Hw]],["Neg",[W_]],["Not",[j_]],["Pad",[s$]],["Pow",[lw]],["QuickGelu",[rw,Xi]],["Range",[y$]],["Reciprocal",[F_]],["ReduceMin",[p_]],["ReduceMean",[o_]],["ReduceMax",[c_]],["ReduceSum",[h_]],["ReduceProd",[f_]],["ReduceL1",[l_]],["ReduceL2",[u_]],["ReduceLogSum",[g_]],["ReduceLogSumExp",[d_]],["ReduceSumSquare",[m_]],["Relu",[V_]],["Resize",[w$,$$]],["RotaryEmbedding",[Zw]],["ScatterND",[_$,v$]],["Sigmoid",[q_]],["Sin",[K_]],["Sinh",[Q_]],["Slice",[b$,k$]],["SkipLayerNormalization",[x$]],["Split",[Qw,Xw]],["Sqrt",[X_]],["Softmax",[S$,C$]],["Sub",[uw]],["Tan",[Y_]],["Tanh",[Z_]],["ThresholdedRelu",[ew,Xi]],["Tile",[E$]],["Transpose",[Qv,Xv]],["Where",[T$]]])}),z$,hS=V(()=>{Bt(),Er(),ce(),z$=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,r,n,a){lr(e.programInfo.name);let i=this.backend.device,s=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let o=[];for(let d of t)o.push({binding:o.length,resource:{buffer:d.buffer}});for(let d of r)o.push({binding:o.length,resource:{buffer:d.buffer}});a&&o.push({binding:o.length,resource:a});let u=i.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:o,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let d={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:u,dispatchGroup:n};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(d)}s.setPipeline(e.computePipeline),s.setBindGroup(0,u),s.dispatchWorkgroups(...n),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),Zt(e.programInfo.name)}dispose(){}build(e,t){lr(e.name);let r=this.backend.device,n=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(d=>{r.features.has(d.feature)&&n.push(`enable ${d.extension};`)});let a=Kv(t,this.backend.device.limits),i=e.getShaderSource(a),s=`${n.join(`
`)}
${a.additionalImplementations}
${i}`,o=r.createShaderModule({code:s,label:e.name});he("verbose",()=>`[WebGPU] ${e.name} shader code: ${s}`);let u=r.createComputePipeline({compute:{module:o,entryPoint:"main"},layout:"auto",label:e.name});return Zt(e.name),{programInfo:e,computePipeline:u,uniformVariablesInfo:a.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,r=typeof e=="number"?1:e.y||1,n=typeof e=="number"?1:e.z||1,a=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=a&&r<=a&&n<=a)return[t,r,n];let i=t*r*n,s=Math.ceil(Math.sqrt(i));if(s>a){if(s=Math.ceil(Math.cbrt(i)),s>a)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[s,s,s]}else return[s,s,1]}}}),A$={};wi(A$,{WebGpuBackend:()=>O$});var q0,H0,G0,O$,mS=V(()=>{Bt(),se(),Er(),Fv(),Sk(),fS(),hS(),q0=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let r=[];for(let n=0;n<e.length;++n){let a=e[n].dataType;switch(t[n]){case"none":{r.push("");break}case"type":{r.push(`${a}`);break}case"rank":{let i=e[n].dims.length;r.push(`${a};${i}`);break}case"dims":{let i=e[n].dims.join(",");r.push(`${a};${i}`);break}default:throw new Error(`unsupported input dependency: ${t[n]}`)}}return r.join("|")},H0=(e,t,r)=>{var a,i;let n=e.name;return(a=e.shaderCache)!=null&&a.hint&&(n+="["+e.shaderCache.hint+"]"),n+=":"+r+`:${q0(t,((i=e.shaderCache)==null?void 0:i.inputDependencies)??new Array(t.length).fill("dims"))}`,n},G0=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},O$=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let r=[],n={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r},a=i=>t.features.has(i)&&r.push(i)&&!0;a("chromium-experimental-timestamp-query-inside-passes")||a("timestamp-query"),a("shader-f16"),a("subgroups"),this.device=await t.requestDevice(n),this.adapterInfo=new G0(t.info||await t.requestAdapterInfo()),this.gpuDataManager=Hv(this),this.programManager=new z$(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Nc(e.logLevel,!!e.debug),this.device.onuncapturederror=i=>{i.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${i.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose()}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;lr(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{var n;let t=new BigUint64Array(e.getMappedRange()),r=this.pendingQueries.get(e);for(let a=0;a<t.length/2;a++){let i=r[a],s=i.kernelId,o=this.kernels.get(s),u=o.kernelType,d=o.kernelName,p=i.programName,f=i.inputTensorViews,m=i.outputTensorViews,_=t[a*2],w=t[a*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=_);let $=Number(_-this.queryTimeBase),S=Number(w-this.queryTimeBase);if(!Number.isSafeInteger($)||!Number.isSafeInteger(S))throw new RangeError("incorrect timestamp range");if((n=this.env.webgpu.profiling)!=null&&n.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:f.map(y=>({dims:y.dims,dataType:yr(y.dataType)})),outputsMetadata:m.map(y=>({dims:y.dims,dataType:yr(y.dataType)})),kernelId:s,kernelType:u,kernelName:d,programName:p,startTime:$,endTime:S});else{let y="";f.forEach((x,k)=>{y+=`input[${k}]: [${x.dims}] | ${yr(x.dataType)}, `});let g="";m.forEach((x,k)=>{g+=`output[${k}]: [${x.dims}] | ${yr(x.dataType)}, `}),console.log(`[profiling] kernel "${s}|${u}|${d}|${p}" ${y}${g}start time: ${$} ns, execution time: ${S-$} ns`)}ro("GPU",`${p}::${_}::${w}`)}e.unmap(),this.pendingQueries.delete(e)}),Zt()}run(e,t,r,n,a,i){lr(e.name);let s=[];for(let g=0;g<t.length;++g){let x=t[g].data;if(x===0)continue;let k=this.gpuDataManager.get(x);if(!k)throw new Error(`no GPU data for input: ${x}`);s.push(k)}let{outputs:o,dispatchGroup:u,programUniforms:d}=e.getRunData(t),p=r.length===0?o.map((g,x)=>x):r;if(p.length!==o.length)throw new Error(`Output size ${p.length} must be equal to ${o.length}.`);let f=[],m=[];for(let g=0;g<o.length;++g){if(!Number.isInteger(p[g])||p[g]<-3||p[g]>=i)throw new Error(`Invalid output index: ${p[g]}`);if(p[g]===-3)continue;let x=p[g]===-1,k=p[g]===-2,E=x||k?a(o[g].dataType,o[g].dims):n(p[g],o[g].dataType,o[g].dims);if(f.push(E),E.data===0)continue;let T=this.gpuDataManager.get(E.data);if(!T)throw new Error(`no GPU data for output: ${E.data}`);if(x&&this.temporaryData.push(T),k){let I=this.kernelPersistentData.get(this.currentKernelId);I||(I=[],this.kernelPersistentData.set(this.currentKernelId,I)),I.push(T)}m.push(T)}if(s.length!==t.length||m.length!==f.length){if(m.length===0)return Zt(e.name),f;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let _;if(d){let g=0,x=[];d.forEach(I=>{let z=typeof I.data=="number"?[I.data]:I.data;if(z.length===0)return;let N=I.type===10?2:4,L,X;I.type===10?(X=z.length>4?16:z.length>2?8:z.length*N,L=z.length>4?16:N*z.length):(X=z.length<=2?z.length*N:16,L=16),g=Math.ceil(g/X)*X,x.push(g);let Q=I.type===10?8:4;g+=z.length>4?Math.ceil(z.length/Q)*L:z.length*N});let k=16;g=Math.ceil(g/k)*k;let E=new ArrayBuffer(g);d.forEach((I,z)=>{let N=x[z],L=typeof I.data=="number"?[I.data]:I.data;if(I.type===6)new Int32Array(E,N,L.length).set(L);else if(I.type===12)new Uint32Array(E,N,L.length).set(L);else if(I.type===10)new Uint16Array(E,N,L.length).set(L);else if(I.type===1)new Float32Array(E,N,L.length).set(L);else throw new Error(`Unsupported uniform type: ${yr(I.type)}`)});let T=this.gpuDataManager.create(g,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(T.buffer,0,E,0,g),this.gpuDataManager.release(T.id),_={offset:0,size:g,buffer:T.buffer}}let w=this.programManager.normalizeDispatchGroupSize(u),$=w[1]===1&&w[2]===1,S=H0(e,t,$),y=this.programManager.getArtifact(S);if(y||(y=this.programManager.build(e,w),this.programManager.setArtifact(S,y),he("info",()=>`[artifact] key: ${S}, programName: ${e.name}`)),d&&y.uniformVariablesInfo){if(d.length!==y.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${y.uniformVariablesInfo.length}, got ${d.length} in program "${y.programInfo.name}".`);for(let g=0;g<d.length;g++){let x=d[g],k=x.type,E=typeof x.data=="number"?1:x.data.length,[T,I]=y.uniformVariablesInfo[g];if(k!==T||E!==I)throw new Error(`Uniform variable ${g} mismatch: expect type ${T} with size ${I}, got type ${k} with size ${E} in program "${y.programInfo.name}".`)}}if(he("info",()=>`[ProgramManager] run "${e.name}" (key=${S}) with ${w[0]}x${w[1]}x${w[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let g={kernelId:this.currentKernelId,programName:y.programInfo.name,inputTensorViews:t,outputTensorViews:f};this.pendingKernels.push(g),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(g)}return this.programManager.run(y,s,m,w,_),Zt(e.name),f}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,r,n){let a=I$.get(e);if(!a)throw new Error(`kernel not implemented: ${e}`);let i={kernelType:e,kernelName:n,kernelEntry:a[0],attributes:[a[1],r]};this.kernels.set(t,i)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let r of t)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,r){let n=this.kernels.get(e);if(!n)throw new Error(`kernel not created: ${e}`);let a=n.kernelType,i=n.kernelName,s=n.kernelEntry,o=n.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${a}] ${i}" is not allowed to be called recursively`);this.currentKernelId=e,o[0]&&(o[1]=o[0](o[1]),o[0]=void 0),he("info",()=>`[WebGPU] Start to run kernel "[${a}] ${i}"...`);let u=this.env.debug;this.temporaryData=[];try{return u&&this.device.pushErrorScope("validation"),s(t,o[1]),0}catch(d){return r.push(Promise.resolve(`[WebGPU] Kernel "[${a}] ${i}" failed. ${d}`)),1}finally{u&&r.push(this.device.popErrorScope().then(d=>d?`GPU validation error for kernel "[${a}] ${i}": ${d.message}`:null));for(let d of this.temporaryData)this.gpuDataManager.release(d.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,r,n){let a=this.sessionExternalDataMapping.get(e);a||(a=new Map,this.sessionExternalDataMapping.set(e,a));let i=a.get(t),s=this.gpuDataManager.registerExternalBuffer(r,n,i);return a.set(t,[s,r]),s}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,r){return async()=>{let n=await gd(this,e,t);return Rc(n.buffer,r)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){var e;this.queryType="none",(((e=this.env.webgpu.profiling)==null?void 0:e.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){he("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){he("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){he("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),r=e.length;this.pendingKernels=[];for(let n=0;n<r;n++){let a=this.getComputePassEncoder(),i=e[n];this.writeTimestamp(this.pendingDispatchNumber*2),a.setPipeline(i.computePipeline),a.setBindGroup(0,i.bindGroup),a.dispatchWorkgroups(...i.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[n]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),N$={};wi(N$,{init:()=>R$});var ms,K0,R$,gS=V(()=>{se(),Er(),de(),kk(),ms=class D${constructor(t,r,n,a){this.module=t,this.dataType=r,this.data=n,this.dims=a}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=D.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=D.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=D.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=D.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(D.size(t)!==D.size(this.dims))throw new Error("Invalid new shape");return new D$(this.module,this.dataType,this.data,t)}},K0=class{constructor(e,t,r){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let n=e.PTR_SIZE,a=r/e.PTR_SIZE,i=n===4?"i32":"i64";this.opKernelContext=Number(e.getValue(n*a++,i));let s=Number(e.getValue(n*a++,i));this.outputCount=Number(e.getValue(n*a++,i)),this.customDataOffset=Number(e.getValue(n*a++,"*")),this.customDataSize=Number(e.getValue(n*a++,i));let o=[];for(let u=0;u<s;u++){let d=Number(e.getValue(n*a++,i)),p=Number(e.getValue(n*a++,"*")),f=Number(e.getValue(n*a++,i)),m=[];for(let _=0;_<f;_++)m.push(Number(e.getValue(n*a++,i)));o.push(new ms(e,d,p,m))}this.inputs=o}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){var s;let r=((s=t==null?void 0:t.inputs)==null?void 0:s.map(o=>typeof o=="number"?this.inputs[o]:o))??this.inputs,n=(t==null?void 0:t.outputs)??[],a=(o,u,d)=>new ms(this.module,u,this.output(o,d),d),i=(o,u)=>{let d=vn(o,u);if(!d)throw new Error(`Unsupported data type: ${o}`);let p=d>0?this.backend.gpuDataManager.create(d).id:0;return new ms(this.module,o,p,u)};return this.backend.run(e,r,n,a,i,this.outputCount)}output(e,t){let r=this.module.stackSave();try{let n=this.module.PTR_SIZE,a=n===4?"i32":"i64",i=this.module.stackAlloc((1+t.length)*n);this.module.setValue(i,t.length,a);for(let s=0;s<t.length;s++)this.module.setValue(i+n*(s+1),t[s],a);return this.module._JsepOutput(this.opKernelContext,e,i)}catch(n){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${n}`)}finally{this.module.stackRestore(r)}}},R$=async(e,t,r,n)=>{let a=t.jsepInit;if(!a)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let i=(mS(),Sa(A$)).WebGpuBackend,s=new i;await s.initialize(r,n),a("webgpu",[s,o=>s.alloc(Number(o)),o=>s.free(o),(o,u,d,p=!1)=>{if(p)he("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(o)}, dst=${Number(u)}, size=${Number(d)}`),s.memcpy(Number(o),Number(u));else{he("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(o)}, gpuDataId=${Number(u)}, size=${Number(d)}`);let f=t.HEAPU8.subarray(Number(o>>>0),Number(o>>>0)+Number(d));s.upload(Number(u),f)}},async(o,u,d)=>{he("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${o}, dataOffset=${u}, size=${d}`),await s.download(Number(o),()=>t.HEAPU8.subarray(Number(u)>>>0,Number(u+d)>>>0))},(o,u,d)=>s.createKernel(o,Number(u),d,t.UTF8ToString(t._JsepGetNodeName(Number(u)))),o=>s.releaseKernel(o),(o,u,d,p)=>{he("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${d}, kernel=${o}, contextDataOffset=${u}`);let f=new K0(t,s,Number(u));return s.computeKernel(Number(o),f,p)},()=>s.captureBegin(),()=>s.captureEnd(),()=>s.replay()])}else{let i=new qv(r);a("webnn",[i,()=>i.reserveTensorId(),s=>i.releaseTensorId(s),async(s,o,u,d,p)=>i.ensureTensor(s,o,u,d,p),(s,o)=>{i.uploadTensor(s,o)},async(s,o)=>i.downloadTensor(s,o),(s,o)=>i.registerMLContext(s,o),!!r.trace])}}}),Q0,qc,Hc,Dr,X0,yu,uo,Gc,Kc,vu,Qc,Xc,Yc,M$=V(()=>{Bt(),$k(),xk(),se(),Mn(),Ic(),Lv(),Q0=(e,t)=>{ke()._OrtInit(e,t)!==0&&$e("Can't initialize onnxruntime.")},qc=async e=>{Q0(e.wasm.numThreads,io(e.logLevel))},Hc=async(e,t)=>{var n,a;(a=(n=ke()).asyncInit)==null||a.call(n);let r=e.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(r){if(typeof r.limits!="object"||typeof r.features!="object"||typeof r.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let i=e.webgpu.powerPreference;if(i!==void 0&&i!=="low-power"&&i!=="high-performance")throw new Error(`Invalid powerPreference setting: "${i}"`);let s=e.webgpu.forceFallbackAdapter;if(s!==void 0&&typeof s!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${s}"`);if(r=await navigator.gpu.requestAdapter({powerPreference:i,forceFallbackAdapter:s}),!r)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let i=(gS(),Sa(N$)).init;t==="webgpu"&&await i("webgpu",ke(),e,r),t==="webnn"&&await i("webnn",ke(),e)}},Dr=new Map,X0=e=>{let t=ke(),r=t.stackSave();try{let n=t.PTR_SIZE,a=t.stackAlloc(2*n);t._OrtGetInputOutputCount(e,a,a+n)!==0&&$e("Can't get session input/output count.");let i=n===4?"i32":"i64";return[Number(t.getValue(a,i)),Number(t.getValue(a+n,i))]}finally{t.stackRestore(r)}},yu=(e,t)=>{let r=ke(),n=r.stackSave(),a=0;try{let i=r.PTR_SIZE,s=r.stackAlloc(2*i);r._OrtGetInputOutputMetadata(e,t,s,s+i)!==0&&$e("Can't get session input/output metadata.");let o=Number(r.getValue(s,"*"));a=Number(r.getValue(s+i,"*"));let u=r.HEAP32[a/4];if(u===0)return[o,0];let d=r.HEAPU32[a/4+1],p=[];for(let f=0;f<d;f++){let m=Number(r.getValue(a+8+f*i,"*"));p.push(m!==0?r.UTF8ToString(m):Number(r.getValue(a+8+(f+d)*i,"*")))}return[o,u,p]}finally{r.stackRestore(n),a!==0&&r._OrtFree(a)}},uo=e=>{let t=ke(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,r),[r,e.byteLength]},Gc=async(e,t)=>{var f,m,_,w;let r,n,a=ke();Array.isArray(e)?[r,n]=e:e.buffer===a.HEAPU8.buffer?[r,n]=[e.byteOffset,e.byteLength]:[r,n]=uo(e);let i=0,s=0,o=0,u=[],d=[],p=[];try{if([s,u]=await Bv(t),(t==null?void 0:t.externalData)&&a.mountExternalData){let z=[];for(let N of t.externalData){let L=typeof N=="string"?N:N.path;z.push(Oc(typeof N=="string"?N:N.data).then(X=>{a.mountExternalData(L,X)}))}await Promise.all(z)}for(let z of(t==null?void 0:t.executionProviders)??[])if((typeof z=="string"?z:z.name)==="webnn"){if(a.shouldTransferToMLTensor=!1,typeof z!="string"){let N=z,L=N==null?void 0:N.context,X=N==null?void 0:N.gpuDevice,Q=N==null?void 0:N.deviceType,G=N==null?void 0:N.powerPreference;L?a.currentContext=L:X?a.currentContext=await a.webnnCreateMLContext(X):a.currentContext=await a.webnnCreateMLContext({deviceType:Q,powerPreference:G})}else a.currentContext=await a.webnnCreateMLContext();break}i=await a._OrtCreateSession(r,n,s),(f=a.webgpuOnCreateSession)==null||f.call(a,i),i===0&&$e("Can't create a session."),(m=a.jsepOnCreateSession)==null||m.call(a),a.currentContext&&(a.webnnRegisterMLContext(i,a.currentContext),a.currentContext=void 0,a.shouldTransferToMLTensor=!0);let[$,S]=X0(i),y=!!(t!=null&&t.enableGraphCapture),g=[],x=[],k=[],E=[],T=[];for(let z=0;z<$;z++){let[N,L,X]=yu(i,z);N===0&&$e("Can't get an input name."),d.push(N);let Q=a.UTF8ToString(N);g.push(Q),k.push(L===0?{name:Q,isTensor:!1}:{name:Q,isTensor:!0,type:yr(L),shape:X})}for(let z=0;z<S;z++){let[N,L,X]=yu(i,z+$);N===0&&$e("Can't get an output name."),p.push(N);let Q=a.UTF8ToString(N);x.push(Q),E.push(L===0?{name:Q,isTensor:!1}:{name:Q,isTensor:!0,type:yr(L),shape:X});{if(y&&(t==null?void 0:t.preferredOutputLocation)===void 0){T.push("gpu-buffer");continue}let G=typeof(t==null?void 0:t.preferredOutputLocation)=="string"?t.preferredOutputLocation:((_=t==null?void 0:t.preferredOutputLocation)==null?void 0:_[Q])??"cpu",pe=a.webnnIsGraphOutput;if(G==="cpu"&&pe&&pe(i,Q)){T.push("ml-tensor-cpu-output");continue}if(G!=="cpu"&&G!=="cpu-pinned"&&G!=="gpu-buffer"&&G!=="ml-tensor")throw new Error(`Not supported preferred output location: ${G}.`);if(y&&G!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${G}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);T.push(G)}}let I=null;return T.some(z=>z==="gpu-buffer"||z==="ml-tensor"||z==="ml-tensor-cpu-output")&&(o=a._OrtCreateBinding(i),o===0&&$e("Can't create IO binding."),I={handle:o,outputPreferredLocations:T,outputPreferredLocationsEncoded:T.map(z=>z==="ml-tensor-cpu-output"?"ml-tensor":z).map(z=>hd(z))}),Dr.set(i,[i,d,p,I,y,!1]),[i,g,x,k,E]}catch($){throw d.forEach(S=>a._OrtFree(S)),p.forEach(S=>a._OrtFree(S)),o!==0&&a._OrtReleaseBinding(o)!==0&&$e("Can't release IO binding."),i!==0&&a._OrtReleaseSession(i)!==0&&$e("Can't release session."),$}finally{a._free(r),s!==0&&a._OrtReleaseSessionOptions(s)!==0&&$e("Can't release session options."),u.forEach($=>a._free($)),(w=a.unmountExternalData)==null||w.call(a)}},Kc=e=>{var u,d,p;let t=ke(),r=Dr.get(e);if(!r)throw new Error(`cannot release session. invalid session id: ${e}`);let[n,a,i,s,o]=r;s&&(o&&t._OrtClearBoundOutputs(s.handle)!==0&&$e("Can't clear bound outputs."),t._OrtReleaseBinding(s.handle)!==0&&$e("Can't release IO binding.")),(u=t.jsepOnReleaseSession)==null||u.call(t,e),(d=t.webnnOnReleaseSession)==null||d.call(t,e),(p=t.webgpuOnReleaseSession)==null||p.call(t,e),a.forEach(f=>t._OrtFree(f)),i.forEach(f=>t._OrtFree(f)),t._OrtReleaseSession(n)!==0&&$e("Can't release session."),Dr.delete(e)},vu=async(e,t,r,n,a,i,s=!1)=>{if(!e){t.push(0);return}let o=ke(),u=o.PTR_SIZE,d=e[0],p=e[1],f=e[3],m=f,_,w;if(d==="string"&&(f==="gpu-buffer"||f==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(s&&f!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${i} when enableGraphCapture is true.`);if(f==="gpu-buffer"){let y=e[2].gpuBuffer;w=vn(yn(d),p);{let g=o.jsepRegisterBuffer;if(!g)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');_=g(n,i,y,w)}}else if(f==="ml-tensor"){let y=e[2].mlTensor;w=vn(yn(d),p);let g=o.webnnRegisterMLTensor;if(!g)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');_=g(n,y,yn(d),p)}else{let y=e[2];if(Array.isArray(y)){w=u*y.length,_=o._malloc(w),r.push(_);for(let g=0;g<y.length;g++){if(typeof y[g]!="string")throw new TypeError(`tensor data at index ${g} is not a string`);o.setValue(_+g*u,Kt(y[g],r),"*")}}else{let g=o.webnnIsGraphInput,x=o.webnnIsGraphOutput;if(d!=="string"&&g&&x){let k=o.UTF8ToString(a);if(g(n,k)||x(n,k)){let E=yn(d);w=vn(E,p),m="ml-tensor";let T=o.webnnCreateTemporaryTensor,I=o.webnnUploadTensor;if(!T||!I)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let z=await T(n,E,p);I(z,new Uint8Array(y.buffer,y.byteOffset,y.byteLength)),_=z}else w=y.byteLength,_=o._malloc(w),r.push(_),o.HEAPU8.set(new Uint8Array(y.buffer,y.byteOffset,w),_)}else w=y.byteLength,_=o._malloc(w),r.push(_),o.HEAPU8.set(new Uint8Array(y.buffer,y.byteOffset,w),_)}}let $=o.stackSave(),S=o.stackAlloc(4*p.length);try{p.forEach((g,x)=>o.setValue(S+x*u,g,u===4?"i32":"i64"));let y=o._OrtCreateTensor(yn(d),_,w,S,p.length,hd(m));y===0&&$e(`Can't create tensor for input/output. session=${n}, index=${i}.`),t.push(y)}finally{o.stackRestore($)}},Qc=async(e,t,r,n,a,i)=>{var X,Q,G,pe;let s=ke(),o=s.PTR_SIZE,u=Dr.get(e);if(!u)throw new Error(`cannot run inference. invalid session id: ${e}`);let d=u[0],p=u[1],f=u[2],m=u[3],_=u[4],w=u[5],$=t.length,S=n.length,y=0,g=[],x=[],k=[],E=[],T=s.stackSave(),I=s.stackAlloc($*o),z=s.stackAlloc($*o),N=s.stackAlloc(S*o),L=s.stackAlloc(S*o);try{[y,g]=Pv(i),kn("wasm prepareInputOutputTensor");for(let M=0;M<$;M++)await vu(r[M],x,E,e,p[t[M]],t[M],_);for(let M=0;M<S;M++)await vu(a[M],k,E,e,f[n[M]],$+n[M],_);Sn("wasm prepareInputOutputTensor");for(let M=0;M<$;M++)s.setValue(I+M*o,x[M],"*"),s.setValue(z+M*o,p[t[M]],"*");for(let M=0;M<S;M++)s.setValue(N+M*o,k[M],"*"),s.setValue(L+M*o,f[n[M]],"*");if(m&&!w){let{handle:M,outputPreferredLocations:F,outputPreferredLocationsEncoded:Z}=m;if(p.length!==$)throw new Error(`input count from feeds (${$}) is expected to be always equal to model's input count (${p.length}).`);kn("wasm bindInputsOutputs");for(let O=0;O<$;O++){let W=t[O];await s._OrtBindInput(M,p[W],x[O])!==0&&$e(`Can't bind input[${O}] for session=${e}.`)}for(let O=0;O<S;O++){let W=n[O];(X=a[O])!=null&&X[3]?s._OrtBindOutput(M,f[W],k[O],0)!==0&&$e(`Can't bind pre-allocated output[${O}] for session=${e}.`):s._OrtBindOutput(M,f[W],0,Z[W])!==0&&$e(`Can't bind output[${O}] to ${F[O]} for session=${e}.`)}Sn("wasm bindInputsOutputs"),Dr.set(e,[d,p,f,m,_,!0])}(Q=s.jsepOnRunStart)==null||Q.call(s,d),(G=s.webnnOnRunStart)==null||G.call(s,d);let oe;m?oe=await s._OrtRunWithBinding(d,m.handle,S,N,y):oe=await s._OrtRun(d,z,I,$,L,S,N,y),oe!==0&&$e("failed to call OrtRun().");let Y=[],le=[];kn("wasm ProcessOutputTensor");for(let M=0;M<S;M++){let F=Number(s.getValue(N+M*o,"*"));if(F===k[M]){Y.push(a[M]);continue}let Z=s.stackSave(),O=s.stackAlloc(4*o),W=!1,K,te=0;try{s._OrtGetTensorData(F,O,O+o,O+2*o,O+3*o)!==0&&$e(`Can't access output tensor data on index ${M}.`);let ze=o===4?"i32":"i64",He=Number(s.getValue(O,ze));te=s.getValue(O+o,"*");let j=s.getValue(O+o*2,"*"),xe=Number(s.getValue(O+o*3,ze)),_t=[];for(let we=0;we<xe;we++)_t.push(Number(s.getValue(j+we*o,ze)));s._OrtFree(j)!==0&&$e("Can't free memory for tensor dims.");let at=_t.reduce((we,Ae)=>we*Ae,1);K=yr(He);let ur=m==null?void 0:m.outputPreferredLocations[n[M]];if(K==="string"){if(ur==="gpu-buffer"||ur==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let we=[];for(let Ae=0;Ae<at;Ae++){let wt=s.getValue(te+Ae*o,"*"),an=s.getValue(te+(Ae+1)*o,"*"),sn=Ae===at-1?void 0:an-wt;we.push(s.UTF8ToString(wt,sn))}Y.push([K,_t,we,"cpu"])}else if(ur==="gpu-buffer"&&at>0){let we=s.jsepGetBuffer;if(!we)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let Ae=we(te),wt=vn(He,at);if(wt===void 0||!zc(K))throw new Error(`Unsupported data type: ${K}`);W=!0,Y.push([K,_t,{gpuBuffer:Ae,download:s.jsepCreateDownloader(Ae,wt,K),dispose:()=>{s._OrtReleaseTensor(F)!==0&&$e("Can't release tensor.")}},"gpu-buffer"])}else if(ur==="ml-tensor"&&at>0){let we=s.webnnEnsureTensor,Ae=s.webnnIsGraphInputOutputTypeSupported;if(!we||!Ae)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(vn(He,at)===void 0||!Ac(K))throw new Error(`Unsupported data type: ${K}`);if(!Ae(e,K,!1))throw new Error(`preferredLocation "ml-tensor" for ${K} output is not supported by current WebNN Context.`);let wt=await we(e,te,He,_t,!1);W=!0,Y.push([K,_t,{mlTensor:wt,download:s.webnnCreateMLTensorDownloader(te,K),dispose:()=>{s.webnnReleaseTensorId(te),s._OrtReleaseTensor(F)}},"ml-tensor"])}else if(ur==="ml-tensor-cpu-output"&&at>0){let we=s.webnnCreateMLTensorDownloader(te,K)(),Ae=Y.length;W=!0,le.push((async()=>{let wt=[Ae,await we];return s.webnnReleaseTensorId(te),s._OrtReleaseTensor(F),wt})()),Y.push([K,_t,[],"cpu"])}else{let we=Eo(K),Ae=new we(at);new Uint8Array(Ae.buffer,Ae.byteOffset,Ae.byteLength).set(s.HEAPU8.subarray(te,te+Ae.byteLength)),Y.push([K,_t,Ae,"cpu"])}}finally{s.stackRestore(Z),K==="string"&&te&&s._free(te),W||s._OrtReleaseTensor(F)}}m&&!_&&(s._OrtClearBoundOutputs(m.handle)!==0&&$e("Can't clear bound outputs."),Dr.set(e,[d,p,f,m,_,!1]));for(let[M,F]of await Promise.all(le))Y[M][2]=F;return Sn("wasm ProcessOutputTensor"),Y}finally{(pe=s.webnnOnRunEnd)==null||pe.call(s,d),s.stackRestore(T),x.forEach(oe=>s._OrtReleaseTensor(oe)),k.forEach(oe=>s._OrtReleaseTensor(oe)),E.forEach(oe=>s._free(oe)),y!==0&&s._OrtReleaseRunOptions(y),g.forEach(oe=>s._free(oe))}},Xc=e=>{let t=ke(),r=Dr.get(e);if(!r)throw new Error("invalid session id");let n=r[0],a=t._OrtEndProfiling(n);a===0&&$e("Can't get an profile file name."),t._OrtFree(a)},Yc=e=>{let t=[];for(let r of e){let n=r[2];!Array.isArray(n)&&"buffer"in n&&t.push(n.buffer)}return t}}),Mr,pt,Un,Wi,Fi,gs,_u,ys,pn,fn,Y0,P$,B$,L$,U$,j$,W$,F$,V$=V(()=>{Bt(),M$(),Mn(),Ec(),Mr=()=>!!Se.wasm.proxy&&typeof document<"u",Un=!1,Wi=!1,Fi=!1,ys=new Map,pn=(e,t)=>{let r=ys.get(e);r?r.push(t):ys.set(e,[t])},fn=()=>{if(Un||!Wi||Fi||!pt)throw new Error("worker not ready")},Y0=e=>{switch(e.data.type){case"init-wasm":Un=!1,e.data.err?(Fi=!0,_u[1](e.data.err)):(Wi=!0,_u[0]()),gs&&(URL.revokeObjectURL(gs),gs=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=ys.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},P$=async()=>{if(!Wi){if(Un)throw new Error("multiple calls to 'initWasm()' detected.");if(Fi)throw new Error("previous call to 'initWasm()' failed.");if(Un=!0,Mr())return new Promise((e,t)=>{pt==null||pt.terminate(),Dv().then(([r,n])=>{try{pt=n,pt.onerror=i=>t(i),pt.onmessage=Y0,_u=[e,t];let a={type:"init-wasm",in:Se};!a.in.wasm.wasmPaths&&(r||fd)&&(a.in.wasm.wasmPaths={wasm:new URL(""+new URL("ort-wasm-simd-threaded.jsep-BGTZ4Y7F.wasm",import.meta.url).href,import.meta.url).href}),pt.postMessage(a),gs=r}catch(a){t(a)}},t)});try{await Tc(Se.wasm),await qc(Se),Wi=!0}catch(e){throw Fi=!0,e}finally{Un=!1}}},B$=async e=>{if(Mr())return fn(),new Promise((t,r)=>{pn("init-ep",[t,r]);let n={type:"init-ep",in:{epName:e,env:Se}};pt.postMessage(n)});await Hc(Se,e)},L$=async e=>Mr()?(fn(),new Promise((t,r)=>{pn("copy-from",[t,r]);let n={type:"copy-from",in:{buffer:e}};pt.postMessage(n,[e.buffer])})):uo(e),U$=async(e,t)=>{if(Mr()){if(t!=null&&t.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return fn(),new Promise((r,n)=>{pn("create",[r,n]);let a={type:"create",in:{model:e,options:{...t}}},i=[];e instanceof Uint8Array&&i.push(e.buffer),pt.postMessage(a,i)})}else return Gc(e,t)},j$=async e=>{if(Mr())return fn(),new Promise((t,r)=>{pn("release",[t,r]);let n={type:"release",in:e};pt.postMessage(n)});Kc(e)},W$=async(e,t,r,n,a,i)=>{if(Mr()){if(r.some(s=>s[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(a.some(s=>s))throw new Error("pre-allocated output tensor is not supported for proxy.");return fn(),new Promise((s,o)=>{pn("run",[s,o]);let u=r,d={type:"run",in:{sessionId:e,inputIndices:t,inputs:u,outputIndices:n,options:i}};pt.postMessage(d,Yc(u))})}else return Qc(e,t,r,n,a,i)},F$=async e=>{if(Mr())return fn(),new Promise((t,r)=>{pn("end-profiling",[t,r]);let n={type:"end-profiling",in:e};pt.postMessage(n)});Xc(e)}}),wu,Z0,q$,yS=V(()=>{Bt(),V$(),se(),Cc(),Lv(),wu=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},Z0=e=>{switch(e[3]){case"cpu":return new Qt(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!zc(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:r,download:n,dispose:a}=e[2];return Qt.fromGpuBuffer(r,{dataType:t,dims:e[1],download:n,dispose:a})}case"ml-tensor":{let t=e[0];if(!Ac(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:r,download:n,dispose:a}=e[2];return Qt.fromMLTensor(r,{dataType:t,dims:e[1],download:n,dispose:a})}default:throw new Error(`invalid data location: ${e[3]}`)}},q$=class{async fetchModelAndCopyToWasmMemory(e){return L$(await Oc(e))}async loadModel(e,t){lr();let r;typeof e=="string"?r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await U$(r,t),Zt()}async dispose(){return j$(this.sessionId)}async run(e,t,r){lr();let n=[],a=[];Object.entries(e).forEach(f=>{let m=f[0],_=f[1],w=this.inputNames.indexOf(m);if(w===-1)throw new Error(`invalid input '${m}'`);n.push(_),a.push(w)});let i=[],s=[];Object.entries(t).forEach(f=>{let m=f[0],_=f[1],w=this.outputNames.indexOf(m);if(w===-1)throw new Error(`invalid output '${m}'`);i.push(_),s.push(w)});let o=n.map((f,m)=>wu(f,()=>`input "${this.inputNames[a[m]]}"`)),u=i.map((f,m)=>f?wu(f,()=>`output "${this.outputNames[s[m]]}"`):null),d=await W$(this.sessionId,a,o,s,u,r),p={};for(let f=0;f<d.length;f++)p[this.outputNames[s[f]]]=i[f]??Z0(d[f]);return Zt(),p}startProfiling(){}endProfiling(){F$(this.sessionId)}}}),H$={};wi(H$,{OnnxruntimeWebAssemblyBackend:()=>Td,initializeFlags:()=>Ed,wasmBackend:()=>G$});var Ed,Td,G$,vS=V(()=>{Bt(),V$(),yS(),Ed=()=>{(typeof Se.wasm.initTimeout!="number"||Se.wasm.initTimeout<0)&&(Se.wasm.initTimeout=0);let e=Se.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),Se.wasm.simd=!1),typeof Se.wasm.proxy!="boolean"&&(Se.wasm.proxy=!1),typeof Se.wasm.trace!="boolean"&&(Se.wasm.trace=!1),typeof Se.wasm.numThreads!="number"||!Number.isInteger(Se.wasm.numThreads)||Se.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)Se.wasm.numThreads=1;else{let t=typeof navigator>"u"?nk("node:os").cpus().length:navigator.hardwareConcurrency;Se.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},Td=class{async init(e){Ed(),await P$(),await B$(e)}async createInferenceSessionHandler(e,t){let r=new q$;return await r.loadModel(e,t),r}},G$=new Td});Bt();Bt();Bt();var _S="1.23.2";{let e=(vS(),Sa(H$)).wasmBackend;Jn("webgpu",e,5),Jn("webnn",e,5),Jn("cpu",e,10),Jn("wasm",e,10)}Object.defineProperty(Se.versions,"web",{value:_S,enumerable:!0});/**
* @license
* Copyright 2021 Google LLC. All Rights Reserved.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
* =============================================================================
*//**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let vr=null;const K$=async()=>{if(vr)return vr;try{return vr=await Sc.create("/pneumonia_model.onnx"),vr}catch(e){throw console.error("Failed to load ONNX model:",e),new Error("Failed to load the pneumonia detection model. Please ensure pneumonia_model.onnx is in the public folder.")}},wS=async e=>{if(vr||await K$(),!vr)throw new Error("Model not loaded");const t=new Qt("float32",e,[1,3,224,224]),r={};r[vr.inputNames[0]]=t;const i=(await vr.run(r))[vr.outputNames[0]].data,s=i[1]>i[0]?1:0;s===1?i[1]:i[0];const u=$S(Array.from(i))[s];return{label:s===1?"Pneumonia":"Normal",confidence:u*100}},$S=e=>{const t=Math.max(...e),r=e.map(a=>Math.exp(a-t)),n=r.reduce((a,i)=>a+i,0);return r.map(a=>a/n)};function xS(){const[e,t]=ft.useState(null),[r,n]=ft.useState(null),[a,i]=ft.useState(!1),[s,o]=ft.useState(null),[u,d]=ft.useState(null),[p,f]=ft.useState(!1),m=async $=>{if(t($),n(URL.createObjectURL($)),o(null),d(null),!p)try{await K$(),f(!0)}catch(S){d(S instanceof Error?S.message:"Failed to load model");return}},_=()=>{r&&URL.revokeObjectURL(r),t(null),n(null),o(null),d(null)},w=async()=>{if(e){i(!0),d(null);try{const $=await J3(e),S=await wS($);o(S)}catch($){d($ instanceof Error?$.message:"Failed to analyze image"),console.error("Analysis error:",$)}finally{i(!1)}}};return ue.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50",children:ue.jsx("div",{className:"container mx-auto px-4 py-8",children:ue.jsxs("div",{className:"max-w-4xl mx-auto",children:[ue.jsxs("div",{className:"text-center mb-8",children:[ue.jsxs("div",{className:"flex items-center justify-center gap-3 mb-4",children:[ue.jsx(q3,{size:40,className:"text-blue-600"}),ue.jsx("h1",{className:"text-4xl font-bold text-gray-800",children:"Pneumonia Detection"})]}),ue.jsx("p",{className:"text-gray-600 text-lg",children:"Upload a chest X-ray image to detect pneumonia using AI"})]}),ue.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-8 mb-6",children:[ue.jsx(Y3,{onImageSelect:m,previewUrl:r,onClear:_}),r&&!s&&ue.jsx("div",{className:"mt-6",children:ue.jsx("button",{onClick:w,disabled:a,className:"w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2",children:a?ue.jsxs(ue.Fragment,{children:[ue.jsx(K3,{size:20,className:"animate-spin"}),"Analyzing..."]}):"Analyze X-ray"})}),u&&ue.jsx("div",{className:"mt-6 p-4 bg-red-50 border-2 border-red-200 rounded-lg",children:ue.jsx("p",{className:"text-red-700 font-medium",children:u})})]}),s&&ue.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-8",children:[ue.jsx("h2",{className:"text-2xl font-bold text-gray-800 mb-4",children:"Analysis Results"}),ue.jsx(Z3,{label:s.label,confidence:s.confidence}),ue.jsx("button",{onClick:_,className:"w-full mt-6 py-3 px-6 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors",children:"Analyze Another Image"})]}),ue.jsx("div",{className:"mt-8 bg-yellow-50 border-2 border-yellow-200 rounded-lg p-4",children:ue.jsxs("p",{className:"text-sm text-yellow-800 font-medium",children:[ue.jsx("strong",{children:"Important:"})," This tool is for educational purposes only. Always consult qualified healthcare professionals for medical diagnosis and treatment."]})})]})})})}cv(document.getElementById("root")).render(ue.jsx(ft.StrictMode,{children:ue.jsx(xS,{})}));
