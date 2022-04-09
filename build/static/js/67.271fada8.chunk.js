(this["webpackJsonpberry-material-react-ts"]=this["webpackJsonpberry-material-react-ts"]||[]).push([[67],{1032:function(e,t,n){"use strict";var a=n(4),r=n(63),i=n.n(r),c=n(89),o=n(13),s=n(0),l=n.n(s),d=n(32),u=n(53),j=n(27),b=n(614),m=n(47),p=n(640),h=n(145),x=n(253),O=n(56),g=n(256),f=n(648),v=n(634),w=n(650),y=n(641),k=n(651),C=n(563),S=n(146),z=n(676),P=n(667),I=n(669),B=n(125),M=n(677),R=n(258),E=n(700),D=n.n(E),H=n(712),V=n.n(H),W=n(776),A=n(1);t.a=function(e,t){var n=Object.assign({},t),r=Object(j.a)(),s=Object(M.a)(),E=Object(b.a)(r.breakpoints.down("md")),H=Object(d.d)((function(e){return e.customization})),F=l.a.useState(!0),G=Object(o.a)(F,2),q=G[0],L=G[1],_=Object(B.a)(),J=_.firebaseEmailPasswordSignIn,T=_.firebaseGoogleSignIn,U=function(){var e=Object(c.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}(),K=l.a.useState(!1),N=Object(o.a)(K,2),Q=N[0],X=N[1],Y=function(){X(!Q)},Z=function(e){e.preventDefault()};return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsxs)(m.a,{container:!0,direction:"column",justifyContent:"center",spacing:2,children:[Object(A.jsx)(m.a,{item:!0,xs:12,children:Object(A.jsx)(R.a,{children:Object(A.jsxs)(p.a,{disableElevation:!0,fullWidth:!0,onClick:U,size:"large",variant:"outlined",sx:{color:"grey.700",backgroundColor:"dark"===r.palette.mode?r.palette.dark.main:r.palette.grey[50],borderColor:"dark"===r.palette.mode?r.palette.dark.light+20:r.palette.grey[100]},children:[Object(A.jsx)(h.a,{sx:{mr:{xs:1,sm:2,width:20}},children:Object(A.jsx)("img",{src:W.a,alt:"google",width:16,height:16,style:{marginRight:E?8:16}})}),"Sign in with Google"]})})}),Object(A.jsx)(m.a,{item:!0,xs:12,children:Object(A.jsxs)(h.a,{sx:{alignItems:"center",display:"flex"},children:[Object(A.jsx)(x.a,{sx:{flexGrow:1},orientation:"horizontal"}),Object(A.jsx)(p.a,{variant:"outlined",sx:{cursor:"unset",m:2,py:.5,px:7,borderColor:"dark"===r.palette.mode?"".concat(r.palette.dark.light+20," !important"):"".concat(r.palette.grey[100]," !important"),color:"".concat(r.palette.grey[900],"!important"),fontWeight:500,borderRadius:"".concat(H.borderRadius,"px")},disableRipple:!0,disabled:!0,children:"OR"}),Object(A.jsx)(x.a,{sx:{flexGrow:1},orientation:"horizontal"})]})}),Object(A.jsx)(m.a,{item:!0,xs:12,container:!0,alignItems:"center",justifyContent:"center",children:Object(A.jsx)(h.a,{sx:{mb:2},children:Object(A.jsx)(O.a,{variant:"subtitle1",children:"Sign in with Email address"})})})]}),Object(A.jsx)(I.b,{initialValues:{email:"info@codedthemes.com",password:"123456",submit:null},validationSchema:P.d().shape({email:P.f().email("Must be a valid email").max(255).required("Email is required"),password:P.f().max(255).required("Password is required")}),onSubmit:function(){var e=Object(c.a)(i.a.mark((function e(t,n){var a,r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.setErrors,r=n.setStatus,c=n.setSubmitting,e.prev=1,e.next=4,J(t.email,t.password).then((function(){}),(function(e){s.current&&(r({success:!1}),a({submit:e.message}),c(!1))}));case 4:e.next=10;break;case 6:e.prev=6,e.t0=e.catch(1),console.error(e.t0),s.current&&(r({success:!1}),a({submit:e.t0.message}),c(!1));case 10:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t,n){return e.apply(this,arguments)}}(),children:function(t){var i=t.errors,c=t.handleBlur,o=t.handleChange,s=t.handleSubmit,l=t.isSubmitting,d=t.touched,j=t.values;return Object(A.jsxs)("form",Object(a.a)(Object(a.a)({noValidate:!0,onSubmit:s},n),{},{children:[Object(A.jsxs)(g.a,{fullWidth:!0,error:Boolean(d.email&&i.email),sx:Object(a.a)({},r.typography.customInput),children:[Object(A.jsx)(f.a,{htmlFor:"outlined-adornment-email-login",children:"Email Address / Username"}),Object(A.jsx)(v.a,{id:"outlined-adornment-email-login",type:"email",value:j.email,name:"email",onBlur:c,onChange:o,label:"Email Address / Username",inputProps:{}}),d.email&&i.email&&Object(A.jsx)(w.a,{error:!0,id:"standard-weight-helper-text-email-login",children:i.email})]}),Object(A.jsxs)(g.a,{fullWidth:!0,error:Boolean(d.password&&i.password),sx:Object(a.a)({},r.typography.customInput),children:[Object(A.jsx)(f.a,{htmlFor:"outlined-adornment-password-login",children:"Password"}),Object(A.jsx)(v.a,{id:"outlined-adornment-password-login",type:Q?"text":"password",value:j.password,name:"password",onBlur:c,onChange:o,endAdornment:Object(A.jsx)(y.a,{position:"end",children:Object(A.jsx)(k.a,{"aria-label":"toggle password visibility",onClick:Y,onMouseDown:Z,edge:"end",size:"large",children:Q?Object(A.jsx)(D.a,{}):Object(A.jsx)(V.a,{})})}),label:"Password",inputProps:{}}),d.password&&i.password&&Object(A.jsx)(w.a,{error:!0,id:"standard-weight-helper-text-password-login",children:i.password})]}),Object(A.jsxs)(C.a,{direction:"row",alignItems:"center",justifyContent:"space-between",spacing:1,children:[Object(A.jsx)(S.a,{control:Object(A.jsx)(z.a,{checked:q,onChange:function(e){return L(e.target.checked)},name:"checked",color:"primary"}),label:"Remember me"}),Object(A.jsx)(O.a,{variant:"subtitle1",component:u.b,to:e.loginProp?"/pages/forgot-password/forgot-password".concat(e.loginProp):"/pages/forgot-password/forgot-password3",color:"secondary",sx:{textDecoration:"none"},children:"Forgot Password?"})]}),i.submit&&Object(A.jsx)(h.a,{sx:{mt:3},children:Object(A.jsx)(w.a,{error:!0,children:i.submit})}),Object(A.jsx)(h.a,{sx:{mt:2},children:Object(A.jsx)(R.a,{children:Object(A.jsx)(p.a,{disableElevation:!0,disabled:l,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"secondary",children:"Sign in"})})})]}))}})]})}},2125:function(e,t,n){"use strict";n.r(t);var a=n(53),r=n(6),i=n(27),c=n(614),o=n(47),s=n(563),l=n(56),d=n(253),u=n(686),j=n(666),b=n(1032),m=n(260),p=n(779),h=n(688),x=n.p+"static/media/auth-blue-card.50dcce67.svg",O=n.p+"static/media/auth-purple-card.fa4b18d7.svg",g=n(1),f=Object(r.a)("span")({"&:after":{content:'""',position:"absolute",top:"32%",left:"40%",width:313,backgroundSize:380,height:280,backgroundImage:"url(".concat(O,")"),backgroundRepeat:"no-repeat",backgroundPosition:"center",animation:"15s wings ease-in-out infinite"},"&:before":{content:'""',position:"absolute",top:"23%",left:"37%",width:243,height:210,backgroundSize:380,backgroundImage:"url(".concat(x,")"),backgroundRepeat:"no-repeat",backgroundPosition:"center",animation:"15s wings ease-in-out infinite",animationDelay:"1s"}}),v=[{title:"Components Based Design System",description:"Powerful and easy to use multipurpose theme"},{title:"Components Based Design System",description:"Powerful and easy to use multipurpose theme"},{title:"Components Based Design System",description:"Powerful and easy to use multipurpose theme"}];t.default=function(){var e=Object(i.a)(),t=Object(c.a)(e.breakpoints.down("md"));return Object(g.jsx)(u.a,{children:Object(g.jsxs)(o.a,{container:!0,justifyContent:"space-between",alignItems:"center",sx:{minHeight:"100vh"},children:[Object(g.jsx)(o.a,{item:!0,container:!0,justifyContent:"center",md:6,lg:7,sx:{my:3},children:Object(g.jsx)(j.a,{children:Object(g.jsxs)(o.a,{container:!0,spacing:2,justifyContent:"center",children:[Object(g.jsx)(o.a,{item:!0,xs:12,children:Object(g.jsxs)(o.a,{container:!0,direction:t?"column-reverse":"row",alignItems:t?"center":"inherit",justifyContent:t?"center":"space-between",children:[Object(g.jsx)(o.a,{item:!0,children:Object(g.jsxs)(s.a,{justifyContent:t?"center":"flex-start",textAlign:t?"center":"inherit",children:[Object(g.jsx)(l.a,{color:e.palette.secondary.main,gutterBottom:!0,variant:t?"h3":"h2",children:"Hi, Welcome Back"}),Object(g.jsx)(l.a,{color:"textPrimary",gutterBottom:!0,variant:"h4",children:"Login in to your account"})]})}),Object(g.jsx)(o.a,{item:!0,sx:{mb:{xs:3,sm:0}},children:Object(g.jsx)(a.b,{to:"#",children:Object(g.jsx)(m.a,{})})})]})}),Object(g.jsx)(o.a,{item:!0,xs:12,children:Object(g.jsx)(b.a,{loginProp:1})}),Object(g.jsx)(o.a,{item:!0,xs:12,children:Object(g.jsx)(d.a,{})}),Object(g.jsx)(o.a,{item:!0,xs:12,children:Object(g.jsx)(o.a,{item:!0,container:!0,direction:"column",alignItems:"flex-end",xs:12,children:Object(g.jsx)(l.a,{component:a.b,to:"/pages/register/register1",variant:"subtitle1",sx:{textDecoration:"none"},children:"Don't have an account?"})})})]})})}),Object(g.jsx)(o.a,{item:!0,md:6,lg:5,sx:{position:"relative",alignSelf:"stretch",display:{xs:"none",md:"block"}},children:Object(g.jsx)(p.a,{children:Object(g.jsxs)(o.a,{item:!0,container:!0,alignItems:"flex-end",justifyContent:"center",spacing:3,children:[Object(g.jsxs)(o.a,{item:!0,xs:12,children:[Object(g.jsx)("span",{}),Object(g.jsx)(f,{})]}),Object(g.jsx)(o.a,{item:!0,xs:12,children:Object(g.jsx)(o.a,{item:!0,container:!0,justifyContent:"center",sx:{pb:8},children:Object(g.jsx)(o.a,{item:!0,xs:10,lg:8,sx:{"& .slick-list":{pb:2}},children:Object(g.jsx)(h.a,{items:v})})})})]})})})]})})}},666:function(e,t,n){"use strict";var a=n(4),r=n(88),i=n(145),c=n(257),o=n(1),s=["children"];t.a=function(e){var t=e.children,n=Object(r.a)(e,s);return Object(o.jsx)(c.a,Object(a.a)(Object(a.a)({sx:{maxWidth:{xs:400,lg:475},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},content:!1},n),{},{children:Object(o.jsx)(i.a,{sx:{p:{xs:2,sm:3,xl:5}},children:t})}))}},676:function(e,t,n){"use strict";var a=n(5),r=n(7),i=n(2),c=n(0),o=(n(10),n(143)),s=n(119),l=n(169),d=n(31),u=n(1),j=Object(d.a)(Object(u.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),b=Object(d.a)(Object(u.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),m=Object(d.a)(Object(u.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),p=n(8),h=n(11),x=n(6),O=n(120),g=n(144);function f(e){return Object(O.a)("MuiCheckbox",e)}var v=Object(g.a)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),w=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size"],y=Object(x.a)(l.a,{shouldForwardProp:function(e){return Object(x.b)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.indeterminate&&t.indeterminate,"default"!==n.color&&t["color".concat(Object(p.a)(n.color))]]}})((function(e){var t,n=e.theme,r=e.ownerState;return Object(i.a)({color:n.palette.text.secondary},!r.disableRipple&&{"&:hover":{backgroundColor:Object(s.a)("default"===r.color?n.palette.action.active:n.palette[r.color].main,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==r.color&&(t={},Object(a.a)(t,"&.".concat(v.checked,", &.").concat(v.indeterminate),{color:n.palette[r.color].main}),Object(a.a)(t,"&.".concat(v.disabled),{color:n.palette.action.disabled}),t))})),k=Object(u.jsx)(b,{}),C=Object(u.jsx)(j,{}),S=Object(u.jsx)(m,{}),z=c.forwardRef((function(e,t){var n,a,s=Object(h.a)({props:e,name:"MuiCheckbox"}),l=s.checkedIcon,d=void 0===l?k:l,j=s.color,b=void 0===j?"primary":j,m=s.icon,x=void 0===m?C:m,O=s.indeterminate,g=void 0!==O&&O,v=s.indeterminateIcon,z=void 0===v?S:v,P=s.inputProps,I=s.size,B=void 0===I?"medium":I,M=Object(r.a)(s,w),R=g?z:x,E=g?z:d,D=Object(i.a)({},s,{color:b,indeterminate:g,size:B}),H=function(e){var t=e.classes,n=e.indeterminate,a=e.color,r={root:["root",n&&"indeterminate","color".concat(Object(p.a)(a))]},c=Object(o.a)(r,f,t);return Object(i.a)({},t,c)}(D);return Object(u.jsx)(y,Object(i.a)({type:"checkbox",inputProps:Object(i.a)({"data-indeterminate":g},P),icon:c.cloneElement(R,{fontSize:null!=(n=R.props.fontSize)?n:B}),checkedIcon:c.cloneElement(E,{fontSize:null!=(a=E.props.fontSize)?a:B}),ownerState:D,ref:t},M,{classes:H}))}));t.a=z},677:function(e,t,n){"use strict";var a=n(0);t.a=function(){var e=Object(a.useRef)(!0);return Object(a.useEffect)((function(){return function(){e.current=!1}}),[]),e}},686:function(e,t,n){"use strict";var a=n(6),r=Object(a.a)("div")((function(e){var t=e.theme;return{backgroundColor:"dark"===t.palette.mode?t.palette.background.default:t.palette.primary.light,minHeight:"100vh"}}));t.a=r},688:function(e,t,n){"use strict";var a=n(4),r=n(47),i=n(56),c=n(707),o=n.n(c),s=n(1);t.a=function(e){var t=e.items;return Object(s.jsx)(o.a,Object(a.a)(Object(a.a)({},{autoplay:!0,arrows:!1,dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1}),{},{children:t.map((function(e,t){return Object(s.jsxs)(r.a,{container:!0,direction:"column",alignItems:"center",spacing:3,textAlign:"center",children:[Object(s.jsx)(r.a,{item:!0,children:Object(s.jsx)(i.a,{variant:"h1",children:e.title})}),Object(s.jsx)(r.a,{item:!0,children:Object(s.jsx)(i.a,{variant:"subtitle2",children:e.description})})]},t)}))}))}},700:function(e,t,n){"use strict";var a=n(100);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(101)),i=n(1),c=(0,r.default)((0,i.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility");t.default=c},712:function(e,t,n){"use strict";var a=n(100);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(101)),i=n(1),c=(0,r.default)((0,i.jsx)("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff");t.default=c},776:function(e,t,n){"use strict";t.a=n.p+"static/media/social-google.a57081bd.svg"},779:function(e,t,n){"use strict";n(0);var a=n(27),r=n(145),i=n.p+"static/media/auth-pattern.d80b0e94.svg",c=n.p+"static/media/auth-pattern-dark.df61463d.svg",o=n(1);t.a=function(e){var t=e.children,n=Object(a.a)();return Object(o.jsx)(r.a,{component:"span",sx:{display:"flex",minHeight:"100vh",bgcolor:"dark"===n.palette.mode?n.palette.dark.dark:"#fff",backgroundImage:"dark"===n.palette.mode?"url(".concat(c,")"):"url(".concat(i,")"),position:"absolute",backgroundPosition:"0 0",overflow:"hidden",m:"0 0 0 auto",top:0,left:0,right:0,bottom:0,opacity:"dark"===n.palette.mode?.85:.9},children:t})}}}]);
//# sourceMappingURL=67.271fada8.chunk.js.map