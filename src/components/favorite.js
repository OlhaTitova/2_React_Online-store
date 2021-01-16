class Favorite {

    addFavoriteItem(item, state) {

        const favorite = JSON.parse(localStorage.getItem('favoriteList')) || {};
        console.log(favorite);
        favorite[item] = state;
        localStorage.setItem('favoriteList', JSON.stringify(favorite));

    }
}

export default Favorite;