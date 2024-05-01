<template>
  <HeaderVue v-if="!$route.matched.some(record => record.path === '/dashboard') && $route.path!=='/login'"/>
  <RouterView/>
  <FooterVue v-if="!$route.matched.some(record => record.path === '/dashboard') && $route.path!=='/login'"/>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import HeaderVue from '@/layout/Header.vue'
import FooterVue from '@/layout/Footer.vue'
export default {
  components:{
    HelloWorld,
    HeaderVue,
    FooterVue
  },

  created() {
  
  },
  watch: {
    '$route'() {
      console.log(this.$route.path);
    }
  },
}
</script>



<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
