// src/components/ProductSection.jsx
import React from "react";
import ProductCard from "./ProductCard";

const ProductSection = ({ title, products, showAddToCart }) => {
  const sectionStyles = {
    padding: "40px 0", // Use section-padding from global or App.css
    backgroundColor: title === "Featured Products" ? "#fdfbf7" : "#fff",
  };

  const titleStyles = {
    textAlign: "left",
    fontSize: "clamp(1.8rem, 4vw, 2.2rem)",
    marginBottom: "30px",
    color: "#3a5a40", // Ensure h2 color is as desired
  };

  const gridStyles = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "25px",
  };

  const sliderTrackStyles = {
    height: "4px",
    backgroundColor: "#e0e0e0",
    borderRadius: "2px",
    margin: "40px auto 0",
    width: "80%",
    maxWidth: "400px", // Max width for the slider bar
    position: "relative",
  };

  const sliderThumbStyles = {
    height: "100%",
    backgroundColor: "#00A99D",
    width: title === "Featured Products" ? "33%" : "50%",
    borderRadius: "2px",
  };

  return (
    <section style={sectionStyles} className="section-padding">
      <div className="container">
        <h2 style={titleStyles}>{title}</h2>
        <div style={gridStyles}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              showAddToCart={showAddToCart}
            />
          ))}
        </div>
        <div style={sliderTrackStyles}>
          <div style={sliderThumbStyles}></div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
