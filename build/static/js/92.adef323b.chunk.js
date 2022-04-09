(this["webpackJsonpberry-material-react-ts"]=this["webpackJsonpberry-material-react-ts"]||[]).push([[92],{2035:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return I}));var a=n(13),c=n(4),r=n(0),o=n(790),i=n(751),l=n(738),s=n(676),d=n(935),u=n(145),b=n(639),j=n(56),p=n(2128),h=n(651),m=n(749),O=n(750),f=n(752),v=n(2118),x=n(622),g=n(257),y=n(656),k=n(698),w=n.n(k),S=n(1);function C(e,t,n,a,c){return{name:e,calories:t,fat:n,carbs:a,protein:c}}var L=[C("Cupcake",305,3.7,67,4.3),C("Donut",452,25,51,4.9),C("Eclair",262,16,24,6),C("Frozen yoghurt",159,6,24,4),C("Gingerbread",356,16,49,3.9),C("Honeycomb",408,3.2,87,6.5),C("Ice cream sandwich",237,9,37,4.3),C("Jelly Bean",375,0,94,0),C("KitKat",518,26,65,7),C("Lollipop",392,.2,98,0),C("Marshmallow",318,0,81,2),C("Nougat",360,19,9,37),C("Oreo",437,18,63,4)];function M(e,t,n){return t[n]<e[n]?-1:t[n]>e[n]?1:0}function V(e,t){return"desc"===e?function(e,n){return M(e,n,t)}:function(e,n){return-M(e,n,t)}}function z(e,t){var n=e.map((function(e,t){return[e,t]}));return n.sort((function(e,n){var a=t(e[0],n[0]);return 0!==a?a:e[1]-n[1]})),n.map((function(e){return e[0]}))}var P=[{id:"name",numeric:!1,disablePadding:!0,label:"Dessert\xa0(100g serving)"},{id:"calories",numeric:!0,disablePadding:!1,label:"Calories"},{id:"fat",numeric:!0,disablePadding:!1,label:"Fat\xa0(g)"},{id:"carbs",numeric:!0,disablePadding:!1,label:"Carbs\xa0(g)"},{id:"protein",numeric:!0,disablePadding:!1,label:"Protein\xa0(g)"}];function R(e){var t=e.onSelectAllClick,n=e.order,a=e.orderBy,c=e.numSelected,r=e.rowCount,b=e.onRequestSort;return Object(S.jsx)(o.a,{children:Object(S.jsxs)(i.a,{children:[Object(S.jsx)(l.a,{padding:"checkbox",sx:{pl:3},children:Object(S.jsx)(s.a,{color:"primary",indeterminate:c>0&&c<r,checked:r>0&&c===r,onChange:t,inputProps:{"aria-label":"select all desserts"}})}),P.map((function(e){return Object(S.jsx)(l.a,{align:e.numeric?"right":"left",padding:e.disablePadding?"none":"normal",sortDirection:a===e.id?n:void 0,children:Object(S.jsxs)(d.a,{active:a===e.id,direction:a===e.id?n:"asc",onClick:(t=e.id,function(e){b(e,t)}),children:[e.label,a===e.id?Object(S.jsx)(u.a,{component:"span",sx:x.a,children:"desc"===n?"sorted descending":"sorted ascending"}):null]})},e.id);var t}))]})})}var D=function(e){var t=e.numSelected;return Object(S.jsxs)(b.a,{sx:Object(c.a)({p:0,pl:1,pr:1},t>0&&{color:function(e){return e.palette.secondary.main}}),children:[t>0?Object(S.jsxs)(j.a,{color:"inherit",variant:"subtitle1",children:[t," selected"]}):Object(S.jsx)(j.a,{variant:"h4",id:"tableTitle",children:"Nutrition"}),Object(S.jsx)(u.a,{sx:{flexGrow:1}}),t>0&&Object(S.jsx)(p.a,{title:"Delete",children:Object(S.jsx)(h.a,{size:"large",children:Object(S.jsx)(w.a,{})})})]})};function I(){var e=r.useState("asc"),t=Object(a.a)(e,2),n=t[0],c=t[1],o=r.useState("calories"),d=Object(a.a)(o,2),u=d[0],b=d[1],j=r.useState([]),p=Object(a.a)(j,2),h=p[0],x=p[1],k=r.useState(0),w=Object(a.a)(k,2),C=w[0],M=w[1],P=r.useState(!1),I=Object(a.a)(P,1)[0],B=r.useState(5),N=Object(a.a)(B,2),T=N[0],H=N[1],A=C>0?Math.max(0,(1+C)*T-L.length):0;return Object(S.jsxs)(g.a,{content:!1,title:"Enhanced Table",secondary:Object(S.jsx)(y.a,{link:"https://next.material-ui.com/components/tables/"}),children:[Object(S.jsx)(D,{numSelected:h.length}),Object(S.jsx)(m.a,{children:Object(S.jsxs)(O.a,{sx:{minWidth:750},"aria-labelledby":"tableTitle",size:I?"small":"medium",children:[Object(S.jsx)(R,{numSelected:h.length,order:n,orderBy:u,onSelectAllClick:function(e){if(e.target.checked){var t=L.map((function(e){return e.name}));x(t)}else x([])},onRequestSort:function(e,t){c(u===t&&"asc"===n?"desc":"asc"),b(t)},rowCount:L.length}),Object(S.jsxs)(f.a,{children:[z(L,V(n,u)).slice(C*T,C*T+T).map((function(e,t){if("number"===typeof e)return null;var n,a=(n=e.name,-1!==h.indexOf(n)),c="enhanced-table-checkbox-".concat(t);return Object(S.jsxs)(i.a,{hover:!0,onClick:function(t){return function(e,t){var n=h.indexOf(t),a=[];-1===n?a=a.concat(h,t):0===n?a=a.concat(h.slice(1)):n===h.length-1?a=a.concat(h.slice(0,-1)):n>0&&(a=a.concat(h.slice(0,n),h.slice(n+1))),x(a)}(0,e.name)},role:"checkbox","aria-checked":a,tabIndex:-1,selected:a,children:[Object(S.jsx)(l.a,{sx:{pl:3},padding:"checkbox",children:Object(S.jsx)(s.a,{color:"primary",checked:a,inputProps:{"aria-labelledby":c}})}),Object(S.jsx)(l.a,{component:"th",id:c,scope:"row",padding:"none",children:e.name}),Object(S.jsx)(l.a,{align:"right",children:e.calories}),Object(S.jsx)(l.a,{align:"right",children:e.fat}),Object(S.jsx)(l.a,{align:"right",children:e.carbs}),Object(S.jsx)(l.a,{sx:{pr:3},align:"right",children:e.protein})]},e.name)})),A>0&&Object(S.jsx)(i.a,{style:{height:(I?33:53)*A},children:Object(S.jsx)(l.a,{colSpan:6})})]})]})}),Object(S.jsx)(v.a,{rowsPerPageOptions:[5,10,25],component:"div",count:L.length,rowsPerPage:T,page:C,onPageChange:function(e,t){M(t)},onRowsPerPageChange:function(e){H(parseInt(null===e||void 0===e?void 0:e.target.value,10)),M(0)}})]})}},654:function(e,t,n){"use strict";var a=n(4),c=n(88),r=(n(0),n(27)),o=n(572),i=n(1),l=["className","color","outline","size","sx"];t.a=function(e){e.className;var t=e.color,n=e.outline,s=e.size,d=e.sx,u=Object(c.a)(e,l),b=Object(r.a)(),j=t&&!n&&{color:b.palette.background.paper,bgcolor:"".concat(t,".main")},p=n&&{color:t?"".concat(t,".main"):"primary.main",bgcolor:b.palette.background.paper,border:"2px solid",borderColor:t?"".concat(t,".main"):"primary.main"},h={};switch(s){case"badge":h={width:b.spacing(3.5),height:b.spacing(3.5)};break;case"xs":h={width:b.spacing(4.25),height:b.spacing(4.25)};break;case"sm":h={width:b.spacing(5),height:b.spacing(5)};break;case"lg":h={width:b.spacing(9),height:b.spacing(9)};break;case"xl":h={width:b.spacing(10.25),height:b.spacing(10.25)};break;case"md":h={width:b.spacing(7.5),height:b.spacing(7.5)};break;default:h={}}return Object(i.jsx)(o.a,Object(a.a)({sx:Object(a.a)(Object(a.a)(Object(a.a)(Object(a.a)({},j),p),h),d)},u))}},656:function(e,t,n){"use strict";n(0);var a=n(27),c=n(2128),r=n(368),o=n(658),i=n(654),l=n(1);t.a=function(e){var t=e.title,n=e.link,s=e.icon,d=Object(a.a)();return Object(l.jsx)(c.a,{title:t||"Reference",placement:"left",children:Object(l.jsxs)(r.a,{disableRipple:!0,children:[!s&&Object(l.jsx)(i.a,{component:o.a,href:n,target:"_blank",alt:"MUI Logo",size:"badge",color:"primary",outline:!0,children:Object(l.jsxs)("svg",{width:"500",height:"500",viewBox:"0 0 500 500",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(l.jsxs)("g",{clipPath:"url(#clip0)",children:[Object(l.jsx)("path",{d:"M100 260.9V131L212.5 195.95V239.25L137.5 195.95V282.55L100 260.9Z",fill:d.palette.primary[800]}),Object(l.jsx)("path",{d:"M212.5 195.95L325 131V260.9L250 304.2L212.5 282.55L287.5 239.25V195.95L212.5 239.25V195.95Z",fill:d.palette.primary.main}),Object(l.jsx)("path",{d:"M212.5 282.55V325.85L287.5 369.15V325.85L212.5 282.55Z",fill:d.palette.primary[800]}),Object(l.jsx)("path",{d:"M287.5 369.15L400 304.2V217.6L362.5 239.25V282.55L287.5 325.85V369.15ZM362.5 195.95V152.65L400 131V174.3L362.5 195.95Z",fill:d.palette.primary.main})]}),Object(l.jsx)("defs",{children:Object(l.jsx)("clipPath",{id:"clip0",children:Object(l.jsx)("rect",{width:"300",height:"238.3",fill:"white",transform:"translate(100 131)"})})})]})}),s&&Object(l.jsx)(i.a,{component:o.a,href:n,target:"_blank",size:"badge",color:"primary",outline:!0,children:s})]})})}},658:function(e,t,n){"use strict";var a=n(13),c=n(5),r=n(7),o=n(2),i=n(0),l=(n(10),n(9)),s=n(143),d=n(14),u=n(119),b=n(8),j=n(6),p=n(11),h=n(168),m=n(20),O=n(56),f=n(120),v=n(144);function x(e){return Object(f.a)("MuiLink",e)}var g=Object(v.a)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),y=n(1),k=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"],w={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},S=Object(j.a)(O.a,{name:"MuiLink",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["underline".concat(Object(b.a)(n.underline))],"button"===n.component&&t.button]}})((function(e){var t=e.theme,n=e.ownerState,a=Object(d.b)(t,"palette.".concat(function(e){return w[e]||e}(n.color)))||n.color;return Object(o.a)({},"none"===n.underline&&{textDecoration:"none"},"hover"===n.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===n.underline&&{textDecoration:"underline",textDecorationColor:"inherit"!==a?Object(u.a)(a,.4):void 0,"&:hover":{textDecorationColor:"inherit"}},"button"===n.component&&Object(c.a)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(g.focusVisible),{outline:"auto"}))})),C=i.forwardRef((function(e,t){var n=Object(p.a)({props:e,name:"MuiLink"}),c=n.className,d=n.color,u=void 0===d?"primary":d,j=n.component,O=void 0===j?"a":j,f=n.onBlur,v=n.onFocus,g=n.TypographyClasses,w=n.underline,C=void 0===w?"always":w,L=n.variant,M=void 0===L?"inherit":L,V=Object(r.a)(n,k),z=Object(h.a)(),P=z.isFocusVisibleRef,R=z.onBlur,D=z.onFocus,I=z.ref,B=i.useState(!1),N=Object(a.a)(B,2),T=N[0],H=N[1],A=Object(m.a)(t,I),F=Object(o.a)({},n,{color:u,component:O,focusVisible:T,underline:C,variant:M}),Z=function(e){var t=e.classes,n=e.component,a=e.focusVisible,c=e.underline,r={root:["root","underline".concat(Object(b.a)(c)),"button"===n&&"button",a&&"focusVisible"]};return Object(s.a)(r,x,t)}(F);return Object(y.jsx)(S,Object(o.a)({className:Object(l.default)(Z.root,c),classes:g,color:u,component:O,onBlur:function(e){R(e),!1===P.current&&H(!1),f&&f(e)},onFocus:function(e){D(e),!0===P.current&&H(!0),v&&v(e)},ref:A,ownerState:F,variant:M},V))}));t.a=C},676:function(e,t,n){"use strict";var a=n(5),c=n(7),r=n(2),o=n(0),i=(n(10),n(143)),l=n(119),s=n(169),d=n(31),u=n(1),b=Object(d.a)(Object(u.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),j=Object(d.a)(Object(u.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),p=Object(d.a)(Object(u.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),h=n(8),m=n(11),O=n(6),f=n(120),v=n(144);function x(e){return Object(f.a)("MuiCheckbox",e)}var g=Object(v.a)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),y=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size"],k=Object(O.a)(s.a,{shouldForwardProp:function(e){return Object(O.b)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.indeterminate&&t.indeterminate,"default"!==n.color&&t["color".concat(Object(h.a)(n.color))]]}})((function(e){var t,n=e.theme,c=e.ownerState;return Object(r.a)({color:n.palette.text.secondary},!c.disableRipple&&{"&:hover":{backgroundColor:Object(l.a)("default"===c.color?n.palette.action.active:n.palette[c.color].main,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==c.color&&(t={},Object(a.a)(t,"&.".concat(g.checked,", &.").concat(g.indeterminate),{color:n.palette[c.color].main}),Object(a.a)(t,"&.".concat(g.disabled),{color:n.palette.action.disabled}),t))})),w=Object(u.jsx)(j,{}),S=Object(u.jsx)(b,{}),C=Object(u.jsx)(p,{}),L=o.forwardRef((function(e,t){var n,a,l=Object(m.a)({props:e,name:"MuiCheckbox"}),s=l.checkedIcon,d=void 0===s?w:s,b=l.color,j=void 0===b?"primary":b,p=l.icon,O=void 0===p?S:p,f=l.indeterminate,v=void 0!==f&&f,g=l.indeterminateIcon,L=void 0===g?C:g,M=l.inputProps,V=l.size,z=void 0===V?"medium":V,P=Object(c.a)(l,y),R=v?L:O,D=v?L:d,I=Object(r.a)({},l,{color:j,indeterminate:v,size:z}),B=function(e){var t=e.classes,n=e.indeterminate,a=e.color,c={root:["root",n&&"indeterminate","color".concat(Object(h.a)(a))]},o=Object(i.a)(c,x,t);return Object(r.a)({},t,o)}(I);return Object(u.jsx)(k,Object(r.a)({type:"checkbox",inputProps:Object(r.a)({"data-indeterminate":v},M),icon:o.cloneElement(R,{fontSize:null!=(n=R.props.fontSize)?n:z}),checkedIcon:o.cloneElement(D,{fontSize:null!=(a=D.props.fontSize)?a:z}),ownerState:I,ref:t},P,{classes:B}))}));t.a=L},698:function(e,t,n){"use strict";var a=n(100);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=a(n(101)),r=n(1),o=(0,c.default)((0,r.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.default=o},935:function(e,t,n){"use strict";var a=n(5),c=n(7),r=n(2),o=n(143),i=n(9),l=(n(10),n(0)),s=n(368),d=n(31),u=n(1),b=Object(d.a)(Object(u.jsx)("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),"ArrowDownward"),j=n(6),p=n(11),h=n(8),m=n(120),O=n(144);function f(e){return Object(m.a)("MuiTableSortLabel",e)}var v=Object(O.a)("MuiTableSortLabel",["root","active","icon","iconDirectionDesc","iconDirectionAsc"]),x=["active","children","className","direction","hideSortIcon","IconComponent"],g=Object(j.a)(s.a,{name:"MuiTableSortLabel",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.active&&t.active]}})((function(e){var t=e.theme;return Object(a.a)({cursor:"pointer",display:"inline-flex",justifyContent:"flex-start",flexDirection:"inherit",alignItems:"center","&:focus":{color:t.palette.text.secondary},"&:hover":Object(a.a)({color:t.palette.text.secondary},"& .".concat(v.icon),{opacity:.5})},"&.".concat(v.active),Object(a.a)({color:t.palette.text.primary},"& .".concat(v.icon),{opacity:1,color:t.palette.text.secondary}))})),y=Object(j.a)("span",{name:"MuiTableSortLabel",slot:"Icon",overridesResolver:function(e,t){var n=e.ownerState;return[t.icon,t["iconDirection".concat(Object(h.a)(n.direction))]]}})((function(e){var t=e.theme,n=e.ownerState;return Object(r.a)({fontSize:18,marginRight:4,marginLeft:4,opacity:0,transition:t.transitions.create(["opacity","transform"],{duration:t.transitions.duration.shorter}),userSelect:"none"},"desc"===n.direction&&{transform:"rotate(0deg)"},"asc"===n.direction&&{transform:"rotate(180deg)"})})),k=l.forwardRef((function(e,t){var n=Object(p.a)({props:e,name:"MuiTableSortLabel"}),a=n.active,l=void 0!==a&&a,s=n.children,d=n.className,j=n.direction,m=void 0===j?"asc":j,O=n.hideSortIcon,v=void 0!==O&&O,k=n.IconComponent,w=void 0===k?b:k,S=Object(c.a)(n,x),C=Object(r.a)({},n,{active:l,direction:m,hideSortIcon:v,IconComponent:w}),L=function(e){var t=e.classes,n=e.direction,a={root:["root",e.active&&"active"],icon:["icon","iconDirection".concat(Object(h.a)(n))]};return Object(o.a)(a,f,t)}(C);return Object(u.jsxs)(g,Object(r.a)({className:Object(i.default)(L.root,d),component:"span",disableRipple:!0,ownerState:C,ref:t},S,{children:[s,v&&!l?null:Object(u.jsx)(y,{as:w,className:Object(i.default)(L.icon),ownerState:C})]}))}));t.a=k}}]);
//# sourceMappingURL=92.adef323b.chunk.js.map