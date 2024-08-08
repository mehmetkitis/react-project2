import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const WorkintechFilm = ({ KaydedilenlerListesineEkle, filmList }) => {
  const [movie, setMovie] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    if (movieId && filmList?.length) {
      setMovie(filmList.find((f) => f.id == movieId));
    }
  }, [movieId,filmList]);

  if (!movie) {
    return <div>Film bilgisi yükleniyor...</div>;
  }

  const { id, title, director, metascore, stars } = movie;

  return (
    <div >
      <div >
        <p>Film ID: {id}</p>
        <h2>{title}</h2>
        <div >
          Director: <em>{director}</em>
        </div>
        <div >
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map((star) => (
          <div key={star} >
            {star}
          </div>
        ))}
      </div>
      <button onClick={() => {
        KaydedilenlerListesineEkle(movie);
        }}
      >
        Kaydet
      </button>
    </div>
  )
}

export default WorkintechFilm
