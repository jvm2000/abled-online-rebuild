<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { Bars3Icon } from '@heroicons/vue/20/solid'
import { EnvelopeIcon, PhoneIcon, ClockIcon, MapPinIcon } from '@heroicons/vue/24/outline'
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

type Page = {
  name: string,
  path: string
}

const props = withDefaults(
  defineProps<{
    canPush?: boolean
  }>(),
  {
    canPush: false
  }
)

const router = useRouter()
const route = useRoute()
const pageList = ref<Page[]>([
  { name: 'home', path: 'home' },
  { name: 'about', path: 'about' },
  { name: 'services', path: 'services' },
  { name: 'news', path: 'news' },
  { name: 'contact', path: 'contact' }
])
const activeSection = ref('home')

function scrollToSection(sectionId: string) {
  if (route.path !== '/') {
    router.push({ path: '/', hash: `#${sectionId}` }).then(() => {
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({
            behavior: 'instant',
            block: 'start'
          })
        }
      })
    })
  }
  
  else {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }

    if (props.canPush) {
      history.pushState(null, '', `#${sectionId}`)
    } else {
      history.replaceState(null, '', `#${sectionId}`)
    }
  }
}

function handleScroll() {
  const scrollPosition = window.scrollY + window.innerHeight / 3

  for (const page of pageList.value) {
    const section = document.getElementById(page.path)
    if (section) {
      const rect = section.getBoundingClientRect()
      const sectionTop = rect.top + window.scrollY
      const sectionBottom = sectionTop + section.offsetHeight

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        activeSection.value = page.path
        break
      }
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="relative min-h-screen">
    <header class="flex items-center justify-between border-b px-6 sm:lg:px-[85px] py-4 w-full bg-white fixed top-0 z-[40]">
      <img src="/images/logo.png" alt="Logo" class="h-16 sm:h-20">

      <div class="hidden sm:flex items-center space-x-8">
        <button
          v-for="page in pageList"
          :key="page.name"
          :class="[
            'text-lg font-semibold capitalize transition-colors duration-300',
            activeSection === page.path
              ? 'text-teal-600'
              : 'text-black hover:text-teal-600'
          ]"
          @click="scrollToSection(page.path)"
        >
          {{ page.name }}
        </button>
      </div>

      <Menu as="div" class="relative inline-block text-left md:hidden">
        <div>
          <MenuButton
            class="inline-flex w-full justify-center rounded-md"
          >
            <Bars3Icon
              class="size-6 sm:size-5 text-teal-600 hover:text-teal-500"
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
                    'flex w-full items-center rounded-md px-4 py-2 text-base capitalize',
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

    <main class="mt-20 z-[1]">
      <slot />
    </main>

    <footer class="px-6 sm:xl:px-24 py-8 bg-black w-full space-y-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-y-6 sm:lg:grid-cols-3 items-start border-b pb-6 border-gray-700">
        <div class="flex flex-col items-start space-y-6">
          <div class="relative">
            <img src="/images/logo.png" alt="Logo" class="h-16 sm:h-20">
          </div>

          <p class="text-sm text-gray-200 max-w-xs">
            Join our global community and experience top-notch PC support services at your fingertips. Your satisfaction is our priority.
          </p>
        </div>

        <div class="flex flex-col items-start space-y-3">
          <p class="text-lg text-gray-200 font-medium">Services</p>

          <p class="text-sm text-gray-200 cursor-pointer" @click="scrollToSection('services')">PC Repair & Maintenance</p>
          <p class="text-sm text-gray-200 cursor-pointer" @click="scrollToSection('services')">CCTV Security Services</p>
          <p class="text-sm text-gray-200 cursor-pointer" @click="scrollToSection('services')">Software Installation</p>
          <p class="text-sm text-gray-200 cursor-pointer" @click="scrollToSection('services')">Cybersecurity Solutions</p>
          <p class="text-sm text-gray-200 cursor-pointer" @click="scrollToSection('services')">Network Support</p>
          <p class="text-sm text-gray-200 cursor-pointer" @click="scrollToSection('services')">Remote Assistance</p>
        </div>

        <div class="flex flex-col items-start space-y-3">
          <p class="text-lg text-gray-200 font-medium">Contact Info</p>

          <div class="flex items-center space-x-4">
            <EnvelopeIcon class="size-6 stroke-teal-600" />

            <div class="flex flex-col xl:flex-row xl:items-center xl:space-x-2">
              <p class="text-sm text-white">Email:</p>
              <a 
                class="text-sm text-teal-200"
                href="mailto:abledonline@genashtim.com"
              >abledonline@genashtim.com</a>
            </div>
          </div>

          <div class="flex items-center space-x-4">
            <PhoneIcon class="size-6 stroke-teal-600" />

            <div class="flex flex-col xl:flex-row xl:items-center xl:space-x-2">
              <p class="text-sm text-white">Phone:</p>
              <p class="text-sm text-teal-200">+61 7 5660 6741</p>
            </div>
          </div>

          <div class="flex items-center space-x-4">
            <ClockIcon class="size-6 stroke-teal-600" />

            <div class="flex flex-col xl:flex-row xl:items-center xl:space-x-2">
              <p class="text-sm text-white">Hours:</p>
              <p class="text-sm text-teal-200">24/7 Support Available</p>
            </div>
          </div>

          <div class="flex items-center space-x-4">
            <MapPinIcon class="size-6 stroke-teal-600" />

            <div class="flex flex-col xl:flex-row xl:items-center xl:space-x-2">
              <p class="text-sm font-medium text-white">Address:</p>
              <p class="text-sm text-teal-200 xl:whitespace-nowrap">1 Coleman Street #10-10 The Adelphi Singapore 179803</p>
            </div>
          </div>
        </div>
      </div>

      <p class="text-sm text-gray-200 w-full text-center">© 2025 Abled Online. All rights reserved.</p>
    </footer>
  </div>
</template>