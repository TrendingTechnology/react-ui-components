(this["webpackJsonp@assenti/rui-components"]=this["webpackJsonp@assenti/rui-components"]||[]).push([[33],{292:function(e,o,a){"use strict";a.r(o);var n=a(1),r=a(0),t=a.n(r),l=a(3),c=a(329),s=a(47),i=a(48),d='// Usage examples\nimport React, { useState } from \'react\';\nimport { Button, Modal, Checkbox, InputField, Switch } from \'@assenti/rui-components\';\n\nfunction Example() {\n    const [modal, setModal] = useState(false);\n    const [reversed, setReversed] = useState(false);\n    const [closable, setClosable] = useState(false);\n    const [centered, setCentered] = useState(false);\n    const [fullScreen, setFullScreen] = useState(false);\n\n    return (\n        <>\n            <Switch \n                color="primary" \n                check={reversed}\n                rightLabel="Reversed header"\n                className="pl-10 my-10"\n                onChange={() => setReversed(!reversed)}/>\n            <Switch \n                color="primary" \n                check={closable}\n                rightLabel="Close on background"\n                className="pl-10 my-10"\n                onChange={() => setClosable(!closable)}/>\n            <br/>\n            <Switch \n                color="primary" \n                check={centered}\n                rightLabel="Centered"\n                className="pl-10 my-10"\n                onChange={() => setCentered(!centered)}/>\n            <Switch \n                color="primary" \n                check={fullScreen}\n                rightLabel="With full screen option"\n                className="pl-10 my-10"\n                onChange={() => setFullScreen(!fullScreen)}/>\n            <Divider/>\n            <br/>\n            <Button\n                color="primary"\n                name="Open Modal"\n                onClick={() => setModal(true)}/>\n            <Modal\n                closable={closable}\n                dark={theme}\n                centered={centered}\n                toggleFullscreen={fullScreen}\n                onClose={() => setModal(false)} \n                visible={modal} \n                header={<div>Sign in</div>}>\n                <div className="pa-10">\n                    <InputField\n                        className="my-15 mx-0"\n                        dark={theme}\n                        prefix={<Icon name="account" />} \n                        placeholder="Login"/>\n                    <InputField\n                        className="my-15 mx-0"\n                        dark={theme}\n                        prefix={<Icon name="key" />} \n                        placeholder="Password"\n                        type="password"/>\n                    <Checkbox\n                        className="my-15 mx-0" \n                        color="primary" \n                        label="Remember me?"/>\n                    <Button \n                        className="my-15 mx-0"\n                        color="primary" \n                        name="Sign in" block/>\n                    <div className="fz-9 rui-link text-center py-10">\n                        Dont\'t have an account?\n                    </div>\n                </div>\n            </Modal>\n        </>\n    )\n}',m=["property","description","default","type","value"],p=[{property:"visible",description:"Set modal visible state",default:"",type:"boolean",value:"true | false"},{property:"onClose",description:"Ivokes on close icon click",default:"",type:"function",value:""},{property:"closable",description:"Set closable on modal overlay click",default:"false",type:"boolean",value:"true | false"},{property:"centered",description:"Set modal vertical position - center",default:"false",type:"boolean",value:"true | false"},{property:"marginTop",description:"Set margin top (has no effect with centered prop)",default:"20px",type:"number | string",value:""},{property:"padding",description:"Set modal body padding",default:"15px",type:"number | string",value:""},{property:"toggleFullscreen",description:"Enable modal fullscreen mode",default:"false",type:"boolean",value:"true | false"},{property:"headerReverse",description:"Reverse modal header icons position",default:"false",type:"boolean",value:"true | false"},{property:"closeIconColor",description:"Set close icon color",default:"gray",type:"string",value:"hex | rgb() | css preset colors"},{property:"fullscreenIconColor",description:"Set fullscreen icon color",default:"gray",type:"string",value:"hex | rgb() | css preset colors"},{property:"dark",description:"Set modal dark mode",default:"false",type:"boolean",value:"true | false"},{property:"header",description:"Set modal header",default:"",type:"any",value:""},{property:"footer",description:"Set modal footer",default:"",type:"any",value:""},{property:"className",description:"Set css custom class",default:"",type:"string",value:""}];o.default=function(){var e=Object(r.useState)(!1),o=Object(n.a)(e,2),a=o[0],u=o[1],g=Object(r.useState)(!1),b=Object(n.a)(g,2),f=b[0],h=b[1],y=Object(r.useState)(!1),k=Object(n.a)(y,2),S=k[0],x=k[1],v=Object(r.useState)(!1),w=Object(n.a)(v,2),z=w[0],C=w[1],M=Object(r.useState)(!1),E=Object(n.a)(M,2),T=E[0],N=E[1];return t.a.createElement(l.P.Consumer,null,(function(e){return t.a.createElement("div",{className:"rui-page"},t.a.createElement("div",{className:"rui-page-title"},"<Modal/>"," Component"),t.a.createElement(l.j,{dark:e,header:t.a.createElement("h4",null,"Usage")},t.a.createElement(l.K,{color:"primary",check:f,rightLabel:"Reversed header",className:"pl-10 my-10",onChange:function(){return h(!f)}}),t.a.createElement(l.K,{color:"primary",check:S,rightLabel:"Close on background",className:"pl-10 my-10",onChange:function(){return x(!S)}}),t.a.createElement("br",null),t.a.createElement(l.K,{color:"primary",check:z,rightLabel:"Centered",className:"pl-10 my-10",onChange:function(){return C(!z)}}),t.a.createElement(l.K,{color:"primary",check:T,rightLabel:"With full screen option",className:"pl-10 my-10",onChange:function(){return N(!T)}}),t.a.createElement(l.o,null),t.a.createElement("br",null),t.a.createElement(l.g,{color:"primary",name:"Open Modal",onClick:function(){return u(!0)}}),t.a.createElement(l.B,{closable:S,dark:e,centered:z,toggleFullscreen:T,onClose:function(){return u(!1)},visible:a,header:t.a.createElement("div",null,"Sign in")},t.a.createElement("div",{className:"pa-10"},t.a.createElement(l.x,{className:"my-15 mx-0",dark:e,prefix:t.a.createElement(l.w,{name:"account"}),placeholder:"Login"}),t.a.createElement(l.x,{className:"my-15 mx-0",dark:e,prefix:t.a.createElement(l.w,{name:"key"}),placeholder:"Password",type:"password"}),t.a.createElement(l.k,{className:"my-15 mx-0",color:"primary",label:"Remember me?"}),t.a.createElement(l.g,{className:"my-15 mx-0",color:"primary",name:"Sign in",block:!0}),t.a.createElement("div",{className:"fz-9 rui-link text-center py-10"},"Dont't have an account?"))),t.a.createElement(l.l,{icon:"code",iconSize:18,dark:e,extra:t.a.createElement(l.m,{defaultText:"Copy code",dark:e,text:d,className:"mr-10"}),tooltip:"Show/Hide Code"},t.a.createElement(c.a,{language:"jsx",style:e?s.a:i.a},d))),t.a.createElement("h2",null,"API"),t.a.createElement(l.L,{bordered:!0,dark:e,headers:["Property","Description","Default","Type","Value"],items:p,index:!0,itemTitles:m}))}))}},47:function(e,o,a){"use strict";o.a={'code[class*="language-"]':{color:"#ccc",background:"none",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#ccc",background:"#2d2d2d",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto"},':not(pre) > code[class*="language-"]':{background:"#2d2d2d",padding:".1em",borderRadius:".3em",whiteSpace:"normal"},comment:{color:"#999"},"block-comment":{color:"#999"},prolog:{color:"#999"},doctype:{color:"#999"},cdata:{color:"#999"},punctuation:{color:"#ccc"},tag:{color:"#e2777a"},"attr-name":{color:"#e2777a"},namespace:{color:"#e2777a"},deleted:{color:"#e2777a"},"function-name":{color:"#6196cc"},boolean:{color:"#f08d49"},number:{color:"#f08d49"},function:{color:"#f08d49"},property:{color:"#f8c555"},"class-name":{color:"#f8c555"},constant:{color:"#f8c555"},symbol:{color:"#f8c555"},selector:{color:"#cc99cd"},important:{color:"#cc99cd",fontWeight:"bold"},atrule:{color:"#cc99cd"},keyword:{color:"#cc99cd"},builtin:{color:"#cc99cd"},string:{color:"#7ec699"},char:{color:"#7ec699"},"attr-value":{color:"#7ec699"},regex:{color:"#7ec699"},variable:{color:"#7ec699"},operator:{color:"#67cdcc"},entity:{color:"#67cdcc",cursor:"help"},url:{color:"#67cdcc"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},inserted:{color:"green"}}},48:function(e,o,a){"use strict";o.a={'code[class*="language-"]':{color:"black",background:"none",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"black",background:"none",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",position:"relative",margin:".5em 0",overflow:"visible",padding:"0",backgroundColor:"#fdfdfd",WebkitBoxSizing:"border-box",MozBoxSizing:"border-box",boxSizing:"border-box",marginBottom:"1em"},'pre[class*="language-"]>code':{position:"relative",borderLeft:"10px solid #358ccb",boxShadow:"-1px 0px 0px 0px #358ccb, 0px 0px 0px 1px #dfdfdf",backgroundColor:"#fdfdfd",backgroundImage:"linear-gradient(transparent 50%, rgba(69, 142, 209, 0.04) 50%)",backgroundSize:"3em 3em",backgroundOrigin:"content-box",backgroundAttachment:"local"},'code[class*="language"]':{maxHeight:"inherit",height:"inherit",padding:"0 1em",display:"block",overflow:"auto"},':not(pre) > code[class*="language-"]':{backgroundColor:"#fdfdfd",WebkitBoxSizing:"border-box",MozBoxSizing:"border-box",boxSizing:"border-box",marginBottom:"1em",position:"relative",padding:".2em",borderRadius:"0.3em",color:"#c92c2c",border:"1px solid rgba(0, 0, 0, 0.1)",display:"inline",whiteSpace:"normal"},'pre[class*="language-"]:before':{content:"''",zIndex:"-2",display:"block",position:"absolute",bottom:"0.75em",left:"0.18em",width:"40%",height:"20%",maxHeight:"13em",boxShadow:"0px 13px 8px #979797",WebkitTransform:"rotate(-2deg)",MozTransform:"rotate(-2deg)",msTransform:"rotate(-2deg)",OTransform:"rotate(-2deg)",transform:"rotate(-2deg)"},'pre[class*="language-"]:after':{content:"''",zIndex:"-2",display:"block",position:"absolute",bottom:"0.75em",left:"auto",width:"40%",height:"20%",maxHeight:"13em",boxShadow:"0px 13px 8px #979797",WebkitTransform:"rotate(2deg)",MozTransform:"rotate(2deg)",msTransform:"rotate(2deg)",OTransform:"rotate(2deg)",transform:"rotate(2deg)",right:"0.75em"},':not(pre) > code[class*="language-"]:after':{right:"0.75em",left:"auto",WebkitTransform:"rotate(2deg)",MozTransform:"rotate(2deg)",msTransform:"rotate(2deg)",OTransform:"rotate(2deg)",transform:"rotate(2deg)"},comment:{color:"#7D8B99"},"block-comment":{color:"#7D8B99"},prolog:{color:"#7D8B99"},doctype:{color:"#7D8B99"},cdata:{color:"#7D8B99"},punctuation:{color:"#5F6364"},property:{color:"#c92c2c"},tag:{color:"#c92c2c"},boolean:{color:"#c92c2c"},number:{color:"#c92c2c"},"function-name":{color:"#c92c2c"},constant:{color:"#c92c2c"},symbol:{color:"#c92c2c"},deleted:{color:"#c92c2c"},selector:{color:"#2f9c0a"},"attr-name":{color:"#2f9c0a"},string:{color:"#2f9c0a"},char:{color:"#2f9c0a"},function:{color:"#2f9c0a"},builtin:{color:"#2f9c0a"},inserted:{color:"#2f9c0a"},operator:{color:"#a67f59",background:"rgba(255, 255, 255, 0.5)"},entity:{color:"#a67f59",background:"rgba(255, 255, 255, 0.5)",cursor:"help"},url:{color:"#a67f59",background:"rgba(255, 255, 255, 0.5)"},variable:{color:"#a67f59",background:"rgba(255, 255, 255, 0.5)"},atrule:{color:"#1990b8"},"attr-value":{color:"#1990b8"},keyword:{color:"#1990b8"},"class-name":{color:"#1990b8"},regex:{color:"#e90"},important:{color:"#e90",fontWeight:"normal"},".language-css .token.string":{color:"#a67f59",background:"rgba(255, 255, 255, 0.5)"},".style .token.string":{color:"#a67f59",background:"rgba(255, 255, 255, 0.5)"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},".namespace":{Opacity:".7"},"tab:not(:empty):before":{color:"#e0d7d1"},"cr:before":{color:"#e0d7d1"},"lf:before":{color:"#e0d7d1"},'pre[class*="language-"].line-numbers.line-numbers':{paddingLeft:"0"},'pre[class*="language-"].line-numbers.line-numbers code':{paddingLeft:"3.8em"},'pre[class*="language-"].line-numbers.line-numbers .line-numbers-rows':{left:"0"},'pre[class*="language-"][data-line]':{paddingTop:"0",paddingBottom:"0",paddingLeft:"0"},"pre[data-line] code":{position:"relative",paddingLeft:"4em"},"pre .line-highlight":{marginTop:"0"}}}}]);