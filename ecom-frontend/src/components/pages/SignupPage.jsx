// src/components/pages/SignupPage.jsx
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Only for isLoggedIn check initially

import Navbar from "../Navbar";
// import Footer from '../Footer'; // Optional

const SignupPage = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  // isLoggedIn is used to redirect if user is already authenticated
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // If user is already logged in, redirect them from signup page
    if (isLoggedIn) {
      navigate("/"); // Redirect to homepage or dashboard
    }
    document.title = "Sign Up - BhutanBuy";
  }, [isLoggedIn, navigate]);

  const handleSignup = (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    // Basic Validations
    if (!fullName.trim() || !email.trim() || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // If all client-side validations pass:
    console.log("Mock signup validation passed for:", { fullName, email });

    // In a real app, you would now:
    // 1. Call a backend API to check if the email is already registered.
    // 2. If not registered, call another backend API to initiate the signup process,
    //    which would then send an OTP to the user's email.
    // 3. On success from that API call, navigate to the OTP page.

    // For this mock implementation:
    // We'll generate a mock OTP and "send" it by alerting/logging it.
    const mockOtp = String(Math.floor(100000 + Math.random() * 900000)); // Generate a random 6-digit OTP

    console.log("Generated Mock OTP (for testing purposes):", mockOtp);
    alert(
      `Mock signup initiated for ${email}!\n` +
        `An OTP has been "sent".\n\n` +
        `For testing, your OTP is: ${mockOtp}\n\n` +
        `You will now be redirected to the OTP verification page.`
    );

    // Navigate to the OTP verification page, passing the email and the mock OTP
    // The OtpPage will use this information.
    navigate("/verify-otp", {
      state: {
        email: email,
        mockOtp: mockOtp,
      },
    });
  };

  // Styles (same as provided in the previous detailed LoginPage, adjusted for Signup)
  const pageStyle = {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    backgroundColor: "#f4f6f8",
  };

  const mainContentStyle = {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px 20px",
  };

  const signupBoxStyle = {
    backgroundColor: "#fff",
    padding: "30px 40px",
    borderRadius: "12px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
    width: "100%",
    maxWidth: "500px",
    textAlign: "center",
  };

  const countrySelectorContainerStyle = {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: "25px",
  };

  const countrySelectorStyle = {
    padding: "8px 12px",
    border: "1px solid #ddd",
    borderRadius: "6px",
    backgroundColor: "#fff",
    fontSize: "0.9rem",
    color: "#555",
    cursor: "pointer",
  };

  const titleStyle = {
    fontSize: "2rem",
    fontWeight: "600",
    color: "#333",
    marginBottom: "25px",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
  };

  const inputRowStyle = {
    display: "flex",
    gap: "20px",
  };

  const inputGroupStyle = {
    textAlign: "left",
    flex: 1,
  };

  const labelStyle = {
    display: "block",
    marginBottom: "6px",
    fontSize: "0.85rem",
    color: "#555",
    fontWeight: "500",
  };

  const inputStyle = {
    width: "100%",
    padding: "11px 14px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontSize: "0.95rem",
    boxSizing: "border-box",
  };

  const focusedInputStyle = {
    // Style for focused input with teal border
    ...inputStyle,
    borderColor: "#00A99D",
    boxShadow: "0 0 0 2px rgba(0, 169, 157, 0.2)", // Optional: add a subtle glow
  };

  const errorTextStyle = {
    color: "red",
    fontSize: "0.85rem",
    marginTop: "5px", // Reduced margin
    textAlign: "left",
    minHeight: "1.2em",
  };

  const termsTextStyle = {
    fontSize: "0.8rem",
    color: "#777",
    marginTop: "10px",
    marginBottom: "20px",
    lineHeight: 1.5,
  };

  const termsLinkStyle = {
    color: "#007bff",
    textDecoration: "none",
    fontWeight: "bold",
  };

  const signupButtonStyle = {
    width: "100%",
    padding: "14px",
    backgroundColor: "#00A99D",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "1.1rem",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.2s ease",
  };

  const loginTextStyle = {
    marginTop: "25px",
    fontSize: "0.9rem",
    color: "#555",
  };

  const loginLinkStyle = {
    color: "#007bff",
    fontWeight: "bold",
    textDecoration: "none",
  };

  return (
    <div style={pageStyle}>
      <Navbar />
      <main style={mainContentStyle}>
        <div style={signupBoxStyle}>
          <div style={countrySelectorContainerStyle}>
            <button style={countrySelectorStyle}>
              Bhutan <span style={{ fontSize: "0.8em" }}>▼</span>
            </button>
          </div>

          <h1 style={titleStyle}>Sign Up</h1>

          <form onSubmit={handleSignup} style={formStyle} noValidate>
            {" "}
            {/* noValidate to handle custom validation */}
            <div style={inputRowStyle}>
              <div style={inputGroupStyle}>
                <label htmlFor="fullName" style={labelStyle}>
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  style={fullName ? focusedInputStyle : inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = "#00A99D")}
                  onBlur={(e) => (e.target.style.borderColor = "#ccc")}
                />
              </div>
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
                  style={email ? focusedInputStyle : inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = "#00A99D")}
                  onBlur={(e) => (e.target.style.borderColor = "#ccc")}
                />
              </div>
            </div>
            <div style={inputRowStyle}>
              <div style={inputGroupStyle}>
                <label htmlFor="password" style={labelStyle}>
                  Password *
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  style={password ? focusedInputStyle : inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = "#00A99D")}
                  onBlur={(e) => (e.target.style.borderColor = "#ccc")}
                />
              </div>
              <div style={inputGroupStyle}>
                <label htmlFor="confirmPassword" style={labelStyle}>
                  Confirm Password *
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  style={confirmPassword ? focusedInputStyle : inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = "#00A99D")}
                  onBlur={(e) => (e.target.style.borderColor = "#ccc")}
                />
              </div>
            </div>
            {error && <p style={errorTextStyle}>{error}</p>}
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
              style={signupButtonStyle}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "#00877A")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = "#00A99D")
              }
            >
              Sign Up
            </button>
          </form>

          <p style={loginTextStyle}>
            Already have an account?{" "}
            <Link to="/login" style={loginLinkStyle}>
              Login
            </Link>
          </p>
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default SignupPage;
