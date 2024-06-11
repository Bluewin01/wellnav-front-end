import React from "react";
import Karbohidrat from "../../Assets/Karbohidrat.png";
import Protein from "../../Assets/Protein.png";
import Lemak from "../../Assets/Lemak.png";
import "./NutritionDashboard.css";

const NutritionDashboard = () => {
  const NutritionTrack = [
    { id: 1, name: "Nama Makanan", detail: "Detail Makanan" },
    { id: 2, name: "Nama Makanan", detail: "Detail Makanan" },
    { id: 3, name: "Nama Makanan", detail: "Detail Makanan" },
  ];
  return (
    <div className="Dashboard-Nutrisi">
      <h1>Pelacakan Nutrisi</h1>
      <div className="Dashboard-Pelacakan">
        <div className="Pelacakan-Item">
          <img
            src={Karbohidrat}
            alt="Karbohidrat"
            className="Karbohidrat-img"
          />
          <div className="Pelacakan-Text">
            <div className="Pelacakan-Header">
              <p>Karbohidrat</p>
              <span className="Percentage">70%</span>
            </div>
            <div className="Progress-Bar">
              <div className="Progress" style={{ width: "70%" }}></div>
            </div>
          </div>
        </div>
        <div className="Pelacakan-Item">
          <img src={Protein} alt="Protein" className="Protein-img" />
          <div className="Pelacakan-Text">
            <div className="Pelacakan-Header">
              <p>Protein</p>
              <span className="Percentage">50%</span>
            </div>
            <div className="Progress-Bar">
              <div className="Progress" style={{ width: "50%" }}></div>
            </div>
          </div>
        </div>
        <div className="Pelacakan-Item">
          <img src={Lemak} alt="Lemak" className="Lemak-img" />
          <div className="Pelacakan-Text">
            <div className="Pelacakan-Header">
              <p>Lemak</p>
              <span className="Percentage">30%</span>
            </div>
            <div className="Progress-Bar">
              <div className="Progress" style={{ width: "30%" }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NutritionDashboard;
