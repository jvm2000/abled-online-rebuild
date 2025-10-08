<script setup lang="ts">
import Layout from './layouts/DefaultLayout.vue'
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
  <div id="app">
    <Layout>
      <router-view />
    </Layout>
  </div>
</template>