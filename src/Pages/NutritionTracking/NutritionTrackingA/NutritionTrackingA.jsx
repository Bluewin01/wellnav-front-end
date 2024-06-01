import React, { useState } from "react";
import CollapseSideBar from "../../../components/CollapseSideBar/CollapseSideBar";
import FoodChoice from "../../../components/FoodChoice/FoodChoice";
import "./NutritionTrackingA.css";
import SearchBar from "../../../components/SearchBar/SearchBar";
import profilePicture from "../../../Assets/Salad.png";

function NutritionTracking() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "Rendah Kalori", "Bebas Gluten", "Vegan"];
  const [counter, setCounter] = useState(0);

  const handleCounterChange = (newCounter) => {
    setCounter(newCounter);
  };

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
      <div className="choose-meal-title">Pilih sarapan hari ini</div>
      <div className="filter-section">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`filter-button ${
              activeFilter === filter ? "active" : ""
            }`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
      <FoodChoice counter={counter} onCounterChange={handleCounterChange} />
      <div className="big-add-button">
        <button>
          Tambah
          <div className="circle">
            <span className="circle-text">{counter}</span>
          </div>
        </button>
      </div>
    </div>
  );
}

export default NutritionTracking;
