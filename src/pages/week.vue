<template>
  <div class="container">
    <div class="page-wrapper">
      <PageHeader />
      <PageInfo />
      <div class="grid">
        <CardDay />
        <CardDay />
        <CardDay />
        <CardDay />
        <CardDay />
        <CardDay />
        <CardDay />
      </div>
      <PagePopular />
    </div>
  </div>
</template>

<script setup lang="ts">
import CardDay from '@/components/Cards/CardDay.vue'
import PageHeader from '@/components/PageHeader.vue'
import PageInfo from '@/components/PageInfo.vue'
import PagePopular from '@/components/PagePopular.vue'
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(7, 122px);
  gap: 20px;
  margin-bottom: 56px;
}
</style>
