import React from 'react';
import MoviesProps from './MoviesProps';


let movies = require ("./datas.json");
const MovieList = () => {

  return (
    <div>
      <h2 className='wlmv'> The Movies</h2>
      <div >
        <MoviesProps movies= {movies} />
      </div>
    </div>
  )
}
export default MovieList;
