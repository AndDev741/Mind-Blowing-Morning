import { About } from "../components/About_Section/About";
import Instructor from "../components/Instructor/Instructor";
import Contact_section from "../components/Contact_section/Contact_section";
import Hero from "../components/Hero/Hero";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
const Home = () => {
  return (
    <div className="home w-screen">
      <Navbar />
      <Hero />
      <About />
      <Instructor />
      <Contact_section />
      <Footer />
    </div>
  );
};

export default Home;
