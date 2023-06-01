import React from "react";
import { Route, Routes } from "react-router-dom";
import Button from "./components/Buttons/Button";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Community from "./pages/Community";
import Contact from "./pages/Contact";
import Payment from "./Payment";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <>
      <Navbar />
      <Dashboard />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/community" element={<Community />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> */}
      <Payment></Payment>
      <Footer />
    </>
  );
};

export default App;
