import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/suppliers',
    name: 'suppliers',
    component: () => import('../views/Suppliers.vue')
  },
  {
    path: '/orders',
    name: 'orders',
    component: () => import('../views/Orders.vue')
  },
  {
    path: '/product_suppliers',
    name: 'product_supplier',
    component: () => import('../views/ProductSupplier.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
