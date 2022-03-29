import React, { useEffect } from 'react';
import { getDaily, getForecast } from '../../api/weather'

function Weather() {
  
  useEffect(async () => {
    try {
      console.log(await getDaily('kiev'));
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <h1 className="center">Weather forecast page</h1>
    </div>
  )
}

export default Weather;