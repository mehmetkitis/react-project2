import React from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import W1MovieHeader from './W1MovieHeader';
import W1FavoriteMovieList from './W1FavoriteMovieList';
import W1AddMovieForm from './W1AddMovieForm';
import W1Movie from './W1Movie';
import W1MovieList from './W1MovieList';

const WIMDBFilmApp = () => {
    const displayFavorites = useSelector(
        (store) => store.favoritesReducer.displayFavorites
    );

    return (
        <div>
            <nav className="bg-zinc-800 px-6 py-3">
                <h1 className="text-xl text-white text-center">Redux Film Projesi</h1>
            </nav>

            <div className="max-w-4xl mx-auto px-3 pb-4">
                <W1MovieHeader />
                <div className="flex flex-col sm:flex-row gap-4">
                    {displayFavorites && <W1FavoriteMovieList />}

                    <Switch>
                        <Route exact path="/movies/add">
                            <W1AddMovieForm />
                        </Route>
                        <Route path="/movies/:id">
                            <W1Movie />
                        </Route>
                        <Route path="/movies">
                            <W1MovieList />
                        </Route>
                        <Route path="/">
                            <Redirect to="/movies" />
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    );
};

export default WIMDBFilmApp;
