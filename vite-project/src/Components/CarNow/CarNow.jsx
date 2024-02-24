import React from 'react';
import imgAuto from '../../assets/auto.png';

import './carNow.css'

export const CarNow = () => {
  
  return (
    <div className="carNow-container">
      <div className="search-bar">
          <input type="text" placeholder="Buscar autos..." />
          <button className="buscar-autos-button">Buscar</button>
        </div>
      <div className="carNow-image-container">
        <img src={imgAuto} alt='auto' className="auto-img" />
        </div>
    </div>
  );
};
