(this["webpackJsonpe-commerce-task-with-json-object"]=this["webpackJsonpe-commerce-task-with-json-object"]||[]).push([[0],{256:function(e,t,r){},257:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r(29),a=r.n(c),o=r(23),s=r(24),l=r(26),i=r(25),u=r(19),d=r(260),p=r(84),j=r(47),g=r(126),h=r(160),x=r(270),b=r(271),y=r(20),O=r(34),m=r.n(O),f=r(54),v="GET_ALL_CATEGORIES",C="GET_ALL_PRODUCTS",P="GET_PRODUCT_BY_ID",S="FILTER_PRODUCTS",R="SAVE_PRICE_RANGE",z="SAVE_COLORS",B="SAVE_CATEGORY_ID",w="SAVE_CURRENT_PAGE",I="GET_CATEGORY_BY_ID",k="SAVE_PAGE_SIZE",T="SAVE_SORT_VALUE",A="REMOVE_PRODUCT",V=r(148),W=r.n(V).a.create({baseURL:"https://my-json-server.typicode.com/halaelsaka2/json-server/"}),_="/category",H={getAll:function(){return W.get("".concat(_))},getCategoryById:function(e){return W.get("".concat(_,"/").concat(e),{maxContentLength:1e6})}};var E="/products",L=function(){var e=Object(f.a)(m.a.mark((function e(t,r,n,c,a,o,s,l){var i,u,d,p;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i="".concat(E,"?_page=").concat(o,"&"),r&&(i+="colors_like=".concat(r,"&")),s&&(i+="_limit=".concat(s,"&")),l&&(i="new"===l?i+"_sort=status&_order=asc&":i+"_sort=status&_order=desc&"),c&&(i+="sizes_like=".concat(c,"&")),a.length>0&&(u=a.map((function(e){return"type=".concat(e)})).join("&"),i+="".concat(u,"&")),n.length>0&&(d=n[0],p=n[1],i+="price_gte=".concat(d,"&price_lte=").concat(p,"&")),t&&(i+="categoryId=".concat(t,"&")),console.log(i),e.next=11,W.get(i,{maxContentLength:1e6});case 11:return e.abrupt("return",e.sent);case 12:case"end":return e.stop()}}),e)})));return function(t,r,n,c,a,o,s,l){return e.apply(this,arguments)}}(),D={getAll:function(){return W.get("".concat(E,"?_page=",1),{maxContentLength:1e6})},getProductById:function(e){return W.get("".concat(E,"/").concat(e),{maxContentLength:1e6})},getProductsByfilters:L};function U(e){return function(){var t=Object(f.a)(m.a.mark((function t(r){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D.getProductById(e);case 2:n=t.sent,r((c=n.data,{type:P,data:c}));case 4:case"end":return t.stop()}var c}),t)})));return function(e){return t.apply(this,arguments)}}()}function M(e,t,r,n,c,a,o,s){return function(){var l=Object(f.a)(m.a.mark((function l(i){var u;return m.a.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,D.getProductsByfilters(e,t,r,n,c,a,o,s);case 2:u=l.sent,i((d={products:u.data,count:u.headers["x-total-count"]},{type:S,data:d}));case 4:case"end":return l.stop()}var d}),l)})));return function(e){return l.apply(this,arguments)}}()}var F=r(22),N=r(4),G=function(e){Object(l.a)(r,e);var t=Object(i.a)(r);function r(){var e;Object(o.a)(this,r);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).categoryHandler=function(t){e.props.getCategoryById(t.key),e.props.saveCategoryId(t.key),e.props.getProductsByfilters(t.key,e.props.currentColor,e.props.currentPriceRange,e.props.currentSize,e.props.currentType,e.props.currentPage,e.props.pageSize,e.props.sortValue),"/home"!==e.props.location.pathname&&e.props.history.push("/home")},e}return Object(s.a)(r,[{key:"render",value:function(){return Object(N.jsxs)(p.a,{justify:"space-around",children:[Object(N.jsx)(j.a,{span:6}),Object(N.jsx)(j.a,{span:8,push:3,children:Object(N.jsx)(g.a,{onClick:this.categoryHandler,mode:"horizontal",style:{border:"none",backgroundColor:"transparent",fontWeight:"bold"},children:this.props.allCategories.map((function(e){return Object(N.jsx)(g.a.Item,{children:e.name},e.id)}))})}),Object(N.jsx)(j.a,{span:10,children:Object(N.jsxs)(p.a,{justify:"end",children:[Object(N.jsx)(j.a,{span:3,children:Object(N.jsx)(h.a,{style:{fontSize:"18px"}})}),Object(N.jsx)(j.a,{span:3,children:Object(N.jsx)(x.a,{style:{fontSize:"18px"}})}),Object(N.jsx)(j.a,{span:3,children:Object(N.jsx)(b.a,{style:{fontSize:"18px"}})})]})})]})}}]),r}(n.Component),X={saveCategoryId:function(e){return{type:B,data:e}},getProductsByfilters:M,getProductById:U,getCategoryById:function(e){return function(){var t=Object(f.a)(m.a.mark((function t(r){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,H.getCategoryById(e);case 2:n=t.sent,r((c=n.data,{type:I,data:c}));case 4:case"end":return t.stop()}var c}),t)})));return function(e){return t.apply(this,arguments)}}()}},$=Object(F.g)(Object(y.b)((function(e,t){return{allCategories:e.CategoryReducer.allCategories,currentColor:e.ProductReducer.currentColor,currentPage:e.ProductReducer.currentPage,currentPriceRange:e.ProductReducer.currentPriceRange,currentSize:e.ProductReducer.currentSize,currentType:e.ProductReducer.currentType,pageSize:e.ProductReducer.pageSize,sortValue:e.ProductReducer.sortValue}}),X)(G)),Y=r(265),K=r(272),J=Object(y.b)((function(e,t){return{categoryById:e.CategoryReducer.categoryById,productById:e.ProductReducer.productById}}),{})((function(e){var t=e.small,r=e.xSmall;return Object(N.jsxs)(Y.a,{style:{marginBottom:"2rem"},children:[Object(N.jsx)(Y.a.Item,{href:"",children:Object(N.jsx)(K.a,{})}),Object(N.jsx)(Y.a.Item,{style:{color:"gray",fontSize:t||r?"smaller":""},children:"All Products"}),Object.keys(e.categoryById).length>0?Object(N.jsx)(Y.a.Item,{style:{color:"gray",fontSize:t||r?"smaller":""},children:e.categoryById.name}):"",Object.keys(e.productById).length>0?Object(N.jsx)(Y.a.Item,{style:{color:"gray",fontSize:t||r?"smaller":""},children:e.productById.type}):""]})})),Q=r(88),Z=function(e){Object(l.a)(r,e);var t=Object(i.a)(r);function r(){var e;Object(o.a)(this,r);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).pageSizeHandler=function(t){console.log(t),e.props.savePageSize(t),e.props.getProductsByfilters(e.props.currentCategory,e.props.currentColor,e.props.currentPriceRange,e.props.currentSize,e.props.currentType,e.props.currentPage,t,e.props.sortValue)},e.sortHandler=function(t){e.props.saveSortValue(t),e.props.getProductsByfilters(e.props.currentCategory,e.props.currentColor,e.props.currentPriceRange,e.props.currentSize,e.props.currentType,e.props.currentPage,e.props.pageSize,t)},e}return Object(s.a)(r,[{key:"render",value:function(){var e,t=this.props,r=t.medium,n=t.small,c=t.xSmall;return Object(N.jsxs)(p.a,{gutter:[24,24],style:{marginBottom:"2rem"},justify:"space-between",children:[Object(N.jsx)(j.a,{lg:{span:4},xl:{span:4},md:{span:24},sm:{span:24},style:{fontSize:n||c?"smaller":""},children:Object.keys(this.props.categoryById).length>0?"".concat(null===(e=this.props.categoryById)||void 0===e?void 0:e.name,"'s Tops (").concat(this.props.productsCount,")"):"All Products (".concat(this.props.productsCount,")")}),Object(N.jsx)(j.a,{lg:{span:20},xl:{span:20},md:{span:24},sm:{span:24},xs:{span:24},children:Object(N.jsxs)(p.a,{justify:"end",children:[Object(N.jsx)(j.a,{lg:{span:10},xl:{span:10},md:{span:12},sm:{span:12},xs:{span:12},children:Object(N.jsxs)("div",{style:{display:"flex",justifyContent:"space-evenly",alignItems:"center"},children:[Object(N.jsx)("div",{style:{fontWeight:n||c?400:600,fontSize:n||c?"smaller":""},children:"Show:"}),Object(N.jsxs)(Q.a,{className:"custom-selector",size:n||c?"small":"middle",style:{width:r||n||c?"40%":"25%"},onChange:this.pageSizeHandler,children:[Object(N.jsx)(Q.a.Option,{value:10,children:"10"},10),Object(N.jsx)(Q.a.Option,{value:20,children:"20"},20),Object(N.jsx)(Q.a.Option,{value:30,children:"30"},30)]})]})}),Object(N.jsx)(j.a,{lg:{span:10},xl:{span:10},md:{span:12},sm:{span:12},xs:{span:12},children:Object(N.jsxs)("div",{style:{display:"flex",justifyContent:"space-evenly",alignItems:"center"},children:[Object(N.jsx)("div",{style:{fontWeight:n||c?400:600,fontSize:n||c?"smaller":""},children:"Sort:"}),Object(N.jsxs)(Q.a,{size:n||c?"small":"middle",className:"custom-selector",style:{width:r||n||c?"60%":"50%"},onChange:this.sortHandler,defaultValue:"new",children:[Object(N.jsx)(Q.a.Option,{value:"new",children:"New"},"new"),Object(N.jsx)(Q.a.Option,{value:"popular",children:"Popular"},"popular")]})]})})]})})]})}}]),r}(n.Component),q={savePageSize:function(e){return{type:k,data:e}},getProductsByfilters:M,saveSortValue:function(e){return{type:T,data:e}}},ee=Object(y.b)((function(e,t){return{productsCount:e.ProductReducer.productsCount,categoryById:e.CategoryReducer.categoryById,currentCategory:e.CategoryReducer.currentCategory,currentPage:e.ProductReducer.currentPage,currentPriceRange:e.ProductReducer.currentPriceRange,currentSize:e.ProductReducer.currentSize,currentType:e.ProductReducer.currentType,currentColor:e.ProductReducer.currentColor,sortValue:e.ProductReducer.sortValue}}),q)(Z),te=r(261),re=r(263),ne=te.a.Meta,ce=function(e){Object(l.a)(r,e);var t=Object(i.a)(r);function r(){var e;Object(o.a)(this,r);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).clickProductHandler=function(t){e.props.history.push("/viewProduct/".concat(t))},e.paginateHandler=function(t){console.log(t),e.props.getProductsByfilters(e.props.currentCategory,e.props.currentColor,e.props.currentPriceRange,e.props.currentSize,e.props.currentType,t,e.props.pageSize,e.props.sortValue)},e}return Object(s.a)(r,[{key:"render",value:function(){var e=this;return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(p.a,{gutter:[16,16],children:this.props.allProductsWithFilter.length>0?this.props.allProductsWithFilter.map((function(t){return Object(N.jsx)(j.a,{lg:{span:8},xl:{span:8},md:{span:12},sm:{span:24},children:Object(N.jsx)(te.a,{onClick:function(){return e.clickProductHandler(t.id)},hoverable:!0,style:{width:"80%"},cover:Object(N.jsx)("img",{alt:"example",src:t.images[0]}),children:Object(N.jsx)(ne,{title:t.name,description:t.discount?Object(N.jsxs)(p.a,{gutter:16,children:[Object(N.jsx)(j.a,{children:Object(N.jsxs)("h3",{style:{fontWeight:400,color:"red"},children:["$",(null===t||void 0===t?void 0:t.price)-(null===t||void 0===t?void 0:t.discount)/100*(null===t||void 0===t?void 0:t.price)]})}),Object(N.jsx)(j.a,{children:Object(N.jsxs)("h3",{style:{fontWeight:300,textDecoration:"line-through",color:"gray"},children:["$",null===t||void 0===t?void 0:t.price]})})]}):Object(N.jsx)(p.a,{gutter:16,children:Object(N.jsx)(j.a,{children:Object(N.jsxs)("h3",{style:{fontWeight:400},children:["$",null===t||void 0===t?void 0:t.price]})})})})})},t.id)})):Object(N.jsx)("div",{children:"NoProducts"})}),Object(N.jsx)(p.a,{gutter:24,children:Object(N.jsx)(j.a,{span:24,align:"right",style:{marginTop:"2rem"},children:Object(N.jsx)(re.a,{total:this.props.productsCount,responsive:!0,hideOnSinglePage:!0,onChange:this.paginateHandler,pageSize:this.props.pageSize})})})]})}}]),r}(n.Component),ae={saveCurrentPage:function(e){return{type:w,data:e}},getProductsByfilters:M},oe=Object(F.g)(Object(y.b)((function(e,t){return{allProductsWithFilter:e.ProductReducer.allProductsWithFilter,productsCount:e.ProductReducer.productsCount,currentCategory:e.CategoryReducer.currentCategory,currentColor:e.ProductReducer.currentColor,currentSize:e.ProductReducer.currentSize,currentPriceRange:e.ProductReducer.currentPriceRange,currentType:e.ProductReducer.currentType,pageSize:e.ProductReducer.pageSize,sortValue:e.ProductReducer.sortValue}}),ae)(ce)),se=r(264),le=r(262),ie=r(259),ue=r(269),de=r(113),pe=r(81),je=se.a.Panel,ge=function(e){Object(l.a)(r,e);var t=Object(i.a)(r);function r(e){var n;return Object(o.a)(this,r),(n=t.call(this,e)).rangePriceHandler=function(e,t){n.setState({rangeValue:e})},n.collapseHandler=function(e){e.length>0?n.setState({collapsed:!0}):n.setState({collapsed:!1})},n.afterChangeRangePriceHandler=function(e,t){n.props.savePriceRange(e),n.props.getProductsByfilters(n.props.currentCategory,n.props.currentColor,e,n.props.currentSize,n.props.currentType,n.props.currentPage,n.props.pageSize,n.props.sortValue)},n.clearRangeHandler=function(e){n.setState({rangeValue:[]}),n.state.rangeValue.length>0&&(n.props.savePriceRange([]),n.props.getProductsByfilters(n.props.currentCategory,n.props.currentColor,[],n.props.currentSize,n.props.currentType,n.props.currentPage,n.props.pageSize,n.props.sortValue))},n.state={rangeValue:[],collapsed:!1},n}return Object(s.a)(r,[{key:"render",value:function(){var e=this.state,t=e.collapsed,r=e.rangeValue;return Object(N.jsx)(p.a,{gutter:{lg:24,md:20,sm:16,xs:16},style:{marginBottom:"2rem"},children:Object(N.jsx)(j.a,{lg:24,md:24,sm:24,xs:24,children:Object(N.jsx)(te.a,{style:{width:"100%",borderColor:"lightgray"},bodyStyle:{padding:t?"13px 13px 0px 13px":"13px 13px 13px 13px"},children:Object(N.jsx)(p.a,{gutter:{lg:24,md:20,sm:16,xs:16},children:Object(N.jsx)(j.a,{lg:24,md:24,sm:24,xs:24,children:Object(N.jsx)(se.a,{defaultActiveKey:["1"],ghost:!0,style:{padding:0,color:"red"},expandIconPosition:"right",onChange:this.collapseHandler,expandIcon:function(){return t?Object(N.jsx)(ue.a,{}):Object(N.jsx)(de.a,{})},className:"custom-collapse",children:Object(N.jsxs)(je,{header:Object(N.jsx)("div",{style:{fontWeight:"bold"},children:"Price Range"}),children:[Object(N.jsx)(p.a,{gutter:24,children:Object(N.jsxs)(j.a,{span:24,children:[Object(N.jsx)(le.a,{style:{width:"100%"},max:1e3,range:{draggableTrack:!0},value:r,onChange:this.rangePriceHandler,onAfterChange:this.afterChangeRangePriceHandler})," "]})}),Object(N.jsx)(ie.a,{}),Object(N.jsxs)(p.a,{style:{cursor:"pointer"},children:[Object(N.jsx)(j.a,{children:Object(N.jsx)(pe.a,{onMouseUp:this.clearRangeHandler})}),Object(N.jsx)(j.a,{children:Object(N.jsx)("h4",{onMouseUp:this.clearRangeHandler,children:"Clear"})})]})]},"1")})})})})})})}}]),r}(n.Component),he={getProductsByfilters:M,savePriceRange:function(e){return{type:R,data:e}}},xe=Object(y.b)((function(e,t){return{currentCategory:e.CategoryReducer.currentCategory,currentPage:e.ProductReducer.currentPage,currentColor:e.ProductReducer.currentColor,currentSize:e.ProductReducer.currentSize,currentType:e.ProductReducer.currentType,pageSize:e.ProductReducer.pageSize,sortValue:e.ProductReducer.sortValue}}),he)(ge),be=r(267),ye=se.a.Panel,Oe=be.a.Group,me=["T-shirts","Sweatshirts","Tank Tops","Dress shirts"],fe=function(e){Object(l.a)(r,e);var t=Object(i.a)(r);function r(e){var n;return Object(o.a)(this,r),(n=t.call(this,e)).onChange=function(e){console.log(e),n.setState({checkedList:e}),n.props.saveProductType(e),n.props.getProductsByfilters(n.props.currentCategory,n.props.currentColor,n.props.currentPriceRange,n.props.currentSize,e,n.props.currentPage,n.props.pageSize,n.props.sortValue)},n.collapseHandler=function(e){e.length>0?n.setState({collapsed:!0}):n.setState({collapsed:!1})},n.clearRangeHandler=function(e){n.setState({checkedList:[]}),n.state.checkedList.length>0&&(n.props.saveProductType([]),n.props.getProductsByfilters(n.props.currentCategory,n.props.currentColor,n.props.currentPriceRange,n.props.currentSize,[],n.props.currentPage,n.props.pageSize,n.props.sortValue))},n.state={collapsed:!1,checkedList:[]},n}return Object(s.a)(r,[{key:"render",value:function(){var e=this.state.collapsed;return Object(N.jsx)(p.a,{gutter:{lg:24,md:20,sm:16,xs:16},style:{marginBottom:"2rem"},children:Object(N.jsx)(j.a,{lg:24,md:24,sm:24,xs:24,children:Object(N.jsx)(te.a,{style:{width:"100%",borderColor:"lightgray"},bodyStyle:{padding:e?"13px 13px 0px 13px":"13px 13px 13px 13px"},children:Object(N.jsx)(p.a,{gutter:{lg:24,md:20,sm:16,xs:16},children:Object(N.jsx)(j.a,{lg:24,md:24,sm:24,xs:24,align:"left",children:Object(N.jsx)(se.a,{defaultActiveKey:["1"],ghost:!0,style:{padding:0,color:"red"},expandIconPosition:"right",onChange:this.collapseHandler,expandIcon:function(){return e?Object(N.jsx)(ue.a,{}):Object(N.jsx)(de.a,{})},className:"custom-collapse",children:Object(N.jsxs)(ye,{header:Object(N.jsx)("div",{style:{fontWeight:"bold"},children:"Product Types"}),children:[Object(N.jsx)(p.a,{gutter:24,children:Object(N.jsx)(j.a,{span:24,children:Object(N.jsx)(Oe,{style:{display:"flex",flexDirection:"column"},options:me,value:this.state.checkedList,onChange:this.onChange})})}),Object(N.jsx)(ie.a,{}),Object(N.jsxs)(p.a,{style:{cursor:"pointer"},children:[Object(N.jsx)(j.a,{children:Object(N.jsx)(pe.a,{onMouseUp:this.clearRangeHandler})}),Object(N.jsx)(j.a,{children:Object(N.jsx)("h4",{onMouseUp:this.clearRangeHandler,children:"Clear"})})]})]},"1")})})})})})})}}]),r}(n.Component),ve={getProductsByfilters:M,saveProductType:function(e){return{type:"SAVE_PRODUCT_TYPE",data:e}}},Ce=Object(y.b)((function(e,t){return{currentCategory:e.CategoryReducer.currentCategory,currentPage:e.ProductReducer.currentPage,currentColor:e.ProductReducer.currentColor,currentSize:e.ProductReducer.currentSize,currentPriceRange:e.ProductReducer.currentPriceRange,pageSize:e.ProductReducer.pageSize,sortValue:e.ProductReducer.sortValue}}),ve)(fe),Pe=r(266),Se=se.a.Panel,Re=function(e){Object(l.a)(r,e);var t=Object(i.a)(r);function r(e){var n;return Object(o.a)(this,r),(n=t.call(this,e)).collapseHandler=function(e){e.length>0?n.setState({collapsed:!0}):n.setState({collapsed:!1})},n.clearRangeHandler=function(e){n.setState({sizeValue:""}),n.state.sizeValue&&(n.props.saveSize(""),n.props.getProductsByfilters(n.props.currentCategory,n.props.currentColor,n.props.currentPriceRange,"",n.props.currentType,n.props.currentPage,n.props.pageSize,n.props.sortValue))},n.handleSizeChange=function(e){var t=e.target.value;n.props.saveSize(t),n.props.getProductsByfilters(n.props.currentCategory,n.props.currentColor,n.props.currentPriceRange,t,n.props.currentType,n.props.currentPage,n.props.pageSize,n.props.sortValue),n.setState({sizeValue:t})},n.state={collapsed:!1,sizeValue:""},n}return Object(s.a)(r,[{key:"render",value:function(){var e=this.state,t=e.sizeValue,r=e.collapsed;return Object(N.jsx)(p.a,{gutter:{lg:24,md:20,sm:16,xs:16},style:{marginBottom:"2rem"},children:Object(N.jsx)(j.a,{lg:24,md:24,sm:24,xs:24,children:Object(N.jsx)(te.a,{style:{width:"100%",borderColor:"lightgray"},bodyStyle:{padding:r?"13px 13px 0px 13px":"13px 13px 13px 13px"},children:Object(N.jsx)(p.a,{gutter:{lg:24,md:20,sm:16,xs:16},children:Object(N.jsx)(j.a,{lg:24,md:24,sm:24,xs:24,children:Object(N.jsx)(se.a,{defaultActiveKey:["1"],ghost:!0,style:{padding:0,color:"red"},expandIconPosition:"right",onChange:this.collapseHandler,expandIcon:function(){return r?Object(N.jsx)(ue.a,{}):Object(N.jsx)(de.a,{})},className:"custom-collapse",children:Object(N.jsxs)(Se,{header:Object(N.jsx)("div",{style:{fontWeight:"bold"},children:"Size"}),children:[Object(N.jsx)(p.a,{gutter:24,children:Object(N.jsx)(j.a,{span:24,style:{padding:0},children:Object(N.jsxs)(Pe.a.Group,{onChange:this.handleSizeChange,value:t,style:{marginBottom:8,width:"100%",display:"flex"},children:[Object(N.jsx)(Pe.a.Button,{style:{padding:"0 10px",fontSize:"10px",fontWeight:600,textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center",width:"16.6%"},value:"XS",children:"XS"}),Object(N.jsx)(Pe.a.Button,{style:{padding:"0 10px",fontSize:"10px",fontWeight:600,textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center",width:"16.6%"},value:"S",children:"S"}),Object(N.jsx)(Pe.a.Button,{style:{padding:"0 10px",fontSize:"10px",fontWeight:600,textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center",width:"16.6%"},value:"M",children:"M"}),Object(N.jsx)(Pe.a.Button,{style:{padding:"0 10px",fontSize:"10px",fontWeight:600,textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center",width:"16.6%"},value:"L",children:"L"}),Object(N.jsx)(Pe.a.Button,{style:{padding:"0 10px",fontSize:"10px",fontWeight:600,textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center",width:"16.6%"},value:"XL",children:"XL"}),Object(N.jsx)(Pe.a.Button,{style:{padding:"0 10px",fontSize:"10px",fontWeight:600,textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center",width:"16.6%"},value:"XXL",children:"XXL"})]})})}),Object(N.jsx)(ie.a,{}),Object(N.jsxs)(p.a,{style:{cursor:"pointer"},children:[Object(N.jsx)(j.a,{children:Object(N.jsx)(pe.a,{onMouseUp:this.clearRangeHandler})}),Object(N.jsx)(j.a,{children:Object(N.jsx)("h4",{onMouseUp:this.clearRangeHandler,children:"Clear"})})]})]},"1")})})})})})})}}]),r}(n.Component),ze={getProductsByfilters:M,saveSize:function(e){return{type:"SAVE_SIZE",data:e}}},Be=Object(y.b)((function(e,t){return{currentCategory:e.CategoryReducer.currentCategory,currentPage:e.ProductReducer.currentPage,currentPriceRange:e.ProductReducer.currentPriceRange,currentColor:e.ProductReducer.currentColor,currentType:e.ProductReducer.currentType,pageSize:e.ProductReducer.pageSize,sortValue:e.ProductReducer.sortValue}}),ze)(Re),we=se.a.Panel,Ie=function(e){Object(l.a)(r,e);var t=Object(i.a)(r);function r(e){var n;return Object(o.a)(this,r),(n=t.call(this,e)).collapseHandler=function(e){e.length>0?n.setState({collapsed:!0}):n.setState({collapsed:!1})},n.clearColorHandler=function(e){n.setState({color:""}),n.state.color&&(n.props.saveColor(""),n.props.getProductsByfilters(n.props.currentCategory,"",n.props.currentPriceRange,n.props.currentSize,n.props.currentType,n.props.currentPage,n.props.pageSize,n.props.sortValue))},n.handleColorChange=function(e){var t=e.target.value;n.props.saveColor(t),n.props.getProductsByfilters(n.props.currentCategory,t,n.props.currentPriceRange,n.props.currentSize,n.props.currentType,n.props.currentPage,n.props.pageSize,n.props.sortValue),n.setState({color:t})},n.state={collapsed:!1,color:""},n}return Object(s.a)(r,[{key:"render",value:function(){var e=this.state,t=e.color,r=e.collapsed;return Object(N.jsx)(p.a,{gutter:{lg:24,md:20,sm:16,xs:16},style:{marginBottom:"2rem"},children:Object(N.jsx)(j.a,{lg:24,md:24,sm:24,xs:24,children:Object(N.jsx)(te.a,{style:{width:"100%",borderColor:"lightgray"},bodyStyle:{padding:r?"13px 13px 0px 13px":"13px 13px 13px 13px"},children:Object(N.jsx)(p.a,{gutter:{lg:24,md:20,sm:16,xs:16},children:Object(N.jsx)(j.a,{lg:24,md:24,sm:24,xs:24,children:Object(N.jsx)(se.a,{defaultActiveKey:["1"],ghost:!0,style:{padding:0,color:"red"},expandIconPosition:"right",onChange:this.collapseHandler,expandIcon:function(){return r?Object(N.jsx)(ue.a,{}):Object(N.jsx)(de.a,{})},className:"custom-collapse",children:Object(N.jsxs)(we,{header:Object(N.jsx)("div",{style:{fontWeight:"bold"},children:"Color"}),children:[Object(N.jsx)(p.a,{gutter:24,children:Object(N.jsx)(j.a,{span:24,style:{padding:0},children:Object(N.jsxs)(Pe.a.Group,{onChange:this.handleColorChange,value:t,style:{marginBottom:8,width:"100%",display:"flex"},children:[Object(N.jsx)(Pe.a.Button,{style:{padding:"0 10px",fontSize:"10px",fontWeight:600,textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center",width:"16.6%"},value:"yellow",children:Object(N.jsx)("div",{style:{backgroundColor:"yellow",width:"15px",height:"15px"}})}),Object(N.jsx)(Pe.a.Button,{style:{padding:"0 10px",fontSize:"10px",fontWeight:600,textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center",width:"16.6%"},value:"red",children:Object(N.jsx)("div",{style:{backgroundColor:"red",width:"15px",height:"15px"}})}),Object(N.jsx)(Pe.a.Button,{style:{padding:"0 10px",fontSize:"10px",fontWeight:600,textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center",width:"16.6%"},value:"black",children:Object(N.jsx)("div",{style:{backgroundColor:"black",width:"15px",height:"15px"}})}),Object(N.jsx)(Pe.a.Button,{style:{padding:"0 10px",fontSize:"10px",fontWeight:600,textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center",width:"16.6%"},value:"brown",children:Object(N.jsx)("div",{style:{backgroundColor:"brown",width:"15px",height:"15px"}})}),Object(N.jsx)(Pe.a.Button,{style:{padding:"0 10px",fontSize:"10px",fontWeight:600,textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center",width:"16.6%"},value:"green",children:Object(N.jsx)("div",{style:{backgroundColor:"green",width:"15px",height:"15px"}})}),Object(N.jsx)(Pe.a.Button,{style:{padding:"0 10px",fontSize:"10px",fontWeight:600,textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center",width:"16.6%"},value:"blue",children:Object(N.jsx)("div",{style:{backgroundColor:"blue",width:"15px",height:"15px"}})})]})})}),Object(N.jsx)(ie.a,{}),Object(N.jsxs)(p.a,{style:{cursor:"pointer"},children:[Object(N.jsx)(j.a,{children:Object(N.jsx)(pe.a,{onMouseUp:this.clearColorHandler})}),Object(N.jsx)(j.a,{children:Object(N.jsx)("h4",{onMouseUp:this.clearColorHandler,children:"Clear"})})]})]},"1")})})})})})})}}]),r}(n.Component),ke={getProductsByfilters:M,saveColor:function(e){return{type:z,data:e}}},Te=Object(y.b)((function(e,t){return{currentCategory:e.CategoryReducer.currentCategory,currentPage:e.ProductReducer.currentPage,currentPriceRange:e.ProductReducer.currentPriceRange,currentSize:e.ProductReducer.currentSize,currentType:e.ProductReducer.currentType,pageSize:e.ProductReducer.pageSize,sortValue:e.ProductReducer.sortValue}}),ke)(Ie),Ae=d.a.Content,Ve=d.a.Sider,We=function(e){Object(l.a)(r,e);var t=Object(i.a)(r);function r(e){var n;return Object(o.a)(this,r),(n=t.call(this,e)).componentDidMount=function(){0===n.props.allProductsWithFilter.length&&n.props.getAll()},n.state={broken:!1},n}return Object(s.a)(r,[{key:"render",value:function(){var e=this,t=this.state.broken?{position:"absolute",left:0,top:64}:{},r=this.props,n=r.medium,c=r.small,a=r.xSmall,o=r.large;return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)(Ve,{breakpoint:"lg",collapsedWidth:"0",onBreakpoint:function(t){console.log(t),e.setState({broken:t})},onCollapse:function(e,t){console.log(e,t)},zeroWidthTriggerStyle:{color:"black",backgroundColor:"white",border:"1px solid black",right:"-35px"},style:Object(u.a)(Object(u.a)({zIndex:10},t),{},{backgroundColor:"white"}),width:240,theme:"light",children:[Object(N.jsx)(Ce,{}),Object(N.jsx)(xe,{}),Object(N.jsx)(Be,{}),Object(N.jsx)(Te,{})]}),Object(N.jsxs)(Ae,{style:{margin:o?"0px 0px 0px 10px":"0px 0px 0px 30px"},children:[Object(N.jsx)(ee,{medium:n,small:c,xSmall:a}),Object(N.jsx)(oe,{})]})]})}}]),r}(n.Component),_e={getAll:function(){return function(){var e=Object(f.a)(m.a.mark((function e(t){var r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.getAll();case 2:r=e.sent,t((n={products:r.data,count:r.headers["x-total-count"]},{type:C,data:n}));case 4:case"end":return e.stop()}var n}),e)})));return function(t){return e.apply(this,arguments)}}()}},He=Object(y.b)((function(e,t){return{allProductsWithFilter:e.ProductReducer.allProductsWithFilter}}),_e)(We),Ee=r(158),Le=r(116),De=r(268),Ue=r(273),Me=r(159),Fe=function(e){Object(l.a)(r,e);var t=Object(i.a)(r);function r(e){var n;return Object(o.a)(this,r),(n=t.call(this,e)).componentDidUpdate=function(e,t,r){var c;e.productById!==n.props.productById&&n.setState({currentImage:Object.keys(n.props.productById).length>0?null===(c=n.props.productById)||void 0===c?void 0:c.images[0]:""})},n.componentWillUnmount=function(){n.props.removeProduct()},n.handleImageHandler=function(e){console.log(e),n.setState({currentImage:e})},n.plusHandler=function(){var e;n.state.count===(null===(e=n.props.productById)||void 0===e?void 0:e.quantity)?Ee.b.info("This Is Quantity Of Product"):n.setState({count:n.state.count+1})},n.minusHandler=function(){n.state.count>1&&n.setState({count:n.state.count-1})},n.state={count:1,currentImage:""},n}return Object(s.a)(r,[{key:"render",value:function(){var e,t,r,n,c,a,o,s,l,i,u=this,d=this.state.count,g=this.props,h=g.small,x=g.xSmall;return Object(N.jsxs)(p.a,{gutter:[16,16],children:[Object(N.jsx)(j.a,{lg:{span:12},xl:{span:12},md:{span:12},sm:{span:24},xs:{span:24},children:Object(N.jsxs)(p.a,{gutter:24,children:[Object(N.jsx)(j.a,{span:4,children:Object.keys(this.props.productById).length>0&&(null===(e=this.props.productById)||void 0===e?void 0:e.images.map((function(e,t){return Object(N.jsx)(te.a,{hoverable:!0,style:{backgroundColor:"transparent",marginBottom:"1rem"},bodyStyle:{width:"100%",display:"none"},size:"small",cover:Object(N.jsx)("img",{alt:"example",src:e}),onClick:function(){return u.handleImageHandler(e)}},t)})))}),Object(N.jsx)(j.a,{span:16,children:Object(N.jsx)(te.a,{hoverable:!0,style:{backgroundColor:"transparent"},bodyStyle:{width:"100%",display:"none"},cover:Object(N.jsx)("img",{alt:"example",src:this.state.currentImage})})})]})}),Object(N.jsxs)(j.a,{lg:{span:12},xl:{span:12},md:{span:12},sm:{span:24},xs:{span:24},children:[(null===(t=this.props.productById)||void 0===t?void 0:t.discount)?Object(N.jsx)(p.a,{children:Object(N.jsx)(Le.a,{type:"primary",size:"small",style:{backgroundColor:" red",border:"none",borderRadius:"50px"},children:"sale"})}):"",Object(N.jsx)(p.a,{children:Object(N.jsx)("h2",{style:{fontWeight:300},children:this.props.productById.name})}),(null===(r=this.props.productById)||void 0===r?void 0:r.discount)?Object(N.jsxs)(p.a,{gutter:{lg:12,md:12,sm:24,xm:24},children:[Object(N.jsx)(j.a,{lg:4,md:4,sm:6,xs:6,children:Object(N.jsxs)("h3",{style:{fontWeight:400,color:"red"},children:["$",(null===(n=this.props.productById)||void 0===n?void 0:n.price)-(null===(c=this.props.productById)||void 0===c?void 0:c.discount)/100*(null===(a=this.props.productById)||void 0===a?void 0:a.price)]})}),Object(N.jsx)(j.a,{lg:4,md:4,sm:6,xs:6,children:Object(N.jsxs)("h3",{style:{fontWeight:300,textDecoration:"line-through",color:"gray"},children:["$",null===(o=this.props.productById)||void 0===o?void 0:o.price]})})]}):Object(N.jsx)(p.a,{gutter:12,children:Object(N.jsx)(j.a,{span:4,children:Object(N.jsxs)("h3",{style:{fontWeight:500},children:["$",null===(s=this.props.productById)||void 0===s?void 0:s.price]})})}),Object(N.jsx)(p.a,{children:Object(N.jsx)("span",{style:{marginTop:"1rem",marginBottom:"10px",fontSize:"smaller"},children:"Colors:"})}),Object(N.jsx)(p.a,{gutter:24,children:Object(N.jsx)(j.a,{xl:4,lg:4,md:4,sm:3,xs:6,children:Object(N.jsx)(De.b,{children:Object.keys(this.props.productById).length>0&&(null===(l=this.props.productById)||void 0===l?void 0:l.colors.map((function(e){return Object(N.jsx)(te.a,{size:"small",children:Object(N.jsx)(te.a,{size:"small",type:"inner",style:{backgroundColor:e}})},e)})))})})}),Object(N.jsx)(p.a,{children:Object(N.jsx)("span",{style:{marginTop:"1rem",marginBottom:"10px",fontSize:"smaller"},children:"Size:"})}),Object(N.jsx)(p.a,{gutter:8,children:Object(N.jsx)(j.a,{span:7,children:Object(N.jsx)(Q.a,{className:"custom-selector",placeholder:"Choose Size",style:{width:h||x?"":"100%"},dropdownStyle:{borderRadius:"20px"},size:h||x?"small":"middle",children:Object.keys(this.props.productById).length>0&&(null===(i=this.props.productById)||void 0===i?void 0:i.sizes.map((function(e){return Object(N.jsx)(Q.a.Option,{value:e,children:e},e)})))})})}),Object(N.jsx)(p.a,{children:Object(N.jsx)("span",{style:{marginTop:"1rem",marginBottom:"10px",fontSize:"smaller"},children:"Quantity:"})}),Object(N.jsxs)(p.a,{gutter:{lg:12,xl:12,sm:24,xs:24},children:[Object(N.jsx)(j.a,{xl:6,lg:6,md:8,sm:6,xs:x?10:h?6:"",children:Object(N.jsxs)(De.b,{style:{border:"1px solid lightgray",borderRadius:"50px",padding:h||x?"1px 15px":"5px 18px"},children:[Object(N.jsx)(Ue.a,{style:{color:1===d?"lightgray":"black"},onClick:this.minusHandler}),d,Object(N.jsx)(Me.a,{onClick:this.plusHandler})]})}),Object(N.jsx)(j.a,{xl:6,lg:6,md:8,sm:6,xs:x?10:h?6:"",children:Object(N.jsx)(Le.a,{type:"primary",style:{color:"black",fontWeight:h||x?400:600,border:"none",borderRadius:"50px",backgroundColor:"#FBB03B",padding:h||x?"2px 22px":"4px 25px"},size:h||x?"small":"middle",children:"ADD TO CART"})})]})]})]})}}]),r}(n.Component),Ne={removeProduct:function(){return{type:A,data:{}}}},Ge=Object(y.b)((function(e,t){return{productById:e.ProductReducer.productById}}),Ne)(Fe),Xe=function(e){Object(l.a)(r,e);var t=Object(i.a)(r);function r(){var e;Object(o.a)(this,r);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).componentDidMount=function(){e.props.getProductById(e.props.match.params.id)},e}return Object(s.a)(r,[{key:"render",value:function(){var e=this.props,t=e.medium,r=e.small,n=e.xSmall,c=e.large;return Object(N.jsx)(Ge,{medium:t,large:c,small:r,xSmall:n})}}]),r}(n.Component),$e={getProductById:U},Ye=Object(y.b)((function(e,t){return{}}),$e)(Xe),Ke=d.a.Header,Je=d.a.Content,Qe=d.a.Footer,Ze=function(e){Object(l.a)(r,e);var t=Object(i.a)(r);function r(e){var n;return Object(o.a)(this,r),(n=t.call(this,e)).handleResize=function(e){n.setState({windowWidth:window.innerWidth})},n.state={windowWidth:window.innerWidth},n}return Object(s.a)(r,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.handleResize),this.props.getAll()}},{key:"render",value:function(){var e=this.state.windowWidth<768,t=this.state.windowWidth<576,r=this.state.windowWidth<480,n=this.state.windowWidth<992;return Object(N.jsx)(d.a,{children:Object(N.jsxs)(d.a,{style:{backgroundColor:"white"},children:[Object(N.jsx)(Ke,{className:"site-layout-sub-header-background",style:{padding:"0 40px",backgroundColor:"white",borderBottom:"1px solid lightgray",borderColor:"lightgray"},children:Object(N.jsx)($,{})}),Object(N.jsxs)(Je,{style:{margin:"30px 40px 0"},children:[Object(N.jsx)(J,{medium:e,large:n,small:t,xSmall:r}),Object(N.jsx)(d.a,{style:{backgroundColor:"white",width:"100%"},children:Object(N.jsxs)(F.d,{children:[Object(N.jsx)(F.b,{path:"/home",render:function(c){return Object(N.jsx)(He,Object(u.a)(Object(u.a)({},c),{},{medium:e,large:n,small:t,xSmall:r}))}}),Object(N.jsx)(F.b,{path:"/viewProduct/:id",render:function(c){return Object(N.jsx)(Ye,Object(u.a)(Object(u.a)({},c),{},{medium:e,large:n,small:t,xSmall:r}))}}),Object(N.jsx)(F.b,{exact:!0,path:"/",children:Object(N.jsx)(F.a,{to:"/home"})})]})})]}),Object(N.jsx)(Qe,{style:{textAlign:"center",backgroundColor:"white"}})]})})}}]),r}(n.Component),qe={getAll:function(){return function(){var e=Object(f.a)(m.a.mark((function e(t){var r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.getAll();case 2:r=e.sent,t((n=r.data,{type:v,data:n}));case 4:case"end":return e.stop()}var n}),e)})));return function(t){return e.apply(this,arguments)}}()}},et=Object(y.b)((function(e,t){return{}}),qe)(Ze),tt=function(e){Object(l.a)(r,e);var t=Object(i.a)(r);function r(){return Object(o.a)(this,r),t.apply(this,arguments)}return Object(s.a)(r,[{key:"render",value:function(){return Object(N.jsx)(et,{})}}]),r}(n.Component),rt=tt,nt=(r(256),r(124)),ct=r(83),at={allCategories:[],allProducts:[],productById:{},categoryById:{},allProductsWithFilter:[],productsCount:0,currentColor:null,currentPage:1,currentPriceRange:[],currentCategory:null,currentSize:null,currentType:[],pageSize:10,sortValue:null};var ot={CategoryReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:at,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(u.a)(Object(u.a)({},e),{},{allCategories:t.data});case B:return Object(u.a)(Object(u.a)({},e),{},{currentCategory:t.data});case I:return console.log(t.data),Object(u.a)(Object(u.a)({},e),{},{categoryById:t.data});default:return e}},ProductReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:at,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(u.a)(Object(u.a)({},e),{},{allProductsWithFilter:t.data.products,productsCount:t.data.count});case P:case A:return Object(u.a)(Object(u.a)({},e),{},{productById:t.data});case S:return console.log(t.data),Object(u.a)(Object(u.a)({},e),{},{allProductsWithFilter:t.data.products,productsCount:t.data.count});case z:return Object(u.a)(Object(u.a)({},e),{},{currentColor:t.data});case w:return Object(u.a)(Object(u.a)({},e),{},{currentPage:t.data});case R:return Object(u.a)(Object(u.a)({},e),{},{currentPriceRange:t.data});case k:return Object(u.a)(Object(u.a)({},e),{},{pageSize:t.data});case T:return Object(u.a)(Object(u.a)({},e),{},{sortValue:t.data});default:return e}}},st=ot,lt=r(155),it=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ct.c,Object(ct.b)(Object(u.a)({},st))),ut=Object(ct.d)(it,Object(ct.a)(lt.a));a.a.render(Object(N.jsx)(y.a,{store:ut,children:Object(N.jsx)(nt.a,{children:Object(N.jsx)(rt,{})})}),document.getElementById("root"))}},[[257,1,2]]]);
//# sourceMappingURL=main.35ea8e80.chunk.js.map