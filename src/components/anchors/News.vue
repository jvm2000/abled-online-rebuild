<script setup lang="ts">
import { CalendarIcon, ArrowRightIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <div class="py-24 flex flex-col items-center w-full">
    <div class="flex flex-col items-start space-y-6">
      <p class="text-7xl font-bold text-gray-800">Recognized for Inclusive <br> Excellence</p>

      <p class="text-2xl text-gray-400 font-light">
        We are dedicated to fostering an environment where everyone can thrive <br> and succeed.
      </p>
    </div>
  </div>

  <div class="pt-12 pb-36 px-44">
    <div class="grid grid-cols-2 rounded-md drop-shadow-md bg-white overflow-hidden">
      <div class="w-full relative h-80">
        <img src="/images/news/award.jpg" class="w-full h-full object-cover">
      </div>

      <div class="flex flex-col items-start space-y-4 p-8 pr-14">
        <div class="flex items-center space-x-4">
          <CalendarIcon class="size-4 stroke-gray-500" />

          <p class="text-sm text-gray-400">November 21, 2010</p>
        </div>

        <p class="text-2xl font-bold text-gray-800">Abled Online Bags First Prize in Tokyo</p>

        <p class="text-base text-gray-400">
          Genashtin's executive Ryan Allegado "walked away" with the first prize for Abled Online, at the finals of the Universal Ventures Business Plan Contest (UVC) in Tokyo on 21st November 2010.
        </p>

        <button class="px-4 py-2.5 border border-gray-200 flex items-center space-x-4 rounded-md">
          <p class="text-sm text-gray-800">Read More</p>

          <ArrowRightIcon class="size-3 stroke-gray-800" />
        </button>
      </div>
    </div>
  </div>
</template>