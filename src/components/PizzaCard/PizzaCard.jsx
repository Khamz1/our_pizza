import React from 'react';
import {pizzas} from "../../data/pizzas.js";
import Style from './pizzaCard.module.css';

function PizzaCard() {
    return (
        <div className={Style.pizzaCard}>
            {pizzas.map((pizza) => (
                <div className={Style.pizza} key={pizza.id}>
                    <img className={Style.pizzaImg} src={pizza.image} alt="photo"/>
                   <h1> {pizza.name}</h1>
                    <p>{pizza.description}</p>
                    <p>{pizza.price}</p>
                    <button>Добавть в корзину</button>
                </div>
            ))}
        </div>
    );
}

export default PizzaCard;
