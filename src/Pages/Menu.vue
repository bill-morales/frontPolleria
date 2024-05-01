<template>
  <section class="bg-no-repeat bg-cover overflow-hidden" style="
      background-image: url(https://i.pinimg.com/originals/25/48/bf/2548bf6970f74d0d9594e17b72bc2037.gif);
    ">
    <Title title="¿Qué se te antoja hoy?" />
    <div class="flex justify-center text-4xl gap-8">
      <a :id="index"
        class="text-gray-300 hover:text-white hover:font-bold border-transparent border-b-4 transition-all duration-150 ease-out category py-2 select-none"
        :class="[catClasses(index)]"
        @click="focusCategory(index)" v-for="(item, index) in categoria" :key="index">{{ item.cat }}</a>
    </div>
    <div class="flex justify-center">
      <div class="flex justify-center text-4xl w-4/5 border-white border-4 rounded-b-lg overflow-hidden">
        <a :id="index" :class="[
          ' text-center text-2xl   flex-1 subcat hover:font-bold  py-2 select-none ',
          { 'bg-stone-200': isbg },
          subcatClasses(index),
        ]" @click="focusSubcat(index)" v-for="(item, index) in subcat" :key="index">{{ item }}</a>
      </div>
    </div>
    <div class="flex justify-center">
      <div class="grid grid-cols-[repeat(auto-fit,_minmax(20rem,_1fr))] gap-5 place-items-center w-4/5 mt-6 mb-6">  
        <Card v-for="(card, index) in cards" :key="index" :price="card.price" :platillo="card.platillo" :descrip="card.descrip"/>  
      </div>
    </div>
  </section>
</template>
<script>
import Title from "@/components/Title.vue";
//import * as Vue from 'vue';
import { version } from "vue";
import Card from "@/components/Card.vue";
export default {
  name: "Menu",
  components: {
    Title,
    Card,
    Card
},
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      open: false,
      pokemon: null,
      categoria: [
        { cat: "Pollos", sub: ["Clásicos", "Combos"] },
        {
          cat: "Chifa",
          sub: ["Arroz chaufa", "Aeropuerto", "Salvaje", "Marino"],
        },
        { cat: "Parrillas", sub: ["Familiares", "Personales"] },
        { cat: "Criollo", sub: ["Comidas", "Sopas", "Entradas"] },
      ],
      subcat: ["Clásicos", "Combos"],
      isbg: false,
      selectedSub: 0,
      selectedCategory: 0,
      message: "initial",
      cards: [
        {
          price: 52.0,
          platillo: "1 Pollo a la brasa",
          descrip: "+ Papas fritas + ensalada + cremas",
        },
        {
          price: 42.0,
          platillo: "1 Pollo a la brasa",
          descrip: "+ Papas fritas + ensalada + cremas",
        },
        {
          price: 58.0,
          platillo: "1 Pollo a la brasa",
          descrip: "+ Papas fritas + ensalada + cremas",
        },
        {
          price: 52.0,
          platillo: "1 Pollo a la brasa",
          descrip: "+ Papas fritas + ensalada + cremas",
        },
        { price: 51.0, platillo: "1 Pollo a la brasa", descrip: "+ Papas fritas + ensalada + cremas" },
        
      ],
    };
  },
  async mounted() {
    //console.log(this.$route.params);
    //this.data()
    //console.log(this.id);
    //this.inicialStyle();
    //this.estilosSubcat();
    //console.log(this.$el)this.message = 'updated'
  },
  methods: {
    //  async data(){
    //    let data = await fetch(`http://127.0.0.1:8000/api/categories`,{
    //     method:"GET",
    //     headers: {
    //       "Content-type": "application/json",
    //       "Accept":"application/json",
    //       "Authorization":"Bearer 2|x10Ks3WEAGONATeV6ziM6RVmIUfvKJD5i5EoKTKG"
    //   }
    //    }).then((r)=>r.json());

    //    console.log(data);
    //  }
    // estilosSubcat() {
    //   let enlace = document.querySelectorAll(".subcat");

    //   this.estilosFocusSubcat(enlace[0]);
    // },
    // estilosFocusSubcat(tag) {
    //   tag.classList.remove("text-gray-300");
    //   tag.classList.remove("hover:text-white");
    //   tag.classList.add("bg-stone-200");
    //   tag.classList.add("text-black");
    //   tag.classList.add("font-bold");
    // },
    // inicialStyle() {
    //   let categories = document.querySelectorAll(".category");
    //   categories[0].classList.add("border-white");
    // },
    focusCategory(catID) {
      this.selectedSub = 0;
      this.selectedCategory = catID;
    // subcategories.forEach((subcat) => {
      //     subcat.classList.remove("bg-stone-200");
      //     subcat.classList.remove("text-black");
      //     subcat.classList.remove("font-bold");
      //     subcat.classList.add("text-gray-300");
      //     subcat.classList.add("hover:text-white");
      //   });
      //   this.estilosSubcat();

      // categories.forEach((cat) => {
      //   cat.classList.remove("border-white");
      //   if (e.target.id == cat.id) {
      //     cat.classList.add("border-white");
      //   }
      // });
      // this.categoria.forEach((cat, key) => {
      //   if (catID == key) {
      //     this.subcat = cat.sub;
      //   }
      // });
      if (this.categoria[catID]) {
      this.subcat = this.categoria[catID].sub;
      } else {
        console.error('Invalid catID:', catID);
      }
    },
    focusSubcat(subID) {
      this.selectedSub = subID;
      console.log(subID);
      // let subcategories = document.querySelectorAll(".subcat");
      // subcategories.forEach((subcat) => {
      //   subcat.classList.remove("bg-stone-200");
      //   subcat.classList.remove("text-black");
      //   subcat.classList.remove("font-bold");
      //   subcat.classList.add("text-gray-300");
      //   subcat.classList.add("hover:text-white");
      //   if (e.target.id == subcat.id) {
      //     this.estilosFocusSubcat(subcat);
      //   }
      // });
    },
  },
  computed: {
    styleSubcat() {
      return "rounded-bl-lg";
    },
    subcatClasses() {
      return (subID) => {
        const isSelected = subID == this.selectedSub;

        return {
          "bg-stone-200": isSelected,
          "text-black": isSelected,
          "font-bold": isSelected,
          "text-gray-300": !isSelected,
          "hover:text-white": !isSelected,
        };
      };
    },
    catClasses() {
      return (catID) => {
        const isSelected = catID == this.selectedCategory;

        return {
          "border-white": isSelected,
        };
      };
    },
  },
  watch: {
    //   subcat: {
    //     handler: function () {
    //       this.estilosSubcat()
    //     },
    //     deep: true
    // }
  },
};
</script>
