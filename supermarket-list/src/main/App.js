import React from 'react';

import './App.css';

import SuperMarketList from './SuperMarketList/SuperMarketList';

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
        <SuperMarketList/>
    </div>
);

export default App;
