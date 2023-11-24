import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/logo.svg";
import Logo2 from "../assets/cadeauOuvert.svg";

import "../style/Navbar.css";

function Navbar() {
  const location = useLocation();
  const [currentLogo, setCurrentLogo] = useState(Logo);

  const isActiveLink = (path) => {
    return location.pathname === path;
  };
  const handleLogoClick = () => {
    if (currentLogo === Logo) {
      setCurrentLogo(Logo2);
    } else {
      setCurrentLogo(Logo);
    }
  };

  return (
    /* eslint-disable */
    <div className="nav">
      <div className="nav-link">
        <img
          src={currentLogo}
          onClick={handleLogoClick}
          className="nav-logo"
          alt="Calendar_logo"
        />
      </div>
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
