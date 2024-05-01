<template lang="">
    <h1 class="font-normal font-londri text-3xl sm:text-7xl text-white text-center py-10 sm:py-14">{{title+" "}}<span v-if="optionTitle"
        class="block sm:inline text-5xl sm:text-7xl">{{optionTitle}}</span></h1>
</template>
<script>
export default {
    name:"Title",
    props:{
        title : {
            required:true,
            type:String
        },
        optionTitle :{
            type:String,
            default:""
        }
    }
   
}
</script>
<style lang="">
    
</style>    