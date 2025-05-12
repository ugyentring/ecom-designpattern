// src/components/ProductCard.jsx
import React from "react";
import { Link } from "react-router-dom"; // For internal navigation
import { useAuth } from "./context/AuthContext"; // Import useAuth

const ProductCard = ({ product, showAddToCart }) => {
  const { isLoggedIn, openLoginPopup } = useAuth(); // Get auth state and popup function

  // Styles (these were refined in previous steps to prevent overlapping)
  const cardStyles = {
    border: "1px solid #e0e0e0",
    borderRadius: "8px",
    padding: "15px",
    backgroundColor: "#fff",
    boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden", // Crucial for preventing content spill
    textDecoration: "none", // Remove underline from Link wrapping the card if desired
  };

  const imageContainerStyles = {
    // To make the image clickable as part of the link
    width: "100%",
    // aspectRatio: '1 / 1', // Optional: if you want square images
    height: "180px", // Or adjust as needed for your design
    borderRadius: "4px",
    marginBottom: "12px",
    overflow: "hidden", // Ensure image stays within rounded corners
  };

  const imageStyles = {
    width: "100%",
    height: "100%",
    objectFit: "cover", // 'cover' to fill, 'contain' to show whole image
    display: "block", // Removes extra space below image
  };

  const nameStyles = {
    fontSize: "1.1rem",
    fontWeight: "600",
    color: "#333", // Ensure link color doesn't override this if name is linked
    margin: "0 0 8px 0",
    lineHeight: 1.3,
    height: "calc(1.3em * 2)", // Approx 2 lines
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
  };

  const priceContainerStyles = {
    marginBottom: "8px",
    minHeight: "1.5em", // Reserve space for consistency
    textAlign: "left", // Align price to the left, matching overall card text
  };

  const priceStyles = {
    fontSize: "1.05rem",
    color: "#00A99D", // Theme teal color
    fontWeight: "bold",
  };

  const originalPriceStyles = {
    fontSize: "0.85rem",
    color: "#888",
    textDecoration: "line-through",
    marginRight: "8px",
    display: "inline-block",
  };

  const descriptionStyles = {
    fontSize: "0.85rem",
    color: "#666",
    lineHeight: 1.4,
    marginBottom: "15px",
    flexGrow: 1,
    height: "calc(1.4em * 3)", // Approx 3 lines
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
    textAlign: "left", // Align description to the left
  };

  const buttonContainerStyles = {
    display: "flex",
    gap: "10px",
    marginTop: "auto", // Pushes buttons to the bottom
  };

  const buttonStyles = {
    padding: "8px 12px",
    border: "1px solid #00A99D",
    borderRadius: "4px",
    fontSize: "0.85rem",
    flex: 1, // Make buttons share space equally
    whiteSpace: "nowrap",
    cursor: "pointer",
    textAlign: "center", // Center text in button
    textDecoration: "none", // Remove underline from Link wrapping button
  };

  const viewDetailsButtonStyles = {
    ...buttonStyles,
    backgroundColor: "transparent",
    color: "#00A99D",
  };

  const addToCartButtonStyles = {
    ...buttonStyles,
    backgroundColor: "#00A99D",
    color: "white",
  };

  if (!product || !product.id) {
    return <div style={cardStyles}>Product data unavailable.</div>;
  }

  const handleAddToCartClick = () => {
    if (!isLoggedIn) {
      openLoginPopup(); // Show login popup if not logged in
    } else {
      // Proceed with actual add to cart logic (mocked for now)
      console.log(`User is logged in. Adding ${product.name} to cart.`);
      // Example: dispatch({ type: 'ADD_TO_CART', payload: { product, quantity: 1 } });
      alert(`${product.name} added to cart! (Mock)`);
    }
  };

  const detailPagePath = `/product/${product.id}`;

  return (
    <div style={cardStyles}>
      <div>
        <Link
          to={detailPagePath}
          style={{ display: "block", textDecoration: "none" }}
        >
          <div style={imageContainerStyles}>
            <img
              src={product.image}
              alt={product.name || "Product Image"}
              style={imageStyles}
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          </div>
          <h3 style={nameStyles}>{product.name || "Unnamed Product"}</h3>
        </Link>

        <div style={priceContainerStyles}>
          {product.originalPrice && (
            <span style={originalPriceStyles}>{product.originalPrice}</span>
          )}
          {product.price && <span style={priceStyles}>{product.price}</span>}
        </div>

        <p style={descriptionStyles}>
          {product.description || "No description available."}
        </p>
      </div>

      <div style={buttonContainerStyles}>
        <Link
          to={detailPagePath}
          style={{ ...buttonStyles, ...viewDetailsButtonStyles }}
        >
          View Details
        </Link>
        {showAddToCart && (
          <button
            style={addToCartButtonStyles}
            onClick={handleAddToCartClick} // Use the new handler
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
