import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Services from './components/Services'
import Discover from './components/Discover'
import BookingPage from './components/BookingPage'
import CheckOut from './components/CheckOut'
import AboutUs from './components/AboutUs'

function App() {
 

  return (
    <>
      <BrowserRouter>
       <Navbar/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/discover' element={<Discover/>}/>
        <Route path='/bookingpage'element={<BookingPage/>}/>
        <Route path='/checkout' element={<CheckOut/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
       </Routes>
       <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
