<script setup lang="ts">
import { onMounted } from 'vue';
import About from '../components/anchors/About.vue';
import Contact from '../components/anchors/Contact.vue';
import Home from '../components/anchors/Home.vue'
import News from '../components/anchors/News.vue';
import Services from '../components/anchors/Services.vue';
import Layout from '../layouts/DefaultLayout.vue'

function setTitle(titleChunk: string | null) {
  document.title = titleChunk
    ? `${titleChunk} · Abled Online`
    : 'Abled Online'
}

onMounted(() => setTitle(null))
</script>

<template>
  <Layout>
    <Home />

    <About />

    <Services />

    <!-- <Team />  -->

    <News />

    <Contact />
  </Layout>
</template>