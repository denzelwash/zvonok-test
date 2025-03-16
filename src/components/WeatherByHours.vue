<template>
  <ul class="timeline" v-if="weatherStore.activeCityDataByHours !== undefined">
    <li v-for="weather in todayWeatherByHours" :key="weather.dt">
      <CardLine
        :time="weather.dt_txt"
        :description="weather.weather[0].description"
        :icon="weather.weather[0].icon"
        :temp="weather.main.temp"
        :wind="weather.wind.speed"
        :humidity="weather.main.humidity"
      />
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useWeatherStore } from '@/stores/weather'
import { computed } from 'vue'
import CardLine from './Cards/CardLine.vue'

const weatherStore = useWeatherStore()

const todayWeatherByHours = computed(() => {
  if (weatherStore.activeCityDataByHours === undefined) {
    return []
  }
  const today = weatherStore.activeCityDataByHours.list[0].dt_txt.split(' ')[0]
  let count = 0
  return weatherStore.activeCityDataByHours.list.filter((period) => {
    const isToday = period.dt_txt.split(' ')[0] === today
    if (isToday) {
      return true
    }
    if (!isToday && count === 0) {
      count++
      return true
    }
    return false
  })
})
</script>

<style lang="scss" scoped>
.timeline {
  padding: 0;
  list-style: none;
  margin: 0;
}
</style>
