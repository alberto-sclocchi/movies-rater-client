import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {

  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <nav id="navbar">
        <Link to="/" className={`navbar-link ${activeIndex === 0 ? "navbar-link-active" : ""}`} onClick={() => setActiveIndex(0)}>Home</Link>
        <Link to="/dashboard" className={`navbar-link ${activeIndex === 1  ? "navbar-link-active" : ""}`}  onClick={() => setActiveIndex(1)}>Movies</Link>
        <Link to="/reelbot" className={`navbar-link ${activeIndex === 2  ? "navbar-link-active" : ""}`}  onClick={() => setActiveIndex(2)}>ReelBot</Link>
    </nav>
  )
}
