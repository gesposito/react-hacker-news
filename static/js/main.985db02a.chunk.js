(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){e.exports=n(24)},24:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(10),c=n.n(o),i=n(5),l=n(9),u=r.a.lazy(function(){return n.e(4).then(n.bind(null,29))}),s=r.a.lazy(function(){return n.e(3).then(n.bind(null,28))});var d=function(){return r.a.createElement(l.b,null,r.a.createElement(a.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement(i.b,null,r.a.createElement(u,{path:"/"}),r.a.createElement(u,{path:"/user/:userId"}),r.a.createElement(s,{path:"/item/:itemId"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var a=n(4),r=n(2),o=n(3),c=n(0),i=n.n(c),l=i.a.createContext();function u(e,t){switch(t.type){case"READ":return Object(o.a)({},e,{favorites:[].concat(Object(r.a)(e.favorites),[t.payload])});case"UNREAD":var n=e.favorites.indexOf(t.payload);return-1===n?e:Object(o.a)({},e,{favorites:[].concat(Object(r.a)(e.favorites.slice(0,n)),Object(r.a)(e.favorites.slice(n+1)))});default:return e}}t.b=function(e){var t=Object(c.useReducer)(u,{favorites:[]}),n=Object(a.a)(t,2),r=n[0],o=n[1];return i.a.createElement(l.Provider,{value:{store:r,dispatch:o}},e.children)}}},[[12,1,2]]]);
//# sourceMappingURL=main.985db02a.chunk.js.map