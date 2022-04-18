import React from 'react';
import './style.scss'
import { NavLink } from "react-router-dom";

function Navigate() {
  const links = [
    { name: 'Home', path: '/react_crm/'},
    { name: 'Weather', path: '/react_crm/weather'},
    { name: 'Contacts', path: '/react_crm/contacts'},
    { name: 'Todo', path: '/react_crm/todo'},
  ]

  return (
    <nav className='unselectable'>
      <ul className='nav_list'>
        {links.map(link => {
          return (
            <li className='nav_item' key={link.path}>
              <NavLink 
                className="nav_link"
                to={link.path}
                activeclassname="active"
              >{link.name}</NavLink>
            </li>
          )})}
      </ul>
    </nav>
  )
}

export default Navigate;