(this["webpackJsonpmovie-rankings"]=this["webpackJsonpmovie-rankings"]||[]).push([[0],{102:function(e,t,a){},111:function(e,t,a){},123:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(24),r=a.n(s),i=(a(88),a(8)),l=a(21),o=a.n(l),d=a(30),j=a(36);a(62),a(68);j.a.apps.length||j.a.initializeApp({apiKey:"AIzaSyAyvJ2WjTMTTEm0iIdDgmePfWt2CjubCoU",authDomain:"movie-rankings-75fa0.firebaseapp.com",databaseURL:"https://movie-rankings-75fa0-default-rtdb.firebaseio.com",messagingSenderId:"309289181606",projectId:"movie-rankings-75fa0",storageBucket:"movie-rankings-75fa0.appspot.com"});var u=j.a.database(),b=j.a.auth(),h=function(e,t){var a=[];return e.forEach((function(e){a.push({name:t?e.val().displayName:e.key,score:t?e.val().score:e.val(),id:t?e.key:e.key.replace(/ /g,"-")})})),a},O=a(1),m=Object(n.createContext)(null),x=function(e){var t=e.children,a=Object(n.useState)(null),c=Object(i.a)(a,2),s=c[0],r=c[1];return Object(n.useEffect)((function(){return b.onAuthStateChanged((function(e){return r(e)}))}),[]),Object(O.jsx)(m.Provider,{value:s,children:t})},g=Object(n.createContext)({movie:[],viewer:[],userMovie:[],displayName:null}),v=function(e){var t=e.children,a=Object(n.useState)([]),c=Object(i.a)(a,2),s=c[0],r=c[1],l=Object(n.useState)([]),j=Object(i.a)(l,2),b=j[0],x=j[1],v=Object(n.useState)([]),f=Object(i.a)(v,2),p=f[0],N=f[1],C=Object(n.useState)(""),w=Object(i.a)(C,2),y=w[0],k=w[1],P=Object(n.useContext)(m);return Object(n.useEffect)((function(){if(P)return u.ref("users/".concat(P.uid)).on("value",(function(e){e.val()?(N(h(e.child("/ratings"),!1)),k(e.val().displayName)):(N([]),k(""))})),function(){return u.ref("users/".concat(P.uid)).off()}}),[P]),Object(n.useEffect)((function(){var e=function(){var e=Object(d.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.prev=1,e.next=4,u.ref("movies").once("value");case 4:e.sent.forEach((function(e){t.push({title:e.key,date:new Date(e.val().date),ratings:h(e.child("/ratings"),!0),id:e.val().id,cage:e.val().cage})})),r(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),t=function(){var e=Object(d.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=[],e.next=4,u.ref("users").once("value");case 4:e.sent.forEach((function(e){e.val().ratings&&t.push({name:e.val().displayName,ratings:h(e.child("/ratings"),!1),id:e.key})})),x(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();e(),t()}),[p,y]),Object(O.jsx)(g.Provider,{value:{movie:s,viewer:b,userMovie:p,displayName:y},children:t})},f=a(18),p=a(13),N=function(){var e=Object(d.a)(o.a.mark((function e(t){var a,n,c,s,r,i,l,d,j,u,b,h,O,m,x;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"fd115b9db75ae82522026bd31b50bf35",e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat("fd115b9db75ae82522026bd31b50bf35","&language=en-US"));case 3:return a=e.sent,e.next=6,a.json();case 6:return n=e.sent,c=n.budget,s=n.genres,r=n.imdb_id,i=n.overview,l=n.poster_path,d=n.backdrop_path,j=n.revenue,u=n.runtime,b=n.title,h=n.vote_average,O=n.vote_count,m=n.release_date,x=n.tagline,e.abrupt("return",{budget:c,genres:s,imdb_id:r,overview:i,poster_path:"https://image.tmdb.org/t/p/w500".concat(l),backdrop_path:"https://image.tmdb.org/t/p/w1280".concat(d),revenue:j,runtime:u,title:b,vote_average:h,vote_count:O,tagline:x,release_date:new Date(m)});case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=(a(69),["January","February","March","April","May","June","July","August","September","October","November","December"]),w=function(e){return"".concat(C[e.getMonth()]," ").concat(e.getDate(),", ").concat(e.getFullYear())},y=function(e,t,a){var n=w(e),c="";return t.forEach((function(e,a){a===t.length-1?c+=e.name:c+="".concat(e.name,", ")})),"".concat(n," | ").concat(c," | ").concat(function(e){var t=Math.floor(e/60),a=e%60;return"".concat(t,"h ").concat(a,"m")}(a))},k=a(64),P=(a(95),{path:"#FF0800",trail:"#420C09",star:"#FF0800"}),S={path:"#FFD300",trail:"#614710",star:"#E56717"},I={path:"#03AC13",trail:"#003B00",star:"#FFD700"},D=function(e){var t=e.rating,a=function(e){return e<4?P:e>=4&&e<6.9?S:I}(t);return Object(O.jsx)("div",{children:Object(O.jsx)(k.a,{value:t,text:"".concat(t.toFixed(1)),maxValue:10,strokeWidth:12,styles:Object(k.b)({pathColor:a.path,trailColor:a.trail,textColor:"white"})})})},B=function(e){var t=0;return e.forEach((function(e){t+=e.score})),0!==e.length?t/e.length:0},E=a(67),A=(a(96),a(77)),F=function(e){var t=e.date,a=e.ratings,c=e.vote_average,s=e.vote_count,r=e.overview,i=e.budget,l=e.revenue,o=e.cage,d=e.addRating,j=e.userRating,u=e.deleteRating,b=Object(n.useContext)(m);return Object(O.jsxs)("div",{className:"detailsPage",children:[Object(O.jsxs)("div",{className:"movieRatings",children:[Object(O.jsxs)("div",{className:"ourRating",children:[Object(O.jsxs)("div",{children:["Our Rating (",a.length,")"]}),Object(O.jsx)("div",{className:"ratingSize",children:Object(O.jsx)(D,{rating:B(a)})})]}),Object(O.jsxs)("div",{className:"fanRating",children:[Object(O.jsxs)("div",{children:["TMDB Rating (",s.toLocaleString("en"),")"]}),Object(O.jsx)("div",{className:"ratingSize",children:Object(O.jsx)(D,{rating:c})})]})]}),Object(O.jsxs)("div",{className:"movieDetails",children:[Object(O.jsxs)("div",{className:"cage",children:[Object(O.jsx)("div",{className:"heading",children:"Nic Cage"}),Object(O.jsx)("div",{className:" = detailBody",children:o?Object(O.jsx)(E.a,{size:20,color:"#03AC13","data-testid":"check"}):Object(O.jsx)(E.b,{size:20,color:"#FF0800","data-testid":"x"})})]}),Object(O.jsxs)("div",{className:"overview",children:[Object(O.jsx)("div",{className:"heading",children:"Plot"}),Object(O.jsx)("div",{className:" = detailBody",children:r})]}),Object(O.jsxs)("div",{className:"budget",children:[Object(O.jsx)("div",{className:"heading",children:"Budget"}),Object(O.jsxs)("div",{className:" = detailBody",children:["$",i.toLocaleString("en")]})]}),Object(O.jsxs)("div",{className:"revenue",children:[Object(O.jsx)("div",{className:"heading",children:"Revenue"}),Object(O.jsxs)("div",{className:" = detailBody",children:["$",l.toLocaleString("en")]})]}),Object(O.jsxs)("div",{className:"revenue",children:[Object(O.jsx)("div",{className:"heading",children:"Date Watched"}),Object(O.jsx)("div",{className:" = detailBody",children:w(t)})]}),b&&Object(O.jsxs)("div",{className:"revenue",children:[Object(O.jsx)("div",{className:"heading",children:"Your Rating"}),j?Object(O.jsxs)("div",{className:" = detailBody",children:[j.score,"/10 |"," ",Object(O.jsx)("div",{className:"changeRating",onClick:d,children:"Change"}),Object(O.jsx)("div",{style:{display:"inline"},className:"detailBody",children:" | "}),Object(O.jsx)("div",{className:"changeRating",onClick:u,children:"Delete"})]}):Object(O.jsx)(A.a,{size:"sm",variant:"secondary",onClick:d,children:"Add Rating"})]})]})]})},R=a(39),T=a(128),L=a(45),M=a.n(L),_=(a(102),function(e){var t=e.ratings,a=e.isMobile,c=e.title,s=e.movie,r=Object(n.useState)(!0),l=Object(i.a)(r,2),o=l[0],d=l[1],j=Object(n.useState)("score"),u=Object(i.a)(j,2),b=u[0],h=u[1],m=s?"/movies/":"/viewers/",x=Object(p.f)(),g=function(e){e===b?d(!o):h(e)};return Object(O.jsxs)("div",{className:"ratingTable",children:[Object(O.jsx)("div",{className:"ratingTitle",children:c}),Object(O.jsx)(T.a,{size:"sm",hover:!0,variant:"dark",className:"tableOfRatings",children:Object(O.jsxs)("tbody",{children:[Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{onClick:function(){return g("name")},children:"Name"}),Object(O.jsx)("th",{onClick:function(){return g("score")},children:"Score"})]}),t.sort((function(e,t){return function(e,t,a,n){return"score"===a?n?t.score-e.score:e.score-t.score:n?e.name>t.name?1:e.name<t.name?-1:0:e.name>t.name?-1:e.name<t.name?1:0}(e,t,b,o)})).map((function(e,t){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{"data-testid":"ratingName",className:"ratingName",onClick:function(){return x.push("".concat(m).concat(e.id))},children:e.name}),Object(O.jsxs)("td",{children:[Object(O.jsx)(M.a,{rating:e.score/2,starRatedColor:"rgb(255,223,0)",starEmptyColor:"rgb(30,30,30)",starDimension:a?"30px":"35px",starSpacing:a?"0px":"2px",name:"starRating"})," ".concat(e.score.toFixed(1),"/10")]})]},t)})),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{}),Object(O.jsx)("td",{})]}),Object(O.jsxs)("tr",{children:[Object(O.jsxs)("td",{className:"ratingsAverage",children:["Average (",t.length," ratings)"]}),Object(O.jsxs)("td",{children:[Object(O.jsx)(M.a,{rating:B(t)/2,starRatedColor:"rgb(255,223,0)",starEmptyColor:"rgb(30,30,30)",starDimension:a?"30px":"35px",starSpacing:a?"0px":"2px",name:"starRating"})," ".concat(B(t).toFixed(1),"/10")]})]})]})})]})}),G=(a(42),a(134)),W=a(131),H=a(129),z=a(80),J=function(e){var t=e.title,a=e.back,c=e.userScore,s=e.deleteRating,r=Object(n.useState)(""),l=Object(i.a)(r,2),o=l[0],d=l[1],j=Object(n.useState)(""),b=Object(i.a)(j,2),h=b[0],x=b[1],v=Object(n.useState)(!1),f=Object(i.a)(v,2),p=f[0],N=f[1],C=Object(n.useContext)(m),w=Object(n.useContext)(g).displayName,y=C.uid,k=s?"Delete":c?"Edit":"Add";return p?Object(O.jsx)("div",{className:"logIn",children:Object(O.jsxs)(G.a,{className:"logOutBox",variant:"success",children:[Object(O.jsx)(G.a.Heading,{children:"Success!"}),Object(O.jsxs)("p",{children:["Your rating has been ","".concat(s?"deleted":"added"),"!"]}),Object(O.jsx)(A.a,{variant:"outline-success",onClick:a,children:"Close"})]})}):Object(O.jsx)("div",{className:"logIn",style:{color:"white"},children:Object(O.jsxs)("div",{className:"logInBox",children:[Object(O.jsx)("div",{className:"logInTitle",children:Object(O.jsxs)("h2",{children:[k," Rating"]})}),Object(O.jsxs)("div",{style:{marginBottom:"15px"},children:[!s&&Object(O.jsxs)(O.Fragment,{children:[k," your rating for ",Object(O.jsx)("i",{children:t})," (0-10)."]}),s&&Object(O.jsxs)(O.Fragment,{children:["Are you sure you want to delete your rating for ",Object(O.jsx)("i",{children:t}),"?"]})]}),Object(O.jsxs)(W.a,{onSubmit:function(e){e.preventDefault(),x("");var a=parseFloat(o);if(!isNaN(a)&&a>=0&&a<=10){var n={};n["movies/".concat(t,"/ratings/").concat(y)]={displayName:w,score:Math.round(10*a)/10},n["users/".concat(y,"/ratings/").concat(t)]=Math.round(10*a)/10,u.ref().update(n).then((function(){N(!0)})).catch((function(e){return x(e.message)}))}else x("Please enter a number between 0-10.")},children:[c&&Object(O.jsxs)(W.a.Group,{as:H.a,controlId:"formCurrentScore",children:[Object(O.jsx)(W.a.Label,{column:!0,children:"Current Rating:"}),Object(O.jsx)(z.a,{xs:7,children:Object(O.jsx)(W.a.Control,{style:{color:"white"},plaintext:!0,readOnly:!0,defaultValue:"".concat(c.score,"/10")})})]}),!s&&Object(O.jsxs)(W.a.Group,{as:H.a,controlId:"formrating",children:[Object(O.jsx)(z.a,{xs:3,children:Object(O.jsx)(W.a.Label,{children:"Rating: "})}),Object(O.jsxs)(z.a,{xs:5,children:[Object(O.jsx)(W.a.Control,{type:"number",step:.1,placeholder:"0-10",value:o,onChange:function(e){return d(e.target.value)},isInvalid:""!==h}),Object(O.jsx)(W.a.Control.Feedback,{type:"invalid",children:h})]})]}),Object(O.jsxs)("div",{className:"logInButtons","data-testid":"buttons",children:[!s&&Object(O.jsx)(A.a,{variant:"primary",type:"submit",id:"submitButton",children:"Submit"}),s&&Object(O.jsx)(A.a,{variant:"warning",onClick:function(){var e={};e["movies/".concat(t,"/ratings/").concat(y)]=null,e["users/".concat(y,"/ratings/").concat(t)]=null,u.ref().update(e).then((function(){N(!0)})).catch((function(e){return console.log(e.message)}))},children:"Delete"}),Object(O.jsx)(A.a,{variant:"danger",id:"backButton",onClick:a,children:"Back"})]})]})]})})},U=function(e){var t=e.title,a=e.id,c=e.date,s=e.ratings,r=e.cage,l=Object(n.useState)(),j=Object(i.a)(l,2),u=j[0],b=j[1],h=Object(n.useState)(!1),m=Object(i.a)(h,2),x=m[0],v=m[1],f=Object(n.useState)(!1),p=Object(i.a)(f,2),C=p[0],w=p[1],k=Object(R.useMediaQuery)({maxWidth:700}),P=Object(n.useContext)(g).userMovie.find((function(e){return e.name===t}));if(Object(n.useEffect)((function(){(function(){var e=Object(d.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N(a);case 2:t=e.sent,b(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[a]),u){var S=Object(O.jsx)(F,{date:c,ratings:s,vote_average:u.vote_average,vote_count:u.vote_count,overview:u.overview,budget:u.budget,revenue:u.revenue,cage:r,addRating:function(){return v(!0)},deleteRating:function(){w(!0),v(!0)},userRating:P});return Object(O.jsxs)("div",{className:"moviePage",children:[x&&Object(O.jsx)(J,{back:function(){v(!1),w(!1)},title:t,userScore:P,deleteRating:C}),Object(O.jsxs)("div",{className:"info",style:{backgroundImage:"url(".concat(u.backdrop_path,")")},children:[Object(O.jsx)("div",{className:"overlay"}),Object(O.jsx)("div",{className:"moviePoster",children:Object(O.jsx)("img",{src:u.poster_path,alt:""})}),Object(O.jsxs)("div",{className:"movieInfo","data-testid":"movieDetails",children:[Object(O.jsxs)("div",{className:"titleDiv",children:[Object(O.jsxs)("div",{className:"movieTitle",children:["".concat(u.title," (").concat(u.release_date.getFullYear(),")"),Object(O.jsx)("div",{className:"movieTitleInfo",children:u&&y(u.release_date,u.genres,u.runtime)})]}),Object(O.jsx)("div",{className:"tagline",children:u.tagline})]}),!k&&S]})]}),k&&S,Object(O.jsx)(_,{movie:!1,title:"Ratings",ratings:s,isMobile:k})]})}return Object(O.jsx)("div",{className:"moviePage","data-testid":"loadingMoviePage",children:Object(O.jsx)("div",{className:"info"})})},Y=a(132),V=a(133),$=a(130),Q=function(e){var t=e.signIn,a=e.signOut,c=Object(n.useState)(!1),s=Object(i.a)(c,2),r=s[0],l=s[1],o=Object(p.g)().pathname,d=Object(n.useContext)(m),j=Object(n.useContext)(g).displayName;return Object(n.useEffect)((function(){l(!1)}),[o]),Object(O.jsxs)(Y.a,{bg:"dark",variant:"dark",expand:"sm",expanded:r,onToggle:l,children:[Object(O.jsx)(Y.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(O.jsxs)(Y.a.Collapse,{id:"responsive-navbar-nav",children:[Object(O.jsxs)(V.a,{className:"mr-auto",children:[Object(O.jsx)(V.a.Link,{as:f.b,to:"/",children:"Home"}),Object(O.jsx)(V.a.Link,{as:f.b,to:"/viewers",children:"Viewers"})]}),Object(O.jsx)(V.a,{className:"justify-content-right",children:d&&j?Object(O.jsxs)($.a,{alignRight:!0,title:j,id:"dropdown",children:[Object(O.jsx)($.a.Item,{as:f.b,to:"/profile",children:"Profile"}),Object(O.jsx)($.a.Item,{onClick:a,children:"Sign Out"})]}):Object(O.jsx)(V.a.Link,{id:"logInButton",onClick:t,children:"Sign In"})})]})]})},Z=(a(110),a(135)),K=(a(111),function(e){var t=e.title,a=e.id,c=(e.date,e.ratings),s=Object(n.useState)(),r=Object(i.a)(s,2),l=r[0],j=r[1];Object(n.useEffect)((function(){var e=!0;return function(){var t=Object(d.a)(o.a.mark((function t(){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N(a);case 2:n=t.sent,e&&j(n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()(),function(){e=!1}}),[a]);var u=B(c);return Object(O.jsxs)(Z.a,{bg:"dark",className:"movieCard","data-testid":"movieCard",children:[Object(O.jsx)("div",{className:"imageWrapper",children:Object(O.jsx)("div",{className:"image",children:Object(O.jsx)("img",{className:"cardImage",src:null===l||void 0===l?void 0:l.poster_path,alt:"".concat(t," Poster")})})}),Object(O.jsx)("div",{className:"bodyWrapper",children:Object(O.jsxs)("div",{className:"body",children:[Object(O.jsx)("div",{className:"title",children:Object(O.jsx)(f.b,{to:"/movies/".concat(t.replace(/ /g,"-")),children:Object(O.jsx)(Z.a.Title,{"data-testid":t,children:null===l||void 0===l?void 0:l.title})})}),Object(O.jsxs)("div",{className:"averageRating",children:[Object(O.jsx)("div",{className:"stars",children:Object(O.jsx)(M.a,{rating:u/10,starRatedColor:"rgb(255,223,0)",numberOfStars:1,starEmptyColor:"rgb(30,30,30)",starDimension:"50px",starSpacing:"0px"})}),Object(O.jsx)("div",{className:"score",children:u.toFixed(1)})]})]})})]})}),q=a(56),X=a(82),ee=a.n(X),te=[{value:"dateA",label:"Date (Ascending)"},{value:"dateD",label:"Date (Descending)"},{value:"rateA",label:"Rating (Ascending)"},{value:"rateD",label:"Rating (Descending)"},{value:"titleA",label:"Title (Ascending)"},{value:"titleD",label:"Title (Descending)"}],ae=function(){var e=Object(n.useState)(te[1]),t=Object(i.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(!1),r=Object(i.a)(s,2),l=r[0],o=r[1],d=Object(n.useContext)(g).movie.slice().sort((function(e,t){return function(e,t,a){switch(a.value){case"dateA":return e.date.getTime()-t.date.getTime();case"dateD":return t.date.getTime()-e.date.getTime();case"rateA":return B(e.ratings)-B(t.ratings);case"rateD":return B(t.ratings)-B(e.ratings);case"titleA":return e.title>t.title?1:e.title<t.title?-1:0;case"titleD":return e.title>t.title?-1:e.title<t.title?1:0;default:return t.date.getTime()-e.date.getTime()}}(e,t,a)}));return Object(O.jsxs)("div",{className:"homePage","data-testid":"homePage",children:[Object(O.jsxs)("div",{className:"sort",children:[Object(O.jsxs)("div",{className:"cageFilter",children:[Object(O.jsx)("div",{className:"filterTitle",children:"Cage Filter"}),Object(O.jsx)(ee.a,{onColor:"#03AC13",uncheckedIcon:!1,checked:l,onChange:function(e){return o(e)}})]}),Object(O.jsx)("label",{style:{display:"none"},htmlFor:"sort",children:"Sort"}),Object(O.jsx)(q.a,{isSearchable:!1,className:"select",options:te,value:a,onChange:c,inputId:"sort"})]}),Object(O.jsx)("div",{className:"home",children:d.filter((function(e){return l?!0===e.cage:e})).map((function(e,t){return Object(O.jsx)(K,{title:e.title,date:e.date,id:e.id,ratings:e.ratings,cage:e.cage},e.id)}))})]})},ne=(a(73),a(74),function(e){var t=e.ratings,a=e.name,n=e.id,c=t.length?t.reduce((function(e,t){return e.score>t.score?e:t})):null,s=t.length?t.reduce((function(e,t){return e.score<t.score?e:t})):null;return Object(O.jsxs)(Z.a,{bg:"dark",className:"viewerCard","data-testid":"viewerCard",children:[Object(O.jsx)(Z.a.Header,{className:"viewerCardHeader",children:Object(O.jsx)(f.b,{to:"/viewers/".concat(n),children:a})}),Object(O.jsx)(Z.a.Body,{className:"viewerCardBody",children:Object(O.jsx)("table",{className:"viewerCardTable",children:Object(O.jsxs)("tbody",{children:[Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Ratings"}),Object(O.jsx)("td",{children:t.length})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Average"}),Object(O.jsx)("td",{children:t.length?"".concat(B(t).toFixed(1),"/10"):"N/A"})]}),Object(O.jsxs)("tr",{"data-testid":"highest",children:[Object(O.jsx)("th",{children:"Highest"}),Object(O.jsx)("td",{children:c?"".concat(c.name," (").concat(c.score,"/10)"):"N/A"})]}),Object(O.jsxs)("tr",{"data-testid":"lowest",children:[Object(O.jsx)("th",{children:"Lowest"}),Object(O.jsx)("td",{children:s?"".concat(s.name," (").concat(s.score,"/10)"):"N/A"})]})]})})})]})}),ce=[{value:"rateA",label:"Rating (Ascending)"},{value:"rateD",label:"Rating (Descending)"},{value:"titleA",label:"Name (Ascending)"},{value:"titleD",label:"Name (Descending)"}],se=function(){var e=Object(n.useContext)(g).viewer,t=Object(n.useState)(ce[2]),a=Object(i.a)(t,2),c=a[0],s=a[1];return Object(O.jsxs)("div",{className:"viewerHomePage",children:[Object(O.jsxs)("div",{className:"viewerSort",children:[Object(O.jsx)("label",{style:{display:"none"},htmlFor:"sort",children:"Sort"}),Object(O.jsx)(q.a,{isSearchable:!1,className:"select",options:ce,value:c,onChange:s,inputId:"sort"})]}),Object(O.jsx)("div",{className:"viewerHome",children:e.slice().sort((function(e,t){return function(e,t,a){switch(a.value){case"rateA":return B(e.ratings)-B(t.ratings);case"rateD":return B(t.ratings)-B(e.ratings);case"titleA":return e.name>t.name?1:e.name<t.name?-1:0;case"titleD":return e.name>t.name?-1:e.name<t.name?1:0;default:return e.name>t.name?1:e.name<t.name?-1:0}}(e,t,c)})).map((function(e){return Object(O.jsx)(ne,{ratings:e.ratings,name:e.name,id:e.id},e.id)}))})]})},re=function(e){var t=e.ratings,a=e.name,n=Object(R.useMediaQuery)({maxWidth:700});return Object(O.jsx)("div",{children:Object(O.jsx)(_,{movie:!0,title:"".concat(a,"'s Ratings"),ratings:t,isMobile:n})})},ie=a.p+"static/media/tmdb.bb8aa703.svg",le=function(){return Object(O.jsxs)("div",{className:"footer",children:[Object(O.jsx)("div",{children:"Movie images and info powered by:"}),Object(O.jsx)("a",{href:"https://www.themoviedb.org/",children:Object(O.jsx)("img",{src:ie,alt:"The Movie Database"})})]})},oe=function(){var e=Object(p.g)().pathname;return Object(n.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},de=function(e){var t=e.back,a=e.type,c=Object(n.useState)(""),s=Object(i.a)(c,2),r=s[0],l=s[1],o=Object(n.useState)(""),d=Object(i.a)(o,2),j=d[0],u=d[1],h=Object(n.useState)(null),m=Object(i.a)(h,2),x=m[0],g=m[1];return"out"===a?Object(O.jsx)("div",{className:"logIn",children:Object(O.jsxs)(G.a,{className:"logOutBox",variant:"success",children:[Object(O.jsx)(G.a.Heading,{children:"Sign Out Successful!"}),Object(O.jsx)(A.a,{onClick:t,variant:"outline-success",children:"Close"})]})}):Object(O.jsx)("div",{className:"logIn",children:Object(O.jsxs)("div",{className:"logInBox",children:[Object(O.jsx)("div",{className:"logInTitle",children:Object(O.jsx)("h2",{children:"Login"})}),Object(O.jsx)("div",{className:"logInErrors",children:x&&Object(O.jsx)(G.a,{variant:"danger",children:x})}),Object(O.jsxs)(W.a,{className:"form",children:[Object(O.jsxs)(W.a.Group,{controlId:"formBasicEmail",children:[Object(O.jsx)(W.a.Label,{children:"Email"}),Object(O.jsx)(W.a.Control,{type:"email",placeholder:"Enter email",onChange:function(e){return l(e.target.value)},value:r})]}),Object(O.jsxs)(W.a.Group,{controlId:"formBasicPassword",children:[Object(O.jsx)(W.a.Label,{children:"Password"}),Object(O.jsx)(W.a.Control,{type:"password",placeholder:"Password",value:j,onChange:function(e){return u(e.target.value)}})]}),Object(O.jsxs)("div",{className:"logInButtons",children:[Object(O.jsx)(A.a,{variant:"primary",type:"submit",id:"submitButton",onClick:function(e){e.preventDefault(),b.signInWithEmailAndPassword(r,j).then((function(e){t()})).catch((function(e){g("Login Failed: ".concat(e.message))}))},children:"Login"}),Object(O.jsx)(A.a,{variant:"danger",id:"backButton",onClick:t,children:"Back"})]})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)(f.b,{className:"link",onClick:t,to:"/join",children:"Create an Account"})," to start ranking movies!"]})]})})},je=a(12),ue=a(79),be=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),r=Object(i.a)(s,2),l=r[0],o=r[1],d=Object(n.useState)(""),j=Object(i.a)(d,2),h=j[0],x=j[1],g=Object(n.useState)(""),v=Object(i.a)(g,2),f=v[0],N=v[1],C=Object(n.useState)({displayName:"",confirmPassword:"",email:"",password:""}),w=Object(i.a)(C,2),y=w[0],k=w[1],P=Object(n.useState)(!1),S=Object(i.a)(P,2),I=S[0],D=S[1],B=Object(n.useState)(!1),E=Object(i.a)(B,2),F=E[0],R=E[1],T=Object(p.f)(),L=Object(n.useContext)(m);return Object(O.jsxs)("div",{className:"signUp",children:[I&&Object(O.jsx)("div",{className:"logIn",children:Object(O.jsxs)(G.a,{className:"logOutBox",variant:"success",children:[Object(O.jsx)(G.a.Heading,{children:"Success!"}),Object(O.jsx)("p",{children:"Your account has been created!"}),Object(O.jsx)(A.a,{variant:"outline-success",onClick:function(){return T.push("/")},children:"Continue to Home Page"})]})}),F&&Object(O.jsx)("div",{className:"logIn",children:Object(O.jsxs)(G.a,{className:"logOutBox",variant:"danger",children:[Object(O.jsx)(G.a.Heading,{children:"Already Signed In"}),Object(O.jsx)("p",{children:"Please sign out of the current account before making a new one."}),Object(O.jsx)(A.a,{variant:"outline-danger",onClick:function(){return R(!1)},children:"Back"})]})}),Object(O.jsx)("div",{className:"signUpTitle",children:Object(O.jsx)("h2",{children:"Join Movie Ratings"})}),Object(O.jsxs)(W.a,{className:"signUpForm",children:[Object(O.jsxs)(W.a.Group,{controlId:"formBasicEmail",children:[Object(O.jsx)(W.a.Label,{children:"Email"}),Object(O.jsx)(W.a.Control,{type:"email",placeholder:"Email",onChange:function(e){return c(e.target.value)},value:a,isInvalid:""!==y.email}),Object(O.jsx)(W.a.Control.Feedback,{type:"invalid",children:y.email})]}),Object(O.jsxs)(W.a.Group,{controlId:"formBasicDisplay",children:[Object(O.jsx)(W.a.Label,{children:"Display Name"}),Object(O.jsx)(W.a.Control,{placeholder:"Display Name",onChange:function(e){e.target.value.length<=12&&N(e.target.value)},value:f,isInvalid:""!==y.displayName}),Object(O.jsx)(ue.a.Feedback,{type:"invalid",children:y.displayName})]}),Object(O.jsxs)(W.a.Group,{controlId:"formBasicPassword",children:[Object(O.jsx)(W.a.Label,{children:"Password"}),Object(O.jsx)(W.a.Control,{type:"password",placeholder:"Password",value:l,onChange:function(e){return o(e.target.value)},isInvalid:""!==y.password}),Object(O.jsx)(W.a.Control.Feedback,{type:"invalid",children:y.password})]}),Object(O.jsxs)(W.a.Group,{controlId:"formBasicConfirmPassword",children:[Object(O.jsx)(W.a.Label,{children:"Confirm Password"}),Object(O.jsx)(W.a.Control,{type:"password",placeholder:"Confirm Password",value:h,onChange:function(e){return x(e.target.value)},isInvalid:""!==y.confirmPassword}),Object(O.jsx)(W.a.Control.Feedback,{type:"invalid",children:y.confirmPassword})]}),Object(O.jsx)("div",{className:"logInButtons",children:Object(O.jsx)(A.a,{variant:"primary",id:"joinButton",onClick:function(){k({displayName:"",confirmPassword:"",email:"",password:""});var e=!1;f.length<=2?(k((function(e){return Object(je.a)(Object(je.a)({},e),{},{displayName:"Display Name must be at least 3 characters"})})),e=!0):/^[a-zA-Z]+$/g.test(f)||(k((function(e){return Object(je.a)(Object(je.a)({},e),{},{displayName:"Display Name can only be letters"})})),e=!0),h!==l&&(k((function(e){return Object(je.a)(Object(je.a)({},e),{},{confirmPassword:"Passwords do not match"})})),e=!0),e||(L?R(!0):b.createUserWithEmailAndPassword(a,l).then((function(e){e.user&&(e.user.updateProfile({displayName:f}).catch((function(e){return console.log(e.message)})),u.ref("/users").child("".concat(e.user.uid)).set({displayName:f}).then((function(){D(!0)})).catch((function(e){return console.log(e.message)})))})).catch((function(e){e.message.toLowerCase().includes("email")&&k((function(t){return Object(je.a)(Object(je.a)({},t),{},{email:e.message})})),e.message.toLowerCase().includes("password")&&k((function(t){return Object(je.a)(Object(je.a)({},t),{},{password:e.message})}))})))},children:"Join"})})]})]})},he=a(83),Oe=["children"],me=function(e){var t=e.children,a=Object(he.a)(e,Oe),c=Object(n.useContext)(m);return Object(O.jsx)(p.b,Object(je.a)(Object(je.a)({},a),{},{render:function(){return c?t:Object(O.jsx)(p.a,{to:"/"})}}))},xe=(a(75),function(e){var t=e.type,a=e.back,c=e.currentEmail,s=e.currentName,r=Object(n.useState)(!1),l=Object(i.a)(r,2),o=l[0],d=l[1],b=Object(n.useState)(""),h=Object(i.a)(b,2),x=h[0],v=h[1],f=Object(n.useState)(""),p=Object(i.a)(f,2),N=p[0],C=p[1],w=Object(n.useState)(""),y=Object(i.a)(w,2),k=y[0],P=y[1],S=Object(n.useState)(""),I=Object(i.a)(S,2),D=I[0],B=I[1],E=Object(n.useState)(""),F=Object(i.a)(E,2),R=F[0],T=F[1],L=Object(n.useState)(""),M=Object(i.a)(L,2),_=M[0],J=M[1],U=Object(n.useContext)(m),Y=Object(n.useContext)(g).userMovie,V=Object(n.useState)({displayName:"",confirmPassword:"",email:"",password:"",currentPassword:""}),$=Object(i.a)(V,2),Q=$[0],Z=$[1],K=function(e){e.preventDefault(),Z({displayName:"",confirmPassword:"",email:"",password:"",currentPassword:""});var a=j.a.auth.EmailAuthProvider.credential(c,k);switch(t){case"Email":U.reauthenticateWithCredential(a).then((function(e){var t;null===(t=e.user)||void 0===t||t.updateEmail(D).then((function(){d(!0)})).catch((function(e){Z((function(t){return Object(je.a)(Object(je.a)({},t),{},{email:e.message})}))}))})).catch((function(e){Z((function(t){return Object(je.a)(Object(je.a)({},t),{},{currentPassword:e.message})}))}));break;case"Name":if(R.length<3)Z((function(e){return Object(je.a)(Object(je.a)({},e),{},{displayName:"Name must be at least 3 characters."})}));else if(/^[a-zA-Z]+$/g.test(R)){var n={};n["users/".concat(U.uid,"/displayName")]=R,Y.forEach((function(e){n["movies/".concat(e.name,"/ratings/").concat(U.uid,"/displayName")]=R})),u.ref().update(n).then((function(){U.updateProfile({displayName:R}).then((function(){d(!0)})).catch((function(e){Z((function(t){return Object(je.a)(Object(je.a)({},t),{},{displayName:e.message})}))}))})).catch((function(e){return Z((function(t){return Object(je.a)(Object(je.a)({},t),{},{displayName:e.message})}))}))}else Z((function(e){return Object(je.a)(Object(je.a)({},e),{},{displayName:"Name can only contain letters."})}));break;case"Password":x!==N?Z((function(e){return Object(je.a)(Object(je.a)({},e),{},{confirmPassword:"Passwords do not match"})})):U.reauthenticateWithCredential(a).then((function(e){var t;null===(t=e.user)||void 0===t||t.updatePassword(x).then((function(){d(!0)})).catch((function(e){Z((function(t){return Object(je.a)(Object(je.a)({},t),{},{password:e.message})}))}))})).catch((function(e){Z((function(t){return Object(je.a)(Object(je.a)({},t),{},{currentPassword:e.message})}))}));break;case"Delete":U.reauthenticateWithCredential(a).then((function(e){if(e.user){var t=e.user,a={};Y.forEach((function(e){a["movies/".concat(e.name,"/ratings/").concat(t.uid)]=null})),a["users/".concat(t.uid)]=null,u.ref().update(a).then((function(){t.delete().then((function(){d(!0)})).catch((function(e){Z((function(t){return Object(je.a)(Object(je.a)({},t),{},{currentPassword:e.message})}))}))})).catch((function(e){Z((function(t){return Object(je.a)(Object(je.a)({},t),{},{currentPassword:e.message})}))}))}})).catch((function(e){Z((function(t){return Object(je.a)(Object(je.a)({},t),{},{currentPassword:e.message})}))}))}};return o?Object(O.jsx)("div",{className:"logIn",children:Object(O.jsxs)(G.a,{className:"logOutBox",variant:"success",children:[Object(O.jsx)(G.a.Heading,{children:"Success!"}),Object(O.jsxs)("p",{children:["Your ",t," has been changed."]}),Object(O.jsx)(A.a,{variant:"outline-success",onClick:a,children:"Close"})]})}):Object(O.jsx)("div",{className:"logIn",children:Object(O.jsxs)("div",{className:"logInBox",children:[Object(O.jsxs)("div",{className:"logInTitle",children:["Delete"!==t&&Object(O.jsxs)("h2",{children:["Change ",t]}),"Delete"===t&&Object(O.jsx)("h2",{children:"Delete Account"})]}),Object(O.jsxs)(W.a,{className:"form",children:["Email"===t&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)(W.a.Group,{as:H.a,controlId:"formBasicEmail",children:[Object(O.jsx)(W.a.Label,{column:!0,children:"Current Email:"}),Object(O.jsx)(z.a,{children:Object(O.jsx)(W.a.Control,{className:"plainText",plaintext:!0,readOnly:!0,defaultValue:c})})]}),Object(O.jsxs)(W.a.Group,{controlId:"newEmailForm",children:[Object(O.jsx)(W.a.Label,{children:"New Email"}),Object(O.jsx)(W.a.Control,{type:"email",placeholder:"Enter New Email",onChange:function(e){return B(e.target.value)},value:D,isInvalid:""!==Q.email}),Object(O.jsx)(W.a.Control.Feedback,{type:"invalid",children:Q.email})]}),Object(O.jsxs)(W.a.Group,{controlId:"formBasicCurrentPassword",children:[Object(O.jsx)(W.a.Label,{children:"Current Password"}),Object(O.jsx)(W.a.Control,{type:"password",placeholder:"Current Password",value:k,onChange:function(e){return P(e.target.value)},isInvalid:""!==Q.currentPassword}),Object(O.jsx)(W.a.Control.Feedback,{type:"invalid",children:Q.currentPassword})]})]}),"Name"===t&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)(W.a.Group,{as:H.a,controlId:"formBasicName",children:[Object(O.jsx)(W.a.Label,{column:!0,children:"Current Name:"}),Object(O.jsx)(z.a,{children:Object(O.jsx)(W.a.Control,{className:"plainText",plaintext:!0,readOnly:!0,defaultValue:s})})]}),Object(O.jsxs)(W.a.Group,{controlId:"newNameForm",children:[Object(O.jsx)(W.a.Label,{children:"New Name"}),Object(O.jsx)(W.a.Control,{type:"text",placeholder:"Enter New Name",onChange:function(e){e.target.value.length<=12&&T(e.target.value)},value:R,isInvalid:""!==Q.displayName}),Object(O.jsx)(W.a.Control.Feedback,{type:"invalid",children:Q.displayName})]})]}),"Password"===t&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)(W.a.Group,{controlId:"formBasicCurrentPassword",children:[Object(O.jsx)(W.a.Label,{children:"Current Password"}),Object(O.jsx)(W.a.Control,{type:"password",placeholder:"Current Password",value:k,onChange:function(e){return P(e.target.value)},isInvalid:""!==Q.currentPassword}),Object(O.jsx)(W.a.Control.Feedback,{type:"invalid",children:Q.currentPassword})]}),Object(O.jsxs)(W.a.Group,{controlId:"formBasicNewPassword",children:[Object(O.jsx)(W.a.Label,{children:"New Password"}),Object(O.jsx)(W.a.Control,{type:"password",placeholder:"New Password",value:x,onChange:function(e){return v(e.target.value)},isInvalid:""!==Q.password}),Object(O.jsx)(W.a.Control.Feedback,{type:"invalid",children:Q.password})]}),Object(O.jsxs)(W.a.Group,{controlId:"formBasicConfirmPassword",children:[Object(O.jsx)(W.a.Label,{children:"Confirm New Password"}),Object(O.jsx)(W.a.Control,{type:"password",placeholder:"Confirm New Password",value:N,onChange:function(e){return C(e.target.value)},isInvalid:""!==Q.confirmPassword}),Object(O.jsx)(W.a.Control.Feedback,{type:"invalid",children:Q.confirmPassword})]})]}),"Delete"===t&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(W.a.Text,{className:"warning",children:"Warning: This action will permanently delete your account!"}),Object(O.jsxs)(W.a.Group,{controlId:"formBasicCurrentPassword",children:[Object(O.jsx)(W.a.Label,{children:"Current Password"}),Object(O.jsx)(W.a.Control,{type:"password",placeholder:"Current Password",value:k,onChange:function(e){return P(e.target.value)},isInvalid:""!==Q.currentPassword}),Object(O.jsx)(W.a.Control.Feedback,{type:"invalid",children:Q.currentPassword})]}),Object(O.jsxs)(W.a.Group,{controlId:"delete",children:[Object(O.jsx)(W.a.Label,{children:"Enter 'DELETE' to delete your account."}),Object(O.jsx)(W.a.Control,{type:"text",placeholder:"enter DELETE",onChange:function(e){return J(e.target.value)},value:_})]})]}),Object(O.jsxs)("div",{className:"logInButtons","data-testid":"buttons",children:["Delete"!==t&&Object(O.jsx)(A.a,{variant:"primary",type:"submit",id:"submitButton",onClick:K,children:"Submit"}),"Delete"===t&&Object(O.jsx)(A.a,{variant:"warning",id:"deleteButton",onClick:K,disabled:"DELETE"!==_,children:"Delete Account"}),Object(O.jsx)(A.a,{variant:"danger",id:"backButton",onClick:a,children:"Back"})]})]})]})})}),ge=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],c=t[1],s=Object(n.useContext)(m),r=Object(R.useMediaQuery)({maxWidth:700}),l=Object(n.useContext)(g).userMovie,o=l.length?l.reduce((function(e,t){return e.score>t.score?e:t})):null,d=l.length?l.reduce((function(e,t){return e.score<t.score?e:t})):null;return Object(O.jsxs)("div",{className:"profile",children:[a&&Object(O.jsx)(xe,{type:a,currentEmail:s.email,currentName:s.displayName,back:function(){return c(null)}}),Object(O.jsxs)("div",{className:"settings",children:[Object(O.jsx)("div",{className:"settingsTitle",children:"Account Settings"}),Object(O.jsx)("div",{className:"settingsBody",children:Object(O.jsx)("div",{className:"settingsInfo",children:Object(O.jsx)("table",{className:"infoTable",children:Object(O.jsxs)("tbody",{children:[Object(O.jsxs)("tr",{"data-testid":"email",children:[Object(O.jsx)("td",{children:"Email"}),Object(O.jsx)("td",{children:s.email}),Object(O.jsx)("td",{className:"change",onClick:function(){return c("Email")},children:"Change"})]}),Object(O.jsxs)("tr",{"data-testid":"name",children:[Object(O.jsx)("td",{children:"Display Name"}),Object(O.jsx)("td",{children:s.displayName}),Object(O.jsx)("td",{className:"change",onClick:function(){return c("Name")},children:"Change"})]}),Object(O.jsxs)("tr",{"data-testid":"password",children:[Object(O.jsx)("td",{children:"Password"}),Object(O.jsx)("td",{children:"N/A"}),Object(O.jsx)("td",{className:"change",onClick:function(){return c("Password")},children:"Change"})]})]})})})})]}),Object(O.jsxs)("div",{className:"settings",children:[Object(O.jsx)("div",{className:"settingsTitle",children:"My Ratings"}),Object(O.jsxs)("div",{className:"setttingsBody",children:[Object(O.jsx)("table",{className:"ratingInfo",children:Object(O.jsxs)("tbody",{children:[Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:"Movies Watched:"}),Object(O.jsx)("td",{children:l.length})]}),Object(O.jsxs)("tr",{"data-testid":"avg",children:[Object(O.jsx)("td",{children:"Average Rating:"}),Object(O.jsx)("td",{children:l.length?"".concat(B(l),"/10"):"N/A"})]}),Object(O.jsxs)("tr",{"data-testid":"highest",children:[Object(O.jsx)("td",{children:"Highest Rated:"}),Object(O.jsx)("td",{children:o?"".concat(o.name," (").concat(o.score,"/10)"):"N/A"})]}),Object(O.jsxs)("tr",{"data-testid":"lowest",children:[Object(O.jsx)("td",{children:"Lowest Rated:"}),Object(O.jsx)("td",{children:d?"".concat(d.name," (").concat(d.score,"/10)"):"N/A"})]})]})}),!!l.length&&Object(O.jsx)(_,{movie:!0,ratings:l,isMobile:r,title:""})]})]}),Object(O.jsx)("div",{className:"delete",children:Object(O.jsx)(A.a,{variant:"danger",onClick:function(){return c("Delete")},children:"Delete Account"})})]})},ve=function(){var e=Object(n.useContext)(g).movie,t=Object(n.useContext)(g).viewer,a=Object(n.useState)(!1),c=Object(i.a)(a,2),s=c[0],r=c[1],l=Object(n.useState)(!1),o=Object(i.a)(l,2),d=o[0],j=o[1];return Object(O.jsxs)("div",{style:{position:"relative"},children:[Object(O.jsxs)(f.a,{children:[s&&Object(O.jsx)(de,{type:"in",back:function(){return r(!1)}}),d&&Object(O.jsx)(de,{type:"out",back:function(){return j(!1)}}),Object(O.jsx)(oe,{}),Object(O.jsx)(Q,{signOut:function(){b.signOut().then((function(){j(!0)})).catch((function(e){console.log(e.message)}))},signIn:function(){return r(!0)}}),Object(O.jsxs)("div",{className:"appBody",children:[Object(O.jsx)(p.b,{exact:!0,path:"/",children:Object(O.jsx)(ae,{})}),Object(O.jsx)(p.b,{path:"/join",children:Object(O.jsx)(be,{})}),Object(O.jsx)(me,{path:"/profile",children:Object(O.jsx)(ge,{})}),e.map((function(e,t){return Object(O.jsx)(p.b,{path:"/movies/".concat(e.title.replace(/ /g,"-")),children:Object(O.jsx)(U,{title:e.title,ratings:e.ratings,id:e.id,date:e.date,cage:e.cage})},t)})),Object(O.jsx)(p.b,{exact:!0,path:"/viewers",children:Object(O.jsx)(se,{})}),t.map((function(e,t){return Object(O.jsx)(p.b,{path:"/viewers/".concat(e.id),children:Object(O.jsx)(re,{name:e.name,ratings:e.ratings})},t)}))]})]}),Object(O.jsx)(le,{})]})},fe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,136)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};r.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(x,{children:Object(O.jsx)(v,{children:Object(O.jsx)(ve,{})})})}),document.getElementById("root")),fe()},42:function(e,t,a){},69:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},88:function(e,t,a){},96:function(e,t,a){}},[[123,1,2]]]);
//# sourceMappingURL=main.f8ee7110.chunk.js.map