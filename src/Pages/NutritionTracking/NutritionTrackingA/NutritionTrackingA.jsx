import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CollapseSideBar from "../../../components/CollapseSideBar/CollapseSideBar";
import FoodChoice from "../../../components/FoodChoice/FoodChoice";
import "./NutritionTrackingA.css";
import SearchBar from "../../../components/SearchBar/SearchBar";
import profilePicture from "../../../Assets/Salad.png";
import { useNavigate } from "react-router-dom";
import {
  incrementCounter,
  decrementCounter,
  setSelectedItems,
} from "../../../redux/actions";
import Header from "../../../components/Header/Header";

function NutritionTrackingA() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "Rendah Kalori", "Bebas Gluten", "Vegan"];
  const counter = useSelector((state) => state.counter);
  const selectedItems = useSelector((state) => state.selectedItems);
  const dispatch = useDispatch();

  const handleCounterChange = (newCounter) => {
    if (newCounter > counter) {
      dispatch(incrementCounter());
    } else {
      dispatch(decrementCounter());
    }
  };

  const handleSelectedItemsChange = (newSelectedItems) => {
    dispatch(setSelectedItems(newSelectedItems));
  };

  const navigate = useNavigate();

  const navigateToNutritionTrackingB = () => {
    navigate("/nutrition-tracking/food-choices/nutrition-data");
  };

  const mealType = useSelector((state) => state.mealType);

  return (
    <div className="App">
      <CollapseSideBar />

      <Header />

      <div className="choose-meal-title">Pilih {mealType} hari ini</div>
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
      <FoodChoice
        counter={counter}
        onCounterChange={handleCounterChange}
        onSelectedItemsChange={handleSelectedItemsChange}
      />
      {selectedItems.length > 0 && (
        <div className="big-add-button">
          <button onClick={navigateToNutritionTrackingB}>
            Tambah
            <div className="circle">
              <span className="circle-text">{counter}</span>
            </div>
          </button>
        </div>
      )}
    </div>
  );
}

export default NutritionTrackingA;
