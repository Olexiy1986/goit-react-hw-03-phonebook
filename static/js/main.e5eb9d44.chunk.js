(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{12:function(e,t,n){e.exports={addButton:"ContactForm_addButton__1RM3q"}},13:function(e,t,n){e.exports={filter:"Filter_filter__X7cNc"}},14:function(e,t,n){e.exports={container:"App_container__zi--l"}},16:function(e,t,n){e.exports=n(24)},24:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(1),c=n.n(o),l=n(15),s=n(2),i=n(3),u=n(5),m=n(4),h=n(11),p=n(12),f=n.n(p),d=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.hendleSubmit=function(t){t.preventDefault(),e.props.onAdd(e.state),e.setState({name:"",number:""})},e.hendleInputChange=function(t){var n=t.target;console.log(n);var a=n.name,r=n.value;e.setState(Object(h.a)({},a,r))},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return r.a.createElement("form",{onSubmit:this.hendleSubmit},r.a.createElement("h3",null,"Name"),r.a.createElement("input",{type:"text",name:"name",value:t,onChange:this.hendleInputChange}),r.a.createElement("h3",null,"Number"),r.a.createElement("input",{type:"text",name:"number",value:n,onChange:this.hendleInputChange}),r.a.createElement("button",{className:f.a.addButton,type:"submit"},"Add contact"))}}]),n}(a.Component),v=n(7),b=n.n(v),g=function(e){var t=e.contacts,n=e.onRemove;return r.a.createElement("ul",null,t.map((function(e){var t=e.id,a=e.name,o=e.number;return r.a.createElement("li",{key:t},r.a.createElement("span",{className:b.a.name},a,":"),r.a.createElement("span",{className:b.a.number},o),r.a.createElement("button",{className:b.a.removeButton,onClick:function(){return n(t)}},"Delete"))})))},C=n(13),O=n.n(C),E=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={filter:""},e.handleFilterChange=function(t){t.preventDefault(),e.setState({filter:t.target.value},(function(){return e.props.onFilterChange(e.state)}))},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state.value;return r.a.createElement("div",{className:O.a.filter},r.a.createElement("h3",null,"Find contacts by name"),r.a.createElement("input",{type:"text",name:"filter",value:e,onChange:this.handleFilterChange}))}}]),n}(a.Component),y=n(14),_=n.n(y),j=n(28),k=n(8),S=(n(21),function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[],filter:""},e.handleAddContact=function(t){var n=t.name,a=t.number,r=e.state.contacts;r.some((function(e){return e.name===n}))?k.b.warn("".concat(n," is already in contacts"),{position:"top-left",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}):r.some((function(e){return e.name!==n||e.name!==a}))?k.b.warn("Please enter the correct name and number",{position:"top-left",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}):e.setState((function(e){var t=e.contacts;return{contacts:[].concat(Object(l.a)(t),[{id:Object(j.a)(),name:n,number:a}])}}))},e.handleFilterChange=function(t){var n=t.filter;e.setState({filter:n})},e.filterContacts=function(){var t=e.state,n=t.contacts,a=t.filter;return a?n.filter((function(e){return e.name.includes(a)})):n},e.handleRemoveContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("contacts");null!==e&&this.setState({contacts:JSON.parse(e)})}},{key:"componentDidUpdate",value:function(e,t){t.contacts!==this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var e=this.state.contacts;return r.a.createElement("div",{className:_.a.container},r.a.createElement("h1",null,"Phonebook"),r.a.createElement(d,{onAdd:this.handleAddContact}),r.a.createElement("h2",null,"Contacts"),e.length>=2&&r.a.createElement(E,{onFilterChange:this.handleFilterChange}),r.a.createElement(g,{contacts:this.filterContacts(),onRemove:this.handleRemoveContact}),r.a.createElement(k.a,{position:"top-center",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}))}}]),n}(a.Component));c.a.render(r.a.createElement(S,null),document.getElementById("root"))},7:function(e,t,n){e.exports={name:"ContactList_name__3Qyqj",number:"ContactList_number__2pIjB",removeButton:"ContactList_removeButton__1RnX5"}}},[[16,1,2]]]);
//# sourceMappingURL=main.e5eb9d44.chunk.js.map