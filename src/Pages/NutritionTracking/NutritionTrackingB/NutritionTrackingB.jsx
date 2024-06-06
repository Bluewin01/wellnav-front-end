import React, { useState } from "react";
import CollapseSideBar from "../../../components/CollapseSideBar/CollapseSideBar";
import "./NutritionTrackingB.css";
import SearchBar from "../../../components/SearchBar/SearchBar";
import profilePicture from "../../../Assets/Salad.png";
import CalorieChart from "../../../components/CalorieChart/CalorieChart";
import NutritionChart from "../../../components/NutritionChart/NutritionChart";
import FoodTaken from "../../../components/FoodTaken/FoodTaken";

function NutritionTrackingB() {
  const takenCalories = 1500;
  const recommendedCalories = 2000;

  return (
    <div className="App">
      <CollapseSideBar />
      <div className="top-section">
        <div className="greeting-section">
          <h1>Halo, Jane</h1>
          <p>Mari pantau nutrisi anda</p>
        </div>
        <div className="search-profile-section">
          <SearchBar />
          <img src={profilePicture} className="profile-picture" alt="profile" />
        </div>
      </div>
      <div className="chart-container">
        <CalorieChart
          takenCalories={takenCalories}
          recommendedCalories={recommendedCalories}
        />
      </div>
      <div className="personalize-section">
        <NutritionChart />
        <div className="food-taken">Makanan yang dikonsumsi</div>
        <FoodTaken />
      </div>
    </div>
  );
}

export default NutritionTrackingB;
