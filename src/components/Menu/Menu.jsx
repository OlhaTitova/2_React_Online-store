import React, { Component } from 'react';
import MenuItems from '../MenuItems/MenuItems';
import "./Menu.scss"

class Menu extends Component {
    render() {
        return (
            <div className="Menu">
                <MenuItems className="MenuItems" text="Home" />
                <MenuItems className="MenuItems" text="Category" />
                <MenuItems className="MenuItems" text="Shop" />
                <MenuItems className="MenuItems" text="Cart" />
                <MenuItems className="MenuItems" text="About us" />
            </div>
        )
    }
}

export default Menu;