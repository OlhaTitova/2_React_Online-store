/**
 * @param {string} itemId
 */

function addToCart(itemId) {

    const cart = JSON.parse(localStorage.getItem('cardList')) || {};
    console.log(cart);
    cart[itemId] = (cart[itemId] || 0) + 1;
    localStorage.setItem('cardList', JSON.stringify(cart));
}

export default addToCart;
