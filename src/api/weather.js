const key = 'a4c2f2f9491edd82d95310c2d29f5540'

const weatherURL = 'https://api.openweathermap.org/data/2.5/weather'
const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast'

export const getDaily = async (cityName) => {
  await (await fetch(`${weatherURL}?q=${cityName || 'kiev'}
  &appid=${key}`)).json()
}
export const getForecast = async (cityName) => {
  await (await fetch(`${forecastURL}?q=${cityName || 'kiev'}
  &appid=${key}`)).json()
}
