<template>
	<div>
		<h1>{{ sayWelcome }}</h1>
	</div>
</template>

<script>
export default {
	name: 'Home',
	computed: {
		sayWelcome() {
			return this.$store.getters.welcome;
		}
	}
}
</script>
