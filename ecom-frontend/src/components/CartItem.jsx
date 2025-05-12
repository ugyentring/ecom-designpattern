// src/components/CartItem.jsx
import React from "react";
import QuantitySelector from "./QuantitySelector"; // Reuse the quantity selector

const CartItem = ({ item, onUpdateQuantity, onRemoveItem }) => {
  const itemRowStyle = {
    display: "flex",
    alignItems: "center",
    padding: "20px 0",
    borderBottom: "1px solid #eee",
    gap: "15px", // Gap between columns
  };

  const productInfoStyle = {
    display: "flex",
    alignItems: "center",
    flex: "2.5", // Takes more space
    gap: "15px",
    minWidth: "250px",
  };

  const imageStyle = {
    width: "80px",
    height: "80px",
    objectFit: "cover",
    borderRadius: "4px",
    border: "1px solid #eee",
  };

  const detailsStyle = {
    display: "flex",
    flexDirection: "column",
  };

  const productNameStyle = {
    fontSize: "1rem",
    fontWeight: "600",
    color: "#333",
    marginBottom: "3px",
  };

  const productIdStyle = {
    fontSize: "0.8rem",
    color: "#777",
    marginBottom: "5px",
  };

  const productDescriptionSmallStyle = {
    fontSize: "0.8rem",
    color: "#666",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxHeight: "2.4em", // line-height * 2
    lineHeight: "1.2em",
  };

  const columnStyle = {
    fontSize: "0.95rem",
    color: "#444",
    textAlign: "center", // Center text in columns like Price, Qty, Total
    minWidth: "80px", // Ensure columns have some width
  };

  const priceStyle = { ...columnStyle, flex: "1" };
  const quantityColumnStyle = {
    ...columnStyle,
    flex: "1.5",
    display: "flex",
    justifyContent: "center",
  }; // More space for qty selector
  const totalStyle = { ...columnStyle, flex: "1", fontWeight: "bold" };
  const removeButtonStyle = {
    background: "none",
    border: "none",
    color: "#cc0000",
    fontSize: "1.5rem",
    cursor: "pointer",
    padding: "5px 10px",
    lineHeight: "1",
    flex: "0.5",
    textAlign: "right",
  };

  const handleQuantityChange = (newQuantity) => {
    onUpdateQuantity(item.id, newQuantity);
  };

  // Calculate item total
  // Assuming item.price is a number. If it's "Nu. 50", you'll need to parse it.
  const numericPrice = parseFloat(String(item.price).replace(/[^0-9.]/g, ""));
  const itemTotal = (numericPrice * item.quantity).toFixed(2);

  return (
    <div style={itemRowStyle}>
      <div style={productInfoStyle}>
        <img src={item.image} alt={item.name} style={imageStyle} />
        <div style={detailsStyle}>
          <div style={productNameStyle}>{item.name}</div>
          <div style={productIdStyle}>#{item.productId || "N/A"}</div>
          <div style={productDescriptionSmallStyle}>
            {item.shortDescription}
          </div>
        </div>
      </div>
      <div style={priceStyle}>Nu. {numericPrice.toFixed(2)}</div>
      <div style={quantityColumnStyle}>
        <QuantitySelector
          quantity={item.quantity}
          onIncrease={() => handleQuantityChange(item.quantity + 1)}
          onDecrease={() => handleQuantityChange(item.quantity - 1)}
          onChange={(val) => handleQuantityChange(val)} // For direct input
          min={1}
          max={item.stock || 99} // Use item stock if available
        />
      </div>
      <div style={totalStyle}>Nu. {itemTotal}</div>
      <button
        style={removeButtonStyle}
        onClick={() => onRemoveItem(item.id)}
        title="Remove item"
      >
        × {/* HTML entity for X */}
      </button>
    </div>
  );
};

export default CartItem;
