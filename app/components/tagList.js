import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import * as actions from '../actions';

const TagListStyle = styled.div `
  width:100%;
  overflow:hidden;
  margin-top:30px;
  .item{
    padding: 6px 20px 6px 14px;
    border-radius: 10px;
    background-color: #D50C22;
    color:#fff;
    margin-left:10px;
    float:left;
    font-size: 16px;
    text-transform: uppercase;
    position:relative;
    &:hover{
      .remove-item{
        display: block;
      }
    }
    .remove-item{
      display: none;
      position:absolute;
      top:0;
      right:0;
      cursor:pointer;
      font-size:12px;
      padding:6px;
    }
  }
`;

class TagList extends Component {
    removeTag(item) {
        this.props.removeTag(item);
    }
    render() {
        return (
            <TagListStyle>
                {this.props.tag.tags.map(tag => <div className="item">{tag}
                    <div onClick={this.removeTag.bind(this, tag)} className="remove-item">x</div>
                </div>)}
            </TagListStyle>
        );
    }

}

function mapStateToProps(state) {
    return {tag: state.tag};
}

export default connect(mapStateToProps, actions)(TagList);
