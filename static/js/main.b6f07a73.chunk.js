(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c,o=n(7),r=n.n(o),a=n(6),s=n(8),i=n(1),l=n(4),b=n.n(l),u=(n(13),n(14),n(0)),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t.noSort="",t.byLength="byLength",t.alphabetically="alphabetically"}(c||(c={}));var j=function(){var t=Object(i.useState)(c.noSort),e=Object(a.a)(t,2),n=e[0],o=e[1],r=Object(i.useState)(!1),l=Object(a.a)(r,2),j=l[0],d=l[1],p=function(t,e,n){var o=Object(s.a)(t);switch(e){case c.noSort:break;case c.byLength:o.sort((function(t,e){return t.length-e.length}));break;case c.alphabetically:o.sort((function(t,e){return t.localeCompare(e)}));break;default:throw Error("Unexpected SortType value")}return n&&o.reverse(),o}(h,n,j),g=n||j;return Object(u.jsxs)("div",{className:"section content",children:[Object(u.jsxs)("div",{className:"buttons",children:[Object(u.jsx)("button",{type:"button",className:b()("button is-info",{"is-light":n!==c.alphabetically}),onClick:function(){return o(c.alphabetically)},children:"Sort alphabetically"}),Object(u.jsx)("button",{type:"button",className:b()("button is-success",{"is-light":n!==c.byLength}),onClick:function(){return o(c.byLength)},children:"Sort by length"}),Object(u.jsx)("button",{type:"button",className:b()("button is-warning",{"is-light":!j}),onClick:function(){return d(!j)},children:"Reverse"}),g&&Object(u.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){return o(c.noSort),void d(!1)},children:"Reset"})]}),Object(u.jsx)("ul",{children:Object(u.jsx)("ul",{children:p.map((function(t){return Object(u.jsx)("li",{"data-cy":"Good",children:t},t)}))})})]})};r.a.render(Object(u.jsx)(j,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.b6f07a73.chunk.js.map