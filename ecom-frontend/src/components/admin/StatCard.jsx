// src/components/admin/StatCard.jsx
import React from "react";

const StatCard = ({
  title,
  value,
  percentageChange,
  changeDescription,
  cardColor = "#6A5ACD",
}) => {
  // Default purple
  const cardStyle = {
    backgroundColor: cardColor,
    padding: "20px",
    borderRadius: "10px",
    color: "white",
    minWidth: "200px", // Ensure cards have some width
    flex: 1, // Allow cards to grow and share space
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  };

  const titleStyle = {
    fontSize: "0.9rem",
    opacity: 0.9,
    marginBottom: "8px",
  };

  const valueStyle = {
    fontSize: "2rem", // Large percentage
    fontWeight: "bold",
    marginBottom: "8px",
  };

  const changeStyle = {
    fontSize: "0.8rem",
    opacity: 0.8,
  };

  return (
    <div style={cardStyle}>
      <div style={titleStyle}>{title}</div>
      <div style={valueStyle}>{value}</div>
      <div style={changeStyle}>
        {percentageChange > 0
          ? `↑ ${percentageChange}%`
          : `↓ ${Math.abs(percentageChange)}%`}{" "}
        {changeDescription}
      </div>
    </div>
  );
};

export default StatCard;
