import Vue from 'vue'
import App from './App.vue'

// Register component GLOBALY
// import Jedi from './Jedi.vue'
// Vue.component('jedi', Jedi)

export const eventBus = new Vue()

//custom directives
Vue.directive('rainbow', {
	bind(el, binding, vnode) {
		el.style.color = `#${Math.random().toString().slice(2, 8)}`
	}
})

Vue.directive('theme', {
	bind(el, binding, vnode) {
		if (binding.value === 'wide') {
			el.style.maxWidth = '1200px'
		} else if (binding.value === 'narrow') {
			el.style.maxWidth = '560px'
		}
		if (binding.arg === 'column') {
			el.style.background = '#DDD'
			el.style.padding = '20px'
		}
	}
})

//filters
Vue.filter('to-uppercase', value => value.toUpperCase())

Vue.filter('snippet', value => `${value.slice(0, 100)}...`)

new Vue({
	el: '#app',
	render: h => h(App)
})
