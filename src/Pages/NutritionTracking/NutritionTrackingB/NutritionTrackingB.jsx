import React, { useState } from "react";
import CollapseSideBar from "../../../components/CollapseSideBar/CollapseSideBar";
import "./NutritionTrackingB.css";
import SearchBar from "../../../components/SearchBar/SearchBar";
import profilePicture from "../../../Assets/Salad.png";
import CalorieChart from "../../../components/CalorieChart/CalorieChart";
import NutritionChart from "../../../components/NutritionChart/NutritionChart";
import FoodTaken from "../../../components/FoodTaken/FoodTaken";
import { useDispatch, useSelector } from "react-redux";
import chefPicture from "../../../Assets/Rekomendasi.png";

function NutritionTrackingB() {
  const takenCalories = 1500;
  const recommendedCalories = 2000;
  const remainingCalories = recommendedCalories - takenCalories;
  const mealType = useSelector((state) => state.mealType);
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
        <img src={chefPicture} className="chef-picture" />
        <CalorieChart
          takenCalories={takenCalories}
          recommendedCalories={recommendedCalories}
        />
        <div className="chart-description">
          <div className="chart-meal-type">{mealType}</div>
          <div className="chart-calorie-left">
            Tersisa {remainingCalories} kkal hari ini
          </div>
        </div>
      </div>
      <div className="personalize-section">
        <NutritionChart />

        <FoodTaken />
      </div>
    </div>
  );
}

export default NutritionTrackingB;
