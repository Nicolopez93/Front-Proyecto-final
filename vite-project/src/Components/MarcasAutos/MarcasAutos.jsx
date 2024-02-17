import React from 'react'
import './marcasAuto.css'
import toyota from '../../assets/Autos/toyota.jpg'
import nissan from '../../assets/Autos/nissan.jpg'
import renault from '../../assets/Autos/renault.jpg'
import fiat from '../../assets/Autos/fiat.jpg'
import citroen from '../../assets/Autos/citroen.jpg'

const MarcasAutos = () => {
  return (
    <div className='marcas-container'>
      <img src={toyota} alt='toyota'className="toyota-img" />
      <img src={nissan} alt='nissan'className="nissan-img" />
      <img src={renault} alt='renault'className="renault-img" />
      <img src={fiat} alt='fiat'className="fiat-img" />
      <img src={citroen} alt='citroen'className="citroen-img" />
    </div>
  )
}

export default MarcasAutos
