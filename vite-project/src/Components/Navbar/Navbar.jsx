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
        { path: '/administrador', name: 'Administrador' },
      ]

  return (
    <div className="navbar-container">
        <a href="/home"><img src={imgLogo} alt='logo'className="navbar-logo"/></a>
        <ul className="navbar-links">
        {routes.map((route, index) => (
          <li key={index} className="navbar-link">
            <Link to={route.path}>{route.name}</Link>
          </li>
        ))}
        <li>
            <Link to="/registrate">
                <button>Iniciar sesión</button>
                <button>Crear cuenta</button>
            </Link>
        </li>
        </ul>
    </div>
  )
}
