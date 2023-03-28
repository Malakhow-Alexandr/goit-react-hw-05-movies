"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[656],{3656:function(e,n,r){r.r(n),r.d(n,{default:function(){return D}});var t=r(5861),a=r(9439),i=r(4687),o=r.n(i),s=r(2791),c=r(7689),l=r(1243),d=r(8261),p=r(7577),u=function(e){return e.map((function(e){var n=e.id,r=e.genres,t=e.title,a=e.vote_average,i=e.overview,o=e.release_date,s=e.poster_path;return{id:n,title:t,release:"(".concat((0,d.x)(o),")"),genres:"".concat(r.map((function(e){return e.name})).join(", ")),poster:s?"https://image.tmdb.org/t/p/w500".concat(s):p.q,userScore:"User Score: ".concat(Math.floor(a/10*100),"%"),overview:i}}))};l.Z.defaults.baseURL="https://api.themoviedb.org/3",l.Z.defaults.params={language:"en-US",api_key:"23b29489e8683674f60bf34658264370"};var h,x,g,f,v,m,j,w,Z=function(){var e=(0,t.Z)(o().mark((function e(n,r){var t,a,i,s;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.Z.get("/movie/".concat(n),{signal:r.signal});case 2:return t=e.sent,a=t.data,(i=[]).push(a),s=u(i),e.abrupt("return",s);case 8:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}(),b=r(168),k=r(7402),C=k.Z.section(h||(h=(0,b.Z)(["\n  display: flex;\n  gap: 20px;\n"]))),_=k.Z.img(x||(x=(0,b.Z)(["\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n"]))),y=r(184),S=function(e){var n=e.movie;return(0,y.jsx)(y.Fragment,{children:n.map((function(e){var n=e.release,r=e.genres,t=e.overview,a=e.poster,i=e.title,o=e.userScore,s=e.id;return(0,y.jsxs)(C,{children:[(0,y.jsx)(_,{src:a,alt:i,width:"350px",height:"525px"}),(0,y.jsxs)("div",{children:[(0,y.jsxs)("h2",{children:[i," ",(0,y.jsx)("span",{children:n})]}),(0,y.jsx)("p",{children:o}),(0,y.jsx)("h3",{children:"Overview"}),(0,y.jsx)("p",{children:t}),(0,y.jsx)("h4",{children:"Genres"}),(0,y.jsx)("p",{children:r})]})]},s)}))})},U=r(8966),L=r(1087),R=k.Z.section(g||(g=(0,b.Z)(["\n  padding: 15px 0px;\n"]))),A=k.Z.div(f||(f=(0,b.Z)(["\n  padding: 10px;\n  border-top: 1px solid black;\n  border-bottom: 1px solid black;\n  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;\n"]))),q=k.Z.h2(v||(v=(0,b.Z)(["\n  margin: 0;\n  padding: 0;\n"]))),z=k.Z.ul(m||(m=(0,b.Z)(["\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n"]))),I=(0,k.Z)(L.rU)(j||(j=(0,b.Z)(["\n  text-decoration: none;\n  font-weight: 500;\n  color: #000;\n  transition: color 250ms ease;\n  &:hover {\n    color: #03039c;\n  }\n"]))),M=function(){return(0,y.jsxs)(R,{children:[(0,y.jsxs)(A,{children:[(0,y.jsx)(q,{children:"Additional information"}),(0,y.jsxs)(z,{children:[(0,y.jsx)("li",{children:(0,y.jsx)(I,{to:"cast",children:"Cast"})}),(0,y.jsx)("li",{children:(0,y.jsx)(I,{to:"reviews",children:"Reviews"})})]})]}),(0,y.jsx)(s.Suspense,{fallback:(0,y.jsx)("div",{style:{marginLeft:"420px",marginRight:"auto"},children:(0,y.jsx)(U.Z1,{height:"80",width:"80",wrapperClass:"spinner-wrapper",ariaLabel:"three-circles-rotating",outerCircleColor:"#0a598d",innerCircleColor:"#260a8d",middleCircleColor:"#6a0474"})}),children:(0,y.jsx)(c.j3,{})})]})},O=r(9128),T=(0,k.Z)(L.rU)(w||(w=(0,b.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 0;\n  color: black;\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n\n  :hover {\n    color: orangered;\n  }\n"]))),B=function(e){var n=e.to,r=e.children;return(0,y.jsxs)(T,{to:n,children:[(0,y.jsx)(O.jTe,{size:"24"}),r]})},D=function(){var e,n,r=(0,s.useState)([]),i=(0,a.Z)(r,2),l=i[0],d=i[1],p=(0,s.useState)(!1),u=(0,a.Z)(p,2),h=u[0],x=u[1],g=(0,s.useState)(null),f=(0,a.Z)(g,2),v=f[0],m=f[1],j=(0,c.UO)().movieId,w=(0,c.TH)(),b=(0,s.useRef)(null!==(e=null===(n=w.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/");return(0,s.useEffect)((function(){var e=new AbortController;x(!0);var n=function(){var n=(0,t.Z)(o().mark((function n(){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Z(j,e);case 3:r=n.sent,d(r),n.next=11;break;case 7:n.prev=7,n.t0=n.catch(0),m(n.t0),"canceled"!==(null===n.t0||void 0===n.t0?void 0:n.t0.message)&&console.log(n.t0);case 11:return n.prev=11,x(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,7,11,14]])})));return function(){return n.apply(this,arguments)}}();return n(),function(){e.abort()}}),[j]),(0,y.jsxs)("main",{children:[v&&"canceled"!==v.message&&(0,y.jsxs)("p",{children:["Sorry we have error:",v.message," please reload page!"]}),0===l.length&&(0,y.jsx)("div",{style:{marginLeft:"420px",marginRight:"auto"},children:(0,y.jsx)(U.Z1,{height:"80",width:"80",wrapperClass:"spinner-wrapper",ariaLabel:"three-circles-rotating",outerCircleColor:"#0a598d",innerCircleColor:"#260a8d",middleCircleColor:"#6a0474"})}),!h&&l.length>0&&(0,y.jsx)(B,{to:b.current,children:"Back"}),!h&&l.length>0&&(0,y.jsx)(S,{movie:l}),!h&&l.length>0&&(0,y.jsx)(M,{})]})}},8261:function(e,n,r){r.d(n,{x:function(){return a}});var t=r(8977),a=function(e){return(0,t.Z)(Date.parse(e),"y")}},7577:function(e,n,r){r.d(n,{q:function(){return a},z:function(){return i}});var t=r(8261),a="https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg",i=function(e){return e.results.map((function(e){var n=e.id,r=e.release_date,i=e.title,o=e.vote_average,s=e.poster_path;return{id:n,title:i,rating:"\u2b50".concat(Math.round(o)),poster:s?"https://image.tmdb.org/t/p/w500".concat(s):a,release:r?"(".concat((0,t.x)(r),")"):"(unknown)"}}))}}}]);
//# sourceMappingURL=656.5dd726b8.chunk.js.map