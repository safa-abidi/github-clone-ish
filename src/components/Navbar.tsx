import { useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

/**
 * NavBar component represents the navigation bar of the application.
 * It displays the logo, a toggle button for smaller screens navigation, and a menu of navigation links.
 */
const NavBar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  /**
   * Toggles the navigation menu between expanded and collapsed states.
   */
  const toggleNav = () => {
    setIsNavExpanded(!isNavExpanded);
  };
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
        data-testid="navigation-menu"
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
