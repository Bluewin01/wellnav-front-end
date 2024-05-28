import React, { useState } from "react";
import Salad from "../../Assets/Salad.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./FoodCatalog.css";

const FoodCatalog = () => {
  const [foodItems, setFoodItems] = useState([
    { id: 1, name: "Nama Makanan", detail: "Detail Makanan", favorite: false },
    { id: 2, name: "Nama Makanan", detail: "Detail Makanan", favorite: false },
    { id: 3, name: "Nama Makanan", detail: "Detail Makanan", favorite: false },
    { id: 4, name: "Nama Makanan", detail: "Detail Makanan", favorite: false },
    { id: 5, name: "Nama Makanan", detail: "Detail Makanan", favorite: false },
    { id: 6, name: "Nama Makanan", detail: "Detail Makanan", favorite: false },
    { id: 7, name: "Nama Makanan", detail: "Detail Makanan", favorite: false },
    { id: 8, name: "Nama Makanan", detail: "Detail Makanan", favorite: false },
    { id: 9, name: "Nama Makanan", detail: "Detail Makanan", favorite: false },
    { id: 10, name: "Nama Makanan", detail: "Detail Makanan", favorite: false },
    { id: 11, name: "Nama Makanan", detail: "Detail Makanan", favorite: false },
    { id: 12, name: "Nama Makanan", detail: "Detail Makanan", favorite: false },
  ]);

  const toggleFavorite = (id) => {
    setFoodItems(
      foodItems.map((item) =>
        item.id === id ? { ...item, favorite: !item.favorite } : item
      )
    );
  };

  return (
    <div className="Food-Catalog">
      {foodItems.map((item) => (
        <div className="Food-Column" key={item.id}>
          <div className="Food-Recommendation">
            <img src={Salad} alt="Salad" className="Salad-img" />
            <p className="item-name">{item.name}</p>
            <p className="item-detail">{item.detail}</p>
            <FontAwesomeIcon
              icon={faHeart}
              onClick={() => toggleFavorite(item.id)}
              className="heart-icon"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodCatalog;
