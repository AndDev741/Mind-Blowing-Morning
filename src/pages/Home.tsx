// import React from 'react'
import { About } from '../components/About_Section/About'
// import Footer from '../components/footer/Footer'
import Instructor from '../components/Instructor/Instructor'
import Contact_section from '../components/Contact_section/Contact_section'
import Hero from "../components/Hero/Hero"
import Footer from '../components/footer/Footer'
const Home = () => {
  return (
    <div className="home w-screen">
      <Hero></Hero>
    <About></About>
    <Instructor/>
    <Contact_section/>
    <Footer/>
    </div>

  )
}

export default Home
