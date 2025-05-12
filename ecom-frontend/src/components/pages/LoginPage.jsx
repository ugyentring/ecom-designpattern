// src/components/pages/LoginPage.jsx
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // useNavigate for redirecting after login
import { useAuth } from "../context/AuthContext"; // For mock login

import Navbar from "../Navbar";
import Footer from "../Footer"; // Optional, but good for consistency

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // If user is already logged in, redirect them from login page
    // (e.g., to homepage or dashboard)
    if (isLoggedIn) {
      navigate("/"); // Redirect to homepage
    }
    document.title = "Login - BhutanBuy";
  }, [isLoggedIn, navigate]);

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent default form submission
    // Basic validation (you'd add more robust validation)
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }
    // In a real app, you'd send credentials to a backend API here.
    // For this mock, we'll call the login function from AuthContext.
    console.log("Attempting login with:", email, password);
    login(); // This will set isLoggedIn to true in AuthContext
    // navigate('/'); // AuthContext's login might handle navigation or this can do it
  };

  // Styles (consider moving to CSS files for larger applications)
  const pageStyle = {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh", // Ensure footer is at the bottom if content is short
    backgroundColor: "#f4f6f8", // Light grey background for the page
  };

  const mainContentStyle = {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px 20px",
  };

  const loginBoxStyle = {
    backgroundColor: "#fff",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
    width: "100%",
    maxWidth: "450px",
    textAlign: "center",
  };

  const countrySelectorContainerStyle = {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: "30px",
  };

  const countrySelectorStyle = {
    padding: "8px 12px",
    border: "1px solid #ddd",
    borderRadius: "6px",
    backgroundColor: "#fff",
    fontSize: "0.9rem",
    color: "#555",
  };

  const titleStyle = {
    fontSize: "2rem",
    fontWeight: "600",
    color: "#333",
    marginBottom: "30px",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "20px", // Space between form elements
  };

  const inputGroupStyle = {
    textAlign: "left",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "8px",
    fontSize: "0.9rem",
    color: "#555",
    fontWeight: "500",
  };

  const inputStyle = {
    width: "100%",
    padding: "12px 15px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontSize: "1rem",
    boxSizing: "border-box", // Important for padding and border not to expand width
  };

  const termsTextStyle = {
    fontSize: "0.8rem",
    color: "#777",
    marginTop: "15px", // Space above this text
    marginBottom: "25px", // Space below this text
    lineHeight: 1.5,
  };

  const termsLinkStyle = {
    color: "#007bff", // Or your theme's link color
    textDecoration: "none",
    fontWeight: "bold",
  };

  const loginButtonStyle = {
    width: "100%",
    padding: "14px",
    backgroundColor: "#00A99D", // Theme teal
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "1.1rem",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.2s ease",
  };

  const signupTextStyle = {
    marginTop: "30px",
    fontSize: "0.9rem",
    color: "#555",
  };

  const signupLinkStyle = {
    color: "#007bff", // Or your theme's link color
    fontWeight: "bold",
    textDecoration: "none",
  };

  return (
    <div style={pageStyle}>
      <Navbar />
      <main style={mainContentStyle}>
        <div style={loginBoxStyle}>
          <div style={countrySelectorContainerStyle}>
            <button style={countrySelectorStyle}>
              Bhutan <span style={{ fontSize: "0.8em" }}>▼</span>
            </button>
          </div>

          <h1 style={titleStyle}>Login</h1>

          <form onSubmit={handleLogin} style={formStyle}>
            <div style={inputGroupStyle}>
              <label htmlFor="email" style={labelStyle}>
                Email *
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ ...inputStyle, borderColor: "#00A99D" }} // Highlighted border
              />
            </div>

            <div style={inputGroupStyle}>
              <label htmlFor="password" style={labelStyle}>
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{ ...inputStyle, borderColor: "#00A99D" }} // Highlighted border
              />
            </div>

            <p style={termsTextStyle}>
              By continuing, I agree to the{" "}
              <Link to="/terms-and-conditions" style={termsLinkStyle}>
                Terms & Conditions
              </Link>{" "}
              and{" "}
              <Link to="/privacy-policy" style={termsLinkStyle}>
                Privacy Policy
              </Link>
              .
            </p>

            <button
              type="submit"
              style={loginButtonStyle}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "#00877A")
              } // Darker teal on hover
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = "#00A99D")
              }
            >
              Login
            </button>
          </form>

          <p style={signupTextStyle}>
            Don't have an account?{" "}
            <Link to="/signup" style={signupLinkStyle}>
              Sign up
            </Link>
          </p>
        </div>
      </main>
      {/* <Footer />  // Uncomment if you want a footer on the login page */}
    </div>
  );
};

export default LoginPage;
