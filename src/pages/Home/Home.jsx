import React from 'react'
import  styles from './home.module.css'
import { Link } from 'react-router-dom'
export const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.banner}>
        <h1>Лучшая пицца в городе!</h1>
        <p>Быстрая доставка, свежие ингридиенты</p>
        <Link to='/menu' className={styles.ctaButton}>
        Заказать сейчас.</Link>
      </div>
       {/* Для карточек, grid */}
    </div>
  )
}
