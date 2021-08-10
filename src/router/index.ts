import { createRouter, createWebHistory } from 'vue-router'

const pages = {
  dashboard: () => import('@/views/dashboard/Index.vue'),
  login: () => import('@/views/login/Index.vue'),
  $404: () => import('@/views/errors/NotFound.vue'),
}

const routes = [
  { path: '/', name: 'dashboard', component: pages.dashboard, meta: { requiresAuth: true } },
  { path: '/login', name: 'login', component: pages.login },
  { path: '/:pathMatch(.*)*', component: pages.$404 },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)

  if (localStorage.getItem('testcode')) {
    if (requiresAuth) {
      next()
    } else {
      next({ name: 'dashboard' })
    }
  } else {
    if (requiresAuth) {
      next({ name: 'login' })
    } else {
      next()
    }
  }
})

export default router
