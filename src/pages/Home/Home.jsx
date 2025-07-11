import React from 'react'
import  styles from './home.module.css'
import { Link } from 'react-router-dom'
import {pizzas} from "../../data/pizzas.js";
import PizzaCard from "../../components/PizzaCard/PizzaCard.jsx";
export const Home = () => {

  return (
    <div className={styles.home}>
      <div className={styles.banner}>
        <h1>Лучшая пицца в городе!</h1>
        <p>Быстрая доставка, свежие ингридиенты</p>
        <Link to='/menu' className={styles.ctaButton}>
        Заказать сейчас.</Link>
      </div>
        <div className={styles.cards}>
            <PizzaCard/>
        </div>

    </div>
  )
}
