import React, { Component } from "react";
import Card from "../Card/Card";
import ModalAddCart from "../ModalAddCart/ModalAddCart";
import './CardBox.scss'
import addToCart from "../utilities/cart.js";
import addToFavorite from "../utilities/favorite";


class CardBox extends Component {

  constructor(props) {
    super(props)

    this.state = {
      products: [],
      modalProductId: null
    }
  }

  async componentDidMount() {
    const response = await fetch('/cardProduct.json');
    const result = await response.json();
    this.setState({ products: result });
  }

  handleModalClose = () => this.setState({ modalProductId: null })

  handleModalConfirm = () => {
    addToCart(this.state.modalProductId);
    this.handleModalClose();
  }

  handleFavoriteAdd = () => {
    addToFavorite(this.state.modalProductId);
  }


  render() {
    // console.log(this.state.products);

    return (
      <div className="CardBox">
        {this.state.products.map(product =>
          <Card
            key={product.id}
            product={product}
            onAddToCart={() => this.setState({ modalProductId: product.id })}
            onAddToFavorite={() => this.handleFavoriteAdd(product.id)}
          />
        )}

        {this.state.modalProductId &&
          <ModalAddCart
            onConfirm={this.handleModalConfirm}
            onClose={this.handleModalClose}
          />
        }
      </div>
    );
  }
}

export default CardBox;