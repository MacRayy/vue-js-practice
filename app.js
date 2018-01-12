new Vue ({
	el: '#vue-app',

	data: {
		name: 'Berta',
		job: 'Dog',
		insta: 'https://www.instagram.com/explore/tags/foxiberta/',
		instaTag: '<a href="https://www.instagram.com/explore/tags/foxiberta/">FoxiBerta insta</a>',
		age: 1,
		x: 0,
		y: 0,
		inputName: '',
		a: 0,
		b: 0,
		available: false,
		nearby: false
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
		},

		logAlma: function() {
			console.log('alma')
		}
	},

	computed: {
		addToA: function() {
			console.log('auto')
			return this.age + this.a
		},

		addToB: function() {
			console.log('banan')
			return this.age + this.b
		},

		compClasses: function() {
			return {
				available: this.available,
				nearby: this.nearby
			}
		}
	}
})
