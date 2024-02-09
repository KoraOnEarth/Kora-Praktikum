import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/courses',
    name: 'courses',
    component: () => import(/* webpackChunkName: "about" */ '../views/CoursesView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  },
  {
    path: '/registration',
    name: 'registration',
    component: () => import(/* webpackChunkName: "about" */ '../views/RegistrationView.vue')
  },
  {
    path: '/1slide',
    name: '1slide',
    component: () => import(/* webpackChunkName: "about" */ '../views/slides/1slide.vue')
  },
  {
    path: '/2slide',
    name: '2slide',
    component: () => import(/* webpackChunkName: "about" */ '../views/slides/2slide.vue')
  },
  {
    path: '/:CatchAll(.*)',
    name: 'NotFound',
    component: () => import('../views/NotFoundView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
