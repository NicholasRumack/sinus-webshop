import Vue from 'vue'
import VueRouter from 'vue-router'
import Product from '../views/Products.vue'
import MyAccount from '../views/MyAccount.vue'
import Cart from '../components/ShopCart.vue'
import Register from '../views/Register.vue'
import Checkout from '../views/CheckOut.vue'
import Login from '../components/LoginForm.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Products',
    component: Product
  },
  {
    path: '/account',
    name: 'Account',
    component: MyAccount
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout,
  },
{
  path: '/login',
  name: 'Login',
  component: Login
}


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
