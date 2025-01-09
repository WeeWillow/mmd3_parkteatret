<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TheNav from './components/Layout/TheNav.vue';
import TheFooter from './components/Layout/TheFooter.vue';
</script>

<template>
  <TheNav />
  <RouterView />
  <TheFooter />
</template>

<style scoped></style>
