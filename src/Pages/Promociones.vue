<template>
  <section class="bg-no-repeat bg-cover"
    style="background-image: url(https://i.pinimg.com/originals/25/48/bf/2548bf6970f74d0d9594e17b72bc2037.gif)">
        <Title title="Conoce nuestras" optionTitle="Promos" />
    <div class=" mx-auto flex justify-center items-center flex-col gap-10">
      <div
        class="mx-2 md:w-3/5 flex justify-between    border-b-2  border-white font-light  font-londri  text-white  xl:container text-md sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl">
        <p @click="changeImg" class="border-b-4 border-transparent hover:font-normal px-2 sm:px-5 hover:border-b-white"
          id="btn">
          Jueves de
          veramendi's</p>
        <p @click="changeImg" class="border-b-4 border-transparent hover:font-normal px-2 sm:px-5 hover:border-b-white"
          id="btn2">
          Promos de
          verano</p>
      </div>
      <figure class="mb-6 relative w-4/5 h-64 sm:h-[45rem] overflow-hidden rounded-3xl">
        <img id="img1" class="relative z-10 w-full h-full"
          src="@/assets/Juevesdeveramendis.webp">
        <img id="img2" class="absolute top-0 w-full h-full" src="@/assets/verano.webp">
      </figure>
    </div>
  </section>
</template>
<script>
import Title from '@/components/Title.vue'
export default {
  name: "Promociones",
  components:{
    Title
  },
  data() {
    return {
      open: false,
      class: "z-10"
    }
  },
  methods: {
    changeImg(e) {
      console.log(e.target.id);
      let btn = document.getElementById("btn")
      let btn2 = document.getElementById("btn2")
      let img2 = document.getElementById("img2")
      let img1 = document.getElementById("img1")
      if (e.target.id == btn.id) {
        btn.classList.add("border-b-white")
        btn2.classList.remove("border-b-white")
      } else {
        btn.classList.remove("border-b-white")
        btn2.classList.add("border-b-white")
      }
      if (e.target.textContent.trim().startsWith("Jueves")) {
        img1.classList.add("z-10")
        img2.classList.remove("z-10")
      } else {
        img2.classList.add("z-10")
        img1.classList.remove("z-10")

      }

    }
  },
}
</script>