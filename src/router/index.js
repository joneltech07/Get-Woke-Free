import { createRouter, createWebHistory } from 'vue-router';

import Category from '../views/category.vue';
import Category1 from '../views/category1.vue';
import Category2 from '../views/category2.vue';

const routes = [
    { 
        path: '/', 
        component: Category,
        children: [
            {path: '', component: Category1,},
            {path: '/category-2', component: Category2,}
        ] 
    }
];

const router = createRouter({
    history: createWebHistory(),
    base: import.meta.env.BASE_URL,
    routes
});

export default router;