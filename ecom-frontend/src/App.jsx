// // src/App.jsx
// import React from 'react';
// import { Routes, Route, Navigate, Link, useLocation } from 'react-router-dom'; // Added useLocation

// // Public Page Imports
// import HomePage from './components/pages/HomePage';
// import ProductsPage from './components/pages/ProductsPage';
// import ProductCategoryPage from './components/pages/ProductCategoryPage';
// import ProductDetailsPage from './components/pages/ProductDetailsPage';
// import LoginPage from './components/pages/LoginPage';
// import SignupPage from './components/pages/SignupPage';
// import OtpPage from './components/pages/OtpPage';
// import CartPage from './components/pages/CartPage';

// // Admin Area Imports
// import AdminLayout from './components/admin/AdminLayout';
// import DashboardPage from './components/admin/DashboardPage';
// import AdminProductManagementPage from './components/admin/AdminProductManagementPage';
// import AdminOrderManagementPage from './components/admin/AdminOrderManagementPage';
// import AdminCustomerManagementPage from './components/admin/AdminCustomerManagementPage';

// // Global Components / Context
// import LoginPopup from './components/LoginPopup';
// import { useAuth } from './context/AuthContext'; // For authentication state

// import './App.css'; // Your global App styles

// // --- Helper Components ---

// // 1. AuthStatusDisplay (for easy testing of login state during development)
// const AuthStatusDisplay = () => {
//     const { isLoggedIn, login, logout } = useAuth();
//     return (
//         <div style={{
//             position: 'fixed',
//             bottom: '10px',
//             right: '10px',
//             background: 'rgba(200, 200, 200, 0.9)',
//             padding: '10px 15px',
//             zIndex: 2000,
//             borderRadius: '5px',
//             boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
//             display: 'flex',
//             alignItems: 'center',
//             gap: '10px'
//         }}>
//             {isLoggedIn ? (
//                 <button onClick={logout} style={{ padding: '6px 12px', cursor: 'pointer' }}>Logout (Mock)</button>
//             ) : (
//                 <button onClick={login} style={{ padding: '6px 12px', cursor: 'pointer' }}>Login (Mock)</button>
//             )}
//             <span style={{ fontSize: '0.9em' }}>Status: {isLoggedIn ? "Logged In" : "Logged Out"}</span>
//         </div>
//     );
// };

// // 2. ProtectedAdminRoute (to guard admin routes)
// const ProtectedAdminRoute = ({ children }) => {
//   const { isLoggedIn } = useAuth();
//   const location = useLocation(); // Get current location

//   if (!isLoggedIn) {
//     // If not logged in, redirect to the login page.
//     // Pass the current location in state so after login, user can be redirected back.
//     return <Navigate to="/login" state={{ from: location }} replace />;
//   }
//   // If logged in (and presumably authorized as admin for this simple mock), render the children.
//   // In a real app, you'd also check for a specific admin role here.
//   return children;
// };

// // 3. NotFoundPage (Optional: for handling unmatched routes)
// const NotFoundPage = () => {
//     return (
//         <div style={{ textAlign: 'center', padding: '50px', minHeight: 'calc(100vh - 150px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
//             {/* You might want to include Navbar and Footer here for consistency */}
//             {/* <Navbar /> */}
//             <h2>404 - Page Not Found</h2>
//             <p>Sorry, the page you are looking for does not exist or you do not have permission to view it.</p>
//             <Link to="/" style={{color: '#00A99D', textDecoration: 'underline', fontSize: '1.1rem', marginTop: '20px'}}>Go to Homepage</Link>
//             {/* <Footer /> */}
//         </div>
//     );
// };


// // --- Main App Component ---
// function App() {
//   return (
//     <div className="App">
//       {/* AuthStatusDisplay is for development convenience to toggle login state */}
//       {/* You would remove this in a production build */}
//       <AuthStatusDisplay />

//       <Routes>
//         {/* Public Routes */}
//         <Route path="/" element={<HomePage />} />
//         <Route path="/products" element={<ProductsPage />} />
//         <Route path="/products/agriculture" element={<ProductCategoryPage />} />
//         <Route path="/product/:productId" element={<ProductDetailsPage />} />
        
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/signup" element={<SignupPage />} />
//         <Route path="/verify-otp" element={<OtpPage />} />
//         <Route path="/cart" element={<CartPage />} />
//         {/* Example: <Route path="/about-us" element={<AboutUsPage />} /> */}


//         {/* Admin Area Routes */}
//         {/* All routes under /admin will now use the ProtectedAdminRoute */}
//         <Route
//           path="/admin"
//           element={
//             <ProtectedAdminRoute> {/* Wrap AdminLayout with protection */}
//               <AdminLayout />
//             </ProtectedAdminRoute>
//           }
//         >
//           {/* Child routes of /admin. They will be rendered inside AdminLayout's <Outlet /> */}
//           <Route index element={<Navigate to="dashboard" replace />} /> {/* Redirects /admin to /admin/dashboard */}
//           <Route path="dashboard" element={<DashboardPage />} />
//           <Route path="product-management" element={<AdminProductManagementPage />} />
//           <Route path="order-management" element={<AdminOrderManagementPage />} />
//           <Route path="customer-management" element={<AdminCustomerManagementPage />} />
//           {/* Add other admin sub-routes here as needed */}
//           {/* <Route path="settings" element={<AdminSettingsPage />} /> */}
//         </Route>

//         {/* Catch-all 404 Not Found Route - Should be the last route */}
//         <Route path="*" element={<NotFoundPage />} />
//       </Routes>

//       {/* LoginPopup for the "Add to Cart" functionality if user is not logged in */}
//       <LoginPopup />
//     </div>
//   );
// }

// export default App;





// src/App.jsx
import React from "react";
import { Routes, Route, Navigate, Link } from "react-router-dom";

// Public Page Imports
import HomePage from "./components/pages/HomePage";
import ProductsPage from "./components/pages/ProductsPage";
import ProductCategoryPage from "./components/pages/ProductCategoryPage";
import ProductDetailsPage from "./components/pages/ProductDetailsPage";
import LoginPage from "./components/pages/LoginPage";
import SignupPage from "./components/pages/SignupPage";
import OtpPage from "./components/pages/OtpPage";
import CartPage from "./components/pages/CartPage";

// Admin Area Imports
import AdminLayout from "./components/admin/AdminLayout";
import DashboardPage from "./components/admin/DashboardPage";
import AdminProductManagementPage from "./components/admin/AdminProductManagementPage";
import AdminOrderManagementPage from "./components/admin/AdminOrderManagementPage";
import AdminCustomerManagementPage from "./components/admin/AdminCustomerManagementPage";

// Global Components / Context
import LoginPopup from "./components/LoginPopup";
// import { useAuth } from './context/AuthContext'; // Not strictly needed if not protecting routes

import "./App.css";

// --- Helper Components ---
// AuthStatusDisplay can be removed if you're not testing auth states right now
// const AuthStatusDisplay = () => { /* ... */ };

// ProtectedAdminRoute is no longer used for now
// const ProtectedAdminRoute = ({ children }) => { /* ... */ };

const NotFoundPage = () => {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "50px",
        minHeight: "calc(100vh - 150px)",
      }}
    >
      <h2>404 - Page Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/" style={{ color: "#00A99D", textDecoration: "underline" }}>
        Go to Homepage
      </Link>
    </div>
  );
};

// --- Main App Component ---
function App() {
  return (
    <div className="App">
      {/* <AuthStatusDisplay />  // You can comment this out if not needed */}

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/agriculture" element={<ProductCategoryPage />} />
        <Route path="/product/:productId" element={<ProductDetailsPage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/verify-otp" element={<OtpPage />} />
        <Route path="/cart" element={<CartPage />} />

        {/* Admin Area Routes - NO LONGER WRAPPED by ProtectedAdminRoute */}
        <Route
          path="/admin"
          element={<AdminLayout />} // Directly render AdminLayout
        >
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route
            path="product-management"
            element={<AdminProductManagementPage />}
          />{" "}
          {/* New Route */}
          <Route
            path="order-management"
            element={<AdminOrderManagementPage />}
          />{" "}
          {/* New Route */}
          <Route
            path="customer-management"
            element={<AdminCustomerManagementPage />}
          />{" "}
          {/* New Route */}
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <LoginPopup />
    </div>
  );
}

export default App;
