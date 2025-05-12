// src/components/FAQSection.jsx
import React from "react";
import FAQItem from "./FAQItem";

const FAQSection = ({ faqs }) => {
  const sectionStyles = {
    display: "flex",
    // padding: '60px 0', // Use section-padding from global or App.css
    gap: "40px",
    backgroundColor: "#fff",
    flexWrap: "wrap", // For responsiveness
  };

  const textContainerStyles = {
    flex: 1,
    minWidth: "300px",
    padding: "20px", // Padding within the flex item
  };

  const faqListContainerStyles = {
    flex: 1.5,
    minWidth: "300px",
    padding: "0 20px", // Padding within the flex item
  };

  const titleStyles = {
    fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
    marginBottom: "20px",
    color: "#3a5a40", // Ensure h2 color
  };

  const introTextStyles = {
    fontSize: "1rem",
    lineHeight: 1.6,
    marginBottom: "20px",
    color: "#555",
  };

  const learnMoreLinkStyles = {
    color: "#00A99D",
    textDecoration: "none",
    fontWeight: "bold",
  };

  return (
    <section style={sectionStyles} className="container section-padding">
      <div style={textContainerStyles}>
        <h2 style={titleStyles}>Frequently Asked Questions (FAQ)</h2>
        <p style={introTextStyles}>
          We understand that choosing authentic Bhutanese products comes with
          questions about quality, sourcing, and authenticity. Here are some
          common inquiries to help you better understand our platform and
          products.
        </p>
        <a href="#learn-more-faq" style={learnMoreLinkStyles}>
          Learn More
        </a>
      </div>
      <div style={faqListContainerStyles}>
        {faqs.map((faq) => (
          <FAQItem key={faq.id} faq={faq} />
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
