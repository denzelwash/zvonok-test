import api from './api'
import { PopularCity, type CurrentWeatherResponse, type WeatherByHoursResponse } from '@/types/weather'

const getCurrentWeather = async (city: string): Promise<CurrentWeatherResponse | undefined> => {
  try {
    const url = `weather?q=${city}`
    const response = await api.get(url)
    return response.data
  } catch (error) {
    console.error('Ошибка запроса:', error)
  }
}

const getWeatherByHours = async (city: string): Promise<WeatherByHoursResponse | undefined> => {
  try {
    const url = `forecast?q=${city}`
    const response = await api.get(url)
    return response.data
  } catch (error) {
    console.error('Ошибка запроса:', error)
  }
}

async function getWeatherForPopular(): Promise<CurrentWeatherResponse[] | undefined> {
  const cities = Object.values(PopularCity)
  try {
    const weatherData = await Promise.all(cities.map((city) => getCurrentWeather(city)))
    const validWeatherData = weatherData.filter((data): data is CurrentWeatherResponse => data !== undefined)
    return validWeatherData.length > 0 ? validWeatherData : undefined
  } catch (error) {
    console.error('Ошибка запроса:', error)
  }
}

export { getCurrentWeather, getWeatherByHours, getWeatherForPopular }
