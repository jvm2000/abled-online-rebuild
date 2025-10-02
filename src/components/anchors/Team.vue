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
    linkedInURL: ''
  }, { 
    name: 'Samim Jawadi',
    position: 'Deputy Head',
    image: '/images/members/samim.png',
    linkedInURL: ''
  }, { 
    name: 'Miguel De Castro',
    position: 'QA Lead/Supervisor',
    image: '/images/members/miguel.png',
    linkedInURL: ''
  }, { 
    name: 'Abdullah Qasimi',
    position: 'IT Support Specialist',
    image: '/images/members/abdullah.png',
    linkedInURL: ''
  }, { 
    name: 'Samuel Chibuike',
    position: 'IT Support Specialist',
    image: '/images/members/samuel.png',
    linkedInURL: ''
  }, { 
    name: 'Mushtaq Hussain',
    position: 'IT Support Specialist',
    image: '/images/members/mushtaq.png',
    linkedInURL: ''
  }, { 
    name: 'Joe Ryan Tuzara',
    position: 'IT Support Specialist',
    image: '/images/members/joe.png',
    linkedInURL: ''
  }, { 
    name: 'Eneye Attah',
    position: 'IT Support Specialist',
    image: '/images/members/eneye.png',
    linkedInURL: ''
  }, { 
    name: 'Khalil Jawadi',
    position: 'IT Support Specialist',
    image: '/images/members/khalil.png',
    linkedInURL: ''
  }, { 
    name: 'Jennelyn Barizo',
    position: 'IT Support Specialist',
    image: '/images/members/jennelyn.png',
    linkedInURL: ''
  }
]
</script>

<template>
  <div class="py-24 px-44 bg-gray-100 space-y-16">
    <div class="flex flex-col items-start space-y-6">
      <p class="text-5xl text-gray-800 font-bold">Meet Our <br> <span class="text-teal-500">Team</span></p>

      <p class="text-base text-gray-800">
        Diverse specialists combining experience with cutting-edge expertise to deliver exceptional results.
      </p>
    </div>

    <div class="grid grid-cols-4 gap-10">
      <div v-for="member in members" class="relative overflow-hidden rounded-md h-72">
        <img :src="member.image" class="w-full h-72 object-cover -z-10">

        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent -z-11"></div>

        <div class="flex flex-col items-start space-y-1 p-2 absolute -z-9 bottom-4 left-4">
          <p class="text-xl text-white font-semibold">{{ member.name }}</p>
          <p class="text-base text-white">{{ member.position }}</p>
        </div>
      </div>
    </div>
  </div>
</template>