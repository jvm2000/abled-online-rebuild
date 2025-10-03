<script setup lang="ts">
import { ref, watch } from 'vue'
import { TransitionRoot, TransitionChild, Dialog, DialogPanel } from '@headlessui/vue'
import { XMarkIcon, CalendarIcon } from '@heroicons/vue/24/outline'

const isOpen = ref(false)

watch(isOpen, (val) => {
  if (val) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})
</script>

<template>
  <div @click="isOpen = true">
    <slot />
  </div>

  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="isOpen = false" class="relative z-[9999]">
      <TransitionChild
        as="template"
        enter="duration-150 ease-in-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-150 ease-in-out"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/80" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center">
          <TransitionChild
            as="template"
            enter="duration-150 ease-in-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-150 ease-in-out"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-4xl transform rounded-lg bg-white py-6 px-10 text-left align-middle shadow-xl transition-all relative"
            >
              <button @click="isOpen = false" class="absolute right-6 top-3">
                <XMarkIcon class="size-6 stroke-gray-800" />
              </button>

              <div class="flex flex-col items-start space-y-6">
                <div class="justify-start space-y-2">
                  <div class="bg-teal-600 px-4 py-1 rounded-full w-20">
                    <p class="text-sm font-medium text-white">Awards</p>
                  </div>

                  <p class="text-3xl font-bold text-gray-800">Abled Online Bags First Prize in Tokyo</p>

                  <div class="flex items-center space-x-4">
                    <CalendarIcon class="size-4 stroke-gray-500" />

                    <p class="text-sm text-gray-400">November 21, 2010</p>
                  </div>
                </div>

                <div class="w-full h-80 overflow-hidden">
                  <img src="/images/news/award.jpg" class="w-full h-full object-cover">
                </div>

                <p class="text-lg font-medium text-gray-800">
                  "Genashtim’s executive Ryan Allegado “walked away” with the first prize for Abled Online, at the finals of the Universal Ventures Business Plan Contest (UVC) in Tokyo on 21st November 2010."
                </p>

                <p class="text-base text-gray-800">
                  UVC is a contest for projects by persons with disabilities (PWDs). Among the 40+ corporate sponsors of UVC is The Nippon Foundation, which is the largest in Japan, and among the top 10 foundations in the world.
                </p>

                <p class="text-base text-gray-800">
                  Ryan has been in a wheelchair since he was two, due to polio. He joined Genashtim in September 2009 as an Executive Assistant, and was promoted 3 months later into a business development role. With the launch of Abled Online, Ryan will take on the role of General Manager.
                </p>

                <p class="text-base text-gray-800">
                  Genashtim Innovative Learning Pte Ltd is an eLearning company passionate about employing PWDs. About 40% of Genashtim’s staff are PWDs, working from home in various cities and countries, serving clients in more than 10 countries.
                </p>

                <p class="text-base text-gray-800">
                  Genashtim’s IT team (who are mostly PWDs working from home) had developed the process of effectively supporting own staff and clients, by taking over control of their PCs anywhere in the world, via the internet.
                </p>

                <p class="text-base text-gray-800">
                  This process has been packaged into a new product labeled Abled Online. Abled Online is a network of PWDs providing remote PC support as a paid service to anyone anywhere in the world, as long as there is an internet connection.
                </p>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>