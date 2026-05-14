<template>
  <div class="w-full h-20 bg-primary-black text-white flex items-center justify-between px-8">
    <Logo />
    <nav class="space-x-4">
      <a href="/" class="hover:text-primary-yellow">INICIO</a>
      <a href="/canchas" class="hover:text-primary-yellow">CANCHAS</a>
      <a href="/reservas" class="hover:text-primary-yellow">RESERVAR</a>
    </nav>
    <div>
      <Button class="mr-2 bg-primary-black hover:bg-primary-black hover:text-primary-yellow">
        Iniciar Sesión
      </Button>
      <Button class="rounded-none bg-primary-yellow text-primary-black hover:bg-primary-yellow/90 font-bold">
        Registrarse
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from './Logo.vue';
import Button from './ui/button/Button.vue';


</script>

<style scoped>

</style>