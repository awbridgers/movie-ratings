(this["webpackJsonpmovie-rankings"]=this["webpackJsonpmovie-rankings"]||[]).push([[0],{102:function(e,t,a){},111:function(e,t,a){},123:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(24),r=a.n(s),i=(a(88),a(8)),l=a(21),o=a.n(l),d=a(30),j=a(36),u=(a(62),a(68),{apiKey:"AIzaSyAyvJ2WjTMTTEm0iIdDgmePfWt2CjubCoU",authDomain:"movie-rankings-75fa0.firebaseapp.com",databaseURL:Object({NODE_ENV:"production",PUBLIC_URL:"/movie-ratings",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_KEY:"AIzaSyAyvJ2WjTMTTEm0iIdDgmePfWt2CjubCoU",REACT_APP_APP_ID:"1:309289181606:web:98055b027bad1bd5eeef67",REACT_APP_AUTH_DOMAIN:"movie-rankings-75fa0.firebaseapp.com",REACT_APP_MESSAGING_SENDER_ID:"309289181606",REACT_APP_OMDB_KEY:"9ab78113",REACT_APP_PROJECT_ID:"movie-rankings-75fa0",REACT_APP_STORAGE_BUCKET:"movie-rankings-75fa0.appspot.com",REACT_APP_TMDB_KEY:"fd115b9db75ae82522026bd31b50bf35"}).REACT_APP_DATABASE_URL,messagingSenderId:"309289181606",projectId:"movie-rankings-75fa0",storageBucket:"movie-rankings-75fa0.appspot.com"});j.a.apps.length||j.a.initializeApp(u);var b=j.a.database(),O=j.a.auth(),h=function(e,t){var a=[];return e.forEach((function(e){a.push({name:t?e.val().displayName:e.key,score:t?e.val().score:e.val(),id:t?e.key:e.key.replace(/ /g,"-")})})),a},m=a(1),x=Object(n.createContext)(null),v=function(e){var t=e.children,a=Object(n.useState)(null),c=Object(i.a)(a,2),s=c[0],r=c[1];return Object(n.useEffect)((function(){return O.onAuthStateChanged((function(e){return r(e)}))}),[]),Object(m.jsx)(x.Provider,{value:s,children:t})},g=Object(n.createContext)({movie:[],viewer:[],userMovie:[],displayName:null}),f=function(e){var t=e.children,a=Object(n.useState)([]),c=Object(i.a)(a,2),s=c[0],r=c[1],l=Object(n.useState)([]),j=Object(i.a)(l,2),u=j[0],O=j[1],v=Object(n.useState)([]),f=Object(i.a)(v,2),p=f[0],N=f[1],C=Object(n.useState)(""),y=Object(i.a)(C,2),w=y[0],P=y[1],k=Object(n.useContext)(x);return Object(n.useEffect)((function(){if(k)return b.ref("users/".concat(k.uid)).on("value",(function(e){e.val()?(N(h(e.child("/ratings"),!1)),P(e.val().displayName)):(N([]),P(""))})),function(){return b.ref("users/".concat(k.uid)).off()}}),[k]),Object(n.useEffect)((function(){var e=function(){var e=Object(d.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.prev=1,e.next=4,b.ref("movies").once("value");case 4:e.sent.forEach((function(e){t.push({title:e.key,date:new Date(e.val().date),ratings:h(e.child("/ratings"),!0),id:e.val().id,cage:e.val().cage})})),r(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),t=function(){var e=Object(d.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=[],e.next=4,b.ref("users").once("value");case 4:e.sent.forEach((function(e){e.val().ratings&&t.push({name:e.val().displayName,ratings:h(e.child("/ratings"),!1),id:e.key})})),O(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();e(),t()}),[p,w]),Object(m.jsx)(g.Provider,{value:{movie:s,viewer:u,userMovie:p,displayName:w},children:t})},p=a(18),N=a(13),C=function(){var e=Object(d.a)(o.a.mark((function e(t){var a,n,c,s,r,i,l,d,j,u,b,O,h,m,x;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"fd115b9db75ae82522026bd31b50bf35",e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat("fd115b9db75ae82522026bd31b50bf35","&language=en-US"));case 3:return a=e.sent,e.next=6,a.json();case 6:return n=e.sent,c=n.budget,s=n.genres,r=n.imdb_id,i=n.overview,l=n.poster_path,d=n.backdrop_path,j=n.revenue,u=n.runtime,b=n.title,O=n.vote_average,h=n.vote_count,m=n.release_date,x=n.tagline,e.abrupt("return",{budget:c,genres:s,imdb_id:r,overview:i,poster_path:"https://image.tmdb.org/t/p/w500".concat(l),backdrop_path:"https://image.tmdb.org/t/p/w1280".concat(d),revenue:j,runtime:u,title:b,vote_average:O,vote_count:h,tagline:x,release_date:new Date(m)});case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=(a(69),["January","February","March","April","May","June","July","August","September","October","November","December"]),w=function(e){return"".concat(y[e.getMonth()]," ").concat(e.getDate(),", ").concat(e.getFullYear())},P=function(e,t,a){var n=w(e),c="";return t.forEach((function(e,a){a===t.length-1?c+=e.name:c+="".concat(e.name,", ")})),"".concat(n," | ").concat(c," | ").concat(function(e){var t=Math.floor(e/60),a=e%60;return"".concat(t,"h ").concat(a,"m")}(a))},k=a(64),S=(a(95),{path:"#FF0800",trail:"#420C09",star:"#FF0800"}),E={path:"#FFD300",trail:"#614710",star:"#E56717"},I={path:"#03AC13",trail:"#003B00",star:"#FFD700"},A=function(e){var t=e.rating,a=function(e){return e<4?S:e>=4&&e<6.9?E:I}(t);return Object(m.jsx)("div",{children:Object(m.jsx)(k.a,{value:t,text:"".concat(t.toFixed(1)),maxValue:10,strokeWidth:12,styles:Object(k.b)({pathColor:a.path,trailColor:a.trail,textColor:"white"})})})},D=function(e){var t=0;return e.forEach((function(e){t+=e.score})),t/e.length},T=a(67),B=(a(96),a(77)),_=function(e){var t=e.date,a=e.ratings,c=e.vote_average,s=e.vote_count,r=e.overview,i=e.budget,l=e.revenue,o=e.cage,d=e.addRating,j=e.userRating,u=e.deleteRating,b=Object(n.useContext)(x);return Object(m.jsxs)("div",{className:"detailsPage",children:[Object(m.jsxs)("div",{className:"movieRatings",children:[Object(m.jsxs)("div",{className:"ourRating",children:[Object(m.jsxs)("div",{children:["Our Rating (",a.length,")"]}),Object(m.jsx)("div",{className:"ratingSize",children:Object(m.jsx)(A,{rating:D(a)})})]}),Object(m.jsxs)("div",{className:"fanRating",children:[Object(m.jsxs)("div",{children:["TMDB Rating (",s.toLocaleString("en"),")"]}),Object(m.jsx)("div",{className:"ratingSize",children:Object(m.jsx)(A,{rating:c})})]})]}),Object(m.jsxs)("div",{className:"movieDetails",children:[Object(m.jsxs)("div",{className:"cage",children:[Object(m.jsx)("div",{className:"heading",children:"Nic Cage"}),Object(m.jsx)("div",{className:" = detailBody",children:o?Object(m.jsx)(T.a,{size:20,color:"#03AC13","data-testid":"check"}):Object(m.jsx)(T.b,{size:20,color:"#FF0800","data-testid":"x"})})]}),Object(m.jsxs)("div",{className:"overview",children:[Object(m.jsx)("div",{className:"heading",children:"Plot"}),Object(m.jsx)("div",{className:" = detailBody",children:r})]}),Object(m.jsxs)("div",{className:"budget",children:[Object(m.jsx)("div",{className:"heading",children:"Budget"}),Object(m.jsxs)("div",{className:" = detailBody",children:["$",i.toLocaleString("en")]})]}),Object(m.jsxs)("div",{className:"revenue",children:[Object(m.jsx)("div",{className:"heading",children:"Revenue"}),Object(m.jsxs)("div",{className:" = detailBody",children:["$",l.toLocaleString("en")]})]}),Object(m.jsxs)("div",{className:"revenue",children:[Object(m.jsx)("div",{className:"heading",children:"Date Watched"}),Object(m.jsx)("div",{className:" = detailBody",children:w(t)})]}),b&&Object(m.jsxs)("div",{className:"revenue",children:[Object(m.jsx)("div",{className:"heading",children:"Your Rating"}),j?Object(m.jsxs)("div",{className:" = detailBody",children:[j.score,"/10 |"," ",Object(m.jsx)("div",{className:"changeRating",onClick:d,children:"Change"}),Object(m.jsx)("div",{style:{display:"inline"},className:"detailBody",children:" | "}),Object(m.jsx)("div",{className:"changeRating",onClick:u,children:"Delete"})]}):Object(m.jsx)(B.a,{size:"sm",variant:"secondary",onClick:d,children:"Add Rating"})]})]})]})},R=a(39),F=a(128),L=a(45),M=a.n(L),G=(a(102),function(e){var t=e.ratings,a=e.isMobile,c=e.title,s=e.movie,r=Object(n.useState)(!0),l=Object(i.a)(r,2),o=l[0],d=l[1],j=Object(n.useState)("score"),u=Object(i.a)(j,2),b=u[0],O=u[1],h=s?"/movies/":"/viewers/",x=Object(N.f)(),v=function(e){e===b?d(!o):O(e)};return Object(m.jsxs)("div",{className:"ratingTable",children:[Object(m.jsx)("div",{className:"ratingTitle",children:c}),Object(m.jsx)(F.a,{size:"sm",hover:!0,variant:"dark",className:"tableOfRatings",children:Object(m.jsxs)("tbody",{children:[Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{onClick:function(){return v("name")},children:"Name"}),Object(m.jsx)("th",{onClick:function(){return v("score")},children:"Score"})]}),t.sort((function(e,t){return function(e,t,a,n){return"score"===a?n?t.score-e.score:e.score-t.score:n?e.name>t.name?1:e.name<t.name?-1:0:e.name>t.name?-1:e.name<t.name?1:0}(e,t,b,o)})).map((function(e,t){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{"data-testid":"ratingName",className:"ratingName",onClick:function(){return x.push("".concat(h).concat(e.id))},children:e.name}),Object(m.jsxs)("td",{children:[Object(m.jsx)(M.a,{rating:e.score/2,starRatedColor:"rgb(255,223,0)",starEmptyColor:"rgb(30,30,30)",starDimension:a?"30px":"35px",starSpacing:a?"0px":"2px",name:"starRating"})," ".concat(e.score.toFixed(1),"/10")]})]},t)})),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{}),Object(m.jsx)("td",{})]}),Object(m.jsxs)("tr",{children:[Object(m.jsxs)("td",{className:"ratingsAverage",children:["Average (",t.length," ratings)"]}),Object(m.jsxs)("td",{children:[Object(m.jsx)(M.a,{rating:D(t)/2,starRatedColor:"rgb(255,223,0)",starEmptyColor:"rgb(30,30,30)",starDimension:a?"30px":"35px",starSpacing:a?"0px":"2px",name:"starRating"})," ".concat(D(t).toFixed(1),"/10")]})]})]})})]})}),W=(a(42),a(134)),H=a(131),U=a(129),z=a(80),J=function(e){var t=e.title,a=e.back,c=e.userScore,s=e.deleteRating,r=Object(n.useState)(""),l=Object(i.a)(r,2),o=l[0],d=l[1],j=Object(n.useState)(""),u=Object(i.a)(j,2),O=u[0],h=u[1],v=Object(n.useState)(!1),f=Object(i.a)(v,2),p=f[0],N=f[1],C=Object(n.useContext)(x),y=Object(n.useContext)(g).displayName,w=C.uid,P=s?"Delete":c?"Edit":"Add";return p?Object(m.jsx)("div",{className:"logIn",children:Object(m.jsxs)(W.a,{className:"logOutBox",variant:"success",children:[Object(m.jsx)(W.a.Heading,{children:"Success!"}),Object(m.jsxs)("p",{children:["Your rating has been ","".concat(s?"deleted":"added"),"!"]}),Object(m.jsx)(B.a,{variant:"outline-success",onClick:a,children:"Close"})]})}):Object(m.jsx)("div",{className:"logIn",style:{color:"white"},children:Object(m.jsxs)("div",{className:"logInBox",children:[Object(m.jsx)("div",{className:"logInTitle",children:Object(m.jsxs)("h2",{children:[P," Rating"]})}),Object(m.jsxs)("div",{style:{marginBottom:"15px"},children:[!s&&Object(m.jsxs)(m.Fragment,{children:[P," your rating for ",Object(m.jsx)("i",{children:t})," (0-10)."]}),s&&Object(m.jsxs)(m.Fragment,{children:["Are you sure you want to delete your rating for ",Object(m.jsx)("i",{children:t}),"?"]})]}),Object(m.jsxs)(H.a,{onSubmit:function(e){e.preventDefault(),h("");var a=parseFloat(o);if(!isNaN(a)&&a>=0&&a<=10){var n={};n["/movies/".concat(t,"/ratings/").concat(w)]={displayName:y,score:Math.round(10*a)/10},n["/users/".concat(w,"/ratings/").concat(t)]=Math.round(10*a)/10,b.ref().update(n).then((function(){N(!0)})).catch((function(e){return h(e.message)}))}else h("Please enter a number between 0-10.")},children:[c&&Object(m.jsxs)(H.a.Group,{as:U.a,controlId:"formCurrentScore",children:[Object(m.jsx)(H.a.Label,{column:!0,children:"Current Rating:"}),Object(m.jsx)(z.a,{xs:7,children:Object(m.jsx)(H.a.Control,{style:{color:"white"},plaintext:!0,readOnly:!0,defaultValue:"".concat(c.score,"/10")})})]}),!s&&Object(m.jsxs)(H.a.Group,{as:U.a,controlId:"formrating",children:[Object(m.jsx)(z.a,{xs:3,children:Object(m.jsx)(H.a.Label,{children:"Rating: "})}),Object(m.jsxs)(z.a,{xs:5,children:[Object(m.jsx)(H.a.Control,{type:"number",placeholder:"0-10",value:o,onChange:function(e){return d(e.target.value)},isInvalid:""!==O}),Object(m.jsx)(H.a.Control.Feedback,{type:"invalid",children:O})]})]}),Object(m.jsxs)("div",{className:"logInButtons",children:[!s&&Object(m.jsx)(B.a,{variant:"primary",type:"submit",id:"submitButton",children:"Submit"}),s&&Object(m.jsx)(B.a,{variant:"warning",onClick:function(){var e={};e["movies/".concat(t,"/ratings/").concat(w)]=null,e["users/".concat(w,"/ratings/").concat(t)]=null,b.ref().update(e).then((function(){N(!0)})).catch((function(e){return console.log(e.message)}))},children:"Delete"}),Object(m.jsx)(B.a,{variant:"danger",id:"backButton",onClick:a,children:"Back"})]})]})]})})},Y=function(e){var t=e.title,a=e.id,c=e.date,s=e.ratings,r=e.cage,l=Object(n.useState)(),j=Object(i.a)(l,2),u=j[0],b=j[1],O=Object(n.useState)(!1),h=Object(i.a)(O,2),x=h[0],v=h[1],f=Object(n.useState)(!1),p=Object(i.a)(f,2),N=p[0],y=p[1],w=Object(R.useMediaQuery)({maxWidth:700}),k=Object(n.useContext)(g).userMovie.find((function(e){return e.name===t}));if(Object(n.useEffect)((function(){(function(){var e=Object(d.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C(a);case 2:t=e.sent,b(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[a]),u){var S=Object(m.jsx)(_,{date:c,ratings:s,vote_average:u.vote_average,vote_count:u.vote_count,overview:u.overview,budget:u.budget,revenue:u.revenue,cage:r,addRating:function(){return v(!0)},deleteRating:function(){y(!0),v(!0)},userRating:k});return Object(m.jsxs)("div",{className:"moviePage",children:[x&&Object(m.jsx)(J,{back:function(){v(!1),y(!1)},title:t,userScore:k,deleteRating:N}),Object(m.jsxs)("div",{className:"info",style:{backgroundImage:"url(".concat(u.backdrop_path,")")},children:[Object(m.jsx)("div",{className:"overlay"}),Object(m.jsx)("div",{className:"moviePoster",children:Object(m.jsx)("img",{src:u.poster_path,alt:""})}),Object(m.jsxs)("div",{className:"movieInfo","data-testid":"movieDetails",children:[Object(m.jsxs)("div",{className:"titleDiv",children:[Object(m.jsxs)("div",{className:"movieTitle",children:["".concat(u.title," (").concat(u.release_date.getFullYear(),")"),Object(m.jsx)("div",{className:"movieTitleInfo",children:u&&P(u.release_date,u.genres,u.runtime)})]}),Object(m.jsx)("div",{className:"tagline",children:u.tagline})]}),!w&&S]})]}),w&&S,Object(m.jsx)(G,{movie:!1,title:"Ratings",ratings:s,isMobile:w})]})}return Object(m.jsx)("div",{className:"moviePage","data-testid":"loadingMoviePage",children:Object(m.jsx)("div",{className:"info"})})},K=a(132),V=a(133),$=a(130),Q=function(e){var t=e.signIn,a=e.signOut,c=Object(n.useState)(!1),s=Object(i.a)(c,2),r=s[0],l=s[1],o=Object(N.g)().pathname,d=Object(n.useContext)(x),j=Object(n.useContext)(g).displayName;return Object(n.useEffect)((function(){l(!1)}),[o]),Object(m.jsxs)(K.a,{bg:"dark",variant:"dark",expand:"sm",expanded:r,onToggle:l,children:[Object(m.jsx)(K.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(m.jsxs)(K.a.Collapse,{id:"responsive-navbar-nav",children:[Object(m.jsxs)(V.a,{className:"mr-auto",children:[Object(m.jsx)(V.a.Link,{as:p.b,to:"/",children:"Home"}),Object(m.jsx)(V.a.Link,{as:p.b,to:"/viewers",children:"Viewers"})]}),Object(m.jsx)(V.a,{className:"justify-content-right",children:d&&j?Object(m.jsxs)($.a,{alignRight:!0,title:j,id:"dropdown",children:[Object(m.jsx)($.a.Item,{as:p.b,to:"/profile",children:"Profile"}),Object(m.jsx)($.a.Item,{onClick:a,children:"Sign Out"})]}):Object(m.jsx)(V.a.Link,{id:"logInButton",onClick:t,children:"Sign In"})})]})]})},Z=(a(110),a(135)),q=(a(111),function(e){var t=e.title,a=e.id,c=(e.date,e.ratings),s=Object(n.useState)(),r=Object(i.a)(s,2),l=r[0],j=r[1];Object(n.useEffect)((function(){(function(){var e=Object(d.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C(a);case 2:t=e.sent,j(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[a]);var u=D(c);return Object(m.jsxs)(Z.a,{bg:"dark",className:"movieCard","data-testid":"movieCard",children:[Object(m.jsx)("div",{className:"imageWrapper",children:Object(m.jsx)("div",{className:"image",children:Object(m.jsx)("img",{className:"cardImage",src:null===l||void 0===l?void 0:l.poster_path,alt:"".concat(t," Poster")})})}),Object(m.jsx)("div",{className:"bodyWrapper",children:Object(m.jsxs)("div",{className:"body",children:[Object(m.jsx)("div",{className:"title",children:Object(m.jsx)(p.b,{to:"/movies/".concat(t.replace(/ /g,"-")),children:Object(m.jsx)(Z.a.Title,{"data-testid":t,children:null===l||void 0===l?void 0:l.title})})}),Object(m.jsxs)("div",{className:"averageRating",children:[Object(m.jsx)("div",{className:"stars",children:Object(m.jsx)(M.a,{rating:u/10,starRatedColor:"rgb(255,223,0)",numberOfStars:1,starEmptyColor:"rgb(30,30,30)",starDimension:"50px",starSpacing:"0px"})}),Object(m.jsx)("div",{className:"score",children:u.toFixed(1)})]})]})})]})}),X=a(56),ee=a(82),te=a.n(ee),ae=[{value:"dateA",label:"Date (Ascending)"},{value:"dateD",label:"Date (Descending)"},{value:"rateA",label:"Rating (Ascending)"},{value:"rateD",label:"Rating (Descending)"},{value:"titleA",label:"Title (Ascending)"},{value:"titleD",label:"Title (Descending)"}],ne=function(){var e=Object(n.useState)(ae[1]),t=Object(i.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(!1),r=Object(i.a)(s,2),l=r[0],o=r[1],d=Object(n.useContext)(g).movie.slice().sort((function(e,t){return function(e,t,a){switch(a.value){case"dateA":return e.date.getTime()-t.date.getTime();case"dateD":return t.date.getTime()-e.date.getTime();case"rateA":return D(e.ratings)-D(t.ratings);case"rateD":return D(t.ratings)-D(e.ratings);case"titleA":return e.title>t.title?1:e.title<t.title?-1:0;case"titleD":return e.title>t.title?-1:e.title<t.title?1:0;default:return t.date.getTime()-e.date.getTime()}}(e,t,a)}));return Object(m.jsxs)("div",{className:"homePage","data-testid":"homePage",children:[Object(m.jsxs)("div",{className:"sort",children:[Object(m.jsxs)("div",{className:"cageFilter",children:[Object(m.jsx)("div",{className:"filterTitle",children:"Cage Filter"}),Object(m.jsx)(te.a,{onColor:"#03AC13",uncheckedIcon:!1,checked:l,onChange:function(e){return o(e)}})]}),Object(m.jsx)("label",{style:{display:"none"},htmlFor:"sort",children:"Sort"}),Object(m.jsx)(X.a,{isSearchable:!1,className:"select",options:ae,value:a,onChange:c,inputId:"sort"})]}),Object(m.jsx)("div",{className:"home",children:d.filter((function(e){return l?!0===e.cage:e})).map((function(e,t){return Object(m.jsx)(q,{title:e.title,date:e.date,id:e.id,ratings:e.ratings,cage:e.cage},e.id)}))})]})},ce=(a(73),a(74),function(e){var t=e.ratings,a=e.name,n=e.id,c=t.length?t.reduce((function(e,t){return e.score>t.score?e:t})):null,s=t.length?t.reduce((function(e,t){return e.score<t.score?e:t})):null;return Object(m.jsxs)(Z.a,{bg:"dark",className:"viewerCard","data-testid":"viewerCard",children:[Object(m.jsx)(Z.a.Header,{className:"viewerCardHeader",children:Object(m.jsx)(p.b,{to:"/viewers/".concat(n),children:a})}),Object(m.jsx)(Z.a.Body,{className:"viewerCardBody",children:Object(m.jsx)("table",{className:"viewerCardTable",children:Object(m.jsxs)("tbody",{children:[Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"Ratings"}),Object(m.jsx)("td",{children:t.length})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"Average"}),Object(m.jsx)("td",{children:t.length?"".concat(D(t).toFixed(1),"/10"):"N/A"})]}),Object(m.jsxs)("tr",{"data-testid":"highest",children:[Object(m.jsx)("th",{children:"Highest"}),Object(m.jsx)("td",{children:c?"".concat(c.name," (").concat(c.score,"/10)"):"N/A"})]}),Object(m.jsxs)("tr",{"data-testid":"lowest",children:[Object(m.jsx)("th",{children:"Lowest"}),Object(m.jsx)("td",{children:s?"".concat(s.name," (").concat(s.score,"/10)"):"N/A"})]})]})})})]})}),se=[{value:"rateA",label:"Rating (Ascending)"},{value:"rateD",label:"Rating (Descending)"},{value:"titleA",label:"Name (Ascending)"},{value:"titleD",label:"Name (Descending)"}],re=function(){var e=Object(n.useContext)(g).viewer,t=Object(n.useState)(se[2]),a=Object(i.a)(t,2),c=a[0],s=a[1];return Object(m.jsxs)("div",{className:"viewerHomePage",children:[Object(m.jsxs)("div",{className:"viewerSort",children:[Object(m.jsx)("label",{style:{display:"none"},htmlFor:"sort",children:"Sort"}),Object(m.jsx)(X.a,{isSearchable:!1,className:"select",options:se,value:c,onChange:s,inputId:"sort"})]}),Object(m.jsx)("div",{className:"viewerHome",children:e.slice().sort((function(e,t){return function(e,t,a){switch(a.value){case"rateA":return D(e.ratings)-D(t.ratings);case"rateD":return D(t.ratings)-D(e.ratings);case"titleA":return e.name>t.name?1:e.name<t.name?-1:0;case"titleD":return e.name>t.name?-1:e.name<t.name?1:0;default:return e.name>t.name?1:e.name<t.name?-1:0}}(e,t,c)})).map((function(e){return Object(m.jsx)(ce,{ratings:e.ratings,name:e.name,id:e.id},e.id)}))})]})},ie=function(e){var t=e.ratings,a=e.name,n=Object(R.useMediaQuery)({maxWidth:700});return Object(m.jsx)("div",{children:Object(m.jsx)(G,{movie:!0,title:"".concat(a,"'s Ratings"),ratings:t,isMobile:n})})},le=a.p+"static/media/tmdb.bb8aa703.svg",oe=function(){return Object(m.jsxs)("div",{className:"footer",children:[Object(m.jsx)("div",{children:"Movie images and info powered by:"}),Object(m.jsx)("a",{href:"https://www.themoviedb.org/",children:Object(m.jsx)("img",{src:le,alt:"The Movie Database"})})]})},de=function(){var e=Object(N.g)().pathname;return Object(n.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},je=function(e){var t=e.back,a=e.type,c=Object(n.useState)(""),s=Object(i.a)(c,2),r=s[0],l=s[1],o=Object(n.useState)(""),d=Object(i.a)(o,2),j=d[0],u=d[1],b=Object(n.useState)(null),h=Object(i.a)(b,2),x=h[0],v=h[1];return"out"===a?Object(m.jsx)("div",{className:"logIn",children:Object(m.jsxs)(W.a,{className:"logOutBox",variant:"success",children:[Object(m.jsx)(W.a.Heading,{children:"Sign Out Successful!"}),Object(m.jsx)(B.a,{onClick:t,variant:"outline-success",children:"Close"})]})}):Object(m.jsx)("div",{className:"logIn",children:Object(m.jsxs)("div",{className:"logInBox",children:[Object(m.jsx)("div",{className:"logInTitle",children:Object(m.jsx)("h2",{children:"Login"})}),Object(m.jsx)("div",{className:"logInErrors",children:x&&Object(m.jsx)(W.a,{variant:"danger",children:x})}),Object(m.jsxs)(H.a,{className:"form",children:[Object(m.jsxs)(H.a.Group,{controlId:"formBasicEmail",children:[Object(m.jsx)(H.a.Label,{children:"Email"}),Object(m.jsx)(H.a.Control,{type:"email",placeholder:"Enter email",onChange:function(e){return l(e.target.value)},value:r})]}),Object(m.jsxs)(H.a.Group,{controlId:"formBasicPassword",children:[Object(m.jsx)(H.a.Label,{children:"Password"}),Object(m.jsx)(H.a.Control,{type:"password",placeholder:"Password",value:j,onChange:function(e){return u(e.target.value)}})]}),Object(m.jsxs)("div",{className:"logInButtons",children:[Object(m.jsx)(B.a,{variant:"primary",type:"submit",id:"submitButton",onClick:function(e){e.preventDefault(),O.signInWithEmailAndPassword(r,j).then((function(e){t()})).catch((function(e){v("Login Failed: ".concat(e.message))}))},children:"Login"}),Object(m.jsx)(B.a,{variant:"danger",id:"backButton",onClick:t,children:"Back"})]})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)(p.b,{className:"link",onClick:t,to:"/join",children:"Create an Account"})," to start ranking movies!"]})]})})},ue=a(12),be=a(79),Oe=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),r=Object(i.a)(s,2),l=r[0],o=r[1],d=Object(n.useState)(""),j=Object(i.a)(d,2),u=j[0],h=j[1],v=Object(n.useState)(""),g=Object(i.a)(v,2),f=g[0],p=g[1],C=Object(n.useState)({displayName:"",confirmPassword:"",email:"",password:""}),y=Object(i.a)(C,2),w=y[0],P=y[1],k=Object(n.useState)(!1),S=Object(i.a)(k,2),E=S[0],I=S[1],A=Object(n.useState)(!1),D=Object(i.a)(A,2),T=D[0],_=D[1],R=Object(N.f)(),F=Object(n.useContext)(x);return Object(m.jsxs)("div",{className:"signUp",children:[E&&Object(m.jsx)("div",{className:"logIn",children:Object(m.jsxs)(W.a,{className:"logOutBox",variant:"success",children:[Object(m.jsx)(W.a.Heading,{children:"Success!"}),Object(m.jsx)("p",{children:"Your account has been created!"}),Object(m.jsx)(B.a,{variant:"outline-success",onClick:function(){return R.push("/")},children:"Continue to Home Page"})]})}),T&&Object(m.jsx)("div",{className:"logIn",children:Object(m.jsxs)(W.a,{className:"logOutBox",variant:"danger",children:[Object(m.jsx)(W.a.Heading,{children:"Already Signed In"}),Object(m.jsx)("p",{children:"Please sign out of the current account before making a new one."}),Object(m.jsx)(B.a,{variant:"outline-danger",onClick:function(){return _(!1)},children:"Back"})]})}),Object(m.jsx)("div",{className:"signUpTitle",children:Object(m.jsx)("h2",{children:"Join Movie Ratings"})}),Object(m.jsxs)(H.a,{className:"signUpForm",children:[Object(m.jsxs)(H.a.Group,{controlId:"formBasicEmail",children:[Object(m.jsx)(H.a.Label,{children:"Email"}),Object(m.jsx)(H.a.Control,{type:"email",placeholder:"Email",onChange:function(e){return c(e.target.value)},value:a,isInvalid:""!==w.email}),Object(m.jsx)(H.a.Control.Feedback,{type:"invalid",children:w.email})]}),Object(m.jsxs)(H.a.Group,{controlId:"formBasicDisplay",children:[Object(m.jsx)(H.a.Label,{children:"Display Name"}),Object(m.jsx)(H.a.Control,{placeholder:"Display Name",onChange:function(e){return p(e.target.value)},value:f,isInvalid:""!==w.displayName}),Object(m.jsx)(be.a.Feedback,{type:"invalid",children:w.displayName})]}),Object(m.jsxs)(H.a.Group,{controlId:"formBasicPassword",children:[Object(m.jsx)(H.a.Label,{children:"Password"}),Object(m.jsx)(H.a.Control,{type:"password",placeholder:"Password",value:l,onChange:function(e){return o(e.target.value)},isInvalid:""!==w.password}),Object(m.jsx)(H.a.Control.Feedback,{type:"invalid",children:w.password})]}),Object(m.jsxs)(H.a.Group,{controlId:"formBasicConfirmPassword",children:[Object(m.jsx)(H.a.Label,{children:"Confirm Password"}),Object(m.jsx)(H.a.Control,{type:"password",placeholder:"Confirm Password",value:u,onChange:function(e){return h(e.target.value)},isInvalid:""!==w.confirmPassword}),Object(m.jsx)(H.a.Control.Feedback,{type:"invalid",children:w.confirmPassword})]}),Object(m.jsx)("div",{className:"logInButtons",children:Object(m.jsx)(B.a,{variant:"primary",type:"submit",id:"joinButton",onClick:function(){P({displayName:"",confirmPassword:"",email:"",password:""});var e=!1;f.length>12?(P((function(e){return Object(ue.a)(Object(ue.a)({},e),{},{displayName:"Display Name must be 12 characters or shorter"})})),e=!0):f.length<=2?(P((function(e){return Object(ue.a)(Object(ue.a)({},e),{},{displayName:"Display Name must be at least 3 characters"})})),e=!0):/^[a-zA-Z]+$/g.test(f)||(P((function(e){return Object(ue.a)(Object(ue.a)({},e),{},{displayName:"Display Name can only be letters"})})),e=!0),u!==l&&(P((function(e){return Object(ue.a)(Object(ue.a)({},e),{},{confirmPassword:"Passwords do not match"})})),e=!0),e||(F?_(!0):O.createUserWithEmailAndPassword(a,l).then((function(e){var t,a;null===(t=e.user)||void 0===t||t.updateProfile({displayName:f}).catch((function(e){return console.log(e.message)})),b.ref("/users").child("".concat(null===(a=e.user)||void 0===a?void 0:a.uid)).set({displayName:f}),I(!0)})).catch((function(e){e.message.toLowerCase().includes("email")&&P((function(t){return Object(ue.a)(Object(ue.a)({},t),{},{email:e.message})})),e.message.toLowerCase().includes("password")&&P((function(t){return Object(ue.a)(Object(ue.a)({},t),{},{password:e.message})}))})))},children:"Join"})})]})]})},he=a(83),me=["children"],xe=function(e){var t=e.children,a=Object(he.a)(e,me),c=Object(n.useContext)(x);return Object(m.jsx)(N.b,Object(ue.a)(Object(ue.a)({},a),{},{render:function(){return c?t:Object(m.jsx)(N.a,{to:"/"})}}))},ve=(a(75),function(e){var t=e.type,a=e.back,c=e.currentEmail,s=e.currentName,r=Object(n.useState)(!1),l=Object(i.a)(r,2),o=l[0],d=l[1],u=Object(n.useState)(""),O=Object(i.a)(u,2),h=O[0],v=O[1],f=Object(n.useState)(""),p=Object(i.a)(f,2),N=p[0],C=p[1],y=Object(n.useState)(""),w=Object(i.a)(y,2),P=w[0],k=w[1],S=Object(n.useState)(""),E=Object(i.a)(S,2),I=E[0],A=E[1],D=Object(n.useState)(""),T=Object(i.a)(D,2),_=T[0],R=T[1],F=Object(n.useState)(""),L=Object(i.a)(F,2),M=L[0],G=L[1],J=Object(n.useContext)(x),Y=Object(n.useContext)(g).userMovie,K=Object(n.useState)({displayName:"",confirmPassword:"",email:"",password:"",currentPassword:""}),V=Object(i.a)(K,2),$=V[0],Q=V[1],Z=function(e){e.preventDefault(),Q({displayName:"",confirmPassword:"",email:"",password:"",currentPassword:""});var a=j.a.auth.EmailAuthProvider.credential(c,P);switch(t){case"Email":J.reauthenticateWithCredential(a).then((function(e){var t;null===(t=e.user)||void 0===t||t.updateEmail(I).then((function(){d(!0)})).catch((function(e){Q((function(t){return Object(ue.a)(Object(ue.a)({},t),{},{email:e.message})}))}))})).catch((function(e){Q((function(t){return Object(ue.a)(Object(ue.a)({},t),{},{currentPassword:e.message})}))}));break;case"Name":if(_.length<3)Q((function(e){return Object(ue.a)(Object(ue.a)({},e),{},{displayName:"Name must be at least 3 characters."})}));else if(/^[a-zA-Z]+$/g.test(_)){var n={};n["users/".concat(J.uid,"/displayName")]=_,Y.forEach((function(e){n["movies/".concat(e.name,"/ratings/").concat(J.uid,"/displayName")]=_})),b.ref().update(n).then((function(){J.updateProfile({displayName:_}).then((function(){d(!0)})).catch((function(e){Q((function(t){return Object(ue.a)(Object(ue.a)({},t),{},{displayName:e.message})}))}))})).catch((function(e){return Q((function(t){return Object(ue.a)(Object(ue.a)({},t),{},{displayName:e.message})}))}))}else Q((function(e){return Object(ue.a)(Object(ue.a)({},e),{},{displayName:"Name can only contain letters."})}));break;case"Password":h!==N?Q((function(e){return Object(ue.a)(Object(ue.a)({},e),{},{confirmPassword:"Passwords do not match"})})):J.reauthenticateWithCredential(a).then((function(e){var t;null===(t=e.user)||void 0===t||t.updatePassword(h).then((function(){d(!0)})).catch((function(e){Q((function(t){return Object(ue.a)(Object(ue.a)({},t),{},{password:e.message})}))}))})).catch((function(e){Q((function(t){return Object(ue.a)(Object(ue.a)({},t),{},{currentPassword:e.message})}))}));break;case"Delete":J.reauthenticateWithCredential(a).then((function(e){if(e.user){var t=e.user,a={};Y.forEach((function(e){a["movies/".concat(e.name,"/ratings/").concat(t.uid)]=null})),a["users/".concat(t.uid)]=null,b.ref().update(a).then((function(){t.delete().then((function(){d(!0)}))}))}})).catch((function(e){Q((function(t){return Object(ue.a)(Object(ue.a)({},t),{},{currentPassword:e.message})}))}))}};return o?Object(m.jsx)("div",{className:"logIn",children:Object(m.jsxs)(W.a,{className:"logOutBox",variant:"success",children:[Object(m.jsx)(W.a.Heading,{children:"Success!"}),Object(m.jsxs)("p",{children:["Your ",t," has been changed."]}),Object(m.jsx)(B.a,{variant:"outline-success",onClick:a,children:"Close"})]})}):Object(m.jsx)("div",{className:"logIn",children:Object(m.jsxs)("div",{className:"logInBox",children:[Object(m.jsxs)("div",{className:"logInTitle",children:["Delete"!==t&&Object(m.jsxs)("h2",{children:["Change ",t]}),"Delete"===t&&Object(m.jsx)("h2",{children:"Delete Account"})]}),Object(m.jsxs)(H.a,{className:"form",children:["Email"===t&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(H.a.Group,{as:U.a,controlId:"formBasicEmail",children:[Object(m.jsx)(H.a.Label,{column:!0,children:"Current Email:"}),Object(m.jsx)(z.a,{children:Object(m.jsx)(H.a.Control,{className:"plainText",plaintext:!0,readOnly:!0,defaultValue:c})})]}),Object(m.jsxs)(H.a.Group,{controlId:"newEmailForm",children:[Object(m.jsx)(H.a.Label,{children:"New Email"}),Object(m.jsx)(H.a.Control,{type:"email",placeholder:"Enter New Email",onChange:function(e){return A(e.target.value)},value:I,isInvalid:""!==$.email}),Object(m.jsx)(H.a.Control.Feedback,{type:"invalid",children:$.email})]}),Object(m.jsxs)(H.a.Group,{controlId:"formBasicCurrentPassword",children:[Object(m.jsx)(H.a.Label,{children:"Current Password"}),Object(m.jsx)(H.a.Control,{type:"password",placeholder:"Current Password",value:P,onChange:function(e){return k(e.target.value)},isInvalid:""!==$.currentPassword}),Object(m.jsx)(H.a.Control.Feedback,{type:"invalid",children:$.currentPassword})]})]}),"Name"===t&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(H.a.Group,{as:U.a,controlId:"formBasicName",children:[Object(m.jsx)(H.a.Label,{column:!0,children:"Current Name:"}),Object(m.jsx)(z.a,{children:Object(m.jsx)(H.a.Control,{className:"plainText",plaintext:!0,readOnly:!0,defaultValue:s})})]}),Object(m.jsxs)(H.a.Group,{controlId:"newNameForm",children:[Object(m.jsx)(H.a.Label,{children:"New Name"}),Object(m.jsx)(H.a.Control,{type:"text",placeholder:"Enter New Name",onChange:function(e){e.target.value.length<=12&&R(e.target.value)},value:_,isInvalid:""!==$.displayName}),Object(m.jsx)(H.a.Control.Feedback,{type:"invalid",children:$.displayName})]})]}),"Password"===t&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(H.a.Group,{controlId:"formBasicCurrentPassword",children:[Object(m.jsx)(H.a.Label,{children:"Current Password"}),Object(m.jsx)(H.a.Control,{type:"password",placeholder:"Current Password",value:P,onChange:function(e){return k(e.target.value)},isInvalid:""!==$.currentPassword}),Object(m.jsx)(H.a.Control.Feedback,{type:"invalid",children:$.currentPassword})]}),Object(m.jsxs)(H.a.Group,{controlId:"formBasicNewPassword",children:[Object(m.jsx)(H.a.Label,{children:"New Password"}),Object(m.jsx)(H.a.Control,{type:"password",placeholder:"New Password",value:h,onChange:function(e){return v(e.target.value)},isInvalid:""!==$.password}),Object(m.jsx)(H.a.Control.Feedback,{type:"invalid",children:$.password})]}),Object(m.jsxs)(H.a.Group,{controlId:"formBasicConfirmPassword",children:[Object(m.jsx)(H.a.Label,{children:"Confirm New Password"}),Object(m.jsx)(H.a.Control,{type:"password",placeholder:"Confirm New Password",value:N,onChange:function(e){return C(e.target.value)},isInvalid:""!==$.confirmPassword}),Object(m.jsx)(H.a.Control.Feedback,{type:"invalid",children:$.confirmPassword})]})]}),"Delete"===t&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(H.a.Text,{className:"warning",children:"Warning: This action will permanently delete your account!"}),Object(m.jsxs)(H.a.Group,{controlId:"formBasicCurrentPassword",children:[Object(m.jsx)(H.a.Label,{children:"Current Password"}),Object(m.jsx)(H.a.Control,{type:"password",placeholder:"Current Password",value:P,onChange:function(e){return k(e.target.value)},isInvalid:""!==$.currentPassword}),Object(m.jsx)(H.a.Control.Feedback,{type:"invalid",children:$.currentPassword})]}),Object(m.jsxs)(H.a.Group,{controlId:"delete",children:[Object(m.jsx)(H.a.Label,{children:"Enter 'DELETE' to delete your account."}),Object(m.jsx)(H.a.Control,{type:"text",placeholder:"enter DELETE",onChange:function(e){return G(e.target.value)},value:M})]})]}),Object(m.jsxs)("div",{className:"logInButtons",children:["Delete"!==t&&Object(m.jsx)(B.a,{variant:"primary",type:"submit",id:"submitButton",onClick:Z,children:"Submit"}),"Delete"===t&&Object(m.jsx)(B.a,{variant:"warning",id:"deleteButton",onClick:Z,disabled:"DELETE"!==M,children:"Delete Account"}),Object(m.jsx)(B.a,{variant:"danger",id:"backButton",onClick:a,children:"Back"})]})]})]})})}),ge=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],c=t[1],s=Object(n.useContext)(x),r=Object(R.useMediaQuery)({maxWidth:700}),l=Object(n.useContext)(g).userMovie,o=l.length?l.reduce((function(e,t){return e.score>t.score?e:t})):null,d=l.length?l.reduce((function(e,t){return e.score<t.score?e:t})):null;return Object(m.jsxs)("div",{className:"profile",children:[a&&Object(m.jsx)(ve,{type:a,currentEmail:s.email,currentName:s.displayName,back:function(){return c(null)}}),Object(m.jsxs)("div",{className:"settings",children:[Object(m.jsx)("div",{className:"settingsTitle",children:"Account Settings"}),Object(m.jsx)("div",{className:"settingsBody",children:Object(m.jsx)("div",{className:"settingsInfo",children:Object(m.jsx)("table",{className:"infoTable",children:Object(m.jsxs)("tbody",{children:[Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"Email"}),Object(m.jsx)("td",{children:s.email}),Object(m.jsx)("td",{className:"change",onClick:function(){return c("Email")},children:"Change"})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"Display Name"}),Object(m.jsx)("td",{children:s.displayName}),Object(m.jsx)("td",{className:"change",onClick:function(){return c("Name")},children:"Change"})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"Password"}),Object(m.jsx)("td",{children:"N/A"}),Object(m.jsx)("td",{className:"change",onClick:function(){return c("Password")},children:"Change"})]})]})})})})]}),Object(m.jsxs)("div",{className:"settings",children:[Object(m.jsx)("div",{className:"settingsTitle",children:"My Ratings"}),Object(m.jsxs)("div",{className:"setttingsBody",children:[Object(m.jsx)("table",{className:"ratingInfo",children:Object(m.jsxs)("tbody",{children:[Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"Movies Watched:"}),Object(m.jsx)("td",{children:l.length})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"Average Rating:"}),Object(m.jsx)("td",{children:l.length?"".concat(D(l),"/10"):"N/A"})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"Highest Rated:"}),Object(m.jsx)("td",{children:o?"".concat(o.name," (").concat(o.score,"/10)"):"N/A"})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"Lowest Rated:"}),Object(m.jsx)("td",{children:d?"".concat(d.name," (").concat(d.score,"/10)"):"N/A"})]})]})}),!!l.length&&Object(m.jsx)(G,{movie:!0,ratings:l,isMobile:r,title:""})]})]}),Object(m.jsx)("div",{className:"delete",children:Object(m.jsx)(B.a,{variant:"danger",onClick:function(){return c("Delete")},children:"Delete Account"})})]})},fe=function(){var e=Object(n.useContext)(g).movie,t=Object(n.useContext)(g).viewer,a=Object(n.useState)(!1),c=Object(i.a)(a,2),s=c[0],r=c[1],l=Object(n.useState)(!1),o=Object(i.a)(l,2),d=o[0],j=o[1];return Object(m.jsxs)("div",{style:{position:"relative"},children:[Object(m.jsxs)(p.a,{children:[s&&Object(m.jsx)(je,{type:"in",back:function(){return r(!1)}}),d&&Object(m.jsx)(je,{type:"out",back:function(){return j(!1)}}),Object(m.jsx)(de,{}),Object(m.jsx)(Q,{signOut:function(){O.signOut().then((function(){j(!0)})).catch((function(e){console.log(e.message)}))},signIn:function(){return r(!0)}}),Object(m.jsxs)("div",{className:"appBody",children:[Object(m.jsx)(N.b,{exact:!0,path:"/",children:Object(m.jsx)(ne,{})}),Object(m.jsx)(N.b,{path:"/join",children:Object(m.jsx)(Oe,{})}),Object(m.jsx)(xe,{path:"/profile",children:Object(m.jsx)(ge,{})}),e.map((function(e,t){return Object(m.jsx)(N.b,{path:"/movies/".concat(e.title.replace(/ /g,"-")),children:Object(m.jsx)(Y,{title:e.title,ratings:e.ratings,id:e.id,date:e.date,cage:e.cage})},t)})),Object(m.jsx)(N.b,{exact:!0,path:"/viewers",children:Object(m.jsx)(re,{})}),t.map((function(e,t){return Object(m.jsx)(N.b,{path:"/viewers/".concat(e.id),children:Object(m.jsx)(ie,{name:e.name,ratings:e.ratings})},t)}))]})]}),Object(m.jsx)(oe,{})]})},pe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,136)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};r.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(v,{children:Object(m.jsx)(f,{children:Object(m.jsx)(fe,{})})})}),document.getElementById("root")),pe()},42:function(e,t,a){},69:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},88:function(e,t,a){},96:function(e,t,a){}},[[123,1,2]]]);
//# sourceMappingURL=main.332bbd87.chunk.js.map