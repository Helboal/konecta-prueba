"use strict";

import Vue from 'vue';
import axios from "axios";
import store from '../store/index.js'
// Full config:  https://github.com/axios/axios#request-config
axios.defaults.baseURL = 'http://konecta.cafeteria.test/api/'
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let config = {
  // baseURL: process.env.baseURL || process.env.apiUrl || ""
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    store.commit('SET_OVERLAY', true)
    return config;
  },
  function(error) {
    // Do something with request error
    store.commit('SET_OVERLAY', true)
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    store.commit('SET_OVERLAY', false)
    return response;
  },
  function(error) {
    // Do something with response error
    store.commit('SET_OVERLAY', false)
    return Promise.reject(error);
  }
);

Plugin.install = function(Vue, options) {
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios;
      }
    },
    $axios: {
      get() {
        return _axios;
      }
    },
  });
};

Vue.use(Plugin)

export default Plugin;