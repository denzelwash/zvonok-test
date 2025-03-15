import { defineStore } from 'pinia'
import { ref } from 'vue'
import { City } from '@/types/weather'

export const useWeatherStore = defineStore('weather', () => {
  const activeCity = ref(City.Kazan)
  const popularCitiesData = ref(null)
  const currentCityData = ref(null)

  const setPopularCitiesData = (data) => {
    popularCitiesData.value = data
  }

  const setCurrentCityData = (data) => {
    popularCitiesData.value = data
  }

  const setActiveCity = (city: City) => {
    activeCity.value = city
  }

  return {
    activeCity,
    popularCitiesData,
    currentCityData,
    setPopularCitiesData,
    setCurrentCityData,
    setActiveCity,
  }
})
