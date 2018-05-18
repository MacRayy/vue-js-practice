import Vue from 'vue'
import App from './App.vue'

// Register component GLOBALY
// import Jedi from './Jedi.vue'
// Vue.component('jedi', Jedi)

export const eventBus = new Vue()

new Vue({
	el: '#app',
	render: h => h(App)
})
