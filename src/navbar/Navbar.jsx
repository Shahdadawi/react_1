import { Link } from "react-router-dom";
import style from './navbar.module.css';

function Navbar() {
  return (
    <nav className={`${style.nav} navbar navbar-expand-lg navbar-dark`}>
      <div className="container">
        <Link className="navbar-brand fw-bold text-uppercase fs-3" to="/">
          Start Bootstrap
        </Link>

        <div className="ms-auto d-flex gap-4">
          <Link className="nav-link text-white fw-bold text-uppercase fs-6" to="/portfolio">
            Portfolio
          </Link>
          <Link className="nav-link text-white fw-bold text-uppercase fs-6" to="/about">
            About
          </Link>
          <Link className="nav-link text-white fw-bold text-uppercase fs-6" to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;