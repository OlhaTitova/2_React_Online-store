import React, { Component } from "react";
import './Button.scss'


class Button extends Component {
    render() {
        const { className, onClick, style, text } = this.props;

        return (
            <button
                className={className}
                onClick={onClick}
                style={style}>
                {text}
            </button >
        )
    }
}

export default Button;