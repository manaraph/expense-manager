import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
// import Expense from './views/Expense'
import Expenses from './views/Expenses'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    // {
    //   path: '/login',
    //   name: 'Login',
    //   component: Login
    // },
    {
      path: '/expenses',
      name: 'Expenses',
      component: Expenses
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
