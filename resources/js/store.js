import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
	welcomeMessage: 'Hello ! try my spa app ;)',
};
const getters = {
	welcome(state) {
		return state.welcomeMessage;
	}
};
const mutations = {
};
const actions = {
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
