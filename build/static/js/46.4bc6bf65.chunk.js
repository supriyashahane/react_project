(this["webpackJsonpberry-material-react-ts"]=this["webpackJsonpberry-material-react-ts"]||[]).push([[46],{1003:function(e,t,a){"use strict";var n=a(100);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=n(a(101)),i=a(1),r=(0,c.default)([(0,i.jsx)("path",{d:"M19 17.47c-.88-.07-1.75-.22-2.6-.45l-1.19 1.19c1.2.41 2.48.67 3.8.75v-1.49zM5.03 5c.09 1.32.35 2.59.75 3.8l1.2-1.2c-.23-.84-.38-1.71-.44-2.6H5.03z",opacity:".3"},"0"),(0,i.jsx)("path",{d:"M9.07 7.57C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02zm7.33 9.45c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19zM5.79 8.8c-.41-1.21-.67-2.48-.76-3.8h1.5c.07.89.22 1.76.46 2.59L5.79 8.8z"},"1")],"PhoneTwoTone");t.default=r},1007:function(e,t,a){"use strict";var n=a(100);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=n(a(101)),i=a(1),r=(0,c.default)([(0,i.jsx)("path",{d:"M12 11h2v2h-2v2h2v2h-2v2h8V9h-8v2zm4 0h2v2h-2v-2zm0 4h2v2h-2v-2z",opacity:".3"},"0"),(0,i.jsx)("path",{d:"M16 15h2v2h-2zm0-4h2v2h-2zm6-4H12V3H2v18h20V7zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10z"},"1")],"BusinessTwoTone");t.default=r},1008:function(e,t,a){"use strict";var n=a(100);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=n(a(101)),i=a(1),r=(0,c.default)([(0,i.jsx)("path",{d:"M4 8h16v11H4z",opacity:".3"},"0"),(0,i.jsx)("path",{d:"M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM10 4h4v2h-4V4zm10 15H4V8h16v11z"},"1")],"WorkTwoTone");t.default=r},1051:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(13),c=a(2),i=a(7),r=a(0),s=["getTrigger","target"];function l(e,t){var a=t.disableHysteresis,n=void 0!==a&&a,c=t.threshold,i=void 0===c?100:c,r=t.target,s=e.current;return r&&(e.current=void 0!==r.pageYOffset?r.pageYOffset:r.scrollTop),!(!n&&void 0!==s&&e.current<s)&&e.current>i}var j="undefined"!==typeof window?window:null;function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.getTrigger,a=void 0===t?l:t,o=e.target,d=void 0===o?j:o,h=Object(i.a)(e,s),x=r.useRef(),b=r.useState((function(){return a(x,h)})),u=Object(n.a)(b,2),O=u[0],m=u[1];return r.useEffect((function(){var e=function(){m(a(x,Object(c.a)({target:d},h)))};return e(),d.addEventListener("scroll",e),function(){d.removeEventListener("scroll",e)}}),[d,a,JSON.stringify(h)]),O}},1300:function(e,t,a){"use strict";var n=a(4),c=a(88),i=a(0),r=a.n(i),s=a(27),l=a(1051),j=a(47),o=a(572),d=a(56),h=a(633),x=a(651),b=a(640),u=a(253),O=a(121),m=a(57),v=a(725),p=a.n(v),f=a(1007),z=a.n(f),g=a(1008),y=a.n(g),M=a(769),w=a.n(M),C=a(901),k=a.n(C),_=a(741),H=a.n(_),T=a(1301),V=a.n(T),W=a(1302),S=a.n(W),P=a(694),A=a.n(P),I=a(900),L=a.n(I),E=a(1),N=["user","onClose","onEditClick"],B=a(717);function U(e){var t=e.children,a=e.window,n=Object(l.a)({disableHysteresis:!0,threshold:130,target:a||void 0});return r.a.cloneElement(t,{style:{position:n?"fixed":"relative",top:n?83:0,width:n?318:"100%"}})}t.a=function(e){var t=e.user,a=e.onClose,i=e.onEditClick,r=Object(c.a)(e,N),l=Object(s.a)(),v=t.avatar&&B("./".concat(t.avatar)).default;return Object(E.jsx)(U,Object(n.a)(Object(n.a)({},r),{},{children:Object(E.jsx)(O.a,{sx:{background:"dark"===l.palette.mode?l.palette.dark.main:l.palette.grey[50],width:"100%",maxWidth:342},children:Object(E.jsxs)(j.a,{container:!0,spacing:m.c,children:[Object(E.jsx)(j.a,{item:!0,xs:12,children:Object(E.jsxs)(j.a,{container:!0,alignItems:"center",spacing:1,children:[Object(E.jsx)(j.a,{item:!0,children:Object(E.jsx)(o.a,{alt:t.name,src:v,sx:{width:64,height:64}})}),Object(E.jsx)(j.a,{item:!0,xs:!0,zeroMinWidth:!0,children:Object(E.jsxs)(j.a,{container:!0,spacing:1,children:[Object(E.jsx)(j.a,{item:!0,xs:12,children:Object(E.jsx)(d.a,{variant:"h5",component:"div",sx:{fontSize:"1rem"},children:t.name})}),Object(E.jsx)(j.a,{item:!0,xs:12,children:Object(E.jsx)(h.a,{label:"Work",sx:{color:l.palette.primary.main,bgcolor:"dark"===l.palette.mode?l.palette.dark.dark:l.palette.primary.light}})})]})}),Object(E.jsx)(j.a,{item:!0,children:Object(E.jsx)(x.a,{onClick:a,size:"large",children:Object(E.jsx)(p.a,{})})})]})}),Object(E.jsx)(j.a,{item:!0,xs:12,children:Object(E.jsxs)(j.a,{container:!0,spacing:1,children:[Object(E.jsx)(j.a,{item:!0,xs:6,children:Object(E.jsx)(b.a,{variant:"outlined",fullWidth:!0,startIcon:Object(E.jsx)(A.a,{}),onClick:i,children:"Edit"})}),Object(E.jsx)(j.a,{item:!0,xs:6,children:Object(E.jsx)(b.a,{variant:"outlined",color:"secondary",fullWidth:!0,startIcon:Object(E.jsx)(L.a,{}),children:"Block"})})]})}),Object(E.jsx)(j.a,{item:!0,xs:12,children:Object(E.jsx)(u.a,{})}),Object(E.jsx)(j.a,{item:!0,xs:12,children:Object(E.jsxs)(j.a,{container:!0,spacing:1,children:[Object(E.jsx)(j.a,{item:!0,children:Object(E.jsx)(z.a,{sx:{verticalAlign:"sub",fontSize:"1.125rem",mr:.625}})}),Object(E.jsx)(j.a,{item:!0,xs:!0,zeroMinWidth:!0,children:Object(E.jsx)(d.a,{variant:"body2",children:t.company})})]})}),Object(E.jsx)(j.a,{item:!0,xs:12,children:Object(E.jsxs)(j.a,{container:!0,spacing:1,children:[Object(E.jsx)(j.a,{item:!0,children:Object(E.jsx)(y.a,{sx:{verticalAlign:"sub",fontSize:"1.125rem",mr:.625}})}),Object(E.jsx)(j.a,{item:!0,xs:!0,zeroMinWidth:!0,children:Object(E.jsx)(d.a,{variant:"body2",children:t.role})})]})}),Object(E.jsx)(j.a,{item:!0,xs:12,children:Object(E.jsxs)(j.a,{container:!0,spacing:1,children:[Object(E.jsx)(j.a,{item:!0,children:Object(E.jsx)(w.a,{sx:{verticalAlign:"sub",fontSize:"1.125rem",mr:.625}})}),Object(E.jsxs)(j.a,{item:!0,xs:!0,zeroMinWidth:!0,children:[Object(E.jsxs)(d.a,{variant:"body2",sx:{mb:.625},children:[t.work_email,Object(E.jsx)(d.a,{component:"span",color:"primary",children:"work"})]}),Object(E.jsxs)(d.a,{variant:"body2",children:[t.personal_email,Object(E.jsx)(d.a,{component:"span",color:"secondary",children:"Personal"})]})]})]})}),Object(E.jsx)(j.a,{item:!0,xs:12,children:Object(E.jsxs)(j.a,{container:!0,spacing:1,children:[Object(E.jsx)(j.a,{item:!0,children:Object(E.jsx)(k.a,{sx:{verticalAlign:"sub",fontSize:"1.125rem",mr:.625}})}),Object(E.jsxs)(j.a,{item:!0,xs:!0,zeroMinWidth:!0,children:[Object(E.jsxs)(d.a,{variant:"body2",sx:{mb:.625},children:[t.work_phone," ",Object(E.jsx)(d.a,{component:"span",color:"primary",children:"work"})]}),Object(E.jsxs)(d.a,{variant:"body2",children:[t.personal_phone," ",Object(E.jsx)(d.a,{component:"span",color:"secondary",children:"Personal"})]})]})]})}),Object(E.jsx)(j.a,{item:!0,xs:12,children:Object(E.jsxs)(j.a,{container:!0,spacing:1,children:[Object(E.jsx)(j.a,{item:!0,children:Object(E.jsx)(H.a,{sx:{verticalAlign:"sub",fontSize:"1.125rem",mr:.625}})}),Object(E.jsx)(j.a,{item:!0,xs:!0,zeroMinWidth:!0,children:Object(E.jsx)(d.a,{variant:"body2",children:t.location})})]})}),Object(E.jsx)(j.a,{item:!0,xs:12,children:Object(E.jsxs)(j.a,{container:!0,spacing:1,children:[Object(E.jsx)(j.a,{item:!0,children:Object(E.jsx)(V.a,{sx:{verticalAlign:"sub",fontSize:"1.125rem",mr:.625}})}),Object(E.jsx)(j.a,{item:!0,xs:!0,zeroMinWidth:!0,children:Object(E.jsx)(d.a,{variant:"body2",children:"November 30, 1997"})})]})}),Object(E.jsx)(j.a,{item:!0,xs:12,children:Object(E.jsxs)(j.a,{container:!0,spacing:1,children:[Object(E.jsx)(j.a,{item:!0,children:Object(E.jsx)(S.a,{sx:{verticalAlign:"sub",fontSize:"1.125rem",mr:.625}})}),Object(E.jsx)(j.a,{item:!0,xs:!0,zeroMinWidth:!0,children:Object(E.jsx)(d.a,{variant:"body2",sx:{mb:.625},children:t.birthdayText})})]})})]})})}))}},1301:function(e,t,a){"use strict";var n=a(100);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=n(a(101)),i=a(1),r=(0,c.default)([(0,i.jsx)("path",{d:"m15.53 14.92-1.08 1.07c-1.3 1.3-3.58 1.31-4.89 0l-1.07-1.07-1.09 1.07c-.64.64-1.5 1-2.4 1.01v3h14v-3c-.9-.01-1.76-.37-2.4-1.01l-1.07-1.07zM18 11H6c-.55 0-1 .45-1 1v3.5c.51-.01.99-.21 1.34-.57l2.14-2.13 2.13 2.13c.74.74 2.03.74 2.77 0l2.14-2.13 2.13 2.13c.36.36.84.56 1.35.57V12c0-.55-.45-1-1-1z",opacity:".3"},"0"),(0,i.jsx)("path",{d:"M12 6c1.11 0 2-.9 2-2 0-.38-.1-.73-.29-1.03L12 0l-1.71 2.97c-.19.3-.29.65-.29 1.03 0 1.1.9 2 2 2zm6 3h-5V7h-2v2H6c-1.66 0-3 1.34-3 3v9c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-9c0-1.66-1.34-3-3-3zm1 11H5v-3c.9-.01 1.76-.37 2.4-1.01l1.09-1.07 1.07 1.07c1.31 1.31 3.59 1.3 4.89 0l1.08-1.07 1.07 1.07c.64.64 1.5 1 2.4 1.01v3zm0-4.5c-.51-.01-.99-.2-1.35-.57l-2.13-2.13-2.14 2.13c-.74.74-2.03.74-2.77 0L8.48 12.8l-2.14 2.13c-.35.36-.83.56-1.34.57V12c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v3.5z"},"1")],"CakeTwoTone");t.default=r},1302:function(e,t,a){"use strict";var n=a(100);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=n(a(101)),i=a(1),r=(0,c.default)([(0,i.jsx)("path",{d:"M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm1 13h-2v-6h2v6zm0-8h-2V7h2v2z",opacity:".3"},"0"),(0,i.jsx)("path",{d:"M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"},"1")],"InfoTwoTone");t.default=r},1303:function(e,t,a){"use strict";var n=a(4),c=a(13),i=a(88),r=a(0),s=a.n(r),l=a(27),j=a(1051),o=a(47),d=a(572),h=a(640),x=a(56),b=a(651),u=a(253),O=a(256),m=a(648),v=a(634),p=a(641),f=a(1969),z=a(576),g=a(124),y=a.n(g),M=a(121),w=a(57),C=a(693),k=a(725),_=a.n(k),H=a(1007),T=a.n(H),V=a(1008),W=a.n(V),S=a(769),P=a.n(S),A=a(901),I=a.n(A),L=a(1304),E=a.n(L),N=a(1305),B=a.n(N),U=a(1306),F=a.n(U),J=a(1),Y=["user","onCancel","onSave"],D=a(717),R=[{label:"Work",id:1},{label:"Personal",id:2}];function X(e){var t=e.children,a=e.window,n=Object(j.a)({disableHysteresis:!0,threshold:130,target:a||void 0});return s.a.cloneElement(t,{style:{position:n?"fixed":"relative",top:n?83:0,width:n?318:"100%"}})}t.a=function(e){var t=e.user,a=e.onCancel,s=e.onSave,j=Object(i.a)(e,Y),g=Object(l.a)(),k=Object(r.useState)(t),H=Object(c.a)(k,2),V=H[0],S=H[1];Object(r.useEffect)((function(){S(t)}),[t]);var A=C.default;return V&&(A=V.avatar&&D("./".concat(V.avatar)).default),Object(J.jsx)(X,Object(n.a)(Object(n.a)({},j),{},{children:Object(J.jsx)(M.a,{sx:{background:"dark"===g.palette.mode?g.palette.dark.main:g.palette.grey[50],width:"100%",maxWidth:342},content:!1,children:Object(J.jsx)(y.a,{style:{height:"calc(100vh - 83px)",overflowX:"hidden"},children:Object(J.jsxs)(o.a,{container:!0,spacing:w.c,sx:{p:3},children:[Object(J.jsx)(o.a,{item:!0,xs:12,children:Object(J.jsxs)(o.a,{container:!0,alignItems:"center",spacing:1,children:[Object(J.jsx)(o.a,{item:!0,children:Object(J.jsx)(d.a,{alt:"User 3",src:A,sx:{width:64,height:64}})}),Object(J.jsx)(o.a,{item:!0,xs:!0,zeroMinWidth:!0,children:Object(J.jsxs)(o.a,{container:!0,spacing:1,children:[Object(J.jsx)(o.a,{item:!0,xs:12,children:Object(J.jsxs)("label",{htmlFor:"containedButtonFile",children:[Object(J.jsx)("input",{accept:"image/*",style:{opacity:0,position:"fixed",zIndex:1,padding:.5,cursor:"pointer"},id:"containedButtonFile",multiple:!0,type:"file"}),Object(J.jsx)(h.a,{variant:"outlined",size:"small",startIcon:Object(J.jsx)(E.a,{}),children:"Upload"})]})}),Object(J.jsx)(o.a,{item:!0,xs:12,children:Object(J.jsx)(x.a,{variant:"caption",children:"Image size should be 125kb Max."})})]})}),Object(J.jsx)(o.a,{item:!0,children:Object(J.jsx)(b.a,{onClick:function(){return a(V)},size:"large",children:Object(J.jsx)(_.a,{})})})]})}),Object(J.jsx)(o.a,{item:!0,xs:12,children:Object(J.jsx)(u.a,{})}),Object(J.jsx)(o.a,{item:!0,xs:12,children:Object(J.jsxs)(O.a,{fullWidth:!0,children:[Object(J.jsx)(m.a,{children:"Name"}),Object(J.jsx)(v.a,{value:V.name,onChange:function(e){return S(Object(n.a)(Object(n.a)({},V),{},{name:e.target.value}))},type:"text",label:"Name",startAdornment:Object(J.jsx)(p.a,{position:"start",children:Object(J.jsx)(T.a,{})})})]})}),Object(J.jsx)(o.a,{item:!0,xs:12,children:Object(J.jsxs)(O.a,{fullWidth:!0,children:[Object(J.jsx)(m.a,{children:"Company"}),Object(J.jsx)(v.a,{value:V.company,onChange:function(e){return S(Object(n.a)(Object(n.a)({},V),{},{company:e.target.value}))},type:"text",label:"Company",startAdornment:Object(J.jsx)(p.a,{position:"start",children:Object(J.jsx)(T.a,{})})})]})}),Object(J.jsx)(o.a,{item:!0,xs:12,children:Object(J.jsxs)(O.a,{fullWidth:!0,children:[Object(J.jsx)(m.a,{children:"Job Title"}),Object(J.jsx)(v.a,{value:V.role,onChange:function(e){return S(Object(n.a)(Object(n.a)({},V),{},{role:e.target.value}))},type:"text",label:"Job Title",startAdornment:Object(J.jsx)(p.a,{position:"start",children:Object(J.jsx)(W.a,{})})})]})}),Object(J.jsx)(o.a,{item:!0,xs:12,children:Object(J.jsx)(f.a,{multiple:!0,options:R,getOptionLabel:function(e){return e.label},defaultValue:[R[0]],renderInput:function(e){return Object(J.jsx)(z.a,Object(n.a)({},e))}})}),Object(J.jsx)(o.a,{item:!0,xs:12,children:Object(J.jsxs)(O.a,{fullWidth:!0,children:[Object(J.jsx)(m.a,{children:"Email"}),Object(J.jsx)(v.a,{value:V.work_email,onChange:function(e){return S(Object(n.a)(Object(n.a)({},V),{},{work_email:e.target.value}))},type:"text",label:"Email",startAdornment:Object(J.jsx)(p.a,{position:"start",children:Object(J.jsx)(P.a,{})})})]})}),Object(J.jsx)(o.a,{item:!0,xs:12,children:Object(J.jsx)(f.a,{multiple:!0,options:R,getOptionLabel:function(e){return e.label},defaultValue:[R[1]],renderInput:function(e){return Object(J.jsx)(z.a,Object(n.a)({},e))}})}),Object(J.jsx)(o.a,{item:!0,xs:12,children:Object(J.jsxs)(O.a,{fullWidth:!0,children:[Object(J.jsx)(m.a,{children:"Email"}),Object(J.jsx)(v.a,{value:V.personal_email,onChange:function(e){return S(Object(n.a)(Object(n.a)({},V),{},{personal_email:e.target.value}))},type:"text",label:"Email",startAdornment:Object(J.jsx)(p.a,{position:"start",children:Object(J.jsx)(P.a,{})})})]})}),Object(J.jsx)(o.a,{item:!0,xs:12,children:Object(J.jsx)(h.a,{variant:"text",startIcon:Object(J.jsx)(B.a,{}),children:"Add New Email"})}),Object(J.jsx)(o.a,{item:!0,xs:12,children:Object(J.jsx)(f.a,{multiple:!0,options:R,getOptionLabel:function(e){return e.label},defaultValue:[R[0]],renderInput:function(e){return Object(J.jsx)(z.a,Object(n.a)({},e))}})}),Object(J.jsx)(o.a,{item:!0,xs:12,children:Object(J.jsxs)(O.a,{fullWidth:!0,children:[Object(J.jsx)(m.a,{children:"Phone Number"}),Object(J.jsx)(v.a,{value:V.work_phone,onChange:function(e){S(Object(n.a)(Object(n.a)({},V),{},{work_phone:e.target.value}))},type:"text",label:"Phone Number",startAdornment:Object(J.jsx)(p.a,{position:"start",children:Object(J.jsx)(I.a,{})})})]})}),Object(J.jsx)(o.a,{item:!0,xs:12,children:Object(J.jsx)(f.a,{multiple:!0,options:R,getOptionLabel:function(e){return e.label},defaultValue:[R[1]],renderInput:function(e){return Object(J.jsx)(z.a,Object(n.a)({},e))}})}),Object(J.jsx)(o.a,{item:!0,xs:12,children:Object(J.jsxs)(O.a,{fullWidth:!0,children:[Object(J.jsx)(m.a,{children:"Phone Number"}),Object(J.jsx)(v.a,{value:V.personal_phone,onChange:function(e){S(Object(n.a)(Object(n.a)({},V),{},{personal_phone:e.target.value}))},type:"text",label:"Phone Number",startAdornment:Object(J.jsx)(p.a,{position:"start",children:Object(J.jsx)(I.a,{})})})]})}),Object(J.jsx)(o.a,{item:!0,xs:12,children:Object(J.jsx)(h.a,{variant:"text",startIcon:Object(J.jsx)(B.a,{}),children:"Add New Phone"})}),Object(J.jsx)(o.a,{item:!0,xs:12,children:Object(J.jsxs)(O.a,{fullWidth:!0,children:[Object(J.jsx)(m.a,{children:"Birthday"}),Object(J.jsx)(v.a,{defaultValue:"November 30, 1997",type:"text",label:"Birthday",endAdornment:Object(J.jsx)(p.a,{position:"end",children:Object(J.jsx)(F.a,{})})})]})}),Object(J.jsx)(o.a,{item:!0,xs:12,children:Object(J.jsxs)(O.a,{fullWidth:!0,children:[Object(J.jsx)(m.a,{children:"Bio"}),Object(J.jsx)(v.a,{defaultValue:V.birthdayText,onChange:function(e){return S(Object(n.a)(Object(n.a)({},V),{},{birthdayText:e.target.value}))},type:"text",label:"Bio",multiline:!0,rows:3})]})}),Object(J.jsx)(o.a,{item:!0,xs:12,children:Object(J.jsxs)(o.a,{container:!0,spacing:1,children:[Object(J.jsx)(o.a,{item:!0,xs:6,children:Object(J.jsx)(h.a,{variant:"contained",fullWidth:!0,onClick:function(){return s(V)},children:"Save"})}),Object(J.jsx)(o.a,{item:!0,xs:6,children:Object(J.jsx)(h.a,{variant:"outlined",fullWidth:!0,onClick:function(){return a(V)},children:"Cancel"})})]})})]})})})}))}},1304:function(e,t,a){"use strict";var n=a(100);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=n(a(101)),i=a(1),r=(0,c.default)([(0,i.jsx)("path",{d:"M9.83 8H11v6h2V8h1.17L12 5.83z",opacity:".3"},"0"),(0,i.jsx)("path",{d:"m12 3-7 7h4v6h6v-6h4l-7-7zm1 5v6h-2V8H9.83L12 5.83 14.17 8H13zM5 18h14v2H5z"},"1")],"UploadTwoTone");t.default=r},1305:function(e,t,a){"use strict";var n=a(100);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=n(a(101)),i=a(1),r=(0,c.default)((0,i.jsx)("path",{d:"M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"ControlPoint");t.default=r},1306:function(e,t,a){"use strict";var n=a(100);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=n(a(101)),i=a(1),r=(0,c.default)([(0,i.jsx)("path",{d:"M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V9h14v10zm0-12H5V5h14v2zm-7 4H7v5h5v-5z"},"0"),(0,i.jsx)("path",{d:"M5 5h14v2H5z",opacity:".3"},"1")],"TodayTwoTone");t.default=r},1307:function(e,t,a){"use strict";var n=a(100);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=n(a(101)),i=a(1),r=(0,c.default)((0,i.jsx)("path",{d:"M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"AddCircleOutlineOutlined");t.default=r},2133:function(e,t,a){"use strict";a.r(t);var n=a(63),c=a.n(n),i=a(89),r=a(13),s=a(0),l=a.n(s),j=a(47),o=a(634),d=a(641),h=a(640),x=a(56),b=a(1300),u=a(1303),O=a(5),m=a(6),v=a(27),p=a(2128),f=a(654),z=a(57),g=a(694),y=a.n(g),M=a(1003),w=a.n(M),C=a(1),k=a(717),_=Object(m.a)("div")((function(e){var t=e.theme;return{padding:"15px 0",borderBottom:"dark"===t.palette.mode?"none":"1px solid",borderTop:"dark"===t.palette.mode?"none":"1px solid",borderColor:"".concat(t.palette.grey[100],"!important")}})),H=function(e){var t=e.avatar,a=e.name,n=e.role,c=e.onActive,i=Object(v.a)(),r=t&&k("./".concat(t)).default;return Object(C.jsx)(_,{children:Object(C.jsxs)(j.a,{container:!0,alignItems:"center",spacing:z.c,children:[Object(C.jsx)(j.a,{item:!0,xs:12,sm:6,onClick:function(){c&&c()},style:{cursor:"pointer"},children:Object(C.jsxs)(j.a,{container:!0,alignItems:"center",spacing:z.c,sx:{flexWrap:"nowrap"},children:[Object(C.jsx)(j.a,{item:!0,children:Object(C.jsx)(f.a,{alt:a,src:r,sx:{width:48,height:48}})}),Object(C.jsx)(j.a,{item:!0,sm:!0,zeroMinWidth:!0,children:Object(C.jsxs)(j.a,{container:!0,spacing:0,children:[Object(C.jsx)(j.a,{item:!0,xs:12,children:Object(C.jsx)(x.a,{variant:"h4",component:"div",children:a})}),Object(C.jsx)(j.a,{item:!0,xs:12,children:Object(C.jsx)(x.a,{variant:"caption",children:n})})]})})]})}),Object(C.jsx)(j.a,{item:!0,xs:12,sm:6,children:Object(C.jsxs)(j.a,{container:!0,spacing:1,sx:Object(O.a)({justifyContent:"flex-end"},i.breakpoints.down("md"),{justifyContent:"flex-start"}),children:[Object(C.jsx)(j.a,{item:!0,children:Object(C.jsx)(p.a,{placement:"top",title:"Message",children:Object(C.jsx)(h.a,{variant:"outlined",sx:{minWidth:32,height:32,p:0},children:Object(C.jsx)(y.a,{fontSize:"small"})})})}),Object(C.jsx)(j.a,{item:!0,children:Object(C.jsx)(p.a,{placement:"top",title:"Call",children:Object(C.jsx)(h.a,{variant:"outlined",color:"secondary",sx:{minWidth:32,height:32,p:0},children:Object(C.jsx)(w.a,{fontSize:"small"})})})})]})})]})})},T=a(257),V=a(259),W=a(693),S=a(29),P=a(1307),A=a.n(P);t.default=function(){var e=l.a.useState({}),t=Object(r.a)(e,2),a=t[0],n=t[1],s=function(){var e=Object(i.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V.a.get("/api/chat/users");case 2:return t=e.sent,n(t.data.users.reduce((function(e,t){var a=t.name[0].toUpperCase();return Object.prototype.hasOwnProperty.call(e,a)?e[a].push(t):e[a]=[t],e}),{})),e.abrupt("return",t.data.users);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();l.a.useEffect((function(){s()}),[]);var O=l.a.useState({}),m=Object(r.a)(O,2),v=m[0],p=m[1],f=function(){var e=Object(i.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V.a.post("/api/chat/users/modify",t);case 2:s().then((function(e){if(v){var t=e.findIndex((function(e){return e.id===v.id}));t>-1&&p(e[t])}}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=l.a.useState(!1),y=Object(r.a)(g,2),M=y[0],w=y[1],k=l.a.useState(!1),_=Object(r.a)(k,2),P=_[0],I=_[1];return Object(C.jsx)(T.a,{title:"Contact List",children:Object(C.jsxs)(j.a,{container:!0,spacing:z.c,children:[Object(C.jsx)(j.a,{item:!0,xs:!0,zeroMinWidth:!0,sx:{display:M||P?{xs:"none",md:"block"}:"block"},children:Object(C.jsxs)(j.a,{container:!0,alignItems:"center",spacing:z.c,children:[Object(C.jsx)(j.a,{item:!0,xs:!0,zeroMinWidth:!0,children:Object(C.jsx)(o.a,{id:"input-search-card-style1",placeholder:"Search Contact",fullWidth:!0,startAdornment:Object(C.jsx)(d.a,{position:"start",children:Object(C.jsx)(S.F,{stroke:1.5,size:"1rem"})})})}),Object(C.jsx)(j.a,{item:!0,children:Object(C.jsx)(h.a,{variant:"contained",size:"large",startIcon:Object(C.jsx)(A.a,{}),sx:{px:2.75,py:1.5},onClick:function(){p({name:"",company:"",role:"",work_email:"",personal_email:"",work_phone:"",personal_phone:"",location:"USA",image:W.default,status:"I am online",lastMessage:"2h ago",birthdayText:""}),w(!1),I(!0)},children:"Add"})}),Object.keys(a).map((function(e,t){return Object(C.jsxs)(l.a.Fragment,{children:[Object(C.jsx)(j.a,{item:!0,xs:12,children:Object(C.jsx)(x.a,{variant:"h4",color:"primary",sx:{fontSize:"1rem"},children:e.toUpperCase()})}),Object(C.jsx)(j.a,{item:!0,xs:12,children:Object(C.jsx)(j.a,{container:!0,direction:"row",spacing:0,children:a[e].map((function(e,t){return Object(C.jsx)(j.a,{item:!0,xs:12,children:Object(C.jsx)(H,{avatar:e.avatar,name:e.name,role:e.role,email:e.work_email,contact:e.phone,location:e.location,onActive:function(){p(e),w(!0),I(!1)}})},t)}))})})]},t)}))]})}),M&&Object(C.jsx)(j.a,{item:!0,sx:{width:342,margin:{xs:"0 auto",md:"initial"}},children:Object(C.jsx)(b.a,{user:v,onEditClick:function(){w(!1),I(!0)},onClose:function(){w(!1),I(!1)}})}),P&&Object(C.jsx)(j.a,{item:!0,sx:{width:342,margin:{xs:"0 auto",md:"initial"}},children:Object(C.jsx)(u.a,{user:v,onSave:function(e){e.id&&w(!0),I(!1),f(e)},onCancel:function(e){e.id&&w(!0),I(!1)}})})]})})}},694:function(e,t,a){"use strict";var n=a(100);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=n(a(101)),i=a(1),r=(0,c.default)([(0,i.jsx)("path",{d:"m4 18 2-2h14V4H4z",opacity:".3"},"0"),(0,i.jsx)("path",{d:"M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"},"1")],"ChatBubbleTwoTone");t.default=r},725:function(e,t,a){"use strict";var n=a(100);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=n(a(101)),i=a(1),r=(0,c.default)([(0,i.jsx)("path",{d:"M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm4 10.59L14.59 16 12 13.41 9.41 16 8 14.59 10.59 12 8 9.41 9.41 8 12 10.59 14.59 8 16 9.41 13.41 12 16 14.59z",opacity:".3"},"0"),(0,i.jsx)("path",{d:"M14.59 8 12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"},"1")],"HighlightOffTwoTone");t.default=r},741:function(e,t,a){"use strict";var n=a(100);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=n(a(101)),i=a(1),r=(0,c.default)([(0,i.jsx)("path",{fillOpacity:".3",d:"M12 3C9.19 3 6 5.11 6 9.13c0 2.68 2 5.49 6 8.44 4-2.95 6-5.77 6-8.44C18 5.11 14.81 3 12 3z"},"0"),(0,i.jsx)("path",{d:"M12 4c1.93 0 5 1.4 5 5.15 0 2.16-1.72 4.67-5 7.32-3.28-2.65-5-5.17-5-7.32C7 5.4 10.07 4 12 4m0-2C8.73 2 5 4.46 5 9.15c0 3.12 2.33 6.41 7 9.85 4.67-3.44 7-6.73 7-9.85C19 4.46 15.27 2 12 2z"},"1"),(0,i.jsx)("path",{d:"M12 7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM5 20h14v2H5v-2z"},"2")],"PinDropTwoTone");t.default=r},769:function(e,t,a){"use strict";var n=a(100);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=n(a(101)),i=a(1),r=(0,c.default)([(0,i.jsx)("path",{d:"M20 6H4l8 4.99zM4 8v10h16V8l-8 5z",opacity:".3"},"0"),(0,i.jsx)("path",{d:"M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2-8 4.99L4 6h16zm0 12H4V8l8 5 8-5v10z"},"1")],"MailTwoTone");t.default=r},900:function(e,t,a){"use strict";var n=a(100);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=n(a(101)),i=a(1),r=(0,c.default)((0,i.jsx)("path",{d:"M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10zm0-18c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9L7.1 5.69C8.45 4.63 10.15 4 12 4zM5.69 7.1 16.9 18.31C15.55 19.37 13.85 20 12 20c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9z"}),"NotInterestedTwoTone");t.default=r},901:function(e,t,a){"use strict";var n=a(100);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=n(a(101)),i=a(1),r=(0,c.default)([(0,i.jsx)("path",{d:"M19 17.47c-.88-.07-1.75-.22-2.6-.45l-1.19 1.19c1.2.41 2.48.67 3.8.75v-1.49zM6.54 5h-1.5c.09 1.32.35 2.59.75 3.8l1.2-1.2c-.24-.84-.39-1.71-.45-2.6z",opacity:".3"},"0"),(0,i.jsx)("path",{d:"M20 21c.55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17zm-3.6-3.98c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19zM5.03 5h1.5c.07.89.22 1.76.46 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79z"},"1")],"CallTwoTone");t.default=r}}]);
//# sourceMappingURL=46.4bc6bf65.chunk.js.map