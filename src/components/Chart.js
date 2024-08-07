import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import './Chart.css';

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      grid: {
        display: false, // Disable vertical grid lines
      },
      ticks: {
        color: 'white',
      },
    },
    y: {
      grid: {
        color: 'rgba(255, 255, 255, 0.1)', // Light horizontal grid lines
        borderColor: 'white', // Color of the border line (optional)
        borderWidth: 1, // Border width for the y-axis
        drawBorder: false, // Remove border on y-axis
        drawOnChartArea: true, // Draw lines in the chart area
        drawTicks: false, // Hide ticks on the grid
      },
      ticks: {
        color: 'white',
        callback: function(value) {
          if (value === 0 || value === 5000 || value === 10000 || value === 15000) {
            return value;
          }
          return ''; // Hide other values
        },
        stepSize: 5000, // Ensure proper spacing for the lines
      },
      min: 0,
      max: 15000,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
  elements: {
    bar: {
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      borderRadius: 10, // Rounded corners for bars
      borderSkipped: false, // Ensure borders don't skip any side
      barThickness: 10, // Set the thickness of the bars
    },
  },
  layout: {
    padding: {
      top: 20,
      bottom: 20,
    },
  },
  datasets: {
    bar: {
      categoryPercentage: 0.35, // Adjust to control space between groups of bars
      barPercentage: 0.6, // Adjust to control space within each group of bars
    },
  },
};

const data = {
  labels: [5, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27],
  datasets: [
    {
      label: 'Activity',
      data: [4000, 9000, 500, 3000, 4500, 12000, 8000, 6000, 5500, 3000, 4000],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

function Chart() {
  return (
    <div className="chart-wrapper">
      <div className="chart-header">
        <h2 className="chart-title">Activity</h2>
        <select className="chart-dropdown">
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="ToDay">Today</option>
          <option value="Yearly">Yearly</option>
        </select>
      </div>
      <div className="chart-container">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}

export default Chart;
