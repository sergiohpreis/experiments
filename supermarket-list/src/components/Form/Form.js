import React from 'react';

import Input from '../Input/Input';
import Button from '../Button/Button';

import './Form.css';

const Form = props => (
    <div className="form">
        <h3 className="form__title">{props.title}</h3>
        <div className="form__container form__container--product">
            <Input title="Produto" placeholder="Qual o produto ?" value={props.description} onChange={props.handleDescription}/>
        </div>
        <div className="form__container form__container--qtd">
            <Input title="Qtd" placeholder="Qual a quantidade ?" value={props.qtd} onChange={props.handleQtd}/>
        </div>
        <div className="form__button">
            <Button type="add" text="Include" onClick={props.handleInclude}/>
        </div>
    </div>
);

export default Form;