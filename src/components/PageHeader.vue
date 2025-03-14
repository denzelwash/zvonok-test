<template>
  <header class="page-header">
    <PageNav />
    <AppSelect />
  </header>
</template>

<script setup lang="ts">
import PageNav from '@/components/PageNav.vue'
import AppSelect from './UI/AppSelect.vue'
</script>

<style lang="scss" scoped>
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 32px;
  margin-bottom: 56px;
  @media (max-width: $sm) {
    flex-direction: column;
    gap: 16px;
  }
}
</style>
