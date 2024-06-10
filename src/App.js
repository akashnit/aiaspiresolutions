import React from 'react'
import Navbar from './navbar/Navbar'
import MainPage from './pages/MainPage'
import Footer from './footer/Footer'
import { Routes, Route } from "react-router-dom";
import Training from './training/Training.jsx';


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/training' element={<Training />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App