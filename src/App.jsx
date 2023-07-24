import React from 'react'
import { useState } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.css'
import Homepage from './Pages/Homepage/Homepage'
import Header from './Components/Header/Header'

function App() {


  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Homepage />} />
    </Routes>
     
    </BrowserRouter>
  )
}

export default App
