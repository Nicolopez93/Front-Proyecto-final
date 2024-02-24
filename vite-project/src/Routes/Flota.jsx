import React from 'react'
import { Card2 } from '../Components/Card2/Card2'
import './flota.css'

export const Flota = () => {
  const cards = [...Array(10).keys()]
  
  return (
    <div className="contenedor-cards">
      {cards.map(card => (
        <Card2 key={card} />  
      ))}
    </div>
  )
}
