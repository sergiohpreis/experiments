import React from 'react';

import './Item.css';

import Icon from '../Icon/Icon';

const Item = props => (
    <div className="item">
        <h3 className="item__description">
            {props.description}
        </h3>
        <div className="item__actions">
            <Icon type="add" text="Add" onClick={props.handleAdd}/>
            <Icon type="remove" text="Remove" onClick={props.handleRemove}/>
        </div>
    </div>
);

export default Item;