(this["webpackJsonp@assenti/rui-components"]=this["webpackJsonp@assenti/rui-components"]||[]).push([[6],{285:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(3),l=n(301),i=n(268),s=["property","description","default","type","value"],c=[{property:"options",description:"Button group options",default:"",type:"string[] | number[]",value:""},{property:"onChange",description:"Handle selection (return item and index)",default:"",type:"function",value:""},{property:"default",description:"Set default active item",default:"",type:"number",value:""},{property:"size",description:"Set buttons group size",default:"",type:"string",value:"medium | large"},{property:"icon",description:"Set group type to icon",default:"false",type:"boolean",value:"true | false"},{property:"color",description:"Set buttons color",default:"",type:"string",value:"primary | info | success | error | secondary | black"},{property:"outlined",description:"Make buttons group background transparent and outline borders",default:"false",type:"boolean",value:"true | false"},{property:"lifted",description:"Lift up the button group",default:"false",type:"boolean",value:"true | false"},{property:"className",description:"Set a custom css class to component",default:"",type:"string",value:""}],u=["KZ","RU","EN"],p=[1,2,3],d=["format-align-left","format-align-center","format-align-right"];t.default=function(){return a.a.createElement("div",{className:"rui-page"},a.a.createElement("div",{className:"row align-center space-between"},a.a.createElement("div",{className:"rui-page-title"},"ButtonGroup Component")),a.a.createElement(r.e,{outlined:!0,title:"ButtonGroup types"},a.a.createElement("div",{className:"row align-center my-10"},a.a.createElement(r.d,{default:0,options:u,color:"secondary",outlined:!0,className:"mr-10"}),a.a.createElement(r.d,{default:0,options:p,color:"info",className:"mr-10"}),a.a.createElement(r.d,{default:0,icon:!0,options:d,color:"black",outlined:!0})),a.a.createElement(r.g,{icon:"code",iconSize:18,contentStyles:{padding:0},tooltip:"Code"},a.a.createElement(l.a,{language:"jsx",style:i.a},"// Usage examples\nimport React from 'react';\nimport { ButtonGroup } from '@assenti/react-ui-components';\n\nconst langs = ['KZ', 'RU', 'EN'];\nconst nums = [1, 2, 3];\nconst icons = ['format-align-left', 'format-align-center', 'format-align-right'];\n\nfunction Example() {\n    return (\n        <div className=\"row align-center my-10\">\n            <ButtonGroup \n                default={0} \n                options={langs} \n                color=\"secondary\"\n                outlined\n                className=\"mr-10\"/>\n            <ButtonGroup \n                default={0} \n                options={nums} \n                color=\"info\" \n                className=\"mr-10\"/>\n            <ButtonGroup \n                default={0} \n                icon\n                options={icons} \n                color=\"black\" \n                outlined/>\n        </div>\n    )\n}\n"))),a.a.createElement("br",null),a.a.createElement(r.e,{outlined:!0,title:"ButtonGroup sizes"},a.a.createElement(r.d,{options:d,default:0,lifted:!0,icon:!0,color:"secondary",className:"ma-10"}),a.a.createElement(r.d,{options:d,default:0,lifted:!0,size:"medium",className:"ma-10",icon:!0,color:"secondary"}),a.a.createElement(r.d,{options:d,default:0,lifted:!0,size:"large",className:"ma-10",icon:!0,color:"secondary"}),a.a.createElement(r.g,{icon:"code",iconSize:18,contentStyles:{padding:0},tooltip:"Code"},a.a.createElement(l.a,{language:"jsx",style:i.a},'// Usage examples\nimport React from \'react\';\nimport { ButtonGroup } from \'@assenti/react-ui-components\';\n\nconst icons = [\'format-align-left\', \'format-align-center\', \'format-align-right\'];\n\nfunction Example() {\n    return (\n        <div>\n            <ButtonGroup \n                options={icons}\n                default={0} \n                lifted\n                icon color="secondary" \n                className="ma-10"/>\n            <ButtonGroup \n                options={icons}\n                default={0} \n                lifted\n                size="medium"\n                className="ma-10"\n                icon color="secondary"/>\n            <ButtonGroup \n                options={icons}\n                default={0} \n                lifted\n                size="large"\n                className="ma-10"\n                icon color="secondary"/>\n        </div>\n    )\n}\n'))),a.a.createElement("h2",null,"API"),a.a.createElement(r.y,{bordered:!0,headers:s,items:c,index:!0,itemTitles:s}))}}}]);
//# sourceMappingURL=6.chunk.js.map