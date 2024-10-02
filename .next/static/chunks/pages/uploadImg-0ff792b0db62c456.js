(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[903],{6338:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/uploadImg",function(){return i(9284)}])},9284:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return u}});var t=i(7568),r=i(655),a=i(5893),s=i(7294),o=i(4322),l=i.n(o);function u(){var e=(0,s.useState)(null),n=e[0],i=e[1],o=(0,s.useState)(""),u=o[0],c=o[1],d=(0,s.useState)(""),p=d[0],f=d[1],m=(0,s.useState)(""),$=m[0],h=m[1],v=(0,s.useState)(""),g=v[0],x=v[1],j=(0,s.useState)([]),b=j[0],N=j[1],y=(0,s.useState)(null),_=y[0],S=y[1],E=(0,s.useState)(!1),F=E[0],w=E[1];(0,s.useEffect)(function(){fetch("http://final-cam-server.vercel.app/divisions").then(function(e){return e.json()}).then(function(e){Array.isArray(e)?N(e):console.error("Error: Divisions data is not an array")}).catch(function(e){return console.error("Error fetching divisions:",e)})},[]);var D,C=function(e){var n=e.target.files[0];n&&n.type.startsWith("image/")?i(n):alert("Please select a valid image file")},P=function(e){c(e.target.value)},k=(D=(0,t.Z)(function(e){var i,t,a,s,o,l;return(0,r.__generator)(this,function(r){switch(r.label){case 0:if(e.preventDefault(),!n)return alert("Please select an image file"),[2];if(!u)return alert("Please enter a file name"),[2];(i=new FormData).append("file",n,u),t={},i.append("metadata",JSON.stringify((t.description=p,t.Division=g||$,t))),w(!0),r.label=1;case 1:return r.trys.push([1,4,5,6]),[4,fetch("http://final-cam-server.vercel.app/image/create",((s={}).method="POST",s.body=i,s))];case 2:return[4,(a=r.sent()).json()];case 3:return o=r.sent(),console.log(o),a.ok?S("File uploaded successfully"):S("Error uploading file"),[3,6];case 4:return l=r.sent(),console.error(l),S("Error uploading file"),[3,6];case 5:return w(!1),[7];case 6:return[2]}})}),function(e){return D.apply(this,arguments)});return(0,a.jsxs)("div",{className:l()["upload-container"],children:[(0,a.jsx)("h2",{children:"Upload Image"}),_&&(0,a.jsx)("div",{className:l().message,children:_}),(0,a.jsxs)("form",{onSubmit:k,children:[(0,a.jsxs)("div",{className:l()["form-group"],children:[(0,a.jsx)("label",{htmlFor:"imageFile",children:"Select Image File:"}),(0,a.jsx)("br",{}),(0,a.jsx)("input",{type:"file",id:"imageFile",name:"imageFile",accept:"image/*",onChange:C})]}),(0,a.jsxs)("div",{className:l()["form-group"],children:[(0,a.jsx)("label",{htmlFor:"fileName",children:"Enter File Name:"}),(0,a.jsx)("br",{}),(0,a.jsx)("input",{type:"text",id:"fileName",name:"fileName",value:u,onChange:P})]}),(0,a.jsxs)("div",{className:l()["form-group"],children:[(0,a.jsx)("label",{htmlFor:"description",children:"Description:"}),(0,a.jsx)("br",{}),(0,a.jsx)("textarea",{id:"description",name:"description",value:p,onChange:function(e){return f(e.target.value)}})]}),(0,a.jsxs)("div",{className:l()["form-group"],children:[(0,a.jsx)("label",{htmlFor:"division",children:"Select Division:"}),(0,a.jsx)("br",{}),(0,a.jsxs)("select",{id:"division",name:"division",value:$,onChange:function(e){return h(e.target.value)},disabled:!!g,children:[(0,a.jsx)("option",{value:"",children:"Select existing division"}),b.map(function(e){return(0,a.jsx)("option",{value:e,children:e},e)})]})]}),(0,a.jsxs)("div",{className:l()["form-group"],children:[(0,a.jsx)("label",{htmlFor:"newDivision",children:"Or Enter New Division:"}),(0,a.jsx)("br",{}),(0,a.jsx)("input",{type:"text",id:"newDivision",name:"newDivision",value:g,onChange:function(e){return x(e.target.value)},disabled:!!$})]}),(0,a.jsx)("button",{type:"submit",disabled:F,children:F?"Uploading...":"Upload"})]})]})}},4322:function(e){e.exports={"upload-container":"upload_upload-container__Iv0Kj",message:"upload_message__ViYCn","form-group":"upload_form-group__cKUuh","submit-button":"upload_submit-button__DJpas"}},7568:function(e,n,i){"use strict";function t(e,n,i,t,r,a,s){try{var o=e[a](s),l=o.value}catch(u){i(u);return}o.done?n(l):Promise.resolve(l).then(t,r)}function r(e){return function(){var n=this,i=arguments;return new Promise(function(r,a){var s=e.apply(n,i);function o(e){t(s,r,a,o,l,"next",e)}function l(e){t(s,r,a,o,l,"throw",e)}o(void 0)})}}i.d(n,{Z:function(){return r}})}},function(e){e.O(0,[774,888,179],function(){return e(e.s=6338)}),_N_E=e.O()}]);