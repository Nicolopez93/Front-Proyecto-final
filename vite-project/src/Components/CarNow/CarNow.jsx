import React from 'react'
import imgcar from '../../assets/car.jpeg';
import './carNow.css'

export const CarNow = () => {
  return (
    <div  className="carNow-container">
        <div> 
        <h1>Explora la libertad de poder Rentar un auto</h1>
        <h3>Maneja con cuidado</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis assumenda tempore architecto, repellat similique porro laborum exercitationem minima consequuntur atque adipisci deserunt voluptate voluptatibus voluptatum labore optio autem harum enim.</p>
        <button  className="carNow-button">RENTA TU AUTO</button>
        </div>
        <img src={imgcar} alt='car'className="car-img" />
    </div>

 )
}
