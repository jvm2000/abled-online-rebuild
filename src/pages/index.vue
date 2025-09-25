<script setup lang="ts">
import { CheckIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <div class="py-24">
    <div class="grid grid-cols-2 items-center gap-x-14">
      <div class="flex flex-col items-start space-y-8">
        <div class="justify-start space-y-6">
          <p class="text-6xl text-gray-800 font-bold">
            <span class="gradient-text">Empowering</span><br> PC Support Services
          </p>
        </div>

        <p class="text-xl text-gray-500 max-w-lg">
          Delivering comprehensive technical solutions with 24/7 professional support. We empower individuals and businesses with reliable, expert PC services that ensure optimal performance and seamless operations.
        </p>

        <div class="flex items-center space-x-8 pt-4">
          <div class="flex flex-col items-center">
            <p class="text-2xl text-teal-500 font-bold">24/7</p>
            <p class="text-sm text-gray-500">Support</p>
          </div>

          <div class="h-8 w-px border" />

          <div class="flex flex-col items-center">
            <p class="text-2xl text-teal-500 font-bold">1000+</p>
            <p class="text-sm text-gray-500">Clients</p>
          </div>

          <div class="h-8 w-px border" />

          <div class="flex flex-col items-center">
            <p class="text-2xl text-teal-500 font-bold">99%</p>
            <p class="text-sm text-gray-500">Satisfaction</p>
          </div>
        </div>
      </div>

      <div class="relative">
        <div class="rounded-2xl shadow-soft h-[500px] overflow-hidden">
          <img src="/images/hero-image.jpg" alt="Hero image" class="w-full h-full object-cover">
        </div>

        <div class="absolute -bottom-8 -left-8">
          <div class="bg-white shadow-xl p-6 flex items-center space-x-4 rounded-md">
            <div class="bg-green-500 rounded-full p-2.5">
              <CheckIcon class="w-6 h-6 stroke-white" />
            </div>

            <div class="justify-start">
              <p class="text-base text-gray-800 font-medium">Expert Certified</p>
              <p class="text-sm text-gray-400">Technicians</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.gradient-text {
    background: linear-gradient(90deg, #14b8a6, #3b82f6, #8b5cf6, #ef4444);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}
</style>