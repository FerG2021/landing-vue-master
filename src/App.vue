<script>
import { mapGetters } from 'vuex';

export default { computed: {	...mapGetters('CarsStore', ['cars']) } };
</script>

<template>
	<div>Header</div>
	{{ cars }}
	<router-view></router-view>
</template>

<style lang="scss">
@import url('./assets/colors.css');

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Poppins', sans-serif;
	.p-button-label {
		padding: 5px;
	}
}
</style>
