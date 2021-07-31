import Vue from 'vue';
import Router from 'vue-router';
import Home from './view/Home.vue';
import About from './view/About.vue';

Vue.use(Router);

let routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/about',
        name: 'about',
        component: About,
    },
];

export default new Router({
    routes
});