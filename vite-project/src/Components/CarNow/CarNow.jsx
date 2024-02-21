import React, { useState } from 'react';
import imgAuto from '../../assets/auto.png';
import { Renta } from '../Renta/Renta.jsx';
import './carNow.css'

export const CarNow = () => {
  const [showRenta, setShowRenta] = useState(false);

  const handleRentaButtonClick = () => {
    setShowRenta(true);
  };

  return (
    <div className="carNow-container">
      <div> 
        <h1>Explora la libertad de poder rentar el auto que siempre soñaste!</h1>
        <h3>Maneja con cuidado</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis assumenda tempore architecto, repellat similique porro laborum exercitationem minima consequuntur atque adipisci deserunt voluptate voluptatibus voluptatum labore optio autem harum enim.</p>
        <button className="carNow-button" onClick={handleRentaButtonClick}>BUSCA TU AUTO!</button>
      </div>
      <div className="carNow-image-container">
        <img src={imgAuto} alt='auto' className="auto-img" />
        {showRenta && <Renta />}
      </div>
    </div>
  );
};
