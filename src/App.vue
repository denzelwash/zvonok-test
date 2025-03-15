<template>
  <RouterView />
  <AppLoader v-if="commonStore.loader" />
</template>

<script setup lang="ts">
import AppLoader from './components/UI/AppLoader.vue'
import { useCommonStore } from './stores/common'

const commonStore = useCommonStore()
</script>
