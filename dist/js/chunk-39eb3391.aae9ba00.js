(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-39eb3391"],{"0130":function(t,e,i){"use strict";var n=i("4c12"),a=i.n(n);a.a},"16b7":function(t,e,i){"use strict";i("a9e3");var n=i("2b0e");e["a"]=n["a"].extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:function(){return{openTimeout:void 0,closeTimeout:void 0}},methods:{clearDelay:function(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay:function(t,e){var i=this;this.clearDelay();var n=parseInt(this["".concat(t,"Delay")],10);this["".concat(t,"Timeout")]=setTimeout(e||function(){i.isActive={open:!0,close:!1}[t]},n)}}})},"21be":function(t,e,i){"use strict";i("99af"),i("caad"),i("2532");var n=i("2909"),a=i("2b0e"),o=i("80d2");e["a"]=a["a"].extend().extend({name:"stackable",data:function(){return{stackElement:null,stackExclude:null,stackMinZIndex:0,isActive:!1}},computed:{activeZIndex:function(){if("undefined"===typeof window)return 0;var t=this.stackElement||this.$refs.content,e=this.isActive?this.getMaxZIndex(this.stackExclude||[t])+2:Object(o["p"])(t);return null==e?e:parseInt(e)}},methods:{getMaxZIndex:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=this.$el,i=[this.stackMinZIndex,Object(o["p"])(e)],a=[].concat(Object(n["a"])(document.getElementsByClassName("v-menu__content--active")),Object(n["a"])(document.getElementsByClassName("v-dialog__content--active"))),s=0;s<a.length;s++)t.includes(a[s])||i.push(Object(o["p"])(a[s]));return Math.max.apply(Math,i)}}})},2909:function(t,e,i){"use strict";function n(t){if(Array.isArray(t)){for(var e=0,i=new Array(t.length);e<t.length;e++)i[e]=t[e];return i}}i.d(e,"a",(function(){return s}));i("a4d3"),i("e01a"),i("d28b"),i("a630"),i("e260"),i("d3b7"),i("25f0"),i("3ca3"),i("ddb0");function a(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function s(t){return n(t)||a(t)||o()}},"3a2f":function(t,e,i){"use strict";i("a9e3");var n=i("ade3"),a=(i("9734"),i("4ad4")),o=i("a9ad"),s=i("16b7"),r=i("b848"),c=i("75eb"),u=i("f573"),h=i("f2e7"),l=i("80d2"),d=i("d9bd"),f=i("58df");e["a"]=Object(f["a"])(o["a"],s["a"],r["a"],c["a"],u["a"],h["a"]).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,fixed:{type:Boolean,default:!0},openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String,zIndex:{default:null}},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,i=t.content,n=!this.bottom&&!this.left&&!this.top&&!this.right,a=!1!==this.attach?e.offsetLeft:e.left,o=0;return this.top||this.bottom||n?o=a+e.width/2-i.width/2:(this.left||this.right)&&(o=a+(this.right?e.width:-i.width)+(this.right?10:-10)),this.nudgeLeft&&(o-=parseInt(this.nudgeLeft)),this.nudgeRight&&(o+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(o,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,e=t.activator,i=t.content,n=!1!==this.attach?e.offsetTop:e.top,a=0;return this.top||this.bottom?a=n+(this.bottom?e.height:-i.height)+(this.bottom?10:-10):(this.left||this.right)&&(a=n+e.height/2-i.height/2),this.nudgeTop&&(a-=parseInt(this.nudgeTop)),this.nudgeBottom&&(a+=parseInt(this.nudgeBottom)),"".concat(this.calcYOverflow(a+this.pageYOffset),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(l["f"])(this.maxWidth),minWidth:Object(l["f"])(this.minWidth),opacity:this.isActive?.9:0,top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===Object(l["o"])(this,"activator",!0)&&Object(d["b"])("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,e=a["a"].options.methods.genActivatorListeners.call(this);return e.focus=function(e){t.getActivator(e),t.runDelay("open")},e.blur=function(e){t.getActivator(e),t.runDelay("close")},e.keydown=function(e){e.keyCode===l["r"].esc&&(t.getActivator(e),t.runDelay("close"))},e},genTransition:function(){var t=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[t]):t},genContent:function(){var t;return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(t={},Object(n["a"])(t,this.contentClass,!0),Object(n["a"])(t,"menuable__content__active",this.isActive),Object(n["a"])(t,"v-tooltip__content--fixed",this.activatorFixed),t),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render:function(t){var e=this;return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((function(){return[e.genTransition()]})),this.genActivator()])}})},"4ad4":function(t,e,i){"use strict";i("caad"),i("45fc"),i("b0c0"),i("b64b");var n=i("53ca"),a=i("16b7"),o=i("f2e7"),s=i("58df"),r=i("80d2"),c=i("d9bd"),u=Object(s["a"])(a["a"],o["a"]);e["a"]=u.extend({name:"activatable",props:{activator:{default:null,validator:function(t){return["string","object"].includes(Object(n["a"])(t))}},disabled:Boolean,internalActivator:Boolean,openOnHover:Boolean},data:function(){return{activatorElement:null,activatorNode:[],events:["click","mouseenter","mouseleave"],listeners:{}}},watch:{activator:"resetActivator",openOnHover:"resetActivator"},mounted:function(){var t=Object(r["o"])(this,"activator",!0);t&&["v-slot","normal"].includes(t)&&Object(c["b"])('The activator slot must be bound, try \'<template v-slot:activator="{ on }"><v-btn v-on="on">\'',this),this.addActivatorEvents()},beforeDestroy:function(){this.removeActivatorEvents()},methods:{addActivatorEvents:function(){if(this.activator&&!this.disabled&&this.getActivator()){this.listeners=this.genActivatorListeners();for(var t=Object.keys(this.listeners),e=0,i=t;e<i.length;e++){var n=i[e];this.getActivator().addEventListener(n,this.listeners[n])}}},genActivator:function(){var t=Object(r["n"])(this,"activator",Object.assign(this.getValueProxy(),{on:this.genActivatorListeners(),attrs:this.genActivatorAttributes()}))||[];return this.activatorNode=t,t},genActivatorAttributes:function(){return{role:"button","aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genActivatorListeners:function(){var t=this;if(this.disabled)return{};var e={};return this.openOnHover?(e.mouseenter=function(e){t.getActivator(e),t.runDelay("open")},e.mouseleave=function(e){t.getActivator(e),t.runDelay("close")}):e.click=function(e){var i=t.getActivator(e);i&&i.focus(),e.stopPropagation(),t.isActive=!t.isActive},e},getActivator:function(t){if(this.activatorElement)return this.activatorElement;var e=null;if(this.activator){var i=this.internalActivator?this.$el:document;e="string"===typeof this.activator?i.querySelector(this.activator):this.activator.$el?this.activator.$el:this.activator}else if(1===this.activatorNode.length||this.activatorNode.length&&!t){var n=this.activatorNode[0].componentInstance;e=n&&n.$options.mixins&&n.$options.mixins.some((function(t){return t.options&&["activatable","menuable"].includes(t.options.name)}))?n.getActivator():this.activatorNode[0].elm}else t&&(e=t.currentTarget||t.target);return this.activatorElement=e,this.activatorElement},getContentSlot:function(){return Object(r["n"])(this,"default",this.getValueProxy(),!0)},getValueProxy:function(){var t=this;return{get value(){return t.isActive},set value(e){t.isActive=e}}},removeActivatorEvents:function(){if(this.activator&&this.activatorElement){for(var t=Object.keys(this.listeners),e=0,i=t;e<i.length;e++){var n=i[e];this.activatorElement.removeEventListener(n,this.listeners[n])}this.listeners={}}},resetActivator:function(){this.removeActivatorEvents(),this.activatorElement=null,this.getActivator(),this.addActivatorEvents()}}})},"4bd4":function(t,e,i){"use strict";i("4de4"),i("7db0"),i("4160"),i("caad"),i("07ac"),i("2532"),i("159b");var n=i("5530"),a=i("58df"),o=i("7e2b"),s=i("3206");e["a"]=Object(a["a"])(o["a"],Object(s["b"])("form")).extend({name:"v-form",inheritAttrs:!1,props:{lazyValidation:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,i=function(t){return t.$watch("hasError",(function(i){e.$set(e.errorBag,t._uid,i)}),{immediate:!0})},n={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=t.$watch("shouldValidate",(function(a){a&&(e.errorBag.hasOwnProperty(t._uid)||(n.valid=i(t)))})):n.valid=i(t),n},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var i=this.watchers.find((function(t){return t._uid===e._uid}));i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(n["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},"4c12":function(t,e,i){},"5cab":function(t,e,i){"use strict";i("96cf");var n=i("1da1"),a=i("d4ec"),o=i("bee2"),s=i("6a0b"),r=function(){function t(){Object(a["a"])(this,t)}return Object(o["a"])(t,null,[{key:"registrar",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s["a"].post("auth/register",e);case 3:return i=t.sent,t.abrupt("return",i);case 7:throw t.prev=7,t.t0=t["catch"](0),t.t0.response.data;case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));function e(e){return t.apply(this,arguments)}return e}()},{key:"logar",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s["a"].post("/auth/authenticate",e);case 3:return i=t.sent,t.abrupt("return",i);case 7:throw t.prev=7,t.t0=t["catch"](0),t.t0.response.data;case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));function e(e){return t.apply(this,arguments)}return e}()},{key:"forgotPassword",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s["a"].post("/auth/forgot_password",e);case 3:return i=t.sent,t.abrupt("return",i);case 7:throw t.prev=7,t.t0=t["catch"](0),t.t0.response.data;case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));function e(e){return t.apply(this,arguments)}return e}()}]),t}();e["a"]=r},"75eb":function(t,e,i){"use strict";i("4160"),i("159b");var n=i("ade3"),a=i("53ca"),o=i("9d65"),s=i("80d2"),r=i("58df"),c=i("d9bd");function u(t){var e=Object(a["a"])(t);return"boolean"===e||"string"===e||t.nodeType===Node.ELEMENT_NODE}e["a"]=Object(r["a"])(o["a"]).extend({name:"detachable",props:{attach:{default:!1,validator:u},contentClass:{type:String,default:""}},data:function(){return{activatorNode:null,hasDetached:!1}},watch:{attach:function(){this.hasDetached=!1,this.initDetach()},hasContent:function(){this.$nextTick(this.initDetach)}},beforeMount:function(){var t=this;this.$nextTick((function(){if(t.activatorNode){var e=Array.isArray(t.activatorNode)?t.activatorNode:[t.activatorNode];e.forEach((function(e){if(e.elm&&t.$el.parentNode){var i=t.$el===t.$el.parentNode.firstChild?t.$el:t.$el.nextSibling;t.$el.parentNode.insertBefore(e.elm,i)}}))}}))},mounted:function(){this.hasContent&&this.initDetach()},deactivated:function(){this.isActive=!1},beforeDestroy:function(){try{if(this.$refs.content&&this.$refs.content.parentNode&&this.$refs.content.parentNode.removeChild(this.$refs.content),this.activatorNode){var t=Array.isArray(this.activatorNode)?this.activatorNode:[this.activatorNode];t.forEach((function(t){t.elm&&t.elm.parentNode&&t.elm.parentNode.removeChild(t.elm)}))}}catch(e){console.log(e)}},methods:{getScopeIdAttrs:function(){var t=Object(s["l"])(this.$vnode,"context.$options._scopeId");return t&&Object(n["a"])({},t,"")},initDetach:function(){var t;this._isDestroyed||!this.$refs.content||this.hasDetached||""===this.attach||!0===this.attach||"attach"===this.attach||(t=!1===this.attach?document.querySelector("[data-app]"):"string"===typeof this.attach?document.querySelector(this.attach):this.attach,t?(t.appendChild(this.$refs.content),this.hasDetached=!0):Object(c["c"])("Unable to locate target ".concat(this.attach||"[data-app]"),this))}}})},9734:function(t,e,i){},"9d65":function(t,e,i){"use strict";var n=i("d9bd"),a=i("2b0e");e["a"]=a["a"].extend().extend({name:"bootable",props:{eager:Boolean},data:function(){return{isBooted:!1}},computed:{hasContent:function(){return this.isBooted||this.eager||this.isActive}},watch:{isActive:function(){this.isBooted=!0}},created:function(){"lazy"in this.$attrs&&Object(n["d"])("lazy",this)},methods:{showLazyContent:function(t){return this.hasContent&&t?t():[this.$createElement()]}}})},a722:function(t,e,i){"use strict";i("20f6");var n=i("e8f2");e["a"]=Object(n["a"])("layout")},a75b:function(t,e,i){"use strict";i("daaf");var n=i("d10f");e["a"]=n["a"].extend({name:"v-content",props:{tag:{type:String,default:"main"}},computed:{styles:function(){var t=this.$vuetify.application,e=t.bar,i=t.top,n=t.right,a=t.footer,o=t.insetFooter,s=t.bottom,r=t.left;return{paddingTop:"".concat(i+e,"px"),paddingRight:"".concat(n,"px"),paddingBottom:"".concat(a+o+s,"px"),paddingLeft:"".concat(r,"px")}}},render:function(t){var e={staticClass:"v-content",style:this.styles,ref:"content"};return t(this.tag,e,[t("div",{staticClass:"v-content__wrap"},this.$slots.default)])}})},b848:function(t,e,i){"use strict";var n=i("2909"),a=i("58df");function o(t){for(var e=[],i=0;i<t.length;i++){var a=t[i];a.isActive&&a.isDependent?e.push(a):e.push.apply(e,Object(n["a"])(o(a.$children)))}return e}e["a"]=Object(a["a"])().extend({name:"dependent",data:function(){return{closeDependents:!0,isActive:!1,isDependent:!0}},watch:{isActive:function(t){if(!t)for(var e=this.getOpenDependents(),i=0;i<e.length;i++)e[i].isActive=!1}},methods:{getOpenDependents:function(){return this.closeDependents?o(this.$children):[]},getOpenDependentElements:function(){for(var t=[],e=this.getOpenDependents(),i=0;i<e.length;i++)t.push.apply(t,Object(n["a"])(e[i].getClickableDependentElements()));return t},getClickableDependentElements:function(){var t=[this.$el];return this.$refs.content&&t.push(this.$refs.content),this.overlay&&t.push(this.overlay.$el),t.push.apply(t,Object(n["a"])(this.getOpenDependentElements())),t}}})},daaf:function(t,e,i){},dafb:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",[i("Nav"),i("ForgotPassword")],1)},a=[],o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-content",[i("v-snackbar",{attrs:{timeout:4e3,top:"",color:t.color},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[i("span",[t._v(t._s(t.texto))]),i("v-btn",{attrs:{text:"",color:"white"},on:{click:function(e){t.snackbar=!1}}},[t._v("Close")])],1),i("v-container",{attrs:{fluid:"","fill-height":""}},[i("v-layout",{attrs:{"align-center":"","justify-center":""}},[i("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[i("v-card",{staticClass:"elevation-12"},[i("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[i("v-toolbar-title",[t._v("Esqueci senha")]),i("v-spacer"),i("v-tooltip",{attrs:{bottom:""}})],1),i("v-card-text",[i("v-form",[i("v-text-field",{attrs:{label:"Coloque o seu email",name:"email","prepend-icon":"mdi-email",type:"text"},model:{value:t.fields.email,callback:function(e){t.$set(t.fields,"email",e)},expression:"fields.email"}})],1)],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.sendPassword()}}},[t._v("Enviar")])],1)],1)],1)],1)],1)],1)},s=[],r=i("5cab"),c={name:"ForgotPassword",data:function(){return{fields:{},color:"",snackbar:!1,texto:""}},methods:{sendPassword:function(){var t=this;r["a"].forgotPassword(this.fields).then((function(e){t.snackbar=!0,t.color="green",t.texto="E-mail enviado com sucesso!",t.fields={}})).catch((function(e){return t.snackbar=!0,t.color="red",t.fields={},t.texto=e}))}}},u=c,h=i("2877"),l=i("6544"),d=i.n(l),f=i("8336"),v=i("b0af"),p=i("99d9"),m=i("a523"),g=i("a75b"),b=i("0e8f"),w=i("4bd4"),y=i("a722"),x=i("2db4"),O=i("2fa4"),A=i("8654"),k=i("71d9"),T=i("2a7f"),j=i("3a2f"),C=Object(h["a"])(u,o,s,!1,null,null,null),$=C.exports;d()(C,{VBtn:f["a"],VCard:v["a"],VCardActions:p["a"],VCardText:p["c"],VContainer:m["a"],VContent:g["a"],VFlex:b["a"],VForm:w["a"],VLayout:y["a"],VSnackbar:x["a"],VSpacer:O["a"],VTextField:A["a"],VToolbar:k["a"],VToolbarTitle:T["a"],VTooltip:j["a"]});var E=i("f86a"),N={components:{ForgotPassword:$,Nav:E["a"]}},_=N,D=i("7496"),B=Object(h["a"])(_,n,a,!1,null,null,null);e["default"]=B.exports;d()(B,{VApp:D["a"]})},f573:function(t,e,i){"use strict";i("a9e3"),i("d3b7");var n=i("5530"),a=i("fe6c"),o=i("21be"),s=i("4ad4"),r=i("58df"),c=i("80d2"),u=Object(r["a"])(o["a"],a["a"],s["a"]);e["a"]=u.extend().extend({name:"menuable",props:{allowOverflow:Boolean,light:Boolean,dark:Boolean,maxWidth:{type:[Number,String],default:"auto"},minWidth:[Number,String],nudgeBottom:{type:[Number,String],default:0},nudgeLeft:{type:[Number,String],default:0},nudgeRight:{type:[Number,String],default:0},nudgeTop:{type:[Number,String],default:0},nudgeWidth:{type:[Number,String],default:0},offsetOverflow:Boolean,openOnClick:Boolean,positionX:{type:Number,default:null},positionY:{type:Number,default:null},zIndex:{type:[Number,String],default:null}},data:function(){return{absoluteX:0,absoluteY:0,activatedBy:null,activatorFixed:!1,dimensions:{activator:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0,offsetLeft:0},content:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0}},hasJustFocused:!1,hasWindow:!1,inputActivator:!1,isContentActive:!1,pageWidth:0,pageYOffset:0,stackClass:"v-menu__content--active",stackMinZIndex:6}},computed:{computedLeft:function(){var t=this.dimensions.activator,e=this.dimensions.content,i=(!1!==this.attach?t.offsetLeft:t.left)||0,n=Math.max(t.width,e.width),a=0;if(a+=this.left?i-(n-t.width):i,this.offsetX){var o=isNaN(Number(this.maxWidth))?t.width:Math.min(t.width,Number(this.maxWidth));a+=this.left?-o:t.width}return this.nudgeLeft&&(a-=parseInt(this.nudgeLeft)),this.nudgeRight&&(a+=parseInt(this.nudgeRight)),a},computedTop:function(){var t=this.dimensions.activator,e=this.dimensions.content,i=0;return this.top&&(i+=t.height-e.height),!1!==this.attach?i+=t.offsetTop:i+=t.top+this.pageYOffset,this.offsetY&&(i+=this.top?-t.height:t.height),this.nudgeTop&&(i-=parseInt(this.nudgeTop)),this.nudgeBottom&&(i+=parseInt(this.nudgeBottom)),i},hasActivator:function(){return!!this.$slots.activator||!!this.$scopedSlots.activator||!!this.activator||!!this.inputActivator}},watch:{disabled:function(t){t&&this.callDeactivate()},isActive:function(t){this.disabled||(t?this.callActivate():this.callDeactivate())},positionX:"updateDimensions",positionY:"updateDimensions"},beforeMount:function(){this.hasWindow="undefined"!==typeof window},methods:{absolutePosition:function(){return{offsetTop:0,offsetLeft:0,scrollHeight:0,top:this.positionY||this.absoluteY,bottom:this.positionY||this.absoluteY,left:this.positionX||this.absoluteX,right:this.positionX||this.absoluteX,height:0,width:0}},activate:function(){},calcLeft:function(t){return Object(c["f"])(!1!==this.attach?this.computedLeft:this.calcXOverflow(this.computedLeft,t))},calcTop:function(){return Object(c["f"])(!1!==this.attach?this.computedTop:this.calcYOverflow(this.computedTop))},calcXOverflow:function(t,e){var i=t+e-this.pageWidth+12;return t=(!this.left||this.right)&&i>0?Math.max(t-i,0):Math.max(t,12),t+this.getOffsetLeft()},calcYOverflow:function(t){var e=this.getInnerHeight(),i=this.pageYOffset+e,n=this.dimensions.activator,a=this.dimensions.content.height,o=t+a,s=i<o;return s&&this.offsetOverflow&&n.top>a?t=this.pageYOffset+(n.top-a):s&&!this.allowOverflow?t=i-a-12:t<this.pageYOffset&&!this.allowOverflow&&(t=this.pageYOffset+12),t<12?12:t},callActivate:function(){this.hasWindow&&this.activate()},callDeactivate:function(){this.isContentActive=!1,this.deactivate()},checkForPageYOffset:function(){this.hasWindow&&(this.pageYOffset=this.activatorFixed?0:this.getOffsetTop())},checkActivatorFixed:function(){if(!1===this.attach){var t=this.getActivator();while(t){if("fixed"===window.getComputedStyle(t).position)return void(this.activatorFixed=!0);t=t.offsetParent}this.activatorFixed=!1}},deactivate:function(){},genActivatorListeners:function(){var t=this,e=s["a"].options.methods.genActivatorListeners.call(this),i=e.click;return e.click=function(e){t.openOnClick&&i&&i(e),t.absoluteX=e.clientX,t.absoluteY=e.clientY},e},getInnerHeight:function(){return this.hasWindow?window.innerHeight||document.documentElement.clientHeight:0},getOffsetLeft:function(){return this.hasWindow?window.pageXOffset||document.documentElement.scrollLeft:0},getOffsetTop:function(){return this.hasWindow?window.pageYOffset||document.documentElement.scrollTop:0},getRoundedBoundedClientRect:function(t){var e=t.getBoundingClientRect();return{top:Math.round(e.top),left:Math.round(e.left),bottom:Math.round(e.bottom),right:Math.round(e.right),width:Math.round(e.width),height:Math.round(e.height)}},measure:function(t){if(!t||!this.hasWindow)return null;var e=this.getRoundedBoundedClientRect(t);if(!1!==this.attach){var i=window.getComputedStyle(t);e.left=parseInt(i.marginLeft),e.top=parseInt(i.marginTop)}return e},sneakPeek:function(t){var e=this;requestAnimationFrame((function(){var i=e.$refs.content;i&&"none"===i.style.display?(i.style.display="inline-block",t(),i.style.display="none"):t()}))},startTransition:function(){var t=this;return new Promise((function(e){return requestAnimationFrame((function(){t.isContentActive=t.hasJustFocused=t.isActive,e()}))}))},updateDimensions:function(){var t=this;this.hasWindow="undefined"!==typeof window,this.checkActivatorFixed(),this.checkForPageYOffset(),this.pageWidth=document.documentElement.clientWidth;var e={activator:Object(n["a"])({},this.dimensions.activator),content:Object(n["a"])({},this.dimensions.content)};if(!this.hasActivator||this.absolute)e.activator=this.absolutePosition();else{var i=this.getActivator();if(!i)return;e.activator=this.measure(i),e.activator.offsetLeft=i.offsetLeft,!1!==this.attach?e.activator.offsetTop=i.offsetTop:e.activator.offsetTop=0}this.sneakPeek((function(){t.$refs.content&&(e.content=t.measure(t.$refs.content)),t.dimensions=e}))}}})},f86a:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app-bar",{attrs:{app:"",color:"purple darken-4",dark:"",height:"80"}},[n("a",{attrs:{href:"/"}},[n("v-icon",{attrs:{xLarge:"",color:"white",left:""}},[t._v("mdi-school")])],1),n("v-toolbar-title",{staticClass:"headline white--text hidden-md-and-down"},[n("img",{staticStyle:{width:"50%",height:"80px"},attrs:{src:i("9c6c"),alt:"logoTutoria"}})]),n("v-spacer"),n("v-row",{staticClass:"d-flex justify-end"},[n("div",{staticClass:"mx-4"},[n("v-btn",{staticClass:"purple darken-4 ",attrs:{text:"",xLarge:"",router:"",to:"/login"}},[t._v("Login")])],1),n("div",{staticClass:"mx-4"},[n("v-btn",{staticClass:"purple darken-4 ",attrs:{text:"",xLarge:"",router:"",to:"/register"}},[t._v("Register")])],1)])],1)},a=[],o={name:"Nav",data:function(){return{hrefLogo:"/"}}},s=o,r=(i("0130"),i("2877")),c=i("6544"),u=i.n(c),h=i("40dc"),l=i("8336"),d=i("132d"),f=i("0fd9"),v=i("2fa4"),p=i("2a7f"),m=Object(r["a"])(s,n,a,!1,null,null,null);e["a"]=m.exports;u()(m,{VAppBar:h["a"],VBtn:l["a"],VIcon:d["a"],VRow:f["a"],VSpacer:v["a"],VToolbarTitle:p["a"]})}}]);
//# sourceMappingURL=chunk-39eb3391.aae9ba00.js.map