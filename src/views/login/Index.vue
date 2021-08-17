<script lang="ts" setup>
import useTestCode from '../../composables/useTestCode'

const { testcode, handleSubmit } = useTestCode()
</script>

<template>
  <div class="flex min-h-screen items-center justify-center">
    <div class="max-w-sm w-full">
      <h1 class="mb-6 text-center text-3xl font-extrabold text-gray-900">Enter Code</h1>
      <div class="mb-3">
        <input type="text" placeholder="Code" v-model="testcode" class="w-full c-input" />
      </div>
      <button @click.prevent="handleSubmit" class="c-button c-button-primary w-full">Submit</button>
    </div>
  </div>
</template>



<style>
</style>