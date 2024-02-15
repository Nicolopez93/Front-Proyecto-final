import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const routes = [
    { path: '/home', name: 'Home' },
    { path: '/nosotros', name: 'Nosotros' },
    { path: '/contacto', name: 'Contacto' },
    { path: '/sucursales', name: 'Sucursales' },
    { path: '/flotaautos', name: 'FlotaAutos' },
  ];

  return (
    <nav className="navbar">
      <ul>
        {routes.map((route, index) => (
          <li key={index}>
            <Link to={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;