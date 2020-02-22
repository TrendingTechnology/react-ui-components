import React, { useState, createRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Icon } from '../icon';

export const PopOver = (props) => {
    const [visible, setVisible] = useState(false);
    const popup = createRef();
    const content = createRef();

    const popoverClass = () => {
        let result = '';
        let className = {
            name: 'popover',
            dark: props.dark ? 'dark' : '',
            position: props.bottom ? 'bottom' : '',
            className: props.className ? props.className : ''
        }
        
        for (const key in className) {
            if (className[key]) result += className[key] + ' '
        }
        return result.trim();
    }

    return (
        <div className={popoverClass()}
            tabIndex={-1}  
            ref={popup}
            onBlur={() => props.control && !props.noBlur ? props.onClose() : setVisible(false)}
            onMouseLeave={() => props.trigger === 'hover' ? setVisible(false) : {}} >
            <CSSTransition
                in={props.control ? props.visible : visible}
                timeout={150}
                classNames={props.bottom ? 'popdown' : 'popup' }
                unmountOnExit>
                <div className="popover__content" id="popover-content" ref={content}>
                    <div className="popover__content-header">
                        <span>{props.title}</span>
                        <Icon size={18} 
                            name="close" 
                            color={props.dark ? '#fff' : 'gray'} 
                            onClick={() => props.control ? props.onClose() : setVisible(false)}/>
                    </div>
                    <div className="popover__content-body">{props.content}</div>
                </div>
            </CSSTransition>
            <div className="popover__children"
                onMouseOver={() => props.trigger === 'hover' ? setVisible(true) : {}}
                onClick={() => props.trigger !== 'hover' ? 
                    (props.control ? {} : setVisible(!visible)) : {}}>{props.children}</div>
        </div>
    )
}
