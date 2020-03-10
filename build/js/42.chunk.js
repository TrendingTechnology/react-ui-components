(this["webpackJsonp@assenti/rui-components"]=this["webpackJsonp@assenti/rui-components"]||[]).push([[42],{305:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n(0),l=n.n(o),i=n(3),r=n(316),s=n(271),c=["property","description","default","type","value"],m=[{property:"items",description:"Timeline data array",default:"",type:"object[]",value:""},{property:"date",description:"Set timeline date key",default:"",type:"string",value:""},{property:"title",description:"Set timeline title key",default:"",type:"string",value:""},{property:"subtitle",description:"Set timeline subtitle key",default:"",type:"string",value:""},{property:"data",description:"Set timeline custom data",default:"",type:"any",value:""},{property:"centered",description:"Set timeline position to center",default:"false",type:"boolean",value:"true | false"},{property:"flatCard",description:"Set timeline data card flat",default:"false",type:"boolean",value:"true | false"},{property:"color",description:"Set timeline color",default:"",type:"string",value:"primary | info | success | error | yellow | dark"},{property:"tagColor",description:"Set date Tag color",default:"",type:"string",value:"primary | info | success | error | yellow | dark"},{property:"tagOutlined",description:"Set timeline date Tag outlined",default:"",type:"boolean",value:"true | false"},{property:"icon",description:"Set icon",default:"",type:"string",value:"home | search | etc. (see icon names list in docs)"},{property:"className",description:"Set a custom css class to component",default:"",type:"string",value:""}],u=[{date:"2020-02-29",title:"Some event on Feb 29th",subtitle:"Some subtitle"},{date:"2020-02-29",title:"Some event on Feb 29th",subtitle:"Some subtitle"},{date:"2020-02-29",title:"Some event on Feb 29th",subtitle:"Some subtitle"},{date:"2020-02-29",title:"Some event on Feb 29th",subtitle:"Some subtitle"},{date:"2020-02-29",title:"Some event on Feb 29th",subtitle:"Some subtitle"},{date:"2020-02-29",title:"Some event on Feb 29th",subtitle:"Some subtitle"},{date:"2020-02-29",title:"Some event on Feb 29th",subtitle:"Some subtitle"},{date:"2020-02-29",title:"Some event on Feb 29th",subtitle:"Some subtitle"},{date:"2020-02-29",title:"Some event on Feb 29th",subtitle:"Some subtitle"},{date:"2020-02-29",title:"Some event on Feb 29th",subtitle:"Some subtitle"}],d="// Usage examples\nimport React, { useState } from 'react';\nimport { Timeline, Switch, Select, Icon } from '@assenti/react-ui-components';\nconst colors = ['primary', 'info', 'success', 'error', 'dark', 'yellow'];\nconst items = [\n    { date: '2020-02-29', title: 'Some event on Feb 29th', subtitle: 'Some subtitle' },\n    { date: '2020-02-29', title: 'Some event on Feb 29th', subtitle: 'Some subtitle' },\n    { date: '2020-02-29', title: 'Some event on Feb 29th', subtitle: 'Some subtitle' },\n    { date: '2020-02-29', title: 'Some event on Feb 29th', subtitle: 'Some subtitle' },\n    { date: '2020-02-29', title: 'Some event on Feb 29th', subtitle: 'Some subtitle' },\n    { date: '2020-02-29', title: 'Some event on Feb 29th', subtitle: 'Some subtitle' },\n    { date: '2020-02-29', title: 'Some event on Feb 29th', subtitle: 'Some subtitle' },\n    { date: '2020-02-29', title: 'Some event on Feb 29th', subtitle: 'Some subtitle' },\n    { date: '2020-02-29', title: 'Some event on Feb 29th', subtitle: 'Some subtitle' },\n    { date: '2020-02-29', title: 'Some event on Feb 29th', subtitle: 'Some subtitle' }\n]\n\nfunction Example() {\n    const [icon, setIcon] = useState(false);\n    const [tagOutlined, setTagOutlined] = useState(false);\n    const [color, setColor] = useState(colors[0]);\n    const [tagColor, setTagColor] = useState(colors[1]);\n\n    return (\n        <div>\n            <div className=\"row column py-10\">\n                <Switch \n                    color=\"primary\" \n                    check={icon}\n                    rightLabel=\"Icon\"\n                    className=\"my-10\" \n                    onChange={() => setIcon(!icon)}/>\n                <Switch \n                    color=\"primary\" \n                    check={tagOutlined}\n                    className=\"my-10\"\n                    rightLabel=\"Tag outlined\" \n                    onChange={() => setTagOutlined(!tagOutlined)}/>\n            </div>\n            <div className=\"pb-20\">\n                <Select\n                    items={colors}\n                    prefix={<Icon name=\"brush\"/>}\n                    width={200}\n                    label=\"Timeline color\"\n                    color=\"primary\"\n                    className=\"mr-10\"\n                    value={color}\n                    onChange={v => setColor(v)}/>\n                <Select\n                    items={colors}\n                    prefix={<Icon name=\"brush\"/>}\n                    width={200}\n                    color=\"primary\"\n                    label=\"Tag color\"\n                    value={tagColor}\n                    onChange={v => setTagColor(v)}/>\n            </div>\n            <Timeline \n                items={items} \n                date=\"date\"\n                centered\n                color={color}\n                tagOutlined={tagOutlined}\n                tagColor={tagColor}\n                flatCard\n                icon={icon ? 'star' : ''}\n                title=\"title\"\n                subtitle=\"subtitle\"/>\n        </div>\n    )\n}",b=["primary","info","success","error","dark","yellow"];t.default=function(){var e=Object(o.useRef)(),t=Object(o.useRef)(),n=Object(o.useState)(!1),p=Object(a.a)(n,2),S=p[0],h=p[1],y=Object(o.useState)(!1),v=Object(a.a)(y,2),f=v[0],g=v[1],C=Object(o.useState)(b[0]),E=Object(a.a)(C,2),F=E[0],w=E[1],O=Object(o.useState)(b[1]),T=Object(a.a)(O,2),k=T[0],N=T[1];return l.a.createElement("div",{className:"rui-page",ref:t},l.a.createElement("div",{className:"row align-center space-between"},l.a.createElement("div",{className:"rui-page-title"},"<Timeline/>"," Component"),l.a.createElement("div",{onClick:function(){e.current&&e.current.scrollIntoView({behavior:"smooth",block:"center"})},className:"rui-link fz-13 fw-bold mr-10"},"API")),l.a.createElement(i.i,{outlined:!0,title:"Usage"},l.a.createElement("div",{className:"row column py-10"},l.a.createElement(i.E,{color:"primary",check:S,rightLabel:"Icon",className:"my-10",onChange:function(){return h(!S)}}),l.a.createElement(i.E,{color:"primary",check:f,className:"my-10",rightLabel:"Tag outlined",onChange:function(){return g(!f)}})),l.a.createElement("div",{className:"pb-20"},l.a.createElement(i.D,{items:b,prefix:l.a.createElement(i.r,{name:"brush"}),width:200,label:"Timeline color",color:"primary",className:"mr-10",value:F,onChange:function(e){return w(e)}}),l.a.createElement(i.D,{items:b,prefix:l.a.createElement(i.r,{name:"brush"}),width:200,color:"primary",label:"Tag color",value:k,onChange:function(e){return N(e)}})),l.a.createElement(i.J,{items:u,date:"date",centered:!0,color:F,tagOutlined:f,tagColor:k,flatCard:!0,icon:S?"star":"",title:"title",subtitle:"subtitle"}),l.a.createElement(i.k,{icon:"code",iconSize:18,extra:l.a.createElement(i.l,{defaultText:"Copy code",text:d,className:"mr-10"}),tooltip:"Show/Hide Code"},l.a.createElement(r.a,{language:"jsx",style:s.a},d))),l.a.createElement("h2",{ref:e},"API"),l.a.createElement(i.c,{setRef:t,dark:!0,size:"medium"}),l.a.createElement(i.F,{bordered:!0,headers:["Property","Description","Default","Type","Value"],items:m,index:!0,itemTitles:c}))}}}]);