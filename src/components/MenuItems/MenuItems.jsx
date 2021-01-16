import React, { Component } from 'react';
import "./MenuItems.scss"

class MenuItems extends Component {
    render() {
        const { text, className } = this.props;
        return (
            <a className={className} href="/#">{text}</a>
        )
    }
}

export default MenuItems;