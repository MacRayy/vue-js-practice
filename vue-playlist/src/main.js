import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
	routes: Routes,
	// mode: 'hash' // it is the default routing mode
	mode: 'history'
})

// Register component GLOBALY
// import Jedi from './Jedi.vue'
// Vue.component('jedi', Jedi)

export const eventBus = new Vue()

//custom directives globally
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

//filters globally
Vue.filter('snippet', value => `${value.slice(0, 100)}...`)

new Vue({
	el: '#app',
	render: h => h(App),
	router: router
})
