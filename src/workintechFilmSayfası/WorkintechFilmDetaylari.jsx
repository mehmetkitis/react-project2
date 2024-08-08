import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const WorkintechFilmDetaylari = (props) => {
  const { title, director, metascore, id } = props.movie;
  const history = useHistory();

  const openFilmPage = () => {
    history.push('/filmler/' + id);
  };
  return (
    <div  onClick={openFilmPage}>
      <h2>{title}</h2>
      <div >
        Director: <em>{director}</em>
      </div>
      <div >
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  )
}

export default WorkintechFilmDetaylari
