import React from 'react'
import Navbar from './navbar/Navbar'
import MainPage from './pages/MainPage'
import Footer from './footer/Footer'
import Training from './training/Training.jsx';
import { Route, Routes } from 'react-router-dom';
import PrivacyPolicy from './privacy/PrivacyPolicy.jsx';


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/training' element={<Training />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App