import React, { useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import "./Header.css";
import Profile from "../../Assets/Profile.png";

const Dashboard = () => <div>Dashboard Page</div>;
const Recommendation = () => <div>Recommendation Page</div>;
const ReminderNotification = () => <div>ReminderNotification Page</div>;
const NutritionTracking = () => <div>NutritionTracking Page</div>;
const WaterTracking = () => <div>Water Tracking Page</div>;

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navigateToProfile = () => {
    navigate("/profile");
  };

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      const query = event.target.value.toLowerCase();
      if (query.includes("dashboard")) {
        navigate("/dashboard");
      } else if (query.includes("Recommendation")) {
        navigate("/Recommendation");
      } else if (query.includes("ReminderNotification")) {
        navigate("/Reminder-Notification");
      } else if (query.includes("NutritionTracking")) {
        navigate("/nutrition-tracking");
      } else if (query.includes("water tracking")) {
        navigate("/WaterTracking");
      } else {
        alert("Page not found");
      }
    }
  };

  return (
    <div className="Header">
      <div className="Header-Content">
        <h1>Hello, Jane</h1>
        <p>Mari hidup lebih sehat</p>
      </div>
      <div className="Header-Right">
        {location.pathname !== "/profile" && ( // Conditionally render the search bar
          <div className="Header-Search">
            <FaSearch className="Search-Icon" />
            <input type="text" placeholder="Cari" onKeyDown={handleSearch} />
          </div>
        )}
        <div className="Profile-Icon">
          <img src={Profile} alt="Profile" onClick={navigateToProfile} />
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Recommendation" element={<Recommendation />} />
        <Route
          path="/ReminderNotification"
          element={<ReminderNotification />}
        />
        <Route path="/NutritionTracking" element={<NutritionTracking />} />
        <Route path="/WaterTracking" element={<WaterTracking />} />
      </Routes>
    </div>
  );
};

export default App;
