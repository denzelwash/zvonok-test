<template>
  <div class="card-line">
    <p class="card-line__time">
      <span>00:00</span>
      <span>Ночь</span>
    </p>
    <b class="card-line__temp">34°</b>
    <div class="card-line__icon">
      <img src="@/assets/icons/icn_cloud.svg" alt="" width="60" height="60" />
      <span>Солнечно</span>
    </div>
    <span class="card-line__wind">1 м/с</span>
    <span class="card-line__humidity">85%</span>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.card-line {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 9px 0;
  text-align: center;
  border-bottom: 1px solid rgba(233, 233, 243, 0.1);
  justify-content: space-around;
  &__time {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-bottom: 0;
  }
  &__temp {
    font-size: 48px;
    line-height: 1.3;
    font-weight: 600;
  }
  &__icon {
    display: flex;
    gap: 12px;
    align-items: center;
    width: 194px;
  }
}
</style>
