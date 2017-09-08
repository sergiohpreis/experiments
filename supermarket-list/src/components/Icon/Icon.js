import React from 'react';

import './Icon.css';

const Icon = props => (
    <span className={`icon icon--${props.type}`} onClick={props.onClick}>
        {props.text}
    </span>
);

export default Icon;