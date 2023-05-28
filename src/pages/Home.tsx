import React from 'react'
import { About } from '../components/About_Section/About'
import Footer from '../components/footer/Footer'
import Instructor from '../components/Instructor/Instructor'

const Home = () => {
  return (
    <div className="home w-screen">
    <About></About>
    <Instructor/>
    <Footer/>
    </div>

  )
}

export default Home