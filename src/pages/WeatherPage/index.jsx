import React, { useEffect, useState } from 'react'
import './style.scss'
import { fetchWeather } from '../../api/weather'
import WeatherMapper from '../../components/WeatherMapper'
import Loader from '../../components/Loader'

function Weather() {
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData () {
      const weather = await fetchWeather('lviv')
      setWeather(weather)
      setLoading(false)
    }

    fetchData()
  }, []);


  return (
    <div>
      <h1 className="center">Weather forecast page</h1>

      {loading && <div className='center'>
        <p className="loading">Fetching weather data...</p>
        <Loader />
      </div>}

      {(weather && !loading) && <div>
        <p>feels_like { (weather.feels_like -273.15).toFixed(0) }  C°</p>
        <p>humidity { weather.humidity } %</p>
        <p>pressure { weather.pressure } </p>
        <p>temp { weather.temp }  C°</p>
      </div>}

      {(weather && !loading) && <WeatherMapper weather={ weather } />}

    </div>
  )
}

export default Weather;