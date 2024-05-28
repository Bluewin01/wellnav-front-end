import React from "react";
import "./DailyMeal.css";
import exampleImage from "../../assets/images/Scrambled Egg with Tofu.webp";

const DailyMeal = () => {
  return (
    <div className="daily-meal-container">
      <div className="daily-meal-info">
        <div className="meal-type">Breakfast</div>
        <div className="add-button">
          <button>Add</button>
        </div>
      </div>
      <div className="daily-meal-image">
        <img src={exampleImage} alt="Meal" />
      </div>
    </div>
  );
};

export default DailyMeal;
