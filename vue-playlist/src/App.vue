<template>
	<div>
		<app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
		<app-ninjas v-bind:ninjas="ninjas"></app-ninjas>

		<form-helper>
			<div slot="form-header">
				<h3>Form title from slot</h3>
				<p>information</p>
			</div>
			<div slot="form-fields">
				<input type="text" placeholder="name">
				<input type="password" placeholder="password">
			</div>
			<div slot="form-controls">
				<button v-on:click="handleSubmit">send</button>
			</div>
		</form-helper>

		<!-- keep-alive keeps the data even if you change the rendered component -->
		<keep-alive>
			<component v-bind:is="component"></component>
		</keep-alive>
		<button v-on:click="component = 'comp-one'">show first</button>
		<button v-on:click="component = 'comp-two'">show second</button>

		<router-view></router-view>

		<app-footer v-bind:title="title"></app-footer>
	</div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Ninjas from './components/Ninjas.vue'
import formHelper from './components/FormHelper.vue'
import componentOne from './components/componentOne.vue'
import componentTwo from './components/componentTwo.vue'
import addBlog from './components/addBlog.vue'
import showBlogs from './components/showBlogs.vue'

export default {
	components: {
		'app-header': Header,
		'app-footer': Footer,
		'app-ninjas': Ninjas,
		'form-helper': formHelper,
		'comp-one': componentOne,
		'comp-two': componentTwo,
		'add-blog': addBlog,
		'show-blogs': showBlogs
	},

	data () {
		return {
			ninjas: [
				{name: 'Ryu', speciality: 'Vue Components', show: false},
				{name: 'Crystal', speciality: 'HTML Wizardry', show: false},
				{name: 'Hitoshi', speciality: 'Click Events', show: false},
				{name: 'Tango', speciality: 'Conditionals', show: false},
				{name: 'Kami', speciality: 'Webpack', show: false},
				{name: 'Yoshi', speciality: 'Data Diggin', show: false}
			],
			title: 'Vue Ninjas',
			component: 'comp-one'
		}
	},

	methods: {
		updateTitle(updatedTitle) {
			this.title = updatedTitle
		},

		handleSubmit(event) {
			event.preventDefault()
			console.log('send!!!!!!!')
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
