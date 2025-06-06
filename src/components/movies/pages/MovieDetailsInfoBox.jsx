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
         <div className='movie-details-info-container'>
            <h1>{movie.title} ({movie.releaseYear})</h1>
            <div className='movie-details-info-box'>
                <img src={movie.verticalPoster} alt={`${movie.title} poster`} />

                <div>
                    {!!movie.overview && <h3>Overview</h3>}
                    {!!movie.overview && <p>{movie.overview}</p>}
                    <div className="movie-details-info-box-lists">
                        <div>
                            <h3>Cast</h3>
                            <ul>
                                {movie.cast && movie.cast.map((actor, index) => (
                                    <li key={index}>{actor}</li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3>Directors</h3>
                            <ul>
                                {movie.directors && movie.directors.map((director, index) => (
                                    <li key={index}>{director}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
         </div>
        }
    </div>
  )
}
