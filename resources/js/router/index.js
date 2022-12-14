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
            {
                path: 'dashboard',
                name: 'Dashboard',
                meta: {
                  title: 'Dashboard',
                  breadcrumbs: [
                    { text: 'Inicio', active: false, to: '/' },
                    { text: 'Dashboard', active: true, to: '#' }
                  ]
                },
                component: () => import(/* webpackChunkName: "Dashboard" */ '../views/Dashboard.vue')
            },
            {
                path: 'sale',
                name: 'Sale',
                meta: {
                  title: 'Venta',
                  breadcrumbs: [
                    { text: 'Inicio', active: false, to: '/' },
                    { text: 'Dashboard', active: false, to: '/dashboard' },
                    { text: 'Venta', active: true, to: '#' }
                  ]
                },
                component: () => import(/* webpackChunkName: "Sale" */ '../views/Sale.vue')
            },
            {
                path: 'reports',
                name: 'Reports',
                meta: {
                  title: 'Reportes',
                  breadcrumbs: [
                    { text: 'Inicio', active: false, to: '/' },
                    { text: 'Dashboard', active: false, to: '/dashboard' },
                    { text: 'Reportes', active: true, to: '#' }
                  ]
                },
                component: () => import(/* webpackChunkName: "Settings" */ '../views/Reports.vue')
            },
            {
                path: 'inventory',
                name: 'Inventory',
                meta: {
                  title: 'Inventario',
                  breadcrumbs: [
                    { text: 'Inicio', active: false, to: '/' },
                    { text: 'Dashboard', active: false, to: '/dashboard' },
                    { text: 'Inventario', active: true, to: '#' }
                  ]
                },
                component: () => import(/* webpackChunkName: "Inventory" */ '../views/Inventory.vue')
              }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',    
    routes
})
  
export default router