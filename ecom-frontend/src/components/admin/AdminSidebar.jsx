// src/components/admin/AdminSidebar.jsx
import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom"; // NavLink for active styling
import { useAuth } from "../../components/context/AuthContext"; // Assuming you use this for logout

// Placeholder icons - replace with actual icons from a library like react-icons
const DashboardIcon = () => <span>📊</span>; // Example
const ProductIcon = () => <span>🛍️</span>;
const OrderIcon = () => (
  <span>
    <img
      width="15"
      height="15"
      src="https://img.icons8.com/ios-filled/50/FFFFFF/list.png"
      alt="list"
    />
  </span>
); // Example from icons8 (ensure proper attribution if used)
const CustomerIcon = () => <span>👥</span>;
const AdminUserIcon = () => (
  <span>
    <img
      width="24"
      height="24"
      src="https://img.icons8.com/material-sharp/24/FFFFFF/user-male-circle.png"
      alt="user-male-circle"
    />
  </span>
); // Example

const AdminSidebar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login"); // Redirect to login after admin logout
  };

  // Styles
  const sidebarStyle = {
    width: "260px",
    backgroundColor: "#1D5F5E", // Dark teal from image
    color: "#FFFFFF",
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    position: "fixed", // Fixed sidebar
    top: 0,
    left: 0,
  };

  const logoHeaderStyle = {
    padding: "20px",
    textAlign: "left",
    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
  };

  const logoStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#FFFFFF",
    textDecoration: "none",
  };
  const adminTitleStyle = {
    fontSize: "0.85rem",
    opacity: 0.8,
    marginTop: "2px",
  };

  const menuHeaderStyle = {
    padding: "20px 20px 10px 20px",
    fontSize: "0.8rem",
    textTransform: "uppercase",
    opacity: 0.7,
    fontWeight: "600",
  };

  const navStyle = {
    flexGrow: 1,
  };

  const navLinkBaseStyle = {
    display: "flex",
    alignItems: "center",
    padding: "12px 20px",
    textDecoration: "none",
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: "0.95rem",
    transition: "background-color 0.2s, color 0.2s",
  };

  const navLinkActiveStyle = {
    // This will be merged by NavLink's activeClassName or style prop
    backgroundColor: "#E0F2F1", // Light teal for active item
    color: "#1D5F5E", // Dark teal text for active item
    fontWeight: "600",
    borderLeft: "3px solid #00A99D", // Active indicator border
    paddingLeft: "17px", // Adjust padding for border
  };

  const iconStyle = {
    marginRight: "12px",
    fontSize: "1.2em", // Adjust icon size
  };

  const userInfoStyle = {
    padding: "20px",
    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  };
  const userDetailsStyle = {
    fontSize: "0.9rem",
  };
  const userNameStyle = {
    fontWeight: "600",
  };

  const logoutButtonStyle = {
    display: "block",
    width: "calc(100% - 40px)", // Full width with padding
    margin: "0 20px 20px 20px",
    padding: "12px",
    backgroundColor: "#113A39", // Darker shade for logout button
    color: "#FFFFFF",
    border: "none",
    borderRadius: "25px", // Pill shape
    textAlign: "center",
    cursor: "pointer",
    fontSize: "0.95rem",
    fontWeight: "500",
    transition: "background-color 0.2s",
  };

  return (
    <div style={sidebarStyle}>
      <div style={logoHeaderStyle}>
        <Link to="/admin/dashboard" style={logoStyle}>
          B²
        </Link>
        <div style={adminTitleStyle}>Admin Dashboard</div>
      </div>

      <div style={menuHeaderStyle}>Admin Menu</div>
      <nav style={navStyle}>
        <NavLink
          to="/admin/dashboard"
          style={({ isActive }) =>
            isActive
              ? { ...navLinkBaseStyle, ...navLinkActiveStyle }
              : navLinkBaseStyle
          }
        >
          <span style={iconStyle}>
            <DashboardIcon />
          </span>{" "}
          Dashboard
        </NavLink>
        <NavLink
          to="/admin/product-management"
          style={({ isActive }) =>
            isActive
              ? { ...navLinkBaseStyle, ...navLinkActiveStyle }
              : navLinkBaseStyle
          }
        >
          <span style={iconStyle}>
            <ProductIcon />
          </span>{" "}
          Product Management
        </NavLink>
        <NavLink
          to="/admin/order-management"
          style={({ isActive }) =>
            isActive
              ? { ...navLinkBaseStyle, ...navLinkActiveStyle }
              : navLinkBaseStyle
          }
        >
          <span style={iconStyle}>
            <OrderIcon />
          </span>{" "}
          Order Management
        </NavLink>
        <NavLink
          to="/admin/customer-management"
          style={({ isActive }) =>
            isActive
              ? { ...navLinkBaseStyle, ...navLinkActiveStyle }
              : navLinkBaseStyle
          }
        >
          <span style={iconStyle}>
            <CustomerIcon />
          </span>{" "}
          Customer Management
        </NavLink>
        {/* Add more admin links here */}
      </nav>

      <div style={{ marginTop: "auto" }}>
        {" "}
        {/* Pushes user info and logout to bottom */}
        <div style={userInfoStyle}>
          <AdminUserIcon />
          <div style={userDetailsStyle}>
            <div>Admin</div>
            <div style={userNameStyle}>Dorji</div>
          </div>
        </div>
        <button
          style={logoutButtonStyle}
          onClick={handleLogout}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#000")}
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#113A39")
          }
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;
