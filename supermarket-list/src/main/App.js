import React from 'react';

import './App.css';

import List from '../components/List/List';
import Form from '../components/Form/Form';

const data = [{
    description: 'Leite Longa Vida',
    qtd: 1
}, {
    description: 'Coca Cola',
    qtd: 3
}, {
    description: 'Soda',
    qtd: 2
}];

const add = () => {
    console.log('add');
};

const remove = () => {
    console.log('remove');
};

const App = props => (
    <div className="App">
        <Form title="Supermarket List" />
        <List data={data} handleAdd={add} handleRemove={remove}/>
    </div>
);

export default App;
