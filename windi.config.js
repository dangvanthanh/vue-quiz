import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  shortcuts: {
    'c-button': {
      '@apply': 'relative inline-flex justify-center px-3 py-2 border border-transparent rounded',
    },
    'c-button-primary': {
      '@apply': 'bg-gray-600 text-white',
    },
    'c-button-outline': {
      '@apply': 'border-gray-600 text-gray-600',
    },
    'c-input': 'border border-gray-600 rounded px-3 py-2',
    'c-toolbar-item': 'flex items-center justify-center bg-gray-600 text-white w-12 h-12 text-lg mx-1 rounded',
  },
})
