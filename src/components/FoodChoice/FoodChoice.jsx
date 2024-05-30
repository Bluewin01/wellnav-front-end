import React, { useState } from "react";
import "./FoodChoice.css";
import exampleImage from "../../Assets/Salad.png";

const FoodChoice = ({ imageUrl, foodName, foodDetails }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="food-choice-container">
      <div className="food-image-container">
        <img src={exampleImage} alt={foodName} className="food-image" />
      </div>
      <div className="food-details">
        <h3>foodname</h3>
        <p>details</p>
      </div>
      <div className="button-group">
        <button className="add-button">Add</button>
      </div>
    </div>
  );
};

export default FoodChoice;
