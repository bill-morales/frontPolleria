// src/store.js
import { createStore } from 'vuex'
import category from './modules/category.js'
import auth from './modules/auth.js'



export default createStore({
    state: {
        counter: 100
    },
    modules: {
        category,
        auth

    }
})