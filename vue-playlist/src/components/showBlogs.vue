<template>
	<section id="show-blogs" v-theme:column="'narrow'">
		<h2>All blog articles</h2>
		<input type="text" v-model="search" placeholder="search blogs">
		<div class="single-blog" v-for="blog in filteredBlogs">
			<router-link v-bind:to="`/blog/${blog.id}`"><h3 v-rainbow>{{blog.title | to-uppercase}}</h3></router-link>
			<article>
				{{blog.body | snippet}}
			</article>
		</div>
	</section>
</template>

<script>

export default {
	data() {
		return {
			blogs: [],
			search: ''
		}
	},

	methods: {

	},

	computed: {
		filteredBlogs() {
			return this.blogs.filter(blog => blog.title.match(this.search))
		}
	},

	created() {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(response => response.json())
			.then(data => this.blogs = data.slice(0, 10))
	},

	// filters & directives locally
	filters: {
		toUppercase(value) {
			return value.toUpperCase()
		}
	},

	directives: {
		'rainbow': {
			bind(el, binding, vnode) {
				el.style.color = `#${Math.random().toString().slice(2, 8)}`
			}
		}
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
