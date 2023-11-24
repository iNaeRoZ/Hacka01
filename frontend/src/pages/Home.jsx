import React from "react";
import { Link } from "react-router-dom";
import "../style/Home.css";

function Home() {
  return (
    <div className="page">
      <h1 className="merry">Merry christmas</h1>
      <h1 className="surprise">Clique en dessous pour gagner 10 000 €</h1>
      <Link
        className="buttonSurprisee"
        to="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      >
        <button className="buttonSurprise" type="button">
          Surprise
        </button>
      </Link>
    </div>
  );
}

export default Home;
