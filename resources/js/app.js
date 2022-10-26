/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;

import Vue from 'vue'
import './plugins/axios'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import swal from 'sweetalert';
import {mixins} from './mixins'
Vue.mixin(mixins);

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)


Vue.component('app', require('./App.vue').default);


const app = new Vue({
    router,
    store,
    el: '#app',
});
