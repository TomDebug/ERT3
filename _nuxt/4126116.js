(window.webpackJsonp=window.webpackJsonp||[]).push([[9,5,6,18,22,23],{257:function(t,e,r){"use strict";r.r(e);var n={props:{title:{type:String,required:!0}}},o=r(48),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("h3",{staticClass:"text-3xl mb-5"},[t._v("\n  "+t._s(t.title)+"\n")])}),[],!1,null,null,null);e.default=component.exports},258:function(t,e,r){"use strict";r.r(e);var n={props:{disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}}},o=r(48),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("button",{staticClass:"text-white font-bold py-2 px-4 rounded",class:{"bg-blue-500":!t.disabled&&!t.loading,"hover:bg-blue-700":!t.disabled&&!t.loading,"bg-gray-600":t.disabled||t.loading,"cursor-not-allowed":t.disabled,"cursor-wait":t.loading},attrs:{disabled:t.disabled},on:{click:function(e){return t.$emit("click")}}},[t.loading?r("div",[t._v("Loading...")]):t._t("default")],2)}),[],!1,null,"254cc730",null);e.default=component.exports},261:function(t,e,r){"use strict";r.r(e);var n=r(265),o=r.n(n),l=(r(266),{props:{lang:{type:String,default:"js"}},mounted:function(){o.a.highlightAll()}}),c=r(48),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"prism"},[r("pre",{staticClass:"line-numbers",class:"language-"+t.lang},[r("code",[t._t("default")],2)])])])}),[],!1,null,"2345390c",null);e.default=component.exports},277:function(t,e,r){"use strict";r.r(e);var n={props:{title:{type:String,required:!0}}},o=r(48),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("h3",{staticClass:"text-2xl mb-5"},[t._v("\n  "+t._s(t.title)+"\n")])}),[],!1,null,null,null);e.default=component.exports},278:function(t,e,r){"use strict";r.r(e);var n={},o=r(48),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"},[t._t("default")],2)}),[],!1,null,"9b8a0b94",null);e.default=component.exports},284:function(t,e,r){"use strict";r.r(e);r(50),r(29),r(49),r(9),r(77),r(39),r(78);var n=r(3),o=r(38),l=(r(13),r(2)),c=r(75);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m=l.a.extend({computed:f(f({},Object(c.c)({authUser:function(t){return t.authUser}})),Object(c.b)({isLoggedIn:"isLoggedIn"})),data:function(){return{formData:{email:"",password:""}}},methods:{createUser:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$fire.auth.createUserWithEmailAndPassword(t.formData.email,t.formData.password);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),alert(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))()},signInUser:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$fire.auth.signInWithEmailAndPassword(t.formData.email,t.formData.password);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),alert(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))()},logout:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$fire.auth.signOut();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),alert(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))()}}}),v=r(48),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("ServiceTitle",{attrs:{title:"Firebase Authentication"}}),t._v(" "),r("SubTitle",{attrs:{title:"SignUp / LogIn"}}),t._v(" "),t.isLoggedIn?r("div",[r("p",[t._v("You are logged in with "+t._s(t.authUser.email)+".")]),t._v(" "),r("Btn",{attrs:{color:"primary",outlined:""},on:{click:t.logout}},[t._v("Logout")])],1):r("form",{attrs:{onsubmit:"return false;"}},[r("div",{staticClass:"mb-4"},[r("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2",attrs:{for:"email"}},[t._v("\n          Email\n        ")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.email,expression:"formData.email"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",attrs:{placeholder:"Email",type:"email",autocomplete:"username"},domProps:{value:t.formData.email},on:{input:function(e){e.target.composing||t.$set(t.formData,"email",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"mb-4"},[r("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2",attrs:{for:"email"}},[t._v("\n          Password\n        ")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.password,expression:"formData.password"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",attrs:{placeholder:"Password",type:"password",autocomplete:"current-password"},domProps:{value:t.formData.password},on:{input:function(e){e.target.composing||t.$set(t.formData,"password",e.target.value)}}})]),t._v(" "),r("Btn",{on:{click:t.createUser}},[t._v("Register")]),t._v(" "),r("Btn",{on:{click:t.signInUser}},[t._v("Sign In")])],1),t._v(" "),r("client-only",[r("Codeblock",[r("pre",[t._v("async createUser() {\n  try { \n    await this.$fire.auth.createUserWithEmailAndPassword('foo@foo.foo', 'test')\n  } catch (e) { \n    alert(e) \n  }\n}\n        ")])])],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ServiceTitle:r(257).default,SubTitle:r(277).default,Btn:r(258).default,Form:r(278).default,Codeblock:r(261).default})}}]);