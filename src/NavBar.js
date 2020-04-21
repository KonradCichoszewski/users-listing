import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <NavLink activeClassName="activeLink" className="inactiveLink"
        to="/" exact>Users listing</NavLink>
      <NavLink activeClassName="activeLink" className="inactiveLink"
        to="/form">Add new user</NavLink>
    </nav>
  )
}

export default NavBar;