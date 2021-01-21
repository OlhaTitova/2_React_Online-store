
function addToFavorite(itemId) {

    const favorite = JSON.parse(localStorage.getItem('favoriteList')) || {};
    favorite[itemId] = itemId;
    console.log(favorite);

    if (favorite[itemId]) {
        localStorage.removeItem('favoriteList', JSON.stringify(favorite))
    } else {
        localStorage.setItem('favoriteList', JSON.stringify(favorite))
    }
}


export default addToFavorite;