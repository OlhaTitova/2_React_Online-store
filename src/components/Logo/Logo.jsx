import React, { Component } from "react";
import './Logo.scss';


class Logo extends Component {
    render() {
        return (
            <img className="Logo"
                src="img/logo.jpg"
                alt="Print on balls"
            />
        )
    }
}

export default Logo;