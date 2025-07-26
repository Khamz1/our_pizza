import React, { useContext } from 'react';
import {pizzas} from "../../data/pizzas.js";
import Style from './pizzaCard.module.css';
import { CartContext } from '../../features/CartContext.jsx';

function PizzaCard() {
    const {addToCart} = useContext(CartContext)
    return (
        <div className={Style.pizzaCard}>
            {pizzas.map((pizza) => (
                <div className={Style.pizza} key={pizza.id}>
                    <img className={Style.pizzaImg} src={pizza.image} alt="photo"/>
                   <h1> {pizza.name}</h1>
                    <p>{pizza.description}</p>
                    <p>{pizza.price}</p>
                    <button onClick={()=>addToCart(pizza)}>Добавить в корзину</button>
                </div>
            ))}
        </div>
    );
}

export default PizzaCard;
