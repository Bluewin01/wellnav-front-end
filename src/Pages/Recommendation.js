import React, { useState } from "react";
import ReactDOMServer from "react-dom/server";
import Rekomendasi from "../Assets/Rekomendasi.png";
import String from "../Assets/string.png";
// import SearchBar from "../components/SearchBar/SearchBar";
import CollapseSideBar from "../components/CollapseSideBar/CollapseSideBar";
import FoodCatalog from "../components/FoodCatalogue/FoodCatalog";

function Recommendation() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "Low Calorie", "Gluten-Free", "Vegan", "Favorites"];

  return (
    <div className="App">
      <CollapseSideBar />
      {/* HEADER*/}
      <div className="Recommendation-Container">
        <h1>Hello, Jane</h1>
        <p>Rekomendasi makanan untuk anda</p>
        {/* <SearchBar /> */}
        <div className="Recommendation-Header">
          <img
            src={Rekomendasi}
            alt="Rekomendasi"
            className="Rekomendasi-img"
          />
          <div className="Recommendation-Section">
            <h1>
              Rekomendasi Makanan <br></br>Hari ini
            </h1>
            <p>Start a healthy life</p>
          </div>
        </div>
        {/* MAKANAN */}
        <div className="Food-Container">
          <div className="Food-Section">
            <img src={String} alt="String" className="String-img left-img" />
            <p className="center-text">Choose your ratio</p>
            <img src={String} alt="String" className="String-img right-img" />
          </div>
          <div className="Food-Section2">
            {filters.map((filter) => (
              <p
                key={filter}
                className={activeFilter === filter ? "active" : ""}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </p>
            ))}
          </div>
        </div>
        {/* MENU MAKANAN */}
        <FoodCatalog />
      </div>
    </div>
  );
}

export default Recommendation;
