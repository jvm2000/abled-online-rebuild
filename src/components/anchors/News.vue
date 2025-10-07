<script setup lang="ts">
import { CalendarIcon, ArrowRightIcon } from '@heroicons/vue/24/outline'
import ReadMore from '../modal/ReadMore.vue';
</script>

<template>
  <section id="news" class="py-36 flex flex-col items-center w-full px-6 lg:px-0">
    <div class="flex flex-col items-start space-y-6">
      <p class="text-5xl sm:text-7xl font-bold text-gray-800">
        Recognized for <span class="text-teal-600">Inclusive</span> <br class="hidden lg:block"> Excellence
      </p>

      <p class="text-2xl text-gray-400 font-light">
        We are dedicated to fostering an environment where everyone can thrive <br class="hidden lg:block"> and succeed.
      </p>
    </div>
  </section>

  <div class="pb-36 px-0 md:px-6 sm:xl:px-44">
    <div class="grid grid-cols-1 lg:grid-cols-2 sm:rounded-md drop-shadow-md bg-white overflow-hidden group transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-xl">
      <div class="w-full relative h-80 overflow-hidden">
        <img src="/images/news/award.jpg" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out">

        <div class="bg-teal-600 px-4 py-1 rounded-full absolute left-3 top-3">
          <p class="text-sm font-medium text-white">Awards</p>
        </div>
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

        <ReadMore>
          <button class="px-4 py-2.5 border border-gray-200 flex items-center space-x-4 rounded-md">
            <p class="text-sm text-gray-800">Read More</p>

            <ArrowRightIcon class="size-3 stroke-gray-800" />
          </button>
        </ReadMore>
      </div>
    </div>
  </div>
</template>