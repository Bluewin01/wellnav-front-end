import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "./CalorieChart.css";

// Register the necessary Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const CalorieChart = ({ takenCalories, recommendedCalories }) => {
  // Calculate remaining calories
  const remainingCalories = Math.max(recommendedCalories - takenCalories, 0);

  // Data for the chart
  const data = {
    labels: ["Calories Taken", "Remaining Calories"],
    datasets: [
      {
        data: [takenCalories, remainingCalories],
        backgroundColor: ["#EF723D", "#F0DD98"],
        hoverBackgroundColor: ["#EF723D", "#F0DD98"],
      },
    ],
  };

  // Options for the chart
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "85%", // Adjust the cutout percentage to create space for the text inside
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
    <div className="doughnut-chart-container">
      <div className="doughnut-chart">
        <Doughnut data={data} options={options} />
      </div>
      <div className="doughnut-chart-center-text">{takenCalories} kkal</div>
    </div>
  );
};

export default CalorieChart;
