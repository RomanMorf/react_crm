import { useEffect, useState } from 'react'
import { dateFilter } from 'src/helpers/dateFilter'
import { tempConverter } from 'src/helpers/tempConverter'
import './style.scss'

function WeatherDaily({weather}) {
  const [current, setCurrent] = useState(null)

  useEffect(() => {
    if (weather) {
      setCurrent(weather.daily[0].dt)
    }
  }, [weather])

  return (
    <>
    <div className="forecast">
      <h3 className='center'>Weather widget</h3>
      {weather && <h4 className='center'>{weather.timezone.split('/')[1]}</h4>}
      {current && <p className='center'>{ dateFilter(current, 'date') }</p>}

      <div className='forecast-body'>
        {weather && weather.daily.map( el => {
            return (
              <div 
                className={`forecast-item ${current === el.dt ? 'select' : ''}`} 
                key={`forecast-${el.dt}`}
              >
                <WeatherItem el={el} />
              </div>
            )
          })}
      </div>

      <div className='forecast-bottom'>
        {weather && weather.daily.map( el => (
            <div 
              onClick={() => setCurrent(el.dt)}
              className={`forecast-btn ${current === el.dt ? 'select' : ''}`}
            >
              <span>{(dateFilter(el.dt, 'date').split('/')[0])}/</span>
              <span>{(dateFilter(el.dt, 'date').split('/')[1])}/</span>
              <span>{(dateFilter(el.dt, 'date').split('/')[2])}</span>
            </div>
          )
        )}
      </div>
    </div>
    </>
  )
}

export default WeatherDaily;


function WeatherItem({el}) {
  return (
    <>
      <div className='forecast_section'>
        <p>Temperature feels like</p>
        <p>{ tempConverter(el.feels_like.morn) } C° - <span>morning</span></p>
        <p>{ tempConverter(el.feels_like.day) } C° - day</p>
        <p>{ tempConverter(el.feels_like.eve) } C° - evening</p>
        <p>{ tempConverter(el.feels_like.night) } C° - night</p>
        <p>{ tempConverter(el.temp.min) } C° - min Temp</p>
        <p>{ tempConverter(el.temp.max) } C° - max Temp</p>
      </div>
      <div className='forecast_section'>
        <p>sunrise - { dateFilter(el.sunrise , 'time') }</p>
        <p>sunset { dateFilter(el.sunset, 'time') }</p>
        {el.moonrise > 0 && <p>moonrise - { dateFilter(el.moonrise, 'time') }</p>}
        <p>clouds - { el.clouds }%</p>
        <p>pressure - { el.pressure }</p>
        <p>UV index - { el.uvi }</p>
      </div>
      <div className="forecast_section">
        <p>humidity - { el.humidity }%</p>
        { el.rain && <p>rain - { el.rain }% </p> }
        <p>{ el.weather[0].description }</p>
        <img 
          src={ `http://openweathermap.org/img/wn/${el.weather[0].icon}@2x.png` } 
          alt={ el.weather[0].description } 
        />
      </div>
    </>
  )
}