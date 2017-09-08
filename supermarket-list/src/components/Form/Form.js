import React from 'react';

import Input from '../Input/Input';
import Button from '../Button/Button';

import './Form.css';

const Form = props => {
    const shortcuts = e => {
        if (e.key === 'Enter') {
            props.handleInclude();
        };
    };

    return (
        <div className="form">
            <h3 className="form__title">{props.title}</h3>
            <div className="form__container form__container--product">
                <Input title="Produto" placeholder="Ex: Leite" value={props.description} onChange={props.handleDescription} onKeyUp={shortcuts}/>
            </div>
            <div className="form__container form__container--qtd">
                <Input title="Qtd" placeholder="Ex: 2" value={props.qtd} onChange={props.handleQtd} onKeyUp={shortcuts}/>
            </div>
            <div className="form__button">
                <Button type="add" text="Include" onClick={props.handleInclude}/>
            </div>
        </div>
    );
}

export default Form;