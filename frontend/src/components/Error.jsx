import React from "react";
import "./Error.css";

function Error() {
  return (
    <div className="error">
      <div className="texterr">
        <h1 className="textError">Error</h1>
        <h1 className="texterror">404</h1>
      </div>
      <h1 className="adieu">Tu cherche la baggare ?</h1>
      <img
        src="https://i.kym-cdn.com/photos/images/newsfeed/001/264/884/197.png"
        alt="truc"
      />
    </div>
  );
}

export default Error;
