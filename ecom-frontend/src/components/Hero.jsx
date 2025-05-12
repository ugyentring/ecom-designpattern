// src/components/Hero.jsx
import React from "react";

const Hero = ({ heroBackgroundImage }) => {
  const heroStyles = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${heroBackgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
    textAlign: "left",
    padding: "100px 0", // Vertical padding
    minHeight: "calc(60vh - 80px)", // Adjust 80px based on actual navbar height
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start", // Align content to the start (left)
  };

  const contentStyles = {
    // paddingLeft: '40px', // Specific padding moved to container
  };

  const titleStyles = {
    fontSize: "clamp(2.5rem, 6vw, 4rem)", // Responsive font size
    fontWeight: "bold",
    marginBottom: "10px",
    textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
    color: "#fff", // Ensure h1 color is white
  };

  const subtitleStyles = {
    fontSize: "clamp(1rem, 2.5vw, 1.5rem)", // Responsive font size
    maxWidth: "600px",
    textShadow: "1px 1px 3px rgba(0,0,0,0.7)",
  };

  return (
    <section style={heroStyles}>
      <div className="container" style={contentStyles}>
        <h1 style={titleStyles}>BhutanBuy</h1>
        <p style={subtitleStyles}>
          Discover Bhutan's Finest Local Products – Delivered to Your Doorstep!
        </p>
      </div>
    </section>
  );
};

export default Hero;
