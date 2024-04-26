import { Routes, BrowserRouter as Router, Route } from "react-router-dom";

import { Home } from "./pages";

import { Navbar } from "./components";

const App = () => {
  return (
    <main className="bg-slate-50/20">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={"about"} />
          <Route path="/contact" element={"contact"} />
          <Route path="/projects" element={"projects"} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
