import Vue from 'vue';
import VueRouter from 'vue-router';
// Components
import Home from './components/Home.vue'

Vue.use(VueRouter);

export const routes = [
	{
		path: '/',
		component: Home,
	}
];

const router = new VueRouter({
	routes,
	mode: 'history',
});

export default router;
