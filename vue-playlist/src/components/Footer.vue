<template>
	<footer>
		<p>{{copyright}}</p>
	</footer>
</template>

<script>
export default {
	data () {
		return {
			copyright: 'copyright 2018 Vue Ninjas'
		}
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
