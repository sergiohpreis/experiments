import React, {Component} from 'react';

import Form from '../../components/Form/Form';
import List from '../../components/List/List';

class SuperMarketList extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            data: [],
            description: '',
            qtd: '',
            currentID: 0,
        };

        // Binds
        this.handleInclude = this.handleInclude.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
        this.handleQtd = this.handleQtd.bind(this);
    };

    // Responsible for update the description
    handleDescription(e) {
        this.setState({
            description: e.target.value
        }); 
    };

    // Responsible for update the qtd
    handleQtd(e) {
        const regEx = /^\d+$/;
        const value = e.target.value;

        if (value === '' || regEx.test(value)) {
            this.setState({
                qtd: e.target.value
            }); 
        };
    };

    // Responsible for include the item
    handleInclude() {
        let arr = this.state.data;
        
        // Validate if the values are not empty
        if (this.state.description !== '' && this.state.qtd !== '') {
            arr.push({
                _id: this.state.currentID,
                description: this.state.description,
                qtd: this.state.qtd
            });
            
            this.setState({
                data: arr,
                currentID: this.state.currentID + 1
            });
        };
    };

    // Responsible for remove the item
    handleRemove(id) {
        let arr = this.state.data.filter(item => item._id !== id);
        
        this.setState({
            data: arr
        });
    };

    render() {
        return (
            <div className="supermarket-list">
                <Form 
                    title="Supermarket List" 
                    description={this.state.description}
                    qtd={this.state.qtd} 
                    handleDescription={this.handleDescription}
                    handleQtd={this.handleQtd}
                    handleInclude={this.handleInclude}/>
                <List 
                    data={this.state.data}
                    handleRemove={this.handleRemove}/>
            </div>
        );
    };
};

export default SuperMarketList;