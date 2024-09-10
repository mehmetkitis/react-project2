import React from 'react';
import { Link } from 'react-router-dom';

const W7FavoriteMovieList = (props) => {
    const { favoriteMovies, removeToFavorites } = props;
    return (
        <div className="flex flex-col sm:max-w-[250px] p-5 pr-5 bg-white shadow rounded-md dark:bg-slate-800 dark:border-slate-700 ">
            <h5 className="font-bold dark:text-gray-200">Favori Filmler</h5>
            <div className="flex flex-col pt-3 text-sm">
                {favoriteMovies.map((movie) => (
                    <>
                        <Link
                            key={movie.id}
                            className="py-1 flex gap-2 justify-between dark:text-white"
                            to={`/moviesDatabase/${movie.id}`}
                        >
                            {movie.title}
                        </Link>
                        <button
                            className="myButton bg-blue-600 hover:bg-blue-500 dark:bg-blue-200 dark:hover:bg-blue-400 dark:text-slate-800"
                            onClick={() => removeToFavorites(movie)}
                        >
                            Favorilerden Çıkar
                        </button>
                        <div className='text-blue-800'>---------------------------</div>
                    </>

                ))}
            </div>
        </div>
    );
};

export default W7FavoriteMovieList;
