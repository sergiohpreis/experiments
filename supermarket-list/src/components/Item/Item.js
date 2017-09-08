import React from 'react';

import './Item.css';

import Button from '../Button/Button';

const Item = props => (
    <div className="item">
        <h3 className="item__description">
            {props.description}
        </h3>
        <div className="item__actions">
            <Button type="remove" text="Remove" onClick={props.handleRemove}/>
        </div>
    </div>
);

export default Item;