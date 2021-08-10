<template>
  <Suspense>
    <template #default>
      <div>
        <h1>Dashboard</h1>
        <button @click.prevent="handleLogout">Logout</button>
      </div>
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const router = useRouter()
    const handleLogout = () => {
      localStorage.removeItem('testcode')
      router.push({ name: 'login' })
    }

    return {
      handleLogout,
    }
  },
})
</script>
