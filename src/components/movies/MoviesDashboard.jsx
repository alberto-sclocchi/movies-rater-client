import React, { useContext, useEffect } from 'react'
import SearchMoviesBar from './SearchMoviesBar'
import MoviesContext from './context/MoviesContext.context';
import { RenderType } from './models/RenderType.model'; 
import AuthContext from '../auth/context/AuthContext.context';

export default function MoviesDashboard() {

  const { addedMovies, renderMovies, getMovies} = useContext(MoviesContext)
  const { user } = useContext(AuthContext);

  useEffect(() => {
    !!user && getMovies(user._id);
  }, [user]);


  return (
    <div className='movies-dashboard'>
        <h1>Movies Dashboard</h1>
        <SearchMoviesBar />
        <div className='added-movies'>
          {addedMovies.length ? renderMovies(RenderType.addedMovie) : <h2>No Movies Added </h2>}
        </div>
    </div>
  )
}
