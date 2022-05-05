import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { tempConverter } from 'src/helpers/tempConverter'
import { dateFilter } from 'src/helpers/dateFilter'

import WeatherDailyMapper from './WeatherDailyMapper'

describe('WeatherDailyMapper component', () => {
  const weather = {
    daily: [
      {
        clouds: 11,
        dew_point: 270.88,
        dt: 1651741200,
        feels_like: {day: 283.38, night: 278.98, eve: 284.35, morn: 274.2},
        humidity: 36,
        moon_phase: 0.14,
        moonrise: 1651726080,
        moonset: 1651699860,
        pop: 0,
        pressure: 1026,
        sunrise: 1651717544,
        sunset: 1651771353,
        temp: {day: 285.18, min: 277.17, max: 286.15, night: 280.64, eve: 285.99, night: 280.64},
        uvi: 5.16,
        weather: [{id: 801, main: 'Clouds', description: 'few clouds', icon: '02d'}],
        wind_deg: 29,
        wind_gust: 10.5,
        wind_speed: 4.55,
      },
      {
        clouds: 11,
        dew_point: 270.88,
        dt: 1651742200,
        feels_like: {day: 283.38, night: 278.98, eve: 284.35, morn: 274.2},
        humidity: 36,
        moon_phase: 0.14,
        moonrise: 1651726080,
        moonset: 1651699860,
        pop: 0,
        pressure: 1026,
        sunrise: 1651717544,
        sunset: 1651771353,
        temp: {day: 285.18, min: 277.17, max: 286.15, night: 280.64, eve: 285.99, night: 280.64},
        uvi: 5.16,
        weather: [{id: 801, main: 'Clouds', description: 'few clouds', icon: '02d'}],
        wind_deg: 29,
        wind_gust: 10.5,
        wind_speed: 4.55,
      }
    ]
  }

  it('WeatherDailyMapper render component', () => {
    render(<WeatherDailyMapper weather={weather} />);
  })

  it('WeatherDailyMapper render 2 li elements', () => {
    const { container } = render(
      <WeatherDailyMapper weather={weather} />
    );

    const liElements = container.getElementsByTagName('li')

    expect(liElements.length).toEqual(2)
  })


  it('WeatherDailyMapper correct key test', () => { 
    const { container } = render(
      <WeatherDailyMapper weather={weather} />
    );

    const weatherItem = weather.daily[0]
    const item = container.getElementsByTagName('li')[0]
    const keys = Object.keys(item)
    const correntKey = item[keys[0]].key
    expect(correntKey).toEqual(`key-${weatherItem.dt}`)
  })

  it('WeatherDailyMapper correct mapper test', () => { 
    const { container } = render(
      <WeatherDailyMapper weather={weather} />
    );

    const item = weather.daily[0]

    expect(container.querySelectorAll('p')[0].textContent)
      .toEqual(`${dateFilter(item.dt, 'datetime')}`)


    expect(container.querySelectorAll('p')[2].textContent)
      .toEqual(`${tempConverter(item.feels_like.morn)} C° - morning`)

    expect(container.querySelectorAll('p')[3].textContent)
      .toEqual(`${tempConverter(item.feels_like.day)} C° - day`)

    expect(container.querySelectorAll('p')[4].textContent)
      .toEqual(`${tempConverter(item.feels_like.eve)} C° - evening`)
  })

});

