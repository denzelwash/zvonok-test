<template>
  <RouterView />
  <AppLoader v-if="commonStore.loader" />
</template>

<script setup lang="ts">
import AppLoader from './components/UI/AppLoader.vue'
import { useCommonStore } from './stores/common'
import { getCurrentWeather, getWeatherByHours } from '@/services/queries'
import { useWeatherStore } from '@/stores/weather'
import { onMounted } from 'vue'

const commonStore = useCommonStore()
const weatherStore = useWeatherStore()

onMounted(async () => {
  if (weatherStore.activeCityData === undefined) {
    commonStore.setLoader(true)
    const currentWeatherData = await getCurrentWeather(weatherStore.activeCity)
    const weatherByHoursData = await getWeatherByHours(weatherStore.activeCity)
    if (currentWeatherData) {
      weatherStore.setActiveCityData(currentWeatherData)
    }
    if (weatherByHoursData) {
      weatherStore.setActiveCityDataByHours(weatherByHoursData)
    }
    commonStore.setLoader(false)
  }
})
</script>
