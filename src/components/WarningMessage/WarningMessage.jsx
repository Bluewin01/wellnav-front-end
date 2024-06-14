import React from "react";
import "../WarningMessage/WarningMessage.css";
import subtractImage from "../../Assets/Subtract.png";

const WarningMessage = () => {
  return (
    <div className="warning-message-container">
      <h1>
        <img
          src={subtractImage}
          alt="subtractImage"
          className="subtract-image"
        ></img>
        Perhatian,
      </h1>
      <h1>
        Makanan yang anda makan tidak baik untuk kondisi kesehatan saat ini
      </h1>
    </div>
  );
};

export default WarningMessage;
