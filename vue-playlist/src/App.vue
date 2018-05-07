<template>
	<div>
		<app-header></app-header>
		<ninjas></ninjas>
		<app-footer></app-footer>
	</div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Ninjas from './components/Ninjas.vue'

export default {
	components: {
		'app-header': Header,
		'app-footer': Footer,
		'ninjas': Ninjas
	},

	data () {
		return {

		}
	}
}
</script>

<style lang="scss">
* {
	box-sizing: border-box;
}

html {
	font-size: 62.5%;
}
</style>
