(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){e.exports=a(22)},,,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(10),i=a.n(c),o=(a(18),a(3)),s=a(4),l=a(7),u=a(5),d=a(6),h=(a(19),a(20),a(2)),f=(a(21),a(11)),p=a(0),m=a(8),b=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).data=[1,2,3,4],e.size=[500,500],e.createBarChart=e.createBarChart.bind(Object(h.a)(Object(h.a)(e))),e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.createBarChart()}},{key:"componentDidUpdate",value:function(){this.createBarChart()}},{key:"createBarChart",value:function(){var e=this,t=this.node,a=Object(p.d)(this.data),n=Object(f.a)().domain([0,a]).range([0,this.size[1]]);Object(m.a)(t).selectAll("rect").data(this.data).enter().append("rect"),Object(m.a)(t).selectAll("rect").data(this.data).exit().remove(),Object(m.a)(t).selectAll("rect").data(this.data).style("fill","#fe9922").attr("x",function(e,t){return 25*t}).attr("y",function(t){return e.size[1]-n(t)}).attr("height",function(e){return n(e)}).attr("width",25)}},{key:"render",value:function(){var e=this;return r.a.createElement("svg",{ref:function(t){return e.node=t},width:500,height:500})}}]),t}(n.Component),j=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("p",null,"Lily Burtness")),r.a.createElement("body",{className:"App-body"},r.a.createElement(b,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[12,1,2]]]);
//# sourceMappingURL=main.7587a4dc.chunk.js.map