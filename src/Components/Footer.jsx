import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#007bff",
        color: "white",
        textAlign: "center",
        padding: "20px",
        marginTop: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ marginBottom: "10px" }}>
        <h2 style={{ margin: 0 }}>🛒 MyShop</h2>
        <p style={{ fontSize: "14px", marginTop: "5px" }}>
          Your one-stop shop for all your needs. Quality products at the best prices!
        </p>
      </div>

      {/* Quick Links */}
      <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginBottom: "10px" }}>
        <a href="#" style={{ color: "white", textDecoration: "none", fontSize: "14px" }}>
          Home
        </a>
        <a href="#" style={{ color: "white", textDecoration: "none", fontSize: "14px" }}>
          Products
        </a>
        <a href="#" style={{ color: "white", textDecoration: "none", fontSize: "14px" }}>
          Contact
        </a>
      </div>

      {/* Social Media Icons */}
      <div style={{ fontSize: "20px", display: "flex", justifyContent: "center", gap: "10px" }}>
        <span style={{ cursor: "pointer" }}>📘</span> {/* Facebook */}
        <span style={{ cursor: "pointer" }}>🐦</span> {/* Twitter */}
        <span style={{ cursor: "pointer" }}>📷</span> {/* Instagram */}
      </div>

      {/* Copyright */}
      <p style={{ fontSize: "12px", marginTop: "10px" }}>© {new Date().getFullYear()} MyShop. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
// Compare this snippet from ReactAPI/src/Components/Footer.jsx: