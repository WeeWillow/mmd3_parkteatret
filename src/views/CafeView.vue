<script setup>
import EntryCard from '@/components/UI/EntryCard.vue';

</script>


<template>
  <div class="bg-[#F2F2F2] text-gray-800 min-h-screen">
    <section class="mx-4 sm:mx-8 lg:mx-16">

      <div class="flex space-x-10 p-10">

        <div class="flex-1">
          <h1 class="text-[#BE1522] text-3xl font-bold mb-4">Parkteatrets Cafe</h1>
          <div class="mb-4">
            <p class="text-lg">Velkommen til Parkteatrets charmerende café, hvor vi inviterer dig indenfor til en oplevelse af hygge og lækker mad. Vores café er mere end bare et sted at spise - det er et varmt mødested for film- og teaterelskere, såvel som alle, der ønsker at nyde en kop kaffe i et behageligt miljø.</p>
            <p class="text-lg">Caféen drives af medarbejdere i beskyttet beskæftigelse. Der sørger for at du får den bedste oplevelse!</p>
          </div>

          <div>
            <h3 class="text-[#BE1522] text-2xl font-semibold mb-2 mt-15">Spis i cafeen</h3>
            <p class="text-base mb-4">Hver dag har du mulighed for at nyde en lækker anretning lavet af vores dejlige kok Camilla. Du kan eksemplevis bestille mad i forbindelse med en forestilling eller en film. Det eneste du skal sørge for er, at ringe og bestille maden senest kl. 10 samme dag. </p>
            <p class="font-bold">Du får fat i os på tlf.: 47 38 34 35</p>

            <h3 class="text-[#BE1522] text-2xl font-semibold mb-2 mt-[2rem]">Aktiviteter i cafeen </h3>
            <p class="text-base mb-4">Vi abonnerer på flere dagblade, både lokalt og nationalt, som du kan læse, mens du nyder en varm kop kaffe. Og vi har et stort udvalg af brætspil for både store og små. Vi huser også en strikkeklub, som mødes hveranden lørdag og mandag - eller måske er du mere interesseret i litteraturen bag filmen?</p>

            <h3 class="text-[#BE1522] text-2xl font-semibold mb-2 mt-[2rem]">Åbningstider</h3>
            <p class="text-base mb-4">Vi har åbent fra kl. 10.00-14.00 i hverdagen og igen fra kl. 16.30 og til den sidste film slutter. </p>
          </div>
        </div>


        <div class="flex-1">
          <img src="/assets/img/cafe.png" alt="Image description" class="w-full h-auto" />
        </div>
      </div>


      <section class="p-10">

        <div class="border border-[#A0C298] p-6 flex space-x-6 max-w-6xl mx-auto">

          <div class="flex-shrink-0 w-1/3">
            <img src="/assets/img/cafe-dessert.jpeg" alt="Image description" class="w-auto h-100" />
          </div>


          <div class="flex-1">
            <h2 class="text-[#BE1522] text-2xl font-semibold mb-4 place-self-center">Menu</h2>


            <div class="flex items-center justify-between">
              <p class="text-lg">Panini</p>
              <hr class="flex-grow border-t-2 border-gray-300 mx-2" />
              <p class="text-base">20 kr.</p>
            </div>
            <div class="flex items-center justify-between">
              <p class="text-lg">Hjemmebagt kage</p>
              <hr class="flex-grow border-t-2 border-gray-300 mx-2" />
              <p class="text-base">25 kr.</p>
            </div>
            <div class="flex items-center justify-between">
              <p class="text-lg">Croissant</p>
              <hr class="flex-grow border-t-2 border-gray-300 mx-2" />
              <p class="text-base">15 kr.</p>
            </div>
            <div class="flex items-center justify-between">
              <p class="text-lg">Kaffe</p>
              <hr class="flex-grow border-t-2 border-gray-300 mx-2" />
              <p class="text-base">30 kr.</p>
            </div>
            <p class="italic text-sm text-center mt-7">Kom forbi vores dejlige cafe, og se et større udvalg</p>

          </div>
        </div>
      </section>

      <div>
        <img src="/assets/img/kontrol-rapport.gif" alt="Image description" class="max-w-2xl h-auto place-self-center" />
      </div>

      <section class="ms-7 mt-10 pb-10">
        <div class="max-w-7xl mx-auto ">
          <div class="grid md:grid-cols-3 gap-8">

            <!-- entry cards -->
            <EntryCard imageSrc="/assets/img/biograf-entry.jpg" altText="Energi" title="Biograf" />
            <EntryCard imageSrc="/assets/img/forestillinger-entry.png" altText="Animals" title="Teatret" />
            <EntryCard imageSrc="/assets/img/huset-entry.jpg" altText="Til Ungdommen" title="Huset" />

          </div>
        </div>
      </section>
    </section>
  </div>

</template>

<style scoped></style>