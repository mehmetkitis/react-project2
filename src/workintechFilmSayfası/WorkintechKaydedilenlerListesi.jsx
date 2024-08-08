import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const WorkintechKaydedilenlerListesi = ({ list }) => {
  const history = useHistory();
  return (
    <div>
      <div >
        <h3>Kaydedilen Filmler:</h3>
        {list.map((movie, index) => (
          <span key={index} >
            {movie.title}
          </span>
        ))}
        {/* Görev 4: Anasayfa butonu ana sayfayı açmalı */}
        <button
          onClick={() => {
            history.push('/filmlerSayfasi');
          }}
        >
          FilmlerSayfası
        </button>
      </div>
    </div>
  )
}

export default WorkintechKaydedilenlerListesi
