import './style.scss'
import { NavLink } from "react-router-dom";

function Navigate({links}) {

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