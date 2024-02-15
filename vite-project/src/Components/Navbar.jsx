import React from 'react'
import { Link } from 'react-router-dom';
import imgLogo from '../assets/logo.jpeg';


export const Navbar = () => {
    const routes = [
        { path: '/home', name: 'Home' },
        { path: '/about', name: 'About' },
        { path: '/flota', name: 'Flota' },
        { path: '/contact', name: 'Contact' },
        { path: '/reservation', name: 'Reservation' },
      ]

  return (
    <div>
        <h1>Navbar</h1>
        <img src={imgLogo} alt='logo' />
        <ul>
        {routes.map((route, index) => (
          <li key={index}>
            <Link to={route.path}>{route.name}</Link>
          </li>
        ))}
        </ul>
    </div>
  )
}
