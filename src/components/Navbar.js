import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    { id: 1, name: 'Books', path: '/' },
    { id: 2, name: 'Categories', path: '/categories' },
  ];

  return (
    <nav>
      <h1>Book Store</h1>
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <NavLink to={link.path} className="active-link" exact="false">
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
