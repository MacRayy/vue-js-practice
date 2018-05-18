<template>
	<header>
		<h1 v-on:click="changeTitle">{{title}}</h1>
	</header>
</template>

<script>
import { eventBus } from '../main'

export default {
	props: {
		title: {
			type: String
		}
	},

	data () {
		return {

		}
	},

	methods: {
		changeTitle () {
			// this.title = 'Vue Wizards' - change title locally
			// this.$emit('changeTitle', 'Vue Wizards') - change title in the root component and rerender everywhere
			this.title = 'Vue Wizards'
			eventBus.$emit('titleChanged', 'Vue Wizards ')
		}
	}
}
</script>

<style scoped lang="scss">
header {
	background: lightgreen;
	padding: 10px;
}

h1 {
	color: #222;
	text-align: center;
}
</style>
