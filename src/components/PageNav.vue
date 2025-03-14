<template>
  <nav class="nav">
    <RouterLink to="/">Главная</RouterLink>
    <RouterLink to="/week">Погода за неделю</RouterLink>
  </nav>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.nav {
  display: inline-flex;
  background-color: #e9e9f31a;
  border-radius: 8px;
  @media (max-width: $sm) {
    display: flex;
    width: 100%;
  }
  a {
    font-size: 22px;
    padding: 10px 16px;
    @media (max-width: $md) {
      font-size: 14px;
    }
    @media (max-width: $sm) {
      flex-grow: 1;
    }
    &:not(:last-child) {
      border-right: 1px solid #e9e9f333;
    }
    &:not(.router-link-active) {
      color: #ffffff66;
    }
    &.router-link-active {
      cursor: default;
    }
  }
}
</style>
