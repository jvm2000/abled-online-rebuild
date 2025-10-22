<script setup lang="ts">
import { onMounted } from 'vue'

function setTitle(titleChunk: string | null) {
  document.title = titleChunk
    ? `${titleChunk} · Abled Online`
    : 'Abled Online'
}

function setFavicon(href: string) {
  let link: HTMLLinkElement | null = document.querySelector("link[rel~='icon']")
  if (!link) {
    link = document.createElement('link')
    link.rel = 'icon'
    document.head.appendChild(link)
  }
  link.href = href
}

onMounted(() => {
  setTitle(null)
  setFavicon('/icons/favicon.ico')
})
</script>

<template>
  <div id="app" class="all-fonts">
    <router-view />
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');

.all-fonts {
  font-family: 'Roboto', sans-serif;
}
</style>