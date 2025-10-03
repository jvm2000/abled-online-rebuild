<script setup lang="ts">
import { EnvelopeIcon, PhoneIcon, ClockIcon, MapPinIcon } from '@heroicons/vue/24/outline'
import { ref } from 'vue'
import BaseButton from '../components/BaseButton.vue'

type Page = {
  name: string,
  path: string
}
const pageList = ref<Page[]>([
  { name: 'home', path: '/' },
  { name: 'about', path: '/about' },
  { name: 'services', path: '/services' },
  { name: 'our team', path: '/our-team' },
  { name: 'news', path: '/news' },
  { name: 'contact', path: '/contact' }
])
</script>

<template>
  <div class="relative">
    <header class="flex items-center justify-between border-b px-[85px] py-4 w-full bg-white fixed top-0 z-[9999]">
      <img src="/images/logo.png" alt="Logo" class="h-16">

      <div class="flex items-center space-x-8">
        <RouterLink
          v-for="page in pageList"
          :key="page.name"
          :to="page.path"
          class="text-base font-semibold capitalize text-gray-800 hover:text-teal-500 transition-colors duration-300"
        >
          {{ page.name }}
        </RouterLink>
      </div>

      <BaseButton>Get Support</BaseButton>
    </header>

    <main class="mt-14 z-[1]">
      <slot />
    </main>

    <footer class="px-24 pt-16 pb-8 bg-gray-800 w-full space-y-6">
      <div class="grid grid-cols-3 items-start border-b pb-12 border-gray-700">
        <div class="flex flex-col items-start space-y-6">
          <div class="size-8 bg-white" />

          <p class="text-sm text-gray-200 max-w-xs">
            Join our global community and experience top-notch PC support services at your fingertips. Your satisfaction is our priority.
          </p>
        </div>

        <div class="flex flex-col items-start space-y-3">
          <p class="text-lg text-gray-200 font-medium">Services</p>

          <p class="text-sm text-gray-200">PC Repair & Maintenance</p>
          <p class="text-sm text-gray-200">CCTV Security Services</p>
          <p class="text-sm text-gray-200">Software Installation</p>
          <p class="text-sm text-gray-200">Cybersecurity Solutions</p>
          <p class="text-sm text-gray-200">Network Support</p>
          <p class="text-sm text-gray-200">Remote Assistance</p>
        </div>

        <div class="flex flex-col items-start space-y-3">
          <p class="text-lg text-gray-200 font-medium">Contact Info</p>

          <div class="flex items-center space-x-4">
            <EnvelopeIcon class="size-6 stroke-teal-600" />

            <div class="flex flex-col items-start">
              <p class="text-base font-medium text-white">Email</p>
              <p class="text-sm text-white">abledonline@genashtim.com</p>
            </div>
          </div>

          <div class="flex items-center space-x-4">
            <PhoneIcon class="size-6 stroke-teal-600" />

            <div class="flex flex-col items-start">
              <p class="text-base font-medium text-white">Phone</p>
              <p class="text-sm text-white">+61 7 5660 6741</p>
            </div>
          </div>

          <div class="flex items-center space-x-4">
            <ClockIcon class="size-6 stroke-teal-600" />

            <div class="flex flex-col items-start">
              <p class="text-base font-medium text-white">Hours</p>
              <p class="text-sm text-white">24/7 Support Available</p>
            </div>
          </div>

          <div class="flex items-center space-x-4">
            <MapPinIcon class="size-6 stroke-teal-600" />

            <div class="flex flex-col items-start">
              <p class="text-base font-medium text-white">Address</p>
              <p class="text-sm text-white">1 Coleman Street #10-10 The Adelphi Singapore 179803</p>
            </div>
          </div>
        </div>
      </div>

      <p class="text-sm text-gray-200">© 2025 Abled Online. All rights reserved.</p>
    </footer>
  </div>
</template>