import Vue from 'vue';
import Vuex from 'vuex';

import {getLocalUser} from './helpers/auth';

Vue.use(Vuex);

const user = getLocalUser();


const state = {
	currentUser: user,
	isLoggedIn: !!user,
	loading: false,
	auth_error: null,
	customers: []
};
const getters = {
	currentUser(state) {
		return state.currentUser;
	},
	isLoggedIn(state) {
		return state.isLoggedIn;
	},
	loading(state) {
		return state.loading;
	},
	authError(state) {
		return state.auth_error;
	},
	customers(state) {
		return state.customers;
	},
};
const mutations = {
	LOGIN(state){
		state.loading = true;
		state.auth_error = null;
	},
	LOGIN_SUCCESS(state, payload) {
		state.auth_error = null;
		state.isLoggedIn = true;
		state.loading = false;
		state.currentUser = Object.assign({}, payload.user, { token: payload.access_token});

		localStorage.setItem("user", JSON.stringify(state.currentUser));
	},
	LOGIN_FAILED(state, payload) {
		state.loading = false;
		state.auth_error = payload.error;
	},
	LOGOUT(state) {
		localStorage.removeItem('user');
		state.isLoggedIn = false;
		state.currentUser = null;
	},
	UPDATE_CUSTOMERS(state, payload) {
		state.customers = payload
	},
	ADD_CUSTOMER(state, payload) {
		state.customers.unshift(payload);
	}
};
const actions = {
	login(context){
		context.commit('LOGIN');
	},
	getCustomers(context){
		axios.get('/api/customers').then((response) => {
			context.commit('UPDATE_CUSTOMERS', response.data.customers)
		})
	}
};

let store = new Vuex.Store({
	state,
	getters,
	mutations,
	actions,
	strict: true
})

global.store = store;

export default store;
