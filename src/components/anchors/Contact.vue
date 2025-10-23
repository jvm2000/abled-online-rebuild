<script setup lang="ts">
import { ref } from 'vue';
import BaseButton from '../BaseButton.vue';
import BaseToast from '../BaseToast.vue';

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
const toast = ref(null)
const errors = ref<string[]>([])

async function submitContact() {
  errors.value = []
  loading.value = true

  const response = await fetch('http://localhost:8000/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: contactForm.value.full_name,
      email: contactForm.value.email,
      message: contactForm.value.message
    })
  })

  const result = await response.json()

  if (result.success) {
    contactForm.value.email = ''
    contactForm.value.full_name = ''
    contactForm.value.message = ''

    toast.value.showToast("We'll get back to you as soon as possible")
  } else {
    errors.value = result.errors
  }

  loading.value = false
}

function getError(errors: Record<string, string[]>, field: string): any | null {
  if (errors && errors[field] && errors[field].length > 0) {
    return errors[field][0];
  }
  return null;
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
            class="text-sm bg-inherit ring-1 rounded-sm w-full py-2.5 px-4"
            :class="[getError(errors, 'name') ? 'ring-red-500 focus:ring-red-500' : 'ring-gray-300' ]"
            placeholder="Your name"
          >

          <span v-if="getError(errors, 'name')" class="text-xs text-red-500">
            {{ getError(errors, 'name') }}
          </span>
        </div>

        <div class="justify-start space-y-2 w-full">
          <label for="email" class="text-sm font-medium">Email <span class="text-red-500">*</span></label>

          <input
            v-model="contactForm.email"
            id="email"
            type="email" 
            class="text-sm bg-inherit ring-1 rounded-sm w-full py-2.5 px-4"
            :class="[getError(errors, 'email') ? 'ring-red-500 active::ring-red-500' : 'ring-gray-300' ]"
            placeholder="your.email@example.com"
          >

          <span v-if="getError(errors, 'email')" class="text-xs text-red-500">
            {{ getError(errors, 'email') }}
          </span>
        </div>

        <div class="justify-start space-y-2 w-full">
          <label for="message" class="text-sm font-medium">Message <span class="text-red-500">*</span></label>

          <textarea 
            v-model="contactForm.message"
            id="message"
            class="text-sm bg-inherit ring-1 focus:ring-1 rounded-sm w-full py-2.5 px-4 h-36"
            :class="[getError(errors, 'message') ? 'ring-red-500 focus:ring-red-500' : 'ring-gray-300' ]"
            placeholder="Your message"
          />

          <span v-if="getError(errors, 'message')" class="text-xs text-red-500">
            {{ getError(errors, 'message') }}
          </span>
        </div>
        
        <BaseButton 
          class="w-full justify-center"
          :loading="loading"
          @click="submitContact"
        >Send Message</BaseButton>
      </div>
    </div>
  </section>

  <BaseToast ref="toast" />
</template>