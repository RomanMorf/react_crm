import './style.scss'
import { dateFilter } from 'src/helpers/dateFilter'

function WeatherMapper({weather}) {

  return (
    <>
    {weather && 
      <ul className='weather_list'>
      {weather?.hourly && weather.hourly.map(el => {

        return (
          <li className='weather_item' key={el.dt}>
          <details>
            <summary>{dateFilter((el.dt), 'datetime')}</summary>
            <p>feels like: { (el.feels_like -273.15).toFixed(0) } C°</p>
            <p>temp: { (el.temp -273.15).toFixed(0) } C°</p>
            <p>pressure: { el.pressure } Pa</p>
            <p>visibility: { el.visibility } m</p>
            <p>
              { el.weather[0].main }
              <img 
                src={ 'http://openweathermap.org/img/wn/' + el.weather[0].icon + '.png' } 
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