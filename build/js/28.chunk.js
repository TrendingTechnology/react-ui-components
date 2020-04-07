(this["webpackJsonp@assenti/rui-components"]=this["webpackJsonp@assenti/rui-components"]||[]).push([[28],{304:function(e,a,t){"use strict";t.r(a);var o=t(0),n=t.n(o),r=t(3),c=t(329),l=t(47),s=t(48),i=[{class:"ma-{number}",description:"Set all margins",example:"ma-5"},{class:"my-{number}",description:"Set top and bottom margins",example:"my-5"},{class:"mx-{number}",description:"Set right and left margins",example:"my-5"},{class:"ml-{number}",description:"Set left margin",example:"ml-5"},{class:"mr-{number}",description:"Set right margin",example:"mr-5"},{class:"mt-{number}",description:"Set top margin",example:"mt-5"},{class:"mb-{number}",description:"Set bottom margin",example:"mb-5"}],d=[{class:"pa-{number}",description:"Set all paddings",example:"pa-5"},{class:"py-{number}",description:"Set top and bottom paddings",example:"py-5"},{class:"px-{number}",description:"Set right and left paddings",example:"px-5"},{class:"pl-{number}",description:"Set left padding",example:"pl-5"},{class:"pr-{number}",description:"Set right padding",example:"pr-5"},{class:"pt-{number}",description:"Set top padding",example:"pt-5"},{class:"pb-{number}",description:"Set bottom padding",example:"pb-5"}],m=[{class:"row",description:"Set display flex"},{class:"row-inline",description:"Set display inline-flex"},{class:"column",description:"Set flex-direction to column (has effect with row class)"},{class:"wrap",description:"Set flex-wrap (has effect with row class)"},{class:"col",description:"Set flex-grow: 1 (has effect in parent element with row class)"},{class:"align-center",description:"Align items on center (has effect in parent element with row class)"},{class:"align-top",description:"Align items on top (has effect in parent element with row class)"},{class:"align-bottom",description:"Align items on bottom (has effect in parent element with row class)"},{class:"space-between",description:"Justify content with spacing between elements (has effect in parent element with row class)"},{class:"space-around",description:"Justify content with spacing around elements (has effect in parent element with row class)"},{class:"justify-center",description:"Justify content on center (has effect in parent element with row class)"},{class:"justify-start",description:"Justify content on start (has effect in parent element with row class)"},{class:"justify-end",description:"Justify content on end (has effect in parent element with row class)"}],p=[{class:"text-{color}",description:"Set {color} to text"},{class:"bg-{color}",description:"Set {color} to background"}],g=[{class:"fz-5",description:"Set font-size: 0.5rem"},{class:"fz-6",description:"Set font-size: 0.6rem"},{class:"fz-7",description:"Set font-size: 0.7rem"},{class:"fz-8",description:"Set font-size: 0.8rem"},{class:"fz-9",description:"Set font-size: 0.9rem"},{class:"fz-10",description:"Set font-size: 1rem"},{class:"fz-11",description:"Set font-size: 1.1rem"},{class:"fz-12",description:"Set font-size: 1.2rem"},{class:"fz-13",description:"Set font-size: 1.3rem"},{class:"fz-14",description:"Set font-size: 1.4rem"},{class:"fz-15",description:"Set font-size: 1.5rem"},{class:"fz-16",description:"Set font-size: 1.6rem"},{class:"fz-17",description:"Set font-size: 1.7rem"},{class:"fz-18",description:"Set font-size: 1.8rem"},{class:"fz-19",description:"Set font-size: 1.9rem"},{class:"fz-20",description:"Set font-size: 2rem"},{class:"fw-normal",description:"Set font-weight: normal"},{class:"fw-bold",description:"Set font-weight: 600"},{class:"fw-thin",description:"Set font-weight: thin"}],f=[{class:"text-left",description:"Set text alignment on left"},{class:"text-center",description:"Set text alignment on center"},{class:"text-right",description:"Set text alignment on right"}],b=[{name:"primary",value:"#1678c2"},{name:"info",value:"#42a5f5"},{name:"error",value:"#f44336"},{name:"success",value:"#1aaa55"},{name:"yellow",value:"#feda24"},{name:"warning",value:"#ff3d00"},{name:"night",value:"#303846"},{name:"light",value:"#fafafa"},{name:"lightgray",value:"#f0f2f5"},{name:"dark",value:"#4d4d4d"},{name:"gray",value:"#e0e0e0"}];a.default=function(){var e=Object(o.createRef)();return n.a.createElement(r.P.Consumer,null,(function(a){return n.a.createElement("div",{className:"rui-page",ref:e},n.a.createElement("div",{className:"row align-center space-between"},n.a.createElement("div",{className:"rui-page-title"},"Helper CSS classes")),n.a.createElement(r.j,{dark:a,header:n.a.createElement("h4",null,"Margins & Paddings")},n.a.createElement("h4",null,"Margins"),n.a.createElement(r.L,{bordered:!0,dark:a,headers:["Class","Description","Example"],items:i,index:!0,itemTitles:["class","description","example"]}),n.a.createElement("br",null),n.a.createElement("h4",null,"Paddings"),n.a.createElement(r.L,{bordered:!0,dark:a,headers:["Class","Description","Example"],items:d,index:!0,itemTitles:["class","description","example"]})),n.a.createElement("br",null),n.a.createElement(r.j,{dark:a,header:n.a.createElement("h4",null,"Font size and weight")},n.a.createElement(r.L,{bordered:!0,dark:a,headers:["Class","Description"],items:g,index:!0,itemTitles:["class","description"]})),n.a.createElement("br",null),n.a.createElement(r.j,{dark:a,header:n.a.createElement("h4",null,"Text alignment")},n.a.createElement(r.L,{bordered:!0,dark:a,headers:["Class","Description"],items:f,index:!0,itemTitles:["class","description"]})),n.a.createElement("br",null),n.a.createElement(r.j,{dark:a,header:n.a.createElement("h4",null,"Flex box")},n.a.createElement(r.L,{bordered:!0,dark:a,headers:["Class","Description"],items:m,index:!0,itemTitles:["class","description"]})),n.a.createElement("br",null),n.a.createElement(r.j,{dark:a,title:"Set color"},n.a.createElement(r.z,{size:"medium",dark:a},b.map((function(e,a){return n.a.createElement(r.A,{key:a,noDivider:!0,render:n.a.createElement("div",{className:"row align-center space-between"},n.a.createElement("div",{style:{width:100,height:30,border:"1px solid lightgray"},className:"bg-".concat(e.name," border row align-center justify-center fz-9")}),n.a.createElement("div",{className:"ml-10 row align-center"},n.a.createElement("span",null,e.name," (HEX: ",e.value,")"),n.a.createElement(r.m,{text:e.value,className:"ml-5",defaultText:"Copy HEX"})))})}))),n.a.createElement("div",{className:"py-10"},n.a.createElement(c.a,{language:"jsx",style:a?l.a:s.a},'// Usage examples\nimport React from \'react\';\n\nfunction Example() {\n    return (\n        <>\n            <div className="text-primary">Text</div>\n            <div className="bg-primary">Background</div>\n        </>\n    )\n}')),n.a.createElement(r.L,{dark:a,className:"mt-10",bordered:!0,headers:["Class","Description"],items:p,index:!0,itemTitles:["class","description"]})),n.a.createElement(r.d,{setRef:e,size:"medium",dark:!0}))}))}},47:function(e,a,t){"use strict";a.a={'code[class*="language-"]':{color:"#ccc",background:"none",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#ccc",background:"#2d2d2d",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto"},':not(pre) > code[class*="language-"]':{background:"#2d2d2d",padding:".1em",borderRadius:".3em",whiteSpace:"normal"},comment:{color:"#999"},"block-comment":{color:"#999"},prolog:{color:"#999"},doctype:{color:"#999"},cdata:{color:"#999"},punctuation:{color:"#ccc"},tag:{color:"#e2777a"},"attr-name":{color:"#e2777a"},namespace:{color:"#e2777a"},deleted:{color:"#e2777a"},"function-name":{color:"#6196cc"},boolean:{color:"#f08d49"},number:{color:"#f08d49"},function:{color:"#f08d49"},property:{color:"#f8c555"},"class-name":{color:"#f8c555"},constant:{color:"#f8c555"},symbol:{color:"#f8c555"},selector:{color:"#cc99cd"},important:{color:"#cc99cd",fontWeight:"bold"},atrule:{color:"#cc99cd"},keyword:{color:"#cc99cd"},builtin:{color:"#cc99cd"},string:{color:"#7ec699"},char:{color:"#7ec699"},"attr-value":{color:"#7ec699"},regex:{color:"#7ec699"},variable:{color:"#7ec699"},operator:{color:"#67cdcc"},entity:{color:"#67cdcc",cursor:"help"},url:{color:"#67cdcc"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},inserted:{color:"green"}}},48:function(e,a,t){"use strict";a.a={'code[class*="language-"]':{color:"black",background:"none",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"black",background:"none",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",position:"relative",margin:".5em 0",overflow:"visible",padding:"0",backgroundColor:"#fdfdfd",WebkitBoxSizing:"border-box",MozBoxSizing:"border-box",boxSizing:"border-box",marginBottom:"1em"},'pre[class*="language-"]>code':{position:"relative",borderLeft:"10px solid #358ccb",boxShadow:"-1px 0px 0px 0px #358ccb, 0px 0px 0px 1px #dfdfdf",backgroundColor:"#fdfdfd",backgroundImage:"linear-gradient(transparent 50%, rgba(69, 142, 209, 0.04) 50%)",backgroundSize:"3em 3em",backgroundOrigin:"content-box",backgroundAttachment:"local"},'code[class*="language"]':{maxHeight:"inherit",height:"inherit",padding:"0 1em",display:"block",overflow:"auto"},':not(pre) > code[class*="language-"]':{backgroundColor:"#fdfdfd",WebkitBoxSizing:"border-box",MozBoxSizing:"border-box",boxSizing:"border-box",marginBottom:"1em",position:"relative",padding:".2em",borderRadius:"0.3em",color:"#c92c2c",border:"1px solid rgba(0, 0, 0, 0.1)",display:"inline",whiteSpace:"normal"},'pre[class*="language-"]:before':{content:"''",zIndex:"-2",display:"block",position:"absolute",bottom:"0.75em",left:"0.18em",width:"40%",height:"20%",maxHeight:"13em",boxShadow:"0px 13px 8px #979797",WebkitTransform:"rotate(-2deg)",MozTransform:"rotate(-2deg)",msTransform:"rotate(-2deg)",OTransform:"rotate(-2deg)",transform:"rotate(-2deg)"},'pre[class*="language-"]:after':{content:"''",zIndex:"-2",display:"block",position:"absolute",bottom:"0.75em",left:"auto",width:"40%",height:"20%",maxHeight:"13em",boxShadow:"0px 13px 8px #979797",WebkitTransform:"rotate(2deg)",MozTransform:"rotate(2deg)",msTransform:"rotate(2deg)",OTransform:"rotate(2deg)",transform:"rotate(2deg)",right:"0.75em"},':not(pre) > code[class*="language-"]:after':{right:"0.75em",left:"auto",WebkitTransform:"rotate(2deg)",MozTransform:"rotate(2deg)",msTransform:"rotate(2deg)",OTransform:"rotate(2deg)",transform:"rotate(2deg)"},comment:{color:"#7D8B99"},"block-comment":{color:"#7D8B99"},prolog:{color:"#7D8B99"},doctype:{color:"#7D8B99"},cdata:{color:"#7D8B99"},punctuation:{color:"#5F6364"},property:{color:"#c92c2c"},tag:{color:"#c92c2c"},boolean:{color:"#c92c2c"},number:{color:"#c92c2c"},"function-name":{color:"#c92c2c"},constant:{color:"#c92c2c"},symbol:{color:"#c92c2c"},deleted:{color:"#c92c2c"},selector:{color:"#2f9c0a"},"attr-name":{color:"#2f9c0a"},string:{color:"#2f9c0a"},char:{color:"#2f9c0a"},function:{color:"#2f9c0a"},builtin:{color:"#2f9c0a"},inserted:{color:"#2f9c0a"},operator:{color:"#a67f59",background:"rgba(255, 255, 255, 0.5)"},entity:{color:"#a67f59",background:"rgba(255, 255, 255, 0.5)",cursor:"help"},url:{color:"#a67f59",background:"rgba(255, 255, 255, 0.5)"},variable:{color:"#a67f59",background:"rgba(255, 255, 255, 0.5)"},atrule:{color:"#1990b8"},"attr-value":{color:"#1990b8"},keyword:{color:"#1990b8"},"class-name":{color:"#1990b8"},regex:{color:"#e90"},important:{color:"#e90",fontWeight:"normal"},".language-css .token.string":{color:"#a67f59",background:"rgba(255, 255, 255, 0.5)"},".style .token.string":{color:"#a67f59",background:"rgba(255, 255, 255, 0.5)"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},".namespace":{Opacity:".7"},"tab:not(:empty):before":{color:"#e0d7d1"},"cr:before":{color:"#e0d7d1"},"lf:before":{color:"#e0d7d1"},'pre[class*="language-"].line-numbers.line-numbers':{paddingLeft:"0"},'pre[class*="language-"].line-numbers.line-numbers code':{paddingLeft:"3.8em"},'pre[class*="language-"].line-numbers.line-numbers .line-numbers-rows':{left:"0"},'pre[class*="language-"][data-line]':{paddingTop:"0",paddingBottom:"0",paddingLeft:"0"},"pre[data-line] code":{position:"relative",paddingLeft:"4em"},"pre .line-highlight":{marginTop:"0"}}}}]);