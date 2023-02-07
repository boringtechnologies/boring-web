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
  const handleClick = () => {
    setOpen(false);
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
      <li>
        <Link to="/FAQ" className="navlinkStyle" onClick={() => handleClick()}>
          FAQ
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
    </ul>
  );
};

export default Popnav;
