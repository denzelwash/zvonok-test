<template>
  <div class="current-weather" v-if="weatherStore.activeCityData !== undefined">
    <img
      :src="`/icons/${ICONS_MAP[weatherStore.activeCityData.weather[0].icon]}.svg`"
      class="current-weather__icon"
      alt=""
      width="180"
      height="180"
    />
    <b class="current-weather__temp">{{ Math.round(weatherStore.activeCityData.main.temp) }}°</b>
    <div class="current-weather__desc">
      <p>{{ weatherStore.activeCityData.weather[0].description }}</p>
      <p>Влажность: {{ weatherStore.activeCityData.main.humidity }}%</p>
      <p>Ветер: {{ weatherStore.activeCityData.wind.speed }} м/с</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ICONS_MAP } from '@/const'
import { useWeatherStore } from '@/stores/weather'

const weatherStore = useWeatherStore()
</script>

<style lang="scss" scoped>
.current-weather {
  display: flex;
  align-items: center;
  gap: 44px;
  @media (max-width: $xxl) {
    gap: 20px;
  }
  @media (max-width: $sm) {
    gap: 16px;
  }
  &__icon {
    @media (max-width: $xxl) {
      width: 120px;
    }
    @media (max-width: $sm) {
      width: 60px;
    }
  }
  &__temp {
    font-size: 100px;
    font-weight: 700;
    line-height: 1.1;
    @media (max-width: $xxl) {
      font-size: 80px;
    }
    @media (max-width: $sm) {
      font-size: 32px;
    }
  }
  &__desc {
    display: flex;
    flex-direction: column;
    gap: 12px;
    font-size: 24px;
    font-weight: 500;

    @media (max-width: $xxl) {
      font-size: 18px;
    }
    @media (max-width: $sm) {
      font-size: 16px;
      gap: 4px;
    }
    p {
      margin-bottom: 0;
      &::first-letter {
        text-transform: uppercase;
      }
    }
  }
}
</style>
