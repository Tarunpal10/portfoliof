import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Work from './components/Work'
import Services from './components/services'
import Testimonial from './components/Testimonial'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Toaster } from 'react-hot-toast'



const App = () => {
  return<>
  
  <Header/>
  <Home/>
  <Work/>
  <Services/>
  <Testimonial/>
  <Contact/>
  <Footer/>
  <Toaster/>
  </>
}

export default App
