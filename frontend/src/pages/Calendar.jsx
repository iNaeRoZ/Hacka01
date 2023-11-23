import React from "react";
import { useLoaderData } from "react-router-dom";
import "../style/Calendar.css";

function Calendar() {
  const gifts = useLoaderData();
  return (
    <div className="list-gift">
      {gifts.map((gift) => {
        return (
          <div className="cadeau">
            oui
            <img src={gift.imageCadeau} alt={gift.image} />
          </div>
        );
      })}
    </div>
  );
}

export default Calendar;
