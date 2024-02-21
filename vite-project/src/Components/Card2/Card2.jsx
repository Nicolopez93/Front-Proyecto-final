import React from 'react'
import './card2.css'
import imgCronos from '../../assets/cronos.png';
export const Card2 = () => {
  return (
    <div className="card">
    <img src={imgCronos} alt="Hola"/>
    <h2>Fiat Cronos</h2>
    <p>Descripción breve del producto.</p>
    <div className="iconos">
      <i className="fas fa-bed"/>
      <i className="fas fa-bath"/>
      <i className="fas fa-car"/>
      <i className="fas fa-utensils"/>
    </div>
    <p>Precio: $XXX</p>
    <button>Alquilar</button>
</div>

  )
}

