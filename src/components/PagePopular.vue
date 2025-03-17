<template>
  <div class="popular" v-if="weatherStore.popularCitiesData.length > 0">
    <div class="popular-title">
      <h2 class="popular-title__text">Погода в популярных городах</h2>
      <div class="popular-title__tip" v-tippy="{ content: 'Какой-то текст c подсказкой...' }">
        <img src="/icons/icn_question.svg" alt="" width="18" height="18" />
      </div>
    </div>
    <div class="popular-grid">
      <CardPopular
        v-for="city in weatherStore.popularCitiesData"
        :key="city.id"
        :name="city.name"
        :description="city.weather[0].description"
        :icon="city.weather[0].icon"
        :temp="city.main.temp"
        :humidity="city.main.humidity"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useWeatherStore } from '@/stores/weather'
import CardPopular from './Cards/CardPopular.vue'
import { onBeforeMount } from 'vue'
import { getWeatherForPopular } from '@/services/queries'

const weatherStore = useWeatherStore()

onBeforeMount(async () => {
  if (weatherStore.popularCitiesData.length === 0) {
    const data = await getWeatherForPopular()
    if (data) {
      weatherStore.setPopularCitiesData(data)
    }
  }
})
</script>

<style lang="scss" scoped>
.popular {
  margin-top: auto;
}
.popular-title {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 36px;
  &__text {
    margin-bottom: 0;
  }
  &__tip {
    width: 38px;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #e9e9f31a;
    border-radius: 50%;
    flex-shrink: 0;
    @media (max-width: $md) {
      width: 24px;
      height: 24px;
    }
    img {
      @media (max-width: $md) {
        width: 14px;
        height: 14px;
      }
    }
  }
}
.popular-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 36px;
  @media (max-width: $xxl) {
    gap: 16px;
  }
  @media (max-width: $lg) {
    gap: 12px;
  }
  @media (max-width: $md) {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
