import React, { Component } from "react";
import Card from "../Card/Card";
import './ContainerRoot.scss'




class ContainerRoot extends Component {

    constructor(props) {
        super(props)

        this.state = { data: [] }
    }

    async componentDidMount() {
        const response = await fetch('/cardProduct.json');
        const result = await response.json();
        this.setState({ data: result });
        console.log(result);
    }


    render() {
        console.log(this.state.data);
        return (
            <div className="ContainerRootStyled">
                {this.state.data.map(({ ...item }) => {
                    return (
                        <Card key={item.vendor} valueCard={item} />)
                })}
            </div>
        )
    }
}

export default ContainerRoot;