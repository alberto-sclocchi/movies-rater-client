import React, { useContext } from 'react'
import MoviesContext from '../context/MoviesContext.context';
import { RenderType } from '../models/RenderType.model.js'; 

export default function SearchedMovieBox(props) {
  
  const {id, title, releaseYear, overview, cast, renderType} = props.movie;

  //  console.log({...props.movie});

  const { addMovie } = useContext(MoviesContext);

  return (
     <div className='searched-movie'>
        {renderType === RenderType.searchedMovie ? <button onClick={() => addMovie({movieId: id, title, releaseYear, verticalPoster: props.movie.imageSet.verticalPoster.w720, overview, cast})}>+</button> : <button>-</button>}
        <h2>{title} ({releaseYear})</h2>
        {renderType === RenderType.searchedMovie ? <img src={props.movie.imageSet.verticalPoster.w720} alt={`${title} poster`} /> : <img src={props.movie.verticalPoster} alt={`${title} poster`} />}
    </div>
  )
}
