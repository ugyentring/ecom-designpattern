// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../components/context/AuthContext"; // For login state and logout

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setMobileNavOpen(false);
        setMobileSearchOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Styles
  const navWrapperStyles = {
    position: "sticky",
    top: 0,
    zIndex: 1000,
    backgroundColor: "#fff",
    boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
  };

  const topBarStyles = {
    backgroundColor: "#3a3a3a",
    color: "white",
    padding: "6px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "0.8rem",
  };

  const navStyles = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 20px",
    height: "60px",
  };

  const logoStyles = {
    fontSize: "2.2rem",
    fontWeight: "bold",
    color: "#333",
    textDecoration: "none",
  };

  const navLinksContainerStyles = {
    display: isMobileView ? "none" : "flex",
    gap: "25px",
    alignItems: "center",
    marginLeft: "auto", // Pushes this block to the right before search and auth
    marginRight: "30px", // Space before search/auth
  };

  const navLinkItemStyles = {
    textDecoration: "none",
    color: "#333",
    fontSize: "1rem",
    padding: "8px 0",
    fontWeight: "500",
    position: "relative",
    display: "flex", // For aligning icon with text if using icon for cart
    alignItems: "center",
    gap: "5px", // Space between icon and text
  };

  const searchContainerStyles = {
    display: isMobileView ? "none" : "flex",
    alignItems: "center",
    border: "1px solid #ccc",
    borderRadius: "20px",
    padding: "6px 12px",
    backgroundColor: "#f9f9f9",
    marginRight: "20px", // Space before auth buttons
  };

  const searchInputStyles = {
    border: "none",
    outline: "none",
    marginLeft: "8px",
    fontSize: "0.9rem",
    background: "transparent",
    width: "150px",
  };

  const authButtonsContainerStyles = {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  };

  const baseButtonStyles = {
    padding: "8px 18px",
    border: "none",
    borderRadius: "20px",
    fontSize: "0.9rem",
    fontWeight: "500",
    cursor: "pointer",
    textDecoration: "none",
    textAlign: "center",
    display: "inline-block",
    transition: "background-color 0.2s, color 0.2s, box-shadow 0.2s",
  };

  const signUpButtonStyles = {
    ...baseButtonStyles,
    backgroundColor: "transparent",
    color: "#333",
    border: "1.5px solid #555",
  };

  const loginLogoutButtonStyles = {
    ...baseButtonStyles,
    backgroundColor: "#00A99D",
    color: "white",
  };

  const mobileMenuToggleStyles = {
    display: isMobileView ? "block" : "none",
    background: "none",
    border: "none",
    fontSize: "1.8rem",
    cursor: "pointer",
    padding: "5px",
    color: "#333",
  };

  const mobileNavMenuStyles = {
    display: mobileNavOpen ? "flex" : "none",
    flexDirection: "column",
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    padding: "10px 0",
    zIndex: 999,
  };

  const mobileNavLinkItemStyles = {
    ...navLinkItemStyles,
    padding: "12px 20px",
    width: "100%",
    textAlign: "left",
    boxSizing: "border-box",
  };

  const mobileSearchTriggerStyle = {
    ...mobileMenuToggleStyles,
    fontSize: "1.5rem",
  };

  const mobileSearchInputContainerStyle = {
    display: mobileSearchOpen ? "flex" : "none",
    padding: "10px 20px",
    borderTop: "1px solid #eee",
    alignItems: "center",
    gap: "10px",
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    zIndex: 998,
  };

  const mobileSearchInputStyle = {
    ...searchInputStyles,
    width: "auto",
    flexGrow: 1,
    border: "1px solid #ccc",
    borderRadius: "20px",
    padding: "8px 12px",
  };

  const handleLoginLogoutClick = () => {
    if (isLoggedIn) {
      logout();
    } else {
      navigate("/login");
    }
    setMobileNavOpen(false); // Close mobile menu after action
  };

  const handleMobileLinkClick = () => {
    setMobileNavOpen(false);
    setMobileSearchOpen(false);
  };

  return (
    <div style={navWrapperStyles}>
      <div style={topBarStyles}>
        <div>📞 +975 - 1937498</div>
        <div>
          <select
            style={{
              background: "transparent",
              color: "white",
              border: "none",
              fontSize: "0.8rem",
              cursor: "pointer",
            }}
          >
            <option value="en">EN</option>
            <option value="dz">DZ</option>
          </select>
        </div>
      </div>

      <nav style={navStyles} className="container">
        <Link to="/" style={logoStyles} onClick={handleMobileLinkClick}>
          B²
        </Link>

        {/* Desktop Navigation Links */}
        <div style={navLinksContainerStyles}>
          <Link to="/products" style={navLinkItemStyles}>
            Products ▼
          </Link>
          <Link to="/about-us" style={navLinkItemStyles}>
            About Us
          </Link>
          <Link to="/cart" style={navLinkItemStyles}>
            🛒 {/* Replace with a proper cart icon component */}
            <span style={{ marginLeft: "5px" }}>Cart</span>
          </Link>
        </div>

        {/* Desktop Search Bar - Positioned before Auth buttons now */}
        {!isMobileView && (
          <div style={searchContainerStyles}>
            <span>🔍</span> {/* Replace with an actual SVG icon */}
            <input type="text" placeholder="Search" style={searchInputStyles} />
          </div>
        )}

        {/* Auth Buttons and Mobile Toggles */}
        <div style={authButtonsContainerStyles}>
          {!isMobileView && (
            <>
              <Link
                to="/signup"
                style={signUpButtonStyles}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = "#e9e9e9")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = "transparent")
                }
              >
                Sign Up
              </Link>
              <button
                onClick={handleLoginLogoutClick}
                style={loginLogoutButtonStyles}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = "#00877A")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = "#00A99D")
                }
              >
                {isLoggedIn ? "Logout" : "Login"}
              </button>
            </>
          )}
          {isMobileView && (
            <>
              <button
                style={mobileSearchTriggerStyle}
                onClick={() => {
                  setMobileSearchOpen(!mobileSearchOpen);
                  setMobileNavOpen(false);
                }}
              >
                🔍
              </button>
              <button
                style={mobileMenuToggleStyles}
                onClick={() => {
                  setMobileNavOpen(!mobileNavOpen);
                  setMobileSearchOpen(false);
                }}
              >
                ☰
              </button>
            </>
          )}
        </div>
      </nav>

      {/* Mobile Search Input */}
      <div style={mobileSearchInputContainerStyle}>
        <input
          type="text"
          placeholder="Search..."
          style={mobileSearchInputStyle}
        />
        <button style={{ ...loginLogoutButtonStyles, padding: "8px 15px" }}>
          Go
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div style={mobileNavMenuStyles}>
        <Link
          to="/products"
          style={mobileNavLinkItemStyles}
          onClick={handleMobileLinkClick}
        >
          Products ▼
        </Link>
        <Link
          to="/about-us"
          style={mobileNavLinkItemStyles}
          onClick={handleMobileLinkClick}
        >
          About Us
        </Link>
        <Link
          to="/cart"
          style={mobileNavLinkItemStyles}
          onClick={handleMobileLinkClick}
        >
          🛒 My Cart
        </Link>{" "}
        {/* Cart Link in Mobile Menu */}
        <hr style={{ margin: "10px 20px", borderColor: "#eee" }} />
        <Link
          to="/signup"
          style={{ ...mobileNavLinkItemStyles, color: "#007bff" }}
          onClick={handleMobileLinkClick}
        >
          Sign Up
        </Link>
        <button
          onClick={handleLoginLogoutClick}
          style={{
            ...mobileNavLinkItemStyles,
            background: "none",
            border: "none",
            color: isLoggedIn ? "red" : "#007bff",
            cursor: "pointer",
            textAlign: "left",
          }}
        >
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
