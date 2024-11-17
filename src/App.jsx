import MainPage from "./components/MainPage";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="backgroundFade">
      <Navbar />
      <MainPage />
      <AboutMe />
      <Services/>
      <Skills />
      <Experience/>
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
