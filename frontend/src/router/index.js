import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../views/Register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Register',
    component: Register
  },
  {
    path: '/Admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/AdminProducts',
    name: 'AdminProducts',
    component: AdminProducts
  },
  {
    path: '/BuyView',
    name: 'BuyView',
    component: BuyView
  },
  {
    path: '/MakeOrder',
    name: 'MakeOrder',
    component: MakeOrder
  },
  {
    path: '/OrderDone',
    name: 'OrderDone',
    component: MakeOrder
  },
  {
    path: '/Products',
    name: 'Products',
    component: Profile
  },

  {
    path: '/Profile',
    name: 'Profile',
    component: Profile
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
