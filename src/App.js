import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Recommendation from "./Pages/Recommendation/Recommendation";
import WaterTracking from "./Pages/WaterTracking/WaterTracking";
import LandingPage from "./Pages/LandingPage/LandingPage";
import PelacakanNutrisi from "./Pages/NutritionTracking/NutritionTracking/NutritionTracking";

import { useNavigate } from "react-router-dom";
import NutritionTracking from "./Pages/NutritionTracking/NutritionTracking/NutritionTracking";
import NutritionTrackingA from "./Pages/NutritionTracking/NutritionTrackingA/NutritionTrackingA";
import NutritionTrackingB from "./Pages/NutritionTracking/NutritionTrackingB/NutritionTrackingB";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="Recommendation" element={<Recommendation />} />
          <Route path="WaterTracking" element={<WaterTracking />} />
          <Route path="LandingPage" element={<LandingPage />} />
          <Route path="/nutrition-tracking" element={<NutritionTracking />} />
          <Route
            path="/nutrition-tracking/food-choices"
            element={<NutritionTrackingA />}
          />
          <Route
            path="/nutrition-tracking/food-choices/nutrition-data"
            element={<NutritionTrackingB />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
