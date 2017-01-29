import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import * as actions from '../actions';

const InputAdd = styled.div `
  width:100%;
  overflow:hidden;
  input{
    width:98%;
    font-size:18px;
    padding-left: 16px;
    height: 30px;
  }
`;

class AddTag extends Component {
    handleEnter(e) {
        if (e.key == "Enter") {
            this.props.addTag(e.target.value);
            e.target.value = "";
        }
    }

    render() {
        return (
            <InputAdd>
                <input ref='tag' onKeyDown={(e) => this.handleEnter(e)} placeholder='Add tag to search'/>
            </InputAdd>
        );
    }
}

function mapStateToProps(state) {
    return {tag: state.tag};
}
export default connect(mapStateToProps, actions)(AddTag);
