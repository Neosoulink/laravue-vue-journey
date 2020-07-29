<template>
	<div class="login new justify-content-center row">
		<div class="col-md-4">
			<div class="card">
				<div class="card-header">Login</div>
				<div class="card-body">
					<form method="post" @submit.prevent="authenticate">
						<div class="form-group">
							<label for="email">Email</label>
							<input
								type="text"
								id="email"
								v-model="form.email"
								class="form-control"
								placeholder="Email Address"
							/>
						</div>

						<div class="form-group">
							<label for="password">Password</label>
							<input
								type="password"
								id="password"
								v-model="form.password"
								class="form-control"
								placeholder="Password"
							/>
						</div>

						<div class="form-group">
							<input type="submit" id="submit" class="form-control btn-outline-dark" />
						</div>
						<span class="text-danger" role="alert" v-if="authError">
							<strong>{{ authError }}</strong>
						</span>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { login } from "../../helpers/auth";
export default {
	name: "login",

	data() {
		return {
			form: {
				email: "",
				password: "",
			},
			error: null,
		};
	},
	methods: {
		authenticate() {
			this.$store.dispatch("login");

			login(this.$data.form)
				.then((res) => {
					this.$store.commit("LOGIN_SUCCESS", res);
					this.$router.push({ path: "/" });
				})
				.catch((error) => {
					this.$store.commit("LOGIN_FAILED", { error });
				});
		},
	},
	computed: {
		authError() {
			return this.$store.getters.authError;
		},
	},
};
</script>
<style >
</style>
