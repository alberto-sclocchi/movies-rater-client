import React, { useContext } from 'react'
import MoviesContext from '../context/MoviesContext.context';

export default function SearchedMovieBox(props) {
  
  const {title, releaseYear, imageSet, overview, cast} = props;

  console.log("SearchedMovieBox props: ", props);

  const { addMovie } = useContext(MoviesContext);

  const reformattedMovieObj = {
    title,
    releaseYear,
    verticalPoster: imageSet.verticalPoster.w720,
    overview, 
    cast
  }

  return (
    <div className='searched-movie'>
        <button onClick={() => addMovie(reformattedMovieObj)}>+</button>
         <h2>{title} ({releaseYear})</h2>
        <img src={imageSet.verticalPoster.w720} alt={`${title} poster`} />
    </div>
  )
}
