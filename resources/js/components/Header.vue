<template>
	<nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
		<div class="container">
			<router-link to='/' class="navbar-brand">LaraVue-SPA</router-link>
			<button
				class="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<!-- Left Side Of Navbar -->
				<ul class="navbar-nav mr-auto"></ul>

				<!-- Right Side Of Navbar -->
				<ul class="navbar-nav ml-auto">
					<!-- Authentication Links -->
					<template v-if="!currentUser">
						<li class="nav-item">
							<router-link to="/login" class="nav-link">Login</router-link>
						</li>
						<li class="nav-item">
							<router-link to="/register" class="nav-link">Register</router-link>
						</li>
					</template>
					<template v-else>
						<li class="nav-item">
							<router-link to="/customers" class="nav-link">Customers</router-link>
						</li>
						<b-nav-item-dropdown id="my-nav-dropdown" :text="currentUser.name" toggle-class="nav-link-custom" right>
							<b-dropdown-item @click="logout" exact exact-active-class="active">Logout</b-dropdown-item>
							<b-dropdown-divider></b-dropdown-divider>
							<b-dropdown-item>About</b-dropdown-item>
						</b-nav-item-dropdown>
					</template>

				</ul>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	name: "Header",
	data() {
		return { };
	},
	methods: {
		logout(){
			this.$store.commit('LOGOUT');
			this.$router.push('/login');
		}
	},
	computed: {
		currentUser(){
			return this.$store.getters.currentUser;
		}
	},
};
</script>
