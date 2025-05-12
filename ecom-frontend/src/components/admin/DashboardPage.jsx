// src/components/admin/DashboardPage.jsx
import React, { useEffect } from "react";
import StatCard from "./StatCard";
import AlertCard from "./AlertCard";
import SalesChart from "./SalesChart";

const DashboardPage = () => {
  useEffect(() => {
    document.title = "Admin Dashboard - BhutanBuy";
  }, []);

  // Styles
  const dashboardHeaderStyle = {
    fontSize: "1.8rem",
    fontWeight: "600",
    color: "#333",
    marginBottom: "10px",
  };
  const sectionTitleStyle = {
    fontSize: "1.2rem",
    fontWeight: "500",
    color: "#444",
    marginBottom: "15px",
    marginTop: "25px",
  };
  const statCardsContainerStyle = {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap", // Allow cards to wrap on smaller screens
    marginBottom: "25px",
  };
  const lowStockAlertContainerStyle = {
    marginBottom: "25px",
  };

  return (
    <div>
      <h1 style={dashboardHeaderStyle}>Dashboard</h1>

      <h2 style={sectionTitleStyle}>Statistical Overview</h2>
      <div style={statCardsContainerStyle}>
        <StatCard
          title="Total Orders"
          value="15%" // The image shows percentage as the main value
          percentageChange={4}
          changeDescription="increase vs last month"
          cardColor="#A495FD" // Light purple
        />
        <StatCard
          title="New Customers"
          value="40%"
          percentageChange={4}
          changeDescription="increase vs last month"
          cardColor="#5D9CEC" // Blue
        />
        <StatCard
          title="Recent Orders"
          value="40%"
          percentageChange={4}
          changeDescription="increase vs last month"
          cardColor="#25D3A4" // Teal green
        />
      </div>

      {/* <h2 style={sectionTitleStyle}>Alerts</h2> // No "Alerts" header in image for this card */}
      <div style={lowStockAlertContainerStyle}>
        <AlertCard
          title="Low Stock Alerts"
          message="Products running out of stock"
          cardColor="#25D3A4" // Teal green, same as Recent Orders card
        />
      </div>

      {/* Sales Chart Section */}
      {/* The image doesn't have a separate "Total Sales" heading above the chart card itself */}
      {/* The chart card contains the "Total Sales" title */}
      <SalesChart />
    </div>
  );
};

export default DashboardPage;
