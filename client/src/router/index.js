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
    path: '/3slide',
    name: '3slide',
    component: () => import(/* webpackChunkName: "about" */ '../views/slides/3slide.vue')
  },
  {
    path: '/4slide',
    name: '4slide',
    component: () => import(/* webpackChunkName: "about" */ '../views/slides/4slide.vue')
  },
  {
    path: '/5slide',
    name: '5slide',
    component: () => import(/* webpackChunkName: "about" */ '../views/slides/5slide.vue')
  },
  {
    path: '/6slide',
    name: '6slide',
    component: () => import(/* webpackChunkName: "about" */ '../views/slides/6slide.vue')
  },
  {
    path: '/7slide',
    name: '7slide',
    component: () => import(/* webpackChunkName: "about" */ '../views/slides/7slide.vue')
  },
  {
    path: '/8slide',
    name: '8slide',
    component: () => import(/* webpackChunkName: "about" */ '../views/slides/8slide.vue')
  },
  {
    path: '/9slide',
    name: '9slide',
    component: () => import(/* webpackChunkName: "about" */ '../views/slides/9slide.vue')
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
