import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logoIcon from '../../images/logo.png'

export default function NavBar() {

  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <nav id="navbar">
        <Link to="/" className="logo-link" onClick={() => setActiveIndex(null)}><img src={logoIcon} alt="rateflix-logo"/></Link>
        <div>
          <Link to="/dashboard" className={`navbar-link ${activeIndex === 1  ? "navbar-link-active" : ""}`}  onClick={() => setActiveIndex(1)}>Movies</Link>
          <Link to="/reelbot" className={`navbar-link ${activeIndex === 2  ? "navbar-link-active" : ""}`}  onClick={() => setActiveIndex(2)}>ReelBot</Link>
        </div>
    </nav>
  )
}
