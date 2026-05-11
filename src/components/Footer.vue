<template>
  <div class="w-full h-76 bg-(--primary-black) text-(--secondary-gray) font-sm flex items-center justify-center px-6 py-12 border-t border-(--secondary-gray) gap-6">
    <div class="sm:w-[40%] w-[50%] h-full flex flex-col items-start justify-start gap-4">
      <Logo />
      <p>Reserva tu cancha de pádel en segundos. Disponibilidad en tiempo real, canchas premium y la mejor experiencia deportiva.</p>
      <p>© 2024 VoltPadel. Todos los derechos reservados.</p>
    </div>
    <div class="w-[20%] h-full flex flex-col items-start justify-start gap-4">
      <h1 class="text-(--primary-yellow)">Contacto</h1>
      <section class="flex items-center gap-2">
        <Mail class="w-5 h-5"/>
        <a href="mailto:voltpadel@gmail.com" class="flex items-center gap-2">: voltpadel@gmail.com</a>
      </section>
      <section class="flex items-center gap-2">
        <Phone class="w-5 h-5"/>
        <a href="tel:+5491112345678" class="flex items-center gap-2">: +54 9 11 1234-5678</a>
      </section>
      <section class="flex items-center gap-2">
        <!-- TODO: Fix address icon -->
        <MapPinHouse class="w-10 h-10 md:w-5 md:h-5"/>
        <a href="https://maps.app.goo.gl/1oZYSU5uo5suCGS5A" target="_blank" class="flex items-center gap-2">: C. Antonio José de Sucre, 6, 35214 Telde, Las Palmas</a>
      </section>
    </div>
    <div class="w-[20%] h-full flex flex-col items-start justify-start gap-4">
      <h1 class="text-(--primary-yellow)">Horarios</h1>
      <p>Lun - Vie: 8:00 AM - 10:00 PM</p>
      <p>Sáb y Dom: 9:00 AM - 8:00 PM</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Mail, MapPinHouse, Phone } from 'lucide-vue-next';
import Logo from './Logo.vue';


</script>

<style scoped>

</style>