<script setup>
import { ref } from "vue";

// state til mobilmenu
const isMobileMenuOpen = ref(false); // tjekker om mobilmenu er åben, lukket som default
const mobileDropdownIndex = ref(null); // index til dropdown, NULL som default
const dropdownVisible = ref({}); // synlighed af desktop dropdown

// data til menupunkter
const menuItems = ref([
  // ikke-realiserede sider linker til base '/' hvilket er forsiden
  { name: "Forestillinger", link: "/forestillinger", submenu: [] }, //ingen submenu
  { name: "Teater", link: "/", submenu: [{ name: "Undervisning", link: "/" }] }, //submenu med ét punkt
  { name: "Biograf", link: "/", submenu: [{ name: "Dagens program", link: "/" }, { name: "Filmklubber", link: "/" }] }, //submenu med to punkter
  { name: "Café", link: "/cafe", submenu: [] }, // ingen submenu
  { name: "Om Huset", link: "/", submenu: [{ name: "Praktisk Info", link: "/" }, { name: "Husets Historie", link: "/" }, { name: "Medarbejdere", link: "/" }] }, //submenu med tre punkter
]);

// vis dropdown på desktop ud fra index
const showDropdown = (index) => {
  dropdownVisible.value[index] = true; //vis dropdown for det givne index
};

// gem dropdown på desktop ud fra index
const hideDropdown = (index) => {
  setTimeout(() => {
    dropdownVisible.value[index] = false; //skjuler dropdown for givne index efter timeout
  }, 2000); //timeout 2sek for at sikre dropdown ikke forsvinder for hurtigt
};

// Toggle dropdown mobilmenu
const toggleDropdown = (index) => {
  mobileDropdownIndex.value = mobileDropdownIndex.value === index ? null : index; //tjekker index og toggler mellem NULL og valgte punkts index
};
</script>

<template>
  <nav class="bg-white text-black">
    <div class="container mx-auto px-4 flex items-center justify-between h-16">
      <!-- Logo -->
      <!-- routerlink -->
      <router-link to="/" class="flex items-center space-x-2">
        <img src="/public/assets/img/parkteatret-logo.png" alt="Parkteatrets logo" class="w-32 h-auto" />
      </router-link>

      <!-- Navpunkter liste -->
      <!-- mouseenter - viser dropdown, når musen kommer ind over -->
      <!-- mouseleave - skjuler dropdown, når musen forlader -->
      <ul class="hidden md:flex space-x-6 items-center" @mouseenter="showDropdown(index)" @mouseleave="hideDropdown(index)">
        <li v-for="(item, index) in menuItems" :key="index" class="relative" @mouseenter="showDropdown(index)" @mouseleave="hideDropdown(index)">
          <!-- dynamisk generering af listepunkter ud fra menuItems -->
          <router-link :to="item.link" class="flex items-center hover:text-red-500">
            {{ item.name }}
            <!-- routerlink ud fra menuItems -->
            <i v-if="item.submenu && item.submenu.length > 0" class="mdi mdi-menu-down ml-2"></i>
          </router-link>
          <!-- tjekker om menupunkt er længere end 0 for at vise dropdown ikon dynamiskt -->
          <!-- Dropdown -->
          <ul v-if="dropdownVisible[index]" class="absolute bg-white text-black mt-2 z-10">
            <li v-for="(subItem, subIndex) in item.submenu" :key="subIndex" class="px-4 py-2 hover:bg-white-600 hover:text-red-500">
              <router-link :to="subItem.link">{{ subItem.name }}</router-link>
              <!-- viser navn på menupunkter -->
            </li>
          </ul>
        </li>
      </ul>

      <!-- ikoner til kurv, separator og login -->
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

      <!-- toggle af mobilmenu -->
      <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="md:hidden text-2xl focus:outline-none">
        <i :class="isMobileMenuOpen ? 'mdi mdi-close' : 'mdi mdi-menu'"></i>
      </button>
      <!-- skifter ikon mellem lukket og åbent -->
    </div>

    <!-- mobilmenu -->
    <div v-if="isMobileMenuOpen" class="md:hidden bg-white-800 text-black border-t border-white-700">
      <!-- liste af navelementer i mobilmenu -->
      <ul class="space-y-4 p-4">
        <li v-for="(item, index) in menuItems" :key="index" class="relative group">
          <!-- klikbart element til nav -->
          <a href="#" class="flex items-center justify-between hover:text-red-500" @click="toggleDropdown(index)">
            <span>{{ item.name }}</span>
            <!-- viser pilikon hvis den har submenu -->
            <i v-if="item.submenu && item.submenu.length > 0" :class="mobileDropdownIndex === index ? 'mdi mdi-menu-up' : 'mdi mdi-menu-down'" class="ml-2"></i>
          </a>
          <!-- dropdownmenu til submenu -->
          <ul v-if="mobileDropdownIndex === index" class="bg-white-700 mt-2">
            <li v-for="(subItem, subIndex) in item.submenu" :key="subIndex" class="px-4 py-2 hover:bg-white-600">
              <!-- link til submenuelement -->
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
