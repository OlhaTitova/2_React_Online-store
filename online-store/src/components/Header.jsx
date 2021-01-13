import React, { Component } from 'react';
import styled from 'styled-components';
import Button from './Button'


const HeaderStyled = styled.header`
    display: flex;
    justify-content: space-between;
    padding-left: 24px;
    padding-right: 24px;
    box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    background-color: #fff;
    position: relative;
    align-items: center;
    min-height: 130px;
    top: 0;
    left: auto;
    right: 0;
    position: fixed;
    width: 100%;
    z-index: 1100;
    box-sizing: border-box;
`;


class Header extends Component {
    render() {
        return (
            <HeaderStyled>
                <a href="/#" >
                    <img

                        width="100"
                        height="100"
                        src="/img/logo.jpg"
                        alt="Print on balls"
                    />
                </a>
                <Button backgroundColor="blue" text="Sign in" />
            </HeaderStyled>
        )
    }
}

export default Header;