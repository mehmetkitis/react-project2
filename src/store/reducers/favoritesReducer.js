import { ADD_FAVORITE, REMOVE_FAVORITE, TOGGLE_FAVORITES } from "../actions/favoritesActions";


const initialState = {
    favorites: [],
    displayFavorites: true,
};

export const favoritesreducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVORITE:
            if (state.favorites.find((f) => f.id === action.payload.id)) {
                return state;
            } else {
                return { ...state, favorites: [...state.favorites, action.payload] };
            }
        case TOGGLE_FAVORITES:
            return {
                ...state,
                displayFavorites: !state.displayFavorites,
            };
        case REMOVE_FAVORITE:
            return {
                ...state,
                favorites: state.favorites.filter((f) => f.id !== action.payload),
            };
        default:
            return state;
    }
};


