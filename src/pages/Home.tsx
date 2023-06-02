// import React from 'react'
import { About } from '../components/About_Section/About'
// import Footer from '../components/footer/Footer'
import Instructor from '../components/Instructor/Instructor'
import Hero from '../components/Hero/Hero'
import Rating from '../components/Rating_Section/Rating'
const Home = () => {
  return (
    <div className="home w-screen">
      <Hero></Hero>
    <About></About>
    <Instructor/>
    <Rating></Rating>
    </div>

  )
}

export default Home
