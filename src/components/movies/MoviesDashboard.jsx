import React, { useContext } from 'react'
import SearchMoviesBar from './pages/SearchMoviesBar'
import MoviesContext from './context/MoviesContext.context';

export default function MoviesDashboard() {

  return (
    <div className='movies-dashboard'>
        <h1>Movies Dashboard</h1>
        <SearchMoviesBar />
        <div>
        </div>
    </div>
  )
}
