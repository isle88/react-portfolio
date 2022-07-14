import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Profile />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
