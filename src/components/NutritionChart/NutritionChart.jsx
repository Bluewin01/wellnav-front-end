import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "./NutritionChart.css";

// Register the necessary Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const NutritionChart = () => {
  // Dummy data for the doughnut charts
  const data = {
    labels: ["Intake", "Remaining"],
    datasets: [
      {
        data: [70, 30],
        backgroundColor: ["#EF723D", "#F0DD98"],
        hoverBackgroundColor: ["#EF723D", "#F0DD98"],
        borderWidth: 0, // Remove the border
      },
    ],
  };

  // Options for the doughnut charts
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "85%",
    plugins: {
      tooltip: {
        enabled: true,
      },
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="nutrition-chart-container">
      <div className="nutrition-chart-items">
        <div className="nutrition-chart-item">
          <div className="nutrition-chart-header">Kalori</div>
          <div className="nutrition-chart-content">
            <div className="doughnut-chart-wrapper">
              <Doughnut data={data} options={options} />
            </div>
            <div className="nutrition-value">1500 kkal</div>
          </div>
        </div>
        <div className="nutrition-chart-item">
          <div className="nutrition-chart-header">Karbohidrat</div>
          <div className="nutrition-chart-content">
            <div className="doughnut-chart-wrapper">
              <Doughnut data={data} options={options} />
            </div>
            <div className="nutrition-value">200 g</div>
          </div>
        </div>
        <div className="nutrition-chart-item">
          <div className="nutrition-chart-header">Protein</div>
          <div className="nutrition-chart-content">
            <div className="doughnut-chart-wrapper">
              <Doughnut data={data} options={options} />
            </div>
            <div className="nutrition-value">75 g</div>
          </div>
        </div>
        <div className="nutrition-chart-item">
          <div className="nutrition-chart-header">Lemak</div>
          <div className="nutrition-chart-content">
            <div className="doughnut-chart-wrapper">
              <Doughnut data={data} options={options} />
            </div>
            <div className="nutrition-value">50 g</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NutritionChart;
