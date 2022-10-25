import Vue from 'vue'
import VueRouter from 'vue-router'
import AppLayout from '../layouts/AppLayout.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',    
        component: AppLayout,
        children: [
            {
              path: '',
              name: 'Home',
              component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')
            },
        ]
    }
]

const router = new VueRouter({
    mode: 'history',    
    routes
})
  
export default router