(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[378],{4045:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/test",function(){return e(5772)}])},6953:function(n,t,e){"use strict";e.d(t,{Z:function(){return i}});var r=e(5893),o=e(7294),u=e(7054);function i(){return(0,u.Db)({googleMapsApiKey:"AIzaSyAAVJb2xY-Pl6_fXaW3bGLpzLuWDMxopLw"}).isLoaded?(0,r.jsx)(s,{}):(0,r.jsx)("div",{children:"Loading..."})}function s(){var n=(0,o.useMemo)(function(){return{lat:18.5840315,lng:73.8373092}},[]);return(0,r.jsx)(u.b6,{zoom:17,center:n,mapContainerClassName:"map-container",children:(0,r.jsx)(u.jC,{position:n})})}},5772:function(n,t,e){"use strict";e.r(t);var r=e(5893);e(7294),e(2337);var o=e(6953);t.default=function(){return(0,r.jsx)(o.Z,{})}},2337:function(n,t,e){"use strict";e.d(t,{G:function(){return f},Z:function(){return p}});var r=e(7294);function o(){return(o=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}function u(n,t){return(u=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}var i=function(n){function t(){return n.apply(this,arguments)||this}e=t,i=n,e.prototype=Object.create(i.prototype),e.prototype.constructor=e,u(e,i);var e,i,s=t.prototype;return s.getColumns=function(){var n=this.props,t=n.children,e=n.columnsCount,o=Array.from({length:e},function(){return[]});return r.Children.forEach(t,function(n,t){n&&r.isValidElement(n)&&o[t%e].push(n)}),o},s.renderColumns=function(){var n=this.props.gutter;return this.getColumns().map(function(t,e){return r.createElement("div",{key:e,style:{display:"flex",flexDirection:"column",justifyContent:"flex-start",alignContent:"stretch",flex:1,width:0,gap:n}},t.map(function(n){return n}))})},s.render=function(){var n=this.props,t=n.gutter,e=n.className,u=n.style;return r.createElement("div",{style:o({display:"flex",flexDirection:"row",justifyContent:"center",alignContent:"stretch",boxSizing:"border-box",width:"100%",gap:t},u),className:e},this.renderColumns())},t}(r.Component);i.propTypes={},i.defaultProps={columnsCount:3,gutter:"0",className:null,style:{}};var s="undefined"!=typeof window?r.useLayoutEffect:r.useEffect,c=function(){var n=(0,r.useState)(!1),t=n[0],e=n[1];return s(function(){e(!0)},[]),t},a=function(){var n=c(),t=(0,r.useState)(0),e=t[0],o=t[1],u=(0,r.useCallback)(function(){n&&o(window.innerWidth)},[n]);return s(function(){if(n)return window.addEventListener("resize",u),u(),function(){return window.removeEventListener("resize",u)}},[n,u]),e},l=function(n){var t=n.columnsCountBreakPoints,e=void 0===t?{350:1,750:2,900:3}:t,o=n.children,u=n.className,i=n.style,s=a(),c=(0,r.useMemo)(function(){var n=Object.keys(e).sort(function(n,t){return n-t}),t=n.length>0?e[n[0]]:1;return n.forEach(function(n){n<s&&(t=e[n])}),t},[s,e]);return r.createElement("div",{className:void 0===u?null:u,style:void 0===i?null:i},r.Children.map(o,function(n,t){return r.cloneElement(n,{key:t,columnsCount:c})}))};l.propTypes={};var f=l,p=i}},function(n){n.O(0,[255,774,888,179],function(){return n(n.s=4045)}),_N_E=n.O()}]);