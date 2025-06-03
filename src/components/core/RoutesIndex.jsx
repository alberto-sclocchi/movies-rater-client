import React from 'react'
import { Route, Routes } from 'react-router-dom';
import MoviesDashboard from '../movies/MoviesDashboard';

export default function RoutesIndex() {
  return (
    <Routes>
        <Route  path="/" element={<h1>Home</h1>} />
        <Route  path="/search" element={<MoviesDashboard />} />
    </Routes>
  )
}
