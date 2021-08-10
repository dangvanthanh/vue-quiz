<template>
  <h1>Login</h1>
  <input type="text" placeholder="Code" v-model="testcode" />
  <button @click.prevent="handleSubmit">Submit</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useTestCode from '../../composables/useTestCode'

export default defineComponent({
  setup() {
    const { testcode, handleSubmit } = useTestCode()

    return { testcode, handleSubmit }
  },
})
</script>

<style>
</style>