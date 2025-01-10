import { createRouter, createWebHistory } from 'vue-router'

// view imports
import ForsideView from '@/views/ForsideView.vue'
import CafeView from '@/views/CafeView.vue'
import EnkeltForestillingView from '@/views/EnkeltForestillingView.vue'
import ForestillingerView from '@/views/ForestillingerView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'forside',
      component: ForsideView,
    },
    {
      path: '/cafe',
      name: 'cafe',
      component: CafeView,
    },
    {
      path: '/kant',
      name: 'kant',
      component: EnkeltForestillingView,
    },
    {
      path: '/forestillinger',
      name: 'forestillinger',
      component: ForestillingerView,
    },
  ],
  // if something has a saved position, it will use it
  // otherwise return to top of new page
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return {
        top: 0
      }
    }
  }
})

export default router
