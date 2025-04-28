import "./App.css";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Skills from "./components/Skill";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Skills />
      <Footer />
    </>
  );
}

export default App;
