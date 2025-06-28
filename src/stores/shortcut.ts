import { defineStore } from 'pinia'
import { ref } from 'vue'

export type HotKey = 'visibleCat' | 'mirrorMode' | 'penetrable' | 'alwaysOnTop'

export const useShortcutStore = defineStore('shortcut', () => {
  const visibleCat = ref('Control+1')
  const visiblePreference = ref('')
  const mirrorMode = ref('')
  const penetrable = ref('')
  const alwaysOnTop = ref('')

  return {
    visibleCat,
    visiblePreference,
    mirrorMode,
    penetrable,
    alwaysOnTop,
  }
})
