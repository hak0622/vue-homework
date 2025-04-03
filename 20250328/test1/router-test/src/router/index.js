import { createRouter, createWebHistory } from 'vue-router';

import MemberInfo from '@/pages/MemberInfo.vue';
import Test from '@/pages/test.vue';
import TestChild from '@/pages/TestChild.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/videos',
      component: Videos,
      name: 'vi',
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/members/:id',
      component: MemberInfo,
    },
    {
      path: '/test',
      component: Test,
      children: [{ path: ':num', component: TestChild, name: 'test/num' }],
    },
  ],
});

export default router;
