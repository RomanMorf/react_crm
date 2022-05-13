import React, { useState } from 'react';
import './style.scss';


import Navigate from 'src/components/Navigate';
import Button from 'src/components/elements/Button';
import UserMenu from 'src/components/UserMenu';
import BurgerMenu from 'src/components/BurgerMenu';


function Header() {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <>
      <div className='header'>
        <div className="container">
          <div className='header_body'>
            <div className="header_mobile">
              <Button googleIcon={showMenu ? 'close' : 'menu'} onClick={() => setShowMenu(!showMenu)}/>
            </div>
            <div className='header_logo'>
              Logo
            </div>
            <div className='header_user'>
              <UserMenu />
          </div>
          </div>
          <div className="header_nav">
            <Navigate />
          </div>
        </div>
      </div>
      <BurgerMenu 
        menuOpen={showMenu} 
        onCloseMenu={() => setShowMenu(false)}  
        children={<Navigate />}
      />
    </>
  )
}

export default Header;