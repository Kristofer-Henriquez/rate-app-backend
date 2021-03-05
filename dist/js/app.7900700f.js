(function(e){function t(t){for(var o,n,i=t[0],l=t[1],c=t[2],f=0,p=[];f<i.length;f++)n=i[f],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&p.push(s[n][0]),s[n]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);u&&u(t);while(p.length)p.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],o=!0,i=1;i<r.length;i++){var l=r[i];0!==s[l]&&(o=!1)}o&&(a.splice(t--,1),e=n(n.s=r[0]))}return e}var o={},s={app:0},a=[];function n(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=o,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=l;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"0a95":function(e,t,r){e.exports=r.p+"img/LogoMakr-5k2t6X.3b5e5865.png"},"27d1":function(e,t,r){},"390d":function(e,t,r){"use strict";r("27d1")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var o=r("2b0e"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[e._m(0),r("div",{attrs:{id:"nav"}},[r("router-link",{staticStyle:{color:"#f8ae0ff3","font-size":"46px"},attrs:{to:"/professors"}},[e._v("All Professors")]),r("div"),r("router-link",{staticStyle:{color:"#f8ae0ff3","font-size":"46px"},attrs:{to:"/professorsNew"}},[e._v("New Professor")])],1),r("router-view")],1)},a=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"logo"}},[o("img",{attrs:{src:r("0a95")}})])}],n=(r("034f"),r("2877")),i={},l=Object(n["a"])(i,s,a,!1,null,null,null),c=l.exports,u=r("8c4f"),f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"Professors"},[r("h1",[e._v("The tables have turned!")]),r("p",[e._v(" Sort by rating! ")]),r("button",{staticStyle:{padding:"3px 3px","text-align":"center",color:"#42b983"},on:{click:function(t){return e.sortRatingshigh()}}},[e._v("↑")]),e._v(" | "),r("button",{staticStyle:{padding:"3px 3px","text-align":"center",color:"#42b983"},on:{click:function(t){return e.sortRatingslow()}}},[e._v(" ↓")]),r("div",{staticClass:"row"},e._l(e.professors,(function(t){return r("div",{staticClass:"col-sm-3"},[r("br"),r("div",{staticClass:"card",staticStyle:{width:"20rem",height:"auto",margin:"25px","border-color":"orange","border-radius":"15px","border-width":"5px"}},[r("div",{staticClass:"card-body",staticStyle:{width:"auto",height:"auto",color:"#080601f3"}},[r("h2",[e._v(e._s(t.name))]),r("h3",[e._v(e._s(e._f("formatNumber")(t.avg)))]),r("b-form-rating",{staticClass:"mb-2",attrs:{variant:"warning",readonly:"","no-border":""},model:{value:t.avg,callback:function(r){e.$set(t,"avg",r)},expression:"professor.avg"}}),r("p",[e._v(e._s(t.school))]),r("p",[e._v(e._s(t.title))]),r("p",[e._v(e._s(t.department))]),r("a",{staticClass:"btn btn-primary",attrs:{href:"/professors/"+t.id}},[e._v("Checkout this professor!")])],1)])])})),0)])},p=[],d=(r("4de4"),r("bc3a")),v=r.n(d),m=r("6612");o["default"].filter("formatNumber",(function(e){return m(e).format("0.0")}));var h={data:function(){return{professors:[]}},created:function(){this.indexProfessors()},methods:{indexProfessors:function(){var e=this;v.a.get("/api/professors").then((function(t){console.log("professors index",t),e.professors=t.data}))}}},w=h,b=Object(n["a"])(w,f,p,!1,null,null,null),g=b.exports,_=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.professor?r("div",{staticClass:"Professors-Show"},[r("h2",[e._v("Want to add a review? Just click below!")]),r("hr",{staticStyle:{height:"2px","border-width":"0",color:"gray","background-color":"white"}}),r("h1",[e._v(e._s(e.professor.name))]),r("hr",{staticStyle:{height:"2px","border-width":"0",width:"50px",color:"gray","background-color":"white"}}),r("h1",{staticClass:"mt-2"},[e._v(e._s(e._f("formatNumber")(e.averageValue=e.averageRating(e.professor.reviews)))+" / 5")]),r("b-form-rating",{staticClass:"mb-2",staticStyle:{background:"#2c3e5000",width:"25em","margin-left":"auto","margin-right":"auto"},attrs:{variant:"warning",readonly:"","show-clear":"","no-border":"",size:"lg"},model:{value:e.averageValue,callback:function(t){e.averageValue=t},expression:"averageValue"}}),r("hr",{staticStyle:{height:"2px","border-width":"0",width:"50px",color:"gray","background-color":"white"}}),r("h1",[e._v(e._s(e.professor.school))]),r("h1",[e._v(e._s(e.professor.title))]),r("h1",[e._v(e._s(e.professor.department))]),r("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-2",modifiers:{"modal-2":!0}}],attrs:{variant:"primary"},on:{click:e.professor}},[e._v("Edit this professor!")]),r("br"),r("br"),r("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-3",modifiers:{"modal-3":!0}}],attrs:{variant:"primary"}},[e._v("Write Review!")]),r("div",[r("b-modal",{attrs:{id:"modal-2",title:"BootstrapVue"},scopedSlots:e._u([{key:"modal-header",fn:function(){return[r("h1",[e._v("Edit this Professor!")])]},proxy:!0},{key:"default",fn:function(){return[r("div",[r("b-form",{on:{submit:function(t){return t.preventDefault(),e.submitProfessor()}}},[r("ul",e._l(e.errors,(function(t){return r("li",{staticClass:"text-danger"},[e._v(e._s(t))])})),0),r("div",{staticClass:"form-group"},[r("label",[e._v("School:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.professor.school,expression:"professor.school"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.professor.school},on:{input:function(t){t.target.composing||e.$set(e.professor,"school",t.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",[e._v("Title:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.professor.title,expression:"professor.title"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.professor.title},on:{input:function(t){t.target.composing||e.$set(e.professor,"title",t.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",[e._v("Department:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.professor.department,expression:"professor.department"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.professor.department},on:{input:function(t){t.target.composing||e.$set(e.professor,"department",t.target.value)}}})])])],1)]},proxy:!0},{key:"modal-footer",fn:function(t){var o=t.ok,s=t.cancel,a=t.hide;return[r("div",[r("b-button",{attrs:{size:"sm",variant:"primary"},on:{click:function(t){o(e.submitProfessor(e.professor.id))}}},[e._v(" OK ")]),r("b-button",{attrs:{size:"sm"},on:{click:function(e){return s()}}},[e._v(" Cancel ")]),r("b-button",{attrs:{size:"sm",variant:"danger"},on:{click:function(t){a(e.destroyProfessor())}}},[e._v(" delete ")])],1)]}}],null,!1,3102700464)})],1),r("div",[r("b-modal",{attrs:{id:"modal-3",title:"BootstrapVue"},scopedSlots:e._u([{key:"modal-header",fn:function(){return[r("h1",[e._v("New Review!")])]},proxy:!0},{key:"default",fn:function(){return[r("div",[r("b-form",{on:{submit:function(t){return t.preventDefault(),e.createReview()}}},[r("ul",e._l(e.errors,(function(t){return r("li",{staticClass:"text-danger"},[e._v(e._s(t))])})),0),r("div",{staticClass:"form-group"},[r("label",[e._v("rating:")]),r("b-form-rating",{staticClass:"mb-2",attrs:{variant:"warning","no-border":""},model:{value:e.newReviewRating,callback:function(t){e.newReviewRating=t},expression:"newReviewRating"}})],1),r("div",{staticClass:"form-group"},[r("b-form-textarea",{attrs:{id:"textarea",placeholder:"Enter something...",rows:"3","max-rows":"6"},model:{value:e.newReviewText,callback:function(t){e.newReviewText=t},expression:"newReviewText"}})],1)])],1)]},proxy:!0},{key:"modal-footer",fn:function(t){var o=t.ok,s=t.cancel;return[r("div",[r("b-button",{attrs:{size:"sm",variant:"primary"},on:{click:function(t){o(e.createReview())}}},[e._v(" OK ")]),r("b-button",{attrs:{size:"sm"},on:{click:function(e){return s()}}},[e._v(" Cancel ")])],1)]}}],null,!1,545711410)})],1),r("div",{staticClass:"row"},e._l(e.professor.reviews,(function(t){return r("div",{staticClass:"col-sm-3"},[r("br"),r("b-card",{staticStyle:{width:"20rem",height:"auto",margin:"25px","border-color":"orange","border-radius":"15px","border-width":"5px"}},[r("b-card-text",{staticStyle:{color:"#080601f3"}},[r("p",[e._v(e._s(t.rating)+" / 5")]),r("b-form-rating",{staticClass:"mb-3",attrs:{variant:"warning",readonly:"","no-border":""},model:{value:t.rating,callback:function(r){e.$set(t,"rating",r)},expression:"review.rating"}}),r("p",[e._v(e._s(t.text))])],1),r("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-1",modifiers:{"modal-1":!0}}],attrs:{variant:"primary"},on:{click:function(r){e.selectedReview=t}}},[e._v("Edit review")])],1)],1)})),0),r("div",[r("b-modal",{attrs:{id:"modal-1",title:"BootstrapVue"},scopedSlots:e._u([{key:"modal-header",fn:function(){return[r("h1",[e._v("Edit this Review!")])]},proxy:!0},{key:"default",fn:function(){return[r("div",[r("b-form",{on:{submit:function(t){return t.preventDefault(),e.submitReview()}}},[r("ul",e._l(e.errors,(function(t){return r("li",{staticClass:"text-danger"},[e._v(e._s(t))])})),0),r("div",{staticClass:"form-group"},[r("label",[e._v("rating:")]),r("b-form-rating",{staticClass:"mb-2",attrs:{variant:"warning","no-border":""},model:{value:e.selectedReview.rating,callback:function(t){e.$set(e.selectedReview,"rating",t)},expression:"selectedReview.rating"}})],1),r("div",{staticClass:"form-group"},[r("b-form-textarea",{attrs:{id:"textarea",placeholder:"Enter something...",rows:"3","max-rows":"6"},model:{value:e.selectedReview.text,callback:function(t){e.$set(e.selectedReview,"text",t)},expression:"selectedReview.text"}})],1)])],1)]},proxy:!0},{key:"modal-footer",fn:function(t){var o=t.ok,s=t.cancel,a=t.hide;return[r("div",[r("b-button",{attrs:{size:"sm",variant:"primary"},on:{click:function(t){o(e.submitReview(e.selectedReview.id))}}},[e._v(" OK ")]),r("b-button",{attrs:{size:"sm"},on:{click:function(e){return s()}}},[e._v(" Cancel ")]),r("b-button",{attrs:{size:"sm",variant:"danger"},on:{click:function(t){a(e.destroyReview(e.selectedReview.id))}}},[e._v(" delete ")])],1)]}}],null,!1,1662754678)})],1),r("br"),r("br")],1):e._e()},x=[],y=(r("13d5"),r("b0c0"),r("a9e3"),r("6612"));o["default"].filter("formatNumber",(function(e){return y(e).format("0.0")}));var R={data:function(){return{value:null,newReviewRating:"",newReviewText:"",errors:"",professor:null,text:"",reviews:{},selectedReview:{}}},created:function(){this.showProfessor()},methods:{submitProfessor:function(){var e=this,t={name:this.professor.name,school:this.professor.school,title:this.professor.title,department:this.professor.department};v.a.put("/api/professors/".concat(this.$route.params.id),t).then((function(t){e.$router.push("/professors/".concat(e.professor.id))})).catch((function(t){e.errors=t.response.data.errors}))},submitReview:function(e){var t=this,r={professors_id:this.selectedReview.professors_id,rating:this.selectedReview.rating,text:this.selectedReview.text};v.a.put("/api/reviews/".concat(e),r).then((function(e){console.log("Review edited",e)})).catch((function(e){t.errors=e.response.data.errors}))},showProfessor:function(){var e=this;v.a.get("/api/professors/"+this.$route.params.id).then((function(t){console.log("professor show",t),e.professor=t.data}))},destroyProfessor:function(){var e=this;console.log("deleting this professor"),v.a.delete("/api/professors/".concat(this.$route.params.id)).then((function(t){console.log(t.data),e.$router.push("/professors")}))},createReview:function(){var e=this,t={professors_id:this.professor.id,rating:this.newReviewRating,text:this.newReviewText};v.a.post("/api/reviews/",t).then((function(e){console.log(e.data),location.reload()})).catch((function(t){console.log("photos create error",t.response),e.errors=t.response.data.errors}))},destroyReview:function(e){console.log("deleting this review"),v.a.delete("/api/reviews/".concat(e)).then((function(e){console.log(e.data),location.reload()}))},averageRating:function(e){var t=e.reduce((function(e,t){var r=t.rating;return e+Number(r)}),0);if(t){var r=t/this.professor.reviews.length;return r}}}},P=R,C=(r("390d"),Object(n["a"])(P,_,x,!1,null,null,null)),k=C.exports,S=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"professor-edit"},[r("form",{on:{submit:function(t){return t.preventDefault(),e.submit()}}},[r("h1",[e._v("Edit this professor!")]),r("ul",e._l(e.errors,(function(t){return r("li",{staticClass:"text-danger"},[e._v(e._s(t))])})),0),r("h1",[e._v(" "+e._s(e.professor.name)+" ")]),r("div",{staticClass:"form-group"},[r("label",[e._v("School:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.professor.school,expression:"professor.school"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.professor.school},on:{input:function(t){t.target.composing||e.$set(e.professor,"school",t.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",[e._v("Title:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.professor.title,expression:"professor.title"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.professor.title},on:{input:function(t){t.target.composing||e.$set(e.professor,"title",t.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",[e._v("Department:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.professor.department,expression:"professor.department"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.professor.department},on:{input:function(t){t.target.composing||e.$set(e.professor,"department",t.target.value)}}})]),r("input",{staticClass:"btn btn-primary",attrs:{type:"submit",value:"Submit"}})])])},$=[],N={data:function(){return{errors:[],professor:{}}},mounted:function(){var e=this;v.a.get("/api/professors/"+this.$route.params.id).then((function(t){console.log(t.data),e.professor=t.data}))},methods:{submit:function(){var e=this,t={name:this.professor.name,school:this.professor.school,title:this.professor.title,department:this.professor.department};v.a.put("/api/professors/".concat(this.$route.params.id),t).then((function(t){e.$router.push("/professors/".concat(e.professor.id))})).catch((function(t){e.errors=t.response.data.errors}))}}},T=N,E=Object(n["a"])(T,S,$,!1,null,null,null),O=E.exports,j=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"Professors-Create"},[r("h2",[e._v("New Professor")]),r("div",{staticStyle:{width:"75rem",height:"auto",margin:"auto","border-color":"black","border-radius":"15px","border-width":"5px"}},[r("b-card",[r("form",{on:{submit:function(t){return t.preventDefault(),e.createProfessor()}}},[r("ul",e._l(e.errors,(function(t){return r("li",[e._v(e._s(t))])})),0),r("b-row",{staticClass:"my-1"},[r("b-col",{attrs:{sm:"2"}},[r("label",{attrs:{for:"input-default"}},[e._v("Professor Name:")])]),r("b-col",{attrs:{sm:"10"}},[r("b-form-input",{attrs:{id:"input-default",placeholder:"Enter Professor's name"},model:{value:e.newProfessorName,callback:function(t){e.newProfessorName=t},expression:"newProfessorName"}})],1)],1),r("b-row",{staticClass:"my-1"},[r("b-col",{attrs:{sm:"2"}},[r("label",{attrs:{for:"input-default"}},[e._v("Title:")])]),r("b-col",{attrs:{sm:"10"}},[r("b-form-input",{attrs:{id:"input-default",placeholder:"Enter Professor's title"},model:{value:e.newProfessorTitle,callback:function(t){e.newProfessorTitle=t},expression:"newProfessorTitle"}})],1)],1),r("b-row",{staticClass:"my-1"},[r("b-col",{attrs:{sm:"2"}},[r("label",{attrs:{for:"input-default"}},[e._v("School:")])]),r("b-col",{attrs:{sm:"10"}},[r("b-form-input",{attrs:{id:"input-default",placeholder:"Enter Professor's School"},model:{value:e.newProfessorSchool,callback:function(t){e.newProfessorSchool=t},expression:"newProfessorSchool"}})],1)],1),r("b-row",{staticClass:"my-1"},[r("b-col",{attrs:{sm:"2"}},[r("label",{attrs:{for:"input-default"}},[e._v("Department:")])]),r("b-col",{attrs:{sm:"10"}},[r("b-form-input",{attrs:{id:"input-default",placeholder:"Enter Professor's Department"},model:{value:e.newProfessorDepartment,callback:function(t){e.newProfessorDepartment=t},expression:"newProfessorDepartment"}})],1)],1),r("input",{staticStyle:{"text-align":"left"},attrs:{type:"submit",value:"Create"}})],1)])],1),r("br"),r("br")])},D=[],z={data:function(){return{newProfessorName:"",newProfessorTitle:"",newProfessorSchool:"",newProfessorDepartment:"",errors:[]}},created:function(){},methods:{createProfessor:function(){var e=this,t={name:this.newProfessorName,title:this.newProfessorTitle,school:this.newProfessorSchool,department:this.newProfessorDepartment};v.a.post("/api/professors/",t).then((function(t){console.log(t.data),e.$router.push("/professors")})).catch((function(t){console.log("professor create error",t.response),e.errors=t.response.data.errors}))}}},V=z,M=Object(n["a"])(V,j,D,!1,null,null,null),B=M.exports,J=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"Review-Create"},[r("h2",[e._v("New Review")]),r("form",{on:{submit:function(t){return t.preventDefault(),e.createReview()}}},[r("ul",e._l(e.errors,(function(t){return r("li",[e._v(e._s(t))])})),0),r("div",[e._v(" rating: "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.newReviewRating,expression:"newReviewRating"}],attrs:{type:"text"},domProps:{value:e.newReviewRating},on:{input:function(t){t.target.composing||(e.newReviewRating=t.target.value)}}})]),r("div",[e._v(" text: "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.newReviewText,expression:"newReviewText"}],attrs:{type:"text"},domProps:{value:e.newReviewText},on:{input:function(t){t.target.composing||(e.newReviewText=t.target.value)}}})]),r("input",{attrs:{type:"submit",value:"Create"}})])])},K=[],L={data:function(){return{newReviewRating:"",newReviewText:"",errors:[]}},created:function(){},methods:{createReview:function(){var e=this,t={professors_id:this.$route.params.id,rating:this.newReviewRating,text:this.newReviewText};v.a.post("/api/reviews/",t).then((function(t){console.log(t.data),e.$router.push("/professors/".concat(e.$route.params.id))})).catch((function(t){console.log("Review create error",t.response),e.errors=t.response.data.errors}))}}},W=L,X=Object(n["a"])(W,J,K,!1,null,null,null),q=X.exports,A=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"Review-edit"},[r("form",{on:{submit:function(t){return t.preventDefault(),e.submit()}}},[r("h1",[e._v("Edit this Review!")]),r("ul",e._l(e.errors,(function(t){return r("li",{staticClass:"text-danger"},[e._v(e._s(t))])})),0),r("div",{staticClass:"form-group"},[r("label",[e._v("rating:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.reviews.rating,expression:"reviews.rating"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.reviews.rating},on:{input:function(t){t.target.composing||e.$set(e.reviews,"rating",t.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",[e._v("text:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.reviews.text,expression:"reviews.text"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.reviews.text},on:{input:function(t){t.target.composing||e.$set(e.reviews,"text",t.target.value)}}})]),r("input",{staticClass:"btn btn-primary",attrs:{type:"submit",value:"Submit"}})])])},H=[],I={data:function(){return{errors:[],reviews:{}}},mounted:function(){var e=this;v.a.get("/api/reviews/"+this.$route.params.id).then((function(t){console.log(t.data),e.reviews=t.data}))},methods:{submit:function(){var e=this,t={professors_id:this.reviews.professors_id,rating:this.reviews.rating,text:this.reviews.text};v.a.put("/api/reviews/".concat(this.$route.params.id),t).then((function(t){e.$router.push("/professors/".concat(e.reviews.professors_id))})).catch((function(t){e.errors=t.response.data.errors}))}}},U=I,F=Object(n["a"])(U,A,H,!1,null,null,null),G=F.exports;o["default"].use(u["a"]);var Q=[{path:"/professors",name:"Professors",component:g},{path:"/professors/:id",name:"ProfessorShow",component:k},{path:"/professors/:id/edit",name:"Professor-edit",component:O},{path:"/professorsNew",name:"ProfessorCreate",component:B},{path:"/professors/:id/reviewcreate",name:"ReviewCreate",component:q},{path:"/reviewEdit/:id",name:"ReviewEdit",component:G}],Y=new u["a"]({mode:"history",base:"/",routes:Q}),Z=Y,ee=r("5f5b");r("ab8b"),r("2dd8");v.a.defaults.headers.common["X-Requested-With"]="XMLHttpRequest",v.a.defaults.baseURL="/";var te=localStorage.getItem("jwt");te&&(v.a.defaults.headers.common["Authorization"]="Bearer "+te),o["default"].config.productionTip=!1,o["default"].use(ee["a"]),new o["default"]({router:Z,render:function(e){return e(c)}}).$mount("#app")},"85ec":function(e,t,r){}});
//# sourceMappingURL=app.7900700f.js.map