import './style.scss'
import { NavLink } from "react-router-dom";

function Navigate() {
  const links = [
    { name: 'Home', path: '/'},
    { name: 'Weather', path: '/weather'},
    { name: 'Contacts', path: '/contacts'},
    { name: 'Todo', path: '/todo'},
    { name: 'Auth test', path: '/test'},
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