import React from 'react'
import imgLogo from '../../assets/logotransp.png';
import './footer.css'

export const Footer = () => {
return (
    <div className='footer-container'>
        <img src={imgLogo} alt='logo'className="footer-logo"/>
        © 2024 Car4All - Rentamos autos. Todos los derechos reservados.
        </div>
)
}