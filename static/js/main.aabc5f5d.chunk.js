(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],{10:function(e,t,a){e.exports=a(15)},15:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(8),o=a.n(l),c=a(9),r=a(6),u=a(2),h=a(3),d=a(1),s=a(5),m=a(4);var p=function(e){return i.a.createElement("div",{className:"todo-item"},i.a.createElement("input",{type:"checkbox",checked:e.item.completed,onChange:function(){return e.handleChange(e.item.id)}}),i.a.createElement("p",{style:e.item.completed?{fontStyle:"italic",color:"#cdcdcd",textDecoration:"line-through"}:null},e.item.text))},b=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("form",{onSubmit:this.props.handleSubmit},i.a.createElement("input",{type:"text",placeholder:"Add new item",value:this.props.value,onChange:function(t){return e.props.handleValueChange(t)}}),i.a.createElement("input",{type:"submit",value:"Enter"}))}}]),a}(i.a.Component),f=[],v=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).handleChange=n.handleChange.bind(Object(d.a)(n)),n.handleValueChange=n.handleValueChange.bind(Object(d.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(d.a)(n)),n.state={id:1,text:"",todos:f},n}return Object(h.a)(a,[{key:"handleChange",value:function(e){this.setState((function(t){return{todos:t.todos.map((function(t){return t.id===e?Object(r.a)(Object(r.a)({},t),{},{completed:!t.completed}):t}))}}))}},{key:"handleValueChange",value:function(e){this.setState({text:e.target.value})}},{key:"handleSubmit",value:function(e){this.setState((function(e){return{id:e.id+1}}));var t=Object(c.a)(this.state.todos),a={id:this.state.id,text:this.state.text,completed:!1};t.push(a),this.setState({todos:t}),e.preventDefault()}},{key:"render",value:function(){var e=this,t=this.state.todos.map((function(t){return i.a.createElement(p,{key:t.id,item:t,handleChange:e.handleChange})}));return i.a.createElement("div",{className:"todo-list"},i.a.createElement("h1",null,"To-do List"),i.a.createElement(b,{value:this.state.text,handleValueChange:this.handleValueChange,handleSubmit:this.handleSubmit}),t)}}]),a}(i.a.Component);o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(v,null)),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.aabc5f5d.chunk.js.map