import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

const Wrapper = styled.div `
  width: 100%;
  height: auto;
  background-color: rgba(0,0,0,0.2);
  ul{
    margin:0 auto;
    overflow: hidden;
    display: table;
    li{
      padding: 4px 12px;
      text-align: center;
      text-decoration: none;
      list-style: none;
      float:left;
    }
  }
`;

class Header extends Component {
    dupa() {}
    render() {
        return (
            <Wrapper>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                </ul>
            </Wrapper>
        );
    }
}
export default Header;
