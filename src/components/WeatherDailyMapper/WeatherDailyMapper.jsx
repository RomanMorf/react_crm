import React, { useState } from 'react';

import { dateFilter } from 'src/helpers/dateFilter'
import { tempConverter } from 'src/helpers/tempConverter'
import './style.scss'

import arrowImg from 'src/assets/img/arrow_drop_down.png'

function WeatherDailyMapper({weather}) {
  
  return (
    <>
      <ul className='list'>
        {weather && weather.daily.map( el => {
          return (
            <li className='list_item' key={`key-${el.dt}`}>
              <WeatherItem el={el} />
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default WeatherDailyMapper;

function WeatherItem({el}) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div 
        className={open ? "list_header open" : "list_header"} 
        onClick={() => setOpen(!open)}
      >
        <p>{dateFilter(el.dt, 'datetime')}</p>
        <img 
          className={open ? 'list_arrow open' : 'list_arrow'  }
          src={arrowImg} 
          alt="arrow drop down"
        />
      </div>
      <div 
        className={open ? "list_body open" : "list_body"}
      >
        <div className='list_section'>
          <p>Temperature feels like</p>
          <p>{ tempConverter(el.feels_like.morn) } C° - <span>morning</span></p>
          <p>{ tempConverter(el.feels_like.day) } C° - day</p>
          <p>{ tempConverter(el.feels_like.eve) } C° - evening</p>
          <p>{ tempConverter(el.feels_like.night) } C° - night</p>
          <p>{ tempConverter(el.temp.min) } C° - min Temp</p>
          <p>{ tempConverter(el.temp.max) } C° - max Temp</p>
        </div>
        <div className='list_section'>
          <p>sunrise - { dateFilter(el.sunrise , 'time') }</p>
          <p>sunset { dateFilter(el.sunset, 'time') }</p>
          {el.moonrise > 0 && <p>moonrise - { dateFilter(el.moonrise, 'time') }</p>}
          <p>clouds - { el.clouds }%</p>
          <p>pressure - { el.pressure }</p>
          <p>UV index - { el.uvi }</p>
        </div>
        <div className="list_section">
          <p>humidity - { el.humidity }%</p>
          { el.rain && <p>rain - { el.rain }% </p> }
          <p>{ el.weather[0].description }</p>
          <img 
            src={ `http://openweathermap.org/img/wn/${el.weather[0].icon}@2x.png` } 
            alt={ el.weather[0].description } 
          />
        </div>
      </div>
    </>
  )
}