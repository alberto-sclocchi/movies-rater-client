import React from 'react'
import magnifyingGlass from '../../../images/MagGlassIcon.png'

export default function SearchMoviesBar() {
  return (
    <form className='search-bar'>
        <input className="search-input" type="text" placeholder="Search for movies..." />
        <button type="submit"><img src={magnifyingGlass} alt="magnifying-glass" /></button>
    </form>
  )
}
