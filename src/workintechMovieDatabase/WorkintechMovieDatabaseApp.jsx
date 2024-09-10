import React, { useEffect, useState } from 'react';

import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import axios from 'axios';
import W7EditMovieForm from './components/W7EditMovieForm';
import W7AddMovieForm from './components/W7AddMovieForm';
import W7Movie from './components/W7Movie';
import W7MovieList from './components/W7MovieList';
import W7FavoriteMovieList from './components/W7FavoriteMovieList';
import W7MovieHeader from './components/W7MovieHeader';
import W7useLocalStorage from './hooks/W7UseLocalStorage';

const WorkintechMovieDatabaseApp = () => {
    const [movies, setMovies] = useState([]);
    const [favoriteMovies, setFavoriteMovies] = useState([]);
    const [darkMode, setDarkMode] = W7useLocalStorage('s11d3', true);
    const history = useHistory();

    useEffect(() => {
        axios
            .get('https://nextgen-project.onrender.com/api/s11d3/movies')
            .then((res) => {
                setMovies(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const deleteMovie = (id) => {
        axios
            .delete(`https://nextgen-project.onrender.com/api/s11d3/movies/${id}`)
            .then((res) => {
                setMovies(res.data);
                setFavoriteMovies(favoriteMovies.filter((movie) => movie.id !== id));
                history.push('/movies');
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const addToFavorites = (movie) => {
        if (!favoriteMovies.find((mov) => mov.id === movie.id)) {
            setFavoriteMovies([...favoriteMovies, movie]);
        }
    };

    const removeToFavorites = (movie) => {
        setFavoriteMovies(favoriteMovies.filter((mov) => mov.id !== movie.id));
    };

    return (
        <div
            id="main-container"
            className={darkMode ? 'dark bg-slate-900 h-screen' : ''}
        >
            <nav className=" bg-zinc-800 text-white px-6 py-3 dark:bg-gray-800 ">
                <h1 className="text-xl text-white">HTTP / CRUD Film Projesi</h1>{' '}
                <label className="relative inline-flex items-center cursor-pointer">
                    <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                        checked={darkMode}
                        onChange={() => {
                            setDarkMode(!darkMode);
                        }}
                    />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span className="ms-3  font-medium text-red-500">
                        Dark Mode {darkMode ? 'On' : 'Off'}
                    </span>
                </label>
            </nav>
            <div className=" max-w-4xl mx-auto px-3 pb-4 ">
                <W7MovieHeader />
                <div className="flex flex-col sm:flex-row gap-4">
                    <W7FavoriteMovieList
                        darkMode={darkMode}
                        favoriteMovies={favoriteMovies}
                        removeToFavorites={removeToFavorites}
                    />
                    <Switch>
                        <Route path="/moviesDatabase/edit/:id" exact>
                            <W7EditMovieForm setMovies={setMovies} />
                        </Route>
                        <Route path="/moviesDatabase/add" exact>
                            <W7AddMovieForm setMovies={setMovies} />
                        </Route>
                        <Route path="/moviesDatabase/:id" exact>
                            <W7Movie
                                addToFavorites={addToFavorites}
                                deleteMovie={deleteMovie}
                            />
                        </Route>
                        <Route path="/moviesDatabaseList" >
                            <W7MovieList movies={movies} />
                        </Route>
                        <Route path="/movieDatabase" exact>
                            <Redirect to="/moviesDatabaseList" />
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    );
};

export default WorkintechMovieDatabaseApp;
