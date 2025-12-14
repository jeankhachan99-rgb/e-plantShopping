const handleAddToCart = (product) => {
  alert(`Added ${product.name} to cart!`);
};

import React from "react";
import "./ProductList.css"; // Optional: for custom styling

const products = [
  {
    id: 1,
    category: "Indoor Plants",
    name: "Snake Plant",
    price: 12.99,
    image: "https://via.placeholder.com/100",
  },
  {
    id: 2,
    category: "Indoor Plants",
    name: "Peace Lily",
    price: 15.49,
    image: "https://via.placeholder.com/100",
  },
  {
    id: 3,
    category: "Succulents",
    name: "Aloe Vera",
    price: 10.99,
    image: "https://via.placeholder.com/100",
  },
  {
    id: 4,
    category: "Succulents",
    name: "Echeveria",
    price: 8.99,
    image: "https://via.placeholder.com/100",
  },
  {
    id: 5,
    category: "Flowering Plants",
    name: "Orchid",
    price: 18.99,
    image: "https://via.placeholder.com/100",
  },
  {
    id: 6,
    category: "Flowering Plants",
    name: "Rose",
    price: 6.99,
    image: "https://via.placeholder.com/100",
  },
];

// Group products by category
const groupedProducts = products.reduce((groups, product) => {
  const { category } = product;
  if (!groups[category]) {
    groups[category] = [];
  }
  groups[category].push(product);
  return groups;
}, {});

const ProductList = () => {
  const handleAddToCart = (product) => {
    alert(`Added ${product.name} to cart!`);
    // Replace alert with actual Redux dispatch or logic
  };

  return (
    <div>
      {/* Navbar */}
      <nav style={{ padding: "10px", backgroundColor: "#d1f5d3" }}>
        <h2>Paradise Nursery</h2>
      </nav>

      {/* Product List */}
      <div style={{ padding: "20px" }}>
        {Object.entries(groupedProducts).map(([category, items]) => (
          <div key={category} style={{ marginBottom: "30px" }}>
            <h3>{category}</h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
              {items.map((product) => (
                <div
                  key={product.id}
                  style={{
                    border: "1px solid #ccc",
                    padding: "10px",
                    width: "150px",
                  }}
                >
                  <img src={product.image} alt={product.name} width="100%" />
                  <h4>{product.name}</h4>
                  <p>${product.price.toFixed(2)}</p>
                  <button onClick={() => handleAddToCart(product)}>
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
<nav style={{ padding: "10px", backgroundColor: "#c2f0c2" }}>
  <h2>Paradise Nursery</h2>
</nav>

