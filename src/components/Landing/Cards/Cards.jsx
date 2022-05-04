import React from 'react';
import './style.scss'

function Cards() {
  return (
    <div className="cards">
      <div className="container">
        <h2 className="cards_title title">Почему у нас дешевле</h2>
        <div className="cards_wrapper">
          <div className="cards_block">Нет скрытых платежей</div>
          <div className="cards_block">Полный просчет автомобиля</div>
          <div className="cards_block">Убедись в лучшей цене в просчёте авто</div>
          <div className="cards_block">Лучшие цены на логистику, из США до Украины</div>
          <div className="cards_block">Наша комиссия одна из самых низких на рынке</div>
          <div className="cards_block">Даём гарантию на просчёт автомобиля</div>
          <div className="cards_block">Покупаем и проверяем как для себя</div>
          <div className="cards_block">Бесплатный CARFAX для своих клиентов</div>
        </div>
      </div>
    </div>
  )
}

export default Cards;