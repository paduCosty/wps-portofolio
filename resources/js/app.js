import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

// Import components
import Layout from "./Layouts/Layout.vue";
import Home from "./Pages/Home/Home.vue";
import Portfolio from "./Pages/Portfolio/Portfolio.vue";
import Contact from "./Pages/Contact/Contact.vue";
import About from "./Pages/About/About.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        // { path: '/products/create', component: ProductForm },
        // { path: '/products/:id', component: Product },
        // { path: '/products/:id/edit', component: ProductForm },

        { path: '/home', component: Home },
        { path: '/about', component: About },
        { path: '/portfolio', component: Portfolio },
        { path: '/contact', component: Contact },

    ]
});

const app = createApp(Layout);
app.use(router);
app.mount('#app');
