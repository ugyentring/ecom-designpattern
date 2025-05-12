// src/components/admin/SalesChart.jsx
import React, { useEffect } from "react";
// To use Chart.js, uncomment the imports and ensure you've installed react-chartjs-2 and chart.js
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const SalesChart = () => {
  const chartContainerStyle = {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
  };

  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  };

  const titleStyle = {
    fontSize: "1.1rem",
    fontWeight: "600",
    color: "#333",
  };

  const totalSalesValueStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#27AE60", // Green for sales value
  };

  const increaseStyle = {
    fontSize: "0.9rem",
    color: "#27AE60", // Green
    marginLeft: "5px",
  };

  // Mock data for the chart
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Sales",
        data: [30, 45, 35, 50, 65, 55, 70, 80, 75, 60, 50, 70], // Example data
        borderColor: "#27AE60", // Dark green for Sales
        backgroundColor: "rgba(39, 174, 96, 0.1)",
        tension: 0.3,
        fill: false,
        pointRadius: 3,
        pointBackgroundColor: "#27AE60",
      },
      {
        label: "Orders",
        data: [20, 25, 15, 30, 35, 28, 40, 42, 38, 30, 25, 35], // Example data
        borderColor: "#2980B9", // Blue for Orders
        backgroundColor: "rgba(41, 128, 185, 0.1)",
        tension: 0.3,
        fill: false,
        pointRadius: 3,
        pointBackgroundColor: "#2980B9",
      },
      {
        label: "Customers",
        data: [60, 70, 80, 65, 75, 85, 90, 70, 78, 88, 95, 80], // Example data
        borderColor: "#E91E63", // Pink for Customers
        backgroundColor: "rgba(233, 30, 99, 0.1)",
        tension: 0.3,
        fill: false,
        pointRadius: 3,
        pointBackgroundColor: "#E91E63",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allow chart to not be square
    plugins: {
      legend: {
        display: false, // Legend is shown customly in the image
        position: "top",
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return value + "%"; // Add percentage to Y-axis
          },
        },
      },
    },
  };

  const legendItems = [
    { label: "Sales", color: "#27AE60" },
    { label: "Orders", color: "#2980B9" },
    { label: "Customers", color: "#E91E63" },
  ];

  const legendContainerStyle = {
    display: "flex",
    justifyContent: "flex-end", // Aligns to the right as in the image
    gap: "15px",
    marginTop: "5px", // Space above legend
    paddingRight: "10px",
  };
  const legendItemStyle = {
    display: "flex",
    alignItems: "center",
    fontSize: "0.85rem",
    color: "#555",
  };
  const legendColorBoxStyle = (color) => ({
    width: "12px",
    height: "12px",
    backgroundColor: color,
    borderRadius: "3px",
    marginRight: "6px",
  });

  // If you haven't installed react-chartjs-2 and chart.js, return a placeholder:
  // if (typeof Line === 'undefined') {
  //   return <div style={chartContainerStyle}><h3 style={titleStyle}>Sales Chart Area</h3><p>Chart library not installed or loaded.</p></div>;
  // }

  return (
    <div style={chartContainerStyle}>
      <div style={headerStyle}>
        <div>
          <h3 style={titleStyle}>Total Sales</h3>
          <span style={totalSalesValueStyle}>250</span>
          <span style={increaseStyle}>↑ 5%</span>
        </div>
        <div style={legendContainerStyle}>
          {legendItems.map((item) => (
            <div key={item.label} style={legendItemStyle}>
              <span style={legendColorBoxStyle(item.color)}></span>
              {item.label}
            </div>
          ))}
        </div>
      </div>
      <div style={{ height: "300px" }}>
        {" "}
        {/* Container to control chart height */}
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default SalesChart;
