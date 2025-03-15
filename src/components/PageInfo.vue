<template>
  <div class="page-info">
    <h1 class="page-info__title">Погода в городе {{ weatherStore.activeCity }}</h1>
    <p class="page-info__date">{{ getCurrentDate() }}</p>
  </div>
</template>

<script setup lang="ts">
import { useWeatherStore } from '@/stores/weather'

const weatherStore = useWeatherStore()

const getCurrentDate = () => {
  const date = new Date()
  const formattedDate = new Intl.DateTimeFormat('ru-RU', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  }).format(date)
  return formattedDate
}
</script>

<style lang="scss" scoped>
.page-info {
  margin-bottom: 48px;
  &__title {
    margin-bottom: 12px;
    @media (max-width: $sm) {
      margin-bottom: 4px;
    }
  }
  &__date {
    font-size: 30px;
    font-weight: 500;
    color: #e9e9f399;
    margin-bottom: 0;
    @media (max-width: $md) {
      font-size: 20px;
    }
    @media (max-width: $sm) {
      font-size: 16px;
    }
  }
}
</style>
