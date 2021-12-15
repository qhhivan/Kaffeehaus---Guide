import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  
  {
    path: '/about',
    name: 'About',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/admin/clubs',
    name: 'AdminClub',
    component: () => import('../views/AdminClub.vue'),
  },
  {
    path: '/admin/events',
    name: 'AdminEvent',
    component: () => import('../views/AdminEvent.vue'),
  },
  {
    path: '/',
    name: 'Events',
    component: () => import('../views/Events.vue'),
  },
  {
    path: '/clubs',
    name: 'Clubs',
    component: () => import('../views/Clubs.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
