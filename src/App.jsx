import "./App.css";
import About from "./components/AboutSection/About";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/HeroSection/Hero";
import Projects from "./components/ProjectsSection/Proyects"
import Services from "./components/ServicesSection/Services";
import Contact from "./components/ContactSection/Contact";
import Footer from "./components/FooterSection/Footer";
import Skills from "./components/SkillsSection/Skills";
function App() {

  return (
    <>
      <div className="App">
        <Navbar/>
        <Hero/>
        <About/>
        <Services/>
        <Projects/>
        <Skills/>
        <Contact/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
