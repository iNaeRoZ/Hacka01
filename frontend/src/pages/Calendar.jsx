import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import "../style/Calendar.css";
import "../components/Modal.css";

function Calendar() {
  const gifts = useLoaderData();
  const [selectCadeau, setSelectCadeau] = useState(null);
  const [clickCadeau, setClickCadeau] = useState(new Set());
  const [blockbyID, setblockbyID] = useState(1);

  const openImageDetails = (gift) => {
    if (clickCadeau.has(blockbyID) || gift.id === blockbyID) {
      setSelectCadeau(gift);
      setClickCadeau(new Set(clickCadeau).add(gift.id));

      setblockbyID(blockbyID + 1);
    }
  };

  const closeImageDetails = () => {
    setSelectCadeau(null);
  };

  return (
    <>
      {selectCadeau && (
        <div className="modal">
          <div className="modal-content">
            <h2>Jour : {selectCadeau.id}</h2>
            <img
              className="img-modal"
              src={selectCadeau.image}
              alt={selectCadeau.description}
            />
            <p className="description-modal">{selectCadeau.description}</p>

            <button
              className="close-modal"
              type="button"
              onClick={closeImageDetails}
            >
              CLOSE
            </button>
          </div>
        </div>
      )}

      <div className="list-gift">
        {gifts.map((gift) => {
          let imageSrc;
          if (clickCadeau.has(gift.id)) {
            imageSrc = gift.imageCadeauOuvert;
          } else {
            imageSrc = gift.imageCadeau;
          }

          return (
            /* eslint-disable */
            <div
              key={gift.id}
              className="cadeau"
              onClick={() => openImageDetails(gift)}
            >
              <img src={imageSrc} alt={gift.image} />
            </div>
            /* eslint-enable */
          );
        })}
      </div>
    </>
  );
}

export default Calendar;
