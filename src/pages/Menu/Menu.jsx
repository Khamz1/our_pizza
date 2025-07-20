import React from 'react'
import PizzaCard from '../../components/PizzaCard/PizzaCard'
import Style from './menu.module.css'
export const Menu = () => {
  return (
    <div className={Style.menu}>
      <h1>Наше меню</h1>
      <PizzaCard/>
    </div>
    
  )
}
