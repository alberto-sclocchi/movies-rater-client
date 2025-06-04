import React, { useContext, useEffect } from 'react'
import SearchMoviesBar from './SearchMoviesBar'
import MoviesContext from './context/MoviesContext.context';
import { RenderType } from './models/RenderType.model'; 

export default function MoviesDashboard() {

  const { addedMovies, renderMovies, getMovies} = useContext(MoviesContext)

  useEffect(() => {
    getMovies();
  }, []);


  return (
    <div className='movies-dashboard'>
        <h1>Movies Dashboard</h1>
        <SearchMoviesBar />
        <div>
          {addedMovies.length ? renderMovies(RenderType.addedMovie) : <h2>No Movies Added </h2>}
        </div>
    </div>
  )
}
