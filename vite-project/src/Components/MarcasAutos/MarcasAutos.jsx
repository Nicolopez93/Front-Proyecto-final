import React from 'react'
import './marcasAuto.css'
import toyota from '../../assets/Autos/toyota.svg'
import nissan from '../../assets/Autos/nissan.svg'
import renault from '../../assets/Autos/renault.svg'
import fiat from '../../assets/Autos/fiat.svg'
import honda from '../../assets/Autos/honda.svg'

const MarcasAutos = () => {
  return (
    <div className='marcas-container'>
      <img src={toyota} alt='toyota'/>
      <img src={nissan} alt='nissan'/>
      <img src={renault} alt='renault'/>
      <img src={fiat} alt='fiat'/>
      <img src={honda} alt='honda'/>
    </div>
  )
}

export default MarcasAutos
