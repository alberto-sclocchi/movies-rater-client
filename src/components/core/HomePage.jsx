import React, { useContext, useEffect } from 'react'
import AuthContext from '../auth/context/AuthContext.context'
import { Link } from 'react-router-dom';
import popCornGif from '../../images/Popcorn.gif'

export default function HomePage() {
  const { user, errorMessage, setErrorMessage} = useContext(AuthContext);

  useEffect(() => {
    setErrorMessage((prevState) => !!prevState ? null : prevState);
  }, [])

  function InfoCard({ title, copy, icon }) {
    return (
      <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg border hover:scale-105 duration-300 ease-in-out">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 flex items-center justify-center bg-red-50 rounded-lg">{icon}</div>
          <div>
            <h4 className="font-semibold">{title}</h4>
            <p className="text-sm text-gray-500 mt-1">{copy}</p>
          </div>
        </div>
      </div>
    );
  }

  function Testimonial({ quote, author }) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-sm border h-[80px] flex flex-col justify-center">
        <div className="text-gray-700">“{quote}”</div>
        <div className="mt-3 text-xs text-gray-400">{author}</div>
      </div>
    );
  }


  // ---------- Simple SVG icons ----------
  function SearchIcon() {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 21l-4.35-4.35" stroke="#d73b17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="11" cy="11" r="6" stroke="#d73b17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  function StarIcon() {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 17.3l-6.16 3.7 1.66-7.02L2 9.24l7.19-.62L12 2l2.81 6.62L22 9.24l-5.5 4.74 1.66 7.02z" stroke="#d73b17" strokeWidth="1.5"/>
      </svg>
    );
  }
  function RobotIcon() {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="7" width="18" height="10" rx="2" stroke="#d73b17" strokeWidth="1.5" />
        <circle cx="8" cy="12" r="1" fill="#d73b17" />
        <circle cx="16" cy="12" r="1" fill="#d73b17" />
        <path d="M12 3v2" stroke="#d73b17" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  function MovieMiniCard({ title, rating }) {
    return (
      <div className="flex items-center justify-between bg-gray-50 rounded-md p-2 shadow-sm">
        <div className="flex flex-col items-start">
          <div className="font-medium text-sm">{title}</div>
          <div className="text-xs text-gray-400">{rating} ★</div>
        </div>
        <div className="w-10 h-10 bg-red-50 rounded flex items-center justify-center text-red-600 font-bold">{Math.round(rating)}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-orange-100 text-gray-900 antialiased">
      {/* HERO */}
      <main>
        <section className="relative overflow-hidden">
          <div className="px-10 mx-auto px-6 py-16 flex flex-col lg:flex-row items-center gap-12">
            {/* Left: content cards */}
            <div className="w-full lg:w-1/2">
              <div className="mb-6">
                <p className="mt-2 text-2xl font-medium text-gray-700">Your personal movie diary — powered by AI.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-red-600 text-white p-6 rounded-lg shadow-lg border-2 border-white/20">
                  <h3 className="font-bold text-lg tracking-wide">Features</h3>
                  <ul className="mt-3 space-y-2 text-sm">
                    <li>• Add & rate movies easily</li>
                    <li>• Smart suggestions from ReelBot</li>
                    <li>• Track your movie journey</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <h3 className="font-semibold text-gray-800">Discover New Movies</h3>
                  <p className="mt-2 mb-5 text-sm text-gray-600">Get personalized recommendations based on your ratings. The more you rate, the smarter ReelBot becomes.</p>
                  <Link to="/signup" className="px-4 py-2 rounded-md bg-red-600 text-white text-sm box-border font-semibold border-[1px] border-transparent hover:bg-gray-50 hover:border-red-600 hover:text-gray-800 transition-colors duration-300 ease-in-out">Start exploring</Link>
                </div>
              </div>
            </div>

            {/* Right: popcorn + large graphic */}
            <div className="w-full lg:w-1/2 flex items-center justify-center relative">
              <div className="w-[420px] h-[300px] bg-gray-50 rounded-2xl shadow-xl flex flex-col items-center justify-center border border-red-50">
                {/* Mockup of app inside hero */}
                <div className="w-[380px] h-[270px] rounded-xl bg-white shadow-inner p-4 shadow-md">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold">Your Watchlist</div>
                    <div className="text-xs text-gray-400">3 movies</div>
                  </div>

                  <div className="mt-4 grid grid-cols-1 gap-2">
                    <MovieMiniCard title="The Grand Escape" rating={4.5} />
                    <MovieMiniCard title="Midnight Runner" rating={3} />
                    <MovieMiniCard title="Neo Noir" rating={5} />
                  </div>
                </div>
              </div>

              <img
                alt="popcorn"
                src={popCornGif}
                className="absolute -bottom-4 right-4 w-25 h-36 drop-shadow-2xl hidden md:block"
              />
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          <h2 className="text-3xl font-extrabold text-gray-800 text-center">How it works</h2>
          <p className="text-center text-gray-600 mt-2 max-w-2xl mx-auto">Simple flow — add, rate, and get smarter recommendations.</p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <InfoCard title="Add a Movie" copy="Search the IMDb-powered catalog and save movies to your list." icon={<SearchIcon />} />
            <InfoCard title="Rate It" copy="Give a star rating or a short note — the details matter." icon={<StarIcon />} />
            <InfoCard title="Get Recommendations" copy="ReelBot analyzes your history and suggests what you'll love next." icon={<RobotIcon />} />
          </div>
        </section>

        {/* FEATURED SCREENSHOT */}
        <section className="bg-white/60">
          <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row items-center gap-10">
            <div className="lg:w-1/2 flex flex-col gap-4 align-center"> 
              <h3 className="text-2xl font-bold">See your movie journey</h3>
              <p className="mt-3 text-gray-600">A clean dashboard shows your average rating, recently added movies, and personalized picks. Built with MERN and OpenAI.</p>

              <div className="mt-6 flex gap-3 justify-center">
                <Link to="/signup" className="px-5 py-2 rounded-lg bg-red-600 text-white font-semibold 
                     hover:bg-transparent hover:text-gray-800 hover:border hover:border-gray-200 
                     transition-colors duration-500 ease-in-out">
                  Try demo
                </Link>
                <Link to="https://github.com/alberto-sclocchi/movies-rater-client" target='_blank' className="px-5 py-2 rounded-lg border border-gray-200 text-gray-800 font-semibold 
                                  hover:bg-red-600 hover:text-white 
                                  transition-colors duration-500 ease-in-out">
                  View on GitHub
                </Link>
              </div>
            </div>

            <div className="lg:w-1/2 flex justify-center">
              <div className="w-[520px] h-[320px] rounded-xl shadow-xl overflow-hidden border border-gray-100">
                {/* Replace this with a real screenshot or iframe */}
                <div className="w-full h-full bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center">
                  <div className="text-center text-gray-500">[ App screenshot here ]</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS + TRENDING */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-bold">What users say</h3>
              <div className="mt-6 space-y-4">
                <Testimonial quote="Finally, I can track everything I watch and get real suggestions — not generic ones." author="— Ana, movie lover" />
                <Testimonial quote="ReelBot found me hidden gems I never would have tried." author="— Marcus, casual watcher" />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold">Trending now</h3>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {['Glass House', 'Moonlight', 'City of Stars', 'Retro Future'].map((t, i) => (
                  <div key={i} className="bg-white p-3 rounded-lg shadow-sm border h-[80px] flex flex-col justify-center">
                    <div className="font-semibold text-sm">{t}</div>
                    <div className="text-xs text-gray-400 mt-1">Trending #{i + 1}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-red-600 text-white py-12">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-extrabold">Start your movie journey today</h3>
              <p className="mt-2 text-red-100/90">Create your free account and get personalized picks from ReelBot.</p>
            </div>
            <div className="flex gap-3">
              <Link to="signup" className="px-6 py-3 rounded-md bg-white text-red-600 font-semibold border border-transparent 
                     hover:bg-transparent hover:text-white hover:border-white/30 
                     transition-colors duration-500 ease-in-out">
                Get started — it's free
              </Link>
              <Link to="signup" className="px-6 py-3 rounded-md bg-transparent text-white border border-white/30 
                     hover:bg-white hover:text-red-600 
                     transition-colors duration-500 ease-in-out">
                See demo
              </Link>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-600">
            <div>Built by <span className="font-semibold">Alberto Sclocchi</span> © {new Date().getFullYear()}</div>
            <div className="flex items-center gap-4">
              <Link to="https://github.com/alberto-sclocchi/movies-rater-client" target='_blank' className="hover:text-gray-900">GitHub</Link>
              <Link to="https://www.linkedin.com/in/alberto-sclocchi/" target='_blank' className="hover:text-gray-900">LinkedIn</Link>
              <Link to="mailto:albe.sclocchi@gmail.com" className="hover:text-gray-900">Email</Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}



