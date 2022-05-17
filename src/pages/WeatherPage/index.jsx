import React, { useEffect, useState } from 'react';
import './style.scss';
import { getWeatherByCoords } from 'src/api/weather';
import { useLoading } from 'src/hooks/useLoading';
import { useLocation } from 'src/hooks/useLocation';

import Button from 'src/components/elements/Button';
import Loader from 'src/components/Loader';
import WeatherDailyMapper from 'src/components/WeatherDailyMapper/';
import WeatherHourlyMapper from 'src/components/WeatherHourlyMapper';

function Weather() {
  const [weather, setWeather] = useState(null)
  const {loading, setLoading} = useLoading()
  const {coords, getLocation} = useLocation()

  useEffect(() => {
    refreshWeather()
  }, [coords]);

  const refreshWeather = async () => {
    setLoading(true)

    if (!coords) await getLocation()

    if (coords) {
      const weather = await getWeatherByCoords(coords)
      await setWeather(weather)
    }

    setLoading(false)
  }

  return (
    <div>
      <h1 className="center">Weather forecast page</h1>

      <Button googleIcon='refresh' onClick={refreshWeather} />

      { loading &&  <Loader /> }

      { !loading && <WeatherDailyMapper weather={ weather }/> } 

      { !loading && <WeatherHourlyMapper weather={ weather }/> }

    </div>
  )
}

export default Weather;