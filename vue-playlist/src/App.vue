<template>
  <div id="app">
    <h1>{{title}}</h1>
    <jedi></jedi>
  </div>
</template>

<script>

//Register component LOCALY
import Jedi from './Jedi.vue'

export default {
  components: {
    'jedi': Jedi
  },

  data () {
    return {
      title: 'Jedi App'
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
