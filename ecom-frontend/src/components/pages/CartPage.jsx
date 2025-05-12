// src/components/pages/CartPage.jsx
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import CartItem from "../CartItem"; // Import the CartItem component

// Mock Data - In a real app, this would come from a global state (Context/Redux) or local storage
import honeyImage from "../../assets/images/honey.jpg"; // Ensure you have this image

const initialCartItems = [
  {
    id: "cart-item-1", // Unique ID for the cart item itself
    productId: "21344384753831", // Product's actual ID
    name: "Pure Bhutanese Honey",
    image: honeyImage,
    shortDescription:
      "100% raw and unprocessed, preserving its rich flavor, nutrients, and health benefits.",
    price: 50.0, // Store price as a number for calculations
    quantity: 1,
    stock: 10, // Example stock
  },
  {
    id: "cart-item-2",
    productId: "21344384753832", // Different product ID
    name: "Pure Bhutanese Honey", // Can be the same product added twice, or different
    image: honeyImage,
    shortDescription:
      "Another jar of our finest honey, great for gifting or personal use.",
    price: 50.0,
    quantity: 1, // Initial quantity for the second instance
    stock: 5,
  },
  // Add more mock items if needed
];

const CartPage = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [deliveryMode, setDeliveryMode] = useState("pickup"); // 'pickup' or 'home'
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "My Cart - BhutanBuy";
  }, []);

  const handleUpdateQuantity = (itemId, newQuantity) => {
    setCartItems(
      cartItems.map(
        (item) =>
          item.id === itemId
            ? { ...item, quantity: Math.max(1, newQuantity) }
            : item // Ensure quantity is at least 1
      )
    );
  };

  const handleRemoveItem = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const subtotal = calculateSubtotal();
  const deliveryCost = deliveryMode === "home" ? 50 : 0; // Example: Nu. 50 for home delivery
  const totalAmount = subtotal + deliveryCost;

  // Styles
  const pageStyle = {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  };
  const mainContentStyle = {
    flexGrow: 1,
    backgroundColor: "#f9f9f9",
    padding: "20px 0",
  };
  const cartContainerStyle = {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
  };
  const cartHeaderStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "25px",
    paddingBottom: "15px",
    borderBottom: "1px solid #eee",
  };
  const titleStyle = { fontSize: "1.8rem", fontWeight: "600", color: "#333" };
  const continueShoppingBtnStyle = {
    padding: "10px 20px",
    border: "1.5px solid #00A99D",
    borderRadius: "25px", // Pill shape
    backgroundColor: "transparent",
    color: "#00A99D",
    fontSize: "0.9rem",
    fontWeight: "500",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    textDecoration: "none",
  };

  const tableHeaderStyle = {
    display: "flex",
    padding: "10px 0",
    borderBottom: "2px solid #ddd",
    color: "#555",
    fontWeight: "bold",
    fontSize: "0.9rem",
    textTransform: "uppercase",
    gap: "15px",
  };
  const thProduct = { flex: "2.5", textAlign: "left", paddingLeft: "10px" };
  const thShared = { flex: "1", textAlign: "center" };
  const thQty = { flex: "1.5", textAlign: "center" };
  const thRemove = { flex: "0.5", textAlign: "right", paddingRight: "10px" };

  const deliveryAndSummaryStyle = {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "30px",
    gap: "30px",
    flexWrap: "wrap", // Allow wrapping
    padding: "25px",
    backgroundColor: "#fdfdfd",
    border: "1px solid #eee",
    borderRadius: "8px",
  };
  const deliveryOptionsStyle = { flex: "1 1 300px", minWidth: "280px" };
  const deliveryTitleStyle = {
    fontSize: "1.1rem",
    fontWeight: "600",
    marginBottom: "15px",
  };
  const deliveryOptionStyle = {
    display: "flex",
    alignItems: "center",
    marginBottom: "12px",
    cursor: "pointer",
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid transparent",
  };
  const deliveryOptionSelectedStyle = {
    ...deliveryOptionStyle,
    borderColor: "#00A99D",
    backgroundColor: "#e6f7f6",
  };
  const radioStyle = { marginRight: "10px", accentColor: "#00A99D" };
  const deliveryLabelStyle = { fontSize: "0.95rem" };
  const deliveryFeeStyle = { fontWeight: "bold", marginLeft: "5px" };
  const deliveryAddressStyle = {
    fontSize: "0.8rem",
    color: "#777",
    marginLeft: "28px",
  }; // Indent under radio

  const orderSummaryStyle = {
    flex: "1 1 300px",
    minWidth: "280px",
    borderLeft: "1px solid #eee",
    paddingLeft: "30px",
  };
  const summaryRowStyle = {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
    fontSize: "0.95rem",
  };
  const summaryTotalRowStyle = {
    ...summaryRowStyle,
    fontWeight: "bold",
    fontSize: "1.1rem",
    paddingTop: "10px",
    borderTop: "1px solid #eee",
  };
  const checkoutBtnStyle = {
    width: "100%",
    padding: "14px",
    backgroundColor: "#00A99D",
    color: "white",
    border: "none",
    borderRadius: "6px",
    fontSize: "1.1rem",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "20px",
  };

  return (
    <div style={pageStyle}>
      <Navbar />
      <main style={mainContentStyle}>
        <div style={cartContainerStyle}>
          <div style={cartHeaderStyle}>
            <h1 style={titleStyle}>My Cart</h1>
            <Link to="/products" style={continueShoppingBtnStyle}>
              <span
                style={{ transform: "rotate(180deg)", display: "inline-block" }}
              >
                ➔
              </span>{" "}
              Continue Shopping
            </Link>
          </div>

          {cartItems.length === 0 ? (
            <p
              style={{
                textAlign: "center",
                padding: "30px 0",
                fontSize: "1.1rem",
              }}
            >
              Your cart is empty.
            </p>
          ) : (
            <>
              {/* Cart Table Headers */}
              <div style={tableHeaderStyle}>
                <div style={thProduct}>Product</div>
                <div style={thShared}>Price</div>
                <div style={thQty}>Qty</div>
                <div style={thShared}>Total</div>
                <div style={thRemove}></div> {/* For remove button column */}
              </div>
              {/* Cart Items */}
              <div>
                {cartItems.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onUpdateQuantity={handleUpdateQuantity}
                    onRemoveItem={handleRemoveItem}
                  />
                ))}
              </div>
            </>
          )}

          {cartItems.length > 0 && (
            <div style={deliveryAndSummaryStyle}>
              <div style={deliveryOptionsStyle}>
                <h3 style={deliveryTitleStyle}>Choose delivery mode:</h3>
                <label
                  htmlFor="pickup"
                  style={
                    deliveryMode === "pickup"
                      ? deliveryOptionSelectedStyle
                      : deliveryOptionStyle
                  }
                  onClick={() => setDeliveryMode("pickup")}
                >
                  <input
                    type="radio"
                    id="pickup"
                    name="deliveryMode"
                    value="pickup"
                    checked={deliveryMode === "pickup"}
                    onChange={(e) => setDeliveryMode(e.target.value)}
                    style={radioStyle}
                  />
                  <span style={deliveryLabelStyle}>
                    Store pickup - <span style={deliveryFeeStyle}>FREE</span>
                  </span>
                </label>
                <label
                  htmlFor="homeDelivery"
                  style={
                    deliveryMode === "home"
                      ? deliveryOptionSelectedStyle
                      : deliveryOptionStyle
                  }
                  onClick={() => setDeliveryMode("home")}
                >
                  <input
                    type="radio"
                    id="homeDelivery"
                    name="deliveryMode"
                    value="home"
                    checked={deliveryMode === "home"}
                    onChange={(e) => setDeliveryMode(e.target.value)}
                    style={radioStyle}
                  />
                  <span style={deliveryLabelStyle}>
                    Delivery or home (24 hrs)
                  </span>
                </label>
                <div style={deliveryAddressStyle}>
                  Thimphu, Thim Throm, 11001
                </div>
              </div>

              <div style={orderSummaryStyle}>
                <h3 style={deliveryTitleStyle}>Order Summary</h3>
                <div style={summaryRowStyle}>
                  <span>Subtotal</span>
                  <span>Nu. {subtotal.toFixed(2)}</span>
                </div>
                <div style={summaryRowStyle}>
                  <span>Delivery</span>
                  <span>
                    {deliveryCost === 0
                      ? "FREE"
                      : `Nu. ${deliveryCost.toFixed(2)}`}
                  </span>
                </div>
                <div style={summaryTotalRowStyle}>
                  <span>TOTAL</span>
                  <span>Nu. {totalAmount.toFixed(2)}</span>
                </div>
                <button
                  style={checkoutBtnStyle}
                  onClick={() =>
                    alert(
                      `Proceeding to checkout with Nu. ${totalAmount.toFixed(
                        2
                      )} (Mock)`
                    )
                  }
                >
                  Checkout Nu. {totalAmount.toFixed(2)}
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;
