import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    // Создаем состояние элементов в корзине
  const [cartItems, setCartItems] = useState([]); 
// Функция добавления пиццы в корзину

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
// Удаление из корзины
  const removeFromCart = (pizzaId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== pizzaId));
  };
// Уменьшение количества товаров в корзине
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