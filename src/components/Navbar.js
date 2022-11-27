import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const links = [
    { id: 1, name: 'Books', path: '/' },
    { id: 2, name: 'Categories', path: '/categories' },
  ];

  return (
    <nav>

      <ul>
        <span className="cms">Bookstore CMS</span>
        {links.map((link) => (
          <li key={link.id}>
            <NavLink to={link.path} className="active-link" exact="false">
              {link.name}
            </NavLink>
          </li>
        ))}
        <span className="oval"><i className="fa-sharp fa-solid fa-user-large" /></span>
      </ul>
    </nav>
  );
};

export default Navbar;
