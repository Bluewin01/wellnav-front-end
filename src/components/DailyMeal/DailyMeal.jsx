import React from "react";
import "./DailyMeal.css";
import exampleImage from "../../Assets/Salad.png";

const DailyMeal = ({ mealType }) => {
  return (
    <div className="daily-meal-container">
      <div className="daily-meal-info">
        <div className="meal-type">{mealType}</div>
        <div className="add-button">
          <button>Tambah</button>
        </div>
      </div>
      <div className="daily-meal-image">
        <img src={exampleImage} alt="Meal" />
      </div>
    </div>
  );
};

export default DailyMeal;
