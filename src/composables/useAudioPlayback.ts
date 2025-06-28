import { onMounted, onUnmounted, ref } from 'vue'

import { useTauriKeyPress } from './useTauriKeyPress'

export function useAudioPlayback() {
  const audio = new Audio('/assets/haha.mp3')
  const shortcut = ref('Control+Y')

  const playAudio = () => {
    audio.currentTime = 0 // Reset audio to start
    audio.play().catch(e => console.error('Error playing audio:', e))
  }

  useTauriKeyPress(shortcut, playAudio)

  onMounted(() => {
    // Preload audio if necessary, though browser usually handles it on first play
  })

  onUnmounted(() => {
    // Clean up if needed
  })
}
