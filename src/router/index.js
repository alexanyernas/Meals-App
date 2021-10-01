import Vue from 'vue'
import VueRouter from 'vue-router'

// Import views
import Home from '../views/Home.vue'
import Category from '../views/Category.vue'
import Meal from '../views/Meal.vue'

Vue.use ( VueRouter )

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/categories/:category',
    name: 'Category',
    component: Category,
  },
  {
    path: '/meals/:meal',
    name: 'Meal',
    component: Meal,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
