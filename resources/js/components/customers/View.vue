<template>
	<div>
		<div v-if="customer">
			<div class="text-center my-3">
				<img
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQoLRdBNBaEgDO2pHrl7wEJ23ZJsH3i7Ii1VA&usqp=CAU"
					alt="PlaceholderImg"
					class="img-thumbnail rounded-circle shadow-sm"
					height="170"
					width="170"
				/>
			</div>
			<table class="table">
				<tr>
					<th>ID</th>
					<td>{{ customer.id }}</td>
				</tr>
				<tr>
					<th>Name</th>
					<td>{{ customer.name }}</td>
				</tr>
				<tr>
					<th>Email</th>
					<td>{{ customer.email }}</td>
				</tr>
				<tr>
					<th>Phone</th>
					<td>{{ customer.phone }}</td>
				</tr>
				<tr>
					<th>Website</th>
					<td>{{ customer.website }}</td>
				</tr>
			</table>
			<router-link to="/customers">Back Customers List</router-link>
		</div>
		<div v-else class="text-center">
			<div class="spinner-grow text-primary" role="status">
				<span class="sr-only">Loading...</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "customer-view",
	data() {
		return {
			customer: null,
			loading: true,
		};
	},
	computed: {
		currentUser() {
			return this.$store.getters.currentUser;
		},
		customers() {
			return this.$store.getters.customers;
		},
	},
	created() {
		//console.log(this.customers);
		if (this.customers.length) {
			this.customer = this.customers.find( (customer) => customer.id == this.$route.params.id );
		} else {
			console.log('axios call here')
			axios
				.get(`/api/customers/${this.$route.params.id}`)
				.then((res) => {
					this.customer = res.data.customer;
				})
				.catch((err) => {
					console.error(err);
				});
		}
	},
};
</script>
