(this["webpackJsonp@assenti/rui-components"]=this["webpackJsonp@assenti/rui-components"]||[]).push([[41],{315:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a(0),l=a.n(n),o=a(3),c=a(316),i=a(271),s='// Usage examples\nimport React, { useState } from \'react\';\nimport { TextareaField, Icon, Select, Switch } from \'@assenti/react-ui-components\';\nconst colors = [\'primary\', \'info\', \'success\', \'error\'];\nconst borders = [\'default\', \'smooth\', \'tile\'];\n\nfunction Example() {\n    const [text, setText] = useState(\'\');\n    const [color, setColor] = useState(colors[0]);\n    const [border, setBorder] = useState(borders[0]);\n    const [required, setRequired] = useState(false);\n    const [hint, setHint] = useState(false);\n    const [label, setLabel] = useState(true);\n    const [white, setWhite] = useState(false);\n    const [lifted, setLifted] = useState(false);\n    const [uppercase, setUppercase] = useState(false);\n    const [prefix, setPrefix] = useState(false);\n    const [placeholder, setPlaceholder] = useState(true);\n\n    return (\n        <>\n            <Select\n                items={colors}\n                prefix={<Icon name="brush"/>}\n                width={200}\n                label="Color"\n                color="primary"\n                className="ml-5"\n                value={color}\n                onChange={v => setColor(v)}/>\n            <br/>\n            <Select\n                items={borders}\n                prefix={<Icon name="shape"/>}\n                width={200}\n                label="Border type"\n                color="primary"\n                className="ml-5"\n                value={border}\n                onChange={v => setBorder(v)}/>\n            <br/>\n            <Switch \n                color="primary" \n                check={required}\n                rightLabel="Required"\n                className="my-10 ml-5"\n                onChange={() => setRequired(!required)}/>\n            <Switch \n                color="primary" \n                check={label}\n                rightLabel="Label"\n                className="my-10 ml-5"\n                onChange={() => setLabel(!label)}/>\n            <br/>\n            <Switch \n                color="primary" \n                check={hint}\n                rightLabel="Hint"\n                className="my-10 ml-5"\n                onChange={() => setHint(!hint)}/>\n            <Switch \n                color="primary" \n                check={white}\n                rightLabel="White background"\n                className="my-10 ml-5"\n                onChange={() => setWhite(!white)}/>\n            <br/>\n            <Switch \n                check={uppercase} \n                color="primary"\n                rightLabel="Uppercase" \n                className="my-10 ml-5"\n                onChange={() => setUppercase(!uppercase)}/>\n            <Switch \n                check={lifted} \n                color="primary"\n                rightLabel="Lifted" \n                className="my-10 ml-5"\n                onChange={() => setLifted(!lifted)}/>\n            <br/>\n            <Switch \n                check={prefix} \n                color="primary"\n                rightLabel="Prefix" \n                className="my-10 ml-5"\n                onChange={() => setPrefix(!prefix)}/>\n            <Switch \n                check={placeholder} \n                color="primary"\n                rightLabel="Placeholder" \n                className="my-10 ml-5"\n                onChange={() => setPlaceholder(!placeholder)}/>\n            <br/>\n            <TextareaField\n                prefix={prefix ? <Icon name="edit"/> : null}\n                label={label ? \'Textarea field\' : null}\n                placeholder={placeholder ? \'Textarea field\' : null} \n                hint={hint ? \'I am a hint\' : null}\n                value={text}\n                lifted={lifted}\n                whiteBackground={white}\n                required={required}\n                maxRows={20}\n                borderType={border}\n                color={color}\n                rows={4}\n                width={300}\n                onChange={e => setText(e.target.value)}/>\n        </>\n    )\n}',u=["property","description","default","type","value"],p=[{property:"onChange",description:"Handle textarea value change",default:"",type:"function",value:"return an input change event object"},{property:"value",description:"Input value",default:"",type:"string",value:""},{property:"rows",description:"Set textarea rows count",default:"1",type:"number",value:""},{property:"maxRows",description:"Set maximum textarea rows",default:"10",type:"number",value:""},{property:"clearable",description:"Allow clear icon on value inputted",default:"false",type:"boolean",value:"true | false"},{property:"onClear",description:"Invokes on clear icon click",default:"",type:"function",value:""},{property:"label",description:"Set label",default:"",type:"string",value:""},{property:"hint",description:"Set hint",default:"",type:"string",value:""},{property:"hintColor",description:"Set hint color",default:"",type:"string",value:"success | error"},{property:"lifted",description:"Lift up the TextareaField",default:"false",type:"boolean",value:"true | false"},{property:"autoFocus",description:"Set focus on component mounted",default:"false",type:"boolean",value:"true | false"},{property:"color",description:"Set color",default:"",type:"string",value:"primary | info | success | error"},{property:"disabled",description:"Set disabled flag",default:"false",type:"boolean",value:"true | false"},{property:"borderType",description:"Set borders type",default:"",type:"string",value:"tile | smooth"},{property:"uppercase",description:"Transform text to upper case",default:"false",type:"boolean",value:"true | false"},{property:"prefix",description:"Set prefix",default:"",type:"any",value:""},{property:"suffix",description:"Set suffix",default:"",type:"any",value:""},{property:"width",description:"Set width",default:"",type:"string | number",value:""},{property:"required",description:"Set required",default:"false",type:"boolean",value:"true | false"},{property:"readOnly",description:"Set readOnly",default:"false",type:"boolean",value:"true | false"},{property:"whiteBackground",description:"Set background color to white",default:"false",type:"boolean",value:"true | false"},{property:"className",description:"Set a custom css class to component",default:"",type:"string",value:""}],m=["primary","info","success","error"],d=["default","smooth","tile"];t.default=function(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),a=t[0],h=t[1],f=Object(n.useState)(m[0]),b=Object(r.a)(f,2),y=b[0],g=b[1],S=Object(n.useState)(d[0]),v=Object(r.a)(S,2),x=v[0],w=v[1],E=Object(n.useState)(!1),C=Object(r.a)(E,2),k=C[0],j=C[1],N=Object(n.useState)(!1),O=Object(r.a)(N,2),L=O[0],T=O[1],q=Object(n.useState)(!0),I=Object(r.a)(q,2),P=I[0],R=I[1],B=Object(n.useState)(!1),F=Object(r.a)(B,2),H=F[0],U=F[1],D=Object(n.useState)(!1),W=Object(r.a)(D,2),z=W[0],A=W[1],J=Object(n.useState)(!1),V=Object(r.a)(J,2),G=V[0],K=V[1],M=Object(n.useState)(!1),Q=Object(r.a)(M,2),X=Q[0],Y=Q[1],Z=Object(n.useState)(!0),$=Object(r.a)(Z,2),_=$[0],ee=$[1],te=Object(n.useRef)(),ae=Object(n.useRef)();return l.a.createElement("div",{className:"rui-page",ref:ae},l.a.createElement("div",{className:"row align-center space-between"},l.a.createElement("div",{className:"rui-page-title"},"<TextareaField/>"," Component"),l.a.createElement("div",{onClick:function(){te.current&&te.current.scrollIntoView({behavior:"smooth",block:"center"})},className:"rui-link fz-13 fw-bold mr-10"},"API")),l.a.createElement(o.i,{outlined:!0,color:"gray",title:"Usage"},l.a.createElement(o.D,{items:m,prefix:l.a.createElement(o.r,{name:"brush"}),width:200,label:"Color",color:"primary",className:"ml-5",value:y,onChange:function(e){return g(e)}}),l.a.createElement("br",null),l.a.createElement(o.D,{items:d,prefix:l.a.createElement(o.r,{name:"shape"}),width:200,label:"Border type",color:"primary",className:"ml-5",value:x,onChange:function(e){return w(e)}}),l.a.createElement("br",null),l.a.createElement(o.E,{color:"primary",check:k,rightLabel:"Required",className:"my-10 ml-5",onChange:function(){return j(!k)}}),l.a.createElement(o.E,{color:"primary",check:P,rightLabel:"Label",className:"my-10 ml-5",onChange:function(){return R(!P)}}),l.a.createElement("br",null),l.a.createElement(o.E,{color:"primary",check:L,rightLabel:"Hint",className:"my-10 ml-5",onChange:function(){return T(!L)}}),l.a.createElement(o.E,{color:"primary",check:H,rightLabel:"White background",className:"my-10 ml-5",onChange:function(){return U(!H)}}),l.a.createElement("br",null),l.a.createElement(o.E,{check:G,color:"primary",rightLabel:"Uppercase",className:"my-10 ml-5",onChange:function(){return K(!G)}}),l.a.createElement(o.E,{check:z,color:"primary",rightLabel:"Lifted",className:"my-10 ml-5",onChange:function(){return A(!z)}}),l.a.createElement("br",null),l.a.createElement(o.E,{check:X,color:"primary",rightLabel:"Prefix",className:"my-10 ml-5",onChange:function(){return Y(!X)}}),l.a.createElement(o.E,{check:_,color:"primary",rightLabel:"Placeholder",className:"my-10 ml-5",onChange:function(){return ee(!_)}}),l.a.createElement("br",null),l.a.createElement(o.I,{prefix:X?l.a.createElement(o.r,{name:"edit"}):null,label:P?"Textarea field":null,placeholder:_?"Textarea field":null,hint:L?"I am a hint":null,value:a,lifted:z,whiteBackground:H,required:k,maxRows:20,borderType:x,color:y,rows:4,width:300,onChange:function(e){return h(e.target.value)}}),l.a.createElement(o.k,{icon:"code",iconSize:18,extra:l.a.createElement(o.l,{defaultText:"Copy code",text:s,className:"mr-10"}),tooltip:"Show/Hide Code"},l.a.createElement(c.a,{language:"jsx",style:i.a},s))),l.a.createElement(o.c,{setRef:ae,dark:!0,size:"medium"}),l.a.createElement("h2",{ref:te},"TextareaField API"),l.a.createElement(o.F,{bordered:!0,headers:["Property","Description","Default","Type","Value"],items:p,index:!0,itemTitles:u}))}}}]);