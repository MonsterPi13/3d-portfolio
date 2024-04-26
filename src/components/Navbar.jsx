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
        <NavLink
          to="/about"
          className={({ isActive }) => `first-letter:uppercase transition duration-300 ${isActive ? 'text-blue-500' : 'text-black-500'}`}
          >
          about
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) => `first-letter:uppercase transition duration-300 ${isActive ? 'text-blue-500' : 'text-black-500'}`}
        >
          projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
