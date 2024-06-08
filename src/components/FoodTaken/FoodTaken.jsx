// src/components/FoodTaken/FoodTaken.js
import React from "react";
import { useSelector } from "react-redux";
import "./FoodTaken.css";
import exampleImage from "../../Assets/Salad.png";

const FoodTaken = () => {
  const counter = useSelector((state) => state.counter);
  const selectedItems = useSelector((state) => state.selectedItems);

  return (
    <div className="food-taken">
      <div className="food-taken-header">
        <div className="food-taken-text">Makanan yang dikonsumsi</div>
      </div>
      {selectedItems.map((item) => (
        <div key={item.id} className="food-choice-container2">
          <img src={exampleImage} alt={item.name} className="food-image2" />
          <div className="food-details">
            <h3>{item.name}</h3>
            <p>{item.detail}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodTaken;
