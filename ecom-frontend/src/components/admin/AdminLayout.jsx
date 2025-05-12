// src/components/admin/AdminLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom"; // To render child routes
import AdminSidebar from "./AdminSidebar";

const AdminLayout = () => {
  const layoutStyle = {
    display: "flex",
    minHeight: "100vh", // Ensure layout takes full viewport height
  };

  const mainContentStyle = {
    marginLeft: "260px", // Same as sidebar width to avoid overlap
    flexGrow: 1, // Takes remaining space
    padding: "25px", // Padding around the content of admin pages
    backgroundColor: "#F4F7F6", // Light background for content area
    overflowY: "auto", // Allow scrolling for content if it's too long
  };

  return (
    <div style={layoutStyle}>
      <AdminSidebar />
      <main style={mainContentStyle}>
        <Outlet /> {/* Child routes (like DashboardPage) will render here */}
      </main>
    </div>
  );
};

export default AdminLayout;
