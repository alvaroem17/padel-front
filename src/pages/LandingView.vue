<template>
  <div class="w-full h-screen bg-[default-white] text-(--primary-black) grid grid-rows-[auto_1fr_auto]">
    <Header />
    <h1 class="bg-(--primary-gray) text-white p-4 h-full">Bienvenido a la página de inicio</h1>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Footer from '../components/Footer.vue';
import Header from '../components/Header.vue';


</script>

<style scoped>

</style>