import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

import WeatherDaily from './WeatherDaily'

describe('WeatherDaily component', () => {
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
    ],
    timezone: 'Europe/Kiev'

  }

  it('WeatherDaily render component', () => {
    render(<WeatherDaily weather={weather} />);
  })

  it('WeatherDaily correct key test', () => { 
    const { container } = render(
      <WeatherDaily weather={weather} />
    );

    const weatherItem = weather.daily[0]
    const item = container.getElementsByClassName('forecast-item')[0]
    const keys = Object.keys(item)
    const correntKey = item[keys[0]].key
    expect(correntKey).toEqual(`forecast-${weatherItem.dt}`)
  })
});

