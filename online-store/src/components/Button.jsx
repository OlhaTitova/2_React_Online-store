import React, { Component } from "react";
import styled from 'styled-components';


const ButtonStyled = styled.button`
  min-width: 100px;
  min-height: 40px;
  display: inline-block;
  color: #ffffff;
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
  vertical-align: middle;
  border: 1px solid transparent;
  padding: 7px 15px;
  line-height: 1.5;
  border-radius: 4px;
  margin: 0 15px;
  outline: none;    
`;



class Button extends Component {
    render() {
        return (
            <ButtonStyled onClick={this.props.onClick} style={{ backgroundColor: this.props.backgroundColor }}>
                {this.props.text}
            </ButtonStyled>
        )
    }
}

export default Button;