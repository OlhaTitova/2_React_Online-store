import React, { Component } from "react";
import Product from "../Product/Product";
import ModalAddCart from "../ModalAddCart/ModalAddCart";
import './ProductList.scss'
import addToCart from "../utilities/cart.js";
import addToFavorite from "../utilities/favorite";


class ProductList extends Component {

  constructor(props) {
    super(props)

    this.state = {
      products: [],
      modalProductId: null,
      colorSVG: "m10 17c - 0.28473 0-0.55923 - 0.0985 - 0.77316 - 0.2776 - 0.80796 - 0.6749 - 1.5869 - 1.3092 - 2.2742 - 1.8688l- 0.00351 - 0.0029c - 2.0149 - 1.6405 - 3.7549 - 3.0572 - 4.9655 - 4.4528 - 1.3533 - 1.5601 - 1.9836 - 3.0394 - 1.9836 - 4.6554 0 - 1.5701 0.56351 - 3.0186 1.5866 - 4.0788 1.0353 - 1.0728 2.4559 - 1.6637 4.0006 - 1.6637 1.1545 0 2.2118 0.34871 3.1424 1.0364 0.46967 0.34711 0.89539 0.77192 1.2704 1.2674 0.3752 - 0.49551 0.8008 - 0.92032 1.2706 - 1.2674 0.9306 - 0.68766 1.9879 - 1.0364 3.1424 - 1.0364 1.5445 0 2.9652 0.59086 4.0005 1.6637 1.0231 1.0603 1.5865 2.5088 1.5865 4.0788 0 1.616 - 0.6302 3.0953 - 1.9835 4.6553 - 1.2106 1.3957 - 2.9504 2.8123 - 4.965 4.4526 - 0.6885 0.5604 - 1.4687 1.1957 - 2.2785 1.8723 - 0.2138 0.1788 - 0.4884 0.2773 - 0.773 0.2773zm - 4.4128 - 15.881c - 1.2135 0 - 2.3283 0.46271 - 3.1394 1.303 - 0.82305 0.85298 - 1.2764 2.0321 - 1.2764 3.3202 0 1.3591 0.52871 2.5747 1.7142 3.9412 1.1458 1.321 2.85 2.7086 4.8233 4.3152l0.00366 0.0029c0.68985 0.5617 1.4719 1.1985 2.2858 1.8784 0.81878 - 0.6812 1.602 - 1.319 2.2933 - 1.8816 1.9731 - 1.6066 3.6772 - 2.9939 4.823 - 4.3148 1.1853 - 1.3666 1.714 - 2.5821 1.714 - 3.9412 0 - 1.2881 - 0.4534 - 2.4672 - 1.2764 - 3.3202 - 0.8109 - 0.84029 - 1.9258 - 1.303 - 3.1392 - 1.303 - 0.889 0 - 1.7052 0.26999 - 2.4258 0.80239 - 0.6423 0.47466 - 1.0897 1.0747 - 1.352 1.4946 - 0.1349 0.2159 - 0.3723 0.34478 - 0.6352 0.34478 - 0.26291 0 - 0.50034 - 0.12888 - 0.63522 - 0.34478 - 0.26215 - 0.41985 - 0.70954 - 1.0199 - 1.3519 - 1.4946 - 0.72067 - 0.5324 - 1.5369 - 0.80239 - 2.4257 - 0.80239z",
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
      <div className="ProductList">
        {this.state.products.map(product =>
          <Product
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

export default ProductList;