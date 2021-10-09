(this["webpackJsonpe-commerce-task-with-json-object"]=this["webpackJsonpe-commerce-task-with-json-object"]||[]).push([[0],{257:function(e,t,r){},258:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r(29),a=r.n(c),s=r(23),o=r(24),l=r(26),i=r(25),u=r(19),d=r(262),p=r(127),j=r(84),g=r(47),h=r(260),x=r(161),b=r(272),y=r(273),O=r(274),m=r(20),f=r(34),v=r.n(f),C=r(54),P="GET_ALL_CATEGORIES",S="GET_ALL_PRODUCTS",R="GET_PRODUCT_BY_ID",z="FILTER_PRODUCTS",B="SAVE_PRICE_RANGE",w="SAVE_COLORS",I="SAVE_CATEGORY_ID",k="SAVE_CURRENT_PAGE",T="GET_CATEGORY_BY_ID",V="SAVE_PAGE_SIZE",A="SAVE_SORT_VALUE",W="REMOVE_PRODUCT",_=r(149),H=r.n(_).a.create({baseURL:"https://my-json-server.typicode.com/halaelsaka2/json-server/"}),E="/category",L={getAll:function(){return H.get("".concat(E))},getCategoryById:function(e){return H.get("".concat(E,"/").concat(e),{maxContentLength:1e6})}};var D="/products",U=function(){var e=Object(C.a)(v.a.mark((function e(t,r,n,c,a,s,o,l){var i,u,d,p;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i="".concat(D,"?_page=").concat(s,"&"),r&&(i+="colors_like=".concat(r,"&")),o&&(i+="_limit=".concat(o,"&")),l&&(i="new"===l?i+"_sort=status&_order=asc&":i+"_sort=status&_order=desc&"),c&&(i+="sizes_like=".concat(c,"&")),a.length>0&&(u=a.map((function(e){return"type=".concat(e)})).join("&"),i+="".concat(u,"&")),n.length>0&&(d=n[0],p=n[1],i+="price_gte=".concat(d,"&price_lte=").concat(p,"&")),t&&(i+="categoryId=".concat(t,"&")),e.next=10,H.get(i,{maxContentLength:1e6});case 10:return e.abrupt("return",e.sent);case 11:case"end":return e.stop()}}),e)})));return function(t,r,n,c,a,s,o,l){return e.apply(this,arguments)}}(),M={getAll:function(){return H.get("".concat(D,"?_page=",1),{maxContentLength:1e6})},getProductById:function(e){return H.get("".concat(D,"/").concat(e),{maxContentLength:1e6})},getProductsByfilters:U};function N(e){return function(){var t=Object(C.a)(v.a.mark((function t(r){var n;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,M.getProductById(e);case 2:n=t.sent,r((c=n.data,{type:R,data:c}));case 4:case"end":return t.stop()}var c}),t)})));return function(e){return t.apply(this,arguments)}}()}function F(e,t,r,n,c,a,s,o){return function(){var l=Object(C.a)(v.a.mark((function l(i){var u;return v.a.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,M.getProductsByfilters(e,t,r,n,c,a,s,o);case 2:u=l.sent,i((d={products:u.data,count:u.headers["x-total-count"]},{type:z,data:d}));case 4:case"end":return l.stop()}var d}),l)})));return function(e){return l.apply(this,arguments)}}()}var G=r(22),X=r(4),$=function(e){Object(l.a)(r,e);var t=Object(i.a)(r);function r(){var e;Object(s.a)(this,r);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).categoryHandler=function(t){e.props.getCategoryById(t.key),e.props.saveCategoryId(t.key),e.props.getProductsByfilters(t.key,e.props.currentColor,e.props.currentPriceRange,e.props.currentSize,e.props.currentType,e.props.currentPage,e.props.pageSize,e.props.sortValue),"/home"!==e.props.location.pathname&&e.props.history.push("/home")},e}return Object(o.a)(r,[{key:"render",value:function(){var e=this.props,t=e.small,r=(e.xSmall,e.medium,e.large),n=Object(X.jsx)(p.a,{onClick:this.categoryHandler,mode:"horizontal",style:{border:"none",backgroundColor:"transparent",fontWeight:"bold"},children:this.props.allCategories.map((function(e){return Object(X.jsx)(p.a.Item,{children:e.name},e.id)}))});return Object(X.jsxs)(j.a,{justify:"space-around",children:[Object(X.jsx)(g.a,{span:6,algin:"left",pull:t?3:0,children:Object(X.jsx)("img",{src:"https://z.nooncdn.com/s/app/com/noon/images/logos/noon-black-en.svg"})}),!r&&Object(X.jsx)(g.a,{span:8,push:3,children:n}),Object(X.jsx)(g.a,{lg:{span:10},xl:{span:10},md:{span:12},sm:{span:12},xs:{span:12},algin:"right",push:t?3:0,children:Object(X.jsxs)(j.a,{justify:"end",children:[Object(X.jsx)(g.a,{lg:{span:3},xl:{span:3},md:{span:4},sm:{span:4},xs:{span:6},children:Object(X.jsx)(x.a,{style:{fontSize:"18px"}})}),Object(X.jsx)(g.a,{lg:{span:3},xl:{span:3},md:{span:4},sm:{span:4},xs:{span:6},children:Object(X.jsx)(b.a,{style:{fontSize:"18px"}})}),Object(X.jsx)(g.a,{lg:{span:3},xl:{span:3},md:{span:4},sm:{span:4},xs:{span:6},children:r?Object(X.jsx)(h.a,{overlay:n,trigger:["click"],children:Object(X.jsx)("a",{className:"ant-dropdown-link",onClick:function(e){return e.preventDefault()},children:Object(X.jsx)(y.a,{style:{fontSize:"18px"}})})}):Object(X.jsx)(O.a,{})})]})})]})}}]),r}(n.Component),Y={saveCategoryId:function(e){return{type:I,data:e}},getProductsByfilters:F,getProductById:N,getCategoryById:function(e){return function(){var t=Object(C.a)(v.a.mark((function t(r){var n;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L.getCategoryById(e);case 2:n=t.sent,r((c=n.data,{type:T,data:c}));case 4:case"end":return t.stop()}var c}),t)})));return function(e){return t.apply(this,arguments)}}()}},K=Object(G.g)(Object(m.b)((function(e,t){return{allCategories:e.CategoryReducer.allCategories,currentColor:e.ProductReducer.currentColor,currentPage:e.ProductReducer.currentPage,currentPriceRange:e.ProductReducer.currentPriceRange,currentSize:e.ProductReducer.currentSize,currentType:e.ProductReducer.currentType,pageSize:e.ProductReducer.pageSize,sortValue:e.ProductReducer.sortValue}}),Y)($)),J=r(268),Q=r(275),Z=Object(m.b)((function(e,t){return{categoryById:e.CategoryReducer.categoryById,productById:e.ProductReducer.productById}}),{})((function(e){var t=e.small,r=e.xSmall;return Object(X.jsxs)(J.a,{style:{marginBottom:"2rem"},children:[Object(X.jsx)(J.a.Item,{href:"",children:Object(X.jsx)(Q.a,{})}),Object(X.jsx)(J.a.Item,{style:{color:"gray",fontSize:t||r?"smaller":""},children:"All Products"}),Object.keys(e.categoryById).length>0?Object(X.jsx)(J.a.Item,{style:{color:"gray",fontSize:t||r?"smaller":""},children:e.categoryById.name}):"",Object.keys(e.productById).length>0?Object(X.jsx)(J.a.Item,{style:{color:"gray",fontSize:t||r?"smaller":""},children:e.productById.type}):""]})})),q=r(88),ee=function(e){Object(l.a)(r,e);var t=Object(i.a)(r);function r(){var e;Object(s.a)(this,r);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).pageSizeHandler=function(t){e.props.savePageSize(t),e.props.getProductsByfilters(e.props.currentCategory,e.props.currentColor,e.props.currentPriceRange,e.props.currentSize,e.props.currentType,e.props.currentPage,t,e.props.sortValue)},e.sortHandler=function(t){e.props.saveSortValue(t),e.props.getProductsByfilters(e.props.currentCategory,e.props.currentColor,e.props.currentPriceRange,e.props.currentSize,e.props.currentType,e.props.currentPage,e.props.pageSize,t)},e}return Object(o.a)(r,[{key:"render",value:function(){var e,t=this.props,r=t.medium,n=t.small,c=t.xSmall;return Object(X.jsxs)(j.a,{gutter:[24,24],style:{marginBottom:"2rem"},justify:"space-between",children:[Object(X.jsx)(g.a,{lg:{span:4},xl:{span:4},md:{span:24},sm:{span:24},style:{fontSize:n||c?"smaller":""},children:Object.keys(this.props.categoryById).length>0?"".concat(null===(e=this.props.categoryById)||void 0===e?void 0:e.name,"'s Tops (").concat(this.props.productsCount,")"):"All Products (".concat(this.props.productsCount,")")}),Object(X.jsx)(g.a,{lg:{span:20},xl:{span:20},md:{span:24},sm:{span:24},xs:{span:24},children:Object(X.jsxs)(j.a,{justify:"end",children:[Object(X.jsx)(g.a,{lg:{span:10},xl:{span:10},md:{span:12},sm:{span:12},xs:{span:12},children:Object(X.jsxs)("div",{style:{display:"flex",justifyContent:"space-evenly",alignItems:"center"},children:[Object(X.jsx)("div",{style:{fontWeight:n||c?400:600,fontSize:n||c?"smaller":""},children:"Show:"}),Object(X.jsxs)(q.a,{className:"custom-selector",size:n||c?"small":"middle",style:{width:c?"48%":r||n?"40%":"25%"},onChange:this.pageSizeHandler,defaultValue:10,children:[Object(X.jsx)(q.a.Option,{value:10,children:"10"},10),Object(X.jsx)(q.a.Option,{value:20,children:"20"},20),Object(X.jsx)(q.a.Option,{value:30,children:"30"},30)]})]})}),Object(X.jsx)(g.a,{lg:{span:10},xl:{span:10},md:{span:12},sm:{span:12},xs:{span:12},children:Object(X.jsxs)("div",{style:{display:"flex",justifyContent:"space-evenly",alignItems:"center"},children:[Object(X.jsx)("div",{style:{fontWeight:n||c?400:600,fontSize:n||c?"smaller":""},children:"Sort:"}),Object(X.jsxs)(q.a,{size:n||c?"small":"middle",className:"custom-selector",style:{width:c?"68%":r||n?"60%":"50%"},onChange:this.sortHandler,defaultValue:"new",children:[Object(X.jsx)(q.a.Option,{value:"new",children:"New"},"new"),Object(X.jsx)(q.a.Option,{value:"popular",children:"Popular"},"popular")]})]})})]})})]})}}]),r}(n.Component),te={savePageSize:function(e){return{type:V,data:e}},getProductsByfilters:F,saveSortValue:function(e){return{type:A,data:e}}},re=Object(m.b)((function(e,t){return{productsCount:e.ProductReducer.productsCount,categoryById:e.CategoryReducer.categoryById,currentCategory:e.CategoryReducer.currentCategory,currentPage:e.ProductReducer.currentPage,currentPriceRange:e.ProductReducer.currentPriceRange,currentSize:e.ProductReducer.currentSize,currentType:e.ProductReducer.currentType,currentColor:e.ProductReducer.currentColor,sortValue:e.ProductReducer.sortValue}}),te)(ee),ne=r(263),ce=r(265),ae=ne.a.Meta,se=function(e){Object(l.a)(r,e);var t=Object(i.a)(r);function r(){var e;Object(s.a)(this,r);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).clickProductHandler=function(t){e.props.history.push("/viewProduct/".concat(t))},e.paginateHandler=function(t){e.props.getProductsByfilters(e.props.currentCategory,e.props.currentColor,e.props.currentPriceRange,e.props.currentSize,e.props.currentType,t,e.props.pageSize,e.props.sortValue)},e}return Object(o.a)(r,[{key:"render",value:function(){var e=this;return Object(X.jsxs)(X.Fragment,{children:[Object(X.jsx)(j.a,{gutter:[16,16],children:this.props.allProductsWithFilter.length>0?this.props.allProductsWithFilter.map((function(t){return Object(X.jsx)(g.a,{lg:{span:8},xl:{span:8},md:{span:12},sm:{span:24},children:Object(X.jsx)(ne.a,{onClick:function(){return e.clickProductHandler(t.id)},hoverable:!0,style:{width:"80%"},cover:Object(X.jsx)("img",{alt:"example",src:t.images[0]}),children:Object(X.jsx)(ae,{title:t.name,description:t.discount?Object(X.jsxs)(j.a,{gutter:16,children:[Object(X.jsx)(g.a,{children:Object(X.jsxs)("h3",{style:{fontWeight:400,color:"red"},children:["$",(null===t||void 0===t?void 0:t.price)-(null===t||void 0===t?void 0:t.discount)/100*(null===t||void 0===t?void 0:t.price)]})}),Object(X.jsx)(g.a,{children:Object(X.jsxs)("h3",{style:{fontWeight:300,textDecoration:"line-through",color:"gray"},children:["$",null===t||void 0===t?void 0:t.price]})})]}):Object(X.jsx)(j.a,{gutter:16,children:Object(X.jsx)(g.a,{children:Object(X.jsxs)("h3",{style:{fontWeight:400},children:["$",null===t||void 0===t?void 0:t.price]})})})})})},t.id)})):Object(X.jsx)("div",{children:"NoProducts"})}),Object(X.jsx)(j.a,{gutter:24,children:Object(X.jsx)(g.a,{span:24,align:"right",style:{marginTop:"2rem"},children:Object(X.jsx)(ce.a,{total:this.props.productsCount,responsive:!0,hideOnSinglePage:!0,onChange:this.paginateHandler,pageSize:this.props.pageSize})})})]})}}]),r}(n.Component),oe={saveCurrentPage:function(e){return{type:k,data:e}},getProductsByfilters:F},le=Object(G.g)(Object(m.b)((function(e,t){return{allProductsWithFilter:e.ProductReducer.allProductsWithFilter,productsCount:e.ProductReducer.productsCount,currentCategory:e.CategoryReducer.currentCategory,currentColor:e.ProductReducer.currentColor,currentSize:e.ProductReducer.currentSize,currentPriceRange:e.ProductReducer.currentPriceRange,currentType:e.ProductReducer.currentType,pageSize:e.ProductReducer.pageSize,sortValue:e.ProductReducer.sortValue}}),oe)(se)),ie=r(266),ue=r(264),de=r(261),pe=r(271),je=r(114),ge=r(81),he=ie.a.Panel,xe=function(e){Object(l.a)(r,e);var t=Object(i.a)(r);function r(e){var n;return Object(s.a)(this,r),(n=t.call(this,e)).rangePriceHandler=function(e,t){n.setState({rangeValue:e})},n.collapseHandler=function(e){e.length>0?n.setState({collapsed:!0}):n.setState({collapsed:!1})},n.afterChangeRangePriceHandler=function(e,t){n.props.savePriceRange(e),n.props.getProductsByfilters(n.props.currentCategory,n.props.currentColor,e,n.props.currentSize,n.props.currentType,n.props.currentPage,n.props.pageSize,n.props.sortValue)},n.clearRangeHandler=function(e){n.setState({rangeValue:[]}),n.state.rangeValue.length>0&&(n.props.savePriceRange([]),n.props.getProductsByfilters(n.props.currentCategory,n.props.currentColor,[],n.props.currentSize,n.props.currentType,n.props.currentPage,n.props.pageSize,n.props.sortValue))},n.state={rangeValue:[],collapsed:!1},n}return Object(o.a)(r,[{key:"render",value:function(){var e=this.state,t=e.collapsed,r=e.rangeValue;return Object(X.jsx)(j.a,{gutter:{lg:24,md:20,sm:16,xs:16},style:{marginBottom:"2rem"},children:Object(X.jsx)(g.a,{lg:24,md:24,sm:24,xs:24,children:Object(X.jsx)(ne.a,{style:{width:"100%",borderColor:"lightgray"},bodyStyle:{padding:t?"13px 13px 0px 13px":"13px 13px 13px 13px"},children:Object(X.jsx)(j.a,{gutter:{lg:24,md:20,sm:16,xs:16},children:Object(X.jsx)(g.a,{lg:24,md:24,sm:24,xs:24,children:Object(X.jsx)(ie.a,{defaultActiveKey:["1"],ghost:!0,style:{padding:0,color:"red"},expandIconPosition:"right",onChange:this.collapseHandler,expandIcon:function(){return t?Object(X.jsx)(pe.a,{}):Object(X.jsx)(je.a,{})},className:"custom-collapse",children:Object(X.jsxs)(he,{header:Object(X.jsx)("div",{style:{fontWeight:"bold"},children:"Price Range"}),children:[Object(X.jsx)(j.a,{gutter:24,children:Object(X.jsxs)(g.a,{span:24,children:[Object(X.jsx)(ue.a,{style:{width:"100%"},max:1e3,range:{draggableTrack:!0},value:r,onChange:this.rangePriceHandler,onAfterChange:this.afterChangeRangePriceHandler})," "]})}),Object(X.jsx)(de.a,{}),Object(X.jsxs)(j.a,{style:{cursor:"pointer"},children:[Object(X.jsx)(g.a,{children:Object(X.jsx)(ge.a,{onMouseUp:this.clearRangeHandler})}),Object(X.jsx)(g.a,{children:Object(X.jsx)("h4",{onMouseUp:this.clearRangeHandler,children:"Clear"})})]})]},"1")})})})})})})}}]),r}(n.Component),be={getProductsByfilters:F,savePriceRange:function(e){return{type:B,data:e}}},ye=Object(m.b)((function(e,t){return{currentCategory:e.CategoryReducer.currentCategory,currentPage:e.ProductReducer.currentPage,currentColor:e.ProductReducer.currentColor,currentSize:e.ProductReducer.currentSize,currentType:e.ProductReducer.currentType,pageSize:e.ProductReducer.pageSize,sortValue:e.ProductReducer.sortValue}}),be)(xe),Oe=r(269),me=ie.a.Panel,fe=Oe.a.Group,ve=["T-shirts","Sweatshirts","Tank Tops","Dress shirts"],Ce=function(e){Object(l.a)(r,e);var t=Object(i.a)(r);function r(e){var n;return Object(s.a)(this,r),(n=t.call(this,e)).onChange=function(e){n.setState({checkedList:e}),n.props.saveProductType(e),n.props.getProductsByfilters(n.props.currentCategory,n.props.currentColor,n.props.currentPriceRange,n.props.currentSize,e,n.props.currentPage,n.props.pageSize,n.props.sortValue)},n.collapseHandler=function(e){e.length>0?n.setState({collapsed:!0}):n.setState({collapsed:!1})},n.clearRangeHandler=function(e){n.setState({checkedList:[]}),n.state.checkedList.length>0&&(n.props.saveProductType([]),n.props.getProductsByfilters(n.props.currentCategory,n.props.currentColor,n.props.currentPriceRange,n.props.currentSize,[],n.props.currentPage,n.props.pageSize,n.props.sortValue))},n.state={collapsed:!1,checkedList:[]},n}return Object(o.a)(r,[{key:"render",value:function(){var e=this.state.collapsed;return Object(X.jsx)(j.a,{gutter:{lg:24,md:20,sm:16,xs:16},style:{marginBottom:"2rem"},children:Object(X.jsx)(g.a,{lg:24,md:24,sm:24,xs:24,children:Object(X.jsx)(ne.a,{style:{width:"100%",borderColor:"lightgray"},bodyStyle:{padding:e?"13px 13px 0px 13px":"13px 13px 13px 13px"},children:Object(X.jsx)(j.a,{gutter:{lg:24,md:20,sm:16,xs:16},children:Object(X.jsx)(g.a,{lg:24,md:24,sm:24,xs:24,align:"left",children:Object(X.jsx)(ie.a,{defaultActiveKey:["1"],ghost:!0,style:{padding:0,color:"red"},expandIconPosition:"right",onChange:this.collapseHandler,expandIcon:function(){return e?Object(X.jsx)(pe.a,{}):Object(X.jsx)(je.a,{})},className:"custom-collapse",children:Object(X.jsxs)(me,{header:Object(X.jsx)("div",{style:{fontWeight:"bold"},children:"Product Types"}),children:[Object(X.jsx)(j.a,{gutter:24,children:Object(X.jsx)(g.a,{span:24,children:Object(X.jsx)(fe,{style:{display:"flex",flexDirection:"column"},options:ve,value:this.state.checkedList,onChange:this.onChange})})}),Object(X.jsx)(de.a,{}),Object(X.jsxs)(j.a,{style:{cursor:"pointer"},children:[Object(X.jsx)(g.a,{children:Object(X.jsx)(ge.a,{onMouseUp:this.clearRangeHandler})}),Object(X.jsx)(g.a,{children:Object(X.jsx)("h4",{onMouseUp:this.clearRangeHandler,children:"Clear"})})]})]},"1")})})})})})})}}]),r}(n.Component),Pe={getProductsByfilters:F,saveProductType:function(e){return{type:"SAVE_PRODUCT_TYPE",data:e}}},Se=Object(m.b)((function(e,t){return{currentCategory:e.CategoryReducer.currentCategory,currentPage:e.ProductReducer.currentPage,currentColor:e.ProductReducer.currentColor,currentSize:e.ProductReducer.currentSize,currentPriceRange:e.ProductReducer.currentPriceRange,pageSize:e.ProductReducer.pageSize,sortValue:e.ProductReducer.sortValue}}),Pe)(Ce),Re=r(267),ze=ie.a.Panel,Be=function(e){Object(l.a)(r,e);var t=Object(i.a)(r);function r(e){var n;return Object(s.a)(this,r),(n=t.call(this,e)).collapseHandler=function(e){e.length>0?n.setState({collapsed:!0}):n.setState({collapsed:!1})},n.clearRangeHandler=function(e){n.setState({sizeValue:""}),n.state.sizeValue&&(n.props.saveSize(""),n.props.getProductsByfilters(n.props.currentCategory,n.props.currentColor,n.props.currentPriceRange,"",n.props.currentType,n.props.currentPage,n.props.pageSize,n.props.sortValue))},n.handleSizeChange=function(e){var t=e.target.value;n.props.saveSize(t),n.props.getProductsByfilters(n.props.currentCategory,n.props.currentColor,n.props.currentPriceRange,t,n.props.currentType,n.props.currentPage,n.props.pageSize,n.props.sortValue),n.setState({sizeValue:t})},n.state={collapsed:!1,sizeValue:""},n}return Object(o.a)(r,[{key:"render",value:function(){var e=this.state,t=e.sizeValue,r=e.collapsed;return Object(X.jsx)(j.a,{gutter:{lg:24,md:20,sm:16,xs:16},style:{marginBottom:"2rem"},children:Object(X.jsx)(g.a,{lg:24,md:24,sm:24,xs:24,children:Object(X.jsx)(ne.a,{style:{width:"100%",borderColor:"lightgray"},bodyStyle:{padding:r?"13px 13px 0px 13px":"13px 13px 13px 13px"},children:Object(X.jsx)(j.a,{gutter:{lg:24,md:20,sm:16,xs:16},children:Object(X.jsx)(g.a,{lg:24,md:24,sm:24,xs:24,children:Object(X.jsx)(ie.a,{defaultActiveKey:["1"],ghost:!0,style:{padding:0,color:"red"},expandIconPosition:"right",onChange:this.collapseHandler,expandIcon:function(){return r?Object(X.jsx)(pe.a,{}):Object(X.jsx)(je.a,{})},className:"custom-collapse",children:Object(X.jsxs)(ze,{header:Object(X.jsx)("div",{style:{fontWeight:"bold"},children:"Size"}),children:[Object(X.jsx)(j.a,{gutter:24,children:Object(X.jsx)(g.a,{span:24,style:{padding:0},children:Object(X.jsxs)(Re.a.Group,{onChange:this.handleSizeChange,value:t,style:{marginBottom:8,width:"100%",display:"flex"},children:[Object(X.jsx)(Re.a.Button,{style:{padding:"0 10px",fontSize:"10px",fontWeight:600,textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center",width:"16.6%"},value:"XS",children:"XS"}),Object(X.jsx)(Re.a.Button,{style:{padding:"0 10px",fontSize:"10px",fontWeight:600,textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center",width:"16.6%"},value:"S",children:"S"}),Object(X.jsx)(Re.a.Button,{style:{padding:"0 10px",fontSize:"10px",fontWeight:600,textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center",width:"16.6%"},value:"M",children:"M"}),Object(X.jsx)(Re.a.Button,{style:{padding:"0 10px",fontSize:"10px",fontWeight:600,textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center",width:"16.6%"},value:"L",children:"L"}),Object(X.jsx)(Re.a.Button,{style:{padding:"0 10px",fontSize:"10px",fontWeight:600,textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center",width:"16.6%"},value:"XL",children:"XL"}),Object(X.jsx)(Re.a.Button,{style:{padding:"0 10px",fontSize:"10px",fontWeight:600,textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center",width:"16.6%"},value:"XXL",children:"XXL"})]})})}),Object(X.jsx)(de.a,{}),Object(X.jsxs)(j.a,{style:{cursor:"pointer"},children:[Object(X.jsx)(g.a,{children:Object(X.jsx)(ge.a,{onMouseUp:this.clearRangeHandler})}),Object(X.jsx)(g.a,{children:Object(X.jsx)("h4",{onMouseUp:this.clearRangeHandler,children:"Clear"})})]})]},"1")})})})})})})}}]),r}(n.Component),we={getProductsByfilters:F,saveSize:function(e){return{type:"SAVE_SIZE",data:e}}},Ie=Object(m.b)((function(e,t){return{currentCategory:e.CategoryReducer.currentCategory,currentPage:e.ProductReducer.currentPage,currentPriceRange:e.ProductReducer.currentPriceRange,currentColor:e.ProductReducer.currentColor,currentType:e.ProductReducer.currentType,pageSize:e.ProductReducer.pageSize,sortValue:e.ProductReducer.sortValue}}),we)(Be),ke=ie.a.Panel,Te=function(e){Object(l.a)(r,e);var t=Object(i.a)(r);function r(e){var n;return Object(s.a)(this,r),(n=t.call(this,e)).collapseHandler=function(e){e.length>0?n.setState({collapsed:!0}):n.setState({collapsed:!1})},n.clearColorHandler=function(e){n.setState({color:""}),n.state.color&&(n.props.saveColor(""),n.props.getProductsByfilters(n.props.currentCategory,"",n.props.currentPriceRange,n.props.currentSize,n.props.currentType,n.props.currentPage,n.props.pageSize,n.props.sortValue))},n.handleColorChange=function(e){var t=e.target.value;n.props.saveColor(t),n.props.getProductsByfilters(n.props.currentCategory,t,n.props.currentPriceRange,n.props.currentSize,n.props.currentType,n.props.currentPage,n.props.pageSize,n.props.sortValue),n.setState({color:t})},n.state={collapsed:!1,color:""},n}return Object(o.a)(r,[{key:"render",value:function(){var e=this.state,t=e.color,r=e.collapsed;return Object(X.jsx)(j.a,{gutter:{lg:24,md:20,sm:16,xs:16},style:{marginBottom:"2rem"},children:Object(X.jsx)(g.a,{lg:24,md:24,sm:24,xs:24,children:Object(X.jsx)(ne.a,{style:{width:"100%",borderColor:"lightgray"},bodyStyle:{padding:r?"13px 13px 0px 13px":"13px 13px 13px 13px"},children:Object(X.jsx)(j.a,{gutter:{lg:24,md:20,sm:16,xs:16},children:Object(X.jsx)(g.a,{lg:24,md:24,sm:24,xs:24,children:Object(X.jsx)(ie.a,{defaultActiveKey:["1"],ghost:!0,style:{padding:0,color:"red"},expandIconPosition:"right",onChange:this.collapseHandler,expandIcon:function(){return r?Object(X.jsx)(pe.a,{}):Object(X.jsx)(je.a,{})},className:"custom-collapse",children:Object(X.jsxs)(ke,{header:Object(X.jsx)("div",{style:{fontWeight:"bold"},children:"Color"}),children:[Object(X.jsx)(j.a,{gutter:24,children:Object(X.jsx)(g.a,{span:24,style:{padding:0},children:Object(X.jsxs)(Re.a.Group,{onChange:this.handleColorChange,value:t,style:{marginBottom:8,width:"100%",display:"flex"},children:[Object(X.jsx)(Re.a.Button,{style:{padding:"0 10px",fontSize:"10px",fontWeight:600,textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center",width:"16.6%"},value:"yellow",children:Object(X.jsx)("div",{style:{backgroundColor:"yellow",width:"15px",height:"15px"}})}),Object(X.jsx)(Re.a.Button,{style:{padding:"0 10px",fontSize:"10px",fontWeight:600,textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center",width:"16.6%"},value:"red",children:Object(X.jsx)("div",{style:{backgroundColor:"red",width:"15px",height:"15px"}})}),Object(X.jsx)(Re.a.Button,{style:{padding:"0 10px",fontSize:"10px",fontWeight:600,textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center",width:"16.6%"},value:"black",children:Object(X.jsx)("div",{style:{backgroundColor:"black",width:"15px",height:"15px"}})}),Object(X.jsx)(Re.a.Button,{style:{padding:"0 10px",fontSize:"10px",fontWeight:600,textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center",width:"16.6%"},value:"brown",children:Object(X.jsx)("div",{style:{backgroundColor:"brown",width:"15px",height:"15px"}})}),Object(X.jsx)(Re.a.Button,{style:{padding:"0 10px",fontSize:"10px",fontWeight:600,textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center",width:"16.6%"},value:"green",children:Object(X.jsx)("div",{style:{backgroundColor:"green",width:"15px",height:"15px"}})}),Object(X.jsx)(Re.a.Button,{style:{padding:"0 10px",fontSize:"10px",fontWeight:600,textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center",width:"16.6%"},value:"blue",children:Object(X.jsx)("div",{style:{backgroundColor:"blue",width:"15px",height:"15px"}})})]})})}),Object(X.jsx)(de.a,{}),Object(X.jsxs)(j.a,{style:{cursor:"pointer"},children:[Object(X.jsx)(g.a,{children:Object(X.jsx)(ge.a,{onMouseUp:this.clearColorHandler})}),Object(X.jsx)(g.a,{children:Object(X.jsx)("h4",{onMouseUp:this.clearColorHandler,children:"Clear"})})]})]},"1")})})})})})})}}]),r}(n.Component),Ve={getProductsByfilters:F,saveColor:function(e){return{type:w,data:e}}},Ae=Object(m.b)((function(e,t){return{currentCategory:e.CategoryReducer.currentCategory,currentPage:e.ProductReducer.currentPage,currentPriceRange:e.ProductReducer.currentPriceRange,currentSize:e.ProductReducer.currentSize,currentType:e.ProductReducer.currentType,pageSize:e.ProductReducer.pageSize,sortValue:e.ProductReducer.sortValue}}),Ve)(Te),We=d.a.Content,_e=d.a.Sider,He=function(e){Object(l.a)(r,e);var t=Object(i.a)(r);function r(e){var n;return Object(s.a)(this,r),(n=t.call(this,e)).componentDidMount=function(){0===n.props.allProductsWithFilter.length&&n.props.getAll()},n.state={broken:!1},n}return Object(o.a)(r,[{key:"render",value:function(){var e=this,t=this.state.broken?{position:"absolute",left:0,top:64}:{},r=this.props,n=r.medium,c=r.small,a=r.xSmall,s=r.large;return Object(X.jsxs)(X.Fragment,{children:[Object(X.jsxs)(_e,{breakpoint:"lg",collapsedWidth:"0",onBreakpoint:function(t){e.setState({broken:t})},onCollapse:function(e,t){},zeroWidthTriggerStyle:{color:"black",backgroundColor:"white",border:"1px solid black",right:"-35px"},style:Object(u.a)(Object(u.a)({zIndex:10},t),{},{backgroundColor:"white"}),width:240,theme:"light",children:[Object(X.jsx)(Se,{}),Object(X.jsx)(ye,{}),Object(X.jsx)(Ie,{}),Object(X.jsx)(Ae,{})]}),Object(X.jsxs)(We,{style:{margin:s?"0px 0px 0px 10px":"0px 0px 0px 30px"},children:[Object(X.jsx)(re,{medium:n,small:c,xSmall:a}),Object(X.jsx)(le,{})]})]})}}]),r}(n.Component),Ee={getAll:function(){return function(){var e=Object(C.a)(v.a.mark((function e(t){var r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.getAll();case 2:r=e.sent,t((n={products:r.data,count:r.headers["x-total-count"]},{type:S,data:n}));case 4:case"end":return e.stop()}var n}),e)})));return function(t){return e.apply(this,arguments)}}()}},Le=Object(m.b)((function(e,t){return{allProductsWithFilter:e.ProductReducer.allProductsWithFilter}}),Ee)(He),De=r(159),Ue=r(117),Me=r(270),Ne=r(276),Fe=r(160),Ge=function(e){Object(l.a)(r,e);var t=Object(i.a)(r);function r(e){var n;return Object(s.a)(this,r),(n=t.call(this,e)).componentDidUpdate=function(e,t,r){var c;e.productById!==n.props.productById&&n.setState({currentImage:Object.keys(n.props.productById).length>0?null===(c=n.props.productById)||void 0===c?void 0:c.images[0]:""})},n.componentWillUnmount=function(){n.props.removeProduct()},n.handleImageHandler=function(e){n.setState({currentImage:e})},n.plusHandler=function(){var e;n.state.count===(null===(e=n.props.productById)||void 0===e?void 0:e.quantity)?De.b.info("This Is Quantity Of Product"):n.setState({count:n.state.count+1})},n.minusHandler=function(){n.state.count>1&&n.setState({count:n.state.count-1})},n.state={count:1,currentImage:""},n}return Object(o.a)(r,[{key:"render",value:function(){var e,t,r,n,c,a,s,o,l,i,u=this,d=this.state.count,p=this.props,h=p.small,x=p.xSmall;return Object(X.jsxs)(j.a,{gutter:[16,16],children:[Object(X.jsx)(g.a,{lg:{span:12},xl:{span:12},md:{span:12},sm:{span:24},xs:{span:24},children:Object(X.jsxs)(j.a,{gutter:24,children:[Object(X.jsx)(g.a,{span:4,children:Object.keys(this.props.productById).length>0&&(null===(e=this.props.productById)||void 0===e?void 0:e.images.map((function(e,t){return Object(X.jsx)(ne.a,{hoverable:!0,style:{backgroundColor:"transparent",marginBottom:"1rem"},bodyStyle:{width:"100%",display:"none"},size:"small",cover:Object(X.jsx)("img",{alt:"example",src:e}),onClick:function(){return u.handleImageHandler(e)}},t)})))}),Object(X.jsx)(g.a,{span:16,children:Object(X.jsx)(ne.a,{hoverable:!0,style:{backgroundColor:"transparent"},bodyStyle:{width:"100%",display:"none"},cover:Object(X.jsx)("img",{alt:"example",src:this.state.currentImage})})})]})}),Object(X.jsxs)(g.a,{lg:{span:12},xl:{span:12},md:{span:12},sm:{span:24},xs:{span:24},children:[(null===(t=this.props.productById)||void 0===t?void 0:t.discount)?Object(X.jsx)(j.a,{children:Object(X.jsx)(Ue.a,{type:"primary",size:"small",style:{backgroundColor:" red",border:"none",borderRadius:"50px"},children:"sale"})}):"",Object(X.jsx)(j.a,{children:Object(X.jsx)("h2",{style:{fontWeight:300},children:this.props.productById.name})}),(null===(r=this.props.productById)||void 0===r?void 0:r.discount)?Object(X.jsxs)(j.a,{gutter:{lg:12,md:12,sm:24,xm:24},children:[Object(X.jsx)(g.a,{lg:4,md:4,sm:6,xs:6,children:Object(X.jsxs)("h3",{style:{fontWeight:400,color:"red"},children:["$",(null===(n=this.props.productById)||void 0===n?void 0:n.price)-(null===(c=this.props.productById)||void 0===c?void 0:c.discount)/100*(null===(a=this.props.productById)||void 0===a?void 0:a.price)]})}),Object(X.jsx)(g.a,{lg:4,md:4,sm:6,xs:6,children:Object(X.jsxs)("h3",{style:{fontWeight:300,textDecoration:"line-through",color:"gray"},children:["$",null===(s=this.props.productById)||void 0===s?void 0:s.price]})})]}):Object(X.jsx)(j.a,{gutter:12,children:Object(X.jsx)(g.a,{span:4,children:Object(X.jsxs)("h3",{style:{fontWeight:500},children:["$",null===(o=this.props.productById)||void 0===o?void 0:o.price]})})}),Object(X.jsx)(j.a,{children:Object(X.jsx)("span",{style:{marginTop:"1rem",marginBottom:"10px",fontSize:"smaller"},children:"Colors:"})}),Object(X.jsx)(j.a,{gutter:24,children:Object(X.jsx)(g.a,{xl:4,lg:4,md:4,sm:3,xs:6,children:Object(X.jsx)(Me.b,{children:Object.keys(this.props.productById).length>0&&(null===(l=this.props.productById)||void 0===l?void 0:l.colors.map((function(e){return Object(X.jsx)(ne.a,{size:"small",children:Object(X.jsx)(ne.a,{size:"small",type:"inner",style:{backgroundColor:e}})},e)})))})})}),Object(X.jsx)(j.a,{children:Object(X.jsx)("span",{style:{marginTop:"1rem",marginBottom:"10px",fontSize:"smaller"},children:"Size:"})}),Object(X.jsx)(j.a,{gutter:8,children:Object(X.jsx)(g.a,{span:7,children:Object(X.jsx)(q.a,{className:"custom-selector",placeholder:"Choose Size",style:{width:h||x?"":"100%"},dropdownStyle:{borderRadius:"20px"},size:h||x?"small":"middle",children:Object.keys(this.props.productById).length>0&&(null===(i=this.props.productById)||void 0===i?void 0:i.sizes.map((function(e){return Object(X.jsx)(q.a.Option,{value:e,children:e},e)})))})})}),Object(X.jsx)(j.a,{children:Object(X.jsx)("span",{style:{marginTop:"1rem",marginBottom:"10px",fontSize:"smaller"},children:"Quantity:"})}),Object(X.jsxs)(j.a,{gutter:{lg:12,xl:12,sm:24,xs:24},children:[Object(X.jsx)(g.a,{xl:6,lg:6,md:8,sm:6,xs:x?10:h?6:"",children:Object(X.jsxs)(Me.b,{style:{border:"1px solid lightgray",borderRadius:"50px",padding:h||x?"1px 15px":"5px 18px"},children:[Object(X.jsx)(Ne.a,{style:{color:1===d?"lightgray":"black"},onClick:this.minusHandler}),d,Object(X.jsx)(Fe.a,{onClick:this.plusHandler})]})}),Object(X.jsx)(g.a,{xl:6,lg:6,md:8,sm:6,xs:x?10:h?6:"",children:Object(X.jsx)(Ue.a,{type:"primary",style:{color:"black",fontWeight:h||x?400:600,border:"none",borderRadius:"50px",backgroundColor:"#FBB03B",padding:h||x?"2px 22px":"4px 25px"},size:h||x?"small":"middle",children:"ADD TO CART"})})]})]})]})}}]),r}(n.Component),Xe={removeProduct:function(){return{type:W,data:{}}}},$e=Object(m.b)((function(e,t){return{productById:e.ProductReducer.productById}}),Xe)(Ge),Ye=function(e){Object(l.a)(r,e);var t=Object(i.a)(r);function r(){var e;Object(s.a)(this,r);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).componentDidMount=function(){e.props.getProductById(e.props.match.params.id)},e}return Object(o.a)(r,[{key:"render",value:function(){var e=this.props,t=e.medium,r=e.small,n=e.xSmall,c=e.large;return Object(X.jsx)($e,{medium:t,large:c,small:r,xSmall:n})}}]),r}(n.Component),Ke={getProductById:N},Je=Object(m.b)((function(e,t){return{}}),Ke)(Ye),Qe=d.a.Header,Ze=d.a.Content,qe=d.a.Footer,et=function(e){Object(l.a)(r,e);var t=Object(i.a)(r);function r(e){var n;return Object(s.a)(this,r),(n=t.call(this,e)).handleResize=function(e){n.setState({windowWidth:window.innerWidth})},n.state={windowWidth:window.innerWidth},n}return Object(o.a)(r,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.handleResize),this.props.getAll()}},{key:"render",value:function(){var e=this.state.windowWidth<768,t=this.state.windowWidth<576,r=this.state.windowWidth<480,n=this.state.windowWidth<992;return Object(X.jsx)(d.a,{children:Object(X.jsxs)(d.a,{style:{backgroundColor:"white"},children:[Object(X.jsx)(Qe,{className:"site-layout-sub-header-background",style:{padding:"0 40px",backgroundColor:"white",borderBottom:"1px solid lightgray",borderColor:"lightgray"},children:Object(X.jsx)(K,{medium:e,large:n,small:t,xSmall:r})}),Object(X.jsxs)(Ze,{style:{margin:"30px 40px 0"},children:[Object(X.jsx)(Z,{medium:e,large:n,small:t,xSmall:r}),Object(X.jsx)(d.a,{style:{backgroundColor:"white",width:"100%"},children:Object(X.jsxs)(G.d,{children:[Object(X.jsx)(G.b,{path:"/home",render:function(c){return Object(X.jsx)(Le,Object(u.a)(Object(u.a)({},c),{},{medium:e,large:n,small:t,xSmall:r}))}}),Object(X.jsx)(G.b,{path:"/viewProduct/:id",render:function(c){return Object(X.jsx)(Je,Object(u.a)(Object(u.a)({},c),{},{medium:e,large:n,small:t,xSmall:r}))}}),Object(X.jsx)(G.b,{exact:!0,path:"/",children:Object(X.jsx)(G.a,{to:"/home"})})]})})]}),Object(X.jsx)(qe,{style:{textAlign:"center",backgroundColor:"white"}})]})})}}]),r}(n.Component),tt={getAll:function(){return function(){var e=Object(C.a)(v.a.mark((function e(t){var r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.getAll();case 2:r=e.sent,t((n=r.data,{type:P,data:n}));case 4:case"end":return e.stop()}var n}),e)})));return function(t){return e.apply(this,arguments)}}()}},rt=Object(m.b)((function(e,t){return{}}),tt)(et),nt=function(e){Object(l.a)(r,e);var t=Object(i.a)(r);function r(){return Object(s.a)(this,r),t.apply(this,arguments)}return Object(o.a)(r,[{key:"render",value:function(){return Object(X.jsx)(rt,{})}}]),r}(n.Component),ct=nt,at=(r(257),r(125)),st=r(83),ot={allCategories:[],allProducts:[],productById:{},categoryById:{},allProductsWithFilter:[],productsCount:0,currentColor:null,currentPage:1,currentPriceRange:[],currentCategory:null,currentSize:null,currentType:[],pageSize:10,sortValue:null};var lt={CategoryReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ot,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:return Object(u.a)(Object(u.a)({},e),{},{allCategories:t.data});case I:return Object(u.a)(Object(u.a)({},e),{},{currentCategory:t.data});case T:return Object(u.a)(Object(u.a)({},e),{},{categoryById:t.data});default:return e}},ProductReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ot,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:case z:return Object(u.a)(Object(u.a)({},e),{},{allProductsWithFilter:t.data.products,productsCount:t.data.count});case R:case W:return Object(u.a)(Object(u.a)({},e),{},{productById:t.data});case w:return Object(u.a)(Object(u.a)({},e),{},{currentColor:t.data});case k:return Object(u.a)(Object(u.a)({},e),{},{currentPage:t.data});case B:return Object(u.a)(Object(u.a)({},e),{},{currentPriceRange:t.data});case V:return Object(u.a)(Object(u.a)({},e),{},{pageSize:t.data});case A:return Object(u.a)(Object(u.a)({},e),{},{sortValue:t.data});default:return e}}},it=lt,ut=r(156),dt=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||st.c,Object(st.b)(Object(u.a)({},it))),pt=Object(st.d)(dt,Object(st.a)(ut.a));a.a.render(Object(X.jsx)(m.a,{store:pt,children:Object(X.jsx)(at.a,{children:Object(X.jsx)(ct,{})})}),document.getElementById("root"))}},[[258,1,2]]]);
//# sourceMappingURL=main.3cb24e1c.chunk.js.map