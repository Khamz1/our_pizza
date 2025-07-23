import React, { useContext } from 'react'
import { CartContext } from '../../features/CartContext'

export const Cart = () => {
  const {cartItems, removeFromCart, decreaseQuantity, addToCart}=useContext(CartContext)
  const totalPrice = cartItems.reduce((acc, item)=>acc+item.price*item.quantity)
  
  return (
    <div>
      <h2>Корзина</h2>
      {cartItems.length===0?(
        <p>Корзина пуста</p>
      ):(
        <ul>
          {cartItems.map((item)=>(
            <li key={item.id}>
              {item.name} x {item.quantity} = {item.price*item.quantity}Рублей
              <button onClick={()=>decreaseQuantity(item.id)}>-</button>
              <button onClick={()=>addToCart(item)}>+</button>
              <button onClick={()=>removeFromCart(item.id)}>Удалить</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Итого:{totalPrice} </h3>
       </div>
  )
}
