(this["webpackJsonp@assenti/rui-components"]=this["webpackJsonp@assenti/rui-components"]||[]).push([[37],{286:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),l=a.n(r),i=a(3),c=a(316),s=a(271),o="// Usage examples\nimport React, { useState } from 'react';\nimport { Switch, Select, Icon, RadioGroup } from '@assenti/rui-components';\nconst colors = ['primary', 'info', 'success', 'error'];\nconst types = ['icon', 'label', 'none']\nconst sizes = ['default', 'medium', 'large'];\n\nfunction Example() {\n    const [check, setCheck] = useState(false);\n    const [disabled, setDisabled] = useState(false);\n    const [vertical, setVertical] = useState(false);\n    const [type, setType] = useState('');\n    const [color, setColor] = useState(colors[0]);\n    const [size, setSize] = useState(sizes[0]);\n\n    return (\n        <div>\n            <Select\n                items={colors}\n                prefix={<Icon name=\"brush\"/>}\n                width={200}\n                label=\"Switch color\"\n                color=\"primary\"\n                className=\"my-10\"\n                value={color}\n                onChange={v => setColor(v)}/>\n            <br/>\n            <Select\n                items={sizes}\n                prefix={<Icon name=\"format-size\"/>}\n                width={200}\n                label=\"Switch size\"\n                color=\"primary\"\n                className=\"my-10\"\n                value={size}\n                onChange={v => setSize(v)}/>\n            <br/>\n            <Switch \n                check={disabled} \n                color=\"primary\"\n                rightLabel=\"Disabled\" \n                className=\"my-10\"\n                onChange={() => setDisabled(!disabled)}/>\n            <br/>\n            <Switch \n                check={vertical} \n                color=\"primary\"\n                rightLabel=\"Vertical\" \n                className=\"my-10\"\n                onChange={() => setVertical(!vertical)}/>\n            <br/>\n            <RadioGroup\n                options={types} \n                value={type}\n                name=\"type\"\n                className=\"my-10\" \n                onChange={(value) => setType(value)}/>\n            <br/>\n            <div className=\"py-10\">\n                <Switch \n                    check={check} \n                    color={color}\n                    size={size}\n                    leftLabel={type === 'label' ? 'Left label' : ''}\n                    rightLabel={type === 'label' ? 'Right label' : ''} \n                    leftIcon={type === 'icon' ? 'moon' : ''}\n                    rightIcon={type === 'icon' ? 'sun' : ''} \n                    disabled={disabled}\n                    vertical={vertical} \n                    onChange={() => setCheck(!check)}/>\n            </div>\n        </div>\n    )\n}",p=["property","description","default","type","value"],u=[{property:"check",description:"define the switch state",default:"",type:"boolean",value:"true | false"},{property:"onChange",description:"handle switch change",default:"",type:"function",value:""},{property:"disabled",description:"Make switch disabled",default:"false",type:"boolean",value:"true | false"},{property:"position",description:"Change switch position",default:"horizontal",type:"string",value:"vertical"},{property:"color",description:"Set color",default:"gray",type:"string",value:"primary | info | success | error"},{property:"leftLabel",description:"Set left side label",default:"",type:"string",value:""},{property:"rightLabel",description:"Set right side label",default:"",type:"string",value:""},{property:"leftIcon",description:"Set left side icon",default:"",type:"string",value:"moon | home | etc. (see icons list)"},{property:"rightIcon",description:"Set right side icon",default:"",type:"string",value:"moon | home | etc. (see icons list)"},{property:"leftIconColor",description:"Set left side icon color",default:"",type:"string",value:"hex | rgba | css standard preset"},{property:"rightIconColor",description:"Set right side icon color",default:"",type:"string",value:"hex | rgba | css standard preset"},{property:"className",description:"Set css custom class",default:"",type:"string",value:""}],m=["primary","info","success","error"],d=["icon","label","none"],h=["default","medium","large"];t.default=function(){var e=Object(r.useState)(!1),t=Object(n.a)(e,2),a=t[0],b=t[1],y=Object(r.useState)(!1),f=Object(n.a)(y,2),g=f[0],v=f[1],S=Object(r.useState)(!1),E=Object(n.a)(S,2),C=E[0],w=E[1],k=Object(r.useState)(""),z=Object(n.a)(k,2),N=z[0],j=z[1],x=Object(r.useState)(m[0]),I=Object(n.a)(x,2),L=I[0],O=I[1],D=Object(r.useState)(h[0]),R=Object(n.a)(D,2),T=R[0],V=R[1];return l.a.createElement("div",{className:"rui-page"},l.a.createElement("div",{className:"rui-page-title"},"<Switch/>"," Component"),l.a.createElement(i.i,{outlined:!0,title:"Usage"},l.a.createElement(i.D,{items:m,prefix:l.a.createElement(i.r,{name:"brush"}),width:200,label:"Switch color",color:"primary",className:"my-10",value:L,onChange:function(e){return O(e)}}),l.a.createElement("br",null),l.a.createElement(i.D,{items:h,prefix:l.a.createElement(i.r,{name:"format-size"}),width:200,label:"Switch size",color:"primary",className:"my-10",value:T,onChange:function(e){return V(e)}}),l.a.createElement("br",null),l.a.createElement(i.E,{check:g,color:"primary",rightLabel:"Disabled",className:"my-10",onChange:function(){return v(!g)}}),l.a.createElement("br",null),l.a.createElement(i.E,{check:C,color:"primary",rightLabel:"Vertical",className:"my-10",onChange:function(){return w(!C)}}),l.a.createElement("br",null),l.a.createElement(i.B,{options:d,value:N,name:"type",className:"my-10",onChange:function(e){return j(e)}}),l.a.createElement("br",null),l.a.createElement("div",{className:"py-10"},l.a.createElement(i.E,{check:a,color:L,size:T,leftLabel:"label"===N?"Left label":"",rightLabel:"label"===N?"Right label":"",leftIcon:"icon"===N?"moon":"",rightIcon:"icon"===N?"sun":"",disabled:g,vertical:C,onChange:function(){return b(!a)}})),l.a.createElement(i.k,{icon:"code",iconSize:18,extra:l.a.createElement(i.l,{defaultText:"Copy code",text:o,className:"mr-10"}),tooltip:"Show/Hide Code"},l.a.createElement(c.a,{language:"jsx",style:s.a},o))),l.a.createElement("h2",null,"API"),l.a.createElement(i.F,{bordered:!0,headers:["Property","Description","Default","Type","Value"],items:u,index:!0,itemTitles:p}))}}}]);