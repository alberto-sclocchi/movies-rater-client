import React, { useContext, useEffect } from 'react'
import MoviesContext from '../context/MoviesContext.context';
import { useParams } from 'react-router-dom';

export default function MovieDetailsInfoBox() {
  
  const { movie, getMovie } = useContext(MoviesContext);
  const { movieId } = useParams();

  useEffect(() => {
    getMovie(movieId);
  }, [movieId])

  return (
    <div id='movie-details-info-page'>
        {!!movie &&
         <div className='movie-details-info-box'>
            <h1>{movie.title} ({movie.releaseYear})</h1>
            <div>
                <img src={movie.verticalPoster} alt={`${movie.title} poster`} />
            </div>

            <div>
                <p>{movie.overview}</p>
                <h3>Cast:</h3>
                <ul>
                    {movie.cast && movie.cast.map((actor, index) => (
                        <li key={index}>{actor}</li>
                    ))}
                </ul>
            </div>
         </div>
        }
    </div>
  )
}
