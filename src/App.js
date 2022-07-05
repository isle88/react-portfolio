// import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavMenu from "./Navigation/Navmenu";
import Home from "./Home";
import Profile from "./components/Profile";
import Skills from './components/Skills';
import Projects from './components/Project';

function App() {
  return (
    <div>
      {/* <BrowserRouter>
        <NavMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hyunjung" element={<Profile />} />
          <Route path="/skills" element={<Skills/>} />
          <Route path="/projects" element={<Projects/>} />
        </Routes>
      </BrowserRouter> */}
      <NavMenu />
      <Home />
      <Profile/>
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
