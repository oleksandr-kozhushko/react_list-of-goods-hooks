(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(7),o=n.n(c),r=n(4),i=n(5),s=n(1),u=(n(12),n(0)),a=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],l=function(){var t=Object(s.useState)([].concat(a)),e=Object(i.a)(t,2),n=e[0],c=e[1],o=Object(s.useState)(!1),l=Object(i.a)(o,2),b=l[0],j=l[1],d=Object(s.useState)(1),h=Object(i.a)(d,2),O=h[0],f=h[1],p=n.filter((function(t){return t.length>=O}));return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Goods"}),Object(u.jsx)("button",{type:"button",onClick:function(){j((function(t){return!t}))},children:b?"Hide goods":"Start"}),b&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("button",{type:"button",onClick:function(){c(Object(r.a)(n.reverse()))},children:"Reverse"}),Object(u.jsx)("button",{type:"button",onClick:function(){c(Object(r.a)(n.sort((function(t,e){return t.localeCompare(e)}))))},children:"Sort alphabetically"}),Object(u.jsx)("button",{type:"button",onClick:function(){c([].concat(a)),f(1)},children:"Reset"}),Object(u.jsx)("button",{type:"button",onClick:function(){c(Object(r.a)(n.sort((function(t,e){return t.length-e.length}))))},children:"Sort by length"}),Object(u.jsx)("select",{name:"select",id:"select",value:O,onChange:function(t){return e=t.target.value,void f(+e);var e},children:n.map((function(t){return Object(u.jsx)("option",{value:"".concat(n.indexOf(t)+1),children:n.indexOf(t)+1})}))}),p.map((function(t){return Object(u.jsx)("li",{children:t},t)}))]})]})};o.a.render(Object(u.jsx)(l,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.79591c03.chunk.js.map