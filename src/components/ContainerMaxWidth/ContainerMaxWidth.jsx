import React, { Component } from "react";
import './ContainerMaxWidth.scss';


class ContainerMaxWidth extends Component {
    render() {
        return (
            <div className="ContainerMaxWidth">
                <img className="ContainerMaxWidth__BgImg" src="/img/bgimg2.jpg" alt="Img" />
                <h2 className="ContainerMaxWidth__Heading">Top rated</h2>
            </div>
        )
    }
}

export default ContainerMaxWidth;