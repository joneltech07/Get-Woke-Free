import { createRouter, createWebHistory } from 'vue-router';

import Category from '../views/category.vue';

const routes = [
    { 
        path: '/', 
        component: Category
    }
];

const router = createRouter({
    history: createWebHistory(),
    base: import.meta.env.BASE_URL,
    routes
});

export default router;