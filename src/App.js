import "./index";
// import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Intro from "./components/Intro";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* <Sidebar /> */}
      <Header />
      <Intro />
      <About />
      <Technologies />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
