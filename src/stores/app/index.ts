import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
  const version = ref('v0.0.1')

  return {
    version,
  }
})
