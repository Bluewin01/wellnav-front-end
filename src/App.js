import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Recommendation from "./Pages/Recommendation/Recommendation";
import WaterTracking from "./Pages/WaterTracking/WaterTracking";
import LandingPage from "./Pages/LandingPage/LandingPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="Recommendation" element={<Recommendation />} />
          <Route path="WaterTracking" element={<WaterTracking />} />
          <Route path="LandingPage" element={<LandingPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
