// src/context/AuthContext.jsx
import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  // Initially, the user is not logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  // Mock login function
  const login = () => {
    setIsLoggedIn(true);
    setShowLoginPopup(false); // Close popup after login
    console.log("User logged in (mock)");
  };

  // Mock logout function
  const logout = () => {
    setIsLoggedIn(false);
    console.log("User logged out (mock)");
  };

  const openLoginPopup = () => setShowLoginPopup(true);
  const closeLoginPopup = () => setShowLoginPopup(false);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        login,
        logout,
        showLoginPopup,
        openLoginPopup,
        closeLoginPopup,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
