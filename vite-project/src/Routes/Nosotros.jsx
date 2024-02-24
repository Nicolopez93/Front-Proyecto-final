import React from 'react'
import imgEmpresa from '../assets/auto.png'
import './nosotros.css'

export const Nosotros = () => {
  return (
    <div className="nosotros-container">
      <div className="nosotros-text">
        <h1>Nosotros</h1>
        <p>Somos una empresa de alquiler de autos comprometida con brindar un servicio excepcional a nuestra comunidad. Nos esforzamos por ofrecer vehículos de calidad y una experiencia de alquiler sin igual para nuestros clientes.</p>
      </div>
      <div className="nosotros-image-container">
        <img src={imgEmpresa} alt="Nuestra empresa" className="nosotros-image" />
      </div>
    </div>
  );
};
