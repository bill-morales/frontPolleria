<template>
  <section class="bg-no-repeat bg-cover"
    style="background-image: url(https://i.pinimg.com/originals/25/48/bf/2548bf6970f74d0d9594e17b72bc2037.gif)">
        <Title title="Bienvenido a" optionTitle="Veramend'is" />
<div class="hidden md:flex container mx-auto gap-4 w-4/5  relative group">
  <figure
  class="transition-all duration-500 relative flex-1 w-full rounded-2xl overflow-hidden h-[45rem] mb-6 select-none"><img class="w-full h-full " :src="slides[indexSlice].url" ></figure>
  <div class="hidden group-hover:block absolute bg-white/30 top-[50%] rounded-full  left-5 cursor-pointer" >
    <svg @click="prevSlide" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
</svg>
  </div>
  <div class="hidden group-hover:block absolute bg-white/30 top-[50%] rounded-full right-5 cursor-pointer" @click="nextSlide">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
</svg>
  </div>
</div>
<div class="flex justify-center  flex-wrap md:hidden container mx-auto gap-4 pb-4 px-5 ">
  <figure v-for="{url} in slides" class="object-fill  rounded-2xl overflow-hidden w-4/5 h-64">
    <img class="w-full h-full" :src="url">
  </figure>
</div>
</section>
</template>
  <script>
  import Title from '@/components/Title.vue'
  import { mapState } from 'vuex'
  export default {
      name: "Inicio",
      components:{
        Title
      },
      data() {
        return {
          open:false,
          indexSlice:3,
          slides:[
            {
              url : "/src/assets/verano.webp"
            },
            {
              url : "/src/assets/Juevesdeveramendis.webp"
            },
            {
              url : "/src/assets/verano.webp"
            },
            {
              url : "/src/assets/Juevesdeveramendis.webp"
            },
            {
              url : "/src/assets/verano.webp"
            }
          ]
        }
      },
      methods: {
        prevSlide(){
          this.indexSlice==0 ? this.indexSlice=this.slides.length-1 : this.indexSlice=this.indexSlice-1
        },
        nextSlide(){
          this.indexSlice==this.slides.length-1 ? this.indexSlice=0 : this.indexSlice+=1
        }
      },
      computed: {
        ...mapState(['counter'])
      },
  }
  </script>