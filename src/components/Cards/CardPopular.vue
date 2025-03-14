<template>
  <div class="card-popular">
    <p class="card-popular__city">Москва</p>
    <p class="card-popular__desc">Солнечно</p>
    <img src="@/assets/icons/icn_cloud.svg" class="card-popular__icon" alt="" width="60" height="60" />
    <b class="card-popular__temp">34°</b>
    <span class="card-popular__humidity">Влажность: 80%</span>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.card-popular {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 26px;
  border: 1px solid #4e7ea4;
  border-radius: 8px;
  background: radial-gradient(134.39% 134.39% at -17.89% -22.86%, rgba(255, 255, 255, 0.2) 0%, rgba(238, 237, 237, 0.1) 100%);
  text-align: center;
  cursor: pointer;
  flex-grow: 1;
  @media (max-width: $lg) {
    padding: 16px;
  }
  @media (max-width: $sm) {
    padding: 16px 12px;
  }
  &__city {
    font-size: 26px;
    font-weight: 500;
    margin-bottom: auto;
    @media (max-width: $lg) {
      font-size: 20px;
    }
    @media (max-width: $sm) {
      font-size: 16px;
    }
  }
  &__desc {
    margin: 8px 0 16px;
    @media (max-width: $sm) {
      font-size: 14px;
    }
  }
  &__icon {
    margin-bottom: 16px;
    @media (max-width: $sm) {
      width: 40px;
      height: 40px;
    }
  }
  &__temp {
    font-size: 48px;
    font-weight: 600;
    line-height: 1.3;
    margin-bottom: 16px;
    @media (max-width: $lg) {
      font-size: 32px;
    }
    @media (max-width: $sm) {
      font-size: 24px;
    }
  }
  &__humidity {
    font-weight: 500;
    margin-bottom: 0;
    @media (max-width: $sm) {
      font-size: 14px;
    }
  }
}
</style>
