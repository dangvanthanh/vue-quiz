<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import {
  Dialog,
  DialogOverlay,
  Popover,
  PopoverButton,
  PopoverPanel,
  TransitionRoot,
  TransitionChild,
} from '@headlessui/vue'

const router = useRouter()

const isOpen = ref(false)

const handleLogout = () => {
  localStorage.removeItem('testcode')
  router.push({ name: 'login' })
}

const handleSubmit = () => {
  isOpen.value = true
}

const handleCloseModal = () => {
  isOpen.value = false
}
</script>

<template>
  <Suspense>
    <template #default>
      <div class="flex flex-col min-h-screen">
        <div class="max-w-md mx-auto my-3">
          <div class="flex flex-wrap">
            <Popover class="relative">
              <PopoverButton
                class="flex items-center justify-center bg-indigo-600 text-white w-12 h-12 text-lg mx-1 rounded"
              >
                <i class="ri-list-check"></i>
              </PopoverButton>
              <transition
                enter-active-class="transition duration-200 ease-out"
                enter-from-class="translate-y-1 opacity-0"
                enter-to-class="translate-y-0 opacity-100"
                leave-active-class="transition duration-150 ease-in"
                leave-from-class="translate-y-0 opacity-100"
                leave-to-class="translate-y-1 opacity-0"
              >
                <PopoverPanel
                  class="absolute z-10 w-screen max-w-sm border-4 border-indigo-600 rounded mt-3 transform left-0"
                >
                  <div class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <div class="relative bg-white max-h-[240px] overflow-y-auto">
                      <div
                        v-for="n in 20"
                        :key="n"
                        class="flex flex-wrap items-center px-3 py-2 border-b border-indigo-400"
                      >
                        <div class="w-8 text-lg">
                          <i class="ri-questionnaire-line"></i>
                        </div>
                        <div class="flex-1">Question {{ n }}</div>
                      </div>
                    </div>
                  </div>
                </PopoverPanel>
              </transition>
            </Popover>
            <button
              class="flex items-center justify-center bg-indigo-600 text-white w-12 h-12 text-lg mx-1 rounded"
              @click="handleSubmit"
            >
              <i class="ri-logout-box-line"></i>
            </button>
          </div>
        </div>
        <TransitionRoot appear :show="isOpen" as="template">
          <Dialog as="div" @close="handleCloseModal">
            <div class="fixed inset-0 z-10 overflow-y-auto">
              <div class="min-h-screen px-4 text-center">
                <TransitionChild
                  as="template"
                  enter="duration-300 ease-out"
                  enter-from="opacity-0"
                  enter-to="opacity-100"
                  leave="duration-200 ease-in"
                  leave-from="opacity-100"
                  leave-to="opacity-0"
                >
                  <DialogOverlay class="bg-black opacity-50 fixed inset-0" />
                </TransitionChild>

                <span class="inline-block h-screen align-middle" aria-hidden="true"> &#8203; </span>

                <TransitionChild
                  as="template"
                  enter="duration-300 ease-out"
                  enter-from="opacity-0 scale-95"
                  enter-to="opacity-100 scale-100"
                  leave="duration-200 ease-in"
                  leave-from="opacity-100 scale-100"
                  leave-to="opacity-0 scale-95"
                >
                  <div
                    class="
                      inline-block
                      w-full
                      max-w-md
                      p-6
                      my-8
                      overflow-hidden
                      text-left
                      align-middle
                      transition-all
                      transform
                      bg-white
                      shadow-xl
                      rounded-2xl
                    "
                  >
                    <div class="mt-2">
                      <p class="text-base text-gray-500">Are you sure you want to submit your session now?</p>
                    </div>

                    <div class="mt-6 text-center">
                      <button
                        type="button"
                        class="
                          relative
                          inline-flex
                          justify-center
                          py-2
                          px-3
                          border
                          border-indigo-600
                          font-medium
                          rounded-md
                          text-indigo-600
                          min-w-[120px]
                          mr-2
                        "
                        @click="handleCloseModal"
                      >
                        No
                      </button>
                      <button
                        type="button"
                        class="
                          relative
                          inline-flex
                          justify-center
                          py-2
                          px-3
                          border border-transparent
                          font-medium
                          rounded-md
                          text-white
                          bg-indigo-600
                          min-w-[120px]
                        "
                        @click="handleLogout"
                      >
                        Yes
                      </button>
                    </div>
                  </div>
                </TransitionChild>
              </div>
            </div>
          </Dialog>
        </TransitionRoot>
      </div>
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>


