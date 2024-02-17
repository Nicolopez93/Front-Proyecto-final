import React from 'react'
import { Link } from 'react-router-dom';
import imgLogo from '../../assets/logo.jpeg';
import './navbar.css'

export const Navbar = () => {
    const routes = [
        { path: '/home', name: 'Home' },
        { path: '/about', name: 'About' },
        { path: '/flota', name: 'Flota' },
        { path: '/contact', name: 'Contact' },
        { path: '/registrate', name: 'Registrate' },
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
        </ul>
    </div>
  )
}
