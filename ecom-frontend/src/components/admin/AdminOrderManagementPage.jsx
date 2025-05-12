// src/components/admin/AdminOrderManagementPage.jsx
import React, { useState, useEffect } from "react";
import StatCard from "./StatCard"; // Reuse StatCard or create a similar one

// Placeholder icons
const SearchIcon = () => <span>🔍</span>;

// Mock data for the orders table
const mockOrders = [
  {
    id: "1234567890",
    date: "11/04/2025",
    productName: "Honey",
    customer: "Sonam",
    quantity: 2,
    status: "Pending",
  },
  {
    id: "4567890123",
    date: "11/04/2025",
    productName: "Kira",
    customer: "Tshering",
    quantity: 4,
    status: "Pending",
  },
  {
    id: "4567898765",
    date: "11/04/2025",
    productName: "Basket",
    customer: "Pema",
    quantity: 2,
    status: "Delivered",
  },
  {
    id: "3456789876",
    date: "11/04/2025",
    productName: "Honey",
    customer: "Sonam",
    quantity: 1,
    status: "Completed",
  },
  {
    id: "4567654321",
    date: "11/04/2025",
    productName: "Honey",
    customer: "Tshering",
    quantity: 1,
    status: "Delivered",
  },
  {
    id: "4565456789",
    date: "11/04/2025",
    productName: "Kira",
    customer: "Pema",
    quantity: 2,
    status: "Pending",
  },
  {
    id: "3456787654",
    date: "11/04/2025",
    productName: "Basket",
    customer: "Sonam",
    quantity: 5,
    status: "Completed",
  },
  {
    id: "9876543210",
    date: "10/04/2025",
    productName: "Mask",
    customer: "Karma",
    quantity: 1,
    status: "Shipped",
  }, // Added for shipped example
  {
    id: "1122334455",
    date: "10/04/2025",
    productName: "Spices",
    customer: "Deki",
    quantity: 3,
    status: "Pending",
  },
];

// Helper function to get status color
const getStatusColor = (status) => {
  switch (status.toLowerCase()) {
    case "pending":
      return "#E67E22"; // Orange
    case "shipped":
      return "#3498DB"; // Blue (from stat card)
    case "delivered":
      return "#2ECC71"; // Green
    case "completed":
      return "#1ABC9C"; // Teal (from stat card for delivered)
    case "cancelled":
      return "#E74C3C"; // Red
    default:
      return "#7F8C8D"; // Grey
  }
};

const AdminOrderManagementPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("All Applications"); // 'All Applications', 'Pending', 'Delivered', 'Completed'
  const [filteredOrders, setFilteredOrders] = useState(mockOrders);

  useEffect(() => {
    document.title = "Order Management - Admin";
  }, []);

  useEffect(() => {
    let results = mockOrders;

    // Filter by active tab
    if (activeFilter !== "All Applications") {
      results = results.filter(
        (order) => order.status.toLowerCase() === activeFilter.toLowerCase()
      );
    }

    // Filter by search term (on order ID, product name, or customer name)
    if (searchTerm) {
      results = results.filter(
        (order) =>
          order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
          order.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          order.customer.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setFilteredOrders(results);
  }, [searchTerm, activeFilter]);

  // Styles
  const pageHeaderStyle = {
    /* ... same as ProductManagement ... */ fontSize: "1.8rem",
    fontWeight: "600",
    color: "#333",
    marginBottom: "25px",
  };
  const sectionTitleStyle = {
    /* ... same as ProductManagement ... */ fontSize: "1.2rem",
    fontWeight: "500",
    color: "#444",
    marginBottom: "15px",
    marginTop: "25px",
  };
  const statCardsContainerStyle = {
    /* ... same as ProductManagement ... */ display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    marginBottom: "30px",
  };

  const ordersControlContainerStyle = {
    display: "flex",
    flexDirection: "column", // Stack search and tabs
    gap: "20px",
    marginBottom: "20px",
  };

  const searchBarContainerStyle = {
    /* ... same as ProductManagement ... */ display: "flex",
    alignItems: "center",
    border: "1px solid #ddd",
    borderRadius: "6px",
    padding: "0px 0px 0px 10px",
    backgroundColor: "#fff",
    maxWidth: "450px" /* Allow it to be wider */,
  };
  const searchInputStyle = {
    /* ... same as ProductManagement ... */ border: "none",
    outline: "none",
    padding: "10px",
    fontSize: "0.95rem",
    flexGrow: 1,
  };
  const searchButtonStyle = {
    /* ... same as ProductManagement ... */ padding: "10px 12px",
    border: "none",
    backgroundColor: "#1D5F5E",
    color: "white",
    cursor: "pointer",
    borderTopRightRadius: "5px",
    borderBottomRightRadius: "5px",
  };

  const filterTabsContainerStyle = {
    display: "flex",
    backgroundColor: "#EAECEE", // Light grey background for the tab bar
    borderRadius: "8px",
    overflow: "hidden", // To clip corners of buttons
    maxWidth: "fit-content", // Or adjust width as needed
    border: "1px solid #D5DBDB",
  };
  const filterTabButtonStyle = (isActive) => ({
    padding: "12px 25px",
    border: "none",
    // borderRight: '1px solid #D5DBDB', // Separator, remove for last child
    cursor: "pointer",
    fontSize: "0.9rem",
    fontWeight: isActive ? "600" : "500",
    backgroundColor: isActive ? "#1D5F5E" : "transparent", // Active tab is dark teal
    color: isActive ? "white" : "#555",
    transition: "background-color 0.2s, color 0.2s",
    flexGrow: 1, // Tabs share space
    textAlign: "center",
  });

  // Remove borderRight for the last tab button
  const lastFilterTabButtonStyle = (isActive) => ({
    ...filterTabButtonStyle(isActive),
    borderRight: "none",
  });

  const productTableContainerStyle = {
    /* ... same as ProductManagement ... */ backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
    overflowX: "auto",
    padding: "20px",
  };
  const tableTitleStyle = {
    /* ... same as ProductManagement ... */ fontSize: "1.1rem",
    fontWeight: "600",
    color: "#333",
    marginBottom: "15px",
    paddingBottom: "10px",
    borderBottom: "1px solid #eee",
  };
  const tableStyle = {
    /* ... same as ProductManagement ... */ width: "100%",
    borderCollapse: "collapse",
  };
  const thStyle = {
    /* ... same as ProductManagement ... */ textAlign: "left",
    padding: "12px 10px",
    borderBottom: "2px solid #eee",
    backgroundColor: "#f9f9f9",
    color: "#555",
    fontSize: "0.85rem",
    textTransform: "uppercase",
    fontWeight: "600",
  };
  const tdStyle = {
    /* ... same as ProductManagement ... */ textAlign: "left",
    padding: "12px 10px",
    borderBottom: "1px solid #f0f0f0",
    fontSize: "0.9rem",
    color: "#444",
  };
  const evenRowStyle = {
    /* ... same as ProductManagement ... */ backgroundColor: "#F8FEFD",
  };

  const statusCellStyle = (status) => ({
    ...tdStyle,
    color: getStatusColor(status),
    fontWeight: "500",
  });

  const filterOptions = [
    "All Applications",
    "Pending",
    "Delivered",
    "Completed",
  ]; // 'Shipped' could be another

  return (
    <div>
      <h1 style={pageHeaderStyle}>Order Management</h1>

      <h2 style={sectionTitleStyle}>Statistical Overview</h2>
      <div style={statCardsContainerStyle}>
        <StatCard
          title="Total Orders"
          value="1000"
          cardColor="#A495FD"
          changeDescription=""
        />
        <StatCard
          title="Pending Orders"
          value="20"
          cardColor="#A495FD"
          changeDescription=""
        />
        <StatCard
          title="Shipped Orders"
          value="600"
          cardColor="#5D9CEC"
          changeDescription=""
        />
        <StatCard
          title="Delivered Orders"
          value="380"
          cardColor="#5D9CEC"
          changeDescription=""
        />
      </div>

      <h2 style={sectionTitleStyle}>Orders</h2>
      <div style={ordersControlContainerStyle}>
        <div style={searchBarContainerStyle}>
          <SearchIcon />
          <input
            type="text"
            placeholder="Search orders by ID, product, or customer..."
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
        <div style={filterTabsContainerStyle}>
          {filterOptions.map((filter, index) => (
            <button
              key={filter}
              style={
                index === filterOptions.length - 1
                  ? lastFilterTabButtonStyle(activeFilter === filter)
                  : filterTabButtonStyle(activeFilter === filter)
              }
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div style={productTableContainerStyle}>
        <h3 style={tableTitleStyle}>Application Details</h3>
        {filteredOrders.length > 0 ? (
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Order ID</th>
                <th style={thStyle}>Date</th>
                <th style={thStyle}>Name</th> {/* Product Name */}
                <th style={thStyle}>Customer</th>
                <th style={thStyle}>Quantity</th>
                <th style={thStyle}>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order, index) => (
                <tr key={order.id} style={index % 2 === 0 ? {} : evenRowStyle}>
                  <td style={tdStyle}>{order.id}</td>
                  <td style={tdStyle}>{order.date}</td>
                  <td style={tdStyle}>{order.productName}</td>
                  <td style={tdStyle}>{order.customer}</td>
                  <td style={{ ...tdStyle, textAlign: "center" }}>
                    {order.quantity}
                  </td>
                  <td style={statusCellStyle(order.status)}>{order.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p style={{ padding: "20px", textAlign: "center", color: "#777" }}>
            No orders found matching your criteria.
          </p>
        )}
      </div>
    </div>
  );
};

export default AdminOrderManagementPage;
