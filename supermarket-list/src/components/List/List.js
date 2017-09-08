import React from 'react';

import Item from '../Item/Item';

import './List.css';

const List = props => (
    <div className="list">
        <ul className="list__items">
            {props.data.map((item, index) => <Item
                key={index}
                id={item._id}
                description={`${item.qtd}x | ${item.description}`}
                handleRemove={() => props.handleRemove(item._id)}/>)}
        </ul>
    </div>
);

export default List;