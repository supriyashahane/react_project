(this["webpackJsonpberry-material-react-ts"]=this["webpackJsonpberry-material-react-ts"]||[]).push([[99],{1761:function(e,t,a){"use strict";var n=a(100);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(101)),i=a(1),c=(0,r.default)((0,i.jsx)("path",{d:"M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z"}),"VolumeDown");t.default=c},1762:function(e,t,a){"use strict";var n=a(100);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(101)),i=a(1),c=(0,r.default)((0,i.jsx)("path",{d:"M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"}),"VolumeUp");t.default=c},2097:function(e,t,a){"use strict";a.r(t);var n=a(47),r=a(13),i=a(0),c=a.n(i),l=a(570),s=a(1);function o(){var e=c.a.useState(50),t=Object(r.a)(e,2),a=t[0],n=t[1];return Object(s.jsx)(l.a,{value:a,onChange:function(e,t){n(t)},"aria-labelledby":"continuous-slider"})}function j(){var e=c.a.useState(35),t=Object(r.a)(e,2),a=t[0],n=t[1];return Object(s.jsx)(l.a,{disabled:!0,value:a,onChange:function(e,t){n(t)},"aria-labelledby":"continuous-slider"})}var u=a(1761),b=a.n(u),d=a(1762),x=a.n(d);function h(){var e=c.a.useState(30),t=Object(r.a)(e,2),a=t[0],i=t[1];return Object(s.jsxs)(n.a,{container:!0,spacing:2,alignItems:"center",children:[Object(s.jsx)(n.a,{item:!0,children:Object(s.jsx)(b.a,{color:"primary"})}),Object(s.jsx)(n.a,{item:!0,xs:!0,children:Object(s.jsx)(l.a,{value:a,onChange:function(e,t){i(t)},"aria-labelledby":"continuous-slider"})}),Object(s.jsx)(n.a,{item:!0,children:Object(s.jsx)(x.a,{color:"primary"})})]})}var m=a(56);function O(){var e=c.a.useState(50),t=Object(r.a)(e,2),a=t[0],i=t[1],o=c.a.useState(78),j=Object(r.a)(o,2),u=j[0],b=j[1];return Object(s.jsxs)(n.a,{container:!0,direction:"column",children:[Object(s.jsxs)(n.a,{item:!0,xs:12,container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[Object(s.jsx)(n.a,{item:!0,children:Object(s.jsx)(m.a,{variant:"caption",children:"Progress"})}),Object(s.jsx)(n.a,{item:!0,xs:!0,children:Object(s.jsx)(l.a,{value:a,onChange:function(e,t){i(t)},"aria-labelledby":"continuous-slider"})}),Object(s.jsx)(n.a,{item:!0,children:Object(s.jsxs)(m.a,{variant:"h6",children:[a,"%"]})})]}),Object(s.jsxs)(n.a,{item:!0,xs:12,container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[Object(s.jsx)(n.a,{item:!0,children:Object(s.jsx)(m.a,{variant:"caption",children:"Progress"})}),Object(s.jsx)(n.a,{item:!0,xs:!0,children:Object(s.jsx)(l.a,{value:u,color:"secondary",onChange:function(e,t){b(t)},"aria-labelledby":"continuous-slider"})}),Object(s.jsx)(n.a,{item:!0,children:Object(s.jsxs)(m.a,{variant:"h6",children:[u,"%"]})})]})]})}function p(e){return"".concat(e,"\xb0C")}function v(){return Object(s.jsxs)(n.a,{item:!0,xs:12,container:!0,spacing:2,alignItems:"center",sx:{mt:2.5},children:[Object(s.jsx)(n.a,{item:!0,children:Object(s.jsx)(m.a,{variant:"h6",color:"primary",children:"15K"})}),Object(s.jsx)(n.a,{item:!0,xs:!0,children:Object(s.jsx)(l.a,{defaultValue:40,getAriaValueText:p,valueLabelDisplay:"on",min:15,max:60})}),Object(s.jsx)(n.a,{item:!0,children:Object(s.jsx)(m.a,{variant:"h6",color:"primary",children:"60K"})})]})}function f(e){return"".concat(e,"\xb0C")}function g(){return Object(s.jsxs)(n.a,{item:!0,xs:12,container:!0,spacing:2,alignItems:"center",sx:{mt:2.5},children:[Object(s.jsx)(n.a,{item:!0,children:Object(s.jsx)(m.a,{variant:"h6",color:"primary",children:"15K"})}),Object(s.jsx)(n.a,{item:!0,xs:!0,children:Object(s.jsx)(l.a,{defaultValue:25,getAriaValueText:f,valueLabelDisplay:"on","aria-labelledby":"discrete-slider-small-steps",marks:!0,step:5,min:15,max:60})}),Object(s.jsx)(n.a,{item:!0,children:Object(s.jsx)(m.a,{variant:"h6",color:"primary",children:"60K"})})]})}var y=a(563);function V(e){return"".concat(e,"\xb0C")}var w=[{value:0,label:"0\xb0C"},{value:20,label:"20\xb0C"},{value:37,label:"37\xb0C"},{value:100,label:"100\xb0C"}];function L(){return Object(s.jsxs)(y.a,{sx:{height:300},spacing:1,direction:"row",children:[Object(s.jsx)(l.a,{"aria-label":"Temperature",orientation:"vertical",getAriaValueText:V,defaultValue:30}),Object(s.jsx)(l.a,{"aria-label":"Temperature",orientation:"vertical",defaultValue:30,disabled:!0}),Object(s.jsx)(l.a,{getAriaLabel:function(){return"Temperature"},orientation:"vertical",getAriaValueText:V,defaultValue:[20,37],marks:w})]})}var k=a(121),C=a(257),M=a(656),S=a(57);t.default=function(){return Object(s.jsx)(C.a,{title:"Slider",secondary:Object(s.jsx)(M.a,{link:"https://next.material-ui.com/components/slider/"}),children:Object(s.jsxs)(n.a,{container:!0,spacing:S.c,children:[Object(s.jsx)(n.a,{item:!0,xs:12,md:4,children:Object(s.jsx)(k.a,{title:"Basic Slider",children:Object(s.jsx)(o,{})})}),Object(s.jsx)(n.a,{item:!0,xs:12,md:4,children:Object(s.jsx)(k.a,{title:"Disabled",children:Object(s.jsx)(j,{})})}),Object(s.jsx)(n.a,{item:!0,xs:12,md:4,children:Object(s.jsx)(k.a,{title:"Volume",children:Object(s.jsx)(h,{})})}),Object(s.jsx)(n.a,{item:!0,xs:12,md:4,children:Object(s.jsx)(k.a,{title:"With Label",children:Object(s.jsx)(O,{})})}),Object(s.jsx)(n.a,{item:!0,xs:12,md:4,children:Object(s.jsx)(k.a,{title:"With Popup Value",children:Object(s.jsx)(v,{})})}),Object(s.jsx)(n.a,{item:!0,xs:12,md:4,children:Object(s.jsx)(k.a,{title:"Steps With Popup Value",children:Object(s.jsx)(g,{})})}),Object(s.jsx)(n.a,{item:!0,xs:12,md:4,children:Object(s.jsx)(k.a,{title:"Vertical Slider",children:Object(s.jsx)(L,{})})})]})})}},654:function(e,t,a){"use strict";var n=a(4),r=a(88),i=(a(0),a(27)),c=a(572),l=a(1),s=["className","color","outline","size","sx"];t.a=function(e){e.className;var t=e.color,a=e.outline,o=e.size,j=e.sx,u=Object(r.a)(e,s),b=Object(i.a)(),d=t&&!a&&{color:b.palette.background.paper,bgcolor:"".concat(t,".main")},x=a&&{color:t?"".concat(t,".main"):"primary.main",bgcolor:b.palette.background.paper,border:"2px solid",borderColor:t?"".concat(t,".main"):"primary.main"},h={};switch(o){case"badge":h={width:b.spacing(3.5),height:b.spacing(3.5)};break;case"xs":h={width:b.spacing(4.25),height:b.spacing(4.25)};break;case"sm":h={width:b.spacing(5),height:b.spacing(5)};break;case"lg":h={width:b.spacing(9),height:b.spacing(9)};break;case"xl":h={width:b.spacing(10.25),height:b.spacing(10.25)};break;case"md":h={width:b.spacing(7.5),height:b.spacing(7.5)};break;default:h={}}return Object(l.jsx)(c.a,Object(n.a)({sx:Object(n.a)(Object(n.a)(Object(n.a)(Object(n.a)({},d),x),h),j)},u))}},656:function(e,t,a){"use strict";a(0);var n=a(27),r=a(2128),i=a(368),c=a(658),l=a(654),s=a(1);t.a=function(e){var t=e.title,a=e.link,o=e.icon,j=Object(n.a)();return Object(s.jsx)(r.a,{title:t||"Reference",placement:"left",children:Object(s.jsxs)(i.a,{disableRipple:!0,children:[!o&&Object(s.jsx)(l.a,{component:c.a,href:a,target:"_blank",alt:"MUI Logo",size:"badge",color:"primary",outline:!0,children:Object(s.jsxs)("svg",{width:"500",height:"500",viewBox:"0 0 500 500",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(s.jsxs)("g",{clipPath:"url(#clip0)",children:[Object(s.jsx)("path",{d:"M100 260.9V131L212.5 195.95V239.25L137.5 195.95V282.55L100 260.9Z",fill:j.palette.primary[800]}),Object(s.jsx)("path",{d:"M212.5 195.95L325 131V260.9L250 304.2L212.5 282.55L287.5 239.25V195.95L212.5 239.25V195.95Z",fill:j.palette.primary.main}),Object(s.jsx)("path",{d:"M212.5 282.55V325.85L287.5 369.15V325.85L212.5 282.55Z",fill:j.palette.primary[800]}),Object(s.jsx)("path",{d:"M287.5 369.15L400 304.2V217.6L362.5 239.25V282.55L287.5 325.85V369.15ZM362.5 195.95V152.65L400 131V174.3L362.5 195.95Z",fill:j.palette.primary.main})]}),Object(s.jsx)("defs",{children:Object(s.jsx)("clipPath",{id:"clip0",children:Object(s.jsx)("rect",{width:"300",height:"238.3",fill:"white",transform:"translate(100 131)"})})})]})}),o&&Object(s.jsx)(l.a,{component:c.a,href:a,target:"_blank",size:"badge",color:"primary",outline:!0,children:o})]})})}},658:function(e,t,a){"use strict";var n=a(13),r=a(5),i=a(7),c=a(2),l=a(0),s=(a(10),a(9)),o=a(143),j=a(14),u=a(119),b=a(8),d=a(6),x=a(11),h=a(168),m=a(20),O=a(56),p=a(120),v=a(144);function f(e){return Object(p.a)("MuiLink",e)}var g=Object(v.a)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),y=a(1),V=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"],w={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},L=Object(d.a)(O.a,{name:"MuiLink",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,t["underline".concat(Object(b.a)(a.underline))],"button"===a.component&&t.button]}})((function(e){var t=e.theme,a=e.ownerState,n=Object(j.b)(t,"palette.".concat(function(e){return w[e]||e}(a.color)))||a.color;return Object(c.a)({},"none"===a.underline&&{textDecoration:"none"},"hover"===a.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===a.underline&&{textDecoration:"underline",textDecorationColor:"inherit"!==n?Object(u.a)(n,.4):void 0,"&:hover":{textDecorationColor:"inherit"}},"button"===a.component&&Object(r.a)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(g.focusVisible),{outline:"auto"}))})),k=l.forwardRef((function(e,t){var a=Object(x.a)({props:e,name:"MuiLink"}),r=a.className,j=a.color,u=void 0===j?"primary":j,d=a.component,O=void 0===d?"a":d,p=a.onBlur,v=a.onFocus,g=a.TypographyClasses,w=a.underline,k=void 0===w?"always":w,C=a.variant,M=void 0===C?"inherit":C,S=Object(i.a)(a,V),z=Object(h.a)(),D=z.isFocusVisibleRef,T=z.onBlur,A=z.onFocus,P=z.ref,R=l.useState(!1),B=Object(n.a)(R,2),I=B[0],N=B[1],_=Object(m.a)(t,P),F=Object(c.a)({},a,{color:u,component:O,focusVisible:I,underline:k,variant:M}),W=function(e){var t=e.classes,a=e.component,n=e.focusVisible,r=e.underline,i={root:["root","underline".concat(Object(b.a)(r)),"button"===a&&"button",n&&"focusVisible"]};return Object(o.a)(i,f,t)}(F);return Object(y.jsx)(L,Object(c.a)({className:Object(s.default)(W.root,r),classes:g,color:u,component:O,onBlur:function(e){T(e),!1===D.current&&N(!1),p&&p(e)},onFocus:function(e){A(e),!0===D.current&&N(!0),v&&v(e)},ref:_,ownerState:F,variant:M},S))}));t.a=k}}]);
//# sourceMappingURL=99.f5bc81a0.chunk.js.map