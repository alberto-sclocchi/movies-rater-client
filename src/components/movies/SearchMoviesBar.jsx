import React, { useContext, useEffect, useState } from 'react'
import magnifyingGlass from '../../images/MagGlassIcon.png'
import MoviesContext from './context/MoviesContext.context';
import { RenderType } from './models/RenderType.model'; 

export default function SearchMoviesBar() {

  const [searchQuery, setSearchQuery] = useState("");
  const [ showSearchResults, setShowSearchResults ] = useState(false);
  const { searchMovies, searchedMovies, renderMovies } = useContext(MoviesContext);
  const inputRef = React.useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setShowSearchResults(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
    console.log("Search Query: ", searchQuery);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    searchMovies(searchQuery);
  }

  const handleFocus = () => {
    setShowSearchResults(true);
  }

  return (
    <div id="search-section" onSubmit={handleSubmit} ref={inputRef}>
      <form className='search-bar'>
          <input className="search-input" type="text" placeholder="Search for movies..." onChange={handleChange} onFocus={handleFocus}/>
          <button type="submit"><img src={magnifyingGlass} alt="magnifying-glass" /></button>
      </form>
      <div className={`searched-movies ${!!showSearchResults ? "searched-movies-active" : ""}`}>
          {!!searchedMovies && searchedMovies.length ? renderMovies(RenderType.searchedMovie) : <h3>NO MOVIES</h3>}
          {/* {renderMovies(RenderType.searchedMovie)/*replaced for testing purposes*/} 
      </div>
    </div>
  )
}
