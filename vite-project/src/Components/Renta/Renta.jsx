import React from 'react'
import './renta.css'
export const Renta = () => {
  return (
    <div className="renta-container">
    <form className="renta-form" action="#">
      <h5 className="renta-title">Reserva tu auto</h5>
      <div>
        <label htmlFor="renta-ubicacion" className="renta-label">Ubicación</label>
        <input type="text" name="renta-ubicacion" id="renta-ubicacion" className="renta-input" placeholder="Ingresa tu ubicación" required />
      </div>
      <div>
        <label htmlFor="renta-fecha" className="renta-label">Fecha de reserva</label>
        <input type="date" name="renta-fecha" id="renta-fecha" className="renta-input" required />
      </div>
      <button type="submit" className="renta-button">Reservar</button>
    </form>
  </div>  
  )
}
