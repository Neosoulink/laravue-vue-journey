import Vue from 'vue';
import VueRouter from 'vue-router';

// Route Components
//import Home from './components/Home.vue';
//import Login from './components/auth/Login.vue';

Vue.use(VueRouter);

export const routes = [
	{
		path: '/',
		component: resolve => require(['./components/Home.vue'], resolve),
		meta: {
			requiresAuth: true
		}
	},
	{
		path: '/login',
		component: resolve => require(['./components/auth/Login.vue'], resolve),
	},
	{
		path: '/customers',
		component: resolve => require(['./components/customers/Main.vue'], resolve),
		meta: {
			requiresAuth: true
		},
		children: [
			{
				path: '/',
				component: resolve => require(['./components/customers/List.vue'], resolve),
			},
			{
				path: 'new',
				component: resolve => require(['./components/customers/New.vue'], resolve),
			},
			{
				path: ':id',
				component: resolve => require(['./components/customers/View.vue'], resolve),
			}
		],
	}
];

const router = new VueRouter({
	routes,
	mode: 'history',
});

export default router;
