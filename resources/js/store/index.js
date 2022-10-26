import Vue from 'vue'
import Vuex from 'vuex'
import Inventory from './modules/Inventory.js'
Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    state: {
      overlay: false
    },
    getters: {
      overlay(state) {
        return state.overlay
      }
    },
    mutations: {
      SET_OVERLAY(state, value) {
        state.overlay = value
      }
    },
    actions: {
        //
    },
    modules: {
        Inventory
    }
})