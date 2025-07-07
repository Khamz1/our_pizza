import React from 'react'
import style from './header.module.css'
import { Link } from 'react-router-dom'
export const Header = () => {
  return (
   <header className={style.header}>
    <div className={style.logo}>
      <Link to='/'> Точка</Link>
      <Link to='/cart'> Меню</Link>
      
       
    </div>
    <button className={style.cartButton}>Корзина</button>
   </header>
  )
}
