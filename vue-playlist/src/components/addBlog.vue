<template>
	<section id="add-blog">
		<h2>Add new blog</h2>
		<form>
			<label>Blog title:</label>
			<input type="text" required v-model.lazy="blog.title">
			<label>Blog content:</label>
			<textarea v-model.lazy="blog.content"></textarea>
			<div id="checkboxes">
				<label>ninjas</label>
				<input type="checkbox" value="ninjas" v-model="blog.categories">
				<label>wizards</label>
				<input type="checkbox" value="wizards" v-model="blog.categories">
				<label>mario</label>
				<input type="checkbox" value="mario" v-model="blog.categories">
			</div>
		</form>

		<div id="preview">
			<h3>Preview blog</h3>
			<p>Blog title: {{blog.title}}</p>
			<p>Blog content:</p>
			<p>{{blog.content}}</p>
			<p>Blog categories:</p>
			<ul>
				<li v-for="category in blog.categories">{{category}}</li>
			</ul>
		</div>
	</section>
</template>

<script>

export default {
	data() {
		return {
			blog: {
				title: '',
				content: '',
				categories: []
			}
		}
	}
}
</script>

<style scoped lang="scss">
#add-blog *{
  box-sizing: border-box;
}
#add-blog{
  margin: 20px auto;
  max-width: 500px;
}
label{
  display: block;
  margin: 20px 0 10px;
}
input[type="text"], textarea{
  display: block;
  width: 100%;
  padding: 8px;
}
#preview{
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3{
  margin-top: 10px;
}
#checkboxes input{
  display: inline-block;
  margin-right: 10px;
}
#checkboxes label{
  display: inline-block;
}
</style>
