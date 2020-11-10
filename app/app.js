import Vue from "nativescript-vue";
import store from "./store";

import Users from "./containers/Users";

new Vue({
    render: h => h('frame', [h(Users)]),
    store
}).$start();
