import React from 'react'
import WorkintechFilmDetaylari from './WorkintechFilmDetaylari'


const WorkintechFilmListesi = ({movies}) => {
  return (
    <div >
      {movies.map((movie) => (
        <WorkintechFilmDetaylari key={movie.id} movie={movie}/>
      ))}
    </div>
  )
}

export default WorkintechFilmListesi
