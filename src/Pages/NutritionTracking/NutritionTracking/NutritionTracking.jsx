import React from "react";
import ReactDOMServer from "react-dom/server";
import CollapseSideBar from "../../../components/CollapseSideBar/CollapseSideBar";
import FoodChoice from "../../../components/FoodChoice/FoodChoice";
import "../NutritionTracking/NutritionTracking.css"; // Make sure you have the relevant styles in your CSS file
import SearchBar from "../../../components/SearchBar/SearchBar";
import Calendar from "../../../components/Calendar/Calendar";
import profilePicture from "../../../Assets/Salad.png";
import DailyMeal from "../../../components/DailyMeal/DailyMeal";
import Header from "../../../components/Header/Header";

function NutritionTracking() {
  return (
    <div className="App">
      <CollapseSideBar />
      <Header />
      <hr className="center-line" />
      <div className="calendar-section">
        <Calendar />
      </div>
      <div className="personalize-section-daily-meal">
        <DailyMeal />
      </div>
    </div>
  );
}

export default NutritionTracking;
