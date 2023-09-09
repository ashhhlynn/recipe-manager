const initialState = {
    recipes: [],
    currentUser: [],
    loading: false,
    favorites: [],
    categories: [],
    allRecipes: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_RECIPES":
            return {
                ...state,
                recipes: action.recipes,
                loading: false,
                allRecipes: action.recipes
            };

        case "FETCH_CATEGORIES":
            return {
                ...state,
                categories: action.categories,
                loading: false,
            };

        case 'FETCH_FAVORITES':
            return {
                ...state, 
                favorites: action.favorites,
                loading: false
            };

        case "UPDATE_RR":
            console.log(state.recipes.find(item => parseInt(item.recipe_id) === action.recipe.id))
            return {
                ...state,
                recipes: [...state.recipes.filter(item=> item.id !== action.recipe.id), action.recipe],
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
        
        case "SORT_CATEGORY":
            let r = state.allRecipes.filter(r => r.category_id == action.id)
            return {
                ...state,
                recipes: r
            }; 

        case "RESET_RECIPES":
            return {
                ...state,
                recipes: state.allRecipes
            }; 

        case "RECIPE_SEARCH":
            return {
                ...state,
                recipes: action.recipes
            }; 
           
        case "ADD_TO_FAVORITES":
            return {
                ...state,
                favorites: [...state.favorites, action.recipe],
                loading: false,
            };
    
        case "REMOVE_FAVORITE":
            let newFaves = state.favorites.filter(f => f.id !== action.i)
            return {
                ...state,
                favorites: newFaves,
                loading: false,
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
                favorites: [],
                loading: false,
            };

        default:
            return state;
    }
}

export default rootReducer