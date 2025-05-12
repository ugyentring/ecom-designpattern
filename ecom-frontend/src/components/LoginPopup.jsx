// src/components/LoginPopup.jsx
import React from "react";
import { useAuth } from "./context/AuthContext"; // Import useAuth

const LoginPopup = () => {
  const { showLoginPopup, closeLoginPopup, login } = useAuth();

  if (!showLoginPopup) {
    return null; // Don't render if not visible
  }

  const popupOverlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1050, // Ensure it's above other content
  };

  const popupContentStyle = {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "8px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
    textAlign: "center",
    maxWidth: "400px",
    width: "90%",
  };

  const titleStyle = {
    fontSize: "1.5rem",
    color: "#333",
    marginBottom: "15px",
  };

  const messageStyle = {
    fontSize: "1rem",
    color: "#555",
    marginBottom: "25px",
  };

  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "space-around", // Or 'flex-end' with gap
    gap: "15px",
  };

  const buttonStyle = {
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "0.9rem",
    fontWeight: "500",
  };

  const loginButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#00A99D", // Theme teal
    color: "white",
  };

  const cancelButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#f0f0f0",
    color: "#555",
    border: "1px solid #ddd",
  };

  const handleLoginClick = () => {
    // In a real app, this would open a login form or redirect to a login page.
    // For this mock, we'll just call the login function from AuthContext.
    login();
  };

  return (
    <div style={popupOverlayStyle} onClick={closeLoginPopup}>
      {" "}
      {/* Close on overlay click */}
      <div style={popupContentStyle} onClick={(e) => e.stopPropagation()}>
        {" "}
        {/* Prevent closing when clicking inside content */}
        <h2 style={titleStyle}>Login Required</h2>
        <p style={messageStyle}>
          You need to be logged in to add items to your cart.
        </p>
        <div style={buttonContainerStyle}>
          <button style={cancelButtonStyle} onClick={closeLoginPopup}>
            Cancel
          </button>
          <button style={loginButtonStyle} onClick={handleLoginClick}>
            Login Now (Mock)
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;
