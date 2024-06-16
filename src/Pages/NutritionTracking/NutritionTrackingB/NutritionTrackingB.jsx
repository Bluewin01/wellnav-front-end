import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CollapseSideBar from "../../../components/CollapseSideBar/CollapseSideBar";
import "./NutritionTrackingB.css";
import SearchBar from "../../../components/SearchBar/SearchBar";
import profilePicture from "../../../Assets/Salad.png";
import CalorieChart from "../../../components/CalorieChart/CalorieChart";
import NutritionChart from "../../../components/NutritionChart/NutritionChart";
import FoodTaken from "../../../components/FoodTaken/FoodTaken";
import WarningMessage from "../../../components/WarningMessage/WarningMessage";
import chefPicture from "../../../Assets/Rekomendasi.png";
import Header from "../../../components/Header/Header";
import { setCalories, setNutrition } from "../../../redux/actions";

function NutritionTrackingB() {
  const dispatch = useDispatch();
  const takenCalories = 1200; // This can come from an API or other logic
  const recommendedCalories = 2000; // This can come from an API or other logic
  const takenCarbohydrates = 200; // This can come from an API or other logic
  const takenProtein = 75; // This can come from an API or other logic
  const takenFat = 50; // This can come from an API or other logic

  useEffect(() => {
    dispatch(setCalories(takenCalories, recommendedCalories));
    dispatch(setNutrition(takenCarbohydrates, takenProtein, takenFat));
  }, [
    dispatch,
    takenCalories,
    recommendedCalories,
    takenCarbohydrates,
    takenProtein,
    takenFat,
  ]);

  const {
    takenCalories: taken,
    recommendedCalories: recommended,
    mealType,
  } = useSelector((state) => state);
  const remainingCalories = recommended - taken;

  return (
    <div className="App">
      <CollapseSideBar />
      <Header />
      <div className="chart-container">
        <img src={chefPicture} className="chef-picture" />
        <CalorieChart takenCalories={taken} recommendedCalories={recommended} />
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
      <div className="warning-section">
        <WarningMessage />
      </div>
    </div>
  );
}

export default NutritionTrackingB;
