import React, { useContext } from 'react'
import { CartContext } from '../../features/CartContext'
import Style from './cart.module.css'

export const Cart = () => {
  const {cartItems, removeFromCart, decreaseQuantity, addToCart}=useContext(CartContext)
  // map filter find reduce
 const totalPrice = cartItems.reduce(
  (acc, item) => acc + item.price * item.quantity,0
);
  
  return (
    <div className={Style.cart}>
      <h2>Корзина</h2>
      {cartItems.length===0?(
        <p>Корзина пуста</p>
      ):(
        <ul>
          {cartItems.map((item)=>(
            <li className={Style.cartStyle} key={item.id}>
              <div className={Style.cartInfo}><h2>{item.name}</h2> x <h2>{item.quantity} =</h2><h2>{item.price*item.quantity}Рублей</h2></div>
              <img  className={Style.cartImg} src={item.image} alt="photo" />
              <button className={Style.cartButton} onClick={()=>decreaseQuantity(item.id)}>-</button>
              <button className={Style.cartButton}onClick={()=>addToCart(item)}> +</button>
              <button className={Style.cartButton}onClick={()=>removeFromCart(item.id)}>Удалить</button>
            </li>
          ))}
        </ul>
      )}
      <h2 className={Style.cartInfo}>Итого:{totalPrice} </h2>
       </div>
  )
}
