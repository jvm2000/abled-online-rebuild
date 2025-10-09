<script setup lang="ts">
import type { Component } from 'vue'
import { LightBulbIcon, GlobeAltIcon, TrophyIcon } from '@heroicons/vue/24/outline'
import BaseButton from '../BaseButton.vue'

type CoreValues = {
  title: string,
  description: string,
  icon: Component,
  bgColor: string,
  iconColor: string
}

const coreValues: CoreValues[] = [
  {
    title: 'Empowerment',
    description: 'We believe in empowering marginalized communities through technology and training.',
    icon: LightBulbIcon,
    bgColor: 'bg-teal-100',
    iconColor: 'stroke-teal-500'
  }, {
    title: 'Inclusivity',
    description: 'Inclusivity is at the heart of our operations, ensuring everyone has a seat at the table.',
    icon: GlobeAltIcon,
    bgColor: 'bg-green-100',
    iconColor: 'stroke-green-500'
  }, {
    title: 'Excellence',
    description: 'We strive for excellence in all our services, setting industry standards for quality and affordability.',
    icon: TrophyIcon,
    bgColor: 'bg-red-100',
    iconColor: 'stroke-red-500'
  }
]

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
  <section id="about" class="pt-12">
    <div class="flex flex-col items-center space-y-4 py-10 px-6 sm:px-0">
      <h1 class="text-4xl font-bold text-black">About Us</h1>

      <p class="text-black text-lg lg:text-xl sm:text-center max-w-full sm:max-w-3xl">
        A journey of innovation, dedication, and empowering communities through exceptional technical support
      </p>
    </div>
  </section>

  <div class="py-8 pt-2 sm:pt-8 space-y-12 px-0 md:px-14 sm:xl:px-36 bg-white">
    <div class="relative px-6 md:px-0">
      <div 
        class="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-teal-500 via-red-500 to-green-500"
      />

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-16 py-12">
        <div class="flex flex-col items-end space-y-2">
          <div class="px-5 py-1.5 bg-teal-100 rounded-full">
            <p class="text-base text-teal-500 font-medium">The Mission</p>
          </div>

          <p class="text-2xl text-black font-bold text-right">Empowering Through Inclusivity</p>

          <p class="text-base text-black text-right">
            At Abled Online, we believe in the power of inclusivity and the incredible potential of persons with disabilities (PWDs). Our mission is to provide meaningful employment opportunities for PWDs, enabling them to work from the comfort of their homes while delivering top-notch remote PC support services to clients worldwide.
          </p>
        </div>

        <div class="hidden lg:flex items-center w-full">
          <div class="flex flex-col items-center w-full">
            <div class="size-20 bg-teal-500 grid place-items-center rounded-full shadow-md">
              <div class="size-10 bg-white rounded-full" />
            </div>
          </div>
        </div>

        <div class="hidden lg:flex items-center w-full">
          <div class="flex flex-col items-center w-full">
            <div class="size-20 bg-red-500 grid place-items-center rounded-full shadow-md">
              <div class="size-10 bg-white rounded-full" />
            </div>
          </div>
        </div>

        <div class="flex flex-col items-start space-y-2">
          <div class="px-5 py-1.5 bg-red-100 rounded-full">
            <p class="text-base text-red-500 font-medium">The Foundation</p>
          </div>

          <p class="text-2xl text-black font-bold">An Initiative of Genashtim</p>

          <p class="text-base text-black text-left">
            Abled Online is a proud initiative of Genashtim, an eLearning company dedicated to empowering PWDs. Since our inception, we have been committed to building a diverse and inclusive workforce that thrives in a remote-first environment.
          </p>
        </div>

        <div class="flex flex-col items-end space-y-2">
          <div class="px-5 py-1.5 bg-green-100 rounded-full">
            <p class="text-base text-green-500 font-medium">The Impact</p>
          </div>

          <p class="text-2xl text-black font-bold">Driving Global Change</p>

          <p class="text-base text-black text-right">
            Today, approximately 40% of Genashtim’s staff are PWDs, working remotely from different cities and countries. Together, we serve clients in more than 10 countries, showcasing how opportunity and inclusivity can transform lives and deliver exceptional results worldwide.
          </p>
        </div>

        <div class="hidden lg:flex items-center w-full">
          <div class="flex flex-col items-center w-full">
            <div class="size-20 bg-green-500 grid place-items-center rounded-full shadow-md">
              <div class="size-10 bg-white rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="py-6 px-6 sm:px-0">
    <div class="flex flex-col sm:items-center space-y-4">
      <p class="text-4xl font-bold text-black">Our Core Values</p>

      <p class="text-black text-lg lg:text-xl sm:text-center">
        These fundamental principles guide everything we do and shape our commitment to <br class="hidden sm:block"> excellence in PC support services.
      </p>
    </div>
  </div>

  <div class="pt-8 pb-0 px-6 lg:px-[85px]">
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-12">
      <div 
        v-for="(core, index) in coreValues"
        :key="index"
        class="transition-all duration-500 ease-in-out hover:-translate-y-4"
      >
        <div class="flex flex-col items-center space-y-6">
          <div class="size-24 bg-green-100 rounded-full grid place-items-center">
            <component :is="core.icon" :class="`size-14 stroke-green-600`" />
          </div>

          <p class="text-lg text-black lg:text-center">{{core.description}}</p>
        </div>
      </div>
    </div>
  </div>
</template>