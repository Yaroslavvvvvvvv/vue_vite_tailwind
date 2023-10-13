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
        component: () => import('./views/MyCatalog.vue'),
    },
    {
        path: '/list',
        name: 'list',
        component: () => import('./components/ProductList.vue'),
    },
    {
        path: '/card',
        name: 'card',
        component: () => import('./components/ProductCard.vue'),
        props: true,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;