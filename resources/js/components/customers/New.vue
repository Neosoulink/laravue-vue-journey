<template>
	<div>
		<form @submit.prevent="add">
			<table class="table">
				<tr>
					<th>Name</th>
					<td>
						<input type="text" class="form-control" v-model="customer.name" placeholder="Customer Name" />
					</td>
				</tr>
				<tr>
					<th>Email</th>
					<td>
						<input
							type="email"
							class="form-control"
							v-model="customer.email"
							placeholder="Customer Email"
						/>
					</td>
				</tr>
				<tr>
					<th>Phone</th>
					<td>
						<input type="tel" class="form-control" v-model="customer.phone" placeholder="Customer Phone" />
					</td>
				</tr>
				<tr>
					<th>Website</th>
					<td>
						<input
							type="text"
							class="form-control"
							v-model="customer.website"
							placeholder="Customer Wrbsite"
						/>
					</td>
				</tr>
				<tr>
					<th>
						<router-link to="/customers" class="btn btn-default">Cancel</router-link>
					</th>
					<td class="text-right">
						<input type="submit" class="btn btn-outline-primary" value="Create customer" />
					</td>
				</tr>
			</table>
		</form>
		<div v-if="errors">
			<b-alert show variant="danger" v-for="(error, index) in errors" :key="index">
				<strong class="text-uppercase">{{index}}:</strong> {{error.join(',\n')}}
			</b-alert>
		</div>
	</div>
</template>
<script>
import Validate from "validate.js";

export default {
	name: "new-customer",
	data() {
		return {
			customer: {
				name: "",
				email: "",
				phone: "",
				website: "",
			},
			errors: null,
		};
	},
	computed: {
		currentUser() {
			return this.$store.getters.currentUser;
		}
	},
	methods: {
		add() {
			this.errors = null;

			const constraints = this.getConstraints();

			const errors = Validate(this.$data.customer, constraints);
			if (errors) {
				this.errors = errors;
				return;
			}
			if(!this.$store.getters.customers.length){
				this.$store.dispatch('getCustomers');
				console.log("List added");
			}
			axios.post('/api/customers/new', this.$data.customer)
			.then(res => {
				console.log(res.data.customer)
				this.$store.commit('ADD_CUSTOMER', res.data.customer);
				this.$router.push('/customers');
			})
			.catch(err => {
				console.error(err);
			})
		},
		 getConstraints() {
			return {
				name: {
					presence: true,
					length: {
						minimum: 3,
						message: "Must be least 3 characters long",
					},
				},
				email: {
					presence: true,
					email: true,
				},
				phone: {
					presence: true,
					numericality: true,
					length: {
						minimum: 9,
						message: "Must be at least 9 digits long",
					},
				},
				website: {
					presence: true,
					url: true,
				},
			};
		},
	},
};
</script>
