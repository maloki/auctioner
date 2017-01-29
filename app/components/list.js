import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class List extends Component {
    add() {
        console.log(this);
        this.props.addToList(Math.random() * 999);
    }
    remove(item) {
        console.log("removed ");
        this.props.removeFromList(item);
    }
    render() {

        return (
            <div>
                {this.props.list.items.map((item, i) => <div onClick={this.remove.bind(this, item)} key={i}>{item}</div>)}
                <button onClick={this.add.bind(this)}>Add to list</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {list: state.list};

}
export default connect(mapStateToProps, actions)(List);
