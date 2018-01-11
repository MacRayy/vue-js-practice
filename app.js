new Vue ({
	el: '#vue-app',

	data: {
		name: 'Berta',
		job: 'Dog',
		insta: 'https://www.instagram.com/explore/tags/foxiberta/',
		instaTag: '<a href="https://www.instagram.com/explore/tags/foxiberta/">FoxiBerta insta</a>',
		age: 1,
		x: 0,
		y: 0
	},

	methods: {
		greet: function(time) {
			return 'woof ' + time + ' ' + this.name
		},

		add: function(dec) {
			this.age += dec
		},

		subtract: function(inc) {
			this.age -= inc
		},

		updateXY: function(event) {
			this.x = event.offsetX
			this.y = event.offsetY
		},

		preventer: function() {
			alert('visit prevented')
		}
	}
})
