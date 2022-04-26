import React from 'react';
import './style.scss'

function OurServices() {
  return (
    <div className='services'>
      <div className="container">
        <h2 className='title'>Стоимость наших услуг</h2>
        <div className="services_main">
          <div className="services_header">
            <p><b>Авто "Под ключ"</b></p>
            <p>Стоимость: <span>500$</span></p>
          </div>
          <div className="services_body">
            <ul className='services_list'>
              <li className='services_item'>Поиск подходящего варианта.</li>
              <li className='services_item'>Проверка продавца.</li>
              <li className='services_item'>Проверка документов автомобиля.</li>
              <li className='services_item'>Проверка соответствия авто нормам Евро-5.</li>
              <li className='services_item'>Помощь в оценке предварительной стоимости ремонта автомобиля.</li>
              <li className='services_item'>Покупка платных отчетов истории автомобиля.</li>
              <li className='services_item'>Покупка автомобиля на аукционе.</li>
              <li className='services_item'>Страхование автомобиля.</li>
            </ul>
            <ul className='services_list'>
              <li className='services_item'>Организация логистики по США.</li>
              <li className='services_item'>Фото-отчет из порта США.</li>
              <li className='services_item'>Организация логистики в Украину.</li>
              <li className='services_item'>Организация растаможки автомобиля.</li>
              <li className='services_item'>Организация доставки в город клиента.</li>
              <li className='services_item'>Организация ремонта автомобиля.</li>
              <li className='services_item'>Организация сертификации автомобиля.</li>
              <li className='services_item'>Организация постановки на учёт автомобиля.</li>
            </ul>
          </div>
          <div className="btn_wrapper">
            <button className='btn'>Заказать доставку авто</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default OurServices;


