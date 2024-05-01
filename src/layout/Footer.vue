<template lang="">
  <main
    class="bg-no-repeat bg-cover select-none"
    style="
      background-image: url(https://cdn.pixabay.com/photo/2017/02/07/09/02/wood-2045380_1280.jpg);
    "
  >
    <div class="ps-10 py-4 font-londri text-xl text-gray-300 sm:hidden">
      <p>Conócenos</p>
      <div class="ps-4 pt-3 font-light">
        <p>Zona de delivery</p>
        <p>Contacto</p>
        <p>Términos y condiciones de uso</p>
        <p>Libro de reclamos</p>
      </div>
    </div>
    <div class="hidden w-full sm:flex justify-center ">
      <div class="w-2/3 flex justify-between items-center">
        <figure class="w-48 py-4">
          <img src="../assets/reclamos.jpg" alt="" srcset="" />
        </figure>
        <div class="text-white">
          <p class=" font-bold">Conócenos</p>
          <p>Zona de delivery</p>
          <p>Contacto</p>
          <p>Términos y condiciones de uso</p>
        </div>
        <div class="flex gap-5">
          <svg
            class="h-8 w-8 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
            />
          </svg>
          <svg
            class="h-8 w-8 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
          <svg
            class="h-8 w-8 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
            />
          </svg>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  name: "footerVar",
};
</script>
