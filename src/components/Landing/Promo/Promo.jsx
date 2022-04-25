import React from 'react';
import Navigate from 'src/components/Landing/Navigate';
import './style.scss';

function Promo () {
  return (
    <div className='promo'>
      <Navigate />
      <div className='promo_bg' />
      <div className="promo_figure" />
      <div className='promo_container'>
        <h2>АВТО ИЗ АМЕРИКИ ПОД КЛЮЧ</h2>
        <button>Бесплатный подбор <br/> авто под Ваш бюджет</button>
      </div>
    </div>
  )
}

export default Promo;