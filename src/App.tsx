<<<<<<< HEAD
// import React from 'react'
import { Route, Routes } from "react-router-dom";
// import Button from "./components/Buttons/Button";
=======
import React from "react";
import { Route, Routes } from "react-router-dom";
import Button from "./components/Buttons/Button";
>>>>>>> 8e811504500564c291144fc25e78331454f7901d
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
<<<<<<< HEAD
import Courses from "./pages/Courses/Courses";
import Community from "./pages/Community";
import Contact from "./pages/Contact";
=======
import Courses from "./pages/Courses";
import Community from "./pages/Community_Page/Community";
import Contact from "./pages/Contact";
import Payment from "./pages/Payment";
import Dashboard from "./pages/Dashboard";
>>>>>>> 8e811504500564c291144fc25e78331454f7901d

import Hero from "./components/Hero/Hero"

// import Rating from './components/Rating_Section/Rating'
Hero
const App = () => {
  return (
    <>
    {/* <Button outline="outline" >hello</Button> */}
    {/* <Coursedetail/> */}
      <Navbar />
<<<<<<< HEAD
      <Routes>
=======
      <Dashboard />
      {/* <Routes>
>>>>>>> 8e811504500564c291144fc25e78331454f7901d
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/community" element={<Community />} />
        <Route path="/contact" element={<Contact />} />
<<<<<<< HEAD
      </Routes>
=======
      </Routes> */}
      <Payment></Payment>
      <Community/>
>>>>>>> 8e811504500564c291144fc25e78331454f7901d
      <Footer />
    </>
  );
};

export default App;
