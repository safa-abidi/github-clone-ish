import { useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const NavBar = () => {
  const toggleNav = () => {
    setIsNavExpanded(!isNavExpanded);
  };
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <nav className="navigation">
      <Link className="logo" to="/">
        Github Repos
      </Link>
      <button className="hamburger" onClick={toggleNav}>
        <FontAwesomeIcon className="bars" icon={faBars} />
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
