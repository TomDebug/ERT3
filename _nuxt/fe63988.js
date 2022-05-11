/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{274:function(t,e,n){"use strict";var r=n(262),o=n(259),c=n(260),f=n(279);const d="@firebase/installations",l="0.5.9",w=1e4,m="w:0.5.9",h="FIS_v2",y=36e5,v={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},S=new c.b("installations","Installations",v);function C(t){return t instanceof c.c&&t.code.includes("request-failed")}function j({projectId:t}){return`https://firebaseinstallations.googleapis.com/v1/projects/${t}/installations`}function I(t){return{token:t.token,requestStatus:2,expiresIn:(e=t.expiresIn,Number(e.replace("s","000"))),creationTime:Date.now()};var e}async function k(t,e){const n=(await e.json()).error;return S.create("request-failed",{requestName:t,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function T({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function P(t,{refreshToken:e}){const n=T(t);return n.append("Authorization",function(t){return`FIS_v2 ${t}`}(e)),n}async function O(t){const e=await t();return e.status>=500&&e.status<600?t():e}function $(t){return new Promise((e=>{setTimeout(e,t)}))}const D=/^[cdef][\w-]{21}$/;function E(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const e=function(t){return(e=t,btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var e}(t);return D.test(e)?e:""}catch(t){return""}}function N(t){return`${t.appName}!${t.appId}`}const A=new Map;function _(t,e){const n=N(t);V(n,e),function(t,e){const n=F();n&&n.postMessage({key:t,fid:e});H()}(n,e)}function V(t,e){const n=A.get(t);if(n)for(const t of n)t(e)}let x=null;function F(){return!x&&"BroadcastChannel"in self&&(x=new BroadcastChannel("[Firebase] FID Change"),x.onmessage=t=>{V(t.data.key,t.data.fid)}),x}function H(){0===A.size&&x&&(x.close(),x=null)}const M="firebase-installations-store";let J=null;function K(){return J||(J=Object(f.b)("firebase-installations-database",1,{upgrade:(t,e)=>{if(0===e)t.createObjectStore(M)}})),J}async function B(t,e){const n=N(t),r=(await K()).transaction(M,"readwrite"),o=r.objectStore(M),c=await o.get(n);return await o.put(e,n),await r.done,c&&c.fid===e.fid||_(t,e.fid),e}async function L(t){const e=N(t),n=(await K()).transaction(M,"readwrite");await n.objectStore(M).delete(e),await n.done}async function z(t,e){const n=N(t),r=(await K()).transaction(M,"readwrite"),o=r.objectStore(M),c=await o.get(n),f=e(c);return void 0===f?await o.delete(n):await o.put(f,n),await r.done,!f||c&&c.fid===f.fid||_(t,f.fid),f}async function R(t){let e;const n=await z(t.appConfig,(n=>{const r=function(t){return Q(t||{fid:E(),registrationStatus:0})}(n),o=function(t,e){if(0===e.registrationStatus){if(!navigator.onLine){return{installationEntry:e,registrationPromise:Promise.reject(S.create("app-offline"))}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=async function(t,e){try{const n=await async function({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=j(t),o=T(t),c=e.getImmediate({optional:!0});if(c){const t=await c.getHeartbeatsHeader();t&&o.append("x-firebase-client",t)}const body={fid:n,authVersion:h,appId:t.appId,sdkVersion:m},f={method:"POST",headers:o,body:JSON.stringify(body)},d=await O((()=>fetch(r,f)));if(d.ok){const t=await d.json();return{fid:t.fid||n,registrationStatus:2,refreshToken:t.refreshToken,authToken:I(t.authToken)}}throw await k("Create Installation",d)}(t,e);return B(t.appConfig,n)}catch(n){throw C(n)&&409===n.customData.serverCode?await L(t.appConfig):await B(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}(t,n);return{installationEntry:n,registrationPromise:r}}return 1===e.registrationStatus?{installationEntry:e,registrationPromise:U(t)}:{installationEntry:e}}(t,r);return e=o.registrationPromise,o.installationEntry}));return""===n.fid?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}async function U(t){let e=await G(t.appConfig);for(;1===e.registrationStatus;)await $(100),e=await G(t.appConfig);if(0===e.registrationStatus){const{installationEntry:e,registrationPromise:n}=await R(t);return n||e}return e}function G(t){return z(t,(t=>{if(!t)throw S.create("installation-not-found");return Q(t)}))}function Q(t){return 1===(e=t).registrationStatus&&e.registrationTime+w<Date.now()?{fid:t.fid,registrationStatus:0}:t;var e}async function W({appConfig:t,heartbeatServiceProvider:e},n){const r=function(t,{fid:e}){return`${j(t)}/${e}/authTokens:generate`}(t,n),o=P(t,n),c=e.getImmediate({optional:!0});if(c){const t=await c.getHeartbeatsHeader();t&&o.append("x-firebase-client",t)}const body={installation:{sdkVersion:m,appId:t.appId}},f={method:"POST",headers:o,body:JSON.stringify(body)},d=await O((()=>fetch(r,f)));if(d.ok){return I(await d.json())}throw await k("Generate Auth Token",d)}async function X(t,e=!1){let n;const r=await z(t.appConfig,(r=>{if(!Z(r))throw S.create("not-registered");const o=r.authToken;if(!e&&function(t){return 2===t.requestStatus&&!function(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+y}(t)}(o))return r;if(1===o.requestStatus)return n=async function(t,e){let n=await Y(t.appConfig);for(;1===n.authToken.requestStatus;)await $(100),n=await Y(t.appConfig);const r=n.authToken;return 0===r.requestStatus?X(t,e):r}(t,e),r;{if(!navigator.onLine)throw S.create("app-offline");const e=function(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}(r);return n=async function(t,e){try{const n=await W(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await B(t.appConfig,r),n}catch(n){if(!C(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await B(t.appConfig,n)}else await L(t.appConfig);throw n}}(t,e),e}}));return n?await n:r.authToken}function Y(t){return z(t,(t=>{if(!Z(t))throw S.create("not-registered");const e=t.authToken;return 1===(n=e).requestStatus&&n.requestTime+w<Date.now()?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t;var n}))}function Z(t){return void 0!==t&&2===t.registrationStatus}async function tt(t,e=!1){const n=t;await async function(t){const{registrationPromise:e}=await R(t);e&&await e}(n);return(await X(n,e)).token}function et(t){return S.create("missing-app-config-values",{valueName:t})}const nt="installations",at=t=>{const e=t.getProvider("app").getImmediate(),n=function(t){if(!t||!t.options)throw et("App Configuration");if(!t.name)throw et("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw et(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}(e);return{app:e,appConfig:n,heartbeatServiceProvider:Object(r._getProvider)(e,"heartbeat"),_delete:()=>Promise.resolve()}},it=t=>{const e=t.getProvider("app").getImmediate(),n=Object(r._getProvider)(e,nt).getImmediate();return{getId:()=>async function(t){const e=t,{installationEntry:n,registrationPromise:r}=await R(e);return r?r.catch(console.error):X(e).catch(console.error),n.fid}(n),getToken:t=>tt(n,t)}};Object(r._registerComponent)(new o.a(nt,at,"PUBLIC")),Object(r._registerComponent)(new o.a("installations-internal",it,"PRIVATE")),Object(r.registerVersion)(d,l),Object(r.registerVersion)(d,l,"esm2017")}}]);