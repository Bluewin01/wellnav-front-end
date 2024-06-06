// src/components/FoodChoice/FoodChoice.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementCounter,
  decrementCounter,
  setSelectedItems,
} from "../../redux/actions";
import "./FoodChoice.css";
import exampleImage from "../../Assets/Salad.png";

const FoodChoice = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const selectedItems = useSelector((state) => state.selectedItems);

  const foodChoices = [
    { id: 1, name: "Nama Makanan 1", detail: "Detail Makanan 1" },
    { id: 2, name: "Nama Makanan 2", detail: "Detail Makanan 2" },
    { id: 3, name: "Nama Makanan 3", detail: "Detail Makanan 3" },
    { id: 4, name: "Nama Makanan 4", detail: "Detail Makanan 4" },
    { id: 5, name: "Nama Makanan 5", detail: "Detail Makanan 5" },
    { id: 6, name: "Nama Makanan 6", detail: "Detail Makanan 6" },
    { id: 7, name: "Nama Makanan 7", detail: "Detail Makanan 7" },
  ];

  const handleButtonClick = (id) => {
    const isSelected = selectedItems.some((item) => item.id === id);
    const newSelectedItems = isSelected
      ? selectedItems.filter((item) => item.id !== id)
      : [...selectedItems, foodChoices.find((item) => item.id === id)];

    dispatch(setSelectedItems(newSelectedItems));
    dispatch(isSelected ? decrementCounter() : incrementCounter());
  };

  return (
    <div className="food-choices">
      {foodChoices.map((item) => (
        <div key={item.id} className="food-choice-container">
          <img src={exampleImage} alt={item.name} className="food-image" />
          <div className="food-details">
            <h3>{item.name}</h3>
            <p>{item.detail}</p>
          </div>
          <div className="button-group">
            <button
              className={`add-button ${
                selectedItems.some(
                  (selectedItem) => selectedItem.id === item.id
                )
                  ? "selected"
                  : ""
              }`}
              onClick={() => handleButtonClick(item.id)}
            >
              Tambah
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodChoice;
