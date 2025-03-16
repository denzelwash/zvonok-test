import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import type { CurrentWeatherResponse, WeatherByHoursResponse } from '@/types/weather'
import { getCurrentWeather, getWeatherByHours } from '@/services/queries'
import { CITIES } from '@/const'

export const useWeatherStore = defineStore('weather', () => {
  const activeCity = ref(CITIES[0])
  const activeCityData = ref<CurrentWeatherResponse>()
  const activeCityDataByHours = ref<WeatherByHoursResponse>()
  const popularCitiesData = ref<CurrentWeatherResponse[]>([])

  const setActiveCity = (city: string) => {
    activeCity.value = city
  }

  const setActiveCityData = (data: CurrentWeatherResponse) => {
    activeCityData.value = data
  }

  const setActiveCityDataByHours = (data: WeatherByHoursResponse) => {
    activeCityDataByHours.value = data
  }

  const setPopularCitiesData = (data: CurrentWeatherResponse[]) => {
    popularCitiesData.value = data
  }

  watch(activeCity, async (newVal) => {
    const currentWeatherData = await getCurrentWeather(newVal)
    const weatherByHoursData = await getWeatherByHours(newVal)
    if (currentWeatherData) {
      setActiveCityData(currentWeatherData)
    }
    if (weatherByHoursData) {
      setActiveCityDataByHours(weatherByHoursData)
    }
  })

  return {
    activeCity,
    activeCityData,
    activeCityDataByHours,
    popularCitiesData,
    setActiveCityData,
    setActiveCityDataByHours,
    setPopularCitiesData,
    setActiveCity,
  }
})
