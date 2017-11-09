import React, { Component } from 'react';
import { connect} from 'react-redux';

import { getList } from '../actions/index.js';

class List extends Component {

    constructor(props){
        super(props);

    }

    componentDidMount(){
        this.props.getList();
    }

    getTodoList(){
        const items = this.props.items;
        if(items == null || items.length == 0){
            return (
                <div>
                    Add a todo item to start with.
                </div>
            )
        } else {
            items.map( (item) => {
                return (
                    <li key={item.id} className="list-group-item">
                        <strong>{item.title}</strong>
                        <span>{item.description}</span>
                    </li>
                )
            })
        }
    }

    render(){
        return (
            <div>
                {this.getTodoList()}
            </div>
        );
    }
}

function mapStateToProps(state){
    return { items: state.list.items }
}

export default connect(mapStateToProps, {getList: getList })(List);