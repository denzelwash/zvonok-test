<template>
  <div class="card-day">
    <p class="card-day__title">{{ day }}</p>
    <img :src="`/icons/${ICONS_MAP[props.icon]}.svg`" class="card-day__icon" alt="" width="60" height="60" />
    <p class="card-day__temp">{{ Math.round(props.temp) }}°</p>
  </div>
</template>

<script setup lang="ts">
import { DAYS_OF_WEEK, ICONS_MAP } from '@/const'
import type { Icon } from '@/types/weather'
import { computed } from 'vue'

const props = defineProps<{
  time: string
  icon: Icon
  temp: number
}>()

const day = computed(() => {
  const date = new Date(props.time)
  return DAYS_OF_WEEK[date.getDay()]
})
</script>

<style lang="scss" scoped>
.card-day {
  width: 122px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 8px;
  @media (max-width: $sm) {
    width: 110px;
  }
  @media (max-width: $xs) {
    width: calc(50% - 10px);
    text-align: left;
    align-items: flex-start;
  }
  &__title {
    margin-bottom: 0;
    @media (max-width: $xl) {
      font-size: 16px;
    }
  }
  &__icon {
    @media (max-width: $sm) {
      width: 40px;
    }
  }
  &__temp {
    margin-bottom: 0;
    @media (max-width: $xl) {
      font-size: 16px;
    }
  }
}
</style>
