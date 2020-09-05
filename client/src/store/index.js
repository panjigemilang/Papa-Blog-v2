import Vue from "vue";
import Vuex from "vuex";
import Services from "./modules/services";

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
    modules: {
        Services
    }
});
