import React from 'react';

import './Button.css';

const Button = props => (
    <span className={`button button--${props.type}`} onClick={props.onClick}>
        {props.text}
    </span>
);

export default Button;