<template>
  <header class="page-header">
    <PageNav />
    <AppSelect
      :options="selectOptions"
      :modelValue="weatherStore.activeCity"
      @update:modelValue="(value) => weatherStore.setActiveCity(value)"
    />
  </header>
</template>

<script setup lang="ts">
import PageNav from '@/components/PageNav.vue'
import AppSelect from './UI/AppSelect.vue'
import { useWeatherStore } from '@/stores/weather'
import { computed } from 'vue'
import { CITIES } from '@/const'

const weatherStore = useWeatherStore()

const selectOptions = computed(() => {
  return CITIES.filter((city) => city !== weatherStore.activeCity)
})
</script>

<style lang="scss" scoped>
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 32px;
  margin-bottom: 56px;
  @media (max-width: $sm) {
    flex-direction: column;
    gap: 16px;
  }
}
</style>
