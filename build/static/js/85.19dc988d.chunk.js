"use strict";(self.webpackChunkdalilimob_dashboard=self.webpackChunkdalilimob_dashboard||[]).push([[85],{1751:function(e,l,a){var i=a(1413),t=a(885),d=a(2791),s=a(9476),n=a(6871),r=a(4671),o=a(7308),c=a(9334),m=a(9680),p=a(6435),f=a(3101),u=a(1670),x=a(2294),y=a(2407),b=a(1798),h=a(3592),_=a(1241),g=a(5697),v=a(1822),w=(a(5657),a(3329)),N=function e(){var l=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],i=arguments.length>3?arguments[3]:void 0,t=arguments.length>4?arguments[4]:void 0,d=arguments.length>5?arguments[5]:void 0;if(t){var n=l&&l.form_field_type;!n||"SELECT"!==n.value&&"COMPLEXSELECT"!==n.value?a[3]={type:"none"}:a[3]={type:"select",label:"options",creatable:!0,field:"field_options",name:"field_options",isMulti:!0,placeholder:"enter your options",xl:6,id:"field_options"}}return a.map((function(a){return"none"==a.type?null:"title"==a.type?(0,w.jsxs)(s.JX,{md:12,className:"d-flex gap-3 align-items-center mb-3 ",children:[(0,w.jsx)("p",{className:"title_details",children:a.label}),(0,w.jsx)("p",{className:"divider mx-4"})]}):a.type?"imageInput"==a.type?(0,w.jsx)(s.JX,{xl:a.xl,children:(0,w.jsx)(c.Z,{src:(0,v.u)(l,a.field),name:a.name})}):"input"==a.type?(0,w.jsx)(s.JX,{xl:a.xl,children:(0,w.jsx)(m.Z,{label:a.label,value:(0,v.u)(l,a.field),name:a.name,field:a.field,placeholder:a.placeholder,className:a.className,type:a.typeInput,id:"id_form_".concat(a.id),changed:i})}):"textarea"==a.type?(0,w.jsx)(s.JX,{xl:a.xl,children:(0,w.jsx)(p.Z,{label:a.label,value:(0,v.u)(l,a.field),name:a.name,field:a.field,placeholder:a.placeholder,className:a.className,id:"id_form_".concat(a.id),changed:i})}):"address"==a.type?(0,w.jsx)(s.JX,{xl:a.xl,children:(0,w.jsx)(f.Z,{id:a.id,value:(0,v.u)(l,a.field),field:a.field,label:a.label,name:a.name,changed:i})}):"gps"==a.type?(0,w.jsx)(s.JX,{xl:a.xl,children:(0,w.jsx)(u.Z,{id:a.id,value:(0,v.u)(l,a.field),field:a.field,label:a.label,name:a.name,changed:i})}):"button"==a.type?(0,w.jsxs)(s.JX,{xl:a.xl,children:[d?(0,w.jsx)("div",{children:"loading "}):null,(0,w.jsx)(x.Z,{className:a.className,text:a.text})]}):"switch"==a.type?(0,w.jsx)(s.JX,{xl:a.xl,children:(0,w.jsx)(o.Z,{id:a.id,value:(0,v.u)(l,a.field),checkedOn:a.checkedOn,on:a.on,off:a.off,label:a.label,name:a.name,field:a.field,changed:i})}):"select"==a.type?(0,w.jsx)(s.JX,{xl:a.xl,className:a.className,children:"store"==a.typeSelect?(0,w.jsx)(h.Z,{id:a.id,value:(0,v.u)(l,a.field),field:a.field,field_deleted:a.field_deleted,options:a.options,label:a.label,name:a.name,isMulti:a.isMulti,creatable:a.creatable,changed:i}):(0,w.jsx)(y.Z,{id:a.id,value:(0,v.u)(l,a.field),options:a.options,field:a.field,field_deleted:a.field_deleted,label:a.label,name:a.name,creatable:a.creatable,isMulti:a.isMulti,changed:i})}):"select_complex"==a.type?(0,w.jsx)(s.JX,{xl:a.xl,className:a.className+" row align-items-center",children:(0,w.jsx)(b.Z,{id:a.id,value:(0,v.u)(l,a.field),field:a.field,options:a.options,label:a.label,name:a.name,isMulti:a.isMulti,creatable:a.creatable,changed:i})}):"map"==a.type?(0,w.jsx)(s.JX,{xl:a.xl,children:(0,w.jsx)(_.Z,{typeMap:a.typeMap,lat:(0,v.u)(l,a.field_lat),lng:(0,v.u)(l,a.field_lng),radius:(0,v.u)(l,a.field_radius),field_radius:a.field_radius,field_lat:a.field_lat,field_lng:a.field_lng,changed:i})}):void 0:(0,w.jsx)(s.JX,{xl:a.xl,children:(0,w.jsx)(s.X2,{className:a.className,children:e(l,a.fields)})})}))};l.Z=function(e){var l=e.structure,a=e.submit,o=void 0===a?function(){}:a,c=e.restricted,m=e.loading,p=(0,r.$)("common").t,f=((0,n.TH)(),(0,d.useState)({})),u=(0,t.Z)(f,2),x=u[0],y=u[1];(0,d.useEffect)((function(){console.log("data query 3 ",x)}),[x]);return(0,w.jsxs)("div",{className:"form ".concat(l.className),children:[(0,w.jsx)("h4",{className:"title",children:p(l.title)}),(0,w.jsx)(s.l0,{onSubmit:function(e){e.preventDefault(),o(x)},children:(0,w.jsx)(s.X2,{gap:2,className:"justify-content-between",children:m?(0,w.jsx)(g.Z,{}):N(x,l.fields,y,(function(e,l){y((0,i.Z)((0,i.Z)({},x),(0,v.p)(l,e)))}),c,m)})})]})}},2263:function(e,l,a){a.r(l),a.d(l,{default:function(){return m}});a(2791);var i=a(4671),t=a(6871),d=a(9434),s=a(9129),n=a(1751),r=a(6696),o=a.p+"static/media/bg.0c192bea0f18ea27c1a6.png",c=a(3329),m=function(){var e=(0,i.$)("commmon").t,l=(0,t.TH)(),a=(0,d.I0)(),m=function(e){a((0,s.x4)(e))};return(0,c.jsx)("div",{className:"login",style:{backgroundImage:"url(".concat(o,")")},children:(0,c.jsxs)("div",{className:"login_wrapper m-auto",children:[(0,c.jsx)("h4",{className:"login_title mb-2",children:e("welcome")}),(0,c.jsx)("p",{className:"login_desc mb-2",children:e("admin login")}),(0,c.jsx)(n.Z,{onSubmit:m,structure:r.Z[l.pathname.slice(1).split("/")[0]],submit:m})]})})}},6696:function(e,l){l.Z={login:{type:"row",fields:[{type:"input",label:"username",name:"admin_username",typeInput:"text",className:"rounded-login mb-2",field:"admin_username",placeholder:"enter your username",xl:12,id:"admin_username"},{type:"input",label:"password",typeInput:"password",field:"admin_password",name:"admin_password",className:"rounded-login m-2",placeholder:"enter your password",xl:12,id:"admin_password"},{xl:12,className:"px-3 my-4",fields:[{type:"button",className:"w-100 btn--primary",text:"save changes"}]}]},region:{type:"row",className:"w-100 bg-white  shadow  rounded p-3",fields:[{type:"input",label:"region name",name:"region_name",typeInput:"text",field:"region_name",placeholder:"enter your region name",xl:6,id:"region_name"},{type:"select",label:"wilayas",typeSelect:"store",field:"wilayas",field_deleted:"deleted_wilayas",name:"wilayas",isMulti:!0,className:"z-index-10000",options:{key:"wilayas",where:"wilaya",label:"wilaya_name",value:"wilaya_id"},placeholder:"enter your wilayas",xl:6,id:"wilayas"},{type:"map",label:"map",typeMap:"range",field_lat:"lat",field_lng:"lng",field_radius:"radius",field:"map",name:"map",xl:12,id:"map"},{xl:12,className:"px-3 my-4",fields:[{type:"button",className:"w-100 btn--primary",text:"save changes"}]}]},form_field:{type:"row",className:"w-100 bg-white  shadow  rounded p-3",fields:[{type:"input",label:"field name",name:"form_field_name",typeInput:"text",field:"form_field_name",placeholder:"enter the name",xl:6,id:"field_name"},{type:"select",label:"group name",typeSelect:"store",creatable:!0,field:"field_group",name:"field_group",options:{key:"field_groups",where:"field_group",value:"field_group_id",label:"field_group_name"},placeholder:"enter your wilayas",xl:6,id:"groups"},{type:"select",label:"type field",field:"form_field_type",name:"form_field_type",options:{options:[{value:"NUMBER",label:"number"},{value:"BOOLEAN",label:"true/false"},{value:"SELECT",label:"select"},{value:"COMPLEXSELECT",label:"select complex"},{value:"ADDRESS",label:"address"},{value:"GPS",label:"coordonn\xe9e gps"},{value:"STRING",label:"text"},{value:"TEXT",label:"textarea"},{value:"DATE",label:"date"}]},placeholder:"enter your wilayas",xl:6,id:"type_fields"},{type:"none"},{xl:12,className:"px-3 my-4",fields:[{type:"button",className:"w-100 btn--primary",text:"save changes"}]}]},nav:{type:"row",className:"w-100 bg-white  shadow  rounded p-3",fields:[{type:"select",label:"filter navigation",typeSelect:"store",field:"form_fields_nav",name:"wilayas",className:"z-index-10000",options:{key:"form_fields_nav",where:"form_field",label:"form_field_name",value:"form_field_id"},placeholder:"enter your form field",xl:6,id:"form_fields"},{xl:12,className:"px-3 my-4",fields:[{type:"button",className:"w-100 btn--primary",text:"save changes"}]}]}}}}]);
//# sourceMappingURL=85.19dc988d.chunk.js.map