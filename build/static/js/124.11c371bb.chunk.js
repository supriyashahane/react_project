(this["webpackJsonpberry-material-react-ts"]=this["webpackJsonpberry-material-react-ts"]||[]).push([[124],{2038:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var a=n(13),i=n(0),r=n(749),o=n(750),c=n(790),l=n(751),s=n(738),u=n(752),d=n(2118),b=n(257),p=n(656),h=n(1),j=[{id:"name",label:"Name",minWidth:170},{id:"code",label:"ISO\xa0Code",minWidth:100},{id:"population",label:"Population",minWidth:170,align:"right",format:function(e){return e.toLocaleString("en-US")}},{id:"size",label:"Size\xa0(km\xb2)",minWidth:170,align:"right",format:function(e){return e.toLocaleString("en-US")}},{id:"density",label:"Density",minWidth:170,align:"right",format:function(e){return"number"===typeof e&&e.toFixed(2)}}];function m(e,t,n,a){return{name:e,code:t,population:n,size:a,density:n/a}}var g=[m("India","IN",1324171354,3287263),m("China","CN",1403500365,9596961),m("Italy","IT",60483973,301340),m("United States","US",327167434,9833520),m("Canada","CA",37602103,9984670),m("Australia","AU",25475400,7692024),m("Germany","DE",83019200,357578),m("Ireland","IE",4857e3,70273),m("Mexico","MX",126577691,1972550),m("Japan","JP",126317e3,377973),m("France","FR",67022e3,640679),m("United Kingdom","GB",67545757,242495),m("Russia","RU",146793744,17098246),m("Nigeria","NG",200962417,923768),m("Brazil","BR",210147125,8515767)];function f(){var e=i.useState(0),t=Object(a.a)(e,2),n=t[0],m=t[1],f=i.useState(10),O=Object(a.a)(f,2),x=O[0],v=O[1];return Object(h.jsxs)(b.a,{content:!1,title:"Sticky Header",secondary:Object(h.jsx)(p.a,{link:"https://next.material-ui.com/components/tables/"}),children:[Object(h.jsx)(r.a,{sx:{maxHeight:440},children:Object(h.jsxs)(o.a,{stickyHeader:!0,"aria-label":"sticky table",children:[Object(h.jsx)(c.a,{children:Object(h.jsx)(l.a,{children:j.map((function(e){return Object(h.jsx)(s.a,{sx:{py:3},align:e.align,style:{minWidth:e.minWidth},children:e.label},e.id)}))})}),Object(h.jsx)(u.a,{children:g.slice(n*x,n*x+x).map((function(e){return Object(h.jsx)(l.a,{sx:{py:3},hover:!0,role:"checkbox",tabIndex:-1,children:j.map((function(t){var n=e[t.id];return Object(h.jsx)(s.a,{align:t.align,children:t.format&&"number"===typeof n?t.format(n):n},t.id)}))},e.code)}))})]})}),Object(h.jsx)(d.a,{rowsPerPageOptions:[10,25,100],component:"div",count:g.length,rowsPerPage:x,page:n,onPageChange:function(e,t){m(t)},onRowsPerPageChange:function(e){var t;v(+(null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.value)),m(0)}})]})}},654:function(e,t,n){"use strict";var a=n(4),i=n(88),r=(n(0),n(27)),o=n(572),c=n(1),l=["className","color","outline","size","sx"];t.a=function(e){e.className;var t=e.color,n=e.outline,s=e.size,u=e.sx,d=Object(i.a)(e,l),b=Object(r.a)(),p=t&&!n&&{color:b.palette.background.paper,bgcolor:"".concat(t,".main")},h=n&&{color:t?"".concat(t,".main"):"primary.main",bgcolor:b.palette.background.paper,border:"2px solid",borderColor:t?"".concat(t,".main"):"primary.main"},j={};switch(s){case"badge":j={width:b.spacing(3.5),height:b.spacing(3.5)};break;case"xs":j={width:b.spacing(4.25),height:b.spacing(4.25)};break;case"sm":j={width:b.spacing(5),height:b.spacing(5)};break;case"lg":j={width:b.spacing(9),height:b.spacing(9)};break;case"xl":j={width:b.spacing(10.25),height:b.spacing(10.25)};break;case"md":j={width:b.spacing(7.5),height:b.spacing(7.5)};break;default:j={}}return Object(c.jsx)(o.a,Object(a.a)({sx:Object(a.a)(Object(a.a)(Object(a.a)(Object(a.a)({},p),h),j),u)},d))}},656:function(e,t,n){"use strict";n(0);var a=n(27),i=n(2128),r=n(368),o=n(658),c=n(654),l=n(1);t.a=function(e){var t=e.title,n=e.link,s=e.icon,u=Object(a.a)();return Object(l.jsx)(i.a,{title:t||"Reference",placement:"left",children:Object(l.jsxs)(r.a,{disableRipple:!0,children:[!s&&Object(l.jsx)(c.a,{component:o.a,href:n,target:"_blank",alt:"MUI Logo",size:"badge",color:"primary",outline:!0,children:Object(l.jsxs)("svg",{width:"500",height:"500",viewBox:"0 0 500 500",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(l.jsxs)("g",{clipPath:"url(#clip0)",children:[Object(l.jsx)("path",{d:"M100 260.9V131L212.5 195.95V239.25L137.5 195.95V282.55L100 260.9Z",fill:u.palette.primary[800]}),Object(l.jsx)("path",{d:"M212.5 195.95L325 131V260.9L250 304.2L212.5 282.55L287.5 239.25V195.95L212.5 239.25V195.95Z",fill:u.palette.primary.main}),Object(l.jsx)("path",{d:"M212.5 282.55V325.85L287.5 369.15V325.85L212.5 282.55Z",fill:u.palette.primary[800]}),Object(l.jsx)("path",{d:"M287.5 369.15L400 304.2V217.6L362.5 239.25V282.55L287.5 325.85V369.15ZM362.5 195.95V152.65L400 131V174.3L362.5 195.95Z",fill:u.palette.primary.main})]}),Object(l.jsx)("defs",{children:Object(l.jsx)("clipPath",{id:"clip0",children:Object(l.jsx)("rect",{width:"300",height:"238.3",fill:"white",transform:"translate(100 131)"})})})]})}),s&&Object(l.jsx)(c.a,{component:o.a,href:n,target:"_blank",size:"badge",color:"primary",outline:!0,children:s})]})})}},658:function(e,t,n){"use strict";var a=n(13),i=n(5),r=n(7),o=n(2),c=n(0),l=(n(10),n(9)),s=n(143),u=n(14),d=n(119),b=n(8),p=n(6),h=n(11),j=n(168),m=n(20),g=n(56),f=n(120),O=n(144);function x(e){return Object(f.a)("MuiLink",e)}var v=Object(O.a)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),y=n(1),w=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"],k={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},L=Object(p.a)(g.a,{name:"MuiLink",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["underline".concat(Object(b.a)(n.underline))],"button"===n.component&&t.button]}})((function(e){var t=e.theme,n=e.ownerState,a=Object(u.b)(t,"palette.".concat(function(e){return k[e]||e}(n.color)))||n.color;return Object(o.a)({},"none"===n.underline&&{textDecoration:"none"},"hover"===n.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===n.underline&&{textDecoration:"underline",textDecorationColor:"inherit"!==a?Object(d.a)(a,.4):void 0,"&:hover":{textDecorationColor:"inherit"}},"button"===n.component&&Object(i.a)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(v.focusVisible),{outline:"auto"}))})),V=c.forwardRef((function(e,t){var n=Object(h.a)({props:e,name:"MuiLink"}),i=n.className,u=n.color,d=void 0===u?"primary":u,p=n.component,g=void 0===p?"a":p,f=n.onBlur,O=n.onFocus,v=n.TypographyClasses,k=n.underline,V=void 0===k?"always":k,S=n.variant,C=void 0===S?"inherit":S,M=Object(r.a)(n,w),P=Object(j.a)(),R=P.isFocusVisibleRef,N=P.onBlur,z=P.onFocus,I=P.ref,W=c.useState(!1),B=Object(a.a)(W,2),D=B[0],F=B[1],U=Object(m.a)(t,I),A=Object(o.a)({},n,{color:d,component:g,focusVisible:D,underline:V,variant:C}),H=function(e){var t=e.classes,n=e.component,a=e.focusVisible,i=e.underline,r={root:["root","underline".concat(Object(b.a)(i)),"button"===n&&"button",a&&"focusVisible"]};return Object(s.a)(r,x,t)}(A);return Object(y.jsx)(L,Object(o.a)({className:Object(l.default)(H.root,i),classes:v,color:d,component:g,onBlur:function(e){N(e),!1===R.current&&F(!1),f&&f(e)},onFocus:function(e){z(e),!0===R.current&&F(!0),O&&O(e)},ref:U,ownerState:A,variant:C},M))}));t.a=V}}]);
//# sourceMappingURL=124.11c371bb.chunk.js.map