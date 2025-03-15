import api from './api'
import { PopularCity } from '@/types/weather'

const getCurrentWeather = async (city: string) => {
  try {
    const url = `weather?q=${city}`
    const response = await api.get(url)
    return response.data
  } catch (error) {
    console.error('Ошибка запроса:', error)
  }
}

const getWeatherByHours = async (city: string) => {
  try {
    const url = `forecast?q=${city}`
    const response = await api.get(url)
    return response.data
  } catch (error) {
    console.error('Ошибка запроса:', error)
  }
}

async function getWeatherForPopular() {
  const cities = Object.values(PopularCity)
  try {
    const weatherData = await Promise.all(cities.map((city) => getCurrentWeather(city)))
    return weatherData
  } catch (error) {
    console.error('Ошибка запроса:', error)
  }
}

export { getCurrentWeather, getWeatherByHours, getWeatherForPopular }
