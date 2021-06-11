import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [
  {
    path: '/',
    name: 'create or log',
    component: () => import('../components/CreateorLog.vue')
  },
  {
    path: '/CreateAccount',
    name: 'create',
    component: ()=> import('../views/CreateAccount.vue')
  },
  {
    path: '/LogIn',
    name: 'log',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LogIn.vue')
  },
  //{
    //receive post
    //call router as client, post request to scala
    //how to make http client request
  //}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
