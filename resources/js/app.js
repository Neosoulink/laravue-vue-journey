require('./bootstrap');
import Vue from 'vue';
import store from './store'
import router from './router';
import {initialize} from './helpers/general';
import MainApp from './components/Main-app';

import { BootstrapVue } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)

initialize(store, router);

new Vue({
	el: '#app',
	router,
	store,
	components: {
		MainApp
	},
});
