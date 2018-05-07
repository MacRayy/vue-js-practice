<template>
  <div>
    <h2>List of Jedi Knights</h2>
    <ul>
      <li v-for="jedi in jediKnights">{{ jedi }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      jediKnights: ['Yoda', 'Obi-wan Kenobi', 'Mace Windu']
    }
  }
}
</script>

<style scoped lang="scss">
h2 {
  color: skyblue;
}

</style>
