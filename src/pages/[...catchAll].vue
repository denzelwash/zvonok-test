<template>
  <div class="container">
    <div class="page-wrapper">
      <div class="error">
        <h1>404</h1>
        <RouterLink to="/">На главную</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.page-wrapper {
  justify-content: center;
}
.error {
  text-align: center;
  h1 {
    margin-bottom: 8px;
  }
  a {
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
