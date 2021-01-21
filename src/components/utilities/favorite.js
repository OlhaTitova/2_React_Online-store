
export function addToFavorite(itemId) {

    const favorite = JSON.parse(localStorage.getItem('favoriteList')) || [];
    let isSet = false;

    if (favorite.indexOf(itemId) > -1) {
        favorite.splice(favorite.indexOf(itemId), 1);
    } else {
        favorite.push(itemId);
        isSet = true;
    }
    localStorage.setItem('favoriteList', JSON.stringify(favorite))

    return isSet;
}

export function isFavorite(itemId) {
    const favorite = JSON.parse(localStorage.getItem('favoriteList')) || [];

    return favorite.indexOf(itemId) > -1;
}