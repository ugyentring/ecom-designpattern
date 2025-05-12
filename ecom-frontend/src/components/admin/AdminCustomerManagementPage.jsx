// src/components/admin/AdminCustomerManagementPage.jsx
import React, { useState, useEffect } from "react";
import StatCard from "./StatCard"; // Reuse StatCard

// Placeholder icons
const SearchIcon = () => <span>🔍</span>;
const EditIcon = () => <span>✏️</span>;

// Mock data for the customers table
const mockCustomers = [
  { id: "cust1", name: "Pema Tshering", email: "pema@gmail.com" },
  { id: "cust2", name: "Tshering Dhendup", email: "tshering@gmail.com" },
  { id: "cust3", name: "Sonam Dorji", email: "sonam@gmail.com" },
  { id: "cust4", name: "Karma Dhendup", email: "karma@gmail.com" },
  { id: "cust5", name: "Yeshi Nidup", email: "yeshi@gmail.com" },
  { id: "cust6", name: "Kinley Pem", email: "kinley@gmail.com" },
  { id: "cust7", name: "Gyem Lham", email: "gyem@gmail.com" },
  { id: "cust8", name: "Tashi Yangzom", email: "tashi@gmail.com" },
  { id: "cust9", name: "Ugyen Dorji", email: "ugyen@gmail.com" },
  { id: "cust10", name: "Dechen Wangmo", email: "dechen@example.com" },
  // Add more customers as needed
];

const AdminCustomerManagementPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCustomers, setFilteredCustomers] = useState(mockCustomers);

  useEffect(() => {
    document.title = "Customer Management - Admin";
  }, []);

  useEffect(() => {
    // Basic search filter (case-insensitive on name or email)
    const results = mockCustomers.filter(
      (customer) =>
        customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCustomers(results);
  }, [searchTerm]);

  // Styles (largely reused from previous admin pages)
  const pageHeaderStyle = {
    fontSize: "1.8rem",
    fontWeight: "600",
    color: "#333",
    marginBottom: "25px",
  };
  const sectionTitleStyle = {
    fontSize: "1.2rem",
    fontWeight: "500",
    color: "#444",
    marginBottom: "15px",
    marginTop: "25px",
  };
  const statCardsContainerStyle = {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    marginBottom: "30px",
  };

  const customersSectionHeaderStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "15px",
    marginBottom: "20px",
  };

  const searchBarContainerStyle = {
    display: "flex",
    alignItems: "center",
    border: "1px solid #ddd",
    borderRadius: "6px",
    padding: "0px 0px 0px 10px",
    backgroundColor: "#fff",
    flexGrow: 1,
    maxWidth: "400px",
  };
  const searchInputStyle = {
    border: "none",
    outline: "none",
    padding: "10px",
    fontSize: "0.95rem",
    flexGrow: 1,
  };
  const searchButtonStyle = {
    padding: "10px 12px",
    border: "none",
    backgroundColor: "#1D5F5E",
    color: "white",
    cursor: "pointer",
    borderTopRightRadius: "5px",
    borderBottomRightRadius: "5px",
  };

  const actionButtonStyle = {
    padding: "10px 20px",
    border: "none",
    borderRadius: "6px",
    backgroundColor: "#1D5F5E",
    color: "white",
    cursor: "pointer",
    fontSize: "0.9rem",
    fontWeight: "500",
    display: "flex",
    alignItems: "center",
    gap: "5px",
  };

  const customerTableContainerStyle = {
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
    overflowX: "auto",
    padding: "20px",
  };
  const tableTitleStyle = {
    fontSize: "1.1rem",
    fontWeight: "600",
    color: "#333",
    marginBottom: "15px",
    paddingBottom: "10px",
    borderBottom: "1px solid #eee",
  };
  const tableStyle = { width: "100%", borderCollapse: "collapse" };
  const thStyle = {
    textAlign: "left",
    padding: "12px 10px",
    borderBottom: "2px solid #eee",
    backgroundColor: "#f9f9f9",
    color: "#555",
    fontSize: "0.85rem",
    textTransform: "uppercase",
    fontWeight: "600",
  };
  const tdStyle = {
    textAlign: "left",
    padding: "12px 10px",
    borderBottom: "1px solid #f0f0f0",
    fontSize: "0.9rem",
    color: "#444",
  };
  const evenRowStyle = { backgroundColor: "#F8FEFD" }; // Very light teal/off-white for alternating rows

  return (
    <div>
      <h1 style={pageHeaderStyle}>Customer Management</h1>

      <h2 style={sectionTitleStyle}>Statistical Overview</h2>
      <div style={statCardsContainerStyle}>
        <StatCard
          title="Total Registered Customers"
          value="500+"
          cardColor="#A495FD"
          changeDescription=""
        />
        <StatCard
          title="Active Customers"
          value="300+"
          cardColor="#A495FD"
          changeDescription=""
        />
        <StatCard
          title="New Sign-Ups"
          value="100+"
          cardColor="#5D9CEC"
          changeDescription=""
        />
      </div>

      <h2 style={sectionTitleStyle}>Customers</h2>
      <div style={customersSectionHeaderStyle}>
        <div style={searchBarContainerStyle}>
          <SearchIcon />
          <input
            type="text"
            placeholder="Search customers by name or email..."
            style={searchInputStyle}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            style={searchButtonStyle}
            onClick={() => console.log("Search:", searchTerm)}
          >
            Search
          </button>
        </div>
        <div>
          {" "}
          {/* Only Edit button, no Add button shown in this design */}
          <button
            style={actionButtonStyle}
            onClick={() =>
              alert(
                "Edit Customer functionality (e.g., select a customer first) would be implemented here."
              )
            }
          >
            <EditIcon /> Edit
          </button>
        </div>
      </div>

      <div style={customerTableContainerStyle}>
        <h3 style={tableTitleStyle}>Customer Details</h3>
        {filteredCustomers.length > 0 ? (
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Name</th>
                <th style={thStyle}>Email</th>
                {/* Add more columns if needed, e.g., Join Date, Total Orders */}
              </tr>
            </thead>
            <tbody>
              {filteredCustomers.map((customer, index) => (
                <tr
                  key={customer.id}
                  style={index % 2 === 0 ? {} : evenRowStyle}
                >
                  <td style={tdStyle}>{customer.name}</td>
                  <td style={tdStyle}>{customer.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p style={{ padding: "20px", textAlign: "center", color: "#777" }}>
            No customers found matching your search.
          </p>
        )}
      </div>
    </div>
  );
};

export default AdminCustomerManagementPage;
