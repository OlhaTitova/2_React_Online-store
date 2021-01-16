
class Cart {

    addItem(item, count) {

        const cart = JSON.parse(localStorage.getItem('cardList')) || {};
        console.log(cart);
        cart[item] = count;
        localStorage.setItem('cardList', JSON.stringify(cart));
    }
}

export default Cart;
