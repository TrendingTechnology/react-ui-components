import React, { useState } from 'react';
import { Header, Card, Table, Button, Collapse, Select, Icon, Switch, CopyToClipboard, ThemeContext, themes, Divider } from '../components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow, coy } from 'react-syntax-highlighter/dist/esm/styles/prism';

const keys = ['property', 'description', 'default', 'type', 'value'];
const items = [
    { 
        property: 'title',
        description: 'Set Header title', 
        default: '', 
        type: 'any',
        value: ''
    },
    { 
        property: 'height',
        description: 'Set Header height', 
        default: '50px', 
        type: 'string | number',
        value: ''
    },
    { 
        property: 'color',
        description: 'Set Header background color', 
        default: '', 
        type: 'string',
        value: 'primary | info | success | info | black'
    },
    { 
        property: 'sticky',
        description: 'Set Header position sticky', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'dark', 
        description: 'Set dark mode', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'leftControl', 
        description: 'Set control button on left side', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'leftControlIcon', 
        description: 'Set control button icon (see icons list)', 
        default: 'menu', 
        type: 'string',
        value: ''
    },
    { 
        property: 'onLeftControl', 
        description: 'Invokes on left control click', 
        default: '', 
        type: 'function',
        value: ''
    },
    { 
        property: 'rightSide',
        description: 'Set right side elements', 
        default: '', 
        type: 'any',
        value: ''
    },
    { 
        property: 'smooth',
        description: 'Make header borders smooth', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'className',
        description: 'Set a custom css class to component', 
        default: '', 
        type: 'string',
        value: ''
    }
]

const usage = 
`// Usage examples
import React from 'react';
import { Header, Button } from '@assenti/react-ui-components';

function Example() {
    return (
        <>
            <Header
                title="Header light" 
                leftControl
                rightSide={<Button icon="account"/>}
        </>
    )
}`

const colors = ['default', 'primary', 'info', 'success', 'error', 'black'];

const HeaderPage = () => {
    const [color, setColor] = useState(colors[0]);
    const [dark, setDark] = useState(false);
    const [smooth, setSmooth] = useState(false);
    const [leftControl, setLeftControl] = useState(true);
    const [rightSide, setRightSide] = useState(false);

    return (
        <ThemeContext.Consumer>
            {theme => (
                <div className="rui-page">
                    <div className="row align-center space-between">
                        <div className="rui-page-title">{'<Header/>'} Component</div>
                    </div>
                    <Card dark={theme} header={<h4>Usage</h4>}>
                        <Header
                            color={!dark ? color : null}
                            smooth={smooth}
                            dark={theme}
                            title="Header" 
                            leftControl={leftControl}
                            rightSide={rightSide ?
                                <Button 
                                    dark={theme || (color && color !== 'default')}
                                    light={color === 'default' && !theme}
                                    icon="account"/> : null}/>
                        <br/>
                        <Divider/>
                        <Select
                            items={colors}
                            prefix={<Icon name="brush"/>}
                            width={200}
                            dark={theme}
                            label="Color theme"
                            color="primary"
                            value={color}
                            onChange={v => setColor(v)}/>
                        <br/>
                        <Switch 
                            color="primary" 
                            check={smooth}
                            rightLabel="Smooth borders"
                            className="my-10"
                            onChange={() => setSmooth(!smooth)}/>
                        <br/>
                        <Switch 
                            color="primary" 
                            check={rightSide}
                            rightLabel="Right side"
                            className="my-10"
                            onChange={() => setRightSide(!rightSide)}/>
                        <br/>
                        <Switch 
                            color="primary" 
                            check={leftControl}
                            rightLabel="Left control"
                            className="my-10"
                            onChange={() => setLeftControl(!leftControl)}/>
                        <Collapse 
                            icon="code" 
                            iconSize={18}
                            dark={theme}
                            extra={<CopyToClipboard 
                                defaultText="Copy code" 
                                text={usage} 
                                dark={theme}
                                className="mr-10"/>} 
                            contentStyles={{ padding: 0 }}
                            tooltip="Show/Hide Code">
                            <SyntaxHighlighter 
                                language="jsx" 
                                style={theme ? tomorrow : coy}>
                                {usage}
                            </SyntaxHighlighter> 
                        </Collapse>
                    </Card>
                    <h2>API</h2>
                    <Table
                        bordered
                        dark={theme}
                        headers={['Property', 'Description', 'Default', 'Type', 'Value']}
                        items={items}
                        index
                        itemTitles={keys}/>
                </div>
            )}
        </ThemeContext.Consumer>
    )
}
export default HeaderPage;