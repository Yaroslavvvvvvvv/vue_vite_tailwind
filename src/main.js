import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import VueSmoothScroll from 'vue3-smooth-scroll';
import router from './router';

createApp(App).use(router).use(VueSmoothScroll).mount('#app')
