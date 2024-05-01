<template lang="">
   <section class="grid min-h-screen place-items-center bg-emerald-500 p-16">
  <div class="w-72 rounded-md bg-emerald-300 p-4 pt-0 shadow-lg">
    <header class="flex h-16 items-center justify-between font-bold text-emerald-950">
      <span>Login</span>
      <!-- SVG: xmark -->
      <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
      <!-- SVG: xmark -->
    </header>
    <form class="grid gap-3" @submit.prevent="submitForm">
      <!-- Username Input -->
      <input v-model="username" class="h-10 rounded-sm bg-emerald-100/50 px-2 text-emerald-950 placeholder:text-emerald-600/80 focus:outline-none focus:ring focus:ring-emerald-400" type="text" placeholder="Enter your username"  required/>
      <!-- Password Input -->
      <input v-model="password" class="h-10 rounded-sm bg-emerald-100/50 px-2 text-emerald-950 placeholder:text-emerald-600/80 focus:outline-none focus:ring focus:ring-emerald-400" type="password" placeholder="Enter your password" required />
      <!-- Sign In Button -->
      <button class="flex h-10 items-center justify-between rounded-sm bg-emerald-700 px-2 text-emerald-100 transition-colors duration-300 hover:bg-emerald-800 focus:outline-none focus:ring focus:ring-emerald-400" type="submit">
        <span>Sign In</span>
        <span>
          <!-- SVG: chevron-right -->
          <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
          <!-- SVG: chevron-right -->
        </span>
      </button>
      <router-link class="text-sky-500 hover:text-sky-600" :to="links[0].to">&larr; Volver</router-link>
    </form>
  </div>
</section>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      username: '',
      password: '',
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
  methods: {
    ...mapActions('auth', ['login']),
    async submitForm() {
      await this.login({ email: this.username, password: this.password });
      // Redirige al usuario después de iniciar sesión
    },
  },
}
</script>
<style lang="">
    
</style>