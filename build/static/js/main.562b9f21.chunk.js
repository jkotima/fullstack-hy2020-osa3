(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},36:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(13),u=t.n(c),o=t(2),l=function(e){return r.a.createElement("div",null,"filter shown with:",r.a.createElement("input",{value:e.value,onChange:e.onChange}))},i=function(e){return r.a.createElement("form",{onSubmit:e.addPerson},r.a.createElement("div",null,"name:",r.a.createElement("input",{value:e.newName,onChange:e.handleNameChange}),r.a.createElement("br",null),"number:",r.a.createElement("input",{value:e.newNumber,onChange:e.handleNumberChange})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},m=function(e){var n=e.person,t=e.deletePerson;return r.a.createElement("p",null,n.name," ",n.number," ",r.a.createElement("button",{onClick:t},"delete"))},d=function(e){var n=e.persons,t=e.deletePerson;return r.a.createElement("div",null,n.map((function(e){return r.a.createElement(m,{key:e.name,person:e,deletePerson:function(){return t(e.id)}})})))},f=t(3),s=t.n(f),h="/api/persons",p=function(){return s.a.get(h).then((function(e){return e.data}))},b=function(e){return s.a.post(h,e).then((function(e){return e.data}))},v=function(e){return s.a.delete("".concat(h,"/").concat(e)).then((function(e){return e.data}))},E=function(e,n){return s.a.put("".concat(h,"/").concat(e),n).then((function(e){return e.data}))},g=function(e){var n=e.notification;return null===n?null:n.error?r.a.createElement("div",{className:"error"},n.message):r.a.createElement("div",{className:"notification"},n.message)},w=function(){var e=Object(a.useState)([]),n=Object(o.a)(e,2),t=n[0],c=n[1],u=Object(a.useState)(""),m=Object(o.a)(u,2),f=m[0],s=m[1],h=Object(a.useState)(""),w=Object(o.a)(h,2),C=w[0],j=w[1],N=Object(a.useState)(""),O=Object(o.a)(N,2),P=O[0],k=O[1],S=Object(a.useState)(null),y=Object(o.a)(S,2),D=y[0],U=y[1];Object(a.useEffect)((function(){p().then((function(e){c(e)}))}),[]);var A=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];U({message:e,error:n}),setTimeout((function(){U(null)}),5e3)},I=t.filter((function(e){return e.name.toUpperCase().includes(P.toUpperCase())}));return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(g,{notification:D}),r.a.createElement(l,{value:P,onChange:function(e){k(e.target.value)}}),r.a.createElement("h2",null,"Add a new"),r.a.createElement(i,{addPerson:function(e){e.preventDefault();var n={name:f,number:C};if(t.map((function(e){return e.name})).includes(f)){if(!window.confirm("".concat(f," is already added to phonebook, ")+"replace old number with a new one?"))return;var a=t.find((function(e){return e.name===f})).id;E(a,n).then((function(e){c(t.map((function(n){return n.id!==a?n:e}))),A("Updated ".concat(n.name))})).catch((function(e){A("Information of ".concat(n.name," ")+"has already been removed from server",!0)}))}else b(n).then((function(e){c(t.concat(e)),s(""),j(""),A("Added ".concat(n.name))})).catch((function(e){A(e.response.data.error,e=!0)}))},newName:f,newNumber:C,handleNameChange:function(e){s(e.target.value)},handleNumberChange:function(e){j(e.target.value)}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(d,{persons:I,deletePerson:function(e){var n=t.find((function(n){return n.id===e}));window.confirm("Delete ".concat(n.name,"?"))&&(v(e).then((function(n){c(t.filter((function(n){return n.id!==e})))})).catch((function(e){alert("Person ".concat(n.name," could not be deleted"))})),A("Deleted ".concat(n.name)))}}))};t(36);u.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.562b9f21.chunk.js.map