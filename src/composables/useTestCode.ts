import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default function useTestCode() {
  const testcode = ref()
  const router = useRouter()

  const handleSubmit = () => {
    if (testcode.value) {
      localStorage.setItem('testcode', testcode.value)
      router.push({ name: 'dashboard' })
    }
  }

  return {
    testcode,
    handleSubmit,
  }
}
