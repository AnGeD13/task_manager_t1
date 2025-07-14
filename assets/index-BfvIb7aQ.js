(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const d of s)if(d.type==="childList")for(const g of d.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&c(g)}).observe(document,{childList:!0,subtree:!0});function u(s){const d={};return s.integrity&&(d.integrity=s.integrity),s.referrerPolicy&&(d.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?d.credentials="include":s.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function c(s){if(s.ep)return;s.ep=!0;const d=u(s);fetch(s.href,d)}})();function s1(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var As={exports:{}},hi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $0;function f1(){if($0)return hi;$0=1;var a=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function u(c,s,d){var g=null;if(d!==void 0&&(g=""+d),s.key!==void 0&&(g=""+s.key),"key"in s){d={};for(var b in s)b!=="key"&&(d[b]=s[b])}else d=s;return s=d.ref,{$$typeof:a,type:c,key:g,ref:s!==void 0?s:null,props:d}}return hi.Fragment=i,hi.jsx=u,hi.jsxs=u,hi}var _0;function d1(){return _0||(_0=1,As.exports=f1()),As.exports}var N=d1(),Cs={exports:{}},be={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N0;function h1(){if(N0)return be;N0=1;var a=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),g=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),E=Symbol.iterator;function x(S){return S===null||typeof S!="object"?null:(S=E&&S[E]||S["@@iterator"],typeof S=="function"?S:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$=Object.assign,j={};function R(S,B,X){this.props=S,this.context=B,this.refs=j,this.updater=X||w}R.prototype.isReactComponent={},R.prototype.setState=function(S,B){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,B,"setState")},R.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function M(){}M.prototype=R.prototype;function D(S,B,X){this.props=S,this.context=B,this.refs=j,this.updater=X||w}var L=D.prototype=new M;L.constructor=D,$(L,R.prototype),L.isPureReactComponent=!0;var te=Array.isArray,Z={H:null,A:null,T:null,S:null,V:null},J=Object.prototype.hasOwnProperty;function ae(S,B,X,P,I,ue){return X=ue.ref,{$$typeof:a,type:S,key:B,ref:X!==void 0?X:null,props:ue}}function se(S,B){return ae(S.type,B,void 0,void 0,void 0,S.props)}function ne(S){return typeof S=="object"&&S!==null&&S.$$typeof===a}function ge(S){var B={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(X){return B[X]})}var qe=/\/+/g;function Oe(S,B){return typeof S=="object"&&S!==null&&S.key!=null?ge(""+S.key):B.toString(36)}function Xe(){}function lt(S){switch(S.status){case"fulfilled":return S.value;case"rejected":throw S.reason;default:switch(typeof S.status=="string"?S.then(Xe,Xe):(S.status="pending",S.then(function(B){S.status==="pending"&&(S.status="fulfilled",S.value=B)},function(B){S.status==="pending"&&(S.status="rejected",S.reason=B)})),S.status){case"fulfilled":return S.value;case"rejected":throw S.reason}}throw S}function Me(S,B,X,P,I){var ue=typeof S;(ue==="undefined"||ue==="boolean")&&(S=null);var re=!1;if(S===null)re=!0;else switch(ue){case"bigint":case"string":case"number":re=!0;break;case"object":switch(S.$$typeof){case a:case i:re=!0;break;case y:return re=S._init,Me(re(S._payload),B,X,P,I)}}if(re)return I=I(S),re=P===""?"."+Oe(S,0):P,te(I)?(X="",re!=null&&(X=re.replace(qe,"$&/")+"/"),Me(I,B,X,"",function(Je){return Je})):I!=null&&(ne(I)&&(I=se(I,X+(I.key==null||S&&S.key===I.key?"":(""+I.key).replace(qe,"$&/")+"/")+re)),B.push(I)),1;re=0;var Ve=P===""?".":P+":";if(te(S))for(var ve=0;ve<S.length;ve++)P=S[ve],ue=Ve+Oe(P,ve),re+=Me(P,B,X,ue,I);else if(ve=x(S),typeof ve=="function")for(S=ve.call(S),ve=0;!(P=S.next()).done;)P=P.value,ue=Ve+Oe(P,ve++),re+=Me(P,B,X,ue,I);else if(ue==="object"){if(typeof S.then=="function")return Me(lt(S),B,X,P,I);throw B=String(S),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.")}return re}function U(S,B,X){if(S==null)return S;var P=[],I=0;return Me(S,P,"","",function(ue){return B.call(X,ue,I++)}),P}function K(S){if(S._status===-1){var B=S._result;B=B(),B.then(function(X){(S._status===0||S._status===-1)&&(S._status=1,S._result=X)},function(X){(S._status===0||S._status===-1)&&(S._status=2,S._result=X)}),S._status===-1&&(S._status=0,S._result=B)}if(S._status===1)return S._result.default;throw S._result}var ee=typeof reportError=="function"?reportError:function(S){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var B=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof S=="object"&&S!==null&&typeof S.message=="string"?String(S.message):String(S),error:S});if(!window.dispatchEvent(B))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",S);return}console.error(S)};function F(){}return be.Children={map:U,forEach:function(S,B,X){U(S,function(){B.apply(this,arguments)},X)},count:function(S){var B=0;return U(S,function(){B++}),B},toArray:function(S){return U(S,function(B){return B})||[]},only:function(S){if(!ne(S))throw Error("React.Children.only expected to receive a single React element child.");return S}},be.Component=R,be.Fragment=u,be.Profiler=s,be.PureComponent=D,be.StrictMode=c,be.Suspense=v,be.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Z,be.__COMPILER_RUNTIME={__proto__:null,c:function(S){return Z.H.useMemoCache(S)}},be.cache=function(S){return function(){return S.apply(null,arguments)}},be.cloneElement=function(S,B,X){if(S==null)throw Error("The argument must be a React element, but you passed "+S+".");var P=$({},S.props),I=S.key,ue=void 0;if(B!=null)for(re in B.ref!==void 0&&(ue=void 0),B.key!==void 0&&(I=""+B.key),B)!J.call(B,re)||re==="key"||re==="__self"||re==="__source"||re==="ref"&&B.ref===void 0||(P[re]=B[re]);var re=arguments.length-2;if(re===1)P.children=X;else if(1<re){for(var Ve=Array(re),ve=0;ve<re;ve++)Ve[ve]=arguments[ve+2];P.children=Ve}return ae(S.type,I,void 0,void 0,ue,P)},be.createContext=function(S){return S={$$typeof:g,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null},S.Provider=S,S.Consumer={$$typeof:d,_context:S},S},be.createElement=function(S,B,X){var P,I={},ue=null;if(B!=null)for(P in B.key!==void 0&&(ue=""+B.key),B)J.call(B,P)&&P!=="key"&&P!=="__self"&&P!=="__source"&&(I[P]=B[P]);var re=arguments.length-2;if(re===1)I.children=X;else if(1<re){for(var Ve=Array(re),ve=0;ve<re;ve++)Ve[ve]=arguments[ve+2];I.children=Ve}if(S&&S.defaultProps)for(P in re=S.defaultProps,re)I[P]===void 0&&(I[P]=re[P]);return ae(S,ue,void 0,void 0,null,I)},be.createRef=function(){return{current:null}},be.forwardRef=function(S){return{$$typeof:b,render:S}},be.isValidElement=ne,be.lazy=function(S){return{$$typeof:y,_payload:{_status:-1,_result:S},_init:K}},be.memo=function(S,B){return{$$typeof:m,type:S,compare:B===void 0?null:B}},be.startTransition=function(S){var B=Z.T,X={};Z.T=X;try{var P=S(),I=Z.S;I!==null&&I(X,P),typeof P=="object"&&P!==null&&typeof P.then=="function"&&P.then(F,ee)}catch(ue){ee(ue)}finally{Z.T=B}},be.unstable_useCacheRefresh=function(){return Z.H.useCacheRefresh()},be.use=function(S){return Z.H.use(S)},be.useActionState=function(S,B,X){return Z.H.useActionState(S,B,X)},be.useCallback=function(S,B){return Z.H.useCallback(S,B)},be.useContext=function(S){return Z.H.useContext(S)},be.useDebugValue=function(){},be.useDeferredValue=function(S,B){return Z.H.useDeferredValue(S,B)},be.useEffect=function(S,B,X){var P=Z.H;if(typeof X=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return P.useEffect(S,B)},be.useId=function(){return Z.H.useId()},be.useImperativeHandle=function(S,B,X){return Z.H.useImperativeHandle(S,B,X)},be.useInsertionEffect=function(S,B){return Z.H.useInsertionEffect(S,B)},be.useLayoutEffect=function(S,B){return Z.H.useLayoutEffect(S,B)},be.useMemo=function(S,B){return Z.H.useMemo(S,B)},be.useOptimistic=function(S,B){return Z.H.useOptimistic(S,B)},be.useReducer=function(S,B,X){return Z.H.useReducer(S,B,X)},be.useRef=function(S){return Z.H.useRef(S)},be.useState=function(S){return Z.H.useState(S)},be.useSyncExternalStore=function(S,B,X){return Z.H.useSyncExternalStore(S,B,X)},be.useTransition=function(){return Z.H.useTransition()},be.version="19.1.0",be}var w0;function $f(){return w0||(w0=1,Cs.exports=h1()),Cs.exports}var h=$f();const dn=s1(h);var Os={exports:{}},mi={},Ds={exports:{}},Bs={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T0;function m1(){return T0||(T0=1,function(a){function i(U,K){var ee=U.length;U.push(K);e:for(;0<ee;){var F=ee-1>>>1,S=U[F];if(0<s(S,K))U[F]=K,U[ee]=S,ee=F;else break e}}function u(U){return U.length===0?null:U[0]}function c(U){if(U.length===0)return null;var K=U[0],ee=U.pop();if(ee!==K){U[0]=ee;e:for(var F=0,S=U.length,B=S>>>1;F<B;){var X=2*(F+1)-1,P=U[X],I=X+1,ue=U[I];if(0>s(P,ee))I<S&&0>s(ue,P)?(U[F]=ue,U[I]=ee,F=I):(U[F]=P,U[X]=ee,F=X);else if(I<S&&0>s(ue,ee))U[F]=ue,U[I]=ee,F=I;else break e}}return K}function s(U,K){var ee=U.sortIndex-K.sortIndex;return ee!==0?ee:U.id-K.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;a.unstable_now=function(){return d.now()}}else{var g=Date,b=g.now();a.unstable_now=function(){return g.now()-b}}var v=[],m=[],y=1,E=null,x=3,w=!1,$=!1,j=!1,R=!1,M=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function te(U){for(var K=u(m);K!==null;){if(K.callback===null)c(m);else if(K.startTime<=U)c(m),K.sortIndex=K.expirationTime,i(v,K);else break;K=u(m)}}function Z(U){if(j=!1,te(U),!$)if(u(v)!==null)$=!0,J||(J=!0,Oe());else{var K=u(m);K!==null&&Me(Z,K.startTime-U)}}var J=!1,ae=-1,se=5,ne=-1;function ge(){return R?!0:!(a.unstable_now()-ne<se)}function qe(){if(R=!1,J){var U=a.unstable_now();ne=U;var K=!0;try{e:{$=!1,j&&(j=!1,D(ae),ae=-1),w=!0;var ee=x;try{t:{for(te(U),E=u(v);E!==null&&!(E.expirationTime>U&&ge());){var F=E.callback;if(typeof F=="function"){E.callback=null,x=E.priorityLevel;var S=F(E.expirationTime<=U);if(U=a.unstable_now(),typeof S=="function"){E.callback=S,te(U),K=!0;break t}E===u(v)&&c(v),te(U)}else c(v);E=u(v)}if(E!==null)K=!0;else{var B=u(m);B!==null&&Me(Z,B.startTime-U),K=!1}}break e}finally{E=null,x=ee,w=!1}K=void 0}}finally{K?Oe():J=!1}}}var Oe;if(typeof L=="function")Oe=function(){L(qe)};else if(typeof MessageChannel<"u"){var Xe=new MessageChannel,lt=Xe.port2;Xe.port1.onmessage=qe,Oe=function(){lt.postMessage(null)}}else Oe=function(){M(qe,0)};function Me(U,K){ae=M(function(){U(a.unstable_now())},K)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(U){U.callback=null},a.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):se=0<U?Math.floor(1e3/U):5},a.unstable_getCurrentPriorityLevel=function(){return x},a.unstable_next=function(U){switch(x){case 1:case 2:case 3:var K=3;break;default:K=x}var ee=x;x=K;try{return U()}finally{x=ee}},a.unstable_requestPaint=function(){R=!0},a.unstable_runWithPriority=function(U,K){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var ee=x;x=U;try{return K()}finally{x=ee}},a.unstable_scheduleCallback=function(U,K,ee){var F=a.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?F+ee:F):ee=F,U){case 1:var S=-1;break;case 2:S=250;break;case 5:S=1073741823;break;case 4:S=1e4;break;default:S=5e3}return S=ee+S,U={id:y++,callback:K,priorityLevel:U,startTime:ee,expirationTime:S,sortIndex:-1},ee>F?(U.sortIndex=ee,i(m,U),u(v)===null&&U===u(m)&&(j?(D(ae),ae=-1):j=!0,Me(Z,ee-F))):(U.sortIndex=S,i(v,U),$||w||($=!0,J||(J=!0,Oe()))),U},a.unstable_shouldYield=ge,a.unstable_wrapCallback=function(U){var K=x;return function(){var ee=x;x=K;try{return U.apply(this,arguments)}finally{x=ee}}}}(Bs)),Bs}var M0;function p1(){return M0||(M0=1,Ds.exports=m1()),Ds.exports}var Rs={exports:{}},Dt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A0;function g1(){if(A0)return Dt;A0=1;var a=$f();function i(v){var m="https://react.dev/errors/"+v;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)m+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+v+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var c={d:{f:u,r:function(){throw Error(i(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},s=Symbol.for("react.portal");function d(v,m,y){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:E==null?null:""+E,children:v,containerInfo:m,implementation:y}}var g=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function b(v,m){if(v==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Dt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,Dt.createPortal=function(v,m){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(i(299));return d(v,m,null,y)},Dt.flushSync=function(v){var m=g.T,y=c.p;try{if(g.T=null,c.p=2,v)return v()}finally{g.T=m,c.p=y,c.d.f()}},Dt.preconnect=function(v,m){typeof v=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,c.d.C(v,m))},Dt.prefetchDNS=function(v){typeof v=="string"&&c.d.D(v)},Dt.preinit=function(v,m){if(typeof v=="string"&&m&&typeof m.as=="string"){var y=m.as,E=b(y,m.crossOrigin),x=typeof m.integrity=="string"?m.integrity:void 0,w=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;y==="style"?c.d.S(v,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:E,integrity:x,fetchPriority:w}):y==="script"&&c.d.X(v,{crossOrigin:E,integrity:x,fetchPriority:w,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Dt.preinitModule=function(v,m){if(typeof v=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var y=b(m.as,m.crossOrigin);c.d.M(v,{crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&c.d.M(v)},Dt.preload=function(v,m){if(typeof v=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var y=m.as,E=b(y,m.crossOrigin);c.d.L(v,y,{crossOrigin:E,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Dt.preloadModule=function(v,m){if(typeof v=="string")if(m){var y=b(m.as,m.crossOrigin);c.d.m(v,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else c.d.m(v)},Dt.requestFormReset=function(v){c.d.r(v)},Dt.unstable_batchedUpdates=function(v,m){return v(m)},Dt.useFormState=function(v,m,y){return g.H.useFormState(v,m,y)},Dt.useFormStatus=function(){return g.H.useHostTransitionStatus()},Dt.version="19.1.0",Dt}var C0;function Rp(){if(C0)return Rs.exports;C0=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(i){console.error(i)}}return a(),Rs.exports=g1(),Rs.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O0;function v1(){if(O0)return mi;O0=1;var a=p1(),i=$f(),u=Rp();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)t+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var t=e,l=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(l=t.return),e=t.return;while(e)}return t.tag===3?l:null}function g(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function b(e){if(d(e)!==e)throw Error(c(188))}function v(e){var t=e.alternate;if(!t){if(t=d(e),t===null)throw Error(c(188));return t!==e?null:e}for(var l=e,n=t;;){var r=l.return;if(r===null)break;var o=r.alternate;if(o===null){if(n=r.return,n!==null){l=n;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===l)return b(r),e;if(o===n)return b(r),t;o=o.sibling}throw Error(c(188))}if(l.return!==n.return)l=r,n=o;else{for(var f=!1,p=r.child;p;){if(p===l){f=!0,l=r,n=o;break}if(p===n){f=!0,n=r,l=o;break}p=p.sibling}if(!f){for(p=o.child;p;){if(p===l){f=!0,l=o,n=r;break}if(p===n){f=!0,n=o,l=r;break}p=p.sibling}if(!f)throw Error(c(189))}}if(l.alternate!==n)throw Error(c(190))}if(l.tag!==3)throw Error(c(188));return l.stateNode.current===l?e:t}function m(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=m(e),t!==null)return t;e=e.sibling}return null}var y=Object.assign,E=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),w=Symbol.for("react.portal"),$=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),M=Symbol.for("react.provider"),D=Symbol.for("react.consumer"),L=Symbol.for("react.context"),te=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),J=Symbol.for("react.suspense_list"),ae=Symbol.for("react.memo"),se=Symbol.for("react.lazy"),ne=Symbol.for("react.activity"),ge=Symbol.for("react.memo_cache_sentinel"),qe=Symbol.iterator;function Oe(e){return e===null||typeof e!="object"?null:(e=qe&&e[qe]||e["@@iterator"],typeof e=="function"?e:null)}var Xe=Symbol.for("react.client.reference");function lt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Xe?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case $:return"Fragment";case R:return"Profiler";case j:return"StrictMode";case Z:return"Suspense";case J:return"SuspenseList";case ne:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case w:return"Portal";case L:return(e.displayName||"Context")+".Provider";case D:return(e._context.displayName||"Context")+".Consumer";case te:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ae:return t=e.displayName||null,t!==null?t:lt(e.type)||"Memo";case se:t=e._payload,e=e._init;try{return lt(e(t))}catch{}}return null}var Me=Array.isArray,U=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee={pending:!1,data:null,method:null,action:null},F=[],S=-1;function B(e){return{current:e}}function X(e){0>S||(e.current=F[S],F[S]=null,S--)}function P(e,t){S++,F[S]=e.current,e.current=t}var I=B(null),ue=B(null),re=B(null),Ve=B(null);function ve(e,t){switch(P(re,t),P(ue,e),P(I,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Wm(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Wm(t),e=Jm(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}X(I),P(I,e)}function Je(){X(I),X(ue),X(re)}function Mt(e){e.memoizedState!==null&&P(Ve,e);var t=I.current,l=Jm(t,e.type);t!==l&&(P(ue,e),P(I,l))}function Pe(e){ue.current===e&&(X(I),X(ue)),Ve.current===e&&(X(Ve),ui._currentValue=ee)}var Be=Object.prototype.hasOwnProperty,Rt=a.unstable_scheduleCallback,Ma=a.unstable_cancelCallback,Va=a.unstable_shouldYield,$t=a.unstable_requestPaint,Qe=a.unstable_now,Lt=a.unstable_getCurrentPriorityLevel,zt=a.unstable_ImmediatePriority,mt=a.unstable_UserBlockingPriority,ea=a.unstable_NormalPriority,kl=a.unstable_LowPriority,vn=a.unstable_IdlePriority,Fe=a.log,ql=a.unstable_setDisableYieldValue,Aa=null,yt=null;function Ke(e){if(typeof Fe=="function"&&ql(e),yt&&typeof yt.setStrictMode=="function")try{yt.setStrictMode(Aa,e)}catch{}}var ut=Math.clz32?Math.clz32:me,ie=Math.log,pe=Math.LN2;function me(e){return e>>>=0,e===0?32:31-(ie(e)/pe|0)|0}var je=256,Ie=4194304;function Re(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Vt(e,t,l){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,f=e.pingedLanes;e=e.warmLanes;var p=n&134217727;return p!==0?(n=p&~o,n!==0?r=Re(n):(f&=p,f!==0?r=Re(f):l||(l=p&~e,l!==0&&(r=Re(l))))):(p=n&~o,p!==0?r=Re(p):f!==0?r=Re(f):l||(l=n&~e,l!==0&&(r=Re(l)))),r===0?0:t!==0&&t!==r&&(t&o)===0&&(o=r&-r,l=t&-t,o>=l||o===32&&(l&4194048)!==0)?t:r}function we(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Pt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gt(){var e=je;return je<<=1,(je&4194048)===0&&(je=256),e}function ta(){var e=Ie;return Ie<<=1,(Ie&62914560)===0&&(Ie=4194304),e}function aa(e){for(var t=[],l=0;31>l;l++)t.push(e);return t}function Ca(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function pr(e,t,l,n,r,o){var f=e.pendingLanes;e.pendingLanes=l,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=l,e.entangledLanes&=l,e.errorRecoveryDisabledLanes&=l,e.shellSuspendCounter=0;var p=e.entanglements,_=e.expirationTimes,O=e.hiddenUpdates;for(l=f&~l;0<l;){var k=31-ut(l),V=1<<k;p[k]=0,_[k]=-1;var z=O[k];if(z!==null)for(O[k]=null,k=0;k<z.length;k++){var H=z[k];H!==null&&(H.lane&=-536870913)}l&=~V}n!==0&&la(e,n,0),o!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=o&~(f&~t))}function la(e,t,l){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-ut(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|l&4194090}function Di(e,t){var l=e.entangledLanes|=t;for(e=e.entanglements;l;){var n=31-ut(l),r=1<<n;r&t|e[n]&t&&(e[n]|=t),l&=~r}}function yn(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Oa(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Yl(){var e=K.p;return e!==0?e:(e=window.event,e===void 0?32:v0(e.type))}function ya(e,t){var l=K.p;try{return K.p=e,t()}finally{K.p=l}}var Da=Math.random().toString(36).slice(2),et="__reactFiber$"+Da,At="__reactProps$"+Da,ba="__reactContainer$"+Da,bn="__reactEvents$"+Da,gr="__reactListeners$"+Da,na="__reactHandles$"+Da,Pa="__reactResources$"+Da,Ct="__reactMarker$"+Da;function vr(e){delete e[et],delete e[At],delete e[bn],delete e[gr],delete e[na]}function Ga(e){var t=e[et];if(t)return t;for(var l=e.parentNode;l;){if(t=l[ba]||l[et]){if(l=t.alternate,t.child!==null||l!==null&&l.child!==null)for(e=a0(e);e!==null;){if(l=e[et])return l;e=a0(e)}return t}e=l,l=e.parentNode}return null}function ra(e){if(e=e[et]||e[ba]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Xa(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function dl(e){var t=e[Pa];return t||(t=e[Pa]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function ct(e){e[Ct]=!0}var Bi=new Set,Ri={};function xa(e,t){ia(e,t),ia(e+"Capture",t)}function ia(e,t){for(Ri[e]=t,e=0;e<t.length;e++)Bi.add(t[e])}var _u=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),zi={},yr={};function Nu(e){return Be.call(yr,e)?!0:Be.call(zi,e)?!1:_u.test(e)?yr[e]=!0:(zi[e]=!0,!1)}function hl(e,t,l){if(Nu(t))if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+l)}}function xn(e,t,l){if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+l)}}function Sa(e,t,l,n){if(n===null)e.removeAttribute(l);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(l);return}e.setAttributeNS(t,l,""+n)}}var br,ml;function Ea(e){if(br===void 0)try{throw Error()}catch(l){var t=l.stack.trim().match(/\n( *(at )?)/);br=t&&t[1]||"",ml=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+br+e+ml}var xr=!1;function Sn(e,t){if(!e||xr)return"";xr=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var V=function(){throw Error()};if(Object.defineProperty(V.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(V,[])}catch(H){var z=H}Reflect.construct(e,[],V)}else{try{V.call()}catch(H){z=H}e.call(V.prototype)}}else{try{throw Error()}catch(H){z=H}(V=e())&&typeof V.catch=="function"&&V.catch(function(){})}}catch(H){if(H&&z&&typeof H.stack=="string")return[H.stack,z.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=n.DetermineComponentFrameRoot(),f=o[0],p=o[1];if(f&&p){var _=f.split(`
`),O=p.split(`
`);for(r=n=0;n<_.length&&!_[n].includes("DetermineComponentFrameRoot");)n++;for(;r<O.length&&!O[r].includes("DetermineComponentFrameRoot");)r++;if(n===_.length||r===O.length)for(n=_.length-1,r=O.length-1;1<=n&&0<=r&&_[n]!==O[r];)r--;for(;1<=n&&0<=r;n--,r--)if(_[n]!==O[r]){if(n!==1||r!==1)do if(n--,r--,0>r||_[n]!==O[r]){var k=`
`+_[n].replace(" at new "," at ");return e.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",e.displayName)),k}while(1<=n&&0<=r);break}}}finally{xr=!1,Error.prepareStackTrace=l}return(l=e?e.displayName||e.name:"")?Ea(l):""}function wu(e){switch(e.tag){case 26:case 27:case 5:return Ea(e.type);case 16:return Ea("Lazy");case 13:return Ea("Suspense");case 19:return Ea("SuspenseList");case 0:case 15:return Sn(e.type,!1);case 11:return Sn(e.type.render,!1);case 1:return Sn(e.type,!0);case 31:return Ea("Activity");default:return""}}function Hi(e){try{var t="";do t+=wu(e),e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}function _t(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ji(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Tu(e){var t=ji(e)?"checked":"value",l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var r=l.get,o=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(f){n=""+f,o.call(this,f)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return n},setValue:function(f){n=""+f},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function En(e){e._valueTracker||(e._valueTracker=Tu(e))}function Li(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var l=t.getValue(),n="";return e&&(n=ji(e)?e.checked?"true":"false":e.value),e=n,e!==l?(t.setValue(e),!0):!1}function Vl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ui=/[\n"\\]/g;function W(e){return e.replace(Ui,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function ce(e,t,l,n,r,o,f,p){e.name="",f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.type=f:e.removeAttribute("type"),t!=null?f==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+_t(t)):e.value!==""+_t(t)&&(e.value=""+_t(t)):f!=="submit"&&f!=="reset"||e.removeAttribute("value"),t!=null?st(e,f,_t(t)):l!=null?st(e,f,_t(l)):n!=null&&e.removeAttribute("value"),r==null&&o!=null&&(e.defaultChecked=!!o),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.name=""+_t(p):e.removeAttribute("name")}function ye(e,t,l,n,r,o,f,p){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.type=o),t!=null||l!=null){if(!(o!=="submit"&&o!=="reset"||t!=null))return;l=l!=null?""+_t(l):"",t=t!=null?""+_t(t):l,p||t===e.value||(e.value=t),e.defaultValue=t}n=n??r,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=p?e.checked:!!n,e.defaultChecked=!!n,f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.name=f)}function st(e,t,l){t==="number"&&Vl(e.ownerDocument)===e||e.defaultValue===""+l||(e.defaultValue=""+l)}function pt(e,t,l,n){if(e=e.options,t){t={};for(var r=0;r<l.length;r++)t["$"+l[r]]=!0;for(l=0;l<e.length;l++)r=t.hasOwnProperty("$"+e[l].value),e[l].selected!==r&&(e[l].selected=r),r&&n&&(e[l].defaultSelected=!0)}else{for(l=""+_t(l),t=null,r=0;r<e.length;r++){if(e[r].value===l){e[r].selected=!0,n&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function oa(e,t,l){if(t!=null&&(t=""+_t(t),t!==e.value&&(e.value=t),l==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=l!=null?""+_t(l):""}function $a(e,t,l,n){if(t==null){if(n!=null){if(l!=null)throw Error(c(92));if(Me(n)){if(1<n.length)throw Error(c(93));n=n[0]}l=n}l==null&&(l=""),t=l}l=_t(t),e.defaultValue=l,n=e.textContent,n===l&&n!==""&&n!==null&&(e.value=n)}function Qa(e,t){if(t){var l=e.firstChild;if(l&&l===e.lastChild&&l.nodeType===3){l.nodeValue=t;return}}e.textContent=t}var ki=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function $n(e,t,l){var n=t.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,l):typeof l!="number"||l===0||ki.has(t)?t==="float"?e.cssFloat=l:e[t]=(""+l).trim():e[t]=l+"px"}function Jf(e,t,l){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,l!=null){for(var n in l)!l.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var r in t)n=t[r],t.hasOwnProperty(r)&&l[r]!==n&&$n(e,r,n)}else for(var o in t)t.hasOwnProperty(o)&&$n(e,o,t[o])}function Mu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var uv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),cv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function qi(e){return cv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Au=null;function Cu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var _n=null,Nn=null;function If(e){var t=ra(e);if(t&&(e=t.stateNode)){var l=e[At]||null;e:switch(e=t.stateNode,t.type){case"input":if(ce(e,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),t=l.name,l.type==="radio"&&t!=null){for(l=e;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+W(""+t)+'"][type="radio"]'),t=0;t<l.length;t++){var n=l[t];if(n!==e&&n.form===e.form){var r=n[At]||null;if(!r)throw Error(c(90));ce(n,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(t=0;t<l.length;t++)n=l[t],n.form===e.form&&Li(n)}break e;case"textarea":oa(e,l.value,l.defaultValue);break e;case"select":t=l.value,t!=null&&pt(e,!!l.multiple,t,!1)}}}var Ou=!1;function ed(e,t,l){if(Ou)return e(t,l);Ou=!0;try{var n=e(t);return n}finally{if(Ou=!1,(_n!==null||Nn!==null)&&(To(),_n&&(t=_n,e=Nn,Nn=_n=null,If(t),e)))for(t=0;t<e.length;t++)If(e[t])}}function Sr(e,t){var l=e.stateNode;if(l===null)return null;var n=l[At]||null;if(n===null)return null;l=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(l&&typeof l!="function")throw Error(c(231,t,typeof l));return l}var Za=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Du=!1;if(Za)try{var Er={};Object.defineProperty(Er,"passive",{get:function(){Du=!0}}),window.addEventListener("test",Er,Er),window.removeEventListener("test",Er,Er)}catch{Du=!1}var pl=null,Bu=null,Yi=null;function td(){if(Yi)return Yi;var e,t=Bu,l=t.length,n,r="value"in pl?pl.value:pl.textContent,o=r.length;for(e=0;e<l&&t[e]===r[e];e++);var f=l-e;for(n=1;n<=f&&t[l-n]===r[o-n];n++);return Yi=r.slice(e,1<n?1-n:void 0)}function Vi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Pi(){return!0}function ad(){return!1}function Ut(e){function t(l,n,r,o,f){this._reactName=l,this._targetInst=r,this.type=n,this.nativeEvent=o,this.target=f,this.currentTarget=null;for(var p in e)e.hasOwnProperty(p)&&(l=e[p],this[p]=l?l(o):o[p]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Pi:ad,this.isPropagationStopped=ad,this}return y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Pi)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Pi)},persist:function(){},isPersistent:Pi}),t}var Pl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gi=Ut(Pl),$r=y({},Pl,{view:0,detail:0}),sv=Ut($r),Ru,zu,_r,Xi=y({},$r,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ju,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==_r&&(_r&&e.type==="mousemove"?(Ru=e.screenX-_r.screenX,zu=e.screenY-_r.screenY):zu=Ru=0,_r=e),Ru)},movementY:function(e){return"movementY"in e?e.movementY:zu}}),ld=Ut(Xi),fv=y({},Xi,{dataTransfer:0}),dv=Ut(fv),hv=y({},$r,{relatedTarget:0}),Hu=Ut(hv),mv=y({},Pl,{animationName:0,elapsedTime:0,pseudoElement:0}),pv=Ut(mv),gv=y({},Pl,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vv=Ut(gv),yv=y({},Pl,{data:0}),nd=Ut(yv),bv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ev(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Sv[e])?!!t[e]:!1}function ju(){return Ev}var $v=y({},$r,{key:function(e){if(e.key){var t=bv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Vi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?xv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ju,charCode:function(e){return e.type==="keypress"?Vi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Vi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),_v=Ut($v),Nv=y({},Xi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rd=Ut(Nv),wv=y({},$r,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ju}),Tv=Ut(wv),Mv=y({},Pl,{propertyName:0,elapsedTime:0,pseudoElement:0}),Av=Ut(Mv),Cv=y({},Xi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ov=Ut(Cv),Dv=y({},Pl,{newState:0,oldState:0}),Bv=Ut(Dv),Rv=[9,13,27,32],Lu=Za&&"CompositionEvent"in window,Nr=null;Za&&"documentMode"in document&&(Nr=document.documentMode);var zv=Za&&"TextEvent"in window&&!Nr,id=Za&&(!Lu||Nr&&8<Nr&&11>=Nr),od=" ",ud=!1;function cd(e,t){switch(e){case"keyup":return Rv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var wn=!1;function Hv(e,t){switch(e){case"compositionend":return sd(t);case"keypress":return t.which!==32?null:(ud=!0,od);case"textInput":return e=t.data,e===od&&ud?null:e;default:return null}}function jv(e,t){if(wn)return e==="compositionend"||!Lu&&cd(e,t)?(e=td(),Yi=Bu=pl=null,wn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return id&&t.locale!=="ko"?null:t.data;default:return null}}var Lv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Lv[e.type]:t==="textarea"}function dd(e,t,l,n){_n?Nn?Nn.push(n):Nn=[n]:_n=n,t=Bo(t,"onChange"),0<t.length&&(l=new Gi("onChange","change",null,l,n),e.push({event:l,listeners:t}))}var wr=null,Tr=null;function Uv(e){Xm(e,0)}function Qi(e){var t=Xa(e);if(Li(t))return e}function hd(e,t){if(e==="change")return t}var md=!1;if(Za){var Uu;if(Za){var ku="oninput"in document;if(!ku){var pd=document.createElement("div");pd.setAttribute("oninput","return;"),ku=typeof pd.oninput=="function"}Uu=ku}else Uu=!1;md=Uu&&(!document.documentMode||9<document.documentMode)}function gd(){wr&&(wr.detachEvent("onpropertychange",vd),Tr=wr=null)}function vd(e){if(e.propertyName==="value"&&Qi(Tr)){var t=[];dd(t,Tr,e,Cu(e)),ed(Uv,t)}}function kv(e,t,l){e==="focusin"?(gd(),wr=t,Tr=l,wr.attachEvent("onpropertychange",vd)):e==="focusout"&&gd()}function qv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Qi(Tr)}function Yv(e,t){if(e==="click")return Qi(t)}function Vv(e,t){if(e==="input"||e==="change")return Qi(t)}function Pv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Xt=typeof Object.is=="function"?Object.is:Pv;function Mr(e,t){if(Xt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var l=Object.keys(e),n=Object.keys(t);if(l.length!==n.length)return!1;for(n=0;n<l.length;n++){var r=l[n];if(!Be.call(t,r)||!Xt(e[r],t[r]))return!1}return!0}function yd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function bd(e,t){var l=yd(e);e=0;for(var n;l;){if(l.nodeType===3){if(n=e+l.textContent.length,e<=t&&n>=t)return{node:l,offset:t-e};e=n}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=yd(l)}}function xd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?xd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Sd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Vl(e.document);t instanceof e.HTMLIFrameElement;){try{var l=typeof t.contentWindow.location.href=="string"}catch{l=!1}if(l)e=t.contentWindow;else break;t=Vl(e.document)}return t}function qu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Gv=Za&&"documentMode"in document&&11>=document.documentMode,Tn=null,Yu=null,Ar=null,Vu=!1;function Ed(e,t,l){var n=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Vu||Tn==null||Tn!==Vl(n)||(n=Tn,"selectionStart"in n&&qu(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Ar&&Mr(Ar,n)||(Ar=n,n=Bo(Yu,"onSelect"),0<n.length&&(t=new Gi("onSelect","select",null,t,l),e.push({event:t,listeners:n}),t.target=Tn)))}function Gl(e,t){var l={};return l[e.toLowerCase()]=t.toLowerCase(),l["Webkit"+e]="webkit"+t,l["Moz"+e]="moz"+t,l}var Mn={animationend:Gl("Animation","AnimationEnd"),animationiteration:Gl("Animation","AnimationIteration"),animationstart:Gl("Animation","AnimationStart"),transitionrun:Gl("Transition","TransitionRun"),transitionstart:Gl("Transition","TransitionStart"),transitioncancel:Gl("Transition","TransitionCancel"),transitionend:Gl("Transition","TransitionEnd")},Pu={},$d={};Za&&($d=document.createElement("div").style,"AnimationEvent"in window||(delete Mn.animationend.animation,delete Mn.animationiteration.animation,delete Mn.animationstart.animation),"TransitionEvent"in window||delete Mn.transitionend.transition);function Xl(e){if(Pu[e])return Pu[e];if(!Mn[e])return e;var t=Mn[e],l;for(l in t)if(t.hasOwnProperty(l)&&l in $d)return Pu[e]=t[l];return e}var _d=Xl("animationend"),Nd=Xl("animationiteration"),wd=Xl("animationstart"),Xv=Xl("transitionrun"),Qv=Xl("transitionstart"),Zv=Xl("transitioncancel"),Td=Xl("transitionend"),Md=new Map,Gu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Gu.push("scrollEnd");function _a(e,t){Md.set(e,t),xa(t,[e])}var Ad=new WeakMap;function ua(e,t){if(typeof e=="object"&&e!==null){var l=Ad.get(e);return l!==void 0?l:(t={value:e,source:t,stack:Hi(t)},Ad.set(e,t),t)}return{value:e,source:t,stack:Hi(t)}}var ca=[],An=0,Xu=0;function Zi(){for(var e=An,t=Xu=An=0;t<e;){var l=ca[t];ca[t++]=null;var n=ca[t];ca[t++]=null;var r=ca[t];ca[t++]=null;var o=ca[t];if(ca[t++]=null,n!==null&&r!==null){var f=n.pending;f===null?r.next=r:(r.next=f.next,f.next=r),n.pending=r}o!==0&&Cd(l,r,o)}}function Fi(e,t,l,n){ca[An++]=e,ca[An++]=t,ca[An++]=l,ca[An++]=n,Xu|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function Qu(e,t,l,n){return Fi(e,t,l,n),Ki(e)}function Cn(e,t){return Fi(e,null,null,t),Ki(e)}function Cd(e,t,l){e.lanes|=l;var n=e.alternate;n!==null&&(n.lanes|=l);for(var r=!1,o=e.return;o!==null;)o.childLanes|=l,n=o.alternate,n!==null&&(n.childLanes|=l),o.tag===22&&(e=o.stateNode,e===null||e._visibility&1||(r=!0)),e=o,o=o.return;return e.tag===3?(o=e.stateNode,r&&t!==null&&(r=31-ut(l),e=o.hiddenUpdates,n=e[r],n===null?e[r]=[t]:n.push(t),t.lane=l|536870912),o):null}function Ki(e){if(50<ei)throw ei=0,Ic=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var On={};function Fv(e,t,l,n){this.tag=e,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qt(e,t,l,n){return new Fv(e,t,l,n)}function Zu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Fa(e,t){var l=e.alternate;return l===null?(l=Qt(e.tag,t,e.key,e.mode),l.elementType=e.elementType,l.type=e.type,l.stateNode=e.stateNode,l.alternate=e,e.alternate=l):(l.pendingProps=t,l.type=e.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=e.flags&65011712,l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,t=e.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},l.sibling=e.sibling,l.index=e.index,l.ref=e.ref,l.refCleanup=e.refCleanup,l}function Od(e,t){e.flags&=65011714;var l=e.alternate;return l===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=l.childLanes,e.lanes=l.lanes,e.child=l.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=l.memoizedProps,e.memoizedState=l.memoizedState,e.updateQueue=l.updateQueue,e.type=l.type,t=l.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Wi(e,t,l,n,r,o){var f=0;if(n=e,typeof e=="function")Zu(e)&&(f=1);else if(typeof e=="string")f=Wy(e,l,I.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ne:return e=Qt(31,l,t,r),e.elementType=ne,e.lanes=o,e;case $:return Ql(l.children,r,o,t);case j:f=8,r|=24;break;case R:return e=Qt(12,l,t,r|2),e.elementType=R,e.lanes=o,e;case Z:return e=Qt(13,l,t,r),e.elementType=Z,e.lanes=o,e;case J:return e=Qt(19,l,t,r),e.elementType=J,e.lanes=o,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case M:case L:f=10;break e;case D:f=9;break e;case te:f=11;break e;case ae:f=14;break e;case se:f=16,n=null;break e}f=29,l=Error(c(130,e===null?"null":typeof e,"")),n=null}return t=Qt(f,l,t,r),t.elementType=e,t.type=n,t.lanes=o,t}function Ql(e,t,l,n){return e=Qt(7,e,n,t),e.lanes=l,e}function Fu(e,t,l){return e=Qt(6,e,null,t),e.lanes=l,e}function Ku(e,t,l){return t=Qt(4,e.children!==null?e.children:[],e.key,t),t.lanes=l,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Dn=[],Bn=0,Ji=null,Ii=0,sa=[],fa=0,Zl=null,Ka=1,Wa="";function Fl(e,t){Dn[Bn++]=Ii,Dn[Bn++]=Ji,Ji=e,Ii=t}function Dd(e,t,l){sa[fa++]=Ka,sa[fa++]=Wa,sa[fa++]=Zl,Zl=e;var n=Ka;e=Wa;var r=32-ut(n)-1;n&=~(1<<r),l+=1;var o=32-ut(t)+r;if(30<o){var f=r-r%5;o=(n&(1<<f)-1).toString(32),n>>=f,r-=f,Ka=1<<32-ut(t)+r|l<<r|n,Wa=o+e}else Ka=1<<o|l<<r|n,Wa=e}function Wu(e){e.return!==null&&(Fl(e,1),Dd(e,1,0))}function Ju(e){for(;e===Ji;)Ji=Dn[--Bn],Dn[Bn]=null,Ii=Dn[--Bn],Dn[Bn]=null;for(;e===Zl;)Zl=sa[--fa],sa[fa]=null,Wa=sa[--fa],sa[fa]=null,Ka=sa[--fa],sa[fa]=null}var Ht=null,nt=null,Ce=!1,Kl=null,Ba=!1,Iu=Error(c(519));function Wl(e){var t=Error(c(418,""));throw Dr(ua(t,e)),Iu}function Bd(e){var t=e.stateNode,l=e.type,n=e.memoizedProps;switch(t[et]=e,t[At]=n,l){case"dialog":_e("cancel",t),_e("close",t);break;case"iframe":case"object":case"embed":_e("load",t);break;case"video":case"audio":for(l=0;l<ai.length;l++)_e(ai[l],t);break;case"source":_e("error",t);break;case"img":case"image":case"link":_e("error",t),_e("load",t);break;case"details":_e("toggle",t);break;case"input":_e("invalid",t),ye(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0),En(t);break;case"select":_e("invalid",t);break;case"textarea":_e("invalid",t),$a(t,n.value,n.defaultValue,n.children),En(t)}l=n.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||t.textContent===""+l||n.suppressHydrationWarning===!0||Km(t.textContent,l)?(n.popover!=null&&(_e("beforetoggle",t),_e("toggle",t)),n.onScroll!=null&&_e("scroll",t),n.onScrollEnd!=null&&_e("scrollend",t),n.onClick!=null&&(t.onclick=Ro),t=!0):t=!1,t||Wl(e)}function Rd(e){for(Ht=e.return;Ht;)switch(Ht.tag){case 5:case 13:Ba=!1;return;case 27:case 3:Ba=!0;return;default:Ht=Ht.return}}function Cr(e){if(e!==Ht)return!1;if(!Ce)return Rd(e),Ce=!0,!1;var t=e.tag,l;if((l=t!==3&&t!==27)&&((l=t===5)&&(l=e.type,l=!(l!=="form"&&l!=="button")||ps(e.type,e.memoizedProps)),l=!l),l&&nt&&Wl(e),Rd(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(l=e.data,l==="/$"){if(t===0){nt=wa(e.nextSibling);break e}t--}else l!=="$"&&l!=="$!"&&l!=="$?"||t++;e=e.nextSibling}nt=null}}else t===27?(t=nt,Ol(e.type)?(e=bs,bs=null,nt=e):nt=t):nt=Ht?wa(e.stateNode.nextSibling):null;return!0}function Or(){nt=Ht=null,Ce=!1}function zd(){var e=Kl;return e!==null&&(Yt===null?Yt=e:Yt.push.apply(Yt,e),Kl=null),e}function Dr(e){Kl===null?Kl=[e]:Kl.push(e)}var ec=B(null),Jl=null,Ja=null;function gl(e,t,l){P(ec,t._currentValue),t._currentValue=l}function Ia(e){e._currentValue=ec.current,X(ec)}function tc(e,t,l){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===l)break;e=e.return}}function ac(e,t,l,n){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var o=r.dependencies;if(o!==null){var f=r.child;o=o.firstContext;e:for(;o!==null;){var p=o;o=r;for(var _=0;_<t.length;_++)if(p.context===t[_]){o.lanes|=l,p=o.alternate,p!==null&&(p.lanes|=l),tc(o.return,l,e),n||(f=null);break e}o=p.next}}else if(r.tag===18){if(f=r.return,f===null)throw Error(c(341));f.lanes|=l,o=f.alternate,o!==null&&(o.lanes|=l),tc(f,l,e),f=null}else f=r.child;if(f!==null)f.return=r;else for(f=r;f!==null;){if(f===e){f=null;break}if(r=f.sibling,r!==null){r.return=f.return,f=r;break}f=f.return}r=f}}function Br(e,t,l,n){e=null;for(var r=t,o=!1;r!==null;){if(!o){if((r.flags&524288)!==0)o=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var f=r.alternate;if(f===null)throw Error(c(387));if(f=f.memoizedProps,f!==null){var p=r.type;Xt(r.pendingProps.value,f.value)||(e!==null?e.push(p):e=[p])}}else if(r===Ve.current){if(f=r.alternate,f===null)throw Error(c(387));f.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(ui):e=[ui])}r=r.return}e!==null&&ac(t,e,l,n),t.flags|=262144}function eo(e){for(e=e.firstContext;e!==null;){if(!Xt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Il(e){Jl=e,Ja=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ot(e){return Hd(Jl,e)}function to(e,t){return Jl===null&&Il(e),Hd(e,t)}function Hd(e,t){var l=t._currentValue;if(t={context:t,memoizedValue:l,next:null},Ja===null){if(e===null)throw Error(c(308));Ja=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ja=Ja.next=t;return l}var Kv=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(l,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(l){return l()})}},Wv=a.unstable_scheduleCallback,Jv=a.unstable_NormalPriority,gt={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function lc(){return{controller:new Kv,data:new Map,refCount:0}}function Rr(e){e.refCount--,e.refCount===0&&Wv(Jv,function(){e.controller.abort()})}var zr=null,nc=0,Rn=0,zn=null;function Iv(e,t){if(zr===null){var l=zr=[];nc=0,Rn=is(),zn={status:"pending",value:void 0,then:function(n){l.push(n)}}}return nc++,t.then(jd,jd),t}function jd(){if(--nc===0&&zr!==null){zn!==null&&(zn.status="fulfilled");var e=zr;zr=null,Rn=0,zn=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function ey(e,t){var l=[],n={status:"pending",value:null,reason:null,then:function(r){l.push(r)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var r=0;r<l.length;r++)(0,l[r])(t)},function(r){for(n.status="rejected",n.reason=r,r=0;r<l.length;r++)(0,l[r])(void 0)}),n}var Ld=U.S;U.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&Iv(e,t),Ld!==null&&Ld(e,t)};var en=B(null);function rc(){var e=en.current;return e!==null?e:Ge.pooledCache}function ao(e,t){t===null?P(en,en.current):P(en,t.pool)}function Ud(){var e=rc();return e===null?null:{parent:gt._currentValue,pool:e}}var Hr=Error(c(460)),kd=Error(c(474)),lo=Error(c(542)),ic={then:function(){}};function qd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function no(){}function Yd(e,t,l){switch(l=e[l],l===void 0?e.push(t):l!==t&&(t.then(no,no),t=l),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Pd(e),e;default:if(typeof t.status=="string")t.then(no,no);else{if(e=Ge,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var r=t;r.status="fulfilled",r.value=n}},function(n){if(t.status==="pending"){var r=t;r.status="rejected",r.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Pd(e),e}throw jr=t,Hr}}var jr=null;function Vd(){if(jr===null)throw Error(c(459));var e=jr;return jr=null,e}function Pd(e){if(e===Hr||e===lo)throw Error(c(483))}var vl=!1;function oc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function uc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function yl(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function bl(e,t,l){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(ze&2)!==0){var r=n.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),n.pending=t,t=Ki(e),Cd(e,null,l),t}return Fi(e,n,t,l),Ki(e)}function Lr(e,t,l){if(t=t.updateQueue,t!==null&&(t=t.shared,(l&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,l|=n,t.lanes=l,Di(e,l)}}function cc(e,t){var l=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,l===n)){var r=null,o=null;if(l=l.firstBaseUpdate,l!==null){do{var f={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};o===null?r=o=f:o=o.next=f,l=l.next}while(l!==null);o===null?r=o=t:o=o.next=t}else r=o=t;l={baseState:n.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:n.shared,callbacks:n.callbacks},e.updateQueue=l;return}e=l.lastBaseUpdate,e===null?l.firstBaseUpdate=t:e.next=t,l.lastBaseUpdate=t}var sc=!1;function Ur(){if(sc){var e=zn;if(e!==null)throw e}}function kr(e,t,l,n){sc=!1;var r=e.updateQueue;vl=!1;var o=r.firstBaseUpdate,f=r.lastBaseUpdate,p=r.shared.pending;if(p!==null){r.shared.pending=null;var _=p,O=_.next;_.next=null,f===null?o=O:f.next=O,f=_;var k=e.alternate;k!==null&&(k=k.updateQueue,p=k.lastBaseUpdate,p!==f&&(p===null?k.firstBaseUpdate=O:p.next=O,k.lastBaseUpdate=_))}if(o!==null){var V=r.baseState;f=0,k=O=_=null,p=o;do{var z=p.lane&-536870913,H=z!==p.lane;if(H?(Te&z)===z:(n&z)===z){z!==0&&z===Rn&&(sc=!0),k!==null&&(k=k.next={lane:0,tag:p.tag,payload:p.payload,callback:null,next:null});e:{var he=e,fe=p;z=t;var ke=l;switch(fe.tag){case 1:if(he=fe.payload,typeof he=="function"){V=he.call(ke,V,z);break e}V=he;break e;case 3:he.flags=he.flags&-65537|128;case 0:if(he=fe.payload,z=typeof he=="function"?he.call(ke,V,z):he,z==null)break e;V=y({},V,z);break e;case 2:vl=!0}}z=p.callback,z!==null&&(e.flags|=64,H&&(e.flags|=8192),H=r.callbacks,H===null?r.callbacks=[z]:H.push(z))}else H={lane:z,tag:p.tag,payload:p.payload,callback:p.callback,next:null},k===null?(O=k=H,_=V):k=k.next=H,f|=z;if(p=p.next,p===null){if(p=r.shared.pending,p===null)break;H=p,p=H.next,H.next=null,r.lastBaseUpdate=H,r.shared.pending=null}}while(!0);k===null&&(_=V),r.baseState=_,r.firstBaseUpdate=O,r.lastBaseUpdate=k,o===null&&(r.shared.lanes=0),Tl|=f,e.lanes=f,e.memoizedState=V}}function Gd(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function Xd(e,t){var l=e.callbacks;if(l!==null)for(e.callbacks=null,e=0;e<l.length;e++)Gd(l[e],t)}var Hn=B(null),ro=B(0);function Qd(e,t){e=il,P(ro,e),P(Hn,t),il=e|t.baseLanes}function fc(){P(ro,il),P(Hn,Hn.current)}function dc(){il=ro.current,X(Hn),X(ro)}var xl=0,Se=null,Le=null,ft=null,io=!1,jn=!1,tn=!1,oo=0,qr=0,Ln=null,ty=0;function it(){throw Error(c(321))}function hc(e,t){if(t===null)return!1;for(var l=0;l<t.length&&l<e.length;l++)if(!Xt(e[l],t[l]))return!1;return!0}function mc(e,t,l,n,r,o){return xl=o,Se=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,U.H=e===null||e.memoizedState===null?Ch:Oh,tn=!1,o=l(n,r),tn=!1,jn&&(o=Fd(t,l,n,r)),Zd(e),o}function Zd(e){U.H=mo;var t=Le!==null&&Le.next!==null;if(xl=0,ft=Le=Se=null,io=!1,qr=0,Ln=null,t)throw Error(c(300));e===null||bt||(e=e.dependencies,e!==null&&eo(e)&&(bt=!0))}function Fd(e,t,l,n){Se=e;var r=0;do{if(jn&&(Ln=null),qr=0,jn=!1,25<=r)throw Error(c(301));if(r+=1,ft=Le=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}U.H=uy,o=t(l,n)}while(jn);return o}function ay(){var e=U.H,t=e.useState()[0];return t=typeof t.then=="function"?Yr(t):t,e=e.useState()[0],(Le!==null?Le.memoizedState:null)!==e&&(Se.flags|=1024),t}function pc(){var e=oo!==0;return oo=0,e}function gc(e,t,l){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l}function vc(e){if(io){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}io=!1}xl=0,ft=Le=Se=null,jn=!1,qr=oo=0,Ln=null}function kt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ft===null?Se.memoizedState=ft=e:ft=ft.next=e,ft}function dt(){if(Le===null){var e=Se.alternate;e=e!==null?e.memoizedState:null}else e=Le.next;var t=ft===null?Se.memoizedState:ft.next;if(t!==null)ft=t,Le=e;else{if(e===null)throw Se.alternate===null?Error(c(467)):Error(c(310));Le=e,e={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},ft===null?Se.memoizedState=ft=e:ft=ft.next=e}return ft}function yc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Yr(e){var t=qr;return qr+=1,Ln===null&&(Ln=[]),e=Yd(Ln,e,t),t=Se,(ft===null?t.memoizedState:ft.next)===null&&(t=t.alternate,U.H=t===null||t.memoizedState===null?Ch:Oh),e}function uo(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Yr(e);if(e.$$typeof===L)return Ot(e)}throw Error(c(438,String(e)))}function bc(e){var t=null,l=Se.updateQueue;if(l!==null&&(t=l.memoCache),t==null){var n=Se.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(r){return r.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),l===null&&(l=yc(),Se.updateQueue=l),l.memoCache=t,l=t.data[t.index],l===void 0)for(l=t.data[t.index]=Array(e),n=0;n<e;n++)l[n]=ge;return t.index++,l}function el(e,t){return typeof t=="function"?t(e):t}function co(e){var t=dt();return xc(t,Le,e)}function xc(e,t,l){var n=e.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=l;var r=e.baseQueue,o=n.pending;if(o!==null){if(r!==null){var f=r.next;r.next=o.next,o.next=f}t.baseQueue=r=o,n.pending=null}if(o=e.baseState,r===null)e.memoizedState=o;else{t=r.next;var p=f=null,_=null,O=t,k=!1;do{var V=O.lane&-536870913;if(V!==O.lane?(Te&V)===V:(xl&V)===V){var z=O.revertLane;if(z===0)_!==null&&(_=_.next={lane:0,revertLane:0,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null}),V===Rn&&(k=!0);else if((xl&z)===z){O=O.next,z===Rn&&(k=!0);continue}else V={lane:0,revertLane:O.revertLane,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null},_===null?(p=_=V,f=o):_=_.next=V,Se.lanes|=z,Tl|=z;V=O.action,tn&&l(o,V),o=O.hasEagerState?O.eagerState:l(o,V)}else z={lane:V,revertLane:O.revertLane,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null},_===null?(p=_=z,f=o):_=_.next=z,Se.lanes|=V,Tl|=V;O=O.next}while(O!==null&&O!==t);if(_===null?f=o:_.next=p,!Xt(o,e.memoizedState)&&(bt=!0,k&&(l=zn,l!==null)))throw l;e.memoizedState=o,e.baseState=f,e.baseQueue=_,n.lastRenderedState=o}return r===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function Sc(e){var t=dt(),l=t.queue;if(l===null)throw Error(c(311));l.lastRenderedReducer=e;var n=l.dispatch,r=l.pending,o=t.memoizedState;if(r!==null){l.pending=null;var f=r=r.next;do o=e(o,f.action),f=f.next;while(f!==r);Xt(o,t.memoizedState)||(bt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),l.lastRenderedState=o}return[o,n]}function Kd(e,t,l){var n=Se,r=dt(),o=Ce;if(o){if(l===void 0)throw Error(c(407));l=l()}else l=t();var f=!Xt((Le||r).memoizedState,l);f&&(r.memoizedState=l,bt=!0),r=r.queue;var p=Id.bind(null,n,r,e);if(Vr(2048,8,p,[e]),r.getSnapshot!==t||f||ft!==null&&ft.memoizedState.tag&1){if(n.flags|=2048,Un(9,so(),Jd.bind(null,n,r,l,t),null),Ge===null)throw Error(c(349));o||(xl&124)!==0||Wd(n,t,l)}return l}function Wd(e,t,l){e.flags|=16384,e={getSnapshot:t,value:l},t=Se.updateQueue,t===null?(t=yc(),Se.updateQueue=t,t.stores=[e]):(l=t.stores,l===null?t.stores=[e]:l.push(e))}function Jd(e,t,l,n){t.value=l,t.getSnapshot=n,eh(t)&&th(e)}function Id(e,t,l){return l(function(){eh(t)&&th(e)})}function eh(e){var t=e.getSnapshot;e=e.value;try{var l=t();return!Xt(e,l)}catch{return!0}}function th(e){var t=Cn(e,2);t!==null&&Jt(t,e,2)}function Ec(e){var t=kt();if(typeof e=="function"){var l=e;if(e=l(),tn){Ke(!0);try{l()}finally{Ke(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:el,lastRenderedState:e},t}function ah(e,t,l,n){return e.baseState=l,xc(e,Le,typeof n=="function"?n:el)}function ly(e,t,l,n,r){if(ho(e))throw Error(c(485));if(e=t.action,e!==null){var o={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(f){o.listeners.push(f)}};U.T!==null?l(!0):o.isTransition=!1,n(o),l=t.pending,l===null?(o.next=t.pending=o,lh(t,o)):(o.next=l.next,t.pending=l.next=o)}}function lh(e,t){var l=t.action,n=t.payload,r=e.state;if(t.isTransition){var o=U.T,f={};U.T=f;try{var p=l(r,n),_=U.S;_!==null&&_(f,p),nh(e,t,p)}catch(O){$c(e,t,O)}finally{U.T=o}}else try{o=l(r,n),nh(e,t,o)}catch(O){$c(e,t,O)}}function nh(e,t,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(n){rh(e,t,n)},function(n){return $c(e,t,n)}):rh(e,t,l)}function rh(e,t,l){t.status="fulfilled",t.value=l,ih(t),e.state=l,t=e.pending,t!==null&&(l=t.next,l===t?e.pending=null:(l=l.next,t.next=l,lh(e,l)))}function $c(e,t,l){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=l,ih(t),t=t.next;while(t!==n)}e.action=null}function ih(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function oh(e,t){return t}function uh(e,t){if(Ce){var l=Ge.formState;if(l!==null){e:{var n=Se;if(Ce){if(nt){t:{for(var r=nt,o=Ba;r.nodeType!==8;){if(!o){r=null;break t}if(r=wa(r.nextSibling),r===null){r=null;break t}}o=r.data,r=o==="F!"||o==="F"?r:null}if(r){nt=wa(r.nextSibling),n=r.data==="F!";break e}}Wl(n)}n=!1}n&&(t=l[0])}}return l=kt(),l.memoizedState=l.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:oh,lastRenderedState:t},l.queue=n,l=Th.bind(null,Se,n),n.dispatch=l,n=Ec(!1),o=Mc.bind(null,Se,!1,n.queue),n=kt(),r={state:t,dispatch:null,action:e,pending:null},n.queue=r,l=ly.bind(null,Se,r,o,l),r.dispatch=l,n.memoizedState=e,[t,l,!1]}function ch(e){var t=dt();return sh(t,Le,e)}function sh(e,t,l){if(t=xc(e,t,oh)[0],e=co(el)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=Yr(t)}catch(f){throw f===Hr?lo:f}else n=t;t=dt();var r=t.queue,o=r.dispatch;return l!==t.memoizedState&&(Se.flags|=2048,Un(9,so(),ny.bind(null,r,l),null)),[n,o,e]}function ny(e,t){e.action=t}function fh(e){var t=dt(),l=Le;if(l!==null)return sh(t,l,e);dt(),t=t.memoizedState,l=dt();var n=l.queue.dispatch;return l.memoizedState=e,[t,n,!1]}function Un(e,t,l,n){return e={tag:e,create:l,deps:n,inst:t,next:null},t=Se.updateQueue,t===null&&(t=yc(),Se.updateQueue=t),l=t.lastEffect,l===null?t.lastEffect=e.next=e:(n=l.next,l.next=e,e.next=n,t.lastEffect=e),e}function so(){return{destroy:void 0,resource:void 0}}function dh(){return dt().memoizedState}function fo(e,t,l,n){var r=kt();n=n===void 0?null:n,Se.flags|=e,r.memoizedState=Un(1|t,so(),l,n)}function Vr(e,t,l,n){var r=dt();n=n===void 0?null:n;var o=r.memoizedState.inst;Le!==null&&n!==null&&hc(n,Le.memoizedState.deps)?r.memoizedState=Un(t,o,l,n):(Se.flags|=e,r.memoizedState=Un(1|t,o,l,n))}function hh(e,t){fo(8390656,8,e,t)}function mh(e,t){Vr(2048,8,e,t)}function ph(e,t){return Vr(4,2,e,t)}function gh(e,t){return Vr(4,4,e,t)}function vh(e,t){if(typeof t=="function"){e=e();var l=t(e);return function(){typeof l=="function"?l():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function yh(e,t,l){l=l!=null?l.concat([e]):null,Vr(4,4,vh.bind(null,t,e),l)}function _c(){}function bh(e,t){var l=dt();t=t===void 0?null:t;var n=l.memoizedState;return t!==null&&hc(t,n[1])?n[0]:(l.memoizedState=[e,t],e)}function xh(e,t){var l=dt();t=t===void 0?null:t;var n=l.memoizedState;if(t!==null&&hc(t,n[1]))return n[0];if(n=e(),tn){Ke(!0);try{e()}finally{Ke(!1)}}return l.memoizedState=[n,t],n}function Nc(e,t,l){return l===void 0||(xl&1073741824)!==0?e.memoizedState=t:(e.memoizedState=l,e=$m(),Se.lanes|=e,Tl|=e,l)}function Sh(e,t,l,n){return Xt(l,t)?l:Hn.current!==null?(e=Nc(e,l,n),Xt(e,t)||(bt=!0),e):(xl&42)===0?(bt=!0,e.memoizedState=l):(e=$m(),Se.lanes|=e,Tl|=e,t)}function Eh(e,t,l,n,r){var o=K.p;K.p=o!==0&&8>o?o:8;var f=U.T,p={};U.T=p,Mc(e,!1,t,l);try{var _=r(),O=U.S;if(O!==null&&O(p,_),_!==null&&typeof _=="object"&&typeof _.then=="function"){var k=ey(_,n);Pr(e,t,k,Wt(e))}else Pr(e,t,n,Wt(e))}catch(V){Pr(e,t,{then:function(){},status:"rejected",reason:V},Wt())}finally{K.p=o,U.T=f}}function ry(){}function wc(e,t,l,n){if(e.tag!==5)throw Error(c(476));var r=$h(e).queue;Eh(e,r,t,ee,l===null?ry:function(){return _h(e),l(n)})}function $h(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ee,baseState:ee,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:el,lastRenderedState:ee},next:null};var l={};return t.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:el,lastRenderedState:l},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function _h(e){var t=$h(e).next.queue;Pr(e,t,{},Wt())}function Tc(){return Ot(ui)}function Nh(){return dt().memoizedState}function wh(){return dt().memoizedState}function iy(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var l=Wt();e=yl(l);var n=bl(t,e,l);n!==null&&(Jt(n,t,l),Lr(n,t,l)),t={cache:lc()},e.payload=t;return}t=t.return}}function oy(e,t,l){var n=Wt();l={lane:n,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null},ho(e)?Mh(t,l):(l=Qu(e,t,l,n),l!==null&&(Jt(l,e,n),Ah(l,t,n)))}function Th(e,t,l){var n=Wt();Pr(e,t,l,n)}function Pr(e,t,l,n){var r={lane:n,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null};if(ho(e))Mh(t,r);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var f=t.lastRenderedState,p=o(f,l);if(r.hasEagerState=!0,r.eagerState=p,Xt(p,f))return Fi(e,t,r,0),Ge===null&&Zi(),!1}catch{}finally{}if(l=Qu(e,t,r,n),l!==null)return Jt(l,e,n),Ah(l,t,n),!0}return!1}function Mc(e,t,l,n){if(n={lane:2,revertLane:is(),action:n,hasEagerState:!1,eagerState:null,next:null},ho(e)){if(t)throw Error(c(479))}else t=Qu(e,l,n,2),t!==null&&Jt(t,e,2)}function ho(e){var t=e.alternate;return e===Se||t!==null&&t===Se}function Mh(e,t){jn=io=!0;var l=e.pending;l===null?t.next=t:(t.next=l.next,l.next=t),e.pending=t}function Ah(e,t,l){if((l&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,l|=n,t.lanes=l,Di(e,l)}}var mo={readContext:Ot,use:uo,useCallback:it,useContext:it,useEffect:it,useImperativeHandle:it,useLayoutEffect:it,useInsertionEffect:it,useMemo:it,useReducer:it,useRef:it,useState:it,useDebugValue:it,useDeferredValue:it,useTransition:it,useSyncExternalStore:it,useId:it,useHostTransitionStatus:it,useFormState:it,useActionState:it,useOptimistic:it,useMemoCache:it,useCacheRefresh:it},Ch={readContext:Ot,use:uo,useCallback:function(e,t){return kt().memoizedState=[e,t===void 0?null:t],e},useContext:Ot,useEffect:hh,useImperativeHandle:function(e,t,l){l=l!=null?l.concat([e]):null,fo(4194308,4,vh.bind(null,t,e),l)},useLayoutEffect:function(e,t){return fo(4194308,4,e,t)},useInsertionEffect:function(e,t){fo(4,2,e,t)},useMemo:function(e,t){var l=kt();t=t===void 0?null:t;var n=e();if(tn){Ke(!0);try{e()}finally{Ke(!1)}}return l.memoizedState=[n,t],n},useReducer:function(e,t,l){var n=kt();if(l!==void 0){var r=l(t);if(tn){Ke(!0);try{l(t)}finally{Ke(!1)}}}else r=t;return n.memoizedState=n.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},n.queue=e,e=e.dispatch=oy.bind(null,Se,e),[n.memoizedState,e]},useRef:function(e){var t=kt();return e={current:e},t.memoizedState=e},useState:function(e){e=Ec(e);var t=e.queue,l=Th.bind(null,Se,t);return t.dispatch=l,[e.memoizedState,l]},useDebugValue:_c,useDeferredValue:function(e,t){var l=kt();return Nc(l,e,t)},useTransition:function(){var e=Ec(!1);return e=Eh.bind(null,Se,e.queue,!0,!1),kt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,l){var n=Se,r=kt();if(Ce){if(l===void 0)throw Error(c(407));l=l()}else{if(l=t(),Ge===null)throw Error(c(349));(Te&124)!==0||Wd(n,t,l)}r.memoizedState=l;var o={value:l,getSnapshot:t};return r.queue=o,hh(Id.bind(null,n,o,e),[e]),n.flags|=2048,Un(9,so(),Jd.bind(null,n,o,l,t),null),l},useId:function(){var e=kt(),t=Ge.identifierPrefix;if(Ce){var l=Wa,n=Ka;l=(n&~(1<<32-ut(n)-1)).toString(32)+l,t="«"+t+"R"+l,l=oo++,0<l&&(t+="H"+l.toString(32)),t+="»"}else l=ty++,t="«"+t+"r"+l.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:Tc,useFormState:uh,useActionState:uh,useOptimistic:function(e){var t=kt();t.memoizedState=t.baseState=e;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=l,t=Mc.bind(null,Se,!0,l),l.dispatch=t,[e,t]},useMemoCache:bc,useCacheRefresh:function(){return kt().memoizedState=iy.bind(null,Se)}},Oh={readContext:Ot,use:uo,useCallback:bh,useContext:Ot,useEffect:mh,useImperativeHandle:yh,useInsertionEffect:ph,useLayoutEffect:gh,useMemo:xh,useReducer:co,useRef:dh,useState:function(){return co(el)},useDebugValue:_c,useDeferredValue:function(e,t){var l=dt();return Sh(l,Le.memoizedState,e,t)},useTransition:function(){var e=co(el)[0],t=dt().memoizedState;return[typeof e=="boolean"?e:Yr(e),t]},useSyncExternalStore:Kd,useId:Nh,useHostTransitionStatus:Tc,useFormState:ch,useActionState:ch,useOptimistic:function(e,t){var l=dt();return ah(l,Le,e,t)},useMemoCache:bc,useCacheRefresh:wh},uy={readContext:Ot,use:uo,useCallback:bh,useContext:Ot,useEffect:mh,useImperativeHandle:yh,useInsertionEffect:ph,useLayoutEffect:gh,useMemo:xh,useReducer:Sc,useRef:dh,useState:function(){return Sc(el)},useDebugValue:_c,useDeferredValue:function(e,t){var l=dt();return Le===null?Nc(l,e,t):Sh(l,Le.memoizedState,e,t)},useTransition:function(){var e=Sc(el)[0],t=dt().memoizedState;return[typeof e=="boolean"?e:Yr(e),t]},useSyncExternalStore:Kd,useId:Nh,useHostTransitionStatus:Tc,useFormState:fh,useActionState:fh,useOptimistic:function(e,t){var l=dt();return Le!==null?ah(l,Le,e,t):(l.baseState=e,[e,l.queue.dispatch])},useMemoCache:bc,useCacheRefresh:wh},kn=null,Gr=0;function po(e){var t=Gr;return Gr+=1,kn===null&&(kn=[]),Yd(kn,e,t)}function Xr(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function go(e,t){throw t.$$typeof===E?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Dh(e){var t=e._init;return t(e._payload)}function Bh(e){function t(A,T){if(e){var C=A.deletions;C===null?(A.deletions=[T],A.flags|=16):C.push(T)}}function l(A,T){if(!e)return null;for(;T!==null;)t(A,T),T=T.sibling;return null}function n(A){for(var T=new Map;A!==null;)A.key!==null?T.set(A.key,A):T.set(A.index,A),A=A.sibling;return T}function r(A,T){return A=Fa(A,T),A.index=0,A.sibling=null,A}function o(A,T,C){return A.index=C,e?(C=A.alternate,C!==null?(C=C.index,C<T?(A.flags|=67108866,T):C):(A.flags|=67108866,T)):(A.flags|=1048576,T)}function f(A){return e&&A.alternate===null&&(A.flags|=67108866),A}function p(A,T,C,q){return T===null||T.tag!==6?(T=Fu(C,A.mode,q),T.return=A,T):(T=r(T,C),T.return=A,T)}function _(A,T,C,q){var le=C.type;return le===$?k(A,T,C.props.children,q,C.key):T!==null&&(T.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===se&&Dh(le)===T.type)?(T=r(T,C.props),Xr(T,C),T.return=A,T):(T=Wi(C.type,C.key,C.props,null,A.mode,q),Xr(T,C),T.return=A,T)}function O(A,T,C,q){return T===null||T.tag!==4||T.stateNode.containerInfo!==C.containerInfo||T.stateNode.implementation!==C.implementation?(T=Ku(C,A.mode,q),T.return=A,T):(T=r(T,C.children||[]),T.return=A,T)}function k(A,T,C,q,le){return T===null||T.tag!==7?(T=Ql(C,A.mode,q,le),T.return=A,T):(T=r(T,C),T.return=A,T)}function V(A,T,C){if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return T=Fu(""+T,A.mode,C),T.return=A,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case x:return C=Wi(T.type,T.key,T.props,null,A.mode,C),Xr(C,T),C.return=A,C;case w:return T=Ku(T,A.mode,C),T.return=A,T;case se:var q=T._init;return T=q(T._payload),V(A,T,C)}if(Me(T)||Oe(T))return T=Ql(T,A.mode,C,null),T.return=A,T;if(typeof T.then=="function")return V(A,po(T),C);if(T.$$typeof===L)return V(A,to(A,T),C);go(A,T)}return null}function z(A,T,C,q){var le=T!==null?T.key:null;if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return le!==null?null:p(A,T,""+C,q);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case x:return C.key===le?_(A,T,C,q):null;case w:return C.key===le?O(A,T,C,q):null;case se:return le=C._init,C=le(C._payload),z(A,T,C,q)}if(Me(C)||Oe(C))return le!==null?null:k(A,T,C,q,null);if(typeof C.then=="function")return z(A,T,po(C),q);if(C.$$typeof===L)return z(A,T,to(A,C),q);go(A,C)}return null}function H(A,T,C,q,le){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return A=A.get(C)||null,p(T,A,""+q,le);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case x:return A=A.get(q.key===null?C:q.key)||null,_(T,A,q,le);case w:return A=A.get(q.key===null?C:q.key)||null,O(T,A,q,le);case se:var Ee=q._init;return q=Ee(q._payload),H(A,T,C,q,le)}if(Me(q)||Oe(q))return A=A.get(C)||null,k(T,A,q,le,null);if(typeof q.then=="function")return H(A,T,C,po(q),le);if(q.$$typeof===L)return H(A,T,C,to(T,q),le);go(T,q)}return null}function he(A,T,C,q){for(var le=null,Ee=null,oe=T,de=T=0,St=null;oe!==null&&de<C.length;de++){oe.index>de?(St=oe,oe=null):St=oe.sibling;var Ae=z(A,oe,C[de],q);if(Ae===null){oe===null&&(oe=St);break}e&&oe&&Ae.alternate===null&&t(A,oe),T=o(Ae,T,de),Ee===null?le=Ae:Ee.sibling=Ae,Ee=Ae,oe=St}if(de===C.length)return l(A,oe),Ce&&Fl(A,de),le;if(oe===null){for(;de<C.length;de++)oe=V(A,C[de],q),oe!==null&&(T=o(oe,T,de),Ee===null?le=oe:Ee.sibling=oe,Ee=oe);return Ce&&Fl(A,de),le}for(oe=n(oe);de<C.length;de++)St=H(oe,A,de,C[de],q),St!==null&&(e&&St.alternate!==null&&oe.delete(St.key===null?de:St.key),T=o(St,T,de),Ee===null?le=St:Ee.sibling=St,Ee=St);return e&&oe.forEach(function(Hl){return t(A,Hl)}),Ce&&Fl(A,de),le}function fe(A,T,C,q){if(C==null)throw Error(c(151));for(var le=null,Ee=null,oe=T,de=T=0,St=null,Ae=C.next();oe!==null&&!Ae.done;de++,Ae=C.next()){oe.index>de?(St=oe,oe=null):St=oe.sibling;var Hl=z(A,oe,Ae.value,q);if(Hl===null){oe===null&&(oe=St);break}e&&oe&&Hl.alternate===null&&t(A,oe),T=o(Hl,T,de),Ee===null?le=Hl:Ee.sibling=Hl,Ee=Hl,oe=St}if(Ae.done)return l(A,oe),Ce&&Fl(A,de),le;if(oe===null){for(;!Ae.done;de++,Ae=C.next())Ae=V(A,Ae.value,q),Ae!==null&&(T=o(Ae,T,de),Ee===null?le=Ae:Ee.sibling=Ae,Ee=Ae);return Ce&&Fl(A,de),le}for(oe=n(oe);!Ae.done;de++,Ae=C.next())Ae=H(oe,A,de,Ae.value,q),Ae!==null&&(e&&Ae.alternate!==null&&oe.delete(Ae.key===null?de:Ae.key),T=o(Ae,T,de),Ee===null?le=Ae:Ee.sibling=Ae,Ee=Ae);return e&&oe.forEach(function(c1){return t(A,c1)}),Ce&&Fl(A,de),le}function ke(A,T,C,q){if(typeof C=="object"&&C!==null&&C.type===$&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case x:e:{for(var le=C.key;T!==null;){if(T.key===le){if(le=C.type,le===$){if(T.tag===7){l(A,T.sibling),q=r(T,C.props.children),q.return=A,A=q;break e}}else if(T.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===se&&Dh(le)===T.type){l(A,T.sibling),q=r(T,C.props),Xr(q,C),q.return=A,A=q;break e}l(A,T);break}else t(A,T);T=T.sibling}C.type===$?(q=Ql(C.props.children,A.mode,q,C.key),q.return=A,A=q):(q=Wi(C.type,C.key,C.props,null,A.mode,q),Xr(q,C),q.return=A,A=q)}return f(A);case w:e:{for(le=C.key;T!==null;){if(T.key===le)if(T.tag===4&&T.stateNode.containerInfo===C.containerInfo&&T.stateNode.implementation===C.implementation){l(A,T.sibling),q=r(T,C.children||[]),q.return=A,A=q;break e}else{l(A,T);break}else t(A,T);T=T.sibling}q=Ku(C,A.mode,q),q.return=A,A=q}return f(A);case se:return le=C._init,C=le(C._payload),ke(A,T,C,q)}if(Me(C))return he(A,T,C,q);if(Oe(C)){if(le=Oe(C),typeof le!="function")throw Error(c(150));return C=le.call(C),fe(A,T,C,q)}if(typeof C.then=="function")return ke(A,T,po(C),q);if(C.$$typeof===L)return ke(A,T,to(A,C),q);go(A,C)}return typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint"?(C=""+C,T!==null&&T.tag===6?(l(A,T.sibling),q=r(T,C),q.return=A,A=q):(l(A,T),q=Fu(C,A.mode,q),q.return=A,A=q),f(A)):l(A,T)}return function(A,T,C,q){try{Gr=0;var le=ke(A,T,C,q);return kn=null,le}catch(oe){if(oe===Hr||oe===lo)throw oe;var Ee=Qt(29,oe,null,A.mode);return Ee.lanes=q,Ee.return=A,Ee}finally{}}}var qn=Bh(!0),Rh=Bh(!1),da=B(null),Ra=null;function Sl(e){var t=e.alternate;P(vt,vt.current&1),P(da,e),Ra===null&&(t===null||Hn.current!==null||t.memoizedState!==null)&&(Ra=e)}function zh(e){if(e.tag===22){if(P(vt,vt.current),P(da,e),Ra===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Ra=e)}}else El()}function El(){P(vt,vt.current),P(da,da.current)}function tl(e){X(da),Ra===e&&(Ra=null),X(vt)}var vt=B(0);function vo(e){for(var t=e;t!==null;){if(t.tag===13){var l=t.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||ys(l)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function Ac(e,t,l,n){t=e.memoizedState,l=l(n,t),l=l==null?t:y({},t,l),e.memoizedState=l,e.lanes===0&&(e.updateQueue.baseState=l)}var Cc={enqueueSetState:function(e,t,l){e=e._reactInternals;var n=Wt(),r=yl(n);r.payload=t,l!=null&&(r.callback=l),t=bl(e,r,n),t!==null&&(Jt(t,e,n),Lr(t,e,n))},enqueueReplaceState:function(e,t,l){e=e._reactInternals;var n=Wt(),r=yl(n);r.tag=1,r.payload=t,l!=null&&(r.callback=l),t=bl(e,r,n),t!==null&&(Jt(t,e,n),Lr(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var l=Wt(),n=yl(l);n.tag=2,t!=null&&(n.callback=t),t=bl(e,n,l),t!==null&&(Jt(t,e,l),Lr(t,e,l))}};function Hh(e,t,l,n,r,o,f){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,o,f):t.prototype&&t.prototype.isPureReactComponent?!Mr(l,n)||!Mr(r,o):!0}function jh(e,t,l,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(l,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(l,n),t.state!==e&&Cc.enqueueReplaceState(t,t.state,null)}function an(e,t){var l=t;if("ref"in t){l={};for(var n in t)n!=="ref"&&(l[n]=t[n])}if(e=e.defaultProps){l===t&&(l=y({},l));for(var r in e)l[r]===void 0&&(l[r]=e[r])}return l}var yo=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Lh(e){yo(e)}function Uh(e){console.error(e)}function kh(e){yo(e)}function bo(e,t){try{var l=e.onUncaughtError;l(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function qh(e,t,l){try{var n=e.onCaughtError;n(l.value,{componentStack:l.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function Oc(e,t,l){return l=yl(l),l.tag=3,l.payload={element:null},l.callback=function(){bo(e,t)},l}function Yh(e){return e=yl(e),e.tag=3,e}function Vh(e,t,l,n){var r=l.type.getDerivedStateFromError;if(typeof r=="function"){var o=n.value;e.payload=function(){return r(o)},e.callback=function(){qh(t,l,n)}}var f=l.stateNode;f!==null&&typeof f.componentDidCatch=="function"&&(e.callback=function(){qh(t,l,n),typeof r!="function"&&(Ml===null?Ml=new Set([this]):Ml.add(this));var p=n.stack;this.componentDidCatch(n.value,{componentStack:p!==null?p:""})})}function cy(e,t,l,n,r){if(l.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=l.alternate,t!==null&&Br(t,l,r,!0),l=da.current,l!==null){switch(l.tag){case 13:return Ra===null?ts():l.alternate===null&&rt===0&&(rt=3),l.flags&=-257,l.flags|=65536,l.lanes=r,n===ic?l.flags|=16384:(t=l.updateQueue,t===null?l.updateQueue=new Set([n]):t.add(n),ls(e,n,r)),!1;case 22:return l.flags|=65536,n===ic?l.flags|=16384:(t=l.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},l.updateQueue=t):(l=t.retryQueue,l===null?t.retryQueue=new Set([n]):l.add(n)),ls(e,n,r)),!1}throw Error(c(435,l.tag))}return ls(e,n,r),ts(),!1}if(Ce)return t=da.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=r,n!==Iu&&(e=Error(c(422),{cause:n}),Dr(ua(e,l)))):(n!==Iu&&(t=Error(c(423),{cause:n}),Dr(ua(t,l))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,n=ua(n,l),r=Oc(e.stateNode,n,r),cc(e,r),rt!==4&&(rt=2)),!1;var o=Error(c(520),{cause:n});if(o=ua(o,l),Ir===null?Ir=[o]:Ir.push(o),rt!==4&&(rt=2),t===null)return!0;n=ua(n,l),l=t;do{switch(l.tag){case 3:return l.flags|=65536,e=r&-r,l.lanes|=e,e=Oc(l.stateNode,n,e),cc(l,e),!1;case 1:if(t=l.type,o=l.stateNode,(l.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(Ml===null||!Ml.has(o))))return l.flags|=65536,r&=-r,l.lanes|=r,r=Yh(r),Vh(r,e,l,n),cc(l,r),!1}l=l.return}while(l!==null);return!1}var Ph=Error(c(461)),bt=!1;function Nt(e,t,l,n){t.child=e===null?Rh(t,null,l,n):qn(t,e.child,l,n)}function Gh(e,t,l,n,r){l=l.render;var o=t.ref;if("ref"in n){var f={};for(var p in n)p!=="ref"&&(f[p]=n[p])}else f=n;return Il(t),n=mc(e,t,l,f,o,r),p=pc(),e!==null&&!bt?(gc(e,t,r),al(e,t,r)):(Ce&&p&&Wu(t),t.flags|=1,Nt(e,t,n,r),t.child)}function Xh(e,t,l,n,r){if(e===null){var o=l.type;return typeof o=="function"&&!Zu(o)&&o.defaultProps===void 0&&l.compare===null?(t.tag=15,t.type=o,Qh(e,t,o,n,r)):(e=Wi(l.type,null,n,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!Uc(e,r)){var f=o.memoizedProps;if(l=l.compare,l=l!==null?l:Mr,l(f,n)&&e.ref===t.ref)return al(e,t,r)}return t.flags|=1,e=Fa(o,n),e.ref=t.ref,e.return=t,t.child=e}function Qh(e,t,l,n,r){if(e!==null){var o=e.memoizedProps;if(Mr(o,n)&&e.ref===t.ref)if(bt=!1,t.pendingProps=n=o,Uc(e,r))(e.flags&131072)!==0&&(bt=!0);else return t.lanes=e.lanes,al(e,t,r)}return Dc(e,t,l,n,r)}function Zh(e,t,l){var n=t.pendingProps,r=n.children,o=e!==null?e.memoizedState:null;if(n.mode==="hidden"){if((t.flags&128)!==0){if(n=o!==null?o.baseLanes|l:l,e!==null){for(r=t.child=e.child,o=0;r!==null;)o=o|r.lanes|r.childLanes,r=r.sibling;t.childLanes=o&~n}else t.childLanes=0,t.child=null;return Fh(e,t,n,l)}if((l&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ao(t,o!==null?o.cachePool:null),o!==null?Qd(t,o):fc(),zh(t);else return t.lanes=t.childLanes=536870912,Fh(e,t,o!==null?o.baseLanes|l:l,l)}else o!==null?(ao(t,o.cachePool),Qd(t,o),El(),t.memoizedState=null):(e!==null&&ao(t,null),fc(),El());return Nt(e,t,r,l),t.child}function Fh(e,t,l,n){var r=rc();return r=r===null?null:{parent:gt._currentValue,pool:r},t.memoizedState={baseLanes:l,cachePool:r},e!==null&&ao(t,null),fc(),zh(t),e!==null&&Br(e,t,n,!0),null}function xo(e,t){var l=t.ref;if(l===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(c(284));(e===null||e.ref!==l)&&(t.flags|=4194816)}}function Dc(e,t,l,n,r){return Il(t),l=mc(e,t,l,n,void 0,r),n=pc(),e!==null&&!bt?(gc(e,t,r),al(e,t,r)):(Ce&&n&&Wu(t),t.flags|=1,Nt(e,t,l,r),t.child)}function Kh(e,t,l,n,r,o){return Il(t),t.updateQueue=null,l=Fd(t,n,l,r),Zd(e),n=pc(),e!==null&&!bt?(gc(e,t,o),al(e,t,o)):(Ce&&n&&Wu(t),t.flags|=1,Nt(e,t,l,o),t.child)}function Wh(e,t,l,n,r){if(Il(t),t.stateNode===null){var o=On,f=l.contextType;typeof f=="object"&&f!==null&&(o=Ot(f)),o=new l(n,o),t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=Cc,t.stateNode=o,o._reactInternals=t,o=t.stateNode,o.props=n,o.state=t.memoizedState,o.refs={},oc(t),f=l.contextType,o.context=typeof f=="object"&&f!==null?Ot(f):On,o.state=t.memoizedState,f=l.getDerivedStateFromProps,typeof f=="function"&&(Ac(t,l,f,n),o.state=t.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(f=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),f!==o.state&&Cc.enqueueReplaceState(o,o.state,null),kr(t,n,o,r),Ur(),o.state=t.memoizedState),typeof o.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){o=t.stateNode;var p=t.memoizedProps,_=an(l,p);o.props=_;var O=o.context,k=l.contextType;f=On,typeof k=="object"&&k!==null&&(f=Ot(k));var V=l.getDerivedStateFromProps;k=typeof V=="function"||typeof o.getSnapshotBeforeUpdate=="function",p=t.pendingProps!==p,k||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(p||O!==f)&&jh(t,o,n,f),vl=!1;var z=t.memoizedState;o.state=z,kr(t,n,o,r),Ur(),O=t.memoizedState,p||z!==O||vl?(typeof V=="function"&&(Ac(t,l,V,n),O=t.memoizedState),(_=vl||Hh(t,l,_,n,z,O,f))?(k||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=O),o.props=n,o.state=O,o.context=f,n=_):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{o=t.stateNode,uc(e,t),f=t.memoizedProps,k=an(l,f),o.props=k,V=t.pendingProps,z=o.context,O=l.contextType,_=On,typeof O=="object"&&O!==null&&(_=Ot(O)),p=l.getDerivedStateFromProps,(O=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(f!==V||z!==_)&&jh(t,o,n,_),vl=!1,z=t.memoizedState,o.state=z,kr(t,n,o,r),Ur();var H=t.memoizedState;f!==V||z!==H||vl||e!==null&&e.dependencies!==null&&eo(e.dependencies)?(typeof p=="function"&&(Ac(t,l,p,n),H=t.memoizedState),(k=vl||Hh(t,l,k,n,z,H,_)||e!==null&&e.dependencies!==null&&eo(e.dependencies))?(O||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(n,H,_),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(n,H,_)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||f===e.memoizedProps&&z===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&z===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=H),o.props=n,o.state=H,o.context=_,n=k):(typeof o.componentDidUpdate!="function"||f===e.memoizedProps&&z===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&z===e.memoizedState||(t.flags|=1024),n=!1)}return o=n,xo(e,t),n=(t.flags&128)!==0,o||n?(o=t.stateNode,l=n&&typeof l.getDerivedStateFromError!="function"?null:o.render(),t.flags|=1,e!==null&&n?(t.child=qn(t,e.child,null,r),t.child=qn(t,null,l,r)):Nt(e,t,l,r),t.memoizedState=o.state,e=t.child):e=al(e,t,r),e}function Jh(e,t,l,n){return Or(),t.flags|=256,Nt(e,t,l,n),t.child}var Bc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Rc(e){return{baseLanes:e,cachePool:Ud()}}function zc(e,t,l){return e=e!==null?e.childLanes&~l:0,t&&(e|=ha),e}function Ih(e,t,l){var n=t.pendingProps,r=!1,o=(t.flags&128)!==0,f;if((f=o)||(f=e!==null&&e.memoizedState===null?!1:(vt.current&2)!==0),f&&(r=!0,t.flags&=-129),f=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ce){if(r?Sl(t):El(),Ce){var p=nt,_;if(_=p){e:{for(_=p,p=Ba;_.nodeType!==8;){if(!p){p=null;break e}if(_=wa(_.nextSibling),_===null){p=null;break e}}p=_}p!==null?(t.memoizedState={dehydrated:p,treeContext:Zl!==null?{id:Ka,overflow:Wa}:null,retryLane:536870912,hydrationErrors:null},_=Qt(18,null,null,0),_.stateNode=p,_.return=t,t.child=_,Ht=t,nt=null,_=!0):_=!1}_||Wl(t)}if(p=t.memoizedState,p!==null&&(p=p.dehydrated,p!==null))return ys(p)?t.lanes=32:t.lanes=536870912,null;tl(t)}return p=n.children,n=n.fallback,r?(El(),r=t.mode,p=So({mode:"hidden",children:p},r),n=Ql(n,r,l,null),p.return=t,n.return=t,p.sibling=n,t.child=p,r=t.child,r.memoizedState=Rc(l),r.childLanes=zc(e,f,l),t.memoizedState=Bc,n):(Sl(t),Hc(t,p))}if(_=e.memoizedState,_!==null&&(p=_.dehydrated,p!==null)){if(o)t.flags&256?(Sl(t),t.flags&=-257,t=jc(e,t,l)):t.memoizedState!==null?(El(),t.child=e.child,t.flags|=128,t=null):(El(),r=n.fallback,p=t.mode,n=So({mode:"visible",children:n.children},p),r=Ql(r,p,l,null),r.flags|=2,n.return=t,r.return=t,n.sibling=r,t.child=n,qn(t,e.child,null,l),n=t.child,n.memoizedState=Rc(l),n.childLanes=zc(e,f,l),t.memoizedState=Bc,t=r);else if(Sl(t),ys(p)){if(f=p.nextSibling&&p.nextSibling.dataset,f)var O=f.dgst;f=O,n=Error(c(419)),n.stack="",n.digest=f,Dr({value:n,source:null,stack:null}),t=jc(e,t,l)}else if(bt||Br(e,t,l,!1),f=(l&e.childLanes)!==0,bt||f){if(f=Ge,f!==null&&(n=l&-l,n=(n&42)!==0?1:yn(n),n=(n&(f.suspendedLanes|l))!==0?0:n,n!==0&&n!==_.retryLane))throw _.retryLane=n,Cn(e,n),Jt(f,e,n),Ph;p.data==="$?"||ts(),t=jc(e,t,l)}else p.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=_.treeContext,nt=wa(p.nextSibling),Ht=t,Ce=!0,Kl=null,Ba=!1,e!==null&&(sa[fa++]=Ka,sa[fa++]=Wa,sa[fa++]=Zl,Ka=e.id,Wa=e.overflow,Zl=t),t=Hc(t,n.children),t.flags|=4096);return t}return r?(El(),r=n.fallback,p=t.mode,_=e.child,O=_.sibling,n=Fa(_,{mode:"hidden",children:n.children}),n.subtreeFlags=_.subtreeFlags&65011712,O!==null?r=Fa(O,r):(r=Ql(r,p,l,null),r.flags|=2),r.return=t,n.return=t,n.sibling=r,t.child=n,n=r,r=t.child,p=e.child.memoizedState,p===null?p=Rc(l):(_=p.cachePool,_!==null?(O=gt._currentValue,_=_.parent!==O?{parent:O,pool:O}:_):_=Ud(),p={baseLanes:p.baseLanes|l,cachePool:_}),r.memoizedState=p,r.childLanes=zc(e,f,l),t.memoizedState=Bc,n):(Sl(t),l=e.child,e=l.sibling,l=Fa(l,{mode:"visible",children:n.children}),l.return=t,l.sibling=null,e!==null&&(f=t.deletions,f===null?(t.deletions=[e],t.flags|=16):f.push(e)),t.child=l,t.memoizedState=null,l)}function Hc(e,t){return t=So({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function So(e,t){return e=Qt(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function jc(e,t,l){return qn(t,e.child,null,l),e=Hc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function em(e,t,l){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),tc(e.return,t,l)}function Lc(e,t,l,n,r){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:l,tailMode:r}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=l,o.tailMode=r)}function tm(e,t,l){var n=t.pendingProps,r=n.revealOrder,o=n.tail;if(Nt(e,t,n.children,l),n=vt.current,(n&2)!==0)n=n&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&em(e,l,t);else if(e.tag===19)em(e,l,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}switch(P(vt,n),r){case"forwards":for(l=t.child,r=null;l!==null;)e=l.alternate,e!==null&&vo(e)===null&&(r=l),l=l.sibling;l=r,l===null?(r=t.child,t.child=null):(r=l.sibling,l.sibling=null),Lc(t,!1,r,l,o);break;case"backwards":for(l=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&vo(e)===null){t.child=r;break}e=r.sibling,r.sibling=l,l=r,r=e}Lc(t,!0,l,null,o);break;case"together":Lc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function al(e,t,l){if(e!==null&&(t.dependencies=e.dependencies),Tl|=t.lanes,(l&t.childLanes)===0)if(e!==null){if(Br(e,t,l,!1),(l&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,l=Fa(e,e.pendingProps),t.child=l,l.return=t;e.sibling!==null;)e=e.sibling,l=l.sibling=Fa(e,e.pendingProps),l.return=t;l.sibling=null}return t.child}function Uc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&eo(e)))}function sy(e,t,l){switch(t.tag){case 3:ve(t,t.stateNode.containerInfo),gl(t,gt,e.memoizedState.cache),Or();break;case 27:case 5:Mt(t);break;case 4:ve(t,t.stateNode.containerInfo);break;case 10:gl(t,t.type,t.memoizedProps.value);break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(Sl(t),t.flags|=128,null):(l&t.child.childLanes)!==0?Ih(e,t,l):(Sl(t),e=al(e,t,l),e!==null?e.sibling:null);Sl(t);break;case 19:var r=(e.flags&128)!==0;if(n=(l&t.childLanes)!==0,n||(Br(e,t,l,!1),n=(l&t.childLanes)!==0),r){if(n)return tm(e,t,l);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),P(vt,vt.current),n)break;return null;case 22:case 23:return t.lanes=0,Zh(e,t,l);case 24:gl(t,gt,e.memoizedState.cache)}return al(e,t,l)}function am(e,t,l){if(e!==null)if(e.memoizedProps!==t.pendingProps)bt=!0;else{if(!Uc(e,l)&&(t.flags&128)===0)return bt=!1,sy(e,t,l);bt=(e.flags&131072)!==0}else bt=!1,Ce&&(t.flags&1048576)!==0&&Dd(t,Ii,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var n=t.elementType,r=n._init;if(n=r(n._payload),t.type=n,typeof n=="function")Zu(n)?(e=an(n,e),t.tag=1,t=Wh(null,t,n,e,l)):(t.tag=0,t=Dc(null,t,n,e,l));else{if(n!=null){if(r=n.$$typeof,r===te){t.tag=11,t=Gh(null,t,n,e,l);break e}else if(r===ae){t.tag=14,t=Xh(null,t,n,e,l);break e}}throw t=lt(n)||n,Error(c(306,t,""))}}return t;case 0:return Dc(e,t,t.type,t.pendingProps,l);case 1:return n=t.type,r=an(n,t.pendingProps),Wh(e,t,n,r,l);case 3:e:{if(ve(t,t.stateNode.containerInfo),e===null)throw Error(c(387));n=t.pendingProps;var o=t.memoizedState;r=o.element,uc(e,t),kr(t,n,null,l);var f=t.memoizedState;if(n=f.cache,gl(t,gt,n),n!==o.cache&&ac(t,[gt],l,!0),Ur(),n=f.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:f.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=Jh(e,t,n,l);break e}else if(n!==r){r=ua(Error(c(424)),t),Dr(r),t=Jh(e,t,n,l);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(nt=wa(e.firstChild),Ht=t,Ce=!0,Kl=null,Ba=!0,l=Rh(t,null,n,l),t.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(Or(),n===r){t=al(e,t,l);break e}Nt(e,t,n,l)}t=t.child}return t;case 26:return xo(e,t),e===null?(l=i0(t.type,null,t.pendingProps,null))?t.memoizedState=l:Ce||(l=t.type,e=t.pendingProps,n=zo(re.current).createElement(l),n[et]=t,n[At]=e,Tt(n,l,e),ct(n),t.stateNode=n):t.memoizedState=i0(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Mt(t),e===null&&Ce&&(n=t.stateNode=l0(t.type,t.pendingProps,re.current),Ht=t,Ba=!0,r=nt,Ol(t.type)?(bs=r,nt=wa(n.firstChild)):nt=r),Nt(e,t,t.pendingProps.children,l),xo(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Ce&&((r=n=nt)&&(n=Ly(n,t.type,t.pendingProps,Ba),n!==null?(t.stateNode=n,Ht=t,nt=wa(n.firstChild),Ba=!1,r=!0):r=!1),r||Wl(t)),Mt(t),r=t.type,o=t.pendingProps,f=e!==null?e.memoizedProps:null,n=o.children,ps(r,o)?n=null:f!==null&&ps(r,f)&&(t.flags|=32),t.memoizedState!==null&&(r=mc(e,t,ay,null,null,l),ui._currentValue=r),xo(e,t),Nt(e,t,n,l),t.child;case 6:return e===null&&Ce&&((e=l=nt)&&(l=Uy(l,t.pendingProps,Ba),l!==null?(t.stateNode=l,Ht=t,nt=null,e=!0):e=!1),e||Wl(t)),null;case 13:return Ih(e,t,l);case 4:return ve(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=qn(t,null,n,l):Nt(e,t,n,l),t.child;case 11:return Gh(e,t,t.type,t.pendingProps,l);case 7:return Nt(e,t,t.pendingProps,l),t.child;case 8:return Nt(e,t,t.pendingProps.children,l),t.child;case 12:return Nt(e,t,t.pendingProps.children,l),t.child;case 10:return n=t.pendingProps,gl(t,t.type,n.value),Nt(e,t,n.children,l),t.child;case 9:return r=t.type._context,n=t.pendingProps.children,Il(t),r=Ot(r),n=n(r),t.flags|=1,Nt(e,t,n,l),t.child;case 14:return Xh(e,t,t.type,t.pendingProps,l);case 15:return Qh(e,t,t.type,t.pendingProps,l);case 19:return tm(e,t,l);case 31:return n=t.pendingProps,l=t.mode,n={mode:n.mode,children:n.children},e===null?(l=So(n,l),l.ref=t.ref,t.child=l,l.return=t,t=l):(l=Fa(e.child,n),l.ref=t.ref,t.child=l,l.return=t,t=l),t;case 22:return Zh(e,t,l);case 24:return Il(t),n=Ot(gt),e===null?(r=rc(),r===null&&(r=Ge,o=lc(),r.pooledCache=o,o.refCount++,o!==null&&(r.pooledCacheLanes|=l),r=o),t.memoizedState={parent:n,cache:r},oc(t),gl(t,gt,r)):((e.lanes&l)!==0&&(uc(e,t),kr(t,null,null,l),Ur()),r=e.memoizedState,o=t.memoizedState,r.parent!==n?(r={parent:n,cache:n},t.memoizedState=r,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=r),gl(t,gt,n)):(n=o.cache,gl(t,gt,n),n!==r.cache&&ac(t,[gt],l,!0))),Nt(e,t,t.pendingProps.children,l),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function ll(e){e.flags|=4}function lm(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!f0(t)){if(t=da.current,t!==null&&((Te&4194048)===Te?Ra!==null:(Te&62914560)!==Te&&(Te&536870912)===0||t!==Ra))throw jr=ic,kd;e.flags|=8192}}function Eo(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?ta():536870912,e.lanes|=t,Gn|=t)}function Qr(e,t){if(!Ce)switch(e.tailMode){case"hidden":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?e.tail=null:l.sibling=null;break;case"collapsed":l=e.tail;for(var n=null;l!==null;)l.alternate!==null&&(n=l),l=l.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function tt(e){var t=e.alternate!==null&&e.alternate.child===e.child,l=0,n=0;if(t)for(var r=e.child;r!==null;)l|=r.lanes|r.childLanes,n|=r.subtreeFlags&65011712,n|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)l|=r.lanes|r.childLanes,n|=r.subtreeFlags,n|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=n,e.childLanes=l,t}function fy(e,t,l){var n=t.pendingProps;switch(Ju(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tt(t),null;case 1:return tt(t),null;case 3:return l=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Ia(gt),Je(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(Cr(t)?ll(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,zd())),tt(t),null;case 26:return l=t.memoizedState,e===null?(ll(t),l!==null?(tt(t),lm(t,l)):(tt(t),t.flags&=-16777217)):l?l!==e.memoizedState?(ll(t),tt(t),lm(t,l)):(tt(t),t.flags&=-16777217):(e.memoizedProps!==n&&ll(t),tt(t),t.flags&=-16777217),null;case 27:Pe(t),l=re.current;var r=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==n&&ll(t);else{if(!n){if(t.stateNode===null)throw Error(c(166));return tt(t),null}e=I.current,Cr(t)?Bd(t):(e=l0(r,n,l),t.stateNode=e,ll(t))}return tt(t),null;case 5:if(Pe(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&ll(t);else{if(!n){if(t.stateNode===null)throw Error(c(166));return tt(t),null}if(e=I.current,Cr(t))Bd(t);else{switch(r=zo(re.current),e){case 1:e=r.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:e=r.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":e=r.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":e=r.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":e=r.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof n.is=="string"?r.createElement("select",{is:n.is}):r.createElement("select"),n.multiple?e.multiple=!0:n.size&&(e.size=n.size);break;default:e=typeof n.is=="string"?r.createElement(l,{is:n.is}):r.createElement(l)}}e[et]=t,e[At]=n;e:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break e;for(;r.sibling===null;){if(r.return===null||r.return===t)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=e;e:switch(Tt(e,l,n),l){case"button":case"input":case"select":case"textarea":e=!!n.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&ll(t)}}return tt(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&ll(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(c(166));if(e=re.current,Cr(t)){if(e=t.stateNode,l=t.memoizedProps,n=null,r=Ht,r!==null)switch(r.tag){case 27:case 5:n=r.memoizedProps}e[et]=t,e=!!(e.nodeValue===l||n!==null&&n.suppressHydrationWarning===!0||Km(e.nodeValue,l)),e||Wl(t)}else e=zo(e).createTextNode(n),e[et]=t,t.stateNode=e}return tt(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=Cr(t),n!==null&&n.dehydrated!==null){if(e===null){if(!r)throw Error(c(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(c(317));r[et]=t}else Or(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;tt(t),r=!1}else r=zd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return t.flags&256?(tl(t),t):(tl(t),null)}if(tl(t),(t.flags&128)!==0)return t.lanes=l,t;if(l=n!==null,e=e!==null&&e.memoizedState!==null,l){n=t.child,r=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(r=n.alternate.memoizedState.cachePool.pool);var o=null;n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==r&&(n.flags|=2048)}return l!==e&&l&&(t.child.flags|=8192),Eo(t,t.updateQueue),tt(t),null;case 4:return Je(),e===null&&ss(t.stateNode.containerInfo),tt(t),null;case 10:return Ia(t.type),tt(t),null;case 19:if(X(vt),r=t.memoizedState,r===null)return tt(t),null;if(n=(t.flags&128)!==0,o=r.rendering,o===null)if(n)Qr(r,!1);else{if(rt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=vo(e),o!==null){for(t.flags|=128,Qr(r,!1),e=o.updateQueue,t.updateQueue=e,Eo(t,e),t.subtreeFlags=0,e=l,l=t.child;l!==null;)Od(l,e),l=l.sibling;return P(vt,vt.current&1|2),t.child}e=e.sibling}r.tail!==null&&Qe()>No&&(t.flags|=128,n=!0,Qr(r,!1),t.lanes=4194304)}else{if(!n)if(e=vo(o),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Eo(t,e),Qr(r,!0),r.tail===null&&r.tailMode==="hidden"&&!o.alternate&&!Ce)return tt(t),null}else 2*Qe()-r.renderingStartTime>No&&l!==536870912&&(t.flags|=128,n=!0,Qr(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e!==null?e.sibling=o:t.child=o,r.last=o)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=Qe(),t.sibling=null,e=vt.current,P(vt,n?e&1|2:e&1),t):(tt(t),null);case 22:case 23:return tl(t),dc(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(l&536870912)!==0&&(t.flags&128)===0&&(tt(t),t.subtreeFlags&6&&(t.flags|=8192)):tt(t),l=t.updateQueue,l!==null&&Eo(t,l.retryQueue),l=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==l&&(t.flags|=2048),e!==null&&X(en),null;case 24:return l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Ia(gt),tt(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function dy(e,t){switch(Ju(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ia(gt),Je(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Pe(t),null;case 13:if(tl(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));Or()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return X(vt),null;case 4:return Je(),null;case 10:return Ia(t.type),null;case 22:case 23:return tl(t),dc(),e!==null&&X(en),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ia(gt),null;case 25:return null;default:return null}}function nm(e,t){switch(Ju(t),t.tag){case 3:Ia(gt),Je();break;case 26:case 27:case 5:Pe(t);break;case 4:Je();break;case 13:tl(t);break;case 19:X(vt);break;case 10:Ia(t.type);break;case 22:case 23:tl(t),dc(),e!==null&&X(en);break;case 24:Ia(gt)}}function Zr(e,t){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var r=n.next;l=r;do{if((l.tag&e)===e){n=void 0;var o=l.create,f=l.inst;n=o(),f.destroy=n}l=l.next}while(l!==r)}}catch(p){Ye(t,t.return,p)}}function $l(e,t,l){try{var n=t.updateQueue,r=n!==null?n.lastEffect:null;if(r!==null){var o=r.next;n=o;do{if((n.tag&e)===e){var f=n.inst,p=f.destroy;if(p!==void 0){f.destroy=void 0,r=t;var _=l,O=p;try{O()}catch(k){Ye(r,_,k)}}}n=n.next}while(n!==o)}}catch(k){Ye(t,t.return,k)}}function rm(e){var t=e.updateQueue;if(t!==null){var l=e.stateNode;try{Xd(t,l)}catch(n){Ye(e,e.return,n)}}}function im(e,t,l){l.props=an(e.type,e.memoizedProps),l.state=e.memoizedState;try{l.componentWillUnmount()}catch(n){Ye(e,t,n)}}function Fr(e,t){try{var l=e.ref;if(l!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof l=="function"?e.refCleanup=l(n):l.current=n}}catch(r){Ye(e,t,r)}}function za(e,t){var l=e.ref,n=e.refCleanup;if(l!==null)if(typeof n=="function")try{n()}catch(r){Ye(e,t,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(r){Ye(e,t,r)}else l.current=null}function om(e){var t=e.type,l=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break e;case"img":l.src?n.src=l.src:l.srcSet&&(n.srcset=l.srcSet)}}catch(r){Ye(e,e.return,r)}}function kc(e,t,l){try{var n=e.stateNode;By(n,e.type,l,t),n[At]=t}catch(r){Ye(e,e.return,r)}}function um(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ol(e.type)||e.tag===4}function qc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||um(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ol(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Yc(e,t,l){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(e,t):(t=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,t.appendChild(e),l=l._reactRootContainer,l!=null||t.onclick!==null||(t.onclick=Ro));else if(n!==4&&(n===27&&Ol(e.type)&&(l=e.stateNode,t=null),e=e.child,e!==null))for(Yc(e,t,l),e=e.sibling;e!==null;)Yc(e,t,l),e=e.sibling}function $o(e,t,l){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?l.insertBefore(e,t):l.appendChild(e);else if(n!==4&&(n===27&&Ol(e.type)&&(l=e.stateNode),e=e.child,e!==null))for($o(e,t,l),e=e.sibling;e!==null;)$o(e,t,l),e=e.sibling}function cm(e){var t=e.stateNode,l=e.memoizedProps;try{for(var n=e.type,r=t.attributes;r.length;)t.removeAttributeNode(r[0]);Tt(t,n,l),t[et]=e,t[At]=l}catch(o){Ye(e,e.return,o)}}var nl=!1,ot=!1,Vc=!1,sm=typeof WeakSet=="function"?WeakSet:Set,xt=null;function hy(e,t){if(e=e.containerInfo,hs=qo,e=Sd(e),qu(e)){if("selectionStart"in e)var l={start:e.selectionStart,end:e.selectionEnd};else e:{l=(l=e.ownerDocument)&&l.defaultView||window;var n=l.getSelection&&l.getSelection();if(n&&n.rangeCount!==0){l=n.anchorNode;var r=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{l.nodeType,o.nodeType}catch{l=null;break e}var f=0,p=-1,_=-1,O=0,k=0,V=e,z=null;t:for(;;){for(var H;V!==l||r!==0&&V.nodeType!==3||(p=f+r),V!==o||n!==0&&V.nodeType!==3||(_=f+n),V.nodeType===3&&(f+=V.nodeValue.length),(H=V.firstChild)!==null;)z=V,V=H;for(;;){if(V===e)break t;if(z===l&&++O===r&&(p=f),z===o&&++k===n&&(_=f),(H=V.nextSibling)!==null)break;V=z,z=V.parentNode}V=H}l=p===-1||_===-1?null:{start:p,end:_}}else l=null}l=l||{start:0,end:0}}else l=null;for(ms={focusedElem:e,selectionRange:l},qo=!1,xt=t;xt!==null;)if(t=xt,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,xt=e;else for(;xt!==null;){switch(t=xt,o=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&o!==null){e=void 0,l=t,r=o.memoizedProps,o=o.memoizedState,n=l.stateNode;try{var he=an(l.type,r,l.elementType===l.type);e=n.getSnapshotBeforeUpdate(he,o),n.__reactInternalSnapshotBeforeUpdate=e}catch(fe){Ye(l,l.return,fe)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,l=e.nodeType,l===9)vs(e);else if(l===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":vs(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,xt=e;break}xt=t.return}}function fm(e,t,l){var n=l.flags;switch(l.tag){case 0:case 11:case 15:_l(e,l),n&4&&Zr(5,l);break;case 1:if(_l(e,l),n&4)if(e=l.stateNode,t===null)try{e.componentDidMount()}catch(f){Ye(l,l.return,f)}else{var r=an(l.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(r,t,e.__reactInternalSnapshotBeforeUpdate)}catch(f){Ye(l,l.return,f)}}n&64&&rm(l),n&512&&Fr(l,l.return);break;case 3:if(_l(e,l),n&64&&(e=l.updateQueue,e!==null)){if(t=null,l.child!==null)switch(l.child.tag){case 27:case 5:t=l.child.stateNode;break;case 1:t=l.child.stateNode}try{Xd(e,t)}catch(f){Ye(l,l.return,f)}}break;case 27:t===null&&n&4&&cm(l);case 26:case 5:_l(e,l),t===null&&n&4&&om(l),n&512&&Fr(l,l.return);break;case 12:_l(e,l);break;case 13:_l(e,l),n&4&&mm(e,l),n&64&&(e=l.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(l=Ey.bind(null,l),ky(e,l))));break;case 22:if(n=l.memoizedState!==null||nl,!n){t=t!==null&&t.memoizedState!==null||ot,r=nl;var o=ot;nl=n,(ot=t)&&!o?Nl(e,l,(l.subtreeFlags&8772)!==0):_l(e,l),nl=r,ot=o}break;case 30:break;default:_l(e,l)}}function dm(e){var t=e.alternate;t!==null&&(e.alternate=null,dm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&vr(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var We=null,qt=!1;function rl(e,t,l){for(l=l.child;l!==null;)hm(e,t,l),l=l.sibling}function hm(e,t,l){if(yt&&typeof yt.onCommitFiberUnmount=="function")try{yt.onCommitFiberUnmount(Aa,l)}catch{}switch(l.tag){case 26:ot||za(l,t),rl(e,t,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:ot||za(l,t);var n=We,r=qt;Ol(l.type)&&(We=l.stateNode,qt=!1),rl(e,t,l),ni(l.stateNode),We=n,qt=r;break;case 5:ot||za(l,t);case 6:if(n=We,r=qt,We=null,rl(e,t,l),We=n,qt=r,We!==null)if(qt)try{(We.nodeType===9?We.body:We.nodeName==="HTML"?We.ownerDocument.body:We).removeChild(l.stateNode)}catch(o){Ye(l,t,o)}else try{We.removeChild(l.stateNode)}catch(o){Ye(l,t,o)}break;case 18:We!==null&&(qt?(e=We,t0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,l.stateNode),di(e)):t0(We,l.stateNode));break;case 4:n=We,r=qt,We=l.stateNode.containerInfo,qt=!0,rl(e,t,l),We=n,qt=r;break;case 0:case 11:case 14:case 15:ot||$l(2,l,t),ot||$l(4,l,t),rl(e,t,l);break;case 1:ot||(za(l,t),n=l.stateNode,typeof n.componentWillUnmount=="function"&&im(l,t,n)),rl(e,t,l);break;case 21:rl(e,t,l);break;case 22:ot=(n=ot)||l.memoizedState!==null,rl(e,t,l),ot=n;break;default:rl(e,t,l)}}function mm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{di(e)}catch(l){Ye(t,t.return,l)}}function my(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new sm),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new sm),t;default:throw Error(c(435,e.tag))}}function Pc(e,t){var l=my(e);t.forEach(function(n){var r=$y.bind(null,e,n);l.has(n)||(l.add(n),n.then(r,r))})}function Zt(e,t){var l=t.deletions;if(l!==null)for(var n=0;n<l.length;n++){var r=l[n],o=e,f=t,p=f;e:for(;p!==null;){switch(p.tag){case 27:if(Ol(p.type)){We=p.stateNode,qt=!1;break e}break;case 5:We=p.stateNode,qt=!1;break e;case 3:case 4:We=p.stateNode.containerInfo,qt=!0;break e}p=p.return}if(We===null)throw Error(c(160));hm(o,f,r),We=null,qt=!1,o=r.alternate,o!==null&&(o.return=null),r.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)pm(t,e),t=t.sibling}var Na=null;function pm(e,t){var l=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Zt(t,e),Ft(e),n&4&&($l(3,e,e.return),Zr(3,e),$l(5,e,e.return));break;case 1:Zt(t,e),Ft(e),n&512&&(ot||l===null||za(l,l.return)),n&64&&nl&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(l=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=l===null?n:l.concat(n))));break;case 26:var r=Na;if(Zt(t,e),Ft(e),n&512&&(ot||l===null||za(l,l.return)),n&4){var o=l!==null?l.memoizedState:null;if(n=e.memoizedState,l===null)if(n===null)if(e.stateNode===null){e:{n=e.type,l=e.memoizedProps,r=r.ownerDocument||r;t:switch(n){case"title":o=r.getElementsByTagName("title")[0],(!o||o[Ct]||o[et]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=r.createElement(n),r.head.insertBefore(o,r.querySelector("head > title"))),Tt(o,n,l),o[et]=e,ct(o),n=o;break e;case"link":var f=c0("link","href",r).get(n+(l.href||""));if(f){for(var p=0;p<f.length;p++)if(o=f[p],o.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&o.getAttribute("rel")===(l.rel==null?null:l.rel)&&o.getAttribute("title")===(l.title==null?null:l.title)&&o.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){f.splice(p,1);break t}}o=r.createElement(n),Tt(o,n,l),r.head.appendChild(o);break;case"meta":if(f=c0("meta","content",r).get(n+(l.content||""))){for(p=0;p<f.length;p++)if(o=f[p],o.getAttribute("content")===(l.content==null?null:""+l.content)&&o.getAttribute("name")===(l.name==null?null:l.name)&&o.getAttribute("property")===(l.property==null?null:l.property)&&o.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&o.getAttribute("charset")===(l.charSet==null?null:l.charSet)){f.splice(p,1);break t}}o=r.createElement(n),Tt(o,n,l),r.head.appendChild(o);break;default:throw Error(c(468,n))}o[et]=e,ct(o),n=o}e.stateNode=n}else s0(r,e.type,e.stateNode);else e.stateNode=u0(r,n,e.memoizedProps);else o!==n?(o===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):o.count--,n===null?s0(r,e.type,e.stateNode):u0(r,n,e.memoizedProps)):n===null&&e.stateNode!==null&&kc(e,e.memoizedProps,l.memoizedProps)}break;case 27:Zt(t,e),Ft(e),n&512&&(ot||l===null||za(l,l.return)),l!==null&&n&4&&kc(e,e.memoizedProps,l.memoizedProps);break;case 5:if(Zt(t,e),Ft(e),n&512&&(ot||l===null||za(l,l.return)),e.flags&32){r=e.stateNode;try{Qa(r,"")}catch(H){Ye(e,e.return,H)}}n&4&&e.stateNode!=null&&(r=e.memoizedProps,kc(e,r,l!==null?l.memoizedProps:r)),n&1024&&(Vc=!0);break;case 6:if(Zt(t,e),Ft(e),n&4){if(e.stateNode===null)throw Error(c(162));n=e.memoizedProps,l=e.stateNode;try{l.nodeValue=n}catch(H){Ye(e,e.return,H)}}break;case 3:if(Lo=null,r=Na,Na=Ho(t.containerInfo),Zt(t,e),Na=r,Ft(e),n&4&&l!==null&&l.memoizedState.isDehydrated)try{di(t.containerInfo)}catch(H){Ye(e,e.return,H)}Vc&&(Vc=!1,gm(e));break;case 4:n=Na,Na=Ho(e.stateNode.containerInfo),Zt(t,e),Ft(e),Na=n;break;case 12:Zt(t,e),Ft(e);break;case 13:Zt(t,e),Ft(e),e.child.flags&8192&&e.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Kc=Qe()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Pc(e,n)));break;case 22:r=e.memoizedState!==null;var _=l!==null&&l.memoizedState!==null,O=nl,k=ot;if(nl=O||r,ot=k||_,Zt(t,e),ot=k,nl=O,Ft(e),n&8192)e:for(t=e.stateNode,t._visibility=r?t._visibility&-2:t._visibility|1,r&&(l===null||_||nl||ot||ln(e)),l=null,t=e;;){if(t.tag===5||t.tag===26){if(l===null){_=l=t;try{if(o=_.stateNode,r)f=o.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{p=_.stateNode;var V=_.memoizedProps.style,z=V!=null&&V.hasOwnProperty("display")?V.display:null;p.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch(H){Ye(_,_.return,H)}}}else if(t.tag===6){if(l===null){_=t;try{_.stateNode.nodeValue=r?"":_.memoizedProps}catch(H){Ye(_,_.return,H)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;l===t&&(l=null),t=t.return}l===t&&(l=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(l=n.retryQueue,l!==null&&(n.retryQueue=null,Pc(e,l))));break;case 19:Zt(t,e),Ft(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Pc(e,n)));break;case 30:break;case 21:break;default:Zt(t,e),Ft(e)}}function Ft(e){var t=e.flags;if(t&2){try{for(var l,n=e.return;n!==null;){if(um(n)){l=n;break}n=n.return}if(l==null)throw Error(c(160));switch(l.tag){case 27:var r=l.stateNode,o=qc(e);$o(e,o,r);break;case 5:var f=l.stateNode;l.flags&32&&(Qa(f,""),l.flags&=-33);var p=qc(e);$o(e,p,f);break;case 3:case 4:var _=l.stateNode.containerInfo,O=qc(e);Yc(e,O,_);break;default:throw Error(c(161))}}catch(k){Ye(e,e.return,k)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function gm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;gm(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function _l(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)fm(e,t.alternate,t),t=t.sibling}function ln(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:$l(4,t,t.return),ln(t);break;case 1:za(t,t.return);var l=t.stateNode;typeof l.componentWillUnmount=="function"&&im(t,t.return,l),ln(t);break;case 27:ni(t.stateNode);case 26:case 5:za(t,t.return),ln(t);break;case 22:t.memoizedState===null&&ln(t);break;case 30:ln(t);break;default:ln(t)}e=e.sibling}}function Nl(e,t,l){for(l=l&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,r=e,o=t,f=o.flags;switch(o.tag){case 0:case 11:case 15:Nl(r,o,l),Zr(4,o);break;case 1:if(Nl(r,o,l),n=o,r=n.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(O){Ye(n,n.return,O)}if(n=o,r=n.updateQueue,r!==null){var p=n.stateNode;try{var _=r.shared.hiddenCallbacks;if(_!==null)for(r.shared.hiddenCallbacks=null,r=0;r<_.length;r++)Gd(_[r],p)}catch(O){Ye(n,n.return,O)}}l&&f&64&&rm(o),Fr(o,o.return);break;case 27:cm(o);case 26:case 5:Nl(r,o,l),l&&n===null&&f&4&&om(o),Fr(o,o.return);break;case 12:Nl(r,o,l);break;case 13:Nl(r,o,l),l&&f&4&&mm(r,o);break;case 22:o.memoizedState===null&&Nl(r,o,l),Fr(o,o.return);break;case 30:break;default:Nl(r,o,l)}t=t.sibling}}function Gc(e,t){var l=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==l&&(e!=null&&e.refCount++,l!=null&&Rr(l))}function Xc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Rr(e))}function Ha(e,t,l,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)vm(e,t,l,n),t=t.sibling}function vm(e,t,l,n){var r=t.flags;switch(t.tag){case 0:case 11:case 15:Ha(e,t,l,n),r&2048&&Zr(9,t);break;case 1:Ha(e,t,l,n);break;case 3:Ha(e,t,l,n),r&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Rr(e)));break;case 12:if(r&2048){Ha(e,t,l,n),e=t.stateNode;try{var o=t.memoizedProps,f=o.id,p=o.onPostCommit;typeof p=="function"&&p(f,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(_){Ye(t,t.return,_)}}else Ha(e,t,l,n);break;case 13:Ha(e,t,l,n);break;case 23:break;case 22:o=t.stateNode,f=t.alternate,t.memoizedState!==null?o._visibility&2?Ha(e,t,l,n):Kr(e,t):o._visibility&2?Ha(e,t,l,n):(o._visibility|=2,Yn(e,t,l,n,(t.subtreeFlags&10256)!==0)),r&2048&&Gc(f,t);break;case 24:Ha(e,t,l,n),r&2048&&Xc(t.alternate,t);break;default:Ha(e,t,l,n)}}function Yn(e,t,l,n,r){for(r=r&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var o=e,f=t,p=l,_=n,O=f.flags;switch(f.tag){case 0:case 11:case 15:Yn(o,f,p,_,r),Zr(8,f);break;case 23:break;case 22:var k=f.stateNode;f.memoizedState!==null?k._visibility&2?Yn(o,f,p,_,r):Kr(o,f):(k._visibility|=2,Yn(o,f,p,_,r)),r&&O&2048&&Gc(f.alternate,f);break;case 24:Yn(o,f,p,_,r),r&&O&2048&&Xc(f.alternate,f);break;default:Yn(o,f,p,_,r)}t=t.sibling}}function Kr(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var l=e,n=t,r=n.flags;switch(n.tag){case 22:Kr(l,n),r&2048&&Gc(n.alternate,n);break;case 24:Kr(l,n),r&2048&&Xc(n.alternate,n);break;default:Kr(l,n)}t=t.sibling}}var Wr=8192;function Vn(e){if(e.subtreeFlags&Wr)for(e=e.child;e!==null;)ym(e),e=e.sibling}function ym(e){switch(e.tag){case 26:Vn(e),e.flags&Wr&&e.memoizedState!==null&&Iy(Na,e.memoizedState,e.memoizedProps);break;case 5:Vn(e);break;case 3:case 4:var t=Na;Na=Ho(e.stateNode.containerInfo),Vn(e),Na=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Wr,Wr=16777216,Vn(e),Wr=t):Vn(e));break;default:Vn(e)}}function bm(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Jr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var n=t[l];xt=n,Sm(n,e)}bm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)xm(e),e=e.sibling}function xm(e){switch(e.tag){case 0:case 11:case 15:Jr(e),e.flags&2048&&$l(9,e,e.return);break;case 3:Jr(e);break;case 12:Jr(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,_o(e)):Jr(e);break;default:Jr(e)}}function _o(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var n=t[l];xt=n,Sm(n,e)}bm(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:$l(8,t,t.return),_o(t);break;case 22:l=t.stateNode,l._visibility&2&&(l._visibility&=-3,_o(t));break;default:_o(t)}e=e.sibling}}function Sm(e,t){for(;xt!==null;){var l=xt;switch(l.tag){case 0:case 11:case 15:$l(8,l,t);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var n=l.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:Rr(l.memoizedState.cache)}if(n=l.child,n!==null)n.return=l,xt=n;else e:for(l=e;xt!==null;){n=xt;var r=n.sibling,o=n.return;if(dm(n),n===l){xt=null;break e}if(r!==null){r.return=o,xt=r;break e}xt=o}}}var py={getCacheForType:function(e){var t=Ot(gt),l=t.data.get(e);return l===void 0&&(l=e(),t.data.set(e,l)),l}},gy=typeof WeakMap=="function"?WeakMap:Map,ze=0,Ge=null,$e=null,Te=0,He=0,Kt=null,wl=!1,Pn=!1,Qc=!1,il=0,rt=0,Tl=0,nn=0,Zc=0,ha=0,Gn=0,Ir=null,Yt=null,Fc=!1,Kc=0,No=1/0,wo=null,Ml=null,wt=0,Al=null,Xn=null,Qn=0,Wc=0,Jc=null,Em=null,ei=0,Ic=null;function Wt(){if((ze&2)!==0&&Te!==0)return Te&-Te;if(U.T!==null){var e=Rn;return e!==0?e:is()}return Yl()}function $m(){ha===0&&(ha=(Te&536870912)===0||Ce?Gt():536870912);var e=da.current;return e!==null&&(e.flags|=32),ha}function Jt(e,t,l){(e===Ge&&(He===2||He===9)||e.cancelPendingCommit!==null)&&(Zn(e,0),Cl(e,Te,ha,!1)),Ca(e,l),((ze&2)===0||e!==Ge)&&(e===Ge&&((ze&2)===0&&(nn|=l),rt===4&&Cl(e,Te,ha,!1)),ja(e))}function _m(e,t,l){if((ze&6)!==0)throw Error(c(327));var n=!l&&(t&124)===0&&(t&e.expiredLanes)===0||we(e,t),r=n?by(e,t):as(e,t,!0),o=n;do{if(r===0){Pn&&!n&&Cl(e,t,0,!1);break}else{if(l=e.current.alternate,o&&!vy(l)){r=as(e,t,!1),o=!1;continue}if(r===2){if(o=t,e.errorRecoveryDisabledLanes&o)var f=0;else f=e.pendingLanes&-536870913,f=f!==0?f:f&536870912?536870912:0;if(f!==0){t=f;e:{var p=e;r=Ir;var _=p.current.memoizedState.isDehydrated;if(_&&(Zn(p,f).flags|=256),f=as(p,f,!1),f!==2){if(Qc&&!_){p.errorRecoveryDisabledLanes|=o,nn|=o,r=4;break e}o=Yt,Yt=r,o!==null&&(Yt===null?Yt=o:Yt.push.apply(Yt,o))}r=f}if(o=!1,r!==2)continue}}if(r===1){Zn(e,0),Cl(e,t,0,!0);break}e:{switch(n=e,o=r,o){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:Cl(n,t,ha,!wl);break e;case 2:Yt=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(r=Kc+300-Qe(),10<r)){if(Cl(n,t,ha,!wl),Vt(n,0,!0)!==0)break e;n.timeoutHandle=Im(Nm.bind(null,n,l,Yt,wo,Fc,t,ha,nn,Gn,wl,o,2,-0,0),r);break e}Nm(n,l,Yt,wo,Fc,t,ha,nn,Gn,wl,o,0,-0,0)}}break}while(!0);ja(e)}function Nm(e,t,l,n,r,o,f,p,_,O,k,V,z,H){if(e.timeoutHandle=-1,V=t.subtreeFlags,(V&8192||(V&16785408)===16785408)&&(oi={stylesheets:null,count:0,unsuspend:Jy},ym(t),V=e1(),V!==null)){e.cancelPendingCommit=V(Dm.bind(null,e,t,o,l,n,r,f,p,_,k,1,z,H)),Cl(e,o,f,!O);return}Dm(e,t,o,l,n,r,f,p,_)}function vy(e){for(var t=e;;){var l=t.tag;if((l===0||l===11||l===15)&&t.flags&16384&&(l=t.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var n=0;n<l.length;n++){var r=l[n],o=r.getSnapshot;r=r.value;try{if(!Xt(o(),r))return!1}catch{return!1}}if(l=t.child,t.subtreeFlags&16384&&l!==null)l.return=t,t=l;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Cl(e,t,l,n){t&=~Zc,t&=~nn,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var r=t;0<r;){var o=31-ut(r),f=1<<o;n[o]=-1,r&=~f}l!==0&&la(e,l,t)}function To(){return(ze&6)===0?(ti(0),!1):!0}function es(){if($e!==null){if(He===0)var e=$e.return;else e=$e,Ja=Jl=null,vc(e),kn=null,Gr=0,e=$e;for(;e!==null;)nm(e.alternate,e),e=e.return;$e=null}}function Zn(e,t){var l=e.timeoutHandle;l!==-1&&(e.timeoutHandle=-1,zy(l)),l=e.cancelPendingCommit,l!==null&&(e.cancelPendingCommit=null,l()),es(),Ge=e,$e=l=Fa(e.current,null),Te=t,He=0,Kt=null,wl=!1,Pn=we(e,t),Qc=!1,Gn=ha=Zc=nn=Tl=rt=0,Yt=Ir=null,Fc=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var r=31-ut(n),o=1<<r;t|=e[r],n&=~o}return il=t,Zi(),l}function wm(e,t){Se=null,U.H=mo,t===Hr||t===lo?(t=Vd(),He=3):t===kd?(t=Vd(),He=4):He=t===Ph?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Kt=t,$e===null&&(rt=1,bo(e,ua(t,e.current)))}function Tm(){var e=U.H;return U.H=mo,e===null?mo:e}function Mm(){var e=U.A;return U.A=py,e}function ts(){rt=4,wl||(Te&4194048)!==Te&&da.current!==null||(Pn=!0),(Tl&134217727)===0&&(nn&134217727)===0||Ge===null||Cl(Ge,Te,ha,!1)}function as(e,t,l){var n=ze;ze|=2;var r=Tm(),o=Mm();(Ge!==e||Te!==t)&&(wo=null,Zn(e,t)),t=!1;var f=rt;e:do try{if(He!==0&&$e!==null){var p=$e,_=Kt;switch(He){case 8:es(),f=6;break e;case 3:case 2:case 9:case 6:da.current===null&&(t=!0);var O=He;if(He=0,Kt=null,Fn(e,p,_,O),l&&Pn){f=0;break e}break;default:O=He,He=0,Kt=null,Fn(e,p,_,O)}}yy(),f=rt;break}catch(k){wm(e,k)}while(!0);return t&&e.shellSuspendCounter++,Ja=Jl=null,ze=n,U.H=r,U.A=o,$e===null&&(Ge=null,Te=0,Zi()),f}function yy(){for(;$e!==null;)Am($e)}function by(e,t){var l=ze;ze|=2;var n=Tm(),r=Mm();Ge!==e||Te!==t?(wo=null,No=Qe()+500,Zn(e,t)):Pn=we(e,t);e:do try{if(He!==0&&$e!==null){t=$e;var o=Kt;t:switch(He){case 1:He=0,Kt=null,Fn(e,t,o,1);break;case 2:case 9:if(qd(o)){He=0,Kt=null,Cm(t);break}t=function(){He!==2&&He!==9||Ge!==e||(He=7),ja(e)},o.then(t,t);break e;case 3:He=7;break e;case 4:He=5;break e;case 7:qd(o)?(He=0,Kt=null,Cm(t)):(He=0,Kt=null,Fn(e,t,o,7));break;case 5:var f=null;switch($e.tag){case 26:f=$e.memoizedState;case 5:case 27:var p=$e;if(!f||f0(f)){He=0,Kt=null;var _=p.sibling;if(_!==null)$e=_;else{var O=p.return;O!==null?($e=O,Mo(O)):$e=null}break t}}He=0,Kt=null,Fn(e,t,o,5);break;case 6:He=0,Kt=null,Fn(e,t,o,6);break;case 8:es(),rt=6;break e;default:throw Error(c(462))}}xy();break}catch(k){wm(e,k)}while(!0);return Ja=Jl=null,U.H=n,U.A=r,ze=l,$e!==null?0:(Ge=null,Te=0,Zi(),rt)}function xy(){for(;$e!==null&&!Va();)Am($e)}function Am(e){var t=am(e.alternate,e,il);e.memoizedProps=e.pendingProps,t===null?Mo(e):$e=t}function Cm(e){var t=e,l=t.alternate;switch(t.tag){case 15:case 0:t=Kh(l,t,t.pendingProps,t.type,void 0,Te);break;case 11:t=Kh(l,t,t.pendingProps,t.type.render,t.ref,Te);break;case 5:vc(t);default:nm(l,t),t=$e=Od(t,il),t=am(l,t,il)}e.memoizedProps=e.pendingProps,t===null?Mo(e):$e=t}function Fn(e,t,l,n){Ja=Jl=null,vc(t),kn=null,Gr=0;var r=t.return;try{if(cy(e,r,t,l,Te)){rt=1,bo(e,ua(l,e.current)),$e=null;return}}catch(o){if(r!==null)throw $e=r,o;rt=1,bo(e,ua(l,e.current)),$e=null;return}t.flags&32768?(Ce||n===1?e=!0:Pn||(Te&536870912)!==0?e=!1:(wl=e=!0,(n===2||n===9||n===3||n===6)&&(n=da.current,n!==null&&n.tag===13&&(n.flags|=16384))),Om(t,e)):Mo(t)}function Mo(e){var t=e;do{if((t.flags&32768)!==0){Om(t,wl);return}e=t.return;var l=fy(t.alternate,t,il);if(l!==null){$e=l;return}if(t=t.sibling,t!==null){$e=t;return}$e=t=e}while(t!==null);rt===0&&(rt=5)}function Om(e,t){do{var l=dy(e.alternate,e);if(l!==null){l.flags&=32767,$e=l;return}if(l=e.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!t&&(e=e.sibling,e!==null)){$e=e;return}$e=e=l}while(e!==null);rt=6,$e=null}function Dm(e,t,l,n,r,o,f,p,_){e.cancelPendingCommit=null;do Ao();while(wt!==0);if((ze&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(o=t.lanes|t.childLanes,o|=Xu,pr(e,l,o,f,p,_),e===Ge&&($e=Ge=null,Te=0),Xn=t,Al=e,Qn=l,Wc=o,Jc=r,Em=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,_y(ea,function(){return jm(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=U.T,U.T=null,r=K.p,K.p=2,f=ze,ze|=4;try{hy(e,t,l)}finally{ze=f,K.p=r,U.T=n}}wt=1,Bm(),Rm(),zm()}}function Bm(){if(wt===1){wt=0;var e=Al,t=Xn,l=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||l){l=U.T,U.T=null;var n=K.p;K.p=2;var r=ze;ze|=4;try{pm(t,e);var o=ms,f=Sd(e.containerInfo),p=o.focusedElem,_=o.selectionRange;if(f!==p&&p&&p.ownerDocument&&xd(p.ownerDocument.documentElement,p)){if(_!==null&&qu(p)){var O=_.start,k=_.end;if(k===void 0&&(k=O),"selectionStart"in p)p.selectionStart=O,p.selectionEnd=Math.min(k,p.value.length);else{var V=p.ownerDocument||document,z=V&&V.defaultView||window;if(z.getSelection){var H=z.getSelection(),he=p.textContent.length,fe=Math.min(_.start,he),ke=_.end===void 0?fe:Math.min(_.end,he);!H.extend&&fe>ke&&(f=ke,ke=fe,fe=f);var A=bd(p,fe),T=bd(p,ke);if(A&&T&&(H.rangeCount!==1||H.anchorNode!==A.node||H.anchorOffset!==A.offset||H.focusNode!==T.node||H.focusOffset!==T.offset)){var C=V.createRange();C.setStart(A.node,A.offset),H.removeAllRanges(),fe>ke?(H.addRange(C),H.extend(T.node,T.offset)):(C.setEnd(T.node,T.offset),H.addRange(C))}}}}for(V=[],H=p;H=H.parentNode;)H.nodeType===1&&V.push({element:H,left:H.scrollLeft,top:H.scrollTop});for(typeof p.focus=="function"&&p.focus(),p=0;p<V.length;p++){var q=V[p];q.element.scrollLeft=q.left,q.element.scrollTop=q.top}}qo=!!hs,ms=hs=null}finally{ze=r,K.p=n,U.T=l}}e.current=t,wt=2}}function Rm(){if(wt===2){wt=0;var e=Al,t=Xn,l=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||l){l=U.T,U.T=null;var n=K.p;K.p=2;var r=ze;ze|=4;try{fm(e,t.alternate,t)}finally{ze=r,K.p=n,U.T=l}}wt=3}}function zm(){if(wt===4||wt===3){wt=0,$t();var e=Al,t=Xn,l=Qn,n=Em;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?wt=5:(wt=0,Xn=Al=null,Hm(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(Ml=null),Oa(l),t=t.stateNode,yt&&typeof yt.onCommitFiberRoot=="function")try{yt.onCommitFiberRoot(Aa,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=U.T,r=K.p,K.p=2,U.T=null;try{for(var o=e.onRecoverableError,f=0;f<n.length;f++){var p=n[f];o(p.value,{componentStack:p.stack})}}finally{U.T=t,K.p=r}}(Qn&3)!==0&&Ao(),ja(e),r=e.pendingLanes,(l&4194090)!==0&&(r&42)!==0?e===Ic?ei++:(ei=0,Ic=e):ei=0,ti(0)}}function Hm(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Rr(t)))}function Ao(e){return Bm(),Rm(),zm(),jm()}function jm(){if(wt!==5)return!1;var e=Al,t=Wc;Wc=0;var l=Oa(Qn),n=U.T,r=K.p;try{K.p=32>l?32:l,U.T=null,l=Jc,Jc=null;var o=Al,f=Qn;if(wt=0,Xn=Al=null,Qn=0,(ze&6)!==0)throw Error(c(331));var p=ze;if(ze|=4,xm(o.current),vm(o,o.current,f,l),ze=p,ti(0,!1),yt&&typeof yt.onPostCommitFiberRoot=="function")try{yt.onPostCommitFiberRoot(Aa,o)}catch{}return!0}finally{K.p=r,U.T=n,Hm(e,t)}}function Lm(e,t,l){t=ua(l,t),t=Oc(e.stateNode,t,2),e=bl(e,t,2),e!==null&&(Ca(e,2),ja(e))}function Ye(e,t,l){if(e.tag===3)Lm(e,e,l);else for(;t!==null;){if(t.tag===3){Lm(t,e,l);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Ml===null||!Ml.has(n))){e=ua(l,e),l=Yh(2),n=bl(t,l,2),n!==null&&(Vh(l,n,t,e),Ca(n,2),ja(n));break}}t=t.return}}function ls(e,t,l){var n=e.pingCache;if(n===null){n=e.pingCache=new gy;var r=new Set;n.set(t,r)}else r=n.get(t),r===void 0&&(r=new Set,n.set(t,r));r.has(l)||(Qc=!0,r.add(l),e=Sy.bind(null,e,t,l),t.then(e,e))}function Sy(e,t,l){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&l,e.warmLanes&=~l,Ge===e&&(Te&l)===l&&(rt===4||rt===3&&(Te&62914560)===Te&&300>Qe()-Kc?(ze&2)===0&&Zn(e,0):Zc|=l,Gn===Te&&(Gn=0)),ja(e)}function Um(e,t){t===0&&(t=ta()),e=Cn(e,t),e!==null&&(Ca(e,t),ja(e))}function Ey(e){var t=e.memoizedState,l=0;t!==null&&(l=t.retryLane),Um(e,l)}function $y(e,t){var l=0;switch(e.tag){case 13:var n=e.stateNode,r=e.memoizedState;r!==null&&(l=r.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(c(314))}n!==null&&n.delete(t),Um(e,l)}function _y(e,t){return Rt(e,t)}var Co=null,Kn=null,ns=!1,Oo=!1,rs=!1,rn=0;function ja(e){e!==Kn&&e.next===null&&(Kn===null?Co=Kn=e:Kn=Kn.next=e),Oo=!0,ns||(ns=!0,wy())}function ti(e,t){if(!rs&&Oo){rs=!0;do for(var l=!1,n=Co;n!==null;){if(e!==0){var r=n.pendingLanes;if(r===0)var o=0;else{var f=n.suspendedLanes,p=n.pingedLanes;o=(1<<31-ut(42|e)+1)-1,o&=r&~(f&~p),o=o&201326741?o&201326741|1:o?o|2:0}o!==0&&(l=!0,Vm(n,o))}else o=Te,o=Vt(n,n===Ge?o:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(o&3)===0||we(n,o)||(l=!0,Vm(n,o));n=n.next}while(l);rs=!1}}function Ny(){km()}function km(){Oo=ns=!1;var e=0;rn!==0&&(Ry()&&(e=rn),rn=0);for(var t=Qe(),l=null,n=Co;n!==null;){var r=n.next,o=qm(n,t);o===0?(n.next=null,l===null?Co=r:l.next=r,r===null&&(Kn=l)):(l=n,(e!==0||(o&3)!==0)&&(Oo=!0)),n=r}ti(e)}function qm(e,t){for(var l=e.suspendedLanes,n=e.pingedLanes,r=e.expirationTimes,o=e.pendingLanes&-62914561;0<o;){var f=31-ut(o),p=1<<f,_=r[f];_===-1?((p&l)===0||(p&n)!==0)&&(r[f]=Pt(p,t)):_<=t&&(e.expiredLanes|=p),o&=~p}if(t=Ge,l=Te,l=Vt(e,e===t?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,l===0||e===t&&(He===2||He===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&Ma(n),e.callbackNode=null,e.callbackPriority=0;if((l&3)===0||we(e,l)){if(t=l&-l,t===e.callbackPriority)return t;switch(n!==null&&Ma(n),Oa(l)){case 2:case 8:l=mt;break;case 32:l=ea;break;case 268435456:l=vn;break;default:l=ea}return n=Ym.bind(null,e),l=Rt(l,n),e.callbackPriority=t,e.callbackNode=l,t}return n!==null&&n!==null&&Ma(n),e.callbackPriority=2,e.callbackNode=null,2}function Ym(e,t){if(wt!==0&&wt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var l=e.callbackNode;if(Ao()&&e.callbackNode!==l)return null;var n=Te;return n=Vt(e,e===Ge?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(_m(e,n,t),qm(e,Qe()),e.callbackNode!=null&&e.callbackNode===l?Ym.bind(null,e):null)}function Vm(e,t){if(Ao())return null;_m(e,t,!0)}function wy(){Hy(function(){(ze&6)!==0?Rt(zt,Ny):km()})}function is(){return rn===0&&(rn=Gt()),rn}function Pm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:qi(""+e)}function Gm(e,t){var l=t.ownerDocument.createElement("input");return l.name=t.name,l.value=t.value,e.id&&l.setAttribute("form",e.id),t.parentNode.insertBefore(l,t),e=new FormData(e),l.parentNode.removeChild(l),e}function Ty(e,t,l,n,r){if(t==="submit"&&l&&l.stateNode===r){var o=Pm((r[At]||null).action),f=n.submitter;f&&(t=(t=f[At]||null)?Pm(t.formAction):f.getAttribute("formAction"),t!==null&&(o=t,f=null));var p=new Gi("action","action",null,n,r);e.push({event:p,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(rn!==0){var _=f?Gm(r,f):new FormData(r);wc(l,{pending:!0,data:_,method:r.method,action:o},null,_)}}else typeof o=="function"&&(p.preventDefault(),_=f?Gm(r,f):new FormData(r),wc(l,{pending:!0,data:_,method:r.method,action:o},o,_))},currentTarget:r}]})}}for(var os=0;os<Gu.length;os++){var us=Gu[os],My=us.toLowerCase(),Ay=us[0].toUpperCase()+us.slice(1);_a(My,"on"+Ay)}_a(_d,"onAnimationEnd"),_a(Nd,"onAnimationIteration"),_a(wd,"onAnimationStart"),_a("dblclick","onDoubleClick"),_a("focusin","onFocus"),_a("focusout","onBlur"),_a(Xv,"onTransitionRun"),_a(Qv,"onTransitionStart"),_a(Zv,"onTransitionCancel"),_a(Td,"onTransitionEnd"),ia("onMouseEnter",["mouseout","mouseover"]),ia("onMouseLeave",["mouseout","mouseover"]),ia("onPointerEnter",["pointerout","pointerover"]),ia("onPointerLeave",["pointerout","pointerover"]),xa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),xa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),xa("onBeforeInput",["compositionend","keypress","textInput","paste"]),xa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),xa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),xa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ai="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Cy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ai));function Xm(e,t){t=(t&4)!==0;for(var l=0;l<e.length;l++){var n=e[l],r=n.event;n=n.listeners;e:{var o=void 0;if(t)for(var f=n.length-1;0<=f;f--){var p=n[f],_=p.instance,O=p.currentTarget;if(p=p.listener,_!==o&&r.isPropagationStopped())break e;o=p,r.currentTarget=O;try{o(r)}catch(k){yo(k)}r.currentTarget=null,o=_}else for(f=0;f<n.length;f++){if(p=n[f],_=p.instance,O=p.currentTarget,p=p.listener,_!==o&&r.isPropagationStopped())break e;o=p,r.currentTarget=O;try{o(r)}catch(k){yo(k)}r.currentTarget=null,o=_}}}}function _e(e,t){var l=t[bn];l===void 0&&(l=t[bn]=new Set);var n=e+"__bubble";l.has(n)||(Qm(t,e,2,!1),l.add(n))}function cs(e,t,l){var n=0;t&&(n|=4),Qm(l,e,n,t)}var Do="_reactListening"+Math.random().toString(36).slice(2);function ss(e){if(!e[Do]){e[Do]=!0,Bi.forEach(function(l){l!=="selectionchange"&&(Cy.has(l)||cs(l,!1,e),cs(l,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Do]||(t[Do]=!0,cs("selectionchange",!1,t))}}function Qm(e,t,l,n){switch(v0(t)){case 2:var r=l1;break;case 8:r=n1;break;default:r=_s}l=r.bind(null,t,l,e),r=void 0,!Du||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),n?r!==void 0?e.addEventListener(t,l,{capture:!0,passive:r}):e.addEventListener(t,l,!0):r!==void 0?e.addEventListener(t,l,{passive:r}):e.addEventListener(t,l,!1)}function fs(e,t,l,n,r){var o=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var f=n.tag;if(f===3||f===4){var p=n.stateNode.containerInfo;if(p===r)break;if(f===4)for(f=n.return;f!==null;){var _=f.tag;if((_===3||_===4)&&f.stateNode.containerInfo===r)return;f=f.return}for(;p!==null;){if(f=Ga(p),f===null)return;if(_=f.tag,_===5||_===6||_===26||_===27){n=o=f;continue e}p=p.parentNode}}n=n.return}ed(function(){var O=o,k=Cu(l),V=[];e:{var z=Md.get(e);if(z!==void 0){var H=Gi,he=e;switch(e){case"keypress":if(Vi(l)===0)break e;case"keydown":case"keyup":H=_v;break;case"focusin":he="focus",H=Hu;break;case"focusout":he="blur",H=Hu;break;case"beforeblur":case"afterblur":H=Hu;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":H=ld;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":H=dv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":H=Tv;break;case _d:case Nd:case wd:H=pv;break;case Td:H=Av;break;case"scroll":case"scrollend":H=sv;break;case"wheel":H=Ov;break;case"copy":case"cut":case"paste":H=vv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":H=rd;break;case"toggle":case"beforetoggle":H=Bv}var fe=(t&4)!==0,ke=!fe&&(e==="scroll"||e==="scrollend"),A=fe?z!==null?z+"Capture":null:z;fe=[];for(var T=O,C;T!==null;){var q=T;if(C=q.stateNode,q=q.tag,q!==5&&q!==26&&q!==27||C===null||A===null||(q=Sr(T,A),q!=null&&fe.push(li(T,q,C))),ke)break;T=T.return}0<fe.length&&(z=new H(z,he,null,l,k),V.push({event:z,listeners:fe}))}}if((t&7)===0){e:{if(z=e==="mouseover"||e==="pointerover",H=e==="mouseout"||e==="pointerout",z&&l!==Au&&(he=l.relatedTarget||l.fromElement)&&(Ga(he)||he[ba]))break e;if((H||z)&&(z=k.window===k?k:(z=k.ownerDocument)?z.defaultView||z.parentWindow:window,H?(he=l.relatedTarget||l.toElement,H=O,he=he?Ga(he):null,he!==null&&(ke=d(he),fe=he.tag,he!==ke||fe!==5&&fe!==27&&fe!==6)&&(he=null)):(H=null,he=O),H!==he)){if(fe=ld,q="onMouseLeave",A="onMouseEnter",T="mouse",(e==="pointerout"||e==="pointerover")&&(fe=rd,q="onPointerLeave",A="onPointerEnter",T="pointer"),ke=H==null?z:Xa(H),C=he==null?z:Xa(he),z=new fe(q,T+"leave",H,l,k),z.target=ke,z.relatedTarget=C,q=null,Ga(k)===O&&(fe=new fe(A,T+"enter",he,l,k),fe.target=C,fe.relatedTarget=ke,q=fe),ke=q,H&&he)t:{for(fe=H,A=he,T=0,C=fe;C;C=Wn(C))T++;for(C=0,q=A;q;q=Wn(q))C++;for(;0<T-C;)fe=Wn(fe),T--;for(;0<C-T;)A=Wn(A),C--;for(;T--;){if(fe===A||A!==null&&fe===A.alternate)break t;fe=Wn(fe),A=Wn(A)}fe=null}else fe=null;H!==null&&Zm(V,z,H,fe,!1),he!==null&&ke!==null&&Zm(V,ke,he,fe,!0)}}e:{if(z=O?Xa(O):window,H=z.nodeName&&z.nodeName.toLowerCase(),H==="select"||H==="input"&&z.type==="file")var le=hd;else if(fd(z))if(md)le=Vv;else{le=qv;var Ee=kv}else H=z.nodeName,!H||H.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?O&&Mu(O.elementType)&&(le=hd):le=Yv;if(le&&(le=le(e,O))){dd(V,le,l,k);break e}Ee&&Ee(e,z,O),e==="focusout"&&O&&z.type==="number"&&O.memoizedProps.value!=null&&st(z,"number",z.value)}switch(Ee=O?Xa(O):window,e){case"focusin":(fd(Ee)||Ee.contentEditable==="true")&&(Tn=Ee,Yu=O,Ar=null);break;case"focusout":Ar=Yu=Tn=null;break;case"mousedown":Vu=!0;break;case"contextmenu":case"mouseup":case"dragend":Vu=!1,Ed(V,l,k);break;case"selectionchange":if(Gv)break;case"keydown":case"keyup":Ed(V,l,k)}var oe;if(Lu)e:{switch(e){case"compositionstart":var de="onCompositionStart";break e;case"compositionend":de="onCompositionEnd";break e;case"compositionupdate":de="onCompositionUpdate";break e}de=void 0}else wn?cd(e,l)&&(de="onCompositionEnd"):e==="keydown"&&l.keyCode===229&&(de="onCompositionStart");de&&(id&&l.locale!=="ko"&&(wn||de!=="onCompositionStart"?de==="onCompositionEnd"&&wn&&(oe=td()):(pl=k,Bu="value"in pl?pl.value:pl.textContent,wn=!0)),Ee=Bo(O,de),0<Ee.length&&(de=new nd(de,e,null,l,k),V.push({event:de,listeners:Ee}),oe?de.data=oe:(oe=sd(l),oe!==null&&(de.data=oe)))),(oe=zv?Hv(e,l):jv(e,l))&&(de=Bo(O,"onBeforeInput"),0<de.length&&(Ee=new nd("onBeforeInput","beforeinput",null,l,k),V.push({event:Ee,listeners:de}),Ee.data=oe)),Ty(V,e,O,l,k)}Xm(V,t)})}function li(e,t,l){return{instance:e,listener:t,currentTarget:l}}function Bo(e,t){for(var l=t+"Capture",n=[];e!==null;){var r=e,o=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||o===null||(r=Sr(e,l),r!=null&&n.unshift(li(e,r,o)),r=Sr(e,t),r!=null&&n.push(li(e,r,o))),e.tag===3)return n;e=e.return}return[]}function Wn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Zm(e,t,l,n,r){for(var o=t._reactName,f=[];l!==null&&l!==n;){var p=l,_=p.alternate,O=p.stateNode;if(p=p.tag,_!==null&&_===n)break;p!==5&&p!==26&&p!==27||O===null||(_=O,r?(O=Sr(l,o),O!=null&&f.unshift(li(l,O,_))):r||(O=Sr(l,o),O!=null&&f.push(li(l,O,_)))),l=l.return}f.length!==0&&e.push({event:t,listeners:f})}var Oy=/\r\n?/g,Dy=/\u0000|\uFFFD/g;function Fm(e){return(typeof e=="string"?e:""+e).replace(Oy,`
`).replace(Dy,"")}function Km(e,t){return t=Fm(t),Fm(e)===t}function Ro(){}function Ue(e,t,l,n,r,o){switch(l){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||Qa(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&Qa(e,""+n);break;case"className":xn(e,"class",n);break;case"tabIndex":xn(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":xn(e,l,n);break;case"style":Jf(e,n,o);break;case"data":if(t!=="object"){xn(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||l!=="href")){e.removeAttribute(l);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(l);break}n=qi(""+n),e.setAttribute(l,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(l==="formAction"?(t!=="input"&&Ue(e,t,"name",r.name,r,null),Ue(e,t,"formEncType",r.formEncType,r,null),Ue(e,t,"formMethod",r.formMethod,r,null),Ue(e,t,"formTarget",r.formTarget,r,null)):(Ue(e,t,"encType",r.encType,r,null),Ue(e,t,"method",r.method,r,null),Ue(e,t,"target",r.target,r,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(l);break}n=qi(""+n),e.setAttribute(l,n);break;case"onClick":n!=null&&(e.onclick=Ro);break;case"onScroll":n!=null&&_e("scroll",e);break;case"onScrollEnd":n!=null&&_e("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(c(61));if(l=n.__html,l!=null){if(r.children!=null)throw Error(c(60));e.innerHTML=l}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}l=qi(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(l,""+n):e.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(l,""):e.removeAttribute(l);break;case"capture":case"download":n===!0?e.setAttribute(l,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(l,n):e.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(l,n):e.removeAttribute(l);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(l):e.setAttribute(l,n);break;case"popover":_e("beforetoggle",e),_e("toggle",e),hl(e,"popover",n);break;case"xlinkActuate":Sa(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Sa(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Sa(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Sa(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Sa(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Sa(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Sa(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Sa(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Sa(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":hl(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=uv.get(l)||l,hl(e,l,n))}}function ds(e,t,l,n,r,o){switch(l){case"style":Jf(e,n,o);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(c(61));if(l=n.__html,l!=null){if(r.children!=null)throw Error(c(60));e.innerHTML=l}}break;case"children":typeof n=="string"?Qa(e,n):(typeof n=="number"||typeof n=="bigint")&&Qa(e,""+n);break;case"onScroll":n!=null&&_e("scroll",e);break;case"onScrollEnd":n!=null&&_e("scrollend",e);break;case"onClick":n!=null&&(e.onclick=Ro);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ri.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(r=l.endsWith("Capture"),t=l.slice(2,r?l.length-7:void 0),o=e[At]||null,o=o!=null?o[l]:null,typeof o=="function"&&e.removeEventListener(t,o,r),typeof n=="function")){typeof o!="function"&&o!==null&&(l in e?e[l]=null:e.hasAttribute(l)&&e.removeAttribute(l)),e.addEventListener(t,n,r);break e}l in e?e[l]=n:n===!0?e.setAttribute(l,""):hl(e,l,n)}}}function Tt(e,t,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_e("error",e),_e("load",e);var n=!1,r=!1,o;for(o in l)if(l.hasOwnProperty(o)){var f=l[o];if(f!=null)switch(o){case"src":n=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Ue(e,t,o,f,l,null)}}r&&Ue(e,t,"srcSet",l.srcSet,l,null),n&&Ue(e,t,"src",l.src,l,null);return;case"input":_e("invalid",e);var p=o=f=r=null,_=null,O=null;for(n in l)if(l.hasOwnProperty(n)){var k=l[n];if(k!=null)switch(n){case"name":r=k;break;case"type":f=k;break;case"checked":_=k;break;case"defaultChecked":O=k;break;case"value":o=k;break;case"defaultValue":p=k;break;case"children":case"dangerouslySetInnerHTML":if(k!=null)throw Error(c(137,t));break;default:Ue(e,t,n,k,l,null)}}ye(e,o,p,_,O,f,r,!1),En(e);return;case"select":_e("invalid",e),n=f=o=null;for(r in l)if(l.hasOwnProperty(r)&&(p=l[r],p!=null))switch(r){case"value":o=p;break;case"defaultValue":f=p;break;case"multiple":n=p;default:Ue(e,t,r,p,l,null)}t=o,l=f,e.multiple=!!n,t!=null?pt(e,!!n,t,!1):l!=null&&pt(e,!!n,l,!0);return;case"textarea":_e("invalid",e),o=r=n=null;for(f in l)if(l.hasOwnProperty(f)&&(p=l[f],p!=null))switch(f){case"value":n=p;break;case"defaultValue":r=p;break;case"children":o=p;break;case"dangerouslySetInnerHTML":if(p!=null)throw Error(c(91));break;default:Ue(e,t,f,p,l,null)}$a(e,n,r,o),En(e);return;case"option":for(_ in l)if(l.hasOwnProperty(_)&&(n=l[_],n!=null))switch(_){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:Ue(e,t,_,n,l,null)}return;case"dialog":_e("beforetoggle",e),_e("toggle",e),_e("cancel",e),_e("close",e);break;case"iframe":case"object":_e("load",e);break;case"video":case"audio":for(n=0;n<ai.length;n++)_e(ai[n],e);break;case"image":_e("error",e),_e("load",e);break;case"details":_e("toggle",e);break;case"embed":case"source":case"link":_e("error",e),_e("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(O in l)if(l.hasOwnProperty(O)&&(n=l[O],n!=null))switch(O){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Ue(e,t,O,n,l,null)}return;default:if(Mu(t)){for(k in l)l.hasOwnProperty(k)&&(n=l[k],n!==void 0&&ds(e,t,k,n,l,void 0));return}}for(p in l)l.hasOwnProperty(p)&&(n=l[p],n!=null&&Ue(e,t,p,n,l,null))}function By(e,t,l,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,o=null,f=null,p=null,_=null,O=null,k=null;for(H in l){var V=l[H];if(l.hasOwnProperty(H)&&V!=null)switch(H){case"checked":break;case"value":break;case"defaultValue":_=V;default:n.hasOwnProperty(H)||Ue(e,t,H,null,n,V)}}for(var z in n){var H=n[z];if(V=l[z],n.hasOwnProperty(z)&&(H!=null||V!=null))switch(z){case"type":o=H;break;case"name":r=H;break;case"checked":O=H;break;case"defaultChecked":k=H;break;case"value":f=H;break;case"defaultValue":p=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(c(137,t));break;default:H!==V&&Ue(e,t,z,H,n,V)}}ce(e,f,p,_,O,k,o,r);return;case"select":H=f=p=z=null;for(o in l)if(_=l[o],l.hasOwnProperty(o)&&_!=null)switch(o){case"value":break;case"multiple":H=_;default:n.hasOwnProperty(o)||Ue(e,t,o,null,n,_)}for(r in n)if(o=n[r],_=l[r],n.hasOwnProperty(r)&&(o!=null||_!=null))switch(r){case"value":z=o;break;case"defaultValue":p=o;break;case"multiple":f=o;default:o!==_&&Ue(e,t,r,o,n,_)}t=p,l=f,n=H,z!=null?pt(e,!!l,z,!1):!!n!=!!l&&(t!=null?pt(e,!!l,t,!0):pt(e,!!l,l?[]:"",!1));return;case"textarea":H=z=null;for(p in l)if(r=l[p],l.hasOwnProperty(p)&&r!=null&&!n.hasOwnProperty(p))switch(p){case"value":break;case"children":break;default:Ue(e,t,p,null,n,r)}for(f in n)if(r=n[f],o=l[f],n.hasOwnProperty(f)&&(r!=null||o!=null))switch(f){case"value":z=r;break;case"defaultValue":H=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(c(91));break;default:r!==o&&Ue(e,t,f,r,n,o)}oa(e,z,H);return;case"option":for(var he in l)if(z=l[he],l.hasOwnProperty(he)&&z!=null&&!n.hasOwnProperty(he))switch(he){case"selected":e.selected=!1;break;default:Ue(e,t,he,null,n,z)}for(_ in n)if(z=n[_],H=l[_],n.hasOwnProperty(_)&&z!==H&&(z!=null||H!=null))switch(_){case"selected":e.selected=z&&typeof z!="function"&&typeof z!="symbol";break;default:Ue(e,t,_,z,n,H)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var fe in l)z=l[fe],l.hasOwnProperty(fe)&&z!=null&&!n.hasOwnProperty(fe)&&Ue(e,t,fe,null,n,z);for(O in n)if(z=n[O],H=l[O],n.hasOwnProperty(O)&&z!==H&&(z!=null||H!=null))switch(O){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(c(137,t));break;default:Ue(e,t,O,z,n,H)}return;default:if(Mu(t)){for(var ke in l)z=l[ke],l.hasOwnProperty(ke)&&z!==void 0&&!n.hasOwnProperty(ke)&&ds(e,t,ke,void 0,n,z);for(k in n)z=n[k],H=l[k],!n.hasOwnProperty(k)||z===H||z===void 0&&H===void 0||ds(e,t,k,z,n,H);return}}for(var A in l)z=l[A],l.hasOwnProperty(A)&&z!=null&&!n.hasOwnProperty(A)&&Ue(e,t,A,null,n,z);for(V in n)z=n[V],H=l[V],!n.hasOwnProperty(V)||z===H||z==null&&H==null||Ue(e,t,V,z,n,H)}var hs=null,ms=null;function zo(e){return e.nodeType===9?e:e.ownerDocument}function Wm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Jm(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function ps(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var gs=null;function Ry(){var e=window.event;return e&&e.type==="popstate"?e===gs?!1:(gs=e,!0):(gs=null,!1)}var Im=typeof setTimeout=="function"?setTimeout:void 0,zy=typeof clearTimeout=="function"?clearTimeout:void 0,e0=typeof Promise=="function"?Promise:void 0,Hy=typeof queueMicrotask=="function"?queueMicrotask:typeof e0<"u"?function(e){return e0.resolve(null).then(e).catch(jy)}:Im;function jy(e){setTimeout(function(){throw e})}function Ol(e){return e==="head"}function t0(e,t){var l=t,n=0,r=0;do{var o=l.nextSibling;if(e.removeChild(l),o&&o.nodeType===8)if(l=o.data,l==="/$"){if(0<n&&8>n){l=n;var f=e.ownerDocument;if(l&1&&ni(f.documentElement),l&2&&ni(f.body),l&4)for(l=f.head,ni(l),f=l.firstChild;f;){var p=f.nextSibling,_=f.nodeName;f[Ct]||_==="SCRIPT"||_==="STYLE"||_==="LINK"&&f.rel.toLowerCase()==="stylesheet"||l.removeChild(f),f=p}}if(r===0){e.removeChild(o),di(t);return}r--}else l==="$"||l==="$?"||l==="$!"?r++:n=l.charCodeAt(0)-48;else n=0;l=o}while(l);di(t)}function vs(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var l=t;switch(t=t.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":vs(l),vr(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}e.removeChild(l)}}function Ly(e,t,l,n){for(;e.nodeType===1;){var r=l;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[Ct])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(o=e.getAttribute("rel"),o==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(o!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(o=e.getAttribute("src"),(o!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var o=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===o)return e}else return e;if(e=wa(e.nextSibling),e===null)break}return null}function Uy(e,t,l){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!l||(e=wa(e.nextSibling),e===null))return null;return e}function ys(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function ky(e,t){var l=e.ownerDocument;if(e.data!=="$?"||l.readyState==="complete")t();else{var n=function(){t(),l.removeEventListener("DOMContentLoaded",n)};l.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function wa(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var bs=null;function a0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="$"||l==="$!"||l==="$?"){if(t===0)return e;t--}else l==="/$"&&t++}e=e.previousSibling}return null}function l0(e,t,l){switch(t=zo(l),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function ni(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);vr(e)}var ma=new Map,n0=new Set;function Ho(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ol=K.d;K.d={f:qy,r:Yy,D:Vy,C:Py,L:Gy,m:Xy,X:Zy,S:Qy,M:Fy};function qy(){var e=ol.f(),t=To();return e||t}function Yy(e){var t=ra(e);t!==null&&t.tag===5&&t.type==="form"?_h(t):ol.r(e)}var Jn=typeof document>"u"?null:document;function r0(e,t,l){var n=Jn;if(n&&typeof t=="string"&&t){var r=W(t);r='link[rel="'+e+'"][href="'+r+'"]',typeof l=="string"&&(r+='[crossorigin="'+l+'"]'),n0.has(r)||(n0.add(r),e={rel:e,crossOrigin:l,href:t},n.querySelector(r)===null&&(t=n.createElement("link"),Tt(t,"link",e),ct(t),n.head.appendChild(t)))}}function Vy(e){ol.D(e),r0("dns-prefetch",e,null)}function Py(e,t){ol.C(e,t),r0("preconnect",e,t)}function Gy(e,t,l){ol.L(e,t,l);var n=Jn;if(n&&e&&t){var r='link[rel="preload"][as="'+W(t)+'"]';t==="image"&&l&&l.imageSrcSet?(r+='[imagesrcset="'+W(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(r+='[imagesizes="'+W(l.imageSizes)+'"]')):r+='[href="'+W(e)+'"]';var o=r;switch(t){case"style":o=In(e);break;case"script":o=er(e)}ma.has(o)||(e=y({rel:"preload",href:t==="image"&&l&&l.imageSrcSet?void 0:e,as:t},l),ma.set(o,e),n.querySelector(r)!==null||t==="style"&&n.querySelector(ri(o))||t==="script"&&n.querySelector(ii(o))||(t=n.createElement("link"),Tt(t,"link",e),ct(t),n.head.appendChild(t)))}}function Xy(e,t){ol.m(e,t);var l=Jn;if(l&&e){var n=t&&typeof t.as=="string"?t.as:"script",r='link[rel="modulepreload"][as="'+W(n)+'"][href="'+W(e)+'"]',o=r;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=er(e)}if(!ma.has(o)&&(e=y({rel:"modulepreload",href:e},t),ma.set(o,e),l.querySelector(r)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(ii(o)))return}n=l.createElement("link"),Tt(n,"link",e),ct(n),l.head.appendChild(n)}}}function Qy(e,t,l){ol.S(e,t,l);var n=Jn;if(n&&e){var r=dl(n).hoistableStyles,o=In(e);t=t||"default";var f=r.get(o);if(!f){var p={loading:0,preload:null};if(f=n.querySelector(ri(o)))p.loading=5;else{e=y({rel:"stylesheet",href:e,"data-precedence":t},l),(l=ma.get(o))&&xs(e,l);var _=f=n.createElement("link");ct(_),Tt(_,"link",e),_._p=new Promise(function(O,k){_.onload=O,_.onerror=k}),_.addEventListener("load",function(){p.loading|=1}),_.addEventListener("error",function(){p.loading|=2}),p.loading|=4,jo(f,t,n)}f={type:"stylesheet",instance:f,count:1,state:p},r.set(o,f)}}}function Zy(e,t){ol.X(e,t);var l=Jn;if(l&&e){var n=dl(l).hoistableScripts,r=er(e),o=n.get(r);o||(o=l.querySelector(ii(r)),o||(e=y({src:e,async:!0},t),(t=ma.get(r))&&Ss(e,t),o=l.createElement("script"),ct(o),Tt(o,"link",e),l.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},n.set(r,o))}}function Fy(e,t){ol.M(e,t);var l=Jn;if(l&&e){var n=dl(l).hoistableScripts,r=er(e),o=n.get(r);o||(o=l.querySelector(ii(r)),o||(e=y({src:e,async:!0,type:"module"},t),(t=ma.get(r))&&Ss(e,t),o=l.createElement("script"),ct(o),Tt(o,"link",e),l.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},n.set(r,o))}}function i0(e,t,l,n){var r=(r=re.current)?Ho(r):null;if(!r)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(t=In(l.href),l=dl(r).hoistableStyles,n=l.get(t),n||(n={type:"style",instance:null,count:0,state:null},l.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){e=In(l.href);var o=dl(r).hoistableStyles,f=o.get(e);if(f||(r=r.ownerDocument||r,f={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(e,f),(o=r.querySelector(ri(e)))&&!o._p&&(f.instance=o,f.state.loading=5),ma.has(e)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},ma.set(e,l),o||Ky(r,e,l,f.state))),t&&n===null)throw Error(c(528,""));return f}if(t&&n!==null)throw Error(c(529,""));return null;case"script":return t=l.async,l=l.src,typeof l=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=er(l),l=dl(r).hoistableScripts,n=l.get(t),n||(n={type:"script",instance:null,count:0,state:null},l.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function In(e){return'href="'+W(e)+'"'}function ri(e){return'link[rel="stylesheet"]['+e+"]"}function o0(e){return y({},e,{"data-precedence":e.precedence,precedence:null})}function Ky(e,t,l,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),Tt(t,"link",l),ct(t),e.head.appendChild(t))}function er(e){return'[src="'+W(e)+'"]'}function ii(e){return"script[async]"+e}function u0(e,t,l){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+W(l.href)+'"]');if(n)return t.instance=n,ct(n),n;var r=y({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),ct(n),Tt(n,"style",r),jo(n,l.precedence,e),t.instance=n;case"stylesheet":r=In(l.href);var o=e.querySelector(ri(r));if(o)return t.state.loading|=4,t.instance=o,ct(o),o;n=o0(l),(r=ma.get(r))&&xs(n,r),o=(e.ownerDocument||e).createElement("link"),ct(o);var f=o;return f._p=new Promise(function(p,_){f.onload=p,f.onerror=_}),Tt(o,"link",n),t.state.loading|=4,jo(o,l.precedence,e),t.instance=o;case"script":return o=er(l.src),(r=e.querySelector(ii(o)))?(t.instance=r,ct(r),r):(n=l,(r=ma.get(o))&&(n=y({},l),Ss(n,r)),e=e.ownerDocument||e,r=e.createElement("script"),ct(r),Tt(r,"link",n),e.head.appendChild(r),t.instance=r);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,jo(n,l.precedence,e));return t.instance}function jo(e,t,l){for(var n=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=n.length?n[n.length-1]:null,o=r,f=0;f<n.length;f++){var p=n[f];if(p.dataset.precedence===t)o=p;else if(o!==r)break}o?o.parentNode.insertBefore(e,o.nextSibling):(t=l.nodeType===9?l.head:l,t.insertBefore(e,t.firstChild))}function xs(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Ss(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Lo=null;function c0(e,t,l){if(Lo===null){var n=new Map,r=Lo=new Map;r.set(l,n)}else r=Lo,n=r.get(l),n||(n=new Map,r.set(l,n));if(n.has(e))return n;for(n.set(e,null),l=l.getElementsByTagName(e),r=0;r<l.length;r++){var o=l[r];if(!(o[Ct]||o[et]||e==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var f=o.getAttribute(t)||"";f=e+f;var p=n.get(f);p?p.push(o):n.set(f,[o])}}return n}function s0(e,t,l){e=e.ownerDocument||e,e.head.insertBefore(l,t==="title"?e.querySelector("head > title"):null)}function Wy(e,t,l){if(l===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function f0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var oi=null;function Jy(){}function Iy(e,t,l){if(oi===null)throw Error(c(475));var n=oi;if(t.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var r=In(l.href),o=e.querySelector(ri(r));if(o){e=o._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(n.count++,n=Uo.bind(n),e.then(n,n)),t.state.loading|=4,t.instance=o,ct(o);return}o=e.ownerDocument||e,l=o0(l),(r=ma.get(r))&&xs(l,r),o=o.createElement("link"),ct(o);var f=o;f._p=new Promise(function(p,_){f.onload=p,f.onerror=_}),Tt(o,"link",l),t.instance=o}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(n.count++,t=Uo.bind(n),e.addEventListener("load",t),e.addEventListener("error",t))}}function e1(){if(oi===null)throw Error(c(475));var e=oi;return e.stylesheets&&e.count===0&&Es(e,e.stylesheets),0<e.count?function(t){var l=setTimeout(function(){if(e.stylesheets&&Es(e,e.stylesheets),e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(l)}}:null}function Uo(){if(this.count--,this.count===0){if(this.stylesheets)Es(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ko=null;function Es(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ko=new Map,t.forEach(t1,e),ko=null,Uo.call(e))}function t1(e,t){if(!(t.state.loading&4)){var l=ko.get(e);if(l)var n=l.get(null);else{l=new Map,ko.set(e,l);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<r.length;o++){var f=r[o];(f.nodeName==="LINK"||f.getAttribute("media")!=="not all")&&(l.set(f.dataset.precedence,f),n=f)}n&&l.set(null,n)}r=t.instance,f=r.getAttribute("data-precedence"),o=l.get(f)||n,o===n&&l.set(null,r),l.set(f,r),this.count++,n=Uo.bind(this),r.addEventListener("load",n),r.addEventListener("error",n),o?o.parentNode.insertBefore(r,o.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),t.state.loading|=4}}var ui={$$typeof:L,Provider:null,Consumer:null,_currentValue:ee,_currentValue2:ee,_threadCount:0};function a1(e,t,l,n,r,o,f,p){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=aa(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=aa(0),this.hiddenUpdates=aa(null),this.identifierPrefix=n,this.onUncaughtError=r,this.onCaughtError=o,this.onRecoverableError=f,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=p,this.incompleteTransitions=new Map}function d0(e,t,l,n,r,o,f,p,_,O,k,V){return e=new a1(e,t,l,f,p,_,O,V),t=1,o===!0&&(t|=24),o=Qt(3,null,null,t),e.current=o,o.stateNode=e,t=lc(),t.refCount++,e.pooledCache=t,t.refCount++,o.memoizedState={element:n,isDehydrated:l,cache:t},oc(o),e}function h0(e){return e?(e=On,e):On}function m0(e,t,l,n,r,o){r=h0(r),n.context===null?n.context=r:n.pendingContext=r,n=yl(t),n.payload={element:l},o=o===void 0?null:o,o!==null&&(n.callback=o),l=bl(e,n,t),l!==null&&(Jt(l,e,t),Lr(l,e,t))}function p0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var l=e.retryLane;e.retryLane=l!==0&&l<t?l:t}}function $s(e,t){p0(e,t),(e=e.alternate)&&p0(e,t)}function g0(e){if(e.tag===13){var t=Cn(e,67108864);t!==null&&Jt(t,e,67108864),$s(e,67108864)}}var qo=!0;function l1(e,t,l,n){var r=U.T;U.T=null;var o=K.p;try{K.p=2,_s(e,t,l,n)}finally{K.p=o,U.T=r}}function n1(e,t,l,n){var r=U.T;U.T=null;var o=K.p;try{K.p=8,_s(e,t,l,n)}finally{K.p=o,U.T=r}}function _s(e,t,l,n){if(qo){var r=Ns(n);if(r===null)fs(e,t,n,Yo,l),y0(e,n);else if(i1(r,e,t,l,n))n.stopPropagation();else if(y0(e,n),t&4&&-1<r1.indexOf(e)){for(;r!==null;){var o=ra(r);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var f=Re(o.pendingLanes);if(f!==0){var p=o;for(p.pendingLanes|=2,p.entangledLanes|=2;f;){var _=1<<31-ut(f);p.entanglements[1]|=_,f&=~_}ja(o),(ze&6)===0&&(No=Qe()+500,ti(0))}}break;case 13:p=Cn(o,2),p!==null&&Jt(p,o,2),To(),$s(o,2)}if(o=Ns(n),o===null&&fs(e,t,n,Yo,l),o===r)break;r=o}r!==null&&n.stopPropagation()}else fs(e,t,n,null,l)}}function Ns(e){return e=Cu(e),ws(e)}var Yo=null;function ws(e){if(Yo=null,e=Ga(e),e!==null){var t=d(e);if(t===null)e=null;else{var l=t.tag;if(l===13){if(e=g(t),e!==null)return e;e=null}else if(l===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Yo=e,null}function v0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Lt()){case zt:return 2;case mt:return 8;case ea:case kl:return 32;case vn:return 268435456;default:return 32}default:return 32}}var Ts=!1,Dl=null,Bl=null,Rl=null,ci=new Map,si=new Map,zl=[],r1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function y0(e,t){switch(e){case"focusin":case"focusout":Dl=null;break;case"dragenter":case"dragleave":Bl=null;break;case"mouseover":case"mouseout":Rl=null;break;case"pointerover":case"pointerout":ci.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":si.delete(t.pointerId)}}function fi(e,t,l,n,r,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:l,eventSystemFlags:n,nativeEvent:o,targetContainers:[r]},t!==null&&(t=ra(t),t!==null&&g0(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function i1(e,t,l,n,r){switch(t){case"focusin":return Dl=fi(Dl,e,t,l,n,r),!0;case"dragenter":return Bl=fi(Bl,e,t,l,n,r),!0;case"mouseover":return Rl=fi(Rl,e,t,l,n,r),!0;case"pointerover":var o=r.pointerId;return ci.set(o,fi(ci.get(o)||null,e,t,l,n,r)),!0;case"gotpointercapture":return o=r.pointerId,si.set(o,fi(si.get(o)||null,e,t,l,n,r)),!0}return!1}function b0(e){var t=Ga(e.target);if(t!==null){var l=d(t);if(l!==null){if(t=l.tag,t===13){if(t=g(l),t!==null){e.blockedOn=t,ya(e.priority,function(){if(l.tag===13){var n=Wt();n=yn(n);var r=Cn(l,n);r!==null&&Jt(r,l,n),$s(l,n)}});return}}else if(t===3&&l.stateNode.current.memoizedState.isDehydrated){e.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Vo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var l=Ns(e.nativeEvent);if(l===null){l=e.nativeEvent;var n=new l.constructor(l.type,l);Au=n,l.target.dispatchEvent(n),Au=null}else return t=ra(l),t!==null&&g0(t),e.blockedOn=l,!1;t.shift()}return!0}function x0(e,t,l){Vo(e)&&l.delete(t)}function o1(){Ts=!1,Dl!==null&&Vo(Dl)&&(Dl=null),Bl!==null&&Vo(Bl)&&(Bl=null),Rl!==null&&Vo(Rl)&&(Rl=null),ci.forEach(x0),si.forEach(x0)}function Po(e,t){e.blockedOn===t&&(e.blockedOn=null,Ts||(Ts=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,o1)))}var Go=null;function S0(e){Go!==e&&(Go=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Go===e&&(Go=null);for(var t=0;t<e.length;t+=3){var l=e[t],n=e[t+1],r=e[t+2];if(typeof n!="function"){if(ws(n||l)===null)continue;break}var o=ra(l);o!==null&&(e.splice(t,3),t-=3,wc(o,{pending:!0,data:r,method:l.method,action:n},n,r))}}))}function di(e){function t(_){return Po(_,e)}Dl!==null&&Po(Dl,e),Bl!==null&&Po(Bl,e),Rl!==null&&Po(Rl,e),ci.forEach(t),si.forEach(t);for(var l=0;l<zl.length;l++){var n=zl[l];n.blockedOn===e&&(n.blockedOn=null)}for(;0<zl.length&&(l=zl[0],l.blockedOn===null);)b0(l),l.blockedOn===null&&zl.shift();if(l=(e.ownerDocument||e).$$reactFormReplay,l!=null)for(n=0;n<l.length;n+=3){var r=l[n],o=l[n+1],f=r[At]||null;if(typeof o=="function")f||S0(l);else if(f){var p=null;if(o&&o.hasAttribute("formAction")){if(r=o,f=o[At]||null)p=f.formAction;else if(ws(r)!==null)continue}else p=f.action;typeof p=="function"?l[n+1]=p:(l.splice(n,3),n-=3),S0(l)}}}function Ms(e){this._internalRoot=e}Xo.prototype.render=Ms.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var l=t.current,n=Wt();m0(l,n,e,t,null,null)},Xo.prototype.unmount=Ms.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;m0(e.current,2,null,e,null,null),To(),t[ba]=null}};function Xo(e){this._internalRoot=e}Xo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Yl();e={blockedOn:null,target:e,priority:t};for(var l=0;l<zl.length&&t!==0&&t<zl[l].priority;l++);zl.splice(l,0,e),l===0&&b0(e)}};var E0=i.version;if(E0!=="19.1.0")throw Error(c(527,E0,"19.1.0"));K.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=v(t),e=e!==null?m(e):null,e=e===null?null:e.stateNode,e};var u1={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qo.isDisabled&&Qo.supportsFiber)try{Aa=Qo.inject(u1),yt=Qo}catch{}}return mi.createRoot=function(e,t){if(!s(e))throw Error(c(299));var l=!1,n="",r=Lh,o=Uh,f=kh,p=null;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(o=t.onCaughtError),t.onRecoverableError!==void 0&&(f=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(p=t.unstable_transitionCallbacks)),t=d0(e,1,!1,null,null,l,n,r,o,f,p,null),e[ba]=t.current,ss(e),new Ms(t)},mi.hydrateRoot=function(e,t,l){if(!s(e))throw Error(c(299));var n=!1,r="",o=Lh,f=Uh,p=kh,_=null,O=null;return l!=null&&(l.unstable_strictMode===!0&&(n=!0),l.identifierPrefix!==void 0&&(r=l.identifierPrefix),l.onUncaughtError!==void 0&&(o=l.onUncaughtError),l.onCaughtError!==void 0&&(f=l.onCaughtError),l.onRecoverableError!==void 0&&(p=l.onRecoverableError),l.unstable_transitionCallbacks!==void 0&&(_=l.unstable_transitionCallbacks),l.formState!==void 0&&(O=l.formState)),t=d0(e,1,!0,t,l??null,n,r,o,f,p,_,O),t.context=h0(null),l=t.current,n=Wt(),n=yn(n),r=yl(n),r.callback=null,bl(l,r,n),l=n,t.current.lanes=l,Ca(t,l),ja(t),e[ba]=t.current,ss(e),new Xo(t)},mi.version="19.1.0",mi}var D0;function y1(){if(D0)return Os.exports;D0=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(i){console.error(i)}}return a(),Os.exports=v1(),Os.exports}var b1=y1(),Bt=function(){return Bt=Object.assign||function(i){for(var u,c=1,s=arguments.length;c<s;c++){u=arguments[c];for(var d in u)Object.prototype.hasOwnProperty.call(u,d)&&(i[d]=u[d])}return i},Bt.apply(this,arguments)};function xi(a,i,u){if(u||arguments.length===2)for(var c=0,s=i.length,d;c<s;c++)(d||!(c in i))&&(d||(d=Array.prototype.slice.call(i,0,c)),d[c]=i[c]);return a.concat(d||Array.prototype.slice.call(i))}var Ze="-ms-",bi="-moz-",De="-webkit-",zp="comm",hu="rule",_f="decl",x1="@import",Hp="@keyframes",S1="@layer",jp=Math.abs,Nf=String.fromCharCode,Xs=Object.assign;function E1(a,i){return Et(a,0)^45?(((i<<2^Et(a,0))<<2^Et(a,1))<<2^Et(a,2))<<2^Et(a,3):0}function Lp(a){return a.trim()}function ul(a,i){return(a=i.exec(a))?a[0]:a}function xe(a,i,u){return a.replace(i,u)}function Io(a,i,u){return a.indexOf(i,u)}function Et(a,i){return a.charCodeAt(i)|0}function nr(a,i,u){return a.slice(i,u)}function La(a){return a.length}function Up(a){return a.length}function vi(a,i){return i.push(a),a}function $1(a,i){return a.map(i).join("")}function B0(a,i){return a.filter(function(u){return!ul(u,i)})}var mu=1,rr=1,kp=0,ga=0,ht=0,fr="";function pu(a,i,u,c,s,d,g,b){return{value:a,root:i,parent:u,type:c,props:s,children:d,line:mu,column:rr,length:g,return:"",siblings:b}}function jl(a,i){return Xs(pu("",null,null,"",null,null,0,a.siblings),a,{length:-a.length},i)}function tr(a){for(;a.root;)a=jl(a.root,{children:[a]});vi(a,a.siblings)}function _1(){return ht}function N1(){return ht=ga>0?Et(fr,--ga):0,rr--,ht===10&&(rr=1,mu--),ht}function Ta(){return ht=ga<kp?Et(fr,ga++):0,rr++,ht===10&&(rr=1,mu++),ht}function cn(){return Et(fr,ga)}function eu(){return ga}function gu(a,i){return nr(fr,a,i)}function Qs(a){switch(a){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function w1(a){return mu=rr=1,kp=La(fr=a),ga=0,[]}function T1(a){return fr="",a}function zs(a){return Lp(gu(ga-1,Zs(a===91?a+2:a===40?a+1:a)))}function M1(a){for(;(ht=cn())&&ht<33;)Ta();return Qs(a)>2||Qs(ht)>3?"":" "}function A1(a,i){for(;--i&&Ta()&&!(ht<48||ht>102||ht>57&&ht<65||ht>70&&ht<97););return gu(a,eu()+(i<6&&cn()==32&&Ta()==32))}function Zs(a){for(;Ta();)switch(ht){case a:return ga;case 34:case 39:a!==34&&a!==39&&Zs(ht);break;case 40:a===41&&Zs(a);break;case 92:Ta();break}return ga}function C1(a,i){for(;Ta()&&a+ht!==57;)if(a+ht===84&&cn()===47)break;return"/*"+gu(i,ga-1)+"*"+Nf(a===47?a:Ta())}function O1(a){for(;!Qs(cn());)Ta();return gu(a,ga)}function D1(a){return T1(tu("",null,null,null,[""],a=w1(a),0,[0],a))}function tu(a,i,u,c,s,d,g,b,v){for(var m=0,y=0,E=g,x=0,w=0,$=0,j=1,R=1,M=1,D=0,L="",te=s,Z=d,J=c,ae=L;R;)switch($=D,D=Ta()){case 40:if($!=108&&Et(ae,E-1)==58){Io(ae+=xe(zs(D),"&","&\f"),"&\f",jp(m?b[m-1]:0))!=-1&&(M=-1);break}case 34:case 39:case 91:ae+=zs(D);break;case 9:case 10:case 13:case 32:ae+=M1($);break;case 92:ae+=A1(eu()-1,7);continue;case 47:switch(cn()){case 42:case 47:vi(B1(C1(Ta(),eu()),i,u,v),v);break;default:ae+="/"}break;case 123*j:b[m++]=La(ae)*M;case 125*j:case 59:case 0:switch(D){case 0:case 125:R=0;case 59+y:M==-1&&(ae=xe(ae,/\f/g,"")),w>0&&La(ae)-E&&vi(w>32?z0(ae+";",c,u,E-1,v):z0(xe(ae," ","")+";",c,u,E-2,v),v);break;case 59:ae+=";";default:if(vi(J=R0(ae,i,u,m,y,s,b,L,te=[],Z=[],E,d),d),D===123)if(y===0)tu(ae,i,J,J,te,d,E,b,Z);else switch(x===99&&Et(ae,3)===110?100:x){case 100:case 108:case 109:case 115:tu(a,J,J,c&&vi(R0(a,J,J,0,0,s,b,L,s,te=[],E,Z),Z),s,Z,E,b,c?te:Z);break;default:tu(ae,J,J,J,[""],Z,0,b,Z)}}m=y=w=0,j=M=1,L=ae="",E=g;break;case 58:E=1+La(ae),w=$;default:if(j<1){if(D==123)--j;else if(D==125&&j++==0&&N1()==125)continue}switch(ae+=Nf(D),D*j){case 38:M=y>0?1:(ae+="\f",-1);break;case 44:b[m++]=(La(ae)-1)*M,M=1;break;case 64:cn()===45&&(ae+=zs(Ta())),x=cn(),y=E=La(L=ae+=O1(eu())),D++;break;case 45:$===45&&La(ae)==2&&(j=0)}}return d}function R0(a,i,u,c,s,d,g,b,v,m,y,E){for(var x=s-1,w=s===0?d:[""],$=Up(w),j=0,R=0,M=0;j<c;++j)for(var D=0,L=nr(a,x+1,x=jp(R=g[j])),te=a;D<$;++D)(te=Lp(R>0?w[D]+" "+L:xe(L,/&\f/g,w[D])))&&(v[M++]=te);return pu(a,i,u,s===0?hu:b,v,m,y,E)}function B1(a,i,u,c){return pu(a,i,u,zp,Nf(_1()),nr(a,2,-2),0,c)}function z0(a,i,u,c,s){return pu(a,i,u,_f,nr(a,0,c),nr(a,c+1,-1),c,s)}function qp(a,i,u){switch(E1(a,i)){case 5103:return De+"print-"+a+a;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return De+a+a;case 4789:return bi+a+a;case 5349:case 4246:case 4810:case 6968:case 2756:return De+a+bi+a+Ze+a+a;case 5936:switch(Et(a,i+11)){case 114:return De+a+Ze+xe(a,/[svh]\w+-[tblr]{2}/,"tb")+a;case 108:return De+a+Ze+xe(a,/[svh]\w+-[tblr]{2}/,"tb-rl")+a;case 45:return De+a+Ze+xe(a,/[svh]\w+-[tblr]{2}/,"lr")+a}case 6828:case 4268:case 2903:return De+a+Ze+a+a;case 6165:return De+a+Ze+"flex-"+a+a;case 5187:return De+a+xe(a,/(\w+).+(:[^]+)/,De+"box-$1$2"+Ze+"flex-$1$2")+a;case 5443:return De+a+Ze+"flex-item-"+xe(a,/flex-|-self/g,"")+(ul(a,/flex-|baseline/)?"":Ze+"grid-row-"+xe(a,/flex-|-self/g,""))+a;case 4675:return De+a+Ze+"flex-line-pack"+xe(a,/align-content|flex-|-self/g,"")+a;case 5548:return De+a+Ze+xe(a,"shrink","negative")+a;case 5292:return De+a+Ze+xe(a,"basis","preferred-size")+a;case 6060:return De+"box-"+xe(a,"-grow","")+De+a+Ze+xe(a,"grow","positive")+a;case 4554:return De+xe(a,/([^-])(transform)/g,"$1"+De+"$2")+a;case 6187:return xe(xe(xe(a,/(zoom-|grab)/,De+"$1"),/(image-set)/,De+"$1"),a,"")+a;case 5495:case 3959:return xe(a,/(image-set\([^]*)/,De+"$1$`$1");case 4968:return xe(xe(a,/(.+:)(flex-)?(.*)/,De+"box-pack:$3"+Ze+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+De+a+a;case 4200:if(!ul(a,/flex-|baseline/))return Ze+"grid-column-align"+nr(a,i)+a;break;case 2592:case 3360:return Ze+xe(a,"template-","")+a;case 4384:case 3616:return u&&u.some(function(c,s){return i=s,ul(c.props,/grid-\w+-end/)})?~Io(a+(u=u[i].value),"span",0)?a:Ze+xe(a,"-start","")+a+Ze+"grid-row-span:"+(~Io(u,"span",0)?ul(u,/\d+/):+ul(u,/\d+/)-+ul(a,/\d+/))+";":Ze+xe(a,"-start","")+a;case 4896:case 4128:return u&&u.some(function(c){return ul(c.props,/grid-\w+-start/)})?a:Ze+xe(xe(a,"-end","-span"),"span ","")+a;case 4095:case 3583:case 4068:case 2532:return xe(a,/(.+)-inline(.+)/,De+"$1$2")+a;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(La(a)-1-i>6)switch(Et(a,i+1)){case 109:if(Et(a,i+4)!==45)break;case 102:return xe(a,/(.+:)(.+)-([^]+)/,"$1"+De+"$2-$3$1"+bi+(Et(a,i+3)==108?"$3":"$2-$3"))+a;case 115:return~Io(a,"stretch",0)?qp(xe(a,"stretch","fill-available"),i,u)+a:a}break;case 5152:case 5920:return xe(a,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(c,s,d,g,b,v,m){return Ze+s+":"+d+m+(g?Ze+s+"-span:"+(b?v:+v-+d)+m:"")+a});case 4949:if(Et(a,i+6)===121)return xe(a,":",":"+De)+a;break;case 6444:switch(Et(a,Et(a,14)===45?18:11)){case 120:return xe(a,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+De+(Et(a,14)===45?"inline-":"")+"box$3$1"+De+"$2$3$1"+Ze+"$2box$3")+a;case 100:return xe(a,":",":"+Ze)+a}break;case 5719:case 2647:case 2135:case 3927:case 2391:return xe(a,"scroll-","scroll-snap-")+a}return a}function ou(a,i){for(var u="",c=0;c<a.length;c++)u+=i(a[c],c,a,i)||"";return u}function R1(a,i,u,c){switch(a.type){case S1:if(a.children.length)break;case x1:case _f:return a.return=a.return||a.value;case zp:return"";case Hp:return a.return=a.value+"{"+ou(a.children,c)+"}";case hu:if(!La(a.value=a.props.join(",")))return""}return La(u=ou(a.children,c))?a.return=a.value+"{"+u+"}":""}function z1(a){var i=Up(a);return function(u,c,s,d){for(var g="",b=0;b<i;b++)g+=a[b](u,c,s,d)||"";return g}}function H1(a){return function(i){i.root||(i=i.return)&&a(i)}}function j1(a,i,u,c){if(a.length>-1&&!a.return)switch(a.type){case _f:a.return=qp(a.value,a.length,u);return;case Hp:return ou([jl(a,{value:xe(a.value,"@","@"+De)})],c);case hu:if(a.length)return $1(u=a.props,function(s){switch(ul(s,c=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":tr(jl(a,{props:[xe(s,/:(read-\w+)/,":"+bi+"$1")]})),tr(jl(a,{props:[s]})),Xs(a,{props:B0(u,c)});break;case"::placeholder":tr(jl(a,{props:[xe(s,/:(plac\w+)/,":"+De+"input-$1")]})),tr(jl(a,{props:[xe(s,/:(plac\w+)/,":"+bi+"$1")]})),tr(jl(a,{props:[xe(s,/:(plac\w+)/,Ze+"input-$1")]})),tr(jl(a,{props:[s]})),Xs(a,{props:B0(u,c)});break}return""})}}var L1={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},It={},ir=typeof process<"u"&&It!==void 0&&(It.REACT_APP_SC_ATTR||It.SC_ATTR)||"data-styled",Yp="active",Vp="data-styled-version",vu="6.1.19",wf=`/*!sc*/
`,uu=typeof window<"u"&&typeof document<"u",U1=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&It!==void 0&&It.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&It.REACT_APP_SC_DISABLE_SPEEDY!==""?It.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&It.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&It!==void 0&&It.SC_DISABLE_SPEEDY!==void 0&&It.SC_DISABLE_SPEEDY!==""&&It.SC_DISABLE_SPEEDY!=="false"&&It.SC_DISABLE_SPEEDY),yu=Object.freeze([]),or=Object.freeze({});function k1(a,i,u){return u===void 0&&(u=or),a.theme!==u.theme&&a.theme||i||u.theme}var Pp=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),q1=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Y1=/(^-|-$)/g;function H0(a){return a.replace(q1,"-").replace(Y1,"")}var V1=/(a)(d)/gi,Zo=52,j0=function(a){return String.fromCharCode(a+(a>25?39:97))};function Fs(a){var i,u="";for(i=Math.abs(a);i>Zo;i=i/Zo|0)u=j0(i%Zo)+u;return(j0(i%Zo)+u).replace(V1,"$1-$2")}var Hs,Gp=5381,ar=function(a,i){for(var u=i.length;u;)a=33*a^i.charCodeAt(--u);return a},Xp=function(a){return ar(Gp,a)};function Qp(a){return Fs(Xp(a)>>>0)}function P1(a){return a.displayName||a.name||"Component"}function js(a){return typeof a=="string"&&!0}var Zp=typeof Symbol=="function"&&Symbol.for,Fp=Zp?Symbol.for("react.memo"):60115,G1=Zp?Symbol.for("react.forward_ref"):60112,X1={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Q1={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Kp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Z1=((Hs={})[G1]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Hs[Fp]=Kp,Hs);function L0(a){return("type"in(i=a)&&i.type.$$typeof)===Fp?Kp:"$$typeof"in a?Z1[a.$$typeof]:X1;var i}var F1=Object.defineProperty,K1=Object.getOwnPropertyNames,U0=Object.getOwnPropertySymbols,W1=Object.getOwnPropertyDescriptor,J1=Object.getPrototypeOf,k0=Object.prototype;function Wp(a,i,u){if(typeof i!="string"){if(k0){var c=J1(i);c&&c!==k0&&Wp(a,c,u)}var s=K1(i);U0&&(s=s.concat(U0(i)));for(var d=L0(a),g=L0(i),b=0;b<s.length;++b){var v=s[b];if(!(v in Q1||u&&u[v]||g&&v in g||d&&v in d)){var m=W1(i,v);try{F1(a,v,m)}catch{}}}}return a}function hn(a){return typeof a=="function"}function Tf(a){return typeof a=="object"&&"styledComponentId"in a}function un(a,i){return a&&i?"".concat(a," ").concat(i):a||i||""}function Ks(a,i){if(a.length===0)return"";for(var u=a[0],c=1;c<a.length;c++)u+=a[c];return u}function Si(a){return a!==null&&typeof a=="object"&&a.constructor.name===Object.name&&!("props"in a&&a.$$typeof)}function Ws(a,i,u){if(u===void 0&&(u=!1),!u&&!Si(a)&&!Array.isArray(a))return i;if(Array.isArray(i))for(var c=0;c<i.length;c++)a[c]=Ws(a[c],i[c]);else if(Si(i))for(var c in i)a[c]=Ws(a[c],i[c]);return a}function Mf(a,i){Object.defineProperty(a,"toString",{value:i})}function Ul(a){for(var i=[],u=1;u<arguments.length;u++)i[u-1]=arguments[u];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(a," for more information.").concat(i.length>0?" Args: ".concat(i.join(", ")):""))}var I1=function(){function a(i){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=i}return a.prototype.indexOfGroup=function(i){for(var u=0,c=0;c<i;c++)u+=this.groupSizes[c];return u},a.prototype.insertRules=function(i,u){if(i>=this.groupSizes.length){for(var c=this.groupSizes,s=c.length,d=s;i>=d;)if((d<<=1)<0)throw Ul(16,"".concat(i));this.groupSizes=new Uint32Array(d),this.groupSizes.set(c),this.length=d;for(var g=s;g<d;g++)this.groupSizes[g]=0}for(var b=this.indexOfGroup(i+1),v=(g=0,u.length);g<v;g++)this.tag.insertRule(b,u[g])&&(this.groupSizes[i]++,b++)},a.prototype.clearGroup=function(i){if(i<this.length){var u=this.groupSizes[i],c=this.indexOfGroup(i),s=c+u;this.groupSizes[i]=0;for(var d=c;d<s;d++)this.tag.deleteRule(c)}},a.prototype.getGroup=function(i){var u="";if(i>=this.length||this.groupSizes[i]===0)return u;for(var c=this.groupSizes[i],s=this.indexOfGroup(i),d=s+c,g=s;g<d;g++)u+="".concat(this.tag.getRule(g)).concat(wf);return u},a}(),au=new Map,cu=new Map,lu=1,Fo=function(a){if(au.has(a))return au.get(a);for(;cu.has(lu);)lu++;var i=lu++;return au.set(a,i),cu.set(i,a),i},eb=function(a,i){lu=i+1,au.set(a,i),cu.set(i,a)},tb="style[".concat(ir,"][").concat(Vp,'="').concat(vu,'"]'),ab=new RegExp("^".concat(ir,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),lb=function(a,i,u){for(var c,s=u.split(","),d=0,g=s.length;d<g;d++)(c=s[d])&&a.registerName(i,c)},nb=function(a,i){for(var u,c=((u=i.textContent)!==null&&u!==void 0?u:"").split(wf),s=[],d=0,g=c.length;d<g;d++){var b=c[d].trim();if(b){var v=b.match(ab);if(v){var m=0|parseInt(v[1],10),y=v[2];m!==0&&(eb(y,m),lb(a,y,v[3]),a.getTag().insertRules(m,s)),s.length=0}else s.push(b)}}},q0=function(a){for(var i=document.querySelectorAll(tb),u=0,c=i.length;u<c;u++){var s=i[u];s&&s.getAttribute(ir)!==Yp&&(nb(a,s),s.parentNode&&s.parentNode.removeChild(s))}};function rb(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Jp=function(a){var i=document.head,u=a||i,c=document.createElement("style"),s=function(b){var v=Array.from(b.querySelectorAll("style[".concat(ir,"]")));return v[v.length-1]}(u),d=s!==void 0?s.nextSibling:null;c.setAttribute(ir,Yp),c.setAttribute(Vp,vu);var g=rb();return g&&c.setAttribute("nonce",g),u.insertBefore(c,d),c},ib=function(){function a(i){this.element=Jp(i),this.element.appendChild(document.createTextNode("")),this.sheet=function(u){if(u.sheet)return u.sheet;for(var c=document.styleSheets,s=0,d=c.length;s<d;s++){var g=c[s];if(g.ownerNode===u)return g}throw Ul(17)}(this.element),this.length=0}return a.prototype.insertRule=function(i,u){try{return this.sheet.insertRule(u,i),this.length++,!0}catch{return!1}},a.prototype.deleteRule=function(i){this.sheet.deleteRule(i),this.length--},a.prototype.getRule=function(i){var u=this.sheet.cssRules[i];return u&&u.cssText?u.cssText:""},a}(),ob=function(){function a(i){this.element=Jp(i),this.nodes=this.element.childNodes,this.length=0}return a.prototype.insertRule=function(i,u){if(i<=this.length&&i>=0){var c=document.createTextNode(u);return this.element.insertBefore(c,this.nodes[i]||null),this.length++,!0}return!1},a.prototype.deleteRule=function(i){this.element.removeChild(this.nodes[i]),this.length--},a.prototype.getRule=function(i){return i<this.length?this.nodes[i].textContent:""},a}(),ub=function(){function a(i){this.rules=[],this.length=0}return a.prototype.insertRule=function(i,u){return i<=this.length&&(this.rules.splice(i,0,u),this.length++,!0)},a.prototype.deleteRule=function(i){this.rules.splice(i,1),this.length--},a.prototype.getRule=function(i){return i<this.length?this.rules[i]:""},a}(),Y0=uu,cb={isServer:!uu,useCSSOMInjection:!U1},Ip=function(){function a(i,u,c){i===void 0&&(i=or),u===void 0&&(u={});var s=this;this.options=Bt(Bt({},cb),i),this.gs=u,this.names=new Map(c),this.server=!!i.isServer,!this.server&&uu&&Y0&&(Y0=!1,q0(this)),Mf(this,function(){return function(d){for(var g=d.getTag(),b=g.length,v="",m=function(E){var x=function(M){return cu.get(M)}(E);if(x===void 0)return"continue";var w=d.names.get(x),$=g.getGroup(E);if(w===void 0||!w.size||$.length===0)return"continue";var j="".concat(ir,".g").concat(E,'[id="').concat(x,'"]'),R="";w!==void 0&&w.forEach(function(M){M.length>0&&(R+="".concat(M,","))}),v+="".concat($).concat(j,'{content:"').concat(R,'"}').concat(wf)},y=0;y<b;y++)m(y);return v}(s)})}return a.registerId=function(i){return Fo(i)},a.prototype.rehydrate=function(){!this.server&&uu&&q0(this)},a.prototype.reconstructWithOptions=function(i,u){return u===void 0&&(u=!0),new a(Bt(Bt({},this.options),i),this.gs,u&&this.names||void 0)},a.prototype.allocateGSInstance=function(i){return this.gs[i]=(this.gs[i]||0)+1},a.prototype.getTag=function(){return this.tag||(this.tag=(i=function(u){var c=u.useCSSOMInjection,s=u.target;return u.isServer?new ub(s):c?new ib(s):new ob(s)}(this.options),new I1(i)));var i},a.prototype.hasNameForId=function(i,u){return this.names.has(i)&&this.names.get(i).has(u)},a.prototype.registerName=function(i,u){if(Fo(i),this.names.has(i))this.names.get(i).add(u);else{var c=new Set;c.add(u),this.names.set(i,c)}},a.prototype.insertRules=function(i,u,c){this.registerName(i,u),this.getTag().insertRules(Fo(i),c)},a.prototype.clearNames=function(i){this.names.has(i)&&this.names.get(i).clear()},a.prototype.clearRules=function(i){this.getTag().clearGroup(Fo(i)),this.clearNames(i)},a.prototype.clearTag=function(){this.tag=void 0},a}(),sb=/&/g,fb=/^\s*\/\/.*$/gm;function eg(a,i){return a.map(function(u){return u.type==="rule"&&(u.value="".concat(i," ").concat(u.value),u.value=u.value.replaceAll(",",",".concat(i," ")),u.props=u.props.map(function(c){return"".concat(i," ").concat(c)})),Array.isArray(u.children)&&u.type!=="@keyframes"&&(u.children=eg(u.children,i)),u})}function db(a){var i,u,c,s=or,d=s.options,g=d===void 0?or:d,b=s.plugins,v=b===void 0?yu:b,m=function(x,w,$){return $.startsWith(u)&&$.endsWith(u)&&$.replaceAll(u,"").length>0?".".concat(i):x},y=v.slice();y.push(function(x){x.type===hu&&x.value.includes("&")&&(x.props[0]=x.props[0].replace(sb,u).replace(c,m))}),g.prefix&&y.push(j1),y.push(R1);var E=function(x,w,$,j){w===void 0&&(w=""),$===void 0&&($=""),j===void 0&&(j="&"),i=j,u=w,c=new RegExp("\\".concat(u,"\\b"),"g");var R=x.replace(fb,""),M=D1($||w?"".concat($," ").concat(w," { ").concat(R," }"):R);g.namespace&&(M=eg(M,g.namespace));var D=[];return ou(M,z1(y.concat(H1(function(L){return D.push(L)})))),D};return E.hash=v.length?v.reduce(function(x,w){return w.name||Ul(15),ar(x,w.name)},Gp).toString():"",E}var hb=new Ip,Js=db(),tg=dn.createContext({shouldForwardProp:void 0,styleSheet:hb,stylis:Js});tg.Consumer;dn.createContext(void 0);function V0(){return h.useContext(tg)}var ag=function(){function a(i,u){var c=this;this.inject=function(s,d){d===void 0&&(d=Js);var g=c.name+d.hash;s.hasNameForId(c.id,g)||s.insertRules(c.id,g,d(c.rules,g,"@keyframes"))},this.name=i,this.id="sc-keyframes-".concat(i),this.rules=u,Mf(this,function(){throw Ul(12,String(c.name))})}return a.prototype.getName=function(i){return i===void 0&&(i=Js),this.name+i.hash},a}(),mb=function(a){return a>="A"&&a<="Z"};function P0(a){for(var i="",u=0;u<a.length;u++){var c=a[u];if(u===1&&c==="-"&&a[0]==="-")return a;mb(c)?i+="-"+c.toLowerCase():i+=c}return i.startsWith("ms-")?"-"+i:i}var lg=function(a){return a==null||a===!1||a===""},ng=function(a){var i,u,c=[];for(var s in a){var d=a[s];a.hasOwnProperty(s)&&!lg(d)&&(Array.isArray(d)&&d.isCss||hn(d)?c.push("".concat(P0(s),":"),d,";"):Si(d)?c.push.apply(c,xi(xi(["".concat(s," {")],ng(d),!1),["}"],!1)):c.push("".concat(P0(s),": ").concat((i=s,(u=d)==null||typeof u=="boolean"||u===""?"":typeof u!="number"||u===0||i in L1||i.startsWith("--")?String(u).trim():"".concat(u,"px")),";")))}return c};function sn(a,i,u,c){if(lg(a))return[];if(Tf(a))return[".".concat(a.styledComponentId)];if(hn(a)){if(!hn(d=a)||d.prototype&&d.prototype.isReactComponent||!i)return[a];var s=a(i);return sn(s,i,u,c)}var d;return a instanceof ag?u?(a.inject(u,c),[a.getName(c)]):[a]:Si(a)?ng(a):Array.isArray(a)?Array.prototype.concat.apply(yu,a.map(function(g){return sn(g,i,u,c)})):[a.toString()]}function pb(a){for(var i=0;i<a.length;i+=1){var u=a[i];if(hn(u)&&!Tf(u))return!1}return!0}var gb=Xp(vu),vb=function(){function a(i,u,c){this.rules=i,this.staticRulesId="",this.isStatic=(c===void 0||c.isStatic)&&pb(i),this.componentId=u,this.baseHash=ar(gb,u),this.baseStyle=c,Ip.registerId(u)}return a.prototype.generateAndInjectStyles=function(i,u,c){var s=this.baseStyle?this.baseStyle.generateAndInjectStyles(i,u,c):"";if(this.isStatic&&!c.hash)if(this.staticRulesId&&u.hasNameForId(this.componentId,this.staticRulesId))s=un(s,this.staticRulesId);else{var d=Ks(sn(this.rules,i,u,c)),g=Fs(ar(this.baseHash,d)>>>0);if(!u.hasNameForId(this.componentId,g)){var b=c(d,".".concat(g),void 0,this.componentId);u.insertRules(this.componentId,g,b)}s=un(s,g),this.staticRulesId=g}else{for(var v=ar(this.baseHash,c.hash),m="",y=0;y<this.rules.length;y++){var E=this.rules[y];if(typeof E=="string")m+=E;else if(E){var x=Ks(sn(E,i,u,c));v=ar(v,x+y),m+=x}}if(m){var w=Fs(v>>>0);u.hasNameForId(this.componentId,w)||u.insertRules(this.componentId,w,c(m,".".concat(w),void 0,this.componentId)),s=un(s,w)}}return s},a}(),Ei=dn.createContext(void 0);Ei.Consumer;function Af(){var a=h.useContext(Ei);if(!a)throw Ul(18);return a}function yb(a){var i=dn.useContext(Ei),u=h.useMemo(function(){return function(c,s){if(!c)throw Ul(14);if(hn(c)){var d=c(s);return d}if(Array.isArray(c)||typeof c!="object")throw Ul(8);return s?Bt(Bt({},s),c):c}(a.theme,i)},[a.theme,i]);return a.children?dn.createElement(Ei.Provider,{value:u},a.children):null}var Ls={};function bb(a,i,u){var c=Tf(a),s=a,d=!js(a),g=i.attrs,b=g===void 0?yu:g,v=i.componentId,m=v===void 0?function(te,Z){var J=typeof te!="string"?"sc":H0(te);Ls[J]=(Ls[J]||0)+1;var ae="".concat(J,"-").concat(Qp(vu+J+Ls[J]));return Z?"".concat(Z,"-").concat(ae):ae}(i.displayName,i.parentComponentId):v,y=i.displayName,E=y===void 0?function(te){return js(te)?"styled.".concat(te):"Styled(".concat(P1(te),")")}(a):y,x=i.displayName&&i.componentId?"".concat(H0(i.displayName),"-").concat(i.componentId):i.componentId||m,w=c&&s.attrs?s.attrs.concat(b).filter(Boolean):b,$=i.shouldForwardProp;if(c&&s.shouldForwardProp){var j=s.shouldForwardProp;if(i.shouldForwardProp){var R=i.shouldForwardProp;$=function(te,Z){return j(te,Z)&&R(te,Z)}}else $=j}var M=new vb(u,x,c?s.componentStyle:void 0);function D(te,Z){return function(J,ae,se){var ne=J.attrs,ge=J.componentStyle,qe=J.defaultProps,Oe=J.foldedComponentIds,Xe=J.styledComponentId,lt=J.target,Me=dn.useContext(Ei),U=V0(),K=J.shouldForwardProp||U.shouldForwardProp,ee=k1(ae,Me,qe)||or,F=function(ue,re,Ve){for(var ve,Je=Bt(Bt({},re),{className:void 0,theme:Ve}),Mt=0;Mt<ue.length;Mt+=1){var Pe=hn(ve=ue[Mt])?ve(Je):ve;for(var Be in Pe)Je[Be]=Be==="className"?un(Je[Be],Pe[Be]):Be==="style"?Bt(Bt({},Je[Be]),Pe[Be]):Pe[Be]}return re.className&&(Je.className=un(Je.className,re.className)),Je}(ne,ae,ee),S=F.as||lt,B={};for(var X in F)F[X]===void 0||X[0]==="$"||X==="as"||X==="theme"&&F.theme===ee||(X==="forwardedAs"?B.as=F.forwardedAs:K&&!K(X,S)||(B[X]=F[X]));var P=function(ue,re){var Ve=V0(),ve=ue.generateAndInjectStyles(re,Ve.styleSheet,Ve.stylis);return ve}(ge,F),I=un(Oe,Xe);return P&&(I+=" "+P),F.className&&(I+=" "+F.className),B[js(S)&&!Pp.has(S)?"class":"className"]=I,se&&(B.ref=se),h.createElement(S,B)}(L,te,Z)}D.displayName=E;var L=dn.forwardRef(D);return L.attrs=w,L.componentStyle=M,L.displayName=E,L.shouldForwardProp=$,L.foldedComponentIds=c?un(s.foldedComponentIds,s.styledComponentId):"",L.styledComponentId=x,L.target=c?s.target:a,Object.defineProperty(L,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(te){this._foldedDefaultProps=c?function(Z){for(var J=[],ae=1;ae<arguments.length;ae++)J[ae-1]=arguments[ae];for(var se=0,ne=J;se<ne.length;se++)Ws(Z,ne[se],!0);return Z}({},s.defaultProps,te):te}}),Mf(L,function(){return".".concat(L.styledComponentId)}),d&&Wp(L,a,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),L}function G0(a,i){for(var u=[a[0]],c=0,s=i.length;c<s;c+=1)u.push(i[c],a[c+1]);return u}var X0=function(a){return Object.assign(a,{isCss:!0})};function Y(a){for(var i=[],u=1;u<arguments.length;u++)i[u-1]=arguments[u];if(hn(a)||Si(a))return X0(sn(G0(yu,xi([a],i,!0))));var c=a;return i.length===0&&c.length===1&&typeof c[0]=="string"?sn(c):X0(sn(G0(c,i)))}function Is(a,i,u){if(u===void 0&&(u=or),!i)throw Ul(1,i);var c=function(s){for(var d=[],g=1;g<arguments.length;g++)d[g-1]=arguments[g];return a(i,u,Y.apply(void 0,xi([s],d,!1)))};return c.attrs=function(s){return Is(a,i,Bt(Bt({},u),{attrs:Array.prototype.concat(u.attrs,s).filter(Boolean)}))},c.withConfig=function(s){return Is(a,i,Bt(Bt({},u),s))},c}var rg=function(a){return Is(bb,a)},Q=rg;Pp.forEach(function(a){Q[a]=rg(a)});function ig(a){for(var i=[],u=1;u<arguments.length;u++)i[u-1]=arguments[u];var c=Ks(Y.apply(void 0,xi([a],i,!1))),s=Qp(c);return new ag(s,c)}const xb={"Neutral/Neutral 00":"#FFFFFF","Neutral/Neutral 05":"#F5F5F6","Neutral/Neutral 10":"#EAEBEC","Neutral/Neutral 20":"#D7D8DA","Neutral/Neutral 30":"#B2B5B8","Neutral/Neutral 40":"#9EA0A4","Neutral/Neutral 50":"#74767B","Neutral/Neutral 60":"#67696D","Neutral/Neutral 70":"#515256","Neutral/Neutral 80":"#37383B","Neutral/Neutral 90":"#252629","Primary/Primary 10":"#EDF5FF","Primary/Primary 20":"#DDE9FF","Primary/Primary 30":"#A7C7FF","Primary/Primary 40":"#6FA3FF","Primary/Primary 50":"#3A85FF","Primary/Primary 60 Main":"#0062FF","Primary/Primary 70":"#0046E2","Primary/Primary 80":"#0132B0","Special/Static White":"#FFFFFF","Special/Elevated BG":"#FFFFFF","Special/Dark Static Neutral 00":"#131314","Special/Dark Static Neutral 05":"#1B1C1D","Special/Dark Static Neutral 10":"#252627","Special/Dark Static Neutral 20":"#3B3C3E","Special/Dark Static Neutral 30":"#515357","Special/Dark Static Neutral 50":"#82868B","Special/Dark Static Neutral 70":"#A8ABAF","Special/Dark Static Neutral 80":"#C9CACD","Special/Dark Static Neutral 90":"#E3E5E7","Special/Dark Static Primary 60":"#3984FF","Special/Dark Static Primary 70":"#5290FF","Special/Dark Static Primary 80":"#689FFF","Special/Dark Static Error 60":"#EA3C3C","Special/Dark Static Success 50":"#16913F","Opacity/Hover":"#0000000D","Opacity/Focus":"#00000017","Opacity/Press":"#0000001F","Opacity/Modal":"#0000009A","Opacity/Dark Static Hover":"#FFFFFF0F","Opacity/Dark Static Focus":"#FFFFFF17","Opacity/Dark Static Press":"#FFFFFF1F","Opacity/Neutral 4":"#0000000A","Opacity/Neutral 8":"#00000014","Opacity/Neutral 12":"#0000001F","Opacity/Neutral 16":"#00000029","Error/Error 10":"#FFEFEF","Error/Error 20":"#FFDDDD","Error/Error 30":"#FFA7A7","Error/Error 40":"#FF7C7C","Error/Error 50":"#F64E4E","Error/Error 60 Main":"#D92020","Error/Error 70":"#BA1717","Error/Error 80":"#981111","Success/Success 10":"#EAFCF1","Success/Success 20":"#C3F4D3","Success/Success 30":"#80DCA0","Success/Success 40":"#32C665","Success/Success 50 Main":"#1BA049","Success/Success 60":"#128238","Success/Success 70":"#0B682A","Warning/Warning 10":"#FFF1E5","Warning/Warning 20":"#FFDECE","Warning/Warning 30":"#FFB799","Warning/Warning 40":"#FF8D64","Warning/Warning 50 Main":"#FF5C22","Warning/Warning 60":"#D63F09","Warning/Warning 70":"#A63208","Attention/Attention 10":"#FEF5D7","Attention/Attention 20":"#FEE7A0","Attention/Attention 30":"#FDDD77","Attention/Attention 40":"#FDD14C","Attention/Attention 50 Main":"#FFC400","Attention/Attention 60":"#F0B902","Attention/Attention 70":"#DFAB00","Purple/Purple 10":"#F6F2FF","Purple/Purple 20":"#EBE0FF","Purple/Purple 30":"#D4BBFF","Purple/Purple 40":"#BE95FF","Purple/Purple 50":"#A56EFF","Purple/Purple 60 Main":"#8A3FFC","Purple/Purple 70":"#6929C4","Purple/Purple 80":"#491D8B","Magenta/Magenta 10":"#FFF0F7","Magenta/Magenta 20":"#FFDBEB","Magenta/Magenta 30":"#FFAFD2","Magenta/Magenta 40":"#FF7EB6","Magenta/Magenta 50":"#EE5396","Magenta/Magenta 60 Main":"#D02670","Magenta/Magenta 70":"#9F1853","Magenta/Magenta 80":"#740937","Cyan/Cyan 10":"#E5F6FF","Cyan/Cyan 20":"#C4EAFF","Cyan/Cyan 30":"#82CFFF","Cyan/Cyan 40":"#33B1FF","Cyan/Cyan 50":"#1192E8","Cyan/Cyan 60 Main":"#0072C3","Cyan/Cyan 70":"#00539A","Cyan/Cyan 80":"#003A6D","Teal/Teal 10":"#D9FBFB","Teal/Teal 20":"#B0F0F0","Teal/Teal 30":"#3DDBD9","Teal/Teal 40":"#08BDBA","Teal/Teal 50":"#009D9A","Teal/Teal 60 Main":"#007D79","Teal/Teal 70":"#005D5D","Teal/Teal 80":"#004144"},Sb={"Shadow 02":`
  box-shadow: 0px 0.9px 2px 0px rgba(0, 0, 0, 0.28);
`,"Shadow 04":`
  box-shadow: 0px 1.6px 3.6px 0px rgba(0, 0, 0, 0.14), 0px 0.2px 0.9px 0.3px rgba(0, 0, 0, 0.12);
`,"Shadow 08":`
  box-shadow: 0px 3.2px 9px 0px rgba(0, 0, 0, 0.16), 0px 0.6px 1.8px 0px rgba(0, 0, 0, 0.10), 0px -1.5px 6px 0px rgba(0, 0, 0, 0.06);
`,"Shadow 12":`
  box-shadow: 0px 0.8px 1.8px 0px rgba(0, 0, 0, 0.04), 0px 4px 18px 0px rgba(0, 0, 0, 0.08), 0px 1.2px 12px 0px rgba(0, 0, 0, 0.10);
`,"Shadow 16":`
  box-shadow: 0px 6.4px 28px 0px rgba(0, 0, 0, 0.12), 0px 1.2px 18px 0px rgba(0, 0, 0, 0.08);
`,"Shadow Stroke":`
  box-shadow: 0px -1px 0px 0px #D6D8DD inset;
`},Eb={spinner:100,tooltip:100,notification:99,hint:98,dropdown:97,modal:96,drawer:96},Q0={firstDayOfWeek:1,badge:{amountAriaLabel:"Amount"},calendar:{backwardText:"Back",forwardText:"Forward",nextMonthText:"Next month",previousMonthText:"Previous month",returnText:"Return",selectYearText:"Select year",selectMonthText:"Select month"},fileInput:{metricUnits:["Kb","Mb","Gb"]},groupActionsPane:{inputPlaceholder:"Search in table"},hint:{closeButtonAriaLabel:"Close the hint"},imageViewer:{flipHorizontallyText:"Flip horizontally",flipVerticallyText:"Flip vertically",rotateLeftText:"Rotate left",rotateRightText:"Rotate right",zoomInText:"Zoom in",zoomOutText:"Zoom out",backwardText:"Back",forwardText:"Forward"},modal:{closeButtonAriaLabel:"Close the modal window"},paginationOne:{itemsPerPageText:"Entries on the page:",pageSelectLabel:(a,i)=>`Page ${a} of ${i}`,pageSizeSelectLabel:(a,i)=>`Entries ${a} out of ${i}`,itemRangeText:(a,i,u)=>`${a}–${i}  entries out of ${u}`,pageRangeText:a=>`from ${a} ${a===1?"page":"pages"}`,backwardText:"Previous page, select",forwardText:"Next page, select"},paginationTwo:{inputPlaceholder:"Page number",itemRangeText:(a,i,u)=>`${a}–${i} entries out of ${u}`},progressStepper:{renderNextStepName:a=>`Next - ${a}`,stepName:["step","steps"],progressText:(a,i,u)=>`${a} from ${i} ${u}`},select:{emptyMessage:"No matches"},suggestInput:{emptyMessage:"No matches"},table:{emptyMessage:"No matches"},textArea:{copyTextMessage:"Copy text",copiedMessage:"Copied"}},$b={ru:{firstDayOfWeek:1,badge:{amountAriaLabel:"Количество"},calendar:{backwardText:"Назад",forwardText:"Вперед",nextMonthText:"Следующий месяц",previousMonthText:"Предыдущий месяц",returnText:"Вернуться",selectYearText:"Выбор года",selectMonthText:"Выбор месяца"},fileInput:{metricUnits:["Кб","Мб","Гб"]},groupActionsPane:{inputPlaceholder:"Искать в таблице"},hint:{closeButtonAriaLabel:"Закрыть подсказку"},imageViewer:{flipHorizontallyText:"Отразить по горизонтали",flipVerticallyText:"Отразить по вертикали",rotateLeftText:"Повернуть влево",rotateRightText:"Повернуть вправо",zoomOutText:"Уменьшить",zoomInText:"Увеличить",backwardText:"Назад",forwardText:"Вперед"},modal:{closeButtonAriaLabel:"Закрыть модальное окно"},paginationOne:{itemsPerPageText:"Записей на странице:",pageSelectLabel:(a,i)=>`Страница ${a} из ${i}`,pageSizeSelectLabel:(a,i)=>`Записей ${a} из ${i}`,itemRangeText:(a,i,u)=>`${a}–${i} записей из ${u}`,pageRangeText:a=>`из ${a} ${a===1?"страницы":"страниц"}`,backwardText:"Предыдущая страница, выбрать",forwardText:"Следующая страница, выбрать"},paginationTwo:{inputPlaceholder:"№ страницы",itemRangeText:(a,i,u)=>`${a}–${i} записей из ${u}`},progressStepper:{renderNextStepName:a=>`Далее - ${a}`,stepName:["шаг","шагов"],progressText:(a,i,u)=>`${a} из ${i} ${u}`},select:{emptyMessage:"Нет совпадений"},suggestInput:{emptyMessage:"Нет совпадений"},table:{emptyMessage:"Нет совпадений"},textArea:{copyTextMessage:"Копировать текст",copiedMessage:"Скопировано"}},en:Q0,"en-US":{...Q0,firstDayOfWeek:0}},Ne=_b();function _b(){return{"Main/XXL":Y`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_HL3, 550);
      font-size: var(--admiral-font-size-Header_HL3, 42px);
      line-height: var(--admiral-line-height-Header_HL3, 52px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Main/XL":Y`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H1, 550);
      font-size: var(--admiral-font-size-Header_H1, 36px);
      line-height: var(--admiral-line-height-Header_H1, 44px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Main/L":Y`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H2, 500);
      font-size: var(--admiral-font-size-Header_H2, 32px);
      line-height: var(--admiral-line-height-Header_H2, 40px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Main/M":Y`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H3, 550);
      font-size: var(--admiral-font-size-Header_H3, 28px);
      line-height: var(--admiral-line-height-Header_H3, 36px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Main/S":Y`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H5, 550);
      font-size: var(--admiral-font-size-Header_H5, 20px);
      line-height: var(--admiral-line-height-Header_H5, 28px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Main/XS-bold":Y`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H6, 550);
      font-size: var(--admiral-font-size-Header_H6, 18px);
      line-height: var(--admiral-line-height-Header_H6, 24px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Main/XS":Y`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Subtitle_Subtitle1, 400);
      font-size: var(--admiral-font-size-Subtitle_Subtitle1, 18px);
      line-height: var(--admiral-line-height-Subtitle_Subtitle1, 24px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Additional/L-bold":Y`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Subtitle_Subtitle2, 550);
      font-size: var(--admiral-font-size-Subtitle_Subtitle2, 16px);
      line-height: var(--admiral-line-height-Subtitle_Subtitle2, 24px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Additional/L":Y`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body1Long, 400);
      font-size: var(--admiral-font-size-Body_Body1Long, 16px);
      line-height: var(--admiral-line-height-Body_Body1Long, 24px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Additional/M":Y`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body1Short, 400);
      font-size: var(--admiral-font-size-Body_Body1Short, 16px);
      line-height: var(--admiral-line-height-Body_Body1Short, 20px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Additional/S":Y`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body2Long, 400);
      font-size: var(--admiral-font-size-Body_Body2Long, 14px);
      line-height: var(--admiral-line-height-Body_Body2Long, 20px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Additional/S-bold":Y`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Subtitle_Subtitle3, 500);
      font-size: var(--admiral-font-size-Subtitle_Subtitle3, 14px);
      line-height: var(--admiral-line-height-Subtitle_Subtitle3, 20px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Additional/XS":Y`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body2Short, 400);
      font-size: var(--admiral-font-size-Body_Body2Short, 14px);
      line-height: var(--admiral-line-height-Body_Body2Short, 16px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Button/M":Y`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Button_Button1, 500);
      font-size: var(--admiral-font-size-Button_Button1, 16px);
      line-height: var(--admiral-line-height-Button_Button1, 24px);
      /* or 150% */

      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Button/S":Y`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Button_Button2, 500);
      font-size: var(--admiral-font-size-Button_Button2, 14px);
      line-height: var(--admiral-line-height-Button_Button2, 20px);
      /* or 143% */

      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Caption/XS":Y`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Caption_Caption1, 400);
      font-size: var(--admiral-font-size-Caption_Caption1, 12px);
      line-height: var(--admiral-line-height-Caption_Caption1, 16px);
      /* identical to box height, or 133% */

      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/HL1":Y`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_HL1, 550);
      font-size: var(--admiral-font-size-Header_HL1, 72px);
      line-height: var(--admiral-line-height-Header_HL1, 80px);
      /* or 111% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/HL2":Y`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_HL2, 550);
      font-size: var(--admiral-font-size-Header_HL2, 56px);
      line-height: var(--admiral-line-height-Header_HL2, 64px);
      /* or 114% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/HL3":Y`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_HL3, 550);
      font-size: var(--admiral-font-size-Header_HL3, 48px);
      line-height: var(--admiral-line-height-Header_HL3, 56px);
      /* or 117% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/H1":Y`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H1, 550);
      font-size: var(--admiral-font-size-Header_H1, 40px);
      line-height: var(--admiral-line-height-Header_H1, 48px);
      /* or 120% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/H2":Y`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H2, 550);
      font-size: var(--admiral-font-size-Header_H2, 34px);
      line-height: var(--admiral-line-height-Header_H2, 40px);
      /* or 118% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/H3":Y`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H3, 550);
      font-size: var(--admiral-font-size-Header_H3, 28px);
      line-height: var(--admiral-line-height-Header_H3, 36px);
      /* or 129% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/H4":Y`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H4, 550);
      font-size: var(--admiral-font-size-Header_H4, 24px);
      line-height: var(--admiral-line-height-Header_H4, 32px);
      /* or 133% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/H5":Y`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H5, 550);
      font-size: var(--admiral-font-size-Header_H5, 20px);
      line-height: var(--admiral-line-height-Header_H5, 28px);
      /* or 140% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/H6":Y`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H6, 550);
      font-size: var(--admiral-font-size-Header_H6, 18px);
      line-height: var(--admiral-line-height-Header_H6, 24px);
      /* or 133% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Subtitle/Subtitle 1":Y`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Subtitle_Subtitle1, 400);
      font-size: var(--admiral-font-size-Subtitle_Subtitle1, 18px);
      line-height: var(--admiral-line-height-Subtitle_Subtitle1, 24px);
      /* or 133% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Subtitle/Subtitle 2":Y`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Subtitle_Subtitle2, 550);
      font-size: var(--admiral-font-size-Subtitle_Subtitle2, 16px);
      line-height: var(--admiral-line-height-Subtitle_Subtitle2, 24px);
      /* or 150% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Subtitle/Subtitle 3":Y`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Subtitle_Subtitle3, 550);
      font-size: var(--admiral-font-size-Subtitle_Subtitle3, 14px);
      line-height: var(--admiral-line-height-Subtitle_Subtitle3, 20px);
      /* or 143% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Body/Body 1 Long":Y`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body1Long, 400);
      font-size: var(--admiral-font-size-Body_Body1Long, 16px);
      line-height: var(--admiral-line-height-Body_Body1Long, 24px);
      /* or 150% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Body/Body 1 Short":Y`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body1Short, 400);
      font-size: var(--admiral-font-size-Body_Body1Short, 16px);
      line-height: var(--admiral-line-height-Body_Body1Short, 20px);
      /* or 125% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Body/Body 2 Long":Y`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body2Long, 400);
      font-size: var(--admiral-font-size-Body_Body2Long, 14px);
      line-height: var(--admiral-line-height-Body_Body2Long, 20px);
      /* or 133% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Body/Body 2 Short":Y`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body2Short, 400);
      font-size: var(--admiral-font-size-Body_Body2Short, 14px);
      line-height: var(--admiral-line-height-Body_Body2Short, 16px);
      /* or 114% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Button/Button 1":Y`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Button_Button1, 500);
      font-size: var(--admiral-font-size-Button_Button1, 16px);
      line-height: var(--admiral-line-height-Button_Button1, 24px);
      /* or 150% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Button/Button 2":Y`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Button_Button2, 500);
      font-size: var(--admiral-font-size-Button_Button2, 14px);
      line-height: var(--admiral-line-height-Button_Button2, 20px);
      /* or 143% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Caption/Caption 1":Y`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Caption_Caption1, 400);
      font-size: var(--admiral-font-size-Caption_Caption1, 12px);
      line-height: var(--admiral-line-height-Caption_Caption1, 16px);
      /* identical to box height, or 133% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Caption/Caption 2":Y`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Caption_Caption2, 400);
      font-size: var(--admiral-font-size-Caption_Caption2, 10px);
      line-height: var(--admiral-line-height-Caption_Caption2, 12px);
      /* or 120% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `}}const bu={color:xb,shadow:Sb,zIndex:Eb,name:"light",shape:{borderRadiusKind:"Border radius 4"},currentLocale:"ru",locales:$b,typography:Ne,fontFamily:"'VTB Group UI', sans-serif"},Nb="Neutral/Neutral 90";function ur(a){switch(a.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"2px";default:return"4px"}}function pn(a){switch(a.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"2px";case"Border radius 4":default:return"4px";case"Border radius 6":return"6px";case"Border radius 8":return"8px";case"Border radius 10":return"10px"}}function Z0(a){return a!==null&&!Array.isArray(a)&&typeof a=="object"}const su={3:"Cancel",6:"Help",8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",28:"Convert",29:"NonConvert",30:"Accept",31:"ModeChange",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",41:"Select",42:"Print",43:"Execute",44:"PrintScreen",45:"Insert",46:"Delete",48:["0",")"],49:["1","!"],50:["2","@"],51:["3","#"],52:["4","$"],53:["5","%"],54:["6","^"],55:["7","&"],56:["8","*"],57:["9","("],91:"OS",93:"ContextMenu",144:"NumLock",145:"ScrollLock",181:"VolumeMute",182:"VolumeDown",183:"VolumeUp",186:[";",":"],187:["=","+"],188:[",","<"],189:["-","_"],190:[".",">"],191:["/","?"],192:["`","~"],219:["[","{"],220:["\\","|"],221:["]","}"],222:["'",'"'],224:"Meta",225:"AltGraph",246:"Attn",247:"CrSel",248:"ExSel",249:"EraseEof",250:"Play",251:"ZoomOut"};for(let a=0;a<24;a+=1)su[112+a]="F"+(a+1);for(let a=0;a<26;a+=1){let i=a+65;su[i]=[String.fromCharCode(i+32),String.fromCharCode(i)]}const G={codes:su,getCode(a){return Z0(a)?a.keyCode||a.which||this[a.key]:this[a]},getKey(a){const i=Z0(a);if(i&&a.key)return a.key;let u=su[i?a.keyCode||a.which:a];return Array.isArray(u)&&(u=i?u[a.shiftKey?1:0]:u[0]),u},Cancel:3,Help:6,Backspace:8,Tab:9,Clear:12,Enter:13,Shift:16,Control:17,Alt:18,Pause:19,CapsLock:20,Escape:27,Convert:28,NonConvert:29,Accept:30,ModeChange:31," ":32,PageUp:33,PageDown:34,End:35,Home:36,ArrowLeft:37,ArrowUp:38,ArrowRight:39,ArrowDown:40,Select:41,Print:42,Execute:43,PrintScreen:44,Insert:45,Delete:46,0:48,")":48,1:49,"!":49,2:50,"@":50,3:51,"#":51,4:52,$:52,5:53,"%":53,6:54,"^":54,7:55,"&":55,8:56,"*":56,9:57,"(":57,a:65,A:65,b:66,B:66,c:67,C:67,d:68,D:68,e:69,E:69,f:70,F:70,g:71,G:71,h:72,H:72,i:73,I:73,j:74,J:74,k:75,K:75,l:76,L:76,m:77,M:77,n:78,N:78,o:79,O:79,p:80,P:80,q:81,Q:81,r:82,R:82,s:83,S:83,t:84,T:84,u:85,U:85,v:86,V:86,w:87,W:87,x:88,X:88,y:89,Y:89,z:90,Z:90,OS:91,ContextMenu:93,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,F13:124,F14:125,F15:126,F16:127,F17:128,F18:129,F19:130,F20:131,F21:132,F22:133,F23:134,F24:135,NumLock:144,ScrollLock:145,VolumeMute:181,VolumeDown:182,VolumeUp:183,";":186,":":186,"=":187,"+":187,",":188,"<":188,"-":189,_:189,".":190,">":190,"/":191,"?":191,"`":192,"~":192,"[":219,"{":219,"\\":220,"|":220,"]":221,"}":221,"'":222,'"':222,Meta:224,AltGraph:225,Attn:246,CrSel:247,ExSel:248,EraseEof:249,Play:250,ZoomOut:251};G.Spacebar=G[" "],G.Digit0=G[0],G.Digit1=G[1],G.Digit2=G[2],G.Digit3=G[3],G.Digit4=G[4],G.Digit5=G[5],G.Digit6=G[6],G.Digit7=G[7],G.Digit8=G[8],G.Digit9=G[9],G.Tilde=G["~"],G.GraveAccent=G["`"],G.ExclamationPoint=G["!"],G.AtSign=G["@"],G.PoundSign=G["#"],G.PercentSign=G["%"],G.Caret=G["^"],G.Ampersand=G["&"],G.PlusSign=G["+"],G.MinusSign=G["-"],G.EqualsSign=G["="],G.DivisionSign=G["/"],G.MultiplicationSign=G["*"],G.Comma=G[","],G.Decimal=G["."],G.Colon=G[":"],G.Semicolon=G[";"],G.Pipe=G["|"],G.BackSlash=G["\\"],G.QuestionMark=G["?"],G.SingleQuote=G["'"],G.DoubleQuote=G['"'],G.LeftCurlyBrace=G["{"],G.RightCurlyBrace=G["}"],G.LeftParenthesis=G["("],G.RightParenthesis=G[")"],G.LeftAngleBracket=G["<"],G.RightAngleBracket=G[">"],G.LeftSquareBracket=G["["],G.RightSquareBracket=G["]"];var F0;function ef(){return ef=Object.assign?Object.assign.bind():function(a){for(var i=1;i<arguments.length;i++){var u=arguments[i];for(var c in u)({}).hasOwnProperty.call(u,c)&&(a[c]=u[c])}return a},ef.apply(null,arguments)}var wb=function(a){return h.createElement("svg",ef({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},a),F0||(F0=h.createElement("path",{fill:"#74767B",d:"M5.22 8.56c0-.18.07-.35.21-.48.27-.24.68-.22.92.04l5.74 6.36 5.55-6.4a.65.65 0 0 1 .92-.04c.26.24.28.65.04.92l-5.99 6.89c-.28.31-.76.31-1.04 0L5.39 9a.63.63 0 0 1-.17-.44"})))};function Tb(a,i){Ti(a,i,"data-container",!0)}function Mb(a){const i={};return Ti(a,i,"data-dropdown-container",!0),i}function og(a){const i={};return Ti(a,i,"data-menu",!0),i}function Ti(a,i,u,c){Object.keys(a).forEach(s=>{typeof s=="string"&&s.startsWith(u)&&(i[s]=a[s],c&&delete a[s])})}const Ab=Q(wb)`
  transition: transform 0.3s ease-in-out;
  transform: rotate(${a=>a.$isOpen?180:0}deg);
  & *[fill^='#'] {
    fill: ${({appearance:a,theme:i})=>a==="white"?`var(--admiral-color-Special_StaticWhite, ${i.color["Special/Static White"]})`:`var(--admiral-color-Neutral_Neutral50, ${i.color["Neutral/Neutral 50"]})`};
  }

  &:hover *[fill^='#'] {
    fill: ${a=>a.appearance==="white"?"":`var(--admiral-color-Primary_Primary70, ${a.theme.color["Primary/Primary 70"]})`};
  }

  &[data-loading] {
    pointer-events: none;
  }

  &[data-disabled] {
    pointer-events: none;

    *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    }
  }
`,xu=a=>{let i=a;return i=i.replace("box-shadow: ",""),i=i.replace(";",""),i},Cb=(a,i)=>{return(u=a,Object.keys(u)).some(c=>a[c]!==i[c]);var u};function ug(a,i){const u={};return{observe(){u.rafId&&cancelAnimationFrame(u.rafId);const c=()=>{if(u.isObserving){const{scrollHeight:s,scrollLeft:d,scrollTop:g,scrollWidth:b}=a,{bottom:v,height:m,left:y,right:E,top:x,width:w,x:$,y:j}=a.getBoundingClientRect(),R={bottom:v,height:m,left:y,right:E,top:x,width:w,x:$||y,y:j||x,scrollHeight:s,scrollLeft:d,scrollTop:g,scrollWidth:b};Cb(R,u.rect||{})&&(u.rect=R,i(R)),u.rafId=requestAnimationFrame(c)}};u.rafId=requestAnimationFrame(c),u.isObserving=!0},unobserve(){u.rafId&&cancelAnimationFrame(u.rafId),u.isObserving&&(u.isObserving=!1)}}}var Ob=Rp();const Db=Q.div`
  pointer-events: none;
  position: fixed;
  overflow: visible;
  z-index: var(--admiral-z-index-dropdown, ${({theme:a})=>a.zIndex.dropdown});
`,Cf=({targetElement:a,rootRef:i,fullContainerWidth:u,...c})=>{const s=h.useRef(null);return h.useEffect(()=>{const d=s.current;if(d&&a){const g=ug(a,b=>{if(b){const{x:v,y:m,height:y,width:E}=b,{style:x}=d;x.top=`${m}px`,x.left=u?"0px":`${v}px`,x.height=`${y}px`,x.width=u?"100%":`${E}px`}});return g.observe(),()=>{g.unobserve()}}},[a,u]),Ob.createPortal(N.jsx(Db,{ref:s,...c}),i?.current||document.body)};function Bb(a,i){const u=h.useRef(null),c=h.useRef(a);return h.useEffect(()=>{c.current=a},[a]),h.useEffect(()=>(u.current=setInterval(()=>c.current(),i),()=>clearInterval(u.current||0)),[i]),u}function va(...a){return i=>{a.forEach(u=>{u&&(typeof u=="function"?u(i):u.current=i)})}}const Mi=h.createContext({}),Rb=({rootRef:a,...i})=>{const[u,c]=h.useState([]),[s,d]=h.useState(void 0),g=h.useCallback(E=>{d(E)},[]),b=h.useCallback(E=>{d(x=>x===E?void 0:x)},[]),v=h.useCallback(E=>{c(x=>{const w=x.indexOf(E);return w>-1?x.slice(0,w):x})},[]),m=h.useCallback(E=>{c(x=>[...x,E])},[]),y=h.useMemo(()=>({addDropdown:m,removeDropdown:v,dropdowns:u,rootRef:a,activateMenu:g,deactivateMenu:b,currentActiveMenu:s}),[m,v,u,a,g,b,s]);return N.jsx(Mi.Provider,{value:y,children:i.children})};function cg(a){const{dropdowns:i=[],addDropdown:u,removeDropdown:c,activateMenu:s,deactivateMenu:d,currentActiveMenu:g}=h.useContext(Mi),b=i.indexOf(a);return{addDropdown:u,removeDropdown:c,dropdowns:b>-1?i.slice(b+1,i.length):[],activateMenu:s,deactivateMenu:d,currentActiveMenu:g}}const zb=(a,i)=>!i.some(u=>u.current&&u.current.contains(a.target)),Hb=(a,i,u)=>{const c=a.bottom-a.top+8,s=i.top>=c,d=u-i.bottom>=c,g=i.top>=0&&i.bottom<=u,b=i.bottom<=0,v=i.top>=u,m=i.top<0&&0<i.bottom&&i.bottom<u,y=0<i.top&&i.top<u&&i.bottom>u;if(g){if(!s&&!d)return{upward:!1,translateY:u-i.bottom-c-16+"px"};if(s&&d)return{upward:!1,translateY:"0"};if(!s&&d)return{upward:!1,translateY:"0"};if(s&&!d)return{upward:!0,translateY:"0"}}else{if(b)return{upward:!1,translateY:0-i.bottom+8+"px"};if(v)return{upward:!0,translateY:u-i.top-8+"px"};if(m)return d?{upward:!1,translateY:"0"}:{upward:!1,translateY:0-i.bottom+8+"px"};if(y)return s?{upward:!0,translateY:"0"}:{upward:!0,translateY:""+(u-i.top-8)}}return{upward:!1,translateY:"0"}},jb=(a,i,u)=>{const c=a.right-a.left,s=i.left>=0&&i.right<=u,d=i.right<=0,g=i.left>=u,b=i.left<0&&0<i.right&&i.right<u,v=i.right>u&&0<i.left&&i.left<u;if(s){const m=u-i.left>=c,y=i.right>=c,E=c>i.width;if(!y&&!m)return{align:"flex-end",translateX:u-i.right-16+"px"};if(y&&m)return{align:"flex-end",translateX:"0"};if(E&&!y&&m)return{align:"flex-start",translateX:"0"};if(E&&!m&&y)return{align:"flex-end",translateX:"0"}}else{if(d||b)return{align:"flex-start",translateX:0-i.left+16+"px"};if(g||v)return{align:"flex-end",translateX:u-i.right-16+"px"}}return{align:"",translateX:"0"}},Lb=Q.div`
  pointer-events: initial;
  margin: 8px 0;
  flex: 0 0 auto;
  ${a=>a.$alignSelf?`align-self: ${a.$alignSelf};`:""};
  max-width: calc(100vw - 32px);
  opacity: 0;
  transition-delay: 200ms;
  transition-property: opacity;

  &:focus-visible {
    border: 2px solid blue;
  }

  ${a=>a.$dropContainerCssMixin}
`,Ub=Q.div`
  pointer-events: none;
  height: 100%;
  flex: 0 0 auto;
`,kb=Q(Cf)`
  display: flex;
  flex-direction: ${a=>a.$reverse?"column-reverse":"column"};
  flex-wrap: nowrap;
`,qb=()=>null,Of=h.forwardRef(({targetElement:a,onClickOutside:i=qb,className:u="",alignSelf:c,dropContainerCssMixin:s,...d},g)=>{const b=h.useRef(null),[v,m]=h.useState(!1),{rootRef:y}=h.useContext(Mi);h.useLayoutEffect(()=>{b.current!==document.activeElement&&b?.current?.focus()},[]);const E=h.useCallback(()=>{const $=b.current;if($&&a){const j=$.getBoundingClientRect(),R=a.getBoundingClientRect(),M=globalThis.innerHeight,D=globalThis.innerWidth,{upward:L,translateY:te}=Hb(j,R,M);if(v!==L&&m(L),c&&c!=="auto")$.style.transform=`translateY(${te})`;else{const{align:Z,translateX:J}=jb(j,R,D);$.style.transform=`translate(${J}, ${te})`,$.style.alignSelf=Z}}},[v,a]);Bb(E,100),h.useEffect(()=>{b.current&&(b.current.style.opacity="1")},[]);const[x,w]=h.useState(!1);return h.useEffect(()=>{function $(){w(!0)}return document.addEventListener("mousedown",$,!0),document.addEventListener("touchstart",$,!0),()=>{document.removeEventListener("mousedown",$,!0),document.removeEventListener("touchstart",$,!0)}},[]),h.useEffect(()=>{function $(j){i(j)}if(x)return document.addEventListener("mouseup",$),document.addEventListener("touchend",$),()=>{document.removeEventListener("mouseup",$),document.removeEventListener("touchend",$)}},[x]),N.jsx(N.Fragment,{children:N.jsxs(kb,{targetElement:a,$reverse:v,rootRef:y,onMouseDown:()=>w(!1),children:[N.jsx(Ub,{}),N.jsx(Lb,{ref:va(g,b),...d,className:u+" dropdown-container",$alignSelf:c,$dropContainerCssMixin:s})]})})});Of.displayName="DropdownContainer";const Yb=Q(Of)`
  box-shadow: var(--admiral-box-shadow-Shadow08, ${a=>xu(a.theme.shadow["Shadow 08"])});
  border-radius: var(--admiral-border-radius-Medium, ${a=>pn(a.theme.shape)});
  overflow: hidden;
  width: max-content;
  background: var(--admiral-color-Special_ElevatedBG, ${a=>a.theme.color["Special/Elevated BG"]});
`;Yb.displayName="StyledDropdownContainer";function Vb(...a){return i=>a.forEach(u=>function(c,s){typeof c=="function"?c(s):c!=null&&(c.current=s)}(u,i))}function tf(...a){return h.useCallback(Vb(...a),a)}function Df(a){return h.forwardRef(a)}const Bf=Y`
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`,Pb=Q.div`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,Gb=Q.div`
  ${Bf}
`,Xb=Q.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 10px;
`,Qb=Q.div`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: 10px;
`,Zb=Q.div`
  pointer-events: none;
  position: absolute;
  top: 0;
  bottom: 0;
  border-block: 4px solid transparent;
`,Fb=Q.div`
  pointer-events: none;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  border-inline: 4px solid transparent;
`,Kb=Q.div`
  box-sizing: border-box;
  height: 100%;
  cursor: pointer;
  &:hover {
    background-color: ${a=>a.theme.color["Opacity/Hover"]};
  }
  box-sizing: border-box;
`,Wb=Q.div`
  pointer-events: all;
  position: relative;
  height: 6px;
  border-radius: 6px;
  background-color: ${a=>a.theme.color["Opacity/Neutral 16"]};
  width: var(${"--horizontal-thumb-width"}, 20px);
`,Jb=Q.div`
  box-sizing: border-box;
  height: 100%;
  cursor: pointer;
  &:hover {
    background-color: ${a=>a.theme.color["Opacity/Hover"]};
  }
  box-sizing: border-box;
`,Ib=Q.div`
  pointer-events: all;
  position: relative;
  width: 6px;
  border-radius: 6px;
  background-color: ${a=>a.theme.color["Opacity/Neutral 16"]};
  height: var(${"--vertical-thumb-height"}, 20px);
`,ex=Df(({children:a,verticalScrollProps:i,horizontalScrollProps:u,minThumbSize:c=20,contentBlockProps:s={},...d},g)=>{const b=h.useMemo(()=>s.id?s.id:`scroll-aria-${Math.random().toString(36).substring(2,12)}`,[s.id]),[v,m]=h.useState(null),y=tf(s.ref,E=>m(E));return N.jsxs(Pb,{ref:g,...d,children:[N.jsx(Gb,{...s,id:b,ref:y,children:a}),N.jsx(sg,{contentNode:v,verticalScrollProps:i,horizontalScrollProps:u,minThumbSize:c})]})}),sg=({verticalScrollProps:a={},horizontalScrollProps:i={},contentNode:u,minThumbSize:c=20})=>{const s=h.useMemo(()=>u?.id?u?.id:`scroll-aria-${Math.random().toString(36).substring(2,12)}`,[u?.id]),[d,g]=h.useState(null),[b,v]=h.useState(null),[m,y]=h.useState(null),[E,x]=h.useState(null),[w,$]=h.useState(null),[j,R]=h.useState(null),[M,D]=h.useState(!1),[L,te]=h.useState(!1),[Z,J]=h.useState(0),[ae,se]=h.useState(0),[ne,ge]=h.useState(0),[qe,Oe]=h.useState(0),[Xe,lt]=h.useState(0),[Me,U]=h.useState(0),K=tf(a.ref,F=>g(F)),ee=tf(i.ref,F=>y(F));return h.useLayoutEffect(()=>{if(u&&w&&j&&d&&m&&b&&E){const{observe:F,unobserve:S}=ug(u,B=>{if(B){const X=function($t){const{clientHeight:Qe,scrollHeight:Lt}=$t;return Lt-Qe>=1}(u),P=function($t){const{clientWidth:Qe,scrollWidth:Lt}=$t;return Lt-Qe>=1}(u),I=Math.min(Math.max(0,B.scrollTop),B.scrollHeight-B.height),ue=Math.min(Math.max(0,B.scrollLeft),B.scrollWidth-B.width);u.style.setProperty("--vertical-content-scroll",`${I}px`),u.style.setProperty("--horizontal-content-scroll",`${ue}px`),d.style.setProperty("display",X?null:"none"),d.style.setProperty("bottom",P?"10px":null),m.style.setProperty("display",P?null:"none"),m.style.setProperty("right",X?"10px":null);const re=function($t,Qe){const{clientHeight:Lt,scrollHeight:zt}=$t,{clientHeight:mt}=Qe;return Math.max(Math.round(Lt*mt/zt),c)}(u,b),Ve=function($t,Qe){const{clientWidth:Lt,scrollWidth:zt}=$t,{clientWidth:mt}=Qe;return Math.max(Math.round(Lt*mt/zt),c)}(u,E);w.style.setProperty("--vertical-thumb-height",`${re}px`),j.style.setProperty("--horizontal-thumb-width",`${Ve}px`);const{scrollTop:ve,scrollLeft:Je,scrollHeight:Mt,scrollWidth:Pe}=u,{clientHeight:Be}=b,{clientWidth:Rt}=E,Ma=Math.round(Math.min(ve/Mt*Be,Be-re)),Va=Math.round(Math.min(Je/Pe*Rt,Rt-Ve));w.style.top=`${Ma}px`,j.style.left=`${Va}px`}});return F(),S}},[u,w,j,d,m,b,E]),h.useEffect(()=>{function F(B){B.preventDefault(),B.stopPropagation(),M&&D(!1),L&&te(!1)}function S(B){if(u){if(B.preventDefault(),B.stopPropagation(),M){const{scrollHeight:X,clientHeight:P}=u,I=(B.clientY-Z)*(X/P),ue=Math.round(Math.min(ne+I,X-P));u.scrollTop=ue}if(L){const{scrollWidth:X,clientWidth:P}=u,I=(B.clientX-ae)*(X/P),ue=Math.round(Math.min(qe+I,X-P));u.scrollLeft=ue}}}if(M||L)return document.addEventListener("mousemove",S),document.addEventListener("mouseup",F),()=>{document.removeEventListener("mousemove",S),document.removeEventListener("mouseup",F)}},[u,M,L,ne,qe,Z,ae]),h.useEffect(()=>{if(u){const{scrollHeight:F,clientHeight:S}=u,B=Math.round(Xe*F-S/2);u.scrollTo({top:B,behavior:"smooth"})}},[Xe]),h.useEffect(()=>{if(u){const{scrollWidth:F,clientWidth:S}=u,B=Math.round(Me*F-S/2);u.scrollTo({left:B,behavior:"smooth"})}},[Me]),h.useEffect(()=>{document.body.style.setProperty("cursor",M||L?"grabbing":null)},[M,L]),N.jsxs(N.Fragment,{children:[N.jsxs(Xb,{...a,ref:K,role:"scrollbar","aria-controls":s,children:[N.jsx(Jb,{onClick:function(F){if(F.preventDefault(),F.stopPropagation(),u){const{clientHeight:S}=u,{top:B}=u.getBoundingClientRect();lt((F.clientY-B)/S)}}}),N.jsx(Zb,{ref:F=>v(F),children:N.jsx(Ib,{ref:$,onMouseDown:function(F){F.preventDefault(),F.stopPropagation(),J(F.clientY),u&&ge(u.scrollTop),D(!0)},style:{cursor:M?"grabbing":"grab"}})})]}),N.jsxs(Qb,{...i,ref:ee,role:"scrollbar","aria-controls":s,children:[N.jsx(Kb,{onClick:function(F){if(F.preventDefault(),F.stopPropagation(),u){const{clientWidth:S}=u,{left:B}=u.getBoundingClientRect();U((F.clientX-B)/S)}}}),N.jsx(Fb,{ref:F=>x(F),children:N.jsx(Wb,{ref:R,onMouseDown:function(F){F.preventDefault(),F.stopPropagation(),se(F.clientX),u&&Oe(u.scrollLeft),te(!0)},style:{cursor:L?"grabbing":"grab"}})})]})]})},tx=Y`
  ${({$dimension:a})=>a==="s"?Ne["Body/Body 2 Long"]:Ne["Body/Body 1 Long"]}
  ul[data-dimension='s'] & {
    ${Ne["Body/Body 2 Long"]}
  }
`,ax=Y`
  color: ${({theme:a,$disabled:i})=>i?`var(--admiral-color-Neutral_Neutral30, ${a.color["Neutral/Neutral 30"]})`:`var(--admiral-color-Neutral_Neutral90, ${a.color["Neutral/Neutral 90"]})`};
`,lx=Y`
  background: ${({theme:a,$selected:i,$preselected:u,$hovered:c})=>c?`var(--admiral-color-Opacity_Hover, ${a.color["Opacity/Hover"]})`:u?`var(--admiral-color-Opacity_Press, ${a.color["Opacity/Press"]})`:i?`var(--admiral-color-Opacity_Focus, ${a.color["Opacity/Focus"]})`:`var(--admiral-color-Special_ElevatedBG, ${a.color["Special/Elevated BG"]})`};
`,nx=Y`
  padding: ${({$dimension:a})=>{switch(a){case"l":default:return"12px 16px";case"m":return"8px 16px";case"s":return"6px 12px"}}};
  ul[data-dimension='m'] && {
    padding: 8px 16px;
  }
  ul[data-dimension='s'] && {
    padding: 6px 12px;
  }
`;var K0;function af(){return af=Object.assign?Object.assign.bind():function(a){for(var i=1;i<arguments.length;i++){var u=arguments[i];for(var c in u)({}).hasOwnProperty.call(u,c)&&(a[c]=u[c])}return a},af.apply(null,arguments)}var rx=function(a){return h.createElement("svg",af({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},a),K0||(K0=h.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M9.99 16.21c-.18 0-.35-.07-.48-.21a.66.66 0 0 1 .04-.92l3.49-3.15-3.48-3.02a.65.65 0 0 1-.04-.92c.24-.26.65-.28.92-.04l3.97 3.46c.31.28.31.76 0 1.04l-3.98 3.59c-.13.12-.28.17-.44.17"})))};const ix=Q(rx)`
  transition: all 0.3s;
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  margin: 0 0 0 8px;
  [data-icon='left'] & {
    margin: 0 8px 0 0;
  }
  & *[fill^='#'] {
    fill: var(--admiral-color-Neutral_Neutral50, ${a=>a.theme.color["Neutral/Neutral 50"]});
  }
  [data-disabled='true'] & {
    & *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    }
  }
  [data-dimension='s'] & {
    width: 20px;
    height: 20px;
  }
`,ox=a=>{a.preventDefault(),a.stopPropagation()},Rf=h.forwardRef(({children:a,expandIcon:i=N.jsx(ix,{}),hasSubmenu:u,onHover:c,disabled:s,readOnly:d,hovered:g,dimension:b="l",selected:v=!1,preselected:m=!1,selfRef:y,onMouseDown:E,onLeave:x,containerRef:w,...$},j)=>{const R=s?ox:E,M=y?va(j,y):j;return N.jsxs(ux,{ref:M,$dimension:b,$preselected:m,$selected:v,$hovered:g,"data-preselected":m,"data-hovered":g,"data-disabled":s,"data-readonly":d,"data-dimension":b,onMouseEnter:D=>{c?.(D),$.onMouseEnter?.(D)},onMouseLeave:D=>{x?.(D),$.onMouseLeave?.(D)},onMouseMove:D=>{c?.(D),$.onMouseMove?.(D)},onMouseDown:R,...$,children:[h.Children.toArray(a).map((D,L)=>typeof D=="string"?N.jsx(cx,{children:D},D+L):D),u&&i]})});Rf.displayName="MenuItem";const ux=Q.div`
  display: flex;
  align-items: center;
  user-select: none;
  position: relative;
  justify-content: space-between;
  outline: none;
  white-space: pre;
  margin: 0;
  cursor: pointer;
  box-sizing: border-box;
  ${nx}
  ${tx}
  ${ax}
  ${lx}

  &&[data-disabled='true'] {
    cursor: not-allowed;
    background-color: var(--admiral-color-Special_ElevatedBG, ${a=>a.theme.color["Special/Elevated BG"]});
    color: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    && *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    }
    && input[type='checkbox'] + * [fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral00, ${a=>a.theme.color["Neutral/Neutral 00"]});
    }
  }

  &&[data-readonly='true'] {
    cursor: default;
  }
`,cx=Q.span`
  overflow: hidden;
  text-overflow: ellipsis;
`;function zf(a){const i=h.useRef();return h.useEffect(()=>{i.current=a}),i.current}const W0=Q.div`
  display: flex;
  flex: 0 0 auto;
`,sx=({scrollContainerRef:a,itemHeight:i,rowCount:u=6,aheadItemsCount:c=3,model:s,activeId:d,selected:g,onRenderItem:b})=>{const[v,m]=h.useState(0),[y,E]=h.useState({startIndex:0,endIndex:u,topPadding:"",bottomPadding:"",needAddListener:!1}),x=zf({activeId:d}),w=h.useCallback(R=>{requestAnimationFrame(()=>{R.target&&m(R.target.scrollTop)})},[a]);h.useEffect(()=>{const R=a.current;return m(R?.scrollTop||0),R?.addEventListener("scroll",w),()=>R?.removeEventListener("scroll",w)},[w]),h.useEffect(()=>{y.needAddListener&&(setTimeout(()=>a?.current?.addEventListener("scroll",w)),E({...y,needAddListener:!1}))},[y,a]);const $=h.useCallback(R=>{const M=s.length,D=Math.max(0,R);let L=u+2*c;return L=Math.min(M-D,L),{startIndex:D,endIndex:D+L,topPadding:D*i+"px",bottomPadding:(M-D-L)*i+"px"}},[i,c,s,u]);h.useEffect(()=>{const R=Math.floor(v/i-c),M={...$(R),needAddListener:!1};E(M)},[v,$]),h.useEffect(()=>{if(!d||!x||x.activeId===d)return;const R=s.findIndex(M=>M.id===d);R!==-1&&(R<y.startIndex||R>y.endIndex)&&(a?.current?.removeEventListener("scroll",w),E({...$(R),needAddListener:!0}))},[d,y,$,a]);const j=h.useMemo(()=>[...s].slice(y.startIndex,y.endIndex).map((R,M)=>b?.(R,M)),[s,d,g,y]);return N.jsxs(N.Fragment,{children:[N.jsx(W0,{style:{minHeight:y.topPadding}}),j,N.jsx(W0,{style:{minHeight:y.bottomPadding}})]})},fg=(a,i)=>{const u=h.useCallback(c=>{a.every(s=>s.current&&!s.current.contains(c.target))&&i(c)},[i,a]);h.useEffect(()=>(document.addEventListener("mousedown",u,!0),document.addEventListener("touchstart",u),()=>{document.removeEventListener("mousedown",u,!0),document.removeEventListener("touchstart",u)}),[u])},fx=(a,i)=>{let u,c=!1,s=!1;return[(...d)=>{if(s||c)return;const g=a(...d);return c=!0,u=setTimeout(()=>{c=!1},i),g},()=>{s=!0,clearTimeout(u)}]};function dx(a,i,u){const c=a.getBoundingClientRect(),s=i.getBoundingClientRect(),d=document.documentElement.clientWidth-c.right>s.width,g=c.left>s.width,b=u==="right"?!d&&g?"left":"right":!g&&d?"right":"left";return document.documentElement.clientHeight-c.top>s.height-1?{position:`${b}Bottom`}:{position:b,bottomOffset:8-(document.documentElement.clientHeight-c.top-s.height)}}const dg=(a,i)=>{for(let u=0;u<a.length;u++){const c=a[u];if(c.id===i)return c;if(c.subItems&&c.subItems.length>0){const s=dg(c.subItems,i);if(s)return s}}},hg=(a,i)=>!!a.subItems&&a.subItems.some(u=>i.includes(u.id)||hg(u,i)),J0=a=>Array.isArray(a)?[...a]:[a],hx=Q.div`
  display: inline-block;
  position: relative;
  cursor: pointer;
`,mx=Q(Cf)`
  display: flex;
  flex-wrap: nowrap;
  ${({$flexDirection:a})=>a?`flex-direction: ${a};`:"flex-direction: column;"}
`,px=Q.div`
  pointer-events: none;
  height: 100%;
  width: 100%;
  flex: 0 0 auto;
`,gx=Q.div`
  position: relative;
  align-self: flex-start;
`,vx=Q.div`
  background-color: var(--admiral-color-Special_ElevatedBG, ${a=>a.theme.color["Special/Elevated BG"]});
  color: var(--admiral-color-Neutral_Neutral90, ${a=>a.theme.color["Neutral/Neutral 90"]});
  box-shadow: var(--admiral-box-shadow-Shadow08, ${a=>xu(a.theme.shadow["Shadow 08"])});
  border-radius: var(--admiral-border-radius-Medium, ${a=>pn(a.theme.shape)});
  overflow: hidden;
  box-sizing: border-box;
`,mg=({targetElement:a,children:i,onClickOutside:u,defaultRenderDirection:c="right",...s})=>{const{rootRef:d}=h.useContext(Mi),g=h.useRef(null),[b,v]=h.useState(null),[m,y]=h.useState("row");h.useLayoutEffect(()=>{const[$,j]=fx(()=>{v({})},100);return addEventListener("resize",$),addEventListener("scroll",$),()=>{removeEventListener("resize",$),removeEventListener("scroll",$),j()}});const{addDropdown:E,removeDropdown:x,dropdowns:w}=cg(g);return h.useLayoutEffect(()=>(E?.(g),()=>{x?.(g)}),[]),fg([g],$=>{a&&!a.contains($.target)&&zb($,w)&&u?.($)}),h.useLayoutEffect(()=>{const $=g.current;if(a&&$){const{position:j,bottomOffset:R=0}=dx(a,$,c);switch(j){case"right":y("row"),$.style.bottom=`${R}px`;break;case"left":y("row-reverse"),$.style.bottom=`${R}px`;break;case"rightBottom":default:y("row"),$.style.bottom="8px";break;case"leftBottom":y("row-reverse"),$.style.bottom="8px"}}},[a,b]),a&&N.jsx(hx,{children:N.jsxs(mx,{targetElement:a,rootRef:d,$flexDirection:m,fullContainerWidth:!1,children:[N.jsx(px,{}),N.jsx(gx,{ref:g,...s,children:N.jsx(vx,{children:i})})]})})};mg.displayName="SubMenu";const pg=a=>{switch(a){case"l":default:return 48;case"m":return 40;case"s":return 32}},yx=Y`
  max-height: ${({$dimension:a,$rowCount:i})=>{return`min(calc(100vh - 16px), ${u=i,c=a,pg(c)*u+16}px)`;var u,c}};
`,bx=Q.div`
  overflow: hidden;
  position: relative;

  padding: 0;
  ${a=>a.$hasTopPanel?"padding-top: 8px":""};
  ${a=>a.$hasBottomPanel?"padding-bottom: 8px":""};
  box-sizing: border-box;
  display: flex;

  flex-direction: column;
  align-items: stretch;
  pointer-events: initial;
  background-color: var(--admiral-color-Special_ElevatedBG, ${a=>a.theme.color["Special/Elevated BG"]});
  max-width: calc(100vw - 32px);
  border-color: transparent;
  &:focus-visible {
    border: 0;
    outline: none;
  }
`,xx=Q(ex)`
  position: relative;
  ${a=>a.$hasTopPanel?"":"padding-top: 8px"};
  ${a=>a.$hasBottomPanel?"":"padding-bottom: 8px"};
  margin: 0;
  appearance: none;
  flex: 1 1 auto;
  border: none;
  box-sizing: border-box;
  ${yx};
  ${a=>a.$maxHeight?`max-height: ${a.$maxHeight}`:""};
`,Hf=h.forwardRef(({model:a,defaultSelected:i,selected:u,preselected:c,active:s,onPreselectItem:d,onSelectItem:g,onDeselectItem:b,onActivateItem:v,renderTopPanel:m,renderBottomPanel:y,dimension:E="l",multiSelection:x=!1,disableSelectedOptionHighlight:w=!1,onForwardCycleApprove:$,onBackwardCycleApprove:j,containerRef:R,virtualScroll:M,rowCount:D=6,parentMenuRef:L,onCloseQuery:te,defaultIsActive:Z=!0,subMenuRenderDirection:J,preventFocusSteal:ae,maxHeight:se,preselectedModeActive:ne=!1,onMenuKeyDown:ge,disableSelectionOnSpace:qe,disableSelectionOnEnter:Oe,...Xe},lt)=>{const Me=ie=>{const pe=ie?a.findIndex(Ie=>Ie.id===ie):-1;let me=pe<a.length-1?pe+1:0,je=!1;for(;(a[me].disabled||a[me].readOnly)&&!je;)me=me<a.length-1?me+1:0,je=pe===-1?me===0:me===pe;return me=!(pe>-1&&me<pe)||!$||$()?me:pe,a[me].disabled||a[me].readOnly?void 0:a[me].id},U=a.length>0?Me():void 0,[K,ee]=h.useState(i?J0(i):[]),[F,S]=h.useState(U),[B,X]=h.useState(U),P=h.useRef(null),I=h.useRef(null),[ue,re]=h.useState(null),[Ve,ve]=h.useState(!1),Je=h.useRef();h.useEffect(()=>{S(U)},[a]);const Mt=w?[]:u===void 0?K:J0(u),Pe=s===void 0?F:s,Be=ne?c===void 0?B:c:void 0,Rt=h.useRef(null),Ma=h.useRef(null),Va=!!m,$t=!!y,Qe=ie=>{Pe!==ie&&S(ie),v?.(ie)},Lt=ie=>{Be!==ie&&X(ie),d?.(ie)},zt=ie=>{const pe=dg(a,ie);if(pe&&!pe.disabled&&!pe.readOnly){const me=K.findIndex(je=>je===ie);x?me>-1?(ee(K.splice(me,1)),b?.(ie)):(ee([...K,ie]),g?.(ie)):(me===-1&&ee([ie]),g?.(ie))}},{currentActiveMenu:mt,activateMenu:ea,deactivateMenu:kl}=cg(P);h.useEffect(()=>{function ie(pe){if(mt?.current===P.current)switch(G.getCode(pe)){case G[" "]:if(qe)break;ne&&Be?zt(Be):Pe&&zt(Pe),pe.preventDefault();break;case G.Enter:if(Oe)break;ne&&Be?zt(Be):Pe&&zt(Pe),pe.preventDefault();break;case G.ArrowDown:{const me=Me(ne&&Be||Pe);ne?Lt(me):Qe(me),pe.preventDefault();break}case G.ArrowUp:{const me=(je=>{const Ie=je?a.findIndex(we=>we.id===je):-1;let Re=Ie>0?Ie-1:a.length-1,Vt=!1;for(;(a[Re].disabled||a[Re].readOnly)&&!Vt;)Re=Re>0?Re-1:a.length-1,Vt=Ie===-1?Re===0:Re===Ie;return Re=Ie>-1&&Re>Ie&&j&&!j()?Ie:Re,a[Re].disabled||a[Re].readOnly?void 0:a[Re].id})(ne&&Be||Pe);ne?Lt(me):Qe(me),pe.preventDefault();break}case G.ArrowRight:{const me=ne&&Be||Pe,je=a.find(Ie=>Ie.id===me);!je||je.disabled||je.readOnly||!je.subItems||Ve||ve(!0),I&&I.current&&ea?.(I);break}case G.ArrowLeft:L&&L.current&&te?.();break;default:ge?.(pe)}}return document.addEventListener("keydown",ie),()=>{document.removeEventListener("keydown",ie)}},[s,Pe,F,mt,Be,qe,Oe]),h.useEffect(()=>(Z&&ea?.(P),()=>{Z&&mt===P&&kl?.(P)}),[Z]);const vn=()=>{ve(!1),ea?.(P)},Fe=(ie,pe)=>{const{id:me,subItems:je,render:Ie,...Re}=ie,Vt=!!je&&je.length>0,we=Pe===me,Pt=Mt.includes(me)||hg(ie,Mt),Gt={hovered:we,preselected:Be!==void 0?Be===me:void 0,selected:Pt,onLeave:ta=>{const aa=ta.relatedTarget;aa&&Object.hasOwn(aa,"nodeName")&&!I.current?.contains(aa)&&!Ma.current?.contains(aa)&&ve(!1)},onHover:ta=>{Qe(me),ve(Vt),re(ta.currentTarget)},onMouseDown:ae?ta=>ta.preventDefault():void 0,onClick:()=>zt(me),hasSubmenu:Vt,disabled:Re.disabled,...Re};return typeof Ie=="function"?Ie({containerRef:R,...Gt}):N.jsx(Rf,{...Gt,children:Ie},`${ie.id}-${pe}`)},ql=h.useRef(),Aa=h.useRef(),yt=h.useRef(),Ke=h.useRef();h.useLayoutEffect(()=>{setTimeout(()=>{let ie;if(s&&ql.current!==s||Aa.current!==F?ie=Rt.current?.querySelector('[data-hovered="true"]'):(c&&yt.current!==c||Ke.current!==B)&&(ie=Rt.current?.querySelector('[data-preselected="true"]')),ie){const pe=Date.now(),me=Je.current;ie?.scrollIntoView({behavior:!me||pe-me<150?"auto":"smooth",inline:"center",block:"nearest"}),Je.current=pe,ql.current=s,Aa.current=F,yt.current=c,Ke.current=B}},0)},[s,F,c,B,a]);const ut=og(Xe);return h.useEffect(()=>{if(!ue||!Rt.current)return;const ie={root:Rt.current,rootMargin:"0px",threshold:.5},pe=new IntersectionObserver(me=>{me.forEach(je=>{ve(!(je.intersectionRatio<ie.threshold))})},ie);return pe.observe(ue),()=>pe.disconnect()},[ue]),N.jsxs(bx,{ref:va(P,lt),$dimension:E,$hasTopPanel:Va,$hasBottomPanel:$t,onMouseEnter:ie=>{mt!==P&&ea?.(P),Xe.onMouseEnter?.(ie)},onMouseLeave:ie=>{Qe(void 0),Xe.onMouseLeave?.(ie)},onFocus:ie=>{mt!==P&&ea?.(P),Xe.onFocus?.(ie)},onBlur:ie=>{mt===P&&kl?.(P),Xe.onBlur?.(ie)},...Xe,children:[Va&&m({dimension:E}),N.jsx(xx,{$dimension:E,$rowCount:D,$hasTopPanel:Va,$hasBottomPanel:$t,$maxHeight:se,...ut,verticalScrollProps:{ref:Ma},contentBlockProps:{ref:Rt},children:M?(()=>{if(!M)return null;const ie=M.itemHeight==="auto"?pg(E):M.itemHeight;return N.jsx(sx,{scrollContainerRef:Rt,itemHeight:ie,model:a,rowCount:D,activeId:Pe,selected:Mt,onRenderItem:Fe})})():a.map((ie,pe)=>Fe({dimension:E,...ie},pe))}),Ve&&ue&&N.jsx(mg,{targetElement:ue,defaultRenderDirection:J,onClickOutside:L?void 0:()=>{ve(!1)},children:(()=>{const ie=a.find(pe=>pe.id===Pe);return ie&&ie.subItems&&ie.subItems.length>0&&N.jsx(Hf,{ref:I,dimension:E,parentMenuRef:P,model:ie.subItems,subMenuRenderDirection:J,onCloseQuery:vn,selected:Mt,onSelectItem:pe=>zt(pe),virtualScroll:M,preventFocusSteal:!0})})()}),$t&&y({dimension:E})]})});Hf.displayName="Menu";var I0;function lf(){return lf=Object.assign?Object.assign.bind():function(a){for(var i=1;i<arguments.length;i++){var u=arguments[i];for(var c in u)({}).hasOwnProperty.call(u,c)&&(a[c]=u[c])}return a},lf.apply(null,arguments)}var Su=function(a){return h.createElement("svg",lf({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},a),I0||(I0=h.createElement("path",{fill:"#74767B",d:"M6.4 5.49a.63.63 0 0 0-.91 0c-.26.25-.26.66 0 .91l5.59 5.59-5.49 5.5c-.26.25-.26.66 0 .91.25.26.66.26.91 0l5.5-5.49 5.49 5.49c.25.26.66.26.91 0 .26-.25.26-.66 0-.91l-5.49-5.5L18.5 6.4c.26-.25.26-.66 0-.91a.63.63 0 0 0-.91 0L12 11.08z"})))};function $i(a){switch(a){case"lSmall":case"lBig":default:return 24;case"mSmall":case"mBig":return 20;case"s":return 16}}function gg(a){switch(a){case"lBig":case"mBig":default:return 6;case"lSmall":case"mSmall":case"s":return 4}}function ep(a){return $i(a)+2*gg(a)}const Sx=Y`
  & *[fill^='#'] {
    fill: ${a=>{switch(a.$iconColor){case"primary":return`var(--admiral-color-Primary_Primary60Main, ${a.theme.color["Primary/Primary 60 Main"]})`;case"secondary":return`var(--admiral-color-Neutral_Neutral50, ${a.theme.color["Neutral/Neutral 50"]})`;default:return a.$iconColor}}};
  }
`,Ex=Q.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;

  ${Sx}

  & > svg {
    height: ${a=>$i(a.$dimension)}px;
    width: ${a=>$i(a.$dimension)}px;
  }
`,yi=Q.div`
  width: ${a=>ep(a.$dimension)}px;
  height: ${a=>ep(a.$dimension)}px;
  border-radius: 50%;
  background-color: transparent;
  pointer-events: none;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`,$x=Y`
  &:focus-visible {
    outline-offset: 2px;
    outline: var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]}) solid 2px;
  }

  &:focus {
    > ${yi} {
      background-color: ${a=>a.$highlightFocus?`var(--admiral-color-Opacity_Focus, ${a.theme.color["Opacity/Focus"]})`:"transparent"};
    }
  }
  &:hover {
    > ${yi} {
      background-color: var(--admiral-color-Opacity_Hover, ${a=>a.theme.color["Opacity/Hover"]});
    }
  }
  &:active {
    > ${yi} {
      background-color: var(--admiral-color-Opacity_Press, ${a=>a.theme.color["Opacity/Press"]});
    }
  }
  &:focus-visible {
    > ${yi} {
      background-color: transparent;
    }
  }
`,_x=Q.button`
  position: relative;
  padding: 0;
  margin: ${a=>gg(a.$dimension)}px;
  box-sizing: border-box;
  border: none;
  background-color: transparent;
  appearance: none;
  flex: 0 0 auto;
  height: ${a=>$i(a.$dimension)}px;
  width: ${a=>$i(a.$dimension)}px;
  border-radius: var(--admiral-border-radius-Small, ${a=>ur(a.theme.shape)});
  overflow: visible;

  cursor: pointer;
  > * {
    pointer-events: none;
  }

  &:disabled {
    cursor: not-allowed;
    & *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    }
  }
  &:not(:disabled) {
    ${$x}
  }
`,Nx=h.forwardRef(({type:a="button",dimension:i="lBig",disabled:u=!1,highlightFocus:c=!0,appearance:s,children:d,...g},b)=>{const v=typeof s=="object"?s.iconColor?s.iconColor:"secondary":s;return N.jsxs(_x,{ref:b,type:a,$dimension:i,disabled:u,$highlightFocus:c,...g,children:[N.jsx(yi,{$dimension:i,"aria-hidden":!0}),N.jsx(Ex,{$dimension:i,$iconColor:v,"aria-hidden":!0,children:d})]})}),wx=h.forwardRef(({className:a,...i},u)=>N.jsx(Nx,{ref:u,className:`close-button ${a||""}`,...i,children:N.jsx(Su,{"aria-hidden":!0})}));var tp,ap,lp,np,rp,ip;function nf(){return nf=Object.assign?Object.assign.bind():function(a){for(var i=1;i<arguments.length;i++){var u=arguments[i];for(var c in u)({}).hasOwnProperty.call(u,c)&&(a[c]=u[c])}return a},nf.apply(null,arguments)}var Tx=function(a){return h.createElement("svg",nf({xmlns:"http://www.w3.org/2000/svg",fill:"none"},a),tp||(tp=h.createElement("style",null,"@container (min-width: 64px){svg path.Subtract_svg__spinner-icon:not([data-dimension=xl]){display:none}}@container (max-width: 48px) and (min-width: 25px){svg path.Subtract_svg__spinner-icon:not([data-dimension=l]){display:none}}@container (max-width: 24px) and (min-width: 21px){svg path.Subtract_svg__spinner-icon:not([data-dimension=m]){display:none}}@container (max-width: 20px) and (min-width: 17px){svg path.Subtract_svg__spinner-icon:not([data-dimension=ms]){display:none}}@container (max-width: 16px){svg path.Subtract_svg__spinner-icon:not([data-dimension=s]){display:none}}")),ap||(ap=h.createElement("path",{fillRule:"evenodd",d:"M58.607 49.778a32 32 0 0 0 5.252-14.782C64.016 33.346 62.658 32 61 32s-2.982 1.349-3.17 2.995C56.343 47.944 45.346 58 32 58 17.64 58 6 46.36 6 32 6 18.654 16.056 7.656 29.005 6.17 30.651 5.983 32 4.658 32 3S30.654-.015 29.004.14a32 32 0 1 0 29.603 49.638",className:"Subtract_svg__spinner-icon",clipRule:"evenodd","data-dimension":"xl"})),lp||(lp=h.createElement("path",{fillRule:"evenodd",d:"M43.955 37.334a24 24 0 0 0 3.915-10.838C48.014 25.122 46.88 24 45.5 24s-2.483 1.125-2.662 2.494C41.616 35.81 33.648 43 24 43 13.507 43 5 34.493 5 24c0-9.648 7.191-17.616 16.506-18.838C22.875 4.982 24 3.881 24 2.5c0-1.38-1.122-2.513-2.496-2.37a24 24 0 1 0 22.451 37.204",className:"Subtract_svg__spinner-icon",clipRule:"evenodd","data-dimension":"l"})),np||(np=h.createElement("path",{fillRule:"evenodd",d:"M21.978 18.667a12 12 0 0 0 1.928-5.17C24.01 12.673 23.328 12 22.5 12s-1.487.677-1.623 1.494C20.165 17.754 16.462 21 12 21a9 9 0 0 1-1.494-17.877C11.323 2.987 12 2.328 12 1.5S11.326-.01 10.504.094a12 12 0 1 0 11.474 18.573",className:"Subtract_svg__spinner-icon",clipRule:"evenodd","data-dimension":"m"})),rp||(rp=h.createElement("path",{fillRule:"evenodd",d:"M18.378 15.54a10 10 0 0 0 1.613-4.324c.087-.687-.483-1.25-1.176-1.25-.692 0-1.243.565-1.357 1.248a7.526 7.526 0 1 1-8.672-8.672c.683-.114 1.249-.665 1.249-1.357 0-.693-.564-1.263-1.251-1.176a10.035 10.035 0 1 0 9.594 15.531",className:"Subtract_svg__spinner-icon",clipRule:"evenodd","data-dimension":"ms"})),ip||(ip=h.createElement("path",{fillRule:"evenodd",d:"M14.652 12.445a8 8 0 0 0 1.286-3.448C16.006 8.45 15.552 8 15 8s-.991.451-1.082.996A6.002 6.002 0 0 1 2 8a6 6 0 0 1 5.004-5.918C7.55 1.992 8 1.552 8 1S7.55-.006 7.003.062a8 8 0 1 0 7.649 12.383",className:"Subtract_svg__spinner-icon",clipRule:"evenodd","data-dimension":"s"})))};const Mx=ig`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,vg=Q(Tx)`
  animation: ${Mx} 1s linear infinite;
  path {
    fill: ${({$inverse:a,theme:i})=>a?`var(--admiral-color-Special_StaticWhite, ${i.color["Special/Static White"]})`:`var(--admiral-color-Primary_Primary60Main, ${i.color["Primary/Primary 60 Main"]})`};
  }
  width: 100%;
  height: 100%;
`,Ax=a=>ig`
  0% {
    background-color: var(--admiral-color-Neutral_Neutral10, ${a.theme.color["Neutral/Neutral 10"]});
    border-color: var(--admiral-color-Neutral_Neutral10, ${a.theme.color["Neutral/Neutral 10"]});
  }
  50% {
    background-color: var(--admiral-color-Neutral_Neutral20, ${a.theme.color["Neutral/Neutral 20"]});
    border-color: var(--admiral-color-Neutral_Neutral20, ${a.theme.color["Neutral/Neutral 20"]});
  }
  100% {
    background-color: var(--admiral-color-Neutral_Neutral10, ${a.theme.color["Neutral/Neutral 10"]});
    border-color: var(--admiral-color-Neutral_Neutral10, ${a.theme.color["Neutral/Neutral 10"]});
  }
`,jf=Y`
  animation: ${a=>Ax(a)} 2s ease infinite;
`,Cx=()=>{let a=0;const i=document.createElement("div");return i.innerHTML=`Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem 
    nonummy nibh euismod tincidunt ut lacreet dolore magna aliguam erat volutpat. 
    Ut wisis enim ad minim veniam, quis nostrud exerci tution ullamcorper suscipit 
    lobortis nisl ut aliquip ex ea commodo consequat.`,i.style.overflow="scroll",i.style.fontSize="14px",i.style.height="50px",i.style.maxHeight="50px",i.style.width="100px",i.style.position="absolute",i.style.top="-100000px",i.style.left="-100000px",document.body.appendChild(i),a=i.offsetWidth-i.clientWidth,document.body.removeChild(i),a||16},Ox=Q.div`
  box-sizing: border-box;
  opacity: 0;
  transition-delay: 200ms;
  transition-property: opacity;
  align-self: center;
  width: max-content;
  min-width: max-content;
  pointer-events: initial;
`,Dx=Q.div`
  box-sizing: border-box;
  background-color: var(--admiral-color-Neutral_Neutral80, ${a=>a.theme.color["Neutral/Neutral 80"]});
  ${a=>a.$dimension==="m"?Ne["Body/Body 2 Short"]:Ne["Caption/Caption 1"]}
  color: var(--admiral-color-Neutral_Neutral00, ${a=>a.theme.color["Neutral/Neutral 00"]});
  border-radius: var(--admiral-border-radius-Small, ${a=>ur(a.theme.shape)});
  box-shadow: var(--admiral-box-shadow-Shadow04, ${a=>xu(a.theme.shadow["Shadow 04"])});
  padding: ${a=>a.$dimension==="m"?"4px 8px":"2px 6px"};
  max-width: min(488px, calc(100vw - 16px));
  overflow-wrap: break-word;
`,Bx=Q.div`
  pointer-events: none;
  height: 100%;
  width: 100%;
  flex: 0 0 auto;
`,Rx=Q(Cf)`
  display: flex;
  flex-wrap: nowrap;
  ${({$flexDirection:a})=>a?`flex-direction: ${a};`:""}
  z-index: var(--admiral-z-index-tooltip, ${({theme:a})=>a.zIndex.tooltip});
`;function zx(a,i,u,c){const s=a.getBoundingClientRect(),d=i.getBoundingClientRect(),g=Object.entries(function(m){return{bottom:{check:(y,E)=>{const x=globalThis.innerHeight-y.bottom-m>8+E.height,w=y.left+y.width/2>E.width/2,$=globalThis.innerWidth-y.right-m+y.width/2>E.width/2;return x&&w&&$}},top:{check:(y,E)=>{const x=y.top>8+E.height,w=y.left+y.width/2>E.width/2,$=globalThis.innerWidth-y.right-m+y.width/2>E.width/2;return x&&w&&$}},left:{check:(y,E)=>{const x=y.left>8+E.width,w=y.top>(E.height-y.height)/2,$=globalThis.innerHeight-y.bottom-m>(E.height-y.height)/2;return x&&$&&w}},right:{check:(y,E)=>{const x=globalThis.innerWidth-y.right-m>8+E.width,w=y.top>(E.height-y.height)/2,$=globalThis.innerHeight-y.bottom-m>(E.height-y.height)/2;return x&&$&&w}},bottomRight:{check:(y,E)=>{const x=globalThis.innerHeight-y.bottom-m>8+E.height,w=globalThis.innerWidth-y.left-m>E.width;return x&&w}},bottomLeft:{check:(y,E)=>{const x=globalThis.innerHeight-y.bottom-m>8+E.height,w=y.right>E.width;return x&&w}},topRight:{check:(y,E)=>{const x=y.top>8+E.height,w=globalThis.innerWidth-y.left-m>E.width;return x&&w}},topLeft:{check:(y,E)=>{const x=y.top>8+E.height,w=y.right>E.width;return x&&w}},leftBottom:{check:(y,E)=>{const x=y.left>8+E.width,w=globalThis.innerHeight-y.top-m>E.height;return x&&w}},leftTop:{check:(y,E)=>{const x=y.left>8+E.width,w=y.bottom>E.height;return x&&w}},rightBottom:{check:(y,E)=>{const x=globalThis.innerWidth-y.right-m>8+E.width,w=globalThis.innerHeight-y.top-m>E.height;return x&&w}},rightTop:{check:(y,E)=>{const x=globalThis.innerWidth-y.right-m>8+E.width,w=y.bottom>E.height;return x&&w}},bottomPageCenter:{check:(y,E)=>{const x=globalThis.innerHeight-y.bottom-m>8+E.height,w=globalThis.innerWidth-m>=E.width;return x&&w}},topPageCenter:{check:(y,E)=>{const x=y.top>8+E.height,w=globalThis.innerWidth-m>=E.width;return x&&w}}}}(u)),b=c?g.filter(m=>m[0].includes(c)&&m[1].check(s,d)):g.filter(m=>m[1].check(s,d)),v=c||"bottom";return b.length?b[0][0]:v}const Hx=1500,dr=h.forwardRef(({dimension:a="m",renderContent:i,targetElement:u,tooltipPosition:c,...s},d)=>{const g=h.useRef(null),b=h.useRef(0),{rootRef:v}=h.useContext(Mi),m=h.useMemo(()=>!i()&&i()!==0,[i]),[y,E]=h.useState(),[x,w]=h.useState(!1),[$,j]=h.useState({});return h.useEffect(()=>{(R=>{const M=u;if(M&&g.current){const D=zx(M,g.current,R,c),L=g.current;switch(D){case"leftBottom":case"leftTop":case"left":E("row-reverse"),w(!1),L.style.margin="0 8px 0 0",L.style.alignSelf=D==="leftBottom"?"flex-start":D==="leftTop"?"flex-end":"center";break;case"rightBottom":case"rightTop":case"right":E("row"),w(!1),L.style.margin="0 0 0 8px",L.style.alignSelf=D==="rightBottom"?"flex-start":D==="rightTop"?"flex-end":"center";break;case"topPageCenter":case"topLeft":case"topRight":case"top":E("column-reverse"),w(D==="topPageCenter"),L.style.margin="0 0 8px 0",L.style.alignSelf=D==="topLeft"?"flex-end":D==="topRight"?"flex-start":"center";break;default:E("column"),w(D==="bottomPageCenter"),L.style.margin="8px 0 0 0",L.style.alignSelf=D==="bottomLeft"?"flex-end":D==="bottomRight"?"flex-start":"center"}}})(Cx())},[i(),u,c,$]),h.useLayoutEffect(()=>{if(g.current&&!m){const R=new ResizeObserver(M=>{M.forEach(D=>{b.current===0?b.current=D.contentRect.height:j({})})});return R.observe(g.current),()=>{R.disconnect()}}},[m]),h.useEffect(()=>{g.current&&!m&&(g.current.style.opacity="1")},[m]),m?null:N.jsxs(Rx,{targetElement:u,rootRef:v,$flexDirection:y,fullContainerWidth:x,children:[N.jsx(Bx,{}),N.jsx(Ox,{ref:va(d,g),children:N.jsx(Dx,{role:"tooltip",$dimension:a,...s,children:i()})})]})});dr.displayName="Tooltip";function jx(a){return Df((i,u)=>{const{renderContent:c,container:s,withDelay:d,tooltipRef:g,tooltipPosition:b,tooltipDimension:v,...m}=i,y=!c()&&c()!==0,E=h.useRef(null),[x,w]=h.useState(!1),[$,j]=h.useState(null),[R,M]=h.useState();return h.useEffect(()=>{function D(){M(setTimeout(()=>w(!0),d?Hx:0))}function L(){clearTimeout(R),w(!1)}if($)return $.addEventListener("mouseenter",D),$.addEventListener("focus",D),$.addEventListener("mouseleave",L),$.addEventListener("blur",L),()=>{R&&clearTimeout(R),$.removeEventListener("mouseenter",D),$.removeEventListener("focus",D),$.removeEventListener("mouseleave",L),$.removeEventListener("blur",L)}},[$,M,w,R]),N.jsxs(N.Fragment,{children:[N.jsx(a,{...m,ref:va(u,E,j)}),x&&!y&&N.jsx(dr,{targetElement:E.current,renderContent:c,container:s,tooltipPosition:b,dimension:v,ref:g})]})})}const Lx=Y`
  background: ${({$appearance:a,theme:i})=>{switch(a){case"info":return`var(--admiral-color-Primary_Primary60Main, ${i.color["Primary/Primary 60 Main"]})`;case"warning":return`var(--admiral-color-Warning_Warning50Main, ${i.color["Warning/Warning 50 Main"]})`;case"success":return`var(--admiral-color-Success_Success50Main, ${i.color["Success/Success 50 Main"]})`;case"error":return`var(--admiral-color-Error_Error60Main, ${i.color["Error/Error 60 Main"]})`;case"grey":return`var(--admiral-color-Neutral_Neutral50, ${i.color["Neutral/Neutral 50"]})`;case"dark":return`var(--admiral-color-Neutral_Neutral80, ${i.color["Neutral/Neutral 80"]})`;case"whiteBlue":return`var(--admiral-color-Special_StaticWhite, ${i.color["Special/Static White"]})`;case"white":case"whiteInactive":case"whiteDisable":return`var(--admiral-color-Neutral_Neutral00, ${i.color["Neutral/Neutral 00"]})`;default:return`var(--admiral-color-Opacity_Neutral8, ${i.color["Opacity/Neutral 8"]})`}}};
`,Ux=Y`
  color: ${({$appearance:a,theme:i})=>{switch(a){case"info":case"warning":case"success":case"error":case"grey":return`var(--admiral-color-Special_StaticWhite, ${i.color["Special/Static White"]})`;case"dark":return`var(--admiral-color-Neutral_Neutral00, ${i.color["Neutral/Neutral 00"]})`;case"whiteBlue":return`var(--admiral-color-Primary_Primary60Main, ${i.color["Primary/Primary 60 Main"]})`;case"lightInactive":case"whiteInactive":return`var(--admiral-color-Neutral_Neutral50, ${i.color["Neutral/Neutral 50"]})`;case"whiteDisable":case"lightDisable":return`var(--admiral-color-Neutral_Neutral30, ${i.color["Neutral/Neutral 30"]})`;default:return`var(--admiral-color-Neutral_Neutral90, ${i.color["Neutral/Neutral 90"]})`}}};
`,kx=Q.div`
  position: relative;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({$dimension:a})=>a==="s"?"0 5px":"0 6px"};
  height: ${({$dimension:a})=>a==="s"?"16px":"20px"};
  border-radius: ${({$dimension:a})=>a==="s"?"8px":"10px"};
  ${({$dimension:a})=>a==="s"?Ne["Caption/Caption 1"]:Ne["Body/Body 2 Long"]}
  ${Lx}
  ${Ux}
  user-select: none;
`,Lf=h.forwardRef(({children:a,dimension:i="m",appearance:u="light",locale:c,...s},d)=>{const g=Af()||bu,b=c?.amountAriaLabel||g.locales[g.currentLocale].badge.amountAriaLabel;return N.jsx(kx,{ref:d,$dimension:i,$appearance:u,"aria-label":`${b} ${a}`,...s,children:a})});Lf.displayName="Badge";Q(Lf)`
  &:is(input:checked + div *) {
    background: ${a=>a.$disabled?`var(--admiral-color-Neutral_Neutral00, ${a.theme.color["Neutral/Neutral 00"]})`:`var(--admiral-color-Special_StaticWhite, ${a.theme.color["Special/Static White"]})`};
    color: ${a=>a.$disabled?`var(--admiral-color-Neutral_Neutral30, ${a.theme.color["Neutral/Neutral 30"]})`:`var(--admiral-color-Primary_Primary60Main, ${a.theme.color["Primary/Primary 60 Main"]})`};
  }
`;const op=Y`
  background-color: var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]});
  color: var(--admiral-color-Special_StaticWhite, ${a=>a.theme.color["Special/Static White"]});
  border: 1px solid var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]});
  &&& *[fill^='#'] {
    fill: var(--admiral-color-Special_StaticWhite, ${a=>a.theme.color["Special/Static White"]});
  }

  &&&:hover {
    background-color: var(--admiral-color-Primary_Primary70, ${a=>a.theme.color["Primary/Primary 70"]});
    border-color: var(--admiral-color-Primary_Primary70, ${a=>a.theme.color["Primary/Primary 70"]});
  }

  &&&:active {
    background-color: var(--admiral-color-Primary_Primary80, ${a=>a.theme.color["Primary/Primary 80"]});
    border-color: var(--admiral-color-Primary_Primary80, ${a=>a.theme.color["Primary/Primary 80"]});
  }

  &&&&[data-appearance~='disabled'],
  &&&:disabled {
    background-color: var(--admiral-color-Neutral_Neutral10, ${a=>a.theme.color["Neutral/Neutral 10"]});
    color: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    border-color: var(--admiral-color-Neutral_Neutral10, ${a=>a.theme.color["Neutral/Neutral 10"]});
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    }
  }
`,up=Y`
  background-color: transparent;
  color: var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]});
  border: 1px solid var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]});

  &&& *[fill^='#'] {
    fill: var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]});
  }

  &&&:hover {
    background-color: var(--admiral-color-Opacity_Hover, ${a=>a.theme.color["Opacity/Hover"]});
    color: var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]});
    border-color: var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]});
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]});
    }
  }

  &&&:active {
    background-color: var(--admiral-color-Opacity_Press, ${a=>a.theme.color["Opacity/Press"]});
    color: var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]});
    border-color: var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]});
    & *[fill^='#'] {
      fill: var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]});
    }
  }

  &&&[data-appearance~='disabled'],
  &&&:disabled {
    background-color: transparent;
    color: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    &:not(.button-group > button) {
      border-color: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    }
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    }
  }
`,cp=Y`
  background-color: var(--admiral-color-Opacity_Neutral8, ${a=>a.theme.color["Opacity/Neutral 8"]});
  color: var(--admiral-color-Neutral_Neutral90, ${a=>a.theme.color["Neutral/Neutral 90"]});
  border: 1px solid transparent;

  &&& *[fill^='#'] {
    fill: var(--admiral-color-Neutral_Neutral50, ${a=>a.theme.color["Neutral/Neutral 50"]});
  }

  &&&:hover {
    background-color: var(--admiral-color-Opacity_Neutral12, ${a=>a.theme.color["Opacity/Neutral 12"]});
    color: var(--admiral-color-Neutral_Neutral90, ${a=>a.theme.color["Neutral/Neutral 90"]});
    border-color: transparent;
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral50, ${a=>a.theme.color["Neutral/Neutral 50"]});
    }
  }

  &&&:active {
    background-color: var(--admiral-color-Opacity_Neutral16, ${a=>a.theme.color["Opacity/Neutral 16"]});
    color: var(--admiral-color-Neutral_Neutral90, ${a=>a.theme.color["Neutral/Neutral 90"]});
    border-color: transparent;
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral50, ${a=>a.theme.color["Neutral/Neutral 50"]});
    }
  }

  &&&[data-appearance~='disabled'],
  &&&:disabled {
    background-color: var(--admiral-color-Opacity_Neutral8, ${a=>a.theme.color["Opacity/Neutral 8"]});
    color: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    border-color: transparent;
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    }
  }
`,qx=Y`
  background-color: transparent;
  color: var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]});
  border: 1px solid transparent;

  &&& *[fill^='#'] {
    fill: var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]});
  }

  &&&:hover {
    background-color: var(--admiral-color-Opacity_Hover, ${a=>a.theme.color["Opacity/Hover"]});
    color: var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]});
    border-color: transparent;
    & *[fill^='#'] {
      fill: var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]});
    }
  }

  &&&:active {
    background-color: var(--admiral-color-Opacity_Press, ${a=>a.theme.color["Opacity/Press"]});
    color: var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]});
    border-color: transparent;
    & *[fill^='#'] {
      fill: var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]});
    }
  }

  &&&[data-appearance~='disabled'],
  &&&:disabled {
    background-color: transparent;
    color: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    border-color: transparent;
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    }
  }
`,Yx=Y`
  background-color: transparent;
  color: var(--admiral-color-Special_StaticWhite, ${a=>a.theme.color["Special/Static White"]});
  border: 1px solid var(--admiral-color-Special_StaticWhite, ${a=>a.theme.color["Special/Static White"]});
  &&& *[fill^='#'] {
    fill: var(--admiral-color-Special_StaticWhite, ${a=>a.theme.color["Special/Static White"]});
  }

  &&&:hover {
    background-color: var(
      --admiral-color-Opacity_DarkStaticHover,
      ${a=>a.theme.color["Opacity/Dark Static Hover"]}
    );
    color: var(--admiral-color-Special_StaticWhite, ${a=>a.theme.color["Special/Static White"]});
    border-color: var(--admiral-color-Special_StaticWhite, ${a=>a.theme.color["Special/Static White"]});
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Special_StaticWhite, ${a=>a.theme.color["Special/Static White"]});
    }
  }

  &&&:active {
    background-color: var(
      --admiral-color-Opacity_DarkStaticPress,
      ${a=>a.theme.color["Opacity/Dark Static Press"]}
    );
    color: var(--admiral-color-Special_StaticWhite, ${a=>a.theme.color["Special/Static White"]});
    border-color: var(--admiral-color-Special_StaticWhite, ${a=>a.theme.color["Special/Static White"]});
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Special_StaticWhite, ${a=>a.theme.color["Special/Static White"]});
    }
  }

  &&&[data-appearance~='disabled'],
  &&&:disabled {
    border-color: var(
      --admiral-color-Special_DarkStaticNeutral30,
      ${a=>a.theme.color["Special/Dark Static Neutral 30"]}
    );
    color: var(--admiral-color-Special_DarkStaticNeutral30, ${a=>a.theme.color["Special/Dark Static Neutral 30"]});
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Special_DarkStaticNeutral30, ${a=>a.theme.color["Special/Dark Static Neutral 30"]});
    }
  }
`,Vx=Y`
  background-color: var(--admiral-color-Error_Error60Main, ${a=>a.theme.color["Error/Error 60 Main"]});
  color: var(--admiral-color-Special_StaticWhite, ${a=>a.theme.color["Special/Static White"]});
  border: 1px solid var(--admiral-color-Error_Error60Main, ${a=>a.theme.color["Error/Error 60 Main"]});
  &&& *[fill^='#'] {
    fill: var(--admiral-color-Special_StaticWhite, ${a=>a.theme.color["Special/Static White"]});
  }

  &&&:hover {
    background-color: var(--admiral-color-Error_Error70, ${a=>a.theme.color["Error/Error 70"]});
    border-color: var(--admiral-color-Error_Error70, ${a=>a.theme.color["Error/Error 70"]});
  }

  &&&:active {
    background-color: var(--admiral-color-Error_Error80, ${a=>a.theme.color["Error/Error 80"]});
    border-color: var(--admiral-color-Error_Error80, ${a=>a.theme.color["Error/Error 80"]});
  }

  &&&[data-appearance~='disabled'],
  &&&:disabled {
    background-color: var(--admiral-color-Neutral_Neutral10, ${a=>a.theme.color["Neutral/Neutral 10"]});
    color: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    border-color: var(--admiral-color-Neutral_Neutral10, ${a=>a.theme.color["Neutral/Neutral 10"]});
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    }
  }
`,Px=Y`
  background-color: var(--admiral-color-Success_Success50Main, ${a=>a.theme.color["Success/Success 50 Main"]});
  color: var(--admiral-color-Special_StaticWhite, ${a=>a.theme.color["Special/Static White"]});
  border: 1px solid var(--admiral-color-Success_Success50Main, ${a=>a.theme.color["Success/Success 50 Main"]});

  &&& *[fill^='#'] {
    fill: var(--admiral-color-Special_StaticWhite, ${a=>a.theme.color["Special/Static White"]});
  }

  &&&:hover {
    background-color: var(--admiral-color-Success_Success60, ${a=>a.theme.color["Success/Success 60"]});
    border-color: var(--admiral-color-Success_Success60, ${a=>a.theme.color["Success/Success 60"]});
  }

  &&&:active {
    background-color: var(--admiral-color-Success_Success70, ${a=>a.theme.color["Success/Success 70"]});
    border-color: var(--admiral-color-Success_Success70, ${a=>a.theme.color["Success/Success 70"]});
  }

  &&&[data-appearance~='disabled'],
  &&&:disabled {
    background-color: var(--admiral-color-Neutral_Neutral10, ${a=>a.theme.color["Neutral/Neutral 10"]});
    color: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    border-color: var(--admiral-color-Neutral_Neutral10, ${a=>a.theme.color["Neutral/Neutral 10"]});
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    }
  }
`,Gx=Y`
  &:focus-visible {
    outline-offset: 2px;
    outline: var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]}) solid 2px;
  }
`,Xx=Y`
  &[data-appearance~='primary']:not(.button-group > button) {
    ${op}
  }
  &[data-appearance~='secondary']:not(.button-group > button) {
    ${up}
  }
  &[data-appearance~='tertiary']:not(.button-group > button) {
    ${cp}
  }
  &[data-appearance~='ghost']:not(.button-group > button) {
    ${qx}
  }
  &[data-appearance~='white']:not(.button-group > button) {
    ${Yx}
  }
  &[data-appearance~='danger']:not(.button-group > button) {
    ${Vx}
  }
  &[data-appearance~='success']:not(.button-group > button) {
    ${Px}
  }
  &:is(.button-group[data-appearance='primary'] > button) {
    ${op}
  }
  &:is(.button-group[data-appearance='secondary'] > button) {
    ${up}
  }
  &:is(.button-group[data-appearance='tertiary'] > button) {
    ${cp}
  }

  ${Gx}
`,cr=Q.div``;function Ll(a){switch(a){case"s":return 13;case"m":return 17;case"l":return 21;default:return 29}}Y`
  .button-group[data-dimension='xl'] &&,
  &[data-dimension='xl'] {
    ${a=>!a.$displayAsSquare&&`padding-left: ${Ll("xl")}px;`}
  }

  .button-group[data-dimension='l'] &&,
  &[data-dimension='l'] {
    ${a=>!a.$displayAsSquare&&`padding-left: ${Ll("l")}px;`}
  }

  .button-group[data-dimension='m'] &&,
  &[data-dimension='m'] {
    ${a=>!a.$displayAsSquare&&`padding-left: ${Ll("m")}px;`}
  }

  .button-group[data-dimension='s'] &&,
  &[data-dimension='s'] {
    ${a=>!a.$displayAsSquare&&`padding-left: ${Ll("s")}px;`}
  }
`;Y`
  .button-group[data-dimension='xl'] &&,
  &[data-dimension='xl'] {
    ${a=>!a.$displayAsSquare&&`padding-right: ${Ll("xl")}px;`}
  }

  .button-group[data-dimension='l'] &&,
  &[data-dimension='l'] {
    ${a=>!a.$displayAsSquare&&`padding-right: ${Ll("l")}px;`}
  }

  .button-group[data-dimension='m'] &&,
  &[data-dimension='m'] {
    ${a=>!a.$displayAsSquare&&`padding-right: ${Ll("m")}px;`}
  }

  .button-group[data-dimension='s'] &&,
  &[data-dimension='s'] {
    ${a=>!a.$displayAsSquare&&`padding-right: ${Ll("s")}px;`}
  }
`;const sp=Y`
  padding: 0;
  height: 56px;
  ${a=>a.$displayAsSquare?"width: 56px;":"padding: 0 29px;"}
  ${cr} {
    width: 24px;
    height: 24px;
  }

  ${Ne["Button/Button 1"]}
`,Qx=Y`
  ${sp}

  .button-group[data-dimension='xl'] &&,
  &[data-dimension='xl'] {
    ${sp}
  }

  .button-group[data-dimension='l'] &&,
  &[data-dimension='l'] {
    height: 48px;
    ${a=>a.$displayAsSquare?"width: 48px;":"padding: 0 21px;"}
  }

  .button-group[data-dimension='m'] &&,
  &[data-dimension='m'] {
    height: 40px;
    ${a=>a.$displayAsSquare?"width: 40px;":"padding: 0 17px;"}
  }

  .button-group[data-dimension='s'] &&,
  &[data-dimension='s'] {
    height: 32px;
    ${a=>a.$displayAsSquare?"width: 32px;":"padding: 0 13px;"}
    ${cr} {
      width: 20px;
      height: 20px;
    }
    ${Ne["Button/Button 2"]}
  }
`,yg=Q.div`
  vertical-align: top;

  display: inline-flex;
  gap: 8px;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  max-width: calc(100% - ${a=>a.$addPadding}px);

  > * {
    display: inline-block;
    flex: 0 1 auto;
    white-space: nowrap;
  }
  > ${cr} {
    flex: 0 0 auto;
  }

  height: 24px;
  & > svg {
    width: 24px;
    height: 24px;
  }

  .button-group[data-dimension='m'] &&,
  .button-group[data-dimension='l'] &&,
  .button-group[data-dimension='xl'] && {
    height: 24px;
    & > svg {
      width: 24px;
      height: 24px;
    }
  }
  .button-group[data-dimension='s'] &&,
  [data-dimension='s'] & {
    height: 20px;
    & > svg {
      width: 20px;
      height: 20px;
    }
  }
`,Zx=Q(cr)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  container-type: inline-size;
  .button-group[data-appearance='primary'] & {
    & path {
      fill: ${a=>`var(--admiral-color-Special_StaticWhite, ${a.theme.color["Special/Static White"]})`};
    }
  }
  .button-group[data-appearance='secondary'] &,
  .button-group[data-appearance='tertiary'] & {
    & path {
      fill: ${a=>`var(--admiral-color-Primary_Primary60Main, ${a.theme.color["Primary/Primary 60 Main"]})`};
    }
  }
`,fp=Q.div`
  display: inline-block;
  width: 2px;
`,fu=h.forwardRef(({appearance:a="primary",dimension:i="xl",type:u="button",loading:c=!1,skeleton:s=!1,iconStart:d,iconEnd:g,icon:b,iconPlace:v="left",children:m,buttonCssMixin:y,displayAsDisabled:E,displayAsSquare:x,...w},$)=>{const j=!!d||!!b&&v==="left",R=!!g||!!b&&v==="right",M=(x||j?0:2)+(x||R?0:2);return N.jsxs(Fx,{ref:$,$appearance:a,$dimension:i,type:u,$loading:c,$skeleton:s,$buttonCssMixin:y,$displayAsSquare:x,$displayAsDisabled:E,...w,children:[c&&N.jsx(Zx,{children:N.jsx(vg,{$inverse:a!=="secondary"&&a!=="tertiary"&&a!=="ghost"})}),!x&&!j&&N.jsx(fp,{}),N.jsxs(yg,{$addPadding:M,children:[j?N.jsx(cr,{children:d||b}):null,h.Children.toArray(m).map((D,L)=>typeof D=="string"?N.jsx("div",{children:D},D+L):D),R?N.jsx(cr,{children:g||b}):null]}),!x&&!R&&N.jsx(fp,{})]})}),Fx=Q.button.attrs(a=>({"data-dimension":a.$dimension,"data-appearance":[a.$appearance,a.$displayAsDisabled?"disabled":void 0].filter(i=>i!==void 0).join(" ")}))`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  white-space: nowrap;
  border: none;
  border-radius: ${a=>a.$skeleton?0:`var(--admiral-border-radius-Medium, ${pn(a.theme.shape)})`};
  appearance: none;
  vertical-align: middle;
  cursor: ${a=>a.disabled?"not-allowed":"pointer"};
  ${a=>(a.$loading||a.$skeleton)&&"pointer-events: none"};

  ${Xx};
  ${Qx};
  ${a=>a.$buttonCssMixin};
  ${({$skeleton:a})=>a&&jf};

  ${yg} {
    ${a=>a.$loading||a.$skeleton?"visibility: hidden;":""}
  }
`;fu.displayName="Button";var dp;function rf(){return rf=Object.assign?Object.assign.bind():function(a){for(var i=1;i<arguments.length;i++){var u=arguments[i];for(var c in u)({}).hasOwnProperty.call(u,c)&&(a[c]=u[c])}return a},rf.apply(null,arguments)}var Kx=function(a){return h.createElement("svg",rf({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 16 16"},a),dp||(dp=h.createElement("path",{fill:"#fff",d:"M13.471 5.805a.667.667 0 1 0-.942-.943L7 10.39 4.138 7.53a.667.667 0 0 0-.943.942l3.334 3.334c.26.26.682.26.942 0z"})))},hp;function of(){return of=Object.assign?Object.assign.bind():function(a){for(var i=1;i<arguments.length;i++){var u=arguments[i];for(var c in u)({}).hasOwnProperty.call(u,c)&&(a[c]=u[c])}return a},of.apply(null,arguments)}var Wx=function(a){return h.createElement("svg",of({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"-5 -9 20 20"},a),hp||(hp=h.createElement("rect",{width:10,height:2,fill:"#fff",rx:1})))};const Jx=Y`
  width: ${({$dimension:a})=>{switch(a){case"m":default:return"20px";case"s":return"16px"}}};

  fieldset[data-dimension='s'] & {
    width: 16px;
  }
`,Ix=Y`
  height: ${({$dimension:a})=>{switch(a){case"m":default:return"20px";case"s":return"16px"}}};
  fieldset[data-dimension='s'] & {
    height: 16px;
  }
`,eS=Q(Kx)`
  pointer-events: none;
`,tS=Q(Wx)`
  pointer-events: none;
  & *[fill^='#'] {
    fill: var(--admiral-color-Special_StaticWhite, ${a=>a.theme.color["Special/Static White"]});
  }
`,aS=Q.div`
  position: relative;
  box-sizing: border-box;
  cursor: ${a=>a.$disabled?"not-allowed":a.$readOnly?"default":"pointer"};

  overflow: visible;
  ${Jx};
  ${Ix};
  flex: 0 0 auto; // при вставке во flex контейнер не должны изменяться размеры
`,fn=Q.div`
  pointer-events: none;
  display: inline-block;
  position: absolute;
  margin: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: var(--admiral-border-radius-Small, ${a=>ur(a.theme.shape)});
  outline: 0;
  transition: background-color 0.1s ease-in;

  /* disable inheritance from parent elements */
  line-height: initial;
  background-color: var(--admiral-color-Neutral_Neutral00, ${a=>a.theme.color["Neutral/Neutral 00"]});
  border: 1px solid
    ${({$error:a,theme:i})=>a?`var(--admiral-color-Error_Error60Main, ${i.color["Error/Error 60 Main"]})`:`var(--admiral-color-Neutral_Neutral50, ${i.color["Neutral/Neutral 50"]})`};
  & *[fill^='#'] {
    fill: var(--admiral-color-Special_StaticWhite, ${a=>a.theme.color["Special/Static White"]});
  }
`,bg=Y`
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  width: calc(100% + 16px);
  height: calc(100% + 16px);
`,mp=Y`
  &:not(:disabled) {
    &::after {
      ${bg};
      background-color: var(--admiral-color-Opacity_Hover, ${a=>a.theme.color["Opacity/Hover"]});
    }
  }
`,lS=Y`
  &:not(:disabled) {
    &::after {
      ${bg};
      background-color: var(--admiral-color-Opacity_Press, ${a=>a.theme.color["Opacity/Press"]});
    }
  }
`,pp=Y`
  pointer-events: none;
  & + ${fn} {
    border: 1px solid var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    background-color: var(--admiral-color-Neutral_Neutral10, ${a=>a.theme.color["Neutral/Neutral 10"]});
  }
`,uf=Y`
  background-color: var(--admiral-color-Primary_Primary30, ${a=>a.theme.color["Primary/Primary 30"]});
  border: none;
  & *[fill^='#'] {
    fill: var(--admiral-color-Neutral_Neutral00, ${a=>a.theme.color["Neutral/Neutral 00"]});
  }
`,xg=Y`
  background-color: var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]});
  border: none;
`,nS=Y`
  & + ${fn} {
    ${xg}
  }
`,Sg=Y`
  & + ${fn} {
    ${uf}
  }
`,rS=Y`
  ${a=>a.readOnly?Sg:nS}
`,iS=Q.input`
  appearance: none;
  ::-ms-check {
    display: none;
  }
  width: 100%;
  height: 100%;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  box-sizing: border-box;
  cursor: pointer;
  border-radius: var(--admiral-border-radius-Small, ${a=>ur(a.theme.shape)});
  margin: 0;
  padding: 0;

  ${a=>a.readOnly&&pp}

  &:checked + ${fn} {
    ${a=>a.readOnly?uf:xg}
  }
  &:checked:disabled + ${fn} {
    ${uf}
  }

  ${a=>a.$indeterminate&&rS}

  &:not(:checked) + ${fn} {
    > * {
      display: ${a=>a.$indeterminate?"block":"none"};
    }
  }

  &:disabled {
    cursor: not-allowed;
    ${pp}
    ${a=>a.$indeterminate&&Sg}
  }

  ${a=>!a.readOnly&&a.$hovered&&mp}

  &:hover:not(:disabled),
  &:focus:not(:disabled) + ${mp}

  &:active:not(:disabled) {
    ${lS}
  }

  &:focus-visible {
    outline-offset: 2px;
    outline: var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]}) solid 2px;
  }
`,Eg=h.forwardRef(({className:a,dimension:i="m",disabled:u,readOnly:c,hovered:s,indeterminate:d,error:g,...b},v)=>N.jsxs(aS,{$dimension:i,$disabled:u,$readOnly:c,className:a,children:[N.jsx(iS,{ref:v,disabled:u,readOnly:c,...b,type:"checkbox",$indeterminate:d,onKeyDown:m=>{c&&G.getCode(m)===G[" "]&&m.preventDefault(),b.onKeyDown?.(m)},"data-hovered":s,$hovered:s}),N.jsx(fn,{$error:g,children:N.jsx(d?tS:eS,{"aria-hidden":"true",focusable:"false"})})]}));Eg.displayName="Checkbox";function $g(){return(performance.now().toString(36)+Math.random().toString(36)).replace(/\./g,"")}const oS=Y`
  height: ${({$dimension:a})=>{switch(a){case"xl":return"56px";case"s":return"32px";default:return"40px"}}};
`,_g=Y`
  ${jf}
  & > * {
    visibility: hidden;
  }
`,Ng=Q.div`
  position: relative;
  display: flex;
  align-items: stretch;
  border: none;
  border-radius: ${a=>a.$skeleton?0:`var(--admiral-border-radius-Medium, ${pn(a.theme.shape)})`};

  pointer-events: ${a=>a.$skeleton?"none":"all"};
  ${({$skeleton:a})=>a&&_g};
`,uS=Q(Ng)`
  ${oS};
`;function cf(a,i){return a.value!==i.value||a.selectionStart!==i.selectionStart||a.selectionEnd!==i.selectionEnd}function pa(a,i){const{value:u=a.value,selectionStart:c,selectionEnd:s}=i;if(cf(a,{value:u,selectionStart:c,selectionEnd:s})){const d=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(a),"value")?.set;let g;d?.call(a,u),typeof c=="number"&&typeof s=="number"&&a.setSelectionRange(c,s),typeof Event=="function"?g=new Event("input",{bubbles:!0}):(g=document.createEvent("Event"),g.initEvent("input",!0,!0)),a.dispatchEvent(g)}}var gp;function sf(){return sf=Object.assign?Object.assign.bind():function(a){for(var i=1;i<arguments.length;i++){var u=arguments[i];for(var c in u)({}).hasOwnProperty.call(u,c)&&(a[c]=u[c])}return a},sf.apply(null,arguments)}var cS=function(a){return h.createElement("svg",sf({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},a),gp||(gp=h.createElement("path",{fill:"#74767B",d:"M21.7 10.04c.29.2.38.6.18.9-.5.75-1.14 1.57-1.92 2.36l1.84 1.84c.25.25.25.66 0 .91a.64.64 0 0 1-.92 0l-1.87-1.86c-.93.8-2.01 1.51-3.22 2.02l1.03 2.49a.65.65 0 0 1-1.2.5l-1.06-2.56a9.7 9.7 0 0 1-5.13.01L8.37 19.2a.65.65 0 0 1-1.2-.5l1.03-2.47c-1.25-.52-2.32-1.25-3.23-2.04l-1.86 1.86a.64.64 0 0 1-.92 0 .646.646 0 0 1 0-.91l1.84-1.85c-.8-.83-1.43-1.67-1.9-2.34-.2-.29-.13-.7.16-.9.3-.21.7-.13.91.16 1.46 2.1 4.34 5.48 8.8 5.48 4.03 0 7.14-2.98 8.79-5.47.2-.3.61-.38.91-.18"})))},vp;function ff(){return ff=Object.assign?Object.assign.bind():function(a){for(var i=1;i<arguments.length;i++){var u=arguments[i];for(var c in u)({}).hasOwnProperty.call(u,c)&&(a[c]=u[c])}return a},ff.apply(null,arguments)}var sS=function(a){return h.createElement("svg",ff({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},a),vp||(vp=h.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M2.43 10.68C3.86 8.65 7.11 5 12 5c4.88 0 8.13 3.65 9.56 5.68.56.8.56 1.83 0 2.63C20.13 15.34 16.88 19 12 19c-4.89 0-8.14-3.66-9.57-5.69-.56-.8-.56-1.83 0-2.63M6.29 12c0 3.14 2.56 5.7 5.71 5.7 3.14 0 5.7-2.56 5.7-5.7 0-3.15-2.56-5.71-5.7-5.71-3.15 0-5.71 2.56-5.71 5.71m14.21-.57c-.53-.74-1.27-1.66-2.21-2.51.45.93.71 1.97.71 3.08 0 1.1-.26 2.14-.71 3.07.94-.85 1.68-1.77 2.21-2.51.24-.35.24-.78 0-1.13m-17.01 0c.53-.74 1.27-1.66 2.21-2.51-.45.93-.7 1.97-.7 3.08 0 1.1.25 2.14.7 3.07-.94-.85-1.68-1.77-2.21-2.51a.98.98 0 0 1 0-1.13M12 9.7c0-.39-.32-.71-.7-.62A3.002 3.002 0 0 0 12 15a3 3 0 0 0 2.91-2.31c.09-.38-.23-.69-.62-.69h-1c-.71 0-1.29-.59-1.29-1.3z"})))};function fS({icon:a,...i}){return N.jsx(a,{...i})}const _i=Q(fS)`
  & *[fill^='#'] {
    fill: var(--admiral-color-Neutral_Neutral50, ${a=>a.theme.color["Neutral/Neutral 50"]});
  }
  cursor: pointer;

  [data-loading] &&& {
    pointer-events: none;
  }

  [disabled] &&& {
    pointer-events: none;
    & *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    }
  }

  &:hover *[fill^='#'] {
    fill: var(--admiral-color-Primary_Primary70, ${a=>a.theme.color["Primary/Primary 70"]});
  }
`,dS=Y`
  width: ${({$dimension:a})=>{switch(a){case"s":return"16px";case"ms":return"20px";case"m":return"24px";case"xl":return"64px";default:return"48px"}}};
  height: ${({$dimension:a})=>{switch(a){case"s":return"16px";case"ms":return"20px";case"m":return"24px";case"xl":return"64px";default:return"48px"}}};
`,hS=Q.div`
  position: relative;
  container-type: inline-size;
  ${dS};

  & svg {
    ${a=>a.$svgMixin||""}
  }
`,Uf=({dimension:a="m",inverse:i=!1,svgMixin:u,...c})=>N.jsx(hS,{$dimension:a,$svgMixin:u,role:"alert","aria-live":"assertive",...c,children:N.jsx(vg,{$inverse:i})});Uf.displayName="Spinner";const mn=a=>!!a&&(a.offsetHeight<a.scrollHeight||a.offsetWidth<a.scrollWidth),df=a=>{switch(a.$dimension){case"xl":default:return 24;case"s":return 20}},Ni=a=>{switch(a.$dimension){case"xl":default:return 16;case"s":return 12}},mS=Y`
  padding-right: ${a=>Ni(a)+(df(a)+8)*(a.$iconsAfterCount??0)}px;
  padding-left: ${a=>Ni(a)+(df(a)+8)*(a.$iconsBeforeCount??0)}px;
`,pS=Y`
  background-color: var(--admiral-color-Neutral_Neutral10, ${a=>a.theme.color["Neutral/Neutral 10"]});
  border-color: transparent;
`,gS=Y`
  ${({$status:a,theme:i})=>{if(!a)return`var(--admiral-color-Neutral_Neutral40, ${i.color["Neutral/Neutral 40"]})`;switch(a){case"error":return`var(--admiral-color-Error_Error60Main, ${i.color["Error/Error 60 Main"]})`;case"success":return`var(--admiral-color-Success_Success50Main, ${i.color["Success/Success 50 Main"]})`}}}
`,lr=Q.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0;
  pointer-events: none;
  overflow: hidden;
  min-width: 0;

  background: none;
  border-radius: inherit;

  border: 1px solid ${gS};
  ${a=>a.disabled&&"border-color: transparent;"};
`,vS=Y`
  border-color: ${({$status:a,theme:i})=>{if(!a)return`var(--admiral-color-Neutral_Neutral60, ${i.color["Neutral/Neutral 60"]})`;switch(a){case"error":return`var(--admiral-color-Error_Error70, ${i.color["Error/Error 70"]})`;case"success":return`var(--admiral-color-Success_Success60, ${i.color["Success/Success 60"]})`}}};
`,yS=Y`
  border: 2px solid
    ${({$status:a,theme:i})=>{if(!a)return`var(--admiral-color-Primary_Primary60Main, ${i.color["Primary/Primary 60 Main"]})`;switch(a){case"error":return`var(--admiral-color-Error_Error60Main, ${i.color["Error/Error 60 Main"]})`;case"success":return`var(--admiral-color-Success_Success50Main, ${i.color["Success/Success 50 Main"]})`}}};
`,bS=Y`
  &:focus-within:not(:disabled) > ${lr} {
    ${a=>a.disabled||a.readOnly?"border-color: transparent":a.$isLoading?"":yS}
  }

  &:hover:not(:focus-within) > ${lr} {
    ${a=>a.$isLoading?"":a.disabled||a.readOnly?"transparent":vS};
  }
`,xS=Y`
  ::-ms-clear,
  ::-ms-reveal {
    display: none;
  }
`,SS=Q.input`
  outline: none;
  appearance: none;
  border-radius: inherit;

  box-sizing: border-box;
  flex: 1 1 auto;
  min-width: 10px;
  border: none;
  text-overflow: ellipsis;
  padding: 0 ${Ni}px;

  ${a=>a.$dimension==="s"?Ne["Body/Body 2 Long"]:Ne["Body/Body 1 Long"]}

  color: var(--admiral-color-Neutral_Neutral90, ${a=>a.theme.color["Neutral/Neutral 90"]});

  &&&:disabled {
    color: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
  }

  &::placeholder {
    color: var(--admiral-color-Neutral_Neutral50, ${a=>a.theme.color["Neutral/Neutral 50"]});
  }

  &:disabled::placeholder {
    color: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
  }

  [data-disable-copying] & {
    user-select: none;
    &::selection {
      background-color: transparent;
    }
  }

  background-color: var(--admiral-color-Neutral_Neutral00, ${a=>a.theme.color["Neutral/Neutral 00"]});

  &&&:user-invalid + ${lr} {
    border: 1px solid var(--admiral-color-Error_Error60Main, ${a=>a.theme.color["Error/Error 60 Main"]});
  }

  &&&:user-invalid:hover:not(:disabled) + ${lr} {
    border: 1px solid var(--admiral-color-Error_Error70, ${a=>a.theme.color["Error/Error 70"]});
  }

  &&&:user-invalid:focus:not(:disabled) + ${lr} {
    border: 2px solid var(--admiral-color-Error_Error60Main, ${a=>a.theme.color["Error/Error 60 Main"]});
  }

  [data-read-only] &&&,
  &&&:disabled {
    ${pS}
  }

  [data-loading] &&&,
  &&&:disabled {
    cursor: not-allowed;
    pointer-events: none;
  }

  ${mS}
  ${xS}
`,wg=Q.div`
  position: absolute;
  top: 0;
  bottom: 0;

  display: flex;
  align-items: center;

  & svg {
    border-radius: var(--admiral-border-radius-Medium, ${a=>pn(a.theme.shape)});
    display: block;
    width: ${df}px;

    &:focus {
      outline: none;
    }

    &:focus-visible {
      outline-offset: 2px;
      outline: var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]}) solid 2px;
    }
  }
`,ES=Q(wg)`
  left: 0;

  padding-left: ${Ni}px;

  & > *:not(:first-child) {
    margin-right: 8px;
  }
`,$S=Q(wg)`
  right: 0;

  padding-right: ${Ni}px;

  & > *:not(:first-child) {
    margin-left: 8px;
  }
`,_S=Q(uS)`
  ${bS}
  ${a=>a.disabled?"cursor: not-allowed;":a.$isLoading?"cursor: default;":""}
`;function NS(a){return a||{}}const Tg=h.forwardRef(({dimension:a="m",type:i,displayClearIcon:u,isLoading:c,status:s,handleInput:d=NS,containerRef:g,icons:b,iconsBefore:v,iconsAfter:m,children:y,className:E,style:x,placeholder:w,skeleton:$=!1,showTooltip:j=!0,disableCopying:R,...M},D)=>{const L=h.useRef(null),te=g||h.useRef(null),Z=h.Children.toArray(m||b),J=h.Children.toArray(v),[ae,se]=h.useState(!1),[ne,ge]=h.useState(!1),[qe,Oe]=h.useState(M.defaultValue??void 0),Xe=M.value??qe;h.useEffect(()=>{mn(L.current)?se(!0):se(!1)},[ne,se]),h.useLayoutEffect(()=>{function ee(){document.activeElement!==L.current&&ge(!0)}function F(){ge(!1)}const S=te.current;if(S)return S.addEventListener("mouseenter",ee),S.addEventListener("mouseleave",F),S.addEventListener("mousedown",F),()=>{S.removeEventListener("mouseenter",ee),S.removeEventListener("mouseleave",F),S.removeEventListener("mousedown",F)}},[ge]);const[lt,Me]=h.useState(!1);if(!M.readOnly&&i==="password"){const ee=lt?sS:cS;Z.push(N.jsx(_i,{icon:ee,onClick:()=>{Me(!lt)},"aria-hidden":!0},"eye-icon"))}!M.readOnly&&u&&Xe&&Z.unshift(N.jsx(_i,{icon:Su,onMouseDown:ee=>{ee.preventDefault()},onClick:()=>{L.current&&pa(L.current,{value:""})},"aria-hidden":!0},"clear-icon")),c&&Z.unshift(N.jsx(Uf,{dimension:a==="s"?"ms":"m"},"loading-icon"));const U=J.length,K=Z.length;return h.useLayoutEffect(()=>{const ee=d(null);function F(S){const{value:B,selectionStart:X,selectionEnd:P}=this,I=d({value:B,selectionStart:X,selectionEnd:P},S);w&&!cf(ee,I)?pa(this,{...I,value:""}):pa(this,I)}if(i!=="date"&&L.current){const S=L.current;S.addEventListener("input",F);const{value:B,selectionStart:X,selectionEnd:P}=S,I=d({value:B,selectionStart:X,selectionEnd:P});return w&&!cf(ee,I)?pa(S,{...I,value:""}):pa(S,I),()=>{S.removeEventListener("input",F)}}},[d,w]),h.useEffect(()=>{function ee(){this.selectionEnd=this.selectionStart}if(R&&L.current){const F=L.current;return F.addEventListener("select",ee,!0),()=>F.removeEventListener("select",ee,!0)}},[R]),N.jsxs(N.Fragment,{children:[N.jsxs(_S,{className:E,style:x,$dimension:a,ref:te,disabled:M.disabled,readOnly:M.readOnly,$isLoading:c,$status:s,"data-disabled":!!M.disabled||void 0,"data-read-only":!!M.readOnly||void 0,"data-loading":!!c||void 0,"data-status":s,$skeleton:$,"data-disable-copying":!!R||void 0,children:[N.jsx(SS,{ref:va(D,L),...M,onChange:ee=>{Oe(ee.currentTarget.value),M.onChange?.(ee)},placeholder:w,$dimension:a,$iconsAfterCount:K,$iconsBeforeCount:U,type:i==="password"&&lt?"text":i}),N.jsx(lr,{$status:s,disabled:M.disabled||M.readOnly}),U>0&&N.jsx(ES,{disabled:M.disabled,$dimension:a,children:J}),K>0&&N.jsx($S,{disabled:M.disabled,$dimension:a,children:Z}),y]}),j&&ne&&ae&&N.jsx(dr,{renderContent:()=>L?.current?.value||"",targetElement:te.current})]})});Tg.displayName="TextInput";const Mg=h.createContext(null),Ag=()=>h.useContext(Mg),wS=({children:a,...i})=>N.jsx(Mg.Provider,{value:i,children:a}),TS=h.createContext(null),Cg=()=>h.useContext(TS),sr=35,yp=4,kf=Y`
  height: ${({$dimension:a})=>a==="m"?"32px":"24px"};
`,MS=Y`
  width: ${({$dimension:a})=>a==="m"?"32px":"24px"};
`,hf=Y`
  height: ${({$dimension:a})=>a==="m"?"20px":"16px"};
`,AS=Y`
  height: ${({$dimension:a})=>a==="m"?"20px":"16px"};
`,mf=Y`
  width: ${({$dimension:a})=>a==="m"?"20px":"16px"};
`,CS=Y`
  padding: ${({$dimension:a})=>a==="m"?"6px 12px":"4px 8px"};
`,OS=Y`
  padding: ${({$dimension:a})=>a==="m"?"5px 11px":"3px 7px"};
`,DS=Y`
  ${({$appearance:a})=>a==="filled"?CS:OS}
`,BS=Y`
  &:hover {
    color: ${({theme:a,$appearance:i,$selected:u})=>u?`var(--admiral-color-Special_StaticWhite, ${a.color["Special/Static White"]})`:i!=="filled"||u?`var(--admiral-color-Primary_Primary60Main, ${a.color["Primary/Primary 60 Main"]})`:`var(--admiral-color-Neutral_Neutral90, ${a.color["Neutral/Neutral 90"]})`};
  }
`,RS=Y`
  ${({$dimension:a})=>a==="s"?Ne["Caption/Caption 1"]:Ne["Body/Body 2 Long"]}
  color: ${({theme:a,$appearance:i,$disabled:u,$selected:c})=>u&&!c?`var(--admiral-color-Neutral_Neutral30, ${a.color["Neutral/Neutral 30"]})`:c||c&&u?`var(--admiral-color-Special_StaticWhite, ${a.color["Special/Static White"]})`:i==="filled"?`var(--admiral-color-Neutral_Neutral90, ${a.color["Neutral/Neutral 90"]})`:`var(--admiral-color-Primary_Primary60Main, ${a.color["Primary/Primary 60 Main"]})`};

  ${a=>!a&&BS}
`,zS=Y`
  &:hover {
    ${({theme:a,$appearance:i,$selected:u,$withCloseIcon:c})=>u?`background-color: var(--admiral-color-Primary_Primary70, ${a.color["Primary/Primary 70"]});`:i==="filled"?`background-color: var(--admiral-color-Opacity_Neutral12, ${a.color["Opacity/Neutral 12"]});`:c?void 0:`background-color: var(--admiral-color-Opacity_Hover, ${a.color["Opacity/Hover"]});`};
    ${a=>a.$selected&&`
      border-color: var(--admiral-color-Primary_Primary70, ${a.theme.color["Primary/Primary 70"]});
    `}
  }
  &:active {
    ${({theme:a,$appearance:i,$selected:u,$withCloseIcon:c})=>u?`background-color: var(--admiral-color-Primary_Primary80, ${a.color["Primary/Primary 80"]});`:i==="filled"?`background-color: var(--admiral-color-Opacity_Neutral16, ${a.color["Opacity/Neutral 16"]});`:c?void 0:`background-color: var(--admiral-color-Opacity_Press, ${a.color["Opacity/Press"]});`};
    ${a=>a.$selected&&`
      border-color: var(--admiral-color-Primary_Primary80, ${a.theme.color["Primary/Primary 80"]});
    `}
  }
`,HS=Y`
  background-color: ${({theme:a,$appearance:i,$selected:u,$disabled:c})=>u&&!c?`var(--admiral-color-Primary_Primary60Main, ${a.color["Primary/Primary 60 Main"]})`:u&&c?`var(--admiral-color-Neutral_Neutral30, ${a.color["Neutral/Neutral 30"]})`:i==="filled"?`var(--admiral-color-Opacity_Neutral8, ${a.color["Opacity/Neutral 8"]})`:"transparent"};

  border: ${({theme:a,$appearance:i,$disabled:u})=>i==="filled"?"none":u?`1px solid var(--admiral-color-Neutral_Neutral30, ${a.color["Neutral/Neutral 30"]})`:`1px solid var(--admiral-color-Primary_Primary60Main, ${a.color["Primary/Primary 60 Main"]})`};

  border-radius: 16px;

  ${a=>a.$clickable&&!a.$disabled&&zS}

  &:focus-visible {
    outline: 0;

    &:before {
      border: 2px solid var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]});
      border-radius: 20px;
      content: '';
      display: block;
      position: absolute;
      top: -5px;
      left: -5px;
      right: -5px;
      bottom: -5px;
      pointer-events: none;
    }
  }
`,jS=Q.div`
  display: inline-flex;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  max-width: 190px;
  user-select: none;
  & > * {
    pointer-events: ${({$disabled:a})=>a?"none":"auto"};
  }
  cursor: ${({$defaultChip:a,$disabled:i,$withTooltip:u})=>!a&&!u||i?i?"not-allowed":"default":"pointer"};
  ${HS}
  ${kf}
  ${a=>a.$withCloseIcon?`padding-inline-start: ${(a.$dimension==="s"?8:12)-(a.$appearance==="outlined"?1:0)}px;`:DS}
  ${a=>a.$withBadge&&!a.$withCloseIcon?`padding-inline-end: ${(a.$dimension==="s"?4:6)-(a.$appearance==="outlined"?1:0)}px;
         padding-inline-start: ${(a.$dimension==="s"?8:12)-(a.$appearance==="outlined"?1:0)}px;`:""}
  ${RS}
`,Og=Y`
  display: flex;
  align-items: center;
  justify-content: center;
`,LS=Q.div`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  display: inline-flex;

  ${a=>a.$withCloseIcon&&Og}
  ${a=>a.$withCloseIcon?kf:AS}
  & svg {
    ${hf}
    ${mf}
    & *[fill^='#'] {
      fill: ${({theme:a,$appearance:i,$disabled:u,$selected:c})=>c?`var(--admiral-color-Special_StaticWhite, ${a.color["Special/Static White"]})`:u?`var(--admiral-color-Neutral_Neutral30, ${a.color["Neutral/Neutral 30"]})`:i==="filled"?`var(--admiral-color-Neutral_Neutral50, ${a.color["Neutral/Neutral 50"]})`:`var(--admiral-color-Primary_Primary60Main, ${a.color["Primary/Primary 60 Main"]})`};
    }
  }
`,US=Q.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
`,kS=Q.div`
  display: inline-block;
  margin-inline-end: 8px;
`,qS=Q.div`
  display: inline-block;
  margin-inline-start: ${a=>a.$withCloseIcon?"2px":"8px"};
`,bp=Q.div`
  ${a=>a.$withCloseIcon&&Og}
  ${a=>a.$withCloseIcon?kf:hf}
  ${a=>a.$withCloseIcon?MS:mf}
  & > svg {
    ${hf}
    ${mf}
  }
`,YS=Q(Lf)`
  margin-inline-start: ${({dimension:a})=>a==="s"?"6px":"8px"};
`,VS=Q(wx)`
  //дополнительный отступ в 2px, чтобы кружок ховера не стоял вплотную к элементу слева
  margin-inline-start: ${a=>a.dimension==="s"?"6px":"8px"};
  ${a=>a.appearance==="primary"?a.dimension==="s"?"margin-inline-end: 3px":"margin-inline-end: 5px":""};
`,PS=()=>"",qf=h.forwardRef(({dimension:a="m",disabled:i,appearance:u="outlined",selected:c,onClose:s,children:d,renderContentTooltip:g=PS,iconBefore:b,iconAfter:v,iconStart:m,iconEnd:y,badge:E,...x},w)=>{const $=c!==void 0,[j,R]=h.useState(!1),[M,D]=h.useState(!1),L=!!s,te=!!E,Z=h.useMemo(()=>c&&!i?"whiteBlue":i?c||u==="filled"?"whiteDisable":"lightDisable":u==="filled"?"white":"info",[u,c,i]),J=h.useRef(null),ae=h.useRef(null);return h.useEffect(()=>{ae.current&&mn(ae.current)!==j&&R(mn(ae.current))},[M,R]),h.useLayoutEffect(()=>{function se(){D(!0)}function ne(){D(!1)}const ge=J.current;if(ge)return ge.addEventListener("mouseenter",se),ge.addEventListener("mouseleave",ne),ge.addEventListener("focus",se),ge.addEventListener("blur",ne),()=>{ge.removeEventListener("mouseenter",se),ge.removeEventListener("mouseleave",ne),ge.removeEventListener("focus",se),ge.removeEventListener("blur",ne)}},[D]),N.jsxs(N.Fragment,{children:[N.jsx(jS,{...x,ref:va(w,J),$dimension:a,$disabled:i,$appearance:u,$selected:c,$defaultChip:$,$withCloseIcon:L,$withTooltip:j,$withBadge:te,onKeyDown:se=>{if(!i){const ne=G.getCode(se);ne!==G.Enter&&ne!==G[" "]||(L?s?.():x.onClick?.(se)),x.onKeyDown?.(se)}},tabIndex:x.tabIndex??(i?-1:0),$clickable:!!x.onClick,children:N.jsxs(LS,{$dimension:a,$disabled:i,$appearance:u,$selected:c,$withCloseIcon:L,children:[(m||b)&&N.jsx(kS,{children:N.jsx(bp,{$dimension:a,$withCloseIcon:L,children:m||b})}),N.jsx(US,{ref:ae,children:d}),E!==void 0&&N.jsx(YS,{"data-badge":!0,dimension:a,appearance:Z,children:E}),!s&&(y||v)&&N.jsx(qS,{$dimension:a,children:N.jsx(bp,{$dimension:a,$withCloseIcon:L,children:y||v})}),s&&N.jsx(VS,{dimension:a==="m"?"mBig":"s",highlightFocus:!1,onMouseDown:se=>{se.preventDefault(),s?.(x.id)},disabled:i,tabIndex:-1,appearance:u==="outlined"?"primary":"secondary"})]})}),M&&j&&N.jsx(dr,{targetElement:J.current,renderContent:g})]})});qf.displayName="Chips";const Dg=Q.div`
  width: ${sr}px;
  height: 24px;
`,GS=Q.div`
  display: flex;
  width: ${sr}px;
  visibility: hidden;
  [data-show-count] & {
    visibility: visible;
  }
  > * {
    width: ${sr}px;
    border-radius: 16px;
    // Убирает действие inline-block
    display: flex;
  }
`,XS=Q(qf)`
  flex-shrink: 0;
  flex-grow: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  padding: 4px 0;
  cursor: pointer;
`,QS=Q.div`
  max-width: 488px;

  @media (max-width: 768px) {
    max-width: 250px;
  }
`,ZS=Y`
  // оставлено, чтоб обрабатывался onClick
  pointer-events: auto;
  &:hover {
    color: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
  }
`,FS=Q(qf)`
  margin-right: 4px;
  // Убирает пробел от inline-flex
  display: flex;
  ${({disabled:a})=>a&&ZS};

  min-width: ${sr}px;
  @media (max-width: 768px) {
    max-width: 140px;
  }

  // По дизайну при наведении цвет самого чипса меняться не должен, но т.к. есть обработчик onClick для stopPropagation,
  // то крестик чипса получается clickable и при ховере меняет цвет
  // disabled и readOnly чипсы не меняют цвет при ховере (в readOnly в целом отсутствует кнопка крестика)
  &:hover {
    ${({theme:a,disabled:i})=>{if(!i)return`background-color: var(--admiral-color-Opacity_Neutral8, ${a.color["Opacity/Neutral 8"]})`}}
  }
`,Ko=({value:a,disabled:i,renderChip:u,...c},s)=>{const d=u(),g={};return Ti(c,g,"data",!1),(b=>typeof b=="object"&&b!==null&&!h.isValidElement(b))(d)?{...d,onClose:()=>d.onClose?.({value:a,disabled:i,...g})}:{disabled:i,onClose:()=>s(a),children:d}},xp=({className:a,option:i,disabled:u,readOnly:c,onClick:s,onChipRemove:d})=>{const g=h.useCallback(b=>()=>N.jsx(QS,{children:b}),[]);return N.jsx(FS,{className:a,tabIndex:-1,dimension:"s",appearance:"filled",onClick:s,onClose:c?void 0:Ko(i,d).onClose,disabled:Ko(i,d).disabled||u,renderContentTooltip:g(Ko(i,d).children),children:Ko(i,d).children})},KS=({count:a,disabled:i,onClick:u})=>{const c=h.useRef(null),s=h.useRef(null);return a?N.jsx(GS,{onClick:u,ref:c,className:"counter",children:N.jsxs(XS,{ref:s,"data-visible":!0,tabIndex:-1,dimension:"s",appearance:"filled",disabled:i,children:["+",a]})}):N.jsx(Dg,{})},WS=Q.div`
  display: flex;
`,JS=h.forwardRef(({option:a,childrenOptions:i,containerRef:u,shouldShowCount:c,disabled:s,readOnly:d,onChipClick:g,onChipRemove:b},v)=>{const m=h.useRef(null),[y,E]=h.useState(!1);return h.useLayoutEffect(()=>{const x=new IntersectionObserver(function(w){if(w[0].isIntersecting&&!y){E(!0),w[0].target.setAttribute("data-visible","true");const $=w[0].target.previousElementSibling,j=w[0].target.nextElementSibling;return $&&$.removeAttribute("data-show-count"),void(j&&!j.getAttribute("data-visible")&&w[0].target.setAttribute("data-show-count",""))}if(y&&!w[0].isIntersecting){E(!1),w[0].target.removeAttribute("data-visible"),w[0].target.removeAttribute("data-show-count");const $=w[0].target.previousElementSibling;$&&$.getAttribute("data-visible")&&$.setAttribute("data-show-count","true")}},{root:u.current,threshold:[0,1]});return u.current&&m.current&&x.observe(m.current),()=>x.disconnect()},[y]),N.jsxs(WS,{ref:va(v,m),onMouseDown:x=>x.preventDefault(),children:[N.jsx(xp,{className:"chip",option:a,disabled:s,readOnly:d,onClick:g,onChipRemove:b}),c&&i.length>0&&N.jsx(KS,{count:i.length,disabled:s,children:i.map(x=>N.jsx(xp,{option:x,disabled:s,readOnly:d,onClick:g,onChipRemove:b},x.value))}),!c&&N.jsx(Dg,{})]},a.value)}),IS=({options:a,isOptionsListOpen:i,containerRef:u,hasMaxHeight:c,...s})=>{const d=zf(i);return h.useEffect(()=>{c&&a.length!==0&&(d&&!i&&u.current?.scrollTo({top:0,left:0,behavior:"smooth"}),!d&&i&&setTimeout(()=>{u.current?.scrollTo({top:0,left:0,behavior:"instant"}),u.current?.scrollTo({top:u.current?.scrollHeight,left:0,behavior:"smooth"})}),i&&d&&u.current?.scrollTo({top:u.current?.scrollHeight,left:0,behavior:"smooth"}))},[i,a,c]),N.jsx(N.Fragment,{children:a.map((g,b)=>N.jsx(JS,{option:g,childrenOptions:b<a.length-1?a.slice(b+1):[],containerRef:u,...s},g.value))})},cl=Q.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0;
  pointer-events: none;
  overflow: hidden;
  min-width: 0;

  background: none;
  border-width: 1px;
  border-style: solid;
  border-radius: inherit;
`,e2=Y`
  min-height: ${({$multiple:a,$minRowCount:i,$dimension:u})=>a?i?24*i+4*(i-1)+"px":"24px":(u==="s"?20:24)+"px"};

  max-height: ${({$multiple:a,$maxRowCount:i,$opened:u,$idleHeight:c})=>a?i?24*i+4*(i-1)+"px":u||c!=="fixed"?"none":"24px":"none"};
`,t2=Y`
  > * {
    margin-left: ${`-${sr+yp}px`};
  }

  padding-left: ${`${sr+yp}px`};
`,Bg=Q.div`
  flex: 1 1 auto;
  display: flex;
  overflow: hidden;

  ${({$multiple:a,$isEmpty:i})=>a&&!i&&t2}

  gap: 4px;
  flex-wrap: ${({$multiple:a})=>a?"wrap":"unset"};
  align-items: center;
  align-content: flex-start;

  ${a=>a.$dimension==="s"?Ne["Body/Body 2 Long"]:Ne["Body/Body 1 Long"]}
  color: var(--admiral-color-Neutral_Neutral90, ${a=>a.theme.color["Neutral/Neutral 90"]});

  ${e2}
  [data-disabled='true'] &&& {
    color: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
  }
`,a2=Q.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,l2=Y`
  ::-ms-clear,
  ::-ms-reveal {
    display: none;
  }
`,n2=Q.input`
  outline: none;
  appearance: none;

  box-sizing: border-box;
  flex: 1 1 auto;
  width: 1px;
  border: none;
  background: transparent;
  text-overflow: ellipsis;
  padding: 0;

  color: var(--admiral-color-Neutral_Neutral90, ${a=>a.theme.color["Neutral/Neutral 90"]});

  ${({$dimension:a})=>a==="s"?Ne["Body/Body 2 Long"]:Ne["Body/Body 1 Long"]}
  &::placeholder {
    color: var(--admiral-color-Neutral_Neutral50, ${a=>a.theme.color["Neutral/Neutral 50"]});
  }

  &:read-only {
    cursor: inherit;
  }

  &:disabled,
  &:disabled::placeholder {
    cursor: inherit;
    color: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
  }

  [data-disable-copying] & {
    user-select: none;
    pointer-events: none;
  }

  height: ${({$dimension:a,$isMultiple:i})=>{return u=i,(a!=="s"||u?24:20)+"px";var u}};

  ${l2};
`,r2=Y`
  pointer-events: none;
  cursor: default;
`,i2=Y`
  && > *:not(${Bg}) {
    pointer-events: none;
  }

  & ${cl} {
    border-color: transparent;
  }
`,o2=Y`
  ${cl} {
    border-width: 2px;
  }
`,u2=Q.div`
  flex: 0 0 auto;

  display: flex;
  align-items: center;

  padding: ${({$dimension:a,$multiple:i})=>a==="s"&&i?"2px 0":"0"};

  & > * {
    margin-left: 8px;
    display: block;
    width: ${({$dimension:a})=>a==="s"?20:24}px;
    height: ${({$dimension:a})=>a==="s"?20:24}px;
  }

  [data-disabled='true'] &&& {
    & *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    }
  }
`,c2=Q.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: ${a=>a.$multiple?"flex-start":"center"};
  cursor: ${({disabled:a,$readonly:i,$isLoading:u})=>a?"not-allowed":i||u?"default":"pointer"};

  padding: ${({$dimension:a,$multiple:i})=>{switch(a){case"xl":return"16px 16px";case"s":return i?"4px 12px":"6px 12px";default:return"8px 16px"}}};

  background: ${({theme:a,disabled:i,$readonly:u})=>i||u?`var(--admiral-color-Neutral_Neutral10, ${a.color["Neutral/Neutral 10"]})`:`var(--admiral-color-Neutral_Neutral00, ${a.color["Neutral/Neutral 00"]})`};

  ${({disabled:a,$readonly:i})=>i||a?i2:""};
  ${({$focused:a,$readonly:i,$isLoading:u})=>!a||i||u?"":o2};

  & ${cl} {
    border-color: ${a=>a.disabled||a.$readonly?"transparent":a.$focused&&!a.$isLoading?`var(--admiral-color-Primary_Primary60Main, ${a.theme.color["Primary/Primary 60 Main"]})`:`var(--admiral-color-Neutral_Neutral40, ${a.theme.color["Neutral/Neutral 40"]})`};
  }

  &:hover ${cl} {
    ${a=>!a.disabled&&!a.$readonly&&!a.$focused&&!a.$isLoading&&`
      border-color: var(--admiral-color-Neutral_Neutral60, ${a.theme.color["Neutral/Neutral 60"]});
    `};
  }

  &[data-status='success'] {
    ${a=>!a.disabled&&!a.$readonly&&!a.$isLoading&&`
      ${cl} {
      border-color: var(--admiral-color-Success_Success50Main, ${a.theme.color["Success/Success 50 Main"]});
      }
      &:hover ${cl} {
        border-color: var(--admiral-color-Success_Success60, ${a.theme.color["Success/Success 60"]});
      }
    `}
  }

  &[data-status='error'],
  &:user-invalid {
    ${a=>!a.disabled&&!a.$readonly&&!a.$isLoading&&`
      ${cl} {
        border-color: var(--admiral-color-Error_Error60Main, ${a.theme.color["Error/Error 60 Main"]});
      }
  
      &:hover ${cl} {
        border-color: var(--admiral-color-Error_Error70, ${a.theme.color["Error/Error 70"]});
      }
    `}
  }

  border-radius: ${a=>a.$skeleton?0:`var(--admiral-border-radius-Medium, ${pn(a.theme.shape)})`};

  ${({$skeleton:a})=>a&&_g};
  ${({$skeleton:a})=>a&&r2};
`,Rg=Q.div`
  flex: 0 0 auto;

  word-break: break-word;
  display: flex;
  align-items: center;
  padding: ${({$dimension:a})=>{switch(a){case"xl":return"12px 16px";case"s":return"6px 12px";default:return"8px 16px"}}};

  background-color: transparent;

  ${({$dimension:a})=>{switch(a){case"xl":return Ne["Body/Body 1 Long"];case"s":return Ne["Body/Body 2 Long"];default:return Ne["Body/Body 1 Short"]}}}
`,s2=Y`
  ${Ne["Body/Body 1 Short"]}
  color: var(--admiral-color-Neutral_Neutral90, ${a=>a.theme.color["Neutral/Neutral 90"]});
  background-color: var(--admiral-color-Special_ElevatedBG, ${a=>a.theme.color["Special/Elevated BG"]});
  border-radius: var(--admiral-border-radius-Medium, ${a=>pn(a.theme.shape)});
  box-shadow: var(--admiral-box-shadow-Shadow08, ${a=>xu(a.theme.shadow["Shadow 08"])});
  overflow: auto;
`,f2=Q(Hf)`
  ${s2}
`,d2=Q.div`
  user-select: none;
`,h2=Q(Rf)`
  justify-content: flex-start;
  flex-wrap: nowrap;
  white-space: pre-wrap;
  ${a=>a.$selected&&!a.$hovered&&!a.$preselected&&a.$multiple&&"background-color: transparent;"}
`,m2=({visibleValue:a,isSearchPanelOpen:i,targetRef:u,forceHideOverflowTooltip:c})=>{const s=h.useRef(null),[d,g]=h.useState(!1),[b,v]=h.useState(!1);h.useEffect(()=>{s.current&&mn(s.current)!==d&&g(mn(s.current))},[b,g]),h.useEffect(()=>{function y(){v(!0)}function E(){v(!1)}const x=s.current;if(x)return x.addEventListener("mouseenter",y),x.addEventListener("mouseleave",E),()=>{x.removeEventListener("mouseenter",y),x.removeEventListener("mouseleave",E)}},[v]);const m=!c&&!i&&b&&d;return N.jsxs(N.Fragment,{children:[N.jsx(a2,{ref:s,children:a}),m&&N.jsx(dr,{renderContent:()=>a,targetElement:u.current})]})},p2=a=>a.stopPropagation(),g2=Q.select`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  border: none;
  pointer-events: none;
`,v2=h.forwardRef(({options:a,...i},u)=>{const c=h.useRef(null);return h.useEffect(()=>{function s(d){const g=G.getCode(d);g&&[G[" "],G.Enter,G.ArrowDown,G.ArrowUp].includes(g)&&d.preventDefault()}return c.current?.addEventListener("keydown",s),()=>c.current?.removeEventListener("keydown",s)},[]),N.jsxs(g2,{ref:va(u,c),...i,onClick:p2,children:[N.jsx("option",{value:""}),a.map(s=>N.jsx("option",{value:s.value,disabled:s.disabled,children:s.value},s.value))]})}),zg=h.createContext(null),y2=()=>h.useContext(zg),b2=({children:a,...i})=>N.jsx(zg.Provider,{value:i,children:a}),x2=(a="",i="",u="wholly")=>{const c=(u==="word"?i.split(" "):[i]).filter(Boolean).map(b=>b.toLowerCase()),s=["[","]","\\","^","$",".","|","?","*","+","(",")"],d=c.map(b=>`(${b.split("").map(v=>s.includes(v)?`\\${v}`:v).join("")})?`).join(""),g=a.split(new RegExp(d,"gi")).filter(Boolean);return!i||g.some(b=>c.includes(b.toLowerCase()))},S2=Q.label`
  display: inline-flex;
  align-items: flex-start;
  position: relative;
  box-sizing: content-box;
  padding: 0;
  user-select: none;

  cursor: ${a=>a.disabled?"not-allowed":a.readOnly?"default":"pointer"};

  ${a=>a.$dimension==="s"?Ne["Body/Body 2 Short"]:Ne["Body/Body 1 Short"]}
  color: ${a=>a.disabled?`var(--admiral-color-Neutral_Neutral30, ${a.theme.color["Neutral/Neutral 30"]})`:`var(--admiral-color-Neutral_Neutral90, ${a.theme.color["Neutral/Neutral 90"]})`};

  fieldset[data-dimension='s'] && {
    ${Ne["Body/Body 2 Short"]};
  }
  fieldset:disabled && {
    color: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    cursor: not-allowed;
  }

  ${a=>a.readOnly?"pointer-events: none":""};
`,E2=Q.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  margin-top: 2px;
  margin-bottom: 2px;
  margin-left: ${"8px"};
  ${a=>a.$dimension==="s"?Ne["Body/Body 2 Short"]:Ne["Body/Body 1 Short"]}
  color: ${a=>a.disabled?`var(--admiral-color-Neutral_Neutral30, ${a.theme.color["Neutral/Neutral 30"]})`:`var(--admiral-color-Neutral_Neutral90, ${a.theme.color["Neutral/Neutral 90"]})`};
  fieldset:disabled && {
    color: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
  }
  fieldset[data-dimension='s'] && {
    ${Ne["Body/Body 2 Short"]}
  }
`,$2=Q.div`
  margin-top: 4px;
  ${a=>a.$dimension==="s"?Ne["Caption/Caption 1"]:Ne["Body/Body 2 Short"]}
  color: ${a=>a.disabled?`var(--admiral-color-Neutral_Neutral30, ${a.theme.color["Neutral/Neutral 30"]})`:`var(--admiral-color-Neutral_Neutral50, ${a.theme.color["Neutral/Neutral 50"]})`};

  fieldset[data-dimension='s'] && {
    ${Ne["Caption/Caption 1"]}
  }
`,_2=Q(Eg)`
  margin-top: 2px;
`,Hg=h.forwardRef(({children:a,disabled:i=!1,readOnly:u=!1,hovered:c,dimension:s="m",error:d,indeterminate:g=!1,extraText:b,className:v,id:m,name:y,style:E,...x},w)=>{const $=h.useMemo(()=>m||$g(),[m]),j={"data-field-id":$,"data-field-name":y};return Tb(x,j),N.jsxs(S2,{className:v,$dimension:s,disabled:i,readOnly:u,style:E,...j,onClick:R=>{R.target.tagName!=="INPUT"&&R.stopPropagation()},children:[N.jsx(_2,{...x,ref:w,disabled:i,readOnly:u,type:"checkbox",indeterminate:g,onKeyDown:R=>{u&&G.getCode(R)===G[" "]&&R.preventDefault(),x.onKeyDown?.(R)},"data-hovered":c,hovered:c,dimension:s,id:$,name:y,error:d}),a&&N.jsxs(E2,{$dimension:s,disabled:i,children:[a,b&&N.jsx($2,{disabled:i,$dimension:s,children:b})]})]})});Hg.displayName="CheckboxField";Q(Rg)`
  background-color: ${({active:a,selected:i,theme:u})=>i?`var(--admiral-color-Opacity_Focus, ${u.color["Opacity/Focus"]})`:a?`var(--admiral-color-Opacity_Hover, ${u.color["Opacity/Hover"]})`:"transparent"};

  color: ${({disabled:a,theme:i})=>a?`var(--admiral-color-Neutral_Neutral30, ${i.color["Neutral/Neutral 30"]})`:`var(--admiral-color-Neutral_Neutral90, ${i.color["Neutral/Neutral 90"]})`};
  cursor: ${({disabled:a})=>a?"not-allowed":"pointer"};
  & > * {
    pointer-events: ${({disabled:a})=>a?"none":"all"};
  }
`;const N2=Q(Hg)`
  margin-right: 8px;
  flex-shrink: 0;
`,w2=a=>Ag()?N.jsx(T2,{...a}):null,T2=({disabled:a=!1,id:i,value:u,children:c,renderOption:s,renderChip:d,...g})=>{const b=Ag(),v=Cg(),m=v?.disabled||a,y=h.useCallback(()=>c,[c]),E=d||y,x=h.useMemo(()=>s?s({disabled:a}):c,[s,a,u,c]),w={};Ti(g,w,"data",!1);const $=h.useMemo(()=>({id:i,value:u,disabled:m,children:x,renderChip:E,...w}),[i,u,m,x,E]);return h.useEffect(()=>(b?.onConstantOptionMount?.($),()=>b?.onConstantOptionUnMount?.($)),[b?.onConstantOptionMount,b?.onConstantOptionUnMount,$]),null},M2=({id:a,disabled:i=!1,readOnly:u=!1,value:c,children:s,renderOption:d,renderChip:g,...b})=>{const v=y2(),m=Cg(),y=m?.disabled||i,E=x=>v?.multiple?(({selected:w=!1,hovered:$=!1})=>N.jsxs(N.Fragment,{children:[v?.showCheckbox&&N.jsx(N2,{checked:w,hovered:$,dimension:v?.dimension==="s"?"s":"m",disabled:i,onChange:()=>!1}),s]}))(x):s;return h.useEffect(()=>{const x=a||c,w={id:c,value:c,render:$=>{return d?d($):h.createElement(h2,{...$,dimension:(j=v?.dimension,j==="xl"?"l":j),key:x,...b,$selected:$.selected,$hovered:$.hovered,$preselected:$.preselected,$multiple:v?.multiple},E({selected:$.selected,hovered:$.hovered}));var j},disabled:y,readOnly:u};return v?.onDropDownOptionMount?.(w),()=>v?.onDropDownOptionUnMount?.(w)},[v?.onDropDownOptionMount,v?.onDropDownOptionUnMount,v?.dimension,v?.multiple]),null},jg=a=>N.jsxs(N.Fragment,{children:[N.jsx(w2,{...a}),N.jsx(M2,{...a})]}),A2=Q(Rg)`
  color: var(--admiral-color-Neutral_Neutral50, ${a=>a.theme.color["Neutral/Neutral 50"]});
`,Sp=a=>a.stopPropagation(),Ep=()=>{},Yf=h.forwardRef(({value:a,isLoading:i,className:u,style:c,status:s,icons:d,portalTargetRef:g,targetElement:b,inputTargetRef:v,disabled:m,readOnly:y,placeholder:E,defaultValue:x,dimension:w="m",idleHeight:$="fixed",minRowCount:j="none",maxRowCount:R="none",mode:M="select",multiple:D=!1,showCheckbox:L=!0,displayClearIcon:te=!1,onClearIconClick:Z,onInputChange:J,inputValue:ae,defaultInputValue:se,renderSelectValue:ne,onFocus:ge,onBlur:qe,children:Oe,alignDropdown:Xe="stretch",alignSelf:lt="stretch",skeleton:Me=!1,locale:U,dropContainerCssMixin:K,dropContainerClassName:ee,dropContainerStyle:F,renderDropDownTopPanel:S,renderDropDownBottomPanel:B,renderTopPanel:X,renderBottomPanel:P,forcedOpen:I=!1,onChangeDropDownState:ue,onInputKeyDown:re,onInputKeyUp:Ve,onInputKeyUpCapture:ve,onInputKeyDownCapture:Je,searchFormat:Mt="wholly",onFilterItem:Pe=x2,virtualScroll:Be,title:Rt,forceHideOverflowTooltip:Ma=!1,onSelectedChange:Va,moveSelectedOnTop:$t,clearInputValueAfterSelect:Qe=!0,openButtonPropsConfig:Lt=Ep,clearButtonPropsConfig:zt=Ep,...mt},ea)=>{const kl=Af()||bu,vn=U?.emptyMessage||N.jsx(A2,{$dimension:w,children:kl.locales[kl.currentLocale].select.emptyMessage}),[Fe,ql]=h.useState(a??x),[Aa,yt]=h.useState(""),Ke=ae===void 0?Aa:ae,[ut,ie]=h.useState(!1),[pe,me]=h.useState(),[je,Ie]=h.useState([]),[Re,Vt]=h.useState([]),[we,Pt]=h.useState(I),[Gt,ta]=h.useState(!1),[aa,Ca]=h.useState(void 0),pr=a===void 0,la=M==="select",Di=h.useMemo(()=>R!=="none"&&R>0?R:$==="fixed"?1:"none",[R,$])!=="none",yn=a??x,Oa=h.useRef(Array.isArray(yn)?yn:[]),Yl=h.useRef(!1),ya=h.useRef([]);h.useEffect(()=>{Array.isArray(a)&&(Oa.current=a)},[a]);const Da=h.useMemo(()=>D?null:je.find(W=>W.value===Fe),[D,je,Fe]),et=h.useMemo(()=>D&&Array.isArray(Fe)?Fe.reduce((W,ce)=>{const ye=je.find(st=>st.value===ce);return ye&&W.push(ye),W},[]):[],[je,Fe,D]),At=zf(we),[ba,bn]=h.useState([]);h.useEffect(()=>{if(D&&$t||!(ba.length>0)||bn([]),D&&$t&&At!==we&&we){const W=et.map(ye=>ye.value),ce=W.length>0?W.reduce((ye,st)=>{const pt=Re.find(oa=>oa.value===st);return pt&&ye.push(pt),ye},[]):[];bn(ce)}},[Re,we,et,D,$t]);const gr=h.useMemo(()=>{const W=ba.map(ye=>ye.value),ce=Re.filter(ye=>Pe(ye.value,Ke,Mt)).reduce((ye,st)=>(W.includes(st.value)||ye.push(st),ye),[...ba]);return ce.length?ce:[{id:"emptyMessage",render:()=>N.jsx(d2,{children:vn},"empty"),disabled:!0}]},[i,Re,w,Ke,ba]);h.useEffect(()=>{pe&&(gr.find(W=>W.id===pe)||me(void 0))},[gr,pe]);const na=v??h.useRef(null),Pa=h.useRef(null),Ct=h.useRef(null),vr=b||g?.current||Ct.current,Ga=h.useRef(null),ra=h.useRef(null),Xa=h.useRef({shouldExtendInputValue:!1}),dl=W=>{Ie(ce=>[...ce,W]),ya.current.includes(W.value)&&(ya.current=ya.current.filter(ce=>ce!==W.value))},ct=W=>{Oa.current.includes(W.value)&&(ya.current=[...ya.current,W.value]),Ie(ce=>ce.filter(ye=>ye.value!==W.value))},Bi=h.useCallback(W=>{Vt(ce=>[...ce,W])},[]),Ri=h.useCallback(W=>{Vt(ce=>ce.filter(ye=>ye.id!==W.id))},[]),xa=h.useCallback(()=>{Pt(!1),na.current&&pa(na.current,{value:""}),ie(!0)},[Fe]),ia=h.useCallback(W=>{const ce=Pa.current;if(!ce)return;const ye=Array.from(ce.options),st=ye.find(pt=>pt.value===W);if(st&&(D||ye.forEach(pt=>pt.selected=!1),st.selected=!D||!st.selected,ce.dispatchEvent(new Event("change",{bubbles:!0})),D||xa(),Ke&&na.current&&Qe)){pa(na.current,{value:"",selectionEnd:0,selectionStart:0});const pt=pe;me(""),setTimeout(()=>me(pt))}},[xa,D,Ke,pe]),_u=h.useCallback(()=>{const W=Pa.current;W&&(W.selectedIndex=-1,W.dispatchEvent(new Event("change",{bubbles:!0})))},[]);h.useEffect(()=>{I!==we&&Pt(I)},[I]),h.useEffect(()=>{ue?.(we),!we&&Gt&&document.activeElement!==Ct.current&&Pa.current?.focus()},[we,Gt]);const zi=Z||_u,yr=Di&&!we,Nu=h.useCallback(()=>N.jsx(IS,{containerRef:Ga,options:et,shouldShowCount:yr,disabled:m,readOnly:y,onChipRemove:ia,onChipClick:Sp,isOptionsListOpen:we,hasMaxHeight:!!R&&R!=="none"}),[et,yr,m,y,ia,we,R]),hl=(D?!Fe?.length:!Fe)&&!!E&&!Ke,xn=ne?.(Fe,Ke),Sa=Da?.children,br=D?Nu():Sa,ml=xn||br||Fe||null,Ea=typeof ml=="string",xr=Ea?N.jsx(m2,{visibleValue:ml,isSearchPanelOpen:we,targetRef:Ct,forceHideOverflowTooltip:Ma}):ml,Sn=()=>{Pt(W=>!W)},wu=()=>{if(!Ke&&Fe)return D?void(()=>{const W=(ce=[...et].reverse(),ce.find(({disabled:ye})=>!ye)?.value);var ce;W&&ia(W)})():ie(!1)};h.useEffect(()=>{if(!y&&!m)return Ct.current?.addEventListener("keydown",W),()=>{Ct.current?.removeEventListener("keydown",W)};function W(ce){const ye=G.getCode(ce);ye===G[" "]&&(!la&&Ke?ce.stopPropagation():we||(ce.preventDefault(),Pt(!0),ce.stopPropagation())),ye!==G.Enter||we||(ce.preventDefault(),Pt(!0),ce.stopPropagation()),ye!==G.ArrowDown&&ye!==G.ArrowUp||we||(Pt(!0),ce.stopPropagation());const st=ce.ctrlKey||ce.metaKey||ce.altKey;ce.key.length!==1||st||Ea&&!Ke&&ut&&(Xa.current.shouldExtendInputValue=!0),ye!==G.Backspace||ce.repeat||wu(),ye===G.Backspace&&((pt=>{if(!Ea||!na.current||Ke||!ut||!Fe)return;pt.preventDefault();const oa=ml.slice(0,-1);pa(na.current,{value:oa,selectionEnd:oa.length,selectionStart:oa.length})})(ce),Pt(!0)),ye===G.Escape&&we&&(Pt(!1),ce.preventDefault(),ce.stopPropagation())}},[y,m,la,Ke,we,et]),h.useEffect(()=>{function W(){Yl.current=!1}return Ct.current?.addEventListener("keyup",W),()=>{Ct.current?.removeEventListener("keyup",W)}},[]),h.useEffect(()=>{(!Gt&&!D||D)&&(na.current&&pa(na.current,{value:""}),ie(!0))},[D,Gt]),h.useEffect(()=>{we&&(la?Pa.current?.focus():na.current?.focus(),Ca(""))},[we,la]),h.useEffect(()=>{aa&&me("")},[aa]),h.useEffect(()=>{pe&&Ca("")},[pe]),h.useEffect(()=>{if(we){const W=Fe&&!Array.isArray(Fe)?Fe:void 0;me(W)}},[we]),h.useEffect(()=>{pr||ql(a)},[a,pr]),fg([Ct,ra],W=>{W.target&&Ct.current?.contains(W.target)||(ta(!1),xa())});const Hi=ut&&(D?!!Fe?.length:!!Fe),_t=h.useMemo(()=>h.Children.map(Oe,W=>h.isValidElement(W)?h.cloneElement(W,{key:$g(),...W.props}):null),[Oe]),ji=h.useMemo(()=>N.jsx(b2,{onDropDownOptionMount:Bi,onDropDownOptionUnMount:Ri,dimension:w,multiple:D,showCheckbox:L,children:_t}),[_t,w,L,D]),Tu=h.useMemo(()=>N.jsx(wS,{onConstantOptionMount:dl,onConstantOptionUnMount:ct,children:_t}),[_t]),En=Mb(mt),Li=og(mt),Vl={icon:Su,id:"searchSelectClearIcon",onClick:zi,"aria-hidden":!0},Ui={$isOpen:we,onClick:Sn,"aria-hidden":!0};return N.jsxs(c2,{className:u,style:c,$focused:Gt,$multiple:D,disabled:m,"data-disabled":m,$readonly:y,$isLoading:i,$dimension:w,ref:Ct,"data-status":s,onClick:m||y||i?void 0:W=>{W.target&&ra.current?.contains(W.target)||!la&&we||Sn()},onFocus:W=>{Gt||(ta(!0),ge?.(W))},onMouseDown:W=>{Gt&&W.preventDefault()},$skeleton:Me,onBlur:W=>{W.currentTarget.contains(W.relatedTarget)||ra.current?.contains(W.relatedTarget)||(ta(!1),Pt(!1),Pa.current?.blur(),qe?.(W),Yl.current=!1)},title:Rt,children:[Tu,ji,N.jsx(v2,{ref:va(ea,Pa),value:Fe,multiple:D,disabled:m,options:je,...mt,onChange:W=>{if(Yl.current&&la)return void Ca(W.target.value);const ce=D?Array.from(W.target.selectedOptions).map(st=>st.value):W.target.value;let ye=[];if(D&&Array.isArray(ce)){const st=ce.filter($a=>!Oa.current.includes($a)&&!ya.current.includes($a)),pt=Oa.current.filter($a=>!ce.includes($a)&&!ya.current.includes($a));ye=[...Oa.current,...st];const oa=[...ya.current];pt.forEach($a=>{const Qa=ye.findIndex($n=>$a===$n);Qa>-1&&ye.splice(Qa,1);const ki=oa.findIndex($n=>$a===$n);ki>-1&&oa.splice(ki,1)}),Oa.current=ye,ya.current=oa}pr&&ql(D?ye:ce),mt.onChange?.(W),Va?.(D?ye:ce)}}),N.jsx(cl,{}),N.jsxs(Bg,{tabIndex:-1,ref:Ga,className:"selectValueWrapper",$dimension:w,$multiple:D,$minRowCount:j!=="none"?j:void 0,$maxRowCount:R!=="none"?R:void 0,$idleHeight:$,$opened:we,$isEmpty:hl,children:[ut&&xr,(E&&hl||!la)&&N.jsx(n2,{"data-id":mt.id,placeholder:hl?E:"",tabIndex:-1,ref:na,disabled:m,readOnly:y||la,value:Ke,defaultValue:se,$isMultiple:D,$dimension:w,onChange:W=>{D||ie(!1),(ce=>{Xa.current.shouldExtendInputValue&&Ea&&(ce.target.value=`${ml}${ce.target.value}`,Xa.current.shouldExtendInputValue=!1)})(W),ae===void 0&&yt(W.target.value),J?.(W)},onKeyDown:re,onKeyUp:Ve,onKeyUpCapture:ve,onKeyDownCapture:Je})]}),we&&!Me&&N.jsx(Of,{ref:ra,tabIndex:-1,targetElement:vr,"data-dimension":w,alignSelf:Xe||lt,dropContainerCssMixin:K,className:ee,style:F,...En,children:N.jsx(f2,{dimension:w==="xl"?"l":w,active:pe,selected:Fe,onActivateItem:W=>me(W),onSelectItem:ia,onDeselectItem:ia,multiSelection:D,model:gr,renderTopPanel:S||X,renderBottomPanel:B||P,containerRef:ra,virtualScroll:Be,preventFocusSteal:!0,preselectedModeActive:la,preselected:aa,onPreselectItem:Ca,onMenuKeyDown:()=>{Yl.current=!0},...Li})}),N.jsxs(u2,{$multiple:D,$dimension:w,onClick:Sp,onMouseDown:W=>W.preventDefault(),children:[i&&N.jsx(Uf,{dimension:w==="s"?"ms":"m"}),te&&!y&&Hi&&N.jsx(_i,{...Vl,...zt(Vl)}),d,!y&&N.jsx(Ab,{"data-disabled":!!m||void 0,"data-loading":!!i||void 0,...Ui,...Lt(Ui)})]})]})});Yf.displayName="Select";var $p;function pf(){return pf=Object.assign?Object.assign.bind():function(a){for(var i=1;i<arguments.length;i++){var u=arguments[i];for(var c in u)({}).hasOwnProperty.call(u,c)&&(a[c]=u[c])}return a},pf.apply(null,arguments)}var C2=function(a){return h.createElement("svg",pf({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},a),$p||($p=h.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M20.65 18c0 1.66-1.35 3-3 3h-8c-1.31 0-2.43-.84-2.84-2.01q-.36-.015-.69-.12a.65.65 0 0 1-.43-.81c.1-.35.46-.54.81-.44.05.02.1.03.15.04V8c0-1.66 1.34-3 3-3h7.16a1 1 0 0 0-.04-.15.64.64 0 0 1 .43-.81c.35-.11.71.09.81.43q.09.27.12.57A3 3 0 0 1 20.65 8zm-11 1.7h8c.93 0 1.7-.76 1.7-1.7V8c0-.94-.77-1.7-1.7-1.7h-8c-.94 0-1.71.76-1.71 1.7v10c0 .94.77 1.7 1.71 1.7m-4.28-3.2c.02.06.03.12.03.19a.647.647 0 0 1-1.27.18C4.04 16.6 4 16.3 4 16v-.95c0-.35.29-.65.65-.65.35 0 .65.3.65.65V16c0 .17.02.34.07.5m-.07-4.56c0 .36-.3.65-.65.65-.36 0-.65-.29-.65-.65v-1.89c0-.36.29-.65.65-.65.35 0 .65.29.65.65zm0-5c0 .36-.3.65-.65.65-.36 0-.65-.29-.65-.65v-.95c0-.36.05-.72.15-1.06.11-.34.47-.54.82-.43a.64.64 0 0 1 .43.81c-.07.21-.1.45-.1.68zm1.66-3.19c-.34.1-.71-.09-.81-.44a.6.6 0 0 1-.03-.19c0-.27.18-.53.46-.62.34-.1.7-.16 1.07-.16h.64c.36 0 .65.3.65.65 0 .36-.29.65-.65.65h-.64c-.24 0-.47.04-.69.11m9.06-1.27a.64.64 0 0 1 .43.81c-.1.34-.47.53-.81.43-.16-.05-.32-.08-.5-.08h-.77c-.36 0-.65-.29-.65-.65 0-.35.29-.65.65-.65h.77c.31 0 .6.05.88.14m-5.6 1.16c-.35 0-.65-.29-.65-.65 0-.35.3-.65.65-.65h1.42c.36 0 .65.3.65.65 0 .36-.29.65-.65.65z"})))};const gf=a=>{switch(a.$dimension){case"xl":default:return 24;case"s":return 20}},Vf=a=>{switch(a.$dimension){case"xl":return 16;case"m":default:return 8;case"s":return 6}},Pf=a=>{switch(a.$dimension){case"xl":case"m":default:return 16;case"s":return 12}},O2=Y`
  padding-right: ${a=>Pf(a)+(a.$iconsAfterCount?gf(a)+8:0)}px;
`,D2=Y`
  background-color: var(--admiral-color-Neutral_Neutral10, ${a=>a.theme.color["Neutral/Neutral 10"]});
  border-color: transparent;
`,jt=Q.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0;
  pointer-events: none;
  overflow: hidden;
  min-width: 0;

  background: none;
  border: 1px solid var(--admiral-color-Neutral_Neutral40, ${a=>a.theme.color["Neutral/Neutral 40"]});
  border-radius: inherit;

  [data-status='error'] &&& {
    border: 1px solid var(--admiral-color-Error_Error60Main, ${a=>a.theme.color["Error/Error 60 Main"]});
  }

  [data-status='success'] &&& {
    border: 1px solid var(--admiral-color-Success_Success50Main, ${a=>a.theme.color["Success/Success 50 Main"]});
  }

  [data-read-only] &&& {
    border-color: transparent;
  }
`,B2=Y`
  background-color: var(--admiral-color-Neutral_Neutral00, ${a=>a.theme.color["Neutral/Neutral 00"]});

  &:focus + ${jt} {
    border: 2px solid var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]});
  }

  &&&:disabled + ${jt}, [data-read-only] &&& + ${jt} {
    border-color: transparent;
  }

  &:hover:not(:focus) + ${jt} {
    border-color: ${a=>a.disabled?"transparent":`var(--admiral-color-Neutral_Neutral60, ${a.theme.color["Neutral/Neutral 60"]})`};
  }

  &:user-invalid + ${jt}, &:user-invalid:hover + ${jt} {
    border: 1px solid var(--admiral-color-Error_Error60Main, ${a=>a.theme.color["Error/Error 60 Main"]});
  }

  [data-status='error']
    &&&:hover:not(:disabled)
    + ${jt},
    &:user-invalid:hover:not(:disabled)
    + ${jt} {
    border: 1px solid var(--admiral-color-Error_Error70, ${a=>a.theme.color["Error/Error 70"]});
  }

  [data-status='success'] &&&:hover:not(:disabled) + ${jt} {
    border: 1px solid var(--admiral-color-Success_Success60, ${a=>a.theme.color["Success/Success 60"]});
  }

  [data-status='error']
    &&&:focus:not(:disabled)
    + ${jt},
    &:user-invalid:focus:not(:disabled)
    + ${jt} {
    border: 2px solid var(--admiral-color-Error_Error60Main, ${a=>a.theme.color["Error/Error 60 Main"]});
  }

  [data-status='success'] &&&:focus:not(:disabled) + ${jt} {
    border: 2px solid var(--admiral-color-Success_Success50Main, ${a=>a.theme.color["Success/Success 50 Main"]});
  }

  [data-read-only] &&&,
  &&&:disabled {
    ${D2}
  }

  [data-read-only] &&&:hover + ${jt}, [data-read-only] &&&:focus + ${jt} {
    border-color: transparent;
  }
`,R2=Y`
  ::-ms-clear,
  ::-ms-reveal {
    display: none;
  }
`,Lg=Y`
  outline: none;
  appearance: none;
  border-radius: inherit;
  border: none;
  box-sizing: border-box;
  margin: 0;
  padding: ${Vf}px ${Pf}px;
  overflow-wrap: break-word;

  ${a=>a.$dimension==="s"?Ne["Body/Body 2 Long"]:Ne["Body/Body 1 Long"]}
  ${B2}
  ${O2}
`,z2=Q.div`
  ${Bf}
  ${Lg}

  [data-disable-copying] & {
    cursor: default;
  }
`,H2=Q.textarea`
  ${Bf}
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  resize: none;

  flex: 1 1 auto;
  min-width: 10px;
  background: transparent;

  color: var(--admiral-color-Neutral_Neutral90, ${a=>a.theme.color["Neutral/Neutral 90"]});

  ${a=>a.$dimension==="s"?Ne["Body/Body 2 Long"]:Ne["Body/Body 1 Long"]}
  &::placeholder {
    color: var(--admiral-color-Neutral_Neutral50, ${a=>a.theme.color["Neutral/Neutral 50"]});
  }

  &:disabled::placeholder,
  &:disabled {
    cursor: not-allowed;
    color: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
  }

  [data-disable-copying] & {
    user-select: none;
    pointer-events: none;
  }

  ${Lg}
  ${R2}
`,j2=Q.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-right: ${Pf}px;
  padding-top: ${Vf}px;

  & > * {
    display: block;
    width: ${gf}px;
    height: ${gf}px;
  }
`;function L2(a){return a}const U2=a=>a.preventDefault(),Us=(a,i)=>a*(i==="s"?20:24)+2*Vf({$dimension:i}),k2=Q(Ng)`
  min-height: ${a=>Us(a.$rows,a.$dimension)}px;
  ${a=>a.$maxRows?`max-height: ${Us(a.$maxRows,a.$dimension)}px;`:""}
  ${a=>a.$autoHeight?"":`height: ${Us(a.$rows,a.$dimension)}px;`}
  ${a=>a.disabled?"cursor: not-allowed;":""}
`,q2=jx(h.forwardRef((a,i)=>N.jsx("div",{ref:i,children:N.jsx(_i,{...a})})));function _p(a){return String(a||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/(\r?\n)$/g,"<br /><br />").replace(/\r?\n/g,"<br /> ")}const Np=()=>{},Ug=h.forwardRef(({rows:a=3,maxRows:i,value:u,displayClearIcon:c,displayCopyIcon:s,status:d,handleInput:g=L2,containerRef:b,icons:v,iconsAfter:m,children:y,className:E,autoHeight:x,skeleton:w=!1,dimension:$="m",disableCopying:j,locale:R,clearIconPropsConfig:M=Np,copyIconPropsConfig:D=Np,...L},te)=>{const Z=Af()||bu,J=h.useRef(null),[ae,se]=h.useState(null),ne=h.useRef(null),ge=h.Children.toArray(m||v),qe=R?.copyTextMessage||Z.locales[Z.currentLocale]?.textArea?.copyTextMessage,Oe=R?.copiedMessage||Z.locales[Z.currentLocale]?.textArea?.copiedMessage,[Xe,lt]=h.useState(qe),Me=S=>{S.preventDefault()},U={icon:Su,onMouseDown:Me,onClick:()=>{J.current&&pa(J.current,{value:""})},"aria-hidden":!0},K={tooltipDimension:"s",renderContent:()=>Xe,icon:C2,onMouseDown:Me,onClick:()=>{document.hasFocus()||window.focus(),J.current&&(navigator.clipboard.writeText(J.current.value),lt(Oe),setTimeout(()=>lt(qe),2e3))},"aria-hidden":!0};!L.readOnly&&J?.current?.value&&(c?ge.unshift(h.createElement(_i,{...U,...M(U),key:"clear-icon"})):s&&ge.unshift(h.createElement(q2,{...K,...D(K),key:"copy-icon"})));const ee=ge.length,F=u!=null?g({value:String(u)}):{};return h.useLayoutEffect(()=>{function S(){const{value:B,selectionStart:X,selectionEnd:P}=this,I=g({value:B,selectionStart:X,selectionEnd:P});pa(this,I)}if(J.current){const B=J.current;B.addEventListener("input",S);const{value:X,selectionStart:P,selectionEnd:I}=B,ue=g({value:X,selectionStart:P,selectionEnd:I});return pa(B,ue),()=>{B.removeEventListener("input",S)}}},[g]),h.useEffect(()=>{function S(){const{value:B}=this,X=ne.current;X&&(X.innerHTML=_p(B),this.style.overflowY=X.clientHeight<X.scrollHeight?"":"hidden")}if(x&&J.current&&ne.current){const B=J.current;return ne.current.innerHTML=_p(B.value),B.addEventListener("input",S),B.style.overflowY=ne.current.clientHeight<ne.current.scrollHeight?"":"hidden",()=>{B.removeEventListener("input",S),B.style.overflowY=""}}},[x,F.value,L.defaultValue]),N.jsxs(k2,{className:E,ref:b,"data-read-only":!!L.readOnly||void 0,"data-status":d,$skeleton:w,disabled:L.disabled,"data-disable-copying":!!j||void 0,$autoHeight:!!x,$rows:a,$maxRows:i,$dimension:$,...j&&{onMouseDown:U2},children:[N.jsx(z2,{ref:ne,$dimension:$,disabled:L.disabled,$iconsAfterCount:ee}),N.jsx(H2,{ref:va(te,J,S=>se(S)),...L,$dimension:$,$iconsAfterCount:ee,$autoHeight:x,value:F.value}),N.jsx(jt,{}),N.jsx(sg,{contentNode:ae}),ee>0&&N.jsx(j2,{disabled:L.disabled,$dimension:$,children:ge}),y]})});Ug.displayName="TextArea";const Y2=Y`
  background: ${({$background:a,theme:i})=>{switch(a){case"success":case"green":return`var(--admiral-color-Success_Success50Main, ${i.color["Success/Success 50 Main"]})`;case"primary":case"blue":return`var(--admiral-color-Primary_Primary60Main, ${i.color["Primary/Primary 60 Main"]})`;case"danger":case"red":return`var(--admiral-color-Error_Error60Main, ${i.color["Error/Error 60 Main"]})`;case"warning":case"orange":return`var(--admiral-color-Warning_Warning50Main, ${i.color["Warning/Warning 50 Main"]})`;default:return a}}};
`,V2=Y`
  background: ${({$background:a,theme:i})=>{switch(a){case"success":case"green":return`var(--admiral-color-Success_Success10, ${i.color["Success/Success 10"]})`;case"primary":case"blue":return`var(--admiral-color-Primary_Primary10, ${i.color["Primary/Primary 10"]})`;case"danger":case"red":return`var(--admiral-color-Error_Error10, ${i.color["Error/Error 10"]})`;case"warning":case"orange":return`var(--admiral-color-Warning_Warning10, ${i.color["Warning/Warning 10"]})`;case"neutral":return`var(--admiral-color-Opacity_Neutral8, ${i.color["Opacity/Neutral 8"]})`;default:return a||`var(--admiral-color-Opacity_Neutral8, ${i.color["Opacity/Neutral 8"]})`}}};
`,P2=Y`
  border: 1px solid
    ${({$border:a,theme:i})=>{switch(a){case"success":case"green":return`var(--admiral-color-Success_Success40, ${i.color["Success/Success 40"]})`;case"primary":case"blue":return`var(--admiral-color-Primary_Primary50, ${i.color["Primary/Primary 50"]})`;case"danger":case"red":return`var(--admiral-color-Error_Error50, ${i.color["Error/Error 50"]})`;case"warning":case"orange":return`var(--admiral-color-Warning_Warning40, ${i.color["Warning/Warning 40"]})`;case"neutral":return`var(--admiral-color-Neutral_Neutral40, ${i.color["Neutral/Neutral 40"]})`;default:return a||`var(--admiral-color-Neutral_Neutral40, ${i.color["Neutral/Neutral 40"]})`}}};
`,G2=Y`
  background: ${({$backgroundHover:a,theme:i})=>{switch(a){case"success":case"green":return`var(--admiral-color-Success_Success20, ${i.color["Success/Success 20"]})`;case"primary":case"blue":return`var(--admiral-color-Primary_Primary20, ${i.color["Primary/Primary 20"]})`;case"danger":case"red":return`var(--admiral-color-Error_Error20, ${i.color["Error/Error 20"]})`;case"warning":case"orange":return`var(--admiral-color-Warning_Warning20, ${i.color["Warning/Warning 20"]})`;case"neutral":return`var(--admiral-color-Opacity_Neutral12, ${i.color["Opacity/Neutral 12"]})`;default:return a||`var(--admiral-color-Opacity_Neutral12, ${i.color["Opacity/Neutral 12"]})`}}};
`,X2=Q.button`
  position: relative;
  box-sizing: border-box;
  max-width: 100%;

  ${({$dimension:a})=>`
    height: ${a==="s"?20:24}px;
    padding: ${a==="s"?1:3}px ${a==="s"?5:7}px;
  `}

  ${({$width:a})=>a&&`width: ${typeof a=="number"?`${a}px`:a};`}
  border-radius: var(--admiral-border-radius-Small, ${a=>ur(a.theme.shape)});
  ${({$statusViaBackground:a,theme:i})=>a?V2:`background: var(--admiral-color-Opacity_Neutral8, ${i.color["Opacity/Neutral 8"]});`}
  ${({$statusViaBackground:a})=>a?P2:"border: 1px solid transparent;"}

  display: inline-flex;
  align-items: center;
  cursor: ${({$clickable:a})=>a?"pointer":"default"};

  &:hover,
  &:active {
    ${({$statusViaBackground:a,$clickable:i})=>i&&!a?"border: 1px solid transparent;":""}
    ${({$statusViaBackground:a,theme:i,$clickable:u})=>u?a?G2:`background: var(--admiral-color-Opacity_Neutral12, ${i.color["Opacity/Neutral 12"]});`:""}
  }

  &:focus-visible {
    outline: none;

    &:before {
      content: '';
      position: absolute;
      top: -4px;
      bottom: -4px;
      left: -4px;
      right: -4px;
      border-radius: var(--admiral-border-radius-Small, ${a=>ur(a.theme.shape)});
      border: 2px solid var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]});
    }
  }
`,Q2=Q.span`
  color: var(--admiral-color-Neutral_Neutral90, ${a=>a.theme.color["Neutral/Neutral 90"]});
  user-select: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  ${Ne["Caption/Caption 1"]}
`,Z2=Q.div`
  display: flex;
  flex-shrink: 0;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 6px;
  ${Y2}
`,F2=Q.div`
  display: flex;
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  margin-right: 4px;

  & *[fill^='#'] {
    fill: var(--admiral-color-Neutral_Neutral50, ${a=>a.theme.color["Neutral/Neutral 50"]});
  }
`,K2=Q.div`
  display: flex;
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  margin-left: 4px;

  & *[fill^='#'] {
    fill: var(--admiral-color-Neutral_Neutral50, ${a=>a.theme.color["Neutral/Neutral 50"]});
  }

  &:hover {
    & *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral50, ${a=>a.theme.color["Neutral/Neutral 50"]});
    }
  }
`,nu=h.forwardRef(({children:a,kind:i="neutral",dimension:u="m",width:c,statusViaBackground:s=!1,isBorderHidden:d=!1,icon:g,statusIcon:b,onClick:v,...m},y)=>{const E=h.useRef(null),x=h.useRef(null),[w,$]=h.useState(!1),[j,R]=h.useState(!1),M=typeof i=="object"?i.background?i.background:"neutral":i,D=d?"transparent":typeof i=="object"?i.background&&i.border?i.border:"neutral":i,L=typeof i=="object"?i.backgroundHover?i.backgroundHover:i.background?i.background:"neutral":i;return h.useLayoutEffect(()=>{const te=x.current;te&&mn(te)!==w&&$(mn(te))},[j,$]),h.useLayoutEffect(()=>{function te(){R(!0)}function Z(){R(!1)}const J=E.current;if(J)return J.addEventListener("mouseenter",te),J.addEventListener("mouseleave",Z),J.addEventListener("focus",te),J.addEventListener("blur",Z),()=>{J.removeEventListener("mouseenter",te),J.removeEventListener("mouseleave",Z),J.removeEventListener("focus",te),J.removeEventListener("blur",Z)}},[R]),N.jsxs(N.Fragment,{children:[N.jsxs(X2,{ref:va(y,E),$width:c,onClick:v,$clickable:!!v,$statusViaBackground:s,$border:D,$background:M,$backgroundHover:L,$dimension:u,type:"button",...m,children:[M!=="neutral"&&!s&&N.jsx(Z2,{$background:M}),s&&g&&N.jsx(F2,{children:g}),a&&N.jsx(Q2,{ref:x,children:a}),b&&N.jsx(K2,{children:b})]}),j&&w&&N.jsx(dr,{targetElement:E.current,renderContent:()=>a})]})});nu.displayName="Tag";const W2=Q.div`
  display: flex;
  flex-flow: wrap;
  gap: 8px;
`,kg=({children:a,width:i,dimension:u,kind:c,isBorderHidden:s,statusViaBackground:d,onClick:g,...b})=>N.jsx(W2,{...b,children:h.Children.map(a,v=>h.isValidElement(v)?h.cloneElement(v,{onClick:v.props.onClick||g,width:v.props.width||i,kind:v.props.kind||c,statusViaBackground:v.props.statusViaBackground||d,isBorderHidden:v.props.isBorderHidden||s,...v.props,dimension:u}):null)});kg.displayName="Tags";const J2=Y`
  ${jf};
  pointer-events: none;
`,I2=Q.span`
  color: ${({$color:a,theme:i,$skeleton:u})=>{const c=`--admiral-color-${a?.replace("/","_").replaceAll(" ","")}`;return u?"transparent":a?i.color[a]?`var(${c}, ${i.color[a]})`:a:`var(--admiral-color-Neutral_Neutral90, ${i.color[Nb]})`}};
  ${a=>a.theme.typography[a.$font]};
  ${a=>a.$cssMixin?a.$cssMixin:""}
  ${a=>a.$skeleton&&J2}
`,Ua=Df(({font:a,color:i,cssMixin:u,skeleton:c,...s},d)=>N.jsx(I2,{ref:d,...s,$font:a,$color:i,$cssMixin:u,$skeleton:c}));Ua.displayName="T";const e6="/task_manager_t1/assets/VTBGroupUI-SemiBold-Wupg3RVc.ttf",t6="/task_manager_t1/assets/VTBGroupUI-Medium-CJW7SkqK.otf",a6="/task_manager_t1/assets/VTBGroupUI-Regular-JWIonCWQ.otf",l6=`
    @font-face {
        font-family: 'VTB Group UI';
        src: url('${e6}') format('truetype');
        font-display: swap;
        font-weight: 550;
        font-style: normal;
        font-feature-settings: 'tnum' on, 'lnum' on, 'cv03' on, 'cv04' on;
    }
    
    @font-face {
        font-family: 'VTB Group UI';
        src: url('${t6}') format('opentype');
        font-display: swap;
        font-weight: 500;
        font-style: normal;
        font-feature-settings: 'tnum' on, 'lnum' on, 'cv03' on, 'cv04' on;
    }

    @font-face {
        font-family: 'VTB Group UI';
        src: url('${a6}') format('opentype');
        font-display: swap;
        font-weight: 400;
        font-style: normal;
        font-feature-settings: 'tnum' on, 'lnum' on, 'cv03' on, 'cv04' on;
    }
`;function n6(a){return N.jsx("style",{type:"text/css",children:l6,...a})}var pi={},wp;function r6(){if(wp)return pi;wp=1,Object.defineProperty(pi,"__esModule",{value:!0}),pi.parse=g,pi.serialize=m;const a=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,i=/^[\u0021-\u003A\u003C-\u007E]*$/,u=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,c=/^[\u0020-\u003A\u003D-\u007E]*$/,s=Object.prototype.toString,d=(()=>{const x=function(){};return x.prototype=Object.create(null),x})();function g(x,w){const $=new d,j=x.length;if(j<2)return $;const R=w?.decode||y;let M=0;do{const D=x.indexOf("=",M);if(D===-1)break;const L=x.indexOf(";",M),te=L===-1?j:L;if(D>te){M=x.lastIndexOf(";",D-1)+1;continue}const Z=b(x,M,D),J=v(x,D,Z),ae=x.slice(Z,J);if($[ae]===void 0){let se=b(x,D+1,te),ne=v(x,te,se);const ge=R(x.slice(se,ne));$[ae]=ge}M=te+1}while(M<j);return $}function b(x,w,$){do{const j=x.charCodeAt(w);if(j!==32&&j!==9)return w}while(++w<$);return $}function v(x,w,$){for(;w>$;){const j=x.charCodeAt(--w);if(j!==32&&j!==9)return w+1}return $}function m(x,w,$){const j=$?.encode||encodeURIComponent;if(!a.test(x))throw new TypeError(`argument name is invalid: ${x}`);const R=j(w);if(!i.test(R))throw new TypeError(`argument val is invalid: ${w}`);let M=x+"="+R;if(!$)return M;if($.maxAge!==void 0){if(!Number.isInteger($.maxAge))throw new TypeError(`option maxAge is invalid: ${$.maxAge}`);M+="; Max-Age="+$.maxAge}if($.domain){if(!u.test($.domain))throw new TypeError(`option domain is invalid: ${$.domain}`);M+="; Domain="+$.domain}if($.path){if(!c.test($.path))throw new TypeError(`option path is invalid: ${$.path}`);M+="; Path="+$.path}if($.expires){if(!E($.expires)||!Number.isFinite($.expires.valueOf()))throw new TypeError(`option expires is invalid: ${$.expires}`);M+="; Expires="+$.expires.toUTCString()}if($.httpOnly&&(M+="; HttpOnly"),$.secure&&(M+="; Secure"),$.partitioned&&(M+="; Partitioned"),$.priority)switch(typeof $.priority=="string"?$.priority.toLowerCase():void 0){case"low":M+="; Priority=Low";break;case"medium":M+="; Priority=Medium";break;case"high":M+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${$.priority}`)}if($.sameSite)switch(typeof $.sameSite=="string"?$.sameSite.toLowerCase():$.sameSite){case!0:case"strict":M+="; SameSite=Strict";break;case"lax":M+="; SameSite=Lax";break;case"none":M+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${$.sameSite}`)}return M}function y(x){if(x.indexOf("%")===-1)return x;try{return decodeURIComponent(x)}catch{return x}}function E(x){return s.call(x)==="[object Date]"}return pi}r6();var Tp="popstate";function i6(a={}){function i(c,s){let{pathname:d,search:g,hash:b}=c.location;return vf("",{pathname:d,search:g,hash:b},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function u(c,s){return typeof s=="string"?s:wi(s)}return u6(i,u,null,a)}function at(a,i){if(a===!1||a===null||typeof a>"u")throw new Error(i)}function ka(a,i){if(!a){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function o6(){return Math.random().toString(36).substring(2,10)}function Mp(a,i){return{usr:a.state,key:a.key,idx:i}}function vf(a,i,u=null,c){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof i=="string"?hr(i):i,state:u,key:i&&i.key||c||o6()}}function wi({pathname:a="/",search:i="",hash:u=""}){return i&&i!=="?"&&(a+=i.charAt(0)==="?"?i:"?"+i),u&&u!=="#"&&(a+=u.charAt(0)==="#"?u:"#"+u),a}function hr(a){let i={};if(a){let u=a.indexOf("#");u>=0&&(i.hash=a.substring(u),a=a.substring(0,u));let c=a.indexOf("?");c>=0&&(i.search=a.substring(c),a=a.substring(0,c)),a&&(i.pathname=a)}return i}function u6(a,i,u,c={}){let{window:s=document.defaultView,v5Compat:d=!1}=c,g=s.history,b="POP",v=null,m=y();m==null&&(m=0,g.replaceState({...g.state,idx:m},""));function y(){return(g.state||{idx:null}).idx}function E(){b="POP";let R=y(),M=R==null?null:R-m;m=R,v&&v({action:b,location:j.location,delta:M})}function x(R,M){b="PUSH";let D=vf(j.location,R,M);m=y()+1;let L=Mp(D,m),te=j.createHref(D);try{g.pushState(L,"",te)}catch(Z){if(Z instanceof DOMException&&Z.name==="DataCloneError")throw Z;s.location.assign(te)}d&&v&&v({action:b,location:j.location,delta:1})}function w(R,M){b="REPLACE";let D=vf(j.location,R,M);m=y();let L=Mp(D,m),te=j.createHref(D);g.replaceState(L,"",te),d&&v&&v({action:b,location:j.location,delta:0})}function $(R){return c6(R)}let j={get action(){return b},get location(){return a(s,g)},listen(R){if(v)throw new Error("A history only accepts one active listener");return s.addEventListener(Tp,E),v=R,()=>{s.removeEventListener(Tp,E),v=null}},createHref(R){return i(s,R)},createURL:$,encodeLocation(R){let M=$(R);return{pathname:M.pathname,search:M.search,hash:M.hash}},push:x,replace:w,go(R){return g.go(R)}};return j}function c6(a,i=!1){let u="http://localhost";typeof window<"u"&&(u=window.location.origin!=="null"?window.location.origin:window.location.href),at(u,"No window.location.(origin|href) available to create URL");let c=typeof a=="string"?a:wi(a);return c=c.replace(/ $/,"%20"),!i&&c.startsWith("//")&&(c=u+c),new URL(c,u)}function qg(a,i,u="/"){return s6(a,i,u,!1)}function s6(a,i,u,c){let s=typeof i=="string"?hr(i):i,d=fl(s.pathname||"/",u);if(d==null)return null;let g=Yg(a);f6(g);let b=null;for(let v=0;b==null&&v<g.length;++v){let m=E6(d);b=x6(g[v],m,c)}return b}function Yg(a,i=[],u=[],c=""){let s=(d,g,b)=>{let v={relativePath:b===void 0?d.path||"":b,caseSensitive:d.caseSensitive===!0,childrenIndex:g,route:d};v.relativePath.startsWith("/")&&(at(v.relativePath.startsWith(c),`Absolute route path "${v.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(c.length));let m=sl([c,v.relativePath]),y=u.concat(v);d.children&&d.children.length>0&&(at(d.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),Yg(d.children,i,y,m)),!(d.path==null&&!d.index)&&i.push({path:m,score:y6(m,d.index),routesMeta:y})};return a.forEach((d,g)=>{if(d.path===""||!d.path?.includes("?"))s(d,g);else for(let b of Vg(d.path))s(d,g,b)}),i}function Vg(a){let i=a.split("/");if(i.length===0)return[];let[u,...c]=i,s=u.endsWith("?"),d=u.replace(/\?$/,"");if(c.length===0)return s?[d,""]:[d];let g=Vg(c.join("/")),b=[];return b.push(...g.map(v=>v===""?d:[d,v].join("/"))),s&&b.push(...g),b.map(v=>a.startsWith("/")&&v===""?"/":v)}function f6(a){a.sort((i,u)=>i.score!==u.score?u.score-i.score:b6(i.routesMeta.map(c=>c.childrenIndex),u.routesMeta.map(c=>c.childrenIndex)))}var d6=/^:[\w-]+$/,h6=3,m6=2,p6=1,g6=10,v6=-2,Ap=a=>a==="*";function y6(a,i){let u=a.split("/"),c=u.length;return u.some(Ap)&&(c+=v6),i&&(c+=m6),u.filter(s=>!Ap(s)).reduce((s,d)=>s+(d6.test(d)?h6:d===""?p6:g6),c)}function b6(a,i){return a.length===i.length&&a.slice(0,-1).every((c,s)=>c===i[s])?a[a.length-1]-i[i.length-1]:0}function x6(a,i,u=!1){let{routesMeta:c}=a,s={},d="/",g=[];for(let b=0;b<c.length;++b){let v=c[b],m=b===c.length-1,y=d==="/"?i:i.slice(d.length)||"/",E=du({path:v.relativePath,caseSensitive:v.caseSensitive,end:m},y),x=v.route;if(!E&&m&&u&&!c[c.length-1].route.index&&(E=du({path:v.relativePath,caseSensitive:v.caseSensitive,end:!1},y)),!E)return null;Object.assign(s,E.params),g.push({params:s,pathname:sl([d,E.pathname]),pathnameBase:w6(sl([d,E.pathnameBase])),route:x}),E.pathnameBase!=="/"&&(d=sl([d,E.pathnameBase]))}return g}function du(a,i){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[u,c]=S6(a.path,a.caseSensitive,a.end),s=i.match(u);if(!s)return null;let d=s[0],g=d.replace(/(.)\/+$/,"$1"),b=s.slice(1);return{params:c.reduce((m,{paramName:y,isOptional:E},x)=>{if(y==="*"){let $=b[x]||"";g=d.slice(0,d.length-$.length).replace(/(.)\/+$/,"$1")}const w=b[x];return E&&!w?m[y]=void 0:m[y]=(w||"").replace(/%2F/g,"/"),m},{}),pathname:d,pathnameBase:g,pattern:a}}function S6(a,i=!1,u=!0){ka(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let c=[],s="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(g,b,v)=>(c.push({paramName:b,isOptional:v!=null}),v?"/?([^\\/]+)?":"/([^\\/]+)"));return a.endsWith("*")?(c.push({paramName:"*"}),s+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?s+="\\/*$":a!==""&&a!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,i?void 0:"i"),c]}function E6(a){try{return a.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return ka(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`),a}}function fl(a,i){if(i==="/")return a;if(!a.toLowerCase().startsWith(i.toLowerCase()))return null;let u=i.endsWith("/")?i.length-1:i.length,c=a.charAt(u);return c&&c!=="/"?null:a.slice(u)||"/"}function $6(a,i="/"){let{pathname:u,search:c="",hash:s=""}=typeof a=="string"?hr(a):a;return{pathname:u?u.startsWith("/")?u:_6(u,i):i,search:T6(c),hash:M6(s)}}function _6(a,i){let u=i.replace(/\/+$/,"").split("/");return a.split("/").forEach(s=>{s===".."?u.length>1&&u.pop():s!=="."&&u.push(s)}),u.length>1?u.join("/"):"/"}function ks(a,i,u,c){return`Cannot include a '${a}' character in a manually specified \`to.${i}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function N6(a){return a.filter((i,u)=>u===0||i.route.path&&i.route.path.length>0)}function Pg(a){let i=N6(a);return i.map((u,c)=>c===i.length-1?u.pathname:u.pathnameBase)}function Gg(a,i,u,c=!1){let s;typeof a=="string"?s=hr(a):(s={...a},at(!s.pathname||!s.pathname.includes("?"),ks("?","pathname","search",s)),at(!s.pathname||!s.pathname.includes("#"),ks("#","pathname","hash",s)),at(!s.search||!s.search.includes("#"),ks("#","search","hash",s)));let d=a===""||s.pathname==="",g=d?"/":s.pathname,b;if(g==null)b=u;else{let E=i.length-1;if(!c&&g.startsWith("..")){let x=g.split("/");for(;x[0]==="..";)x.shift(),E-=1;s.pathname=x.join("/")}b=E>=0?i[E]:"/"}let v=$6(s,b),m=g&&g!=="/"&&g.endsWith("/"),y=(d||g===".")&&u.endsWith("/");return!v.pathname.endsWith("/")&&(m||y)&&(v.pathname+="/"),v}var sl=a=>a.join("/").replace(/\/\/+/g,"/"),w6=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),T6=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,M6=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a;function A6(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}var Xg=["POST","PUT","PATCH","DELETE"];new Set(Xg);var C6=["GET",...Xg];new Set(C6);var mr=h.createContext(null);mr.displayName="DataRouter";var Eu=h.createContext(null);Eu.displayName="DataRouterState";var Qg=h.createContext({isTransitioning:!1});Qg.displayName="ViewTransition";var O6=h.createContext(new Map);O6.displayName="Fetchers";var D6=h.createContext(null);D6.displayName="Await";var qa=h.createContext(null);qa.displayName="Navigation";var Ai=h.createContext(null);Ai.displayName="Location";var Ya=h.createContext({outlet:null,matches:[],isDataRoute:!1});Ya.displayName="Route";var Gf=h.createContext(null);Gf.displayName="RouteError";function B6(a,{relative:i}={}){at(Ci(),"useHref() may be used only in the context of a <Router> component.");let{basename:u,navigator:c}=h.useContext(qa),{hash:s,pathname:d,search:g}=Oi(a,{relative:i}),b=d;return u!=="/"&&(b=d==="/"?u:sl([u,d])),c.createHref({pathname:b,search:g,hash:s})}function Ci(){return h.useContext(Ai)!=null}function gn(){return at(Ci(),"useLocation() may be used only in the context of a <Router> component."),h.useContext(Ai).location}var Zg="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Fg(a){h.useContext(qa).static||h.useLayoutEffect(a)}function Kg(){let{isDataRoute:a}=h.useContext(Ya);return a?Q6():R6()}function R6(){at(Ci(),"useNavigate() may be used only in the context of a <Router> component.");let a=h.useContext(mr),{basename:i,navigator:u}=h.useContext(qa),{matches:c}=h.useContext(Ya),{pathname:s}=gn(),d=JSON.stringify(Pg(c)),g=h.useRef(!1);return Fg(()=>{g.current=!0}),h.useCallback((v,m={})=>{if(ka(g.current,Zg),!g.current)return;if(typeof v=="number"){u.go(v);return}let y=Gg(v,JSON.parse(d),s,m.relative==="path");a==null&&i!=="/"&&(y.pathname=y.pathname==="/"?i:sl([i,y.pathname])),(m.replace?u.replace:u.push)(y,m.state,m)},[i,u,d,s,a])}h.createContext(null);function z6(){let{matches:a}=h.useContext(Ya),i=a[a.length-1];return i?i.params:{}}function Oi(a,{relative:i}={}){let{matches:u}=h.useContext(Ya),{pathname:c}=gn(),s=JSON.stringify(Pg(u));return h.useMemo(()=>Gg(a,JSON.parse(s),c,i==="path"),[a,s,c,i])}function H6(a,i){return Wg(a,i)}function Wg(a,i,u,c){at(Ci(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=h.useContext(qa),{matches:d}=h.useContext(Ya),g=d[d.length-1],b=g?g.params:{},v=g?g.pathname:"/",m=g?g.pathnameBase:"/",y=g&&g.route;{let M=y&&y.path||"";Jg(v,!y||M.endsWith("*")||M.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${v}" (under <Route path="${M}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${M}"> to <Route path="${M==="/"?"*":`${M}/*`}">.`)}let E=gn(),x;if(i){let M=typeof i=="string"?hr(i):i;at(m==="/"||M.pathname?.startsWith(m),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${M.pathname}" was given in the \`location\` prop.`),x=M}else x=E;let w=x.pathname||"/",$=w;if(m!=="/"){let M=m.replace(/^\//,"").split("/");$="/"+w.replace(/^\//,"").split("/").slice(M.length).join("/")}let j=qg(a,{pathname:$});ka(y||j!=null,`No routes matched location "${x.pathname}${x.search}${x.hash}" `),ka(j==null||j[j.length-1].route.element!==void 0||j[j.length-1].route.Component!==void 0||j[j.length-1].route.lazy!==void 0,`Matched leaf route at location "${x.pathname}${x.search}${x.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let R=q6(j&&j.map(M=>Object.assign({},M,{params:Object.assign({},b,M.params),pathname:sl([m,s.encodeLocation?s.encodeLocation(M.pathname).pathname:M.pathname]),pathnameBase:M.pathnameBase==="/"?m:sl([m,s.encodeLocation?s.encodeLocation(M.pathnameBase).pathname:M.pathnameBase])})),d,u,c);return i&&R?h.createElement(Ai.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...x},navigationType:"POP"}},R):R}function j6(){let a=X6(),i=A6(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),u=a instanceof Error?a.stack:null,c="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:c},d={padding:"2px 4px",backgroundColor:c},g=null;return console.error("Error handled by React Router default ErrorBoundary:",a),g=h.createElement(h.Fragment,null,h.createElement("p",null,"💿 Hey developer 👋"),h.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",h.createElement("code",{style:d},"ErrorBoundary")," or"," ",h.createElement("code",{style:d},"errorElement")," prop on your route.")),h.createElement(h.Fragment,null,h.createElement("h2",null,"Unexpected Application Error!"),h.createElement("h3",{style:{fontStyle:"italic"}},i),u?h.createElement("pre",{style:s},u):null,g)}var L6=h.createElement(j6,null),U6=class extends h.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,i){return i.location!==a.location||i.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:i.error,location:i.location,revalidation:a.revalidation||i.revalidation}}componentDidCatch(a,i){console.error("React Router caught the following error during render",a,i)}render(){return this.state.error!==void 0?h.createElement(Ya.Provider,{value:this.props.routeContext},h.createElement(Gf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function k6({routeContext:a,match:i,children:u}){let c=h.useContext(mr);return c&&c.static&&c.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=i.route.id),h.createElement(Ya.Provider,{value:a},u)}function q6(a,i=[],u=null,c=null){if(a==null){if(!u)return null;if(u.errors)a=u.matches;else if(i.length===0&&!u.initialized&&u.matches.length>0)a=u.matches;else return null}let s=a,d=u?.errors;if(d!=null){let v=s.findIndex(m=>m.route.id&&d?.[m.route.id]!==void 0);at(v>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(d).join(",")}`),s=s.slice(0,Math.min(s.length,v+1))}let g=!1,b=-1;if(u)for(let v=0;v<s.length;v++){let m=s[v];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(b=v),m.route.id){let{loaderData:y,errors:E}=u,x=m.route.loader&&!y.hasOwnProperty(m.route.id)&&(!E||E[m.route.id]===void 0);if(m.route.lazy||x){g=!0,b>=0?s=s.slice(0,b+1):s=[s[0]];break}}}return s.reduceRight((v,m,y)=>{let E,x=!1,w=null,$=null;u&&(E=d&&m.route.id?d[m.route.id]:void 0,w=m.route.errorElement||L6,g&&(b<0&&y===0?(Jg("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),x=!0,$=null):b===y&&(x=!0,$=m.route.hydrateFallbackElement||null)));let j=i.concat(s.slice(0,y+1)),R=()=>{let M;return E?M=w:x?M=$:m.route.Component?M=h.createElement(m.route.Component,null):m.route.element?M=m.route.element:M=v,h.createElement(k6,{match:m,routeContext:{outlet:v,matches:j,isDataRoute:u!=null},children:M})};return u&&(m.route.ErrorBoundary||m.route.errorElement||y===0)?h.createElement(U6,{location:u.location,revalidation:u.revalidation,component:w,error:E,children:R(),routeContext:{outlet:null,matches:j,isDataRoute:!0}}):R()},null)}function Xf(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Y6(a){let i=h.useContext(mr);return at(i,Xf(a)),i}function V6(a){let i=h.useContext(Eu);return at(i,Xf(a)),i}function P6(a){let i=h.useContext(Ya);return at(i,Xf(a)),i}function Qf(a){let i=P6(a),u=i.matches[i.matches.length-1];return at(u.route.id,`${a} can only be used on routes that contain a unique "id"`),u.route.id}function G6(){return Qf("useRouteId")}function X6(){let a=h.useContext(Gf),i=V6("useRouteError"),u=Qf("useRouteError");return a!==void 0?a:i.errors?.[u]}function Q6(){let{router:a}=Y6("useNavigate"),i=Qf("useNavigate"),u=h.useRef(!1);return Fg(()=>{u.current=!0}),h.useCallback(async(s,d={})=>{ka(u.current,Zg),u.current&&(typeof s=="number"?a.navigate(s):await a.navigate(s,{fromRouteId:i,...d}))},[a,i])}var Cp={};function Jg(a,i,u){!i&&!Cp[a]&&(Cp[a]=!0,ka(!1,u))}h.memo(Z6);function Z6({routes:a,future:i,state:u}){return Wg(a,void 0,u,i)}function yf(a){at(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function F6({basename:a="/",children:i=null,location:u,navigationType:c="POP",navigator:s,static:d=!1}){at(!Ci(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let g=a.replace(/^\/*/,"/"),b=h.useMemo(()=>({basename:g,navigator:s,static:d,future:{}}),[g,s,d]);typeof u=="string"&&(u=hr(u));let{pathname:v="/",search:m="",hash:y="",state:E=null,key:x="default"}=u,w=h.useMemo(()=>{let $=fl(v,g);return $==null?null:{location:{pathname:$,search:m,hash:y,state:E,key:x},navigationType:c}},[g,v,m,y,E,x,c]);return ka(w!=null,`<Router basename="${g}"> is not able to match the URL "${v}${m}${y}" because it does not start with the basename, so the <Router> won't render anything.`),w==null?null:h.createElement(qa.Provider,{value:b},h.createElement(Ai.Provider,{children:i,value:w}))}function K6({children:a,location:i}){return H6(bf(a),i)}function bf(a,i=[]){let u=[];return h.Children.forEach(a,(c,s)=>{if(!h.isValidElement(c))return;let d=[...i,s];if(c.type===h.Fragment){u.push.apply(u,bf(c.props.children,d));return}at(c.type===yf,`[${typeof c.type=="string"?c.type:c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),at(!c.props.index||!c.props.children,"An index route cannot have child routes.");let g={id:c.props.id||d.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,loader:c.props.loader,action:c.props.action,hydrateFallbackElement:c.props.hydrateFallbackElement,HydrateFallback:c.props.HydrateFallback,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.hasErrorBoundary===!0||c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(g.children=bf(c.props.children,d)),u.push(g)}),u}var ru="get",iu="application/x-www-form-urlencoded";function $u(a){return a!=null&&typeof a.tagName=="string"}function W6(a){return $u(a)&&a.tagName.toLowerCase()==="button"}function J6(a){return $u(a)&&a.tagName.toLowerCase()==="form"}function I6(a){return $u(a)&&a.tagName.toLowerCase()==="input"}function e3(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function t3(a,i){return a.button===0&&(!i||i==="_self")&&!e3(a)}var Wo=null;function a3(){if(Wo===null)try{new FormData(document.createElement("form"),0),Wo=!1}catch{Wo=!0}return Wo}var l3=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function qs(a){return a!=null&&!l3.has(a)?(ka(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${iu}"`),null):a}function n3(a,i){let u,c,s,d,g;if(J6(a)){let b=a.getAttribute("action");c=b?fl(b,i):null,u=a.getAttribute("method")||ru,s=qs(a.getAttribute("enctype"))||iu,d=new FormData(a)}else if(W6(a)||I6(a)&&(a.type==="submit"||a.type==="image")){let b=a.form;if(b==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let v=a.getAttribute("formaction")||b.getAttribute("action");if(c=v?fl(v,i):null,u=a.getAttribute("formmethod")||b.getAttribute("method")||ru,s=qs(a.getAttribute("formenctype"))||qs(b.getAttribute("enctype"))||iu,d=new FormData(b,a),!a3()){let{name:m,type:y,value:E}=a;if(y==="image"){let x=m?`${m}.`:"";d.append(`${x}x`,"0"),d.append(`${x}y`,"0")}else m&&d.append(m,E)}}else{if($u(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');u=ru,c=null,s=iu,g=a}return d&&s==="text/plain"&&(g=d,d=void 0),{action:c,method:u.toLowerCase(),encType:s,formData:d,body:g}}function Zf(a,i){if(a===!1||a===null||typeof a>"u")throw new Error(i)}async function r3(a,i){if(a.id in i)return i[a.id];try{let u=await import(a.module);return i[a.id]=u,u}catch(u){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(u),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function i3(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function o3(a,i,u){let c=await Promise.all(a.map(async s=>{let d=i.routes[s.route.id];if(d){let g=await r3(d,u);return g.links?g.links():[]}return[]}));return f3(c.flat(1).filter(i3).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function Op(a,i,u,c,s,d){let g=(v,m)=>u[m]?v.route.id!==u[m].route.id:!0,b=(v,m)=>u[m].pathname!==v.pathname||u[m].route.path?.endsWith("*")&&u[m].params["*"]!==v.params["*"];return d==="assets"?i.filter((v,m)=>g(v,m)||b(v,m)):d==="data"?i.filter((v,m)=>{let y=c.routes[v.route.id];if(!y||!y.hasLoader)return!1;if(g(v,m)||b(v,m))return!0;if(v.route.shouldRevalidate){let E=v.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:u[0]?.params||{},nextUrl:new URL(a,window.origin),nextParams:v.params,defaultShouldRevalidate:!0});if(typeof E=="boolean")return E}return!0}):[]}function u3(a,i,{includeHydrateFallback:u}={}){return c3(a.map(c=>{let s=i.routes[c.route.id];if(!s)return[];let d=[s.module];return s.clientActionModule&&(d=d.concat(s.clientActionModule)),s.clientLoaderModule&&(d=d.concat(s.clientLoaderModule)),u&&s.hydrateFallbackModule&&(d=d.concat(s.hydrateFallbackModule)),s.imports&&(d=d.concat(s.imports)),d}).flat(1))}function c3(a){return[...new Set(a)]}function s3(a){let i={},u=Object.keys(a).sort();for(let c of u)i[c]=a[c];return i}function f3(a,i){let u=new Set;return new Set(i),a.reduce((c,s)=>{let d=JSON.stringify(s3(s));return u.has(d)||(u.add(d),c.push({key:d,link:s})),c},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var d3=new Set([100,101,204,205]);function h3(a,i){let u=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return u.pathname==="/"?u.pathname="_root.data":i&&fl(u.pathname,i)==="/"?u.pathname=`${i.replace(/\/$/,"")}/_root.data`:u.pathname=`${u.pathname.replace(/\/$/,"")}.data`,u}function Ig(){let a=h.useContext(mr);return Zf(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function m3(){let a=h.useContext(Eu);return Zf(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var Ff=h.createContext(void 0);Ff.displayName="FrameworkContext";function ev(){let a=h.useContext(Ff);return Zf(a,"You must render this element inside a <HydratedRouter> element"),a}function p3(a,i){let u=h.useContext(Ff),[c,s]=h.useState(!1),[d,g]=h.useState(!1),{onFocus:b,onBlur:v,onMouseEnter:m,onMouseLeave:y,onTouchStart:E}=i,x=h.useRef(null);h.useEffect(()=>{if(a==="render"&&g(!0),a==="viewport"){let j=M=>{M.forEach(D=>{g(D.isIntersecting)})},R=new IntersectionObserver(j,{threshold:.5});return x.current&&R.observe(x.current),()=>{R.disconnect()}}},[a]),h.useEffect(()=>{if(c){let j=setTimeout(()=>{g(!0)},100);return()=>{clearTimeout(j)}}},[c]);let w=()=>{s(!0)},$=()=>{s(!1),g(!1)};return u?a!=="intent"?[d,x,{}]:[d,x,{onFocus:gi(b,w),onBlur:gi(v,$),onMouseEnter:gi(m,w),onMouseLeave:gi(y,$),onTouchStart:gi(E,w)}]:[!1,x,{}]}function gi(a,i){return u=>{a&&a(u),u.defaultPrevented||i(u)}}function g3({page:a,...i}){let{router:u}=Ig(),c=h.useMemo(()=>qg(u.routes,a,u.basename),[u.routes,a,u.basename]);return c?h.createElement(y3,{page:a,matches:c,...i}):null}function v3(a){let{manifest:i,routeModules:u}=ev(),[c,s]=h.useState([]);return h.useEffect(()=>{let d=!1;return o3(a,i,u).then(g=>{d||s(g)}),()=>{d=!0}},[a,i,u]),c}function y3({page:a,matches:i,...u}){let c=gn(),{manifest:s,routeModules:d}=ev(),{basename:g}=Ig(),{loaderData:b,matches:v}=m3(),m=h.useMemo(()=>Op(a,i,v,s,c,"data"),[a,i,v,s,c]),y=h.useMemo(()=>Op(a,i,v,s,c,"assets"),[a,i,v,s,c]),E=h.useMemo(()=>{if(a===c.pathname+c.search+c.hash)return[];let $=new Set,j=!1;if(i.forEach(M=>{let D=s.routes[M.route.id];!D||!D.hasLoader||(!m.some(L=>L.route.id===M.route.id)&&M.route.id in b&&d[M.route.id]?.shouldRevalidate||D.hasClientLoader?j=!0:$.add(M.route.id))}),$.size===0)return[];let R=h3(a,g);return j&&$.size>0&&R.searchParams.set("_routes",i.filter(M=>$.has(M.route.id)).map(M=>M.route.id).join(",")),[R.pathname+R.search]},[g,b,c,s,m,i,a,d]),x=h.useMemo(()=>u3(y,s),[y,s]),w=v3(y);return h.createElement(h.Fragment,null,E.map($=>h.createElement("link",{key:$,rel:"prefetch",as:"fetch",href:$,...u})),x.map($=>h.createElement("link",{key:$,rel:"modulepreload",href:$,...u})),w.map(({key:$,link:j})=>h.createElement("link",{key:$,...j})))}function b3(...a){return i=>{a.forEach(u=>{typeof u=="function"?u(i):u!=null&&(u.current=i)})}}var tv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{tv&&(window.__reactRouterVersion="7.6.3")}catch{}function x3({basename:a,children:i,window:u}){let c=h.useRef();c.current==null&&(c.current=i6({window:u,v5Compat:!0}));let s=c.current,[d,g]=h.useState({action:s.action,location:s.location}),b=h.useCallback(v=>{h.startTransition(()=>g(v))},[g]);return h.useLayoutEffect(()=>s.listen(b),[s,b]),h.createElement(F6,{basename:a,children:i,location:d.location,navigationType:d.action,navigator:s})}var av=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Kf=h.forwardRef(function({onClick:i,discover:u="render",prefetch:c="none",relative:s,reloadDocument:d,replace:g,state:b,target:v,to:m,preventScrollReset:y,viewTransition:E,...x},w){let{basename:$}=h.useContext(qa),j=typeof m=="string"&&av.test(m),R,M=!1;if(typeof m=="string"&&j&&(R=m,tv))try{let ne=new URL(window.location.href),ge=m.startsWith("//")?new URL(ne.protocol+m):new URL(m),qe=fl(ge.pathname,$);ge.origin===ne.origin&&qe!=null?m=qe+ge.search+ge.hash:M=!0}catch{ka(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let D=B6(m,{relative:s}),[L,te,Z]=p3(c,x),J=_3(m,{replace:g,state:b,target:v,preventScrollReset:y,relative:s,viewTransition:E});function ae(ne){i&&i(ne),ne.defaultPrevented||J(ne)}let se=h.createElement("a",{...x,...Z,href:R||D,onClick:M||d?i:ae,ref:b3(w,te),target:v,"data-discover":!j&&u==="render"?"true":void 0});return L&&!j?h.createElement(h.Fragment,null,se,h.createElement(g3,{page:D})):se});Kf.displayName="Link";var S3=h.forwardRef(function({"aria-current":i="page",caseSensitive:u=!1,className:c="",end:s=!1,style:d,to:g,viewTransition:b,children:v,...m},y){let E=Oi(g,{relative:m.relative}),x=gn(),w=h.useContext(Eu),{navigator:$,basename:j}=h.useContext(qa),R=w!=null&&A3(E)&&b===!0,M=$.encodeLocation?$.encodeLocation(E).pathname:E.pathname,D=x.pathname,L=w&&w.navigation&&w.navigation.location?w.navigation.location.pathname:null;u||(D=D.toLowerCase(),L=L?L.toLowerCase():null,M=M.toLowerCase()),L&&j&&(L=fl(L,j)||L);const te=M!=="/"&&M.endsWith("/")?M.length-1:M.length;let Z=D===M||!s&&D.startsWith(M)&&D.charAt(te)==="/",J=L!=null&&(L===M||!s&&L.startsWith(M)&&L.charAt(M.length)==="/"),ae={isActive:Z,isPending:J,isTransitioning:R},se=Z?i:void 0,ne;typeof c=="function"?ne=c(ae):ne=[c,Z?"active":null,J?"pending":null,R?"transitioning":null].filter(Boolean).join(" ");let ge=typeof d=="function"?d(ae):d;return h.createElement(Kf,{...m,"aria-current":se,className:ne,ref:y,style:ge,to:g,viewTransition:b},typeof v=="function"?v(ae):v)});S3.displayName="NavLink";var E3=h.forwardRef(({discover:a="render",fetcherKey:i,navigate:u,reloadDocument:c,replace:s,state:d,method:g=ru,action:b,onSubmit:v,relative:m,preventScrollReset:y,viewTransition:E,...x},w)=>{let $=T3(),j=M3(b,{relative:m}),R=g.toLowerCase()==="get"?"get":"post",M=typeof b=="string"&&av.test(b),D=L=>{if(v&&v(L),L.defaultPrevented)return;L.preventDefault();let te=L.nativeEvent.submitter,Z=te?.getAttribute("formmethod")||g;$(te||L.currentTarget,{fetcherKey:i,method:Z,navigate:u,replace:s,state:d,relative:m,preventScrollReset:y,viewTransition:E})};return h.createElement("form",{ref:w,method:R,action:j,onSubmit:c?v:D,...x,"data-discover":!M&&a==="render"?"true":void 0})});E3.displayName="Form";function $3(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function lv(a){let i=h.useContext(mr);return at(i,$3(a)),i}function _3(a,{target:i,replace:u,state:c,preventScrollReset:s,relative:d,viewTransition:g}={}){let b=Kg(),v=gn(),m=Oi(a,{relative:d});return h.useCallback(y=>{if(t3(y,i)){y.preventDefault();let E=u!==void 0?u:wi(v)===wi(m);b(a,{replace:E,state:c,preventScrollReset:s,relative:d,viewTransition:g})}},[v,b,m,u,c,i,a,s,d,g])}var N3=0,w3=()=>`__${String(++N3)}__`;function T3(){let{router:a}=lv("useSubmit"),{basename:i}=h.useContext(qa),u=G6();return h.useCallback(async(c,s={})=>{let{action:d,method:g,encType:b,formData:v,body:m}=n3(c,i);if(s.navigate===!1){let y=s.fetcherKey||w3();await a.fetch(y,u,s.action||d,{preventScrollReset:s.preventScrollReset,formData:v,body:m,formMethod:s.method||g,formEncType:s.encType||b,flushSync:s.flushSync})}else await a.navigate(s.action||d,{preventScrollReset:s.preventScrollReset,formData:v,body:m,formMethod:s.method||g,formEncType:s.encType||b,replace:s.replace,state:s.state,fromRouteId:u,flushSync:s.flushSync,viewTransition:s.viewTransition})},[a,i,u])}function M3(a,{relative:i}={}){let{basename:u}=h.useContext(qa),c=h.useContext(Ya);at(c,"useFormAction must be used inside a RouteContext");let[s]=c.matches.slice(-1),d={...Oi(a||".",{relative:i})},g=gn();if(a==null){d.search=g.search;let b=new URLSearchParams(d.search),v=b.getAll("index");if(v.some(y=>y==="")){b.delete("index"),v.filter(E=>E).forEach(E=>b.append("index",E));let y=b.toString();d.search=y?`?${y}`:""}}return(!a||a===".")&&s.route.index&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),u!=="/"&&(d.pathname=d.pathname==="/"?u:sl([u,d.pathname])),wi(d)}function A3(a,i={}){let u=h.useContext(Qg);at(u!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=lv("useViewTransitionState"),s=Oi(a,{relative:i.relative});if(!u.isTransitioning)return!1;let d=fl(u.currentLocation.pathname,c)||u.currentLocation.pathname,g=fl(u.nextLocation.pathname,c)||u.nextLocation.pathname;return du(s.pathname,g)!=null||du(s.pathname,d)!=null}[...d3];const C3=[{id:"1",title:"Разработка интерфейса",description:"Создать пользовательский интерфейс для главной страницы",category:"Feature",priority:"High",status:"In Progress"},{id:"2",title:"Тестирование API",description:"Провести тестирование всех конечных точек API",category:"Test",priority:"Medium",status:"To Do"},{id:"3",title:"Исправление ошибок",description:"Устранить баги в модуле авторизации",category:"Bug",priority:"High",status:"In Progress"},{id:"4",title:"Исправление ошибок",description:"Устранить баги в модуле авторизации",category:"Bug",priority:"High",status:"In Progress"},{id:"5",title:"Исправление ошибок",description:"Устранить баги в модуле авторизации",category:"Bug",priority:"Low",status:"In Progress"},{id:"6",title:"Исправление ошибок",description:"Устранить баги в модуле авторизации",category:"Bug",priority:"Medium",status:"In Progress"},{id:"7",title:"Исправление ошибок",description:"Устранить баги в модуле авторизации",category:"Bug",priority:"High",status:"In Progress"}],O3={tasks:C3},Wf=h.createContext(void 0),D3=({children:a})=>{const[i,u]=h.useState(()=>{const s=localStorage.getItem("tasks");return s?JSON.parse(s):O3.tasks}),c=(s,d)=>{u(g=>g.map(b=>b.id===s?{...b,...d}:b))};return h.useEffect(()=>{localStorage.setItem("tasks",JSON.stringify(i))},[i]),N.jsx(Wf.Provider,{value:{tasks:i,updateTask:c},children:a})},B3="_main_1ok86_1",R3={main:B3},z3="_filter_rve17_1",H3={filter:z3},nv=["Bug","Feature","Documentation","Refactor","Test"],xf=["All",...nv],rv=["Low","Medium","High"],Sf=["All",...rv],iv=["To Do","In Progress","Done"],Ef=["All",...iv],ov={category:"Категория",status:"Статус",priority:"Приоритет"},j3={category:xf,status:Ef,priority:Sf},L3={category:nv,status:iv,priority:rv};function Ys({type:a,setState:i}){const u=j3[a],[c,s]=h.useState(u[0]),d=g=>{s(g),i(g)};return N.jsxs("section",{children:[N.jsx("label",{htmlFor:a,children:N.jsxs(Ua,{font:"Additional/L",as:"p",children:[ov[a],":"]})}),N.jsx(Yf,{className:H3.filter,id:a,value:c,onChange:g=>d(g.target.value),children:u.map(g=>N.jsx(jg,{value:g,children:g},g))})]})}function U3({setFilterCategory:a,setFilterStatus:i,setFilterPriority:u}){return N.jsxs("section",{className:R3.main,children:[N.jsx(Ys,{type:"category",setState:a}),N.jsx(Ys,{type:"status",setState:i}),N.jsx(Ys,{type:"priority",setState:u})]})}const k3="_card_1ciuv_1",q3="_textBlock_1ciuv_25",Y3="_title_1ciuv_33",V3="_description_1ciuv_51",Jo={card:k3,textBlock:q3,title:Y3,description:V3},Vs=a=>({"To Do":"warning","In Progress":"primary",Done:"success",Low:"neutral",Medium:"warning",High:"danger",Bug:"danger",Feature:"primary",Documentation:"warning",Refactor:"primary",Test:"warning"})[a]??"neutral";function P3(a){return N.jsxs("li",{className:Jo.card,children:[N.jsxs("div",{className:Jo.textBlock,children:[N.jsx(Ua,{font:"Main/M",as:"h2",className:Jo.title,children:a.title}),N.jsx(Ua,{font:"Main/S",as:"h3",className:Jo.description,children:a.description})]}),N.jsxs(kg,{children:[N.jsx(nu,{as:"span",statusViaBackground:!0,kind:Vs(a.category),children:a.category}),N.jsx(nu,{as:"span",statusViaBackground:!0,kind:Vs(a.status),children:a.status}),N.jsx(nu,{as:"span",statusViaBackground:!0,kind:Vs(a.priority),children:a.priority})]}),N.jsx(Kf,{to:`/task/${a.id}`,children:N.jsx(fu,{dimension:"s",appearance:"tertiary",children:"Редактировать"})})]})}const G3="_list_eumqh_1",X3="_noTasks_eumqh_17",Dp={list:G3,noTasks:X3};function Q3({tasks:a}){return a.length==0?N.jsx(Ua,{as:"div",font:"Additional/L",className:Dp.noTasks,children:"Задачи не найдены"}):N.jsx("ul",{className:Dp.list,children:a.map(i=>N.jsx(P3,{...i},i.id))})}const Z3="_wrapper_1le7r_1",F3={wrapper:Z3};function K3(){const a=h.useContext(Wf),[i,u]=h.useState(xf[0]),[c,s]=h.useState(Ef[0]),[d,g]=h.useState(Sf[0]);if(!a)return null;const{tasks:b}=a,v=b.filter(m=>(i===xf[0]||m.category===i)&&(c===Ef[0]||m.status===c)&&(d===Sf[0]||m.priority===d));return N.jsxs("div",{className:F3.wrapper,children:[N.jsx(U3,{setFilterCategory:u,setFilterStatus:s,setFilterPriority:g}),N.jsx(Q3,{tasks:v})]})}const W3="_form_11yzn_1",J3="_textInput_11yzn_17",I3="_textArea_11yzn_25",eE="_btns_11yzn_37",tE="_isVisible_11yzn_47",aE="_isNotVisible_11yzn_55",lE="_errorPage_11yzn_73",on={form:W3,textInput:J3,textArea:I3,btns:eE,isVisible:tE,isNotVisible:aE,errorPage:lE},nE="_selectWrapper_z8emq_1",rE="_filter_z8emq_13",Ps={selectWrapper:nE,filter:rE};function Gs({type:a,value:i,changeTask:u}){const c=L3[a],[s,d]=h.useState(i),g=b=>{u(a,b),d(b)};return N.jsxs("section",{className:Ps.selectWrapper,children:[N.jsx("label",{htmlFor:a,className:Ps.labelForType,children:N.jsxs(Ua,{font:"Main/S",as:"p",children:[ov[a],":"]})}),N.jsx(Yf,{className:Ps.filter,id:a,value:s,onChange:b=>g(b.target.value),children:c.map(b=>N.jsx(jg,{value:b,children:b},b))})]})}function iE(){const{id:a}=z6(),i=Kg(),{tasks:u,updateTask:c}=h.useContext(Wf),s=u.find(x=>x.id===a),[d,g]=h.useState(s),[b,v]=h.useState(!0),m=(x,w)=>{g($=>({...$,[x]:w}))};if(!s||!a)return N.jsx("div",{className:on.errorPage,children:N.jsx(Ua,{as:"p",font:"Body/Body 1 Long",children:"Такой задачи не существует..."})});const y=()=>{d.title?(c(a,d),E()):v(!1)},E=()=>{i("/")};return N.jsxs("form",{className:on.form,children:[N.jsx("div",{children:N.jsxs("label",{children:[N.jsx(Ua,{font:"Main/S",children:"Заголовок:"}),N.jsx(Tg,{className:on.textInput,required:!0,defaultValue:s.title,onChange:x=>m("title",x.target.value),dimension:"s"}),N.jsx(Ua,{font:"Additional/S",color:"Error/Error 60 Main",className:b?on.isNotVisible:on.isVisible,children:"Заголовок обязателен для заполнения"})]})}),N.jsx("div",{children:N.jsxs("label",{children:[N.jsx(Ua,{font:"Main/S",children:"Описание:"}),N.jsx(Ug,{className:on.textArea,defaultValue:s.description,onChange:x=>m("description",x.target.value),dimension:"s"})]})}),N.jsx(Gs,{type:"category",value:s.category,changeTask:m}),N.jsx(Gs,{type:"status",value:s.status,changeTask:m}),N.jsx(Gs,{type:"priority",value:s.priority,changeTask:m}),N.jsxs("div",{className:on.btns,children:[N.jsx(fu,{appearance:"success",dimension:"s",onClick:y,children:"Сохранить"}),N.jsx(fu,{appearance:"tertiary",dimension:"s",onClick:E,children:"Отмена"})]})]})}const Bp="/task_manager_t1/";function oE(){return N.jsx(D3,{children:N.jsx(x3,{children:N.jsxs(K6,{children:[N.jsx(yf,{path:`${Bp}`,element:N.jsx(K3,{})}),N.jsx(yf,{path:`${Bp}task/:id`,element:N.jsx(iE,{})})]})})})}b1.createRoot(document.getElementById("root")).render(N.jsx(h.StrictMode,{children:N.jsx(yb,{theme:bu,children:N.jsxs(Rb,{children:[N.jsx(n6,{}),N.jsx(oE,{})]})})}));
