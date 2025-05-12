// src/components/pages/ProductCategoryPage.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // To get category from URL if dynamic

import Navbar from "../Navbar";
import Hero from "../Hero"; // Reusing the standard Hero
import Breadcrumbs from "../Breadcrumbs";
import FilterBar from "../FilterBar";
import ProductSection from "../ProductSection";
import CallToAction from "../CallToAction";
import Footer from "../Footer";

// Image Imports
import heroBgImage from "../../assets/images/hero-bg.jpg"; // Or a category-specific hero
// Assume product images for agricultural items are available
import honeyImage from "../../assets/images/honey.jpg";
import riceBagImage from "../../assets/images/rice-bag.jpg"; // Example new image
import freshVeggiesImage from "../../assets/images/fresh-veggies.jpg"; // Example new image
import spicesImage from "../../assets/images/spices.jpg"; // Example new image
// ... import more images for agricultural products as needed

// Mock Data for "Agricultural Products"
// In a real app, this would come from an API based on the category
const allProducts = {
  agriculture: [
    {
      id: "agri-1",
      name: "Organic Bhutanese Honey",
      price: "Nu. 50",
      description: "Pure, raw honey...",
      image: honeyImage,
    },
    {
      id: "agri-2",
      name: "Red Rice (5kg Bag)",
      price: "Nu. 350",
      description: "Nutritious local red rice...",
      image: riceBagImage,
    },
    {
      id: "agri-3",
      name: "Fresh Farm Vegetables Box",
      price: "Nu. 200",
      description: "Assortment of seasonal veggies...",
      image: freshVeggiesImage,
    },
    {
      id: "agri-4",
      name: "Bhutanese Spice Blend",
      price: "Nu. 120",
      description: "Aromatic traditional spices...",
      image: spicesImage,
    },
    {
      id: "agri-5",
      name: "Local Apples (Per Kg)",
      price: "Nu. 80",
      description: "Crisp and juicy apples...",
      image: honeyImage /* Replace */,
    },
    {
      id: "agri-6",
      name: "Dried Chilies Pack",
      price: "Nu. 150",
      description: "Sun-dried fiery chilies...",
      image: riceBagImage /* Replace */,
    },
    {
      id: "agri-7",
      name: "Buckwheat Flour (1kg)",
      price: "Nu. 90",
      description: "Healthy buckwheat flour...",
      image: freshVeggiesImage /* Replace */,
    },
    {
      id: "agri-8",
      name: "Goji Berries (Dried)",
      price: "Nu. 250",
      description: "Superfood goji berries...",
      image: spicesImage /* Replace */,
    },
    {
      id: "agri-9",
      name: "Pure Bhutanese Honey Jar",
      price: "Nu. 30",
      description: "Pure, raw honey...",
      image: honeyImage,
    },
    {
      id: "agri-10",
      name: "White Rice (5kg Bag)",
      price: "Nu. 300",
      description: "Staple white rice...",
      image: riceBagImage,
    },
    {
      id: "agri-11",
      name: "Organic Leafy Greens",
      price: "Nu. 180",
      description: "Fresh leafy greens...",
      image: freshVeggiesImage,
    },
    {
      id: "agri-12",
      name: "Turmeric Powder",
      price: "Nu. 100",
      description: "Pure turmeric powder...",
      image: spicesImage,
    },
    {
      id: "agri-13",
      name: "Oranges (Per Dozen)",
      price: "Nu. 120",
      description: "Sweet local oranges...",
      image: honeyImage /* Replace */,
    },
    {
      id: "agri-14",
      name: "Mushroom Pack",
      price: "Nu. 220",
      description: "Assorted local mushrooms...",
      image: riceBagImage /* Replace */,
    },
    {
      id: "agri-15",
      name: "Corn Meal (1kg)",
      price: "Nu. 70",
      description: "Ground corn meal...",
      image: freshVeggiesImage /* Replace */,
    },
    {
      id: "agri-16",
      name: "Cardamom Pods",
      price: "Nu. 300",
      description: "Aromatic cardamom pods...",
      image: spicesImage /* Replace */,
    },
  ],
  // ... other categories data if needed for dynamic loading
};

const ProductCategoryPage = () => {
  // For a dynamic page, you might get the category name from URL params
  // const { categoryName } = useParams();
  // For this static example, we'll hardcode to "Agriculture"
  const categoryName = "Agriculture"; // Or derive from URL
  const categoryDisplayName = "Agricultural Products"; // For display

  const [productsToShow, setProductsToShow] = useState([]);

  useEffect(() => {
    // Simulate fetching products for this category
    // In a real app, you'd fetch from an API or filter a larger dataset
    if (categoryName.toLowerCase() === "agriculture") {
      setProductsToShow(allProducts.agriculture);
    } else {
      setProductsToShow([]); // Handle other categories or show "not found"
    }
  }, [categoryName]);

  const breadcrumbItems = [
    { label: "Products", link: "/products" }, // Link to your main products page
    { label: categoryDisplayName }, // Current page, no link
  ];

  const pageTitle = categoryDisplayName;

  return (
    <div className="ProductCategoryPageWrapper">
      <Navbar />
      <main>
        <Hero heroBackgroundImage={heroBgImage} />{" "}
        {/* Or a specific hero for categories */}
        <div style={{ backgroundColor: "#fff", paddingTop: "10px" }}>
          {" "}
          {/* White background for breadcrumbs and filters */}
          <Breadcrumbs items={breadcrumbItems} />
          <FilterBar currentCategoryName={categoryName} />
        </div>
        {/* ProductSection will display the products for this category */}
        <ProductSection
          title={pageTitle} // e.g., "Agricultural Products"
          products={productsToShow}
          showAddToCart={true} // All products on this page can be added to cart
          showBottomSlider={false} // No bottom slider for category listings
        />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default ProductCategoryPage;
