import React, { useState } from 'react';
import './style.scss';


import Navigate from 'src/components/Navigate';
import Button from 'src/components/elements/Button';
import UserMenu from '../UserMenu';


function Header() {
  const [menu, setMenu] = useState(false)

  return (
    <div className='header'>
      <div className="container">
        <div className='header_body'>
          <div className='header_logo'>
            Logo
          </div>
          <div className='header_user'>
            <UserMenu />
        </div>
        </div>
        <div className={menu ? "header_nav open" : "header_nav"}>
          <Navigate />
        </div>
        <div className="header_mobile">
          <Button googleIcon={menu ? 'close' : 'menu'} onClick={() => setMenu(!menu)}/>
        </div>
      </div>
    </div>
  )
}

export default Header;