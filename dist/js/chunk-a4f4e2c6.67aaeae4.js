(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a4f4e2c6"],{"0130":function(t,e,i){"use strict";var n=i("4c12"),s=i.n(n);s.a},"13b3":function(t,e,i){},"166a":function(t,e,i){},"4bd4":function(t,e,i){"use strict";i("4de4"),i("7db0"),i("4160"),i("caad"),i("07ac"),i("2532"),i("159b");var n=i("5530"),s=i("58df"),r=i("7e2b"),a=i("3206");e["a"]=Object(s["a"])(r["a"],Object(a["b"])("form")).extend({name:"v-form",inheritAttrs:!1,props:{lazyValidation:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,i=function(t){return t.$watch("hasError",(function(i){e.$set(e.errorBag,t._uid,i)}),{immediate:!0})},n={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=t.$watch("shouldValidate",(function(s){s&&(e.errorBag.hasOwnProperty(t._uid)||(n.valid=i(t)))})):n.valid=i(t),n},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var i=this.watchers.find((function(t){return t._uid===e._uid}));i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(n["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},"4c12":function(t,e,i){},"604c":function(t,e,i){"use strict";i.d(e,"a",(function(){return u}));i("4de4"),i("7db0"),i("c740"),i("4160"),i("caad"),i("c975"),i("fb6a"),i("a434"),i("a9e3"),i("2532"),i("159b");var n=i("5530"),s=(i("166a"),i("a452")),r=i("7560"),a=i("58df"),o=i("d9bd"),u=Object(a["a"])(s["a"],r["a"]).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean},data:function(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes:function(){return Object(n["a"])({"v-item-group":!0},this.themeClasses)},selectedIndex:function(){return this.selectedItem&&this.items.indexOf(this.selectedItem)||-1},selectedItem:function(){if(!this.multiple)return this.selectedItems[0]},selectedItems:function(){var t=this;return this.items.filter((function(e,i){return t.toggleMethod(t.getValue(e,i))}))},selectedValues:function(){return null==this.internalValue?[]:Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod:function(){var t=this;if(!this.multiple)return function(e){return t.internalValue===e};var e=this.internalValue;return Array.isArray(e)?function(t){return e.includes(t)}:function(){return!1}}},watch:{internalValue:"updateItemsState",items:"updateItemsState"},created:function(){this.multiple&&!Array.isArray(this.internalValue)&&Object(o["c"])("Model must be bound to an array if the multiple property is true.",this)},methods:{genData:function(){return{class:this.classes}},getValue:function(t,e){return null==t.value||""===t.value?e:t.value},onClick:function(t){this.updateInternalValue(this.getValue(t,this.items.indexOf(t)))},register:function(t){var e=this,i=this.items.push(t)-1;t.$on("change",(function(){return e.onClick(t)})),this.mandatory&&!this.selectedValues.length&&this.updateMandatory(),this.updateItem(t,i)},unregister:function(t){if(!this._isDestroyed){var e=this.items.indexOf(t),i=this.getValue(t,e);this.items.splice(e,1);var n=this.selectedValues.indexOf(i);if(!(n<0)){if(!this.mandatory)return this.updateInternalValue(i);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter((function(t){return t!==i})):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}}},updateItem:function(t,e){var i=this.getValue(t,e);t.isActive=this.toggleMethod(i)},updateItemsState:function(){var t=this;this.$nextTick((function(){if(t.mandatory&&!t.selectedItems.length)return t.updateMandatory();t.items.forEach(t.updateItem)}))},updateInternalValue:function(t){this.multiple?this.updateMultiple(t):this.updateSingle(t)},updateMandatory:function(t){if(this.items.length){var e=this.items.slice();t&&e.reverse();var i=e.find((function(t){return!t.disabled}));if(i){var n=this.items.indexOf(i);this.updateInternalValue(this.getValue(i,n))}}},updateMultiple:function(t){var e=Array.isArray(this.internalValue)?this.internalValue:[],i=e.slice(),n=i.findIndex((function(e){return e===t}));this.mandatory&&n>-1&&i.length-1<1||null!=this.max&&n<0&&i.length+1>this.max||(n>-1?i.splice(n,1):i.push(t),this.internalValue=i)},updateSingle:function(t){var e=t===this.internalValue;this.mandatory&&e||(this.internalValue=e?void 0:t)}},render:function(t){return t("div",this.genData(),this.$slots.default)}});u.extend({name:"v-item-group",provide:function(){return{itemGroup:this}}})},"63b7":function(t,e,i){},"9d65":function(t,e,i){"use strict";var n=i("d9bd"),s=i("2b0e");e["a"]=s["a"].extend().extend({name:"bootable",props:{eager:Boolean},data:function(){return{isBooted:!1}},computed:{hasContent:function(){return this.isBooted||this.eager||this.isActive}},watch:{isActive:function(){this.isBooted=!0}},created:function(){"lazy"in this.$attrs&&Object(n["d"])("lazy",this)},methods:{showLazyContent:function(t){return this.hasContent&&t?t():[this.$createElement()]}}})},a434:function(t,e,i){"use strict";var n=i("23e7"),s=i("23cb"),r=i("a691"),a=i("50c4"),o=i("7b0b"),u=i("65f0"),l=i("8418"),c=i("1dde"),h=i("ae40"),d=c("splice"),f=h("splice",{ACCESSORS:!0,0:0,1:2}),v=Math.max,m=Math.min,p=9007199254740991,g="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!d||!f},{splice:function(t,e){var i,n,c,h,d,f,w=o(this),b=a(w.length),y=s(t,b),x=arguments.length;if(0===x?i=n=0:1===x?(i=0,n=b-y):(i=x-2,n=m(v(r(e),0),b-y)),b+i-n>p)throw TypeError(g);for(c=u(w,n),h=0;h<n;h++)d=y+h,d in w&&l(c,h,w[d]);if(c.length=n,i<n){for(h=y;h<b-n;h++)d=h+n,f=h+i,d in w?w[f]=w[d]:delete w[f];for(h=b;h>b-n+i;h--)delete w[h-1]}else if(i>n)for(h=b-n;h>y;h--)d=h+n-1,f=h+i-1,d in w?w[f]=w[d]:delete w[f];for(h=0;h<i;h++)w[h+y]=arguments[h+2];return w.length=b-n+i,c}})},a722:function(t,e,i){"use strict";i("20f6");var n=i("e8f2");e["a"]=Object(n["a"])("layout")},afdd:function(t,e,i){"use strict";var n=i("8336");e["a"]=n["a"]},c376:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",[i("Nav"),i("Login")],1)},s=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"my-12",attrs:{"fill-height":""}},[n("v-snackbar",{attrs:{timeout:4e3,top:"",color:t.$store.state.color},model:{value:t.$store.state.snackbar,callback:function(e){t.$set(t.$store.state,"snackbar",e)},expression:"$store.state.snackbar"}},[n("span",[t._v(t._s(t.$store.state.texto))]),n("v-btn",{attrs:{text:"",color:"white"},on:{click:function(e){t.$store.state.snackbar=!1}}},[t._v("Close")])],1),n("v-layout",{staticClass:"d-flex flex-wrap justify-space-around align-center"},[n("v-flex",{attrs:{xs12:"",sm12:"",md6:""}},[n("carrossel")],1),n("v-spacer"),n("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[n("v-toolbar",{attrs:{flat:""}},[n("v-spacer"),n("v-toolbar-title",{staticClass:"d-flex justify-center blue--text"},[n("img",{staticStyle:{width:"50%",height:"80px"},attrs:{src:i("9c6c"),alt:"logoTutoria"}})]),n("v-spacer")],1),n("v-form",[n("v-text-field",{attrs:{id:"email",label:"Email",name:"email",type:"email"},model:{value:t.fields.email,callback:function(e){t.$set(t.fields,"email",e)},expression:"fields.email"}}),n("v-text-field",{attrs:{id:"password",label:"Password",name:"password",type:"password"},on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.enviar()}},model:{value:t.fields.password,callback:function(e){t.$set(t.fields,"password",e)},expression:"fields.password"}}),n("v-card-actions",{staticClass:"d-flex justify-start"},[n("v-btn",{staticClass:"white--text",attrs:{color:"blue"},on:{click:function(e){return t.enviar()}}},[t._v("Acessar")])],1)],1),n("v-container",[n("v-card-actions",{staticClass:"d-flex justify-center"},[n("a",{staticClass:"body-1 blue--text",attrs:{href:"/register"}},[t._v("Nao tenho conta")])]),n("v-card-actions",{staticClass:"d-flex justify-center"},[n("a",{staticClass:"body-1 blue--text",attrs:{href:"/forgot_password"}},[t._v("Esqueci minha senha")])])],1)],1)],1)],1)},a=[],o=i("bcb3"),u=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-carousel",{attrs:{cycle:"",height:"400",max:"100","hide-delimiter-background":"","show-arrows-on-hover":""}},t._l(t.slides,(function(e,n){return i("v-carousel-item",{key:n},[i("v-sheet",{attrs:{color:t.colors[n],height:"100%"}},[i("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[i("div",{staticClass:"display-3"},[t._v(t._s(e)+" Slide")])])],1)],1)})),1)],1)},l=[],c={name:"carrosel",data:function(){return{colors:["indigo","warning","pink darken-2","red lighten-1","deep-purple accent-4"],slides:["First","Second","Third","Fourth","Fifth"]}}},h=c,d=i("2877"),f=i("6544"),v=i.n(f),m=(i("a9e3"),i("5530")),p=(i("63b7"),i("99af"),i("7db0"),i("c740"),i("13b3"),i("c3f0")),g=i("afdd"),w=i("9d26"),b=i("604c"),y=b["a"].extend({name:"v-window",provide:function(){return{windowGroup:this}},directives:{Touch:p["a"]},props:{activeClass:{type:String,default:"v-window-item--active"},continuous:Boolean,mandatory:{type:Boolean,default:!0},nextIcon:{type:[Boolean,String],default:"$next"},prevIcon:{type:[Boolean,String],default:"$prev"},reverse:{type:Boolean,default:void 0},showArrows:Boolean,showArrowsOnHover:Boolean,touch:Object,touchless:Boolean,value:{required:!1},vertical:Boolean},data:function(){return{changedByDelimiters:!1,internalHeight:void 0,transitionHeight:void 0,transitionCount:0,isBooted:!1,isReverse:!1}},computed:{isActive:function(){return this.transitionCount>0},classes:function(){return Object(m["a"])({},b["a"].options.computed.classes.call(this),{"v-window--show-arrows-on-hover":this.showArrowsOnHover})},computedTransition:function(){if(!this.isBooted)return"";var t=this.vertical?"y":"x",e=this.$vuetify.rtl&&"x"===t?!this.internalReverse:this.internalReverse,i=e?"-reverse":"";return"v-window-".concat(t).concat(i,"-transition")},hasActiveItems:function(){return Boolean(this.items.find((function(t){return!t.disabled})))},hasNext:function(){return this.continuous||this.internalIndex<this.items.length-1},hasPrev:function(){return this.continuous||this.internalIndex>0},internalIndex:function(){var t=this;return this.items.findIndex((function(e,i){return t.internalValue===t.getValue(e,i)}))},internalReverse:function(){return this.reverse?!this.isReverse:this.isReverse}},watch:{internalIndex:"updateReverse"},mounted:function(){var t=this;window.requestAnimationFrame((function(){return t.isBooted=!0}))},methods:{genContainer:function(){var t=[this.$slots.default];return this.showArrows&&t.push(this.genControlIcons()),this.$createElement("div",{staticClass:"v-window__container",class:{"v-window__container--is-active":this.isActive},style:{height:this.internalHeight||this.transitionHeight}},t)},genIcon:function(t,e,i){var n=this;return this.$createElement("div",{staticClass:"v-window__".concat(t)},[this.$createElement(g["a"],{props:{icon:!0},attrs:{"aria-label":this.$vuetify.lang.t("$vuetify.carousel.".concat(t))},on:{click:function(){n.changedByDelimiters=!0,i()}}},[this.$createElement(w["a"],{props:{large:!0}},e)])])},genControlIcons:function(){var t=[],e=this.$vuetify.rtl?this.nextIcon:this.prevIcon;if(this.hasPrev&&e&&"string"===typeof e){var i=this.genIcon("prev",e,this.prev);i&&t.push(i)}var n=this.$vuetify.rtl?this.prevIcon:this.nextIcon;if(this.hasNext&&n&&"string"===typeof n){var s=this.genIcon("next",n,this.next);s&&t.push(s)}return t},getNextIndex:function(t){var e=(t+1)%this.items.length,i=this.items[e];return i.disabled?this.getNextIndex(e):e},getPrevIndex:function(t){var e=(t+this.items.length-1)%this.items.length,i=this.items[e];return i.disabled?this.getPrevIndex(e):e},next:function(){if(this.isReverse=this.$vuetify.rtl,this.hasActiveItems&&this.hasNext){var t=this.getNextIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)}},prev:function(){if(this.isReverse=!this.$vuetify.rtl,this.hasActiveItems&&this.hasPrev){var t=this.getPrevIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)}},updateReverse:function(t,e){this.changedByDelimiters?this.changedByDelimiters=!1:this.isReverse=t<e}},render:function(t){var e=this,i={staticClass:"v-window",class:this.classes,directives:[]};if(!this.touchless){var n=this.touch||{left:function(){e.$vuetify.rtl?e.prev():e.next()},right:function(){e.$vuetify.rtl?e.next():e.prev()},end:function(t){t.stopPropagation()},start:function(t){t.stopPropagation()}};i.directives.push({name:"touch",value:n})}return t("div",i,[this.genContainer()])}}),x=i("37c6"),V=b["a"].extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return b["a"].options.computed.classes.call(this)}},methods:{genData:b["a"].options.methods.genData}}),$=i("80d2"),C=i("d9bd"),I=y.extend({name:"v-carousel",props:{continuous:{type:Boolean,default:!0},cycle:Boolean,delimiterIcon:{type:String,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:function(t){return t>0}},mandatory:{type:Boolean,default:!0},progress:Boolean,progressColor:String,showArrows:{type:Boolean,default:!0},verticalDelimiters:{type:String,default:void 0}},data:function(){return{internalHeight:this.height,slideTimeout:void 0}},computed:{classes:function(){return Object(m["a"])({},y.options.computed.classes.call(this),{"v-carousel":!0,"v-carousel--hide-delimiter-background":this.hideDelimiterBackground,"v-carousel--vertical-delimiters":this.isVertical})},isDark:function(){return this.dark||!this.light},isVertical:function(){return null!=this.verticalDelimiters}},watch:{internalValue:"restartTimeout",interval:"restartTimeout",height:function(t,e){t!==e&&t&&(this.internalHeight=t)},cycle:function(t){t?this.restartTimeout():(clearTimeout(this.slideTimeout),this.slideTimeout=void 0)}},created:function(){this.$attrs.hasOwnProperty("hide-controls")&&Object(C["a"])("hide-controls",':show-arrows="false"',this)},mounted:function(){this.startTimeout()},methods:{genControlIcons:function(){return this.isVertical?null:y.options.methods.genControlIcons.call(this)},genDelimiters:function(){return this.$createElement("div",{staticClass:"v-carousel__controls",style:{left:"left"===this.verticalDelimiters&&this.isVertical?0:"auto",right:"right"===this.verticalDelimiters?0:"auto"}},[this.genItems()])},genItems:function(){for(var t=this,e=this.items.length,i=[],n=0;n<e;n++){var s=this.$createElement(g["a"],{staticClass:"v-carousel__controls__item",attrs:{"aria-label":this.$vuetify.lang.t("$vuetify.carousel.ariaLabel.delimiter",n+1,e)},props:{icon:!0,small:!0,value:this.getValue(this.items[n],n)}},[this.$createElement(w["a"],{props:{size:18}},this.delimiterIcon)]);i.push(s)}return this.$createElement(V,{props:{value:this.internalValue,mandatory:this.mandatory},on:{change:function(e){t.internalValue=e}}},i)},genProgress:function(){return this.$createElement(x["a"],{staticClass:"v-carousel__progress",props:{color:this.progressColor,value:(this.internalIndex+1)/this.items.length*100}})},restartTimeout:function(){this.slideTimeout&&clearTimeout(this.slideTimeout),this.slideTimeout=void 0,window.requestAnimationFrame(this.startTimeout)},startTimeout:function(){this.cycle&&(this.slideTimeout=window.setTimeout(this.next,+this.interval>0?+this.interval:6e3))}},render:function(t){var e=y.options.render.call(this,t);return e.data.style="height: ".concat(Object($["f"])(this.height),";"),this.hideDelimiters||e.children.push(this.genDelimiters()),(this.progress||this.progressColor)&&e.children.push(this.genProgress()),e}}),T=i("9d65"),_=i("4e82"),B=i("58df"),O=Object(B["a"])(T["a"],Object(_["a"])("windowGroup","v-window-item","v-window")),A=O.extend().extend().extend({name:"v-window-item",directives:{Touch:p["a"]},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{isActive:!1,inTransition:!1}},computed:{classes:function(){return this.groupClasses},computedTransition:function(){return this.windowGroup.internalReverse?"undefined"!==typeof this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:"undefined"!==typeof this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot:function(){return this.$slots.default},genWindowItem:function(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition:function(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition:function(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object($["f"])(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled:function(){this.onAfterTransition()},onEnter:function(t){var e=this;this.inTransition&&this.$nextTick((function(){e.computedTransition&&e.inTransition&&(e.windowGroup.transitionHeight=Object($["f"])(t.clientHeight))}))}},render:function(t){var e=this;return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((function(){return[e.genWindowItem()]})))}}),j=i("adda"),k=i("1c87"),E=Object(B["a"])(A,k["a"]),S=E.extend({name:"v-carousel-item",inheritAttrs:!1,methods:{genDefaultSlot:function(){return[this.$createElement(j["a"],{staticClass:"v-carousel__item",props:Object(m["a"])({},this.$attrs,{height:this.windowGroup.internalHeight}),on:this.$listeners,scopedSlots:{placeholder:this.$scopedSlots.placeholder}},Object($["m"])(this))]},genWindowItem:function(){var t=this.generateRouteLink(),e=t.tag,i=t.data;return i.staticClass="v-window-item",i.directives.push({name:"show",value:this.isActive}),this.$createElement(e,i,this.genDefaultSlot())}}}),D=i("0fd9"),H=i("8dd9"),L=Object(d["a"])(h,u,l,!1,null,null,null),M=L.exports;v()(L,{VCarousel:I,VCarouselItem:S,VRow:D["a"],VSheet:H["a"]});var R={name:"login",components:{Carrossel:M},data:function(){return{fields:{},drawer:null}},methods:{enviar:function(){var t=this;o["a"].logar(this.fields).then((function(e){var i=e.data.user.admin;localStorage.setItem("user",JSON.stringify(e.data.user)),localStorage.setItem("jwt",e.data.token),null!=localStorage.getItem("jwt")&&(t.$emit("loggedIn"),null!=t.$route.params.nextUrl?t.$router.push(t.$route.params.nextUrl):!0===i?t.$router.push("admin"):t.$router.push("dashboard/pagina/1")),t.fields={}})).catch((function(e){t.$store.getters.snackbarErr,t.$store.state.texto=e,t.fields={}}))}}},G=R,X=i("8336"),Y=i("99d9"),N=i("a523"),P=i("0e8f"),z=i("4bd4"),F=i("a722"),q=i("2db4"),J=i("2fa4"),W=i("8654"),U=i("71d9"),K=i("2a7f"),Q=Object(d["a"])(G,r,a,!1,null,null,null),Z=Q.exports;v()(Q,{VBtn:X["a"],VCardActions:Y["a"],VContainer:N["a"],VFlex:P["a"],VForm:z["a"],VLayout:F["a"],VSnackbar:q["a"],VSpacer:J["a"],VTextField:W["a"],VToolbar:U["a"],VToolbarTitle:K["a"]});var tt=i("f86a"),et={name:"View-Login",components:{Login:Z,Nav:tt["a"]}},it=et,nt=i("7496"),st=Object(d["a"])(it,n,s,!1,null,null,null);e["default"]=st.exports;v()(st,{VApp:nt["a"]})},c3f0:function(t,e,i){"use strict";i("4160"),i("159b");var n=i("80d2"),s=function(t){var e=t.touchstartX,i=t.touchendX,n=t.touchstartY,s=t.touchendY,r=.5,a=16;t.offsetX=i-e,t.offsetY=s-n,Math.abs(t.offsetY)<r*Math.abs(t.offsetX)&&(t.left&&i<e-a&&t.left(t),t.right&&i>e+a&&t.right(t)),Math.abs(t.offsetX)<r*Math.abs(t.offsetY)&&(t.up&&s<n-a&&t.up(t),t.down&&s>n+a&&t.down(t))};function r(t,e){var i=t.changedTouches[0];e.touchstartX=i.clientX,e.touchstartY=i.clientY,e.start&&e.start(Object.assign(t,e))}function a(t,e){var i=t.changedTouches[0];e.touchendX=i.clientX,e.touchendY=i.clientY,e.end&&e.end(Object.assign(t,e)),s(e)}function o(t,e){var i=t.changedTouches[0];e.touchmoveX=i.clientX,e.touchmoveY=i.clientY,e.move&&e.move(Object.assign(t,e))}function u(t){var e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:function(t){return r(t,e)},touchend:function(t){return a(t,e)},touchmove:function(t){return o(t,e)}}}function l(t,e,i){var s=e.value,r=s.parent?t.parentElement:t,a=s.options||{passive:!0};if(r){var o=u(e.value);r._touchHandlers=Object(r._touchHandlers),r._touchHandlers[i.context._uid]=o,Object(n["r"])(o).forEach((function(t){r.addEventListener(t,o[t],a)}))}}function c(t,e,i){var s=e.value.parent?t.parentElement:t;if(s&&s._touchHandlers){var r=s._touchHandlers[i.context._uid];Object(n["r"])(r).forEach((function(t){s.removeEventListener(t,r[t])})),delete s._touchHandlers[i.context._uid]}}var h={inserted:l,unbind:c};e["a"]=h},c740:function(t,e,i){"use strict";var n=i("23e7"),s=i("b727").findIndex,r=i("44d2"),a=i("ae40"),o="findIndex",u=!0,l=a(o);o in[]&&Array(1)[o]((function(){u=!1})),n({target:"Array",proto:!0,forced:u||!l},{findIndex:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),r(o)},f86a:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app-bar",{attrs:{app:"",color:"purple darken-4",dark:"",height:"80"}},[n("a",{attrs:{href:"/"}},[n("v-icon",{attrs:{xLarge:"",color:"white",left:""}},[t._v("mdi-school")])],1),n("v-toolbar-title",{staticClass:"headline white--text hidden-md-and-down"},[n("img",{staticStyle:{width:"50%",height:"80px"},attrs:{src:i("9c6c"),alt:"logoTutoria"}})]),n("v-spacer"),n("v-row",{staticClass:"d-flex justify-end"},[n("div",{staticClass:"mx-4"},[n("v-btn",{staticClass:"purple darken-4 ",attrs:{text:"",xLarge:"",router:"",to:"/login"}},[t._v("Login")])],1),n("div",{staticClass:"mx-4"},[n("v-btn",{staticClass:"purple darken-4 ",attrs:{text:"",xLarge:"",router:"",to:"/register"}},[t._v("Register")])],1)])],1)},s=[],r={name:"Nav",data:function(){return{hrefLogo:"/"}}},a=r,o=(i("0130"),i("2877")),u=i("6544"),l=i.n(u),c=i("40dc"),h=i("8336"),d=i("132d"),f=i("0fd9"),v=i("2fa4"),m=i("2a7f"),p=Object(o["a"])(a,n,s,!1,null,null,null);e["a"]=p.exports;l()(p,{VAppBar:c["a"],VBtn:h["a"],VIcon:d["a"],VRow:f["a"],VSpacer:v["a"],VToolbarTitle:m["a"]})}}]);
//# sourceMappingURL=chunk-a4f4e2c6.67aaeae4.js.map