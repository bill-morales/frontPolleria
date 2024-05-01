<template>
  <section class="bg-no-repeat bg-cover overflow-hidden"
    style="background-image: url(https://i.pinimg.com/originals/25/48/bf/2548bf6970f74d0d9594e17b72bc2037.gif)">
    <Title title="Elige tu día preferido" />
    <form  class="text-black flex flex-col border-2 sm:border-4 rounded-2xl border-white container mx-auto gap-4 w-4/5 bg-stone-300/70  p-4 sm:p-8 font-londri text-2xl sm:text-3xl mb-4" action="">
      <div class="flex flex-col">
        <label for="">Nombre y Apellidos</label>
        <input type="text" placeholder="Ingrese Nombre y Apellidos" class=" mt-5 text-black p-2  focus:outline-none focus:ring-2  ring-offset-4  focus:ring-red-500 transition-all rounded-md ">
      </div>
      <div class="flex gap-5 flex-wrap">
        <div class="flex flex-col flex-1 w-full">
          <label for="">DNI</label>
        <input type="number" placeholder="DNI" min="1" class=" mt-5 text-black p-2 focus:outline-none focus:ring-2  ring-offset-4  focus:ring-red-500 transition-all rounded-md">
      </div>
       <div class="flex flex-col flex-1 w-full">
        <label for="">Fecha</label>
        <input type="date" class="mt-5 text-black p-2 focus:outline-none focus:ring-2  ring-offset-4  focus:ring-red-500 transition-all rounded-md">
       </div>
       <div class="flex flex-col flex-1 w-full">
        <label for="">Descripcion de la reserva</label>
        <textarea name="" class=" mt-5 text-black p-2 focus:outline-none focus:ring-2  ring-offset-4  focus:ring-red-500 transition-all rounded-md" id="" cols="30" rows="7"></textarea>
       </div>
      </div>
      <div class="flex flex-col  w-full sm:w-1/2 xl:w-1/3">
      <label for="">Hora</label>
     
      <input class=" text-black p-2 focus:outline-none focus:ring-2  ring-offset-4  focus:ring-red-500 transition-all rounded-md" type="time" name="" id="">
    </div>
    <button class="bg-white text-stone-500/70 rounded-xl  w-full sm:w-1/2 md:w-1/2  xl:w-1/4 self-end   py-2 px-4 flex text-4xl sm:text-3xl justify-center gap-5 sm:gap-0 sm:justify-evenly group hover:bg-green-500 hover:text-white">
      <svg 
  xmlns="http://www.w3.org/2000/svg"
  class="fill-black h-10 group-hover:fill-white"
  fill="currentColor"
  viewBox="0 0 24 24">
  <path
    d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
</svg>
      Reserva ya
    </button>
    </form>
    
  </section>
    </template>
<script>
import Title from "@/components/Title.vue"
export default {
    name: "Reserva",
    components:{
      Title
    },
    data() {
      return {
        open:false,
      }
    },
}
</script>