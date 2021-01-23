import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Product.scss';
import Button from '../Button/Button';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import { addToFavorite, isFavorite } from "../utilities/favorite";
import { EMPTY_HEART, FULL_HEART } from '../utilities/ico';

class Product extends Component {

  constructor(props) {
    super(props)

    this.state = {
      colorSVG: isFavorite(props.product.id) ? FULL_HEART : EMPTY_HEART
    }
  }

  handleFavorite = (productId) => {
    addToFavorite(productId);
    isFavorite(productId) ? this.setState({ colorSVG: FULL_HEART }) : this.setState({ colorSVG: EMPTY_HEART })
  }

  render() {
    const { name, url, price, id, color, } = this.props.product;
    const { onAddToCart } = this.props;
    return (
      <div
        className="Product"
      >
        <div
          className="row justify-cont-between"
        >
          <img
            className="Product__Img"
            src={url}
            alt={name}
          />

          <FavoriteButton
            onClick={() => this.handleFavorite(id)}
            d={this.state.colorSVG}
          />

        </div>
        <p
          className="Product__Name">
          {name}
        </p>
        <p
          className="Product__id">
          Код: {id}
        </p>

        <p>
          <span className="Product__Color">
            Цвет:
          </span>
          {color}
        </p>

        <div className="row justify-cont-between align-items-center mt-15">
          <span className="Product__Price">
            {price}
            <span className="Product__Сurrency">
              грн
            </span>
          </span>

          <Button
            onClick={onAddToCart}
            className="btn"
            text="Add to cart"
            style={{ backgroundColor: "#0061c2" }}
          />
        </div>
      </div>
    )
  }
}

export default Product;


Product.propTypes = {
  product: PropTypes.object,
  onAddToCart: PropTypes.func,
}