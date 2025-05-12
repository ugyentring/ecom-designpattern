// src/components/admin/AlertCard.jsx
import React from "react";

const AlertCard = ({ title, message, cardColor = "#1ABC9C" }) => {
  // Default teal
  const cardStyle = {
    backgroundColor: cardColor,
    padding: "20px",
    borderRadius: "10px",
    color: "white",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    // width: '100%', // Takes full width if not in a flex row
  };

  const titleStyle = {
    fontSize: "1rem",
    fontWeight: "600",
    marginBottom: "8px",
  };

  const messageStyle = {
    fontSize: "0.9rem",
    opacity: 0.9,
  };

  return (
    <div style={cardStyle}>
      <div style={titleStyle}>{title}</div>
      <div style={messageStyle}>{message}</div>
    </div>
  );
};

export default AlertCard;
