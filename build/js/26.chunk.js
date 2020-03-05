(this["webpackJsonp@assenti/rui-components"]=this["webpackJsonp@assenti/rui-components"]||[]).push([[26],{302:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),o=n.n(r),u=n(3),s=n(310),i=n(271),c=["property","description","default","type","value"],l=[{property:"itemsCount",description:"Pass items total count",default:"",type:"number",value:""},{property:"perPageVariants",description:"Set per page preset variants",default:"[10, 20, 50, 100]",type:"number[]",value:""},{property:"perPage",description:"Set per page value",default:"10",type:"number",value:""},{property:"onPerPageSelect",description:"Invokes on per page selection (return perPage value)",default:"",type:"function",value:""},{property:"perPageText",description:'Set "10 / page" text',default:"page",type:"string",value:""},{property:"current",description:"Set pagination default current page",default:"1",type:"number",value:""},{property:"onChange",description:"Invokes on page selection (return page value)",default:"",type:"function",value:""},{property:"color",description:"Set color of pagination from list",default:"primary",type:"string",value:"primary | info | success | error"},{property:"rounded",description:"Make border radius rounded",default:"false",type:"boolean",value:"true | false"},{property:"size",description:"Set pagination size",default:"",type:"string",value:"medium | large"},{property:"className",description:"Set a custom css class to component",default:"",type:"string",value:""}];t.default=function(){var e=Object(r.useState)(100),t=Object(a.a)(e,1)[0],n=Object(r.useState)(10),p=Object(a.a)(n,2),g=p[0],m=p[1],P=Object(r.useState)(1),d=Object(a.a)(P,2),f=d[0],C=d[1],v=Object(r.createRef)(),S=Object(r.createRef)();return o.a.createElement("div",{className:"rui-page",ref:S},o.a.createElement("div",{className:"row align-center space-between"},o.a.createElement("div",{className:"rui-page-title"},"Pagination Component"),o.a.createElement("div",{onClick:function(){v.current&&v.current.scrollIntoView({behavior:"smooth",block:"start"})},className:"link fz-13 fw-bold"},"API")),o.a.createElement(u.f,{outlined:!0,title:"Default pagination (in different colors)"},o.a.createElement(u.u,{itemsCount:t,color:"primary",perPage:g,current:f,onChange:function(e){return C(e)},onPerPageSelect:function(e){return m(e)},className:"pa-5",pageText:"module"}),o.a.createElement(u.u,{itemsCount:t,color:"info",current:f,onChange:function(e){return C(e)},className:"pa-5",perPage:g,onPerPageSelect:function(e){return m(e)}}),o.a.createElement(u.u,{itemsCount:t,color:"success",className:"pa-5",current:f,onChange:function(e){return C(e)},perPage:g,onPerPageSelect:function(e){return m(e)}}),o.a.createElement(u.u,{itemsCount:t,color:"error",perPage:g,onPerPageSelect:function(e){return m(e)},className:"pa-5",current:f,onChange:function(e){return C(e)}}),o.a.createElement(u.h,{icon:"code",iconSize:18,tooltip:"Code"},o.a.createElement(s.a,{language:"jsx",style:i.a},'// Usage examples\nimport React, { useState } from \'react\';\nimport { Pagination, InputField } from \'@assenti/rui-components\';\n\nfunction Example() {\n    const [itemsCount, setItemsCount] = useState(100);\n    const [perPage, setPerPage] = useState(10);\n    const [currentPage, setCurrentPage] = useState(1);\n\n    return (\n        <div>\n            <Pagination\n                itemsCount={itemsCount}\n                color="primary"\n                perPage={perPage}\n                current={currentPage}\n                onChange={page => setCurrentPage(page)}\n                onPerPageSelect={value => setPerPage(value)}\n                className="pa-5"\n                pageText="module"/>\n            <Pagination\n                itemsCount={itemsCount}\n                color="info"\n                current={currentPage}\n                onChange={page => setCurrentPage(page)}\n                className="pa-5"\n                perPage={perPage}\n                onPerPageSelect={value => setPerPage(value)}/>\n            <Pagination\n                itemsCount={itemsCount}\n                color="success"\n                className="pa-5"\n                current={currentPage}\n                onChange={page => setCurrentPage(page)}\n                perPage={perPage}\n                onPerPageSelect={value => setPerPage(value)}/>\n            <Pagination\n                itemsCount={itemsCount}\n                color="error"\n                perPage={perPage}\n                onPerPageSelect={value => setPerPage(value)}\n                className="pa-5"\n                current={currentPage}\n                onChange={page => setCurrentPage(page)}/>\n        </div>\n    )\n}\n'))),o.a.createElement("br",null),o.a.createElement(u.f,{outlined:!0,title:"Medium size rounded pagination"},o.a.createElement(u.u,{itemsCount:t,color:"info",perPage:g,onPerPageSelect:function(e){return m(e)},className:"pa-5",current:f,onChange:function(e){return C(e)},size:"medium",rounded:!0}),o.a.createElement(u.h,{icon:"code",iconSize:18,tooltip:"Code"},o.a.createElement(s.a,{language:"jsx",style:i.a},'// Usage examples\nimport React, { useState } from \'react\';\nimport { Pagination } from \'@assenti/rui-components\';\n\nfunction Example() {\n    const [itemsCount, setItemsCount] = useState(100);\n    const [perPage, setPerPage] = useState(10);\n    const [currentPage, setCurrentPage] = useState(1);\n\n    return (\n        <div>\n            <Pagination\n                itemsCount={itemsCount}\n                color="info"\n                perPage={perPage}\n                onPerPageSelect={value => setPerPage(value)}\n                className="pa-5"\n                current={currentPage}\n                onChange={page => setCurrentPage(page)}\n                size="medium"\n                rounded/>\n        </div>\n    )\n}\n'))),o.a.createElement("br",null),o.a.createElement(u.f,{outlined:!0,title:"Large size pagination"},o.a.createElement(u.u,{itemsCount:t,color:"info",perPage:g,current:f,onChange:function(e){return C(e)},onPerPageSelect:function(e){return m(e)},className:"pa-5",size:"large"}),o.a.createElement(u.h,{icon:"code",iconSize:18,tooltip:"Code"},o.a.createElement(s.a,{language:"jsx",style:i.a},'// Usage examples\nimport React, { useState } from \'react\';\nimport { Pagination } from \'@assenti/rui-components\';\n\nfunction Example() {\n    const [itemsCount, setItemsCount] = useState(100);\n    const [perPage, setPerPage] = useState(10);\n    const [currentPage, setCurrentPage] = useState(1);\n\n    return (\n        <div>\n            <Pagination\n                itemsCount={itemsCount}\n                color="info"\n                perPage={perPage}\n                current={currentPage}\n                onChange={page => setCurrentPage(page)}\n                onPerPageSelect={value => setPerPage(value)}\n                className="pa-5"\n                size="large"/>\n        </div>\n    )\n}\n'))),o.a.createElement(u.b,{size:"medium",dark:!0,setRef:S}),o.a.createElement("h2",{ref:v},"API"),o.a.createElement(u.B,{bordered:!0,headers:c,items:l,index:!0,itemTitles:c}))}}}]);
//# sourceMappingURL=26.chunk.js.map