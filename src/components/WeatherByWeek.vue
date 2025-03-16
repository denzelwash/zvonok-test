<template>
  <div class="grid" v-if="weatherStore.activeCityDataByHours !== undefined">
    <CardDay
      v-for="weather in weekWeather"
      :key="weather.dt"
      :time="weather.dt_txt"
      :icon="weather.weather[0].icon"
      :temp="weather.main.temp"
    />
  </div>
</template>

<script setup lang="ts">
import { useWeatherStore } from '@/stores/weather'
import { computed } from 'vue'
import CardDay from './Cards/CardDay.vue'

const weatherStore = useWeatherStore()

const weekWeather = computed(() => {
  if (weatherStore.activeCityDataByHours === undefined) {
    return []
  }
  return weatherStore.activeCityDataByHours.list.filter((period) => {
    const time = period.dt_txt.split(' ')[1]
    return time === '15:00:00'
  })
})
</script>

<style lang="scss" scoped>
.grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 56px;
}
</style>
