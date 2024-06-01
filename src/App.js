import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Recommendation from "./Pages/Recommendation/Recommendation";
import WaterTracking from "./Pages/WaterTracking/WaterTracking";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="Recommendation" element={<Recommendation />} />
          <Route path="WaterTracking" element={<WaterTracking />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
