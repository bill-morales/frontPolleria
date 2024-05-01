// store/auth.js
import axios from "axios";
import router from "@/router/router";

export default {
    namespaced: true,
    state: {
        user: null,
        token: localStorage.getItem('authToken') || null,
    },
    mutations: {
        SET_USER(state, user) {
            state.user = user;
        },
        SET_TOKEN(state, token) {
            state.token = token;
            localStorage.setItem('authToken', token);
        },
        LOGOUT(state) {
            state.user = null;
            state.token = null;
            localStorage.removeItem('authToken');
        }
    },
    actions: {
        async login({ commit }, credentials) {
            try {     
                const response = await axios.post(
                    "http://127.0.0.1:8000/api/login",
                    credentials,{
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );
                console.log(response.data);
                commit("SET_USER", response.data.user);
                commit("SET_TOKEN", response.data.token);
                router.push({ name: "dashboard" });
            } catch (error) {
                console.log(error.response.data);
            }
        },
        async logout({ commit,state }) {
            try {
                await axios.post("http://127.0.0.1:8000/api/logout",{},{
                    headers:{
                        "Content-Type": "application/json",
                        'Authorization': `Bearer ${state.token}`
                    }
                });
                commit("LOGOUT");
                router.push({ name: "login" });
            } catch (error) { 
                console.log(error.response.data);
            }
            console.log("funcando");
        },
        async checkAuth({ commit }) {
            const response = await axios.get("/user");
            commit("SET_USER", response.data);
        },
    },
    getters: {
        authenticated(state) {
            return !!state.token;
        },
        user(state) {
            return state.user;
        },
    },
};
