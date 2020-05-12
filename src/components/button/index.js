import React from 'react';
import PropTypes from 'prop-types'; 
import { Icon } from '../index';
import { strinfigyClassObject } from '../utils';

const Button = React.forwardRef((props, ref) => {
    let className = {
        btn: 'rui-btn',
        lifted: props.lifted ? 'lifted' : '',
        loading: props.loading ? 'loading' : '',
        uppercase: props.uppercase ? 'uppercase' : '',
        borderType: props.borderType ? props.borderType : '',
        color: props.color && !props.disabled && !props.loading && !props.light && !props.dark ? props.color : 'secondary',
        light: props.light && !props.dark ? 'light' : '',
        dark: props.dark && !props.light ? 'dark' : '',
        icon: props.icon && !props.name ? 'icon' : '',
        disabled: props.disabled || props.loading ? 'disabled' : '',
        size: props.size ? props.size : '',
        block: props.block ? 'block' : '',
        outlined: props.outlined ? 'outlined' : '',
        allotted: props.iconAllotted ? 'allotted' : '',
        iconLeft: props.iconLeft ? 'icon-left' : '',
        className: props.className ? props.className : ''
    }

    const setMargin = () => {
        if (props.icon && !props.iconLeft) return 'rui-btn__text mr-5';
        else if (props.icon && props.iconLeft) return 'rui-btn__text ml-5';
        else return 'rui-btn__text';
    }

    const getIconSize = () => {
        if (props.size === 'medium' || props.size === 'large') return 24;
        return 20;
    }

    return (
        <button
            type={props.type ? props.type : 'button'}
            ref={ref} 
            disabled={props.disabled || props.loading}
            className={strinfigyClassObject(className)} 
            onClick={(e) => props.onClick ? props.onClick(e) : {}}>
            {props.loading ?
                <Icon name="loading" color="gray" size={getIconSize()}/> :
                <>
                    {props.icon && props.iconLeft && 
                        (props.iconAllotted ? 
                            <div className="rui-btn__allotted-icon"><Icon name={props.icon} size={getIconSize()}/></div> :
                            <Icon name={props.icon} size={getIconSize()}/>
                        )}
                    {props.name ? <div className={setMargin()}>{props.name}</div> : ''}
                    {props.icon && !props.iconLeft && 
                        (props.iconAllotted ? 
                            <div className="rui-btn__allotted-icon"><Icon name={props.icon} size={getIconSize()}/></div> :
                            <Icon name={props.icon} size={getIconSize()}/>    
                    )}
                </>
            }
            
        </button>
    )
})
Button.propTypes = {
    name: PropTypes.string,
    onClick: PropTypes.func,
    color: PropTypes.oneOf([undefined,'','default','primary','info','success','error','black','secondary']),
    dark: PropTypes.bool,
    light: PropTypes.bool,
    lifted: PropTypes.bool,
    uppercase: PropTypes.bool,
    loading: PropTypes.bool,
    disabled: PropTypes.bool,
    borderType: PropTypes.oneOf([undefined,'','default','tile','rounded','smooth']),
    icon: PropTypes.string,
    size: PropTypes.oneOf([undefined,'','default','medium','large']),
    block: PropTypes.bool,
    outlined: PropTypes.bool,
    iconAllotted: PropTypes.bool,
    iconLeft: PropTypes.bool,
    type: PropTypes.oneOf([undefined,'submit','reset']),
    className: PropTypes.string
}
export default Button;