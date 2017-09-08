import React from 'react';

import './Input.css';

const Input = props => (
    <div className="input">
        <label className="input__title">{props.title}</label>
        <input className="input__field" type="text" placeholder={props.placeholder} value={props.value} onChange={props.onChange}/>
    </div>
);

export default Input;