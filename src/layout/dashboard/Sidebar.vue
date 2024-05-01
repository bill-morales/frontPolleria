<template >
     <aside class="relative bg-blue-900 h-screen w-64 hidden sm:block shadow-xl">
        <div class="p-6">
            <a href="index.html" class="text-white text-3xl font-semibold uppercase hover:text-gray-300">Admin</a>
           
        </div>
        <nav class="text-white text-base font-semibold pt-3">
           <router-link v-for="({path,name,icon}, index) in links" :key="index" class="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 hover:bg-violet-500"  :to="{name:path}"><font-awesome-icon class="mr-3" :icon="icon" />{{name}}</router-link>
    </nav>
    </aside>
</template>
<script>
export default {
    data() {
        return {
            open: false,
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
}
</script>
<style scoped>
.router-link-active {
    background: #1947ee;
    opacity: 1;
}
</style>