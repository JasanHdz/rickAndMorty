(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),o=a.n(c),l=a(7),s=a(2),i=a.n(s),u=a(1),m=a(5),d=(a(15),a(6)),p=a.n(d),g=function(e){var t=e.character;return r.a.createElement("div",{className:"CharacterCard",style:{backgroundImage:"url(".concat(t.image,")")}},r.a.createElement("div",{className:"CharacterCard__name-container text-truncate"},t.name))},f=function(){var e=Object(m.a)(i.a.mark(function e(t,a){var n,r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(Object(u.a)({},a,{loading:!0})),"https://rickandmortyapi.com",e.prev=2,e.next=5,fetch("".concat("https://rickandmortyapi.com","/api/character"),{mode:"cors",method:"GET",headers:{"Content-Type":"application/json"}});case 5:return n=e.sent,e.next=8,n.json();case 8:r=e.sent,t(Object(u.a)({},a,{loading:!1,data:{info:r.info,results:[].concat(a.data.results,r.results)},nextPages:a.nextPages+1})),console.log(a.data),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),t(Object(u.a)({},a,{loading:!1,error:e.t0}));case 16:case"end":return e.stop()}},e,null,[[2,13]])}));return function(t,a){return e.apply(this,arguments)}}(),E=function(){var e=Object(n.useState)({data:{results:[]},loading:!1,error:null,nextPages:2}),t=Object(l.a)(e,2),a=t[0],c=t[1];return function(e,t){Object(n.useEffect)(function(){return console.log("ComponentDidMount"),f(e,t),function(){console.log("CompontedWillMount"),new AbortController.abort}},[])}(c,a),a.error?r.a.createElement("div",null,r.a.createElement("h1",null,a.error.message)):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"App"},r.a.createElement("img",{className:"Logo",src:p.a,alt:"Rick y Morty"}),r.a.createElement("ul",{className:"row"},a.data.results.map(function(e){return r.a.createElement("li",{className:"col-6 col-md-3",key:e.id},r.a.createElement(g,{character:e}))})),a.loading&&r.a.createElement("p",null,"Cargando...."),!a.loading&&r.a.createElement("button",{onClick:function(){return f(c,a)}},"Load More")))},b=document.getElementById("root");o.a.render(r.a.createElement(E,null),b)},6:function(e,t,a){e.exports=a.p+"static/media/logo.de82c64b.png"},8:function(e,t,a){e.exports=a(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.62e70216.chunk.js.map