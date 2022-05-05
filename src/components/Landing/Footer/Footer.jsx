import React from 'react';
import './style.scss'

import clock from 'src/assets/img/widget-clock.svg'
import address from 'src/assets/img/widget-address.svg'
import mail from 'src/assets/img/widget-mail.svg'
import phone from 'src/assets/img/widget-phone.svg'
import logo from 'src/assets/img/logo-landing.png'

function Footer() {
  return (
    <div className='landing_footer'>
      <div className="container">
        <div className="footer_body">
          <div className='footer_widget'>
            <img src={clock} alt="icon" />
            <h3 className='widget_title'>График работы:</h3>
            <p className='widget_text'>По будням с 11:00 до 20:00</p>
            <p className='widget_text'>Суббота выходной</p>
            <p className='widget_text'>Воскресенье выходной</p>
          </div>
          <div className='footer_widget'>
            <img src={phone} alt="icon" />
            <h3 className='widget_title'>Телефоны:</h3>
            <p className='widget_text'>+38 095 000 17 67</p>
            <p className='widget_text'>+38 093 000 17 67</p>
          </div>
        </div>
        <div className="footer_body">
          <div className='footer_widget'>
            <img src={mail} alt="icon" />
            <h3 className='widget_title'>Сайты, почта и соц. сети:</h3>
            <p className='widget_text'>V8CARSUA@gmail.com</p>
          </div>
          <div className='footer_widget'>
            <img src={address} alt="icon" />
            <h3 className='widget_title'>Адрес:</h3>
            <p className='widget_text'>ул. Радистов 34</p>
            <p className='widget_text'>г. Киев,</p>
            <p className='widget_text'>Украина, 02000</p>
          </div>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="container">
          <div className="wrapper">
            <div>V8CARS.UA 2021 © Все права защищены</div>
            <div><img src={logo} alt="Авто из США V8CARS.UA" /></div>
            <div className='red'>Политика конфиденциальности</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;