<template>
	<section id="single-blog">
		<h1>{{blog.title}}</h1>
		<article>
			{{blog.body}}
		</article>
	</section>
</template>

<script>

export default {
	data() {
		return {
			id: this.$route.params.id,
			blog: {}
		}
	},

	created() {
		fetch(`http://jsonplaceholder.typicode.com/posts/${this.id}`)
			.then(response => response.json())
			.then(data => this.blog = data)
	}
}
</script>

<style scoped lang="scss">
#single-blog {
  max-width: 960px;
  margin: 0 auto;
}
</style>
