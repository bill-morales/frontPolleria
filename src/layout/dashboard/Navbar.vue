<template lang="">
     <header class="w-full items-center bg-white py-2 px-6 hidden sm:flex">
            <div class="w-1/2"></div>
            <div class="relative w-1/2 flex justify-end">
                <button @click="isOpen = !isOpen" class="realtive w-12 h-12 rounded-full overflow-hidden border-4 border-gray-400 hover:border-gray-300 focus:border-gray-300 focus:outline-none">
                    <img src="https://source.unsplash.com/uJ8LNVCBjFQ/400x400">
                </button>
                <button v-show="isOpen" @click="isOpen = false" class="h-full w-full fixed inset-0 cursor-default"></button>
                <div v-show="isOpen" class="absolute w-32 bg-white rounded-lg shadow-lg py-2 mt-16 cursor-pointer">
                    <a href="#"  class="block px-4 py-2 hover:bg-cyan-500 hover:text-white"><font-awesome-icon class="mr-3" icon="user" />Account</a>
                    <a @click="logout" class="block px-4 py-2 hover:bg-cyan-500 hover:text-white"><font-awesome-icon class="mr-3" :icon="['fas', 'sign-out-alt']" />Sign Out</a>
                </div>
            </div>
        </header>

        <!-- Mobile Header & Nav -->
        <header class="w-full bg-blue-900 py-5 px-6 sm:hidden">
            <div class="flex items-center justify-between">
                <router-link :to="links[0].path" class="text-white text-3xl font-semibold uppercase hover:text-gray-300">Admin</router-link>
                <button @click="isOpen = !isOpen" class="text-white text-3xl focus:outline-none">
                    <font-awesome-icon :icon="['fas', 'bars']" v-show="!isOpen"/>
                    <font-awesome-icon :icon="['fas', 'times']" v-show="isOpen"  />
                </button>
            </div>

            <!-- Dropdown Nav -->
            <nav :class="isOpen ? 'flex': 'hidden'" class="flex flex-col pt-4">
                <router-link v-for="({path,name,icon}, index) in links" :key="index" class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 hover:bg-violet-500"  :to="{name:path}"><font-awesome-icon class="mr-3" :icon="icon" />{{name}}</router-link>
                <a href="#" class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 hover:bg-violet-500">
                    <font-awesome-icon class="mr-3" icon="user" />
                    My Account
                </a>
                <a @click="logout" class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 hover:bg-violet-500"><font-awesome-icon class="mr-3" :icon="['fas', 'sign-out-alt']" /> Sign Out</a>
                <button class="w-full bg-white text-blue-700 font-semibold py-2 mt-3 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
                    <i class="fas fa-arrow-circle-up mr-3"></i> Upgrade to Pro!
                </button>
            </nav>
            <!-- <button class="w-full bg-white text-blue-700 font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
                <i class="fas fa-plus mr-3"></i> New Report
            </button> -->
        </header>
</template>
<script>
import { mapActions } from "vuex";
export default {
    props:{
            isOpen:{
                type:Boolean,
                required:true
            },
    },
    data() {
        return {
            links: [
                {
                    name: "Categoria",
                    path: "category",
                    icon: "tag"
                },
                {
                    name: "Sub categoria",
                    path: "subcategory",
                    icon: "tags"
                },
                {
                    name:"Platillos",
                    path:"platillos",
                    icon:"utensils"
                },
                {
                    name: "Usuarios",
                    path: "user",
                    icon: "users"
                },
            ],
        };
    },
    methods: {
        ...mapActions('auth',["logout"]),
    }
}

</script>
<style lang="">
    
</style>