const initialState = {
    recipes: [],
    currentUser: [],
    loading: false,
    favorites: [],
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_RECIPES":
            console.log(action.recipes)
            return {
                ...state,
                recipes: action.recipes,
                loading: false,
            };

        case 'FETCH_FAVORITES':
            console.log(action.favorites)
            return {
                ...state, 
                favorites: action.favorites,
                loading: false
            };

        case "UPDATE_RR":
            console.log(action.recipe)
            let x = state.favorites.find(item => parseInt(item.recipe_id) === action.recipe.id)
            console.log(x)
            return {
                ...state,
                recipes: [...state.recipes.filter(item=> item.id !== action.recipe.id), action.recipe],
                favorites: [...state.favorites.filter(item=> parseInt(item.recipe_id) !== action.recipe.id), x],
                loading: false,
            };

        case "SORT_A_TO_Z":
            return {
                ...state,
                 recipes: [...state.recipes.slice().sort((item1, item2) => item2.name < item1.name ? 1 : -1)]
            }; 

        case "SORT_NUMBER_REVIEWS":
            return {
                ...state,
                recipes: [...state.recipes.slice().sort((item1, item2) => item2.reviews.length > item1.reviews.length ? 1 : -1)]
            }; 

        case "SORT_DATE":
            return {
                ...state,
                recipes: [...state.recipes.slice().sort((item1, item2) => item2.created_at > item1.created_at ? 1 : -1)]
            }; 

        case "SORT_RATING":
            return {
                ...state,
                recipes: [...state.recipes.slice().sort((item1, item2) => item2.average > item1.average ? 1 : -1)]
            }; 
        
        case "ADD_TO_FAVORITES":
            console.log(action.recipe)
            return {
                ...state,
                favorites: [...state.favorites, action.recipe],
                loading: false,
            };
    
        case "REMOVE_FAVORITE":
            console.log(action.i)
            let newFaves = state.favorites.filter(f => f.id !== action.i)
            return {
                ...state,
                favorites: newFaves,
                loading: false,
            };
        
        case "ADD_RECIPE":
            return {
                ...state,
                recipes: [...state.recipes, action.data],
            };

        case 'SET_CURRENT_USER':
            console.log(action.user)
            if (action.user !== null)
                return {
                    ...state, 
                    currentUser: action.user, 
                    loading: false
                }
            else {
                return {
                    ...state
                }
            };

        case 'LOGOUT':
            return {
                ...state, 
                currentUser: [], 
                loading: false,
            };

        default:
            return state;
    }
}

export default rootReducer