<script setup lang="ts">
import { ComputerDesktopIcon, VideoCameraIcon, CloudArrowDownIcon, PhoneIcon, EnvelopeIcon, DevicePhoneMobileIcon, ServerIcon, ShieldCheckIcon, ArrowPathIcon } from '@heroicons/vue/24/outline'
import type { Component } from 'vue'
import BaseButton from '../BaseButton.vue'

type Services = {
  name: string,
  description: string,
  icon: Component,
  items: string[]
}

const services: Services[] = [
  {
    name: 'PC Repair & Maintenance',
    description: 'Our dedicated IT Support team provides reliable solutions to keep your technology running smoothly. From troubleshooting and system maintenance to network management, we ensure your devices is secure and optimized.',
    icon: ComputerDesktopIcon,
    items: [
      'Reliable IT solutions',
      'Troubleshooting Support',
      'System Maintenance',
      'Network Management',
      'Device Security and Optimization'
    ]
  }, {
    name: 'CCTV Services',
    description: 'Our specialized CCTV Monitoring Services ensure the safety and security of your premises around the clock. We provide vigilant and reliable monitoring of high-quality CCTV systems, tailored to your specific needs.',
    icon: VideoCameraIcon,
    items: [
      '24/7 CCTV Monitoring',
      'Vigilant and Reliable Surveillance',
      'High-quality CCTV systems',
      'Tailored Solutions'
    ]
  }, {
    name: 'Download & Installation of App',
    description: 'Our Download & Installation Services provide a seamless setup of your applications. We manage everything from downloading to installing software on your devices, ensuring it’s correctly configured and ready to use.',
    icon: CloudArrowDownIcon,
    items: [
      'Seamless application setup',
      'Software downloading',
      'Installation on devices',
      'Ready-to-use applications'
    ]
  }, {
    name: 'VOIP Application Setup',
    description: 'Our VOIP Application Setup services ensure efficient installation of your voice-over-IP applications. We manage everything from initial configuration to final testing, ensuring your communication systems are fully operational.',
    icon: PhoneIcon,
    items: [
      'Efficient VOIP application installation',
      'Initial configuration',
      'Comprehensive testing',
      'Fully operational communication systems'
    ]
  }, {
    name: 'Email Setup',
    description: 'Our Email Setup Services ensure efficient configuration of your email accounts. We manage account creation and synchronization across all your devices, ensuring your email is ready to use with optimal settings.',
    icon: EnvelopeIcon,
    items: [
      'Efficient email account configuration',
      'Account creation and management',
      'Device synchronization',
      'Optimized settings',
    ]
  }, {
    name: 'Mobile Phone Support (Android and IOS)',
    description: 'Our Download & Installation Services provide a seamless setup of your applications. We manage everything from downloading to installing software on your devices.',
    icon: DevicePhoneMobileIcon,
    items: [
      'Seamless application setup',
      'Software downloading',
      'Installation on devices'
    ]
  }, {
    name: 'Server Administration',
    description: 'Our Server Administration Services offer complete management and maintenance of your servers, handling setup, configuration, monitoring, and troubleshooting to ensure efficiency and security.',
    icon: ServerIcon,
    items: [
      'Complete server management and maintenance',
      'Server setup and configuration',
      'Continuous monitoring',
      'Troubleshooting support',
      'Enhanced efficiency and security'
    ]
  }, {
    name: 'Cybersecurity',
    description: 'Our Cybersecurity Services offer robust protection for your digital assets, including threat detection, vulnerability assessments, and incident response to safeguard your systems from cyber threats.',
    icon: ShieldCheckIcon,
    items: [
      'Robust protection',
      'Threat detection',
      'Vulnerability assessments',
      'Incident response',
      'Safeguarding systems'
    ]
  }, {
    name: 'Hardware Diagnostics',
    description: 'Our Hardware Diagnostics Services provide thorough and accurate assessments of your hardware components. We identify and troubleshoot issues to ensure your equipment operates at peak performance.',
    icon: ArrowPathIcon,
    items: [
      'Thorough hardware assessments',
      'Issue identification and troubleshooting',
      'Ensuring peak operation'
    ]
  }
]
</script>

<template>
  <section id="services" class="pt-36 pb-10 px-6 sm:px-[85px] flex flex-col space-y-24">
    <div class="flex flex-col items-center space-y-4">
      <p class="text-4xl font-bold text-gray-800">Professional PC Support Services</p>

      <p class="text-gray-400 text-lg sm:text-center">
        Comprehensive technical solutions delivered by certified professionals. From hardware <br class="hidden lg:block"> repairs to cybersecurity, we provide reliable support for all your computing needs.
      </p>
    </div>

    <div class="grid grid-cols-1 sm:xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-8">
      <div 
        v-for="service in services"
        class="p-6 bg-white rounded-md border border-gray-200 shadow-md relative transition-all duration-500 ease-in-out hover:-translate-y-1 hover:shadow-xl"
      >
        <div class="flex flex-col items-start space-y-4">
          <div class="size-16 bg-teal-100 rounded-md grid place-items-center">
            <component :is="service.icon" class="size-8 stroke-teal-500" />
          </div>

          <p class="text-xl font-medium text-gray-800">{{ service.name}}</p>

          <p class="text-base text-gray-400">{{ service.description }}</p>

          <div class="flex flex-col items-start space-y-1">
            <div v-for="item in service.items" class="flex items-center space-x-2">
              <span class="size-2 bg-teal-500 rounded-full" />

              <p class="text-base text-gray-400 capitalize">{{ item }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col items-center space-y-4">
      <BaseButton class="px-8">
        <span class="text-xl">Request Custom Support</span>
      </BaseButton>

      <p class="text-base text-gray-400">
        Need specialized assistance? Contact our experts for tailored solutions.
      </p>
    </div>
  </section>
</template>