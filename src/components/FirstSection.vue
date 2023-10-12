<script setup>
import AboutContent from "./AboutContent.vue";
</script>

<template>
  <div class="relative">
    <div class="bg-cover bg-center sticky top-0 h-screen flex flex-col items-center justify-center bg-bad">
      <h2 class="animate-fade-down animate-duration-1000 animate-ease-linear mb-4 text-center text-5xl font-extrabold
      leading-none tracking-tight text-neutral-600 md:text-5xl lg:text-6xl sm:text-2xl text-opacity-80">
        Досконалість у кожній нитці
      </h2>
    </div>
    <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-stone-400/75 text-white">
      <AboutContent/>
    </div>
  </div>
</template>

<style scoped>

</style>