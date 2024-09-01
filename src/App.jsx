import { Intro } from "./Intro";
import { Myintro } from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Education } from "./Education";
import { Contact } from "./Contact";

function App() {
  return (
    <>
      <Router>
        <Myintro />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
