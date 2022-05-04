import React from 'react';
import './style.scss'
import { dateFilter } from 'src/helpers/dateFilter'
import { tempConverter } from 'src/helpers/tempConverter'

function WeatherMapper({weather}) {

  return (
    <>
    {weather && 
      <ul className='weather_list'>
      {weather?.hourly && weather.hourly.map(el => {

        return (
          <li className='weather_item' key={`key-${el.dt}`}>
          <details>
            <summary>{dateFilter((el.dt), 'datetime')}</summary>
            <p>feels like: { tempConverter(el.feels_like) } C°</p>
            <p>temp: {  tempConverter(el.temp) } C°</p>
            <p>pressure: { el.pressure } Pa</p>
            <p>visibility: { el.visibility } m</p>
            <p>
              { el.weather[0].main }
              <img 
                src={ `http://openweathermap.org/img/wn/${el.weather[0].icon}@2x.png` } 
                alt={ el.weather[0].main }
              />
            </p>
          </details> 
        </li>
        )
      })}
      </ul>
    }
    </>
  )
}

export default WeatherMapper;