(this.webpackJsonpnomflix=this.webpackJsonpnomflix||[]).push([[0],{157:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/noPosterSmall.ea2ad102.png"},492:function(e,t,n){"use strict";n.r(t);var r,a,i,c,o,s,l,d,u,p,j,b,h,g,x,m,O,v,f,_,y,w,k,S,T,R,M,z,U,C,I,N,P,F,A,V=n(3),D=n.n(V),B=n(27),q=n.n(B),J=n(23),L=n(24),E=n(26),H=n(25),G=(n(174),n(11)),K=n(16),Q=n.n(K),W=n(34),X=n(164),Y=n.n(X).a.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"c332d2d4a9d3cf4437060443a1253aac",language:"en-US"}}),Z=function(){return Y.get("movie/now_playing")},$=function(){return Y.get("movie/upcoming")},ee=function(){return Y.get("movie/popular")},te=function(e){return Y.get("movie/".concat(e),{params:{append_to_response:"videos"}})},ne=function(e){return Y.get("search/movie",{params:{query:encodeURIComponent(e)}})},re=function(){return Y.get("tv/top_rated")},ae=function(){return Y.get("tv/popular")},ie=function(){return Y.get("tv/airing_today")},ce=function(e){return Y.get("tv/".concat(e),{params:{append_to_response:"videos"}})},oe=function(e){return Y.get("search/tv",{params:{query:encodeURIComponent(e)}})},se=n(5),le=n(4),de=n(30),ue=n(1),pe=le.c.div(r||(r=Object(se.a)(["\n    :not(:last-child){\n        margin-bottom: 50px;\n    }\n"]))),je=le.c.span(a||(a=Object(se.a)(["\n    font-size:16px;\n    font-weight: 600;\n    \n"]))),be=le.c.div(i||(i=Object(se.a)(["\n    margin-top:25px;\n    display:grid;\n    grid-template-columns:repeat(auto-fill, 125px);\n    grid-gap: 25px;\n"]))),he=function(e){var t=e.title,n=e.children;return Object(ue.jsxs)(pe,{children:[Object(ue.jsx)(je,{children:t}),Object(ue.jsx)(be,{children:n})]})},ge=le.c.div(c||(c=Object(se.a)(["\n    height:100vh;\n    width:100vw;\n    display:flex;\n    justify-content: center;\n    font-size: 28px;\n    margin-top: 20px;\n"]))),xe=function(){return Object(ue.jsx)(ge,{children:Object(ue.jsx)("span",{role:"img","aria-label":"loading",children:"\u23f0"})})},me=le.c.div(o||(o=Object(se.a)(["\n    width:100vw;\n    display:flex;\n    justify-content: center;\n"]))),Oe=le.c.span(s||(s=Object(se.a)(["\n    color:",";\n"])),(function(e){return e.color})),ve=function(e){var t=e.text,n=e.color;return Object(ue.jsx)(me,{children:Object(ue.jsx)(Oe,{color:n,children:t})})},fe=le.c.div(l||(l=Object(se.a)(["\n    font-size: 12px;\n"]))),_e=le.c.div(d||(d=Object(se.a)(["\n    background-image: url(",");\n    height:180px;\n    background-size:cover;\n    border-radius:4px;\n    background-position: center center;\n    transition: opacity 0.1s linear;\n"])),(function(e){return e.bgUrl})),ye=le.c.span(u||(u=Object(se.a)(["\n    bottom:-5px;\n    right:5px;\n    position: absolute;\n    opacity:0;\n    transition: opacity 0.1s linear;\n"]))),we=le.c.div(p||(p=Object(se.a)(["\n    margin-bottom:5px;\n    position: relative;\n    &:hover{\n        ","{\n            opacity:0.3;\n        }\n        ","{\n            opacity:1;\n        }        \n    }\n"])),_e,ye),ke=le.c.span(j||(j=Object(se.a)(["\n    display:block;\n    margin-bottom: 3px;\n"]))),Se=le.c.span(b||(b=Object(se.a)(["\n    font-size: 10px;\n    color: rgba(255,255,255,0.5);\n"]))),Te=function(e){var t=e.id,r=e.imageUrl,a=e.title,i=e.rating,c=e.year,o=e.isMovie,s=void 0!==o&&o;return Object(ue.jsx)(G.b,{to:s?"/movie/".concat(t):"/show/".concat(t),children:Object(ue.jsxs)(fe,{children:[Object(ue.jsxs)(we,{children:[Object(ue.jsx)(_e,{bgUrl:r?"https://image.tmdb.org/t/p/w300".concat(r):n(157)}),Object(ue.jsxs)(ye,{children:[Object(ue.jsx)("span",{role:"img","aria-label":"rating",children:"\u2b50\ufe0f"}),i,"/10"]})]}),Object(ue.jsx)(ke,{children:a.length>18?"".concat(a.substring(0,18),"..."):a}),Object(ue.jsx)(Se,{children:c})]})})},Re=le.c.div(h||(h=Object(se.a)(["\n    padding : 20px;\n"]))),Me=function(e){var t=e.nowPlaying,n=e.upcoming,r=e.popular,a=e.loading,i=e.error;return Object(ue.jsxs)(ue.Fragment,{children:[Object(ue.jsx)(de.a,{children:Object(ue.jsx)("title",{children:"Movies | Nomflix"})}),a?Object(ue.jsx)(xe,{}):Object(ue.jsxs)(Re,{children:[t&&t.length>0&&Object(ue.jsx)(he,{title:"Now Playing",children:t.map((function(e){return Object(ue.jsx)(Te,{id:e.id,title:e.original_title,imageUrl:e.poster_path,rating:e.vote_average,isMovie:!0,year:e.release_date&&e.release_date.substring(0,4)},e.id)}))}),n&&n.length>0&&Object(ue.jsx)(he,{title:"Upcoming Movies",children:n.map((function(e){return Object(ue.jsx)(Te,{id:e.id,title:e.original_title,imageUrl:e.poster_path,rating:e.vote_average,isMovie:!0,year:e.release_date&&e.release_date.substring(0,4)},e.id)}))}),r&&r.length>0&&Object(ue.jsx)(he,{title:"Popular Movies",children:r.map((function(e){return Object(ue.jsx)(Te,{id:e.id,title:e.original_title,imageUrl:e.poster_path,rating:e.vote_average,isMovie:!0,year:e.release_date&&e.release_date.substring(0,4)},e.id)}))}),i&&Object(ue.jsx)(ve,{color:"#e74c3c",text:i})]})]})},ze=function(e){Object(E.a)(n,e);var t=Object(H.a)(n);function n(){var e;Object(J.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={nowPlaying:null,upcoming:null,popular:null,error:null,loading:!0},e}return Object(L.a)(n,[{key:"componentDidMount",value:function(){var e=Object(W.a)(Q.a.mark((function e(){var t,n,r,a,i,c;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Z();case 3:return t=e.sent,n=t.data.results,e.next=7,$();case 7:return r=e.sent,a=r.data.results,e.next=11,ee();case 11:i=e.sent,c=i.data.results,this.setState({nowPlaying:n,upcoming:a,popular:c}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"Can't find Movie information."});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}}),e,this,[[0,16,19,22]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.nowPlaying,n=e.upcoming,r=e.popular,a=e.error,i=e.loading;return console.log(this.state),Object(ue.jsx)(Me,{nowPlaying:t,upcoming:n,popular:r,error:a,loading:i})}}]),n}(D.a.Component),Ue=le.c.div(g||(g=Object(se.a)(["\n    padding : 0px 20px;\n"]))),Ce=le.c.form(x||(x=Object(se.a)(["\n    margin-bottom: 50px;\n    width:100%;\n"]))),Ie=le.c.input(m||(m=Object(se.a)(["\n    all: unset;\n    font-size: 28px;\n    width:100%;\n"]))),Ne=function(e){var t=e.movieResults,n=e.tvResults,r=e.loading,a=e.error,i=e.searchTerm,c=e.handleSubmit,o=e.updateTerm;return Object(ue.jsxs)(Ue,{children:[Object(ue.jsx)(de.a,{children:Object(ue.jsx)("title",{children:"Search | Nomflix"})}),Object(ue.jsx)(Ce,{onSubmit:c,children:Object(ue.jsx)(Ie,{placeholder:"Search Movies or TV Shows...",value:i,onChange:o})}),r?Object(ue.jsx)(xe,{}):Object(ue.jsxs)(ue.Fragment,{children:[t&&t.length>0&&Object(ue.jsx)(he,{title:"Movie Results",children:t.map((function(e){return Object(ue.jsx)(Te,{id:e.id,title:e.original_title,imageUrl:e.poster_path,rating:e.vote_average,isMovie:!0,year:e.release_date&&e.release_date.substring(0,4)},e.id)}))}),n&&n.length>0&&Object(ue.jsx)(he,{title:"TV Results",children:n.map((function(e){return Object(ue.jsx)(Te,{id:e.id,title:e.original_name,imageUrl:e.poster_path,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4)},e.id)}))}),a&&Object(ue.jsx)(ve,{color:"#e74c3c",text:a}),n&&t&&0===n.length&&0===t.length&&Object(ue.jsx)(ve,{color:"#95a5a6",text:"Nothing found for : ".concat(i)})]})]})},Pe=function(e){Object(E.a)(n,e);var t=Object(H.a)(n);function n(){var e;Object(J.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={movieResults:null,tvResults:null,searchTerm:"",loading:!1,error:null},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.searchTerm&&e.searchByTerm()},e.updateTerm=function(t){var n=t.target.value;e.setState({searchTerm:n})},e.searchByTerm=Object(W.a)(Q.a.mark((function t(){var n,r,a,i,c;return Q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.state.searchTerm,e.setState({loading:!0}),t.prev=2,t.next=5,oe(n);case 5:return r=t.sent,a=r.data.results,t.next=9,ne(n);case 9:i=t.sent,c=i.data.results,e.setState({movieResults:c,tvResults:a}),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(2),e.setState({error:"Can't find results."});case 17:return t.prev=17,e.setState({loading:!1}),t.finish(17);case 20:case"end":return t.stop()}}),t,null,[[2,14,17,20]])}))),e}return Object(L.a)(n,[{key:"render",value:function(){var e=this.state,t=e.movieResults,n=e.tvResults,r=e.searchTerm,a=e.loading,i=e.error;return console.log(this.state),Object(ue.jsx)(Ne,{movieResults:t,tvResults:n,searchTerm:r,loading:a,error:i,handleSubmit:this.handleSubmit,updateTerm:this.updateTerm})}}]),n}(D.a.Component),Fe=le.c.div(O||(O=Object(se.a)(["\n    padding:20px;\n"]))),Ae=function(e){var t=e.topRated,n=e.popular,r=e.airingToday,a=e.loading,i=e.error;return Object(ue.jsxs)(ue.Fragment,{children:[Object(ue.jsx)(de.a,{children:Object(ue.jsx)("title",{children:"TV Shows | Nomflix"})}),a?Object(ue.jsx)(xe,{}):Object(ue.jsxs)(Fe,{children:[t&&t.length>0&&Object(ue.jsx)(he,{title:"Top Rated Shows",children:t.map((function(e){return Object(ue.jsx)(Te,{id:e.id,title:e.original_name,imageUrl:e.poster_path,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4)},e.id)}))}),n&&n.length>0&&Object(ue.jsx)(he,{title:"Popular Shows",children:n.map((function(e){return Object(ue.jsx)(Te,{id:e.id,title:e.original_name,imageUrl:e.poster_path,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4)},e.id)}))}),r&&r.length>0&&Object(ue.jsx)(he,{title:"On Airing Today!",children:r.map((function(e){return Object(ue.jsx)(Te,{id:e.id,title:e.original_name,imageUrl:e.poster_path,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4)},e.id)}))}),i&&Object(ue.jsx)(ve,{color:"#e74c3c",text:i})]})]})},Ve=function(e){Object(E.a)(n,e);var t=Object(H.a)(n);function n(){var e;Object(J.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={topRated:null,popular:null,airingToday:null,loading:!0,error:null},e}return Object(L.a)(n,[{key:"componentDidMount",value:function(){var e=Object(W.a)(Q.a.mark((function e(){var t,n,r,a,i,c;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,re();case 3:return t=e.sent,n=t.data.results,e.next=7,ae();case 7:return r=e.sent,a=r.data.results,e.next=11,ie();case 11:i=e.sent,c=i.data.results,this.setState({topRated:n,popular:a,airingToday:c}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"Can't find TV information."});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}}),e,this,[[0,16,19,22]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.topRated,n=e.popular,r=e.airingToday,a=e.loading,i=e.error;return console.log(this.state),Object(ue.jsx)(Ae,{topRated:t,popular:n,airingToday:r,loading:a,error:i})}}]),n}(D.a.Component),De=le.c.header(v||(v=Object(se.a)(["\n    color : white;\n    position : fixed;\n    top : 0;\n    left : 0;\n    width : 100%;\n    height : 50px;\n    display:flex;\n    align-items : center;\n    padding : 0px 10px;\n    background-color : rgba(20, 20, 20, 0.8);\n    z-index : 10;\n    box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);\n"]))),Be=le.c.ul(f||(f=Object(se.a)(["\n    display:flex;\n\n"]))),qe=le.c.li(_||(_=Object(se.a)(["\n    width : 70px;\n    height : 50px;\n    text-align : center;\n    border-bottom : 3px solid ",";\n    transition:border-bottom .5s ease-in-out;\n"])),(function(e){return e.current?"#3498db":"transparent"})),Je=Object(le.c)(G.b)(y||(y=Object(se.a)(["\n    height : 50px;\n    display : flex;\n    align-items : center;\n    justify-content : center;\n"]))),Le=Object(G.f)((function(e){var t=e.location.pathname;return Object(ue.jsx)(De,{children:Object(ue.jsxs)(Be,{children:[Object(ue.jsx)(qe,{current:"/"===t,children:Object(ue.jsx)(Je,{to:"/",children:"Movies"})}),Object(ue.jsx)(qe,{current:"/tv"===t,children:Object(ue.jsx)(Je,{to:"/tv",children:"TV"})}),Object(ue.jsx)(qe,{current:"/search"===t,children:Object(ue.jsx)(Je,{to:"/search",children:"Search"})})]})})})),Ee=le.c.div(w||(w=Object(se.a)(["\n    height: calc(100vh - 50px);\n    width: 100%;\n    position: relative;\n    padding: 50px;\n"]))),He=le.c.div(k||(k=Object(se.a)(["\n    position:absolute;\n    top:0;\n    left:0;\n    width:100%;\n    height:100%;\n    background-image: url(",");\n    background-position : center center;\n    background-size: cover;\n    filter: blur(3px);\n    opacity: 0.5;\n    z-index: 0;\n"])),(function(e){return e.bgImage})),Ge=le.c.div(S||(S=Object(se.a)(["\n    display:flex;\n    width: 100%;\n    position:relative;\n    z-index: 1;\n    height: 100%;\n"]))),Ke=le.c.div(T||(T=Object(se.a)(["\n    width:30%;\n    height:100%;\n    background-image: url(",");\n    background-position : center center;\n    background-size: cover;\n    border-radius: 5px;\n"])),(function(e){return e.bgImage})),Qe=le.c.div(R||(R=Object(se.a)(["\n    width: 70%;\n    margin-left: 10px;\n"]))),We=le.c.h3(M||(M=Object(se.a)(["\n    font-size: 32px;\n    margin-bottom: 20px;\n"]))),Xe=le.c.div(z||(z=Object(se.a)(["\n    margin: 20px 0;\n"]))),Ye=le.c.span(U||(U=Object(se.a)([""]))),Ze=le.c.span(C||(C=Object(se.a)(["\n    margin: 0 10px;\n"]))),$e=le.c.p(I||(I=Object(se.a)(["\n    font-size : 12px;\n    opacity: 0.7;\n    line-height: 1.5;\n    width: 50%;\n"]))),et=le.c.a(N||(N=Object(se.a)(["\n    font-size : 12px;\n    color : gray;\n    line-height: 1.5;\n"]))),tt=le.c.div(P||(P=Object(se.a)(["\n    background-image: url(",");\n    background-size: contain;\n    background-repeat: no-repeat;\n    border-radius: 5px;\n    padding: 20px;\n\n"])),(function(e){return e.logoImage})),nt=(le.c.div(F||(F=Object(se.a)(["\n\n"]))),function(e){var t=e.result,r=e.loading,a=e.error;return r?Object(ue.jsxs)(ue.Fragment,{children:[Object(ue.jsx)(de.a,{children:Object(ue.jsx)("title",{children:"Loading | Nomflix"})}),Object(ue.jsx)(xe,{})]}):a?Object(ue.jsx)(ve,{}):Object(ue.jsxs)(Ee,{children:[Object(ue.jsx)(de.a,{children:Object(ue.jsxs)("title",{children:[t.original_title?t.original_title:t.original_name," | Nomflix"]})}),Object(ue.jsx)(He,{bgImage:"https://image.tmdb.org/t/p/original".concat(t.backdrop_path)}),Object(ue.jsxs)(Ge,{children:[Object(ue.jsx)(Ke,{bgImage:t.poster_path?"https://image.tmdb.org/t/p/original".concat(t.poster_path):n(157)}),Object(ue.jsxs)(Qe,{children:[Object(ue.jsx)(We,{children:t.original_title?t.original_title:t.original_name}),Object(ue.jsxs)(Xe,{children:[Object(ue.jsx)(Ye,{children:t.release_date?t.release_date.substring(0,4):t.first_air_date.substring(0,4)}),Object(ue.jsx)(Ze,{children:"\u2713"}),Object(ue.jsxs)(Ye,{children:["The Runtime is ",t.runtime?t.runtime:t.episode_run_time[0]," min"]}),Object(ue.jsx)(Ze,{children:"\u2713"}),Object(ue.jsx)(Ye,{children:t.genres&&t.genres.map((function(e,n){return n===t.genres.length-1?e.name:"".concat(e.name," / ")}))})]}),Object(ue.jsxs)(et,{href:t.homepage,children:["\ud83c\udf0e ",t.homepage?t.homepage:"Can't find Homepage Address"]}),Object(ue.jsx)($e,{children:t.overview}),Object(ue.jsx)(tt,{logoImage:"https://image.tmdb.org/t/p/original".concat(t.production_companies[0].logo_path)})]})]})]})}),rt=function(e){Object(E.a)(n,e);var t=Object(H.a)(n);function n(e){var r;Object(J.a)(this,n);var a=e.location.pathname;return(r=t.call(this,e)).state={result:null,loading:!0,error:null,isMovie:a.includes("/movie/")},r}return Object(L.a)(n,[{key:"componentDidMount",value:function(){var e=Object(W.a)(Q.a.mark((function e(){var t,n,r,a,i,c,o,s;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,n=t.match.params.id,r=t.history.push,a=this.state.isMovie,i=parseInt(n),!isNaN(i)){e.next=5;break}return e.abrupt("return",r("/"));case 5:if(c=null,e.prev=6,!a){e.next=14;break}return e.next=10,te(i);case 10:o=e.sent,c=o.data,e.next=18;break;case 14:return e.next=16,ce(i);case 16:s=e.sent,c=s.data;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(6),this.setState({error:"Can't find anything."});case 23:return e.prev=23,this.setState({loading:!1,result:c}),e.finish(23);case 26:case"end":return e.stop()}}),e,this,[[6,20,23,26]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){console.log(this.state);var e=this.state,t=e.result,n=e.loading,r=e.error;return Object(ue.jsx)(nt,{result:t,loading:n,error:r})}}]),n}(D.a.Component),at=function(){return Object(ue.jsx)(G.a,{children:Object(ue.jsxs)(ue.Fragment,{children:[Object(ue.jsx)(Le,{}),Object(ue.jsxs)(G.e,{children:[Object(ue.jsx)(G.d,{path:"/",exact:!0,component:ze}),Object(ue.jsx)(G.d,{path:"/tv",exact:!0,component:Ve}),Object(ue.jsx)(G.d,{path:"/search",component:Pe}),Object(ue.jsx)(G.d,{path:"/movie/:id",component:rt}),Object(ue.jsx)(G.d,{path:"/show/:id",component:rt}),Object(ue.jsx)(G.c,{from:"*",to:"/"})]})]})})},it=n(170),ct=Object(le.a)(A||(A=Object(se.a)(["\n    ",";\n    a{\n        text-decoration:none;\n        color:inherit;\n    }\n    *{\n        box-sizing:border-box;\n\n    }\n    body{\n        font-family:-apple-system;\n        font-size:12px;\n        background-color:rgba(20, 20, 20, 1);\n        color : white;\n        padding-top : 50px;\n    }\n"])),it.a),ot=function(e){Object(E.a)(n,e);var t=Object(H.a)(n);function n(){return Object(J.a)(this,n),t.apply(this,arguments)}return Object(L.a)(n,[{key:"render",value:function(){return Object(ue.jsxs)(ue.Fragment,{children:[Object(ue.jsx)(at,{}),Object(ue.jsx)(ct,{})]})}}]),n}(V.Component);q.a.render(Object(ue.jsx)(D.a.StrictMode,{children:Object(ue.jsx)(ot,{})}),document.getElementById("root"))}},[[492,1,2]]]);
//# sourceMappingURL=main.a4163073.chunk.js.map