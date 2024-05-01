<template lang="">
 <div class="bg-gray-100 font-karla flex">
 <Sidebar/>
    <div class="relative w-full flex flex-col h-screen overflow-y-hidden">
        <!-- Desktop Header -->
        <Navbar :isOpen="isOpen" />
    
        <div class="w-full h-screen overflow-x-hidden border-t flex flex-col">
            <main class="w-full flex-grow p-6">
                <h1 class="text-3xl text-black pb-6">sub Category</h1>

                <!-- Content goes here! 😁 -->
            </main>
    
            <footer class="w-full bg-white text-right p-4">link
                Built by <a target="_blank" href="https://davidgrzyb.com" class="underline">David Grzyb</a>.
            </footer>
        </div>
        
    </div>
</div>
</template>
<script>
import Sidebar from "@/layout/dashboard/Sidebar.vue";
import Navbar from '@/layout/dashboard/Navbar.vue';
export default {
    name: "subcategoria",
    components: { Sidebar,Navbar },
    data() {
        return {
            isOpen: false,
            links: [
                { name: "Home", url: "/" },
                { name: "About", url: "/about" },
                { name: "Contact", url: "/contact" },
                { name: "Category", url: "/category" },
            ],
        };
    },
    
}
</script>
<style lang="">
    
</style>