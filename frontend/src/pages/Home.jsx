import { Link } from "react-router-dom";
import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="page">
      <Link className="nav-link" to="/about">
        <h2>about</h2>
      </Link>
      <h1 className="merry">Merry christmas</h1>
    </div>
  );
}

export default Home;
