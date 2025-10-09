<script setup lang="ts">
import { ref } from 'vue';
import BaseButton from '../BaseButton.vue';

type ContactForm = {
  full_name: string,
  email: string,
  message: string
}

const contactForm = ref<ContactForm>({
  full_name: '',
  email: '',
  message: ''
})
const loading = ref(false)
const hasSubmitted = ref(false)
const error = ref<string[]>([])

async function submitContact() {
  loading.value = true

  try {
    const formData = new FormData()
    formData.append('Full Name', contactForm.value.full_name)
    formData.append('Email', contactForm.value.email)
    formData.append('Message', contactForm.value.message)

    const response = await fetch('https://abledonline.com/wp-admin/admin-ajax.php', {
      method: 'POST',
      body: formData,
    })

    const result = await response.text()

    if (response.ok && result.includes('success')) {
      hasSubmitted.value = true
    } else {
      throw new Error(result || 'Something went wrong')
    }
  } catch (err: any) {
    error.value = err.message
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <section id="contact" class="pt-12 px-6 sm:px-0 pb-16 space-y-12">
    <div class="flex flex-col items-center space-y-4">
      <h1 class="text-4xl font-bold text-black">Get in Touch</h1>

      <p class="text-black text-lg text-center sm:max-w-3xl">
        Have questions or need assistance? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
      </p>
    </div>
    
    <div class="flex flex-col items-center w-full">
      <div class="w-full max-w-xl flex flex-col items-start space-y-8">
        <div class="justify-start space-y-2 w-full">
          <label for="full-name" class="text-sm font-medium">Full Name <span class="text-red-500">*</span></label>

          <input 
            id="full-name"
            v-model="contactForm.full_name"
            type="text" 
            class="text-sm bg-inherit ring-1 ring-gray-300 focus:ring-1 focus:ring-gray-800 rounded-sm w-full py-2.5 px-4"
            placeholder="Your name"
          >
        </div>

        <div class="justify-start space-y-2 w-full">
          <label for="email" class="text-sm font-medium">Email <span class="text-red-500">*</span></label>

          <input
            v-model="contactForm.email"
            id="email"
            type="email" 
            class="text-sm bg-inherit ring-1 ring-gray-300 focus:ring-1 focus:ring-gray-800 rounded-sm w-full py-2.5 px-4"
            placeholder="your.email@example.com"
          >
        </div>

        <div class="justify-start space-y-2 w-full">
          <label for="message" class="text-sm font-medium">Message <span class="text-red-500">*</span></label>

          <textarea 
            v-model="contactForm.message"
            id="message"
            class="text-sm bg-inherit ring-1 ring-gray-300 focus:ring-1 focus:ring-gray-800 rounded-sm w-full py-2.5 px-4 h-36"
            placeholder="Your message"
          />
        </div>
        
        <BaseButton class="w-full justify-center" @click="submitContact">Send Message</BaseButton>
      </div>
    </div>
  </section>
</template>