// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  const footerStyles = {
    backgroundColor: "#1A3A3A",
    color: "#ccc",
    padding: "50px 0 20px", // Padding top/bottom, horizontal via container
  };

  const topSectionStyles = {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "40px",
    flexWrap: "wrap",
    gap: "30px",
  };

  const sectionBlockStyles = {
    // Common style for blocks
    flex: 1,
    minWidth: "250px", // Ensure blocks don't get too narrow
  };

  const logoAndContactStyles = {
    ...sectionBlockStyles,
  };

  const logoStyles = {
    fontSize: "3rem",
    fontWeight: "bold",
    color: "#fff",
    marginBottom: "15px",
  };

  const contactInfoStyles = {
    fontSize: "0.9rem",
    lineHeight: 1.7,
  };

  const socialIconsContainer = {
    marginTop: "15px",
    display: "flex",
    gap: "15px",
  };

  const socialIconStyles = {
    color: "#fff",
    fontSize: "1.2rem",
    border: "1px solid #fff",
    borderRadius: "50%",
    width: "30px",
    height: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    transition: "background-color 0.3s, color 0.3s",
  };

  const stayUpdatedStyles = {
    ...sectionBlockStyles,
  };

  const linksSectionStyles = {
    ...sectionBlockStyles,
    flex: 1.5, // Give slightly more space
    display: "flex",
    justifyContent: "space-between", // Distribute link columns
    gap: "20px", // Gap between link columns
    flexWrap: "wrap", // Allow link columns to wrap
  };

  const linkColumnStyles = {
    minWidth: "150px", // Ensure link columns have some width
  };

  const headingStyles = {
    fontSize: "1.2rem",
    color: "#fff",
    marginBottom: "15px",
    fontWeight: "600",
  };

  const listStyles = {
    listStyle: "none",
    padding: 0,
    margin: 0,
  };

  const listItemStyles = {
    marginBottom: "10px",
  };

  const linkStyles = {
    color: "#ccc",
    textDecoration: "none",
    fontSize: "0.9rem",
    transition: "color 0.3s",
  };

  const emailInputContainerStyles = {
    display: "flex",
    marginTop: "10px",
  };

  const inputStyles = {
    padding: "10px",
    border: "1px solid #555",
    borderRadius: "4px 0 0 4px",
    backgroundColor: "#334f4f",
    color: "#fff",
    flexGrow: 1, // Take available space
    minWidth: "150px", // Minimum width for input
    fontSize: "0.9rem",
  };

  const subscribeButtonStyles = {
    padding: "10px 15px",
    backgroundColor: "#00A99D",
    color: "white",
    border: "none",
    borderRadius: "0 4px 4px 0",
    cursor: "pointer",
    fontSize: "0.9rem",
    whiteSpace: "nowrap",
  };

  const copyrightStyles = {
    textAlign: "center",
    borderTop: "1px solid #446868",
    paddingTop: "20px",
    marginTop: "30px",
    fontSize: "0.85rem",
    color: "#aaa",
  };

  const handleSocialHover = (e, enter) => {
    if (enter) {
      e.currentTarget.style.backgroundColor = "#fff";
      e.currentTarget.style.color = "#1A3A3A";
    } else {
      e.currentTarget.style.backgroundColor = "transparent";
      e.currentTarget.style.color = "#fff";
    }
  };
  const handleLinkHover = (e, enter) => {
    if (enter) {
      e.currentTarget.style.color = "#fff";
    } else {
      e.currentTarget.style.color = "#ccc";
    }
  };

  return (
    <footer style={footerStyles}>
      <div className="container">
        <div style={topSectionStyles}>
          <div style={logoAndContactStyles}>
            <div style={logoStyles}>B²</div>
            <div style={contactInfoStyles}>
              123 Himalayan Road, Thimphu, Bhutan
              <br />
              Phone: +975 123 4567
              <br />
              Email: info@bhutanbuy.com
            </div>
            <div style={socialIconsContainer}>
              {/* Replace with actual icons, e.g., from react-icons */}
              <a
                href="#linkedin"
                style={socialIconStyles}
                onMouseEnter={(e) => handleSocialHover(e, true)}
                onMouseLeave={(e) => handleSocialHover(e, false)}
              >
                Li
              </a>
              <a
                href="#instagram"
                style={socialIconStyles}
                onMouseEnter={(e) => handleSocialHover(e, true)}
                onMouseLeave={(e) => handleSocialHover(e, false)}
              >
                In
              </a>
              <a
                href="#facebook"
                style={socialIconStyles}
                onMouseEnter={(e) => handleSocialHover(e, true)}
                onMouseLeave={(e) => handleSocialHover(e, false)}
              >
                Fb
              </a>
            </div>
          </div>

          <div style={stayUpdatedStyles}>
            <h3 style={headingStyles}>Stay on top of updates</h3>
            <p
              style={{
                fontSize: "0.9rem",
                marginBottom: "15px",
                lineHeight: 1.5,
              }}
            >
              Sign up for the latest news, product uploads and offers
            </p>
            <div style={emailInputContainerStyles}>
              <input type="email" placeholder="Email" style={inputStyles} />
              <button style={subscribeButtonStyles}>Subscribe</button>
            </div>
          </div>

          <div style={linksSectionStyles}>
            <div style={linkColumnStyles}>
              <h3 style={headingStyles}>Navigation</h3>
              <ul style={listStyles}>
                <li style={listItemStyles}>
                  <a
                    href="#home"
                    style={linkStyles}
                    onMouseEnter={(e) => handleLinkHover(e, true)}
                    onMouseLeave={(e) => handleLinkHover(e, false)}
                  >
                    Home
                  </a>
                </li>
                <li style={listItemStyles}>
                  <a
                    href="#products"
                    style={linkStyles}
                    onMouseEnter={(e) => handleLinkHover(e, true)}
                    onMouseLeave={(e) => handleLinkHover(e, false)}
                  >
                    Products
                  </a>
                </li>
                <li style={listItemStyles}>
                  <a
                    href="#auction"
                    style={linkStyles}
                    onMouseEnter={(e) => handleLinkHover(e, true)}
                    onMouseLeave={(e) => handleLinkHover(e, false)}
                  >
                    Auction
                  </a>
                </li>
                <li style={listItemStyles}>
                  <a
                    href="#contact"
                    style={linkStyles}
                    onMouseEnter={(e) => handleLinkHover(e, true)}
                    onMouseLeave={(e) => handleLinkHover(e, false)}
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div style={linkColumnStyles}>
              <h3 style={headingStyles}>Quick Links</h3>
              <ul style={listStyles}>
                <li style={listItemStyles}>
                  <a
                    href="#ogop"
                    style={linkStyles}
                    onMouseEnter={(e) => handleLinkHover(e, true)}
                    onMouseLeave={(e) => handleLinkHover(e, false)}
                  >
                    OGOP
                  </a>
                </li>
                <li style={listItemStyles}>
                  <a
                    href="#fcob"
                    style={linkStyles}
                    onMouseEnter={(e) => handleLinkHover(e, true)}
                    onMouseLeave={(e) => handleLinkHover(e, false)}
                  >
                    Food Corporation Of Bhutan
                  </a>
                </li>
                <li style={listItemStyles}>
                  <a
                    href="#bfda"
                    style={linkStyles}
                    onMouseEnter={(e) => handleLinkHover(e, true)}
                    onMouseLeave={(e) => handleLinkHover(e, false)}
                  >
                    Bhutan Food and Drug Authority
                  </a>
                </li>
                <li style={listItemStyles}>
                  <a
                    href="#fqsd"
                    style={linkStyles}
                    onMouseEnter={(e) => handleLinkHover(e, true)}
                    onMouseLeave={(e) => handleLinkHover(e, false)}
                  >
                    Food Quality and Safety Division
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div style={copyrightStyles}>
          © 2025 BhutanBuy. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
