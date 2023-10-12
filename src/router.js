import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('./views/Home.vue'),
    },
    {
        path: '/catalog',
        name: 'catalog',
        component: () => import('./components/ProductList.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;