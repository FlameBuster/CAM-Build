(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[863],{4796:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/upload",function(){return t(7962)}])},3160:function(e,n,t){"use strict";t.d(n,{Z:function(){return h}});var r=t(5893),i=t(9280),s=t.n(i),a=t(326),l=t(1664),o=t.n(l),u=t(7294),c=t(8911),d=t.n(c),$=function(){return(0,r.jsxs)("ul",{className:d().navContainer,children:[(0,r.jsx)(o(),{href:"/",children:(0,r.jsx)("a",{children:(0,r.jsx)("li",{children:"About Us"})})}),(0,r.jsx)(o(),{href:"/campaigns",children:(0,r.jsx)("a",{children:(0,r.jsx)("li",{children:"Campaigns"})})}),(0,r.jsx)(o(),{href:"/gallery",children:(0,r.jsx)("a",{children:(0,r.jsx)("li",{children:"Gallery"})})}),(0,r.jsx)(o(),{href:"/contribute",children:(0,r.jsx)("a",{children:(0,r.jsx)("li",{children:"Contribute"})})}),(0,r.jsx)(o(),{href:"/contact_us",children:(0,r.jsx)("a",{children:(0,r.jsx)("li",{children:"Contact Us"})})})]})},h=function(){var e=(0,u.useState)(!1),n=e[0],t=e[1];return(0,r.jsxs)("header",{className:s().header,children:[(0,r.jsx)("address",{className:s().address,children:(0,r.jsx)("span",{children:"012-3846579 | cme-camproject.online"})}),(0,r.jsxs)("nav",{children:[(0,r.jsx)(o(),{href:"/",children:(0,r.jsx)("a",{children:(0,r.jsx)("div",{className:s().logo,children:(0,r.jsx)("img",{src:"/images/logo.png"})})})}),(0,r.jsxs)("ul",{className:s().navContainer,children:[(0,r.jsx)(o(),{href:"/",children:(0,r.jsx)("a",{children:(0,r.jsx)("li",{children:"About Us"})})}),(0,r.jsx)(o(),{href:"/archives",children:(0,r.jsx)("a",{children:(0,r.jsx)("li",{children:"Archives"})})}),(0,r.jsx)(o(),{href:"/gallery",children:(0,r.jsx)("a",{children:(0,r.jsx)("li",{children:"Gallery"})})}),(0,r.jsx)(o(),{href:"/videoGallery",children:(0,r.jsx)("a",{children:(0,r.jsx)("li",{children:"Video Gallery"})})}),(0,r.jsx)(o(),{href:"/upload",children:(0,r.jsx)("a",{children:(0,r.jsx)("div",{className:s().contriBtn,children:"Upload"})})}),(0,r.jsx)(o(),{href:"/delete",children:(0,r.jsx)("a",{children:(0,r.jsx)("div",{className:s().contriBtn,children:"Delete"})})}),(0,r.jsx)(o(),{href:"/contact_us",children:(0,r.jsx)("a",{children:(0,r.jsx)("li",{children:"Contact Us"})})})]}),(0,r.jsx)("span",{className:s().hamburgerMenu,onClick:function(){t(function(e){return!e})},children:(0,r.jsx)(a.Z,{className:s().mobMenu})})]}),n&&(0,r.jsx)($,{})]})}},8555:function(e,n,t){"use strict";t.r(n);var r=t(1799),i=t(5893),s=t(1163),a=t(7294),l=function(e){return function(n){var t=(0,s.useRouter)();return(0,a.useEffect)(function(){localStorage.getItem("token")||t.push("/Login")},[]),(0,i.jsx)(e,(0,r.Z)({},n))}};n.default=l},7962:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return f}});var r=t(5893),i=t(7294),s=t(8555),a=t(702),l=t.n(a),o=t(7568),u=t(655),c=t(1163),d=function(){var e,n=(0,i.useState)(null),t=n[0],s=n[1],a=(0,i.useState)(""),d=a[0],$=a[1],h=(0,i.useState)(""),p=h[0],m=h[1],x=(0,i.useState)(""),f=x[0],j=x[1],v=(0,i.useState)(""),g=v[0],b=v[1],N=(0,i.useState)(""),_=N[0],S=N[1],y=(0,i.useState)(""),C=y[0],F=y[1],D=(0,i.useState)(""),P=D[0],k=D[1],E=(0,i.useState)(""),U=E[0],w=E[1],L=(0,i.useState)(""),I=L[0],O=L[1],B=(0,i.useState)(""),V=B[0],A=B[1],T=(0,i.useState)(""),M=T[0],Z=T[1],R=(0,i.useState)(""),W=R[0],G=R[1],Y=(0,i.useState)(""),J=Y[0],X=Y[1],q=(0,i.useState)(""),H=q[0],z=q[1],K=(0,i.useState)(null),Q=K[0],ee=K[1],en=(0,i.useState)(!1),et=en[0],er=en[1],ei=(0,c.useRouter)(),es=function(){localStorage.removeItem("token"),ei.push("/Login")},ea=function(e){var n=e.target.files[0];n&&"application/pdf"===n.type?s(n):alert("Please select a valid PDF file")},el=function(e){$(e.target.value)},eo=(e=(0,o.Z)(function(e){var n,r,i,s,a,l;return(0,u.__generator)(this,function(o){switch(o.label){case 0:if(e.preventDefault(),!t)return alert("Please select a PDF file"),[2];if(!d)return alert("Please enter a file name"),[2];(n=new FormData).append("file",t,d+".pdf"),r={},n.append("metadata",JSON.stringify((r.metadata={materialNo:p,Accession_number:{Ser_Corps_Inst:f,Est_Br:g,Sub_Publisher:_,Vol:C,Year:P,Collection_type:U,No:I,Loc:V},Location:M,Page_no:W,No_of_copies:J,Remarks:H},r))),er(!0),o.label=1;case 1:return o.trys.push([1,4,5,6]),[4,fetch("http://final-cam-server.vercel.app/pdf/create",((s={}).method="POST",s.body=n,s))];case 2:return[4,(i=o.sent()).json()];case 3:return a=o.sent(),console.log(a),i.ok?ee("File uploaded successfully"):ee("Error uploading file"),[3,6];case 4:return l=o.sent(),console.error(l),ee("Error uploading file"),[3,6];case 5:return er(!1),[7];case 6:return[2]}})}),function(n){return e.apply(this,arguments)});return(0,r.jsxs)("div",{className:l()["upload-pdf-container"],children:[(0,r.jsx)("h2",{children:"Upload PDF"}),Q&&(0,r.jsx)("div",{className:l().message,children:Q}),(0,r.jsxs)("form",{onSubmit:eo,children:[(0,r.jsxs)("div",{className:l()["form-group"],children:[(0,r.jsx)("label",{htmlFor:"pdfFile",children:"Select PDF File:"}),(0,r.jsx)("br",{}),(0,r.jsx)("input",{type:"file",id:"pdfFile",name:"pdfFile",accept:".pdf",onChange:ea})]}),(0,r.jsxs)("div",{className:l()["form-group"],children:[(0,r.jsx)("label",{htmlFor:"fileName",children:"Enter File Name:"}),(0,r.jsx)("br",{}),(0,r.jsx)("input",{type:"text",id:"fileName",name:"fileName",value:d,onChange:el})]}),(0,r.jsxs)("div",{className:l()["form-group"],children:[(0,r.jsx)("label",{htmlFor:"mtrlNo",children:"Mtrl No:"}),(0,r.jsx)("br",{}),(0,r.jsx)("input",{type:"text",id:"mtrlNo",name:"mtrlNo",value:p,onChange:function(e){return m(e.target.value)}})]}),(0,r.jsxs)("div",{className:l()["form-group"],children:[(0,r.jsx)("label",{htmlFor:"serCorInst",children:"Ser/Corps/Inst:"}),(0,r.jsx)("br",{}),(0,r.jsx)("input",{type:"text",id:"serCorInst",name:"serCorInst",value:f,onChange:function(e){return j(e.target.value)}})]}),(0,r.jsxs)("div",{className:l()["form-group"],children:[(0,r.jsx)("label",{htmlFor:"estBr",children:"Est/Br:"}),(0,r.jsx)("br",{}),(0,r.jsx)("input",{type:"text",id:"estBr",name:"estBr",value:g,onChange:function(e){return b(e.target.value)}})]}),(0,r.jsxs)("div",{className:l()["form-group"],children:[(0,r.jsx)("label",{htmlFor:"dteSecSubPublisher",children:"Dte/Sec/Sub/Publisher:"}),(0,r.jsx)("br",{}),(0,r.jsx)("input",{type:"text",id:"dteSecSubPublisher",name:"dteSecSubPublisher",value:_,onChange:function(e){return S(e.target.value)}})]}),(0,r.jsxs)("div",{className:l()["form-group"],children:[(0,r.jsx)("label",{htmlFor:"subSecVolAuthor",children:"Sub Sec/Vol/Author:"}),(0,r.jsx)("br",{}),(0,r.jsx)("input",{type:"text",id:"subSecVolAuthor",name:"subSecVolAuthor",value:C,onChange:function(e){return F(e.target.value)}})]}),(0,r.jsxs)("div",{className:l()["form-group"],children:[(0,r.jsx)("label",{htmlFor:"year",children:"Year:"}),(0,r.jsx)("br",{}),(0,r.jsx)("input",{type:"text",id:"year",name:"year",value:P,onChange:function(e){return k(e.target.value)}})]}),(0,r.jsxs)("div",{className:l()["form-group"],children:[(0,r.jsx)("label",{htmlFor:"collectionType",children:"Collection Type:"}),(0,r.jsx)("br",{}),(0,r.jsx)("input",{type:"text",id:"collectionType",name:"collectionType",value:U,onChange:function(e){return w(e.target.value)}})]}),(0,r.jsxs)("div",{className:l()["form-group"],children:[(0,r.jsx)("label",{htmlFor:"no",children:"No:"}),(0,r.jsx)("br",{}),(0,r.jsx)("input",{type:"text",id:"no",name:"no",value:I,onChange:function(e){return O(e.target.value)}})]}),(0,r.jsxs)("div",{className:l()["form-group"],children:[(0,r.jsx)("label",{htmlFor:"loc",children:"Loc:"}),(0,r.jsx)("br",{}),(0,r.jsx)("input",{type:"text",id:"loc",name:"loc",value:V,onChange:function(e){return A(e.target.value)}})]}),(0,r.jsxs)("div",{className:l()["form-group"],children:[(0,r.jsx)("label",{htmlFor:"location",children:"Location:"}),(0,r.jsx)("br",{}),(0,r.jsx)("input",{type:"text",id:"location",name:"location",value:M,onChange:function(e){return Z(e.target.value)}})]}),(0,r.jsxs)("div",{className:l()["form-group"],children:[(0,r.jsx)("label",{htmlFor:"pageNo",children:"Page No:"}),(0,r.jsx)("br",{}),(0,r.jsx)("input",{type:"text",id:"pageNo",name:"pageNo",value:W,onChange:function(e){return G(e.target.value)}})]}),(0,r.jsxs)("div",{className:l()["form-group"],children:[(0,r.jsx)("label",{htmlFor:"noOfCopies",children:"No of Copies:"}),(0,r.jsx)("br",{}),(0,r.jsx)("input",{type:"text",id:"noOfCopies",name:"noOfCopies",value:J,onChange:function(e){return X(e.target.value)}})]}),(0,r.jsxs)("div",{className:l()["form-group"],children:[(0,r.jsx)("label",{htmlFor:"remarks",children:"Remarks:"}),(0,r.jsx)("br",{}),(0,r.jsx)("textarea",{id:"remarks",name:"remarks",value:H,onChange:function(e){return z(e.target.value)}})]}),(0,r.jsx)("button",{type:"submit",className:l()["submit-button"],disabled:et,children:et?"Uploading...":"Upload"}),(0,r.jsx)("br",{}),(0,r.jsx)("button",{type:"button",className:l()["submit-button"],onClick:es,children:"Logout"})]})]})},$=function(){var e=(0,i.useState)(null),n=e[0],t=e[1],s=(0,i.useState)(""),a=s[0],d=s[1],$=(0,i.useState)(""),h=$[0],p=$[1],m=(0,i.useState)(""),x=m[0],f=m[1],j=(0,i.useState)(""),v=j[0],g=j[1],b=(0,i.useState)([]),N=b[0],_=b[1],S=(0,i.useState)(null),y=S[0],C=S[1],F=(0,i.useState)(!1),D=F[0],P=F[1],k=(0,c.useRouter)();(0,i.useEffect)(function(){fetch("http://final-cam-server.vercel.app/image/divisions").then(function(e){return e.json()}).then(function(e){Array.isArray(e)?_(e):console.error("Error: Divisions data is not an array")}).catch(function(e){return console.error("Error fetching divisions:",e)})},[]);var E,U=function(e){var n=e.target.files[0];n&&n.type.startsWith("image/")?t(n):alert("Please select a valid image file")},w=function(e){d(e.target.value)},L=(E=(0,o.Z)(function(e){var t,r,i,s,l,o,c;return(0,u.__generator)(this,function(u){switch(u.label){case 0:if(e.preventDefault(),!n)return alert("Please select an image file"),[2];if(!a)return alert("Please enter a file name"),[2];(t=a).toLowerCase().endsWith(".jpg")||(t+=".jpg"),(r=new FormData).append("file",n,t),i={},r.append("metadata",JSON.stringify((i.description=h,i.Division=v||x,i))),P(!0),u.label=1;case 1:return u.trys.push([1,4,5,6]),[4,fetch("http://final-cam-server.vercel.app/image/create",((l={}).method="POST",l.body=r,l))];case 2:return[4,(s=u.sent()).json()];case 3:return o=u.sent(),console.log(o),s.ok?C("File uploaded successfully"):C("Error uploading file"),[3,6];case 4:return c=u.sent(),console.error(c),C("Error uploading file"),[3,6];case 5:return P(!1),[7];case 6:return[2]}})}),function(e){return E.apply(this,arguments)}),I=function(){localStorage.removeItem("token"),k.push("/Login")};return(0,r.jsxs)("div",{className:l()["upload-container"],children:[(0,r.jsx)("h2",{children:"Upload Image"}),y&&(0,r.jsx)("div",{className:l().message,children:y}),(0,r.jsxs)("form",{onSubmit:L,children:[(0,r.jsxs)("div",{className:l()["form-group"],children:[(0,r.jsx)("label",{htmlFor:"imageFile",children:"Select Image File:"}),(0,r.jsx)("br",{}),(0,r.jsx)("input",{type:"file",id:"imageFile",name:"imageFile",accept:"image/*",onChange:U})]}),(0,r.jsxs)("div",{className:l()["form-group"],children:[(0,r.jsx)("label",{htmlFor:"fileName",children:"Enter File Name:"}),(0,r.jsx)("br",{}),(0,r.jsx)("input",{type:"text",id:"fileName",name:"fileName",value:a,onChange:w})]}),(0,r.jsxs)("div",{className:l()["form-group"],children:[(0,r.jsx)("label",{htmlFor:"description",children:"Description:"}),(0,r.jsx)("br",{}),(0,r.jsx)("textarea",{id:"description",name:"description",value:h,onChange:function(e){return p(e.target.value)}})]}),(0,r.jsxs)("div",{className:l()["form-group"],children:[(0,r.jsx)("label",{htmlFor:"division",children:"Select Division:"}),(0,r.jsx)("br",{}),(0,r.jsxs)("select",{id:"division",name:"division",value:x,onChange:function(e){return f(e.target.value)},disabled:!!v,children:[(0,r.jsx)("option",{value:"",children:"Select existing division"}),N.map(function(e){return(0,r.jsx)("option",{value:e,children:e},e)})]})]}),(0,r.jsxs)("div",{className:l()["form-group"],children:[(0,r.jsx)("label",{htmlFor:"newDivision",children:"Or Enter New Division:"}),(0,r.jsx)("br",{}),(0,r.jsx)("input",{type:"text",id:"newDivision",name:"newDivision",value:v,onChange:function(e){return g(e.target.value)},disabled:!!x})]}),(0,r.jsx)("button",{type:"submit",className:l()["submit-button"],disabled:D,children:D?"Uploading...":"Upload"}),(0,r.jsx)("br",{}),(0,r.jsx)("button",{type:"button",className:l()["submit-button"],onClick:I,children:"Logout"})]})]})},h=function(){var e=(0,i.useState)(null),n=e[0],t=e[1],s=(0,i.useState)(""),a=s[0],d=s[1],$=(0,i.useState)(""),h=$[0],p=$[1],m=(0,i.useState)(""),x=m[0],f=m[1],j=(0,i.useState)(""),v=j[0],g=j[1],b=(0,i.useState)([]),N=b[0],_=b[1],S=(0,i.useState)(null),y=S[0],C=S[1],F=(0,i.useState)(!1),D=F[0],P=F[1],k=(0,c.useRouter)();(0,i.useEffect)(function(){fetch("http://final-cam-server.vercel.app/video/divisions").then(function(e){return e.json()}).then(function(e){Array.isArray(e)?_(e):console.error("Error: Divisions data is not an array")}).catch(function(e){return console.error("Error fetching divisions:",e)})},[]);var E,U=function(e){var n=e.target.files[0];n&&n.type.startsWith("video/")?t(n):alert("Please select a valid video file")},w=function(e){d(e.target.value)},L=(E=(0,o.Z)(function(e){var t,r,i,s,l,o,c;return(0,u.__generator)(this,function(u){switch(u.label){case 0:if(e.preventDefault(),!n)return alert("Please select a video file"),[2];if(!a)return alert("Please enter a file name"),[2];(t=a).toLowerCase().endsWith(".mp4")||(t+=".mp4"),(r=new FormData).append("file",n,t),i={},r.append("metadata",JSON.stringify((i.description=h,i.Division=v||x,i))),P(!0),u.label=1;case 1:return u.trys.push([1,4,5,6]),[4,fetch("http://final-cam-server.vercel.app/video/create",((l={}).method="POST",l.body=r,l))];case 2:return[4,(s=u.sent()).json()];case 3:return o=u.sent(),console.log(o),s.ok?C("File uploaded successfully"):C("Error uploading file"),[3,6];case 4:return c=u.sent(),console.error(c),C("Error uploading file"),[3,6];case 5:return P(!1),[7];case 6:return[2]}})}),function(e){return E.apply(this,arguments)}),I=function(){localStorage.removeItem("token"),k.push("/Login")};return(0,r.jsxs)("div",{className:l()["upload-container"],children:[(0,r.jsx)("h2",{children:"Upload Video"}),y&&(0,r.jsx)("div",{className:l().message,children:y}),(0,r.jsxs)("form",{onSubmit:L,children:[(0,r.jsxs)("div",{className:l()["form-group"],children:[(0,r.jsx)("label",{htmlFor:"videoFile",children:"Select Video File:"}),(0,r.jsx)("br",{}),(0,r.jsx)("input",{type:"file",id:"videoFile",name:"videoFile",accept:"video/*",onChange:U})]}),(0,r.jsxs)("div",{className:l()["form-group"],children:[(0,r.jsx)("label",{htmlFor:"fileName",children:"Enter File Name:"}),(0,r.jsx)("br",{}),(0,r.jsx)("input",{type:"text",id:"fileName",name:"fileName",value:a,onChange:w})]}),(0,r.jsxs)("div",{className:l()["form-group"],children:[(0,r.jsx)("label",{htmlFor:"description",children:"Description:"}),(0,r.jsx)("br",{}),(0,r.jsx)("textarea",{id:"description",name:"description",value:h,onChange:function(e){return p(e.target.value)}})]}),(0,r.jsxs)("div",{className:l()["form-group"],children:[(0,r.jsx)("label",{htmlFor:"division",children:"Select Division:"}),(0,r.jsx)("br",{}),(0,r.jsxs)("select",{id:"division",name:"division",value:x,onChange:function(e){return f(e.target.value)},disabled:!!v,children:[(0,r.jsx)("option",{value:"",children:"Select existing division"}),N.map(function(e){return(0,r.jsx)("option",{value:e,children:e},e)})]})]}),(0,r.jsxs)("div",{className:l()["form-group"],children:[(0,r.jsx)("label",{htmlFor:"newDivision",children:"Or Enter New Division:"}),(0,r.jsx)("br",{}),(0,r.jsx)("input",{type:"text",id:"newDivision",name:"newDivision",value:v,onChange:function(e){return g(e.target.value)},disabled:!!x})]}),(0,r.jsx)("button",{type:"submit",className:l()["submit-button"],disabled:D,children:D?"Uploading...":"Upload"}),(0,r.jsx)("br",{}),(0,r.jsx)("button",{type:"button",className:l()["submit-button"],onClick:I,children:"Logout"})]})]})};function p(){var e=(0,i.useState)(!0),n=e[0],t=e[1],s=(0,i.useState)(!1),a=s[0],o=s[1],u=(0,i.useState)(!1),c=u[0],p=u[1];return(0,r.jsxs)("div",{className:l()["upload-form-container"],children:[(0,r.jsxs)("div",{className:l()["toggle-buttons"],children:[(0,r.jsx)("button",{className:n?l().active:"",onClick:function(){t(!0),o(!1),p(!1)},children:"Upload PDF"}),(0,r.jsx)("button",{className:a?l().active:"",onClick:function(){t(!1),o(!0),p(!1)},children:"Upload Image"}),(0,r.jsx)("button",{className:c?l().active:"",onClick:function(){t(!1),o(!1),p(!0)},children:"Upload Video"})]}),n&&(0,r.jsx)(d,{}),a&&(0,r.jsx)($,{}),c&&(0,r.jsx)(h,{})]})}var m=t(3160),x=function(){return(0,r.jsxs)(i.Fragment,{children:[(0,r.jsx)(m.Z,{}),(0,r.jsx)("main",{children:(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{children:"Upload Files"}),(0,r.jsx)(p,{})]})})]})},f=(0,s.default)(x)},8911:function(e){e.exports={navContainer:"MobileMenu_navContainer__bdWmb"}},9280:function(e){e.exports={header:"Navbar_header__p_J8D",hamburgerMenu:"Navbar_hamburgerMenu__ve9dB",logo:"Navbar_logo__f9BcH",contriBtn:"Navbar_contriBtn__8MVxY",end:"Navbar_end__lrgYy"}},702:function(e){e.exports={"upload-form-container":"upload_upload-form-container__1sNNU","toggle-buttons":"upload_toggle-buttons__kjLLt",active:"upload_active__dfV8F","upload-container":"upload_upload-container__J3m8u","upload-pdf-container":"upload_upload-pdf-container__qcUrO",message:"upload_message__DvDUb","form-group":"upload_form-group__O0d4F","submit-button":"upload_submit-button__imN_8"}},1163:function(e,n,t){e.exports=t(387)},7568:function(e,n,t){"use strict";function r(e,n,t,r,i,s,a){try{var l=e[s](a),o=l.value}catch(u){t(u);return}l.done?n(o):Promise.resolve(o).then(r,i)}function i(e){return function(){var n=this,t=arguments;return new Promise(function(i,s){var a=e.apply(n,t);function l(e){r(a,i,s,l,o,"next",e)}function o(e){r(a,i,s,l,o,"throw",e)}l(void 0)})}}t.d(n,{Z:function(){return i}})}},function(e){e.O(0,[359,774,888,179],function(){return e(e.s=4796)}),_N_E=e.O()}]);