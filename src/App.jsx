import { Routes, BrowserRouter as Router, Route } from "react-router-dom";

import { Home } from "./pages";

import { Navbar } from "./components";
import Contact from "./pages/Contact";
import About from "./pages/About";

const App = () => {
  return (
    <main className="bg-slate-50/20">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={"projects"} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
