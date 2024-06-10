import React from 'react'
import Navbar from './navbar/Navbar'
import MainPage from './pages/MainPage'
import Footer from './footer/Footer'
import { Routes, Route } from "react-router-dom";
import Training from './training/Training.jsx';


const App = () => {
  return (
    <Routes>
      <Route path='/'>
        <Navbar />
        <Route index element={<MainPage />} />
        <Route path='/training' element={<Training />} />
        <Footer />
      </Route>
    </Routes>
  )
}

export default App