import React from 'react';
import InputField from 'src/components/elements/InputField';
import './style.scss';

function Contacts() {
  return (
    <div className='contacts'>
      <div className='container'>
        <h2 className='title'>Свяжитесь с нами</h2>
        <div className='contacts_body'>
          <h3 className='contacts_title'>Мы организуем весь процесс качественно быстро и недорого</h3>
          <p className='contacts_text'>Наш менеджер перезвонит Вам в течении 10-ти минут и ответит на все Ваши вопросы.</p>
          <form action="submit" className='contacts_form'>
            <div className="contacts_field">
              <InputField placeholder='Ваше имя' />
            </div>
            <div className="contacts_field">
              <InputField placeholder='Ваш телефон' />
            </div>
            <div className="contacts_field">
              <div className="btn_wrapper">
                <button className='btn' type='submit'>Оставить заявку</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contacts;