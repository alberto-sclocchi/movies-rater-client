import React, { useContext } from 'react'
import MoviesContext from '../context/MoviesContext.context';

export default function SearchedMovieBox(props) {
  
  const {title, releaseYear, imageSet} = props;
  const { addMovie } = useContext(MoviesContext);

  return (
    <div className='searched-movie'>
        <button onClick={() => addMovie(props)}>+</button>
         <h2>{title} ({releaseYear})</h2>
        <img src={imageSet.verticalPoster.w720} alt={`${title} poster`} />
    </div>
  )
}
