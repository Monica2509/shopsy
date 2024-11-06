import React from "react";
import ProductCard from "./ProductCard";

// Sample products
const products = [
  { id: 1, name: "Product 1", price: 20, image: "https://via.placeholder.com/150" },
  { id: 2, name: "Product 2", price: 30, image: "https://via.placeholder.com/150" },
  { id: 3, name: "Product 3", price: 15, image: "https://via.placeholder.com/150" }
];

function ProductList({ addToCart }) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default ProductList;
