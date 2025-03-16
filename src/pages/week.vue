<template>
  <div class="container">
    <div class="page-wrapper">
      <PageHeader />
      <PageInfo />
      <WeatherByWeek />
      <PagePopular />
    </div>
  </div>
</template>

<script setup lang="ts">
import PageHeader from '@/components/PageHeader.vue'
import PageInfo from '@/components/PageInfo.vue'
import PagePopular from '@/components/PagePopular.vue'
import WeatherByWeek from '@/components/WeatherByWeek.vue'
</script>

<style lang="scss" scoped></style>
