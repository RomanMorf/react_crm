import React from 'react';
import './style.scss';

function Promo ({children}) {
  return (
    <div className='promo'>
      {children}
      <div className='promo_bg' />
      <div className="promo_figure" />
      <div className='promo_container'>
        <h2>АВТО ИЗ АМЕРИКИ ПОД КЛЮЧ</h2>
        <button className='btn'>Бесплатный подбор <br/> авто под Ваш бюджет</button>
      </div>
    </div>
  )
}

export default Promo;