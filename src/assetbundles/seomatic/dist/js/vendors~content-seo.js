/*!
 * @project        SEOmatic
 * @name           vendors~content-seo.js
 * @author         Andrew Welch
 * @build          Sat, Sep 7, 2019 7:58 PM ET
 * @release        d07c1002ee212961041dede4246969e4b60338b9 [develop]
 * @copyright      Copyright (c) 2019 nystudio107
 *
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[10],[,function(e,t,r){"use strict";var n=r(9),i=Object.prototype.toString;function s(e){return"[object Array]"===i.call(e)}function a(e){return null!==e&&"object"==typeof e}function o(e){return"[object Function]"===i.call(e)}function l(e,t){if(null!=e)if("object"==typeof e||s(e)||(e=[e]),s(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}e.exports={isArray:s,isArrayBuffer:function(e){return"[object ArrayBuffer]"===i.call(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:a,isUndefined:function(e){return void 0===e},isDate:function(e){return"[object Date]"===i.call(e)},isFile:function(e){return"[object File]"===i.call(e)},isBlob:function(e){return"[object Blob]"===i.call(e)},isFunction:o,isStream:function(e){return a(e)&&o(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return"undefined"!=typeof window&&"undefined"!=typeof document&&"function"==typeof document.createElement},forEach:l,merge:function e(){var t={};function r(r,n){"object"==typeof t[n]&&"object"==typeof r?t[n]=e(t[n],r):t[n]=r}for(var n=0,i=arguments.length;n<i;n++)l(arguments[n],r);return t},extend:function(e,t,r){return l(t,function(t,i){e[i]=r&&"function"==typeof t?n(t,r):t}),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},,function(e,t,r){},,,function(e,t,r){"use strict";(function(t){var n=r(1),i=r(30),s=/^\)\]\}',?\n/,a={"Content-Type":"application/x-www-form-urlencoded"};function o(e,t){!n.isUndefined(e)&&n.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var l,c={adapter:("undefined"!=typeof XMLHttpRequest?l=r(10):void 0!==t&&(l=r(10)),l),transformRequest:[function(e,t){return i(t,"Content-Type"),n.isFormData(e)||n.isArrayBuffer(e)||n.isStream(e)||n.isFile(e)||n.isBlob(e)?e:n.isArrayBufferView(e)?e.buffer:n.isURLSearchParams(e)?(o(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):n.isObject(e)?(o(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e){e=e.replace(s,"");try{e=JSON.parse(e)}catch(e){}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},n.forEach(["delete","get","head"],function(e){c.headers[e]={}}),n.forEach(["post","put","patch"],function(e){c.headers[e]=n.merge(a)}),e.exports=c}).call(this,r(8))},,,function(e,t,r){"use strict";e.exports=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}}},function(e,t,r){"use strict";var n=r(1),i=r(31),s=r(33),a=r(34),o=r(35),l=r(11),c="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||r(36);e.exports=function(e){return new Promise(function(t,u){var d=e.data,h=e.headers;n.isFormData(d)&&delete h["Content-Type"];var f=new XMLHttpRequest,p="onreadystatechange",m=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in f||o(e.url)||(f=new window.XDomainRequest,p="onload",m=!0,f.onprogress=function(){},f.ontimeout=function(){}),e.auth){var b=e.auth.username||"",g=e.auth.password||"";h.Authorization="Basic "+c(b+":"+g)}if(f.open(e.method.toUpperCase(),s(e.url,e.params,e.paramsSerializer),!0),f.timeout=e.timeout,f[p]=function(){if(f&&(4===f.readyState||m)&&(0!==f.status||f.responseURL&&0===f.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in f?a(f.getAllResponseHeaders()):null,n={data:e.responseType&&"text"!==e.responseType?f.response:f.responseText,status:1223===f.status?204:f.status,statusText:1223===f.status?"No Content":f.statusText,headers:r,config:e,request:f};i(t,u,n),f=null}},f.onerror=function(){u(l("Network Error",e)),f=null},f.ontimeout=function(){u(l("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED")),f=null},n.isStandardBrowserEnv()){var y=r(37),v=(e.withCredentials||o(e.url))&&e.xsrfCookieName?y.read(e.xsrfCookieName):void 0;v&&(h[e.xsrfHeaderName]=v)}if("setRequestHeader"in f&&n.forEach(h,function(e,t){void 0===d&&"content-type"===t.toLowerCase()?delete h[t]:f.setRequestHeader(t,e)}),e.withCredentials&&(f.withCredentials=!0),e.responseType)try{f.responseType=e.responseType}catch(e){if("json"!==f.responseType)throw e}"function"==typeof e.onDownloadProgress&&f.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&f.upload&&f.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){f&&(f.abort(),u(e),f=null)}),void 0===d&&(d=null),f.send(d)})}},function(e,t,r){"use strict";var n=r(32);e.exports=function(e,t,r,i){var s=new Error(e);return n(s,t,r,i)}},function(e,t,r){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,r){"use strict";function n(e){this.message=e}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,e.exports=n},,,,,,function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function i(e){if(!i.installed){var t=new e({methods:{emit:function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];this.$emit.apply(this,[e].concat(r))},fire:function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];this.emit.apply(this,[e].concat(r))},on:function(e,t){this.$on(e,t)},listen:function(e,t){this.on(e,t)},once:function(e,t){this.$once(e,t)},off:function(e,t){this.$off(e,t)},remove:function(e,t){this.off(e,t)}}});Object.defineProperty(e.prototype,"$events",{get:function(){return t}}),e.mixin({beforeCreate:function(){if("object"===n(this.$options.events)){var e={};for(var r in this.$options.events)e[r]=this.$options.events[r].bind(this);this.$once("hook:beforeMount",function(){for(var r in e)t.$on(r,e[r])}),this.$once("hook:beforeDestroy",function(){for(var r in e)t.$off(r,e[r]);e=null})}}})}}"undefined"!=typeof window&&window.Vue&&window.Vue.use(i),t.default=i},function(e,t,r){e.exports=r(28)},,function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.isFixedHeader?r("div",[r("div",{staticClass:"vuetable-head-wrapper"},[r("table",{class:["vuetable",e.css.tableClass,e.css.tableHeaderClass]},[r("thead",[r("tr",[e._l(e.tableFields,function(t,n){return[t.visible?[e.isSpecialField(t.name)?["__checkbox"==e.extractName(t.name)?r("th",{key:n,class:["vuetable-th-checkbox-"+e.trackBy,t.titleClass],style:{width:t.width}},[r("input",{attrs:{type:"checkbox"},domProps:{checked:e.checkCheckboxesState(t.name)},on:{change:function(r){return e.toggleAllCheckboxes(t.name,r)}}})]):e._e(),e._v(" "),"__component"==e.extractName(t.name)?r("th",{key:n,class:["vuetable-th-component-"+e.trackBy,t.titleClass,e.sortClass(t),{sortable:e.isSortable(t)}],style:{width:t.width},domProps:{innerHTML:e._s(e.renderTitle(t))},on:{click:function(r){return e.orderBy(t,r)}}}):e._e(),e._v(" "),"__slot"==e.extractName(t.name)?r("th",{key:n,class:["vuetable-th-slot-"+e.extractArgs(t.name),t.titleClass,e.sortClass(t),{sortable:e.isSortable(t)}],style:{width:t.width},domProps:{innerHTML:e._s(e.renderTitle(t))},on:{click:function(r){return e.orderBy(t,r)}}}):e._e(),e._v(" "),"__sequence"==e.extractName(t.name)?r("th",{key:n,class:["vuetable-th-sequence",t.titleClass||""],style:{width:t.width},domProps:{innerHTML:e._s(e.renderTitle(t))}}):e._e(),e._v(" "),e.notIn(e.extractName(t.name),["__sequence","__checkbox","__component","__slot"])?r("th",{key:n,class:["vuetable-th-"+t.name,t.titleClass||""],style:{width:t.width},domProps:{innerHTML:e._s(e.renderTitle(t))}}):e._e()]:[r("th",{key:n,class:["vuetable-th-"+t.name,t.titleClass,e.sortClass(t),{sortable:e.isSortable(t)}],style:{width:t.width},attrs:{id:"_"+t.name},domProps:{innerHTML:e._s(e.renderTitle(t))},on:{click:function(r){return e.orderBy(t,r)}}})]]:e._e()]}),e._v(" "),e.scrollVisible?r("th",{staticClass:"vuetable-gutter-col",style:{width:e.scrollBarWidth}}):e._e()],2)])])]),e._v(" "),r("div",{staticClass:"vuetable-body-wrapper",style:{height:e.tableHeight}},[r("table",{class:["vuetable",e.css.tableClass,e.css.tableBodyClass]},[r("colgroup",[e._l(e.tableFields,function(t,n){return[t.visible?[r("col",{key:n,class:["vuetable-th-"+t.name,t.titleClass],style:{width:t.width},attrs:{id:"_col_"+t.name}})]:e._e()]})],2),e._v(" "),r("tbody",{staticClass:"vuetable-body"},[e._l(e.tableData,function(t,n){return[r("tr",{key:n,class:e.onRowClass(t,n),attrs:{"item-index":n,render:e.onRowChanged(t)},on:{click:function(r){return e.onRowClicked(t,r)},dblclick:function(r){return e.onRowDoubleClicked(t,r)}}},[e._l(e.tableFields,function(i,s){return[i.visible?[e.isSpecialField(i.name)?["__sequence"==e.extractName(i.name)?r("td",{key:s,class:["vuetable-sequence",i.dataClass],domProps:{innerHTML:e._s(e.renderSequence(n))}}):e._e(),e._v(" "),"__handle"==e.extractName(i.name)?r("td",{key:s,class:["vuetable-handle",i.dataClass],domProps:{innerHTML:e._s(e.renderIconTag(["handle-icon",e.css.handleIcon]))}}):e._e(),e._v(" "),"__checkbox"==e.extractName(i.name)?r("td",{key:s,class:["vuetable-checkboxes",i.dataClass]},[r("input",{attrs:{type:"checkbox"},domProps:{checked:e.rowSelected(t,i.name)},on:{change:function(r){return e.toggleCheckbox(t,i.name,r)}}})]):e._e(),e._v(" "),"__component"===e.extractName(i.name)?r("td",{key:s,class:["vuetable-component",i.dataClass]},[r(e.extractArgs(i.name),{tag:"component",attrs:{"row-data":t,"row-index":n,"row-field":i.sortField}})],1):e._e(),e._v(" "),"__slot"===e.extractName(i.name)?r("td",{key:s,class:["vuetable-slot",i.dataClass]},[e._t(e.extractArgs(i.name),null,{rowData:t,rowIndex:n,rowField:i.sortField})],2):e._e()]:[r("td",{key:s,class:i.dataClass,domProps:{innerHTML:e._s(e.renderNormalField(i,t))},on:{click:function(r){return e.onCellClicked(t,i,r)},dblclick:function(r){return e.onCellDoubleClicked(t,i,r)},contextmenu:function(r){return e.onCellRightClicked(t,i,r)}}})]]:e._e()]})],2),e._v(" "),e.useDetailRow?[r("transition",{key:n,attrs:{name:e.detailRowTransition}},[e.isVisibleDetailRow(t[e.trackBy])?r("tr",{class:[e.css.detailRowClass],on:{click:function(r){return e.onDetailRowClick(t,r)}}},[r("td",{attrs:{colspan:e.countVisibleFields}},[r(e.detailRowComponent,{tag:"component",attrs:{"row-data":t,"row-index":n}})],1)]):e._e()])]:e._e()]}),e._v(" "),e.displayEmptyDataRow?[r("tr",[r("td",{staticClass:"vuetable-empty-result",attrs:{colspan:e.countVisibleFields},domProps:{innerHTML:e._s(e.noDataTemplate)}})])]:e._e(),e._v(" "),e.lessThanMinRows?e._l(e.blankRows,function(t){return r("tr",{key:t,staticClass:"blank-row"},[e._l(e.tableFields,function(t,n){return[t.visible?r("td",{key:n},[e._v(" ")]):e._e()]})],2)}):e._e()],2)])])]):r("table",{class:["vuetable",e.css.tableClass]},[r("thead",[r("tr",[e._l(e.tableFields,function(t,n){return[t.visible?[e.isSpecialField(t.name)?["__checkbox"==e.extractName(t.name)?r("th",{key:n,class:["vuetable-th-checkbox-"+e.trackBy,t.titleClass],style:{width:t.width}},[r("input",{attrs:{type:"checkbox"},domProps:{checked:e.checkCheckboxesState(t.name)},on:{change:function(r){return e.toggleAllCheckboxes(t.name,r)}}})]):e._e(),e._v(" "),"__component"==e.extractName(t.name)?r("th",{key:n,class:["vuetable-th-component-"+e.trackBy,t.titleClass,e.sortClass(t),{sortable:e.isSortable(t)}],style:{width:t.width},domProps:{innerHTML:e._s(e.renderTitle(t))},on:{click:function(r){return e.orderBy(t,r)}}}):e._e(),e._v(" "),"__slot"==e.extractName(t.name)?r("th",{key:n,class:["vuetable-th-slot-"+e.extractArgs(t.name),t.titleClass,e.sortClass(t),{sortable:e.isSortable(t)}],style:{width:t.width},domProps:{innerHTML:e._s(e.renderTitle(t))},on:{click:function(r){return e.orderBy(t,r)}}}):e._e(),e._v(" "),"__sequence"==e.extractName(t.name)?r("th",{key:n,class:["vuetable-th-sequence",t.titleClass||"",e.sortClass(t)],style:{width:t.width},domProps:{innerHTML:e._s(e.renderTitle(t))}}):e._e(),e._v(" "),e.notIn(e.extractName(t.name),["__sequence","__checkbox","__component","__slot"])?r("th",{key:n,class:["vuetable-th-"+t.name,t.titleClass||"",e.sortClass(t)],style:{width:t.width},domProps:{innerHTML:e._s(e.renderTitle(t))}}):e._e()]:[r("th",{key:n,class:["vuetable-th-"+t.name,t.titleClass,e.sortClass(t),{sortable:e.isSortable(t)}],style:{width:t.width},attrs:{id:"_"+t.name},domProps:{innerHTML:e._s(e.renderTitle(t))},on:{click:function(r){return e.orderBy(t,r)}}})]]:e._e()]})],2)]),e._v(" "),r("tbody",{staticClass:"vuetable-body"},[e._l(e.tableData,function(t,n){return[r("tr",{key:n,class:e.onRowClass(t,n),attrs:{"item-index":n,render:e.onRowChanged(t)},on:{dblclick:function(r){return e.onRowDoubleClicked(t,r)},click:function(r){return e.onRowClicked(t,r)}}},[e._l(e.tableFields,function(i,s){return[i.visible?[e.isSpecialField(i.name)?["__sequence"==e.extractName(i.name)?r("td",{key:s,class:["vuetable-sequence",i.dataClass],domProps:{innerHTML:e._s(e.renderSequence(n))}}):e._e(),e._v(" "),"__handle"==e.extractName(i.name)?r("td",{key:s,class:["vuetable-handle",i.dataClass],domProps:{innerHTML:e._s(e.renderIconTag(["handle-icon",e.css.handleIcon]))}}):e._e(),e._v(" "),"__checkbox"==e.extractName(i.name)?r("td",{key:s,class:["vuetable-checkboxes",i.dataClass]},[r("input",{attrs:{type:"checkbox"},domProps:{checked:e.rowSelected(t,i.name)},on:{change:function(r){return e.toggleCheckbox(t,i.name,r)}}})]):e._e(),e._v(" "),"__component"===e.extractName(i.name)?r("td",{key:s,class:["vuetable-component",i.dataClass]},[r(e.extractArgs(i.name),{tag:"component",attrs:{"row-data":t,"row-index":n,"row-field":i.sortField}})],1):e._e(),e._v(" "),"__slot"===e.extractName(i.name)?r("td",{key:s,class:["vuetable-slot",i.dataClass]},[e._t(e.extractArgs(i.name),null,{rowData:t,rowIndex:n,rowField:i.sortField})],2):e._e()]:[e.hasCallback(i)?r("td",{key:s,class:i.dataClass,domProps:{innerHTML:e._s(e.callCallback(i,t))},on:{click:function(r){return e.onCellClicked(t,i,r)},dblclick:function(r){return e.onCellDoubleClicked(t,i,r)},contextmenu:function(r){return e.onCellRightClicked(t,i,r)}}}):r("td",{key:s,class:i.dataClass,domProps:{innerHTML:e._s(e.getObjectValue(t,i.name,""))},on:{click:function(r){return e.onCellClicked(t,i,r)},dblclick:function(r){return e.onCellDoubleClicked(t,i,r)},contextmenu:function(r){return e.onCellRightClicked(t,i,r)}}})]]:e._e()]})],2),e._v(" "),e.useDetailRow?[r("transition",{key:n,attrs:{name:e.detailRowTransition}},[e.isVisibleDetailRow(t[e.trackBy])?r("tr",{class:[e.css.detailRowClass],on:{click:function(r){return e.onDetailRowClick(t,r)}}},[r("td",{attrs:{colspan:e.countVisibleFields}},[r(e.detailRowComponent,{tag:"component",attrs:{"row-data":t,"row-index":n}})],1)]):e._e()])]:e._e()]}),e._v(" "),e.displayEmptyDataRow?[r("tr",[r("td",{staticClass:"vuetable-empty-result",attrs:{colspan:e.countVisibleFields},domProps:{innerHTML:e._s(e.noDataTemplate)}})])]:e._e(),e._v(" "),e.lessThanMinRows?e._l(e.blankRows,function(t){return r("tr",{key:t,staticClass:"blank-row"},[e._l(e.tableFields,function(t,n){return[t.visible?r("td",{key:n},[e._v(" ")]):e._e()]})],2)}):e._e()],2)])};n._withStripped=!0;var i=r(20),s=r.n(i),a={props:{fields:{type:Array,required:!0},loadOnStart:{type:Boolean,default:!0},apiUrl:{type:String,default:""},httpMethod:{type:String,default:"get",validator:e=>["get","post"].indexOf(e)>-1},reactiveApiUrl:{type:Boolean,default:!0},apiMode:{type:Boolean,default:!0},data:{type:[Array,Object],default:null},dataTotal:{type:Number,default:0},dataManager:{type:Function,default:null},dataPath:{type:String,default:"data"},paginationPath:{type:[String],default:"links.pagination"},queryParams:{type:[Object,Function],default:()=>({sort:"sort",page:"page",perPage:"per_page"})},appendParams:{type:Object,default:()=>({})},httpOptions:{type:Object,default:()=>({})},httpFetch:{type:Function,default:null},perPage:{type:Number,default:10},initialPage:{type:Number,default:1},sortOrder:{type:Array,default:()=>[]},multiSort:{type:Boolean,default:()=>!1},tableHeight:{type:String,default:null},multiSortKey:{type:String,default:"alt"},rowClassCallback:{type:[String,Function],default:""},rowClass:{type:[String,Function],default:""},detailRowComponent:{type:String,default:""},detailRowTransition:{type:String,default:""},trackBy:{type:String,default:"id"},css:{type:Object,default:()=>({tableClass:"ui blue selectable celled stackable attached table",loadingClass:"loading",ascendingIcon:"blue chevron up icon",descendingIcon:"blue chevron down icon",ascendingClass:"sorted-asc",descendingClass:"sorted-desc",sortableIcon:"",detailRowClass:"vuetable-detail-row",handleIcon:"grey sidebar icon",tableBodyClass:"vuetable-semantic-no-top vuetable-fixed-layout",tableHeaderClass:"vuetable-fixed-layout"})},minRows:{type:Number,default:0},silent:{type:Boolean,default:!1},noDataTemplate:{type:String,default:()=>"No Data Available"},showSortIcons:{type:Boolean,default:!0}},data(){return{eventPrefix:"vuetable:",tableFields:[],tableData:null,tablePagination:null,currentPage:this.initialPage,selectedTo:[],visibleDetailRows:[],lastScrollPosition:0,scrollBarWidth:"17px",scrollVisible:!1}},mounted(){if(this.normalizeFields(),this.normalizeSortOrder(),this.isFixedHeader&&(this.scrollBarWidth=this.getScrollBarWidth()+"px"),this.$nextTick(function(){this.fireEvent("initialized",this.tableFields)}),this.loadOnStart&&this.loadData(),this.isFixedHeader){let e=this.$el.getElementsByClassName("vuetable-body-wrapper")[0];null!=e&&e.addEventListener("scroll",this.handleScroll)}},destroyed(){let e=this.$el.getElementsByClassName("vuetable-body-wrapper")[0];null!=e&&e.removeEventListener("scroll",this.handleScroll)},computed:{version:()=>VERSION,useDetailRow(){return this.tableData&&this.tableData[0]&&""!==this.detailRowComponent&&void 0===this.tableData[0][this.trackBy]?(this.warn("You need to define unique row identifier in order for detail-row feature to work. Use `track-by` prop to define one!"),!1):""!==this.detailRowComponent},countVisibleFields(){return this.tableFields.filter(function(e){return e.visible}).length},countTableData(){return null===this.tableData?0:this.tableData.length},displayEmptyDataRow(){return 0===this.countTableData&&this.noDataTemplate.length>0},lessThanMinRows(){return null===this.tableData||0===this.tableData.length||this.tableData.length<this.minRows},blankRows(){return null===this.tableData||0===this.tableData.length?this.minRows:this.tableData.length>=this.minRows?0:this.minRows-this.tableData.length},isApiMode(){return this.apiMode},isDataMode(){return!this.apiMode},isFixedHeader(){return null!=this.tableHeight}},methods:{getScrollBarWidth(){const e=document.createElement("div"),t=document.createElement("div");e.style.visibility="hidden",e.style.width="100px",t.style.width="100%",e.appendChild(t),document.body.appendChild(e);const r=e.offsetWidth;e.style.overflow="scroll";const n=t.offsetWidth;return document.body.removeChild(e),r-n},handleScroll(e){let t=e.currentTarget.scrollLeft;if(t!=this.lastScrollPosition){let e=this.$el.getElementsByClassName("vuetable-head-wrapper")[0];null!=e&&(e.scrollLeft=t),this.lastScrollPosition=t}},normalizeFields(){if(void 0===this.fields)return void this.warn('You need to provide "fields" prop.');this.tableFields=[];let e,t=this;this.fields.forEach(function(r,n){e="string"==typeof r?{name:r,title:t.setTitle(r),titleClass:"",dataClass:"",callback:null,visible:!0}:{name:r.name,width:r.width,title:void 0===r.title?t.setTitle(r.name):r.title,sortField:r.sortField,titleClass:void 0===r.titleClass?"":r.titleClass,dataClass:void 0===r.dataClass?"":r.dataClass,callback:void 0===r.callback?"":r.callback,visible:void 0===r.visible||r.visible},t.tableFields.push(e)})},setData(e){if(null!=e){if(this.fireEvent("loading"),Array.isArray(e))return this.tableData=e,void this.fireEvent("loaded");this.tableData=this.getObjectValue(e,this.dataPath,null),this.tablePagination=this.getObjectValue(e,this.paginationPath,null),this.$nextTick(function(){this.fixHeader(),this.fireEvent("pagination-data",this.tablePagination),this.fireEvent("loaded")})}},setTitle(e){return this.isSpecialField(e)?"":this.titleCase(e)},getTitle:e=>"function"==typeof e.title?e.title():void 0===e.title?e.name.replace("."," "):e.title,renderTitle(e){let t=this.getTitle(e);if(t.length>0&&this.isInCurrentSortGroup(e)||this.hasSortableIcon(e)){let r=`opacity:${this.sortIconOpacity(e)};position:relative;float:right`;return t+" "+(this.showSortIcons?this.renderIconTag(["sort-icon",this.sortIcon(e)],`style="${r}"`):"")}return t},renderSequence(e){return this.tablePagination?this.tablePagination.from+e:e},renderNormalField(e,t){return this.hasCallback(e)?this.callCallback(e,t):this.getObjectValue(t,e.name,"")},isSpecialField:e=>"__"===e.slice(0,2),titleCase:e=>e.replace(/\w+/g,function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()}),camelCase(e,t="_"){let r=this;return e.split(t).map(function(e){return r.titleCase(e)}).join("")},notIn:(e,t)=>-1===t.indexOf(e),loadData(e=this.loadSuccess,t=this.loadFailed){if(!this.isDataMode)return this.fireEvent("loading"),this.httpOptions.params=this.getAppendParams(this.getAllQueryParams()),this.fetch(this.apiUrl,this.httpOptions).then(e,t).catch(()=>t());this.callDataManager()},fetch(e,t){return this.httpFetch?this.httpFetch(e,t):s.a[this.httpMethod](e,t)},loadSuccess(e){this.fireEvent("load-success",e);let t=this.transform(e.data);this.tableData=this.getObjectValue(t,this.dataPath,null),this.tablePagination=this.getObjectValue(t,this.paginationPath,null),null===this.tablePagination&&this.warn('vuetable: pagination-path "'+this.paginationPath+'" not found. It looks like the data returned from the sever does not have pagination information or you may have set it incorrectly.\nYou can explicitly suppress this warning by setting pagination-path="".'),this.$nextTick(function(){this.fixHeader(),this.fireEvent("pagination-data",this.tablePagination),this.fireEvent("loaded")})},fixHeader(){if(!this.isFixedHeader)return;let e=this.$el.getElementsByClassName("vuetable-body-wrapper")[0];null!=e&&(e.scrollHeight>e.clientHeight?this.scrollVisible=!0:this.scrollVisible=!1)},loadFailed(e){console.error("load-error",e),this.fireEvent("load-error",e),this.fireEvent("loaded")},transform(e){return this.parentFunctionExists("transform")?this.$parent.transform.call(this.$parent,e):e},parentFunctionExists(e){return""!==e&&"function"==typeof this.$parent[e]},callParentFunction(e,t,r=null){return this.parentFunctionExists(e)?this.$parent[e].call(this.$parent,t):r},fireEvent(e,t){this.$emit(this.eventPrefix+e,t)},warn(e){this.silent||console.warn(e)},getAllQueryParams(){let e={};return"function"==typeof this.queryParams?"object"!=typeof(e=this.queryParams(this.sortOrder,this.currentPage,this.perPage))?{}:e:(e[this.queryParams.sort]=this.getSortParam(),e[this.queryParams.page]=this.currentPage,e[this.queryParams.perPage]=this.perPage,e)},getSortParam(){return this.sortOrder&&""!=this.sortOrder.field?"function"==typeof this.$parent.getSortParam?this.$parent.getSortParam.call(this.$parent,this.sortOrder):this.getDefaultSortParam():""},getDefaultSortParam(){let e="";for(let t=0;t<this.sortOrder.length;t++){e+=(void 0===this.sortOrder[t].sortField?this.sortOrder[t].field:this.sortOrder[t].sortField)+"|"+this.sortOrder[t].direction+(t+1<this.sortOrder.length?",":"")}return e},getAppendParams(e){for(let t in this.appendParams)e[t]=this.appendParams[t];return e},extractName:e=>e.split(":")[0].trim(),extractArgs:e=>e.split(":")[1],isSortable:e=>!(void 0===e.sortField),isInCurrentSortGroup(e){return!1!==this.currentSortOrderPosition(e)},hasSortableIcon(e){return this.isSortable(e)&&""!=this.css.sortableIcon},currentSortOrderPosition(e){if(!this.isSortable(e))return!1;for(let t=0;t<this.sortOrder.length;t++)if(this.fieldIsInSortOrderPosition(e,t))return t;return!1},fieldIsInSortOrderPosition(e,t){return this.sortOrder[t].field===e.name&&this.sortOrder[t].sortField===e.sortField},orderBy(e,t){if(!this.isSortable(e))return;let r=this.multiSortKey.toLowerCase()+"Key";this.multiSort&&t[r]?this.multiColumnSort(e):this.singleColumnSort(e),this.currentPage=1,(this.apiMode||this.dataManager)&&this.loadData()},multiColumnSort(e){let t=this.currentSortOrderPosition(e);!1===t?this.sortOrder.push({field:e.name,sortField:e.sortField,direction:"asc"}):"asc"===this.sortOrder[t].direction?this.sortOrder[t].direction="desc":this.sortOrder.splice(t,1)},singleColumnSort(e){0===this.sortOrder.length&&this.clearSortOrder(),this.sortOrder.splice(1),this.fieldIsInSortOrderPosition(e,0)?this.sortOrder[0].direction="asc"===this.sortOrder[0].direction?"desc":"asc":this.sortOrder[0].direction="asc",this.sortOrder[0].field=e.name,this.sortOrder[0].sortField=e.sortField},clearSortOrder(){this.sortOrder.push({field:"",sortField:"",direction:"asc"})},sortClass(e){let t="",r=this.currentSortOrderPosition(e);return!1!==r&&(t="asc"==this.sortOrder[r].direction?this.css.ascendingClass:this.css.descendingClass),t},sortIcon(e){let t=this.css.sortableIcon,r=this.currentSortOrderPosition(e);return!1!==r&&(t="asc"==this.sortOrder[r].direction?this.css.ascendingIcon:this.css.descendingIcon),t},sortIconOpacity(e){let t=.3,r=this.sortOrder.length;return 1-r*t<.3&&(t=.7/(r-1)),1-this.currentSortOrderPosition(e)*t},hasCallback:e=>!!e.callback,callCallback(e,t){if(!this.hasCallback(e))return;if("function"==typeof e.callback)return e.callback(this.getObjectValue(t,e.name));let r=e.callback.split("|"),n=r.shift();if("function"==typeof this.$parent[n]){let i=this.getObjectValue(t,e.name);return r.length>0?this.$parent[n].apply(this.$parent,[i].concat(r)):this.$parent[n].call(this.$parent,i)}return null},getObjectValue(e,t,r){r=void 0===r?null:r;let n=e;if(""!=t.trim()){t.split(".").forEach(function(e){n=null!==n&&void 0!==n[e]&&null!==n[e]?n[e]:r})}return n},toggleCheckbox(e,t,r){let n=r.target.checked,i=this.trackBy;if(void 0===e[i])return void this.warn('__checkbox field: The "'+this.trackBy+'" field does not exist! Make sure the field you specify in "track-by" prop does exist.');let s=e[i];n?this.selectId(s):this.unselectId(s),this.$emit("vuetable:checkbox-toggled",n,e)},selectId(e){this.isSelectedRow(e)||this.selectedTo.push(e)},unselectId(e){this.selectedTo=this.selectedTo.filter(function(t){return t!==e})},isSelectedRow(e){return this.selectedTo.indexOf(e)>=0},rowSelected(e,t){let r=e[this.trackBy];return this.isSelectedRow(r)},checkCheckboxesState(e){if(!this.tableData)return;let t=this,r=this.trackBy,n="th.vuetable-th-checkbox-"+r+" input[type=checkbox]",i=document.querySelectorAll(n);void 0===i.forEach&&(i.forEach=function(e){[].forEach.call(i,e)});let s=this.tableData.filter(function(e){return t.selectedTo.indexOf(e[r])>=0});return s.length<=0?(i.forEach(function(e){e.indeterminate=!1}),!1):s.length<this.perPage?(i.forEach(function(e){e.indeterminate=!0}),!0):(i.forEach(function(e){e.indeterminate=!1}),!0)},toggleAllCheckboxes(e,t){let r=this,n=t.target.checked,i=this.trackBy;n?this.tableData.forEach(function(e){r.selectId(e[i])}):this.tableData.forEach(function(e){r.unselectId(e[i])}),this.$emit("vuetable:checkbox-toggled-all",n)},gotoPreviousPage(){this.currentPage>1&&(this.currentPage--,this.loadData())},gotoNextPage(){this.currentPage<this.tablePagination.last_page&&(this.currentPage++,this.loadData())},gotoPage(e){e!=this.currentPage&&e>0&&e<=this.tablePagination.last_page&&(this.currentPage=e,this.loadData())},isVisibleDetailRow(e){return this.visibleDetailRows.indexOf(e)>=0},showDetailRow(e){this.isVisibleDetailRow(e)||this.visibleDetailRows.push(e)},hideDetailRow(e){this.isVisibleDetailRow(e)&&this.visibleDetailRows.splice(this.visibleDetailRows.indexOf(e),1)},toggleDetailRow(e){this.isVisibleDetailRow(e)?this.hideDetailRow(e):this.showDetailRow(e)},showField(e){e<0||e>this.tableFields.length||(this.tableFields[e].visible=!0)},hideField(e){e<0||e>this.tableFields.length||(this.tableFields[e].visible=!1)},toggleField(e){e<0||e>this.tableFields.length||(this.tableFields[e].visible=!this.tableFields[e].visible)},renderIconTag(e,t=""){return void 0===this.css.renderIcon?`<i class="${e.join(" ")}" ${t}></i>`:this.css.renderIcon(e,t)},makePagination(e=null,t=null,r=null){return{total:e=null===e?this.dataTotal:e,per_page:t=null===t?this.perPage:t,current_page:r=null===r?this.currentPage:r,last_page:Math.ceil(e/t)||0,next_page_url:"",prev_page_url:"",from:(r-1)*t+1,to:Math.min(r*t,e)}},normalizeSortOrder(){this.sortOrder.forEach(function(e){e.sortField=e.sortField||e.field})},callDataManager(){if(null!==this.dataManager||null!==this.data)return Array.isArray(this.data)?this.setData(this.data):(this.normalizeSortOrder(),this.setData(this.dataManager?this.dataManager(this.sortOrder,this.makePagination()):this.data))},onRowClass(e,t){if(""===this.rowClassCallback)return"function"==typeof this.rowClass?this.rowClass(e,t):this.rowClass;this.warn('"row-class-callback" prop is deprecated, please use "row-class" prop instead.')},onRowChanged(e){return this.fireEvent("row-changed",e),!0},onRowClicked(e,t){return this.$emit(this.eventPrefix+"row-clicked",e,t),!0},onRowDoubleClicked(e,t){this.$emit(this.eventPrefix+"row-dblclicked",e,t)},onDetailRowClick(e,t){this.$emit(this.eventPrefix+"detail-row-clicked",e,t)},onCellClicked(e,t,r){this.$emit(this.eventPrefix+"cell-clicked",e,t,r)},onCellDoubleClicked(e,t,r){this.$emit(this.eventPrefix+"cell-dblclicked",e,t,r)},onCellRightClicked(e,t,r){this.$emit(this.eventPrefix+"cell-rightclicked",e,t,r)},changePage(e){"prev"===e?this.gotoPreviousPage():"next"===e?this.gotoNextPage():this.gotoPage(e)},reload(){return this.loadData()},refresh(){return this.currentPage=1,this.loadData()},resetData(){this.tableData=null,this.tablePagination=null,this.fireEvent("data-reset")}},watch:{multiSort(e,t){!1===e&&this.sortOrder.length>1&&(this.sortOrder.splice(1),this.loadData())},apiUrl(e,t){this.reactiveApiUrl&&e!==t&&this.refresh()},data(e,t){this.setData(e)},tableHeight(e,t){this.fixHeader()}}},o=(r(45),r(0)),l=Object(o.a)(a,n,[],!1,null,"15965e3b",null);l.options.__file="node_modules/vuetable-2/src/components/Vuetable.vue";t.a=l.exports},,,,,,function(e,t,r){"use strict";var n=r(1),i=r(9),s=r(29),a=r(6);function o(e){var t=new s(e),r=i(s.prototype.request,t);return n.extend(r,s.prototype,t),n.extend(r,t),r}var l=o(a);l.Axios=s,l.create=function(e){return o(n.merge(a,e))},l.Cancel=r(13),l.CancelToken=r(43),l.isCancel=r(12),l.all=function(e){return Promise.all(e)},l.spread=r(44),e.exports=l,e.exports.default=l},function(e,t,r){"use strict";var n=r(6),i=r(1),s=r(38),a=r(39),o=r(41),l=r(42);function c(e){this.defaults=e,this.interceptors={request:new s,response:new s}}c.prototype.request=function(e){"string"==typeof e&&(e=i.merge({url:arguments[0]},arguments[1])),(e=i.merge(n,this.defaults,{method:"get"},e)).baseURL&&!o(e.url)&&(e.url=l(e.baseURL,e.url));var t=[a,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)r=r.then(t.shift(),t.shift());return r},i.forEach(["delete","get","head"],function(e){c.prototype[e]=function(t,r){return this.request(i.merge(r||{},{method:e,url:t}))}}),i.forEach(["post","put","patch"],function(e){c.prototype[e]=function(t,r,n){return this.request(i.merge(n||{},{method:e,url:t,data:r}))}}),e.exports=c},function(e,t,r){"use strict";var n=r(1);e.exports=function(e,t){n.forEach(e,function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])})}},function(e,t,r){"use strict";var n=r(11);e.exports=function(e,t,r){var i=r.config.validateStatus;r.status&&i&&!i(r.status)?t(n("Request failed with status code "+r.status,r.config,null,r)):e(r)}},function(e,t,r){"use strict";e.exports=function(e,t,r,n){return e.config=t,r&&(e.code=r),e.response=n,e}},function(e,t,r){"use strict";var n=r(1);function i(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,r){if(!t)return e;var s;if(r)s=r(t);else if(n.isURLSearchParams(t))s=t.toString();else{var a=[];n.forEach(t,function(e,t){null!=e&&(n.isArray(e)&&(t+="[]"),n.isArray(e)||(e=[e]),n.forEach(e,function(e){n.isDate(e)?e=e.toISOString():n.isObject(e)&&(e=JSON.stringify(e)),a.push(i(t)+"="+i(e))}))}),s=a.join("&")}return s&&(e+=(-1===e.indexOf("?")?"?":"&")+s),e}},function(e,t,r){"use strict";var n=r(1);e.exports=function(e){var t,r,i,s={};return e?(n.forEach(e.split("\n"),function(e){i=e.indexOf(":"),t=n.trim(e.substr(0,i)).toLowerCase(),r=n.trim(e.substr(i+1)),t&&(s[t]=s[t]?s[t]+", "+r:r)}),s):s}},function(e,t,r){"use strict";var n=r(1);e.exports=n.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function i(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=i(window.location.href),function(t){var r=n.isString(t)?i(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0}},function(e,t,r){"use strict";var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function i(){this.message="String contains an invalid character"}i.prototype=new Error,i.prototype.code=5,i.prototype.name="InvalidCharacterError",e.exports=function(e){for(var t,r,s=String(e),a="",o=0,l=n;s.charAt(0|o)||(l="=",o%1);a+=l.charAt(63&t>>8-o%1*8)){if((r=s.charCodeAt(o+=.75))>255)throw new i;t=t<<8|r}return a}},function(e,t,r){"use strict";var n=r(1);e.exports=n.isStandardBrowserEnv()?{write:function(e,t,r,i,s,a){var o=[];o.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&o.push("expires="+new Date(r).toGMTString()),n.isString(i)&&o.push("path="+i),n.isString(s)&&o.push("domain="+s),!0===a&&o.push("secure"),document.cookie=o.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(e,t,r){"use strict";var n=r(1);function i(){this.handlers=[]}i.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},i.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},i.prototype.forEach=function(e){n.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=i},function(e,t,r){"use strict";var n=r(1),i=r(40),s=r(12),a=r(6);function o(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return o(e),e.headers=e.headers||{},e.data=i(e.data,e.headers,e.transformRequest),e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),n.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||a.adapter)(e).then(function(t){return o(e),t.data=i(t.data,t.headers,e.transformResponse),t},function(t){return s(t)||(o(e),t&&t.response&&(t.response.data=i(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},function(e,t,r){"use strict";var n=r(1);e.exports=function(e,t,r){return n.forEach(r,function(r){e=r(e,t)}),e}},function(e,t,r){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t,r){"use strict";e.exports=function(e,t){return e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,"")}},function(e,t,r){"use strict";var n=r(13);function i(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var r=this;e(function(e){r.reason||(r.reason=new n(e),t(r.reason))})}i.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},i.source=function(){var e;return{token:new i(function(t){e=t}),cancel:e}},e.exports=i},function(e,t,r){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},function(e,t,r){"use strict";var n=r(3);r.n(n).a}]]);
//# sourceMappingURL=vendors~content-seo.js.map