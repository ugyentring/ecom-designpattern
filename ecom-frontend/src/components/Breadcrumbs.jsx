// src/components/Breadcrumbs.jsx
import React from "react";
import { Link } from "react-router-dom"; // Assuming you use React Router for navigation

const Breadcrumbs = ({ items }) => {
  const breadcrumbContainerStyle = {
    padding: "15px 0",
    fontSize: "0.9rem",
    color: "#555",
  };

  const breadcrumbItemStyle = {
    textDecoration: "none",
    color: "#007bff", // Or your theme's link color
  };

  const breadcrumbSeparatorStyle = {
    margin: "0 8px",
    color: "#888",
  };

  const activeItemStyle = {
    color: "#333", // Or your theme's active/current text color
    fontWeight: "500",
  };

  return (
    <nav
      aria-label="breadcrumb"
      style={breadcrumbContainerStyle}
      className="container"
    >
      {items.map((item, index) => (
        <React.Fragment key={item.label}>
          {index > 0 && <span style={breadcrumbSeparatorStyle}>/</span>}
          {item.link ? (
            <Link to={item.link} style={breadcrumbItemStyle}>
              {item.label}
            </Link>
          ) : (
            <span style={activeItemStyle}>{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
