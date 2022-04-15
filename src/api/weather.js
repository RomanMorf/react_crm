const key = 'a4c2f2f9491edd82d95310c2d29f5540'
const baseURL = 'https://api.openweathermap.org/data/2.5/'

export const getDaily = async (city = 'kiev') => {
  if (!localStorage.daily) {
    try {
      const daily =  await (await fetch(`${baseURL}weather?q=${city}'}
        &appid=${key}`)).json()

      localStorage.setItem('daily', JSON.stringify(await daily))
      return await daily
    } catch (e) {
      // console.log(e);
      throw e;
    }

  } else {
    const daily = JSON.parse(localStorage.getItem('daily'))
    return await daily
  }
}

export const getForecast = async (city = 'kiev') => {
  if (!localStorage.forecast) {
    try {
      const forecast = await (await fetch(`${baseURL}forecast?q=${city}'}
        &appid=${key}`)).json()

      localStorage.setItem('forecast', JSON.stringify(await forecast))
      return await forecast
    } catch (e) {
      console.log(e);
    }

  } else {
    const forecast = JSON.parse(localStorage.getItem('forecast'))
    return await forecast

  }
}

export const fetchWeatherByCityName = async (city = 'kiev') => {
  var fullWeather = {}

  try {
    const daily = await (await fetch(`${baseURL}weather?q=${city}&appid=${key}`)).json()
    const info = await (await fetch(`${baseURL}forecast?q=${city}&appid=${key}`)).json()

    if (info.cod === "404" || daily.cod === "404 ") {
      fullWeather = {
        name: "We don't have info about this city",
        cod: "404"
      }
    }

    if (daily.cod !== "404" && info.cod !== "404") {
      fullWeather = {
        ...daily.weather[0],
        ...daily.main,
        ...info,
      }  
    }
    console.log(fullWeather, 'fetchWeatherByCityName');
    return fullWeather

  } catch (e) {
    console.log(e)
    throw e
  }
}

export const getWeatherByCoords = async (coords, part = 'current') => {
  // const partArr = ['current', 'minutely', 'hourly', 'daily', 'alerts']

  const weather = await (await fetch(`${baseURL}onecall?lat=${coords.lat}&lon=${coords.lon}&exclude=${part}&appid=${key}`)).json()

  return weather
}