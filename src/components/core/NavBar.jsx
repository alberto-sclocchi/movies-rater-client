import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import logoIcon from '../../images/logo.png'
import AuthContext from '../auth/context/AuthContext.context';

export default function NavBar() {

  const [activeIndex, setActiveIndex] = useState(null);
  const { user, logOut } = useContext(AuthContext);

  const logOutFun = () => {
    logOut();
    setActiveIndex(null);
  }

  return (
   <nav className="w-full px-6 py-4 flex items-center justify-between bg-white text-lg">
    <Link to="/" onClick={() => setActiveIndex(null)}>
      <img src={logoIcon} alt="rateflix-logo" className="h-20 w-auto scale-125 hover:scale-150 transition-transform ease-in-out duration-300"/>
    </Link>

    {/* Links */}
    <div className="flex items-center gap-6">
      {user ? (
        <>
          <Link 
            to="/dashboard" 
            className={`text-gray-700 hover:text-red-600 font-medium transition-colors ${
              activeIndex === 1 ? "text-red-600 underline" : ""
            }`}
            onClick={() => setActiveIndex(1)}
          >
            Movies
          </Link>

          <Link 
            to="/reelbot" 
            className={`text-gray-700 hover:text-red-600 font-medium transition-colors ${
              activeIndex === 2 ? "text-red-600 underline" : ""
            }`}
            onClick={() => setActiveIndex(2)}
          >
            ReelBot
          </Link>

          <button 
            onClick={logOutFun} 
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors font-semibold"
          >
            Log Out
          </button>
        </>
      ) : (
        <>
          <Link 
            to="/login" 
            className={`text-gray-700 hover:text-red-600 font-medium transition-colors ${
              activeIndex === 3 ? "text-red-600 underline" : ""
            }`}
            onClick={() => setActiveIndex(3)}
          >
            Log in
          </Link>

          <Link 
            to="/signup" 
            className={`px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors font-semibold ${
              activeIndex === 4 ? "ring-2 ring-red-400" : ""
            }`}
            onClick={() => setActiveIndex(4)}
          >
            Sign up
          </Link>
        </>
      )}
    </div>
  </nav>
  )
}
