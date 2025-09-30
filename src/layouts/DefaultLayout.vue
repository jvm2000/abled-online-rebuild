<script setup lang="ts">
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
      <img src="/images/logo.png" alt="Logo" class="h-12">

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

    <main class="mt-16 z-[1]">
      <slot />
    </main>
  </div>
</template>