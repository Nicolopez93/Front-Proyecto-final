import React from 'react'
import { Link } from 'react-router-dom';
import imgLogo from '../../assets/logotransp.png';
import './navbar.css'

export const Navbar = () => {
    const routes = [
        { path: '/home', name: 'Inicio' },
        { path: '/nosotros', name: 'Nosotros' },
        { path: '/flota', name: 'Flota' },
        { path: '/contacto', name: 'Contacto' },
      ]

  return (
    <div className="navbar-container">
        <img src={imgLogo} alt='logo'className="navbar-logo" />
        <ul className="navbar-links">
        {routes.map((route, index) => (
          <li key={index} className="navbar-link">
            <Link to={route.path}>{route.name}</Link>
          </li>
        ))}
        <li>
            <Link to="/registrate">
                <button>Registrate!</button>
            </Link>
        </li>
        </ul>
    </div>
  )
}
