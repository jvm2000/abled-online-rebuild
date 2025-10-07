<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { Bars3Icon } from '@heroicons/vue/20/solid'
import { EnvelopeIcon, PhoneIcon, ClockIcon, MapPinIcon } from '@heroicons/vue/24/outline'
import { ref } from 'vue'
import BaseButton from '../components/BaseButton.vue'

type Page = {
  name: string,
  path: string
}

const pageList = ref<Page[]>([
  { name: 'home', path: 'home' },
  { name: 'services', path: 'services' },
  { name: 'about', path: 'about' },
  { name: 'our team', path: 'our-team' },
  { name: 'news', path: 'news' },
  { name: 'contact', path: 'contact' }
])

function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}
</script>

<template>
  <div class="relative min-h-screen">
    <header class="flex items-center justify-between border-b px-6 sm:lg:px-[85px] py-4 w-full bg-white fixed top-0 z-[40]">
      <img src="/images/logo.png" alt="Logo" class="h-12 sm:h-16">

      <div class="hidden sm:flex items-center space-x-8">
        <button
          v-for="page in pageList"
          :key="page.name"
          class="text-base font-semibold capitalize text-gray-800 hover:text-teal-500 transition-colors duration-300"
          @click="scrollToSection(page.path)"
        >
          {{ page.name }}
        </button>
      </div>

      <BaseButton 
        class="hidden sm:lg:block"
        @click="scrollToSection('contact')"
      >Get Support</BaseButton>

      <Menu as="div" class="relative inline-block text-left lg:hidden">
        <div>
          <MenuButton
            class="inline-flex w-full justify-center rounded-md"
          >
            <Bars3Icon
              class="size-5 text-teal-600 hover:text-teal-500"
              aria-hidden="true"
            />
          </MenuButton>
        </div>

        <transition
          enter-active-class="transition duration-100 ease-out"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
          leave-active-class="transition duration-75 ease-in"
          leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0"
        >
          <MenuItems
            class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
          >
            <div class="px-4 py-2.5">
              <MenuItem 
                v-for="page in pageList"
                :key="page.name"
                v-slot="{ active }"
                @click="scrollToSection(page.path)"
              >
                <button
                  :class="[
                    active ? 'bg-teal-600 text-white' : 'text-gray-900',
                    'group flex w-full items-center rounded-md px-4 py-2 text-base capitalize',
                  ]"
                >
                  {{ page.name }}
                </button>
              </MenuItem>
            </div>
          </MenuItems>
        </transition>
      </Menu>
    </header>

    <main class="mt-15 sm:mt-14 z-[1]">
      <slot />
    </main>

    <footer class="px-6 sm:xl:px-24 pt-16 pb-8 bg-gray-800 w-full space-y-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-y-8 sm:lg:grid-cols-3 items-start border-b pb-12 border-gray-700">
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