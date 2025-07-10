import React from 'react'
import style from './header.module.css'
import { Link } from 'react-router-dom'
export const Header = () => {
  return (
  <header className={style.header}>
    <Link className={style.logo} to='/'>Pizza <br />Islam & Khamz</Link>
    <nav>
      <Link to='/menu' className={style.navLink}>Меню</Link>
      <Link to='/cart' className={style.navLink}>Корзина</Link>
    </nav>
  </header>
  )
}
