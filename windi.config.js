import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  shortcuts: {
    'c-button': {
      '@apply': 'relative inline-flex justify-center px-3 py-2 border border-transparent rounded',
    },
    'c-button-primary': {
      '@apply': 'bg-green-600 text-white',
    },
    'c-button-outline': {
      '@apply': 'border-green-600 text-green-600',
    },
    'c-input': 'border border-green-600 rounded px-3 py-2',
    'c-toolbar-item': 'flex items-center justify-center bg-green-600 text-white w-12 h-12 text-lg mx-1 rounded',
  },
})
