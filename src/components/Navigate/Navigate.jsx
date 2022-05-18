import './style.scss'
import { NavLink } from "react-router-dom";
import { links } from 'src/assets/menuLinks/links'
import { motion, AnimateSharedLayout } from 'framer-motion'
import { useLocation } from 'react-router-dom'


function Navigate() {
  const location = useLocation()

  return (
    <nav className='unselectable'>
      <AnimateSharedLayout>
      <ul layout className='nav_list'>
        {links.map((link, idx) => {
          return (
            <motion.li 
              className='nav_item' 
              key={`key-${idx}`}
            >
              <NavLink 
                className="nav_link"
                to={link.path}
                activeclassname="active"
              >
                {link.name}
                {location.pathname === link.path && <ActiveLine />}
              </NavLink>
            </motion.li>
          )})}
      </ul>
      </AnimateSharedLayout>
    </nav>
  )
}

export default Navigate;

function ActiveLine() {
  return (
    <motion.div 
      layoutId = 'activeLink'
      className='nav_underline'
    />
  )
}