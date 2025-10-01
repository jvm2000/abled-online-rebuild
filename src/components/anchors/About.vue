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
</script>

<template>
  <div class="pt-24">
    <div class="w-full py-20 bg-teal-500 flex flex-col items-center space-y-6">
      <p class="text-6xl font-bold text-white">Our Story</p>

      <p class="text-center text-2xl text-white">
        A journey of innovation, dedication, and empowering communities through exceptional <br> technical support
      </p>
    </div>
  </div>

  <div class="py-36 space-y-36 px-36 bg-gray-50">
    <div class="relative">
      <div 
        class="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-teal-500 via-red-500 to-green-500"
      />

      <div class="grid grid-cols-2 gap-x-24 gap-y-52 py-24">
        <div class="flex flex-col items-end space-y-2">
          <div class="px-5 py-1.5 bg-teal-100 rounded-full">
            <p class="text-base text-teal-500 font-medium">The Mission</p>
          </div>

          <p class="text-2xl text-gray-800 font-bold">Empowering Through Inclusivity</p>

          <p class="text-base text-gray-400 text-right">
            At Abled Online, we believe in the power of inclusivity and the incredible potential of persons with disabilities (PWDs). Our mission is to provide meaningful employment opportunities for PWDs, enabling them to work from the comfort of their homes while delivering top-notch remote PC support services to clients worldwide.
          </p>
        </div>

        <div class="flex items-center w-full">
          <div class="flex flex-col items-center w-full">
            <div class="size-20 bg-teal-500 grid place-items-center rounded-full shadow-md">
              <div class="size-10 bg-white rounded-full" />
            </div>
          </div>
        </div>

        <div class="flex items-center w-full">
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

          <p class="text-2xl text-gray-800 font-bold">An Initiative of Genashtim</p>

          <p class="text-base text-gray-400 text-left">
            Abled Online is a proud initiative of Genashtim, an eLearning company dedicated to empowering PWDs. Since our inception, we have been committed to building a diverse and inclusive workforce that thrives in a remote-first environment.
          </p>
        </div>

        <div class="flex flex-col items-end space-y-2">
          <div class="px-5 py-1.5 bg-green-100 rounded-full">
            <p class="text-base text-green-500 font-medium">The Impact</p>
          </div>

          <p class="text-2xl text-gray-800 font-bold">Driving Global Change</p>

          <p class="text-base text-gray-400 text-right">
            Today, approximately 40% of Genashtim’s staff are PWDs, working remotely from different cities and countries. Together, we serve clients in more than 10 countries, showcasing how opportunity and inclusivity can transform lives and deliver exceptional results worldwide.
          </p>
        </div>

        <div class="flex items-center w-full">
          <div class="flex flex-col items-center w-full">
            <div class="size-20 bg-green-500 grid place-items-center rounded-full shadow-md">
              <div class="size-10 bg-white rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full flex flex-col items-center py-16 rounded-md border border-teal-300 bg-gradient-to-r from-teal-100 via-pink-300/20 to-teal-100/50 space-y-4 ">
      <p class="text-3xl font-bold text-gray-800">Join Us on Our Journey</p>

      <p class="text-lg text-center text-gray-400">
        We're always looking for talented individuals and organizations to partner with. <br> 
        Whether you need exceptional PC support or want to be part of our growing team, <br> 
        let's connect.
      </p>

      <div class="flex items-center gap-4 pt-4">
        <BaseButton>
          <span class="text-base px-4">Get Support</span>
        </BaseButton>

        <button class="flex items-center px-8 py-2.5 text-sm rounded-md ring-1 ring-gray-800 bg-white font-medium">
          <span class="text-base">Meet our Team</span>
        </button>
      </div>
    </div>
  </div>

  <div class="py-24">
    <div class="flex flex-col items-center space-y-4">
      <p class="text-4xl font-bold text-gray-800">Our Core Values</p>

      <p class="text-gray-400 text-xl text-center">
        These fundamental principles guide everything we do and shape our commitment to <br > excellence in PC support services.
      </p>
    </div>
  </div>

  <div class="pt-12 pb-36 px-[85px]">
    <div class="grid grid-cols-3 gap-12">
      <div 
        v-for="(core, index) in coreValues"
        :key="index"
      >
        <div class="flex flex-col items-start space-y-6">
          <div :class="`size-16 ${core.bgColor} rounded-full grid place-items-center`">
            <component :is="core.icon" :class="`size-8 ${core.iconColor}`" />
          </div>

          <p class="text-lg text-gray-400">{{core.description}}</p>
        </div>
      </div>
    </div>
  </div>
</template>