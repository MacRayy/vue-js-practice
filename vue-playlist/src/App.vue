<template>
  <div id="app">
    <h1>{{title}}</h1>
    <p>{{greeting()}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'first vue file'
    }
  },

  methods: {
    greeting() {
      return 'hello there!'
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
