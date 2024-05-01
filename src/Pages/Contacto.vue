<template>
   <section class="bg-no-repeat bg-cover overflow-hidden"
    style="background-image: url(https://i.pinimg.com/originals/25/48/bf/2548bf6970f74d0d9594e17b72bc2037.gif)">
  <Title title="¡Visítanos!" />
  <h2 class="font-light  font-londri text-xl sm:text-5xl text-white text-center pb-8 sm:py-14">Av. Néstor Gambetta Mz. a Ate 4,<span class="block sm:inline">al costado del grifo Petro Perú</span></h2>
  <a class="flex justify-center container mx-auto gap-4 w-4/5 overflow-hidden rounded-3xl mb-6" href="https://www.google.com/maps/place/POLLERIA+Y+CHIFA+VERAMENDI/@-11.8394691,-77.1144235,17.25z/data=!4m5!3m4!1s0x9105d5a987112f23:0x1c0a2ff8eabeda2a!8m2!3d-11.8394541!4d-77.1125051" target="_blank">
    <img class="object-cover w-full h-64 sm:h-[40rem]" src="../assets/localizacion.webp" alt="" srcset="">
  </a>
  </section>
</template>
<script>
import Title from '@/components/Title.vue'
export default {
  name: "Contacto",
  components:{
    Title
  },
  Vcolor: 'blue',
  data() {
    return {
      open: false,
      slides: [
        {
          url: '/src/assets/verano.webp'
        },
        {
          url: '/src/assets/Jueves de veramendis.webp'
        },
        {
          url: "/src/assets/verano.webp"
        },
        {
          url: "/src/assets/Jueves de veramendis.webp"
        },
        {
          url: '/src/assets/verano.webp'
        }
      ]
    }
  },
}
</script>