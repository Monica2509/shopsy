import React, { useState } from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  // Function to add product to the cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <div className="App">
      <header>
        <h1>Shopsy</h1>
        <p>Cart: {cart.reduce((sum, item) => sum + item.quantity, 0)}</p>
      </header>
      <ProductList addToCart={addToCart} />
      <Cart cart={cart} />
    </div>
  );
}

export default App;
