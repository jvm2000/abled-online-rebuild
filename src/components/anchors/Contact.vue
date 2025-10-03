<script setup lang="ts">
import BaseButton from '../BaseButton.vue';


</script>

<template>
  <div class="pt-12 pb-36 space-y-24">
    <div class="flex flex-col items-center space-y-4">
      <p class="text-4xl font-bold text-gray-800">Get in Touch</p>

      <p class="text-gray-400 text-lg text-center">
        Have questions or need assistance? We'd love to hear from you. Send us a message <br> and we'll respond as soon as possible.
      </p>
    </div>
    
    <div class="flex flex-col items-center w-full">
      <div class="w-full max-w-xl flex flex-col items-start space-y-8">
        <div class="justify-start space-y-2 w-full">
          <label class="text-sm font-medium">Full Name <span class="text-red-500">*</span></label>

          <input 
            type="text" 
            class="text-sm bg-inherit outline-none focus:ring-0 border border-gray-300 rounded-sm w-full py-2.5 px-4"
            placeholder="Your name"
          >
        </div>

        <div class="justify-start space-y-2 w-full">
          <label class="text-sm font-medium">Email <span class="text-red-500">*</span></label>

          <input 
            type="email" 
            class="text-sm bg-inherit outline-none focus:ring-0 border border-gray-300 rounded-sm w-full py-2.5 px-4"
            placeholder="your.email@example.com"
          >
        </div>

        <div class="justify-start space-y-2 w-full">
          <label class="text-sm font-medium">Message <span class="text-red-500">*</span></label>

          <textarea 
            class="text-sm bg-inherit outline-none focus:ring-0 border border-gray-300 rounded-sm w-full py-2.5 px-4 h-36"
            placeholder="your.email@example.com"
          />
        </div>
        
        <BaseButton class="w-full justify-center">Send Message</BaseButton>
      </div>
    </div>
  </div>
</template>