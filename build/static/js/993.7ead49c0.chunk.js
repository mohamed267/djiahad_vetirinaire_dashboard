(self.webpackChunkdjiahad_vetirinaire_dashboard=self.webpackChunkdjiahad_vetirinaire_dashboard||[]).push([[993],{2865:function(e,t,n){"use strict";n.d(t,{Z:function(){return k}});n(2791);var r=n(950),i=n(8357),a=n(4671),o=n(5987),d=n(1413),s=n(3329),l=function(e,t){if("search"==e.typeField){var n=t.row;if(n=e.in?n[e.in]:n,e.where)return(n=n&&n.filter((function(t){return Object.keys(e.where).forEach((function(t){if(n[t]==e.where[t])return!1})),!0})))&&n[0]&&n[0][e.field]?n[0][e.field]:""}return""},c=function(e){var t=e.structure,n=e.params;return(0,s.jsx)("div",{children:t&&t.fields&&t.fields.map((function(e,t){return(0,s.jsx)("div",{children:(0,s.jsx)("span",{children:l(e,n)})},t)}))})},f=n(4942),u=n(6871),m=n(3504),h=n(1822),p=function(e,t){var n={};return t&&Object.keys(t).map((function(r){n[r]=(0,h.u)(e,t[r])})),n},v=function(e){var t=e.structure,n=e.params,r=(0,u.TH)();return(0,s.jsx)("div",{className:"composedLinedContainer",children:t&&t.fields&&t.fields.map((function(e){var t;return"actionButton"==e.type?(0,s.jsx)(m.rU,{to:r.pathname?r.pathname:"",state:(t={},(0,f.Z)(t,e.field,(0,h.u)(n.row,e.field)),(0,f.Z)(t,"for",e.for),t),children:(0,s.jsx)("button",{children:(0,s.jsx)("i",{className:e.class})})}):"linkButton"==e.type?(0,s.jsx)(m.rU,{to:"".concat(e.link,"/").concat((0,h.u)(n.row,e.field)),state:p(n.row,e.state),children:(0,s.jsx)("button",{children:(0,s.jsx)("i",{className:e.class})})}):void 0}))})},_=n(5287),j=["field"],x={composedTopBottom:c,composedLined:v,date:function(e){var t=e.structure,n=e.params;return(0,s.jsx)(s.Fragment,{children:(0,_.s)((0,h.u)(n.row,t.field))})}},y=function(e,t){return(e&&e.map((function(e,n){var r="";if(e.headerName.map((function(e){r+="/"+t(e)})),r=r.slice(1),"string"==typeof e.field)return(0,d.Z)((0,d.Z)({},e),{},{headerName:r});var i=x[e.component],a=(e.field,(0,o.Z)(e,j));return(0,d.Z)((0,d.Z)({renderCell:function(t){return(0,s.jsx)(i,{structure:e.field,params:t})},field:n},a),{},{headerName:r})}))).filter((function(e){return void 0!=e}))};var k=function(e){var t=e.structure,n=(e.row,e.data),o=(e.direct,e.dataKey),d=e.pageChanged,l=(e.dataCode,(0,a.$)("common").t),c=y(t.columns,l);return(0,s.jsx)("div",{className:"datatable",children:(0,s.jsx)(r._,{localeText:i.S.components.MuiDataGrid.defaultProps.localeText,headerClassName:"header-class",paginationMode:"server",rows:n[o],columns:c,pageSize:9,rowCount:n.pages,getRowId:function(e){return e[t.keyId]},onPageChange:function(e){d(e+1)},checkboxSelection:!0,disableSelectionOnClick:!0})})}},5697:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(6373),i=n(3329),a=function(){return(0,i.jsx)("div",{className:"loader",children:(0,i.jsx)(r._P,{ariaLabel:"loading-indicator"})})}},59:function(e,t,n){"use strict";n.r(t);var r=n(885),i=n(2791),a=n(6871),o=n(9434),d=(n(9731),n(8058)),s=n(6475),l=n(2865),c=n(5697),f=(n(1218),n(3879)),u=n(5602),m=n(3329);t.default=function(){var e=(0,i.useState)(""),t=(0,r.Z)(e,2),n=(t[0],t[1],(0,a.UO)().filter,(0,o.I0)()),h=(0,a.TH)(),p=(0,o.v9)((function(e){return e.form_field})),v=(0,o.v9)((function(e){return e.nav.opened}));return(0,i.useEffect)((function(){n((0,u.uU)({}))}),[]),(0,i.useEffect)((function(){if(h.state&&"delete"==h.state.for){var e=h.state.form_field_id;n((0,u.M$)({form_field_id:e}))}else n((0,u.s4)({}))}),[h]),(0,i.useEffect)((function(){p.deleted&&n((0,u.s4)({}))}),[p.deleted]),p.loading?(0,m.jsx)(c.Z,{}):(0,m.jsxs)("div",{className:"list",children:[(0,m.jsx)(d.Z,{}),(0,m.jsxs)("div",{className:"listContainer ".concat(v?"nav-opened":"nav-closed"),children:[(0,m.jsx)(s.Z,{}),(0,m.jsx)(l.Z,{data:p,structure:f.Z.form_field,dataKey:"form_fields"})]})]})}},3879:function(e,t){"use strict";t.Z={document:{keyFetchAll:"forms",keyId:"form_id",columns:[{field:"form_id",headerName:["ID"]},{field:"farm_name",headerName:["nom de la ferme"],width:180},{field:{field:"date"},headerName:["date de consultation"],component:"date",width:180},{field:{fields:[{type:"linkButton",link:"/document",field:"form_id",class:"las la-desktop btn-show-more"},{type:"actionButton",field:"form_id",for:"delete",class:"las la-trash-alt btn-delete"}]},component:"composedLined",sortable:!1,headerName:["actions"]}]},form_field:{keyFetchAll:"forms",keyId:"form_field_id",columns:[{field:"form_field_id",headerName:["ID"]},{field:"form_field_name",headerName:["nom de champs"]},{field:"form_field_type",headerName:["type de champs"]},{field:{fields:[{type:"linkButton",link:"/form_field",field:"form_field_id",class:"las la-desktop btn-show-more"},{type:"actionButton",field:"form_field_id",for:"delete",class:"las la-trash-alt btn-delete"}]},component:"composedLined",sortable:!1,headerName:["actions"]}]}}},1822:function(e,t,n){"use strict";n.d(t,{p:function(){return a},u:function(){return i}});var r=function(e,t){return t?(t.split(".").forEach((function(t){e=e&&e[t]?e[t]:""})),e):e},i=function(e,t){return console.log("extracting data ",t,e),"string"==typeof t?r(e,t):function(e,t){if(e=t.in&&r(e,t.in)?r(e,t.in):[],t.where)return e=e&&e.filter((function(e){var n=!0;return Object.keys(t.where).forEach((function(i){r(e,i)!=t.where[i]&&(n=!1)})),n})),r(e[0],t.field)}(e,t)},a=function(e,t){var n={};if(t){if(t){var r=t.split("."),i={};n=i,r.forEach((function(t,n){n==r.length-1?i[t]=e:(i[t]={},i=i[t])}))}}else n=e;return n}},5287:function(e,t){t.s=function(e){console.log("date is ",e);return new Date(e).toLocaleDateString(void 0,{weekday:"long",year:"numeric",month:"long",day:"numeric"})}},1218:function(){}}]);
//# sourceMappingURL=993.7ead49c0.chunk.js.map