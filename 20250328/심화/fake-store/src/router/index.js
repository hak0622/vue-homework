import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomePage },
    { path: '/electronics', name: 'electronics', component: ElectronicsPage },
    { path: '/jewelery', name: 'jewelery', component: JeweleryPage },
    {
      path: '/mensclothing',
      name: 'mensclothing',
      component: MensClothingPage,
    },
    {
      path: '/womensclothing',
      name: 'womensclothing',
      component: WomensClothingPage,
    },
    {
      path: '/about',
      ame: 'about',
      component: () => import('../views/AboutView.vue'),
    },
  ],
});

export default router;
