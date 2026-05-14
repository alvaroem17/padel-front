<template>
  <div class="w-full h-76 bg-primary-black text-secondary-gray text-xs flex items-center justify-center px-6 py-12 border-t border-secondary-gray/10 gap-8">
    <div class="sm:w-[40%] w-[50%] h-full flex flex-col items-start justify-start gap-4">
      <Logo />
      <p>Reserva tu cancha de pádel en segundos. Disponibilidad en tiempo real, canchas premium y la mejor experiencia deportiva.</p>
      <p>© 2024 VoltPadel. Todos los derechos reservados.</p>
    </div>
    <div class="w-[20%] h-full flex flex-col items-start justify-start gap-4">
      <h1 class="text-primary-yellow uppercase tracking-wide">Contacto</h1>
      <section class="flex items-center gap-2 leading-6">
        <Mail class="w-6 h-6 md:w-5 md:h-5 shrink-0"/>
        <a href="mailto:voltpadel@gmail.com" class="flex items-center gap-2">voltpadel@gmail.com</a>
      </section>
      <section class="flex items-center gap-2 leading-6">
        <Phone class="w-6 h-6 md:w-5 md:h-5 shrink-0"/>
        <a href="tel:+34928272199" class="flex items-center gap-2">+34 928 27 21 99</a>
      </section>
      <section class="flex items-start gap-2 leading-6">
        <MapPin class="w-6 h-6 md:w-5 md:h-5 shrink-0"/>
        <a href="https://maps.app.goo.gl/1oZYSU5uo5suCGS5A" target="_blank" class="flex items-center gap-2">C. Antonio José de Sucre, 6, 35214 Telde, Las Palmas</a>
      </section>
    </div>
    <div class="w-[20%] h-full flex flex-col items-start justify-start gap-4">
      <h1 class="text-primary-yellow uppercase tracking-wide">Horario</h1>
      <p>Lun - Vie: 8:00 - 22:00</p>
      <p>Sáb y Dom: 9:00 - 20:00</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Mail, MapPin, Phone } from 'lucide-vue-next';
import Logo from './Logo.vue';


</script>

<style scoped>

</style>