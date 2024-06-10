import React from 'react'
import Navbar from './navbar/Navbar'
import MainPage from './pages/MainPage'
import Footer from './footer/Footer'
import Training from './training/Training.jsx';
import { Route, Routes } from 'react-router-dom';


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