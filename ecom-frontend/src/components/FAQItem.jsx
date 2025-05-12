// src/components/FAQItem.jsx
import React, { useState } from "react";

const FAQItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  const itemStyles = {
    borderBottom: "1px solid #eee",
    padding: "15px 0",
  };

  const questionStyles = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "1.1rem",
    color: "#333",
    padding: "10px 0",
  };

  const answerStyles = {
    // paddingTop: '10px', // Conditional padding below
    fontSize: "0.95rem",
    lineHeight: 1.6,
    color: "#555",
    maxHeight: isOpen ? "300px" : "0",
    overflow: "hidden",
    transition: "max-height 0.3s ease-in-out, padding-top 0.3s ease-in-out",
    paddingTop: isOpen ? "10px" : "0",
  };

  return (
    <div style={itemStyles}>
      <div style={questionStyles} onClick={() => setIsOpen(!isOpen)}>
        {faq.question}
        <span style={{ fontSize: "1.5rem", color: "#00A99D" }}>
          {isOpen ? "−" : "+"}
        </span>
      </div>
      <div style={answerStyles}>{faq.answer}</div>
    </div>
  );
};

export default FAQItem;
