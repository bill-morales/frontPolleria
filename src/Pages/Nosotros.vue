<template>
  <section class="bg-no-repeat bg-cover overflow-hidden"
    style="background-image: url(https://i.pinimg.com/originals/25/48/bf/2548bf6970f74d0d9594e17b72bc2037.gif)">
   <Title  title="¿Quiénes somos?" />
   <div class="mx-auto flex justify-center items-center flex-col">
    <div
        class="mx-2 w-4/5 md:w-3/5 flex    border-b-2  border-white font-light  font-londri  text-white  xl:container text-md sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl">
        <p  v-for="(link, index) in links" :key="index" @click="linkActive" class="grow flex justify-center border-b-4 border-transparent hover:font-normal px-2 sm:px-5 hover:border-b-white"
          :id=link.id>{{link.titulo}}</p>
    </div>
    <div class="mostrar bg-slate-300 rounded-lg p-5 mx-3 md:mx-0 sm:p-10 my-10 md:w-4/6">
    <p class=" font-semibold text-normal sm:text-4xl text-center">Somos una empresa en crecimiento dedicados a brindar una experiencia unica acompañado de un rico pollo a la brasa y todos los productos que podamos ofrecer.</p>
    </div>
    <div class="mostrar hidden bg-slate-300 rounded-lg p-5 mx-3 md:mx-0 sm:p-10 my-10 md:w-4/6">
    <p class=" font-semibold text-normal sm:text-4xl text-center">Llegar a la mayor cantidad de familias</p>
    </div>
    <div class="mostrar hidden flex gap-2 sm:gap-6 flex-wrap justify-center mx-2   my-10 md:w-4/6">
    <p v-for="(valor, index) in valores" :key="index" class="grow bg-slate-300 p-2  sm:p-5 font-semibold text-normal sm:text-2xl  lg:text-4xl text-center w-2/6 rounded-full sm:rounded-lg">{{valor}}</p>
    </div>
   </div>
   <h1 class="font-normal font-londri text-2xl sm:text-5xl text-white text-center py-9 sm:py-14">Nuestro Equipo</h1>
   <div class=" flex flex-wrap lg:grid grid-cols-6 gap-14  mx-auto lg:h-[40rem] w-4/6 mb-6">
     <picture class="col-span-2 overflow-hidden rounded-3xl relative">
       <img  class="object-cover w-full h-full" src="@/assets/Verano-Movil.jpg" alt="" srcset="">
       <p class="absolute bottom-0 bg-slate-400/80  w-full p-4 font-extrabold font-londri text-normal sm:text-2xl md:text-4xl">Fundador <span class="block text-center font-normal">Nombre del fundador</span></p>
     </picture>
     <picture class="col-span-4 overflow-hidden rounded-3xl relative flex-1">
       <img class="object-cover w-full h-full " src="@/assets/SopaWantanespecial.jpg" alt="" srcset="">
       <p class="absolute bottom-0 bg-slate-400/80 w-full p-4 font-extrabold font-londri text-normal sm:text-2xl md:text-4xl">Nuestros Colaboradores</p>
     </picture>
   </div>
  </section>
    </template>
      <script>
      import Title from '@/components/Title.vue'
      export default {
          name: "Nosotros",
          components:{
            Title
          },
          data() {
            return {
              open:false,
              links:[
                {titulo : "Misión" , id:"btn1"},
                {titulo : "Visión", id:"btn2"},
                {titulo : "Valores", id:"btn3"},
              ],
              valores:[
                "Compromiso",
                "Responsabilidad",
                "Respeto",
                "Lealtad",
              ]
            }
          },
          methods: {
              linkActive(e){
                 let links = document.querySelectorAll("div .grow")
                 let elements = document.querySelectorAll(".mostrar")
                links.forEach((link,key) => {
                  link.classList.remove("border-b-white")
                  if(link.id==e.target.id){
                      link.classList.add("border-b-white")
                      elements.forEach(e => {
                        e.classList.add("hidden")
                      });
                      elements[key].classList.remove("hidden")
                  }
                });
              }
          },
      }
      </script>