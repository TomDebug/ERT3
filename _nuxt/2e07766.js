/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{312:function(e,t,r){"use strict";r.r(t);var n=r(263),o=r(259),c=r(262),h=r(260),l=r(264);const d=new Map,f={activated:!1,tokenObservers:[]},k={initialized:!1,enabled:!1};function w(e){return d.get(e)||f}function m(e,t){d.set(e,t)}function v(){return k}const E="https://content-firebaseappcheck.googleapis.com/v1",y=3e4,T=96e4;class _{constructor(e,t,r,n,o){if(this.operation=e,this.retryPolicy=t,this.getWaitDuration=r,this.lowerBound=n,this.upperBound=o,this.pending=null,this.nextErrorWaitInterval=n,n>o)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch((()=>{}))}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new h.a,await(t=this.getNextRun(e),new Promise((e=>{setTimeout(e,t)}))),this.pending.resolve(),await this.pending.promise,this.pending=new h.a,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch((()=>{}))}catch(e){this.retryPolicy(e)?this.process(!1).catch((()=>{})):this.stop()}var t}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const e=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),e}}}const P={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},x=new h.b("appCheck","AppCheck",P);function O(e=!1){var t;return e?null===(t=self.grecaptcha)||void 0===t?void 0:t.enterprise:self.grecaptcha}function C(e){if(!w(e).activated)throw x.create("use-before-activation",{appName:e.name})}function A(e){const t=Math.round(e/1e3),r=Math.floor(t/86400),n=Math.floor((t-3600*r*24)/3600),o=Math.floor((t-3600*r*24-3600*n)/60),c=t-3600*r*24-3600*n-60*o;let h="";return r&&(h+=j(r)+"d:"),n&&(h+=j(n)+"h:"),h+=j(o)+"m:"+j(c)+"s",h}function j(e){return 0===e?"00":e>=10?e.toString():"0"+e}async function R({url:e,body:body},t){const r={"Content-Type":"application/json"},n=t.getImmediate({optional:!0});if(n){const e=await n.getHeartbeatsHeader();e&&(r["X-Firebase-Client"]=e)}const o={method:"POST",body:JSON.stringify(body),headers:r};let c,h;try{c=await fetch(e,o)}catch(e){throw x.create("fetch-network-error",{originalErrorMessage:e.message})}if(200!==c.status)throw x.create("fetch-status-error",{httpStatus:c.status});try{h=await c.json()}catch(e){throw x.create("fetch-parse-error",{originalErrorMessage:e.message})}const l=h.ttl.match(/^([\d.]+)(s)$/);if(!l||!l[2]||isNaN(Number(l[1])))throw x.create("fetch-parse-error",{originalErrorMessage:`ttl field (timeToLive) is not in standard Protobuf Duration format: ${h.ttl}`});const d=1e3*Number(l[1]),f=Date.now();return{token:h.token,expireTimeMillis:f+d,issuedAtTimeMillis:f}}const I="firebase-app-check-store",D="debug-token";let S=null;function N(){return S||(S=new Promise(((e,t)=>{try{const r=indexedDB.open("firebase-app-check-database",1);r.onsuccess=t=>{e(t.target.result)},r.onerror=e=>{var r;t(x.create("storage-open",{originalErrorMessage:null===(r=e.target.error)||void 0===r?void 0:r.message}))},r.onupgradeneeded=e=>{const t=e.target.result;if(0===e.oldVersion)t.createObjectStore(I,{keyPath:"compositeKey"})}}catch(e){t(x.create("storage-open",{originalErrorMessage:e.message}))}})),S)}async function $(e,t){const r=(await N()).transaction(I,"readwrite"),n=r.objectStore(I).put({compositeKey:e,value:t});return new Promise(((e,t)=>{n.onsuccess=t=>{e()},r.onerror=e=>{var r;t(x.create("storage-set",{originalErrorMessage:null===(r=e.target.error)||void 0===r?void 0:r.message}))}}))}async function M(e){const t=(await N()).transaction(I,"readonly"),r=t.objectStore(I).get(e);return new Promise(((e,n)=>{r.onsuccess=t=>{const r=t.target.result;e(r?r.value:void 0)},t.onerror=e=>{var t;n(x.create("storage-get",{originalErrorMessage:null===(t=e.target.error)||void 0===t?void 0:t.message}))}}))}function K(e){return`${e.options.appId}-${e.name}`}const z=new l.b("@firebase/app-check");async function B(e){if(Object(h.D)()){let t;try{t=await function(e){return M(K(e))}(e)}catch(e){z.warn(`Failed to read token from IndexedDB. Error: ${e}`)}return t}}function F(e,t){return Object(h.D)()?function(e,t){return $(K(e),t)}(e,t).catch((e=>{z.warn(`Failed to write token to IndexedDB. Error: ${e}`)})):Promise.resolve()}async function H(){let e;try{e=await M(D)}catch(e){}if(e)return e;{const e="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(e=>{const t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)}));return(t=e,$(D,t)).catch((e=>z.warn(`Failed to persist debug token to IndexedDB. Error: ${e}`))),e}var t}function L(){return v().enabled}async function W(){const e=v();if(e.enabled&&e.token)return e.token.promise;throw Error("\n            Can't get debug token in production mode.\n        ")}const U={error:"UNKNOWN_ERROR"};function V(e){return h.h.encodeString(JSON.stringify(e),!1)}async function X(e,t=!1){const r=e.app;C(r);const n=w(r);let o,c=n.token;if(!c){const e=await n.cachedTokenPromise;e&&Z(e)&&(c=e)}if(!t&&c&&Z(c))return{token:c.token};let h,l=!1;if(L()){n.exchangeTokenPromise||(n.exchangeTokenPromise=R(function(e,t){const{projectId:r,appId:n,apiKey:o}=e.options;return{url:`${E}/projects/${r}/apps/${n}:exchangeDebugToken?key=${o}`,body:{debug_token:t}}}(r,await W()),e.heartbeatServiceProvider).then((e=>(n.exchangeTokenPromise=void 0,e))),l=!0);const t=await n.exchangeTokenPromise;return await F(r,t),m(r,Object.assign(Object.assign({},n),{token:t})),{token:t.token}}try{n.exchangeTokenPromise||(n.exchangeTokenPromise=n.provider.getToken().then((e=>(n.exchangeTokenPromise=void 0,e))),l=!0),c=await n.exchangeTokenPromise}catch(e){"appCheck/throttled"===e.code?z.warn(e.message):z.error(e),o=e}return c?(h={token:c.token},m(r,Object.assign(Object.assign({},n),{token:c})),await F(r,c)):h=function(e){return{token:V(U),error:e}}(o),l&&Q(r,h),h}function G(e,t,r,n){const{app:o}=e,c=w(o),h={next:r,error:n,type:t};if(m(o,Object.assign(Object.assign({},c),{tokenObservers:[...c.tokenObservers,h]})),c.token&&Z(c.token)){const t=c.token;Promise.resolve().then((()=>{r({token:t.token}),Y(e)})).catch((()=>{}))}c.cachedTokenPromise.then((()=>Y(e)))}function J(e,t){const r=w(e),n=r.tokenObservers.filter((e=>e.next!==t));0===n.length&&r.tokenRefresher&&r.tokenRefresher.isRunning()&&r.tokenRefresher.stop(),m(e,Object.assign(Object.assign({},r),{tokenObservers:n}))}function Y(e){const{app:t}=e,r=w(t);let n=r.tokenRefresher;n||(n=function(e){const{app:t}=e;return new _((async()=>{let r;if(r=w(t).token?await X(e,!0):await X(e),r.error)throw r.error}),(()=>!0),(()=>{const e=w(t);if(e.token){let t=e.token.issuedAtTimeMillis+.5*(e.token.expireTimeMillis-e.token.issuedAtTimeMillis)+3e5;const r=e.token.expireTimeMillis-3e5;return t=Math.min(t,r),Math.max(0,t-Date.now())}return 0}),y,T)}(e),m(t,Object.assign(Object.assign({},r),{tokenRefresher:n}))),!n.isRunning()&&r.isTokenAutoRefreshEnabled&&n.start()}function Q(e,t){const r=w(e).tokenObservers;for(const e of r)try{"EXTERNAL"===e.type&&null!=t.error?e.error(t.error):e.next(t)}catch(e){}}function Z(e){return e.expireTimeMillis-Date.now()>0}class ee{constructor(e,t){this.app=e,this.heartbeatServiceProvider=t}_delete(){const{tokenObservers:e}=w(this.app);for(const t of e)J(this.app,t.next);return Promise.resolve()}}const te="https://www.google.com/recaptcha/api.js",re="https://www.google.com/recaptcha/enterprise.js";function ne(e,t){const r=w(e),n=new h.a;m(e,Object.assign(Object.assign({},r),{reCAPTCHAState:{initialized:n}}));const o=ae(e),c=O(!1);return c?ie(e,t,c,o,n):function(e){const script=document.createElement("script");script.src=te,script.onload=e,document.head.appendChild(script)}((()=>{const r=O(!1);if(!r)throw new Error("no recaptcha");ie(e,t,r,o,n)})),n.promise}function oe(e,t){const r=w(e),n=new h.a;m(e,Object.assign(Object.assign({},r),{reCAPTCHAState:{initialized:n}}));const o=ae(e),c=O(!0);return c?ie(e,t,c,o,n):function(e){const script=document.createElement("script");script.src=re,script.onload=e,document.head.appendChild(script)}((()=>{const r=O(!0);if(!r)throw new Error("no recaptcha");ie(e,t,r,o,n)})),n.promise}function ie(e,t,r,n,o){r.ready((()=>{!function(e,t,r,n){const o=r.render(n,{sitekey:t,size:"invisible"}),c=w(e);m(e,Object.assign(Object.assign({},c),{reCAPTCHAState:Object.assign(Object.assign({},c.reCAPTCHAState),{widgetId:o})}))}(e,t,r,n),o.resolve(r)}))}function ae(e){const t=`fire_app_check_${e.name}`,r=document.createElement("div");return r.id=t,r.style.display="none",document.body.appendChild(r),t}async function se(e){C(e);const t=w(e).reCAPTCHAState,r=await t.initialized.promise;return new Promise(((t,n)=>{const o=w(e).reCAPTCHAState;r.ready((()=>{t(r.execute(o.widgetId,{action:"fire_app_check"}))}))}))}class ce{constructor(e){this._siteKey=e,this._throttleData=null}async getToken(){var e;ue(this._throttleData);const t=await se(this._app).catch((e=>{throw x.create("recaptcha-error")}));let r;try{r=await R(function(e,t){const{projectId:r,appId:n,apiKey:o}=e.options;return{url:`${E}/projects/${r}/apps/${n}:exchangeRecaptchaV3Token?key=${o}`,body:{recaptcha_v3_token:t}}}(this._app,t),this._heartbeatServiceProvider)}catch(t){throw"fetch-status-error"===t.code?(this._throttleData=le(Number(null===(e=t.customData)||void 0===e?void 0:e.httpStatus),this._throttleData),x.create("throttled",{time:A(this._throttleData.allowRequestsAfter-Date.now()),httpStatus:this._throttleData.httpStatus})):t}return this._throttleData=null,r}initialize(e){this._app=e,this._heartbeatServiceProvider=Object(c._getProvider)(e,"heartbeat"),ne(e,this._siteKey).catch((()=>{}))}isEqual(e){return e instanceof ce&&this._siteKey===e._siteKey}}class he{constructor(e){this._siteKey=e,this._throttleData=null}async getToken(){var e;ue(this._throttleData);const t=await se(this._app).catch((e=>{throw x.create("recaptcha-error")}));let r;try{r=await R(function(e,t){const{projectId:r,appId:n,apiKey:o}=e.options;return{url:`${E}/projects/${r}/apps/${n}:exchangeRecaptchaEnterpriseToken?key=${o}`,body:{recaptcha_enterprise_token:t}}}(this._app,t),this._heartbeatServiceProvider)}catch(t){throw"fetch-status-error"===t.code?(this._throttleData=le(Number(null===(e=t.customData)||void 0===e?void 0:e.httpStatus),this._throttleData),x.create("throttled",{time:A(this._throttleData.allowRequestsAfter-Date.now()),httpStatus:this._throttleData.httpStatus})):t}return this._throttleData=null,r}initialize(e){this._app=e,this._heartbeatServiceProvider=Object(c._getProvider)(e,"heartbeat"),oe(e,this._siteKey).catch((()=>{}))}isEqual(e){return e instanceof he&&this._siteKey===e._siteKey}}class pe{constructor(e){this._customProviderOptions=e}async getToken(){const e=await this._customProviderOptions.getToken(),t=Object(h.L)(e.token),r=null!==t&&t<Date.now()&&t>0?1e3*t:Date.now();return Object.assign(Object.assign({},e),{issuedAtTimeMillis:r})}initialize(e){this._app=e}isEqual(e){return e instanceof pe&&this._customProviderOptions.getToken.toString()===e._customProviderOptions.getToken.toString()}}function le(e,t){if(404===e||403===e)return{backoffCount:1,allowRequestsAfter:Date.now()+864e5,httpStatus:e};{const r=t?t.backoffCount:0,n=Object(h.l)(r,1e3,2);return{backoffCount:r+1,allowRequestsAfter:Date.now()+n,httpStatus:e}}}function ue(e){if(e&&Date.now()-e.allowRequestsAfter<=0)throw x.create("throttled",{time:A(e.allowRequestsAfter-Date.now()),httpStatus:e.httpStatus})}function de(e=Object(c.getApp)(),t){e=Object(h.v)(e);const r=Object(c._getProvider)(e,"app-check");if(v().initialized||function(){const e=Object(h.u)(),t=v();if(t.initialized=!0,"string"!=typeof e.FIREBASE_APPCHECK_DEBUG_TOKEN&&!0!==e.FIREBASE_APPCHECK_DEBUG_TOKEN)return;t.enabled=!0;const r=new h.a;t.token=r,"string"==typeof e.FIREBASE_APPCHECK_DEBUG_TOKEN?r.resolve(e.FIREBASE_APPCHECK_DEBUG_TOKEN):r.resolve(H())}(),L()&&W().then((e=>console.log(`App Check debug token: ${e}. You will need to add it to your app's App Check settings in the Firebase console for it to work.`))),r.isInitialized()){const n=r.getImmediate(),o=r.getOptions();if(o.isTokenAutoRefreshEnabled===t.isTokenAutoRefreshEnabled&&o.provider.isEqual(t.provider))return n;throw x.create("already-initialized",{appName:e.name})}const n=r.initialize({options:t});return function(e,t,r){const n=w(e),o=Object.assign(Object.assign({},n),{activated:!0});o.provider=t,o.cachedTokenPromise=B(e).then((t=>(t&&Z(t)&&(m(e,Object.assign(Object.assign({},w(e)),{token:t})),Q(e,{token:t.token})),t))),o.isTokenAutoRefreshEnabled=void 0===r?e.automaticDataCollectionEnabled:r,m(e,o),o.provider.initialize(e)}(e,t.provider,t.isTokenAutoRefreshEnabled),w(e).isTokenAutoRefreshEnabled&&G(n,"INTERNAL",(()=>{})),n}const ge="app-check-internal";Object(c._registerComponent)(new o.a("app-check",(e=>function(e,t){return new ee(e,t)}(e.getProvider("app").getImmediate(),e.getProvider("heartbeat"))),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,r)=>{e.getProvider(ge).initialize()}))),Object(c._registerComponent)(new o.a(ge,(e=>function(e){return{getToken:t=>X(e,t),addTokenListener:t=>G(e,"INTERNAL",t),removeTokenListener:t=>J(e.app,t)}}(e.getProvider("app-check").getImmediate())),"PUBLIC").setInstantiationMode("EXPLICIT")),Object(c.registerVersion)("@firebase/app-check","0.5.8");const fe={"use-before-activation":"App Check is being used before activate() is called for FirebaseApp {$appName}. Call activate() before instantiating other Firebase services."},ke=new h.b("appCheck","AppCheck",fe);class be{constructor(e){this.app=e}activate(e,t){let r;r="string"==typeof e?new ce(e):e instanceof he||e instanceof ce||e instanceof pe?e:new pe({getToken:e.getToken}),this._delegate=de(this.app,{provider:r,isTokenAutoRefreshEnabled:t})}setTokenAutoRefreshEnabled(e){if(!this._delegate)throw ke.create("use-before-activation",{appName:this.app.name});!function(e,t){const r=e.app,n=w(r);n.tokenRefresher&&(!0===t?n.tokenRefresher.start():n.tokenRefresher.stop()),m(r,Object.assign(Object.assign({},n),{isTokenAutoRefreshEnabled:t}))}(this._delegate,e)}getToken(e){if(!this._delegate)throw ke.create("use-before-activation",{appName:this.app.name});return async function(e,t){const r=await X(e,t);if(r.error)throw r.error;return{token:r.token}}(this._delegate,e)}onTokenChanged(e,t,r){if(!this._delegate)throw ke.create("use-before-activation",{appName:this.app.name});return function(e,t,r,n){let o=()=>{},c=()=>{};return o=null!=t.next?t.next.bind(t):t,null!=t.error?c=t.error.bind(t):r&&(c=r),G(e,"EXTERNAL",o,c),()=>J(e.app,o)}(this._delegate,e,t)}}const we=e=>{const t=e.getProvider("app-compat").getImmediate();return new be(t)};n.a.INTERNAL.registerComponent(new o.a("appCheck-compat",we,"PUBLIC").setServiceProps({ReCaptchaEnterpriseProvider:he,ReCaptchaV3Provider:ce,CustomProvider:pe})),n.a.registerVersion("@firebase/app-check-compat","0.2.8")}}]);