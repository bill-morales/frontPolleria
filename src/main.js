import { createApp } from 'vue'
import './index.css'
import App from './App.vue'
import store from './store'
import router from '@/router/router.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars,faTimes,faTag,faTags,faUtensils,faUsers,faSignOutAlt,faUser,faTrash,faPenToSquare,faFolderPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faBars,faTimes,faTag,faTags,faUtensils,faUsers,faSignOutAlt,faUser,faTrash,faPenToSquare,faFolderPlus)
createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(router)
.use(store)
.mount('#app')
