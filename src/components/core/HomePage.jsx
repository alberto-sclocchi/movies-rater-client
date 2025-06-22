import React, { useContext, useEffect } from 'react'
import AuthContext from '../auth/context/AuthContext.context'
import { Link } from 'react-router-dom';
import popCornGif from '../../images/Popcorn.gif'

export default function HomePage() {
  const { user, errorMessage, setErrorMessage} = useContext(AuthContext);

  useEffect(() => {
    setErrorMessage((prevState) => !!prevState ? null : prevState);
  }, [])
  
  return (
    <div id="home-page">
      {!!errorMessage && errorMessage}
      <div className='home-page-div primary-home-page-div'>
        <p>Discover new movies, rate your favorites, and get personalized recommendations from ReelBot.</p>
        {!user ? <Link to="/signup" id="signup-home-page">Start exploring now!</Link> : <Link to="/dashboard" id="signup-home-page">Explore movies!</Link>}
      </div>
      <div className="home-page-div secondary-home-page-div">
        <h2 style={{textDecoration: "underline"}}>Features</h2>
        <ul>
          <li>Add and rate your favorite movies 🎬 </li>
          <li>Get smart suggestions from ReelBot 🤖</li>
          <li>Track your movie journey ⭐</li>
        </ul>
      </div>
      <div className='popcorn-div'>
        <img src={popCornGif} alt="popcorn-gif" />
      </div>
    </div>
  )
}
