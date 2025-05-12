// src/components/pages/HomePage.jsx
import React from "react";
import Navbar from "../Navbar";
import Hero from "../Hero";
import AboutIntro from "../AboutIntro";
import ProductSection from "../ProductSection";
import FAQSection from "../FAQSection";
import CallToAction from "../CallToAction";
import Footer from "../Footer";

// Image Imports (Corrected paths relative to src/components/pages/HomePage.jsx)
import heroBgImage from "../../assets/images/hero-bg.jpg";
import honeyImage from "../../assets/images/honey.jpg";
import silkKiraImage from "../../assets/images/silk-kira.jpg";
import maskImage from "../../assets/images/mask.jpg";
import basketsImage from "../../assets/images/baskets.jpg";
import bhutanDzongImage from "../../assets/images/bhutan-dzong.jpg"; // Image for "Bringing You the Best of Bhutan"

// Mock Data (as per the homepage design)
const featuredProductsData = [
  {
    id: "hp-feat-1", // Unique ID for homepage featured products
    name: "Pure Bhutanese Honey",
    price: "Nu. 50",
    description:
      "Sourced from the pristine valleys of Bhutan, our Pure Local Honey is a golden delight packed...",
    image: honeyImage,
  },
  {
    id: "hp-feat-2",
    name: "Silk Kira",
    price: "Nu. 15,000",
    description:
      "If you mean the Bhutanese kira, it is the traditional dress worn by Bhutanese women...",
    image: silkKiraImage,
  },
  {
    id: "hp-feat-3",
    name: "Traditional Masks",
    price: "Nu. 25,000",
    description:
      'Traditional masks in Bhutan, known as "Raksha" or "Boem", are an essential part of the...',
    image: maskImage,
  },
  {
    id: "hp-feat-4",
    name: "Bamboo Baskets",
    price: "Nu. 5,000",
    description:
      "Bangchung is a traditional Bhutanese woven bamboo basket, known for its durability...",
    image: basketsImage,
  },
];

const trendingProductsData = [
  {
    id: "hp-trend-1", // Unique ID for homepage trending products
    name: "Pure Bhutanese Honey",
    // Price is not shown for trending in the image, but description is
    description:
      "Sourced from the pristine valleys of Bhutan, our Pure Local Honey is a golden delight packed...",
    image: honeyImage,
  },
  {
    id: "hp-trend-2",
    name: "Silk Kira",
    description:
      "If you mean the Bhutanese kira, it is the traditional dress worn by Bhutanese women...",
    image: silkKiraImage,
  },
  {
    id: "hp-trend-3",
    name: "Traditional Masks",
    description:
      'Traditional masks in Bhutan, known as "Raksha" or "Boem", are an essential part of the...',
    image: maskImage,
  },
];

const faqData = [
  {
    id: "hp-faq-1",
    question: "Where do the products come from?",
    answer:
      "All our products are sourced directly from local farmers, artisans, and certified producers across Bhutan, ensuring authenticity and quality.",
  },
  {
    id: "hp-faq-2",
    question: "How do I know if a product is authentic?",
    answer:
      "We work closely with producers and have a stringent verification process. Look for authenticity markers if applicable.",
  },
  {
    id: "hp-faq-3",
    question: "Are all products organic and chemical-free?",
    answer:
      "Many of our products are organic. Please check the product description for specific details. We prioritize natural and sustainable sourcing.",
  },
  {
    id: "hp-faq-4",
    question: "How can I purchase a product?",
    answer:
      "Simply add the product to your cart and proceed to checkout. We accept various payment methods.",
  },
  {
    id: "hp-faq-5",
    question: "Can I sell my products on this platform?",
    answer:
      "We are always looking for authentic Bhutanese products. Please contact us through our seller inquiry form for more information.",
  },
];

const HomePage = () => {
  return (
    <div className="HomePageWrapper">
      {" "}
      {/* Optional wrapper for page-specific styles */}
      <Navbar />
      <main>
        <Hero heroBackgroundImage={heroBgImage} />
        <AboutIntro aboutImage={bhutanDzongImage} />
        <ProductSection
          title="Featured Products"
          products={featuredProductsData}
          showAddToCart={true} // Featured products on homepage show "Add to Cart"
          showBottomSlider={true} // Homepage featured products section has a slider bar
        />
        <ProductSection
          title="Trending Products"
          products={trendingProductsData}
          showAddToCart={false} // Trending products on homepage only show "View Details"
          showBottomSlider={true} // Homepage trending products section has a slider bar
        />
        <FAQSection faqs={faqData} />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
