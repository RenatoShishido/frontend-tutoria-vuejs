(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5badee68"],{"3e9d":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("NavDrag"),a("DashCompleto")],1)},s=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-responsive",{staticClass:"overflow-y-auto",attrs:{"max-height":"1000"}},[a("v-lazy",{attrs:{options:{threshold:.5},"min-height":"200",transition:"fade-transition"},model:{value:t.isActive,callback:function(e){t.isActive=e},expression:"isActive"}},[a("div",{staticClass:"altura"},[a("h1",{staticClass:"d-flex justify-center subheading grey--text "},[t._v("Dashboard")]),a("v-container",{staticClass:"d-flex justify-center"},[a("v-btn",{staticClass:"mr-3",attrs:{small:"",text:"",color:"black"},on:{click:function(e){return t.sortBy("institution")}}},[a("v-icon",{attrs:{left:"",small:""}},[t._v("mdi-folder")]),a("span",{staticClass:"body-1"},[t._v("Ordenar por Bloco")])],1),a("v-btn",{attrs:{small:"",text:"",color:"black"},on:{click:function(e){return t.sortBy("nome")}}},[a("v-icon",{attrs:{left:"",small:""}},[t._v("mdi-face")]),a("span",{staticClass:"body-1"},[t._v("Ordenar por nome")])],1),a("v-btn",{attrs:{small:"",text:"",color:"black"},on:{click:function(e){t.refresh(),t.refreshProject()}}},[a("v-icon",{staticClass:"ml-2",attrs:{left:"",medium:""}},[t._v("mdi-refresh")])],1)],1),a("v-container",{staticClass:"d-flex flex-column justify-center"},t._l(t.projects,(function(e){return a("v-card",{key:e.nome,staticClass:"mb-10",attrs:{flat:""}},["Completo"===e.status?a("div",[a("v-divider"),a("v-layout",{class:"pa-3 project "+e.status,attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs6:"",sm4:"",md1:""}},[a("div",{staticClass:"caption grey--text"},[t._v("Bloco")]),a("div",[t._v(t._s(e.institution))])]),a("v-flex",{attrs:{xs6:"",sm4:"",md2:""}},[a("div",{staticClass:"caption grey--text"},[t._v("Disciplina")]),a("div",[t._v(t._s(e.discipline))])]),a("v-flex",{attrs:{xs12:"",md4:""}},[a("div",{staticClass:"caption  grey--text"},[t._v("Conteudo")]),a("p",{staticClass:"text-justify mr-12"},[t._v(t._s(e.content))])]),a("v-flex",{attrs:{xs2:"",sm4:"",md2:""}},[a("div",{staticClass:"caption grey--text"},[t._v("Data")]),a("div",[t._v(t._s(t._f("moment")(e.data,"DD/MM/YYYY")))])]),a("v-flex",{attrs:{xs6:"",sm4:"",md2:""}},[a("div",{staticClass:"caption grey--text"},[t._v("Nome")]),a("div",[t._v(t._s(e.user.nome))])]),a("v-flex",{attrs:{xs2:"",sm4:"",md1:""}},[a("div",{staticClass:"caption grey--text"},[t._v("Status")]),a("div",[t._v(t._s(e.status))])])],1),a("v-divider")],1):t._e()])})),1)],1)])],1)},r=[],o=a("bcb3"),c={data:function(){return{projects:{},nomes:{},isActive:!1}},mounted:function(){this.refresh()},methods:{sortBy:function(t){this.projects.sort((function(e,a){return e[t]<a[t]?-1:1}))},refresh:function(){var t=this;o["a"].listar().then((function(e){t.projects=e})).catch((function(t){return t}))}}},l=c,u=(a("9c6a"),a("2877")),v=a("6544"),d=a.n(v),m=a("8336"),f=a("b0af"),p=a("a523"),h=a("ce7e"),x=a("0e8f"),b=a("132d"),_=a("a722"),g=(a("a9e3"),a("f2e7")),k=a("90a2"),y=a("58df"),C=a("80d2"),V=Object(y["a"])(g["a"]).extend({name:"VLazy",directives:{intersect:k["a"]},props:{minHeight:[Number,String],options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},tag:{type:String,default:"div"},transition:{type:String,default:"fade-transition"}},computed:{styles:function(){return{minHeight:parseInt(this.minHeight)?Object(C["f"])(this.minHeight):this.minHeight}}},methods:{genContent:function(){var t=Object(C["n"])(this);if(!this.transition)return t;var e=[];return this.isActive&&e.push(t),this.$createElement("transition",{props:{name:this.transition}},e)},onObserve:function(t,e,a){this.isActive||(this.isActive=a)}},render:function(t){return t(this.tag,{staticClass:"v-lazy",attrs:this.$attrs,directives:[{name:"intersect",value:{handler:this.onObserve,options:this.options}}],on:this.$listeners,style:this.styles},[this.genContent()])}}),w=a("6b53"),j=Object(u["a"])(l,n,r,!1,null,null,null),A=j.exports;d()(j,{VBtn:m["a"],VCard:f["a"],VContainer:p["a"],VDivider:h["a"],VFlex:x["a"],VIcon:b["a"],VLayout:_["a"],VLazy:V,VResponsive:w["a"]});var D=a("f321"),O={components:{DashCompleto:A,NavDrag:D["a"]}},I=O,L=a("7496"),B=Object(u["a"])(I,i,s,!1,null,null,null);e["default"]=B.exports;d()(B,{VApp:L["a"]})},7131:function(t,e,a){},"9c6a":function(t,e,a){"use strict";var i=a("7131"),s=a.n(i);s.a},f321:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-snackbar",{attrs:{timeout:4e3,top:"",color:t.color},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[a("span",[t._v(t._s(t.texto))]),a("v-btn",{attrs:{text:"",color:"white",flat:""},on:{click:function(e){t.snackbar=!1}}},[t._v("Close")])],1),a("v-app-bar",{attrs:{app:"",color:"purple darken-4",dark:"",height:"80"}},[a("v-app-bar-nav-icon",{attrs:{color:"white"},on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),a("v-icon",{attrs:{xLarge:"",color:"white",left:""}},[t._v("mdi-school")]),a("router-link",{attrs:{router:"",to:"/"}},[a("v-toolbar-title",{staticClass:"headline white--text hidden-md-and-down"},[t._v("Tutoria")])],1)],1),a("v-navigation-drawer",{attrs:{app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",{staticClass:"my-12",attrs:{flat:""}},[t._l(t.items,(function(e){return a("v-list-item",{key:e.text,staticClass:"my-4",attrs:{to:e.route,link:""}},[a("v-list-item-action",[a("v-icon",{staticClass:"black--text",class:e.color},[t._v(t._s(e.icon))])],1),a("v-list-item-content",[a("v-list-item-title",{class:e.color},[t._v(t._s(e.text))])],1)],1)})),t._l(1,(function(e){return a("v-list-item",{key:e.title,attrs:{link:""},on:{click:function(e){return t.logout()}}},[a("v-list-item-action",[a("v-icon",{staticClass:"red--text"},[t._v("mdi-logout")])],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"red--text"},[t._v("Logout")])],1)],1)}))],2)],1)],1)},s=[],n=(a("4160"),a("9911"),a("159b"),a("bcb3")),r={name:"NavDrag",data:function(){return{drawer:null,snackbar:!1,fields:{},color:"",texto:"",link:"",items:[{icon:"mdi-face-profile",text:"Administrativa",route:"/admin/administrativa"},{icon:"mdi-plus-circle",text:"Tutorias",route:"/admin"},{icon:"mdi-clock",text:"Tutorias agendadas",route:"/admin/agendados"},{icon:"mdi-face",text:"Tutores",route:"/admin/tutores"},{icon:"mdi-marker-check",text:"Tutorias completas",route:"/admin/completo"}]}},mounted:function(){this.pickUser()},methods:{logout:function(){this.$session.destroy(),localStorage.removeItem("token"),this.$router.push("/")},pickUser:function(){var t=this;n["a"].listarUsers().then((function(e){var a=JSON.parse(localStorage.getItem("user"));e.forEach((function(e){a._id===e._id&&(t.fields=e)})),t.link=t.fields.profile})).catch((function(t){return t}))}}},o=r,c=a("2877"),l=a("6544"),u=a.n(l),v=a("40dc"),d=a("5bc1"),m=a("8336"),f=a("132d"),p=a("8860"),h=a("da13"),x=a("1800"),b=a("5d23"),_=a("f774"),g=a("2db4"),k=a("2a7f"),y=Object(c["a"])(o,i,s,!1,null,null,null);e["a"]=y.exports;u()(y,{VAppBar:v["a"],VAppBarNavIcon:d["a"],VBtn:m["a"],VIcon:f["a"],VList:p["a"],VListItem:h["a"],VListItemAction:x["a"],VListItemContent:b["a"],VListItemTitle:b["b"],VNavigationDrawer:_["a"],VSnackbar:g["a"],VToolbarTitle:k["a"]})}}]);
//# sourceMappingURL=chunk-5badee68.3c52ecbe.js.map