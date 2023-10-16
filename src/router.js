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
        path: '/footer',
        name: 'footer',
        component: () => import('./components/MyFooter.vue'),
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;