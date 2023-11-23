import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/logo.svg";

import "../style/Navbar.css";

function Navbar() {
  const location = useLocation();

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="nav">
      <Link className="nav-link" to="/">
        <img src={Logo} className="nav-logo" alt="Calendar_logo" />
      </Link>
      <div className="non" />
      <Link className={`nav-link ${isActiveLink("/") ? "active" : ""}`} to="/">
        Home
      </Link>
      <Link
        className={`nav-link ${isActiveLink("/calendar") ? "active" : ""}`}
        to="/calendar"
      >
        Calendar
      </Link>
      <Link
        className={`nav-link ${isActiveLink("/about") ? "active" : ""}`}
        to="/about"
      >
        About Us
      </Link>
    </div>
  );
}

export default Navbar;
