import React from "react";
import Salad from "../../Assets/Salad.png";
import HeartIcon from "./HeartIcon";
import "./FoodCatalog.css";

const FoodCatalog = () => {
  const foodItems = [
    { id: 1, name: "Nama Makanan", detail: "Detail Makanan" },
    { id: 2, name: "Nama Makanan", detail: "Detail Makanan" },
    { id: 3, name: "Nama Makanan", detail: "Detail Makanan" },
    { id: 4, name: "Nama Makanan", detail: "Detail Makanan" },
    { id: 5, name: "Nama Makanan", detail: "Detail Makanan" },
    { id: 6, name: "Nama Makanan", detail: "Detail Makanan" },
    { id: 7, name: "Nama Makanan", detail: "Detail Makanan" },
    { id: 8, name: "Nama Makanan", detail: "Detail Makanan" },
    { id: 9, name: "Nama Makanan", detail: "Detail Makanan" },
    { id: 10, name: "Nama Makanan", detail: "Detail Makanan" },
    // { id: 11, name: "Nama Makanan", detail: "Detail Makanan" },
    // { id: 12, name: "Nama Makanan", detail: "Detail Makanan" },
  ];

  return (
    <div className="Food-Catalog">
      {foodItems.map((item) => (
        <div className="FoodCatalog-Column" key={item.id}>
          <div className="Food-Recommendation">
            <img src={Salad} alt="Salad" className="Salad-img" />
            <p className="Food-name">{item.name}</p>
            <p className="Food-detail">{item.detail}</p>
            <HeartIcon />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodCatalog;
