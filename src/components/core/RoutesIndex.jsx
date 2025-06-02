import React from 'react'
import { Route, Routes } from 'react-router-dom';
import MoviesDashboard from '../movies/MoviesDashboard';

export default function RoutesIndex() {
  return (
    <Routes>
        <Route  path="/" element={<div>Home</div>} />
        <Route  path="/search" element={<MoviesDashboard />} />
    </Routes>
  )
}
