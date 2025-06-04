import { createRouter, createWebHistory } from 'vue-router'
import Todo from '@/views/todo.vue'
import About from '@/views/about.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'todo', component: Todo },
    { path: '/about', name: 'about', component: About },
  ],
})

export default router
