import React, { Component } from 'react'
import ModalBase from '../ModalBase/ModalBase';
import "../common/common.scss";

class ModalAddCart extends Component {
  render() {
    return (
      <ModalBase
        header="Addition to cart!"
        text="This product will be added to your cart."
        textConfirm="Are you sure want to add a product to your shopping card?"
        closeButton={true}
        bgColorHeader="#0061c2"
        bgColorBody="#047ef8"
        bgColorFooter="#047ef8"
        bgInfo="#0061c2"
        onClose={this.props.onClose}
        onConfirm={this.props.onConfirm}

      />
    )
  }
}

export default ModalAddCart;
