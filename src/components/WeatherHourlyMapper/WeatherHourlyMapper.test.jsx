import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import WeatherHourlyMapper from './WeatherHourlyMapper'


describe('WeatherHourlyMapper component', () => {
  const weather = {
    hourly: [
      {
        clouds: 100,
        dew_point: 276.93,
        dt: 1650596400,
        feels_like: 274.61,
        humidity: 93,
        pop: 0.3,
        pressure: 1014,
        rain: {'1h': 0.12},
        temp: 278.03,
        uvi: 0,
        visibility: 10000,
        weather: [
          {
            id: 500, 
            main: 'Rain', 
            description: 'light rain', 
            icon: '10d'
          }],
        wind_deg: 139,
        wind_gust: 7.88,
        wind_speed: 4.46,
      },
      {
        clouds: 100,
        dew_point: 276.93,
        dt: 1650606400,
        feels_like: 274.61,
        humidity: 93,
        pop: 0.3,
        pressure: 1014,
        rain: {'1h': 0.12},
        temp: 278.03,
        uvi: 0,
        visibility: 10000,
        weather: [
          {
            id: 500, 
            main: 'Rain', 
            description: 'light rain', 
            icon: '10d'
          }],
        wind_deg: 139,
        wind_gust: 7.88,
        wind_speed: 4.46,
      }
    ]
  }

  it('WeatherHourlyMapper render component', () => {
    render(<WeatherHourlyMapper weather={weather} />);
  })

  it('WeatherHourlyMapper correct key test', () => { 
    const { container } = render(
      <WeatherHourlyMapper weather={weather} />
    );

    const weatherItem = weather.hourly[0]
    const item = container.getElementsByTagName('li')[0]
    const keys = Object.keys(item)
    const correntKey = item[keys[0]].key
    expect(correntKey).toEqual(`key-${weatherItem.dt}`)
  })

  it('WeatherHourlyMapper correct mapper test', () => { 
    const { container } = render(
      <WeatherHourlyMapper weather={weather} />
    );

    const item = weather.hourly[0]

    expect(container.querySelectorAll('p')[0].innerHTML)
      .toEqual(`feels like: ${(item.feels_like -273.15).toFixed(0)} C°`)

    expect(container.querySelectorAll('p')[1].innerHTML)
      .toEqual(`temp: ${(item.temp -273.15).toFixed(0)} C°`)

    expect(container.querySelectorAll('p')[2].innerHTML)
      .toEqual(`pressure: ${item.pressure} Pa`)

    expect(container.querySelectorAll('p')[3].innerHTML)
      .toEqual(`visibility: ${item.visibility} m`)
  })

});

