import React from 'react';

const W1MovieFooter = (props) => {
    const { totalMovies } = props;

    return (
        <div className="bg-white p-4 shadow rounded-md">
            <b>{totalMovies}</b> film gösteriliyor
        </div>
    );
};

export default W1MovieFooter;
