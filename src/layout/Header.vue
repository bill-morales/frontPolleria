<template>
  <div class="bg-no-repeat bg-cover"
    style="background-image: url(https://cdn.pixabay.com/photo/2017/02/07/09/02/wood-2045380_1280.jpg)">

    <nav class="lg:container mx-auto select-none">

      <ul class="flex md:px-4 lg:px-0   justify-between items-center">
        <div class="hidden md:flex md:gap-2 lg:gap-7 text-gray-300 font-light  text-2xl font-londri">
          <li class="w-32 flex items-center   "><a href="http://"><img class="w-full" src="../assets/Logo_Veramendis.png"
                alt="" srcset=""></a></li>

          <CustomLink v-for="(link, index) in links" :key="index" :link="link" :movil="false"></CustomLink>
        </div>
        <button
          class="hidden md:block font-londri text-gray-300 font-normal border-2 rounded-lg p-2 my-6  lg:text-xl hover:bg-white hover:text-amber-950">DELIVERY<span
            class="block">985-784-254 <p class="sm:hidden lg:inline">/ 925-145-746</p></span></button>

        <div class="flex w-full justify-between container mx-auto items-center px-4 md:hidden">
          <button
            class="font-londri text-gray-300 font-normal border-2 rounded-lg p-1 my-2 lg:text-xl hover:bg-white hover:text-amber-950">DELIVERY<span
              class="block">985-784-254</span></button>
          <li class="w-24  flex items-center  "><a href="http://"><img class="w-full" src="../assets/Logo_Veramendis.png"
                alt="" srcset=""></a></li>
          <button class="text-white scale-150" @click="open = true">

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-6 h-6 stroke-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </ul>

    </nav>

  </div>
  <div class="fixed z-20 top-0 w-full h-screen backdrop-blur-sm flex justify-end md:hidden select-none" v-show="open">
    <div class="flex w-2/3 h-screen">
      <ul class=" flex flex-col justify-center w-full text-gray-300 font-extrabold text-3xl font-londri"
        style="background-image: url(https://cdn.pixabay.com/photo/2017/02/07/09/02/wood-2045380_1280.jpg)">
        <CustomLink v-for="(link, index) in links" :key="index" :link="link" :movil="true" @click="open = false"></CustomLink>
      </ul>
    </div>
    <button class="absolute left-3 top-2" @click="open = false">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="w-6 h-6 stroke-2 scale-150 stroke-gray-200">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>
</template>
<script>
import CustomLink from "@/components/CustomLink.vue"
export default {
  components: {
    CustomLink
  },
  name: "Header",
  data() {
    return {
      open: false,
      links: [
        { to: "/", name: "Inicio" },
        { to: "/promociones", name: "Promociones" },
        { to: "/menu/asdf", name: "Menú" },
        { to: "/contacto", name: "Contacto" },
        { to: "/reserva", name: "Reserva" },
        { to: "/nosotros", name: "Nosotros" },
        { to: "/login", name: "Login" },
        
      ]
    }
  },

}
</script>