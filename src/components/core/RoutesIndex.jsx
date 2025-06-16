import React from 'react'
import { Route, Routes } from 'react-router-dom';
import MoviesDashboard from '../movies/MoviesDashboard';
import MovieDetailsInfoBox from '../movies/pages/MovieDetailsInfoBox';
import ReelBotPage from '../reelbot/ReelBotPage';
import LogInPage from '../auth/LogInPage';
import SignUpPage from '../auth/SignUpPage';

export default function RoutesIndex() {
  return (
    <Routes>
        <Route  path="/" element={<h1>Home</h1>} />
        <Route  path="/dashboard" element={<MoviesDashboard />} />
        <Route  path="/movie/:movieId" element={<MovieDetailsInfoBox />} />
        <Route  path="/reelbot" element={<ReelBotPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
    </Routes>
  )
}
