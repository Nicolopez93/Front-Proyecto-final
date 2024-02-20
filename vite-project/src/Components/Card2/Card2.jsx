import React from 'react'
import './card2.css'
export const Card2 = () => {
  return (
    <div className="card">
    <img src="../../assets/auto.png" alt="Descripción de la imagen"/>
    <h2>Título del producto</h2>
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

