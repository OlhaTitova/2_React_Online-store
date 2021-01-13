import React, { Component } from 'react';
import styled from 'styled-components';

const BoxStyled = styled.div`
    padding: 10px 24px;
    min-height: 25px;
    background-color: #eeeeee;
    display: flex;
    justify-content: center;
    margin-top: 130px;
`;

class Box extends Component {
    render() {
        return (
            <BoxStyled>

                <a href="/#">HOME</a>
                <a href="/#">HOME</a>
                <a href="/#">HOME</a>
                <a href="/#">HOME</a>


            </BoxStyled>
        )
    }
}

export default Box;