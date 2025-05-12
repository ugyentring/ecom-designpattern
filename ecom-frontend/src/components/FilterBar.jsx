// src/components/FilterBar.jsx
import React from "react";

const FilterBar = ({ currentCategoryName = "Category" }) => {
  const filterBarStyle = {
    display: "flex",
    gap: "15px",
    padding: "15px 0 25px 0", // Padding top/bottom
    alignItems: "center",
    flexWrap: "wrap", // Allow filters to wrap on smaller screens
  };

  const filterButtonStyle = {
    padding: "10px 20px",
    border: "1px solid #ddd",
    borderRadius: "20px", // Pill shape
    backgroundColor: "#f7f7f7",
    color: "#555",
    cursor: "pointer",
    fontSize: "0.9rem",
    display: "flex",
    alignItems: "center",
    gap: "5px",
  };

  const filterIconStyle = {
    // For the "All Filters" icon
    // You might use an actual icon component here (e.g., from react-icons)
    // For now, a text placeholder or SVG
    fontSize: "1.1em",
  };

  return (
    <div style={filterBarStyle} className="container">
      <button style={filterButtonStyle}>
        {currentCategoryName} <span style={{ fontSize: "0.8em" }}>▼</span>{" "}
        {/* Simple dropdown indicator */}
      </button>
      <button style={filterButtonStyle}>Price</button>
      <button style={filterButtonStyle}>Offer</button>
      <button style={filterButtonStyle}>
        All Filters <span style={filterIconStyle}>📊</span>{" "}
        {/* Placeholder for filter icon */}
      </button>
    </div>
  );
};

export default FilterBar;
