import React from 'react'
import { Route, Routes } from 'react-router-dom';

export default function RoutesIndex() {
  return (
    <Routes>
        <Route  path="/" element={<div>Home</div>} />
        <Route  path="/search" element={<div>Movies</div>} />
    </Routes>
  )
}
