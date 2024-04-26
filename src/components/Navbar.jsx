import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink to="/">
        <div className="logo w-12 h-12 flex items-center justify-center">
          <span className="blue-gradient_text text-xl font-medium">RP</span>
        </div>
      </NavLink>

      <nav className="flex items-center gap-x-6 font-medium text-xl ">
        <NavLink to="/about" className="first-letter:uppercase hover:text-blue-500 transition duration-300">
          about
        </NavLink>
        <NavLink to="/projects" className="first-letter:uppercase hover:text-blue-500 transition duration-300">
          projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
