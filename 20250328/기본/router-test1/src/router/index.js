import {
  createRouter,
  createWebHistory,
  isNavigationFailure,
} from 'vue-router';

import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';
import Members from '@/pages/Members.vue';
import Videos from '@/pages/Videos.vue';
import MemberInfo from '@/pages/MemberInfo.vue';
import NotFound from '@/pages/NotFound.vue';

const membersIdGuard = (to, from) => {
  //members/:id 경로는 반드시 이전 경로가 /members, /members:id 인 경우만 내비게이션 허용함
  if (from.name !== 'members' && from.name !== 'members/id') {
    return false;
  }
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Home, name: 'home' },

    { path: '/about', component: About, name: 'about' },

    { path: '/members', component: Members, name: 'members' },

    // {
    //   path: '/videos',
    //   name: 'videos',
    //   component: Videos,
    //   children: [
    //     { path: '/videos', name: 'videos/id', component: VideoPlayer },
    //   ],
    // },

    { path: '/members/:id', component: MemberInfo },

    { path: '/:paths(.*)*', name: 'NotFound', component: NotFound },

    {
      path: '/members/:id',
      name: 'members/id',
      component: MemberInfo,
      beforeEnter: membersIdGuard,
    },
  ],
});

router.beforeEach((to) => {
  if (to.query && Object.keys(to.query).length > 0) {
    return { path: to.path, query: {}, params: to.params };
  }
});

router.afterEach((to, from, failure) => {
  if (isNavigationFailure(failure)) {
    console.log('@@내비게이션 중단 : ', failure);
    return { name: 'home' };
  }
});
export default router;
