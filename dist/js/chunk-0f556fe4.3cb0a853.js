(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0f556fe4"],{"0463":function(t,e,i){t.exports=i.p+"img/silhueta-interrogação.82f49553.jpg"},a523:function(t,e,i){"use strict";i("99af"),i("4de4"),i("b64b"),i("2ca0"),i("20f6"),i("4b85");var a=i("e8f2"),s=i("d9f7");e["a"]=Object(a["a"])("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var i,a=e.props,n=e.data,r=e.children,l=n.attrs;return l&&(n.attrs={},i=Object.keys(l).filter((function(t){if("slot"===t)return!1;var e=l[t];return t.startsWith("data-")?(n.attrs[t]=e,!1):e||"string"===typeof e}))),a.id&&(n.domProps=n.domProps||{},n.domProps.id=a.id),t(a.tag,Object(s["a"])(n,{staticClass:"container",class:Array({"container--fluid":a.fluid}).concat(i||[])}),r)}})},a75b:function(t,e,i){"use strict";i("daaf");var a=i("d10f");e["a"]=a["a"].extend({name:"v-content",props:{tag:{type:String,default:"main"}},computed:{styles:function(){var t=this.$vuetify.application,e=t.bar,i=t.top,a=t.right,s=t.footer,n=t.insetFooter,r=t.bottom,l=t.left;return{paddingTop:"".concat(i+e,"px"),paddingRight:"".concat(a,"px"),paddingBottom:"".concat(s+n+r,"px"),paddingLeft:"".concat(l,"px")}}},render:function(t){var e={staticClass:"v-content",style:this.styles,ref:"content"};return t(this.tag,e,[t("div",{staticClass:"v-content__wrap"},this.$slots.default)])}})},bf19:function(t,e,i){"use strict";var a=i("23e7");a({target:"URL",proto:!0,enumerable:!0},{toJSON:function(){return URL.prototype.toString.call(this)}})},d43d:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",[i("DashPerfil")],1)},s=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-content",[a("v-flex",{attrs:{xs12:"",sm12:"",md12:""}},[a("v-container",[a("v-row",{attrs:{justify:"center"}},[a("v-card",[a("v-flex",{attrs:{xs12:"",sm12:"",md12:"",lg12:"",xl12:""}},[a("v-card-title",{staticClass:"cyan darken-1"},[a("span",{staticClass:"headline white--text"},[t._v(t._s(t.fields.nome))]),a("v-spacer"),t.$store.getters["user/GettersId"]===t.userParam?a("v-btn",{attrs:{fab:"",small:""},on:{click:function(e){t.isEditing=!t.isEditing}}},[t.isEditing?a("v-icon",[t._v("mdi-close")]):a("v-icon",[t._v("mdi-pencil")])],1):t._e()],1)],1),a("v-list",[a("v-flex",{attrs:{xs12:"",sm12:"",md12:"",lg12:"",xl12:""}},[a("v-list-item",[a("v-list-item-action",[a("v-icon",[t._v("mdi-face")])],1),a("v-text-field",{attrs:{disabled:!t.isEditing,value:t.fields.nome,color:"white",label:"Nome"},model:{value:t.fields.nome,callback:function(e){t.$set(t.fields,"nome",e)},expression:"fields.nome"}}),a("v-list-item-action",[a("v-icon",[t._v("mdi-message-text")])],1)],1)],1),a("v-flex",{attrs:{xs12:"",sm12:"",md12:"",lg12:"",xl12:""}},[a("v-list-item",[a("v-list-item-action",[a("v-icon",[t._v("mdi-book")])],1),a("v-text-field",{attrs:{disabled:!0,color:"white",value:t.semestre,label:"Semestre"}}),a("v-list-item-action",[a("v-icon",[t._v("mdi-message-text")])],1)],1)],1),a("v-flex",{attrs:{xs12:"",sm12:"",md12:"",lg12:"",xl12:""}},[a("v-list-item",[a("v-list-item-action",[a("v-icon",[t._v("mdi-whatsapp")])],1),a("v-text-field",{attrs:{disabled:!t.isEditing,value:t.fields.telefone,color:"white",label:"Whatsapp"},model:{value:t.fields.telefone,callback:function(e){t.$set(t.fields,"telefone",e)},expression:"fields.telefone"}}),a("v-list-item-action",[a("v-icon",[t._v("mdi-message-text")])],1)],1)],1),a("v-flex",{attrs:{xs12:"",sm12:"",md12:"",lg12:"",xl12:""}},[a("v-list-item",[a("v-list-item-action",[a("v-icon",[t._v("mdi-lock")])],1),a("v-text-field",{attrs:{disabled:!t.isEditing,color:"white",value:t.fields.rga,label:"Rga"},model:{value:t.fields.rga,callback:function(e){t.$set(t.fields,"rga",e)},expression:"fields.rga"}}),a("v-list-item-action",[a("v-icon",[t._v("mdi-message-text")])],1)],1)],1),a("v-flex",{attrs:{xs12:"",sm12:"",md12:"",lg12:"",xl12:""}},[a("v-card-actions",{staticClass:"d-flex justify-end align-center"},[a("v-btn",{attrs:{disabled:!t.isEditing,color:"success",large:""},on:{click:function(e){return t.alterarPerfilUser()}}},[t._v("Salvar")]),a("input",{ref:"file",staticStyle:{display:"none"},attrs:{type:"file",id:"file"},on:{change:function(e){return t.handleFileUpload()}}}),a("v-btn",{attrs:{fab:"",large:"",disabled:!t.isEditing,text:""},on:{click:function(e){return t.$refs.file.click()}}},[a("v-icon",[t._v("mdi-paperclip")])],1)],1)],1)],1),a("v-flex",{attrs:{xs12:"",sm12:"",md12:"",lg12:"",xl12:""}},[void 0===t.fields.profile?a("div",[a("v-img",{attrs:{src:i("0463"),height:"500px",width:"100%"}})],1):a("div",[a("v-img",{attrs:{src:t.fields.profile,height:"500px",width:"100%"}})],1)])],1)],1)],1)],1)],1)},r=[],l=(i("ac1f"),i("1276"),i("bf19"),i("96cf"),i("1da1")),o=i("bcb3"),c={name:"DashPerfil",data:function(){return{isEditing:null,fields:{},semestre:"",userParam:{}}},mounted:function(){this.refresh()},methods:{refresh:function(){var t=this,e=location.pathname.split("/");this.userParam=e[3],o["a"].listarPerfil(e[3]).then((function(e){t.fields=e,t.verificarRga()})).catch((function(t){return t}))},alterarPerfilUser:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.isEditing=!t.isEditing,t.fields.semestre=t.semestre,e.next=5,t.$store.dispatch("user/alterLoggedUser",t.fields);case 5:t.$store.dispatch("snackbar/show",{content:"Perfil alterado com sucesso",color:"green"}),t.refresh(),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),t.$store.dispatch("snackbar/show",{content:"Nao foi possivel alterar o Perfil",color:"error"});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()},handleFileUpload:function(){this.fields.file=this.$refs.file.files[0]},verificarRga:function(){var t=this.fields.rga.substring(0,4);""===this.fields.rga||null===this.fields.rga||void 0===this.fields.rga?this.semestre="":this.semestre=this.calcularSemestre(t)},calcularSemestre:function(t){var e=new Date,i=e.toJSON(),a=i.split("-"),s=a[1],n=a[0];return s<6?2*(n-t)+1:2*(n-t)+2}},watch:{$route:function(t,e){var i=this;return Object(l["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!t.params.id){a.next=4;break}if(t.params.id==e.params.id){a.next=4;break}return a.next=4,i.refresh();case 4:case"end":return a.stop()}}),a)})))()}}},d=c,f=i("2877"),u=i("6544"),v=i.n(u),m=i("8336"),p=i("b0af"),g=i("99d9"),h=i("a523"),x=i("a75b"),b=i("0e8f"),w=i("132d"),k=i("adda"),_=i("8860"),y=i("da13"),V=i("1800"),P=i("0fd9"),$=i("2fa4"),E=i("8654"),S=Object(f["a"])(d,n,r,!1,null,null,null),C=S.exports;v()(S,{VBtn:m["a"],VCard:p["a"],VCardActions:g["a"],VCardTitle:g["d"],VContainer:h["a"],VContent:x["a"],VFlex:b["a"],VIcon:w["a"],VImg:k["a"],VList:_["a"],VListItem:y["a"],VListItemAction:V["a"],VRow:P["a"],VSpacer:$["a"],VTextField:E["a"]});var R={name:"View-Perfil",components:{DashPerfil:C},data:function(){return{}}},j=R,O=i("7496"),L=Object(f["a"])(j,a,s,!1,null,null,null);e["default"]=L.exports;v()(L,{VApp:O["a"]})},daaf:function(t,e,i){}}]);
//# sourceMappingURL=chunk-0f556fe4.3cb0a853.js.map