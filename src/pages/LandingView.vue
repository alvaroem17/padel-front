<template>
  <div class="w-full h-screen text-primary-black grid grid-rows-[auto_1fr_auto]">
    <Header />
    <div>
      <div class="w-full h-175 bg-radial-court flex flex-col items-start justify-center px-8 xl:px-50 ">
        <div class="flex items-center justify-center gap-4 text-xs font-extrabold">
          <span class="w-16 h-0.5 bg-primary-yellow"></span>
          <h1 class="text-primary-yellow p-4 h-full uppercase tracking-wide">Club de pádel premium</h1>
        </div>
        <div class="flex flex-col items-start justify-center gap-8">
          <h1 class="text-6xl font-extrabold text-primary-white">Reserva tu <span class="text-primary-yellow">cancha</span><br />en menos de <i>60<br/> segundos</i></h1>
          <p class="text-secondary-gray text-lg">Sin llamadas, sin esperas. Elige día, hora y cancha.<br />Accesibilidad total desde cualquier dispositivo.</p>
        </div>
        <div class="flex items-center justify-start mt-8">
          <Button class="bg-primary-yellow text-primary-black font-bold py-6 px-8 rounded-none hover:bg-primary-black border-2 border-primary-yellow hover:text-primary-yellow transition duration-300">Reserva ahora <MoveRight /></Button>
          <Button class="ml-4 bg-transparent border-2 font-bold border-primary-yellow rounded-none text-primary-yellow py-6 hover:bg-primary-yellow hover:text-primary-black">Ver canchas</Button>
        </div>
      </div>
      <div>
        bar
      </div>
      <div>
        why
      </div>
      <div>
        how
      </div>
      <div>
        ready to play
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { MoveRight } from 'lucide-vue-next';
import Footer from '../components/Footer.vue';
import Header from '../components/Header.vue';
import Button from '../components/ui/button/Button.vue';
//TODO:Finish component imports and logic here

</script>

<style scoped>

</style>