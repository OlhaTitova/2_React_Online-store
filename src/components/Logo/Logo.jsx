import React, { Component } from "react";
import './Logo.scss';


class Logo extends Component {
    render() {
        return (
            <a href="/#" >
                <img className="Logo"
                    src="/img/logo.jpg"
                    alt="Print on balls"
                />
            </a>
        )
    }
}

export default Logo;