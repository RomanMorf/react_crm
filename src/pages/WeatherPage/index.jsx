import React, { useEffect, useState } from 'react';
import './style.scss';
import { getWeatherByCoords } from 'src/api/weather';
import { useLoading } from 'src/hooks/useLoading';
import { useLocation } from 'src/hooks/useLocation';

import WeatherMapper from 'src/components/WeatherMapper';
import Loader from 'src/components/Loader';

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

      {(weather && !loading) && <WeatherMapper weather={ weather } />}

    </div>
  )
}

export default Weather;