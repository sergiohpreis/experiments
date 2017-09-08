import React, {Component} from 'react';

import Form from '../../components/Form/Form';
import List from '../../components/List/List';

class SuperMarketList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            description: '',
            qtd: 0
        };
    };

    render() {
        return (
            <div className="supermarket-list">
                <Form title="Supermarket List" />
                <List data={this.state.data}/>
            </div>
        );
    };
};

export default SuperMarketList;