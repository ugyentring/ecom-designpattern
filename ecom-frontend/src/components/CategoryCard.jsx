// src/components/CategoryCard.jsx
import React from "react";

const CategoryCard = ({ category }) => {
  // Style definitions that were likely missing or had typos:
  const cardStyle = {
    minWidth: "160px",
    height: "160px",
    marginRight: "15px",
    borderRadius: "8px",
    overflow: "hidden",
    position: "relative",
    cursor: "pointer",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    flexShrink: 0,
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.3s ease",
  };

  const overlayStyle = {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    color: "white",
    padding: "10px",
    textAlign: "center",
    fontSize: "0.9rem",
    fontWeight: "500",
  };
  // End of style definitions

  const handleMouseEnter = (e) => {
    // Ensure the img tag exists before trying to access its style
    const imgElement = e.currentTarget.querySelector("img");
    if (imgElement) {
      imgElement.style.transform = "scale(1.05)";
    }
  };

  const handleMouseLeave = (e) => {
    const imgElement = e.currentTarget.querySelector("img");
    if (imgElement) {
      imgElement.style.transform = "scale(1)";
    }
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Safety check for category and category.image before rendering */}
      {category && category.image ? (
        <img
          src={category.image}
          alt={category.name || "Category"}
          style={imageStyle}
        />
      ) : (
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#eee",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          No Image
        </div>
      )}
      <div style={overlayStyle}>
        {category ? category.name : "Unnamed Category"}
      </div>
    </div>
  );
};

export default CategoryCard;
