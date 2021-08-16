<script lang="ts" setup>
import useTestCode from '../../composables/useTestCode'

const { testcode, handleSubmit } = useTestCode()
</script>

<template>
  <div class="flex min-h-screen items-center justify-center">
    <div class="max-w-sm w-full">
      <h1 class="mb-6 text-center text-3xl font-extrabold text-gray-900">Enter Code</h1>
      <div class="mb-3">
        <input type="text" placeholder="Code" v-model="testcode" class="block w-full border rounded px-3 py-2" />
      </div>
      <button
        @click.prevent="handleSubmit"
        class="
          relative
          w-full
          flex
          justify-center
          py-2
          px-3
          border border-transparent
          font-medium
          rounded-md
          text-white
          bg-indigo-600
        "
      >
        Submit
      </button>
    </div>
  </div>
</template>



<style>
</style>