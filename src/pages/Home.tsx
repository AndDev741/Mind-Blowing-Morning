import { About } from "../components/About_Section/About";
import Instructor from "../components/Instructor/Instructor";
import Contact_section from "../components/Contact_section/Contact_section";
import Hero from "../components/Hero/Hero";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
// import LoginForm from "../components/LoginForm/LoginForm";
import Work from "../components/frames/Work";
import SignupForm from "../components/LoginForm/SignupForm";
import Success from "../components/section_oursuccess/Success";
const Home = () => {
  return (
    <div className="home w-screen">
      <Navbar />
      <Hero />
      <Work />
      <About />
      <Success/>
      <Instructor />
      <Contact_section />
      <Footer />
      {/* <LoginForm /> */}
    </div>
  );
};

export default Home;
