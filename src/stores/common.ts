import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCommonStore = defineStore('common', () => {
  const loader = ref(false)

  const setLoader = (value: boolean) => {
    loader.value = value
  }

  return { loader, setLoader }
})
