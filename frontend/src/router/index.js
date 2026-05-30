import { createRouter, createWebHistory } from 'vue-router';
import Homeview from '@/views/Homeview.vue';
import Jobsview from '@/views/Jobsview.vue';
import Notfoundview from '@/views/Notfoundview.vue';
import Jobview from '@/views/Jobview.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Homeview,
    },{
        path: '/jobs',
        name: 'jobs',
        component: Jobsview,
    },{
        path: '/:catchAll(.*)', // Match any path that hasn't been matched by other routes
        name: 'not-found',
        component: Notfoundview,
    },{
        path: '/jobs/:id', // Match any path that hasn't been matched by other routes
        name: 'job',
        component: Jobview,
    },
  ],
});

export default router;