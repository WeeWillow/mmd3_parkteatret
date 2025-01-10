<script setup>
import { ref } from "vue";

// State for mobile menu
const isMobileMenuOpen = ref(false);
const mobileDropdownIndex = ref(null);
const dropdownVisible = ref({}); // For desktop dropdown visibility

// Sample data for menu items
const menuItems = ref([
  { name: "Forestillinger", link: "/forestillinger", submenu: [] },
  { name: "Teater", link: "/", submenu: [{ name: "Undervisning", link: "/teater/undervisning" }] },
  { name: "Biograf", link: "/", submenu: [{ name: "Dagens program", link: "/" }, { name: "Filmklubber", link: "/" }] },
  { name: "Café", link: "/cafe", submenu: [] },
  { name: "Om Huset", link: "/", submenu: [{ name: "Praktisk Info", link: "/" }, { name: "Husets Historie", link: "/" }, { name: "Medarbejdere", link: "/" }] },
]);

// Show dropdown on desktop
const showDropdown = (index) => {
  dropdownVisible.value[index] = true;
};

// Hide dropdown on desktop
const hideDropdown = (index) => {
  setTimeout(() => {
    dropdownVisible.value[index] = false;
  }, 2000);
};

// Toggle mobile dropdown
const toggleDropdown = (index) => {
  mobileDropdownIndex.value = mobileDropdownIndex.value === index ? null : index;
};
</script>

<template>
  <nav class="bg-white text-black">
    <div class="container mx-auto px-4 flex items-center justify-between h-16">
      <!-- Logo -->
      <router-link to="/" class="flex items-center space-x-2">
        <img src="/public/assets/img/parkteatret-logo.png" alt="Parkteatret logo" class="w-32 h-auto" />
      </router-link>

      <!-- Navigation Points -->
      <ul class="hidden md:flex space-x-6 items-center" @mouseenter="showDropdown(index)" @mouseleave="hideDropdown(index)">
        <li v-for="(item, index) in menuItems" :key="index" class="relative" @mouseenter="showDropdown(index)" @mouseleave="hideDropdown(index)">
          <router-link :to="item.link" class="flex items-center hover:text-red-500">
            {{ item.name }}
            <!-- Only show arrow if submenu exists -->
            <i v-if="item.submenu && item.submenu.length > 0" class="mdi mdi-menu-down ml-2"></i>
          </router-link>
          <!-- Dropdown -->
          <ul v-if="dropdownVisible[index]" class="absolute bg-white text-black mt-2 z-10">
            <li v-for="(subItem, subIndex) in item.submenu" :key="subIndex" class="px-4 py-2 hover:bg-white-600 hover:text-red-500">
              <router-link :to="subItem.link">{{ subItem.name }}</router-link>
            </li>
          </ul>
        </li>
      </ul>

      <!-- Basket, Separator, and Login -->
      <div class="hidden md:flex items-center space-x-4">
        <a href="#" class="flex items-center hover:text-red-500">
          <i class="mdi mdi-cart-outline text-xl"></i>
          <span class="ml-2">Kurv</span>
        </a>
        <div class="h-6 w-px bg-black"></div>
        <a href="#" class="flex items-center hover:text-red-500">
          <span>Log ind</span>
          <i class="mdi mdi-arrow-right ml-2 text-green-400 hover:text-red-500"></i>
        </a>
      </div>

      <!-- Mobile Menu Toggle -->
      <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="md:hidden text-2xl focus:outline-none">
        <i :class="isMobileMenuOpen ? 'mdi mdi-close' : 'mdi mdi-menu'"></i>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isMobileMenuOpen" class="md:hidden bg-white-800 text-black border-t border-white-700">
      <!-- Mobile Navigation Points -->
      <ul class="space-y-4 p-4">
        <li v-for="(item, index) in menuItems" :key="index" class="relative group">
          <a href="#" class="flex items-center justify-between hover:text-red-500" @click="toggleDropdown(index)">
            <span>{{ item.name }}</span>
            <!-- Only show arrow if submenu exists in mobile view -->
            <i v-if="item.submenu && item.submenu.length > 0" :class="mobileDropdownIndex === index ? 'mdi mdi-menu-up' : 'mdi mdi-menu-down'" class="ml-2"></i>
          </a>
          <!-- Dropdown -->
          <ul v-if="mobileDropdownIndex === index" class="bg-white-700 mt-2">
            <li v-for="(subItem, subIndex) in item.submenu" :key="subIndex" class="px-4 py-2 hover:bg-white-600">
              <a :href="subItem.link">{{ subItem.name }}</a>
            </li>
          </ul>
        </li>
      </ul>
      <!-- Basket and Login -->
      <div class="p-4 flex items-center justify-between space-x-4">
        <a href="#" class="flex items-center hover:text-red-500">
          <i class="mdi mdi-cart-outline text-xl"></i>
          <span class="ml-2">Kurv</span>
        </a>
        <a href="#" class="flex items-center hover:text-red-500">
          <span>Log ind</span>
          <i class="mdi mdi-arrow-right ml-2"></i>
        </a>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
