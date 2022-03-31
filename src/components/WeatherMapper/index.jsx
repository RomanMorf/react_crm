import './style.scss'

function WeatherMapper({weather}) {
  return (
    <>
    {weather && 
      <ul className='weather_list'>
      {weather.list.map(el => 
        <li className='weather_item' key={el.dt}>
          <details>
            <summary>{el.dt_txt}</summary>
            <p>On date: { el.dt_txt.split(' ')[0] }</p>
            <p>At time: { el.dt_txt.split(' ')[1] }</p>
            <p>Temp: { (el.main.temp -273.15).toFixed(0) } C°</p>
            <p>Min temp: { (el.main.temp_min -273.15).toFixed(0) } C°</p>
            <p>Max temp: { (el.main.temp_max -273.15).toFixed(0) } C°</p>
            <p>Visibility: { el.visibility } m</p>
            <p>
              { el.weather[0].main }
              <img 
                src={ 'http://openweathermap.org/img/wn/' + el.weather[0].icon + '.png' } 
                alt={ el.weather[0].main }
              />
            </p>

          </details> 
        </li>
        )}
      </ul>
    }
    </>
  )
}

export default WeatherMapper;