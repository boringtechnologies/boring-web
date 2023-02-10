import { useState } from "react";
import { Link } from "react-router-dom";
import "./popnav.scss";

/**
 * Summary - This Popnav component groups all the navigation links + handle responsive
 * This component is called in Burger.jsx component
 * @param {boolean} open - controls the opening and closing of the responsive navigation menu
 * @param {useState} setOpen - set the state of "open"
 * @returns
 */

const Popnav = ({ open, setOpen }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const handleClick = () => {
    setOpen(false);
    setSubmenuOpen(false);
  };

  return (
    <ul open={open} className={`popnavUl ${open ? "open" : "close"}`}>
      <li>
        <Link
          to="/"
          className="navlinkStyle mobileOnly"
          onClick={() => handleClick()}
        >
          HOME
        </Link>
      </li>
      <li
        className="navlinkStyle submenubtn desktopOnly"
        onClick={() => setSubmenuOpen(!submenuOpen)}
      >
        OUR SERVICES
      </li>
      <li>
        <Link
          to="/service/web"
          className="navlinkStyle mobileOnly"
          onClick={() => handleClick()}
        >
          WEB DEVELOPMENT
        </Link>
      </li>
      <li>
        <Link
          to="/service/software"
          className="navlinkStyle mobileOnly"
          onClick={() => handleClick()}
        >
          SOFTWARE DEVELOPMENT
        </Link>
      </li>
      <li>
        <Link
          to="/contact"
          className="navlinkStyle"
          onClick={() => handleClick()}
        >
          CONTACT US
        </Link>
      </li>
      {submenuOpen && (
        <ul className="submenu desktopOnly">
          <li>
            <Link
              to="/service/web"
              className="navlinkStyle"
              onClick={() => handleClick()}
            >
              WEB DEVELOPMENT
            </Link>
          </li>
          <li>
            <Link
              to="/service/software"
              className="navlinkStyle"
              onClick={() => handleClick()}
            >
              SOFTWARE DEVELOPMENT
            </Link>
          </li>
        </ul>
      )}
    </ul>
  );
};

export default Popnav;
