(this["webpackJsonpreact-first-project"]=this["webpackJsonpreact-first-project"]||[]).push([[3],{277:function(e,t,a){"use strict";a.r(t);a(1);var c=a(12),r=a(34),n=a(11),i=a(115),o=a(116),s=a(25),l=a(35),m=a(0),h=Object(o.a)({form:"login"})((function(e){return Object(m.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(m.jsx)(i.a,{component:s.a,className:"login__form-item",placeholder:"Email",name:"email",validate:[l.b]}),Object(m.jsx)(i.a,{component:s.a,className:"login__form-item",placeholder:"Password",name:"password",validate:[l.b],type:"password"}),e.error&&Object(m.jsx)("div",{className:"validate__login_invalid-data",children:e.error}),Object(m.jsxs)("div",{className:"login__form-item",children:[Object(m.jsx)(i.a,{component:"Input",type:"checkbox",name:"rememberMe"}),"remember me"]}),e.captchaUrl&&Object(m.jsx)("img",{src:e.captchaUrl}),e.captchaUrl&&Object(m.jsx)(i.a,{component:s.a,className:"login__form-item",placeholder:"Symbols from image",name:"captcha",validate:[l.b]}),Object(m.jsx)("button",{children:"Login"})]})})),j=function(e){return e.isAuth?Object(m.jsx)(n.a,{to:"/profile"}):Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"LOGIN FORM"}),Object(m.jsx)(h,{captchaUrl:e.captchaUrl,onSubmit:function(t){e.login(t.captcha,t.email,t.password,t.rememberMe)}})]})};t.default=Object(c.b)((function(e){return{isAuth:e.auth.isAuth,captchaUrl:e.auth.captchaUrl}}),(function(e){return{login:function(t,a,c){e(Object(r.c)(t,a,c))}}}))((function(e){return Object(m.jsx)(j,{captchaUrl:e.captchaUrl,login:e.login,isAuth:e.isAuth})}))}}]);
//# sourceMappingURL=3.2ce0bc9c.chunk.js.map