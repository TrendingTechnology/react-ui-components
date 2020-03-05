(this["webpackJsonp@assenti/rui-components"]=this["webpackJsonp@assenti/rui-components"]||[]).push([[25],{284:function(e,a,n){"use strict";n.r(a);var t=n(1),l=n(0),r=n.n(l),o=n(3),c=n(310),s=n(271),m=["property","description","default","type","value"],i=[{property:"visible",description:"Set modal visible state",default:"",type:"boolean",value:"true | false"},{property:"onClose",description:"Ivokes on close icon click",default:"",type:"function",value:""},{property:"closable",description:"Set closable on modal overlay click",default:"false",type:"boolean",value:"true | false"},{property:"centered",description:"Set modal vertical position - center",default:"false",type:"boolean",value:"true | false"},{property:"marginTop",description:"Set margin top (has no effect with centered prop)",default:"20px",type:"number | string",value:""},{property:"padding",description:"Set modal body padding",default:"15px",type:"number | string",value:""},{property:"toggleFullscreen",description:"Enable modal fullscreen mode",default:"false",type:"boolean",value:"true | false"},{property:"headerReverse",description:"Reverse modal header icons position",default:"false",type:"boolean",value:"true | false"},{property:"closeIconColor",description:"Set close icon color",default:"gray",type:"string",value:"hex | rgb() | css preset colors"},{property:"fullscreenIconColor",description:"Set fullscreen icon color",default:"gray",type:"string",value:"hex | rgb() | css preset colors"},{property:"dark",description:"Set modal dark mode",default:"false",type:"boolean",value:"true | false"},{property:"header",description:"Set modal header",default:"",type:"any",value:""},{property:"footer",description:"Set modal footer",default:"",type:"any",value:""},{property:"className",description:"Set css custom class",default:"",type:"string",value:""}];a.default=function(){var e=Object(l.useState)(!1),a=Object(t.a)(e,2),n=a[0],d=a[1],p=Object(l.useState)(!1),u=Object(t.a)(p,2),y=u[0],f=u[1],v=Object(l.useState)(!1),b=Object(t.a)(v,2),x=b[0],g=b[1];return r.a.createElement("div",{className:"rui-page"},r.a.createElement("div",{className:"rui-page-title"},"Modal Component"),r.a.createElement(o.f,{outlined:!0,title:"Modal usage"},r.a.createElement(o.d,{color:"primary",name:"Default modal",onClick:function(){return d(!0)}}),r.a.createElement(o.d,{color:"primary",name:"Reversed header modal",onClick:function(){return g(!0)}}),r.a.createElement(o.d,{color:"black",name:"Dark centered modal",onClick:function(){return f(!0)}}),r.a.createElement(o.t,{closable:!0,toggleFullscreen:!0,onClose:function(){return d(!1)},visible:n,header:r.a.createElement("div",null,"Sign in")},r.a.createElement("div",{className:"pa-10"},r.a.createElement(o.p,{className:"my-15 mx-0",prefix:r.a.createElement(o.o,{name:"account"}),placeholder:"Login"}),r.a.createElement(o.p,{className:"my-15 mx-0",prefix:r.a.createElement(o.o,{name:"key"}),placeholder:"Password",type:"password"}),r.a.createElement(o.g,{className:"my-15 mx-0",color:"primary",label:"Remember me?"}),r.a.createElement(o.d,{className:"my-15 mx-0",color:"primary",name:"Sign in",block:!0}),r.a.createElement("div",{className:"fz-9 rui-link text-center py-10"},"Dont't have an account?"))),r.a.createElement(o.t,{closable:!0,toggleFullscreen:!0,headerReverse:!0,onClose:function(){return g(!1)},visible:x,header:r.a.createElement("div",null,"Sign in")},r.a.createElement("div",{className:"pa-10"},r.a.createElement(o.p,{className:"my-15 mx-0",prefix:r.a.createElement(o.o,{name:"account"}),placeholder:"Login"}),r.a.createElement(o.p,{className:"my-15 mx-0",prefix:r.a.createElement(o.o,{name:"key"}),placeholder:"Password",type:"password"}),r.a.createElement(o.g,{className:"my-15 mx-0",color:"primary",label:"Remember me?"}),r.a.createElement(o.d,{className:"my-15 mx-0",color:"primary",name:"Sign in",block:!0}),r.a.createElement("div",{className:"fz-9 rui-link text-center py-10"},"Dont't have an account?"))),r.a.createElement(o.t,{dark:!0,centered:!0,onClose:function(){return f(!1)},visible:y,header:"Sign in"},r.a.createElement("div",{className:"pa-10"},r.a.createElement(o.p,{className:"my-15 mx-0",prefix:r.a.createElement(o.o,{name:"account"}),placeholder:"Login"}),r.a.createElement(o.p,{className:"my-15 mx-0",prefix:r.a.createElement(o.o,{name:"key"}),placeholder:"Password",type:"password"}),r.a.createElement(o.g,{className:"my-15 mx-0",color:"primary",label:"Remember me?"}),r.a.createElement(o.d,{className:"my-15 mx-0",color:"primary",name:"Sign in",block:!0}),r.a.createElement("div",{className:"fz-9 rui-link text-center py-10"},"Dont't have an account?"))),r.a.createElement(o.h,{icon:"code",iconSize:18,tooltip:"Code"},r.a.createElement(c.a,{language:"jsx",style:s.a},'// Usage examples\nimport React, { useState } from \'react\';\nimport { Button, Modal, Checkbox, InputField } from \'@assenti/rui-components\';\n\nfunction Example() {\n    const [modal, setModal] = useState(false);\n    const [modalDark, setModalDark] = useState(false);\n    const [modalReverse, setModalReverse] = useState(false);\n\n    return (\n        <div>\n            <Button\n                color="primary"\n                name="Default modal"\n                onClick={() => setModal(true)}/>\n            <Button\n                color="primary"\n                name="Reversed header modal"\n                onClick={() => setModalReverse(true)}/>\n            <Button\n                color="black"\n                name="Dark centered modal"\n                onClick={() => setModalDark(true)}/>\n            <Modal\n                closable\n                toggleFullscreen\n                onClose={() => setModal(false)} \n                visible={modal} \n                header={<div>Sign in</div>}>\n                <div className="pa-10">\n                    <InputField\n                        className="my-15 mx-0"\n                        prefix={<Icon name="account" />} \n                        placeholder="Login"/>\n                    <InputField\n                        className="my-15 mx-0"\n                        prefix={<Icon name="key" />} \n                        placeholder="Password"\n                        type="password"/>\n                    <Checkbox\n                        className="my-15 mx-0" \n                        color="primary" \n                        label="Remember me?"/>\n                    <Button \n                        className="my-15 mx-0"\n                        color="primary" \n                        name="Sign in" block/>\n                    <div className="fz-9 rui-link text-center py-10">\n                        Dont\'t have an account?\n                    </div>\n                </div>\n            </Modal>\n            <Modal\n                closable\n                toggleFullscreen\n                headerReverse\n                onClose={() => setModalReverse(false)} \n                visible={modalReverse} \n                header={<div>Sign in</div>}>\n                <div className="pa-10">\n                    <InputField\n                        className="my-15 mx-0"\n                        prefix={<Icon name="account" />} \n                        placeholder="Login"/>\n                    <InputField\n                        className="my-15 mx-0"\n                        prefix={<Icon name="key" />} \n                        placeholder="Password"\n                        type="password"/>\n                    <Checkbox\n                        className="my-15 mx-0" \n                        color="primary" \n                        label="Remember me?"/>\n                    <Button \n                        className="my-15 mx-0"\n                        color="primary" \n                        name="Sign in" block/>\n                    <div className="fz-9 rui-link text-center py-10">\n                        Dont\'t have an account?\n                    </div>\n                </div>\n            </Modal>\n            <Modal\n                dark\n                centered\n                onClose={() => setModalDark(false)} \n                visible={modalDark} \n                header="Sign in">\n                <div className="pa-10">\n                    <InputField\n                        className="my-15 mx-0"\n                        prefix={<Icon name="account" />} \n                        placeholder="Login"/>\n                    <InputField\n                        className="my-15 mx-0"\n                        prefix={<Icon name="key" />} \n                        placeholder="Password"\n                        type="password"/>\n                    <Checkbox\n                        className="my-15 mx-0" \n                        color="primary" \n                        label="Remember me?"/>\n                    <Button \n                        className="my-15 mx-0"\n                        color="primary" \n                        name="Sign in" block/>\n                    <div className="fz-9 rui-link text-center py-10">\n                        Dont\'t have an account?\n                    </div>\n                </div>\n            </Modal>\n        </div>\n    )\n}'))),r.a.createElement("h2",null,"API"),r.a.createElement(o.B,{bordered:!0,headers:["Property","Description","Default","Type","Value"],items:i,index:!0,itemTitles:m}))}}}]);
//# sourceMappingURL=25.chunk.js.map