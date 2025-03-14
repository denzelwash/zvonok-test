<template>
  <div class="card-day">
    <p class="card-day__title">Понедельник</p>
    <img src="@/assets/icons/icn_cloud.svg" class="card-day__icon" alt="" width="60" height="60" />
    <p class="card-day__temp">35°</p>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.card-day {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 8px;
  &__title {
    margin-bottom: 0;
  }
  &___temp {
    margin-bottom: 0;
  }
}
</style>
