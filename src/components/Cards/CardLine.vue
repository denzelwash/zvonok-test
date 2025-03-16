<template>
  <div class="card-line">
    <p class="card-line__time">
      <span>{{ time }}</span>
      <span>{{ TIME_MAP[time] }}</span>
    </p>
    <b class="card-line__temp">{{ Math.round(props.temp) }}°</b>
    <div class="card-line__icon">
      <img :src="`/icons/${ICONS_MAP[props.icon]}.svg`" alt="" width="60" height="60" />
      <span>{{ props.description }}</span>
    </div>
    <span class="card-line__wind">{{ Math.round(props.wind) }} м/с</span>
    <span class="card-line__humidity">{{ props.humidity }}%</span>
  </div>
</template>

<script setup lang="ts">
import { ICONS_MAP, TIME_MAP } from '@/const'
import type { Icon } from '@/types/weather'
import { computed } from 'vue'

const props = defineProps<{
  time: string
  description: string
  icon: Icon
  temp: number
  wind: number
  humidity: number
}>()

const time = computed(() => {
  const time = props.time.split(' ')[1].slice(0, 5)
  return time as keyof typeof TIME_MAP
})
</script>

<style lang="scss" scoped>
.card-line {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 9px 0;
  text-align: center;
  border-bottom: 1px solid rgba(233, 233, 243, 0.1);
  justify-content: space-around;
  @media (max-width: $sm) {
    gap: 4px;
    justify-content: space-between;
  }
  &__time {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-bottom: 0;
    @media (max-width: $xl) {
      font-size: 14px;
    }
    @media (max-width: $sm) {
      font-size: 12px;
    }
  }
  &__temp {
    font-size: 48px;
    line-height: 1.3;
    font-weight: 600;
    width: 100px;
    @media (max-width: $xl) {
      font-size: 32px;
    }
    @media (max-width: $sm) {
      width: 44px;
      font-size: 18px;
    }
  }
  &__icon {
    display: flex;
    gap: 12px;
    align-items: center;
    width: 210px;
    text-align: left;
    @media (max-width: $xl) {
      width: 170px;
    }
    @media (max-width: $sm) {
      width: 110px;
      flex-direction: column;
      font-size: 12px;
      gap: 4px;
      text-align: center;
    }
    img {
      @media (max-width: $xl) {
        width: 40px;
      }
    }
    span {
      @media (max-width: $xl) {
        font-size: 14px;
      }
      &::first-letter {
        text-transform: uppercase;
      }
    }
  }
  &__wind {
    @media (max-width: $xl) {
      font-size: 14px;
    }
  }
  &__humidity {
    @media (max-width: $xl) {
      font-size: 14px;
    }
  }
}
</style>
