<template>
  <div class="current-weather">
    <img src="@/assets/icons/icn_cloud.svg" class="current-weather__icon" alt="" width="180" height="180" />
    <b class="current-weather__temp">34°</b>
    <div class="current-weather__desc">
      <p>Облачно</p>
      <p>Влажность: 85%</p>
      <p>Ветер: 1 м/с</p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.current-weather {
  display: flex;
  align-items: center;
  gap: 44px;
  &__temp {
    font-size: 110px;
    font-weight: 700;
    line-height: 1.1;
  }
  &__desc {
    display: flex;
    flex-direction: column;
    gap: 12px;
    font-size: 24px;
    font-weight: 500;
    p {
      margin-bottom: 0;
    }
  }
}
</style>
