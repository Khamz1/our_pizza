import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (pizza) => {
    setCartItems((prev) => {
      
      const itemInCart = prev.find((item) => item.id === pizza.id);
      if (itemInCart) {
        
        return prev.map((item) =>
          item.id === pizza.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        
        return [...prev, { ...pizza, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (pizzaId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== pizzaId));
  };

  const decreaseQuantity = (pizzaId) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === pizzaId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ).filter((item) => item.quantity > 0)
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, decreaseQuantity }}>
      {children}
    </CartContext.Provider>
  );
};