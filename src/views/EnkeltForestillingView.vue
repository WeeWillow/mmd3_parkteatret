<script setup>
import { ref } from 'vue';

// importer billeder
import kantImage0 from '/assets/img/kant0.jpg';
import kantImage1 from '/assets/img/kant1.jpg';
import kantImage2 from '/assets/img/kant2.jpg';
import kantImage3 from '/assets/img/kant3.jpg';
import kantImage4 from '/assets/img/kant4.jpg';

// giver en scroll animation til faq
const scrollToSection = () => {
  const section = document.getElementById("faq-section");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

// Laver en reaktive reference for the main billede og billede class
const mainImage = ref(kantImage0);
const imageClass = ref('');


const changeImage = (newImage) => {
  
  imageClass.value = 'slide-out';

  
  setTimeout(() => {
    mainImage.value = newImage;
    imageClass.value = 'slide-in';
  }, 500); 
};
</script>

<template>
  <div class="bg-[#F2F2F2] text-gray-800">
    <section class="mx-4 sm:mx-8 lg:mx-16">

    <section class="relative p-8">
  <div class="max-w-20xl mx-auto grid md:grid-cols-2">
    
    <img 
      class="w-full h-full object-cover" 
      src="/assets/img/parkteatret_kant.jpg" 
      alt="Kant performance" 
    >

   
    <div class="relative">
  
  <div class="relative border-t-2 border-b-2 border-r-2 border-[#A0C298] pt-6 pb-6 pl-6 pr-6">
    <h1 class="text-4xl font-bold mb-4">KANT</h1>
    <div class="flex flex-wrap gap-4 mb-6"> 
  
  <div class="bg-[#A0C298] bg-white bg-opacity-40 p-4 rounded-xl flex items-center justify-start max-w-max">
    <img src="/assets/icons/clock-regular.svg" alt="Logo 1" class="h-5 w-5 mr-4">
    <p class="text-sm font-medium">Varighed: 40 min</p>
  </div>

  
  <div class="bg-[#A0C298] bg-white bg-opacity-40 p-4 rounded flex items-center justify-start max-w-max">
    <img src="/assets/icons/child-solid.svg" alt="Logo 2" class="h-5 w-5 mr-4 ">
    <p class="text-sm font-medium">Alder: 7-12 år</p>
  </div>
</div>


   
    <div class="bg-[#A0C298] bg-white bg-opacity-40 p-4 rounded flex items-center justify-start max-w-max mb-6">
      <img src="/assets/icons/calendar-days-regular.svg" alt="Logo 3" class="h-5 w-5 mr-4">
      <p class="text-sm font-medium">10 januar - 25 januar 2025</p>
    </div>

    
    <p class="mb-6"> 
      Kristoffer er ni år, og om aftenen ligger han i sin seng og tænker på det uendelige verdensrum. Han er fascineret og bange på en gang.
    </p>
    <p class="mb-6"> 
      Vi oplever, hvordan det er at være lille og undre sig over universet og stjernerne og alt det, vi ikke fatter. Så bliver man nødt til at tænke højt sammen med mor og fantasere om alt det ubegribelige. Slutter universet et sted? Og hvad er der så på den anden side? Måske er det hele en drøm? Men hvem drømmer så drømmen? Er det mig, eller mor, eller måske?
    </p>
    <p class="mb-6"> 
      Kant er en dramatisering af Nobelprisvinder i litteratur Jon Fosses børnebog - en universel fortælling om en dreng og alle de spørgsmål livet afføder, lige før man skal sove.
    </p>
    <p class="mb-6"> 
      Kant er en CO-produktion med Teater Baglandet
    </p>

    
    <div class="relative flex items-center">
      <button class="bg-green-600 text-white py-3 px-8 rounded hover:bg-green-700 mr-6">
        Køb billet her
      </button>
      
     
      <div class="relative group flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 
      ">
        <img src="/assets/icons/info-solid.svg" alt="Info Icon" class="w-4 h-4 cursor-pointer" @click="scrollToSection">

        
        <div class="absolute bottom-full mb-2 hidden group-hover:block w-64 bg-black text-white text-sm py-2 px-4 ">
          Du kan finde mere information angående billet køb, ved at klikke her eller rulle ned på siden, hvor det er nogen ofte stillede spørgsmål, som kan hjælpe ellers kontakte os.
        </div>
      </div>
    </div>
  </div>
</div>

  </div>
</section>





    
    <section class="gap-4 mt-[4rem]">
  <div class="grid grid-cols-3 gap-4">
    
    <div class="col-span-1 border border-[#A0C298] p-4 rounded-md ms-7">
      <p class="text-lg font-semibold">Holdet bag, Kant</p>
      <p class="mt-2 text-sm">Her er de fantastiske mennesker som er bag teaterstykket, kant.</p>
    </div>

 
    <div class="grid grid-cols-2 col-span-2 gap-4 me-7">
  
  <div class="flex border border-[#A0C298] rounded-md overflow-hidden">
    <div class="bg-[#A0C298] flex items-center justify-center w-12">
      <img src="/assets/icons/draw-pen.svg" alt="Logo 1" class="w-6 h-6">
    </div>
    <div class="p-2">
      <p class="text-sm font-semibold leading-tight">Jon Fosse</p>
      <p class="text-xs leading-tight text-gray-600">Forfatter</p>
    </div>
  </div>

  
  <div class="flex border border-[#A0C298] rounded-md overflow-hidden">
    <div class="bg-[#A0C298] flex items-center justify-center w-12">
      <img src="/assets/icons/file-edit-outline.svg" alt="Logo 2" class="w-6 h-6">
    </div>
    <div class="p-2">
      <p class="text-sm font-semibold leading-tight">Jane Rasch</p>
      <p class="text-xs leading-tight text-gray-600">Manuskript</p>
    </div>
  </div>

  
  <div class="flex border border-[#A0C298] rounded-md overflow-hidden">
    <div class="bg-[#A0C298] flex items-center justify-center w-12">
      <img src="/assets/icons/human-greeting-variant.svg" alt="Logo 3" class="w-6 h-6">
    </div>
    <div class="p-2">
      <p class="text-sm font-semibold leading-tight">Solveig Weinkouff</p>
      <p class="text-xs leading-tight text-gray-600">Instruktion</p>
    </div>
  </div>

  
  <div class="flex border border-[#A0C298] rounded-md overflow-hidden">
    <div class="bg-[#A0C298] flex items-center justify-center w-12">
      <img src="/assets/icons/masks-theater-solid.svg" alt="Logo 4" class="w-6 h-6">
    </div>
    <div class="p-2">
      <p class="text-sm font-semibold leading-tight">Sofie Pallesen & Anton Hjort Nielsen</p>
      <p class="text-xs leading-tight text-gray-600">Skuespiller</p>
    </div>
  </div>
</div>

  </div>
</section>



   
    <section class="mb-[6rem] mt-[6rem]">
  <div class="ms-7">
    <div class="text-center">
      <h2 class="text-2xl font-semibold mb-6 inline-block border-b-2 border-[#A0C298] pb-0.5">Kant støttes af:</h2>
    </div>

   
    <div class="overflow-hidden">
      <div class="flex animate-marquee">
       
        <div class="flex">
          <img src="/assets/img/Louis-Hansens_Fond_logo_RGB_Sort.svg" alt="Support Logo 1" class="h-16 mx-4">
          <!-- <img src="/assets/img/unavngivet-3.png" alt="Support Logo 2" class="h-16 mx-4"> -->
          <img src="/assets/img/wilhem_hansen_fonden_logo-150.jpg" alt="Support Logo 3" class="h-16 mx-4">
          <!-- <img src="/assets/img/william_fonden.webp" alt="Support Logo 4" class="h-16 mx-4"> -->
          <img src="/assets/img/logo_outline.png" alt="Support Logo 5" class="h-16 mx-4">
          
          <img src="/assets/img/Louis-Hansens_Fond_logo_RGB_Sort.svg" alt="Support Logo 1" class="h-16 mx-4">
          <!-- <img src="/assets/img/unavngivet-3.png" alt="Support Logo 2" class="h-16 mx-4"> -->
          <img src="/assets/img/wilhem_hansen_fonden_logo-150.jpg" alt="Support Logo 3" class="h-16 mx-4">
          <!-- <img src="/assets/img/william_fonden.webp" alt="Support Logo 4" class="h-16 mx-4"> -->
          <img src="/assets/img/logo_outline.png" alt="Support Logo 5" class="h-16 mx-4">
        </div>
      </div>
    </div>
  </div>
</section>



<section class="gap-4 mb-[6rem] ms-7 me-7">
  <div class="grid grid-cols-4 gap-4">
   
    <div class="flex flex-col gap-2 col-span-1">
     
      <div class="flex border border-[#A0C298] rounded-md overflow-hidden ">
        <div class="bg-[#A0C298] flex items-center justify-center w-12">
          <img src="/assets/icons/draw-pen.svg" alt="Icon 1" class="w-6 h-6">
        </div>
        <div class="p-2">
          <p class="text-sm font-semibold leading-tight">7-14 ÅR</p>
          <p class="text-xs leading-tight">Alder</p>
        </div>
      </div>

      
      <div class="flex border border-[#A0C298] rounded-md overflow-hidden ">
        <div class="bg-[#A0C298] flex items-center justify-center w-12">
          <img src="/assets/icons/file-edit-outline.svg" alt="Icon 2" class="w-6 h-6">
        </div>
        <div class="p-2">
          <p class="text-sm font-semibold leading-tight">40 MIN</p>
          <p class="text-xs leading-tight">Varighed</p>
        </div>
      </div>
    </div>

   
    <div class="flex flex-col gap-2 col-span-1">
      
      <div class="flex border border-[#A0C298] rounded-md overflow-hidden ">
        <div class="bg-[#A0C298] flex items-center justify-center w-12">
          <img src="/assets/icons/human-greeting-variant.svg" alt="Icon 3" class="w-6 h-6">
        </div>
        <div class="p-2">
          <p class="text-sm font-semibold leading-tight">150 MIN</p>
          <p class="text-xs leading-tight">Opsætningstid</p>
        </div>
      </div>

     
      <div class="flex border border-[#A0C298] rounded-md overflow-hidden">
        <div class="bg-[#A0C298] flex items-center justify-center w-12">
          <img src="/assets/icons/masks-theater-solid.svg" alt="Icon 4" class="w-6 h-6">
        </div>
        <div class="p-2">
          <p class="text-sm font-semibold leading-tight">60 MIN</p>
          <p class="text-xs leading-tight">Nedtagninstid</p>
        </div>
      </div>
    </div>

   
    <div class="col-span-2 flex gap-4">
  
  <div class="border border-[#A0C298] p-4 rounded-md flex-1">
    <h2 class="text-lg font-semibold whitespace-nowrap w-full">SPECIFIKATIONER FOR TEATERSTYKKET KANT</h2>
    <p class="mt-2 text-sm">
      For nærmere information kontakt Birgitte Etlersø på
      <a href="mailto:birgitte@parkteatret.dk" class="text-blue-600 underline">birgitte@parkteatret.dk</a>
    </p>
  </div>

  
  <div class="border border-[#A0C298] p-4 rounded-md flex-1">
    <h2 class="text-lg font-semibold whitespace-nowrap w-full">UNDERVISNINGSMATERIALE</h2>
    <p class="mt-2 text-sm">
      Undervisningsmaterialet er til brug i indskolingen i 1.-6. klasse.
    </p>
  </div>
</div>

  </div>
</section>



<section class="mb-10 ms-7">
  <div class="flex items-start">
    
    <!-- Main Image -->
    <div class="relative flex-shrink-0">
      <img 
        :src="mainImage" 
        alt="Main Image" 
        class="w-[1200px] h-[550px] object-cover transition-all duration-500 transform" 
        :class="imageClass" 
        id="main-image"
      />
    </div>

    <!-- Smaller Images -->
    <div class="flex flex-col">
      <div 
        v-for="(image, index) in [kantImage0, kantImage1, kantImage2, kantImage3, kantImage4]" 
        :key="index" 
        class="cursor-pointer"
        @click="changeImage(image)"
      >
        <img 
          :src="image" 
          alt="Small Image" 
          class="w-[120px] h-[110px] object-cover transition-transform hover:scale-105"
        />
      </div>
    </div>
  </div>
</section>




   
    <section class="mb-20 mt-[6rem]" id="faq-section">
  <div class="ms-7">
    <h2 class="text-2xl font-semibold mb-4">Ofte stillede spørgsmål</h2>
    <div class="space-y-4">
     
      <div class="grid grid-cols-1 md:grid-cols-3 gap-40">
        <h3 class="font-bold md:col-span-1">Hvordan køber jeg billetter til teatret?</h3>
        <div class="md:col-span-2 max-w-full">
          <p class="max-w-lg">1. Du finder den forestilling, du gerne vil se.</p>
          <p class="max-w-lg">2. Klik på "køb billetter"-knappen.</p>
          <p class="max-w-lg">3. Klik på den eller de pladser, du ønsker. De lyseblå pladser er ledige og bliver grønne, når du har valgt dem. Skifter du mening, fravælger du en plads ved at klikke på den.</p>
        </div>
      </div>

      
      <div class="border-t border-[#A0C298] my-4 max-w-[1200px]"></div>

      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-40">
        <h3 class="font-bold md:col-span-1">Hvordan reserverer jeg billetter til teatret?</h3>
        <div class="md:col-span-2 max-w-full">
          <p class="max-w-lg">Det er desværre ikke muligt at reservere billetter til teatret.</p>
        </div>
      </div>

      
      <div class="border-t border-[#A0C298] my-4 max-w-[1200px]"></div>
    </div>
  </div>
</section>






  
    <section class="pb-10">
  <div class="max-w-7xl mx-auto ms-7">
    <h2 class="text-2xl font-semibold mb-6">Se vores andre forestillinger</h2>
    <div class="grid md:grid-cols-3 gap-8">
     
      <div class="relative bg-white  overflow-hidden h-64 cursor-pointer  transition hover:scale-105">
        <img src="/assets/img/energi.jpg" alt="Energi" class="w-full h-full object-cover">
        <div class="absolute inset-x-0 bottom-0 bg-black text-white px-4 py-2">
          <h3 class="font-bold text-center">Energi</h3>
        </div>
      </div>
      
      <div class="relative bg-white  overflow-hidden h-64 cursor-pointer  transition hover:scale-105">
        <img src="/assets/img/animals.jpg" alt="Animals" class="w-full h-full object-cover">
        <div class="absolute inset-x-0 bottom-0 bg-black text-white px-4 py-2">
          <h3 class="font-bold text-center">Animals</h3>
        </div>
      </div>
     
      <div class="relative bg-white overflow-hidden h-64 cursor-pointer  transition hover:scale-105">
        <img src="/assets/img/ungdommen.jpg" alt="Til Ungdommen" class="w-full h-full object-cover">
        <div class="absolute inset-x-0 bottom-0 bg-black text-white px-4 py-2">
          <h3 class="font-bold text-center">Til Ungdommen</h3>
        </div>
      </div>
    </div>
  </div>
</section>
</section>
  </div>
</template>





<style scoped>
    
    @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  .animate-marquee {
    display: flex;
    animation: marquee 20s linear infinite;
  }
  

  
@keyframes slideIn {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0); 
  }
}

@keyframes slideOut {
  0% {
    transform: translateX(0); 
  }
  100% {
    transform: translateX(-100%); 
  }
}

.slide-in {
  animation: slideIn 0.5s ease-out forwards;
}

.slide-out {
  animation: slideOut 0.5s ease-in forwards;
}

</style>
