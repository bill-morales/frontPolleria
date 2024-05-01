import { createRouter, createWebHashHistory } from "vue-router";
import { h } from 'vue';
import { RouterView } from 'vue-router';
import Inicio from "@/Pages/Inicio.vue";
import Promociones from "@/Pages/Promociones.vue";
import PolleriaMenu from "@/Pages/Menu.vue";
import Contacto from "@/Pages/Contacto.vue";
import Reserva from "@/Pages/Reserva.vue";
import Nosotros from "@/Pages/Nosotros.vue";
import Category from "@/Pages/dashboard/Category.vue";
import Subcategory from "@/Pages/dashboard/Subcategory.vue";
import User from "@/Pages/dashboard/User.vue";
import Dashboard from "@/Pages/dashboard/dashboard.vue";
import Platillos from "@/Pages/dashboard/Platillos.vue";
import Login from "@/Pages/Login.vue";
import store from "../store";
const routes = [
  { path: "/", component: Inicio },
  { path: "/promociones", component: Promociones },
  {
    path: "/menu/:cat",
    name: "polleria-menu",
    component: PolleriaMenu,
    props: (route) => {
      let { cat } = route.params;
      console.log(cat);
      cat = Number(cat);
      return isNaN(cat) ? { id: 1 } : { id: cat };
    },
  },
  { path: "/contacto", component: Contacto },
  { path: "/login", component: Login , name:"login"},
  { path: "/reserva", component: Reserva },
  { path: "/nosotros", component: Nosotros },
  {
    path: '/dashboard',
    name:"dashboard",
    component: { name:"prefix" ,render: () => h(RouterView) },
    meta: { requiresAuth: true }, // esta ruta requiere autenticación
    beforeEnter: (to, from, next) => {
      // Redirige a la primera ruta hija
      if (to.path === '/dashboard') {
        next({ path: '/dashboard/category' });
      } else {
        // Si no, permite el acceso a la ruta hija
        next();
      }
    },
    //meta: { requiresAuth: true }, // esta ruta y sus hijos requieren autenticación
    children: [
      {
        path: 'category',
        component: Category,
        name:"category"
      },
      {
        path: 'subcategory',
        component: Subcategory,
        name:"subcategory"
      },
      {
        path: 'user',
        component: User,
        name:"user"
      },
      {
        path: 'platillos',
        component: Platillos,
        name:"platillos"
      },
      // otras rutas hijas...
    ]
  },
  { path: "/:pathMatch(.*)*", component: () => import("@/Pages/Error.vue") },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  console.log(store.getters['auth/authenticated']);
  
  if(to.matched.some(record => record.meta.requiresAuth && !store.getters['auth/authenticated'])){
    console.log("no estas autenticado");
    return next({ name: 'login' })
  };
  next();
 })
export default router;
