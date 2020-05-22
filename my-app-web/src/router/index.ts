import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import home from '@/views/admin/home.vue'
Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component:home ,
  }
];

const router = new VueRouter({
  routes,
});

export default router;
