import React, { useState } from 'react'
import {movies} from "./filmVeri"
import WorkintechKaydedilenlerListesi from './WorkintechKaydedilenlerListesi';
import WorkintechFilm from './WorkintechFilm';
import WorkintechFilmListesi from './WorkintechFilmListesi';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';

const WorkintechFilmApp = () => {

    const [filmList, setFilmList] = useState(movies);
    const [kaydedilenFilmler, setKaydedilenFilmler] = useState([]);

    const KaydedilenlerListesineEkle = (movie) => {

        if (kaydedilenFilmler.find((f) => f.id === movie.id)) {
            return;
        }
        setKaydedilenFilmler([...kaydedilenFilmler, movie]);
    };

    
    

    return (
        <div>
      <WorkintechKaydedilenlerListesi list={kaydedilenFilmler} />
      
      <Switch>
        <Route path="/filmlerSayfasi" >
          <WorkintechFilmListesi movies={filmList} />
        </Route>
        <Route path="/filmler/:movieId">
          <WorkintechFilm filmList={filmList}
            KaydedilenlerListesineEkle={KaydedilenlerListesineEkle}/>
        </Route>
      </Switch>
    </div>
    )
}

export default WorkintechFilmApp
