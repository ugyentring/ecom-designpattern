// src/components/CategoriesSection.jsx
import React, { useRef, useState, useEffect } from "react";
import CategoryCard from "./CategoryCard"; // Assuming this path is correct for your structure

const CategoriesSection = ({ categories }) => {
  const scrollContainerRef = useRef(null);
  const [scrollThumbWidth, setScrollThumbWidth] = useState(0);
  const [scrollThumbPosition, setScrollThumbPosition] = useState(0);

  // ***** THIS IS THE CRITICAL PART THAT WAS LIKELY MISSING OR MISPLACED *****
  const titleStyle = {
    fontSize: "clamp(1.5rem, 3.5vw, 2rem)",
    marginBottom: "25px",
    color: "#3a5a40", // Main heading color
    textAlign: "left",
  };
  // ***********************************************************************

  const scrollableDivStyle = {
    display: "flex",
    overflowX: "auto",
    paddingBottom: "15px", // Space for scrollbar or just visual padding
    scrollbarWidth: "none", // Hide scrollbar for Firefox
    msOverflowStyle: "none", // Hide scrollbar for IE/Edge
  };

  // Hide scrollbar for Webkit (Chrome, Safari)
  const webkitScrollbarHideStyle = `
    .hide-scrollbar::-webkit-scrollbar {
      display: none;
    }
  `;

  const scrollIndicatorTrackStyle = {
    height: "4px",
    backgroundColor: "#e0e0e0",
    borderRadius: "2px",
    margin: "20px auto 0", // Margin top for spacing
    width: "100%", // Track takes full width of its container
    position: "relative",
  };

  const scrollIndicatorThumbStyle = {
    height: "100%",
    backgroundColor: "#00A99D", // Teal color
    borderRadius: "2px",
    position: "absolute",
    width: `${scrollThumbWidth}%`, // Percentage width
    left: `${scrollThumbPosition}%`, // Percentage position
    transition: "left 0.1s linear, width 0.1s linear", // Smooth transition
  };

  const updateScrollIndicator = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      if (scrollWidth <= clientWidth) {
        // No scroll needed
        setScrollThumbWidth(100);
        setScrollThumbPosition(0);
        return;
      }
      const maxScrollLeft = scrollWidth - clientWidth;
      // const currentScrollPercentage = (scrollLeft / maxScrollLeft) * 100; // Not directly used for thumb position logic here

      const thumbWidthPercentage = (clientWidth / scrollWidth) * 100;
      setScrollThumbWidth(thumbWidthPercentage);

      // Position the thumb correctly considering its own width
      const trackWidthAvailableForThumb = 100 - thumbWidthPercentage;
      const thumbPositionPercentage =
        (scrollLeft / maxScrollLeft) * trackWidthAvailableForThumb;
      setScrollThumbPosition(thumbPositionPercentage);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      updateScrollIndicator();
      scrollContainer.addEventListener("scroll", updateScrollIndicator);
      window.addEventListener("resize", updateScrollIndicator);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", updateScrollIndicator);
      }
      window.removeEventListener("resize", updateScrollIndicator);
    };
  }, [categories]); // Re-calculate if categories change causing scrollWidth to change

  return (
    <section
      className="container section-padding"
      style={{ backgroundColor: "#fff", paddingBottom: "40px" }}
    >
      <style>{webkitScrollbarHideStyle}</style>
      <h2 style={titleStyle}>Browse Categories</h2>{" "}
      {/* titleStyle is used here */}
      <div
        ref={scrollContainerRef}
        style={scrollableDivStyle}
        className="hide-scrollbar"
      >
        {categories &&
          categories.map(
            (
              category // Added a check for categories existing before mapping
            ) => <CategoryCard key={category.id} category={category} />
          )}
      </div>
      {categories &&
        categories.length > 0 && ( // Only show indicator if there are categories
          <div style={{ maxWidth: "400px", margin: "20px auto 0" }}>
            <div style={scrollIndicatorTrackStyle}>
              <div style={scrollIndicatorThumbStyle}></div>
            </div>
          </div>
        )}
    </section>
  );
};

export default CategoriesSection;
