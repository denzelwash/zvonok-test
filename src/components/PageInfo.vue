<template>
  <div class="page-info">
    <h1 class="page-info__title">Погода в городе Казань</h1>
    <p class="page-info__date">понедельник, 25 августа</p>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.page-info {
  margin-bottom: 48px;
  &__title {
    margin-bottom: 12px;
  }
  &__date {
    font-size: 30px;
    font-weight: 500;
    color: #e9e9f399;
    margin-bottom: 0;
  }
}
</style>
