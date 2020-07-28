require('./bootstrap');
import Vue from 'vue';
import store from './store'
import router from './router';
import MainApp from './components/Main-app'

new Vue({
	el: '#app',
	router,
	store,
	components: {
		MainApp
	},
});
