new Vue ({
	el: '#vue-app',

	data: {
		name: 'Berta',
		job: 'Dog'
	},

	methods: {
		greet: function(time) {
			return 'woof ' + time + ' ' + this.name
		}
	}
})
