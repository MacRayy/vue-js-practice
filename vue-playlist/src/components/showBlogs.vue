<template>
	<section id="show-blogs">
		<h2>All blog articles</h2>
		<div class="single-blog" v-for="blog in blogs">
			<h2>{{blog.title}}</h2>
			<article>
				{{blog.body}}
			</article>
		</div>
	</section>
</template>

<script>

export default {
	data() {
		return {
			blogs: ['dsa', 'aaa']
		}
	},

	methods: {
		get() {

		}
	},

	created() {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(response => response.json())
			.then(data => this.blogs = data.slice(0, 10))
	}
}
</script>

<style scoped lang="scss">
#show-blogs{
	max-width: 800px;
	margin: 0px auto;
}
.single-blog{
	padding: 20px;
	margin: 20px 0;
	box-sizing: border-box;
	background: #eee;
}
</style>
