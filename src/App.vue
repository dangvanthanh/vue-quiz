<template>
  <router-view />
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'

onMounted(() => {
  window.localStorage.clear()
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
