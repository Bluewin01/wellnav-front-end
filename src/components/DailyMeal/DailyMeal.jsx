import React from "react";
import "./DailyMeal.css";
import exampleImage from "../../Assets/Salad.png";
import { useNavigate } from "react-router-dom";
import { type } from "@testing-library/user-event/dist/type";

const DailyMeal = () => {
  const navigate = useNavigate();
  const mealType = [
    { id: 1, type: "Sarapan" },
    { id: 2, type: "Makan Siang" },
    { id: 3, type: "Makan Malam" },
  ];
  const navigateToFoodChoices = () => {
    navigate("/nutrition-tracking/food-choices");
  };
  return (
    <div>
      {mealType.map((item) => (
        <div className="daily-meal-container">
          <div className="daily-meal-info">
            <div className="meal-type">{item.type}</div>
            <div className="add-button">
              <button onClick={navigateToFoodChoices}>Tambah</button>
            </div>
          </div>
          <div className="daily-meal-image">
            <img src={exampleImage} alt="Meal" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default DailyMeal;
