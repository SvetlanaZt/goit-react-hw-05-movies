"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[107],{600:function(e,t,n){n.d(t,{Dg:function(){return h},X4:function(){return u},xb:function(){return f},y:function(){return i}});var r=n(861),a=n(757),c=n.n(a);function u(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"a42a61c067e66eee5834012056e5662a",e.next=3,fetch("https://api.themoviedb.org/3/trending/all/day?api_key=".concat("a42a61c067e66eee5834012056e5662a")).then((function(e){if(!e.ok)throw new Error("\u041d\u0435 \u043f\u0440\u0438\u0448\u043b\u0438 \u0434\u0430\u043d\u043d\u044b\u0435");return e.json()}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function i(e){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"a42a61c067e66eee5834012056e5662a",e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat("a42a61c067e66eee5834012056e5662a")).then((function(e){if(!e.ok)throw new Error("\u041d\u0435 \u043f\u0440\u0438\u0448\u043b\u0438 \u0434\u0430\u043d\u043d\u044b\u0435");return e.json()}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"a42a61c067e66eee5834012056e5662a",e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat("a42a61c067e66eee5834012056e5662a")).then((function(e){if(!e.ok)throw new Error("\u041d\u0435 \u043f\u0440\u0438\u0448\u043b\u0438 \u0434\u0430\u043d\u043d\u044b\u0435");return e.json()}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"a42a61c067e66eee5834012056e5662a",e.next=3,fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat("a42a61c067e66eee5834012056e5662a","&query=").concat(t)).then((function(e){if(!e.ok)throw new Error("\u041d\u0435 \u043f\u0440\u0438\u0448\u043b\u0438 \u0434\u0430\u043d\u043d\u044b\u0435");return e.json()}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},107:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var r=n(885),a=n(600),c=n(791),u=n(871),o=n(501),i=n(184);function s(){var e=(0,c.useState)(""),t=(0,r.Z)(e,2),n=t[0],s=t[1],f=(0,u.TH)();return(0,c.useEffect)((function(){(0,a.X4)().then((function(e){return s(e.results)}))}),[]),(0,i.jsxs)("main",{children:[(0,i.jsx)("h1",{children:"Trending today"}),(0,i.jsx)("ul",{children:n&&n.map((function(e){return(0,i.jsx)("li",{children:(0,i.jsx)(o.rU,{to:"movies/".concat(e.id),state:{from:f},children:e.title||e.name})},e.id)}))})]})}}}]);
//# sourceMappingURL=107.2b567186.chunk.js.map