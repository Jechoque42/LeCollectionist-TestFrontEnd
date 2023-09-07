import { createRouter, createWebHistory } from 'vue-router'
// @ts-ignore
import HomeView from '../views/HomeView.vue'
// @ts-ignore
import ListingView from "@/views/ListingView.vue";
// @ts-ignore
import FavoritesView from "@/views/FavoritesView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/listing/:id',
      name: 'listing',
      component: ListingView
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: FavoritesView
    }
  ]
})

export default router
