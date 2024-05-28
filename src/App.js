import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Recommendation from "./Pages/Recommendation";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="Recommendation" element={<Recommendation />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
