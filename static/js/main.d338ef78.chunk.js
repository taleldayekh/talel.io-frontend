(this["webpackJsonptalel.io-frontend"]=this["webpackJsonptalel.io-frontend"]||[]).push([[0],{50:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n(24),a=n.n(r),o=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,51)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,o=e.getTTFB;n(t),c(t),r(t),a(t),o(t)}))},s=n(3),i=n(6),u=n(7),l=Object(i.a)((function t(e){Object(u.a)(this,t),this.accessToken=void 0,this.accessToken=e})),j=n(2),h=Object(c.createContext)({authenticationContext:{token:new l(""),isLoggedIn:!1},setAuthenticationContext:function(){return null}}),p=function(t){var e=t.children,n=Object(c.useState)({token:new l(""),isLoggedIn:!1}),r=Object(s.a)(n,2),a=r[0],o=r[1];return Object(j.jsx)(h.Provider,{value:{authenticationContext:a,setAuthenticationContext:o},children:e})},d=n(9),b=n.n(d),f=n(10),O=n(8),x=n.n(O),v=Object(i.a)((function t(e){Object(u.a)(this,t),this.message=void 0,this.status=void 0,this.type=void 0,this.message=e.message,this.status=e.status,this.type=e.type})),g=function(){function t(){Object(u.a)(this,t)}return Object(i.a)(t,null,[{key:"toErrorModel",value:function(t){return new v(t)}}]),t}(),k={api:{backendApiUrl:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_V1_BASE_URL}}.api.backendApiUrl,w="accounts/login",C=function(){function t(){Object(u.a)(this,t)}return Object(i.a)(t,[{key:"error",value:function(t){var e=t;if(b.a.isAxiosError(e)&&e.response){var n=g.toErrorModel(e.response.data);return n}return t}},{key:"newAccessTokenRequest",value:function(){var t=Object(f.a)(x.a.mark((function t(e){var n;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=b.a.create({withCredentials:!0}),t.abrupt("return",n.post("".concat(k,"/").concat(e)));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"post",value:function(){var t=Object(f.a)(x.a.mark((function t(e,n,c){var r;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=[w].includes(e),t.prev=1,!c){t.next=6;break}return t.next=5,this.newAccessTokenRequest(e);case 5:case 8:return t.abrupt("return",t.sent);case 6:return t.next=8,b.a.post("".concat(k,"/").concat(e),n||void 0,r?{withCredentials:!0}:void 0);case 11:throw t.prev=11,t.t0=t.catch(1),this.error(t.t0);case 14:case"end":return t.stop()}}),t,this,[[1,11]])})));return function(e,n,c){return t.apply(this,arguments)}}()}]),t}(),m=new C,A=function(){function t(){Object(u.a)(this,t)}return Object(i.a)(t,null,[{key:"toAccessToken",value:function(t){return new l(t.access_token)}}]),t}(),T=function(){function t(e){Object(u.a)(this,t),this.httpClient=void 0,this.httpClient=e}return Object(i.a)(t,[{key:"login",value:function(){var t=Object(f.a)(x.a.mark((function t(e,n){var c,r,a;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c={email:e,password:n},t.next=3,this.httpClient.post(w,c);case 3:return r=t.sent,a=A.toAccessToken(r.data),t.abrupt("return",a);case 6:case"end":return t.stop()}}),t,this)})));return function(e,n){return t.apply(this,arguments)}}()},{key:"getNewAccessToken",value:function(){var t=Object(f.a)(x.a.mark((function t(){var e,n;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.httpClient.post("accounts/token");case 2:return e=t.sent,n=A.toAccessToken(e.data),t.abrupt("return",n);case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()}]),t}(),E=function(){var t=Object(c.useContext)(h).setAuthenticationContext,e=Object(c.useState)(new T(m)),n=Object(s.a)(e,1)[0];return{accessTokenHasExpired:function(t){var e=t.split(".")[1],n=JSON.parse(window.atob(e)).exp;return Date.now()>=1e3*n},requestRequiresAuthentication:function(t){return[].some((function(e){return e.includes(t)}))},refreshAccessToken:function(){n.getNewAccessToken().then((function(e){console.log(e),t({token:e,isLoggedIn:!0})})).catch((function(t){console.warn(t)}))}}},S=n(12),y=n(1),_=function(t){var e=t.children;return Object(c.useContext)(h).authenticationContext.isLoggedIn?e:Object(j.jsx)(y.a,{to:"/login"})},P=n(11),L=function(t){var e=t.updateEmail,n=t.updatePassword,c=t.login;return Object(j.jsxs)("form",{onSubmit:c,children:[Object(j.jsx)("input",{onChange:function(t){return e(t.target.value)}}),Object(j.jsx)("input",{onChange:function(t){return n(t.target.value)}}),Object(j.jsx)("input",{type:"submit",value:"Login"})]})},I=function(t){var e=t.updateEmail,n=t.updatePassword,c=t.login;return Object(j.jsx)(L,{updateEmail:e,updatePassword:n,login:c})},R=function(){var t=Object(c.useContext)(h),e=t.authenticationContext,n=t.setAuthenticationContext,r=E(),a=Object(c.useState)(new T(m)),o=Object(s.a)(a,1)[0],i=Object(c.useState)({email:"",password:""}),u=Object(s.a)(i,2),l=u[0],p=u[1];Object(c.useEffect)((function(){r.refreshAccessToken()}),[]);return e.isLoggedIn?Object(j.jsx)(y.a,{to:"/admin/articles"}):Object(j.jsx)(I,{updateEmail:function(t){p(Object(P.a)(Object(P.a)({},l),{},{email:t}))},updatePassword:function(t){p(Object(P.a)(Object(P.a)({},l),{},{password:t}))},login:function(t){o.login(l.email,l.password).then((function(t){n({token:t,isLoggedIn:!0})})).catch((function(t){console.log(t)})),t.preventDefault()}})},q=function(){return Object(j.jsx)("p",{children:"Protected Hello World"})},D=function(){return Object(j.jsx)(S.a,{children:Object(j.jsxs)(y.d,{children:[Object(j.jsx)(y.b,{path:"/",element:Object(j.jsx)("p",{children:"This is the landing page"})}),Object(j.jsx)(y.b,{path:"/login",element:Object(j.jsx)(R,{})}),Object(j.jsx)(y.b,{path:"/admin/*",element:Object(j.jsx)(_,{children:Object(j.jsx)(y.d,{children:Object(j.jsx)(y.b,{path:"articles",element:Object(j.jsx)(q,{})})})})})]})})},F=function(){var t=Object(c.useContext)(h).authenticationContext,e=E(),n=t.token.accessToken,r=b.a.interceptors.request.use((function(t){var c=t.url?t.url:"";return n&&("post"!==t.method||e.requestRequiresAuthentication(c))?(e.accessTokenHasExpired(n)&&e.refreshAccessToken(),t.headers.Authorization="Bearer ".concat(n),t):t}));return Object(c.useEffect)((function(){return function(){b.a.interceptors.request.eject(r)}})),Object(j.jsx)(D,{})};a.a.render(Object(j.jsx)(p,{children:Object(j.jsx)(F,{})}),document.getElementById("root")),o()}},[[50,1,2]]]);
//# sourceMappingURL=main.d338ef78.chunk.js.map