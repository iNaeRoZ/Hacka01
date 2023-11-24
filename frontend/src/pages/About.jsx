import React from "react";
import { Link } from "react-router-dom";

import Anto from "../assets/anto.png";
import Hedi from "../assets/hedi.png";
import Tibo from "../assets/tibo.png";
import Seb from "../assets/seb.png";
import Max from "../assets/max.png";
import "../style/About.css";

function About() {
  return (
    <div className="about">
      <div className="top-row">
        <Link className="hedi-link" to="https://github.com/Phoulos">
          <img src={Hedi} className="top-left" alt="tete-hedi" />
        </Link>
        <Link className="seb-link" to="https://github.com/Romeoseb-dev">
          <img src={Seb} className="top-right" alt="tete-seb" />
        </Link>
      </div>
      <div className="bottom-row">
        <Link className="anto-link" to="https://github.com/AntoPAA">
          <img src={Anto} className="bottom-left" alt="tete-anto" />
        </Link>
        <Link className="tibo-link" to="https://github.com/ThibaudDps">
          <img src={Tibo} className="bottom-middle" alt="tete-tibo" />
        </Link>

        <Link className="max-link" to="https://github.com/iNaeRoZ">
          <img src={Max} className="bottom-right" alt="tete-max" />
        </Link>
      </div>
    </div>
  );
}

export default About;
