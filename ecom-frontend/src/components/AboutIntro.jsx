// src/components/AboutIntro.jsx
import React from "react";

const AboutIntro = ({ aboutImage }) => {
  const sectionStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    // padding: '60px 0', // Use section-padding from global or App.css
    gap: "40px",
    backgroundColor: "#fff",
    flexWrap: "wrap", // For responsiveness
  };

  const textContainerStyles = {
    flex: 1,
    minWidth: "300px",
    padding: "20px", // Padding within the flex item
  };

  const imageContainerStyles = {
    flex: 1,
    minWidth: "300px",
    padding: "20px", // Padding within the flex item
  };

  const imageStyles = {
    width: "100%",
    height: "auto", // Maintain aspect ratio
    maxHeight: "400px", // Optional: constrain image height
    objectFit: "cover",
    borderRadius: "8px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    display: "block",
  };

  const titleStyles = {
    fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
    marginBottom: "20px",
    color: "#3a5a40", // Ensure h2 color is as desired
  };

  const textStyles = {
    fontSize: "1rem",
    lineHeight: 1.6,
    marginBottom: "20px",
    color: "#555",
  };

  const learnMoreButtonStyles = {
    padding: "12px 25px",
    backgroundColor: "#00A99D",
    color: "white",
    border: "none",
    borderRadius: "4px",
    fontSize: "1rem",
    textDecoration: "none",
  };

  return (
    <section style={sectionStyles} className="container section-padding">
      <div style={textContainerStyles}>
        <h2 style={titleStyles}>Bringing You the Best of Bhutan</h2>
        <p style={textStyles}>
          Discover the richness of Bhutanese farms, artisans, and local
          industries. From organic produce to handcrafted treasures, every
          product carries a story of tradition and quality. We ensure that only
          the finest, locally sourced goods reach you.
        </p>
        <a href="#learn-more" style={learnMoreButtonStyles}>
          Learn More
        </a>
      </div>
      <div style={imageContainerStyles}>
        <img
          src={aboutImage}
          alt="Bhutanese Scenery with Dzong"
          style={imageStyles}
        />
      </div>
    </section>
  );
};

export default AboutIntro;
