// src/components/pages/OtpPage.jsx
import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import Navbar from "../Navbar";
// import Footer from '../Footer'; // Optional

const OtpPage = () => {
  const [otp, setOtp] = useState(new Array(6).fill("")); // Array to hold 6 digits
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [resendTimer, setResendTimer] = useState(30); // Timer for resend OTP

  const navigate = useNavigate();
  const location = useLocation(); // To get data passed from signup page
  const { login } = useAuth();

  // Refs for input fields to manage focus
  const inputRefs = useRef([]);

  // Get email and mock OTP passed from SignupPage (if any)
  const userEmail = location.state?.email || "your_email@example.com"; // Fallback
  const MOCK_EXPECTED_OTP = location.state?.mockOtp || "123456"; // Fallback mock OTP

  useEffect(() => {
    document.title = "Verify OTP - BhutanBuy";
    // Focus the first input on mount
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  useEffect(() => {
    let timerId;
    if (resendTimer > 0) {
      timerId = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
    }
    return () => clearTimeout(timerId);
  }, [resendTimer]);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false; // Only allow numbers

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
    setError(""); // Clear error on change

    // Focus next input
    if (element.value !== "" && index < 5 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    // Move focus to previous input on backspace if current input is empty
    if (
      e.key === "Backspace" &&
      otp[index] === "" &&
      index > 0 &&
      inputRefs.current[index - 1]
    ) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    const pastedData = e.clipboardData.getData("text");
    if (/^\d{6}$/.test(pastedData)) {
      // Check if pasted data is 6 digits
      const newOtp = pastedData.split("");
      setOtp(newOtp);
      // Optionally focus the last input or the submit button
      if (inputRefs.current[5]) {
        inputRefs.current[5].focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    const enteredOtp = otp.join("");

    // Simulate OTP verification
    setTimeout(() => {
      if (enteredOtp === MOCK_EXPECTED_OTP) {
        alert("OTP Verified Successfully! You are now logged in. (Mock)");
        login(); // Call login from AuthContext
        navigate("/"); // Redirect to homepage
      } else {
        setError("Invalid OTP. Please try again.");
        setOtp(new Array(6).fill("")); // Clear OTP fields
        if (inputRefs.current[0]) {
          inputRefs.current[0].focus(); // Focus first input on error
        }
      }
      setIsLoading(false);
    }, 1000); // Simulate network delay
  };

  const handleResendOtp = () => {
    if (resendTimer === 0) {
      // Simulate resending OTP
      const newMockOtp = String(Math.floor(100000 + Math.random() * 900000));
      console.log("Mock OTP Resent (for testing):", newMockOtp);
      alert(
        `A new OTP has been sent to ${userEmail}. (Mock OTP: ${newMockOtp})`
      );
      // Update the MOCK_EXPECTED_OTP if you want this to work for testing resend
      // For now, we'll keep the original MOCK_EXPECTED_OTP for simplicity or you'd update it in state if needed
      // If you were truly resending, you'd update location.state?.mockOtp which is tricky without re-navigating or context
      // For a better resend test, the MOCK_EXPECTED_OTP should be managed in a state within this component
      // or passed again via navigation state if you re-trigger the "send" logic.
      // For now, clicking resend will just reset the timer and show an alert.
      setResendTimer(30);
      setError("");
      setOtp(new Array(6).fill(""));
      if (inputRefs.current[0]) {
        inputRefs.current[0].focus();
      }
    }
  };

  // Styles (similar to Login/Signup pages)
  const pageStyle = {
    /* ... same as LoginPage ... */ display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    backgroundColor: "#f4f6f8",
  };
  const mainContentStyle = {
    /* ... same as LoginPage ... */ flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px 20px",
  };
  const otpBoxStyle = {
    /* ... same as loginBoxStyle ... */ backgroundColor: "#fff",
    padding: "30px 40px",
    borderRadius: "12px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
    width: "100%",
    maxWidth: "480px",
    textAlign: "center",
  };
  const titleStyle = {
    fontSize: "1.8rem",
    fontWeight: "600",
    color: "#333",
    marginBottom: "15px",
  };
  const instructionTextStyle = {
    fontSize: "0.95rem",
    color: "#555",
    marginBottom: "25px",
    lineHeight: 1.5,
  };
  const emailTextStyle = { fontWeight: "bold", color: "#007bff" };
  const otpInputContainerStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "25px",
  };
  const otpInputStyle = {
    width: "45px",
    height: "50px",
    fontSize: "1.5rem",
    textAlign: "center",
    border: "1px solid #ccc",
    borderRadius: "6px",
    outline: "none",
    caretColor: "#00A99D",
  };
  const errorTextStyle = {
    color: "red",
    fontSize: "0.9rem",
    marginTop: "15px",
    minHeight: "1.3em",
  };
  const submitButtonStyle = {
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
    marginTop: "10px",
  };
  const resendOtpStyle = {
    marginTop: "20px",
    fontSize: "0.9rem",
  };
  const resendLinkStyle = {
    color: "#007bff",
    cursor: "pointer",
    fontWeight: "500",
    textDecoration: resendTimer > 0 ? "none" : "underline",
    opacity: resendTimer > 0 ? 0.6 : 1,
  };

  return (
    <div style={pageStyle}>
      <Navbar />
      <main style={mainContentStyle}>
        <div style={otpBoxStyle}>
          <h1 style={titleStyle}>Verify Your Email</h1>
          <p style={instructionTextStyle}>
            We've sent a 6-digit verification code to{" "}
            <span style={emailTextStyle}>{userEmail}</span>. Please enter the
            code below to continue.
          </p>
          <p style={instructionTextStyle}>
            (Mock OTP for testing is: <strong>{MOCK_EXPECTED_OTP}</strong>)
          </p>

          <form onSubmit={handleSubmit}>
            <div style={otpInputContainerStyle} onPaste={handlePaste}>
              {otp.map((data, index) => {
                return (
                  <input
                    style={{
                      ...otpInputStyle,
                      borderColor: error ? "red" : data ? "#00A99D" : "#ccc",
                    }}
                    className="otp-field"
                    type="text" // Use text to allow single char and handle maxLength better
                    name="otp"
                    maxLength="1"
                    key={index}
                    value={data}
                    onChange={(e) => handleChange(e.target, index)}
                    onFocus={(e) => e.target.select()}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    ref={(el) => (inputRefs.current[index] = el)}
                    disabled={isLoading}
                  />
                );
              })}
            </div>

            {error && <p style={errorTextStyle}>{error}</p>}

            <button
              type="submit"
              style={submitButtonStyle}
              disabled={isLoading || otp.join("").length !== 6}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor =
                  isLoading || otp.join("").length !== 6 ? "" : "#00877A")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor =
                  isLoading || otp.join("").length !== 6 ? "" : "#00A99D")
              }
            >
              {isLoading ? "Verifying..." : "Confirm OTP"}
            </button>
          </form>

          <p style={resendOtpStyle}>
            Didn't receive the code?{" "}
            <span
              onClick={handleResendOtp}
              style={{
                ...resendLinkStyle,
                cursor: resendTimer > 0 ? "default" : "pointer",
              }}
            >
              Resend OTP {resendTimer > 0 ? `(${resendTimer}s)` : ""}
            </span>
          </p>
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default OtpPage;
