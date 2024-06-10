import React from 'react'
import Navbar from './navbar/Navbar'
import MainPage from './pages/MainPage'
import Footer from './footer/Footer'
import { Routes, Route } from "react-router-dom";
import Training from './training/Training';


const App = () => {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='training' element={<Training />} />
      </Routes>
      <Footer />
    </main>
  )
}

export default App