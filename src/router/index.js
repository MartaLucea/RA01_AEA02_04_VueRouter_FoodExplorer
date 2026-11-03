import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: Home },
    {
      path: "/receptes", 
      name: "receptes", component: () => import("../views/Recipes.vue"),
      children: [
        {
          path: ':id', 
          name: 'receptes-detail', component: () => import('../views/RecipesDetail.vue'),
        }
      ]
    },
    {
      path: "/notfound",
      name: "notfound", component: () => import('../views/NotFound.vue'),
    }
  ],
})

export default router
