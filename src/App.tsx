import React from "react";
import { Route, Routes } from "react-router-dom";
import Button from "./components/Buttons/Button";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses/Courses";
import Community from "./pages/Community_Page/Community";
import Contact from "./pages/contactpage/Contact";
import Payment from "./pages/Payment";
import Dashboard from "./pages/Dashboard";
<<<<<<< HEAD
import Coursedetail from "./components/Course detail modify/Course detail/Coursedetail"
=======

import Hero from "./components/Hero/Hero";
import LoginForm from "./components/LoginForm/LoginForm";
import LoginCard from "./components/LoginForm/LoginCard";
import SignupForm from "./components/LoginForm/SignupForm";

// import Rating from './components/Rating_Section/Rating'
Hero;
>>>>>>> 50d69e7421092c2aa105614998f55d54cbd56652
const App = () => {
  return (
    <>
      {/* <Button outline="outline" >hello</Button>  */}
      {/* {/* <Coursedetail/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/community" element={<Community />} />
        <Route path="/contact" element={<Contact />} />
<<<<<<< HEAD
      </Routes> */}
      <Payment></Payment>
      <Community/>
      <Coursedetail/>
      <Footer />
=======
      </Routes>
>>>>>>> 50d69e7421092c2aa105614998f55d54cbd56652
    </>
  );
};

export default App;
