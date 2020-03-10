(this["webpackJsonp@assenti/rui-components"]=this["webpackJsonp@assenti/rui-components"]||[]).push([[20],{275:function(e,t,n){"use strict";n.r(t);var r=n(18),o=n.n(r),a=n(23),i=n(1),c=n(0),l=n.n(c),s=n(3),u=n(316),p=n(271),m='// Usage examples\nimport React, { useState } from \'react\';\nimport { Button, Dialog, Switch } from \'@assenti/rui-components\';\n\nfunction Example() {\n    const [dialog, setDialog] = useState(false);\n    const [dark, setDark] = useState(false);\n    const [confirmOnly, setConfirmOnly] = useState(false);\n\n    const actionImitation = async () => {\n        return new Promise(async (resolve) => {\n            setTimeout(() => {\n                resolve()\n            }, 1500)\n        })\n    }\n\n    return (\n        <div>\n            <Switch \n                color="primary" \n                check={dark}\n                rightLabel="Dark"\n                className="my-10"\n                onChange={() => setDark(!dark)}/>\n            <br/>\n            <Switch \n                color="primary" \n                check={confirmOnly}\n                rightLabel="Confirm only"\n                className="my-10"\n                onChange={() => setConfirmOnly(!confirmOnly)}/>\n            <br/>\n            <Button\n                color="error"\n                name="Delete account"\n                onClick={() => setDialog(true)}/>\n            <Dialog\n                onCancel={() => setDialog(false)}\n                onConfirm={actionImitation}\n                icon="alert"\n                dark={dark}\n                confirmOnly={confirmOnly}\n                confirmText={confirmOnly ? \'OK\' : \'\'}\n                iconColor="red"\n                titleColor="red" \n                visible={dialog} \n                title="Delete"\n                description="Are you sure?"/>\n        </div>\n    )\n}',f=["property","description","default","type","value"],d=[{property:"visible",description:"Set Dialog visible state",default:"",type:"boolean",value:"true | false"},{property:"onConfirm",description:"Ivokes on confirm button click",default:"",type:"promised function",value:""},{property:"onCancel",description:"Ivokes on cancel button click",default:"",type:"function",value:""},{property:"confirmText",description:"Set confirm text",default:"Confirm",type:"string",value:""},{property:"confirmBtnColor",description:"Set confirm button color",default:"primary",type:"string",value:""},{property:"confirmOnly",description:"Set confirm button only",default:"false",type:"boolean",value:"true | false"},{property:"cancelText",description:"Set cancel text",default:"Cancel",type:"string",value:""},{property:"cancelBtnColor",description:"Set cancel button color",default:"secondary",type:"string",value:""},{property:"title",description:"Set Dialog title",default:"",type:"string",value:""},{property:"description",description:"Set Dialog description",default:"",type:"string",value:""},{property:"icon",description:"Set Dialog icon",default:"",type:"string",value:""},{property:"titleColor",description:"Set title color",default:"gray",type:"string",value:"hex | rgb() | css preset colors"},{property:"iconColor",description:"Set icon color",default:"gray",type:"string",value:"hex | rgb() | css preset colors"},{property:"dark",description:"Set modal dark mode",default:"false",type:"boolean",value:"true | false"}];t.default=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],r=t[1],y=Object(c.useState)(!1),g=Object(i.a)(y,2),b=g[0],v=g[1],C=Object(c.useState)(!1),h=Object(i.a)(C,2),k=h[0],S=h[1],D=function(){var e=Object(a.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=Object(a.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){t()}),1500);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return l.a.createElement("div",{className:"rui-page"},l.a.createElement("div",{className:"rui-page-title"},"<Dialog/>"," Component"),l.a.createElement(s.i,{outlined:!0,title:"Usage"},l.a.createElement(s.E,{color:"primary",check:b,rightLabel:"Dark",className:"my-10",onChange:function(){return v(!b)}}),l.a.createElement("br",null),l.a.createElement(s.E,{color:"primary",check:k,rightLabel:"Confirm only",className:"my-10",onChange:function(){return S(!k)}}),l.a.createElement("br",null),l.a.createElement(s.f,{color:"error",name:"Delete account",onClick:function(){return r(!0)}}),l.a.createElement(s.m,{onCancel:function(){return r(!1)},onConfirm:D,icon:"alert",dark:b,confirmOnly:k,confirmText:k?"OK":"",iconColor:"red",titleColor:"red",visible:n,title:"Delete",description:"Are you sure?"}),l.a.createElement(s.k,{icon:"code",iconSize:18,extra:l.a.createElement(s.l,{defaultText:"Copy code",text:m,className:"mr-10"}),tooltip:"Show/Hide Code"},l.a.createElement(u.a,{language:"jsx",style:p.a},m))),l.a.createElement("h2",null,"API"),l.a.createElement(s.F,{bordered:!0,headers:["Property","Description","Default","Type","Value"],items:d,index:!0,itemTitles:f}))}}}]);