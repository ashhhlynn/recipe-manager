export const fetchRecipes = (recipes) => {
    return (dispatch) => {
        dispatch({ type: "FETCH_RECIPES", recipes: recipes })     
    }
}

export const fetchCategories = (categories) => {
    return (dispatch) => {
        dispatch({ type: "FETCH_CATEGORIES", categories: categories })     
    }
}

export const fetchFavorites = (favorites) => {
    return (dispatch) => {
        dispatch({ type: "FETCH_FAVORITES", favorites: favorites })
    }
}

export const updateRR = (recipe) => {
    return (dispatch) => {
        dispatch({ type: "UPDATE_RR", recipe: recipe })     
    }
}

export const sortAToZ = () => {
    return (dispatch) => {
        dispatch({ type: "SORT_A_TO_Z" })
    }
}

export const sortNumberReviews = () => {
    return (dispatch) => {
        dispatch({ type: "SORT_NUMBER_REVIEWS" })
    }
}

export const sortDate = () => {
    return (dispatch) => {
        dispatch({ type: "SORT_DATE" })
    }
}

export const sortRating = () => {
    return (dispatch) => {
        dispatch({ type: "SORT_RATING" })
    }
}

export const sortCategory = (id) => {
    return (dispatch) => {
        dispatch({ type: "SORT_CATEGORY", id: id })
    }
}

export const addToFavorites = (recipe) => {
    return (dispatch) => {
        dispatch({ type: "ADD_TO_FAVORITES", recipe: recipe })     
    }
}

export const removeFavorite = (fi) => {
    return (dispatch) => {
        dispatch({ type: "REMOVE_FAVORITE", i: fi })     
    }
}

export const checkUser = (user) => {
    return (dispatch) => {  
        dispatch({ type: "SET_CURRENT_USER", user: user })
    }
}

export const logOut = () => {
    return (dispatch) => {
        dispatch({ type: "LOGOUT" })
    }
}