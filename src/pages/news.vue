<script setup lang="ts">
import { CalendarIcon, ChevronLeftIcon } from '@heroicons/vue/24/outline'
import { useRouter } from 'vue-router'  
import Layout from '../layouts/DefaultLayout.vue';
import { onMounted } from 'vue';

const router = useRouter()

function setTitle(titleChunk: string | null) {
  document.title = titleChunk
    ? `${titleChunk} · Abled Online`
    : 'Abled Online'
}

onMounted(() => {
  setTitle('News')
})
</script>

<template>
  <Layout :can-push="true">
    <div class="w-full flex-col items-center py-16 px-6 sm:px-44 space-y-8">
      <button class="flex items-center space-x-4 font-medium" @click="router.push('/')">
        <ChevronLeftIcon class="size-4 stroke-gray-800" />

        <p class="text-sm text-black">Back to Home Page</p>
      </button>

      <div class="flex flex-col items-start space-y-6">
        <div class="justify-start space-y-2">
          <div class="bg-teal-600 px-4 py-1 rounded-full w-20">
            <p class="text-sm font-medium text-white">Awards</p>
          </div>

          <p class="text-3xl font-bold text-black">Abled Online Bags First Prize in Tokyo</p>

          <div class="flex items-center space-x-4">
            <CalendarIcon class="size-4 stroke-gray-500" />

            <p class="text-sm text-gray-400">November 21, 2010</p>
          </div>
        </div>

        <div class="w-full h-full overflow-hidden">
          <img src="/images/news/award.jpg" class="w-full h-full object-cover">
        </div>

        <p class="text-lg font-medium text-black">
          "Genashtim’s executive Ryan Allegado “walked away” with the first prize for Abled Online, at the finals of the Universal Ventures Business Plan Contest (UVC) in Tokyo on 21st November 2010."
        </p>

        <p class="text-base text-black">
          UVC is a contest for projects by persons with disabilities (PWDs). Among the 40+ corporate sponsors of UVC is The Nippon Foundation, which is the largest in Japan, and among the top 10 foundations in the world.
        </p>

        <p class="text-base text-black">
          Ryan has been in a wheelchair since he was two, due to polio. He joined Genashtim in September 2009 as an Executive Assistant, and was promoted 3 months later into a business development role. With the launch of Abled Online, Ryan will take on the role of General Manager.
        </p>

        <p class="text-base text-black">
          Genashtim Innovative Learning Pte Ltd is an eLearning company passionate about employing PWDs. About 40% of Genashtim’s staff are PWDs, working from home in various cities and countries, serving clients in more than 10 countries.
        </p>

        <p class="text-base text-black">
          Genashtim’s IT team (who are mostly PWDs working from home) had developed the process of effectively supporting own staff and clients, by taking over control of their PCs anywhere in the world, via the internet.
        </p>

        <p class="text-base text-black">
          This process has been packaged into a new product labeled Abled Online. Abled Online is a network of PWDs providing remote PC support as a paid service to anyone anywhere in the world, as long as there is an internet connection.
        </p>
      </div>
    </div>
  </Layout>
</template>