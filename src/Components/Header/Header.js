import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <ul>
      <li>
        <NavLink exact to={'/'}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink exact to={'/breakfast'}>
          Breakfast
        </NavLink>
      </li>
      <li>
        <NavLink exact to={'/families'}>
          Families
        </NavLink>
      </li>
      <li>
        <NavLink exact to={'/movies'}>
          Movies
        </NavLink>
      </li>
    </ul>
  );
}
