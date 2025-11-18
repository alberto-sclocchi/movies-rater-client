import React, { useContext, useEffect } from 'react'
import SearchMoviesBar from './SearchMoviesBar'
import MoviesContext from './context/MoviesContext.context';
import { RenderType } from './models/RenderType.model'; 
import AuthContext from '../auth/context/AuthContext.context';

export default function MoviesDashboard() {

  const { addedMovies, renderMovies, getMovies} = useContext(MoviesContext)
  const { user, isLoggedOut } = useContext(AuthContext);

  useEffect(() => {
    !!user && getMovies(user._id);
    isLoggedOut();
  }, [user]);


  return (
    <div className='movies-dashboard'>
        <SearchMoviesBar />
        <div className='added-movies'>
          {addedMovies.length ? renderMovies(RenderType.addedMovie) : <h2>No Movies Added </h2>}
        </div>
    </div>
  )
}
