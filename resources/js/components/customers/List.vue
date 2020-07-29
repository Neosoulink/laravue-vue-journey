<template>
	<div>
		<div class="btn-wrapper py-2">
			<router-link to="/customers/new" class="btn btn-outline-primary">New Customer</router-link>
		</div>
		<table class="table table-striped table-inverse">
			<thead class="thead-inverse">
				<tr>
					<th>Name</th>
					<th>Email</th>
					<th>Phone</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				<template v-if="!customers.length">
					<tr>
						<td colspan="4" class="text-center">No customers Available</td>
					</tr>
				</template>
				<template v-else>
					<tr v-for="customer in customers" :key="customer.id">
						<td scope="row"> {{ customer.name }} </td>
						<td> {{ customer.email }} </td>
						<td> {{ customer.phone }} </td>
						<td>
							<router-link :to="`/customers/${customer.id}`">View</router-link>
						</td>
					</tr>
				</template>
			</tbody>
		</table>
	</div>
</template>
<script>
export default {
	name: "List",
	data() {
		return {
		}
	},
	computed: {
		customers() {
			return this.$store.getters.customers;
		}
	},
	mounted() {
		if (!this.customers.length) {
			console.log('you\'re here')
			this.$store.dispatch('getCustomers');
		}
	},
};
</script>
