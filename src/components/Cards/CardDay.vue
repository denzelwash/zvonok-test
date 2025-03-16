<template>
  <div class="card-day">
    <p class="card-day__title">Понедельник</p>
    <img src="/icons/icn_cloud.svg" class="card-day__icon" alt="" width="60" height="60" />
    <p class="card-day__temp">35°</p>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.card-day {
  width: 122px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 8px;
  @media (max-width: $sm) {
    width: unset;
    flex-grow: 1;
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
