import React from 'react';
import './Button.scss';

const Button = (props) => {
    return (
        <div className={props.containerClass}>
            <button
                className={"button " + props.buttonClass + " " + props.variant}
                onClick={props.clickHandler}
            >
                {props.label}
            </button>
        </div>
    )
};

export default Button;
