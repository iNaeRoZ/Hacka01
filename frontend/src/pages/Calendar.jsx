import React from "react";
import { useLoaderData } from "react-router-dom";
import "../style/Calendar.css";

function Calendar() {
  const gifts = useLoaderData();
  return (
    <div className="list-movies">
      {gifts.map((gift) => {
        return (
          <div>
            <img src={gift.image} alt={gift.image} />
            <h4>{gift.description}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default Calendar;
