import React, { useEffect, useState } from 'react';
import './style.scss';
import { getWeatherByCoords } from 'src/api/weather';
import { useLoading } from 'src/hooks/useLoading';
import { useLocation } from 'src/hooks/useLocation';

import Loader from 'src/components/Loader';
import WeatherDailyMapper from 'src/components/WeatherDailyMapper/';
import WeatherHourlyMapper from 'src/components/WeatherHourlyMapper';

function Weather() {
  const [weather, setWeather] = useState(null)
  const {loading, setLoading} = useLoading()
  const {coords, getLocation} = useLocation()

  useEffect(async () => {
    if (!coords) getLocation()

    setLoading(true)

    if (coords) {
      const weather = await getWeatherByCoords(coords)
      await setWeather(weather)
    }

    setLoading(false)
  }, [coords]);

  return (
    <div>
      <h1 className="center">Weather forecast page</h1>

      { loading &&  <Loader /> }

      {(weather && !loading) && <WeatherDailyMapper weather={ weather }/>} 

      {(weather && !loading) && <WeatherHourlyMapper weather={ weather } />}

    </div>
  )
}

export default Weather;