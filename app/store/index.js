import Vue from "nativescript-vue";
import Vuex from "vuex"
import request from "@/utils/request";

Vue.use(Vuex);

const store = {
    state: {
        users:[],
        repos:[],
    },
    mutations: {
        LOAD_USERS(state, payload) {
            state.users.unshift(payload);
        },
        LOAD_REPOS(state,payload) {
            state.repos = payload;
        }
    },
    actions: {
        async loadUser({commit}, user) {
            const {data} = await request.get(`/users/${user}`);
            commit("LOAD_USERS", data);
        },
        async loadRepos({commit}, user) {
            const {data} = await request.get(`/users/${user}/starred`);
            commit("LOAD_REPOS", data);
        }
    },
    getters: {
        getUsers: state => state.users,
        getRepos: state => state.repos
    }
}

export default new Vuex.Store(store);