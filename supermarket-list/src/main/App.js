import React from 'react';

import './App.css';

import Input from '../components/Input/Input';
import Icon from '../components/Icon/Icon';


const App = props => (
    <div className="App">
        <Input title="Item" placeholder="Escreva o nome do item"/>
        <Icon type="add" text="Add"/>
        <Icon type="remove" text="Remove"/>
    </div>
);

export default App;
