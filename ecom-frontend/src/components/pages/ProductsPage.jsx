// src/components/pages/ProductsPage.jsx
import React from "react";
import Navbar from "../Navbar";
import Hero from "../Hero";
import CategoriesSection from "../CategoriesSection";
import ProductSection from "../ProductSection";
import CallToAction from "../CallToAction";
import Footer from "../Footer";

// Image Imports (Corrected paths relative to src/components/pages/ProductsPage.jsx)
// Hero Image (can be the same as homepage or a different one if desired)
import heroBgImage from "../../assets/images/hero-bg.jpg";

// Category Images
import agriculturalImage from "../../assets/images/agricultural.jpg";
import handicraftsImage from "../../assets/images/handicrafts.jpg"; // Assuming 'Handicrafts & Textiles' uses this
import processedFoodsImage from "../../assets/images/processed-foods.jpg";
import naturalWellnessImage from "../../assets/images/natural-wellness.jpg";
import homeLifestyleImage from "../../assets/images/home-lifestyle.jpg";
import industrialSpecialtyImage from "../../assets/images/industrial-specialty.jpg";

// Product Images (You'll need a good set for 8 featured and 8 discount items)
// For this example, I'll reuse some and you can replace with actual unique product images.
import honeyImage from "../../assets/images/honey.jpg";
import silkKiraImage from "../../assets/images/silk-kira.jpg";
import maskImage from "../../assets/images/mask.jpg";
import basketsImage from "../../assets/images/baskets.jpg";
// Add more unique product image imports here as needed
// import teaImage from '../../assets/images/tea.jpg';
// import incenseImage from '../../assets/images/incense.jpg';
// import potteryImage from '../../assets/images/pottery.jpg';
// import woodCarvingImage from '../../assets/images/wood-carving.jpg';

// Data for Products Page
const categoriesData = [
  { id: "cat-agri", name: "Agricultural Products", image: agriculturalImage },
  { id: "cat-handi", name: "Handicrafts & Textiles", image: handicraftsImage }, // Updated name from image
  {
    id: "cat-food",
    name: "Processed Foods & Beverages",
    image: processedFoodsImage,
  },
  {
    id: "cat-well",
    name: "Natural & Wellness Products",
    image: naturalWellnessImage,
  },
  { id: "cat-life", name: "Home & Lifestyle", image: homeLifestyleImage },
  {
    id: "cat-ind",
    name: "Industrial & Specialty",
    image: industrialSpecialtyImage,
  },
];

// 8 items for "Featured Products" (2 rows of 4)
const featuredProductsPageData = [
  {
    id: "pp-feat-1",
    name: "Pure Bhutanese Honey",
    price: "Nu. 50",
    description: "Organic golden honey from pristine valleys...",
    image: honeyImage,
  },
  {
    id: "pp-feat-2",
    name: "Exquisite Silk Kira",
    price: "Nu. 15,000",
    description: "Handwoven traditional attire for women...",
    image: silkKiraImage,
  },
  {
    id: "pp-feat-3",
    name: "Artisan Crafted Mask",
    price: "Nu. 25,000",
    description: "Detailed ceremonial mask, a cultural icon...",
    image: maskImage,
  },
  {
    id: "pp-feat-4",
    name: "Durable Bamboo Baskets",
    price: "Nu. 5,000",
    description: "Set of 3 versatile, eco-friendly baskets...",
    image: basketsImage,
  },
  {
    id: "pp-feat-5",
    name: "Spiced Bhutanese Tea",
    price: "Nu. 70",
    description: "Aromatic and flavorful local tea blend...",
    image: honeyImage /* Replace with actual teaImage */,
  },
  {
    id: "pp-feat-6",
    name: "Woven Woolen Scarf",
    price: "Nu. 1,800",
    description: "Soft, warm, and dyed with natural colors...",
    image: silkKiraImage /* Replace */,
  },
  {
    id: "pp-feat-7",
    name: "Handmade Clay Pottery",
    price: "Nu. 950",
    description: "Unique, locally sourced clay pottery items...",
    image: maskImage /* Replace with potteryImage */,
  },
  {
    id: "pp-feat-8",
    name: "Natural Incense Sticks",
    price: "Nu. 200",
    description: "Calming aroma, made from natural herbs...",
    image: basketsImage /* Replace with incenseImage */,
  },
];

// 8 items for "Discounts and Promotions" (2 rows of 4)
const discountProductsData = [
  {
    id: "pp-disc-1",
    name: "Pure Bhutanese Honey (Promo)",
    originalPrice: "Nu. 50",
    price: "Nu. 30",
    description: "Special offer on our finest golden honey...",
    image: honeyImage,
  },
  {
    id: "pp-disc-2",
    name: "Silk Kira (Sale)",
    originalPrice: "Nu. 15,000",
    price: "Nu. 13,000",
    description: "Discounted traditional attire, limited stock...",
    image: silkKiraImage,
  },
  {
    id: "pp-disc-3",
    name: "Traditional Masks (Offer)",
    originalPrice: "Nu. 25,000",
    price: "Nu. 20,000",
    description: "Limited time price drop on selected masks...",
    image: maskImage,
  },
  {
    id: "pp-disc-4",
    name: "Bamboo Baskets (Set Deal)",
    originalPrice: "Nu. 5,000",
    price: "Nu. 4,000",
    description: "Great value set of durable bamboo baskets...",
    image: basketsImage,
  },
  {
    id: "pp-disc-5",
    name: "Herbal Soap Bar (Discount)",
    originalPrice: "Nu. 100",
    price: "Nu. 75",
    description: "Natural cleansing soap, special discount...",
    image: honeyImage /* Replace */,
  },
  {
    id: "pp-disc-6",
    name: "Hand-painted Scroll (Promo)",
    originalPrice: "Nu. 4,500",
    price: "Nu. 3,800",
    description: "Beautiful Thangka scroll, promotional price...",
    image: silkKiraImage /* Replace */,
  },
  {
    id: "pp-disc-7",
    name: "Bhutanese Chili Flakes (Sale)",
    originalPrice: "Nu. 120",
    price: "Nu. 90",
    description: "Authentic spicy chili flakes, now cheaper...",
    image: maskImage /* Replace */,
  },
  {
    id: "pp-disc-8",
    name: "Wooden Wall Decor (Deal)",
    originalPrice: "Nu. 2,200",
    price: "Nu. 1,900",
    description: "Hand-carved wooden decor for your home...",
    image: basketsImage /* Replace with woodCarvingImage */,
  },
];

const ProductsPage = () => {
  return (
    <div className="ProductsPageWrapper">
      {" "}
      {/* Optional wrapper for page-specific styles */}
      <Navbar />
      <main>
        <Hero heroBackgroundImage={heroBgImage} />{" "}
        {/* You can use a different hero image if desired */}
        <CategoriesSection categories={categoriesData} />
        <ProductSection
          title="Featured Products"
          products={featuredProductsPageData}
          showAddToCart={true} // All product cards on this page show "Add to Cart"
          showBottomSlider={false} // No slider bar for product sections on this page
        />
        <ProductSection
          title="Discounts and Promotions"
          products={discountProductsData}
          showAddToCart={true} // All product cards on this page show "Add to Cart"
          showBottomSlider={false} // No slider bar for product sections on this page
        />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default ProductsPage;
