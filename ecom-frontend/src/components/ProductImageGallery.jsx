// src/components/ProductImageGallery.jsx
import React, { useState, useEffect } from "react";

const ProductImageGallery = ({ images = [] }) => {
  // Default to empty array
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    if (images.length > 0) {
      setMainImage(images[0]); // Set the first image as main initially
    }
  }, [images]); // Re-run if images array changes

  if (!images || images.length === 0) {
    return <div style={galleryContainerStyle}>No images available.</div>; // Fallback
  }

  const galleryContainerStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    maxWidth: "500px", // Or adjust as needed
    width: "100%",
  };

  const mainImageContainerStyle = {
    width: "100%",
    // aspectRatio: '1 / 1', // Maintain a square or other aspect ratio
    height: "400px", // Or responsive height
    border: "1px solid #eee",
    borderRadius: "8px",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
  };

  const mainImgStyle = {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "contain", // Use 'contain' to see the whole image, 'cover' to fill
  };

  const thumbnailsContainerStyle = {
    display: "flex",
    gap: "10px",
    overflowX: "auto", // Allow horizontal scrolling for many thumbnails
    paddingBottom: "5px", // For scrollbar visibility if needed
  };

  const thumbnailStyle = {
    width: "80px",
    height: "80px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    cursor: "pointer",
    objectFit: "cover",
    opacity: 0.7,
    transition: "opacity 0.2s ease, border-color 0.2s ease",
  };

  const activeThumbnailStyle = {
    ...thumbnailStyle,
    opacity: 1,
    borderColor: "#00A99D", // Active border color (theme teal)
  };

  return (
    <div style={galleryContainerStyle}>
      <div style={mainImageContainerStyle}>
        {mainImage ? (
          <img src={mainImage} alt="Main product view" style={mainImgStyle} />
        ) : (
          <div>Loading image...</div>
        )}
      </div>
      <div style={thumbnailsContainerStyle}>
        {images.map((imgSrc, index) => (
          <img
            key={index}
            src={imgSrc}
            alt={`Product thumbnail ${index + 1}`}
            style={imgSrc === mainImage ? activeThumbnailStyle : thumbnailStyle}
            onClick={() => setMainImage(imgSrc)}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
            onMouseLeave={(e) => {
              if (imgSrc !== mainImage) e.currentTarget.style.opacity = 0.7;
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImageGallery;
