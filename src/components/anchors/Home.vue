<script setup lang="ts">
import BaseButton from '../BaseButton.vue'

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
  <section id="home" class="pt-44 sm:pt-28 py-28 w-full flex flex-col items-center space-y-8 relative px-6 sm:px-0">
    <p class="text-6xl sm:text-7xl text-white font-bold text-left sm:text-center z-10">
      Empowering <br> <span class="gradient-text">PC Support Services</span>
    </p>

    <p class="text-lg sm:lg:text-2xl text-white sm:max-w-3xl text-left sm:text-center z-10">
      Delivering comprehensive technical solutions with 24/7 professional support. We empower individuals and businesses with reliable, expert PC services.
    </p>

    <div class="flex items-center gap-4 z-10">
      <BaseButton @click="scrollToSection('contact')">
        <span class="text-base px-4">Request Support</span>
      </BaseButton>

      <button 
        class="flex items-center px-8 py-2.5 text-sm rounded-md ring-1 ring-white bg-white font-medium hover:scale-105 transition-transform duration-300 ease-in-out"
        @click="scrollToSection('services')"
      >
        <span class="text-base">Learn More</span>
      </button>
    </div>

    <div class="flex items-center space-x-8 pt-4 z-10">
      <div class="flex flex-col items-center">
        <p class="text-3xl text-white font-bold">24/7</p>
        <p class="text-base text-white">Support</p>
      </div>

      <div class="h-8 w-px border" />

      <div class="flex flex-col items-center">
        <p class="text-3xl text-white font-bold">1000+</p>
        <p class="text-base text-white">Clients</p>
      </div>

      <div class="h-8 w-px border" />

      <div class="flex flex-col items-center">
        <p class="text-3xl text-white font-bold">99%</p>
        <p class="text-base text-white">Satisfaction</p>
      </div>
    </div>

    <div class="absolute inset-0 bg-gradient-to-b from-teal-500/70 to-black/70 -z-11 h-full w-full" />
    
    <video 
      autoplay 
      muted 
      loop 
      playsinline 
      class="absolute top-0 left-0 w-full h-full object-cover -z-10"
    >
      <source src="/videos/loop.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </section>
</template>

<style scoped>
.gradient-text {
    background: linear-gradient(90deg, #1df7dd, #b6fcf4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}
</style>