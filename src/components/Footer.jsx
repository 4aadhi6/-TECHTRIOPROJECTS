import React from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa"; // Importing icon components
import logo from "/logo.png"; // Importing logo

function Footer() {
  return (
    <footer
      className="footer mt-5 py-4"
      style={{ backgroundColor: "#1a1a2e", color: "#fff" }}
    >
      <div className="footer-content text-center">
        {/* Logo centered at the top */}
        <div className="footer-logo mb-3">
          <img
            src={logo}
            alt="Logo"
            className="img-fluid footer-logo-img"
            style={{
              maxWidth: "120px", // Adjust logo size
              transition: "transform 0.3s ease",
            }}
          />
        </div>

        {/* Footer text */}
        <p
          className="footer-text"
          style={{ fontSize: "1.2rem", fontWeight: "500" }}
        >
          © 2025 AdSystem. All Rights Reserved.
        </p>

        {/* Footer Links */}
        <div className="footer-links mb-3">
          <a
            href="/"
            className="footer-link"
            style={{
              color: "#ff7f50",
              fontSize: "1.1rem",
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#ff6f40")} // Hover effect
            onMouseLeave={(e) => (e.target.style.color = "#ff7f50")}
          >
            Privacy Policy
          </a>
          <a
            href="/"
            className="footer-link ml-3"
            style={{
              color: "#ff7f50",
              fontSize: "1.1rem",
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#ff6f40")} // Hover effect
            onMouseLeave={(e) => (e.target.style.color = "#ff7f50")}
          >
            Terms of Service
          </a>
        </div>

        {/* Social Media Links */}
        <div className="social-media-links mt-4">
          {/* WhatsApp Icon */}
          <a
            href="https://wa.me/+917736109348"
            target="_blank"
            rel="noopener noreferrer"
            className="social-media-icon mx-3"
            style={{
              color: "#25d366",
              fontSize: "1.8rem",
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#128c7e")} // Hover effect
            onMouseLeave={(e) => (e.target.style.color = "#25d366")}
          >
            <FaWhatsapp size={30} />
          </a>

          {/* Instagram Icon */}
          <a
            href="https://www.instagram.com/tech_trio_projects_/profilecard/?igsh=YW4xcWcwejZvM3lr"
            target="_blank"
            rel="noopener noreferrer"
            className="social-media-icon mx-3"
            style={{
              color: "#E4405F",
              fontSize: "1.8rem",
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#bc2a8d")} // Hover effect
            onMouseLeave={(e) => (e.target.style.color = "#E4405F")}
          >
            <FaInstagram size={30} />
          </a>
        </div>

        {/* Additional Contact Info */}
        <p className="mt-3">
          For any issues or inquiries, contact us at{" "}
          <a
            href="tel:+917736109348"
            className="footer-link"
            style={{ color: "#ff7f50", fontSize: "1.2rem" }}
          >
            +91 7736109348
          </a>
        </p>
      </div>

      {/* Developed by Marquee */}
      <marquee behavior="" direction="">
        <a
          href="https://www.instagram.com/_4aadhi_6/profilecard/?igsh=YW4xcWcwejZvM3lr"
          target="_blank"
          rel="noopener noreferrer"
          className="social-media-icon mx-3"
          style={{
            color: "#ff7f50",
            fontSize: "1.2rem",
            textDecoration: "none",
          }}
        >
          {" "}
          developed by
          <FaInstagram size={30} color="#E4405F" /> _4aadhi_6
        </a>
      </marquee>
    </footer>
  );
}

export default Footer;
