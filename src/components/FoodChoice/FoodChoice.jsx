import React, { useState, useEffect } from "react";
import "./FoodChoice.css";
import exampleImage from "../../Assets/Salad.png";

const FoodChoice = ({ counter, onCounterChange }) => {
  const foodChoices = [
    { id: 1, name: "Nama Makanan", detail: "Detail Makanan" },
    { id: 2, name: "Nama Makanan", detail: "Detail Makanan" },
    { id: 3, name: "Nama Makanan", detail: "Detail Makanan" },
    { id: 4, name: "Nama Makanan", detail: "Detail Makanan" },
    { id: 5, name: "Nama Makanan", detail: "Detail Makanan" },
    { id: 6, name: "Nama Makanan", detail: "Detail Makanan" },
    { id: 7, name: "Nama Makanan", detail: "Detail Makanan" },
  ];

  const [selectedItems, setSelectedItems] = useState({});

  const handleButtonClick = (id) => {
    setSelectedItems((prevSelectedItems) => {
      const isSelected = prevSelectedItems[id];
      const newSelectedItems = { ...prevSelectedItems, [id]: !isSelected };
      const newCounter = isSelected ? counter - 1 : counter + 1;
      onCounterChange(newCounter);
      return newSelectedItems;
    });
  };

  return (
    <div className="food-choices">
      {foodChoices.map((item) => (
        <div key={item.id} className="food-choice-container">
          <div className="food-image-container">
            <img src={exampleImage} alt={item.name} className="food-image" />
          </div>
          <div className="food-details">
            <h3>{item.name}</h3>
            <p>{item.detail}</p>
          </div>
          <div className="button-group">
            <button
              className={`add-button ${
                selectedItems[item.id] ? "selected" : ""
              }`}
              onClick={() => handleButtonClick(item.id)}
            >
              Tambah
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodChoice;
