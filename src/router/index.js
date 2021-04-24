import {createRouter, createWebHashHistory} from 'vue-router'
import Home from '../views/Home.vue'
import Products from "../views/products/Products";
import Sales from "../views/sales/Sales";
import Suppliers from "../views/suppliers/Suppliers";
import Orders from "../views/orders/Orders";
import CreateOrder from "../components/orders/CreateOrder";
import CreateProduct from "../components/products/CreateProduct";
import CreateSupplier from "../components/suppliers/CreateSupplier";
import DeleteOrder from "../components/orders/DeleteOrder";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },

    //  SUPPLIERS
    {
        path: '/suppliers',
        name: 'suppliers',
        component: Suppliers
    },
    {
        path: '/new-supplier',
        name: 'create-supplier',
        component: CreateSupplier
    },
    {
        path: '/product-suppliers',
        name: 'product-suppliers',
        component: Suppliers
    },


    //  PRODUCTS
    {
        path: '/products',
        name: 'products',
        component: Products
    },
    {
        path: '/new-product',
        name: 'create-product',
        component: CreateProduct
    },


    //  ORDERS
    {
        path: '/orders',
        name: 'orders',
        component: Orders
        // component: () => import('../views/orders/Orders')
    },

    {
        path: '/new-order',
        name: 'create-order',
        component: CreateOrder
    },

    {
        path: '/delete-order',
        name: 'delete-order',
        component: DeleteOrder
    },


    //  SALES
    {
        path: '/top-sales',
        name: 'top-sales',
        component: Sales
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
