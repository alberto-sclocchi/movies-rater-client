import React, { useContext } from 'react'
import MoviesContext from '../context/MoviesContext.context';
import { RenderType } from '../models/RenderType.model.js'; 

export default function SearchedMovieBox(props) {
  
  const {id, title, releaseYear, overview, cast, renderType} = props.movie;
  const { addedMovies } = useContext(MoviesContext);

  //  console.log({...props.movie});
  const isAlreadyAdded = addedMovies.some((movie) => movie.movieId === id);
  const { addMovie } = useContext(MoviesContext);

  return (
     <div className='searched-movie'>
        {
          isAlreadyAdded
          ? <p>Already Added</p>
          : renderType === RenderType.searchedMovie 
          ? <button onClick={() => addMovie({movieId: id, title, releaseYear, verticalPoster: props.movie.imageSet.verticalPoster.w720, overview, cast})}>+</button> 
          : renderType === RenderType.addedMovie 
          ? <button>-</button>
          : <p>?</p>
        }

        <h2>{title} ({releaseYear})</h2>
        {renderType === RenderType.searchedMovie ? <img src={props.movie.imageSet.verticalPoster.w720} alt={`${title} poster`} /> : <img src={props.movie.verticalPoster} alt={`${title} poster`} />}
    </div>
  )
}
