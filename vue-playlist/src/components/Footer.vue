<template>
	<footer>
		<p>{{copyright}} {{title}}</p>
	</footer>
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
			copyright: 'Copyright 2018 '
		}
	},

	created() {
		eventBus.$on('titleChanged', data => this.title = data)
	}
}
</script>

<style scoped lang="scss">
footer {
	background: #222;
	padding: 6px;
}

p {
	color: lightgreen;
	text-align: center;
}
</style>
