<template lang="">
   <li :class="movil ? 'flex-1 flex justify-center items-center bg-no-repeat bg-cover hover:text-white':'flex items-center  transition  duration-500 hover:scale-125 hover:font-bold hover:text-white'"><router-link  :to="link.to">{{link.name}}</router-link></li>
</template>
<script>
export default {
    props: {
        link: {
            type: Object,
            required: true
        },
        movil: {
            type: Boolean,
            required: true
        }
    }
}
</script>
<style lang="">
    
</style>