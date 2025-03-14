<template>
  <div class="container">
    <div class="page-wrapper">
      <PageHeader />
      <PageInfo />
      <div class="grid">
        <CurrentWeather />
        <ul class="timeline">
          <li>
            <CardLine />
          </li>
          <li>
            <CardLine />
          </li>
          <li>
            <CardLine />
          </li>
        </ul>
      </div>
      <PagePopular />
    </div>
  </div>
</template>

<script setup lang="ts">
import CardLine from '@/components/Cards/CardLine.vue'
import CurrentWeather from '@/components/CurrentWeather.vue'
import PageHeader from '@/components/PageHeader.vue'
import PageInfo from '@/components/PageInfo.vue'
import PagePopular from '@/components/PagePopular.vue'
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 645px;
  margin-bottom: 56px;
  align-items: start;
}
.timeline {
  padding: 0;
  list-style: none;
  margin: 0;
}
</style>
