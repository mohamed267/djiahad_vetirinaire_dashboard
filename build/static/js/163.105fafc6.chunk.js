(self.webpackChunkdalilimob_dashboard=self.webpackChunkdalilimob_dashboard||[]).push([[163],{2865:function(e,l,a){"use strict";a.d(l,{Z:function(){return v}});a(2791);var i=a(3359),t=a(8357),n=a(4671),s=a(5987),d=a(1413),r=a(3329),o=function(e,l){if("search"==e.typeField){var a=l.row;if(a=e.in?a[e.in]:a,e.where)return(a=a&&a.filter((function(l){return Object.keys(e.where).forEach((function(l){if(a[l]==e.where[l])return!1})),!0})))&&a[0]&&a[0][e.field]?a[0][e.field]:""}return""},c=function(e){var l=e.structure,a=e.params;return(0,r.jsx)("div",{children:l&&l.fields&&l.fields.map((function(e,l){return(0,r.jsx)("div",{children:(0,r.jsx)("span",{children:o(e,a)})},l)}))})},u=a(4942),f=a(3504),m=a(6871),p=a(1822),x=function(e,l){var a={};return l&&Object.keys(l).map((function(i){a[i]=(0,p.u)(e,l[i])})),a},h=function(e){var l=e.structure,a=e.params,i=(0,m.TH)();return(0,r.jsx)("div",{className:"composedLinedContainer",children:l&&l.fields&&l.fields.map((function(e){var l;return"actionButton"==e.type?(0,r.jsx)(f.rU,{to:i.pathname?i.pathname:"",state:(l={},(0,u.Z)(l,e.field,(0,p.u)(a.row,e.field)),(0,u.Z)(l,"for",e.for),l),children:(0,r.jsx)("button",{children:(0,r.jsx)("i",{className:e.class})})}):"linkButton"==e.type?(0,r.jsx)(f.rU,{to:"".concat(e.link,"/").concat((0,p.u)(a.row,e.field)),state:x(a.row,e.state),children:(0,r.jsx)("button",{children:(0,r.jsx)("i",{className:e.class})})}):void 0}))})},y=a(5287),_=["field"],b={composedTopBottom:c,composedLined:h,date:function(e){var l=e.structure,a=e.params;return(0,r.jsx)(r.Fragment,{children:(0,y.s)((0,p.u)(a.row,l.field))})}},g=function(e,l){return(e&&e.map((function(e,a){var i="";if(e.headerName.map((function(e){i+="/"+l(e)})),i=i.slice(1),"string"==typeof e.field)return(0,d.Z)((0,d.Z)({},e),{},{headerName:i});var t=b[e.component],n=(e.field,(0,s.Z)(e,_));return(0,d.Z)((0,d.Z)({renderCell:function(l){return(0,r.jsx)(t,{structure:e.field,params:l})},field:a},n),{},{headerName:i})}))).filter((function(e){return void 0!=e}))};var v=function(e){var l=e.structure,a=(e.row,e.data),s=(e.direct,e.dataKey),d=e.pageChanged,o=(e.dataCode,(0,n.$)("common").t),c=g(l.columns,o);return(0,r.jsx)("div",{className:"datatable",children:(0,r.jsx)(i._,{localeText:t.S.components.MuiDataGrid.defaultProps.localeText,headerClassName:"header-class",paginationMode:"server",rows:a[s],columns:c,pageSize:9,rowCount:a.pages,getRowId:function(e){return e[l.keyId]},onPageChange:function(e){d(e+1)},checkboxSelection:!0,disableSelectionOnClick:!0})})}},9041:function(e,l,a){"use strict";var i=a(1413),t=a(885),n=a(2791),s=a(9476),d=a(6871),r=a(4671),o=a(7308),c=a(9334),u=a(9680),f=a(6435),m=a(3101),p=a(1670),x=a(2294),h=a(2407),y=a(1798),_=a(3592),b=a(1241),g=a(5697),v=a(1822),j=(a(5657),a(3329)),N=function e(){var l=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],i=arguments.length>3?arguments[3]:void 0,t=arguments.length>4?arguments[4]:void 0,n=arguments.length>5?arguments[5]:void 0;if(t){var d=l&&l.form_field_type;!d||"SELECT"!==d.value&&"COMPLEXSELECT"!==d.value?a[3]={type:"none"}:a[3]={type:"select",label:"options",creatable:!0,field:"field_options",name:"field_options",isMulti:!0,placeholder:"enter your options",xl:6,id:"field_options"}}return a.map((function(a){return"none"==a.type?null:"title"==a.type?(0,j.jsxs)(s.JX,{md:12,className:"d-flex gap-3 align-items-center mb-3 ",children:[(0,j.jsx)("p",{className:"title_details",children:a.label}),(0,j.jsx)("p",{className:"divider mx-4"})]}):a.type?"imageInput"==a.type?(0,j.jsx)(s.JX,{xl:a.xl,children:(0,j.jsx)(c.Z,{src:(0,v.u)(l,a.field),name:a.name})}):"input"==a.type?(0,j.jsx)(s.JX,{xl:a.xl,children:(0,j.jsx)(u.Z,{label:a.label,value:(0,v.u)(l,a.field),name:a.name,field:a.field,placeholder:a.placeholder,className:a.className,type:a.typeInput,id:"id_form_".concat(a.id),changed:i})}):"textarea"==a.type?(0,j.jsx)(s.JX,{xl:a.xl,children:(0,j.jsx)(f.Z,{label:a.label,value:(0,v.u)(l,a.field),name:a.name,field:a.field,placeholder:a.placeholder,className:a.className,id:"id_form_".concat(a.id),changed:i})}):"address"==a.type?(0,j.jsx)(s.JX,{xl:a.xl,children:(0,j.jsx)(m.Z,{id:a.id,value:(0,v.u)(l,a.field),field:a.field,label:a.label,name:a.name,changed:i})}):"gps"==a.type?(0,j.jsx)(s.JX,{xl:a.xl,children:(0,j.jsx)(p.Z,{id:a.id,value:(0,v.u)(l,a.field),field:a.field,label:a.label,name:a.name,changed:i})}):"button"==a.type?(0,j.jsxs)(s.JX,{xl:a.xl,children:[n?(0,j.jsx)("div",{children:"loading "}):null,(0,j.jsx)(x.Z,{className:a.className,text:a.text})]}):"switch"==a.type?(0,j.jsx)(s.JX,{xl:a.xl,children:(0,j.jsx)(o.Z,{id:a.id,value:(0,v.u)(l,a.field),checkedOn:a.checkedOn,on:a.on,off:a.off,label:a.label,name:a.name,field:a.field,changed:i})}):"select"==a.type?(0,j.jsx)(s.JX,{xl:a.xl,className:a.className,children:"store"==a.typeSelect?(0,j.jsx)(_.Z,{id:a.id,value:(0,v.u)(l,a.field),field:a.field,field_deleted:a.field_deleted,options:a.options,label:a.label,name:a.name,isMulti:a.isMulti,creatable:a.creatable,changed:i}):(0,j.jsx)(h.Z,{id:a.id,value:(0,v.u)(l,a.field),options:a.options,field:a.field,field_deleted:a.field_deleted,label:a.label,name:a.name,creatable:a.creatable,isMulti:a.isMulti,changed:i})}):"select_complex"==a.type?(0,j.jsx)(s.JX,{xl:a.xl,className:a.className+" row align-items-center",children:(0,j.jsx)(y.Z,{id:a.id,value:(0,v.u)(l,a.field),field:a.field,options:a.options,label:a.label,name:a.name,isMulti:a.isMulti,creatable:a.creatable,changed:i})}):"map"==a.type?(0,j.jsx)(s.JX,{xl:a.xl,children:(0,j.jsx)(b.Z,{typeMap:a.typeMap,lat:(0,v.u)(l,a.field_lat),lng:(0,v.u)(l,a.field_lng),radius:(0,v.u)(l,a.field_radius),field_radius:a.field_radius,field_lat:a.field_lat,field_lng:a.field_lng,changed:i})}):void 0:(0,j.jsx)(s.JX,{xl:a.xl,children:(0,j.jsx)(s.X2,{className:a.className,children:e(l,a.fields)})})}))};l.Z=function(e){var l=e.structure,a=e.data,o=void 0===a?{}:a,c=e.submit,u=void 0===c?function(){}:c,f=e.restricted,m=e.loading,p=(0,r.$)("common").t,x=((0,d.TH)(),(0,n.useState)(o)),h=(0,t.Z)(x,2),y=h[0],_=h[1];(0,n.useEffect)((function(){o&&_(o)}),[o]),(0,n.useEffect)((function(){console.log("data query 3 ",y)}),[y]);return(0,j.jsxs)("div",{className:"form ".concat(l.className),children:[(0,j.jsx)("h4",{className:"title",children:p(l.title)}),(0,j.jsx)(s.l0,{onSubmit:function(e){e.preventDefault(),u(y)},children:(0,j.jsx)(s.X2,{gap:2,className:"justify-content-between",children:m?(0,j.jsx)(g.Z,{}):N(y,l.fields,_,(function(e,l){console.log("handled ",y),_((0,i.Z)((0,i.Z)({},y),(0,v.p)(l,e)))}),f,m)})})]})}},1751:function(e,l,a){"use strict";var i=a(1413),t=a(885),n=a(2791),s=a(9476),d=a(6871),r=a(4671),o=a(7308),c=a(9334),u=a(9680),f=a(6435),m=a(3101),p=a(1670),x=a(2294),h=a(2407),y=a(1798),_=a(3592),b=a(1241),g=a(5697),v=a(1822),j=(a(5657),a(3329)),N=function e(){var l=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],i=arguments.length>3?arguments[3]:void 0,t=arguments.length>4?arguments[4]:void 0,n=arguments.length>5?arguments[5]:void 0;if(t){var d=l&&l.form_field_type;!d||"SELECT"!==d.value&&"COMPLEXSELECT"!==d.value?a[3]={type:"none"}:a[3]={type:"select",label:"options",creatable:!0,field:"field_options",name:"field_options",isMulti:!0,placeholder:"enter your options",xl:6,id:"field_options"}}return a.map((function(a){return"none"==a.type?null:"title"==a.type?(0,j.jsxs)(s.JX,{md:12,className:"d-flex gap-3 align-items-center mb-3 ",children:[(0,j.jsx)("p",{className:"title_details",children:a.label}),(0,j.jsx)("p",{className:"divider mx-4"})]}):a.type?"imageInput"==a.type?(0,j.jsx)(s.JX,{xl:a.xl,children:(0,j.jsx)(c.Z,{src:(0,v.u)(l,a.field),name:a.name})}):"input"==a.type?(0,j.jsx)(s.JX,{xl:a.xl,children:(0,j.jsx)(u.Z,{label:a.label,value:(0,v.u)(l,a.field),name:a.name,field:a.field,placeholder:a.placeholder,className:a.className,type:a.typeInput,id:"id_form_".concat(a.id),changed:i})}):"textarea"==a.type?(0,j.jsx)(s.JX,{xl:a.xl,children:(0,j.jsx)(f.Z,{label:a.label,value:(0,v.u)(l,a.field),name:a.name,field:a.field,placeholder:a.placeholder,className:a.className,id:"id_form_".concat(a.id),changed:i})}):"address"==a.type?(0,j.jsx)(s.JX,{xl:a.xl,children:(0,j.jsx)(m.Z,{id:a.id,value:(0,v.u)(l,a.field),field:a.field,label:a.label,name:a.name,changed:i})}):"gps"==a.type?(0,j.jsx)(s.JX,{xl:a.xl,children:(0,j.jsx)(p.Z,{id:a.id,value:(0,v.u)(l,a.field),field:a.field,label:a.label,name:a.name,changed:i})}):"button"==a.type?(0,j.jsxs)(s.JX,{xl:a.xl,children:[n?(0,j.jsx)("div",{children:"loading "}):null,(0,j.jsx)(x.Z,{className:a.className,text:a.text})]}):"switch"==a.type?(0,j.jsx)(s.JX,{xl:a.xl,children:(0,j.jsx)(o.Z,{id:a.id,value:(0,v.u)(l,a.field),checkedOn:a.checkedOn,on:a.on,off:a.off,label:a.label,name:a.name,field:a.field,changed:i})}):"select"==a.type?(0,j.jsx)(s.JX,{xl:a.xl,className:a.className,children:"store"==a.typeSelect?(0,j.jsx)(_.Z,{id:a.id,value:(0,v.u)(l,a.field),field:a.field,field_deleted:a.field_deleted,options:a.options,label:a.label,name:a.name,isMulti:a.isMulti,creatable:a.creatable,changed:i}):(0,j.jsx)(h.Z,{id:a.id,value:(0,v.u)(l,a.field),options:a.options,field:a.field,field_deleted:a.field_deleted,label:a.label,name:a.name,creatable:a.creatable,isMulti:a.isMulti,changed:i})}):"select_complex"==a.type?(0,j.jsx)(s.JX,{xl:a.xl,className:a.className+" row align-items-center",children:(0,j.jsx)(y.Z,{id:a.id,value:(0,v.u)(l,a.field),field:a.field,options:a.options,label:a.label,name:a.name,isMulti:a.isMulti,creatable:a.creatable,changed:i})}):"map"==a.type?(0,j.jsx)(s.JX,{xl:a.xl,children:(0,j.jsx)(b.Z,{typeMap:a.typeMap,lat:(0,v.u)(l,a.field_lat),lng:(0,v.u)(l,a.field_lng),radius:(0,v.u)(l,a.field_radius),field_radius:a.field_radius,field_lat:a.field_lat,field_lng:a.field_lng,changed:i})}):void 0:(0,j.jsx)(s.JX,{xl:a.xl,children:(0,j.jsx)(s.X2,{className:a.className,children:e(l,a.fields)})})}))};l.Z=function(e){var l=e.structure,a=e.submit,o=void 0===a?function(){}:a,c=e.restricted,u=e.loading,f=(0,r.$)("common").t,m=((0,d.TH)(),(0,n.useState)({})),p=(0,t.Z)(m,2),x=p[0],h=p[1];(0,n.useEffect)((function(){console.log("data query 3 ",x)}),[x]);return(0,j.jsxs)("div",{className:"form ".concat(l.className),children:[(0,j.jsx)("h4",{className:"title",children:f(l.title)}),(0,j.jsx)(s.l0,{onSubmit:function(e){e.preventDefault(),o(x)},children:(0,j.jsx)(s.X2,{gap:2,className:"justify-content-between",children:u?(0,j.jsx)(g.Z,{}):N(x,l.fields,h,(function(e,l){h((0,i.Z)((0,i.Z)({},x),(0,v.p)(l,e)))}),c,u)})})]})}},7788:function(e,l,a){"use strict";var i=a(4671),t=a(1822),n=a(3329),s=function(e){var l=e.data,a=e.structure,s=(0,i.$)("common").t;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h1",{className:"title",children:s(a.name)}),(0,n.jsxs)("ul",{className:"items",children:[a&&a.fields&&a.fields.map((function(e){if("header"==e.type)return(0,n.jsxs)("li",{className:"item",children:[(0,n.jsx)("div",{children:(0,n.jsx)("img",{src:(0,t.u)(l,e.img.field),alt:"",className:"itemImg"})}),(0,n.jsxs)("div",{className:"details",children:[(0,n.jsx)("p",{className:"top",children:(0,t.u)(l,e.top.field)}),(0,n.jsx)("p",{className:"bottom",children:(0,t.u)(l,e.bottom.field)})]})]})})),(0,n.jsxs)("li",{className:"item",children:[(0,n.jsx)("p",{className:"title",children:s("status")}),(0,n.jsx)("div",{className:"details",children:(0,n.jsx)("p",{className:"status",children:s("activated")})})]})]})]})},d=a(9041),r=a(2865);d.Z,r.Z},6431:function(e,l,a){"use strict";a.r(l);var i=a(1413),t=(a(2791),a(6871)),n=a(9434),s=a(8058),d=a(6475),r=(a(7788),a(5602)),o=a(1751),c=a(6696),u=(a(8388),a(3329));l.default=function(){var e=(0,n.I0)(),l=(0,t.TH)(),a=(0,n.v9)((function(e){return e.form_field.details.loading})),f=(0,n.v9)((function(e){return e.form_field.details.created})),m=(0,n.v9)((function(e){return e.nav.opened}));return console.log("fffd ",c.Z[l.pathname.slice(1).split("/")[0]]),(0,u.jsxs)("div",{className:"form_field",children:[f&&(0,u.jsx)(t.Fg,{to:"/form_field"}),(0,u.jsx)(s.Z,{}),(0,u.jsxs)("div",{className:"form_fieldContainer ".concat(m?"nav-opened":"nav-closed"),children:[(0,u.jsx)(d.Z,{}),(0,u.jsx)("div",{className:"mainContainer",children:(0,u.jsx)(o.Z,{structure:c.Z[l.pathname.slice(1).split("/")[0]],submit:function(l){e((0,r.WP)((0,i.Z)((0,i.Z)({},l),{},{field_group_name:l.field_group.value?l.field_group.value:l.field_group.field_group_name,form_field_type:l.form_field_type?l.form_field_type.value:"",field_options:l.field_options?l.field_options.map((function(e){return e.label})):null})))},restricted:!0,loading:a})})]})]})}},6696:function(e,l){"use strict";l.Z={login:{type:"row",fields:[{type:"input",label:"username",name:"admin_username",typeInput:"text",className:"rounded-login mb-2",field:"admin_username",placeholder:"enter your username",xl:12,id:"admin_username"},{type:"input",label:"password",typeInput:"password",field:"admin_password",name:"admin_password",className:"rounded-login m-2",placeholder:"enter your password",xl:12,id:"admin_password"},{xl:12,className:"px-3 my-4",fields:[{type:"button",className:"w-100 btn--primary",text:"save changes"}]}]},region:{type:"row",className:"w-100 bg-white  shadow  rounded p-3",fields:[{type:"input",label:"region name",name:"region_name",typeInput:"text",field:"region_name",placeholder:"enter your region name",xl:6,id:"region_name"},{type:"select",label:"wilayas",typeSelect:"store",field:"wilayas",field_deleted:"deleted_wilayas",name:"wilayas",isMulti:!0,className:"z-index-10000",options:{key:"wilayas",where:"wilaya",label:"wilaya_name",value:"wilaya_id"},placeholder:"enter your wilayas",xl:6,id:"wilayas"},{type:"map",label:"map",typeMap:"range",field_lat:"lat",field_lng:"lng",field_radius:"radius",field:"map",name:"map",xl:12,id:"map"},{xl:12,className:"px-3 my-4",fields:[{type:"button",className:"w-100 btn--primary",text:"save changes"}]}]},form_field:{type:"row",className:"w-100 bg-white  shadow  rounded p-3",fields:[{type:"input",label:"field name",name:"form_field_name",typeInput:"text",field:"form_field_name",placeholder:"enter the name",xl:6,id:"field_name"},{type:"select",label:"group name",typeSelect:"store",creatable:!0,field:"field_group",name:"field_group",options:{key:"field_groups",where:"field_group",value:"field_group_id",label:"field_group_name"},placeholder:"enter your wilayas",xl:6,id:"groups"},{type:"select",label:"type field",field:"form_field_type",name:"form_field_type",options:{options:[{value:"NUMBER",label:"number"},{value:"BOOLEAN",label:"true/false"},{value:"SELECT",label:"select"},{value:"COMPLEXSELECT",label:"select complex"},{value:"ADDRESS",label:"address"},{value:"GPS",label:"coordonn\xe9e gps"},{value:"STRING",label:"text"},{value:"TEXT",label:"textarea"},{value:"DATE",label:"date"}]},placeholder:"enter your wilayas",xl:6,id:"type_fields"},{type:"none"},{xl:12,className:"px-3 my-4",fields:[{type:"button",className:"w-100 btn--primary",text:"save changes"}]}]},nav:{type:"row",className:"w-100 bg-white  shadow  rounded p-3",fields:[{type:"select",label:"filter navigation",typeSelect:"store",field:"form_fields_nav",name:"wilayas",className:"z-index-10000",options:{key:"form_fields_nav",where:"form_field",label:"form_field_name",value:"form_field_id"},placeholder:"enter your form field",xl:6,id:"form_fields"},{xl:12,className:"px-3 my-4",fields:[{type:"button",className:"w-100 btn--primary",text:"save changes"}]}]}}},5287:function(e,l){l.s=function(e){console.log("date is ",e);return new Date(e).toLocaleDateString(void 0,{weekday:"long",year:"numeric",month:"long",day:"numeric"})}},8388:function(){}}]);
//# sourceMappingURL=163.105fafc6.chunk.js.map