webpackJsonp([1],{NHnr:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("7+uW"),i={name:"App",data:function(){return{date:(new Date).getFullYear()}}},n={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[t._m(0),t._v(" "),e("div",{attrs:{id:"app"}},[e("aside",[e("div",{staticClass:"aside-links"},[e("router-link",{staticClass:"tooltip",attrs:{to:"/"}},[e("i",{staticClass:"fa fa-home"}),t._v(" "),e("span",{staticClass:"tooltiptext"},[t._v("Home")])]),t._v(" "),e("router-link",{staticClass:"tooltip",attrs:{to:"/contact-me"}},[e("i",{staticClass:"fa fa-envelope"}),t._v(" "),e("span",{staticClass:"tooltiptext"},[t._v("Contact me")])]),t._v(" "),e("router-link",{staticClass:"tooltip",attrs:{to:"/portfolio"}},[e("i",{staticClass:"fa fa-briefcase"}),t._v(" "),e("span",{staticClass:"tooltiptext"},[t._v("Portfolio")])])],1)]),t._v(" "),e("section",{staticClass:"content"},[e("div",{staticClass:"main-body"},[e("router-view")],1),t._v(" "),e("div",{staticClass:"footer"},[e("span",[t._v(t._s(t.date)+" "),e("sup",[t._v("©")])]),t._v(" "),t._m(1)])])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("nav",[a("span",{staticClass:"red-ellipse"}),this._v(" "),a("span",{staticClass:"orange-ellipse"}),this._v(" "),a("span",{staticClass:"green-ellipse"})])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"social"},[a("span",[a("a",{attrs:{href:"/"}},[a("i",{staticClass:"fa fa-twitter"})])]),this._v(" "),a("span",[a("a",{attrs:{href:"/"}},[a("i",{staticClass:"fa fa-github"})])]),this._v(" "),a("span",[a("a",{attrs:{href:"/"}},[a("i",{staticClass:"fa fa-medium"})])]),this._v(" "),a("span",[a("a",{attrs:{href:"/"}},[a("i",{staticClass:"fa fa-linkedin"})])])])}]};var o=e("VU/8")(i,n,!1,function(t){e("Xh4D")},"data-v-c16e2344",null).exports,r=e("/ocq"),c={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"card-container"},[a("div",{staticClass:"card-image"},[a("img",{attrs:{src:e("xRWS"),alt:""}})]),this._v(" "),a("div",{staticClass:"card-text"},[a("h3",[this._v("Something light")]),this._v(" "),a("p",[this._v("Something really light...")])])])}]};var l={components:{Card:e("VU/8")({},c,!1,function(t){e("gwEf")},"data-v-4ebaafbc",null).exports},data:function(){return{msg:""}}},m={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("transition",{attrs:{name:"fade"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"info"},[e("h2",{staticClass:"header"},[t._v("My Portfolio")]),t._v(" "),e("p",[t._v("My Resume will be available on demand.")]),t._v(" "),e("p",[t._v("You can also find my works on "),e("a",{attrs:{href:"https://www.github.com/chuks-o",target:"_blank"}},[t._v("Github ")]),t._v("("),e("i",{staticClass:"fa fa-github"}),t._v(")")]),t._v(" "),e("p",[t._v("My newbie designs are available on "),e("a",{attrs:{href:"https://www.figma.com",target:"_blank"}},[t._v("Figma ")]),t._v("\n         "),e("i",{staticClass:"fa fa-warning"}),t._v(" CAUTION: If you love your eyes and sanity, you should deeply consider skipping this. Thanks!\n      ")])])])])},staticRenderFns:[]};var v=e("VU/8")(l,m,!1,function(t){e("aASo")},"data-v-e18da8f2",null).exports,d=e("njrj"),u=e.n(d),f={mounted:function(){this.animateMsg()},methods:{animateMsg:function(){var t=this.$refs.header;new u.a(t,{strings:["<h2>Hi, I am Chuks and I'm a <a href='/google-cert' target='_blank'> Full-Stack </a>Web developer.</h2><span style='color:white; font-weight:bold';>(Okpala Chukwualasu) <img src='http://icons.iconarchive.com/icons/custom-icon-design/all-country-flag/128/Nigeria-Flag-icon.png' alt='flag' style='width:13px; height:13px'></span>"],typeSpeed:50})}},created:function(){var t=document.createElement("script");t.setAttribute("src","https://platform.twitter.com/widgets.js"),t.setAttribute("charset","utf-8"),document.head.appendChild(t)}},p={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("transition",{attrs:{name:"fade"}},[s("div",{staticClass:"home"},[s("div",{staticClass:"header"},[s("div",{staticClass:"avatar-div"},[s("img",{attrs:{src:e("ZM7d"),alt:"avatar"}})]),s("br"),t._v(" "),s("div",{staticClass:"intro"},[s("span",{ref:"header",staticClass:"typed"}),t._v(" "),s("p",{staticClass:"interest"},[t._v(" I'm very passionate about technology, humanity and problem solving. \n                    My technology proficiency encomprises of: The LAMP (Linux, Apache, MySQL, PHP) and the MEVN (Mongo, Express, Vue JS, Node JS) Stacks. "),s("br"),t._v("\n                    It also excites me to build projects that require the use of frameworks like "),s("a",{attrs:{href:"https://www.laravel.com",target:"_blank"}},[t._v("Laravel")]),t._v(", \n                    "),s("a",{attrs:{href:"https://www.reactjs.org",target:"_blank"}},[t._v("React JS")]),t._v(" and design tool "),s("a",{attrs:{href:"https://www.figma.com",target:"_blank"}},[t._v("Figma")]),t._v(". Leave me a message\n                   "),s("router-link",{attrs:{to:"/contact-me"}},[t._v(" here "),s("i",{staticClass:"fa fa-arrow-circle-right"})])],1)]),t._v(" "),s("div",[s("a",{staticClass:"twitter-follow-button",attrs:{href:"https://twitter.com/commandline_?ref_src=twsrc%5Etfw","data-show-count":"false"}},[t._v("Follow @commandline_")])])])])])},staticRenderFns:[]};var h=e("VU/8")(f,p,!1,function(t){e("p96u")},"data-v-1b96d3ec",null).exports,_={data:function(){return{name:"",email:"",message:""}},methods:{sendMail:function(){var t=this;axios.post("http://localhost:3000/contact",{name:this.name,email:this.email,message:this.message}).then(function(a){t.resetForm(),alert("Email sent successfully",a)}).catch(function(a){t.resetForm(),console.log(a)})},resetForm:function(){console.log("Resetting the form"),this.name=this.email=this.message=""}}},g={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("transition",{attrs:{name:"fade"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"contact-container"},[e("h2",{staticClass:"contact-header"},[t._v("Contact Me")]),t._v(" "),e("p",{staticClass:"contact-instruction"},[t._v("\n                Would you be needing my service on a project? Kindly contact me below. \n            ")]),t._v(" "),e("i",{staticClass:"fa fa-arrow-circle-down",staticStyle:{color:"orange"}}),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"form-div"},[e("form",{attrs:{action:"",id:"main-form"},on:{submit:function(a){return a.preventDefault(),t.sendMail(a)}}},[e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"input",attrs:{type:"text",name:"name",placeholder:"Full Name",autocomplete:"off",required:""},domProps:{value:t.name},on:{input:function(a){a.target.composing||(t.name=a.target.value)}}})]),t._v(" "),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"input",attrs:{type:"email",name:"email",placeholder:"Email Address",autocomplete:"off",required:""},domProps:{value:t.email},on:{input:function(a){a.target.composing||(t.email=a.target.value)}}})]),t._v(" "),e("div",[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],staticClass:"textarea",attrs:{name:"message",cols:"30",rows:"10",placeholder:"Message",autocomplete:"off",required:""},domProps:{value:t.message},on:{input:function(a){a.target.composing||(t.message=a.target.value)}}})]),t._v(" "),e("div",[e("button",{staticClass:"contact-btn",attrs:{type:"submit"}},[t._v("Send Message")])])])])])])])},staticRenderFns:[]};var C=e("VU/8")(_,g,!1,function(t){e("WfNL")},"data-v-1b77317a",null).exports,w={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"container"},[a("div",[a("img",{attrs:{src:e("xRWS"),alt:""}})])])}]};var b=e("VU/8")({},w,!1,function(t){e("TXck")},"data-v-2a04d609",null).exports;s.a.use(r.a);var y=new r.a({linkActiveClass:!0,mode:"history",routes:[{path:"/",name:"Home",component:h},{path:"/contact-me",name:"Contact",component:C},{path:"/portfolio",name:"Portfolio",component:v},{path:"/google-cert",name:"Certification",component:b}]}),x=(e("d4tr"),e("mtWM")),k=e.n(x);window.axios=k.a,s.a.config.productionTip=!1,new s.a({el:"#app",router:y,components:{App:o},template:"<App/>"})},TXck:function(t,a){},WfNL:function(t,a){},Xh4D:function(t,a){},ZM7d:function(t,a,e){t.exports=e.p+"static/img/my-avatar.8b3490e.jpg"},aASo:function(t,a){},d4tr:function(t,a){},gwEf:function(t,a){},p96u:function(t,a){},xRWS:function(t,a,e){t.exports=e.p+"static/img/screenshot-crop.0e48403.png"}},["NHnr"]);
//# sourceMappingURL=app.58314878e92858b0d195.js.map