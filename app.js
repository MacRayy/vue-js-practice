new Vue ({
	el: '#vue-app',

	data: {
		name: 'Berta',
		job: 'Dog',
		insta: 'https://www.instagram.com/explore/tags/foxiberta/',
		instaTag: '<a href="https://www.instagram.com/explore/tags/foxiberta/">FoxiBerta insta</a>'
	},

	methods: {
		greet: function(time) {
			return 'woof ' + time + ' ' + this.name
		}
	}
})
