(this["webpackJsonp@assenti/rui-components"]=this["webpackJsonp@assenti/rui-components"]||[]).push([[20],{285:function(e,o,t){"use strict";t.r(o);var n=t(1),a=t(0),r=t.n(a),l=t(3),c=t(329),i=t(47),s=t(48),d=["property","description","default","type","value"],p=[{property:"onClick",description:"Handle button click",default:"",type:"function",value:"return a button click event object"},{property:"name",description:"Set button name (can be set with icon)",default:"",type:"string",value:""},{property:"type",description:"Set button type",default:"button",type:"string",value:"button | submit | reset"},{property:"lifted",description:"Lift up the button",default:"false",type:"boolean",value:"true | false"},{property:"color",description:"Set background and border color of button from list",default:"",type:"string",value:"primary | info | success | error | black | secondary"},{property:"disabled",description:"Make Button disabled",default:"false",type:"boolean",value:"true | false"},{property:"loading",description:"Activate loading and make Button disabled",default:"false",type:"boolean",value:"true | false"},{property:"borderType",description:"Set Button border type",default:"false",type:"boolean",value:"smooth | rounded | tile"},{property:"outlined",description:"Make button background transparent and outline borders",default:"false",type:"boolean",value:"true | false"},{property:"uppercase",description:"Transform text to upper case",default:"false",type:"boolean",value:"true | false"},{property:"block",description:"Fills the parent component width",default:"false",type:"boolean",value:"true | false"},{property:"size",description:"Set button size",default:"",type:"string",value:"medium | large"},{property:"icon",description:"Set icon in a button and give circle shape to it (can be set with name)",default:"",type:"string",value:"home | search | etc."},{property:"iconSize",description:"Set icon size",default:"24px",type:"number",value:""},{property:"iconLeft",description:"Change icon position to the left from name",default:"false",type:"boolean",value:"true | false"},{property:"iconAllotted",description:"Allot an icon (has effect with outlined prop)",default:"false",type:"boolean",value:"true | false"},{property:"dark",description:"Set dark mode (can not be used with light prop)",default:"false",type:"boolean",value:"true | false"},{property:"light",description:"Set light mode (can not be used with dark prop)",default:"false",type:"boolean",value:"true | false"},{property:"setRef",description:"Set ref",default:"",type:"React.RefObject",value:""},{property:"className",description:"Set a custom css class to component",default:"",type:"string",value:""}],u='// Usage examples\nimport React, { useState } from \'react\';\nimport { Button, Switch, Select, Icon, RadioGroup } from \'@assenti/react-ui-components\';\nconst sizes = [\'default\', \'medium\', \'large\'];\nconst colors = [\'primary\', \'info\', \'success\', \'error\', \'secondary\', \'black\'];\nconst borders = [\'default\', \'rounded\', \'smooth\', \'tile\'];\nconst types = [\'dark\', \'light\', \'none\'];\n\nfunction Example() {\n    const [loading, setLoading] = useState(false);\n    const [outlined, setOutlined] = useState(false);\n    const [uppercase, setUppercase] = useState(false);\n    const [block, setBlock] = useState(false);\n    const [disabled, setDisabled] = useState(false);\n    const [icon, setIcon] = useState(false);\n    const [iconLeft, setIconLeft] = useState(false);\n    const [lifted, setLifted] = useState(false);\n    const [iconAllotted, setIconAllotted] = useState(false);\n    const [iconOnly, setIconOnly] = useState(false);\n    const [size, setSize] = useState(sizes[0]);\n    const [border, setBorder] = useState(borders[0]);\n    const [color, setColor] = useState(colors[0]);\n    const [type, setType] = useState(\'\');\n\n    return (\n        <>\n            <Select\n                items={sizes}\n                prefix={<Icon name="format-size"/>}\n                width={200}\n                label="Button size"\n                color="primary"\n                className="pl-10"\n                value={size}\n                onChange={v => setSize(v)}/>\n            <br/>\n            <Select\n                items={borders}\n                prefix={<Icon name="shape"/>}\n                width={200}\n                label="Button border type"\n                color="primary"\n                className="pl-10"\n                value={border}\n                onChange={v => setBorder(v)}/>\n            <br/>\n            <Select\n                items={colors}\n                prefix={<Icon name="brush"/>}\n                width={200}\n                label="Button color"\n                color="primary"\n                className="pl-10"\n                value={color}\n                onChange={v => setColor(v)}/>\n            <br/>\n            <Switch \n                color="primary" \n                check={outlined}\n                rightLabel="Outlined"\n                className="pl-10 my-10"\n                onChange={() => setOutlined(!outlined)}/>\n            \n            <Switch \n                check={uppercase} \n                color="primary"\n                rightLabel="Uppercase" \n                className="pl-10 my-10"\n                onChange={() => setUppercase(!uppercase)}/>\n            <br/>\n            <Switch \n                check={loading} \n                color="primary"\n                rightLabel="Loading" \n                className="pl-10 my-10"\n                onChange={() => setLoading(!loading)}/>\n            <Switch \n                check={disabled} \n                color="primary"\n                rightLabel="Disabled" \n                className="pl-10 my-10"\n                onChange={() => setDisabled(!disabled)}/>\n            <br/>\n            <Switch \n                check={block} \n                color="primary"\n                rightLabel="Block" \n                className="pl-10 my-10"\n                onChange={() => setBlock(!block)}/>\n            <Switch \n                check={lifted} \n                color="primary"\n                rightLabel="Lifted" \n                className="pl-10 my-10"\n                onChange={() => setLifted(!lifted)}/>\n            <br/>\n            <Switch \n                check={icon} \n                color="primary"\n                rightLabel="With icon" \n                className="pl-10 my-10"\n                onChange={() => setIcon(!icon)}/>\n            <Switch \n                check={iconLeft} \n                color="primary"\n                rightLabel="Left icon" \n                className="pl-10 my-10"\n                onChange={() => setIconLeft(!iconLeft)}/>\n            <Switch \n                check={iconAllotted} \n                color="primary"\n                rightLabel="Allotted icon" \n                className="pl-10 my-10"\n                onChange={() => setIconAllotted(!iconAllotted)}/>\n            <br/>\n            <Switch \n                check={iconOnly} \n                color="primary"\n                rightLabel="Icon button" \n                className="pl-10 my-10"\n                onChange={() => setIconOnly(!iconOnly)}/>\n            <br/>\n            <RadioGroup\n                options={types} \n                value={type}\n                name="type"\n                className="pl-10 mt-10" \n                onChange={(value) => setType(value)}/>\n            <br/>\n            <div className="pa-10">\n                <Button\n                    color={color}\n                    size={size}\n                    icon={icon || iconOnly ? \'search\' : \'\'}\n                    iconAllotted={iconAllotted}\n                    iconLeft={iconLeft}\n                    outlined={outlined}\n                    borderType={border}\n                    loading={loading}\n                    disabled={disabled}\n                    block={block}\n                    lifted={lifted}\n                    dark={type === \'dark\' ? true : false}\n                    light={type === \'light\' ? true : false}\n                    uppercase={uppercase}\n                    name={iconOnly ? null : \'Button\'}\n                    />\n            </div>\n        </>\n    )\n}',m=["default","medium","large"],b=["primary","info","success","error","secondary","black"],g=["default","rounded","smooth","tile"],f=["dark","light","none"];o.default=function(){var e=Object(a.useRef)(),o=Object(a.useRef)(),t=Object(a.useState)(!1),h=Object(n.a)(t,2),y=h[0],k=h[1],S=Object(a.useState)(!1),v=Object(n.a)(S,2),w=v[0],x=v[1],z=Object(a.useState)(!1),O=Object(n.a)(z,2),L=O[0],C=O[1],E=Object(a.useState)(!1),B=Object(n.a)(E,2),N=B[0],j=B[1],T=Object(a.useState)(!1),M=Object(n.a)(T,2),A=M[0],I=M[1],H=Object(a.useState)(!1),W=Object(n.a)(H,2),D=W[0],R=W[1],U=Object(a.useState)(!1),K=Object(n.a)(U,2),F=K[0],P=K[1],G=Object(a.useState)(!1),J=Object(n.a)(G,2),V=J[0],q=J[1],Q=Object(a.useState)(!1),X=Object(n.a)(Q,2),Y=X[0],Z=X[1],$=Object(a.useState)(!1),_=Object(n.a)($,2),ee=_[0],oe=_[1],te=Object(a.useState)(m[0]),ne=Object(n.a)(te,2),ae=ne[0],re=ne[1],le=Object(a.useState)(g[0]),ce=Object(n.a)(le,2),ie=ce[0],se=ce[1],de=Object(a.useState)(b[0]),pe=Object(n.a)(de,2),ue=pe[0],me=pe[1],be=Object(a.useState)(""),ge=Object(n.a)(be,2),fe=ge[0],he=ge[1],ye=function(){o.current&&o.current.scrollIntoView({behavior:"smooth",block:"start"})};return r.a.createElement(l.P.Consumer,null,(function(t){return r.a.createElement("div",{className:"rui-page",ref:e},r.a.createElement("div",{className:"row align-center space-between"},r.a.createElement("div",{className:"rui-page-title"},"<Button/>"," Component"),r.a.createElement("div",{onClick:ye,className:"rui-link fz-13 fw-bold"},"API")),r.a.createElement(l.j,{dark:t,header:r.a.createElement("h4",null,"Usage")},r.a.createElement(l.I,{items:m,dark:t,prefix:r.a.createElement(l.w,{name:"format-size"}),width:200,label:"Button size",color:"primary",className:"pl-10",value:ae,onChange:function(e){return re(e)}}),r.a.createElement("br",null),r.a.createElement(l.I,{items:g,prefix:r.a.createElement(l.w,{name:"shape"}),width:200,dark:t,label:"Button border type",color:"primary",className:"pl-10",value:ie,onChange:function(e){return se(e)}}),r.a.createElement("br",null),r.a.createElement(l.I,{items:b,prefix:r.a.createElement(l.w,{name:"brush"}),width:200,dark:t,label:"Button color",color:"primary",className:"pl-10",value:ue,onChange:function(e){return me(e)}}),r.a.createElement("br",null),r.a.createElement(l.K,{color:"primary",check:w,rightLabel:"Outlined",className:"pl-10 my-10",onChange:function(){return x(!w)}}),r.a.createElement(l.K,{check:L,color:"primary",rightLabel:"Uppercase",className:"pl-10 my-10",onChange:function(){return C(!L)}}),r.a.createElement("br",null),r.a.createElement(l.K,{check:y,color:"primary",rightLabel:"Loading",className:"pl-10 my-10",onChange:function(){return k(!y)}}),r.a.createElement(l.K,{check:A,color:"primary",rightLabel:"Disabled",className:"pl-10 my-10",onChange:function(){return I(!A)}}),r.a.createElement("br",null),r.a.createElement(l.K,{check:N,color:"primary",rightLabel:"Block",className:"pl-10 my-10",onChange:function(){return j(!N)}}),r.a.createElement(l.K,{check:V,color:"primary",rightLabel:"Lifted",className:"pl-10 my-10",onChange:function(){return q(!V)}}),r.a.createElement("br",null),r.a.createElement(l.K,{check:D,color:"primary",rightLabel:"With icon",className:"pl-10 my-10",onChange:function(){return R(!D)}}),r.a.createElement(l.K,{check:F,color:"primary",rightLabel:"Left icon",className:"pl-10 my-10",onChange:function(){return P(!F)}}),r.a.createElement(l.K,{check:Y,color:"primary",rightLabel:"Allotted icon",className:"pl-10 my-10",onChange:function(){return Z(!Y)}}),r.a.createElement("br",null),r.a.createElement(l.K,{check:ee,color:"primary",rightLabel:"Icon button",className:"pl-10 my-10",onChange:function(){return oe(!ee)}}),r.a.createElement("br",null),r.a.createElement(l.G,{options:f,value:fe,name:"type",className:"pl-10 mt-10",onChange:function(e){return he(e)}}),r.a.createElement("br",null),r.a.createElement(l.o,null),r.a.createElement("div",{className:"pa-10"},r.a.createElement(l.g,{color:ue,size:ae,icon:D||ee?"search":"",iconAllotted:Y,iconLeft:F,outlined:w,borderType:ie,loading:y,disabled:A,block:N,lifted:V,dark:"dark"===fe,light:"light"===fe,uppercase:L,name:ee?null:"Button"})),r.a.createElement(l.l,{icon:"code",iconSize:18,extra:r.a.createElement(l.m,{defaultText:"Copy code",text:u,className:"mr-10"}),tooltip:"Show/Hide Code"},r.a.createElement(c.a,{language:"jsx",style:t?i.a:s.a},u))),r.a.createElement(l.d,{tooltip:"Up",setRef:e,dark:!0,size:"medium"}),r.a.createElement("h2",{ref:o},"API"),r.a.createElement(l.L,{bordered:!0,dark:t,headers:["Property","Description","Default","Type","Value"],items:p,index:!0,itemTitles:d}))}))}},47:function(e,o,t){"use strict";o.a={'code[class*="language-"]':{color:"#ccc",background:"none",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#ccc",background:"#2d2d2d",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto"},':not(pre) > code[class*="language-"]':{background:"#2d2d2d",padding:".1em",borderRadius:".3em",whiteSpace:"normal"},comment:{color:"#999"},"block-comment":{color:"#999"},prolog:{color:"#999"},doctype:{color:"#999"},cdata:{color:"#999"},punctuation:{color:"#ccc"},tag:{color:"#e2777a"},"attr-name":{color:"#e2777a"},namespace:{color:"#e2777a"},deleted:{color:"#e2777a"},"function-name":{color:"#6196cc"},boolean:{color:"#f08d49"},number:{color:"#f08d49"},function:{color:"#f08d49"},property:{color:"#f8c555"},"class-name":{color:"#f8c555"},constant:{color:"#f8c555"},symbol:{color:"#f8c555"},selector:{color:"#cc99cd"},important:{color:"#cc99cd",fontWeight:"bold"},atrule:{color:"#cc99cd"},keyword:{color:"#cc99cd"},builtin:{color:"#cc99cd"},string:{color:"#7ec699"},char:{color:"#7ec699"},"attr-value":{color:"#7ec699"},regex:{color:"#7ec699"},variable:{color:"#7ec699"},operator:{color:"#67cdcc"},entity:{color:"#67cdcc",cursor:"help"},url:{color:"#67cdcc"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},inserted:{color:"green"}}},48:function(e,o,t){"use strict";o.a={'code[class*="language-"]':{color:"black",background:"none",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"black",background:"none",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",position:"relative",margin:".5em 0",overflow:"visible",padding:"0",backgroundColor:"#fdfdfd",WebkitBoxSizing:"border-box",MozBoxSizing:"border-box",boxSizing:"border-box",marginBottom:"1em"},'pre[class*="language-"]>code':{position:"relative",borderLeft:"10px solid #358ccb",boxShadow:"-1px 0px 0px 0px #358ccb, 0px 0px 0px 1px #dfdfdf",backgroundColor:"#fdfdfd",backgroundImage:"linear-gradient(transparent 50%, rgba(69, 142, 209, 0.04) 50%)",backgroundSize:"3em 3em",backgroundOrigin:"content-box",backgroundAttachment:"local"},'code[class*="language"]':{maxHeight:"inherit",height:"inherit",padding:"0 1em",display:"block",overflow:"auto"},':not(pre) > code[class*="language-"]':{backgroundColor:"#fdfdfd",WebkitBoxSizing:"border-box",MozBoxSizing:"border-box",boxSizing:"border-box",marginBottom:"1em",position:"relative",padding:".2em",borderRadius:"0.3em",color:"#c92c2c",border:"1px solid rgba(0, 0, 0, 0.1)",display:"inline",whiteSpace:"normal"},'pre[class*="language-"]:before':{content:"''",zIndex:"-2",display:"block",position:"absolute",bottom:"0.75em",left:"0.18em",width:"40%",height:"20%",maxHeight:"13em",boxShadow:"0px 13px 8px #979797",WebkitTransform:"rotate(-2deg)",MozTransform:"rotate(-2deg)",msTransform:"rotate(-2deg)",OTransform:"rotate(-2deg)",transform:"rotate(-2deg)"},'pre[class*="language-"]:after':{content:"''",zIndex:"-2",display:"block",position:"absolute",bottom:"0.75em",left:"auto",width:"40%",height:"20%",maxHeight:"13em",boxShadow:"0px 13px 8px #979797",WebkitTransform:"rotate(2deg)",MozTransform:"rotate(2deg)",msTransform:"rotate(2deg)",OTransform:"rotate(2deg)",transform:"rotate(2deg)",right:"0.75em"},':not(pre) > code[class*="language-"]:after':{right:"0.75em",left:"auto",WebkitTransform:"rotate(2deg)",MozTransform:"rotate(2deg)",msTransform:"rotate(2deg)",OTransform:"rotate(2deg)",transform:"rotate(2deg)"},comment:{color:"#7D8B99"},"block-comment":{color:"#7D8B99"},prolog:{color:"#7D8B99"},doctype:{color:"#7D8B99"},cdata:{color:"#7D8B99"},punctuation:{color:"#5F6364"},property:{color:"#c92c2c"},tag:{color:"#c92c2c"},boolean:{color:"#c92c2c"},number:{color:"#c92c2c"},"function-name":{color:"#c92c2c"},constant:{color:"#c92c2c"},symbol:{color:"#c92c2c"},deleted:{color:"#c92c2c"},selector:{color:"#2f9c0a"},"attr-name":{color:"#2f9c0a"},string:{color:"#2f9c0a"},char:{color:"#2f9c0a"},function:{color:"#2f9c0a"},builtin:{color:"#2f9c0a"},inserted:{color:"#2f9c0a"},operator:{color:"#a67f59",background:"rgba(255, 255, 255, 0.5)"},entity:{color:"#a67f59",background:"rgba(255, 255, 255, 0.5)",cursor:"help"},url:{color:"#a67f59",background:"rgba(255, 255, 255, 0.5)"},variable:{color:"#a67f59",background:"rgba(255, 255, 255, 0.5)"},atrule:{color:"#1990b8"},"attr-value":{color:"#1990b8"},keyword:{color:"#1990b8"},"class-name":{color:"#1990b8"},regex:{color:"#e90"},important:{color:"#e90",fontWeight:"normal"},".language-css .token.string":{color:"#a67f59",background:"rgba(255, 255, 255, 0.5)"},".style .token.string":{color:"#a67f59",background:"rgba(255, 255, 255, 0.5)"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},".namespace":{Opacity:".7"},"tab:not(:empty):before":{color:"#e0d7d1"},"cr:before":{color:"#e0d7d1"},"lf:before":{color:"#e0d7d1"},'pre[class*="language-"].line-numbers.line-numbers':{paddingLeft:"0"},'pre[class*="language-"].line-numbers.line-numbers code':{paddingLeft:"3.8em"},'pre[class*="language-"].line-numbers.line-numbers .line-numbers-rows':{left:"0"},'pre[class*="language-"][data-line]':{paddingTop:"0",paddingBottom:"0",paddingLeft:"0"},"pre[data-line] code":{position:"relative",paddingLeft:"4em"},"pre .line-highlight":{marginTop:"0"}}}}]);