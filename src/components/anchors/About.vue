<script setup lang="ts">
import type { Component } from 'vue'
import { LightBulbIcon, GlobeAltIcon, TrophyIcon } from '@heroicons/vue/24/outline'

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
  <div class="py-24">
    <div class="w-full py-20 bg-teal-400 flex flex-col items-center space-y-6">
      <p class="text-7xl font-bold text-white">Empowering Marginalized Communities</p>

      <p class="text-center text-2xl text-white">
        With years of experience, our team excels in providing top-notch <br> tech solutions and customer service.
      </p>
    </div>
  </div>

  <div class="pt-6 pb-24 px-[85px]">
    <div class="grid grid-cols-2 items-center gap-x-14">
      <div class="relative">
        <div class="rounded-2xl shadow-soft h-[500px] overflow-hidden">
          <img src="/images/abled-online-about-image.png" alt="Hero image" class="w-full h-full object-cover">
        </div>
      </div>

      <div class="flex flex-col items-start space-y-8">
        <p class="text-xl text-gray-500">
          At Abled Online, we believe in the power of technology and the incredible potential of skilled professionals. Our mission is to provide comprehensive PC support services while creating meaningful opportunities for talented individuals to deliver exceptional remote technical support to clients worldwide.
        </p>

        <p class="text-xl text-gray-800 font-bold">Our Story</p>

        <p class="text-xl text-gray-500">
          Abled Online is a proud initiative of Genashtim, an eLearning company dedicated to empowering PWDs. Since our inception, we have been committed to creating a diverse and inclusive workforce. Approximately 40% of Genashtim’s staff are PWDs, working remotely from various cities and countries, serving clients in more than 10 countries.
        </p>
      </div>
    </div>
  </div>

  <div class="pt-12 pb-24">
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