import movies from '../../workintechIMDBFilm/wIMDBFilmData.js';
import { ADD_MOVIE, DELETE_MOVIE } from '../actions/movieActions.js';

const initialState = {
    movies: movies,
    appTitle: 'IMDB Movie Database',
};

export const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_MOVIE:
            return {
                ...state,
                movies: state.movies.filter((item) => action.payload !== item.id),
            };
        case ADD_MOVIE:
            return {
                ...state,
                movies: [...state.movies, action.payload],
            };
        default:
            return state;
    }
};


