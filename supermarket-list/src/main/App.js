import React from 'react';

import './App.css';

import Input from '../components/Input/Input';
import List from '../components/List/List';

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
        <Input title="Item" placeholder="Escreva o nome do item"/>
        <List title="Supermarket List" data={data} handleAdd={add} handleRemove={remove}/>
    </div>
);

export default App;
