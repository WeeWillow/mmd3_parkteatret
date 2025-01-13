<script setup>
import { ref } from 'vue';
import EntryCard from '@/components/UI/EntryCard.vue';

// Cards data for the first 6 visible cards
const visibleCards = [
  {
    title: "Kant",
    description: "Kristoffer er ni år, og om aftenen ligger han i sin seng og tænker på det uendelige verdensrum.",
    duration: "Varighed: 40 min",
    date: "10 januar - 25 januar 2025",
    age: "8-14 år",
    image: "/assets/img/parkteatret_kant.jpg",
    icon1: "/assets/icons/clock-regular.svg",
    icon2: "/assets/icons/calendar-days-regular.svg",
    icon3: "/assets/icons/child-solid.svg",
  },
  {
    title: "Til Ungdommen",
    description: "Til ungdommen er skabt ud fra biografiske historier fra teenageres egne liv.",
    duration: "Varighed: 80 min",
    date: "23 januar 2025",
    image: "/assets/img/ungdommen.jpg",
    icon1: "/assets/icons/clock-regular.svg",
    icon2: "/assets/icons/calendar-days-regular.svg"
  },
  {
    title: "Animals",
    description: "Hvad skete der 50 år efter på Dyrenes Gård?",
    date: "3. Februar 2025",
    image: "/assets/img/animals.jpg",
    icon1: "/assets/icons/clock-regular.svg",
    icon2: "/assets/icons/calendar-days-regular.svg"
  },
  {
    title: "Energi",
    description: "Energi” er ny dansk dramatik skrevet af Anna Skov... ",
    duration: "Varighed: 90 min",
    date: "1. marts - 23. marts 2025",
    image: "/assets/img/energi.jpg",
    icon1: "/assets/icons/clock-regular.svg",
    icon2: "/assets/icons/calendar-days-regular.svg"
  },
  {
    title: "Min farfars guitar",
    description: "Om Lines musikalske farfar, der spreder smil og glæde omkring sig, indtil den dag han får gigt i fingrene og ikke smiler mere.",
    duration: "Varighed: 25 min",
    date: "16. november 2025",
    age: "3-6 år og +65 år",
    image: "/assets/img/min-farfars-guitar.jpg",
    icon1: "/assets/icons/clock-regular.svg",
    icon2: "/assets/icons/calendar-days-regular.svg"
  },
  {
    title: "Matilda-effekten",
    description: "Gennem generationer er kvinders videnskabelige arbejde systematisk blevet tilskrevet mandlige forskere...",
    duration: "Varighed: 70 min",
    date: "22. februar 2025",
    image: "/assets/img/matilda.jpg",
    icon1: "/assets/icons/clock-regular.svg",
    icon2: "/assets/icons/calendar-days-regular.svg"
  }

];

// Cards data for de næste 3
const hiddenCards = [
  {
    title: "Schwanzen sanger knaben",
    description: "Schwanzen Sänger Knaben er et sofistikeret, lille mandskor, der igennem 28 år har sunget sig ind... ",
    date: "13. December 2024",
    image: "/assets/img/Schwanzen.jpg",
    icon1: "/assets/icons/clock-regular.svg",
    icon2: "/assets/icons/calendar-days-regular.svg"
  },
  {
    title: "Marias barn - Guds søn",
    description: "Med menneskelige øjne vil vi se på det guddommelige. Vi fortæller hele den fantastiske historie om Jesus...",
    duration: "Varighed: 60 min",
    date: "19. okt - 09. nov 2024 & 13. - 20. jan 2025",
    age: "11 år",
    image: "/assets/img/Marias-barn.jpg",
    icon1: "/assets/icons/clock-regular.svg",
    icon2: "/assets/icons/calendar-days-regular.svg"
  },
  {
    title: "Kant",
    description: "Kristoffer er ni år, og om aftenen ligger han i sin seng og tænker på det uendelige verdensrum.",
    duration: "Varighed: 40 min",
    date: "10 januar - 25 januar 2025",
    age: "8-14 år",
    image: "/assets/img/parkteatret_kant.jpg",
    icon1: "/assets/icons/clock-regular.svg",
    icon2: "/assets/icons/calendar-days-regular.svg",
    icon3: "/assets/icons/child-solid.svg",
  }
];
// kommende cards
const kommende = [
  {
    title: "Naarkunstensitrer",
    description: "Tre kunstnere, tre kvinder, tre liv - én mand. En tværkunstnerisk forestilling om kvindens liv i skyggen af manden og i lyset af kunsten.",
    image: "/assets/img/naarkunstensitrer.jpg",
    icon1: "/assets/icons/clock-regular.svg",
    icon2: "/assets/icons/calendar-days-regular.svg",
    icon3: "/assets/icons/child-solid.svg",
  },

  {
    title: "Kingos skygge",
    description: "En fortælling om ikke at finde sin far, men finde sig selv gennem farens poesi.",
    duration: "Varighed: 45 min",
    age: "9-12 år",
    image: "/assets/img/kingos-skygge.jpg",
    icon1: "/assets/icons/clock-regular.svg",
    icon2: "/assets/icons/calendar-days-regular.svg",
    icon3: "/assets/icons/child-solid.svg",
  },
  {
    title: "Fru strid",
    description: "Fru Strid er en forestilling for børn 3-9 år. Det er en rytmisk og musikalsk forestilling om at se verden med nye øjne.",
    duration: "Varighed: 45 min",
    age: "3-9 år",
    image: "/assets/img/strid.jpeg",
    icon1: "/assets/icons/clock-regular.svg",
    icon2: "/assets/icons/calendar-days-regular.svg",
    icon3: "/assets/icons/child-solid.svg",
  },
  {
    title: "Udenfor lands lov og ret",
    description: "Hvordan dømmer man den skyldige, når ingen er uskyldig? Og hvem går man til, når alle er indblandet? ",
    duration: "Varighed: 75 min",
    age: "13-105 år",
    image: "/assets/img/lov-ret.jpg",
    icon1: "/assets/icons/clock-regular.svg",
    icon2: "/assets/icons/calendar-days-regular.svg",
    icon3: "/assets/icons/child-solid.svg",
  },
  {
    title: "Forbindelser",
    description: "Kan du lide podcast? E-bøger? Teater? Naturoplevelser? Så er Forbindelser noget for dig!",
    image: "/assets/img/forbindelser.jpg",
    icon1: "/assets/icons/clock-regular.svg",
    icon2: "/assets/icons/calendar-days-regular.svg",
    icon3: "/assets/icons/child-solid.svg",
  },
  {
    title: "Tolken - hvortil min verden går",
    description: "Forestillingen er en dramatisering af den sande fortælling om Ingeborg Stemann der under 1. verdenskrig...",
    image: "/assets/img/forestillinger-entry.png",
    icon1: "/assets/icons/clock-regular.svg",
    icon2: "/assets/icons/calendar-days-regular.svg",
    icon3: "/assets/icons/child-solid.svg",
  },
];


// Ref for toggle state for indlæs mere og mindre)
const showMore = ref(false);

// Det er fumktionen til at vise resten af kortene, ud fra knappen
const toggleShowMore = () => {
  showMore.value = !showMore.value;
};
</script>

<template>
  <div class="lg:mx-16">
    <h1 class="text-4xl font-bold mb-4 text-[#BE1522] mt-[4rem]">Forestillinger</h1>
    <p class="mb-2">Her er vores oversigt over forestillinger i Parkteatret - Frederikssund Kommune egnsteater.</p>
    <p>Du kan se vores kommende forestillinger, aktuelle forestillinger og tidligere forestillinger</p>

    <section class="relative p-8 mt-[8rem] mb-[6rem]">
      <div class="max-w-20xl mx-auto grid md:grid-cols-2">
        <!-- Text Section -->
        <div class="relative order-last md:order-first">
          <div class="border-t-2 border-l-2 border-b-2 border-[#BE1522] p-6 h-[400px] flex flex-col relative">
            <h3 class="text-3xl font-bold mb-4">Sammen om scenekunsten</h3>
            <p class="mb-4">
              Vi, 9 teatre, er gået sammen om at udbyde over 150 gratis teaterforestillinger til børn og unge på landets professionshøjskoler, og vi er nu åbne for bookinger fra undervisere og hold der har lyst til at deltage.
            </p>
            <p class="mb-4">
              I forbindelse med forestillingen vil de studerende blive introduceret til teatret, blive inspireret til at inkludere forestillinger i undervisningen, få konkret viden og øvelser de kan bruge fremadrettet, samt et umiddelbart indblik i børns indtryk af teater da forestillingen ses med en gruppe børn som publikum.
            </p>
            <a href="#" class="text-red-400 font-semibold inline-flex items-center space-x-2 hover:text-[#BE1522]">
              <span>Read More</span>
              <i class="mdi mdi-arrow-right ml-2 text-red-400 hover:text-[#BE1522]"></i>
            </a>

          </div>
        </div>

        <!-- Image Section -->
        <img class="w-full h-[400px] object-cover order-first md:order-last" src="/assets/img/red-mask.jpg" alt="Rød teater maske">
      </div>
    </section>

    <section class="mt-[8rem]">
      <h1 class="text-4xl font-bold mb-4 text-[#BE1522]">Kommende forestillinger</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Visible Cards Section -->
        <!-- Bruger v-for for at loop igennem vores data, som i dette tilfælde er visible cards -->
        <div v-for="(card, index) in visibleCards" :key="index" class="max-w-md overflow-hidden cursor-pointer">
          <!-- En router som er bygget på kant kortet, som så leder til vores enkelte forestillinger. Det den gøre er at finde en router med navnet 'enkelteforestillinger, som er i vores index.js som er vores routers' -->
          <router-link v-if="card.title === 'Kant'" :to="{ name: 'kant' }" class="block">
            <!-- Bruger den dynamiske måde at fremvise billede og alt tekst-->
            <img :src="card.image" :alt="card.title" class="w-full h-72 object-cover transition hover:scale-105" />
            <div>
              <h2 class="text-3xl font-light uppercase mb-2 mt-2">{{ card.title }}</h2>
              <p class="font-light mb-4">{{ card.description }}</p>
              <div class="flex flex-wrap gap-2">
                <!--her så laver vi v-if for at sige hvis det er icon1 og duration så ville den vise den bestemte indhold, hvis en af dem mangler så vil det ikke blive vist noget.-->
                <div v-if="card.icon1 && card.duration" class="border-2 border-[#A0C298] px-4 py-2 rounded-full flex items-center">
                  <img :src="card.icon1" alt="Clock Icon" class="h-5 w-5 mr-4">
                  <p class="text-xs font-light">{{ card.duration }}</p>
                </div>
                <div v-if="card.icon2 && card.date" class="border-2 border-[#A0C298] px-4 py-2 rounded-full flex items-center">
                  <img :src="card.icon2" alt="Calendar Icon" class="h-5 w-5 mr-4">
                  <p class="text-xs font-light">{{ card.date }}</p>
                </div>
                <div v-if="card.icon3 && card.age" class="border-2 border-[#A0C298] px-4 py-2 rounded-full flex items-center">
                  <img :src="card.icon3" alt="Calendar Icon" class="h-5 w-5 mr-4">
                  <p class="text-xs font-light">{{ card.age }}</p>
                </div>
              </div>
            </div>
          </router-link>

          <!-- Hvis det uheldigvis ikke er sådan et kort med det korrekte navn, så er det en fallback -->
          <div v-else>
            <!-- Bruger den dynamiske måde at fremvise billede og alt tekst-->
            <img :src="card.image" :alt="card.title" class="w-full h-72 object-cover transition hover:scale-105" />
            <div>
              <h2 class="text-3xl font-light uppercase mb-2 mt-2">{{ card.title }}</h2>
              <p class="font-light mb-4">{{ card.description }}</p>
              <div class="flex flex-wrap gap-2">
                <div v-if="card.icon1 && card.duration" class="border-2 border-[#A0C298] px-4 py-2 rounded-full flex items-center">
                  <img :src="card.icon1" alt="Clock Icon" class="h-5 w-5 mr-4">
                  <p class="text-xs font-light">{{ card.duration }}</p>
                </div>
                <div v-if="card.icon2 && card.date" class="border-2 border-[#A0C298] px-4 py-2 rounded-full flex items-center">
                  <img :src="card.icon2" alt="Calendar Icon" class="h-5 w-5 mr-4">
                  <p class="text-xs font-light">{{ card.date }}</p>
                </div>
                <div v-if="card.icon3 && card.age" class="border-2 border-[#A0C298] px-4 py-2 rounded-full flex items-center">
                  <img :src="card.icon3" alt="Calendar Icon" class="h-5 w-5 mr-4">
                  <p class="text-xs font-light">{{ card.age }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- Button til at vise flere cards-->
    <!-- En eventlistener som er en knap, som bliver reageret når den bliver trykket på, med formål at fremvise flere cards-->
    <section class="mt-6 text-center mt-6">
      <button @click="toggleShowMore" class="bg-[#A0C298] text-[#12320B] px-4 py-2 transition ease-in-out hover:scale-105 hover:text-white mx-auto block">
        {{ showMore ? 'Se mindre' : 'Indlæs flere' }}
      </button>
    </section>

    <!-- Hidden Cards Section that appears when "Show More" is clicked -->
    <section v-show="showMore" class="mt-6">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(card, index) in hiddenCards" :key="'hidden-' + index" class="max-w-md overflow-hidden cursor-pointer">
          <img :src="card.image" :alt="card.title" class="w-full h-72 object-cover transition hover:scale-105" />
          <div>
            <h2 class="text-3xl font-light uppercase mb-2 mt-2">{{ card.title }}</h2>
            <p class="font-light mb-4">{{ card.description }}</p>
            <div class="flex flex-wrap gap-2">
              <div class="border-2 border-[#A0C298] px-4 py-2 rounded-full flex items-center">
                <img :src="card.icon1" alt="Clock Icon" class="h-5 w-5 mr-4">
                <p class="text-xs font-light">{{ card.duration }}</p>
              </div>
              <div class="border-2 border-[#A0C298] px-4 py-2 rounded-full flex items-center">
                <img :src="card.icon2" alt="Calendar Icon" class="h-5 w-5 mr-4">
                <p class="text-xs font-light">{{ card.date }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="mt-[8rem]">
      <h1 class="text-4xl font-bold mb-4 text-[#BE1522]">Tidligere forestillinger</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- kommende Cards Section -->
        <div v-for="(card, index) in kommende" :key="index" class="max-w-md overflow-hidden cursor-pointer">
          <img :src="card.image" :alt="card.title" class="w-full h-72 object-cover transition hover:scale-105" />
          <div>
            <h2 class="text-3xl font-light uppercase mb-2 mt-2">{{ card.title }}</h2>
            <p class="font-light mb-4">{{ card.description }}</p>
            <div class="flex flex-wrap gap-2">
              <div v-if="card.icon1 && card.duration" class="border-2 border-[#A0C298] px-4 py-2 rounded-full flex items-center">
                <img :src="card.icon1" alt="Clock Icon" class="h-5 w-5 mr-4">
                <p class="text-xs font-light">{{ card.duration }}</p>
              </div>

              <div v-if="card.icon2 && card.date" class="border-2 border-[#A0C298] px-4 py-2 rounded-full flex items-center">
                <img :src="card.icon2" alt="Calendar Icon" class="h-5 w-5 mr-4">
                <p class="text-xs font-light">{{ card.date }}</p>
              </div>
              <div v-if="card.icon3 && card.age" class="border-2 border-[#A0C298] px-4 py-2 rounded-full flex items-center">
                <img :src="card.icon3" alt="Calendar Icon" class="h-5 w-5 mr-4">
                <p class="text-xs font-light">{{ card.age }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="mt-6 text-center mt-[8rem]">
        <button class="bg-[#a0c29880] text-gray-400 px-4 py-2 transition ease-in-out hover:scale-105 hover:text-white mx-auto block">
          Indlæs flere
        </button>
      </section>
    </section>
    <!--FAQ-->
    <section class="mb-20 mt-[6rem]" id="faq-section">
      <div class="ms-7">
        <h2 class="mb-4 text-red-400 size-full text-2xl">Ofte stillede spørgsmål</h2>
        <div class="space-y-6">

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

    <section class="ms-7 mt-10 pb-10">
      <div class="max-w-7xl mx-auto ">
        <div class="grid md:grid-cols-3 gap-8">
          <EntryCard imageSrc="/assets/img/biograf-entry.jpg" altText="Energi" title="Biograf" />
          <EntryCard imageSrc="/assets/img/forestillinger-entry.png" altText="Animals" title="Teatret" />
          <EntryCard imageSrc="/assets/img/huset-entry.jpg" altText="Til Ungdommen" title="Huset" />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
