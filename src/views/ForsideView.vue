<script setup>
import { ref, computed, onMounted, nextTick } from "vue";

// Import for images //
import kant0 from "/assets/img/kant0.jpg";
import kantThumbnail from "/assets/img/parkteatret_kant.jpg";
import energi from "/assets/img/energi.jpg";
import energiThumb from "/assets/img/energi-thumb.jpg";
import schwanzen from "/assets/img/Schwanzen.jpg";
import animals from "/assets/img/animals.jpg";
import ungdommen from "/assets/img/ungdommen.jpg";
import farfar from "/assets/img/min-farfars-guitar.jpg";
import matilda from "/assets/img/matilda.jpg";
import vejenHjem from "/assets/img/vejen-hjem.jpg";
import niko from "/assets/img/niko.jpg";
import paddington from "/assets/img/paddington.jpg";
import madam from "/assets/img/madammelda.jpg";
import alittlesomething from "/assets/img/alittlesomething.jpg";



// Reactive variables
const currentIndex = ref(0);
const setCurrentImage = (index) => {
  currentIndex.value = index;
};
const images = ref([
  {
    title: "KANT",
    description:
      "Kristoffer er ni år, og om aftenen ligger han i sin seng og tænker på det uendelige verdensrum. Han er fascineret og bange på en gang.",
    shortDescription: "Kristoffer er ni år, og om aftenen ligger han i sin seng og tænker...",
    src: kant0, // Replace with a valid image path
    thumbnail: kantThumbnail, // Replace with a valid thumbnail path
    alt: "KANT image",
    ageRange: "7-12 ÅR",
    duration: "40 MIN",
    date: "10. januar - 25. Januar 2025", // Add this property
  },
  {
    title: "ENERGI",
    description:
      "Energi” er ny dansk dramatik skrevet af Anna Skov. Her kommer vi helt tæt på et lokalsamfund og tager diskussionen op om vi skal genoverveje atomenergi som energikilde i Danmark.",
    shortDescription:
      "Energi” er ny dansk dramatik skrevet af Anna Skov... ",
    src: energi, // Replace with a valid image path
    thumbnail: energiThumb, // Replace with a valid thumbnail path
    alt: "ENERGI image",
    ageRange: "8-14 ÅR",
    duration: "90 MIN",
    date: "1. marts - 23. marts 2025",
  },
  {
    title: "SCHWANZEN SÄNGER KNABEN",
    description:
      "Schwanzen Sänger Knaben er et sofistikeret, lille mandskor, der igennem 28 år har sunget sig ind i hjerterne på godtfolk og sjofle sjæle. Igennem alle årene har de forsøgt at balancere på den knivskarpe grænse mellem pornografi og blasfemi. ",
    shortDescription:
      "Schwanzen Sänger Knaben er et sofistikeret, lille mandskor, der igennem 28 år har sunget sig ind... ",
    src: schwanzen, // Replace with a valid image path
    thumbnail: schwanzen, // Replace with a valid thumbnail path
    alt: "schwanzen image",
    ageRange: "???",
    duration: "???",
    date: "13. December 2024",
  },
  {
    title: "ANIMALS",
    description:
      "I over et halvt århundrede har grisene haft absolut magt i dyrenes samfund og har opbygget et falsk demokratisk system. Et oprør ledet af fårene skaber en trussel mod regeringen. Modsvaret er en systematisk jagt på og endelig tilintetgørelse af oprørerne udført af statens hundepatruljer. ",
    shortDescription: "Hvad skete der 50 år efter på Dyrenes Gård? ",
    src: animals, // Replace with a valid image path
    thumbnail: animals, // Replace with a valid thumbnail path
    alt: "Animals image",
    ageRange: "???",
    duration: "???",
    date: "3. Februar 2025",
  },
  {
    title: "TIL UNGDOMMEN",
    description:
      "Til ungdommen er skabt ud fra biografiske historier fra teenageres egne liv. Med humor og eftertænksomhed fortæller forestillingen om tiden mellem barndom og voksenliv. Hvor længe er man barn, og hvordan bliver man egentlig voksen? Hvad tænker vennerne? Hvorfor forstår de voksne ikke? Længes vi i virkeligheden alle, på tværs af alder og generationer, efter det samme?",
    shortDescription:
      "Til ungdommen er skabt ud fra biografiske historier fra teenageres egne liv...",
    src: ungdommen, // Replace with a valid image path
    thumbnail: ungdommen, // Replace with a valid thumbnail path
    alt: "Til Ungdommen image",
    ageRange: "???",
    duration: "80 MIN",
    date: "23. Januar 2025",
  },
  {
    title: "Min farfars guitar",
    description:
      "Om Lines musikalske farfar, der spreder smil og glæde omkring sig, indtil den dag han får gigt i fingrene og ikke smiler mere. Og om Lines savn og undren, indtil hun en dag beslutter at hun vil spille guitaren for ham.",
    shortDescription:
      "Om Lines musikalske farfar, der spreder smil og glæde omkring sig, indtil den dag han får gigt i...",
    src: farfar, // Replace with a valid image path
    thumbnail: farfar, // Replace with a valid thumbnail path
    alt: "Farfar's guitar image",
    ageRange: "3-6 ÅR og +65 ÅR",
    duration: "25 MIN",
    date: "16. november 2025 i Frederikssund Kirkes Præstegård, Kirkegade 7",
  },
  {
    title: "Matilda-effekten",
    description:
      " Gennem generationer er kvinders videnskabelige arbejde systematisk blevet tilskrevet mandlige forskere. Nyskabt sanselig og poetisk dukke- teaterforestilling for voksne om historiens hidtil oversete videnskabskvinder",
    shortDescription:
      "Gennem generationer er kvinders videnskabelige arbejde systematisk blevet tilskrevet mandlige forskere...",
    src: matilda, // Replace with a valid image path
    thumbnail: matilda, // Replace with a valid thumbnail path
    alt: "Matilda-effekten image",
    ageRange: "???",
    duration: "70 MIN",
    date: "Gæstespil - LØRDAG DEN 22. FEBRUAR 2025 16.00",
  },
  // Add more images as needed
]);

// Reactive properties
const currentImage = computed(() => images.value[currentIndex.value] || null);
const mainHeight = ref(600); // Default height for the main image box
const sidebar = ref(null); // Ref to sidebar for height calculation

// Method to update main image box height
const adjustHeight = () => {
  nextTick(() => {
    if (sidebar.value) {
      mainHeight.value = sidebar.value.clientHeight;
    }
  });
};


// Ensure height is adjusted on mount and on window resize
onMounted(() => {
  adjustHeight(); // Adjust on mount
  window.addEventListener("resize", adjustHeight); // Adjust on resize
});

const faqItems = ref([
  {
    question: "Hvornår har caféen åben?",
    answer: "Parkteatrets café, som er drevet af vores beskyttet beskæftigelsestilbud, har åbent alle hverdage fra kl. 10-14. \n\nDerudover holder vi åbent weekender og aftener, hvor vi åbner en halv time før første film/forestilling. Du kan se dagens program her. \n\nEr du i tvivl, om vi har åbent, er du altid velkommen til at ringe til os på tlf.: 47383435 eller skrive til os på Facebook.",
  },
  {
    question: "Kan man spise i caféen?",
    answer: "Ja! I Parkteatrets café serverer vi foruden et udvalg af lækre kager og drikkelse også varme retter. Vores udvalg varierer, så det er en god idé at bestille på forhånd. \n\nDet kan du gøre ved at ringe til os på tlf.: 4738 3435 eller sende os en besked på Facebook.",
  },
  {
    question: "Hvordan tilmelder jeg mig Parkteatrets nyhedsbrev?",
    answer: "Nederst på alle vores sider, er footeren,, hvor du kan tilmelde dig, vores nyhedsbrev.",
  },
  {
    question: "Har Parkteatret handicap-faciliteter?",
    answer: "Det er vigtigt for os, at Parkteatret er tilgængeligt for alle og vi arbejder hele tiden på at skabe bedre handicap-faciliteter. \n\nI 2018 fik vi en handicaprampe ind til salen samt inde i salen. Hvis du skal sidde i kørestol inde i salen, kan du kontakte os på forhånd på tlf.: 4738 3435. Så vil vi afmontere et sæde og gøre plads til dig. \n\nDrejer det sig om teaterbilletter skal du ringe på 4738 33 34 eller skrive en mail til teater@parkteatret.dk \n\nVi har desværre ikke fået et handicaptoilet, men det er muligt at bruge Sillebroens på den anden side af vejen.",
  },
  {
    question: "Hvad betyder det, at Parkteatret har et beskyttet beskæftigelsestilbud??",
    answer: "I Parkteatret er det vigtigt for os at være med til at skabe ’det gode liv’. At være med til at udvikle byens kulturliv er naturligvis en vigtig del af dette, men det er også vigtigt for os at være arbejdsplads, der byder på både rummelighed og diversitet. \n\nI august 2019 fik vi, med støtte fra Trygfonden, oprettet et beskyttet beskæftigelsestilbud. Tilbuddet varetager caféen og rengøring i hverdagene i dagstimerne og enkelte aftener. Tilbuddet varetages af erfarent socialpædagogisk personale, der støtter medarbejderne i deres arbejdsopgaver, trivsel og udvikling. \n\nMedarbejderne er mennesker med kognitive funktionsnedsættelser, som f.eks. autisme, Down Syndrom, hjerneskader og andre former for handicaps.",
  },
  {
    question: "Hvad gør Parkteatret til noget særligt?",
    answer: "I Parkteatret brænder vi for at løfte det lokale kulturliv. Vi vil være Frederikssunds kulturelle samlingspunkt og byder derfor på både biograf, teater, café, foredrag, comedy koncerter og andre spændende arrangementer. \n\nVores kulturudbud er baseret på rummelighed og kvalitet, og du kan opleve film fra hele verden. Teatrets forestillinger er alle professionelt produceret og lægger vægt på det lokale og nære. \n\nI Parkteatret lægger vi stor vægt på rummelighed, samarbejde og højt til loftet. Derfor lægger vi gerne hus til lokale samarbejder, og Parkteatrets café er drevet af et beskyttet beskæftigelsestilbud, hvor de ansatte er mennesker med kognitive funktionsnedsættelser.",
  },
  {
    question: "Hvor kan jeg parkere?",
    answer: "Ankommer du i bil, ligger der en parkeringsplads på Ågade nogle 100 meter bag Parkteatret. Her kan du parkere gratis hele aftenen. \n\nAnkommer du i kørestol? Så kan du parkere lige ved siden af rampen ind til salen. Læs mere om vores handicapfaciliteter her.",
  },
]);

const activeIndex = ref(null);

const toggleItem = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};
const mainImage = ref(vejenHjem);
const imageClass = ref('');

// Method to change the main image with animation
const changeImage = (newImage) => {
  // Set the image to 'slide-out' class first
  imageClass.value = 'slide-out';

  // Wait for the animation to finish, then change the image and apply the 'slide-in' class
  setTimeout(() => {
    mainImage.value = newImage;
    imageClass.value = 'slide-in';
  }, 500); // Timeout duration matches the slide-out animation duration
};

</script>

<template>
  <div class="bg-[#F2F2F2]">
    <div v-if="currentImage" class="grid grid-cols-4 h-screen">
      <!-- Main Hero Section -->
      <div class="col-span-3 relative bg-black text-white" :style="{ height: mainHeight + 'px' }">
        <!-- Main Image -->
        <img :src="currentImage.src" :alt="currentImage.alt" class="w-full h-full object-cover" />

        <!-- Box at the bottom of the image -->
        <div class="absolute bottom-0 left-0 w-1/2 bg-white bg-opacity-80 text-black p-4  mb-4 flex flex-col">
          <h1 class="text-2xl font-bold mb-2 flex justify-between items-center">
            <span>{{ currentImage.title }}</span>
            <!-- Dynamic Date on the right side -->
            <span class="text-sm text-gray-600">{{ currentImage.date }}</span>
          </h1>
          <p class="text-lg mb-4">{{ currentImage.description }}</p>

          <!-- Age and Duration Box with Logo -->
          <div class="flex justify-between items-center space-x-4">
            <!-- Age Range Box -->
            <div class="relative flex items-center space-x-2 bg-[#A0C298] p-2 rounded-md">
              <div class="absolute inset-0 bg-white bg-opacity-40 rounded-md"></div> <!-- White overlay -->
              <img src="/assets/icons/child-solid.svg" alt="Logo" class="w-4 h-4 z-10" />
              <span class="text-sm text-gray-600 z-10">{{ currentImage.ageRange }}</span>
            </div>

            <!-- Duration Box -->
            <div class="relative flex items-center space-x-2 bg-[#A0C298] p-2 rounded-md">
              <div class="absolute inset-0 bg-white bg-opacity-40 rounded-md"></div> <!-- White overlay -->
              <img src="/assets/icons/clock-regular.svg" alt="Logo" class="w-4 h-4 z-10" />
              <span class="text-sm text-gray-600 z-10">{{ currentImage.duration }}</span>
            </div>

            <!-- LÆS MERE Button (No overlay) -->
            <button class="bg-[#A0C298] text-black px-4 py-2  font-semibold">
              LÆS MERE
            </button>
          </div>

        </div>
      </div>


      <!-- Sidebar Section -->
      <div ref="sidebar" class="col-span-1 overflow-y-auto  cursor-pointer">
        <div v-for="(image, index) in images" :key="index" :class="[
          'flex items-center space-x-4 p-2 border-4 transition-transform duration-300 cursor-pointer',
          currentIndex === index ? 'border-red-500' : 'border-white',
        ]" @click="setCurrentImage(index)">
          <!-- Thumbnail -->
          <img :src="image.thumbnail" :alt="image.alt" class="w-24 h-24 object-cover" />
          <!-- Title and Short Description -->
          <div>
            <h2 class="font-semibold text-lg">{{ image.title }}</h2>
            <p class="text-sm text-gray-500">{{ image.shortDescription }}</p>
          </div>
        </div>



      </div>
    </div>
    <section class="mx-4 sm:mx-8 lg:mx-16">


      <!-- intro and den sociale virksomhed section -->
      <div class="flex justify-between items-start p-6 mt-[8rem]">
        <!-- Left Side: Heading and Paragraphs -->
        <div class="w-1/2 space-y-4">
          <h1 class="text-3xl font-bold">Velkommen til Parkteatret</h1>
          <p class="text-lg w-[500px]">Hos Parkteatret forener vi kunst, film og teater i en unik atmosfære, hvor tradition møder fornyelse. Vores varierede program byder på alt fra gribende teaterforestillinger til de nyeste filmperler – noget for enhver smag.</p>
          <p class="text-lg w-[500px]">Tag også en pause i vores hyggelige café, hvor du kan nyde lækre sandwiches, kolde drikke og snacks, der fuldender din oplevelse.</p>
          <p class="text-lg w-[500px]">Parkteatret er mere end et sted – det er en oplevelse. Vi glæder os til at byde dig velkommen!</p>
        </div>

        <!-- Right Side: Heading and Boxes -->
        <div class="flex flex-col w-1/2 ml-6">
          <!-- Heading -->
          <h2 class="text-2xl font-semibold mb-4 text-center">Åbningstider</h2>

          <!-- Box Container: Flex for side-by-side boxes -->
          <div class="flex w-full  space-x-4">
            <!-- Box 1 -->
            <div class="border border-[#A0C298] p-20 flex-1 text-center">
              <h3 class="text-xl font-semibold mb-4">Teater</h3>
              <p class="text-lg">
                1 time før alle teaterforestillinger
              </p>
            </div>

            <!-- Box 2 -->
            <div class="border border-[#A0C298] p-10 flex-1 text-center">
              <h3 class="text-xl font-semibold mb-4">Cafe</h3>
              <p class="text-lg">
                Hverdage
              </p>
              <p class="text-lg">
                10.00 - 14.00
              </p>
              <p class="text-lg">
                &
              </p>
              <p class="text-lg">
                16.30 - sidste film
              </p>
            </div>
          </div>
        </div>
      </div>


      <section class="relative p-8 mt-[8rem] mb-[6rem]">
        <div class="max-w-20xl mx-auto grid md:grid-cols-2">
          <!-- Image on the left -->
          <img class="w-full h-[400px] object-cover" src="/public/assets/img/simone-og-camilla.jpg" alt="Kant performance">

          <!-- Text and content on the right inside a box with green outline (no left border) -->
          <div class="relative">
            <!-- Content wrapper with green outline (top, right, and bottom borders only) -->
            <div class="border-t-2 border-r-2 border-b-2 border-[#A0C298] p-6 h-[400px] flex flex-col relative">
              <!-- Title -->
              <h3 class="text-3xl font-bold mb-4">Den Sociale Virksomhed</h3>

              <!-- Description -->
              <p class="mb-4">
                Vi tilbyder beskyttet beskæftigelse til mennesker som ikke fungerer på det ordinære arbejdsmarked og som har brug for ekstra støtte, guidning og vejledning i deres daglige arbejde. Her er brug for en kortere arbejdsdag, struktur og forudsigelighed.
              </p>

              <!-- Button (Positioned at the bottom right) -->
              <button class="bg-[#1C1011] text-white py-3 px-8 hover:bg-black-700 absolute bottom-0 right-0">
                Læs mere
              </button>
            </div>
          </div>
        </div>
      </section>






      <section class="mb-10 ms-7">
        <h2 class="mb-2">I biografen lige nu</h2>
        <div class="flex items-start">

          <!-- Main Image -->
          <div class="relative flex-shrink-0">
            <img :src="mainImage" alt="Main Image" class="w-[1200px] h-[500px] object-cover transition-all duration-500 transform" :class="imageClass" id="main-image" />
          </div>

          <!-- Smaller Images -->
          <div class="flex flex-col">
            <div v-for="(image, index) in [vejenHjem, niko, paddington, madam, alittlesomething]" :key="index" class="cursor-pointer" @click="changeImage(image)">
              <img :src="image" alt="Small Image" class="w-[120px] h-[100px] object-cover transition-transform hover:scale-105" />
            </div>
          </div>
        </div>
      </section>


      <!-- FAQ -->
      <div class="w-full max-w-full mx-auto mt-8 bg-white border border-gray-300  p-6 px-10">
        <h1 class="text-red-400 p-4">Ofte stillede spørgsmål</h1>
        <div v-for="(item, index) in faqItems" :key="index" class="border-b border-gray-300">
          <button @click="toggleItem(index)" class="flex justify-between items-center w-full py-4 text-left">
            <h2 class="font-medium text-gray-900">{{ item.question }}</h2>
            <span class="text-gray-500">
              <svg v-if="activeIndex === index" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
              </svg>
            </span>
          </button>
          <div v-show="activeIndex === index" class="overflow-hidden transition-all duration-300">
            <p class="py-2 text-gray-700" style="white-space: pre-line;">{{ item.answer }}</p>
          </div>
        </div>
      </div>
      <section class="ms-7 mt-10 pb-10">
        <div class="max-w-7xl mx-auto ">
          <div class="grid md:grid-cols-3 gap-8">
            <!-- Card 1 -->
            <div class="relative bg-white shadow-lg  overflow-hidden h-64 cursor-pointer">
              <img src="/assets/img/biograf-entry.jpg" alt="Energi" class="w-full h-full object-cover">
              <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent text-white px-4 py-2">
                <h3 class="font-bold text-center">Biograf</h3>
              </div>
            </div>
            <!-- Card 2 -->
            <div class="relative bg-white shadow-lg  overflow-hidden h-64 cursor-pointer">
              <img src="/assets/img/forestillinger-entry.png" alt="Animals" class="w-full h-full object-cover">
              <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent text-white px-4 py-2">
                <h3 class="font-bold text-center">Teatret</h3>
              </div>
            </div>
            <!-- Card 3 -->
            <div class="relative bg-white shadow-lg  overflow-hidden h-64 cursor-pointer">
              <img src="/assets/img/huset-entry.jpg" alt="Til Ungdommen" class="w-full h-full object-cover">
              <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent text-white px-4 py-2">
                <h3 class="font-bold text-center">Huset</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>

  </div>
</template>

<style scoped>
.slide-in {
  animation: slideIn 0.5s ease-out forwards;
}

.slide-out {
  animation: slideOut 0.5s ease-in forwards;
}

@keyframes slideIn {
  0% {
    transform: translateX(100%);
    /* Start off the screen to the right */
  }

  100% {
    transform: translateX(0);
    /* End at its normal position */
  }
}

@keyframes slideOut {
  0% {
    transform: translateX(0);
    /* Start at its normal position */
  }

  100% {
    transform: translateX(-100%);
    /* Move off-screen to the left */
  }
}
</style>
