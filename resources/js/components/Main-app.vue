<template>
	<div id="main">
		<Header class="mb-5"/>
		<div class="content">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
import Header from './Header'
export default {
	name: "main-app",
	components: {Header},
};
</script>
