import React from 'react';
import './style.scss'

const deliveryTexts = [
  {
    title: 'Заявка и консультация',
    text: 'Вы оставляете заявку у нас на сайте. Наш менеджер связывается с вами для консультации и уточнения всех деталей.',
    img: 'https://v8cars.com.ua/img/delivery-step-1.jpg'
  },
  {
    title: 'Подбираем для вас авто',
    text: 'Наши специалисты подбирают для вас наиболее подходящий и выгодный вариант автомобиля на аукционе.',
    img: 'https://v8cars.com.ua/img/delivery-step-2.jpg'
  },
  {
    title: 'Проверка, расчет и выкуп на аукционе',
    text: 'Выбранный автомобиль проходит детальную проверку по всем критериям. Производится расчет итоговой стоимости. После чего автомобиль выкупается на аукционе.',
    img: 'https://v8cars.com.ua/img/delivery-step-3.jpg'
  },
  {
    title: 'Доставка из США в Украину',
    text: 'После выигрыша на аукционе, автомобиль будет подготовлен и отправлен из порта США в Украину. Всю необходимую информацию о доставке Вам будет сообщать наш менеджер.',
    img: 'https://v8cars.com.ua/img/delivery-step-4.jpg'
  },
  {
    title: 'Прибытие в Украину и оформление',
    text: 'После того как авто будет доставлено в Украину, он будет растаможен и отправлен в город конечного назначения.',
    img: 'https://v8cars.com.ua/img/delivery-step-5.jpg'
  },
  {
    title: 'Сертификация и постановка на учет',
    text: 'Заключительным этапом, является сертификация и постановка авто на учёт в МРЕО.',
    img: 'https://v8cars.com.ua/img/delivery-step-6.jpg'
  },
]

function Delivery () {
  return (
    <div className="delivery">
      <div className="container">
        <h2 className="title">Как происходит покупка авто</h2>
        <div className="delivery_wrapper">
          {deliveryTexts && deliveryTexts.map((el, idx) => {
            return (
              <div className="delivery_block" key={ idx }>
                <div 
                  className="block_img"
                  style={{backgroundImage: `url(${ el.img })`}}
                />
                <div className="block_content">
                  <h3>
                    <span>{ idx < 10 ? `0${idx + 1}` : idx + 1 }</span>
                    { el.title }
                  </h3>
                  <p>{ el.text }</p>
                </div>
              </div>
            )
          })}
        </div>
        <div className="btn_wrapper">
          <button className='btn'>Получить консультации <br/> от нашего специалиста</button>
        </div>
      </div>
    </div>
  )
}

export default Delivery;