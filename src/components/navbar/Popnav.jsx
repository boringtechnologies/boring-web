'use client'

import Link from "next/link";
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
      <li className="mobileOnly">
        <Link href="/" className="navlinkStyle " onClick={() => handleClick()}>
          HOME
        </Link>
      </li>
      <li>
        <Link
          href="/service/web"
          className="navlinkStyle"
          onClick={() => handleClick()}
        >
          WEB DEVELOPMENT
        </Link>
      </li>
      <li>
        <Link
          href="/service/software"
          className="navlinkStyle"
          onClick={() => handleClick()}
        >
          SOFTWARE DEVELOPMENT
        </Link>
      </li>
      <li>
        <Link
          href="/contact"
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
