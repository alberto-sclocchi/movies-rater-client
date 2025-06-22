import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import logoIcon from '../../images/logo.png'
import AuthContext from '../auth/context/AuthContext.context';

export default function NavBar() {

  const [activeIndex, setActiveIndex] = useState(null);
  const { user } = useContext(AuthContext);

  return (
    <nav id="navbar">
        <Link to="/" className="logo-link" onClick={() => setActiveIndex(null)}><img src={logoIcon} alt="rateflix-logo"/></Link>
        {!!user ?
          <div>
            <Link to="/dashboard" className={`navbar-link ${activeIndex === 1  ? "navbar-link-active" : ""}`}  onClick={() => setActiveIndex(1)}>Movies</Link>
            <Link to="/reelbot" className={`navbar-link ${activeIndex === 2  ? "navbar-link-active" : ""}`}  onClick={() => setActiveIndex(2)}>ReelBot</Link>
          </div>
          :
          <div>
            <Link to="/login" className={`navbar-link ${activeIndex === 3  ? "navbar-link-active" : ""}`}  onClick={() => setActiveIndex(3)}>Log in</Link>
            <Link to="/signup" className={`navbar-link ${activeIndex === 4 ? "navbar-link-active" : ""}`}  onClick={() => setActiveIndex(4)}>Sign up</Link>
          </div>
        }
    </nav>
  )
}
