import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import CollapseSideBar from "../../components/CollapseSideBar/CollapseSideBar";
import Salad from "../../Assets/Salad.png";
import "./Dashboard.css";
import KalenderDashboard from "../../components/KalenderDashboard/KalenderDashboard";
import CalorieChart from "../../components/CalorieChart/CalorieChart";
import NutritionDashboard from "../../components/NutritionDashboard/NutritionDashboard";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";

const Dashboard = () => {
  return (
    <div className="App">
      <CollapseSideBar />

      <div className="Dashboard-Header">
        <Header />
        <div className="Dashboard-Container">
          <div className="Dashboard-Content">
            {/* KIRI */}
            <div className="Dashboard-Left">
              <div className="Dashboard-Req">
                <img
                  src={Salad}
                  alt="DashboardSalad"
                  className="DashboardSalad-img"
                />
                <h1>
                  Rekomendasi <br /> Makanan Hari ini.
                </h1>

                <Link to="/Recommendation">Lainnya...</Link>
              </div>

              <div className="Dashboard-Fitur">
                {/* KALORI */}
                <div className="Dashboard-Kalori">
                  <h1>Jumlah Kalori</h1>
                  <div className="Dashboard-Pengukur">
                    <CalorieChart />
                  </div>
                </div>
                {/* REMINDER */}
                <div className="Dashboard-Reminder">
                  <h1>Pengingat</h1>
                  <div className="spacing-br">
                    <div className="Dashboard-Pengingat">
                      <h1>
                        Sudahkah <br /> anda
                        <br /> minum?
                      </h1>
                      <p>4 Liter/hari</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* KANAN*/}
            <div className="Dashboard-Right">
              <div className="Dashboard-Calender">
                <KalenderDashboard />
              </div>
              {/* PELACKAN NUTRISI*/}
              <NutritionDashboard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
