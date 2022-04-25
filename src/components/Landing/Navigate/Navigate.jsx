import React, { useState } from 'react';
import './style.scss';

import logo from 'src/assets/img/logo.png'
import phone from 'src/assets/img/icon-phone.svg'
import menuIcon from 'src/assets/img/icon-menu.svg'
import closeIcon from 'src/assets/img/icon-close.png'


function Navigate () {
  const [menu, setMenu] = useState(false)

  return (
    <div className="nav">
      <div className="nav_body">
        <div className="container">
          <div className="nav_section">
            <a className="nav_logo" >
              <img src={logo} alt="" />
            </a>
            <div className="nav_main">
              <p className='red'>Автомобили с аукционов Copart / Iaai / Manheim</p>
              <ul className='nav_list'>
                <li className='nav_item'>О нас</li>
                <li className='nav_item'>Цены</li>
                <li className='nav_item'>Услуги</li>
              </ul>
            </div>
            <div className="nav_contacts">
              <p className='red'>Нажмите чтобы позвонить</p>
              <p><a className='nav_tel' href="tel:+380950001767">+38 095 000 17 67</a></p>
              <p><a className='nav_tel' href="tel:+380930001767">+38 093 000 17 67</a></p>
            </div>
            <div className="nav_mobile">
              {!menu && <img src={phone} alt="call us" />}
              {!menu && <img src={menuIcon} alt="menu button"  onClick={() => setMenu(true)}/>}
              {menu && <img src={closeIcon} alt="close menu button"  onClick={() => setMenu(false)}/>}
            </div>
          </div>
        </div>
      </div>
      <div className={menu ? `nav_menu active` : `nav_menu`}>
        <div className="container">
          <p className='red'>Нажмите чтобы позвонить</p>
          <p><a className='nav_tel' href="tel:+380950001767">+38 095 000 17 67</a></p>
          <p><a className='nav_tel' href="tel:+380930001767">+38 093 000 17 67</a></p>
          <ul className='nav_list'>
            <li className='nav_item'>О нас</li>
            <li className='nav_item'>Цены</li>
            <li className='nav_item'>Услуги</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navigate;