'use client'

import Link from "next/link";
import Burger from "./Burger.jsx";
import "./navbar.scss";

/**
 * Summary - This is the navigation bar component
 * @argument Burger - This Burger component represents the burger menu (with the 3 lines)
 * and it calls the component Popnav which has the navigation links
 * @returns
 */

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <Link className="logo big" href="/">BORING TECHNOLOGIES</Link>
        <div className="burger">
          <Burger />
        </div>
      </div>
    </>
  );
};

export default Navbar;
