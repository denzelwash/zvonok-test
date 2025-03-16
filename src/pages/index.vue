<template>
  <div class="container">
    <div class="page-wrapper">
      <PageHeader />
      <PageInfo />
      <div class="grid">
        <CurrentWeather />
        <WeatherByHours />
      </div>
      <PagePopular />
    </div>
  </div>
</template>

<script setup lang="ts">
import CurrentWeather from '@/components/CurrentWeather.vue'
import PageHeader from '@/components/PageHeader.vue'
import PageInfo from '@/components/PageInfo.vue'
import PagePopular from '@/components/PagePopular.vue'
import WeatherByHours from '@/components/WeatherByHours.vue'
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 645px;
  margin-bottom: 56px;
  align-items: start;
  @media (max-width: $xxl) {
    grid-template-columns: 50% 50%;
  }
  @media (max-width: $lg) {
    grid-template-columns: 100%;
    gap: 32px;
  }
}
</style>
