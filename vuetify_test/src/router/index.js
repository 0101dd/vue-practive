import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/todo',
    name: 'todo',
    component: () => import(/* webpackChunkName: "todo" */ '../views/Todo.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue'),
    children: [
      {
        path: 'draggable',
        name: 'draggable',
        component: () => import(/* webpackChunkName: "dashboard" */ '../views/Draggable.vue')
      },
      {
        path: 'banana',
        name: 'banana',
        component: () => import(/* webpackChunkName: "dashboard" */ '../views/Banana.vue')
      }
    ]
  }//,
  // {
  //   path: '/apple',
  //   name: 'apple',
  //   component: () => import(/* webpackChunkName: "apple" */ '../views/Apple.vue')
  // }
]

const router = new VueRouter({
  routes
})

router.afterEach((to) => {
  document.title = to.meta.title
})

export default router
