<script setup>
defineOptions({
  name: 'Footer',
});
</script>


<template>
<footer class="bg-[#1C1011] text-white py-6">
  <section class="p-10">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 sm:ml-0 lg:ml-[2rem]">
      <!-- Logo and Contact Info -->
      <div class="flex flex-col items-center lg:items-start">
        <img src="/assets/img/parkteatret-logo.png" alt="Logo" class="w-64 h-auto mb-[2rem]" />
        <p class="mb-2 text-center lg:text-left">Jernbanegade 41, 3600 Frederikssund</p>
        <p class="mb-2 text-center lg:text-left">Telefon: +45 4738 3435</p>
        <p class="mb-2 text-center lg:text-left">Email: info@parkteatret.dk</p>
        <p class="mb-2 text-center lg:text-left">Cookie- og privatlivspolitik</p>
      </div>

      <!-- Billetservice -->
      <div class="flex flex-col items-center lg:items-start lg:ml-[2rem]">
        <h1 class="text-[#BE1522] text-4xl font-semibold mb-4 text-center lg:text-left">Billetservice</h1>
        <p class="mb-2 text-center lg:text-left">Billeter</p>
        <p class="mb-2 text-center lg:text-left">Årskort</p>
        <p class="mb-2 text-center lg:text-left">Gavekort</p>
        <p class="text-center lg:text-left">Park Ung</p>
        <p class="text-[#A0C298] text-xs text-center lg:text-left">ekstra fordele til under 26 år</p>
      </div>

      <!-- Gå til -->
      <div class="flex flex-col items-center lg:items-start lg:ml-[4rem]">
        <h1 class="text-[#BE1522] text-4xl font-semibold mb-4 text-center lg:text-left">Gå til</h1>
        <p class="mb-2 text-center lg:text-left">Biograf</p>
        <p class="mb-2 text-center lg:text-left">Teatret</p>
        <p class="mb-2 text-center lg:text-left">Huset</p>
      </div>

      <!-- Socials -->
      <div class="flex flex-col items-center lg:items-start">
        <h1 class="text-[#BE1522] text-4xl font-semibold mb-4 text-center lg:text-left">Socials</h1>
        <div class="flex space-x-4">
          <a href="https://www.facebook.com/parkteatret.frederikssund" class="text-blue-600 hover:underline">
            <img src="/assets/icons/fb-icon.svg" alt="Logo" class="w-10 h-auto mb-4 filter invert brightness-0" />
          </a>
          <a href="https://www.instagram.com/parkteatret/?hl=en" class="text-blue-600 hover:underline">
            <img src="/assets/icons/instagram-icon.svg" alt="Logo" class="w-10 h-auto mb-4 filter invert brightness-0" />
          </a>
        </div>
      </div>

      <!-- Øvrige -->
      <div class="flex flex-col items-center lg:items-start">
        <h1 class="text-[#BE1522] text-4xl font-semibold mb-4 text-center lg:text-left">Øvrige</h1>
        <p class="mb-2 text-center lg:text-left">Vedtægter</p>
        <p class="mb-2 text-center lg:text-left">Dokumenter</p>
        <p class="mb-2 text-center lg:text-left">website og billetsystem fra ebillet a/s</p>
      </div>
    </div>
  </section>

  <!-- Newsletter Section -->
  <hr class="border-[#A0C298] my-6 max-w-[85rem] mx-auto" />
  <div class="container lg:ml-[4.5rem] flex justify-between">
    <div class="">
      <h2 class="text-[#BE1522] text-4xl font-semibold mb-2">Nyhedsbrev</h2>
      <p class="text-sm">Tilmeld dig til vores nyhedsbrev, og få det seneste nyt</p>
    </div>
    <div class="flex items-center space-x-4 ">
      <input
        type="text"
        placeholder="Skriv din mail"
        class="px-4 py-2 rounded bg-gray-100 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
      />
      <button class="px-6 py-2 bg-[#A0C298] text-[#12320B] rounded font-semibold hover:bg-[#5C9E4D] focus:ring-2 focus:ring-white">
        Tilmeld
      </button>
    </div>
  </div>

  <!-- Footer Bottom -->
  <hr class="border-[#A0C298] my-6 max-w-[85rem] mx-auto" />
  <div>
    <p class="text-center text-[#A0C298]">Website og billetsystem fra ebillet a/s</p>
  </div>
</footer>


</template>