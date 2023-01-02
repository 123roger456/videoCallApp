import React from 'react'
import {Routes, Route} from "react-router-dom"
import HomePage from './Views/HomePage'
import Room from './Views/Room'

function App() {
  return (
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/room/:roomId" element={<Room />} />
    </Routes>
  )
}

export default App