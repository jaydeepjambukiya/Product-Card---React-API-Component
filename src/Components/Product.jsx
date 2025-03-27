import { useEffect, useState } from "react";

const Prodact = () => {
  const [x, setX] = useState([]);
  const [like, setLike] = useState({});
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const Prodacts = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setX(data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    Prodacts();
  }, []);

  const toggleLike = (id) => {
    setLike((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
        padding: "1rem",
        backgroundColor: "#f8f9fa",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {x.length > 0 ? (
        x.map((data, index) => (
          <div
            key={index}
            style={{
              position: "relative",
              backgroundColor: "#fff",
              borderRadius: "10px",
              width: "300px",
              height: "400px", // Fixed height for consistency
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "15px",
              boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
              cursor: "pointer",
              textAlign: "center",
            }}
          >
            {/* Like (Heart) Button */}
            <div
              onClick={() => toggleLike(data.id)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                fontSize: "24px",
                transform: hoveredIndex === index ? "scale(1.4)" : "scale(1)",
                transition: "transform 0.3s ease-in-out",
                cursor: "pointer",
                color: like[data.id] ? "red" : "gray",
                zIndex: 2,
              }}
            >
              {like[data.id] ? "❤️" : "🤍"}
            </div>

            {/* Product Image */}
            <img
              src={data.thumbnail}
              alt={data.title}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />

            {/* Product Details */}
            <h3 style={{ fontSize: "16px", fontWeight: "bold" }}>{data.title}</h3>
            <p style={{ fontSize: "14px", color: "#555", flexGrow: 1 }}>
              {data.description.length > 60 ? `${data.description.substring(0, 60)}...` : data.description}
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontSize: "14px",
                fontWeight: "bold",
                color: "#333",
                marginBottom: "10px",
              }}
            >
              <span>💰 ${data.price}</span>
              <span>⭐ {data.rating}</span>
            </div>

            {/* View Details Button */}
            <button
              style={{
                marginTop: "auto",
                width: "100%",
                padding: "10px",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
                backgroundColor: "#007bff",
                color: "white",
                fontWeight: "bold",
              }}
            >
              View Details
            </button>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Prodact;
