// src/components/pages/ProductDetailsPage.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // To get productId from URL
import { useAuth } from "../context/AuthContext"; // For checking login state

import Navbar from "../Navbar";
import Breadcrumbs from "../Breadcrumbs";
import ProductImageGallery from "../ProductImageGallery";
import QuantitySelector from "../QuantitySelector";
import ProductSection from "../ProductSection"; // For similar products
import CallToAction from "../CallToAction";
import Footer from "../Footer";

// ===== IMAGE IMPORTS =====
// Main product images (example for "Pure Bhutanese Honey")
// You would dynamically load these based on productId in a real app
import honeyMain from "../../assets/images/honey.jpg";
import honeyThumb1 from "../../assets/images/honey-thumb1.jpg"; // Create this file if it doesn't exist
import honeyThumb2 from "../../assets/images/honey-thumb2.jpg"; // Create this file if it doesn't exist
import honeyThumb3 from "../../assets/images/honey-thumb3.jpg"; // Create this file if it doesn't exist

// Images for "Similar Products" section
import silkKiraImage from "../../assets/images/silk-kira.jpg";
import maskImage from "../../assets/images/mask.jpg";
import basketsImage from "../../assets/images/baskets.jpg";
// You might need another honey image if the main one is distinct for the product page
// import honeyProductCardImage from '../../assets/images/honey-for-card.jpg';

// ===== MOCK DATA =====
// In a real application, you would fetch this data from an API using the productId
const MOCK_PRODUCT_DATA = {
  "pure-bhutanese-honey": {
    // This ID should match what's used in ProductCard links
    id: "pure-bhutanese-honey",
    category: "Agricultural Products",
    categorySlug: "agriculture", // Used for breadcrumb link
    name: "Pure Bhutanese Honey",
    images: [honeyMain, honeyThumb1, honeyThumb2, honeyThumb3], // Array of image paths/imports
    description:
      "Sourced from the pristine valleys of Bhutan, our Pure Local Honey is a golden delight packed with natural goodness. Harvested from wildflowers and native blossoms, this honey is 100% raw and unprocessed, preserving its rich flavor, nutrients, and health benefits.",
    price: "Nu. 50 /-",
    stock: 20,
  },
  "silk-kira-sample": {
    // Example for another product
    id: "silk-kira-sample",
    category: "Handicrafts & Textiles",
    categorySlug: "handicrafts",
    name: "Exquisite Silk Kira",
    images: [silkKiraImage, silkKiraImage, silkKiraImage], // Replace with actual multiple images
    description:
      "A beautifully handwoven traditional Bhutanese Silk Kira, perfect for special occasions. Features intricate patterns and vibrant colors.",
    price: "Nu. 15,000 /-",
    stock: 5,
  },
  // Add more product details here as needed to test different products
};

const MOCK_SIMILAR_PRODUCTS = [
  // Use a different image for honey in similar products if the main gallery one is too detailed for a card
  {
    id: "pure-bhutanese-honey",
    name: "Pure Bhutanese Honey",
    price: "Nu. 50",
    image: honeyMain,
    description: "Organic golden honey...",
  },
  {
    id: "silk-kira-sample",
    name: "Silk Kira",
    price: "Nu. 15,000",
    image: silkKiraImage,
    description: "Traditional dress...",
  },
  {
    id: "traditional-mask-sample",
    name: "Traditional Masks",
    price: "Nu. 25,000",
    image: maskImage,
    description: "Ceremonial masks...",
  },
  {
    id: "bamboo-baskets-sample",
    name: "Bamboo Baskets",
    price: "Nu. 5,000",
    image: basketsImage,
    description: "Handwoven baskets...",
  },
];
// Ensure the 'id' for similar products matches a potential product detail page ID if they are also clickable

const ProductDetailsPage = () => {
  const { productId } = useParams(); // Get productId from URL (e.g., 'pure-bhutanese-honey')
  const { isLoggedIn, openLoginPopup } = useAuth(); // Get auth state and popup function

  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // Simulate fetching product data based on productId
    const foundProduct = MOCK_PRODUCT_DATA[productId];
    if (foundProduct) {
      setProduct(foundProduct);
      document.title = `${foundProduct.name} - BhutanBuy`; // Set page title
    } else {
      // Handle product not found (e.g., redirect or show a "Not Found" message)
      console.error("Product not found for ID:", productId);
      setProduct(null); // Explicitly set to null if not found
      document.title = "Product Not Found - BhutanBuy";
    }
    setQuantity(1); // Reset quantity when the product (or productId) changes
  }, [productId]); // Re-run effect if productId changes

  // Render loading state or "not found" message if product data isn't available yet
  if (!product) {
    return (
      <>
        <Navbar />
        <div
          className="container"
          style={{
            padding: "40px 20px",
            textAlign: "center",
            minHeight: "calc(100vh - 200px)",
          }}
        >
          <h2>Product Not Found</h2>
          <p>Sorry, we couldn't find the product you're looking for.</p>
          {/* You could add a link back to the products page or homepage here */}
        </div>
        <Footer />
      </>
    );
  }

  // Prepare breadcrumb items once product data is available
  const breadcrumbItems = [
    { label: "Products", link: "/products" }, // Link to your main products overview page
    { label: product.category, link: `/products/${product.categorySlug}` }, // Link to the category page
    { label: product.name }, // Current page, no link
  ];

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1 && newQuantity <= product.stock) {
      setQuantity(newQuantity);
    } else if (newQuantity < 1) {
      setQuantity(1);
    } else if (newQuantity > product.stock) {
      setQuantity(product.stock);
    }
  };

  const handleAddToCart = () => {
    if (!isLoggedIn) {
      openLoginPopup();
    } else {
      // Proceed with actual add to cart logic (mocked for now)
      console.log(
        `User is logged in. Adding ${quantity} of ${product.name} (ID: ${product.id}) to cart.`
      );
      alert(
        `${quantity} of ${product.name} added to cart! (This is a mock action)`
      );
      // Example: dispatchToCart({ type: 'ADD_ITEM', payload: { ...product, quantity } });
    }
  };

  // Inline styles (consider moving to a CSS file for larger applications)
  const pageLayout = {
    display: "flex",
    gap: "40px", // Space between image gallery and product info
    padding: "30px 0", // Vertical padding for the main content section
    flexWrap: "wrap", // Allow columns to wrap on smaller screens
    backgroundColor: "#fff", // White background for the content area
  };
  const leftColumn = {
    flex: "1 1 500px",
    minWidth: "300px",
    maxWidth: "550px",
  }; // Image gallery column
  const rightColumn = { flex: "1 1 400px", minWidth: "300px" }; // Product info column

  const productNameStyle = {
    fontSize: "clamp(1.5rem, 3vw, 1.8rem)",
    fontWeight: "600",
    marginBottom: "15px",
    color: "#333",
  };
  const descriptionStyle = {
    fontSize: "0.95rem",
    lineHeight: 1.6,
    color: "#555",
    marginBottom: "20px",
  };
  const priceStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#00A99D",
    marginBottom: "10px",
  };
  const stockStyle = {
    fontSize: "0.9rem",
    color: product.stock > 0 ? "green" : "red",
    marginBottom: "20px",
    fontWeight: "500",
  };
  const quantityLabelStyle = {
    display: "block",
    marginBottom: "8px",
    fontSize: "0.9rem",
    color: "#444",
    fontWeight: "500",
  };
  const addToCartButtonStyle = {
    padding: "12px 30px",
    backgroundColor: product.stock > 0 ? "#00A99D" : "#ccc", // Teal or gray if out of stock
    color: "white",
    border: `1px solid ${product.stock > 0 ? "#00A99D" : "#ccc"}`,
    borderRadius: "4px",
    cursor: product.stock > 0 ? "pointer" : "not-allowed",
    fontSize: "1rem",
    fontWeight: "500",
    marginTop: "25px",
    width: "100%",
    maxWidth: "300px",
    textAlign: "center",
  };
  const hrStyle = { border: 0, borderTop: "1px solid #eee", margin: "25px 0" };

  return (
    <div className="ProductDetailsPageWrapper">
      <Navbar />
      <main>
        {/* Breadcrumbs section with white background */}
        <div style={{ backgroundColor: "#fff", paddingTop: "1px" }}>
          {" "}
          {/* paddingTop 1px to ensure bg color shows if no content above*/}
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        {/* Main product details content area */}
        <div className="container" style={pageLayout}>
          <div style={leftColumn}>
            <ProductImageGallery images={product.images} />
          </div>
          <div style={rightColumn}>
            <h1 style={productNameStyle}>{product.name}</h1>
            <p style={descriptionStyle}>{product.description}</p>
            <hr style={hrStyle} />
            <div style={priceStyle}>{product.price}</div>
            <div style={stockStyle}>
              Stock:{" "}
              {product.stock > 0
                ? `${product.stock} available`
                : "Out of Stock"}
            </div>
            <hr style={hrStyle} />
            {product.stock > 0 && ( // Only show quantity selector if in stock
              <>
                <label style={quantityLabelStyle} htmlFor="quantity">
                  Quantity:
                </label>
                <QuantitySelector
                  quantity={quantity}
                  onIncrease={() => handleQuantityChange(quantity + 1)}
                  onDecrease={() => handleQuantityChange(quantity - 1)}
                  onChange={(val) => handleQuantityChange(val)} // If direct input is allowed
                  min={1}
                  max={product.stock} // Max quantity based on stock
                />
              </>
            )}
            <button
              style={addToCartButtonStyle}
              onClick={handleAddToCart}
              disabled={product.stock === 0} // Disable button if out of stock
            >
              {product.stock > 0 ? "Add To Cart" : "Out of Stock"}
            </button>
          </div>
        </div>

        {/* Similar Products Section */}
        <ProductSection
          title="Similar Products"
          products={MOCK_SIMILAR_PRODUCTS}
          showAddToCart={true} // Similar products can be added to cart
          showBottomSlider={false} // Typically no slider bar here
        />

        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
