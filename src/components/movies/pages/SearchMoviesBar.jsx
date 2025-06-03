import React, { useContext, useState } from 'react'
import magnifyingGlass from '../../../images/MagGlassIcon.png'
import MoviesContext from '../context/MoviesContext.context';

export default function SearchMoviesBar() {

  const [searchQuery, setSearchQuery] = useState("");
  const { searchMovies } = useContext(MoviesContext);

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
    console.log("Search Query: ", searchQuery);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    searchMovies(searchQuery);
  }

  return (
    <form className='search-bar' onSubmit={handleSubmit}>
        <input className="search-input" type="text" placeholder="Search for movies..." onChange={handleChange}/>
        <button type="submit"><img src={magnifyingGlass} alt="magnifying-glass" /></button>
    </form>
  )
}
