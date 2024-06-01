import React from "react";
import ReactDOMServer from "react-dom/server";
import CollapseSideBar from "../../../components/CollapseSideBar/CollapseSideBar";
import FoodChoice from "../../../components/FoodChoice/FoodChoice";
import "../NutritionTracking/NutritionTracking.css"; // Make sure you have the relevant styles in your CSS file
import SearchBar from "../../../components/SearchBar/SearchBar";
import Calendar from "../../../components/Calendar/Calendar";
import profilePicture from "../../../Assets/Salad.png";
import DailyMeal from "../../../components/DailyMeal/DailyMeal";

function NutritionTracking() {
  return (
    <div className="App">
      <CollapseSideBar />
      <div className="top-section">
        <div className="greeting-section">
          <h1>Halo, Jane</h1>
          <p>Rekomendasi makanan untuk anda</p>
        </div>
        <div className="search-profile-section">
          <SearchBar></SearchBar>
          <img src={profilePicture} className="profile-picture"></img>
        </div>
      </div>
      <hr className="center-line" />
      <div className="calendar-section">
        <Calendar />
      </div>
      <div className="personalize-section">
        <p>Personalisasikan Makanan Anda</p>
        <DailyMeal />
      </div>
    </div>
  );
}

export default NutritionTracking;
