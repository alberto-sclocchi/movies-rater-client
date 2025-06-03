import React, { useContext } from 'react'
import SearchMoviesBar from './pages/SearchMoviesBar'
import MoviesContext from './context/MoviesContext.context';

export default function MoviesDashboard() {

  const { searchedMovies } = useContext(MoviesContext);
  console.log("Searched Movies in Dashboard: ", searchedMovies);

  const renderSearchedMovies = () => {
    return searchedMovies.map((movie, key) => (
      <div key={key} className='searched-movie'>
        <h2>{movie.title} {movie.id}</h2>
        <img src={movie.imageSet.verticalPoster.w720} alt={`${movie.title} poster`} />
      </div>    
    ));
  }
  return (
    <div className='movies-dashboard'>
        <h1>Movies Dashboard</h1>
        <SearchMoviesBar />
        <div className='searched-movies'>
            {!!searchedMovies && searchedMovies.length ? renderSearchedMovies() : <h3>NO MOVIES</h3>}
        </div>
    </div>
  )
}
