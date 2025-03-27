import React from "react";

const Header = () => {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 30px",
        backgroundColor: "#007bff",
        color: "white",
        fontFamily: "Arial, sans-serif",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
      }}
    >
      {/* Logo */}
      <h2 style={{ margin: 0, fontSize: "24px", fontWeight: "bold" }}>🛒 MyShop</h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search products..."
        style={{
          padding: "8px",
          width: "250px",
          borderRadius: "20px",
          border: "none",
          outline: "none",
          fontSize: "14px",
        }}
      />

      {/* Navigation & Cart */}
      <nav style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <a href="#" style={{ color: "white", textDecoration: "none", fontSize: "16px" }}>
          Home
        </a>
        <a href="#" style={{ color: "white", textDecoration: "none", fontSize: "16px" }}>
          Products
        </a>
        <a href="#" style={{ color: "white", textDecoration: "none", fontSize: "16px" }}>
          Contact
        </a>

        {/* Cart Icon */}
        <span style={{ fontSize: "20px", cursor: "pointer" }}>🛍️</span>
      </nav>
    </header>
  );
};

export default Header;
