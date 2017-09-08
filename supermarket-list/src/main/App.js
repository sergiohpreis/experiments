import React from 'react';

import './App.css';

import Input from '../components/Input/Input';
import Item from '../components/Item/Item';


const App = props => (
    <div className="App">
        <Input title="Item" placeholder="Escreva o nome do item"/>
        <Item description="1x Leite Longa Vida"/>
    </div>
);

export default App;
