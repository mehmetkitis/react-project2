import { Switch, Route, NavLink, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listeyeEkle, oncekiFilm, sonrakiFilm } from '../store/actions/favFilmsActions.js';
import W2Movie from './wFavFilmsC/W2Movie.jsx';
import W2FavMovie from './wFavFilmsC/W2FavMovie.jsx';
import { store } from '../store/store.js';

function WFavFilmsApp() {
    const sira = useSelector((store) => store.favFilmsReducer.sira);
    const favMovies = useSelector((store) => store.favFilmsReducer.favMovies);
    const movies = useSelector((store) => store.favFilmsReducer.movies);
    const dispatch = useDispatch();

    function sonrakiFilmHandler() {
        dispatch(sonrakiFilm());
    }

    function oncekiFilmHandler() {
        dispatch(oncekiFilm());
    }

    function listeyeEkleHandler() {
        dispatch(listeyeEkle());
    }

    return (
        <div className="wrapper max-w-2xl mx-auto">
            <nav className="flex text-2xl pb-6 pt-8 gap-2 justify-center">
                <NavLink
                    to="/movies"
                    exact
                    className="py-3 px-6 "
                    activeClassName="bg-white shadow-sm text-blue-600"
                >
                    Filmler
                </NavLink>
                <NavLink
                    to="/favMoviesList"
                    className="py-3 px-6 "
                    activeClassName="bg-white shadow-sm text-blue-600"
                >
                    Listem
                </NavLink>
            </nav>
            <Switch>
                <Route exact path="/moviesList">
                    {movies.length > 0 ? (
                        <>
                            <W2Movie sira={sira} />

                            <div className="flex gap-3 justify-end py-3">
                                {sira > 0 && (
                                    <button
                                        onClick={oncekiFilmHandler}
                                        className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
                                    >
                                        Önceki
                                    </button>
                                )}
                                {sira < movies.length - 1 && (
                                    <button
                                        onClick={sonrakiFilmHandler}
                                        className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
                                    >
                                        Sıradaki
                                    </button>
                                )}

                                <button
                                    onClick={listeyeEkleHandler}
                                    className="select-none px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white"
                                >
                                    Listeme ekle
                                </button>
                            </div>
                        </>
                    ) : (
                        <div className={'text-center'}>
                            {' '}
                            Eklenecek yeni film bulunamadı...{' '}
                        </div>
                    )}
                </Route>

                <Route path="/favMoviesList">
                    <div>
                        {favMovies.map((movie) => (
                            <W2FavMovie key={movie.id} title={movie.title} id={movie.id} />
                        ))}
                    </div>
                </Route>
                <Route path="/">
                    <Redirect to="/moviesList" />
                </Route>
            </Switch>
        </div>
    );
}

export default WFavFilmsApp;