import './style.scss'
import { NavLink } from "react-router-dom";
import { links } from 'src/assets/menuLinks/links'

function Navigate() {

  return (
    <nav className='unselectable'>
      <ul className='nav_list'>
        {links.map((link, idx) => {
          return (
            <li className='nav_item' key={`key-${idx}`}>
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