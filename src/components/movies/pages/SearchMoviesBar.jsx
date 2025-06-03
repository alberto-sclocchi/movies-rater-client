import React, { useContext, useState } from 'react'
import magnifyingGlass from '../../../images/MagGlassIcon.png'
import MoviesContext from '../context/MoviesContext.context';

export default function SearchMoviesBar() {

  const [searchQuery, setSearchQuery] = useState("");
  const [ showSearchResults, setShowSearchResults ] = useState(false);
  const { searchMovies, searchedMovies, renderSearchedMovies } = useContext(MoviesContext);

  const handleChange = (event) => {
    // setSearchQuery(event.target.value);
    // console.log("Search Query: ", searchQuery);
  }

  const handleSubmit = (event) => {
    // event.preventDefault();

    // searchMovies(searchQuery);
  }

  const handleClick = () => {
    setShowSearchResults(!showSearchResults);
  }
  return (
    <div id="search-section">
      <form className='search-bar' onSubmit={handleSubmit} onFocus={handleClick} onBlur={handleClick}>
          <input className="search-input" type="text" placeholder="Search for movies..." onChange={handleChange}/>
          <button type="submit"><img src={magnifyingGlass} alt="magnifying-glass" /></button>
      </form>
      <div className={`searched-movies ${!!showSearchResults ? "searched-movies-active" : ""}`}>
          {/* {!!searchedMovies && searchedMovies.length ? renderSearchedMovies() : <h3>NO MOVIES</h3>} */}
          {renderSearchedMovies()/*replaced for testing purposes*/}
      </div>
    </div>
  )
}
