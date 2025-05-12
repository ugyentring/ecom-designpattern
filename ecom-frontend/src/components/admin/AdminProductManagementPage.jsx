// src/components/admin/AdminProductManagementPage.jsx
import React, { useState, useEffect } from "react";
// You might reuse StatCard if the styling is similar enough or create a new one.
// For this example, let's assume StatCard can be adapted or we'll style directly.
import StatCard from "./StatCard"; // Assuming StatCard is in the same admin folder

// Placeholder icons - replace with actual icons
const SearchIcon = () => <span>🔍</span>;
const AddIcon = () => <span>➕</span>;
const EditIcon = () => <span>✏️</span>;

// Mock data for the product table
const mockProducts = [
  {
    id: "p1",
    name: "Honey",
    price: "Nu. 50",
    stock: 10,
    description: "Sourced from pristine valleys of Bhutan",
  },
  {
    id: "p2",
    name: "Kira",
    price: "Nu. 15,000",
    stock: 5,
    description: "Traditional dress for Bhutanese women",
  },
  {
    id: "p3",
    name: "Basket",
    price: "Nu. 500",
    stock: 3,
    description: "Handwoven bamboo basket, durable",
  },
  {
    id: "p4",
    name: "Honey",
    price: "Nu. 50",
    stock: 3,
    description: "Organic, raw, and unprocessed honey",
  }, // Duplicate name example
  {
    id: "p5",
    name: "Honey",
    price: "Nu. 50",
    stock: 10,
    description: "Wildflower honey from remote regions",
  },
  {
    id: "p6",
    name: "Basket",
    price: "Nu. 500",
    stock: 5,
    description: "Decorative and functional baskets",
  },
  {
    id: "p7",
    name: "Basket",
    price: "Nu. 500",
    stock: 3,
    description: "Small utility baskets for storage",
  },
  {
    id: "p8",
    name: "Kira",
    price: "Nu. 15,000",
    stock: 3,
    description: "Silk Kira with intricate patterns",
  },
  {
    id: "p9",
    name: "Kira",
    price: "Nu. 15,000",
    stock: 4,
    description: "Cotton Kira for daily wear",
  },
  // Add more products as needed
];

const AdminProductManagementPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(mockProducts);

  useEffect(() => {
    document.title = "Product Management - Admin";
  }, []);

  useEffect(() => {
    // Basic search filter (case-insensitive)
    const results = mockProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(results);
  }, [searchTerm]);

  // Styles
  const pageHeaderStyle = {
    fontSize: "1.8rem",
    fontWeight: "600",
    color: "#333",
    marginBottom: "25px", // Increased bottom margin
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

  const productsSectionHeaderStyle = {
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
    padding: "0px 0px 0px 10px", // Padding for icon
    backgroundColor: "#fff",
    flexGrow: 1, // Allow search bar to take available space
    maxWidth: "400px", // Max width for search bar
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
    backgroundColor: "#1D5F5E", // Admin sidebar color
    color: "white",
    cursor: "pointer",
    borderTopRightRadius: "5px",
    borderBottomRightRadius: "5px",
  };

  const actionButtonsContainerStyle = {
    display: "flex",
    gap: "10px",
  };
  const actionButtonStyle = {
    padding: "10px 20px",
    border: "none",
    borderRadius: "6px",
    backgroundColor: "#1D5F5E", // Admin sidebar color
    color: "white",
    cursor: "pointer",
    fontSize: "0.9rem",
    fontWeight: "500",
    display: "flex",
    alignItems: "center",
    gap: "5px",
  };

  const productTableContainerStyle = {
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
    overflowX: "auto", // Allow horizontal scrolling for table on small screens
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
  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
  };
  const thStyle = {
    textAlign: "left",
    padding: "12px 10px",
    borderBottom: "2px solid #eee",
    backgroundColor: "#f9f9f9", // Light background for headers
    color: "#555",
    fontSize: "0.85rem",
    textTransform: "uppercase",
    fontWeight: "600",
  };
  const tdStyle = {
    textAlign: "left",
    padding: "12px 10px",
    borderBottom: "1px solid #f0f0f0", // Lighter border for rows
    fontSize: "0.9rem",
    color: "#444",
  };
  const evenRowStyle = {
    // For alternating row colors
    backgroundColor: "#F8FEFD", // Very light teal/off-white
  };

  return (
    <div>
      <h1 style={pageHeaderStyle}>Product Management</h1>

      <h2 style={sectionTitleStyle}>Statistical Overview</h2>
      <div style={statCardsContainerStyle}>
        <StatCard
          title="Total Products"
          value="500" // Static value from image
          // percentageChange={0} // No change shown for this one in image
          changeDescription="" // No change description
          cardColor="#A495FD" // Light purple
        />
        <StatCard
          title="Active Products"
          value="300"
          changeDescription=""
          cardColor="#A495FD" // Same purple as Total Products in image
        />
        <StatCard
          title="Out of Stock Products"
          value="200"
          changeDescription=""
          cardColor="#5D9CEC" // Blue
        />
      </div>

      <h2 style={sectionTitleStyle}>Products</h2>
      <div style={productsSectionHeaderStyle}>
        <div style={searchBarContainerStyle}>
          <SearchIcon />
          <input
            type="text"
            placeholder="Search products..."
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
        <div style={actionButtonsContainerStyle}>
          <button
            style={actionButtonStyle}
            onClick={() => alert("Add Product clicked!")}
          >
            <AddIcon /> Add Product
          </button>
          <button
            style={actionButtonStyle}
            onClick={() => alert("Edit Product clicked!")}
          >
            <EditIcon /> Edit
          </button>
        </div>
      </div>

      <div style={productTableContainerStyle}>
        <h3 style={tableTitleStyle}>Product details</h3>
        {filteredProducts.length > 0 ? (
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Product Name</th>
                <th style={thStyle}>Price</th>
                <th style={thStyle}>Stock</th>
                <th style={{ ...thStyle, minWidth: "300px" }}>
                  Description
                </th>{" "}
                {/* Give more space for description */}
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product, index) => (
                <tr
                  key={product.id}
                  style={index % 2 === 0 ? {} : evenRowStyle}
                >
                  <td style={tdStyle}>{product.name}</td>
                  <td style={tdStyle}>{product.price}</td>
                  <td style={tdStyle}>{product.stock}</td>
                  <td style={tdStyle}>{product.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p style={{ padding: "20px", textAlign: "center", color: "#777" }}>
            No products found matching your search.
          </p>
        )}
      </div>
    </div>
  );
};

export default AdminProductManagementPage;
