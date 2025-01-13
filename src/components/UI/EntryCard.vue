<template>
  <div class="relative bg-white overflow-hidden h-64 cursor-pointer transition hover:scale-105">
    <img :src="imageSrc" :alt="altText" class="w-full h-full object-cover" />
    <div class="absolute inset-x-0 bottom-0 bg-black text-white px-4 py-4">
      <h3 class="font-bold text-center">{{ title }}</h3>
    </div>
  </div>
</template>

<script setup>
defineProps({
  imageSrc: String,
  altText: String,
  title: String,
});
</script>
