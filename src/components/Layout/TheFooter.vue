<script setup>
defineOptions({
  name: 'Footer',
});
</script>


<template>
 <footer class="bg-[#1C1011] text-white py-6">
 
  <section class="p-10">
    <div class="grid grid-cols-5 gap-10">
    
      <div class="flex flex-col ">
        <img src="@/assets/img/parkteatret-logo.png" alt="Logo" class="w-64 h-auto mb-4" />
        <p class=" mb-2">Jernbanegade 41, 3600 Frederikssund</p>
        <p class=" mb-2">Telefon: +45 4738 3435</p>
        <p class="mb-2">Email: info@parkteatret.dk</p>
        <p class=" mb-2">Cookie- og privatlivspolitik</p>
      </div>

      
      <div class="flex flex-col ">
        <h1 class="text-[#BE1522] text-4xl font-semibold mb-4">Billetservice</h1>
        <p class=" mb-2">Billeter</p>
        <p class=" mb-2">Årskort</p>
        <p class="mb-2">Gavekort</p>
        <p>Park Ung</p>
        <p class="text-[#A0C298] text-xs">ekstra fordele til under 26 år</p>
      </div>

      <div class="flex flex-col ">
        <h1 class="text-[#BE1522] text-4xl font-semibold mb-4">Gå til</h1>
        <p class="mb-2">Biograf</p>
        <p class="mb-2">Teatret</p>
        <p class=" mb-2">Huset</p>
      </div>

      <div class="flex flex-col ">
        <h1 class="text-[#BE1522] text-4xl font-semibold mb-4">Gå til</h1>
        <p class="mb-2">Biograf</p>
        <p class="mb-2">Teatret</p>
        <p class=" mb-2">Huset</p>
      </div>

     
      <div class="flex flex-col ">
        <h1 class="text-[#BE1522] text-4xl font-semibold mb-4">Socials</h1>
        <div class="flex space-x-4">
          <a href="https://facebook.com" class="text-blue-600 hover:underline">
            <img src="@/assets/icons/fb-icon.svg" alt="Logo" class="w-10 h-auto mb-4 filter invert brightness-0" />
          </a>
          <a href="https://twitter.com" class="text-blue-600 hover:underline">
            <img src="@/assets/icons/instagram-icon.svg" alt="Logo" class="w-10 h-auto mb-4 filter invert brightness-0" />
          </a>
        </div>
      </div>

      <div class="flex flex-col ">
        <h1 class="text-[#BE1522] text-4xl font-semibold mb-4">Øvrige</h1>
        <p class="mb-2">Vedtægter</p>
        <p class="mb-2">Dokumenter</p>
        <p class=" mb-2">website og billetsystem fra ebillet a/s</p>
      </div>
    </div>
  </section>

 
  <hr class="border-gray-600 my-6" />
  <div class="container mx-auto flex justify-between px-10">
   
    <div>
      <h2 class="text-[#BE1522] text-4xl font-semibold mb-2">Nyhedsbrev</h2>
      <p class="text-sm">Tilmeld dig til vores nyheds brev, og få de seneste nyt</p>
    </div>

   
    <div class="flex items-center space-x-4">
      <input
        type="text"
        placeholder="Skriv din mail"
        class="px-4 py-2 rounded  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
      />
      <button class="px-6 py-2 bg-[#A0C298] text-white font-semibold rounded hover:bg-[#5C9E4D] focus:ring-2 focus:ring-white">
        Subscribe
      </button>
    </div>
  </div>
  <hr class="border-gray-600 my-6" />
  <div>
    <p  class="text-center">Website og billetsystem fra ebillet a/s</p>
  </div>
</footer>


</template>