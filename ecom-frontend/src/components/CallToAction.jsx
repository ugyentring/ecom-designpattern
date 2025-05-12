// src/components/CallToAction.jsx
import React from "react";

const CallToAction = () => {
  const sectionStyles = {
    textAlign: "center",
    // padding: '60px 20px', // Use section-padding and container
    backgroundColor: "#fdfbf7",
  };

  const titleStyles = {
    fontSize: "clamp(1.5rem, 3vw, 2rem)",
    color: "#3a5a40", // Ensure h2 color
    marginBottom: "10px",
  };

  const textStyles = {
    fontSize: "1.1rem",
    color: "#555",
    marginBottom: "30px",
  };

  const buttonStyles = {
    padding: "15px 30px",
    backgroundColor: "#00A99D",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontSize: "1.1rem",
    fontWeight: "bold",
  };

  return (
    <section style={sectionStyles} className="section-padding">
      <div className="container">
        <h2 style={titleStyles}>Start Shopping</h2>
        <p style={textStyles}>
          Explore a wide variety of products and get started today
        </p>
        <button style={buttonStyles}>Get Started</button>
      </div>
    </section>
  );
};

export default CallToAction;
