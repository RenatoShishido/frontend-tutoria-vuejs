(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7c9f75fe"],{"169a":function(e,t,i){"use strict";i("7db0"),i("caad"),i("45fc"),i("a9e3"),i("2532"),i("498a");var n=i("5530"),a=i("2909"),o=i("ade3"),s=(i("368e"),i("480e")),r=i("4ad4"),l=i("b848"),c=i("75eb"),d=(i("3c93"),i("a9ad")),u=i("7560"),h=i("f2e7"),v=i("58df"),f=Object(v["a"])(d["a"],u["a"],h["a"]).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim:function(){var e=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",e)},classes:function(){return Object(n["a"])({"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive},this.themeClasses)},computedOpacity:function(){return Number(this.isActive?this.opacity:0)},styles:function(){return{zIndex:this.zIndex}}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render:function(e){var t=[this.__scrim];return this.isActive&&t.push(this.genContent()),e("div",{staticClass:"v-overlay",class:this.classes,style:this.styles},t)}}),m=f,p=i("80d2"),y=i("2b0e"),g=y["a"].extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data:function(){return{animationFrame:0,overlay:null}},watch:{hideOverlay:function(e){this.isActive&&(e?this.removeOverlay():this.genOverlay())}},beforeDestroy:function(){this.removeOverlay()},methods:{createOverlay:function(){var e=new m({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}});e.$mount();var t=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");t&&t.insertBefore(e.$el,t.firstChild),this.overlay=e},genOverlay:function(){var e=this;if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),this.animationFrame=requestAnimationFrame((function(){e.overlay&&(void 0!==e.activeZIndex?e.overlay.zIndex=String(e.activeZIndex-1):e.$el&&(e.overlay.zIndex=Object(p["q"])(e.$el)),e.overlay.value=!0)})),!0},removeOverlay:function(){var e=this,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.overlay&&(Object(p["a"])(this.overlay.$el,"transitionend",(function(){e.overlay&&e.overlay.$el&&e.overlay.$el.parentNode&&!e.overlay.value&&(e.overlay.$el.parentNode.removeChild(e.overlay.$el),e.overlay.$destroy(),e.overlay=null)})),cancelAnimationFrame(this.animationFrame),this.overlay.value=!1),t&&this.showScroll()},scrollListener:function(e){if("keydown"===e.type){if(["INPUT","TEXTAREA","SELECT"].includes(e.target.tagName)||e.target.isContentEditable)return;var t=[p["s"].up,p["s"].pageup],i=[p["s"].down,p["s"].pagedown];if(t.includes(e.keyCode))e.deltaY=-1;else{if(!i.includes(e.keyCode))return;e.deltaY=1}}(e.target===this.overlay||"keydown"!==e.type&&e.target===document.body||this.checkPath(e))&&e.preventDefault()},hasScrollbar:function(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;var t=window.getComputedStyle(e);return["auto","scroll"].includes(t.overflowY)&&e.scrollHeight>e.clientHeight},shouldScroll:function(e,t){return 0===e.scrollTop&&t<0||e.scrollTop+e.clientHeight===e.scrollHeight&&t>0},isInside:function(e,t){return e===t||null!==e&&e!==document.body&&this.isInside(e.parentNode,t)},checkPath:function(e){var t=e.path||this.composedPath(e),i=e.deltaY;if("keydown"===e.type&&t[0]===document.body){var n=this.$refs.dialog,a=window.getSelection().anchorNode;return!(n&&this.hasScrollbar(n)&&this.isInside(a,n))||this.shouldScroll(n,i)}for(var o=0;o<t.length;o++){var s=t[o];if(s===document)return!0;if(s===document.documentElement)return!0;if(s===this.$refs.content)return!0;if(this.hasScrollbar(s))return this.shouldScroll(s,i)}return!0},composedPath:function(e){if(e.composedPath)return e.composedPath();var t=[],i=e.target;while(i){if(t.push(i),"HTML"===i.tagName)return t.push(document),t.push(window),t;i=i.parentElement}return t},hideScroll:function(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):(Object(p["b"])(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll:function(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}}),b=i("e4d3"),w=i("21be"),x=i("a293"),k=i("d9bd"),C=Object(v["a"])(r["a"],l["a"],c["a"],g,b["a"],w["a"],h["a"]);t["a"]=C.extend({name:"v-dialog",directives:{ClickOutside:x["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200}},computed:{classes:function(){var e;return e={},Object(o["a"])(e,"v-dialog ".concat(this.contentClass).trim(),!0),Object(o["a"])(e,"v-dialog--active",this.isActive),Object(o["a"])(e,"v-dialog--persistent",this.persistent),Object(o["a"])(e,"v-dialog--fullscreen",this.fullscreen),Object(o["a"])(e,"v-dialog--scrollable",this.scrollable),Object(o["a"])(e,"v-dialog--animated",this.animate),e},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(e){e?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind())},fullscreen:function(e){this.isActive&&(e?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(k["e"])("full-width",this)},beforeMount:function(){var e=this;this.$nextTick((function(){e.isBooted=e.isActive,e.isActive&&e.show()}))},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var e=this;this.animate=!1,this.$nextTick((function(){e.animate=!0,window.clearTimeout(e.animateTimeout),e.animateTimeout=window.setTimeout((function(){return e.animate=!1}),150)}))},closeConditional:function(e){var t=e.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(t)||this.overlay&&t&&!this.overlay.$el.contains(t))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):g.options.methods.hideScroll.call(this)},show:function(){var e=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){e.$refs.content.focus(),e.bind()}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(e){this.$emit("click:outside",e),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(e){if(e.keyCode===p["s"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var t=this.getActivator();this.$nextTick((function(){return t&&t.focus()}))}this.$emit("keydown",e)},onFocusin:function(e){if(e&&this.retainFocus){var t=e.target;if(t&&![document,this.$refs.content].includes(t)&&!this.$refs.content.contains(t)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(e){return e.contains(t)}))){var i=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),n=Object(a["a"])(i).find((function(e){return!e.hasAttribute("disabled")}));n&&n.focus()}}},genContent:function(){var e=this;return this.showLazyContent((function(){return[e.$createElement(s["a"],{props:{root:!0,light:e.light,dark:e.dark}},[e.$createElement("div",{class:e.contentClasses,attrs:Object(n["a"])({role:"document",tabindex:e.isActive?0:void 0},e.getScopeIdAttrs()),on:{keydown:e.onKeydown},style:{zIndex:e.activeZIndex},ref:"content"},[e.genTransition()])])]}))},genTransition:function(){var e=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[e]):e},genInnerContent:function(){var e={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(e.style=Object(n["a"])(Object(n["a"])({},e.style),{},{maxWidth:"none"===this.maxWidth?void 0:Object(p["f"])(this.maxWidth),width:"auto"===this.width?void 0:Object(p["f"])(this.width)})),this.$createElement("div",e,this.getContentSlot())}},render:function(e){return e("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},"368e":function(e,t,i){},"3c93":function(e,t,i){},a722:function(e,t,i){"use strict";i("20f6");var n=i("e8f2");t["a"]=Object(n["a"])("layout")},d222:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-app",[i("Register")],1)},a=[],o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-container",{attrs:{"fill-height":""}},[i("v-layout",{attrs:{"align-center":"","justify-space-around":""}},[i("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[i("v-card",{staticClass:"px-12 py-6",attrs:{outlined:"",elevation:10}},[i("h2",{staticClass:"d-flex justify-center blue--text mb-3"},[e._v("TUTORIA EM PARES")]),i("h3",{staticClass:"d-flex justify-center black--text mb-10"},[e._v("Register")]),i("v-text-field",{attrs:{id:"nome",label:"Nome",name:"nome",type:"nome",outlined:"",required:"",loading:e.loading},model:{value:e.fields.nome,callback:function(t){e.$set(e.fields,"nome",t)},expression:"fields.nome"}}),i("v-text-field",{attrs:{id:"rga",label:"RGA",name:"rga",type:"rga",outlined:"",required:"",loading:e.loading},model:{value:e.fields.rga,callback:function(t){e.$set(e.fields,"rga",t)},expression:"fields.rga"}}),i("v-text-field",{attrs:{type:"email",id:"email",label:"Email",name:"email",outlined:"",required:"",loading:e.loading},model:{value:e.fields.email,callback:function(t){e.$set(e.fields,"email",t)},expression:"fields.email"}}),i("v-text-field",{attrs:{id:"password",label:"Password",name:"password",type:"password",required:"",outlined:"",loading:e.loading},on:{keypress:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.enviar()}},model:{value:e.fields.password,callback:function(t){e.$set(e.fields,"password",t)},expression:"fields.password"}}),i("a",{staticClass:"body-1 blue--text",attrs:{href:"/login"}},[e._v("Tenho uma conta")]),i("v-card-actions",{staticClass:"d-flex justify-center mt-5"},[i("privacity",{attrs:{loading:e.loading},on:{cadastrarUsuario:e.cadastrar}})],1)],1)],1)],1)],1)},s=[],r=(i("96cf"),i("1da1")),l=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"text-center"},[i("v-dialog",{attrs:{persistent:"",width:"500"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,a=t.attrs;return[i("v-btn",e._g(e._b({staticClass:"white--text",attrs:{color:"primary"}},"v-btn",a,!1),n),[e._v(" Cadastrar ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[i("v-card",[i("v-card-title",{staticClass:"headline grey lighten-2"},[e._v(" Politicas do Sistema ")]),i("v-card-text",[e._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ")]),i("v-divider"),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(t){e.dialog=!1}}},[e._v(" Não aceito ")]),i("v-btn",{attrs:{color:"primary",text:""},on:{click:function(t){return e.cadastrar()}}},[e._v(" Eu aceito ")])],1)],1)],1)],1)},c=[],d={data:function(){return{dialog:!1}},methods:{cadastrar:function(){this.$emit("cadastrarUsuario"),this.dialog=!1}}},u=d,h=i("2877"),v=i("6544"),f=i.n(v),m=i("8336"),p=i("b0af"),y=i("99d9"),g=i("169a"),b=i("ce7e"),w=i("2fa4"),x=Object(h["a"])(u,l,c,!1,null,null,null),k=x.exports;f()(x,{VBtn:m["a"],VCard:p["a"],VCardActions:y["a"],VCardText:y["c"],VCardTitle:y["d"],VDialog:g["a"],VDivider:b["a"],VSpacer:w["a"]});var C={name:"Register",components:{privacity:k},data:function(){return{fields:{},loading:!1}},methods:{cadastrar:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.prev=1,t.next=4,e.$store.dispatch("user/registerUser",e.fields);case 4:e.$store.dispatch("snackbar/show",{content:"Usuario cadastrado com sucesso!",color:"green"}),e.fields={},t.next=12;break;case 8:t.prev=8,t.t0=t["catch"](1),e.$store.dispatch("snackbar/show",{content:t.t0.error,color:"error"}),e.fields={};case 12:e.loading=!1;case 13:case"end":return t.stop()}}),t,null,[[1,8]])})))()}}},O=C,$=i("a523"),S=i("0e8f"),A=i("a722"),E=i("8654"),_=Object(h["a"])(O,o,s,!1,null,null,null),j=_.exports;f()(_,{VCard:p["a"],VCardActions:y["a"],VContainer:$["a"],VFlex:S["a"],VLayout:A["a"],VTextField:E["a"]});var T={name:"View-Register",components:{Register:j}},I=T,L=i("7496"),N=Object(h["a"])(I,n,a,!1,null,null,null);t["default"]=N.exports;f()(N,{VApp:L["a"]})}}]);
//# sourceMappingURL=chunk-7c9f75fe.60324819.js.map