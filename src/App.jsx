import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
