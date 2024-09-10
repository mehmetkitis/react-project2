import React from 'react';


import W7MovieListItem from './W7MovieListItem';
import W7MovieFooter from './W7MovieFooter';

const W7MovieList = (props) => {
    const { movies } = props;

    return (
        <div className="flex-1">
            <div className="relative overflow-x-auto shadow-md mb-4 sm:min-h-[400px] ">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200 ">
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-slate-900 ">
                            <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                İsim
                            </th>
                            <th>Yönetmen</th>
                            <th>Tür</th>
                            <th>Metascore</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody className="text-sm ">
                        {movies.map((movie) => (
                            <W7MovieListItem key={movie.id} movie={movie} />
                        ))}
                    </tbody>
                </table>
            </div>
            <W7MovieFooter totalMovies={movies.length} />
        </div>
    );
};

export default W7MovieList;
