import React, { Component } from 'react';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import './Header.scss'


class Header extends Component {
    render() {
        return (
            <header className="headerStyled">
                <Logo />
                <Button className="btn" style={{ backgroundColor: "#0061c2" }} text="Sign in" />
            </header>
        )
    }
}

export default Header;