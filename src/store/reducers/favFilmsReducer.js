import { movies } from '../../workintechFavFilms/wFavFilmsData.js';
import { LISTEDEN_CIKAR, LISTEYE_EKLE, ONCEKI_FILM, SONRAKI_FILM } from '../actions/favFilmsActions.js';

const initialState = {
    movies: movies,
    sira: 0,
    favMovies: [],
};

export function favFilmsReducer(state = initialState, action) {
    switch (action.type) {
        case SONRAKI_FILM:
            return { ...state, sira: state.sira + 1 };
        case ONCEKI_FILM:
            return { ...state, sira: state.sira - 1 };
        case LISTEYE_EKLE:
            const activeMovie = state.movies[state.sira];
            return {
                ...state,
                favMovies: [...state.favMovies, activeMovie],
                movies: state.movies.filter((f) => f.id !== activeMovie.id),
                sira:
                    state.movies.length - state.sira === 1
                        ? state.sira === 0
                            ? 0
                            : state.sira - 1
                        : state.sira,
            };
        case LISTEDEN_CIKAR:
            console.log(state.favMovies);
            const itemId = action.payload;
            return {
                ...state,
                favMovies: state.favMovies.filter((f) => itemId !== f.id),
                movies: [
                    ...state.movies,
                    state.favMovies.find((f) => f.id === itemId),
                ],
            };
        default:
            return state;
    }
}
