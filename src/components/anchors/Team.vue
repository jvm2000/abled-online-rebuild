<script setup lang="ts">
type TeamMembers = {
  name: string,
  position: string,
  image: string,
  linkedInURL: string
}

const members: TeamMembers[] = [
  { 
    name: 'Jett Esguerra',
    position: 'Section Manager',
    image: '/images/members/jeff.png',
    linkedInURL: 'https://www.linkedin.com/in/jett-esguerra-502a34a8/'
  }, { 
    name: 'Samim Jawadi',
    position: 'Deputy Head',
    image: '/images/members/samim.png',
    linkedInURL: 'https://www.linkedin.com/in/arifjawadi/'
  }, { 
    name: 'Miguel De Castro',
    position: 'QA Lead/Supervisor',
    image: '/images/members/miguel.png',
    linkedInURL: 'https://www.linkedin.com/in/miguel-andre-de-castro-11a626144/'
  }, { 
    name: 'Abdullah Qasimi',
    position: 'IT Support Specialist',
    image: '/images/members/abdullah.png',
    linkedInURL: 'https://www.linkedin.com/in/abdullah-qasimi/'
  }, { 
    name: 'Samuel Chibuike',
    position: 'IT Support Specialist',
    image: '/images/members/samuel.png',
    linkedInURL: 'https://www.linkedin.com/in/samuelchibuike/'
  }, { 
    name: 'Mushtaq Hussain',
    position: 'IT Support Specialist',
    image: '/images/members/mushtaq.png',
    linkedInURL: 'https://www.linkedin.com/in/mushtaq-hussain-35a6821a5/'
  }, { 
    name: 'Joe Ryan Tuzara',
    position: 'IT Support Specialist',
    image: '/images/members/joe.png',
    linkedInURL: 'https://www.linkedin.com/in/joe-ryan-tuzara-7a6b38295/'
  }, { 
    name: 'Eneye Attah',
    position: 'IT Support Specialist',
    image: '/images/members/eneye.png',
    linkedInURL: 'https://www.linkedin.com/in/eneye-attah-54ab66104'
  }, { 
    name: 'Khalil Jawadi',
    position: 'IT Support Specialist',
    image: '/images/members/khalil.png',
    linkedInURL: 'https://www.linkedin.com/in/khalil-jawadi'
  }, { 
    name: 'Jennelyn Barizo',
    position: 'IT Support Specialist',
    image: '/images/members/jennelyn.png',
    linkedInURL: 'https://www.linkedin.com/in/jennelynbarizo/'
  }
]

function openLink(url: string) {
  window.open(url, '_blank', 'noopener,noreferrer');
}
</script>

<template>
  <section id="our-team" class="py-24 px-6 sm:xl:px-44 space-y-16 bg-gray-50">
    <div class="flex flex-col items-start space-y-6">
      <p class="text-5xl text-gray-800 font-bold">Meet Our <br> <span class="text-teal-500">Team</span></p>

      <p class="text-base text-gray-800">
        Diverse specialists combining experience with cutting-edge expertise to deliver exceptional results.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
      <div v-for="member in members" class="relative overflow-hidden rounded-md h-72 transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-xl group">
        <img :src="member.image" class="w-full h-72 object-cover -z-10 group-hover:scale-110 transition-transform duration-500 ease-in-out">

        <div class="absolute inset-0 -z-11">
          <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent transition-opacity duration-500 ease-in-out" />

          <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100" />
        </div>

        <div class="flex flex-col items-start space-y-1 p-2 absolute -z-9 bottom-4 left-4 transition-all duration-500 ease-in-out hover:bottom-6">
          <p class="text-xl text-white font-semibold">{{ member.name }}</p>
          <p class="text-base text-white">{{ member.position }}</p>
        </div>

        <button 
          class="absolute right-4 top-4 rounded-full bg-white size-12 grid place-items-center -z-9 transition-all duration-300 ease-in-out hover:bottom-6 opacity-0 group-hover:opacity-100"
          @click="openLink(member.linkedInURL)"
        >
          <p class="text-blue-500 text-lg font-bold">in</p>
        </button>
      </div>
    </div>
  </section>

  <div class="pt-16 pb-36 px-6 sm:xl:px-44 bg-gray-50">
    <div class="w-full grid grid-cols-1 lg:grid-cols-2 items-start gap-x-14 gap-y-16">
      <div class="flex flex-col items-start space-y-8">
        <div class="px-5 py-1.5 bg-teal-100 rounded-full">
          <p class="text-base text-teal-600 font-medium">Our Culture</p>
        </div>

        <p class="text-4xl font-bold text-gray-800">
          Built on Collaboration & <br class="hidden sm:block">Innovation
        </p>

        <p class="text-base text-gray-400">
          At Abled Online, we foster a culture of continuous learning and collaboration. Our team thrives on solving complex technical challenges and delivering solutions that exceed expectations.
        </p>

        <p class="text-base text-gray-400">
          We believe in transparency, accountability, and building long-term relationships with our clients through exceptional service and technical excellence.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 items-end gap-8">
        <div class="rounded-md bg-white shadow p-6 flex flex-col items-start space-y-2 h-40">
          <p class="text-3xl font-bold text-teal-500">100%</p>

          <p class="text-sm text-gray-400">Remote Support</p>
        </div>

        <div class="rounded-md bg-white shadow p-6 flex flex-col items-start space-y-2 h-28">
          <p class="text-3xl font-bold text-red-500">50+</p>

          <p class="text-sm text-gray-400">Certifications</p>
        </div>

        <div class="rounded-md bg-white shadow p-6 flex flex-col items-start space-y-2 h-40">
          <p class="text-3xl font-bold text-green-500">10+</p>

          <p class="text-sm text-gray-400">Industries Served</p>
        </div>

        <div class="rounded-md bg-white shadow p-6 flex flex-col items-start space-y-2 h-28">
          <p class="text-3xl font-bold text-teal-600">4.9</p>

          <p class="text-sm text-gray-400">Average Rating</p>
        </div>
      </div>
    </div>
  </div>
</template>